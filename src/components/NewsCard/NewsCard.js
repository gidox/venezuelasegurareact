import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardActions, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Moment from 'react-moment';
import Dialog from 'material-ui/Dialog';
import NewsInfo from 'components/NewsInfo/NewsInfo';
import FlatButton from 'material-ui/FlatButton';

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
const customContentStyle = {
  width: '50%',
  maxWidth: 'none',
};

class NewsCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  handleOpen() {
    this.setState({ open: true });
  }
  handleClose() {
    this.setState({ open: false });
  }
  render() {
    const actions = [
      <FlatButton
        label="Cerrar"
        primary
        onTouchTap={this.handleClose}
      />,
    ];

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
          {this.props.description ? `${this.props.description.substring(0, 150)}..` : `${this.props.description}`}
        </CardText>
        <CardActions>
          <RaisedButton
            onTouchTap={this.handleOpen}
            label="Mas informacion"
            primary
          />
          <Dialog
            title="Informacion Completa"
            modal={false}
            autoScrollBodyContent
            open={this.state.open}
            actions={actions}
            contentStyle={customContentStyle}
            onRequestClose={this.handleClose}
          >
            <NewsInfo
              id={this.props.id}
            />
          </Dialog>
        </CardActions>
      </Card>

    );
  }
}
NewsCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  // link: PropTypes.string,
  // victim: PropTypes.string,
  description: PropTypes.string,
  date: PropTypes.string,

};

export default NewsCard;
