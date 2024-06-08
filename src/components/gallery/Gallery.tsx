import { Picture } from "../picture/Picture"
import styles from './Gallery.module.scss'

export const Gallery = () => {
    return (
        <div className={styles.gallery}>
            <Picture/>
            <Picture/>
            <Picture/>
            <Picture/>
            <Picture/>
            <Picture/>
            <Picture/>
            <Picture/>
            <Picture/>
            <Picture/>
        </div>
    )
}