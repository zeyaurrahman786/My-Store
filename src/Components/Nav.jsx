import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../utils/Context";

const Nav = () => {
  const [products] = useContext(ProductContext);

  let distinctCategory =
    products && products.reduce((acc, cv) => [...acc, cv.category], []);
  distinctCategory = [...new Set(distinctCategory)];
  // console.log(distinctCategory);

  const color = () => {
    return `rgba(${(Math.random() * 255).toFixed()},
    ${(Math.random() * 255).toFixed()}, 0.4)`;
  };
  // console.log(color());

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

      <div className="w-[80%]">
        {distinctCategory.map((category, index) => (
          <Link
            to={`/?category=${category}`}
            key={index}
            className="mb-3 flex items-center"
          >
            <span
              style={{ backgroundColor: color() }}
              className="w-[15px] h-[15px] rounded-full mr-2"
            ></span>
            {category}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
