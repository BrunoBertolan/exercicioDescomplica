import Header from "./components/header";
import ListarTarefa from "./pages/tarefa/ListarTarefa";
import Login from "./pages/Login";
import EditarTarefa from "./pages/tarefa/EditarTarefa";

function App() {
  return (
    <div className="App">
      <Header />
      <ListarTarefa />
      <Login />
    </div>
  );
}

export default App;
