import React,{ useState } from 'react'
import TextField from '@material-ui/core/TextField';
import {Link} from 'react-router-dom';
import axios from 'axios'
import VideoPreview from '@think42labs/video-preview';

//Socket io test 
import FaceDetection from "../Socket-io-Test/FaceDetection"

function NewFace() {

   { /* const [video, setVideo] = useState()
   
  
    async function uploadFile() {
      const formData = new FormData()
      console.log('upload', video)
      
      formData.append('video', video[0])
      axios
        .post('http://www.mrexy.com/detectFace', formData, {
          headers: {
            'content-type': 'multipart/form-data',
           
          },
        })
        .then((response) => {
          console.log(response.data)
          console.log("success")
        })
    }
  
    async function handleSubmit(e) {
      e.preventDefault()
      console.log('here')
      let res = await uploadFile()
      console.log(res)
    }
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
        <React.Fragment>
          
          <input
            type='file'
            id='video'
            multiple
            name='video'
            onChange={(e) => setVideo(e.target.files)}
          />
          <div className="label1">
            <label className="image-upload" htmlFor="video">
              Add Video
            </label>
          </div>
          <br />
          <button type='submit' id="sub" className='btn btn-info'></button>
          <div className="label1">
            <label className="image-upload" htmlFor="sub">
              upload
            </label>
          </div>
          {/*<VideoPreview 
                    src={setVideo}
                    size={150000}
                    preview={true}
                    width={520}
                    height={340}
                    controls={true}
                    autoPlay={true}
                    id="file1"
          />}
          </React.Fragment>
        </form>
      </div>
    )
        */}

        return(
          <div style={{display:"flex",justifyItems:"center",alignItems:"center"}}>
            <FaceDetection/>
          </div>
          
        )

  }
  
  export default NewFace
  
