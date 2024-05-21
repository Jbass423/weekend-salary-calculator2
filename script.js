let totalMonthlyCost = 0;




//function addEmployeeRow(firstName, lastName, id, title, annualSalary) {
  //const row = document.createElement('tr');
  //row.innerHTML = `
   // <td>${firstName}</td>
   // <td>${lastName}</td>
   // <td>${id}</td>
   // <td>${title}</td>
   // <td>$${annualSalary}</td>
   // <td><button class="deleteBtn">Delete</button></td>
  //`;
 // employeeTable.appendChild(row);
 // updateTotalMonthlyCost();
//}

function clearFormInputs() {
  employeeForm.reset();
}



function addEmp(event) {
  event.preventDefault()
 
  let firstName = document.getElementById('firstNameInput').value
  let lastName = document.getElementById('lastNameInput').value
  let id = document.getElementById('idInput').value
  let title = document.getElementById('titleInput').value  
  let annualSalary = parseFloat(document.getElementById('annualSalaryInput').value)
 // addEmployeeRow(firstName,lastName,id,title,annalSalary)
  let display = document.getElementById("employeeList")
  display.innerHTML += ` 
  <td>${firstName}</td>
  <td>${lastName}</td>
  <td>${id}</td>
  <td>${title}</td>
  <td>$${annualSalary}</td>
  <td><button class="deleteBtn">Delete</button></td>
`;
clearFormInputs()
}