// Write your solution in this file!
const employee = {
    name: "Mario",
    street: "401 s. Hobart"

}

function updateEmployeeWithKeyAndValue(object, key, value){
    const newObj = { ...object };
    newObj[key] = value;
    return newObj
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    
    employee[key] = value;
    
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    
    const newEmployee = { ...employee };
    
    delete newEmployee[key];
    
    return newEmployee;
}


function destructivelyDeleteFromEmployeeByKey(employee, key) {
   
    delete employee[key];
  
    return employee;
}