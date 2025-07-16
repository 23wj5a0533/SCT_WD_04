// Get references to DOM elements
const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task-button');
const taskList = document.getElementById('task-list');

/**
 * Adds a new task to the list.
 */
function addTask() {
    const taskText = taskInput.value.trim(); // Get task text and remove whitespace

    if (taskText === '') {
        // Optionally, provide user feedback (e.g., a temporary message)
        console.log("Task input cannot be empty.");
        return;
    }

    // Create new list item (li) for the task
    const listItem = document.createElement('li');
    listItem.classList.add('task-item');

    // Create content div for checkbox and text
    const taskContent = document.createElement('div');
    taskContent.classList.add('task-content');

    // Create checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('task-checkbox');
    checkbox.addEventListener('change', toggleTaskCompletion); // Add event listener for completion

    // Create span for task text
    const taskTextSpan = document.createElement('span');
    taskTextSpan.classList.add('task-text');
    taskTextSpan.textContent = taskText;

    // Append checkbox and text to content div
    taskContent.appendChild(checkbox);
    taskContent.appendChild(taskTextSpan);

    // Create delete button
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button');
    deleteButton.textContent = '✖'; // Unicode 'X' symbol
    deleteButton.addEventListener('click', deleteTask); // Add event listener for deletion

    // Append content div and delete button to the list item
    listItem.appendChild(taskContent);
    listItem.appendChild(deleteButton);

    // Add the new task item to the beginning of the task list
    taskList.prepend(listItem);

    // Clear the input field
    taskInput.value = '';
}

/**
 * Toggles the completion status of a task.
 * @param {Event} event - The change event object from the checkbox.
 */
function toggleTaskCompletion(event) {
    const checkbox = event.target;
    const listItem = checkbox.closest('.task-item'); // Get the parent li element

    if (checkbox.checked) {
        listItem.classList.add('completed');
    } else {
        listItem.classList.remove('completed');
    }
}

/**
 * Deletes a task from the list.
 * @param {Event} event - The click event object from the delete button.
 */
function deleteTask(event) {
    const deleteButton = event.target;
    const listItem = deleteButton.closest('.task-item'); // Get the parent li element
    listItem.remove(); // Remove the list item from the DOM
}

// Add event listeners
addTaskButton.addEventListener('click', addTask);

// Allow adding task by pressing Enter key in the input field
taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});

// Focus on the input field when the page loads
document.addEventListener('DOMContentLoaded', () => {
    taskInput.focus();
});
