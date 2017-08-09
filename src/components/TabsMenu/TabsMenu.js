import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab } from 'material-ui/Tabs';
import { GridList } from 'material-ui/GridList';
import NewsCard from 'components/NewsCard/NewsCard';
import NewsFilter from 'components/NewsFilter/NewsFilter';
import NewsPaper from 'react-icons/lib/fa/newspaper-o';
import Bar from 'react-icons/lib/fa/bar-chart';


const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};
const stylesGrid = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: '47vw',
  },
};
class TabsMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'a',
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(value) {
    this.setState({
      value,
    });
  }

  render() {
    return (
      <Tabs
        value={this.state.value}
        onChange={this.handleChange}
        style={stylesGrid.gridList}
      >
        <Tab
          label="Noticias"
          icon={<NewsPaper>phone</NewsPaper>}
          value="a"
        >
          <NewsFilter />
          <br />
          <GridList
            cols={2}
            cellHeight={400}
            padding={10}
          >
            {this.props.news.map(news =>
              (<NewsCard
                key={news.suceso_id.toString()}
                id={news.suceso_id}
                title={news.titulo}
                date={news.fecha_suceso}
                victim={news.nombre_victima}
                link={news.fuente}
                description={news.resena}
              />))}
          </GridList>
        </Tab>
        <Tab
          label="Estadisticas"
          value="b"
          icon={<Bar>Estadisticas</Bar>}
        >
          <br />
          <div>
            <h2 style={styles.headline}>Controllable Tab B</h2>
            <p>
              This is another example of a controllable tab. Remember, if you
              use controllable Tabs, you need to give all of your tabs values or else
              you wont be able to select them.
            </p>
          </div>
        </Tab>
      </Tabs>
    );
  }
}
TabsMenu.propTypes = {
  news: PropTypes.Array,
};

export default TabsMenu;
