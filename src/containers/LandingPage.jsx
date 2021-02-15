import React, { Component } from 'react';
import Search from '../components/search/Search';

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

    const newRequest = {
      urlInput: this.state.urlSearch,
      crudMethod: this.state.crudMethod
    };
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
      </>
    );
  }
}
