function shuffleChildren(parent){
	var children = parent.children;
	var frag = document.createDocumentFragment();
	var randomChild;

	while (children.length) {
		randomChild = children[Math.floor(Math.random() * children.length)]				// Vygenerejumeme náhodné dítě
		randomChild.setAttribute("class", "calWindow")									// Nastavíme název třídy
		randomChild.setAttribute("onclick", "openCalWindow(" + randomChild.id + ")")	// Nastavíme volání javascriptu pro otevření okénka
		randomChild.innerHTML= randomChild.id;											// Nastavíme InnerHTML podle id
		frag.appendChild(randomChild);
		console.log(children.length, randomChild)
	}

	parent.appendChild(frag);
}

function openCalWindow(day) {
	if( valiDate(day) ){
		cinemaMode(day);
	}else {
		alert("Be cool Honey Bunny, Chill out... It's gonna be alright.\nNow I want you to go to that *calendar* and take out *a calendar window*\nThe one that says *Any date that has passed already*\nOpen it up, take out the *picture*");
	}
}

function valiDate(day){
	let mesicKdySeKalendarAplikuje = 0; /* Nastavit cislo podle mesice 0-11 (0 = Leden, 1 unor,prosinec = 11 aj.) */
	let today = new Date();

	if(	today.getDate() >= day && today.getMonth() == mesicKdySeKalendarAplikuje){
		return true;
	}
	else{
		return false;
	}
}

function cinemaMode(calWindowID){
	let cinema = document.getElementById("cinemaContainer");
	const image = document.querySelector("img")
	image.setAttribute("src", "resources/images/" + calWindowID + ".jpg")
	image.setAttribute("alt", "Den No. " + calWindowID)
	
	cinema.removeAttribute("hidden")
}

function exitCinemaMode(){
	let cinema = document.getElementById("cinemaContainer");
	cinema.setAttribute("hidden", "")
}

function disableClick(e){
	e.stopPropagation()
}