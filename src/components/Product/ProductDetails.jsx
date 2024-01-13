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
    <div className="row">
      {Object.keys(data).length != 0 ? (
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4">
              <img
                src={data.image}
                className="img-fluid rounded-start"
                alt="Image"
                style={{ width: "80%", height: "80%" }}
              />
            </div>
            <div className="col-12 col-sm-8 col-md-8 col-lg-8 col-xl-8">
              <div className="card-body">
                <h5 className="card-title">{data.title}</h5>
                <p className="card-text">{data.category}</p>
                <p className="card-subtitle text-muted">{data.description}</p>
                <p className="card-text text-decoration-line-through d-inline">
                  {data.price - 1}$
                </p>
                <h4 className="card-text d-inline ms-2">{data.price}$</h4>
                <Link to="" className="mt-2 btn btn-primary d-block">
                  Buy Now
                </Link>
              </div>
              <h5>Rating</h5>
              <div
                className="progress progress-bar bg-success "
                role="progressbar"
                style={{
                  width: `${Math.round(data.rating?.rate * 20)}%`,
                  backgroundColor: "red",
                  height: "3vh",
                }}
              >
                {data.rating?.rate}/5
              </div>

              <h5 className="d-inline-block justify-content-end">
                {data.rating?.count} Reviews
              </h5>
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
