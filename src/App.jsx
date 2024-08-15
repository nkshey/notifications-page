import Header from "./components/Header";
import NotificationList from "./components/NotificationList";

function App() {
  return (
    <main className="bg-white px-4 py-6 md:max-w-[45.625rem] md:rounded-2xl md:p-8 md:pb-3.5">
      <Header />
      <NotificationList />
    </main>
  );
}

export default App;
