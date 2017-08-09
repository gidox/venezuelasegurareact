import React, { Component } from 'react';
import { Card, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import newsApi from 'api/newsApi';
import Loader from 'components/Loader/Loader';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const styleGrid = {
  imgResponsive: {
    width: '50%',
    height: '200',
  },
};
export default class NewsInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      new: {},
    };
  }
  async componentDidMount() {
    this.initialFetch();
  }
    // eslint-disable-next-line consistent-return
  async initialFetch() {
    if (!this.state.new) return this.setState({ loading: false });
    const news = await newsApi.getNew(this.props.id);
    // const poly = await newsApi.getPoly();
    this.setState({
      new: news,
      loading: false,
      // poly,
    });
  }
  render() {
    return (

      <Card>
        <CardHeader
          title={this.state.newtitle}
        />
        <CardMedia
          overlay={<CardTitle
            title={this.state.new.titulo}
            subtitle={<Moment date={this.state.new.fecha_suceso} format="DD/MM/YYYY hh:mm a" />}
          />}
        >
          <img style={styleGrid.imgResponsive} src={`http://34.229.201.249/img/${this.state.new.suceso_id}.jpg`} alt="" />
        </CardMedia>
        <CardTitle
          title={this.state.new.titulo}
          style={{ padding: '5px 10px' }}
        />
        <CardText style={{ padding: '0px 10px' }}>
          <p>Victima: {this.state.new.nombre_victima}</p>
          <p>Edad: {this.state.new.edad}</p>
          <p>Sexo: {this.state.new.sexo}</p>
          <p>Reseña: {this.state.new.mi_resena}</p>
        </CardText>
        {this.state.loading && (
          <Loader />
        )}
      </Card>
    );
  }
}
NewsInfo.propTypes = {
  id: PropTypes.integer,
};
