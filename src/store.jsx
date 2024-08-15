import { create } from "zustand";

const initialNotificationData = [
  {
    id: 1,
    name: "Mark Webber",
    title: (
      <>
        reacted to your recent post{" "}
        <a className="ml-1 cursor-pointer font-bold transition-all duration-100 hover:text-blue">
          My first tournament today!
        </a>
      </>
    ),
    time: "1m ago",
    readStatus: false,
    image: "./images/avatar-mark-webber.webp",
  },

  {
    id: 2,
    name: "Angela Gray",
    title: "followed you",
    time: "5m ago",
    readStatus: false,
    image: "./images/avatar-angela-gray.webp",
  },

  {
    id: 3,
    name: "Jacob Thompson",
    title: (
      <>
        has joined your group{" "}
        <a className="ml-1 cursor-pointer font-bold text-blue transition-all duration-100">
          Chess Club
        </a>
      </>
    ),
    time: "1 day ago",
    readStatus: false,
    image: "./images/avatar-jacob-thompson.webp",
  },

  {
    id: 4,
    name: "Rizky Hasanuddin",
    title: "sent you a private message",
    message:
      "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
    time: "5 days ago",
    readStatus: true,
    image: "./images/avatar-rizky-hasanuddin.webp",
  },

  {
    id: 5,
    name: "Kimberly Smith",
    title: "commented on your picture",
    time: "1 week ago",
    readStatus: true,
    commentedOnImage: "./images/image-chess.webp",
    commentedOnImageName: "chess image",
    image: "./images/avatar-kimberly-smith.webp",
  },

  {
    id: 6,
    name: "Nathan Peterson",
    title: (
      <>
        reacted to your recent post{" "}
        <a className="cursor-pointer font-bold transition-all duration-100 hover:text-blue">
          5 end-game strategies to increase your win rate
        </a>
      </>
    ),
    time: "2 weeks ago",
    readStatus: true,
    image: "./images/avatar-nathan-peterson.webp",
  },

  {
    id: 7,
    name: "Anna Kim",
    title: (
      <>
        left the group{" "}
        <a className="ml-1 cursor-pointer font-bold text-blue transition-all duration-100">
          Chess Club
        </a>
      </>
    ),
    time: "2 weeks ago",
    readStatus: true,
    image: "./images/avatar-anna-kim.webp",
  },
];

export const useNotificationStore = create((set, get) => ({
  data: initialNotificationData,
  unreadCount: 0,

  getReadStatusById: (id) => {
    const notification = get().data.find((person) => person.id === id);
    return notification ? notification.readStatus : null;
  },

  setReadStatus: (id) =>
    set((state) => ({
      data: state.data.map((person) =>
        person.id === id ? { ...person, readStatus: true } : person,
      ),
    })),

  setAllRead: () => {
    const allRead = get().data.every((person) => person.readStatus);
    if (allRead) return;

    set((state) => ({
      data: state.data.map((person) => ({ ...person, readStatus: true })),
    }));
  },
}));
