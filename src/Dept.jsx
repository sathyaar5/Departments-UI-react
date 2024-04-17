import React, { Component } from 'react';

const employeesData = {
  Technical: [
    { id: 1, name: 'Ragulan', designation: 'TL-Senior Software Engineer', branch: 'Bengaluru' },
    { id: 2, name: 'Abdul hameed', designation: 'Manager', branch: 'Bengaluru' },
    { id: 3, name: 'Siranjeevi', designation: 'TL-Senior Software Engineer', branch: 'Bengaluru' },
    { id: 4, name: 'Rudresh', designation: 'Software Engineer', branch: 'Bengaluru' },
    { id: 5, name: 'Sai Keerthana', designation: 'Software Engineer', branch: 'Bengaluru' },

  ],
  HR: [
    { id: 1, name: 'Spoorthi', designation: 'Manager', branch: 'Bengaluru' },
    { id: 2, name: 'Sudhendra', designation: 'Manager', branch: 'Chennai' },
    { id: 3, name: 'Sharnitha', designation: 'HR-executive', branch: 'Bengaluru' },
    { id: 4, name: 'Preethi', designation: 'HR-executive', branch: 'Chennai' },

  ],
  Business: [
    { id: 1, name: 'Avinash', designation: 'Manager', branch: 'Bengaluru' },
    { id: 2, name: 'Raashi', designation: 'Digital Marketing', branch: 'Bengaluru' },
  ],
  Accounts: [
    { id: 1, name: 'Srilekha', designation: 'Manager', branch: 'Bengaluru' },
    { id: 2, name: 'harsha', designation: 'Financial Analyst', branch: 'Bengaluru' },
  ],
  Testing: [
    { id: 1, name: 'Hemanth', designation: 'Manager', branch: 'Bengaluru' },
    { id: 2, name: 'Bhupathi', designation: 'QA engineer', branch: 'Bengaluru' },
    { id: 3, name: 'Vijay Anandh', designation: 'QA engineer', branch: 'Bengaluru' },
    { id: 4, name: 'Shasidhar', designation: 'QA engineer', branch: 'Bengaluru' },

  ],
};

class DepartmentList extends Component {
    constructor(props) {
      super(props);
      this.state = {
        selectedDepartment: null
      };
    }
  
    handleDepartmentClick = (department) => {
      this.setState({ selectedDepartment: department });
    };
  
    render() {
      const { selectedDepartment } = this.state;
      const numberOfEmployees = selectedDepartment ? employeesData[selectedDepartment].length : 0;
      let departmentManager = null;

      if (selectedDepartment) {
        departmentManager = employeesData[selectedDepartment].find(employee => employee.designation === 'Manager');
      }
  
      return (
        <div className="container">
          <div className="sidebar">
            <h2>Departments</h2>
            <ul>
              {Object.keys(employeesData).map((department) => (
                <li key={department} onClick={() => this.handleDepartmentClick(department)} className="department-item">
                  {department}
                </li>
              ))}
            </ul>
          </div>
          <div className="main-content">
            {selectedDepartment && (
              <div className="department-details">
                <h2 className="department-title">{selectedDepartment}</h2>
                <p>No of employees: {numberOfEmployees}</p>
                <p>Manager: {departmentManager ? departmentManager.name : 'Not found'}</p>
                <table className="employee-table">
                  <thead>
                    <tr>                                                                                            
                      <th>ID</th>
                      <th>Name</th>
                      <th>Designation</th>
                      <th>Branch</th>
                    </tr>
                  </thead>
                  <tbody>
                    {employeesData[selectedDepartment].map((employee) => (
                      <tr key={employee.id}>
                        <td>{employee.id}</td>
                        <td>{employee.name}</td>
                        <td>{employee.designation}</td>
                        <td>{employee.branch}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      );
    }
}
  
export default DepartmentList;