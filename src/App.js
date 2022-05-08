import './App.css';
import Footer from './components/footer';
import QPInputPanel from './components/qpInputPanel';
import ResponsiveAppBar from './components/navbar';
import { DataProvider } from './components/dataProvider';
import background from './images/bg-question.webp'
import { useContext } from "react";
import Basic from './components/SampleFormik';
import modaal from './components/modal';
// import MyModal from './components/myModal';
import BasicModal from './components/myModal';
import AdminUI from './components/admin/AdminUI';

function App() {
  return (
    <div className="App"
      style={{
        backgroundImage: `url(${background})`
      }}
    >
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
