import React, { useState, useEffect } from "react";
import Card from "./Card";
import { MoonLoader } from "react-spinners";

const apikey = process.env.REACT_APP_NASA_KEY;
const apiendpoint = process.env.REACT_APP_NASA_ENDPOINT;

export default function Body() {
  const [image, setImage] = useState(null);

  useEffect(() => {
    fetchImage();
    if (!localStorage.getItem("likedCards")) {
      localStorage.setItem("likedCards", JSON.stringify([]));
    }

    async function fetchImage() {
      const response = await fetch(
        `${apiendpoint}/planetary/apod?api_key=${apikey}&start_date=2021-12-29&end_date=2022-01-9`
      );
      const data = await response.json();
      setImage(data);
      console.log(data);
    }
  }, []);

  if (!image)
    return (
      <div className="loader">
        <MoonLoader />
      </div>
    );

  return (
    <>
      <div className="title">Spacestagram</div>
      <div className="grid-container">
        {image.map((item, index) => {
          return (
            <Card
              key={index}
              id={index}
              url={item.url}
              title={item.title}
              desc={item.explanation}
              currentData={item.date}
            />
          );
        })}
      </div>
    </>
  );
}
