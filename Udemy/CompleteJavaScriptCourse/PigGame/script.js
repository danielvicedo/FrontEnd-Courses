'use strict'

const newGameBtn = document.querySelector('.new-game')
const rollDiceBtn = document.querySelector('.roll-dice')
const holdBtn = document.querySelector('.hold-score')
const diceImg = document.querySelector('.dice-img')
const players = Array.from(document.querySelectorAll('.player'))

//Instructions
const btnCloseInstructions = document.querySelector('.close-instructions')
const btnInstructions = document.querySelector('.instructions-btn')
const overlay = document.querySelector('.instructions-overlay')
const instructions = document.querySelector('.instructions')

const activePlayer = function (arr) {
	for (let i = 0; i < arr.length; i++) {
		if (!arr[i].classList.contains('inactive')) {
			return arr[i]
		}
	}
}

const changePlayer = function (arr) {
	for (let i = 0; i < players.length; i++) {
		if (!players[i].classList.contains('inactive')) {
			players[i].classList.add('inactive')
		} else {
			players[i].classList.remove('inactive')
		}
	}
}
let currentScore = 0
rollDiceBtn.addEventListener('click', function () {
	const currentScoreDOM = activePlayer(players).querySelector(
		'.current-rolls > .current-score'
	)
	let roll = Math.floor(Math.random() * 6) + 1
	diceImg.removeAttribute('hidden')
	diceImg.setAttribute('src', `images/dice-${roll}.png`)

	if (roll !== 1) {
		currentScore += roll
		currentScoreDOM.textContent = currentScore
	} else {
		currentScore = 0
		currentScoreDOM.textContent = '0'
		changePlayer(players)
	}
})

holdBtn.addEventListener('click', function () {
	let totalScore = activePlayer(players).querySelector('.score')
	let currentScoreDOM = activePlayer(players).querySelector(
		'.current-rolls > .current-score'
	)
	totalScore.textContent =
		Number(currentScoreDOM.textContent) + Number(totalScore.textContent)

	if (Number(totalScore.textContent) >= 100) {
		activePlayer(players).classList.add('winner')
		holdBtn.setAttribute('disabled', true)
		rollDiceBtn.setAttribute('disabled', true)
	} else {
		currentScore = 0
		currentScoreDOM.textContent = '0'
		changePlayer(players)
	}
})

newGameBtn.addEventListener('click', function () {
	players[0].classList.remove('inactive')
	players[1].classList.add('inactive')
	diceImg.setAttribute('hidden', true)
	currentScore = 0

	players.forEach((e) => (e.querySelector('.current-score').textContent = '0'))
	players.forEach((e) => e.classList.remove('winner'))
	players.forEach((e) => (e.querySelector('.score').textContent = '0'))
	holdBtn.removeAttribute('disabled')
	rollDiceBtn.removeAttribute('disabled')
})

/* INSTRUCTIONS */
const openInstructions = function () {
	instructions.removeAttribute('hidden')
	overlay.removeAttribute('hidden')
}
const closeInstructions = function () {
	instructions.setAttribute('hidden', true)
	overlay.setAttribute('hidden', true)
}
btnInstructions.addEventListener('click', openInstructions)

btnCloseInstructions.addEventListener('click', closeInstructions)
overlay.addEventListener('click', closeInstructions)
document.addEventListener('keydown', function (e) {
	if (e.key === 'Escape' && !instructions.attributes.getNamedItem('hidden')) {
		closeInstructions()
	}
})
