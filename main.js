import inquirer from "inquirer";
let todos = [];
let loop = true;
while (loop) {
    const answers = await inquirer.prompt([
        {
            type: "input",
            name: "TODO",
            message: "Add your todo"
        },
        {
            type: "confirm",
            name: "Another",
            message: "Want to add another ?",
            default: false
        }
    ]);
    const { TODO, Another } = answers;
    // console.log(answers)
    loop = Another;
    if (TODO) {
        todos.push(TODO);
    }
    else {
        console.log("Kindly give valid input!!!");
    }
}
// console.log(todos)
if (todos.length > 0) {
    console.log("Your Todo List:");
    todos.forEach(todo => {
        console.log(todo);
    });
}
else {
    console.log("No todos found");
}
