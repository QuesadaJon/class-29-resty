import React, { Component } from 'react';
import Display from '../components/display/Display';
import Search from '../components/search/Search';
import fetchApi from '../services/fetchApi';

export default class LandingPage extends Component {
  state = {
    urlSearch: '',
    crudMethod: '',
    requestBody: [],
    display: [],
  }

  handleUrlChange = ({ target }) => {
    this.setState({ urlSearch: target.value });
  }

  handleCrudMethod = ({ target }) => {
    this.setState({ crudMethod: target.value });
  }

  handleRequestBody = ({ target }) => {
    this.setState({ requestBody: target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { urlSearch, requestBody, crudMethod } = this.state;
    this.setState({ urlSearch, requestBody, crudMethod, loading: true });

    fetchApi(urlSearch, crudMethod, requestBody)
      .then(display => this.setState({ display }));
  }

  render(){
    const { display } = this.state;
    return (
      <>
        <Search
          onSubmit={this.onSubmit}
          handleRequestBody={this.handleRequestBody}
          handleCrudMethod={this.handleCrudMethod}
          handleUrlChange={this.handleUrlChange}
        />
        <Display
          display={display}
        />
      </>
    );
  }
}
