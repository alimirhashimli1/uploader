import "./style.css"
import React, { useState } from "react";
import axios from "axios"
import {toast} from "react-toastify"
import {faPlus} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

export const FileUploader = ({onSuccess}) => {
    const [files, setFiles] = useState([])

    const onInputChange = (e) => {
        // console.log(e.target.files[0].name)
        setFiles(e.target.files)
    }
    



    const onSubmitHandler = (e) => {
        e.preventDefault();

        
        const data = new FormData();


        for(let i = 0; i<files.length; i++){
            data.append("file", files[i]);
        }


        // data.append("file", files);

        axios.post("//localhost:8000/upload", data)
        .then(response => {
            // console.log(response.data)
            toast.success("Successfully uploaded")
            setTimeout(()=>{
                console.log(response.data)
                onSuccess(response.data)
                
            })
        })
        
        .catch(e => {
            toast.error("Could not upload. Please try again!")
        })
    }

    return (
        <form className="upload-form" method="post" action="#" id="#" onSubmit={onSubmitHandler}>
           
              
              
              
        <div className="form-group files">
          <label htmlFor="file-upload" className="custom-file-upload">Upload Files </label>
          <input id="file-upload"  onChange={onInputChange} type="file" className="form-control" multiple/>
          {/* <div className="button-div">
            <i>
                <FontAwesomeIcon icon={faPlus}/>
            </i>
            <h5>Choose Files</h5>
          </div> */}
        </div>
        
        <button className="submit-button">Submit</button>
    </form>
    )
};


export default FileUploader