import './App.css';
import Footer from './components/footer';
import QPInputPanel from './components/qpInputPanel';
import ResponsiveAppBar from './components/navbar';
import { DataProvider } from './components/dataProvider';
import { useContext } from "react";

function App() {
  return (
    <div className="App">
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
