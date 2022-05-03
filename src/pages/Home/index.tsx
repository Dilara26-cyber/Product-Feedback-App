import React from "react";

import FeedbackContainer from "../../components/Container/FeedbackContainer";
import SelectContainer from "../../components/Container/SelectContainer";
import Header from "../../components/Layout/Header";

const Home = () => {
  return (
    <>
      <Header />
      <SelectContainer />
      <FeedbackContainer />
    </>
  );
};

export default Home;
