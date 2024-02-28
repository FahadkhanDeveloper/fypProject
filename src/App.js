import React, { useRef, useState, useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import wordsToNumbers from "words-to-numbers";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import NewsCards from "./components/NewsCards/NewsCards";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router } from "react-router-dom";

const alanKey =
  "dc24ef12cb0a5062191c97b4ba78023a2e956eca572e1d8b807a3e2338fdd0dc/stage";

const App = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const [activeArticle, setActiveArticle] = useState(-1);

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles, number }) => {
        if (command === "newHeadlines") {
          setNewsArticles(articles);
          setActiveArticle(-1);
        } else if (command === "highlight") {
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
        } else if (command === "open") {
          const parsedNumber =
            number.length > 2
              ? wordsToNumbers(number, { fuzzy: true })
              : number;
          const article = articles[parsedNumber - 1];

          if (article) {
            window.open(article.url, "_blank");
          }
        }
      },
    });
  }, []);

  const homeRef = useRef(null);
  const newscardsRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Router>
      <div>
        <Navbar
          scrollToHome={() => scrollToRef(homeRef)}
          scrollToNewsCards={() => scrollToRef(newscardsRef)}
          scrollToAbout={() => scrollToRef(aboutRef)}
          scrollToContact={() => scrollToRef(contactRef)}
        />
        <Home sectionRef={homeRef} />
        <NewsCards
          sectionRef={newscardsRef}
          activeArticle={activeArticle}
          articles={newsArticles}
        />
        <About sectionRef={aboutRef} />
        <Contact sectionRef={contactRef} />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
