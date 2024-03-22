import React from "react";
import Trending from "../components/Trending";
import UpcomingMovie from "../components/UpcomingMovie";
import PlayingNow from "../components/PlayingNow";

const Home = () => {
  return (
    <div className="flex flex-col gap-6">
      <Trending />
      <PlayingNow />
      <UpcomingMovie />
    </div>
  );
};

export default Home;
