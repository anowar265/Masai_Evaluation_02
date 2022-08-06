import "./Rentals.css";
import { useEffect, useState } from "react";

export const Rentals = () => {
  const [item, setItem] = useState([]);
  const [sorting, setSorting] = useState({
    sortBy: "",
    sortValue: "",
  });

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch("http://localhost:8080/houses")
      .then((res) => res.json())
      .then((res) => {
        setItem(res);
      });
  };

  const handleSById = () => {
    setSorting({
      sortBy: "id",
      sortValue: "1",
    });
  };

  const handleRentLTH = () => {
    setSorting({
      sortBy: "rent",
      sortValue: "1",
    });
  };

  const handleRentHTL = () => {
    setSorting({
      sortBy: "rent",
      sortValue: "-1",
    });
  };

  const handleAreaLTH = () => {
    setSorting({
      sortBy: "area",
      sortValue: "1",
    });
  };
  const handleAreaHTL = () => {
    setSorting({
      sortBy: "area",
      sortValue: "-1",
    });
  };

  return (
    <div className="rentalContainer">
      <div className="sortingButtons">
        <button className="sortById" onClick={handleSById}>
          Sort by ID
        </button>
        <button className="sortByRentAsc" onClick={handleRentLTH}>
          Rent Low to high
        </button>
        <button className="sortByRentDesc" onClick={handleRentHTL}>
          Rent High to low
        </button>
        <button className="sortByAreaAsc" onClick={handleAreaLTH}>
          Area Low to high
        </button>
        <button className="sortByAreaDesc" onClick={handleAreaHTL}>
          Area High to Low
        </button>
      </div>
      <input
        className="searchAddress"
        type="text"
        placeholder="Search Address"
      />
      <table className="table" border="1">
        <thead>
          <tr>
            <th>Sl.no.</th>
            <th>Name</th>
            <th>Owner Name</th>
            <th>Address</th>
            <th>Area Code</th>
            <th>Rent</th>
            <th>Available For</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {item
            .sort((a, b) =>
              sorting.sortBy === "rent"
                ? sorting.sortValue === "1"
                  ? a.rent - b.rent
                  : b.rent - a.rent
                : sorting.sortBy === "area"
                ? sorting.sortValue === "1"
                  ? a.areaCode - b.areaCode
                  : b.areaCode - a.areaCode
                : true
            )
            .map((house, index) => {
              return (
                <tr key={house.id} className="houseDetails">
                  <td className="houseId">{house.id}</td>
                  <td className="houseName">{house.name} </td>
                  <td className="ownersName">{house.ownerName}</td>
                  <td className="address">{house.address}</td>
                  <td className="areaCode">{house.areaCode}</td>
                  <td className="rent">{house.rent}</td>
                  <td className="preferredTenants">
                    {/* Show text Both or Bachelors or Married based on values */}
                    {house.preferredtenants === "bachelor"
                      ? "bachelors "
                      : "married"}
                  </td>
                  <td className="houseImage">
                    <img src={house.image} alt="house" />
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};
