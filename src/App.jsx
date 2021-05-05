import { useEffect } from "react";
import { Helmet } from "react-helmet";
import "aos/dist/aos.css";
import Aos from "aos";
import { ArticleMainFirst } from "./components/Body/styles";
import { MainContainer } from "./components/Main/styles";
import HeaderComponent from "./components/Header";
import TextArticleTop from "./components/TextArticleTop";
import VideoComponent from "./components/Video";
import MainComponent from "./components/Main";
import DivisorComponent from "./components/Divisor";
import ChaptersComponent from "./components/Chapters";
import WarrantyComponent from "./components/Warranty";
import FooterComponent from "./components/Footer";
import Favicon from "./assets/img/favicon.ico";
import PriceComponent from "./components/Price";
import NavigatorComponent from "./components/Navigator";

function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>E-Book First 9</title>
        <meta
          name="description"
          content="A Website created for First 9 E-Book sales."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href={Favicon} />
      </Helmet>
      <MainContainer>
        <NavigatorComponent />
        <HeaderComponent />
        <ArticleMainFirst>
          <TextArticleTop />
          <VideoComponent />
          <MainComponent />
          <DivisorComponent />
          <ChaptersComponent />
          <PriceComponent />
          <WarrantyComponent />
          <FooterComponent />
        </ArticleMainFirst>
      </MainContainer>
    </>
  );
}

export default App;
