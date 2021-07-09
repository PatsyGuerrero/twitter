import './App.css';
import Sidebar from '../src/Components/Sidebar/Sidebar';
import Feed from '../src/Components/Feed/Feed';
import Widgets from '../src/Components/Widgets/Widgets';



function App() {
  return (
    <div className="app">
    
     <Sidebar/>
     <Feed/>
     <Widgets/>
    </div>
  );
}

export default App;
