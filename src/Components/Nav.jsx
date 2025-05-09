import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../utils/Context";

const Nav = () => {
  const [products] = useContext(ProductContext);

  let category =
    products && products.reduce((acc, cv) => [...acc, cv.category], []);
  category = [...new Set(category)];
  console.log(category);

  const color = () => {
    return `rgb(
    ${(Math.random() * 255).toFixed()},
    ${(Math.random() * 255).toFixed()}, 
    ${(Math.random() * 255).toFixed()})`;
  };

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
        {category.map((cat, i) => (
          <Link 
          to={`/?category/${cat}`}
          key={i}
          className="mb-3 flex items-center">
            <span
              style={{ backgroundColor: color() }}
              className="w-[15px] h-[15px] rounded-full mr-2"
            ></span>
            {cat}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
