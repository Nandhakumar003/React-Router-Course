import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  const [data, setData] = useState([]);

  const fetchCategory = async () => {
    const getData = await axios.get(
      "https://fakestoreapi.com/products/categories"
    );

    setData(getData.data);
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  return (
    <>
      {data.length > 0 ? (
        data.map((list) => (
          <li key={list}>
            <Link className="dropdown-item" to={`/category/${list}`}>
              {list.charAt(0).toUpperCase() + list.slice(1)}
            </Link>
          </li>
        ))
      ) : (
        <div> Loading.........</div>
      )}
    </>
  );
};

export default Categories;
