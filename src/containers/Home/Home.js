import React, { Component } from 'react';

import NewsCard from 'components/NewsCard/NewsCard';
import newsApi from 'api/newsApi';
import MapPoly from 'components/MapPoly/MapPoly';
import Loader from 'components/Loader/Loader';
import 'containers/Home/Home.css';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '50vw',
  },
};

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      news: [],
      loading: true,
      poly: {},
    };
    this.handleScroll = this.handleScroll.bind(this);
  }
  async componentDidMount() {
    this.initialFetch();
    console.log(this.state);
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  // eslint-disable-next-line consistent-return
  async initialFetch() {
    if (!this.state.news) return this.setState({ loading: false });
    const news = await newsApi.getNews(this.state.page, 10);
    // const poly = await newsApi.getPoly();
    this.setState({
      news,
      page: this.state.page + 1,
      loading: false,
      // poly,
    });
  }
  handleScroll() {
    if (this.state.loading) return null;

    const scrolled = window.scrollY;
    const viewportHeight = window.innerHeight;
    const fullHeight = document.body.clientHeight;

    if (!(scrolled + viewportHeight + 300 >= fullHeight)) {
      return null;
    }

    return this.setState({ loading: true }, async () => {
      try {
        const news = await newsApi.getNews(this.state.page, 10);

        this.setState({
          news: this.state.news.concat(news),
          page: this.state.page + 1,
          loading: false,
        });
      } catch (error) {
        this.setState({ loading: false });
      }
    });
  }
  render() {
    return (
      <div className="main">
        <div className="cardholder">
          <MapPoly />

        </div>
        <div className="cardscontent">
          <div style={styles.root}>
            {this.state.news.map(news =>
              (<NewsCard
                key={news.suceso_id.toString()}
                id={news.suceso_id}
                title={news.titulo}
                date={news.fecha_suceso}
                victim={news.nombre_victima}
                link={news.fuente}
                description={news.resena}
              />))}
          </div>
          {this.state.loading && (
          <Loader />
          )}
        </div>

      </div>
    );
  }
}
export default Home;
