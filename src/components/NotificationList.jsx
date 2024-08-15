import { useNotificationStore } from "../store";
import NotificationItem from "./NotificationItem";

function NotificationList() {
  const { data } = useNotificationStore();

  return (
    <ul className="space-y-3 md:space-y-2">
      {data.map((person) => (
        <NotificationItem person={person} key={person.id} />
      ))}
    </ul>
  );
}

export default NotificationList;
