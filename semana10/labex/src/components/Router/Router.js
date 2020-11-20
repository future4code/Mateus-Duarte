import { Home } from '../BigContainers/Home/Home';
import { ViagensPage } from '../BigContainers/ViagensPage/ViagensPage';
import { PaginaInscricao } from '../BigContainers/PaginaInscricao/PaginaInscricao';
import { LoginPage } from '../BigContainers/LoginPage/LoginPage';
import { CadastroPage } from '../BigContainers/CadastroPage/CadastroPage';
import { PainelDeControle } from '../BigContainers/PainelDeControle/PainelDeControle';
import { CandidatosViagemPage } from '../BigContainers/CandidatosViagemPage/CandidatosViagemPage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

export function Router() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/viagens">
            <ViagensPage />
          </Route>
          <Route exact path="/inscricao/:id/:name">
            <PaginaInscricao />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/cadastro">
            <CadastroPage />
          </Route>
          <Route exact path="/painel-de-controle">
            <PainelDeControle />
          </Route>
          <Route exact path="/candidatos/:id">
            <CandidatosViagemPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
