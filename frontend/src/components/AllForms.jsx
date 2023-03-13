import axios from "axios";
import React, { useEffect, useState } from "react";
import { BACKEND_URL } from "../App";

const AllForms = () => {
  const [loading, setloading] = useState(true);
  const [allForms, setallForms] = useState([]);

  const getAllForms = async () => {
    try {
      const res = await axios.get(`${BACKEND_URL}/get-user-form`);
      // console.log(res.data);
      setloading(false);
      setallForms(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getAllForms();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
        <h1 style={{textAlign:"center",margin:"10px"}}>All Forms</h1>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "10px",
            }}
          >
            {allForms.map((item) => (
              <div
                key={item._id}
                style={{
                  background: "white",
                  padding: "10px",
                  borderRadius: "20px",
                  width: "300px",
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <h1>{item.name}</h1>
                <p style={{ color: "gray", fontSize: "15px" }}>{item.email}</p>
                <p style={{ color: "gray", fontSize: "15px" }}>{item.dob}</p>
                <p style={{ color: "gray", fontSize: "15px" }}>{item.mobile}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default AllForms;
