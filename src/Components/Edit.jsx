import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../utils/Context";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const [products, setProducts] = useContext(ProductContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState({
    title: "",
    image: "",
    category: "",
    price: "",
    description: "",
  });

  const changeHandler = (e) => {
    // console.log(e.target.name, e.target.value);
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setProduct(products.filter((product) => product.id == id)[0]);
  }, [id]);
  console.log(product);

  const AddProductHandler = (e) => {
    e.preventDefault();

    const updateProduct = products.findIndex((product) => product.id == id);

    const copyProduct = [...products];

    copyProduct[updateProduct] = { ...products[updateProduct], ...product };

    // console.log(product, updateProduct);
    // console.log(copyProduct);

    // setProducts([...products, product]);
    setProducts(copyProduct);
    localStorage.setItem("products", JSON.stringify(copyProduct));
    navigate(-1);
    // console.log(product);
  };
  // console.log(products);

  return (
    <form
      onSubmit={AddProductHandler}
      className="w-full h-full flex flex-col items-center justify-center gap-5"
    >
      <h1 className="text-4xl">Edit Product</h1>
      <input
        className="w-1/2 h-10 p-2 border rounded"
        type="url"
        name="image"
        placeholder="Enter image URL"
        onChange={changeHandler}
        value={product && product.image}
      />
      <input
        className="w-1/2 h-10 p-2 border rounded"
        type="text"
        name="title"
        placeholder="Enter title"
        onChange={changeHandler}
        value={product && product.title}
      />
      <input
        className="w-1/2 h-10 p-2 border rounded"
        type="text"
        name="category"
        placeholder="Enter your category"
        onChange={changeHandler}
        value={product && product.category}
      />
      <input
        className="w-1/2 h-10 p-2 border rounded"
        type="number"
        name="price"
        placeholder="Enter price"
        onChange={changeHandler}
        value={product && product.price}
      />
      <textarea
        className="w-1/2 h-10 p-2 border rounded"
        placeholder="Enter product description"
        name="description"
        onChange={changeHandler}
        value={product && product.description}
      ></textarea>
      <button className="py-2 px-5 border rounded border-blue-400 text-blue-500">
        Update
      </button>
    </form>
  );
};

export default Edit;
