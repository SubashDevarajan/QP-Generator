import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './sideBar';
import SubjectInfo from './components/getSubjectInfo';
// import 
// import { ProSidebar } from 'react-pro-sidebar';

function App() {
  return (
    <div className="App">
      {/* <ResponsiveAppBar></ResponsiveAppBar> */}
      <div>
      <SubjectInfo />
      </div>
    </div>
  );
}

export default App;
