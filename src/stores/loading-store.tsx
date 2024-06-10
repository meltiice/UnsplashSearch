import { makeAutoObservable } from "mobx";
class LoadingStore {
    loaded: boolean = true;
    start: boolean = true;

    constructor() {
        makeAutoObservable(this);
    }

    setLoader = () => {
        this.loaded = false;
    }

    removeLoader = () => {
        this.loaded = true;
    }

    startSearching = () => {
        this.start = false;
    }

}

export default new LoadingStore();