import './App.css';
import Sidebar from "./Sidebar";
import Feed from "./Feed"
import { Widgets } from '@material-ui/icons';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Feed />
      <Widgets />
    </div>
  );
}

export default App;
