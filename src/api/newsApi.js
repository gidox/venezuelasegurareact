import fetch from 'isomorphic-fetch';

const apiUrl = 'http://34.229.201.249:1337/';
const newsApi = {
  async getNews(page, perPage) {
    const response = await fetch(`${apiUrl}api/sucesos/paginas?sort=&page=${page}&per_page=${perPage}`);
    const data = await response.json();
    return data.data;
  },
  async getNew(id) {
    const response = await fetch(`${apiUrl}api/sucesos/find/${id}`);
    const data = await response.json();
    return data;
  },
  async getDelitos() {
    const response = await fetch(`${apiUrl}api/delitos/`);
    const data = await response.json();
    return data;
  },
};


export default newsApi;
