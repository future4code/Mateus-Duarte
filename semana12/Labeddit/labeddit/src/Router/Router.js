import { Switch, Route, BrowserRouter } from "react-router-dom";
import { FeedPage } from "../Pages/Feed/Feed";
import { Home } from "../Pages/Home/Home";
import { LoginPage } from "../Pages/LoginPage/LoginPage";
import { PostPage } from "../Pages/PostPage/PostPage";
import { SignInPage } from "../Pages/SigninPage/SignInPage";

export function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/signin">
          <SignInPage />
        </Route>
        <Route exact path="/feed">
          <FeedPage />
        </Route>
        <Route exact path="/post/:id">
          <PostPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
