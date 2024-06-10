interface pictureData {
    picture: string,
    pictureFull: string
}

export class UnsplashService {
    url = 'https://api.unsplash.com/';
    getPhotos : getPhotos = async (query, page, getPictures, setLoader, removeLoader, startSearching) => {
        if (query) {
            setLoader()
            console.log(`${this.url}search/photos?page=${page}&client_id=b674d-0ZnIkd9A7KDl-pLBKUqdmWym4YcUtDPaj9uFA&query=${query}`)
            const result = await fetch(`${this.url}search/photos?page=${page}&client_id=b674d-0ZnIkd9A7KDl-pLBKUqdmWym4YcUtDPaj9uFA&query=${query}`)
                        .catch((err) => err)
            const res1 = await result.json();
            if (res1) {
                console.log(res1)
                const res2 = res1.results.map((obj:any) => {
                    return {
                        picture: obj.urls.small,
                        pictureFull: obj.urls.raw
                    }
                });
                getPictures(res2);
            }
            removeLoader();
            startSearching();
        }
    }

    getMorePhotos : getMorePhotos = async (query, page, getPictures) => {
        if (query) {
            console.log(`${this.url}search/photos?page=${page}&client_id=b674d-0ZnIkd9A7KDl-pLBKUqdmWym4YcUtDPaj9uFA&query=${query}`)
            const result = await fetch(`${this.url}search/photos?page=${page}&client_id=b674d-0ZnIkd9A7KDl-pLBKUqdmWym4YcUtDPaj9uFA&query=${query}`)
                        .catch((err) => err)
            const res1 = await result.json();
            if (res1) {
                console.log(res1)
                const res2 = res1.results.map((obj:any) => {
                    return {
                        picture: obj.urls.small,
                        pictureFull: obj.urls.raw
                    }
                });
                getPictures(res2);
            }
        }
    }
}

interface getPhotos {
    (query:string,
    page: number, 
    getPictures:(pictures:Array<pictureData>) => void,
    setLoader: () => void,
    removeLoader: () => void,
    startSearching: () => void) : void
}

interface getMorePhotos {
    (query:string,
    page: number, 
    getPictures:(pictures:Array<pictureData>) => void,) : void
}