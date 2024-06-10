import { useState } from 'react'
import { CloseButton } from '../closeButton/CloseButton'
import styles from './SearchBar.module.scss'
import icon_search from './search.svg'
import { Button } from '../button/Button'
import { UnsplashService } from '../unplashService/UnsplashService'
import picturesStore from '../../stores/pictures-store'
import { observer } from 'mobx-react-lite'

export const SearchBar = observer(() => {
    const service = new UnsplashService();
    const { pictures, getPictures, clearStore } = picturesStore;
    let [classesClose, setClassesClose ] = useState('default');
    const [inputValue, setInputValue] = useState('');
    const inputFocus = () => {
        setClassesClose('visible');
    }
    const closeInput = (e:any) => {
        setInputValue('');
        setClassesClose('default');
    }
    const searchHandle = () => {
        clearStore();
        service.getPhotos(inputValue, getPictures);
    }
    return (
    <div className={styles.searchbar}>
        <div className={styles.input}>
            <img src={icon_search} alt="#"/>
            <input type='text' 
                value={inputValue} 
                id='search_input' 
                onChange={(e) => setInputValue(e.target.value)} 
                onFocus={inputFocus} 
                placeholder='Телефоны, яблоки, груши'/>
            <CloseButton clickFunc={(e)=>closeInput(e)}
            classname={classesClose}
            />
        </div>
        <Button onclick={searchHandle}/>
    </div>)
});