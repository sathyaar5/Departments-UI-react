import React from 'react';
import { Typography } from '@mui/material';

const Header = ({ department, numberOfEmployees, departmentManager }) => (
  <div className="department-details">
    <Typography variant="h4" gutterBottom>{department.deptName}</Typography>
    <Typography variant="body1" gutterBottom>No of employees: {numberOfEmployees}</Typography>
    <Typography variant="body1" gutterBottom>Manager: {departmentManager ? departmentManager.name : 'Not found'}</Typography>
  </div>
);

export default Header;
