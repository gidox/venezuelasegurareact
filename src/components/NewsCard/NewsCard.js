import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardActions, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Moment from 'react-moment';
// import IconButton from 'material-ui/IconButton';
// import Subheader from 'material-ui/Subheader';
// import InsertLink from 'material-ui/svg-icons/editor/insert-link';
// import Dialog from 'material-ui/Dialog';

// import Moment from 'react-moment';
const styleGrid = {
  imgResponsive: {
    width: '100%',
    height: '200',
  },
};
// const actions = [
//   <FlatButton
//     label="Cancel"
//     primary
//     onTouchTap={this.handleClose}
//   />,
//   <FlatButton
//     label="Submit"
//     primary
//     keyboardFocused
//     onTouchTap={this.handleClose}
//   />,
// ];
class NewsCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }
  render() {
    return (
      <Card key={this.props.id}>
        <CardMedia
          overlay={<CardTitle title={this.props.title} />}
        >
          <img style={styleGrid.imgResponsive} src={`http://34.229.201.249/img/${this.props.id}.jpg`} alt={this.props.id} />
        </CardMedia>
        <CardText>
          <strong><Moment date={this.props.date} format="DD/MM/YYYY hh:mm a" /></strong>
          <br />
          {`${this.props.description.substring(0, 150)}...`}
        </CardText>
        <CardActions>
          <RaisedButton label="Mas informacion" primary href={this.props.link} target="_blank" />
        </CardActions>
      </Card>

    );
  }
}
NewsCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  link: PropTypes.string,
  // victim: PropTypes.string,
  description: PropTypes.string,
  date: PropTypes.string,

};

export default NewsCard;
