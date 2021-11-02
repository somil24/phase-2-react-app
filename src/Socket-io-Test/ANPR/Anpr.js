import React, { useState, useEffect } from "react";
import MockVideo from "../../Mock Videos/anpr.mp4";
import io from "socket.io-client";

const socket = io("http://www.mrexy.com:5000");

const captureImage = () => {
  const video = document.getElementById("videoElement");

  const canvas = document.createElement("canvas");
  canvas.width = 0;
  canvas.height = 0;

  canvas.width = video.offsetWidth;
  canvas.height = video.offsetHeight;

  canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height);
  const data_url = canvas.toDataURL();

  return data_url;
};

const dataURLtoBlob = (dataURL) => {
  const binary = atob(dataURL.split(",")[1]);
  const array = [];

  for (let i = 0; i < binary.length; i++) {
    array.push(binary.charCodeAt(i));
  }

  return new Blob([new Uint8Array(array)], { type: "image/png" });
};

const FaceDetection = () => {
  const [count, setCount] = useState(0);

  setTimeout(() => {
    setCount(count + 1);
  }, 800);
  useEffect(() => {
    console.log("Capturing and sending ...");
    const data_url = captureImage();
    const image_blob = dataURLtoBlob(data_url);
    socket.emit("detectAnpr", { data: image_blob, frame: 0 });
  }, [count]);

  socket.on("detectedAnpr", (data) => {
    console.log("Detected a plate");
    console.log(data);
    console.log(data.liscence);
    console.log(data.registered);
  });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <video
        autoPlay
        controls
        id="videoElement"
        type="video/mp4"
        src={MockVideo}
        style={{ width: "500px", margin: "auto" }}
      />
    </div>
  );
};

export default FaceDetection;
