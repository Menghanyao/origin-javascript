const container = document.getElementById("container");
const circleArr = [];

let rows = 15;
let cols = 15;

for (let i = 0; i < cols; i++) {
	circleArr[i] = [];
	for (let j = 0; j < rows; j++) {
		const circle = document.createElement("div");
		circle.classList.add("circle");
		container.appendChild(circle);
		circleArr[i].push(circle);
	}
}

console.log(circleArr)
console.log(container)

circleArr.forEach((cols, i) => {
	cols.forEach((circle, j) => {
		circle.addEventListener("click", () => {
			growCircles(i, j);
		});
	});
});

function growCircles(i, j) {
	if (circleArr[i] && circleArr[i][j]) {
		if (!circleArr[i][j].classList.contains('grow')) {
			circleArr[i][j].classList.add('grow');
			setTimeout(() => {
				growCircles(i-1 ,j);
				growCircles(i+1 ,j);
				growCircles(i, j-1);
				growCircles(i ,j+1);
			}, 100);

			setTimeout(() => {
				circleArr[i][j].classList.remove('grow')
			}, 300);
		}
	}
}