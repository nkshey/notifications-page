import { useNotificationStore } from "../store";

function NotificationItem({ person }) {
  const { getReadStatusById, setReadStatus } = useNotificationStore();

  return (
    <li
      className={`flex gap-3 rounded-lg p-4 text-sm leading-snug text-dark-grayish-blue last:pb-0 md:gap-5 md:p-[1.125rem] md:text-base ${!getReadStatusById(person.id) && "cursor-pointer bg-very-light-grayish-blue"}`}
      onClick={() => {
        if (!getReadStatusById(person.id)) {
          setReadStatus(person.id);
        }
      }}
    >
      <img
        src={person.image}
        alt={person.name}
        className="h-10 w-10 md:h-11 md:w-11"
      />

      <div>
        <div>
          <a className="mr-2 inline cursor-pointer font-bold text-very-dark-blue transition-all duration-100 hover:text-blue">
            {person.name}
          </a>
          <p className="inline">
            {person.title}
            {!getReadStatusById(person.id) && (
              <span className="ml-1.5 inline-block h-2 w-2 -translate-y-[0.5px] rounded-full bg-red md:-translate-y-[1px]"></span>
            )}
          </p>
        </div>

        <span className="mt-0.5 inline-block text-grayish-blue md:mt-0">
          {person.time}
        </span>

        {person?.message && (
          <p className="mt-3 cursor-pointer rounded-[0.25rem] border border-light-grayish-blue-two p-3.5 hover:bg-light-grayish-blue-one md:p-[1.125rem] md:py-4 md:leading-[1.3]">
            {person.message}
          </p>
        )}
      </div>

      {person?.commentedOnImage && (
        <a className="ml-auto">
          <img
            src={person.commentedOnImage}
            alt={person.commentedOnImageName}
            className="h-10 w-10 cursor-pointer rounded-lg hover:outline hover:outline-2 hover:outline-light-grayish-blue-two md:h-11 md:w-11"
          />
        </a>
      )}
    </li>
  );
}

export default NotificationItem;
