import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Categories = ({ props }) => {
  const { id, name } = props;
  return (
    <div>
      <Link to={`/category/${id}`}>
        <h2 className="ml-4 text-md text-slate-500">{name}</h2>
      </Link>
    </div>
  );
};

Categories.propTypes = {
  props: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }).isRequired,
};

export default Categories;
