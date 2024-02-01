document.addEventListener('DOMContentLoaded', function () {
    const input = document.getElementById('task__input');
    const taskList = document.getElementById('tasks__list');

    input.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            addTask();
        }
    });

    const addButton = document.getElementById('tasks__add');
    addButton.addEventListener('click', function (event) {
        event.preventDefault();
        addTask();
    });

    taskList.addEventListener('click', function (event) {
        const target = event.target;
        if (target.classList.contains('task__remove')) {
            removeTask(target.closest('.task'));
        }
    });

    function addTask() {
        const taskTitle = input.value.trim();
        if (taskTitle !== '') {
            const task = createTaskElement(taskTitle);
            taskList.appendChild(task);
            input.value = '';
        }
    }

    function createTaskElement(title) {
        const task = document.createElement('div');
        task.classList.add('task');

        const taskTitleElement = document.createElement('div');
        taskTitleElement.classList.add('task__title');
        taskTitleElement.textContent = title;

        const removeButton = document.createElement('a');
        removeButton.classList.add('task__remove');
        removeButton.innerHTML = '&times;';
        removeButton.href = '#';

        task.appendChild(taskTitleElement);
        task.appendChild(removeButton);

        return task;
    }

    function removeTask(taskElement) {
        taskElement.remove();
    }
});
