class TodoList {
    constructor() {
        this.todos = this.loadFromLocalStorage();
        this.todoInput = document.getElementById('todoInput');
        this.addBtn = document.getElementById('addBtn');
        this.todoListEl = document.getElementById('todoList');

        this.setupEventListeners();
        this.render();
    }

    setupEventListeners() {
        this.addBtn.addEventListener('click', () => this.addTodo());
        this.todoInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.addTodo();
        });
    }

    addTodo() {
        const text = this.todoInput.value.trim();

        if (text === '') {
            alert('Please enter a task!');
            return;
        }

        const todo = {
            id: Date.now(),
            text: text,
            completed: false,
            createdAt: new Date().toLocaleString()
        };

        this.todos.push(todo);
        this.todoInput.value = '';
        this.todoInput.focus();
        this.saveToLocalStorage();
        this.render();
    }

    updateTodo(id, newText) {
        const todo = this.todos.find(t => t.id === id);
        if (todo) {
            todo.text = newText;
            this.saveToLocalStorage();
            this.render();
        }
    }

    deleteTodo(id) {
        if (confirm('Are you sure you want to delete this todo?')) {
            this.todos = this.todos.filter(t => t.id !== id);
            this.saveToLocalStorage();
            this.render();
        }
    }

    toggleComplete(id) {
        const todo = this.todos.find(t => t.id === id);
        if (todo) {
            todo.completed = !todo.completed;
            this.saveToLocalStorage();
            this.render();
        }
    }

    saveToLocalStorage() {
        localStorage.setItem('todos', JSON.stringify(this.todos));
    }

    loadFromLocalStorage() {
        const saved = localStorage.getItem('todos');
        return saved ? JSON.parse(saved) : [];
    }

    render() {
        // Clear the list
        this.todoListEl.innerHTML = '';

        if (this.todos.length === 0) {
            const emptyMsg = document.createElement('div');
            emptyMsg.className = 'empty-message';
            emptyMsg.textContent = 'No todos yet. Add one to get started!';
            this.todoListEl.appendChild(emptyMsg);
            return;
        }

        // Render each todo
        this.todos.forEach(todo => {
            const li = document.createElement('li');
            li.className = `todo-item ${todo.completed ? 'completed' : ''}`;

            const textSpan = document.createElement('span');
            textSpan.className = 'todo-text';
            textSpan.textContent = todo.text;

            const actionsDiv = document.createElement('div');
            actionsDiv.className = 'todo-actions';

            // Complete button
            const completeBtn = document.createElement('button');
            completeBtn.className = 'btn btn-complete';
            completeBtn.textContent = todo.completed ? '✓' : '○';
            completeBtn.title = todo.completed ? 'Mark as incomplete' : 'Mark as complete';
            completeBtn.addEventListener('click', () => this.toggleComplete(todo.id));

            // Edit button
            const editBtn = document.createElement('button');
            editBtn.className = 'btn btn-edit';
            editBtn.textContent = 'Edit';
            editBtn.addEventListener('click', () => this.openEditModal(todo.id, todo.text));

            // Delete button
            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'btn btn-delete';
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', () => this.deleteTodo(todo.id));

            actionsDiv.appendChild(completeBtn);
            actionsDiv.appendChild(editBtn);
            actionsDiv.appendChild(deleteBtn);

            li.appendChild(textSpan);
            li.appendChild(actionsDiv);

            this.todoListEl.appendChild(li);
        });
    }

    openEditModal(id, currentText) {
        const modal = document.getElementById('editModal') || this.createEditModal();

        const input = modal.querySelector('.modal-input');
        input.value = currentText;
        input.focus();
        input.select();

        const saveBtn = modal.querySelector('.btn-save');
        const cancelBtn = modal.querySelector('.btn-cancel');

        // Remove old event listeners by cloning
        const newSaveBtn = saveBtn.cloneNode(true);
        const newCancelBtn = cancelBtn.cloneNode(true);

        saveBtn.parentNode.replaceChild(newSaveBtn, saveBtn);
        cancelBtn.parentNode.replaceChild(newCancelBtn, cancelBtn);

        newSaveBtn.addEventListener('click', () => {
            const newText = input.value.trim();
            if (newText === '') {
                alert('Task cannot be empty!');
                return;
            }
            this.updateTodo(id, newText);
            modal.classList.remove('active');
        });

        newCancelBtn.addEventListener('click', () => {
            modal.classList.remove('active');
        });

        // Close modal when clicking outside
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });

        modal.classList.add('active');
    }

    createEditModal() {
        const modal = document.createElement('div');
        modal.id = 'editModal';
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-content">
                <h2>Edit Todo</h2>
                <input type="text" class="modal-input" placeholder="Enter updated task...">
                <div class="modal-actions">
                    <button class="btn-save">Save</button>
                    <button class="btn-cancel">Cancel</button>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
        return modal;
    }
}

// Initialize the todo list when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new TodoList();
});
