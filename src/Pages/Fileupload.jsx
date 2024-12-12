import  { useState } from 'react';

const FileUpload = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const handleFileUpload = () => {
        if (selectedFile) {
            const formData = new FormData();
            formData.append('file', selectedFile);

            // Make a request to upload the file to a server
            fetch('your_upload_endpoint', {
                method: 'POST',
                body: formData,
            })
                .then((response) => {
                    // Handle the server response
                    console.log('File uploaded:', response);
                })
                .catch((error) => {
                    // Handle errors
                    console.error('Error uploading file:', error);
                });
        } else {
            console.error('No file selected');
        }
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleFileUpload}>Upload</button>
        </div>
    );
};

export default FileUpload;