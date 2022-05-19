console.log('Linked.')

// Dramatis Personae
const hobbits = [
	`Frodo Baggins`,
	`Samwise "Sam" Gamgee`,
	`Meriadoc "Merry" Brandybuck`,
	`Peregrin "Pippin" Took`,
]

const buddies = ['Gandalf the Grey', 'Legolas', 'Gimli', 'Strider', 'Boromir']

const baddies = ['Sauron', 'Saruman', 'The Uruk-hai', 'Orcs']

const lands = ['The-Shire', 'Rivendell', 'Mordor']

// ============
// Chapter 1
// ============

function makeMiddleEarth() {
	console.log('1: makeMiddleEarth')

	// 1. create a section tag with an id of middle-earth
	const section = document.createElement('section')
	section.setAttribute('id','middle-earth')
	// 2. use a for loop to iterate over the lands array that does the following:
	lands.forEach((i)=> {
		const article = document.createElement('article')
		article.setAttribute('id', i)
		const headerOne = document.createElement('h1')
		headerOne.innerText = i
		article.append(headerOne)
		section.append(article)
		console.log('here')
		
	})
	document.body.append(section)
	//   2a. creates an article tag (there should be one for each land when the loop is done)

	//   2b. gives each land article an `id` tag of the corresponding land name

	//   2c. includes an h1 with the name of the land inside each land article

	//   2d. appends each land to the middle-earth section

	// 3. append the section to the body of the DOM.
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============

function makeHobbits() {
	console.log('2: makeHobbits')

	// display an `unordered list` of hobbits in the shire
	let theShire = document.getElementById('The-Shire')
	// give each hobbit a class of `hobbit`
	let shireHobbits = document.createElement('ul')
	hobbits.forEach((i) =>{
		const hobbitList = document.createElement('li')
		hobbitList.setAttribute('class', 'hobbit')
		hobbitList.innerText = i
		hobbitList.setAttribute('id', i)
		shireHobbits.append(hobbitList)
	})
	theShire.appendChild(shireHobbits)
	// hint: create a 'ul' outside the loop into which to append the 'li's

	// hint: get 'The-Shire' by using its id
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".

// ============
// Chapter 3
// ============

function keepItSecretKeepItSafe() {
	console.log('3: keepItSecretKeepItSafe')
	
	// create a div with an id of `'the-ring'`
	theRing = document.createElement('div')
	theRing.setAttribute('id', 'the-ring')
	theRing.setAttribute('class','magic-imbued-jewelry')
	// give the div a class of `'magic-imbued-jewelry'`
	// add the ring as a child of `Frodo`
	document.getElementById('Frodo Baggins').append(theRing)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

// ============
// Chapter 4
// ============

function makeBaddies() {
	console.log('4: makeBaddies')
	let mordor = document.getElementById('Mordor')
	let mordorBaddies = document.createElement('ul')
	baddies.forEach((i) =>{
		const badList = document.createElement('li')
		badList.innerText = i
		badList.setAttribute('class', 'baddy')
		badList.setAttribute('id', i)
		mordorBaddies.append(badList)
	})
	mordor.appendChild(mordorBaddies)
	// display an unordered list of baddies in Mordor

	// give each of the baddies a class of "baddy"

	// remember to append them to Mordor
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..

// ============
// Chapter 5
// ============

function makeBuddies() {
	let asideTag = document.createElement("aside")
	console.log('5: makeBuddies')
	let rivenDell = document.getElementById('Rivendell')
	let friendsList = document.createElement('ul')
	
	buddies.forEach((i) =>{
		let myBuddy = document.createElement('li')
		myBuddy.innerText = i
		friendsList.append(myBuddy)
		myBuddy.setAttribute('id',i)
	// create an `aside` tag

	// put an `unordered list` of the `'buddies'` in the aside
	// insert your aside as a child element of `rivendell`
	})
	asideTag.append(friendsList)
	rivenDell.appendChild(asideTag)
}


// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============

function leaveTheShire() {
	// let hobbit = document.getElementsByClassName('hobbit')
	let hobbit = document.getElementById('The-Shire').childNodes[1]
	console.log('6: leaveTheShire')
	document.getElementById('Rivendell').appendChild(hobbit)
	// assemble the `hobbits` and move them to `rivendell`

	

}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============

function beautifulStranger() {
	console.log('7: beautifulStranger')
	document.getElementById('Strider').innerHTML = 'Aragorn'
	// change the `'Strider'` text to `'Aragorn'`
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"

// ============
// Chapter 8
// ============

function forgeTheFellowShip() {
	console.log('8: forgeTheFellowShip')
	// create a new div called `'the-fellowship'` within `rivendell`
	// add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
	// after each character is added make an alert that they // have joined your party
	let rivenDell = document.getElementById('Rivendell')
	let fellowShip = document.createElement('div')
	fellowShip.setAttribute('id', 'the-fellowship')
	rivenDell.append(fellowShip)
	hobbits.forEach((i) =>{
		alert(`${[i]} has joined your party`)
		let get = document.getElementById(i)
		fellowShip.append(get)
	})
	buddies.forEach((i) =>{
		alert(`${i} has joined your party`)
		let get = document.getElementById(i)
		fellowShip.append(get)
	})

	// NOTE: This won't change what you see in the browser.  Use your Elements tab of your Inspector tools to make sure that it worked.
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============

function theBalrog() {
	console.log('9: theBalrog')
	// change the `'Gandalf'` text to `'Gandalf the White'`
	const gandalf = document.getElementById('Gandalf the Grey')
	gandalf.innerHTML = 'Gandalf the White'
	gandalf.style.border = 'grey'
	gandalf.style.background = 'white'
	// apply the following style to the element, make the // background 'white', add a grey border
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"

// ============
// Chapter 10
// ============

function hornOfGondor() {
	console.log('10: hornOfGondor')
	// pop up an alert that the horn of gondor has been blown
	// Boromir's been killed by the Uruk-hai!
	// Remove `Boromir` from the Fellowship
	alert('The Horn of Gondor has been blown')
	let boromir = document.getElementById('Boromir')
	boromir.remove()
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"

// ============
// Chapter 11
// ============

function itsDangerousToGoAlone() {
	console.log('11: itsDangerousToGoAlone')
	// take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
	// add a div with an id of `'mount-doom'` to `Mordor`
	let frodo = document.getElementById('Frodo Baggins')
	let sam = document.getElementById('Samwise "Sam" Gamgee')
	let mountDoom = document.createElement('div')
	let mordor = document.getElementById('Mordor')
	mountDoom.setAttribute('id', 'mount-doom')
	mordor.append(mountDoom)
	mordor.append(frodo)
	mordor.append(sam)


}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"

// ============
// Chapter 12
// ============

function weWantsIt() {
	console.log('12: weWantsIt')
	// Create a div with an id of `'gollum'` and add it to Mordo
	// Remove `the ring` from `Frodo` and give it to `Gollum`
	// Move Gollum into Mount Doom
	let mordor = document.getElementById('Mordor')
	let gollomDiv = document.createElement('div')
	let theRing = document.getElementById('the-ring')
	gollomDiv.setAttribute('id', 'gollum')
	gollomDiv.append(theRing)
	mordor.append(gollomDiv)

}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============

function thereAndBackAgain() {
	console.log('13: thereAndBackAgain')
	// remove `Gollum` and `the Ring` from the document
	// Move all the `hobbits` back to `the shire`
	let gollum = document.getElementById('gollum')
	gollum.remove()
	let theShire = document.getElementById('The-Shire')
	let hobbit = document.createElement('ul')
	
	
	hobbits.forEach((i) =>{
		let hobbitList = document.createElement('li')
		hobbitList.innerText = i
		hobbit.append(hobbitList)
	})
	theShire.append(hobbit)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 13 complete -Gollum and the ring are gone, the baddies are done, and the hobbits are back in the shire".

// =====================================
// Don't change anything below this line
// =====================================

// =====================================
// This code is loading all of the event listeners for the buttons in your application.
// =====================================

document.getElementById('chapter-1').addEventListener('click', makeMiddleEarth)
document.getElementById('chapter-2').addEventListener('click', makeHobbits)
document
	.getElementById('chapter-3')
	.addEventListener('click', keepItSecretKeepItSafe)
document.getElementById('chapter-4').addEventListener('click', makeBaddies)
document.getElementById('chapter-5').addEventListener('click', makeBuddies)
document.getElementById('chapter-6').addEventListener('click', leaveTheShire)
document
	.getElementById('chapter-7')
	.addEventListener('click', beautifulStranger)
document
	.getElementById('chapter-8')
	.addEventListener('click', forgeTheFellowShip)
document.getElementById('chapter-9').addEventListener('click', theBalrog)
document.getElementById('chapter-10').addEventListener('click', hornOfGondor)
document
	.getElementById('chapter-11')
	.addEventListener('click', itsDangerousToGoAlone)
document.getElementById('chapter-12').addEventListener('click', weWantsIt)
document
	.getElementById('chapter-13')
	.addEventListener('click', thereAndBackAgain)
document.getElementById('all-chapters').addEventListener('click', () => {
	makeMiddleEarth()
	makeHobbits()
	keepItSecretKeepItSafe()
	makeBaddies()
	makeBuddies()
	leaveTheShire()
	beautifulStranger()
	forgeTheFellowShip()
	theBalrog()
	hornOfGondor()
	itsDangerousToGoAlone()
	weWantsIt()
	thereAndBackAgain()
})
