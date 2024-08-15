import { useNotificationStore } from "../store";

function Header() {
  const { setAllRead, unreadCount } = useNotificationStore((state) => ({
    setAllRead: state.setAllRead,
    unreadCount: state.data.filter((person) => !person.readStatus).length,
  }));

  return (
    <header className="mb-[1.375rem] flex items-center justify-between md:mb-[1.875rem]">
      <div className="flex items-center gap-2 font-bold">
        <h1 className="text-xl md:text-2xl">Notifications</h1>
        {unreadCount > 0 && (
          <span className="rounded-md bg-blue px-3 py-0.5 text-[0.9375rem] text-white md:text-base">
            {unreadCount}
          </span>
        )}
      </div>

      <button
        className="text-sm text-dark-grayish-blue transition-all duration-100 hover:text-blue md:text-base"
        onClick={setAllRead}
      >
        Mark all as read
      </button>
    </header>
  );
}

export default Header;
