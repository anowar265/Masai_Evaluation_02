import axios from "axios";
import { useState } from "react";

export const AddHouse = () => {
  const [check, setCheck] = useState("");
  const [formdata, setFormData] = useState({
    name: "",
    ownerName: "",
    address: "",
    areaCode: "",
    rent: "",
    preferredtenants: "",
  });
  const handlechange = (e) => {
    const { name } = e.target;
    if (name == "preferredtenants") {
      setCheck(e.target.value);
    }
    setFormData({
      ...formdata,
      [name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:8080/houses", formdata).then(() => {
      // alert("User Created successfully");
      setFormData({
        name: "",
        ownerName: "",
        address: "",
        areaCode: "",
        rent: "",
        preferredtenants: "",
      });
    });
  };

  return (
    <div className="addHouseContainer">
      <form onSubmit={handleSubmit}>
        <label>name</label>
        <input
          type="text"
          className="name"
          value={formdata.name}
          required
          onChange={handlechange}
          placeholder="Enter Name"
          name="name"
        />
        <br />
        <label>ownerName</label>
        <input
          value={formdata.ownerName}
          type="text"
          className="ownerName"
          required
          onChange={handlechange}
          placeholder="Enter ownername"
          name="ownerName"
        />
        <br />
        <label>address</label>
        <input
          value={formdata.address}
          type="text"
          className="address"
          required
          onChange={handlechange}
          placeholder="Enter address"
          name="address"
        />
        <br />
        <label>areaCode</label>
        <input
          value={formdata.areaCode}
          type="text"
          className="areaCode"
          required
          onChange={handlechange}
          placeholder="Enter areaCode"
          name="areaCode"
        />
        <br />
        <label>rent</label>
        <input
          value={formdata.rent}
          type="text"
          className="rent"
          required
          onChange={handlechange}
          placeholder="Enter rent"
          name="rent"
        />
        <br />
        <label>preferredTenant</label>
        <br />
        <label>bachelor</label>
        <input
          checked={check === "bachelor" ? true : false}
          type="checkbox"
          className="bachelor"
          value="bachelor"
          onChange={handlechange}
          name="preferredtenants"
        />
        <br />
        <label>married</label>
        <input
          checked={check === "married" ? true : false}
          type="checkbox"
          className="married"
          value="married"
          onChange={handlechange}
          name="preferredtenants"
        />
        <br />
        <label>image</label>
        <input
          value={""}
          type="text"
          className="image"
          onChange={handlechange}
        />
        <br />
        <input className="submitBtn" type="submit" />
      </form>
    </div>
  );
};
