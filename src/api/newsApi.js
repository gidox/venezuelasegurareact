import fetch from 'isomorphic-fetch';

const apiUrl = 'http://192.168.0.110:1337/';
const newsApi = {
  async getNews(page, perPage) {
    const response = await fetch(`${apiUrl}api/sucesos/paginas?sort=&page=${page}&per_page=${perPage}`);
    const data = await response.json();
    return data.data;
  },
};

export default newsApi;
