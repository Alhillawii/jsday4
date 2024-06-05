//task1//

let header = document.getElementById("header");
header.innerHTML = "Welcome to DOM Manipulation!";


//task2//
let element = document.getElementsByClassName("item");
for (let i = 0; i < element.length; i++) {
  element[i].innerHTML = "Class Item";
}


//task3//

let tags = document.getElementsByTagName("p")
for (let i in tags) {
    tags[i].innerHTML = "Paragraph Element";
}

//task4//

let word = document.querySelector("#highlight")
word.innerHTML = "First Highlighted Item";

//task5//

let all = document.querySelectorAll("li");

for (let i in all) {
    all[i].innerHTML = "List Item";
  
}


//task6//
document.querySelector("#footer").innerHTML = "Footer Updated";

//task7//

let x = document.querySelectorAll(".box");
for (let i in qclass) {
    x[i].innerHTML = "Box Item";  
}

// //task8//
// document.querySelector(".container a").textContent = "Combining Selectors ";

// //task9//
// document.querySelector("[data-role='admin']").textContent = "Admin Role";

// //task10//

// let section = document.getElementsByTagName("section")[0];
// let span =section.getElementsByTagName('span')
// console.log(span);
// for (let i in span) {
//     span[i].innerHTML = "Span Element";
// }