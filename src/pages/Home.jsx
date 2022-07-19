import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const url =
    " https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/";
  const [data, setData] = useState("");

  const getData = async () => {
    const data = await axios.get(url);
    console.log(data);
    setData(data.data);
  };
  useEffect(() => {
    getData();
  }, []);

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
        />

        <select
          className="form-select w-25 h-10  m-5"
          id="floatingSelect"
          aria-label="Floating label select example"
        >
          <option selected>Categories</option>
          <option value="1">Electronic</option>
          <option value="2">Furnitures</option>
          <option value="3">Clothing</option>
          <option value="3">Phones</option>
        </select>
      </div>
      <div className="d-flex">
        {data?.map((item) => {
          const { avatar, id, price, name } = item;
          return (
            <div className=" p-3">
              <img
                src={avatar}
                alt={name}
                style={{ width: "150px", height: "100%" }}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
