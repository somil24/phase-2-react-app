import React, { useState, useEffect } from "react";
import MockVideo from "../../Mock Videos/facedetect.mp4";
import io from "socket.io-client";

const socket = io("http://www.mrexy.com:5000");

//import {makeStyles} from "@material-ui/core/styles"

const captureImage = () => {
  // console.log("capturing the image")
  const video = document.getElementById("videoElement"); //Getting the video frame from the screen

  const canvas = document.createElement("canvas");
  canvas.width = 0; //setting it to 0 if video is not loaded else it would give error
  canvas.height = 0;

  canvas.width = video.offsetWidth; //making canvas width and height equivalent to that of the frame
  canvas.height = video.offsetHeight;

  canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height);
  const data_url = canvas.toDataURL();

  //if want to check that the image is being captured https://stackoverflow.com/questions/12809971/quick-print-html5-canvas'
  return data_url;
};

//conveting an image into blob

const dataURLtoBlob = (dataURL) => {
  //conver base64 to raw binary data
  const binary = atob(dataURL.split(",")[1]);
  const array = [];

  //setting bytes of array to correct value
  for (let i = 0; i < binary.length; i++) {
    array.push(binary.charCodeAt(i));
  }

  //Using Uint8Array() constructor to create array buffer
  return new Blob([new Uint8Array(array)], { type: "image/png" });
};

const FaceDetection = () => {
  const [count, setCount] = useState(0);

  setTimeout(() => {
    setCount(count + 1);
  }, 1000);
  useEffect(() => {
    console.log("Capturing and sending ...");
    const data_url = captureImage();
    const image_blob = dataURLtoBlob(data_url);
    socket.emit("detectFace", { data: image_blob, frame: 0 });
  }, [count]);

  socket.on("detectedFace", (data) => {
    console.log("Detected a face");
    console.log(data);
    if (data.faces) {
      console.log("Face data is ");
      console.log(data.faces.name);
      console.log(data.faces.probability);
    }
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
        style={{ width: "500px" }}
      />
    </div>
  );
};

export default FaceDetection;
