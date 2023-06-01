import * as icons from 'components/Ui/DataDisplay/Icons';
/* STATUS --> STATUS TIME AND RESPONSE TRACKER */
export default function Footer() {
  return (
    <div className="flex">
      <icons.Pending />
      <icons.Accepted />
      <icons.logistics />
      <icons.Delivered />
      <icons.Cancel />
      <icons.Schedule />
    </div>
  );
}
