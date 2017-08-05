import React, { Component } from 'react';


import newsApi from 'api/newsApi';
import MapPoly from 'components/MapPoly/MapPoly';
import Loader from 'components/Loader/Loader';
import TabsMenu from 'components/TabsMenu/TabsMenu';
import 'containers/Home/Home.css';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '50vw',
  },
  floatButton: {
    marginRight: 20,
    position: 'fixed',
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
            <TabsMenu news={this.state.news} />

          </div>
          <FloatingActionButton secondary style={styles.floatButton}>
            <ContentAdd />
          </FloatingActionButton>
          {this.state.loading && (
          <Loader />
          )}
        </div>

      </div>
    );
  }
}
export default Home;
