




let annualSalaries = []; 
let totalMonthlyCost = 0; 

function updateCost() {
  
  const salaryInputValue = parseFloat(document.getElementById('annualSalaryInput').value);

  
  if (!isNaN(salaryInputValue)) {
    // Add the entered salary to the array of annual salaries
    annualSalaries.push(salaryInputValue);

    // Calculate the total monthly cost by summing up all the converted monthly costs
    totalMonthlyCost = annualSalaries.reduce((total, salary) => total + salary / 12, 0);

    // Output the updated totalMonthlyCost
    let footer = document.getElementById('totalMonthlyCost');
    footer.innerHTML = `<p>Total Monthly Cost: $${totalMonthlyCost.toFixed(2)}</p>`;
    
   
    if (totalMonthlyCost > 20000) {
      footer.classList.toggle('over-budget');
    } else if ( totalMonthlyCost<20000) {
      footer.classList.remove('over-budget');
    }
  } else {
    console.error("Invalid input. Please provide a valid number.");
  }
}

  




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

  
