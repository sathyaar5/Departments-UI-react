// import { Component } from 'react';
import React from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

// class EmployeeDetails extends Component {
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
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {employees.map((employee) => (
//             <TableRow key={employee.id}>
//               <TableCell>{employee.id}</TableCell>
//               <TableCell>{employee.name}</TableCell>
//               <TableCell>{employee.designation}</TableCell>
//               <TableCell>{employee.branch}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     );
//   }
// }

const EmployeeDetails = ({ employees }) => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>ID</TableCell>
        <TableCell>Name</TableCell>
        <TableCell>Designation</TableCell>
        <TableCell>Branch</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {employees.map((employee) => (
        <TableRow key={employee.id}>
          <TableCell>{employee.id}</TableCell>
          <TableCell>{employee.name}</TableCell>
          <TableCell>{employee.designation}</TableCell>
          <TableCell>{employee.branch}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

export default EmployeeDetails;
