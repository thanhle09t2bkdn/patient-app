import React from 'react';
import { Component } from 'react';
import './detail.css';
import UpdateForm from '../../containers/detail/update_form';
export default class Detail extends Component {
  render() {
    return (
        <UpdateForm id={this.props.params.id} />
    );
  }
}
/**
 * Created by sonvu on 12/03/2017.
 */
