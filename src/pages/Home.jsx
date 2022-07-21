import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const navigate = useNavigate();
  const url =
    " https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/";
  const [data, setData] = useState([]);
  const [category, setCategory] = useState(null);
  const [iscompleted, setIscompleted] = useState("");
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  console.log(category);
  console.log(search);
  const getData = async () => {
    try {
      const data = await axios.get(url);
      console.log(data.data);
      setData(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    let filtered = data || [];
    if (category) {
      filtered = data.filter((product) => product.category === category);
    }
    if (category === "All") {
      filtered = data;
    }
    if (search !== "") {
      filtered = filtered.filter((product) => product?.name.includes(search));
    }
    setFilteredData(filtered);
  }, [data, category, search]);
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${url}/${id}`);
    } catch (error) {
      console.log(error);
    }
    getData();
  };
  // const categoriedSet = (category) => {
  //   const filt = data.filter((item) => item.category !== category);
  //   console.log(filt);
  //   const setted = new Set(filt);
  //   setIscompleted(setted);
  // };
  // useEffect(() => {
  //   categoriedSet();
  // }, []);
  // console.log(iscompleted);
  return (
    <body className="min-h-screen bg-silver relative">
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
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option selected>Categories</option>
          <option value="All">All</option>
          <option value="Electronic">Electronic</option>
          <option value="Furnitures">Furnitures</option>
          <option value="Clothing">Clothing</option>
          <option value="Accessories">Accessories</option>
        </select>
      </div>
      <div className="d-flex flex-wrap justify-center">
        {filteredData?.map((item) => {
          const { avatar, id, price, name } = item;
          return (
            <div className="text-center">
              <div
                className="bg-white rounded-lg  p-3 m-3  text-center cursor-pointer"
                key={id}
                onClick={() => navigate(`/productdetail/${id}`)}
              >
                <div
                  className="image"
                  width="250px"
                  height="250px"
                  objectFit="cover"
                >
                  <img
                    src={avatar}
                    alt={name}
                    style={{
                      width: "12rem",
                      height: "12rem",
                      margin: "auto",
                      objectFit: "cover",
                    }}
                  />
                </div>

                <h4>{name}</h4>
                <p>${price}</p>
              </div>
              <button
                type="button"
                class="focus:outline-none text-white text-center bg-redligth hover:bg-red focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                onClick={() => handleDelete(id)}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
      <button
        type="button"
        class="fixed right-0 top-2  focus:outline-none text-white text-center bg-black hover:bg-bluedark focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-3 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        onClick={() => navigate("/create")}
      >
        Add
      </button>
    </body>
  );
};

export default Home;
