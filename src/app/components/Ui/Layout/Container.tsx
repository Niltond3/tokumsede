import { DetailedHTMLProps, HTMLAttributes, HtmlHTMLAttributes } from 'react'
import { IHMLElement } from 'utils/Types'

export default function Container ({type, className, children, ...rest}: IContainer){
  const {className: style} = containersType[type]()
  return(<div className={`flex fixed ${style} ${className}`} {...rest}>{children}</div>)
}

function AppBar(){
  const className = 'w-full h-xl px-l place-content-between'
  const Element = ({children, className}: IHMLElement) => <div className={className}>{children}</div>
  return {
    className,
    Element
  }
}

function Aside(){
  const className = 'h-screen pt-xl flex-col w-min min-w-[13.375rem]'
  const Element = ({children, className}:IHMLElement) => <aside className={className}>{children}</aside>
  return {
    className,
    Element
  }
}

const containersType = {
  AppBar,
  Aside
}

interface IContainer extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
  type: keyof typeof containersType;
}
