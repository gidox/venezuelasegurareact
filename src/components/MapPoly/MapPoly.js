import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Polygon } from 'react-google-maps';
import withScriptjs from 'react-google-maps/lib/async/withScriptjs';
import FaSpinner from 'react-icons/lib/fa/spinner';
import noop from 'lodash/noop';
import remove from 'lodash/remove';
// eslint-disable-next-line no-unused-vars
const cachamay = [
  { lat: 8.33414, lng: -62.71554 },
  { lat: 8.33758, lng: -62.71425 },
  { lat: 8.33932, lng: -62.71674 },
  { lat: 8.34383, lng: -62.72241 },
  { lat: 8.3423, lng: -62.74713 },
  { lat: 8.33567, lng: -62.76481 },
  { lat: 8.31516, lng: -62.75979 },
  { lat: 8.29703, lng: -62.75202 },
  { lat: 8.30234, lng: -62.73138 },
  { lat: 8.29908, lng: -62.72012 },
  { lat: 8.30194, lng: -62.7123 },
  { lat: 8.3158, lng: -62.68722 },
];
// eslint-disable-next-line no-unused-vars
const universidad = [
  { lat: 8.30671, lng: -62.68439 },
  { lat: 8.30251, lng: -62.67898 },
  { lat: 8.29864, lng: -62.68267 },
  { lat: 8.28463, lng: -62.68868 },
  { lat: 8.28132, lng: -62.70044 },
  { lat: 8.27512, lng: -62.71116 },
  { lat: 8.27134, lng: -62.7181 },
  { lat: 8.26365, lng: -62.7197 },
  { lat: 8.25724, lng: -62.71882 },
  { lat: 8.2493, lng: -62.71795 },
  { lat: 8.25448, lng: -62.72654 },
  { lat: 8.25695, lng: -62.73046 },
  { lat: 8.25984, lng: -62.73386 },
  { lat: 8.26444, lng: -62.7296 },
  { lat: 8.26504, lng: -62.73257 },
  { lat: 8.26717, lng: -62.73435 },
  { lat: 8.27397, lng: -62.73618 },
  { lat: 8.28184, lng: -62.73952 },
  { lat: 8.28835, lng: -62.74715 },
  { lat: 8.29644, lng: -62.75005 },
  { lat: 8.29901, lng: -62.73972 },
  { lat: 8.30259, lng: -62.72975 },
  { lat: 8.29933, lng: -62.71849 },
  { lat: 8.301, lng: -62.71016 },
  { lat: 8.30121, lng: -62.70698 },
  { lat: 8.3026, lng: -62.7038 },
  { lat: 8.30573, lng: -62.69744 },
  { lat: 8.31106, lng: -62.69014 },
  { lat: 8.31232, lng: -62.68662 },
];
// eslint-disable-next-line no-unused-vars
const unare = [
  { lat: 8.18669, lng: -62.92849 },
  { lat: 8.14567, lng: -62.94733 },
  { lat: 8.12726, lng: -62.90351 },
  { lat: 8.13818, lng: -62.88574 },
  { lat: 8.14255, lng: -62.87364 },
  { lat: 8.14183, lng: -62.86188 },
  { lat: 8.15517, lng: -62.85098 },
  { lat: 8.15474, lng: -62.84695 },
  { lat: 8.16014, lng: -62.84495 },
  { lat: 8.16564, lng: -62.83906 },
  { lat: 8.17794, lng: -62.84073 },
  { lat: 8.1681, lng: -62.82569 },
  { lat: 8.15987, lng: -62.81936 },
  { lat: 8.15911, lng: -62.81372 },
  { lat: 8.16345, lng: -62.80704 },
  { lat: 8.1773, lng: -62.81135 },
  { lat: 8.20436, lng: -62.7988 },
  { lat: 8.24161, lng: -62.76808 },
  { lat: 8.24353, lng: -62.72294 },
  { lat: 8.25155, lng: -62.72163 },
  { lat: 8.25958, lng: -62.7272 },
  { lat: 8.26247, lng: -62.73059 },
  { lat: 8.26707, lng: -62.72633 },
  { lat: 8.26767, lng: -62.72931 },
  { lat: 8.2698, lng: -62.73109 },
  { lat: 8.2766, lng: -62.73292 },
  { lat: 8.28447, lng: -62.73626 },
  { lat: 8.29098, lng: -62.74389 },
  { lat: 8.29669, lng: -62.7485 },
  { lat: 8.29824, lng: -62.75432 },
  { lat: 8.30245, lng: -62.7592 },
  { lat: 8.30802, lng: -62.76066 },
  { lat: 8.31983, lng: -62.76562 },
  { lat: 8.33541, lng: -62.76882 },
  { lat: 8.3323, lng: -62.79158 },
  { lat: 8.32818, lng: -62.80611 },
  { lat: 8.31983, lng: -62.812 },
  { lat: 8.30978, lng: -62.82132 },
  { lat: 8.30024, lng: -62.82774 },
  { lat: 8.29059, lng: -62.83006 },
  { lat: 8.29163, lng: -62.83877 },
  { lat: 8.28689, lng: -62.8437 },
  { lat: 8.2839, lng: -62.85211 },
  { lat: 8.27926, lng: -62.85704 },
  { lat: 8.2736, lng: -62.86472 },
  { lat: 8.27084, lng: -62.87292 },
  { lat: 8.26688, lng: -62.89055 },
  { lat: 8.26599, lng: -62.90106 },
  { lat: 8.27902, lng: -62.94557 },
  { lat: 8.2514, lng: -62.95967 },
  { lat: 8.22581, lng: -62.97256 },

];
const AsyncGettingStartedExampleGoogleMap = withScriptjs(
  withGoogleMap(
    props => (
      <GoogleMap
        ref={props.onMapLoad}
        defaultZoom={12}
        defaultCenter={{ lat: 8.285465, lng: -62.719059 }}
        onClick={props.onMapClick}

      >
        {props.parroquias.map((parroquia, index) =>
          (<Polygon
            options={parroquia.style}
            path={parroquia.data}
            onClick={() => props.onPolygonClick(index)}
          />))}
      </GoogleMap>
    ),
  ),
);
class MapPoly extends Component {
  constructor(props) {
    super(props);
    this.state = {
      poly: {},
      parroquias: [
        { id: 1,
          name: 'cachamay',
          data: cachamay,
          style: { fillColor: '#F44336', fillOpacity: '0.35', strokeColor: '#F44336', strokeOpacity: '0.8', strokeWeight: '3' } },
        { id: 2,
          name: 'unare',
          data: unare,
          style: { fillColor: 'green', fillOpacity: '0.35', strokeColor: 'green', strokeOpacity: '0.8', strokeWeight: '3' } },
        { id: 3,
          name: 'universidad',
          data: universidad,
          style: { fillColor: '#FFEB3B', fillOpacity: '0.35', strokeColor: '#FFEB3B', strokeOpacity: '0.8', strokeWeight: '3' } },
      ],
    };
    this.handlePolyClick = this.handlePolyClick.bind(this);
  }
  handlePolyClick(id) {
    console.log(this.state);
    const chunk = remove(this.state.parroquias, (n, i) => i === id);
    this.setState({
      parroquias: chunk,
    });
    console.log(id);
  }
  render() {
    return (
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
        onPolygonClick={this.handlePolyClick}
        parroquias={this.state.parroquias}
      />
    );
  }
}
export default MapPoly;
