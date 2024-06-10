import { useState } from 'react'
import { CloseButton } from '../closeButton/CloseButton'
import styles from './SearchBar.module.scss'
import icon_search from './search.svg'
import { Button } from '../button/Button'
import { UnsplashService } from '../unplashService/UnsplashService'
import picturesStore from '../../stores/pictures-store'
import { observer } from 'mobx-react-lite'
import loadingStore from '../../stores/loading-store'

export const SearchBar = observer(() => {
    const service = new UnsplashService();
    const { loaded, setLoader, removeLoader, startSearching} = loadingStore;
    const { getPictures, clearStore, setCurrentSearch } = picturesStore;
    const [classesClose, setClassesClose ] = useState('default');
    const [classesSearchBar, setClassesSearchBar ] = useState('searchbar searchbar--start');
    const [inputValue, setInputValue] = useState('');
    if (!loaded && classesSearchBar!=='searchbar') {
        setClassesSearchBar('searchbar');
    }

    const inputFocus = () => {
        setClassesClose('visible');
    }
    const closeInput = (e:any) => {
        setInputValue('');
        setCurrentSearch('')
        setClassesClose('default');
    }
    const searchHandle = () => {
        setCurrentSearch(inputValue)
        clearStore();
        service.getPhotos(inputValue, 1, getPictures, setLoader, removeLoader, startSearching);
    }
    return (
    <div className={classesSearchBar.split(' ').map(el => styles[el]).join(' ')}>
        <div className={styles.input}>
            <img src={icon_search} alt="#"/>
            <input type='text' 
                value={inputValue} 
                id='search_input' 
                onChange={(e) => setInputValue(e.target.value)} 
                onFocus={inputFocus} 
                placeholder='Телефоны, яблоки, груши'
                onKeyUp={(e) => { if (e.code==='Enter'){searchHandle()}}}/>
            <CloseButton 
                clickFunc={(e)=>closeInput(e)}
                classname={classesClose}
                />
        </div>
        <Button onclick={searchHandle}/>
    </div>)
});