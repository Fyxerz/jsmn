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
			.reduce(item => item),
		// Children property to be used later for nesting
		children: []
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
			// Add speech marks to values.
	}

	return line
}

// Nest stuff
function nestContent(objectArray) {
	// Set reference for each level
	const references = {}
	const allLines = []
	// Check for level
	objectArray.forEach(function(item) {
		// if (references[item.level] == undefined) {
		// 	references[item.level] = item
		// }
		// else if (references[item.level] !== undefined) {
		// 	references[item.level] = item
		// }
		references[item.level] = item
		if (item.level !== 1) {
			references[item.level -1].children.push(item)
		}

		if (references[item.level] !== undefined) {
			allLines.push(references[item.level])	
		}
	})	
	return allLines
		// If object is a level already seen set as parent object, add to object of lower level.
}

// EXECUTION

// Get all lines in file
const lines = splitByLines(readFile('./file.jsmn'))
const lineObjects = []

// For every line create an object with the level and the content
for (var i = 0; i < lines.length; i++) {
	lineObjects.push(parsedContent(sanitize(lines[i])))
}

const nestedContent = nestContent(lineObjects)

console.log(nestedContent)
