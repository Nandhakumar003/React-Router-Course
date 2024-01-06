import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Categoriebylist = () => {
  const { categoryid } = useParams();
  const [category, setCategory] = useState([]);
  const [reload, setReload] = useState(true);

  const fetchCategorieData = async () => {
    console.log(category.length);
    const categorieData = await axios.get(
      `https://fakestoreapi.com/products/category/${categoryid}`
    );
    setCategory(categorieData.data);
  };

  useEffect(() => {
    fetchCategorieData();
  }, [categoryid]);

  return (
    <div className="container">
      <div className="row g-2 mt-2">
        <div>{categoryid.toUpperCase()}</div>
        {category.length > 0 ? (
          category.map((product) => (
            <div className="col-xl-3 col-lg-4 col-md-6 col-12" key={product.id}>
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src={product.image}
                  className="card-img-top rounded custom-img mx-auto d-block"
                  style={{ width: "10rem" }}
                  alt="Image"
                />
                <div className="card-body">
                  <h5 className="card-title text-truncate">{product.title}</h5>
                  <p className="card-text">{`#${product.category}`}</p>
                  <h4 className="card-title">{`${product.price}$`}</h4>
                  <div className="d-flex justify-content-around">
                    <Link to="." className="btn btn-danger">
                      Buy Now
                    </Link>
                    <Link
                      to={`/product/${product.id}`}
                      className="btn btn-outline-primary"
                    >
                      Get More Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>Loading....</div>
        )}
      </div>
    </div>
  );
};

export default Categoriebylist;
