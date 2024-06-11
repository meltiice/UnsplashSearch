import { makeAutoObservable } from "mobx";

export interface pictureData {
    picture: string,
    pictureFull: string,
    alt_description: string,
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
    }

    clearStore = () => {
        this.pictures = [];
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