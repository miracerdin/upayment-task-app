import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ProductDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isloading, setIsLoadind] = useState(true);
  const url = `https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/${id}`;
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const data = await axios.get(url);
      console.log(data.data);
      setData(data.data);
      setIsLoadind(false);
    } catch (error) {
      console.log(error);
      setIsLoadind(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  if (isloading) {
    return <div className="text-center">Loading..</div>;
  }
  return (
    <div className="min-h-screen bg-silver d-flex flex-col justify-center items-center">
      <div>
        <div className="d-flex " width="250px" height="250px">
          <img
            className="bg-white"
            src={data.avatar}
            alt={data.name}
            style={{
              width: "12rem",
              height: "12rem",
            }}
          />
          <div className="d-flex flex-col justify-between mx-2">
            <h2>{data.name}</h2>
            <p>$ {data.price}</p>
          </div>
        </div>
        <hr />
        <h6>Description</h6>
        <p className="w-96">{data.description}</p>
        <button
          onClick={() => navigate(-1)}
          className="bg-bluedark hover:bg-bluemiddle text-white font-bold py-2 px-4 rounded-full"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
