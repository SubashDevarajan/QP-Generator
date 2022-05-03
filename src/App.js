import './App.css';
import Footer from './components/footer';
import QPInputPanel from './components/qpInputPanel';
import ResponsiveAppBar from './components/navbar';
import { DataProvider } from './components/dataProvider';
import background from './images/bg-question.webp'
import { useContext } from "react";
import Basic from './components/SampleFormik';
import modaal from './components/modal';

function App() {
  return (
    <div className="App" 
    style={{ 
      backgroundImage: `url(${background})` 
    }}
    >
      {/* <modaal></modaal> */}
      {/* <Basic /> */}
      <DataProvider>
      <ResponsiveAppBar></ResponsiveAppBar>
      <div>
      <QPInputPanel />
      </div>
      <div class="fixed-bottom">
      <Footer />
      </div>
      </DataProvider>
      
    </div>
  );
}

export default App;
