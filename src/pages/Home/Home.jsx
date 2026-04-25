import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";

import { useLoaderData } from "react-router-dom";
import NewsCard from "../News/NewsCard";
import { useState } from "react";

const Home = () => {
  const news = useLoaderData();

  const [showAll, setShowAll] = useState(false);
  const displayedNews = showAll ? news : news.slice(0, 3);

  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
        <div>
          <LeftSideNav></LeftSideNav>
        </div>
        {/* news container  */}
        <div className="col-span-2 border-2 border-gray-600">
          <div>
            {" "}
            {displayedNews.map((singleNews) => (
              <NewsCard key={singleNews._id} singleNews={singleNews}></NewsCard>
            ))}
          </div>
          <div>
            {" "}
            {/* More News Button */}
            {!showAll && (
              <div className="mt-6 text-center">
                <button
                  onClick={() => setShowAll(true)}
                  className="px-4 py-2 font-semibold text-white bg-orange-500 rounded hover:bg-orange-600"
                >
                  More News
                </button>
              </div>
            )}
          </div>
        </div>

        <div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
