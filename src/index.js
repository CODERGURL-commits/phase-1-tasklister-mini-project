document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('#create-task-form');
  const formInput = document.querySelector('#new-task-description');
  const taskList = document.querySelector('#tasks');

  form.addEventListener('submit', (event) => {
    event.preventDefault(); 
    const taskText = formInput.value.trim();
    if (!taskText) return;

    const li = document.createElement('li');
    li.textContent = taskText;
    taskList.appendChild(li);
    formInput.value = ''; 
  });
});
