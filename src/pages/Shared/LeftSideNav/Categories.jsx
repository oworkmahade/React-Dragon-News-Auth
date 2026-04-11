import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Categories = ({ category }) => {
  const { id, name } = category;
  return (
    <div>
      <Link to={`/categoryDetails/${id}`}>
        <h2 className="py-2 ml-8 font-semibold text-md text-slate-600">
          {name}
        </h2>
      </Link>
    </div>
  );
};

Categories.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default Categories;
