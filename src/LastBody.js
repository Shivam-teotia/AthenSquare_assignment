import React, { useEffect, useState } from "react";
import "./LastBody.css";
import axios from "axios";
const LastBody = () => {
  const [content, setcontent] = useState([]);
  const [vidIndex, setVidIndex] = useState(0);
  const [videos, setVideos] = useState([
    "https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/6341303c29c5340961dc9ae6_Mco-1-transcode.mp4",
    "https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/63413ff244f1dc616b7148a0_Mco-transcode.mp4",
    "https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/63455a67996ba248148c4e31_add-options%20(3)-transcode.mp4",
  ]);
  let API = "https://mocki.io/v1/ee762599-31ae-4a3d-a6c7-d596525945e1";
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(API);
      setcontent(data.texts);
    };
    fetchData();
  }, [vidIndex, setVidIndex, API]);
  const handler = () => {
    setVidIndex((vidIndex + 1) % 3);
  };
  return (
    <div className="outer-div">
      <div className="left">
        {content &&
          content.map((item) => {
            return (
              <div className="left-first" key={item.heading}>
                <h4 className="heading">{item.heading}</h4>
                <h1 className="subheading">{item.subHeading}</h1>
                <p className="desc">{item.description}</p>
              </div>
            );
          })}
      </div>
      <div className="right">
        <video
          className="videoClass"
          src={videos[vidIndex]}
          autoPlay
          muted
          onEnded={handler}
        />
      </div>
    </div>
  );
};

export default LastBody;
