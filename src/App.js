import './App.css';
import AboutUS from './components/AboutUS';
import Navbar from './components/Navbar';
import Textbox from './components/Textbox';
import Footer from './components/Footer';
import {
  Route, Routes
} from "react-router-dom";


function App() {

  return (
    <>
      <Navbar tittle="TextAnalyzer" about="About" />
      <Routes>
        <Route path='/' element={<div className="container"><Textbox heading="Here you can write" /></div>} />
        <Route path='/About' element={<div className="container"><AboutUS /></div>} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;
