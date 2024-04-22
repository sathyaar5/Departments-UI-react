// import React, { Component } from 'react';
import React, { useState } from 'react';
import { Typography, Button, Modal, TextField } from '@mui/material';

const FIELD_NAMES = [
  { fieldName: 'name', buttonName: 'Name' },
  { fieldName: 'designation', buttonName: 'Designation' },
  { fieldName: 'branch', buttonName: 'Branch' }
];

// class Header extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       open: false,
//       employeeData: {}
//     };
//   }

//   handleOpen = () => this.setState({ open: true });

//   handleClose = () => this.setState({ open: false });

//   handleInputChange = (event) => {
//     const { name, value } = event.target;
//     this.setState(prevState => ({
//       employeeData: {
//         ...prevState.employeeData,
//         [name]: value
//       }
//     }));
//   };

//   handleAddEmployee = () => {
//     this.props.onAddEmployee(this.state.employeeData);
//     this.setState({ employeeData: {} });
//     this.handleClose();
//   };

//   render() {
//     const { department, numberOfEmployees, manager } = this.props;
//     const { open, employeeData } = this.state;

//     return (
//       <div className="department-details">
//         <Typography variant="h4" gutterBottom>{department.deptName}</Typography>
//         <Typography variant="body1" gutterBottom>No of employees: {numberOfEmployees}</Typography>
//         <Typography variant="body1" gutterBottom>Manager: {manager}</Typography>
//         <Button variant="contained" onClick={this.handleOpen}>Add Employee</Button>
//         <Modal open={open} onClose={this.handleClose}>
//           <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: '#fff', padding: '20px' }}>
//             <Typography variant="h6">Add Employee</Typography>
//             {FIELD_NAMES.map(({ fieldName, buttonName }) => (
//               <TextField key={fieldName} name={fieldName} label={buttonName} value={employeeData[fieldName] || ''} onChange={this.handleInputChange} />
//             ))}
//             <Button variant="contained" onClick={this.handleAddEmployee}>Save</Button>
//           </div>
//         </Modal>
//       </div>
//     );
//   }
// }
//     return (
//       <div className="department-details">
//         <Typography variant="h4" gutterBottom>{department.deptName}</Typography>
//         <Typography variant="body1" gutterBottom>No of employees: {numberOfEmployees}</Typography>
//         <Typography variant="body1" gutterBottom>Manager: {department.manager}</Typography>
//       </div>
//     );
//   }
// }

const Header = ({ department, numberOfEmployees, manager, onAddEmployee, onDeleteEmployee }) => {
  const [open, setOpen] = useState(false);
  const [employeeData, setEmployeeData] = useState({});

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target; 
    setEmployeeData({ ...employeeData, [name]: value });
  };

  const handleAddEmployee = () => {
    onAddEmployee(employeeData);
    setEmployeeData({}); 
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
          {FIELD_NAMES.map(({ fieldName, buttonName }) => (
            <TextField key={fieldName} name={fieldName} label={buttonName} value={employeeData[fieldName] || ''} onChange={handleInputChange} />
          ))}
          <Button variant="contained" onClick={handleAddEmployee}>Save</Button>
        </div>
      </Modal>
    </div>
  );
};

export default Header;