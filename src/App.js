import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import './App.css';

import { ArticleListContainer, Info } from './components';

export default function App(props) {
  const { areArticlesBeingFetched, fetchArticles } = props;

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <div className="App">
      {areArticlesBeingFetched ? (
        <div data-selector="App-isLoading" style={{ marginTop: '1em' }}>
          Loading…
        </div>
      ) : (
        <Fragment>
          <ArticleListContainer />
          <Info />
        </Fragment>
      )}
    </div>
  );
}

App.propTypes = {
  areArticlesBeingFetched: PropTypes.bool.isRequired,
  fetchArticles: PropTypes.func.isRequired,
};
