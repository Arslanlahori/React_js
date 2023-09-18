import './App.css';
import AboutUS from './components/AboutUS';
import Navbar from './components/Navbar';
// import Textbox from './components/Textbox';
// import Footer from './components/Footer';


function App() {
  return (
    <>
      <Navbar tittle="TextConverter" about="About us" />

      {/* <div className="container my-4">
        <Textbox heading="Enter the text below " />
        <br /><br /><br />
      </div> */}
      <div className="container my-4">

        <AboutUS />
      </div>


      {/* <div className="footer my-8">

        <Footer />
      </div> */}


    </>
  );
}

export default App;
