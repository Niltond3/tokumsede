import Icons, {
  Accepted,
  Cancel,
  Delivered,
  Pending,
  Schedule
} from 'app/components/Ui/DataDisplay/Icons';
/* STATUS --> STATUS TIME AND RESPONSE TRACKER */
export default function Footer() {
  return (
    <div className="flex">
      <Pending />
      <Accepted />
      <Icons icon="logistics" />
      <Delivered />
      <Cancel />
      <Schedule />
    </div>
  );
}
