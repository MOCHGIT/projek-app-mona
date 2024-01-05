export class TodoCustom extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `

<link rel="stylesheet" href="./Komponen/CustomComponents/1CSS-CustomComponent/TodoCostum.css">

    
    <div class="header-task">
    <main class="main-task">
    <div class="task-form">
    <input type="text" id="task" placeholder="Enter your Task">
    <select name="fetch API JSON" id="priority">
    <option value="❤❤❤">Urgent</option>
    <option value="❤❤">Medium</option>
    <option value="❤">Santai</option>
    </select>
    <input type="date" id="deadline">
    <button id="add-task">+</button>
    </div>
    <!-- ======================================{your tasklist pass here}============================================================== -->
    <div class="task-list" id="task-list"></div>
    </main>
    </div>
    `;
    const taskInput = document.querySelector('#task');
    const priorityInput = document.querySelector('#priority');
    const deadlineInput = document.querySelector('#deadline');
    const addTaskButton = document.querySelector('#add-task');
    const taskList = document.querySelector('#task-list');

    addTaskButton.addEventListener('click', () => {
        const task = taskInput.value.trim();
        const priority = priorityInput.value;
        const deadline = deadlineInput.value;

        if (task === '') {
            alert('Mohon masukkan tugas Anda');
            return;
        }

        const selectDate = new Date();
        selectDate.setTime(deadline);
        const currentDate = new Date();

        if (selectDate <= currentDate) {
            alert('Mohon masukkan tanggal deadline yang valid');
            return;
        }

        const taskItem = document.createElement('div');
        taskItem.classList.add('task');
        taskItem.innerHTML = `
    <p>${task}</p>
    <p>Prioritas: ${priority}</p>
    <p>Deadline: ${deadline}</p>
    <hr>
    <button class="selesai">Selesai</button>
    <button class="hapus">Hapus</button>
  `;

        taskList.appendChild(taskItem);

        taskInput.value = '';
        priorityInput.value = 'Urgent';
        deadlineInput.value = '';

        taskList.addEventListener('click', (event) => {
            if (event.target.classList.contains('selesai')) {
                const taskItem = event.target.parentElement;
                taskItem.style.backgroundColor = '#f2f2f2';
                event.target.disabled = true;
            } else if (event.target.classList.contains('hapus')) {
                const taskItem = event.target.parentElement;
                taskList.removeChild(taskItem);
            }
        });
    });




  }
}
customElements.define('custom-todo', TodoCustom)
