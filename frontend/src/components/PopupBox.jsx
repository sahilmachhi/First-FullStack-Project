/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import { useState } from "react";
import axios from "axios";
export const PopupBox = ({ product, display, setDisplay, fetchApi }) => {
  const [updatedProduct, setUpdatedProduct] = useState(product);

  const UpdateProduct = async () => {
    await axios
      .put(
        `${import.meta.env.VITE_BACKEND_URL}/product/${product._id}`,
        updatedProduct
      )
      .then(function (response) {
        console.log(response);
        fetchApi();
        setDisplay("hidden");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <div
        className={`fixed ${display} flex-col bg-white h-auto p-1 w-[880px] z-10 mx-auto left-0 right-0`}
      >
        <div className="w-full relative flex items-center justify-end px-9">
          <button className="" onClick={() => setDisplay("hidden")}>
            close
          </button>
        </div>
        <div>
          <div className=" flex items-center  justify-between flex-col gap-7">
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
                  value={updatedProduct.name}
                  onChange={(e) =>
                    setUpdatedProduct({
                      ...updatedProduct,
                      name: e.target.value,
                    })
                  }
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
                  value={updatedProduct.price}
                  onChange={(e) =>
                    setUpdatedProduct({
                      ...updatedProduct,
                      price: e.target.value,
                    })
                  }
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
                  value={updatedProduct.image}
                  onChange={(e) =>
                    setUpdatedProduct({
                      ...updatedProduct,
                      image: e.target.value,
                    })
                  }
                />

                <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                  imageUrl
                </span>
              </label>
            </div>
          </div>
          <div className="flex items-center justify-center">
            {/* Pill */}

            <button
              className="group inline-block rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
              href="#"
              onClick={UpdateProduct}
            >
              <span className="block rounded-full bg-white px-8 py-3 text-sm font-medium group-hover:bg-transparent">
                Submit
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
