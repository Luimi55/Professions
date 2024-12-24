import React,{ useRef, useState } from "react";
import { 
    Button,
    makeStyles,
   } from "@fluentui/react-components";


type Props = {
    handleFileChange: (event: any)=>void
}

const FileUploader = (props: Props) => {
    const fileInputRef = useRef<HTMLInputElement>(null); // Reference to the hidden file input
    const [fileName, setFileName] = useState(""); // State to store the selected file name
    const {handleFileChange} = props
    
  
    // Handle the file selection
    const internalHandleFileChange = (event: any) => {
      const file = event.target.files[0];
      if (file) {
        setFileName(file.name); // Update state with the selected file name
      }
      handleFileChange(event);
    };
  
    // Trigger the file input when the button is clicked
    const handleButtonClick = () => {
      fileInputRef.current?.click(); // Programmatically open the file input
    };
  
    const styles = useStyles();

    return (
      <div>
        {/* Hidden file input */}
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }} // Hide the input
          onChange={internalHandleFileChange} // Handle file selection
        />
  
        <div className={styles.rowDiv}>
            <Button onClick={handleButtonClick} >
            Choose a file
            </Button>
    
            {/* Display the selected file name */}
            {fileName && <p>Selected File: {fileName}</p>}

        </div>
  
      </div>
    );
  };

  const useStyles = makeStyles({
    rowDiv: {
        display: 'flex',
        flexDirection: 'row',
        gap: '10px'
    }
  })

export default FileUploader