// import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import EmployeeDetails from './EmployeeDetails';
import { Container, Grid } from '@mui/material';
 
import { useState } from 'react';


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
          { id: 7, name: 'Shankar', designation: 'Software Engineer', branch: 'Bengaluru' },
          { id: 8, name: 'ram', designation: 'Software Engineer', branch: 'Bengaluru' },
          { id: 9, name: 'Ibrahim', designation: 'Software Engineer', branch: 'Chennai' }       
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
          { id: 2, name: 'harsha', designation: 'Financial Analyst', branch: 'Bengaluru' }
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
//       selectedDepartmentIndex: null
//     };
//   }

//   handleDepartmentClick = (index) => {
//     this.setState({ selectedDepartmentIndex: index });
//   };

//   render() {
//     const { selectedDepartmentIndex } = this.state;
//     const selectedDepartment = employeesData[selectedDepartmentIndex];
//     const numberOfEmployees = selectedDepartment ? selectedDepartment.employeeDetails.length : 0;

//     return (
//       <Container>
//         <Grid container spacing={3}>
//           <Grid item xs={3}>
//             <Sidebar departments={employeesData} handleDepartmentClick={this.handleDepartmentClick} />
//           </Grid>
//           <Grid item xs={9}>
//             {selectedDepartment && (
//               <>
//                 <Header department={selectedDepartment} numberOfEmployees={numberOfEmployees} manager={selectedDepartment.manager} />
//                 <EmployeeDetails employees={selectedDepartment.employeeDetails} />
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

  const handleDepartmentClick = (index) =>{
    setSelectedDepartmentIndex(index);
  }

  const selectedDepartment = employeesData[selectedDepartmentIndex] ;
  const numberOfEmployees = selectedDepartment ? selectedDepartment.employeeDetails.length : 0;

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Sidebar departments={employeesData} handleDepartmentClick={handleDepartmentClick}></Sidebar>
        </Grid>
        <Grid item xs={9}>
          {selectedDepartment && (
            <>
            <Header department={selectedDepartment} numberOfEmployees={numberOfEmployees}  manager={selectedDepartment.manager}/>
            <EmployeeDetails employees={selectedDepartment.employeeDetails}/>
            </>
          )}
        </Grid>
      </Grid>
    </Container>
  )
}
export default DepartmentList;