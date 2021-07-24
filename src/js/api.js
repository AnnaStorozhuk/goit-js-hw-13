const API_KEY = '20689787-83a4953ee3875a5823ca1478f' 
const BASE_URL =  'https://pixabay.com/api/'



export default class ImagesFinderApiService {
  constructor(_params) {
    this.searchQuery = '';
    this.page = 1;
  }
  async fetchArticles() {
    const url = `${BASE_URL}?key=${API_KEY}image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&`;
    const response = await fetch(url);
    const imagesLists = await response.json();
    this.incrementPage();
    return imagesLists;
  }

  incrementPage() {
    this.page += 1;
  }
  resetPage() {
    this.page = 1;
  }
  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}