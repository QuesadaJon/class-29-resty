import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ 
  onSubmit,
  handleRequestBody,
  handleCrudMethod,
  handleUrlChange 
}) => (
  <>
    <header>RESTy</header>
    <div>
      <form onSubmit={onSubmit} >
        <input 
          type="text"
          id="url"
          placeholder="url"
          name="url"
          onChange={handleUrlChange}
        />
        <button>Fetch</button>

        <div>
          <input
            type="radio"
            id="get"
            name="method"
            value="get"
            onChange={handleCrudMethod}
          />
          <label htmlFor="get">GET</label>

          <input
            type="radio"
            id="post"
            name="method"
            value="post"
            onChange={handleCrudMethod}
          />
          <label htmlFor="post">POST</label>

          <input 
            type="radio"
            id="put"
            name="method"
            value="put"
            onChange={handleCrudMethod}
          />
          <label htmlFor="put">PUT</label>

          <input 
            type="radio"
            id="delete"
            name="method"
            value="delete"
            onChange={handleCrudMethod}
          />
          <label htmlFor="delete">DELETE</label>
        </div>
        <textarea
          placeholder="JSON"
          id="request-body"
          type="text"
          onChange={handleRequestBody}
        >
        </textarea>
      </form>
    </div>
  </>
);

Search.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  handleRequestBody: PropTypes.func.isRequired,
  handleCrudMethod: PropTypes.func.isRequired,
  handleUrlChange: PropTypes.func.isRequired,
};

export default Search;
