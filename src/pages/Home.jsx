import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
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
    if (category == "All") {
      filtered = data;
    }
    if (search !== "") {
      filtered = filtered.filter((product) => product?.name.includes(search));
    }
    setFilteredData(filtered);
  }, [data, category, search]);

  return (
    <>
      <nav className=" navbar navbar-expand-md navbar-light shadow-sm">
        <div className="container">
          <Link to="/" className="navbar-brand">
            Upayment
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent123"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent123"
          >
            <ul className="navbar-nav ms-auto mb-2 me-3 mb-lg-0">
              <li>
                <NavLink
                  style={({ isActive }) => ({ color: isActive && "black" })}
                  to="/"
                  className="nav-link"
                  aria-current="page"
                >
                  Register
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
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
      <div className="d-flex flex-wrap">
        {filteredData?.map((item) => {
          const { avatar, id, price, name } = item;
          return (
            <div className=" p-3" key={id}>
              <div className="image" width="250px" height="250px">
                <img
                  src={avatar}
                  alt={name}
                  style={{
                    width: "12rem",
                    height: "12rem",
                    margin: "auto",
                  }}
                />
              </div>

              <h4>{name}</h4>
              <p>${price}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
