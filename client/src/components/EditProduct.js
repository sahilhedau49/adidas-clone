import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import ReactLoading from "react-loading";

const EditProduct = () => {
  const api_url = process.env.React_App_Backend_API;
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const dataRsv = await axios.get(`${api_url}/product/${id}`);
      setFormData(() => ({
        imgUrl: dataRsv.data.imgUrl,
        name: dataRsv.data.name,
        description: dataRsv.data.description,
        category: dataRsv.data.category,
        price: dataRsv.data.price,
      }));
    };

    getData();
  }, [id]);

  const [formData, setFormData] = useState({
    imgUrl: "",
    name: "",
    description: "",
    category: "",
    price: "",
  });

  const validate = () => {
    if (formData.name === "") {
      toast.error("Please provide name of product", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return false;
    }

    if (formData.description === "") {
      toast.error("Please provide description of product", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return false;
    }

    if (formData.category === "") {
      toast.error("Please provide category of product", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return false;
    }

    if (formData.price === "") {
      toast.error("Please provide price of product", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return false;
    }

    return true;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const update = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      setLoading(true);
      const res = await axios.put(
        `${process.env.React_App_Backend_API}/productUpdate/${id}`,
        formData
      );
      console.log(res);
      setLoading(false);
      if (res.status === 200) {
        toast.success("🛒 Product Updated!!!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    } catch (err) {
      console.log(err);
    }

    setTimeout(() => {
      navigate("/dashboard");
    }, 5000);
  };

  return (
    <div className="my-10 mx-auto p-4 w-[40%]">
      <h1 className="text-3xl text-center font-medium mb-10 overflow-y-hidden">
        Edit Product
      </h1>
      <form>
        <div>
          <label className="mb-2 text-lg">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mb-3 p-2 w-full border-2 hover:border-slate-400 rounded"
          />
        </div>

        <div>
          <label className="mb-2 text-lg">Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="mb-3 p-2 w-full border-2 hover:border-slate-400 rounded"
          ></textarea>
        </div>
        <div>
          <label className="mb-2 text-lg">Category:</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="mb-3 p-2 w-full border-2 hover:border-slate-400 rounded"
          />
        </div>
        <div>
          <label className="mb-2 text-lg">Price:</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="mb-3 p-2 w-full border-2 hover:border-slate-400 rounded"
          />
        </div>
        {loading && (
          <div className="block mb-10">
            <ReactLoading
              className="mx-auto"
              type={"spin"}
              color={"gray"}
              height={"10%"}
              width={"10%"}
            />
          </div>
        )}
        <div className="text-center mt-6">
          <button
            onClick={update}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Update
          </button>
        </div>
      </form>
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

export default EditProduct;
