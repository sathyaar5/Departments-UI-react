// import React, { Component } from 'react';
import React, { useState } from 'react';
import { Typography, Button, Modal, TextField } from '@mui/material';

// class Header extends Component {
//   render() {
//     const { department, numberOfEmployees, departmentManager } = this.props;

//     return (
//       <div className="department-details">
//         <Typography variant="h4" gutterBottom>{department.deptName}</Typography>
//         <Typography variant="body1" gutterBottom>No of employees: {numberOfEmployees}</Typography>
//         <Typography variant="body1" gutterBottom>Manager: {department.manager}</Typography>
//       </div>
//     );
//   }
// }


const Header = ({ department, numberOfEmployees, manager, onAddEmployee }) => {
  const [open, setOpen] = useState(false);
  const [employeeData, setEmployeeData] = useState({ name: '', designation: '', branch: '' });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEmployeeData({ ...employeeData, [name]: value });
  };

  const handleAddEmployee = () => {
    onAddEmployee(employeeData);
    setEmployeeData({ name: '', designation: '', branch: '' }); 
    handleClose();
  };

  return (
    <div className="department-details">
      <Typography variant="h4" gutterBottom>{department.deptName}</Typography>
      <Typography variant="body1" gutterBottom>No of employees: {numberOfEmployees}</Typography>
      <Typography variant="body1" gutterBottom>Manager: {manager}</Typography>
      <Button variant="contained" onClick={handleOpen}>Add Employee</Button>
      <Modal open={open} onClose={handleClose}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: '#fff', padding: '20px' }}>
          <Typography variant="h6">Add Employee</Typography>
          <TextField name="name" label="Name" value={employeeData.name} onChange={handleInputChange} />
          <TextField name="designation" label="Designation" value={employeeData.designation} onChange={handleInputChange} />
          <TextField name="branch" label="Branch" value={employeeData.branch} onChange={handleInputChange} />
          <Button variant="contained" onClick={handleAddEmployee}>Save</Button>
        </div>
      </Modal>
    </div>
  );
};

export default Header;