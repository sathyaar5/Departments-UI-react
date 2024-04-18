// import React, { Component } from 'react';
import { Typography } from '@mui/material';

// class Header extends Component {
//   render() {
//     const { department, numberOfEmployees, departmentManager } = this.props;

//     return (
//       <div className="department-details">
//         <Typography variant="h4" gutterBottom>{department.deptName}</Typography>
//         <Typography variant="body1" gutterBottom>No of employees: {numberOfEmployees}</Typography>
//         <Typography variant="body1" gutterBottom>Manager: {departmentManager ? departmentManager.name : 'Not found'}</Typography>
//       </div>
//     );
//   }
// }

const Header = ({ department, numberOfEmployees, departmentManager }) => (
  <div className="department-details">
    <Typography variant="h4" gutterBottom>{department.deptName}</Typography>
    <Typography variant="body1" gutterBottom>No of employees: {numberOfEmployees}</Typography>
    <Typography variant="body1" gutterBottom>Manager: {departmentManager ? departmentManager.name : 'Not found'}</Typography>
  </div>
);

export default Header;
