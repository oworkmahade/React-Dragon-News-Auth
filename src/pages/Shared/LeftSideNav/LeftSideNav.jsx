import { useEffect, useState } from "react";
import Categories from "./Categories";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  console.log(categories);

  return (
    <div className="border-2 border-gray-600">
      <h2 className="mb-4 text-xl font-semibold">All Category</h2>

      <p className="py-4 mb-2 text-lg font-semibold text-center rounded-lg bg-slate-200">
        National News
      </p>
      <div className="">
        {categories.map((categoryItem) => (
          <Categories key={categoryItem.id} props={categoryItem}></Categories>
        ))}
      </div>
    </div>
  );
};

export default LeftSideNav;
