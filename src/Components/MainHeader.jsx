export default function MainHeader({ switchPage, activePage }) {
    return (
      <header className="p-4 bg-red-600 text-white flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold">Manchester United Fan Page</h1>
        <nav>
          <button
            onClick={() => switchPage("cards")}
            className={`px-4 py-2 mx-2 ${
              activePage === "cards" ? "bg-white text-red-600" : "bg-red-500 text-white"
            } rounded-lg`}
          >
            Cards
          </button>
          <button
            onClick={() => switchPage("united")}
            className={`px-4 py-2 mx-2 ${
              activePage === "united" ? "bg-white text-red-600" : "bg-red-500 text-white"
            } rounded-lg`}
          >
            United
          </button>
        </nav>
      </header>
    );
  }
  