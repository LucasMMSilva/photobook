import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import UploadImage from './pages/UploadImage/UploadImage';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/upload' element={<UploadImage/>}/>
          </Routes>
        </BrowserRouter>
      </div>
      
    </div>
  );
}

export default App;
