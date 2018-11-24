import React, { Component } from 'react';
import _ from 'lodash';

import './App.scss';
import FilterButton from "./components/filterButton";
import VideoCard from "./components/videoCard";

class App extends Component {
  constructor(props) {
    super(props);

    this.getFilters = this.getFilters.bind(this);
    this.toggleSelection = this.toggleSelection.bind(this);

    this.state = {filters : [{
      options: {
              title: "primary1"
            },
      selected: false
    }, 
    {
      options: {
              title: "primary2"
            },
      selected: false
    },
    {
      options: {
              title: "primary3"
            },
      selected: false
    } 
    ]};


  }

  getFilters() {
    return (<div>
      {
        _.map(this.state.filters, (filter, ind) => {
          return <FilterButton options={filter.options} 
          selected={filter.selected} 
          onFilterClick={this.toggleSelection}
          ind={ind} />
        })
      }
      </div>)
  }

  toggleSelection(i) {
    const {filters} = this.state;
    let updatedFilter = _.get(filters, i);
    updatedFilter.selected = !updatedFilter.selected;
    
    this.setState({
      filters: [..._.slice(filters,0, i), updatedFilter, ..._.slice(filters, i+1, _.size(filters))]
    })
  }


  render() {
    return (
      <div className="App">
        <div className="filters-wrapper">
          {this.getFilters()}
        </div>

        <div className="video-library-wrapper">
          {
            _.map(_.range(10), () => {
              return <VideoCard />
            })
          }
        </div>
      </div>
    );
  }
}

export default App;
