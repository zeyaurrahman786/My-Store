import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "../utils/axios";
import Loading from "./Loading";
import { ProductContext } from "../utils/Context";

const Details = () => {

  const [product, setProduct] = useState(null);

  const [products, setProducts] = useContext(ProductContext);

  const navigate = useNavigate();

  const {id} = useParams();
  // console.log(id);

  // const getSingleProduct = async () => {
  //   try {
  //     const { data } = await axios.get(`/products/${id}`);
  //     // console.log(data);
  //     setProduct(data);
  //   } catch (error) {
  //     console.error("Error fetching product details:", error);
  //   }
  // }

  useEffect(() => {
    // getSingleProduct();
    if(!product){
      setProduct(products.filter((item) => item.id == id)[0]);
    }
  }, []);

  const ProductDeleteHandler = (id) => {
    const FilteredProducts = products.filter((item) => item.id !== id);
    setProducts(products);
    localStorage.setItem("products", JSON.stringify(FilteredProducts));
    navigate("/");
  }

  return product ? (
    <div className="w-[70%] h-screen m-auto p-[10%] flex justify-between items-center">
      <img
        className="object-contain h-[80%] w-[40%]"
        src={`${product.image}`}
        alt="img"
      />
      <div className="content w-[50%]">
        <h1 className="text-2xl font-semibold mb-2">
          {product.title}
        </h1>
        <h3 className="text-zinc-400 my-2">{product.category}</h3>
        <h2 className="text-red-300 font-medium mb-3">$ {product.price}</h2>
        <p className="text-gray-600 mb-4">
          {product.description}
        </p>
        <div className="flex gap-4">
          <Link
            to={`/edit/${product.id}`}
            className="px-4 py-1 border border-blue-400 text-blue-500 rounded hover:bg-blue-100"
          >
            Edit
          </Link>
          <button 
          onClick={() => ProductDeleteHandler(product.id)}
            className="px-4 py-1 border border-red-300 text-red-400 rounded hover:bg-red-100"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  ) : ( <Loading />
  );
};

export default Details;
