import React, {useEffect, useState} from 'react'
import "./style.css"
import File from './File'

const Preview = ({files}) => {

    const fileChooser = () => {
        // const fileTypeArray = files[i].fileName.split(".")
        // const fileType = fileTypeArray[fileTypeArray.length - 1]
        console.log(files.fileName)
}
const randomNumber = Math.random()






    return (
        <div className='docs-content'>
            {files.map(file => 
             < File onClick={fileChooser} files={files} key={`${file.originalname + randomNumber.toString()}`} file={file}/>
                        

            )}
            </div>
        
        )
  }

export default Preview