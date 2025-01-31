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





const port = 3001
app.listen(port, () => {
	console.log(`Server running on port ${port}`)
})
