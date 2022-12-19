	let numbersRed = document.querySelector('.numbers-red')
	let numbersPurple = document.querySelector('.numbers-purple')
	let numbersGray = document.querySelector('.numbers-gray')
    let dataSpan1 = document.querySelector('.data .span1')
    // console.log(dataSpan1)
    let counterRed = 0;
	let counterPurple = 0;
	let counterGray = 0;
    let counterDataSpan1 = 0;

	setInterval(() => {
		if (counterRed == 10) {
			clearInterval();
		} else {
			counterRed += 1;
			numbersRed.innerText = counterRed + '%'
		}
	}, 96);
	setInterval(() => {
		if (counterPurple >= 935) {
			clearInterval();
            numbersPurple.innerText = 935
		} else {
			counterPurple += 4;
			numbersPurple.innerText = counterPurple
		}
	},1);
	setInterval(() => {
		if (counterGray >= 17849) {
			clearInterval();
            numbersGray.innerText = 17849
		} else {
			counterGray += 66;
			numbersGray.innerText = counterGray
		}
	}, );
	setInterval(() => {
		if (counterDataSpan1 >= 74) {
			clearInterval();
            counterDataSpan1.innerText = 74
		} else {
			counterDataSpan1 += 1;
			dataSpan1.innerText = counterDataSpan1
		}
	}, 10);