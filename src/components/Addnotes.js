import { Box } from "@mui/material";
import React, { useState } from "react";
import { Button } from "../styles/Button";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
// import noteContext from '../Context/notes/noteContext';

const Addnotes = () => {
  const [note, setnote] = useState({ title: "", description: "", tag: "" });
  const [files,setFiles]=useState();
  const [previews, setpreviews] = useState();

  //rendring previews
  useEffect(() => {
    if(!files) return;

  let temp=[];
  for (let i = 0; i < files.length; i++) {
 temp.push(URL.createObjectURL(files[i]));
    
  }
  const objectUrls=temp;
  setpreviews(objectUrls)

  //free memory
  for (let i = 0; i < objectUrls.length; i++) {
   return()=>{
URL.revokeObjectURL(objectUrls[i])
   }
    
  }
   
  }, [files])
  
  const onchange = (e) => {
    setnote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <Box
      sx={{
        backgroundColor: "white",
        color: "black",
        height: "700px",
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
      <form className="my-3" style={{ paddingTop: "32px"}}>
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
            style={{ padding: "12px",textTransform:"lowercase"  }}
            
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
            style={{ padding: "12px", marginTop: "18px",textTransform:"lowercase"  }}
            onChange={onchange}
            minLength={5}
            />
        </div>
        <div className="mb-3">
          <input
            type="number"
            className="form-control"
            style={{ padding: "12px", marginTop: "18px",textTransform:"lowercase"  }}
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
            style={{ padding: "12px", marginTop: "18px",textTransform:"lowercase"  }}
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
            style={{ padding: "12px", marginTop: "18px",textTransform:"lowercase"  }}
            id="category"
            required
            placeholder="category"
            name="category"
            onChange={onchange}
            autoComplete="off"
          />
        </div>
        <div className="mb-3">
          <input
            type="number"
            className="form-control"
            id="size"
            style={{ padding: "12px", marginTop: "18px",textTransform:"lowercase"  }}
            name="size"
            placeholder="Size"
            required
            onChange={onchange}
          />
        </div>
        <div className="mb-3">
          <input
            type="file"
            accept="image/jpg, image/jpef, image/png"
            multiple
            onchange={(e)=>{
              if(e.target.files && e.target.files.length>0){
                setFiles(e.target.files)              }
            }}
            
            className="form-control"
            id="image"
            name="image"
            required
            style={{ padding: "12px", marginTop: "18px",textTransform:"lowercase"  }}
          
            onChange={onchange}
          />
          {previews && previews.map((pic)=>{
            return <img src={pic} alt="boot" />
          })}
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
        <NavLink to="/adminproduct">

        <Button
          style={{
            borderRadius: "8px",
            height: "50px",
            marginTop: "18px",
            marginLeft: "70px",
            backgroundColor:"red"
          }}
        >
          {" "}
          See your uploaded product{" "}
        </Button>
        </NavLink>
      </form>
    </Box>
  );
};

export default Addnotes;
