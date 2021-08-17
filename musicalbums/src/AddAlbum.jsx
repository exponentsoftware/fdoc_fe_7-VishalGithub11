import React, { useState } from "react";

const AddAlbum = () => {
  const [state, setState] = useState({
    album_title: "",
    artist: "",
    image: "",
  });

  const handleChangetextField = (name) => (event) => {
    setState({ ...state, [name]: event.target.value });
  };
  const handleChangeFile = (event) => {
    setState({ ...state, image: event.target.files[0] });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <div>
      <div>
        {" "}
        <h1>Add Your Album</h1>{" "}
      </div>

      <form action="" className="formdata" onSubmit={onSubmit}>
        <div style={{ margin: "2em" }}>
          <input
            type="text"
            value={state.album_title}
            name="album_title"
            placeholder="album_title"
            onChange={handleChangetextField("album_title")}
          />
        </div>
        <div style={{ margin: "2em" }}>
          <input
            type="text"
            value={state.artist}
            name="artist"
            placeholder="artist"
            onChange={handleChangetextField("artist")}
          />
        </div>
        <div style={{ margin: "2em" }}>
          <input
            type="file"
            name="upload-file"
            placeholder="upload-cover-pic"
            onChange={handleChangeFile}
          />
        </div>
        <div>
          {" "}
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default AddAlbum;
