import React, { useContext, useState } from "react";
import { ProductContext } from "../utils/Context";
import { nanoid } from "nanoid";

const Create = () => {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const [products, setProducts] = useContext(ProductContext);

  const submitHandler = (e) => {
    e.preventDefault();
    const newProduct = {
      id: nanoid(),           
      image,
      title,
      category,
      price,
      description,
    };
    // console.log(newProduct);
    setProducts(([...products, newProduct]));
  };

  const handleImageChange = (e) => {
    setImage(e.target.value);
    // console.log(image);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    // console.log(title);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    // console.log(category);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
    // console.log(price);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
    // console.log(description);
  };

  return (
    <>
      <form
        onSubmit={submitHandler}
        className="w-full h-full flex flex-col items-center justify-center gap-5"
      >
        <h1 className="text-4xl">Add New Product</h1>

        <input
          className="w-1/2 h-10 p-2 border rounded"
          type="url"
          placeholder="Enter image URL"
          required
          onChange={handleImageChange}
          value={image}
        />
        <input
          className="w-1/2 h-10 p-2 border rounded"
          type="text"
          placeholder="Enter title"
          required
          onChange={handleTitleChange}
          value={title}
        />
        <input
          className="w-1/2 h-10 p-2 border rounded"
          type="text"
          placeholder="Enter your category"
          required
          onChange={handleCategoryChange}
          value={category}
        />
        <input
          className="w-1/2 h-10 p-2 border rounded"
          type="number"
          placeholder="Enter price"
          required
          onChange={handlePriceChange}
          value={price}
        />
        <textarea
          className="w-1/2 h-10 p-2 border rounded"
          placeholder="Enter product description"
          required
          onChange={handleDescriptionChange}
          value={description}
        ></textarea>
        <button className="py-2 px-5 border rounded border-blue-400 text-blue-500">
          Add New Product
        </button>
      </form>
    </>
  );
};

export default Create;
