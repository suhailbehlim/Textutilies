
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  return (
  <>
   <Navbar title="TextUtils"/>
   <div className="container my-3">
   <Textform heading="Express your emotions as text in the box given below.."/>
   <About/>
   </div>
   
  </>
  );
}

export default App;
