import GlobalState from "./Global/GlobalState";
import { Router } from "./Router/Router";

// TODO MUDAR FONTE GERAL
function App() {
  return (
    <GlobalState>
      <Router />
    </GlobalState>
  );
}

export default App;
