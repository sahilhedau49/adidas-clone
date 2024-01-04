import React, { useState } from "react";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";

const UploadProduct = () => {
  const [formData, setFormData] = useState({
    imgUrl: "",
    name: "",
    description: "",
    category: "",
    price: "",
  });

  const navigate = useNavigate();

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
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      image: e.target.files[0],
    }));
  };

  const getImageUrl = () => {
    // store this image in firebase and get its link
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    getImageUrl();
    if (!validate()) return;
    navigate("/dashboard");
  };

  return (
    <div className="my-10 mx-auto p-4 w-[40%]">
      <h1 className="text-3xl text-center mb-10 overflow-y-hidden">
        Upload Product
      </h1>
      <form onSubmit={handleSubmit} className="">
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
        <div className="mt-4">
          <label className="mb-2 text-lg">Image:</label>
          <br />
          <input
            type="file"
            name="imgUrl"
            onChange={handleImageChange}
            accept="image/*"
            className="mb-3"
          />
        </div>
        <div className="text-center mt-6">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Upload
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

export default UploadProduct;
