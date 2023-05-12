import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
export default function ImageForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Create a FormData object to store the form data
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("imageFile", image);

    try {
      // Send a POST request to the Django backend to create a new image
      const response = await axios.post(
        "https://localhost:5001/api/image/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="grid place-items-center mt-4">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col flex-wrap gap-2 bg-indigo-300 rounded-lg p-8 shadow-md shadow-gray-300"
      >
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          required
          className="px-1"
        />

        <label>Description:</label>
        <input
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          className="px-1"
        />

        <label>Image:</label>
        <input
          type="file"
          onChange={(event) => setImage(event.target.files[0])}
        />
        {image && (
          <div>
            <button
              className="bg-white p-1 rounded-md duration-100 hover:scale-105"
              type="submit"
            >
              Upload Image
            </button>
          </div>
        )}
      </form>
    </div>
  );
}
