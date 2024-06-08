import { Button } from "../button/Button"
import { SearchInput } from "../searchInput/SearchInput"
import styles from './SearchBar.module.scss'

export const SearchBar = () => {
    return <div className={styles.searchbar}>
        <SearchInput/>
        <Button/>
    </div>
}