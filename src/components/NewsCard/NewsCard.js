import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
// import Subheader from 'material-ui/Subheader';
import InsertLink from 'material-ui/svg-icons/editor/insert-link';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
// import Moment from 'react-moment';
const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
};

const actions = [
  <FlatButton
    label="Cancel"
    primary
    onTouchTap={this.handleClose}
  />,
  <FlatButton
    label="Submit"
    primary
    keyboardFocused
    onTouchTap={this.handleClose}
  />,
];
class NewsCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }
  handleOpen() {
    this.setState({
      open: true,
    });
  }

  handleClose() {
    this.setState({
      open: false,
    });
  }

  render() {
    return (
      <GridList
        cols={3}
        padding={1}
        style={styles.gridList}
      >
        <GridTile
          key={this.props.id}
          titlePosition="top"
          cols={this.props.id ? 2 : 1}
          rows={this.props.id ? 2 : 1}
          title={this.props.title}
          onTouchTap={this.handleOpen}
          subtitle={<span><b>{this.props.description}</b></span>}
          actionIcon={<a href={this.props.link} target="_blank">
            <IconButton><InsertLink color="white" /></IconButton>

          </a>}
        >
          <Dialog
            title="Dialog With Actions"
            actions={actions}
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose}
          >
            The actions in this window were passed in as an array of React objects.
          </Dialog>
          <img src={`http://34.229.201.249/img/${this.props.id}.jpg`} alt="card" />
        </GridTile>
      </GridList>
    );
  }
}
NewsCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  link: PropTypes.string,
  // victim: PropTypes.string,
  description: PropTypes.string,
  // date: PropTypes.string,

};

export default NewsCard;
