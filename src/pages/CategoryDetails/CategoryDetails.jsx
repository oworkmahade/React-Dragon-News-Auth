import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CategoryDetails() {
  const { id } = useParams();
  const [selectedNews, setSelectedNews] = useState(null);

  useEffect(() => {
    fetch("/categories.json")
      .then((res) => res.json())
      .then((data) => {
        const selectedCategoryNews = data.find(
          (category) => category.id === Number(id),
        );
        setSelectedNews(selectedCategoryNews);
      });
  }, [id]);

  console.log(selectedNews);

  return (
    <div className="max-w-xl p-6 mx-auto mt-6 transition-all duration-300 bg-white border shadow-md rounded-2xl hover:shadow-lg">
      <h2 className="mb-4 text-2xl font-bold text-gray-800">
        {selectedNews?.name}
      </h2>
      <p>
        <span className="font-semibold">Category ID:</span> {selectedNews?.id}
      </p>

      <div className="pt-4 mt-4 border-t">
        <button
          onClick={() => globalThis.history.back()}
          className="px-4 py-2 text-white transition bg-blue-600 rounded-lg hover:bg-blue-700"
        >
          ⬅ Go Back
        </button>
      </div>
    </div>
  );
}

export default CategoryDetails;
