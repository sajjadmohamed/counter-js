// set inital count
let count = 0;

// select value and  buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
	btn.addEventListener("click", function (e) {
		const style = e.currentTarget.classList;
		if (styles.contains("decrease")) {
			count--;
		}
		value.textContent = count;
	});
});
