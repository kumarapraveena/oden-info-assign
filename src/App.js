// import logo from './logo.svg';
// import './App.css';
import SignUp from './SignUp';
import Login from './Login';
import Upload from './Upload';
import {useNavigate} from "react-router-dom"
import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<SignUp/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/upload" element={<Upload/>}></Route>
      </Routes>
      </BrowserRouter>
      
         </div>
  );
}

export default App;
