import React from "react";
import Album from "./Album";

const Albums = ({ album_name, musician_name, album_cover, songs }) => {
  const styles = {
    float: "left",
    color: "blue",
    margin: "2em",
  };
  return (
    <div style={styles}>
      <Album
        album_name={album_name}
        musician_name={musician_name}
        album_cover={album_cover}
        songs={songs}
      />
    </div>
  );
};

export default Albums;
