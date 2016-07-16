// EXAMPLE

// .thisIsAnObject
// 	thisIsaProperty: "This is a string"
// 	#anArray:
// 		"This is an array item"
// 		1
// 		.anotherObj
// 			aVar: "haha"
// 		"one last item"
// yetAnotherObj
// 	anObjProp: true

// #
// 	.
// 		objVariable: "Some text"

// OUTPUTS

// Read and output file
const fs = require('fs')

function readFile(file) {
	const readFile = fs.readFileSync(file)
	// Transform bufer to readable format
	return readFile.toString('utf-8')
}


// Read line by line
function splitByLines(file) {
	// Split by new line
	return file.split(/[\n\r]/g)
}


// Check if something is nested.
	// Count how many tabs
function checkLevel(line) {
	// Create an indentation level count
	let count;
	line.split('\t').forEach(item => console.log(item))
}

const lines = splitByLines(readFile('./file.jsmn'))

for (var i = 0; i < lines.length; i++) {
	console.log(lines[i].split('\t'))
}

console.log(splitByLines(readFile('./file.jsmn')))
	// Check if tabs are more same or less than previous - If they are more, then get last object as parent.
// Check type of content
	// Variable
	// Array
	// Object

// Parse into JSON
