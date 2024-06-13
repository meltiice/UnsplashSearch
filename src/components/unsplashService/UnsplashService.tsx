import { pictureData } from "../../stores/pictures-store";

export class UnsplashService {
    url = 'https://api.unsplash.com/';
    client_id = 'b674d-0ZnIkd9A7KDl-pLBKUqdmWym4YcUtDPaj9uFA';
    getPhotos : getPhotos = async (query, getPictures, setLoader, removeLoader, startSearching) => {
        if (query) {
            setLoader()
            const result = await this.getRequest(query, 1)
            getPictures(result);
            removeLoader();
            startSearching();
        }
    }

    getMorePhotos : getMorePhotos = async (query, page, getPictures) => {
        if (query) {
            const result = await this.getRequest(query, page)
            getPictures(result);
        }
    }

    getRequest: getRequest = async(query, page) => {
            const result = await fetch(`${this.url}search/photos?page=${page}&client_id=${this.client_id}&query=${query}&per_page=30`)
                        .catch((err) => err)
            if (result.ok) {
                const resJson = await result.json();
                const resArr = resJson.results.map((obj:any) => {
                    return {
                        picture: obj.urls.small,
                        pictureFull: obj.urls.raw,
                        alt_description: obj.alt_description
                    }
                });
                return resArr;
            }
            else {
                return [];
            } 
    }
}

interface getPhotos {
    (query:string, 
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

interface getRequest {
    (query:string,
    page: number, ) : Promise<Array<pictureData>>
}