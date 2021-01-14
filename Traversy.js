const todo = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Meeting with Boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false
    }

];
/* map
const todoText = todos.map(function(todo) {
return todo.text;
});
console.log(todoText);
*/

/* forEach

todos.forEach(function(todo){
    console.log(todo.text);
});
*/

/* filter

const todoCompleted = todos.filter(function(todo) {
return todo.isCompleted === true;
});
console.log(todoCompleted);
*/

const todoCompleted = todo.filter(function(todo) {
    return todo.isCompleted === true;
}).map(function(todo){
    return todo.text;
})

console.log(todoCompleted);