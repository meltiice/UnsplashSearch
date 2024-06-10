interface pictureData {
    picture: string,
    pictureFull: string
}

export class UnsplashService {
    url = 'https://api.unsplash.com/';
    //const { pictures, getPictures, clearStore } = picturesStore;
    async getPhotos(query:string, getPictures:(pictures:Array<pictureData>) => void) {
        const result = await fetch(`${this.url}search/photos?client_id=b674d-0ZnIkd9A7KDl-pLBKUqdmWym4YcUtDPaj9uFA&query=${query}`)
                       .catch((err) => err)
        const res1 = await result.json();
        const res2 = res1.results.map((obj:any) => {
            return {
                picture: obj.urls.small,
                pictureFull: obj.urls.raw
        }});
        getPictures(res2)
    }
}