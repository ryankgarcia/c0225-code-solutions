# react-lists-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- When would we want to programmatically create a list of React components?

because we don't know how many elements are in the array

- Why is it important for React components to be data-driven?

because we will often need to show several instances of the same component using different data
so that our components can be reusable

- What `Array` method is commonly used to create a list of React components?

map method

- Why do components in a list need to have unique keys?

to uniquely identify it among other items in the array in case items move, get inserted, or get deleted

- What is the best value to use as a "key" prop when rendering lists?

the best value to use as a key prop is a value that does not change, a sort of unique identifier, that can uniquely identify it among other items

## Notes

**Notes from the React Documentation**

Overview: You will often want to display multiple similar components from a collection of data. Using the JavaScript array methods filter() OR map() we can manipulate an array of data into an array of components.

To understand how these array methods work, lets use map

1. Move the data into an array

const people = [
'Creola Katherine Johnson: mathematician',
'Mario José Molina-Pasquel Henríquez: chemist',
'Mohammad Abdus Salam: physicist',
'Percy Lavon Julian: chemist',
'Subrahmanyan Chandrasekhar: astrophysicist'
]

2. Map the people members into a new array of JSX nodes, listItems

const listItems = people.map(person => <li>{person}</li>);

this map array method is creating a new array person from the people array and returning that new array in an HTML 'li' element

3. Return listItems from your component wrapped in a <ul>

return <ul>{listItems}</ul>

step 3 is returning an unordered list with that variable we created in step 2 (actually an array), which is holding all the individual 'li' elements

We can take this a step further by structuring the data a little more. We can do this by assigning the data, properties such as id, profession, and name.

So if we only want to see people with the profession of chemist, we can do that using the filter method..same idea, just a different array method we will be applying to the array data.

1. Create a new array of 'chemist' people by calling the filter method

const chemists = people.filter(person => person.profession === 'chemist')

2. Map over chemist

const listItems = chemists.map(person =>

<li>
  <img src={getImageUrl(person)}
  alt={person.name}
  />
  <p>
    <b>{person.name}:</b>
    { ' ' + person.profession + ' '}
    known for {person.accomplishment}
  </p>
</li>
)

3. Return the listItems from your component

return <ul>{listItems}</ul>

**Tip**
Arrow functions containing => followed by { have a 'block body'. You have to have a return statement or else nothing gets returned.

To keep list items in order, we use key.
Each array item needs to have a key so that it can be uniquely identified among other items in that array. JSX elements inside a map() call always need keys. Rather than generating keys on the fly, include them in your data.
The following is an example..

<li key={person.id}>. . .</li>
