// import React, { Component } from 'react';
import { List, ListItem, ListItemText, Typography } from '@mui/material';

// class Sidebar extends Component {
//   render() {
//     const { departments, handleDepartmentClick } = this.props;

//     return (
//       <div className="sidebar">
//         <Typography variant="h5" gutterBottom>Departments</Typography>
//         <List>
//           {departments.map((department, index) => (
//             <ListItem key={index} button onClick={() => handleDepartmentClick(index)} className="department-item">
//               <ListItemText primary={department.deptName} />
//             </ListItem>
//           ))}
//         </List>
//       </div>
//     );
//   }
// }

const Sidebar = ({ departments, handleDepartmentClick }) => (
  <div className="sidebar">
    <Typography variant="h5" gutterBottom>Departments</Typography>
    <List>
      {departments.map((department, index) => (
        <ListItem key={index} button onClick={() => handleDepartmentClick(index)} className="department-item">
          <ListItemText primary={department.deptName} />
        </ListItem>
      ))}
    </List>
  </div>
);

export default Sidebar;
