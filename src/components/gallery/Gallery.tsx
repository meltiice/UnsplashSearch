import { observer } from "mobx-react-lite"
import styles from './Gallery.module.scss'
import Picture from "../picture/Picture"
import { Loader } from "../loader/Loader";
import { NoResults } from "../noResults/NoResults";
import { UnsplashService } from "../unsplashService/UnsplashService";
import { InfiniteScroll } from "../infiniteScroll/InfiniteScroll";
import { useStore } from "../../stores/store";

export const Gallery = observer(() => {
    const service = new UnsplashService();
    const { picturesStore, loadingStore } = useStore();
    const loadMoreHandle = () => {
        picturesStore.loadMore();
        service.getMorePhotos(picturesStore.currentSearch, picturesStore.page+1, picturesStore.getPictures, 
)
    }
    return (
        <ul className={styles.gallery}>
            { loadingStore.loaded ? picturesStore.pictures.map((pic) => {
                return <Picture key={pic.picture}
                picLink={pic.picture} 
                picLinkfull={pic.pictureFull}
                alt_description={pic.alt_description}/>
            })
             : <Loader/>}
            { !loadingStore.start && loadingStore.loaded && picturesStore.pictures.length === 0 ?
              <NoResults/> : null }
            { loadingStore.start ? null : 
              <InfiniteScroll loadMore={loadMoreHandle}/> }
        </ul>
    )
})