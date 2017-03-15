import React from 'react';
import { Component } from 'react';
import './home.css';
import SearchBar from '../../containers/home/search_bar';
import Patients from '../../containers/home/patient_list';
import LeftBar from '../../containers/home/left_bar';
export default class Home extends Component {
  render() {
    return (
      <div>
        <SearchBar/>
          <div className="container-fluid home-wrapper">
              <div className="row">
                  <div className="col-md-3 left-bar">
                      <LeftBar/>
                  </div>
                  <Patients/>
              </div>
          </div>
      </div>
    );
  }
}
