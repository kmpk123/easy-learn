import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import './filterButton.scss';

class FilterButton extends Component {
    constructor(props) {
        super(props);

        this.onFilterClick = this.onFilterClick.bind(this);
    }

    onFilterClick(){
        this.props.onFilterClick(this.props.ind);
    }

  render() {
    const { selected, options} = this.props;
    return (
      <span className={`filter-button ${selected ? " selected" : ""}`}
      onClick={this.onFilterClick}>
        {_.upperFirst(options.title)}
      </span>
    );
  }
}

FilterButton.propTypes = {
    options: PropTypes.object,
    selected: PropTypes.bool,
    onFilterClick: PropTypes.func,
    ind: PropTypes.number
}

FilterButton.defaultProps = {
    ind: 0,
    options: {
        title: "Default"
    },
    selected: false,
    onFilterClick: ()=>{}
}

export default FilterButton;
