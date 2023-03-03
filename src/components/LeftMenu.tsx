import Image from 'next/image';
import { useReducer } from 'react';

import menuItem from 'components/menuItem';

// function reducer(state, action) {
//   return state;
// }

export default function LeftMenu(open: boolean) {
  // const [state, dispatch] = useReducer(reducer);

  //mini mt-20 flex flex-col space-y-2 w-full h-[calc(100vh)]
  //max hidden text-white mt-20 flex-col space-y-2 w-full h-[calc(100vh)]
  return (
    <div
      className={`text-white mt-20 flex flex-col space-y-2 w-full h-[calc(100vh)]`}
    >
      {menuItem('home', open)}
      {menuItem('app', open)}
      {menuItem('why', open)}
      {menuItem('who', open)}
      {menuItem('download', open)}
      {menuItem('chat', open)}
    </div>
  );
}
