import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import Albums from "./Albums";
import Album from "./Album";
import AddAlbum from "./AddAlbum";

function App() {
  //`id`, `artist`, `album_title`, `album_cover`, `songs`

  const db = {
    albums: [
      {
        id: "01",
        artist: "A.R. Rahman",
        album_title: "Mix",
        album_cover: "01.png",
        songs: [
          "Maa_Tujhe_Salam",
          "Tere_Bina",
          "Chal_Chhaiyya_Chhaiya",
          "Jai_Ho",
        ],
      },
      {
        id: "02",
        artist: "A.R. Rahman",
        album_title: "RockStar",
        album_cover: "02.png",
        songs: ["kun_faya_kun", "Tum_Ho", "Nadaan_Parindey", "Hawa_Hawa"],
      },
      {
        id: "03",
        artist: "A.R. Rahman",
        album_title: "Tamasha",
        album_cover: "02.png",
        songs: [
          "Agar_Tum_Sath_Ho",
          "Matargashti",
          "Heer to badi sad hai",
          "wat wat wat",
        ],
      },
      {
        id: "04",
        artist: "A.R. Rahman",
        album_title: "Delhi-6",
        album_cover: "02.png",
        songs: ["Masakkali", "Rehna Tu", "Genda Fool", "Arziyan"],
      },
    ],
  };

  const [state, setState] = useState(db);

  return (
    <div className="App">
      {state.albums.map((item, index) => {
        return (
          <Albums
            key={index}
            album_name={item.album_title}
            musician_name={item.artist}
            album_cover={item.album_cover}
            songs={item.songs}
          />
        );
      })}

      <AddAlbum />
    </div>
  );
}

export default App;
