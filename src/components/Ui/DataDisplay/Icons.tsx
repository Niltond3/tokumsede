import { ReactNode } from 'react';
import { AiOutlineRight, AiFillHome } from 'react-icons/ai';

interface IProps {
  children?: ReactNode;
  className?: string;
}

export const ArrowRight = ({ children, className }: IProps) => (
  <AiOutlineRight className={className}>{children}</AiOutlineRight>
);

export const Home = ({ children, className }: IProps) => (
  <AiFillHome className={className}>{children}</AiFillHome>
);
