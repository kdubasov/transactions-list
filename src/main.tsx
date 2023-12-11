import ReactDOM from 'react-dom/client'
import Router from "./app/Router.tsx";
import Providers from "./app/Providers.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Providers>
     <Router />
  </Providers>
)
