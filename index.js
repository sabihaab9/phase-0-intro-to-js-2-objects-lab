
const employee = {name:'David', streetAddress: "241 Ocean Parkway"}

function updateEmployeeWithKeyAndValue(employee, key, value){
       let newEmployee = { ...employee };
      // newEmployee.name = 'Sam'; 
      // newEmployee.streetAddress = '11 Broadway';

      newEmployee[key] = value;

    return newEmployee;
   }

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  // employee.name = 'Sam';
//     // employee.streetAddress = '12 Broadway';
     employee[key] = value;

    return employee;
 }

 function deleteFromEmployeeByKey(employee,key){
  
   const newEmployee = {...employee};

   delete newEmployee[key];

   return newEmployee;
 }

 function destructivelyDeleteFromEmployeeByKey(employee, key){

  delete employee[key];

  return employee;
}

