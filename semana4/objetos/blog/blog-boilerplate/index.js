
let listaPosts = []

identificarImagem = () => {
    let imagemPost = document.getElementById("imagem-post")
    if (imagemPost.value.includes(".png") || imagemPost.value.includes(".jpg")|| imagemPost.value.includes(".gif")){
        return imagemPost.value
    } else {
        return alert('Link incorreto! Insira imagem válida')
    }
}

criaPost = () => {
    let tituloPost = document.getElementById("titulo-post")
    let autorPost = document.getElementById("autor-post")
    let conteudoPost = document.getElementById("conteudo-post")
    let imagemPost = document.getElementById("imagem-post").value

    let containerDePosts = document.getElementById("container-de-posts")
    const post = {
        titulo: `${tituloPost.value}`,
        autor: `${autorPost.value}`,
        conteudo: `${conteudoPost.value}`,
        imagem: `${identificarImagem()}`
    }
    listaPosts.push(post)
    tituloPost.value = ""
    autorPost.value = ""
    conteudoPost.value = "" 
    imagemPost.value = ""
    console.log(listaPosts)
    // containerDePosts.innerHTML = listaPosts.map(item => {
    //     const post = `<div class="posts"><h1>${item.titulo}</h1><h4>${item.autor}</h4><p>${item.conteudo}</p></div>` 
    //     return post
    // })
    
    containerDePosts.innerHTML += `<br><br><br><div class="posts"><h1>${post.titulo}</h1><h4>${post.autor}</h4><p>${post.conteudo}</p><img src="${post.imagem}"></div><br>` 

}

