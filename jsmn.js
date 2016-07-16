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
	const choppedLine = line.split('\t')
	return {
		// Indentation level
		level: choppedLine.length,
		// Content of line after indentation
		content: choppedLine.filter(item => item.length > 0).reduce(item => item)
	}
}

// Parse into JSON

	// Check if tabs are more same or less than previous - If they are more, then get last object as parent.
// Check type of content
	// Variable
	// Array
	// Object



// EXECUTION

// Get all lines in file
const lines = splitByLines(readFile('./file.jsmn'))

// For every line create an objext with the level and the content
for (var i = 0; i < lines.length; i++) {
	console.log(checkLevel(lines[i]))
}
