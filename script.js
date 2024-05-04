console.log("Hello World!!!!");

// build input spots in html
// build value for input in js 
// build form in js and html 
// build sumbit button and give it the function to submit the input 
// assure the form clears when needed 
// set over budget 
//create a delete button that removes employee from dom. 

function submitBtn(event) { 
    console.log("submitBtn() works!")
    //event.preventDefault();
    let firstName = document.getElementById(" FirstName ").value
    let lastName = document.getElementById(" Last Name ").value
    let idNumber = document.getElementById(" ID Number ").value
    let jobTitle = document.getElementById(" Job Title ").value
    let annualSalary = document.getElementById(" Annual Salary ").value

    console.log(`first name check ${firstName}`)
    console.log(`last name check ${lastName}`)
    console.log(`id check ${idNumber}`);
    console.log(`title check: ${jobTitle}`);
    console.log(`annual check: ${annualSalary}`);
  
}

submitBtn()



let tableText = document.getElementById("tableText")
console.log("current table text", tableText );
tableText.innerHTML += 
`<tr>
<td>${ firstName }</td>
 <td>${ lastName }</td>
 <td>${ idNumber }</td>
 <td>${ jobTitle}</td>
 <td>${ annualSalary }</td>
</tr>
`
