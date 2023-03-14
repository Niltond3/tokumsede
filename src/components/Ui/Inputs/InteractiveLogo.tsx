import React from 'react';

import Typography from 'components/Ui/DataDisplay/Typography';

import Img from '../DataDisplay/Image';
interface IInteractiveLogo {
  className?: string;
}
export default function InteractiveLogo({ className }: IInteractiveLogo) {
  return (
    <div className={`${className} wrapper_logo color__transparent group`}>
      <Img
        size={48}
        image="logo"
        className="max-h-12 mt-xs wrapper_logo--image group-hover:opacity-100"
      ></Img>
      <Typography variant="h1" bold={false} className="wrapper_logo--title ">
        <span>Tô</span>
        <span>Kum</span>
        <span className="transition-fast group-hover:opacity-100">ede</span>
      </Typography>
    </div>
  );
}
