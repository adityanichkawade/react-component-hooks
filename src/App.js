import { NavRouter } from "./components/molecules";
import { Routes, config as routesConfig } from "./routes";

const App = () => (
  <>
    <header role="banner" className="hks_appHeader">
      <h1>Resuable hooks and their applications</h1>
    </header>
    <aside className="hks_appNav">
      <NavRouter items={routesConfig} />
    </aside>
    <main role="main" className="hks_appMain">
      <Routes items={routesConfig}></Routes>
    </main>
  </>
);

export default App;
