import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Polygon, Marker } from 'react-google-maps';
import withScriptjs from 'react-google-maps/lib/async/withScriptjs';
import noop from 'lodash/noop';
import Loader from 'components/Loader/Loader';
import remove from 'lodash/remove';
// eslint-disable-next-line no-unused-vars
const cachamay = [
  { lat: 8.33414, lng: -62.71554 },
  { lat: 8.33758, lng: -62.71425 },
  { lat: 8.33932, lng: -62.71674 },
  { lat: 8.3465, lng: -62.72111 },
  { lat: 8.3423, lng: -62.74713 },
  { lat: 8.33567, lng: -62.76481 },
  { lat: 8.3359, lng: -62.76882 }, //   Intercecion unare cachamay  rio orinoco
  { lat: 8.31995, lng: -62.75879 }, //
  { lat: 8.2920, lng: -62.7477 }, // Makro  intercepcion unare cacha univer
  { lat: 8.30234, lng: -62.73138 },
  { lat: 8.29908, lng: -62.72012 },
  { lat: 8.30280, lng: -62.7047 }, // parque cachamay
  { lat: 8.30951, lng: -62.6947 },
  { lat: 8.31698, lng: -62.68301 }, // fin este
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
  { lat: 8.2495, lng: -62.71734 },
  { lat: 8.24266, lng: -62.72021 },
  { lat: 8.2428, lng: -62.7376 }, // fin unare este rio  intercecio unare universida
  { lat: 8.2497, lng: -62.7363 }, // primera arriba
  { lat: 8.2575, lng: -62.7327 }, // segunda arriba
  { lat: 8.2665, lng: -62.7361 },
  { lat: 8.2734, lng: -62.7368 },
  { lat: 8.2766, lng: -62.73292 }, // mas al este unare
  { lat: 8.2830, lng: -62.7403 },
  { lat: 8.28635, lng: -62.744722 }, // Terminal
  { lat: 8.2920, lng: -62.7477 }, // Makro  intercepcion unare cacha univer
  { lat: 8.30234, lng: -62.73138 },
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
  // {lat: 8.17794, lng: -62.84073},
  { lat: 8.1681, lng: -62.82569 },
  { lat: 8.15987, lng: -62.81936 },
  { lat: 8.15911, lng: -62.81372 },
  { lat: 8.16345, lng: -62.80704 },
  { lat: 8.20436, lng: -62.7988 },
  { lat: 8.24161, lng: -62.76808 },
  { lat: 8.2428, lng: -62.7376 }, // fin unare este rio
  { lat: 8.2497, lng: -62.7363 }, // primera arriba
  { lat: 8.2575, lng: -62.7327 }, // segunda arriba
  { lat: 8.2665, lng: -62.7361 },
  { lat: 8.2734, lng: -62.7368 },
  { lat: 8.2766, lng: -62.73292 }, // mas al este unare
  { lat: 8.2830, lng: -62.7403 },
  { lat: 8.28635, lng: -62.744722 }, // Terminal
  { lat: 8.2920, lng: -62.7477 }, // Makro
  { lat: 8.2950, lng: -62.7493 },
  { lat: 8.31995, lng: -62.75879 }, //
  { lat: 8.3359, lng: -62.76882 }, //   Intercecion unare cachamay  rio orinoco
  { lat: 8.32818, lng: -62.80611 },
  { lat: 8.31983, lng: -62.812 },
  { lat: 8.30024, lng: -62.82774 },
  { lat: 8.2839, lng: -62.85211 },
  { lat: 8.2736, lng: -62.86472 },
  { lat: 8.27084, lng: -62.87292 },
  { lat: 8.26599, lng: -62.90106 },
  { lat: 8.27902, lng: -62.94557 },
  { lat: 8.2514, lng: -62.95967 },
  { lat: 8.22581, lng: -62.97256 },
  { lat: 8.21101, lng: -62.95988 },
  { lat: 8.20904, lng: -62.93732 },

];
const dalla = [
  { lat: 8.34050, lng: -62.71189 }, // Intercon Puente Angosturita dalla con simon bolivar
  { lat: 8.32598, lng: -62.69794 }, // campo rojo
  { lat: 8.32309, lng: -62.69142 }, // Puente Campo Rojo
  { lat: 8.31902, lng: -62.66601 }, // Puente Macagua
  { lat: 8.31664, lng: -62.65932 },
  { lat: 8.27638, lng: -62.67082 }, // Interseccion Dalla con Pozo Verd
  { lat: 8.25476, lng: -62.70783 }, //   8.25476815882098,-62.70783918987877
  { lat: 8.23595, lng: -62.71905 }, //   8.235955375848445,-62.719058990478516
  { lat: 8.23442, lng: -62.74244 }, //
  { lat: 8.20520, lng: -62.77180 }, //   8.205203920492115,-62.761802673339844
  { lat: 8.15609, lng: -62.79477 }, // 1 era Interseccion Presa carhuachi Dalla con Pozo Verd
  { lat: 8.15983, lng: -62.76388 },
  { lat: 8.22780, lng: -62.71444 },
  { lat: 8.29201, lng: -62.63401 }, // en via al pao
  { lat: 8.31976, lng: -62.6422 }, // Buen retiro
  { lat: 8.33201, lng: -62.64478 }, // Cementerio semaforo bomba
  { lat: 8.33847, lng: -62.65588 }, // Redoma el dorado
  { lat: 8.34220, lng: -62.67554 }, // Doña Barbara
  { lat: 8.34815, lng: -62.68884 }, //Bomba Borges
];
const simonbolivar = [
  { lat: 8.34815, lng: -62.68884 }, // Bomba Borges
  { lat: 8.34220, lng: -62.67554 }, // Doña Barbara
  { lat: 8.33847, lng: -62.65588 }, // Redoma el dorado
  { lat: 8.34416, lng: -62.65056 }, // alcacranes hidrobolivar
  { lat: 8.36089, lng: -62.64888 }, // mercado el gallo bajando
  { lat: 8.36131, lng: -62.64644 }, // cerro el gallo bajando
  { lat: 8.36522, lng: -62.64287 }, // cerro el gallo
  { lat: 8.36751, lng: -62.64754 }, // batallas pricipal
  { lat: 8.37192, lng: -62.65262 }, // batallas
  { lat: 8.37944, lng: -62.65850 }, // Intercon muelle san felix con 11deabril
  { lat: 8.34891, lng: -62.71605 }, // limite norte
  { lat: 8.34050, lng: -62.71189 }, //Intercon Puente Angosturita dalla con simon bolivar
];
const chirica = [
  { lat: 8.33847, lng: -62.65588 }, // Redoma el dorado
  { lat: 8.34416, lng: -62.65056 }, // alcacranes hidrobolivar
  { lat: 8.36089, lng: -62.64888 }, // mercado el gallo bajando
  { lat: 8.36131, lng: -62.64644 }, // cerro el gallo bajando
  { lat: 8.36522, lng: -62.64287 }, // cerro el gallo
  { lat: 8.36377, lng: -62.63925 }, // cerro el gallo americas
  { lat: 8.31562, lng: -62.61726 }, // cruce rosario mas arriba
  { lat: 8.31613, lng: -62.6418 }, // Buen retiro
  { lat: 8.31976, lng: -62.6422 }, // Buen retiro
  { lat: 8.33201, lng: -62.64478 }, //Cementerio semaforo bomba
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
        <Marker
          position={{ lat: 8.314839, lng: -62.726316 }}
          label={{ text: '238 homicidios', color: '#000', fontSize: '16px', fontWeight: 'bold' }}
        />
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
        { id: 4,
          name: 'dalla',
          data: dalla,
          style: { fillColor: '#663399', fillOpacity: '0.35', strokeColor: '#663399', strokeOpacity: '0.8', strokeWeight: '3' } },
        { id: 5,
          name: 'simonbolivar',
          data: simonbolivar,
          style: { fillColor: '#22A7F0', fillOpacity: '0.35', strokeColor: '#22A7F0', strokeOpacity: '0.8', strokeWeight: '3' } },
        { id: 6,
          name: 'chirica',
          data: chirica,
          style: { fillColor: '#F9690E', fillOpacity: '0.35', strokeColor: '#F9690E', strokeOpacity: '0.8', strokeWeight: '3' } },
      ],
    };
    this.handlePolyClick = this.handlePolyClick.bind(this);
  }
  handlePolyClick(id) {
    const chunk = remove(this.state.parroquias, (n, i) => i === id);
    this.setState({
      parroquias: chunk,
    });
  }
  render() {
    return (
      <AsyncGettingStartedExampleGoogleMap
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCtdHFoBIbSMK-aRw5ygDS9ynkJWVeq7lg&v=3"
        loadingElement={
          <Loader />
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
