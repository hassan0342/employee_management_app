// src/components/AttendanceList.js

import React, { useState, useEffect } from 'react';
import './css/AttendanceList.css'; // Import the stylesheet

const AttendanceList = () => {
  const [employeeId, setEmployeeId] = useState(/* Set employee ID */);
  const [attendanceData, setAttendanceData] = useState({});

  useEffect(() => {
    // Fetch attendance data based on the employee ID
    fetch(`http://localhost:8000/api/attendance/employee/${employeeId}`)
      .then(response => response.json())
      .then(data => setAttendanceData(data))
      .catch(error => console.error('Error fetching attendance data:', error));
  }, [employeeId]);

  return (
    <div className="attendance-container">
      <h2>Attendance Information</h2>
      <p>Employee ID: {attendanceData.employee_id}</p>
      <table className="attendance-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Check-in</th>
            <th>Check-out</th>
            <th>Total Working Hours</th>
          </tr>
        </thead>
        <tbody>
          {attendanceData.attendance && attendanceData.attendance.map(record => (
            <tr key={record.id}>
              <td>{record.employee.name}</td>
              <td>{record.checkin || 'N/A'}</td>
              <td>{record.checkout || 'N/A'}</td>
              <td>{/* Calculate total working hours based on your logic */}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceList;
