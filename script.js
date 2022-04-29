
const todo1 = {
  name: 'compra il pane',
  priority: 3
}

const todo2 = {
  name: "ripassa HTML",
  priority: 5,
};

const todo3 = {
  name: "ripassa CSS",
  priority: 7,
};

const todo4 = {
  name: "studia Javscript",
  priority: 9,
};

const todo5 = {
  name: "compra il regalo alla mamma",
  priority: 10,
};


const todoList = [todo1, todo2, todo3, todo4, todo5];


function logToDos(todoArray) {
  for (let i = 0; i < todoArray.length; i++) {
    const todo = todoArray[i];
    console.log(todo.name + " priority: " + todo.priority)
  }
}


// const container = document.getElementById('todo-container');

// const par = document.createElement('p');

// const textNode = document.createTextNode('ciao a tutti');

// par.appendChild(textNode);

// container.appendChild(par);

function writeToDosToDocument(todoArray) {

  const container = document.getElementById('todo-container');

  for (let i = 0; i < todoArray.length; i++) {
    const todo = todoArray[i];
    
    const li = document.createElement('li');

    li.classList.add('list-element');

    const node = document.createTextNode(todo.name);

    const priorityNode = document.createTextNode("priority: " + todo.priority);

    const br = document.createElement('br');

    li.appendChild(node);

    li.appendChild(br);

    li.appendChild(priorityNode);

    container.appendChild(li);

  }

}


writeToDosToDocument(todoList)