import { useEffect, useRef, useState } from 'react'
import { CloseButton } from '../closeButton/CloseButton'
import styles from './SearchBar.module.scss'
import icon_search from './search.svg'
import { Button } from '../button/Button'
import { UnsplashService } from '../unsplashService/UnsplashService'
import { observer } from 'mobx-react-lite'
import { useStore } from '../../stores/store'

export const SearchBar = observer(() => {
    const service = new UnsplashService();
    const { picturesStore, loadingStore } = useStore();
    const {getPictures, clearStore, setCurrentSearch } = picturesStore;
    const {loaded, setLoader, removeLoader, startSearching} = loadingStore;

    const [classesClose, setClassesClose ] = useState('default');
    const [classesSearchBar, setClassesSearchBar ] = useState('searchbar searchbar--start');
    const [inputValue, setInputValue] = useState('');

    if (!loaded && classesSearchBar!=='searchbar') {
        setClassesSearchBar('searchbar');
    }
    
    const inputFocus = (e:any) => {
        setClassesClose('searchInput');
    }

    const preventScroll = (e:any) => {
        const currentElem = e.target;
        e.stopPropagation();
        currentElem.style.transform = 'TranslateY(-10000px)'
        currentElem.focus();
        setTimeout(function () { currentElem.style.transform = 'none' }, 100);
    }
    const closeInput = () => {
        setInputValue('');
        setCurrentSearch('')
        setClassesClose('default');
    }
    const searchHandle = () => {
        setCurrentSearch(inputValue)
        clearStore();
        service.getPhotos(inputValue, getPictures, setLoader, removeLoader, startSearching);
    }

    const inputElement : any = useRef(null);
    useEffect(() => {
        if (inputElement.current) {
        
        inputElement.current.onfocus = () => {
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        }
    }
    });
    return (
    <div className={classesSearchBar.split(' ').map(el => styles[el]).join(' ')}>
        <div className={styles.input}>
            <img src={icon_search} alt="search icon"/>
            <input type='text'
                ref={inputElement}
                onTouchStart={(e) => preventScroll(e)}
                value={inputValue} 
                id='search_input' 
                onChange={(e) => setInputValue(e.target.value)} 
                onFocus={(e)=>inputFocus(e)}
                placeholder='Телефоны, яблоки, груши'
                onKeyUp={(e) => { if (e.code==='Enter'){searchHandle()}}}/>
            <CloseButton 
                clickFunc={()=>closeInput()}
                classname={classesClose}
                />
        </div>
        <Button onclick={searchHandle}/>
    </div>)
});