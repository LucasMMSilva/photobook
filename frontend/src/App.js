import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './Components/layout/Navbar/Navbar';
import Footer from './Components/layout/Footer/Footer';
import MainContainer from './Components/layout/MainContainer/MainContainer';
import ImageView from './Components/props/ImageView/ImageView';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        
        <MainContainer>
          <Routes>
            <Route path='/' element={<div>oi</div>}/>
            <Route path='/:id' element={<ImageView/>}/>
          </Routes>
        </MainContainer>
        
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
