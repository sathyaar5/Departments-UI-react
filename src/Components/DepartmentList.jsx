// import React, { Component } from 'react';
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import EmployeeDetails from './EmployeeDetails';
import { Container, Grid } from '@mui/material';

const employeesData = [
  {
      deptName: 'Technical Department',
      manager: 'Abdul hameed',
      employeeDetails: [ 
          { id: 1, name: 'Ragulan', designation: 'TL-Senior Software Engineer', branch: 'Bengaluru' },
          { id: 2, name: 'Abdul hameed', designation: 'Manager', branch: 'Bengaluru' },
          { id: 3, name: 'Siranjeevi', designation: 'TL-Senior Software Engineer', branch: 'Bengaluru' },
          { id: 4, name: 'Rudresh', designation: 'Software Engineer', branch: 'Bengaluru' },
          { id: 5, name: 'Sathya', designation: 'Software Engineer', branch: 'Bengaluru' },
          { id: 6, name: 'Sai Keerthana', designation: 'Software Engineer', branch: 'Bengaluru' },
          { id: 7, name: 'Ammu', designation: 'Software Engineer', branch: 'Bengaluru' },
          { id: 8, name: 'Shankar', designation: 'Software Engineer', branch: 'Bengaluru' },
          { id: 9, name: 'ram', designation: 'Software Engineer', branch: 'Bengaluru' },
          { id: 10, name: 'Ibrahim', designation: 'Software Engineer', branch: 'Chennai' },       
          { id: 11, name: 'baba', designation: 'Software Engineer', branch: 'bengaluru' },       
      ]
  },  

  {
      deptName: 'HR Department',
      manager: 'Spoorthi',
      employeeDetails: [ 
          { id: 1, name: 'Spoorthi', designation: 'Manager', branch: 'Bengaluru' },
          { id: 2, name: 'Sudhendra', designation: 'Manager', branch: 'Chennai' },
          { id: 3, name: 'Sharnitha', designation: 'HR-executive', branch: 'Bengaluru' },
          { id: 4, name: 'Preethi', designation: 'HR-executive', branch: 'Chennai' }
      ]
  },

  {
      deptName: 'Business Department',
      manager: 'Avinash',
      employeeDetails: [ 
          { id: 1, name: 'Avinash', designation: 'Manager', branch: 'Bengaluru' },
          { id: 2, name: 'Raashi', designation: 'Digital Marketing', branch: 'Bengaluru' }
      ]
  },

  {
      deptName: 'Accounts Department',
      manager: 'Srilekha',
      employeeDetails: [ 
          { id: 1, name: 'Srilekha', designation: 'Manager', branch: 'Bengaluru' },
          { id: 2, name: 'Harsha', designation: 'Financial Analyst', branch: 'Bengaluru' }
      ]
  },

  {
      deptName: 'Testing Department',
      manager: 'Hemanth',
      employeeDetails: [ 
          { id: 1, name: 'Hemanth', designation: 'Manager', branch: 'Bengaluru' },
          { id: 2, name: 'Bhupathi', designation: 'QA engineer', branch: 'Bengaluru' },
          { id: 3, name: 'Vijay Anandh', designation: 'QA engineer', branch: 'Bengaluru' },
          { id: 4, name: 'Shasidhar', designation: 'QA engineer', branch: 'Bengaluru' }
      ]
  },

];

// class DepartmentList extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       selectedDepartmentIndex: null,
//       departments: employeesData,
//     };
//   }

//   handleDepartmentClick = (index) => {
//     this.setState({ selectedDepartmentIndex: index });
//   };

//   handleAddEmployee = (departmentIndex, newEmployee) => {
//     this.setState((prevState) => {
//       const updatedDepartments = [...prevState.departments];
//       const department = updatedDepartments[departmentIndex];
//       const id = department.employeeDetails.length + 1;
//       newEmployee.id = id;
//       department.employeeDetails.push(newEmployee);
//       return { departments: updatedDepartments };
//     });
//   };

//   handleDeleteEmployee = (departmentIndex, employeeIndex) => {
//     this.setState((prevState) => {
//       const updatedDepartments = [...prevState.departments];
//       const department = updatedDepartments[departmentIndex];
//       department.employeeDetails.splice(employeeIndex, 1);
//       department.employeeDetails.forEach((employee, index) => {
//         employee.id = index + 1;
//       });
//       return { departments: updatedDepartments };
//     });
//   };

//   render() {
//     const { selectedDepartmentIndex, departments } = this.state;
//     const selectedDepartment = departments[selectedDepartmentIndex];
//     const numberOfEmployees = selectedDepartment ? selectedDepartment.employeeDetails.length : 0;

//     return (
//       <Container>
//         <Grid container spacing={3}>
//           <Grid item xs={3}>
//             <Sidebar departments={departments} handleDepartmentClick={this.handleDepartmentClick} />
//           </Grid>
//           <Grid item xs={9}>
//             {selectedDepartment && (
//               <>
//                 <Header
//                   department={selectedDepartment}
//                   numberOfEmployees={numberOfEmployees}
//                   manager={selectedDepartment.manager}
//                   onAddEmployee={(newEmployee) => this.handleAddEmployee(selectedDepartmentIndex, newEmployee)}
//                   onDeleteEmployee={(employeeIndex) => this.handleDeleteEmployee(selectedDepartmentIndex, employeeIndex)}
//                 />
//                 <EmployeeDetails
//                   employees={selectedDepartment.employeeDetails}
//                   onDeleteEmployee={(employeeIndex) => this.handleDeleteEmployee(selectedDepartmentIndex, employeeIndex)}
//                 />
//               </>
//             )}
//           </Grid>
//         </Grid>
//       </Container>
//     );
//   }
// }


const DepartmentList = () => {
  const [selectedDepartmentIndex, setSelectedDepartmentIndex] = useState(null);
  const [departments, setDepartments] = useState(employeesData);

  const handleDepartmentClick = (index) => {
    setSelectedDepartmentIndex(index);
  };

  const handleAddEmployee = (departmentIndex, newEmployee) => {
    setDepartments((prevDepartments) => {
      const updatedDepartments = [...prevDepartments];
      const department = updatedDepartments[departmentIndex];
      const id = department.employeeDetails.length + 1;
      newEmployee.id = id;
      department.employeeDetails.push(newEmployee);
      return updatedDepartments;
    });
  };

  const handleDeleteEmployee = (departmentIndex, employeeIndex) => {
    setDepartments((prevDepartments) => {
      const updatedDepartments = [...prevDepartments];
      const department = updatedDepartments[departmentIndex];
      
      department.employeeDetails.splice(employeeIndex, 1);
      
      department.employeeDetails.forEach((employee, index) => {
        employee.id = index + 1; 
      });
  
      return updatedDepartments;
    });
  };

  const selectedDepartment = departments[selectedDepartmentIndex];
  const numberOfEmployees = selectedDepartment ? selectedDepartment.employeeDetails.length : 0;

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Sidebar departments={departments} handleDepartmentClick={handleDepartmentClick} />
        </Grid>
        <Grid item xs={9}>
          {selectedDepartment && (
            <>
              <Header
                department={selectedDepartment}
                numberOfEmployees={numberOfEmployees}
                manager={selectedDepartment.manager}
                onAddEmployee={(newEmployee) => handleAddEmployee(selectedDepartmentIndex, newEmployee)}
                onDeleteEmployee={(employeeIndex) => handleDeleteEmployee(selectedDepartmentIndex, employeeIndex)}
              />
              <EmployeeDetails 
                employees={selectedDepartment.employeeDetails} 
                onDeleteEmployee={(employeeIndex) => 
                  handleDeleteEmployee(selectedDepartmentIndex, employeeIndex)
                }
              />
            </>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default DepartmentList;