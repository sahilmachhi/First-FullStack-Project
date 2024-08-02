import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const CreateProduct = () => {
  const [productName, SetProductName] = useState("");
  const [productPrice, SetProductPrice] = useState();
  const [productImage, setProductImage] = useState("");
  const navigate = useNavigate();

  const CreateProduct = async () => {
    await axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/product`, {
        name: productName,
        price: productPrice,
        image: productImage,
      })
      .then(function (response) {
        console.log(response);
        navigate("/");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <div className="flex items-center flex-col gap-10 justify-center h-[400px]">
        <div className="w-2/4 flex items-center  justify-between flex-col gap-7">
          <div>
            <label
              htmlFor="productName"
              className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
            >
              <input
                type="text"
                id="productName"
                className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 h-10"
                placeholder="productName"
                onChange={(e) => SetProductName(e.target.value)}
              />

              <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                Product name
              </span>
            </label>
          </div>
          <div>
            <label
              htmlFor="SetProductPrice"
              className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
            >
              <input
                type="text"
                id="SetProductPrice"
                className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 h-10"
                placeholder="SetProductPrice"
                onChange={(e) => SetProductPrice(e.target.value)}
              />

              <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                Price
              </span>
            </label>
          </div>
          <div>
            <label
              htmlFor="setProductImage"
              className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
            >
              <input
                type="text"
                id="setProductImage"
                className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 h-10"
                placeholder="setProductImage"
                onChange={(e) => setProductImage(e.target.value)}
              />

              <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                imageUrl
              </span>
            </label>
          </div>
        </div>
        <div>
          {/* Pill */}

          <button
            className="group inline-block rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
            href="#"
            onClick={CreateProduct}
          >
            <span className="block rounded-full bg-white px-8 py-3 text-sm font-medium group-hover:bg-transparent">
              Submit
            </span>
          </button>
        </div>
      </div>
    </>
  );
};
