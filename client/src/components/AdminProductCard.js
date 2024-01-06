import React, { useState } from "react";
import { Link } from "react-router-dom";
import Zoom from "react-reveal/Zoom";
import axios from "axios";
import ReactLoading from "react-loading";
import { ToastContainer, toast } from "react-toastify";

const AdminProductCard = (props) => {
  const { id, name, price, imgUrl } = props;

  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    setLoading(true);

    const res = await axios.delete(
      `${process.env.React_App_Backend_API}/product/${id}`
    );

    console.log(res);
    if (res.status === 200) {
      setLoading(false);
      toast.success("Product Deleted...", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
  };

  return (
    <div className="bg-gray-200 card-bg h-full">
      <Link to={`/product/${id}`} className="flex justify-between flex-col p-4">
        <div className="h-[12rem] md:h-[8rem]">
          <img
            className="rounded-md mx-auto max-h-[100%] max-w-[100%]"
            src={imgUrl}
            alt="Product Details"
          />
        </div>
        <div className="mt-4 h-[30%] md:mt-2 md:h-max">
          <div className="text-lg font-bold text-slate-700 md:text-sm">
            {`${name.substring(0, 20)} ...`}
          </div>
          <p className="mt-4 text-xl md:text-sm md:mt-2">
            Price: <span className="text-sky-700">{price}</span> /-
          </p>
        </div>
        {loading && (
          <div className="block mb-10">
            <ReactLoading
              className="mx-auto"
              type={"cylon"}
              color={"black"}
              height={"10%"}
              width={"10%"}
            />
          </div>
        )}
      </Link>
      <div className="flex justify-between px-6 pb-4 opacity-50 hover:opacity-100 duration-300">
        <div>
          <button className="px-2 py-[2px] rounded-md bg-slate-300 border-2 border-slate-700">
            Edit
          </button>
        </div>
        <div>
          <button
            onClick={handleDelete}
            className="px-2 py-[2px] rounded-md bg-red-300 border-2 border-slate-700"
          >
            Delete
          </button>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default AdminProductCard;
