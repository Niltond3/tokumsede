import React from 'react';

import Typography from 'components/Ui/DataDisplay/Typography';

import Img from '../DataDisplay/Image';
import Container from '../Layout/Container';

export default function InteractiveLogo() {
  return (
    <Container theme="wrapper" color="transparent" className="wrapper_logo group">
      <Img
        size={55}
        image="logo"
        className="wrapper_logo--image group-hover:opacity-100"
      ></Img>
      <Typography variant="h1" bold={false} className="wrapper_logo--title ">
        <span>Tô</span>
        <span>Kum</span>
        <span className="transition-fast group-hover:opacity-100">ede</span>
      </Typography>
    </Container>
  );
}
