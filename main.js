//Range slider for people (table reservation)
const value = document.querySelector("#value");
const input = document.querySelector("#people-input");
//const people = document.getElementById("#people");
value.textContent = input.value;
input.addEventListener("input", (event) => {
  // console.log("Tuka stignav!");
  value.textContent = event.target.value;
  //console.log("value");
});

//Date restriction
var today = new Date();
var formattedDate = today.toISOString().split("T")[0];
document.getElementById("textDate").min = formattedDate;
//console.log(formattedDate);
//console.log(textDate);
//console.log(today.toLocaleDateString);
//alert("Your date is wrong, try again!");

//Student Menues
const studentName = document.querySelectorAll(".student-name");
const studentMenu = document.querySelectorAll(".student-menu");

for (const [i, heading] of studentName.entries()) {
  studentName[i].addEventListener("click", (e) => {
    studentMenu.forEach((student) =>
      student.classList.remove("js-student-menu")
    );
    studentMenu[i].classList.add("js-student-menu");
  });
}

//Checkbox Payment & Delivery
//Function Example
// function RadioBtn() {
//   const deliveryOptions = document.querySelector(".delivery-options-list");
//   const paymentOptions = document.querySelector(".payment-options");
//   const checkbox = document.querySelectorAll(".checkbox");
//   for (const [i, heading] of checkbox.entries()) {
//     checkbox[i].addEventListener("click", (e) => {
//       checkbox.forEach((checkbox) => checkbox.classList.remove("js-checkbox"));
//       checkbox[i].classList.add("js-checkbox");
//     });
//   }
// }

const checkboxList = document.querySelectorAll(".checkbox-list");
const deliveryOptionTitle = document.querySelectorAll(".delivery-option-title");

for (const [elena] of deliveryOptionTitle.entries()) {
  deliveryOptionTitle[elena].addEventListener("click", () => {
    // console.log(elena);
    deliveryOptionTitle[elena].classList.toggle("js-delivery-option-title");
    checkboxList[elena].classList.toggle("js-checkbox-list");
  });
}
