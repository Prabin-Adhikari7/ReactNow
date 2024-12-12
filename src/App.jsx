import { useState } from "react";
import "./App.css";
import Card from "./Components/card";
import MainHeader from "./Components/header";
import MainFooter from "./Components/MainFooter";

function App() {
  const [isDevilMode, setIsDevilMode] = useState(false);

  const toggleDevilMode = () => {
    setIsDevilMode(!isDevilMode);
  };

  const cardsData = [
    {
      imageSrc: "https://images2.alphacoders.com/969/thumb-1920-969536.jpg",
      title: "Can United Come Back?",
      subtitle: "Manchester Might Be RED!",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum soluta amet.",
    },
    {
      imageSrc: "https://assets.manutd.com/AssetPicker/images/0/0/13/201/903584/GettyImages-9029010181585234720986_medium.jpg",
      title: "The Glory Days",
      subtitle: "Reliving the History",
      description: "Manchester United has a rich history of success. Will they achieve greatness again?",
    },
    {
      imageSrc: "https://imageio.forbes.com/specials-images/imageserve/63c590998543bd4bc236e6b9/Soccer---UEFA-Champions-League---Final---Manchester-United-v-Bayern-Munich---Nou-Camp/0x0.jpg?crop=1876,1270,x235,y3,safe&height=481&width=711&fit=bounds",
      title: "A Tough Season",
      subtitle: "Testing Their Mettle",
      description: "It's been a challenging year, but United always find a way to rise.",
    },
  ];

  return (
    <div
      className={`min-h-screen flex flex-col transition-all duration-700 ${
        isDevilMode
          ? "bg-gradient-to-br from-red-800 via-black to-black text-white"
          : "bg-gray-100 text-black"
      }`}
    >
      {/* Header */}
      <MainHeader />

      {/* Main Content */}
      <div className="flex-grow space-y-12 p-4">
        {/* Section 1: Message to Fans */}
        <section className="p-6 bg-red-700 text-white rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-4">🔥 Message to Our Fans 🔥</h2>
          <p className="text-lg">
            To all our loyal Manchester United fans worldwide, your passion and love for this club
            are what fuel our journey. Together, we embrace the highs and endure the lows with pride.
            Glory, glory, Man United!
          </p>
        </section>

        {/* Section 2: News Section (Cards) */}
        <section>
          <h2 className="text-2xl font-bold mb-6">📢 Latest News</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {cardsData.map((card, index) => (
              <Card
                key={index}
                imageSrc={card.imageSrc}
                title={card.title}
                subtitle={card.subtitle}
                description={card.description}
              />
            ))}
          </div>
        </section>

        {/* Section 3: Video Player */}
        <section className="p-6 bg-gray-100 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">🎥 Featured Video</h2>
          <div className="aspect-w-16 aspect-h-9">
          <iframe
              className="w-full h-96 rounded-lg"  // h-96 sets height to 24rem (384px)
              src="https://www.youtube.com/embed/RUCn4w-S2KM"
              title="Manchester United Highlights"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>


             

          </div>
        </section>

        {/* Section 4: Visitor Reviews */}
        <section className="p-6 bg-red-200 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">📝 Leave a Review</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg border border-gray-300"
            />
            <textarea
              placeholder="Your Review"
              className="w-full p-3 rounded-lg border border-gray-300"
              rows="4"
            ></textarea>
            <button
              type="submit"
              className="px-6 py-3 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 transition duration-300"
            >
              Submit Review
            </button>
          </form>
        </section>

        {/* Section 5: About Us */}
        <section className="p-6 bg-gray-900 text-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">📖 About Us</h2>
          <p className="text-lg">
            We are die-hard fans of Manchester United, dedicated to sharing the latest news, match
            highlights, and memories of this legendary football club. Whether you're here for the
            updates or just to celebrate the love of the game, we welcome you to the Red Devils'
            community!
          </p>
        </section>
      </div>

      {/* Footer */}
      <MainFooter />

      {/* Floating Theme Toggle Button */}
      <div className="fixed top-1/2 right-4 transform -translate-y-1/2">
        <button
          onClick={toggleDevilMode}
          className={`px-6 py-2 font-semibold rounded-full shadow-lg transition-all ${
            isDevilMode
              ? "bg-red-600 text-white hover:bg-red-700"
              : "bg-gray-300 text-black hover:bg-gray-400"
          }`}
        >
          {isDevilMode ? "🌑 Exit Devil Mode" : "🔥 Enter Devil Mode"}
        </button>
      </div>
    </div>
  );
}

export default App;