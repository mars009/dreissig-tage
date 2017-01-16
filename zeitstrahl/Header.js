import React from 'react';


export default class Header extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      searchVisible: false
    }

    this.showSearch = this.showSearch.bind(this);
  }

  showSearch() {
    this.setState({
      searchVisible: !this.state.searchVisible
    })
  }

  render() {

    // Class for the input element
    let searchInputClasses = ['searchInput'];

    // Update the class array if the state is visible
    if (this.state.searchVisible) {
      searchInputClasses.push('active');
    }

    return (
      <div className="header">
        <div className="fa fa-more"></div>
        <span className="title">{this.props.title}</span>

        <input
          type="text"
          className={searchInputClasses.join(' ')}
          placeHolder="Search..."/>

        {/*Adding a onClick handler to call the showSearch button*/}  
        <div 
          onClick={this.showSearch()}
          className="fa fa-search searchIcon"></div> 
      </div>
    );
  }
}
