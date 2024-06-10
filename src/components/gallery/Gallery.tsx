import { observer } from "mobx-react-lite"
import picturesStore from "../../stores/pictures-store"
import { Picture } from "../picture/Picture"
import styles from './Gallery.module.scss'
import { Loader } from "../loader/Loader";

export const Gallery = observer(() => {
    const {pictures} = picturesStore;
    const ui = pictures.map((picture) => <Picture key={picture.picture} piclink={picture.picture} piclinkfull={picture.pictureFull}/>);
    return (
        <div className={styles.gallery}>
            {pictures.length > 0 ? ui : <Loader/>}
        </div>
    )
});