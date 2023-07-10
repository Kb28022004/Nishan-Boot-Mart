import React, { useState } from "react";
// import { MdDelete } from "react-icons/md";
import { Button } from "../styles/Button";
import { AiOutlinePlus } from "react-icons/ai";
import "./Address.css";

const Address = () => {
  const [Address, setAddress] = useState(true);
  const savedAddress = [
    {
      AddressLine1: "AddressLine1",
      AddressLine2: "AddressLine2",
      AddressLine3: "AddressLine3",
    },
    {
      AddressLine1: "AddressLine4",
      AddressLine2: "AddressLine5",
      AddressLine3: "AddressLine6",
    },
    {
      AddressLine1: "AddressLine7",
      AddressLine2: "AddressLine8",
      AddressLine3: "AddressLine9",
    },
  ];
  return (
    <div className="useraddress">
      {!Address && <h1 className="my-4" style={{color:"blue",fontSize:"44px"}}>Your Addess</h1>}
      {!Address && (
        <div className="addressin my-y">
          {savedAddress.map((elem, index) => {
            return (
              <div className="address" key={index}>
                <span>{elem.AddressLine1}</span>
                <span>{elem.AddressLine2}</span>
                <span>{elem.AddressLine3}</span>

                <div className="delbtn">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>

                </div>
              </div>
            );
          })}
        </div>
      )}

      {!Address && (
        <div className="addressbtn" onClick={() => setAddress(true)}>
          <AiOutlinePlus style={{fontSize:"48px"}} />
        </div>
      )}

      {Address && (
        <div className="addnew">
          <h1 className="mainhead1">Add New Addess</h1>

          <div className="form">
            <div className="form-group">
              <label htmlFor="postalcode">Postal Code</label>
              <input type="text" />
            </div>

            <div className="form-group">
              <label htmlFor="addressline1">Addres Line 1</label>
              <input type="text" />
            </div>

            <div className="form-group">
              <label htmlFor="addressline2">Addres Line 2 </label>
              <input type="text" />
            </div>

            <div className="form-group">
              <label htmlFor="addressline3">Addres Line 3</label>
              <input type="text" />
            </div>
          </div>
          <Button style={{borderRadius:"8px"}} onClick={() => setAddress(false)}>Save</Button>
        </div>
      )}
    </div>
  );
};

export default Address;
