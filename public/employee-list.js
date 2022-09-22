// import {employees} from "./data/employees.js"


// async function fetchEmployees(){
//     let myEmployees = await fetch("./data/employeedata.json").then(res =>{
//       return res.json()
//     }).then((data) => {
//           console.log(data.employees);
//           return data.employees
//         }).catch(error => {
//             console.log(error)
//           })


//       return {myEmployees}
// }

// const {e} = fetchEmployees()

// console.log(e);

// if(e){

 

  $(  function() {
    // const employees = JSON.parse(localStorage.getItem('employees'));
    // const employees = await fetch("./data/employeedata.json").then(res => res.json()).then((data) => data)

    // const employees = e;
    const employeesF = [
      {
        firstName: "Georges",
        lastName: "Dupont",
        startDate: "24/10/2019",
        department: "HR",
        dateOfBirth: "19/08/1990",
        street: "Hello St.",
        city: "NYC",
        state: "Alabama",
        zipCode: "890",
      },
      {
        firstName: "Milla",
        lastName: "Jovovich",
        startDate: "24/09/2015",
        department: "Sales",
        dateOfBirth: "30/08/1982",
        street: "Zombie St.",
        city: "Raccoon City",
        state: "Alabama",
        zipCode: "12340",
      },
      {
        firstName: "Golden",
        lastName: "Retriever",
        startDate: "13/09/2018",
        department: "Marketing",
        dateOfBirth: "19/08/2010",
        street: "My master St.",
        city: "Woof City",
        state: "Colorado",
        zipCode: "13450",
      },
      {
        firstName: "James",
        lastName: "Bond",
        startDate: "14/10/2019",
        department: "Sales",
        dateOfBirth: "20/09/1987",
        street: "Spy St.",
        city: "MI-6",
        state: "California",
        zipCode: "14000",
      },
      {
        firstName: "Janine",
        lastName: "Melnitz",
        startDate: "24/10/2000",
        department: "HR",
        dateOfBirth: "19/08/1970",
        street: "Ghostbusters St.",
        city: "NYC",
        state: "New York",
        zipCode: "20000",
      },
      {
        firstName: "Mr.",
        lastName: "Fox",
        startDate: "24/10/2020",
        department: "Sales",
        dateOfBirth: "19/08/2000",
        street: "Forrest st.",
        city: "Forest",
        state: "Somewhere State",
        zipCode: "00000",
      },
      {
        firstName: "Johnny",
        lastName: "Lawrence",
        startDate: "24/10/2018",
        department: "Sales",
        dateOfBirth: "19/08/1980",
        street: "Karate Kid Street",
        city: "Los Angeles",
        state: "California",
        zipCode: "890",
      },
      {
        firstName: "Aladin",
        lastName: "Jasmine",
        startDate: "24/10/2019",
        department: "HR",
        dateOfBirth: "20/10/1980",
        street: "Agrahba",
        city: "Agrahba",
        state: "Agrabah",
        zipCode: "800",
      },
      {
        firstName: "Hello",
        lastName: "World",
        startDate: "24/10/2011",
        department: "Marketing",
        dateOfBirth: "19/08/1960",
        street: "Hello St.",
        city: "NYC",
        state: "Alabama",
        zipCode: "890",
      },
      {
        firstName: "Kikoo",
        lastName: "Lol",
        startDate: "24/10/2011",
        department: "HR",
        dateOfBirth: "19/08/1990",
        street: "Lollita St.",
        city: "Good city",
        state: "Alabama",
        zipCode: "10000",
      },
      {
        firstName: "Georges",
        lastName: "Dupont",
        startDate: "24/10/2019",
        department: "HR",
        dateOfBirth: "19/08/1990",
        street: "Hello St.",
        city: "NYC",
        state: "Alabama",
        zipCode: "890",
      },
      {
        firstName: "Georges",
        lastName: "Dupont",
        startDate: "24/10/2019",
        department: "HR",
        dateOfBirth: "19/08/1990",
        street: "Hello St.",
        city: "NYC",
        state: "Alabama",
        zipCode: "890",
      }]

      // const employees = JSON.parse(employeesF);



    $('#employee-table').DataTable({
        data: employeesF,
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
// }
