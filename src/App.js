import { NavRouter } from "./components/molecules";
import Routes from "./routes";
import routesConfig from "./routesConfig";

const App = () => (
  <>
    <header className="appHeader">
      <h1>Resuable hooks and their applications</h1>
    </header>
    <aside className="appNav">
      <NavRouter items={routesConfig} />
    </aside>
    <main className="appMain">
      <Routes items={routesConfig}></Routes>
    </main>
  </>
);

export default App;
