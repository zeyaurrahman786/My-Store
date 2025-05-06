import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../utils/Context";

const Nav = () => {

  return (
    <nav className="w-[15%] h-full bg-zinc-50 flex flex-col items-center pt-5">
      <Link
        className="py-2 px-5 border rounded border-blue-200 text-blue-300"
        to="/create"
      >
        Add New Product
      </Link>
      <hr className="w-[80%] my-3" />
      <h1 className="text-2xl w-[80%] mb-3">Category Filter</h1>

      <ul className="w-[80%]">
        <li className="mb-3 flex items-center">
          <span className="w-[15px] h-[15px] rounded-full mr-2 bg-blue-200">
          </span>Men
        </li>
        <li className="mb-3 flex items-center">
          <span className="w-[15px] h-[15px] rounded-full mr-2 bg-red-200">
          </span>Women
        </li>
        <li className="mb-3 flex items-center">
          <span className="w-[15px] h-[15px] rounded-full mr-2 bg-green-200">
          </span>Kid
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
