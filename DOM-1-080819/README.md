This is a simple browser To-Do List. The codes update as lectures advance.

**2019-Aug-09** Second commit (todo.html/todo.js), added localStorage ('SavedList'). The toDoList array updates and saves accordlingly to the add/delete functions performed (see console). The array saves twice - once when a new item is added and again when an item is removed. The SavedList is retrieved at reload to display the last saved list in the innerHTML. 

Next iteration is to redo this script using primarily objects and JSON, for simplicity's sake. Currently, in order to update toDoList at reload, li tags are removed from SaveList (as innerHTML), which are then stringed and added to the toDoList array. It may be better to just stringify with JSON.

**2019-Aug-09** First commit (todo.html/todo.js), the page does basic functions. It adds and removes unordered list items in the browser and in the array (see console). Next iteration should save the list on reload.
