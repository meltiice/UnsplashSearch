import { useState } from 'react'
import { CloseButton } from '../closeButton/CloseButton'
import styles from './SearchInput.module.scss'
import icon_search from './search.svg'
export const SearchInput = () => {
    let [classesClose, setClassesClose ] = useState('default');
    const [inputValue, setInputValue] = useState('');
    const inputFocus = () => {
        setClassesClose('visible');
    }
    const closeInput = (e:any) => {
        setInputValue('');
        setClassesClose('default');
    }
    return (
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
    </div>)
}