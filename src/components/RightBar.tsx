import React from 'react';

import Container from './Ui/Layout/Container';
import NavBar from './Ui/Navigation/NavBar';

import PropTypes from 'prop-types';

function RightBar() {
  return (
    <Container theme="aside-bar" color="transparent" className="col-start-5">
      <NavBar theme="side"></NavBar>
    </Container>
  );
}

RightBar.propTypes = {};

export default RightBar;
