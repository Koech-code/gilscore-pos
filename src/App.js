import React, { useState } from "react";
import axios from "axios";

function App() {
  const [video, setVideo] = useState(null);
  const [videoname, setVideoname] = useState("");

  const postVideo = async () => {
    let formData = new FormData()
    formData.append("videoname", videoname)
    if (video !== null) {
      formData.append("video", video)
    }
    await axios("http://127.0.0.1:8000/api/tweets/uploadvideos/", {
      method: "POST",
      data: formData,
    }
     
    ).then((response) => {
      console.log(response.data);
    });
  };

  return (
    <div className="App">
      <p>Hey Nick, its a good morning.</p>
      <div>
        <input
          type="file"
          name="video"
          onChange={(e) => setVideo(e.target.files[0])}
        />
        <input
          type="text"
          placeholder="Enter video name."
          name="videoname"
          value={videoname}
          onChange={(e) => setVideoname(e.target.value)}
        />

        <button onClick={postVideo}>Post</button>
      </div>
    </div>
  );
}

export default App;
