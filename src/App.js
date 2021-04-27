import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import RecommendedVideos from './RecommendedVideos';
import SearchPage from './SearchPage';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    // BEM naming convention
    <div className="app">

      <Router>
        <Header />

        <Switch>
          <Route path="/search/:searchTerm">
            <div className="appContent">
              <Sidebar />
              <SearchPage />
            </div>
          </Route>

          <Route path="/">
            <div className="appContent">
              <Sidebar />
              <RecommendedVideos />
            </div>
          </Route>

          
        </Switch>
      </Router>
      
      

    </div>
  );
}

export default App;
