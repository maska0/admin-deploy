import AppRouter from "./components/AppRouter";
import Sidebar from "./components/Sidevar";
import "./assets/css/style.css";


function App() {

  return (
    <>
      <div class="wrapper">
        <Sidebar/>
        <div class="content">
          <AppRouter/>
        </div>
      </div>
    </>
  );
}

export default App
