import React, { Component } from 'react';

import NewsCard from 'components/NewsCard/NewsCard';
import newsApi from 'api/newsApi';
import 'containers/Home/Home.css';

import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import withScriptjs from 'react-google-maps/lib/async/withScriptjs';
import FaSpinner from 'react-icons/lib/fa/spinner';
import noop from 'lodash/noop';
// Wrap all `react-google-maps` components with `withGoogleMap` HOC
// and name it GettingStartedGoogleMap
const aux =
  [
    {
      position: {
        lng: -62.7209473,
        lat: 8.3451801,
      },
    },
    {
      position: {
        lng: -62.7209473,
        lat: 8.3451801,
      },
    },
    {
      position: {
        lng: -62.7688408,
        lat: 8.3339703,
      },
    },
    {
      position: {
        lng: -62.7688408,
        lat: 8.3339703,
      },
    },
    {
      position: {
        lng: -62.7470398,
        lat: 8.2904866,
      },
    },
    {
      position: {
        lng: -62.7456665,
        lat: 8.293799,
      },
    },
    {
      position: {
        lng: -62.7365685,
        lat: 8.2984703,
      },
    },
    {
      position: {
        lng: -62.7317619,
        lat: 8.3011881,
      },
    },
    {
      position: {
        lng: -62.7317619,
        lat: 8.3011881,
      },
    },
    {
      position: {
        lng: -62.7220631,
        lat: 8.2978758,
      },
    },
    {
      position: {
        lng: -62.7062702,
        lat: 8.3035662,
      },
    },
    {
      position: {
        lng: -62.7006054,
        lat: 8.3044155,
      },
    },
    {
      position: {
        lng: -62.6945972,
        lat: 8.3091716,
      },
    },
    {
      position: {
        lng: -62.68507,
        lat: 8.3160508,
      },
    },
    {
      position: {
        lng: -62.6849842,
        lat: 8.3161358,
      },
    },
    {
      position: {
        lng: -62.6838684,
        lat: 8.3184288,
      },
    },
    {
      position: {
        lng: -62.6838684,
        lat: 8.3184288,
      },
    },
    {
      position: {
        lng: -62.6843834,
        lat: 8.3194479,
      },
    },
    {
      position: {
        lng: -62.6872158,
        lat: 8.3211465,
      },
    },
    {
      position: {
        lng: -62.7061844,
        lat: 8.3197877,
      },
    },
    {
      position: {
        lng: -62.717514,
        lat: 8.3290446,
      },
    },
    {
      position: {
        lng: -62.7178144,
        lat: 8.330361,
      },
    },
    {
      position: {
        lng: -62.717042,
        lat: 8.3320595,
      },
    },
    {
      position: {
        lng: -62.7127075,
        lat: 8.3373672,
      },
    },
    {
      position: {
        lng: -62.7209044,
        lat: 8.3451377,
      },
    },
  ];

const AsyncGettingStartedExampleGoogleMap = withScriptjs(
  withGoogleMap(
    props => (
      <GoogleMap
        ref={props.onMapLoad}
        defaultZoom={13}
        defaultCenter={{ lat: 8.285465, lng: -62.719059 }}
        onClick={props.onMapClick}

      >
        {aux.map(marker => (
          <Marker
            {...marker}
          />
        ))}
      </GoogleMap>
    ),
  ),
);

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
  async initialFetch() {
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
          <AsyncGettingStartedExampleGoogleMap
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCtdHFoBIbSMK-aRw5ygDS9ynkJWVeq7lg&v=3"
            loadingElement={
              <div style={{ height: '100%' }}>
                <FaSpinner
                  style={{
                    display: 'block',
                    width: '80px',
                    height: '80px',
                    margin: '150px auto',
                    animation: 'fa-spin 2s infinite linear',
                  }}
                />
              </div>
            }
            containerElement={
              <div style={{ height: '100%' }} />
            }
            mapElement={
              <div style={{ height: '100%' }} />
            }
            onMapLoad={noop}
            onMapClick={noop}
            onMarkerRightClick={noop}
            markers={this.state.poly}
          />
        </div>
        <div className="cards">
          {this.state.news.map(news =>
            (<NewsCard
              key={news.suceso_id.toString()}
              id={news.suceso_id}
              title={news.titulo}
              date={news.fecha_suceso}
              victim={news.nombre_victima}
              link={news.fuente}
            />))}
        </div>
      </div>
    );
  }
}
export default Home;
