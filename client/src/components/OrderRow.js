import React from "react";
import ProductCardForOrders from "./ProductCardForOrders";

const OrderRow = ({ order }) => {
  const { orderedAt, userData, addressData, productsData } = order;
  const orderDate = orderedAt.split("T")[0];

  return (
    <div className="w-full mx-auto bg-gray-100 shadow-md rounded-lg py-3 px-10 mb-6">
      <div className="flex justify-between py-3 place-items-center border-b-2">
        <h2 className="text-2xl font-semibold">Order Details</h2>
        <div>
          <p className="text-gray-600">
            Ordered At: <span className="text-black">{orderDate}</span>
          </p>
          <p className="text-gray-600">
            Order ID: <span className="text-black">{order._id}</span>
          </p>
        </div>
      </div>
      <div className="flex mt-3 justify-between">
        <div>
          <h3 className="text-xl font-medium mb-4">Products Ordered</h3>
          {productsData.map((product) => (
            <ProductCardForOrders
              key={productsData.productDetails}
              product={product}
            />
          ))}
        </div>
        <div className="h-fit">
          <div className="pb-4 mb-4">
            <h3 className="text-lg font-medium">User Information</h3>
            <p className="text-gray-600">
              Name: <span className="text-black">{userData.name}</span>
            </p>
            <p className="text-gray-600">
              Email: <span className="text-black">{userData.email}</span>
            </p>
            <p className="text-gray-600">
              Phone Number:{" "}
              <span className="text-black">
                {userData.phone_number.toString().substring(2)}
              </span>
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium">Shipping Address</h3>
            <p className="text-gray-600">
              {addressData.line1}, {addressData.line2}
            </p>
            <p className="text-gray-600">
              {addressData.city}, {addressData.state} -{" "}
              {addressData.postal_code}
            </p>
            <p className="text-gray-600">{addressData.country}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderRow;
