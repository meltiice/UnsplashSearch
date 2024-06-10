import { observer } from "mobx-react-lite"
import picturesStore from "../../stores/pictures-store"
import { Picture } from "../picture/Picture"
import styles from './Gallery.module.scss'
import { Loader } from "../loader/Loader";
import loadingStore from "../../stores/loading-store";
import { NoResults } from "../noResults/NoResults";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { UnsplashService } from "../unplashService/UnsplashService";
import { InfiniteScroll } from "../infiniteScroll/InfiniteScroll";

export const Gallery = observer(() => {
    const service = new UnsplashService();
    const {pictures, currentSearch, page, loadMore, getPictures} = picturesStore;
    const {loaded, start, setLoader, removeLoader, startSearching} = loadingStore;
    const loadMoreHandle = () => {
        loadMore();
        service.getPhotos(currentSearch, page+1, getPictures, setLoader, removeLoader, startSearching)
    }
    return (
        <div className={styles.gallery}>
            {loaded ? 
            pictures.map((picture) => 
               <Picture key={picture.picture} 
                        piclink={picture.picture} 
                        piclinkfull={picture.pictureFull}/>)
             : <Loader/>}
            {
                !start && loaded && pictures.length === 0 ?
                <NoResults/> : null
            }
            {start ? null : <InfiniteScroll loadMore={loadMoreHandle}/>}
        </div>
    )
});