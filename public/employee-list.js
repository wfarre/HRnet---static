// import {employees} from "./data/employeedata.json"


async function fetchEmployees(){
    let myEmployees = await fetch("./data/employeedata.json").then(res =>{
      return res.json()
    }).then((data) => {
          console.log(data);
          return data
        }).catch(error => {
            console.log(error)
          })


      return {myEmployees}
}

const {e} = fetchEmployees()

console.log(e);

$( function() {
    const employees = JSON.parse(localStorage.getItem('employees'));
    // const employees = await fetch("./data/employeedata.json").then(res => res.json()).then((data) => data)


    $('#employee-table').DataTable({
        data: employees,
        columns: [
            { title: 'First Name', data: 'firstName' },
            { title: 'Last Name', data: 'lastName' },
            { title: 'Start Date', data: 'startDate' },
            { title: 'Department', data: 'department' },
            { title: 'Date of Birth', data: 'dateOfBirth' },
            { title: 'Street', data: 'street' },
            { title: 'City', data: 'city' },
            { title: 'State', data: 'state' },
            { title: 'Zip Code', data: 'zipCode' },
        ]
    });
});