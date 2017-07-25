import fetch from 'isomorphic-fetch';

const apiUrl = 'http://34.229.201.249:1337/';
const newsApi = {
  async getNews(page, perPage) {
    const response = await fetch(`${apiUrl}api/sucesos/paginas?sort=&page=${page}&per_page=${perPage}`);
    const data = await response.json();
    return data.data;
  },
  // async getPoly() {
  //   const aux = {
  //     municipio: 1,
  //     coordinates: [
  //       {
  //         lat: -62.7209473,
  //         lon: 8.3451801,
  //       },
  //       {
  //         lat: -62.7209473,
  //         lon: 8.3451801,
  //       },
  //       {
  //         lat: -62.7688408,
  //         lon: 8.3339703,
  //       },
  //       {
  //         lat: -62.7688408,
  //         lon: 8.3339703,
  //       },
  //       {
  //         lat: -62.7470398,
  //         lon: 8.2904866,
  //       },
  //       {
  //         lat: -62.7456665,
  //         lon: 8.293799,
  //       },
  //       {
  //         lat: -62.7365685,
  //         lon: 8.2984703,
  //       },
  //       {
  //         lat: -62.7317619,
  //         lon: 8.3011881,
  //       },
  //       {
  //         lat: -62.7317619,
  //         lon: 8.3011881,
  //       },
  //       {
  //         lat: -62.7220631,
  //         lon: 8.2978758,
  //       },
  //       {
  //         lat: -62.7062702,
  //         lon: 8.3035662,
  //       },
  //       {
  //         lat: -62.7006054,
  //         lon: 8.3044155,
  //       },
  //       {
  //         lat: -62.6945972,
  //         lon: 8.3091716,
  //       },
  //       {
  //         lat: -62.68507,
  //         lon: 8.3160508,
  //       },
  //       {
  //         lat: -62.6849842,
  //         lon: 8.3161358,
  //       },
  //       {
  //         lat: -62.6838684,
  //         lon: 8.3184288,
  //       },
  //       {
  //         lat: -62.6838684,
  //         lon: 8.3184288,
  //       },
  //       {
  //         lat: -62.6843834,
  //         lon: 8.3194479,
  //       },
  //       {
  //         lat: -62.6872158,
  //         lon: 8.3211465,
  //       },
  //       {
  //         lat: -62.7061844,
  //         lon: 8.3197877,
  //       },
  //       {
  //         lat: -62.717514,
  //         lon: 8.3290446,
  //       },
  //       {
  //         lat: -62.7178144,
  //         lon: 8.330361,
  //       },
  //       {
  //         lat: -62.717042,
  //         lon: 8.3320595,
  //       },
  //       {
  //         lat: -62.7127075,
  //         lon: 8.3373672,
  //       },
  //       {
  //         lat: -62.7209044,
  //         lon: 8.3451377,
  //       },
  //     ],
  //   };
  //   const data = await aux.json();

  //   return data;
  // },
};


export default newsApi;
