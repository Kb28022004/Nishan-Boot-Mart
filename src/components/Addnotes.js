import { Box } from "@mui/material";
import React, { useState } from "react";
import { Button } from "../styles/Button";
// import noteContext from '../Context/notes/noteContext';

const Addnotes = () => {
  const [note, setnote] = useState({ title: "", description: "", tag: "" });
  const onchange = (e) => {
    setnote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <Box
      sx={{
        backgroundColor: "white",
        color: "black",
        height: "650px",
        width: "40%",
        padding: "20px",
        margin: "0px auto",
        marginTop: "20px",
        borderRadius: "22px",
        border: "1px solid black",
      }}
    >
      <h2 style={{ textAlign: "center" }}>Add your Products</h2>
      <hr style={{ width: "50%", marginLeft: "120px", fontWeight: "bold" }} />
      <form className="my-3" style={{ paddingTop: "32px" }}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            aria-describedby="emailHelp"
            placeholder="Name of the Products"
            onChange={onchange}
            required
            minLength={5}
            style={{ padding: "12px" }}
            
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="description"
            placeholder="Description"
            name="description"
            required
            style={{ padding: "12px", marginTop: "18px" }}
            onChange={onchange}
            minLength={5}
            />
        </div>
        <div className="mb-3">
          <input
            type="number"
            className="form-control"
            style={{ padding: "12px", marginTop: "18px" }}
            id="price"
            placeholder="Price"
            required
            name="price"
            onChange={onchange}
            />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            style={{ padding: "12px", marginTop: "18px" }}
            id="brand"
            placeholder="Brand"
            name="brand"
            required
            onChange={onchange}
            />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            style={{ padding: "12px", marginTop: "18px" }}
            id="category"
            required
            placeholder="category"
            name="category"
            onChange={onchange}
          />
        </div>
        <div className="mb-3">
          <input
            type="number"
            className="form-control"
            id="size"
            style={{ padding: "12px", marginTop: "18px" }}
            name="size"
            placeholder="Size"
            required
            onChange={onchange}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="image"
            name="image"
            required
            style={{ padding: "12px", marginTop: "18px" }}
            placeholder="Image_url"
            onChange={onchange}
          />
        </div>

        <Button
          style={{
            borderRadius: "8px",
            height: "50px",
            marginTop: "18px",
            marginLeft: "180px",
          }}
        >
          {" "}
          Add{" "}
        </Button>
      </form>
    </Box>
  );
};

export default Addnotes;
