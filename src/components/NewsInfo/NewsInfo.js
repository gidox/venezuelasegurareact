import React, { Component } from 'react';
import { Card, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import newsApi from 'api/newsApi';
import Loader from 'components/Loader/Loader';
import PropTypes from 'prop-types';

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
          overlay={<CardTitle title={this.state.new.title} subtitle="Overlay subtitle" />}
        >
          <img src={`http://34.229.201.249/img/${this.state.new.id}.jpg`} alt="" />
        </CardMedia>
        <CardTitle title="Card title" subtitle="Card subtitle" />
        <CardText>
          {this.state.new.description}
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
