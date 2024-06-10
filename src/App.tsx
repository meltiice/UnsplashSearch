import './App.css';
import { Gallery } from './components/gallery/Gallery';
import { SearchBar } from './components/searchBar/SearchBar';
import picturesStore from './stores/pictures-store';
import {injectStores} from '@mobx-devtools/tools';
const store = picturesStore;
injectStores({store})

function App() {
  return (
    <div className="App">
      <SearchBar/>
      <Gallery/>
    </div>
  );
}

export default App;
