const square = function(n) {
    return n * n;
}

const square2 = (n) => n * n;

console.log(square(3));
console.log(square2(3));

const event = {
    name: 'Birthday Party',
    guestList :['Andrew', 'Dip', 'Mike'],
    printGuestList() {
        console.log('Guest list for ' + this.name);
        this.guestList.forEach((guest) => {
          console.log(`${guest} is attending ${this.name}`);
        })
    }
}

event.printGuestList();


const tasks = {
    tasks: [{
        text: 'Grocery shopping',
        completed: true
    },{
        text: 'Clean yard',
        completed: false
    }, {
        text: 'Film course',
        completed: false
    }],
    getTasksToDo() {
        return this.tasks.filter(task => {
            return task.completed === false
        });
    }
}

console.log(tasks.getTasksToDo())