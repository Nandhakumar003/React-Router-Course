import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const fetchproductData = async () => {
    const productData = await axios.get(
      `https://fakestoreapi.com/products/${id}`
    );
    console.log(productData.data);
    setData(productData.data);
  };

  useEffect(() => {
    fetchproductData();
  }, []);

  return (
    <div>
      {Object.keys(data).length != 0 ? (
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={data.image}
                className="img-fluid rounded-start"
                alt="Image"
              />
            </div>
            <div className="row">
              <div className="card-body">
                <h5 className="card-title">{data.title}</h5>
                <p className="card-subtitle text-muted">{data.description}</p>
                <p className="card-text">{`${data.price}$`}</p>
                <Link to="" className="btn btn-primary">
                  Buy Now
                </Link>
              </div>
              <h2 className="badge rounded-pill bg-danger">
                {data.rating?.rate}
              </h2>
            </div>
          </div>
        </div>
      ) : (
        <div> Loading.........</div>
      )}
    </div>
  );
};

export default ProductDetails;
