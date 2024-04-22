// import { Component } from 'react';
import React from 'react';
import { Button, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

// class EmployeeDetails extends Component {
//   constructor(props) {
//     super(props);
//   }

//   handleDeleteEmployee = (index) => {
//     this.props.onDeleteEmployee(index);
//   };

//   render() {
//     const { employees } = this.props;

//     return (
//       <Table>
//         <TableHead>
//           <TableRow>
//             <TableCell>ID</TableCell>
//             <TableCell>Name</TableCell>
//             <TableCell>Designation</TableCell>
//             <TableCell>Branch</TableCell>
//             <TableCell>Action</TableCell> 
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {employees.map((employee, index) => (
//             <TableRow key={index}>
//               <TableCell>{employee.id}</TableCell>
//               <TableCell>{employee.name}</TableCell>
//               <TableCell>{employee.designation}</TableCell>
//               <TableCell>{employee.branch}</TableCell>
//               <TableCell>
//                 <Button variant="contained" onClick={() => this.handleDeleteEmployee(index)}>Delete</Button>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     );
//   }
// }
const EmployeeDetails = ({ employees, onDeleteEmployee }) => {

  const handleDeleteEmployee = (index) => {
    onDeleteEmployee(index);
  };

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Designation</TableCell>
          <TableCell>Branch</TableCell>
          <TableCell>Action</TableCell> 
        </TableRow>
      </TableHead>
      <TableBody>
        {employees.map((employee, index) => (
          <TableRow key={index}>
            <TableCell>{employee.id}</TableCell>
            <TableCell>{employee.name}</TableCell>
            <TableCell>{employee.designation}</TableCell>
            <TableCell>{employee.branch}</TableCell>
            <TableCell>
              <Button variant="contained" onClick={() => handleDeleteEmployee(index)}>Delete</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default EmployeeDetails;