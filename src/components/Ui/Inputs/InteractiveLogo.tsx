import React from 'react';

import Typography from 'components/Ui/DataDisplay/Typography';

import Img from '../DataDisplay/Image';
interface IInteractiveLogo {
  className?: string;
}
export default function InteractiveLogo({ className }: IInteractiveLogo) {
  return (
    <div className={`${className} wrapper_logo color__transparent transition-slow group`}>
      <Img
        size={48}
        image="logo"
        className="transition-slow wrapper_logo--image mt-xs max-h-12 group-hover:opacity-100"
      ></Img>
      <Typography variant="h1" bold={false}>
        <span>Tô</span>
        <span>Kum</span>
        <span className="transition-slow group-hover:opacity-100">ede</span>
      </Typography>
    </div>
  );
}
