// Write your JavaScript code here

const label = document.querySelector('.checkbox-label')
const checkbox = document.querySelector('#icon')
const icon = document.querySelector('.locked-icon')
const passwordInput = document.querySelector('#password')
const ballToggle = document.querySelector('.toggle-ball')
const checkboxToggle = document.querySelector('#toggle-checkbox')
const toggleDiv = document.querySelector('.toggle')

label.addEventListener('click', function () {
	if (
		icon.getAttribute('src') ===
		'https://icons.veryicon.com/png/o/miscellaneous/personal-icon/visibility-4.png'
	) {
		icon.setAttribute(
			'src',
			'https://icons.veryicon.com/png/o/miscellaneous/personal-icon/visibility-off-3.png'
		)
		passwordInput.setAttribute('type', 'password')
	} else {
		icon.setAttribute(
			'src',
			'https://icons.veryicon.com/png/o/miscellaneous/personal-icon/visibility-4.png'
		)
		passwordInput.setAttribute('type', 'text')
	}
})

ballToggle.addEventListener('click', function () {
	if (!checkboxToggle.checked) {
		ballToggle.style.position = 'relative'
		ballToggle.style.left = '1rem'
		toggleDiv.style.background = '#17294b'
		ballToggle.style.background = 'white'
	} else {
		ballToggle.style.position = ''
		ballToggle.style.left = ''
		toggleDiv.style.background = 'white'
		ballToggle.style.background = '#17294b'
	}
})
