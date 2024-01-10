import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import useStorage from "../hooks/useStorage";
import ReactLoading from "react-loading";

const UploadProduct = () => {
  const { uploadProductIntoDB, isStored, setIsStored, loading } = useStorage();

  const [formData, setFormData] = useState({
    image: null,
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

    if (formData.image === null) {
      toast.error("Please provide image of product", {
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

  const handleImageChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      image: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    uploadProductIntoDB(formData);
    setTimeout(() => setIsStored(false), 10000);
  };

  useEffect(() => {
    if (isStored) {
      toast.success("🛒 Product Published!!!", {
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
  }, [isStored]);

  return (
    <div className="my-10 mx-auto p-4 w-[40%] md:w-[80%]">
      <h1 className="text-3xl text-center font-medium mb-10 overflow-y-hidden">
        Upload Product
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
          <select
            className="mb-3 p-2 w-full border-2 hover:border-slate-400 rounded"
            name="category"
            onChange={handleChange}
          >
            <option value="">-- Select --</option>
            <option value="shoes">Shoes</option>
            <option value="clothing">Clothing</option>
            <option value="accessories">Accessories</option>
            <option value="fanstore">Fanstore</option>
          </select>
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
            onClick={handleSubmit}
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
