import React, {useState} from "react"
import  FileUploader from './components/FileUploader';
import Preview from "./components/Preview";
import './App.css';
import "react-toastify/dist/ReactToastify.css"
import {ToastContainer} from "react-toastify"

function App() {
  const [files, setFiles] = useState([])
  const onSuccess = (savedFiles) => {
    setFiles(savedFiles)
  }
  return (
    <div className="App">
      <FileUploader files={files} setFiles={setFiles}  onSuccess={onSuccess}/>
      <Preview files={files}/>
      <ToastContainer/>
    </div>
  );
}

export default App;
