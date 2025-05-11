import React from "react";
import styles from "./index.module.css";
import Wrapper from "../../components/UI/wrapper/index";
import { Helmet } from "react-helmet-async";
import Hero from "../../components/hero";
import Teacher from "../../components/teacher";
import Students from "../../components/students";
import Faq from "../../components/faq";
import Main from "../../components/main";
import Scroll from "../../components/scroll";
import News from "../../components/news";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Deutsche Akademie Baku</title>
        <meta
          name="description"
          content="Almanya ausbildung yolu"
        />
        <meta
          name="keywords"
          content="Alman dili baku"
        />

      </Helmet>
      <Wrapper>
        <Main />
        <Scroll />
        <Hero />
        {/* <Teacher /> */}
        <Students />
        <News />
        <Faq />
      </Wrapper>
    </>
  );
};

export default Home;
