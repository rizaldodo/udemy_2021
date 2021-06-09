let input = prompt('What would you like todo ?');
const todos = ['test1', 'test2'];
while(input.toLowerCase() !== 'quit' && input.toLowerCase() !== 'q'){
  if(input === 'list'){
    console.log('=====================')
    for(let i=0; i<todos.length; i++){
      console.log(`${i} = ${todos[i]}`);
    }
    console.log('=====================');
  }else if(input === 'new'){
    const newTodo = prompt('Ok, what is the new todo?');
    todos.push(newTodo);
    console.log(`${newTodo} added to the list!`)
  }else if(input === 'delete'){
    const index = parseInt(prompt('Ok, enter index to delete :'));
    if(!Number.isNaN(index)){
      const deleted = todos.splice(index, 1);
      if(!deleted[0]){
        console.log('Your index undefined');
      }else{
        console.log(`Ok, deleted ${deleted[0]}`);
      }
    }else {
      console.log('Unknown index');
    }

  }
  
  
  input = prompt("What would you like todo ?");
}
console.log('OK YOU QUIT THE APP !');
