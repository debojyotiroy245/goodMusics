import "./styles.css";
import { useState } from "react";
var musicdb = {
  Travel: [
    {
      name: "Hum Jo Chalne Lage",
      rating: "4/5"
    },
    {
      name: "Tu Hai Ki Nahi",
      rating: "3.5/5"
    }
  ],
  Workout: [
    {
      name: "Zinda",
      rating: "4/5"
    },
    {
      name: "Jee Karda",
      rating: "3.5/5"
    },
    {
      name: "Sadda Haq",
      rating: "4/5"
    }
  ]
};
var genres = Object.keys(musicdb);
export default function App() {
  const [selectedGenre, setSelectedGenre] = useState("Travel");
  function genreClickHandler(genre) {
    setSelectedGenre(genre);
  }
  return (
    <div className="App">
      <h1>🎵goodMusics</h1>
      <p style={{ fontSize: "smaller" }}>
        Check out my favourite music. Click a genre to get started.
      </p>
      {genres.map((genre) => (
        <button
          key={genre}
          onClick={() => genreClickHandler(genre)}
          style={{
            cursor: "pointer",
            background: "#E5E7EB",
            borderRadius: "0.5rem",
            padding: "0.5rem  1rem",
            border: "1px solid black",
            margin: "1rem 0.3rem"
          }}
        >
          {genre}
        </button>
      ))}
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {musicdb[selectedGenre].map((music) => (
            <li
              key={music.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {music.name} </div>
              <div style={{ fontSize: "smaller" }}> {music.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
