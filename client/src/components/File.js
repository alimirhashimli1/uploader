import React, {useState} from 'react'

const File = ({file, fileChooser}) => {
    const [stateFileName, setStateFileName] = useState("")




  return (
    <>

            <img style={{maxWidth: "200px"}} src={`//localhost:8000/${file.filename}`} alt={file.originalname}/>

    </>
  )
}

export default File