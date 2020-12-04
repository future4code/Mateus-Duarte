import { useState } from "react";
import axios from "axios";
import GlobalStateContext from "./GlobalStateContext";
import { useHistory } from "react-router-dom";
import { goToFeed } from "../Router/Coordinator";

const GlobalState = (props) => {
  const [posts, setPosts] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [postDetail, setPostDetail] = useState([]);
  const [comments, setComments] = useState([]);

  const token = localStorage.getItem("token");
  const url = "https://us-central1-labenu-apis.cloudfunctions.net/labEddit/";
  const headers = {
    headers: {
      Authorization: token,
    },
  };
  const onSubmitForm = (event) => {
    event.preventDefault();
  };
  const signup = () => {
    const body = {
      email: email,
      password: password,
      username: username,
    };
    axios
      .post(`${url}signup`, body)
      .then((resposta) => {
        console.log(resposta.data);
        alert("CADASTRO FEITO COM SUCESSO!");
      })
      .catch((err) => {
        console.log(err.message);
      });
    setEmail("");
    setPassword("");
    setUsername("");
  };

  const login = (history) => {
    const body = {
      email: email,
      password: password,
    };
    axios
      .post(`${url}login`, body)
      .then((resposta) => {
        console.log(resposta.data);
        alert("LOGIN FEITO COM SUCESSO!");
        localStorage.setItem("token", resposta.data.token);
      })
      .catch((err) => {
        console.log(err.message);
      });

    const token = localStorage.getItem("token");
    if (token) {
      setTimeout(function () {
        history.push("/feed");
      }, 3000);
    }
  };
  const getPosts = () => {
    axios
      .get(`${url}posts`, headers)
      .then((resposta) => {
        setPosts(resposta.data.posts);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const checkAuthorization = (history) => {
    const token = localStorage.getItem("token");
    if (token === null) {
      history.push("/");
    }
  };

  const goToFeediIfAuthorized = (history) => {
    const token = localStorage.getItem("token");
    if (token) {
      history.push("/feed");
    }
  };

  const createPost = () => {
    const body = {
      text: text,
      title: title,
    };
    axios
      .post(`${url}posts`, body, headers)
      .then((resposta) => {
        console.log(resposta.data);
        alert("POST CRIADO COM SUCESSO");
      })
      .catch((err) => {
        console.log(err.message);
      });
    setText("");
    setTitle("");
  };
  const getPostDetail = (postId) => {
    axios
      .get(`${url}posts/${postId}`, headers)
      .then((resposta) => {
        setPostDetail(resposta.data.post);
        setComments(resposta.data.post.comments);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const createComment = (postId) => {
    const body = {
      text: text,
    };
    axios
      .post(`${url}posts/${postId}/comment`, body, headers)
      .then((resposta) => {
        console.log(resposta.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
    setText("");
  };

  const timePassed = (createdAt) => {
    const now = new Date().getTime();
    const milisseconds = now - createdAt;
    const minutes = milisseconds * 1.6667e-5;
    const hours = Math.floor(milisseconds / (1000 * 60 * 60));
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);

    if (minutes < 1) {
      return `menos de um minuto atrás`;
    } else if (hours < 1) {
      return `${Math.ceil(minutes)} minutos atrás`;
    } else if (hours === 1) {
      return `${hours} horas atrás`;
    } else if (hours < 24) {
      return `${hours} horas atrás`;
    } else if (days === 1) {
      return `${days} dia atrás`;
    } else if (days < 30) {
      return `${days} dias atrás`;
    } else if (months === 1) {
      return `${months} mês atrás`;
    } else if (months > 1) {
      return `${months} meses atrás`;
    }
  };

  const vote = (postId, vote) => {
    const body = {
      direction: vote,
    };
    axios
      .put(`${url}posts/${postId}/vote`, body, headers)
      .then((resposta) => {
        console.log(resposta.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const voteComment = (postId, commentId, vote) => {
    const body = {
      direction: vote,
    };
    axios
      .put(`${url}posts/${postId}/comment/${commentId}/vote`, body, headers)
      .then((resposta) => {
        console.log("deu certo", resposta.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const states = {
    posts,
    email,
    password,
    username,
    text,
    title,
    postDetail,
    comments,
  };
  const setters = {
    setPosts,
    setEmail,
    setPassword,
    setUsername,
    setText,
    setTitle,
    setPostDetail,
    setComments,
  };
  const requests = {
    getPosts,
    signup,
    login,
    createPost,
    getPostDetail,
    createComment,
    voteComment,
    vote,
  };
  const functions = {
    onSubmitForm,
    checkAuthorization,
    goToFeediIfAuthorized,
    timePassed,
  };

  const data = { states, setters, requests, functions };
  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
