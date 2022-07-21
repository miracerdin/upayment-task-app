import React, { useEffect, useState } from "react";
import { url } from "../private/private";
import axios from "axios";

const Create = () => {
  const [create, setCreate] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
    avatar: "",
    developerEmail: "",
  });
  const [alertInfo, setAlertInfo] = useState("");
  const [categories, setCategroies] = useState([]);
  const getCategories = async () => {
    try {
      const { data } = await axios.get(url + "/categories/");
      console.log(data);
      setCategroies(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCategories();
  }, []);
  const handleSubmit = (e) => {
    if (
      !alertInfo &&
      create.name &&
      create.description &&
      create.avatar &&
      create.category &&
      create.price &&
      create.developerEmail
    ) {
      e.preventDefault();
      postProduct();
      setCreate({
        name: "",
        price: "",
        category: "",
        description: "",
        avatar: "",
        developerEmail: "",
      });

    } else {
      setAlertInfo("Please fill all inputs correct format!!!");
    }
  };
  const postProduct = async () => {
    await axios.post(url + `/products`, create);
  };

  const handleChange = (e) => {
    if (e.target.id === "developerEmail") {
      /* eslint-disable */
      if (
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value)
      ) {
        setCreate({ ...create, [e.target.id]: e.target.value });
        setAlertInfo("");
      } else {
        setAlertInfo("mail incorrect");
        setCreate({ ...create, [e.target.id]: e.target.value });
      }
    } else {
      setCreate({ ...create, [e.target.id]: e.target.value });
    }
  };

  return (
    <div className="min-h-screen bg-silver d-flex flex-col justify-center items-center">
      <h2>Create Product</h2>
      <form className="w-full max-w-sm text-center " onSubmit={handleSubmit}>
        <div className="md:flex md:items-center lg:items-center mb-6">
          <div className="md:w-full">
            <input
              required
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="name"
              type="text"
              value={create.name}
              placeholder="Product name"
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-full">
            <textarea
              required
              id="description"
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Description..."
              value={create.description}
              onChange={(e) => handleChange(e)}
            ></textarea>
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-full">
            <input
              required
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="avatar"
              type="url"
              value={create.avatar}
              placeholder="Image url"
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-full">
            <select
              required
              id="category"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => handleChange(e)}
              value={create.category}
            >
              {/* <option selected>Category</option> */}
              {categories.map(({ name }, index) => (
                <option key={index} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-full">
            <input
              required
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="price"
              type="number"
              value={create.price}
              placeholder="Price"
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
        <div className="md:flex md:items-center lg:items-center mb-6">
          <div className="md:w-full">
            <input
              required
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="developerEmail"
              type="email"
              value={create.developerEmail}
              placeholder="Email"
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
        {alertInfo && (
          <div className="alert alert-danger" role="alert">
            {alertInfo}
          </div>
        )}
        <div className="md:flex md:items-center">
          <div className="md:w-full">
            <button
              className="shadow bg-black hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
              onClick={(e) => handleSubmit(e)}
            >
              Create
            </button>
          </div>
        </div>
      </form>

      {/* <form>
        <div class="mb-6">
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@flowbite.com"
            required = true
          />
        </div>
        <div class="mb-6">
          <label
            for="password"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required=""
          />
        </div>
        <div class="flex items-start mb-6">
          <div class="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value=""
              class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
              required=""
            />
          </div>
          <label
            for="remember"
            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Remember me
          </label>
        </div>
        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form> */}
    </div>
  );
};

export default Create;
