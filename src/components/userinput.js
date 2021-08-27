import React,{ useState } from 'react'
import TextField from '@material-ui/core/TextField';
import {Link} from 'react-router-dom';
import axios from 'axios'


function NewFace() {
  const [files, setFiles] = useState()
  const [name,setUsername]  = useState('')
  const [age,setAge] = useState('')
  const [gender,setGender] = useState('')

  async function uploadFile() {
    const formData = new FormData()
    console.log('name', name)
    console.log('age', age)
    console.log('gender', gender)
    console.log('files', files)

    

    for (let i = 0; i < files.length; i++) {
      formData.append(`images`, files[i])
    }
    formData.append('name', name)
    formData.append('age', age)
    formData.append('gender', gender)
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
      
      <br /> <br />
            <h1>Input images for training model</h1>
            <br /> <br />
      <form onSubmit={handleSubmit}>
      <React.Fragment>
      <div className="textinput">
      <TextField
          type='text'
          id='name'
          name= 'name'
          label="Name"
          defaultValue = {name}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        
        <TextField
          type='text'
          id='age'
          name='age'
          label="Age"
          defaultValue = {age}
          onChange={(e) => setAge(e.target.value)}
        />
        <br />
        <TextField
          type='text'
          id='gender'
          name='gender'
          label="Gender"
          defaultValue = {gender}
          onChange={(e) => setGender(e.target.value)}
        />
        </div>
        <br />
        <input
          type='file'
          id='img'
          multiple
          name='img'
          onChange={(e) => setFiles(e.target.files)}
        />
        <div className="label1">
					<label htmlFor="img" className="image-upload">
						Add Image
					</label>
				</div>
        <br />
        
        <br />
        <button type='submit' id="sub" className='btn btn-info'></button>
        <div className="label1">
          <label className="image-upload" htmlFor="sub">
            upload
          </label>
        </div>
        </React.Fragment>
      </form>
    </div>
  )
}

export default NewFace
