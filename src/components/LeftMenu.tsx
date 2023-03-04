import MenuItem from 'components/MenuItem';

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
      {MenuItem('home', open)}
      {MenuItem('app', open)}
      {MenuItem('why', open)}
      {MenuItem('who', open)}
      {MenuItem('download', open)}
      {MenuItem('chat', open)}
    </div>
  );
}
