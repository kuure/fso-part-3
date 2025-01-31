const express = require('express')
const app = express()

app.use(express.json())

let persons =  [
	{ 
		"id": "1",
		"name": "Arto Hellas", 
		"number": "040-123456"
	},
	{ 
		"id": "2",
		"name": "Ada Lovelace", 
		"number": "39-44-5323523"
	},
	{ 
		"id": "3",
		"name": "Dan Abramov", 
		"number": "12-43-234345"
	},
	{ 
		"id": "4",
		"name": "Mary Poppendieck", 
		"number": "39-23-6423122"
	}
]

// 3.1 persons api
app.get('/api/persons', (request, response) => {
	response.json(persons)
})



// 3.2 info 
app.get('/info', (request, response) => {

	const total = Object.keys(persons).length
	const date = Date()

	response.send(
		`<p>Phonebook has info for ${total} people</p><p>${date}</p> `
	)

})


// 3.3 single person by ID or 404
app.get('/api/persons/:id', (request, response) => {

	const person = persons.find(person => person.id === request.params.id)

	if(person) {
		response.json(person)
	}
	else {
		response
			.status(404)
			.send(`Four Oh Four`)
			.end()
	}
})



// 3.4 delete person by id
app.delete('/api/persons/:id', (request, response) => {
	const id = request.params.id
	persons = persons.filter(person => person.id !== id)
	response
		.status(204)
		.send(`Deleted person with ID ${id}}`)
		.end()
}) 


const port = 3001
app.listen(port, () => {
	console.log(`Server running on port ${port}`)
})
