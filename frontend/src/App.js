import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import ImageUpload from './pages/ImageUpload/ImageUpload';
import ImageView from './components/ImageView/ImageView';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/upload' element={<ImageUpload/>}/>
            <Route path='/image/:id' element={<ImageView/>}/>
          </Routes>
        </BrowserRouter>
      </div>
      
    </div>
  );
}

export default App;
