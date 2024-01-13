import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Product = () => {
  const [data, setData] = useState([]);
  const [searchstatus, setSearchstatus] = useState(false);
  const fetchproductData = async () => {
    const productData = await axios.get("https://fakestoreapi.com/products");
    localStorage.setItem(
      "local_product_data",
      JSON.stringify(productData.data)
    );
    setData(productData.data);
  };

  useEffect(() => {
    const local_data = JSON.parse(localStorage.getItem("local_product_data"));
    if (local_data != null) {
      console.log("Data from Local");
      setData(local_data);
    } else {
      console.log("Data from API");
      fetchproductData();
    }
  }, []);

  const handlefiltersChange = (e) => {
    console.log(e.target.value.length);
    let filterProd = data.filter((k) =>
      k.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    console.log(filterProd);
    if (e.target.value.length > 0) {
      if (filterProd.length > 0) {
        setData(filterProd);
      } else {
        setSearchstatus(true);
        setData([]);
      }
    } else {
      fetchproductData();
    }
  };

  return (
    <div className="container">
      <div className="row mt-1">
        <div className="col-6">
          <h5>All Product</h5>
        </div>
        <div className="col-6">
          <input
            type="search"
            name="search"
            id="search"
            className="form-control"
            placeholder="Search...."
            onChange={(e) => handlefiltersChange(e)}
          />
        </div>
      </div>
      <div className="row g-2 mt-2">
        {data.length > 0 ? (
          data.map((product) => (
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
                      to={`${product.id}`}
                      className="btn btn-outline-primary"
                    >
                      Get More Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : searchstatus ? (
          <div>No Data</div>
        ) : (
          <div>Loading....</div>
        )}
      </div>
    </div>
  );
};

export default Product;
