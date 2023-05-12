import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

import axios from "axios";

const HomePage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Create a FormData object to store the form data
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("image_url", image);

    try {
      // Send a POST request to the Django backend to create a new image
      const response = await axios.post("http://127.0.0.1:8000/api/images/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Description:
        <textarea
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </label>
      <br />
      <label>
        Image:
        <input
          type="file"
          onChange={(event) => setImage(event.target.files[0])}
        />
      </label>
      <br />
      <button type="submit">Upload Image</button>
    </form>
  );
};

export default HomePage;
