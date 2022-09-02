import { BrowserRouter,Routes,Route} from "react-router-dom";
import Sidebarmodel from './components/Sidebar';
import Errorlog from './pages/error-log';
import Home from './pages/home';  






function App() {
  return (
  <>
  <BrowserRouter>
  < Sidebarmodel />

  <Routes>
    <Route exact path='/' element={<Home />}></Route>
    <Route path='/errorlog' element={< Errorlog />} ></Route>
</Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
