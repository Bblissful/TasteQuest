import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <div className="bg-[#200E0E] flex text-white  h-[10vh] justify-between">
      <h1 className="p-4 font-bold font-serif md:p-5 md:text-lg">
        Taste Quést
      </h1>
      <ul className="flex p-3 m-2 text-sm ">
        <li>
          <Link to="#" className="p-2 md:p-4">
            Home
          </Link>
          {/* <Link to="#" className="p-2 md:p-4">
            Reservation
          </Link> */}
          <Link to="#" className="p-2 md:p-4">
            About
          </Link>
          <Link to="#" className="p-2 md:p-4">
            Gallery
          </Link>
          <Link to="#" className="p-2 md:p-4">
            Contact
          </Link>
        </li>
        <li className="h-[4vh] px-3 m-0">
          <button className="border p-1">Menu</button>
        </li>
      </ul>
    </div>
  );
};