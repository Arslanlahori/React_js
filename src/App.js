import './App.css';
import Navbar from './components/Navbar';
import Textbox from './components/Textbox';

function App() {
  return (
    <>
      <Navbar tittle="TextConverter" about="About us" />

      <div className="container my-4">
        <Textbox heading="Enter the text below " />
      </div>


    </>
  );
}

export default App;
