

// build input spots in html
// build value for input in js 
// build form in js and html 
// build sumbit button and give it the function to submit the input 
// assure the form clears when needed 
// set over budget 
//create a delete button that removes employee from dom.


document.addEventListener(`DOMContentLoaded`,function(){
    const employeeForm = document.getElementById('employeeForm');
    const employeeTable = document.getElementById(`employeeList`);
    const totalmonthlycostelement = document.getElementById(`totalmonthlycost`);
    const footer = document.getElementById('footer');

    let totalMonthlycost = 0;

    function updateTotalMonthlycost() {
        totalMonthlycost = 0;

        const rows = employeeTable.querySelectorAll("tr")
        rows.forEach(row => {
            const salary = parseInt(row.lastElementChild.previousElementSibling.textContent.replace('$', '').replace(/,/g, ''));
            totalMonthlyCost += salary / 12;
          });
        }
    
    totalmonthlycostelement.textcontent = `$${totalMonthlyCost.tofixed(2)}`;
    if (totalMonthlyCost > 20000) {
        footer.classlist.add(`over-budget`);
    
    }else {
        footer.classList.remove(`over-budget`);

    }

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
    
      function clearFormInputs() {
        employeeForm.reset();
      }

      employeeForm.addEventListener(`click`, function (event){
        if (event.target.classList.contains(`deletebtn`)) {
            const row = event.target.parentElement.parentElement;
            row.remove();
            updateTotalMonthlyCost();
        }
    })

});









