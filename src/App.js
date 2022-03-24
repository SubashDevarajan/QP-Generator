import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './sideBar';
import SubjectInfo from './components/getSubjectInfo';
import Footer from './components/footer';
import QPInputPanel from './components/qpInputPanel';
// import 
// import { ProSidebar } from 'react-pro-sidebar';

function App() {
  return (
    <div className="App">
      {/* <ResponsiveAppBar></ResponsiveAppBar> */}
      <div>
      <QPInputPanel />
      </div>
      <div class="fixed-bottom">
      <Footer />
      </div>
      
    </div>
  );
}

export default App;
