
import React, { useState } from 'react';

const AttendanceUploadForm = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append('file', file);

    fetch('http://localhost:8000/api/attendance/upload', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        console.log('Upload successful:', data);
        // Add any additional logic or UI updates as needed
      })
      .catch(error => console.error('Error uploading data:', error));
  };

  return (
    <div>
      <h2>Upload Attendance</h2>
      <input type="file" name="file" accept=".xlsx, .xls" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default AttendanceUploadForm;
