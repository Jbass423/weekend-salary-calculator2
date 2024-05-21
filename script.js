function updateCost() {
  // Reset totalMonthlyCost to 0 before recalculating
  totalMonthlyCost = []

  // Get the value entered in the annualSalaryInput field
  const salaryInputValue = parseFloat(document.getElementById('annualSalaryInput').value);

  // Check if the entered value is a valid number
  if (salaryInputValue) {
    totalMonthlyCost.push(salaryInputValue)
      // Update totalMonthlyCost with the entered value
      totalMonthlyCost = salaryInputValue / 12;
  } else {
      console.error("Invalid input. Please provide a valid number.");
  }

  // Output the updated totalMonthlyCost

  let footer = document.getElementById('totalMonthlyCost');
  footer.innerHTML = `<p>Total Monthly Cost: ${totalMonthlyCost}</p>`;
  
  console.log('Updated Total Monthly Cost:', totalMonthlyCost);
}


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
  display.innerHTML += ` <p>
  <td>${firstName}</td>
  <td>${lastName}</td>
  <td>${id}</td>
  <td>${title}</td>
  <td>$${annualSalary}</td>
  <td><button onClick="deleteBtn(event)" class="deleteBtn">Delete</button></td>
  </p>
`;
updateCost()
clearFormInputs()
}

function deleteBtn(event) {
  let row = event.target.closest('tr'); 
  row.remove(); 
  updateCost()
}

  
