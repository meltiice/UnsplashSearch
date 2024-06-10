import { makeAutoObservable } from "mobx";
interface pictureData {
    picture: string,
    pictureFull: string
}
class PicturesStore {
    pictures : Array<pictureData> = [];

    constructor() {
        makeAutoObservable(this);
    }

    getPictures = (pictureUrls : Array<pictureData>) => {
        this.pictures.push(...pictureUrls);
    }

    clearStore = () => {
        this.pictures = [];
    }

}

export default new PicturesStore();