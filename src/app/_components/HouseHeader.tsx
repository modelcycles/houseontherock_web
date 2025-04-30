import Link from "next/link";

export function HouseHeader() {
  return (
    <>
      <div
        style={{
          height: "10vh",
          background: "#8db4ad",
          color: "black",
          alignContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingLeft: 20,
            paddingRight: 20,
          }}
        >
          <Link href={"/"} prefetch={false}>
            <div>House on the Rock</div>
          </Link>
          <Link href={"/publications"} prefetch={false}>
            <div>Published Books</div>
          </Link>
          <Link href={"/about"} prefetch={false}>
            <div>About Us</div>
          </Link>
          <Link href={"/gallery"} prefetch={false}>
            <div>Gallery</div>
          </Link>
        </div>
      </div>
    </>
  );
}
