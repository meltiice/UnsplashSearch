import './App.css';
import { Gallery } from './components/gallery/Gallery';
import { SearchBar } from './components/searchBar/SearchBar';

function App() {
  return (
    <div className="App">
      <SearchBar/>
      <Gallery/>
    </div>
  );
}

export default App;
