import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
export default function ImageList() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Fetch the list of images from the Django backend
    const fetchImages = async () => {
      try {
        const response = await axios.get("https://localhost:5001/api/image/");
        console.log(response.data)
        setImages(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchImages();
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      {images.map((image) => (
        <div className="bg-white rounded-lg shadow-md overflow-hidden transition duration-200 hover:shadow-lg hover:scale-105 w-64 mx-4 my-6">
          <img
            src={image.imageSrc}
            alt={image.title}
            className="object-cover h-40 md:h-48 w-full"
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold">{image.title}</h2>
            <p className="text-gray-500 text-sm mt-2">{image.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
