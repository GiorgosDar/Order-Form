var countDownDate = new Date("Dec 5, 2023 15:37:25").getTime();
			var x = setInterval(function() {
			 var now = new Date().getTime();
			 var distance = countDownDate - now;
			 var days = Math.floor(distance / (1000 * 60 * 60 * 24));
			var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			var seconds = Math.floor((distance % (1000 * 60)) / 1000);
			document.getElementById("days").innerHTML = days;
			document.getElementById("hours").innerHTML = hours;
			document.getElementById("minutes").innerHTML = minutes;
			document.getElementById("seconds").innerHTML = seconds;
			if (distance < 0) {
					clearInterval(x);
					document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
const resultsList= document.getElementById('results')
new URLsearchParams(window.location.search).forEach((value,name) => {
	resultsList.append(`${name}: ${value}`)
	resultList.append(doucment.createElement('br'))
})