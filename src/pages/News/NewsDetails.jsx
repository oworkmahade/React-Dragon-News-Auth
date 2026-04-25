import { useParams, Link } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import { useState, useEffect } from "react";

function NewsDetails() {
  const { id } = useParams();
  const [selectedNews, setSelectedNews] = useState(null);

  useEffect(() => {
    // Fetch the news details based on the id
    fetch("/news.json")
      .then((res) => res.json())
      .then((data) => {
        const newsItem = data.find((item) => item.id === id);
        setSelectedNews(newsItem);
      });
  }, [id]);

  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <div className="grid grid-flow-col gap-4 md:grid-cols-3">
        <div className="col-span-3 p-4 border-2 border-gray-200 newsDetails">
          <div className="max-w-4xl p-4 mx-auto">
            {/* Image */}
            <img
              src={selectedNews?.image_url}
              alt={selectedNews?.title}
              className="w-full h-[350px] object-cover rounded-lg"
            />

            {/* Title */}
            <h1 className="mt-6 mb-3 text-2xl font-bold md:text-3xl">
              {selectedNews?.title}
            </h1>

            {/* Meta Info */}
            <p className="mb-4 text-sm text-gray-500">
              {new Date(selectedNews?.author?.published_date).toDateString()} |{" "}
              Tag Cloud Tags: {selectedNews?.tags?.join(", ")}
            </p>

            {/* Details */}
            <p className="leading-relaxed text-justify text-gray-700">
              {selectedNews?.details}
            </p>

            {/* Button */}
            <Link to={`/categoryDetails/${selectedNews?.category_id}`}>
              <button className="px-5 py-2 mt-6 text-white bg-red-500 rounded hover:bg-red-600">
                ← All news in this category
              </button>
            </Link>
          </div>
        </div>
        <div className="grid-cols-1 rightSidebar">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
}

export default NewsDetails;
