const time = document.getElementById('time'),
greeting = document.getElementById('greeting'),
name = document.getElementById('name'),
plan = document.getElementById('plan');


//showTime
function showTime() {
	let today = new Date();
	const hour = addZero(today.getHours());
	const min = addZero(today.getMinutes());
	const sec = addZero(today.getSeconds());
	time.innerText = hour + ':' + min + ':' + sec;
	// console.log(today);

	setTimeout(showTime, 1000);
}

function addZero (n) {
	return n < 10 ? "0" + n : n ;
}

//设置背景及问候语
function setBgGreet() {
	let today = new Date();
	// let today = new Date(2020, 3, 23, 16,22,22);
	let hour = today.getHours();
	if (hour < 12) {
		document.body.style.background = "url(morning.jpg) no-repeat center/cover"
		greeting.innerText = "早上好";
	} else if (hour < 18) {
		document.body.style.background = "url(afternoon.jpg) no-repeat center/cover"
		greeting.innerText = "下午好";
	} else {
		document.body.style.background = "url(night.jpg) no-repeat center/cover"
		greeting.innerText = "晚上好";
	}
}


//获得本地姓名
function getName() {
	console.log("name:",localStorage.getItem('name'))
	if (!localStorage.getItem('name') === null ||
		!localStorage.getItem('name') === "") {
		name.textContent = "..."
	} else {
		name.innerText = localStorage.getItem('name');
	}
}

function setName(e) {
	if (e.type === 'keypress') {
		if (e.code == 13 || e.which == 13) {
			localStorage.setItem('name', e.target.innerText)
			name.blur();
		}
	} else {
		localStorage.setItem('name', e.target.innerText)
	}
}

//获得本地plan
function getPlan() {
	console.log("plan:",localStorage.getItem('plan'))
	if (localStorage.getItem('plan') === null ||
		localStorage.getItem('plan') === "") {
		plan.textContent = "plan?"
	} else {
		plan.textContent = localStorage.getItem('plan');
	}
}

function setPlan(e) {
	if (e.type === 'keypress') {
		if (e.code == 13 || e.which == 13) {
			localStorage.setItem('plan', e.target.innerText)
			plan.blur();
		}
	} else {
		localStorage.setItem('plan', e.target.innerText)
	}
}

//事件监听
name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
plan.addEventListener('keypress', setPlan);
plan.addEventListener('blur', setPlan);



showTime();
setBgGreet();
getName();
getPlan();