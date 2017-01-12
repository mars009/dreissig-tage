import React from 'react';


export default class Header extends React.Component {

  render() {
    return (
      <div className="header">
        <div className="fa fa-more"></div>
        <span className="title">{this.props.title}</span>

        <input
          type="text"
          className="searchInput"
          placeHolder="Search..."/>

        <div className="fa fa-search searchIcon"></div> 
      </div>
    );
  }
}
