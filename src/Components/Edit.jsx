import React from 'react'

const Edit = () => {
  return (
    <>
      <form className="w-full h-full flex flex-col items-center justify-center gap-5">
        <h1 className="text-4xl">Edit Your Product</h1>

        <input
          className="w-1/2 h-10 p-2 border rounded"
          type="url"
          placeholder="Enter image URL"
          required
        />
        <input
          className="w-1/2 h-10 p-2 border rounded"
          type="text"
          placeholder="Enter title"
          required
        />
        <input
          className="w-1/2 h-10 p-2 border rounded"
          type="text"
          placeholder="Enter your category"
          required
        />
        <input
          className="w-1/2 h-10 p-2 border rounded"
          type="number"
          placeholder="Enter price"
          required
        />
        <textarea
          className="w-1/2 h-10 p-2 border rounded"
          placeholder="Enter product description"
          required
        ></textarea>
        <button className="py-2 px-5 border rounded border-blue-400 text-blue-500">
          Edit Your Product
        </button>
      </form>
    </>
  )
}

export default Edit;