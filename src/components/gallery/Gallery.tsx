import { observer } from "mobx-react-lite"
import styles from './Gallery.module.scss'
import Picture from "../picture/Picture"
import { Loader } from "../loader/Loader";
import { NoResults } from "../noResults/NoResults";
import { UnsplashService } from "../unplashService/UnsplashService";
import { InfiniteScroll } from "../infiniteScroll/InfiniteScroll";
import { ReactElement, useEffect, useState } from "react";
import { useStore } from "../../stores/store";

export const Gallery = observer(() => {
    const service = new UnsplashService();
    const { picturesStore, loadingStore } = useStore();
    //const [pictureComponents, setPictureComponents] = useState <Array<ReactElement>> ([]);
    const loadMoreHandle = () => {
        picturesStore.loadMore();
        service.getPhotos(picturesStore.currentSearch, picturesStore.page+1, picturesStore.getPictures, 
            loadingStore.setLoader, loadingStore.removeLoader, loadingStore.startSearching)
    }
    //console.log(pictureComponents.length, picturesStore.pictures.length)
    /*const picturesInStore = picturesStore.pictures.map((pic, i) => {
        if (i >= pictureComponents.length) {
            return <Picture key={pic.picture}
            piclink={pic.picture} 
            piclinkfull={pic.pictureFull}/>
        }
    }).filter(el => el!==undefined) as ReactElement[];*/
    //useEffect (() => setPictureComponents([...pictureComponents, ...picturesInStore]), []);

    return (
        <ul className={styles.gallery}>
            { loadingStore.loaded ? picturesStore.pictures.map((pic) => {
                return <Picture key={pic.picture}
                piclink={pic.picture} 
                piclinkfull={pic.pictureFull}/>
            })
             : <Loader/>}
            { !loadingStore.start && loadingStore.loaded && picturesStore.pictures.length === 0 ?
              <NoResults/> : null }
            { loadingStore.start ? null : 
              <InfiniteScroll loadMore={loadMoreHandle}/> }
        </ul>
    )
})

/*
picturesStore.pictures.map((pic) => {
                return <Picture key={pic.picture}
                piclink={pic.picture} 
                piclinkfull={pic.pictureFull}/>
            })
*/