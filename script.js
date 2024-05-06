//added a event listner with the function that declares different const to call back 
// and to ensure js is executed properly
// 


document.addEventListener('DOMContentLoaded', function() {
    const employeeForm = document.getElementById('employeeForm');
    const employeeTable = document.getElementById('employeeList');
    const totalMonthlyCostElement = document.getElementById('totalMonthlyCost');
    const footer = document.querySelector('footer');
  
    let totalMonthlyCost = 0;
  
    // created a function updateTotalMonthlyCost to calculate and update monthly post 
    // by taking the salary from each employee
    // also adding a if statement for if the budget is over a 20k limit 


    function updateTotalMonthlyCost() {
      totalMonthlyCost = 0;
      const rows = employeeTable.querySelectorAll('tr');
      rows.forEach(row => {
        const salaryText = row.querySelector('td:nth-child(5)').textContent;
        const salary = parseFloat(salaryText.replace('$', '').replace(/,/g, ''));
        if (!isNaN(salary)) {
          totalMonthlyCost += salary / 12;
        }
      });
      // setting of total monthly cost with a if statement 
      totalMonthlyCostElement.textContent = `$${totalMonthlyCost.toFixed(2)}`;
      if (totalMonthlyCost > 20000) {
        footer.classList.add('over-budget');
      } else {
        footer.classList.remove('over-budget');
      }
    }

    // added a function called addEmployeeRow() to add a new row to the employee table when a new emp is submitted to the form 
    
  
    function addEmployeeRow(firstName, lastName, id, title, annualSalary) {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${id}</td>
        <td>${title}</td>
        <td>$${annualSalary.toLocaleString()}</td>
        <td><button class="deleteBtn">Delete</button></td>
      `;
      employeeTable.appendChild(row);
      updateTotalMonthlyCost();
    }
  
    // function that clears the form to reset the inputs 

    function clearFormInputs() {
      employeeForm.reset();
    }

    // submit function to add info as it is submitted to the form
    // with a event listner to call the chain of functions 
  
    employeeForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const firstName = document.getElementById('firstNameInput').value;
      const lastName = document.getElementById('lastNameInput').value;
      const id = document.getElementById('idInput').value;
      const title = document.getElementById('titleInput').value;
      const annualSalary = parseFloat(document.getElementById('annualSalaryInput').value);
      if (!isNaN(annualSalary)) {
        addEmployeeRow(firstName, lastName, id, title, annualSalary);
        clearFormInputs();
      } else {
        alert('Please enter a valid annual salary.');
      }
    });

    // function for delete with a event listner to set off chain of functions to delete info out of form 
  
    employeeTable.addEventListener('click', function(event) {
      if (event.target.classList.contains('deleteBtn')) {
        const row = event.target.parentElement.parentElement;
        row.remove();
        updateTotalMonthlyCost();
      }
    });
  });
  