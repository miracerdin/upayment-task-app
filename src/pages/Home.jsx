import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { url } from "../private/private";

const Home = () => {
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [category, setCategory] = useState(null);
  const [categories, setCategroies] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const getData = async () => {
    try {
      const data = await axios.get(url + "/products/");
      console.log(data.data);
      setData(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getCategories = async () => {
    try {
      const { data } = await axios.get(url + "/categories/");
      console.log(data);
      setCategroies(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  useEffect(() => {
    getData();
    getCategories();
  }, []);

  useEffect(() => {
    let filtered = data || [];
    if (category) {
      filtered = data.filter((product) => product.category === category);
    }
    if (category === "All" || category === "Categories") {
      filtered = data;
    }
    if (search !== "") {
      filtered = filtered.filter((product) => product?.name.includes(search));
    }
    setFilteredData(filtered);
  }, [data, category, search]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(url + `products/${id}`);
    } catch (error) {
      console.log(error);
    }
    getData();
  };

  return (
    <div className="min-h-screen bg-silver relative">
      <div className="d-flex justify-between " style={{ alignItems: "center" }}>
        <input
          className="form-control me-2 w-25 pt-2 m-5"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={search}
          onChange={handleSearch}
        />

        <select
          className="form-select w-25 h-10  m-5"
          id="floatingSelect"
          aria-label="Floating label select example"
          defaultValue="Categories"
          // value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>Categories</option>
          <option value="All">All</option>
          {categories.map(({ name }, index) => (
            <option key={index} value={name}>
              {name}
            </option>
          ))}
        </select>
      </div>
      <div className="d-flex flex-wrap justify-center">
        {filteredData.length > 0 ? (
          filteredData.map((item) => {
            const { avatar, id, price, name } = item;
            return (
              <div key={id} className="text-center">
                <div
                  className="bg-white rounded-lg  p-3 m-3  text-center cursor-pointer"
                  key={id}
                  onClick={() => navigate(`/productdetail/${id}`)}
                >
                  <div
                    className="image"
                    width="250px"
                    height="250px"
                    // objectFit="cover"
                  >
                    <img
                      src={avatar}
                      alt={name}
                      style={{
                        width: "12rem",
                        height: "12rem",
                        margin: "auto",
                        // objectFit: "cover",
                      }}
                    />
                  </div>

                  <h4>{name}</h4>
                  <p>${price}</p>
                </div>
                <button
                  type="button"
                  className="focus:outline-none text-white text-center bg-redligth hover:bg-red focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  onClick={() => handleDelete(id)}
                >
                  Delete
                </button>
              </div>
            );
          })
        ) : (
          <div>There is no results for {category}</div>
        )}
      </div>
      <button
        type="button"
        className="fixed right-0 top-16 sm:top-2 focus:outline-none text-white text-center bg-black hover:bg-bluedark focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-3 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        onClick={() => navigate("/create")}
      >
        Add
      </button>
    </div>
  );
};

export default Home;
