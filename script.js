// Task Elements
const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task-button');
const taskList = document.getElementById('task-list');

// Music Elements
const musicButton = document.getElementById('music-toggle');
const audio = document.getElementById('background-music');

function addTask() {
    // Grab new task information
    const taskName = taskInput.value.trim();
    if (taskName === "") return;

    // Create the new list item and assign task text. 
    const li = document.createElement('li');
    li.textContent = taskName;

    // Create finish button. 
    const finishButton = document.createElement('button');
    finishButton.textContent = "Finished";
    // Add listener to trigger change in CSS. 
    finishButton.addEventListener('click', () => {
        li.classList.toggle('finished'); // to be used in CSS
    });

    // Create delete button.
    const deleteButton = document.createElement('button');
    deleteButton.textContent = "X";
    // Add listener to delete list item. 
    deleteButton.addEventListener('click', () => {
        taskList.removeChild(li);
    });

    // Create div for buttons to right align them. 
    const buttonDiv = document.createElement('div');
    buttonDiv.style.float = 'right';  // To align buttons to the right
    buttonDiv.appendChild(finishButton);
    buttonDiv.appendChild(deleteButton);

    li.appendChild(buttonDiv);
    taskList.appendChild(li);

    taskInput.value = ''; // Clear input field.
}

console.log("Hello World!");

addTaskButton.addEventListener('click', addTask);

taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter'){
        addTask();
    }
})

let playing = false;

musicButton.addEventListener('click', () => {
    if (playing) {
        audio.pause();
        musicButton.classList.remove('playing');
        musicButton.classList.add('paused');
    } else {
        audio.play();
        musicButton.classList.remove('paused');
        musicButton.classList.add('playing');
    }
    playing = !playing;
});

// Set initial state of music button
window.addEventListener('load', () => {
    if (!playing) {
        musicButton.classList.add('paused');
    }
});

