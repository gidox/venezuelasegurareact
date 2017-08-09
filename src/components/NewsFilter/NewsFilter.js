import React, { Component } from 'react';
import newsApi from 'api/newsApi';
// import IconMenu from 'material-ui/IconMenu';
// import IconButton from 'material-ui/IconButton';
// import FontIcon from 'material-ui/FontIcon';
// import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
// import RaisedButton from 'material-ui/RaisedButton';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';

export default class NewsFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      value: 1,
      firstSelect: 0,
      delitos: [],
    };
  }
  async componentDidMount() {
    this.initialFetch();
  }
    // eslint-disable-next-line consistent-return
  async initialFetch() {
    if (!this.state.delitos) return this.setState({ loading: false });
    const delitos = await newsApi.getDelitos();
    // const poly = await newsApi.getPoly();
    this.setState({
      delitos,
      loading: false,
      // poly,
    });
  }
  render() {
    return (
      <div>
        <Toolbar>
          <ToolbarGroup firstChild>
            <ToolbarTitle style={{ paddingLeft: '20px' }} text="Tipo de sucesos" />
            <DropDownMenu value={this.state.value} floatingLabelText="Tipo de Sucesos">
              {this.state.delitos.map(delito =>
                (<MenuItem
                  key={delito.delito_id.toString()}
                  value={delito.delito_id}
                  primaryText={delito.descripcion}

                />))}
            </DropDownMenu>
          </ToolbarGroup>
        </Toolbar>

      </div>
    );
  }
}
