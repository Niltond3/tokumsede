import React from 'react';

import Container from './Ui/Layout/Container';
import NavBar from './Ui/Navigation/NavBar';

import PropTypes from 'prop-types';

function RightBar() {
  return (
    <Container
      color="transparent"
      display="flex"
      height="100%"
      position="absolute"
      width="4rem"
    >
      <NavBar theme="vertical"></NavBar>
    </Container>
  );
}

RightBar.propTypes = {};

export default RightBar;
