// src/App.js

import React from 'react';
import AttendanceUploadForm from './components/AttendanceUploadForm';
import AttendanceList from './components/AttendanceList';
// import AttendanceInformation from './components/AttendanceInformation';

const App = () => {
  return (
    <div>
      <h1>Employee Management</h1>
      <AttendanceList />
      {/* <AttendanceInformation employeeId=Specify employee ID /> */}
      {/* Add other components and features as needed */}
    </div>
  );
};

export default App;
