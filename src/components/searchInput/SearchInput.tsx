import { useState } from 'react'
import { CloseButton } from '../closeButton/CloseButton'
import styles from './SearchInput.module.scss'
import icon_search from './search.svg'
export const SearchInput = () => {
    let [classesClose, setClassesClose ] = useState('default')
    const inputFocus = () => {
        setClassesClose('visible');
    }
    const inputUnfocus = () => {
        console.log(5)
    }
    const closeInput = (e:any) => {
        setClassesClose('default');
    }
    return (
    <div className={styles.input}>
        <img src={icon_search} alt="#"/>
        <input type='text' id='search_input' onFocus={inputFocus} onBlur={inputUnfocus} placeholder='Телефоны, яблоки, груши'/>
        <CloseButton clickFunc={(e)=>closeInput(e)}
        classname={classesClose}
        />
    </div>)
}