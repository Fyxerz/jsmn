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
function sanitize(line) {
	const choppedLine = line.split('\t')
	return {
		// Indentation level
		level: choppedLine.length,
		// Content of line after indentation
		content: choppedLine
			.filter(item => item.length > 0)
			.reduce(item => item)
	}
}

// Parse into JSON

function parsedContent(line) {
	// Get line object 
	// If content is # set as array, slice the # 
	switch (line.content[0]) {
		case '#':
			line.type = 'array'
			line.content = line.content.slice(1, -1)
			break
	// If content is . set as object, slice the .
		case '.':
			line.type = 'object'
			line.content = line.content.slice(1, -1)
			break
	// If content start with letter set as prop, no slice.
		default:
			line.type = 'property'		
	}

	return line
}

// EXECUTION

// Get all lines in file
const lines = splitByLines(readFile('./file.jsmn'))

// For every line create an objext with the level and the content
for (var i = 0; i < lines.length; i++) {
	console.log(parsedContent(sanitize(lines[i])))
}
