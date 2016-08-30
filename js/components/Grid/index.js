/* @flow */

import React, { Component } from 'react';
import { getCountryData } from '../../store/CountryStore';
import styles from './styles.css';

export default class Grid extends Component {
  componentDidMount() {
    this.data = new wijmo.collections.CollectionView(getCountryData());
    this.grid = new wijmo.grid.FlexGrid(this.refs.gsFlexGrid);
    this.grid.initialize({
        itemsSource: this.data
    });
    this.grid.trackChanges = true;
  }

  _alignCell(alignment) {
    var rc = this.grid.getCellBoundingRect(this.grid.selection._row, this.grid.selection._col);
    var cell = document.elementFromPoint(rc.left + rc.width / 2, rc.top + rc.height / 2);
    cell.style.textAlign = alignment;
  }

  render() {
    return (
      <div>
        <div>
          <input type="button" value="left" onClick={this._alignCell.bind(this, 'left')}></input>
          <input type="button" value="center" onClick={this._alignCell.bind(this, 'none')}></input>
          <input type="button" value="right" onClick={this._alignCell.bind(this, 'right')}></input>
        </div>
        <div ref="gsFlexGrid" style={{ display: 'flex', width: '100%', justifyContent: 'center', marginTop: 100, }}>
        </div>
      </div>
    );
  }
};
