import { Link } from "react-router-dom";

function HouseHeader() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Link to={"/"}>HOUSE ON THE ROCK</Link>
      <Link to={"/publications"}>Published Books</Link>
      <Link to={"/about"}>About Us</Link>
      <Link to={"/gallery"}>Gallery</Link>
    </div>
  );
}

export { HouseHeader };
