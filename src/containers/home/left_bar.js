import React, { Component } from 'react';
class SearchBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="content">
            <div className="left-bar-top">
                <span className="status-title">STATUS</span>
                <div className="dropdown">
                    <button className="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">
                        Open
                        <span className="caret"></span>
                    </button>
                    <ul className="dropdown-menu">
                        <li><a href="#">Action</a></li>
                        <li><a href="#">Another action</a></li>
                        <li><a href="#">Something else here</a></li>
                        <li role="separator" className="divider"></li>
                        <li><a href="#">Separated link</a></li>
                    </ul>
                </div>
            </div>
            <div className="left-bar-under">
                <span className="update-title">UPDATE TIME</span>
                <div className="dropdown">
                    <button className="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="true">
                        Last month
                        <span className="caret"></span>
                    </button>
                    <ul className="dropdown-menu">
                        <li><a href="#">Action</a></li>
                        <li><a href="#">Another action</a></li>
                        <li><a href="#">Something else here</a></li>
                        <li role="separator" className="divider"></li>
                        <li><a href="#">Separated link</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
  }
}

export default (SearchBar);
