/* eslint-disable react/prop-types */
import axios from "axios";
import { PopupBox } from "./PopupBox";
import { useState } from "react";

export const ProductCard = ({ product, fetchApi }) => {
  const [display, setDisplay] = useState("hidden");
  const deleteProduct = async () => {
    await axios
      .delete(`${import.meta.env.VITE_BACKEND_URL}/product/${product._id}`)
      .then(function (response) {
        console.log(response);
        fetchApi();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // UpdateProduct();
  return (
    <>
      <article className="group flex items-center justify-center flex-col w-full z-0">
        <img
          alt="product image"
          src={product.image}
          className="h-56 w-full rounded-xl object-cover shadow-xl "
        />

        <div className="p-4 w-full flex justify-between items-center">
          <a href="#">
            <h1 className="text-lg font-medium text-gray-900">
              {product.name}
            </h1>
            <h3 className="text-lg font-medium text-gray-500">
              price: {product.price} ₹
            </h3>
          </a>
          <div className="flex items-center justify-between">
            <span className="inline-flex overflow-hidden rounded-md border bg-white shadow-sm">
              <button
                className="inline-block border-e p-3 text-gray-700 hover:bg-gray-50 focus:relative"
                onClick={() => setDisplay("flex")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                  />
                </svg>
              </button>

              <button
                className="inline-block p-3 text-gray-700 hover:bg-gray-50 focus:relative"
                title="Delete Product"
                onClick={deleteProduct}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
            </span>
          </div>
        </div>
      </article>
      <PopupBox
        display={display}
        product={product}
        setDisplay={setDisplay}
        fetchApi={fetchApi}
      />
    </>
  );
};
