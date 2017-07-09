import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Moment from 'react-moment';

class NewsCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <Card style={{ width: 500, overflowY: 'auto', display: 'inline-block', margin: '10px 20px' }}>
        <CardHeader
          title={this.props.title}
          subtitle={<Moment format="YYYY/MM/DD hh:mm" date={this.props.date} />}
          avatar="http://via.placeholder.com/128x150"
        />
        <CardMedia
          overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
        >
          <img src={`http://venezuelasegura.byethost16.com/venezuelasegura/img/${this.props.id}.jpg`} alt="" />
        </CardMedia>
        <CardTitle title={this.props.title} subtitle={this.props.victim} />
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
        <CardActions>
          <RaisedButton href={this.props.link} target="_blank" rel="nofollow" label="Ver Mas" />
        </CardActions>
      </Card>
    );
  }
}
NewsCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  link: PropTypes.string,
  victim: PropTypes.string,
  date: PropTypes.string,

};

export default NewsCard;
