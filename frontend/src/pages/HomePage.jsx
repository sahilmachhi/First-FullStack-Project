import { ProductCard } from "../components/ProductCard";
import axios from "axios";
import { useState, useEffect } from "react";
export const HomePage = () => {
  const [products, setProducts] = useState([]);
  console.log(`env file name is ${import.meta.env.VITE_BACKEND_URL}`);
  const fetchApi = async () => {
    await axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/product`)
      .then(function (response) {
        const data = response.data.products;
        setProducts(data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  // fetchApi();
  useEffect(() => {
    fetchApi();
  }, []);

  console.log("products is here: ", products);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-20 my-10">
        {!products ? (
          <h1>no product</h1>
        ) : (
          products.map((product, id) => (
            <ProductCard key={id} product={product} fetchApi={fetchApi} />
          ))
        )}
      </div>
    </>
  );
};
