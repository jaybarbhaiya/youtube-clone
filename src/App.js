import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import RecommendedVideos from './RecommendedVideos';

function App() {
  return (
    // BEM naming convention
    <div className="app">
      
      <Header />

      <div className="appContent">
        <Sidebar />

        <RecommendedVideos />
      </div>

    </div>
  );
}

export default App;
