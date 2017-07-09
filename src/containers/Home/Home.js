import React, { Component } from 'react';

import NewsCard from 'components/NewsCard/NewsCard';
import newsApi from 'api/newsApi';
import 'containers/Home/Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      news: [],
      loading: true,
    };
    this.handleScroll = this.handleScroll.bind(this);
  }
  async componentDidMount() {
    this.initialFetch();
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  async initialFetch() {
    const news = await newsApi.getNews(this.state.page, 10);

    this.setState({
      news,
      page: this.state.page + 1,
      loading: false,
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
        console.error(error);
        this.setState({ loading: false });
      }
    });
  }
  render() {
    return (
      <div className="cardholder">
        {this.state.news.map(news =>
          (<NewsCard
            id={news.suceso_id}
            title={news.titulo}
            date={news.fecha_suceso}
            victim={news.nombre_victima}
            link={news.fuente}
          />))}
      </div>
    );
  }
}
export default Home;
