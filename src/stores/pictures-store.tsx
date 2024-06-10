import { makeAutoObservable } from "mobx";
interface pictureData {
    picture: string,
    pictureFull: string
}
class PicturesStore {
    pictures : Array<pictureData> = [];
    page : number = 1;
    currentSearch = '';

    constructor() {
        makeAutoObservable(this);
    }

    getPictures = (pictureUrls : Array<pictureData>) => {
        this.pictures.push(...pictureUrls);
        console.log('get pictures ', this.pictures)
    }

    clearStore = () => {
        this.pictures = [];
        console.log('clear store')
        this.page = 1;
    }

    setCurrentSearch = (inputSearch : string) => {
        this.currentSearch = inputSearch;
    }

    loadMore = () => {
        this.page++
    }

}

export default new PicturesStore();