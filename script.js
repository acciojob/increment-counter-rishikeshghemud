//your JS code here. If required.

const counter = document.querySelector('#counter');
const incrementer = document.querySelector("#incrementBtn");

counter.innerText=0;

incrementer.addEventListener("click", (e) => {
	const value = parseInt(counter.innerText);
	const newvalue = value + 1;
	counter.innerText = newvalue;
})