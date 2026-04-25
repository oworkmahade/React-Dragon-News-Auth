import PropTypes from "prop-types";
import { FaEye, FaStar, FaShareAlt, FaRegBookmark } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsCard = ({ singleNews }) => {
  const { id, title, author, image_url, details, rating, total_view } =
    singleNews || {};
  return (
    <div className="p-4 mb-6 bg-white border rounded-lg shadow-sm">
      {/* Top Author Section */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt="author"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h4 className="font-semibold">{author.name}</h4>
            <p className="text-sm text-gray-500">
              {new Date(author.published_date).toDateString()}
            </p>
          </div>
        </div>

        {/* Icons */}
        <div className="flex gap-3 text-gray-500 cursor-pointer">
          <FaRegBookmark />
          <FaShareAlt />
        </div>
      </div>

      {/* Title */}
      <h2 className="mb-3 text-lg font-bold">{title}</h2>

      {/* Image */}
      <img
        src={image_url}
        alt="news"
        className="object-cover w-full mb-3 rounded"
      />

      {/* Details */}
      <p className="text-sm text-gray-600">
        {details.length > 200 ? (
          <>
            {details.slice(0, 200)}...
            <span className="ml-1 font-semibold text-orange-500 cursor-pointer">
              <Link to={`/newsDetails/${id}`}>Read More</Link>
            </span>
          </>
        ) : (
          details
        )}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between mt-4">
        {/* Rating */}
        <div className="flex items-center gap-1 text-orange-400">
          {[...new Array(5)].map((_, i) => (
            <FaStar key={i} />
          ))}
          <span className="ml-2 text-gray-700">{rating.number}</span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-2 text-gray-500">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

NewsCard.propTypes = {
  singleNews: PropTypes.object.isRequired,
};

export default NewsCard;
