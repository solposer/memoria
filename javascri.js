//list all card options
const MUSICIAN_LIST = [
	{
		name: "alex",
		img: "images/alex.jpg",
	},
	{
		name: "gee",
		img: "images/gee.jpg",
	},
	{
		name: "julian",
		img: "images/julian.jpg",
	},
	{
		name: "thom",
		img: "images/thom.jpg",
	},
	{
		name: "brian",
		img: "images/brian.jpeg",
	},
	{
		name: "paul",
		img: "images/paul.jpeg",
	},
	{
		name: "kurt",
		img: "images/kurt.jpeg",
	},
	{
		name: "alex",
		img: "images/alex.jpg",
	},
	{
		name: "gee",
		img: "images/gee.jpg",
	},
	{
		name: "julian",
		img: "images/julian.jpg",
	},
	{
		name: "thom",
		img: "images/thom.jpg",
	},
	{
		name: "brian",
		img: "images/brian.jpeg",
	},
	{
		name: "paul",
		img: "images/paul.jpeg",
	},
	{
		name: "kurt",
		img: "images/kurt.jpeg",
	},
	{
		name: "frank",
		img: "images/frank.jpeg",
	},
	{
		name: "frank",
		img: "images/frank.jpeg",
	},
	{
		name: "mikey",
		img: "images/mikey.jpg",
	},
	{
		name: "mikey",
		img: "images/mikey.jpg",
	},
	{
		name: "chino",
		img: "images/chino.gif",
	},
	{
		name: "chino",
		img: "images/chino.gif",
	},
];

function randomSort() {
  MUSICIAN_LIST.sort(() => 0.5 - Math.random());
}
randomSort();

const grid = document.querySelector("#grid");
const resultDisplay = document.querySelector("#result");
let cardsChosen = [];
let cardsChosenId = [];
let cardsWon = [];

//create your board
function createBoard() {
	for (let i = 0; i < MUSICIAN_LIST.length; i++) {
		const card = document.createElement("img");
		card.setAttribute("src", "images/white.jpg");
		card.setAttribute("data-id", i);
		card.addEventListener("click", flipCard);
		grid.appendChild(card);
	}
}

//check for matches
function checkForMatch() {
	const cards = document.querySelectorAll("img");
	const optionOneId = cardsChosenId[0];
	const optionTwoId = cardsChosenId[1];

	if (optionOneId == optionTwoId) {
		cards[optionOneId].setAttribute("src", "images/white.jpg");
		cards[optionTwoId].setAttribute("src", "images/white.jpg");
		alert("You have clicked the same image!");
	} else if (cardsChosen[0] === cardsChosen[1]) {
		alert("You found a match");
		cards[optionOneId].classList.add("hidden");
		cards[optionTwoId].classList.add("hidden");
		cards[optionOneId].removeEventListener("click", flipCard);
		cards[optionTwoId].removeEventListener("click", flipCard);
		cardsWon.push(cardsChosen);
	} else {
		cards[optionOneId].setAttribute("src", "images/white.jpg");
		cards[optionTwoId].setAttribute("src", "images/white.jpg");
		alert("Sorry, try again");
	}
	cardsChosen = [];
	cardsChosenId = [];
	resultDisplay.textContent = cardsWon.length;
	if (cardsWon.length === MUSICIAN_LIST.length / 2) {
		resultDisplay.textContent = "Congratulations! You found them all!";
	}
}

//flip your card
function flipCard() {
	let cardId = this.getAttribute("data-id");
	cardsChosen.push(MUSICIAN_LIST[cardId].name);
	cardsChosenId.push(cardId);
	this.setAttribute("src", MUSICIAN_LIST[cardId].img);
	if (cardsChosen.length === 2) {
		setTimeout(checkForMatch, 500);
	}
}

createBoard();
