const API_URL = 'http://localhost:3000/users';
const users = document.getElementById('users')
const roles = ['Admin', 'Editor', 'Viewers']

async function loadUsers() {
    try {
        const response = await fetch(API_URL)

        if (!response.ok) {
            throw Error(`HTTP Error: ${response.status} ${response.statusText}`)
        }

        const users = await response.json()

        users.forEach(user => {
            renderUsers(user)
        });
    }
    catch (e) {
        throw Error(`Error fetching data: ${e.message || e}`)
    }
}




function renderUsers(user) {
    const li = document.createElement('li');

    const title = document.createElement('span');
    title.textContent = user.name;

    const content = document.createElement('div');
    content.textContent = `mail: ${user.email}, role: ${user.role}`



    const actions = document.createElement('div');
    actions.className = 'user-actions';

    const promoteBtn = document.createElement('button');
    promoteBtn.textContent = 'Promote'

    promoteBtn.onclick = () => {
        promote(user)
    };

    const demoteBtn = document.createElement('button');
    demoteBtn.textContent = 'Demote';
    demoteBtn.onclick = () => {
        demote(user)
    };

    actions.appendChild(promoteBtn);
    actions.appendChild(demoteBtn);

    content.appendChild(title);
    li.appendChild(content);
    li.appendChild(actions);

    users.appendChild(li)
}


async function demote(user) {
    try {
        const response = await fetch(`${API_URL}/${user.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ role: roles[0] })
        })

        if (!response.ok) {
            throw Error(`HTTP Error: ${response.status} ${response.statusText}`)
        }
    }
    catch (e) {
        throw Error(`Error updating changes: ${e.message || e}`)
    }
}


async function promote(user) {
    try {
        const response = await fetch(`${API_URL}/${user.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ role: roles[0] })
        })

        if (!response.ok) {
            throw Error(`HTTP Error: ${response.status} ${response.statusText}`)
        }
    }
    catch (e) {
        throw Error(`Error updating changes: ${e.message || e}`)
    }
}

// Eliminar tarea - DELETE
async function deleteUser(id, li) {
    try {
        const response = await fetch(`${API_URL}/${id}`, { method: 'DELETE' })

        if (!response.ok) {
            throw Error(`HTTP Error: ${response.status} ${response.statusText}`)
        }

        li.remove();
    }
    catch (e) {
        throw Error('Error deleting user')
    }

}

const addBtn = document.getElementById('add')
const inputName = document.getElementById('name')
const inputEmail = document.getElementById('email')
const inputRole = document.getElementById('role')
add.addEventListener('click', async () => {

    try {
        const newUser = {name: inputName.value, role: inputRole.value, email: inputEmail.value };
        console.log(newUser)
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        });
        if (!response.ok) {
            throw Error(`HTTP Error: ${response.status} ${response.statusText}`);
        }

    }
    catch (e) {
        throw Error('Error')
    }

});


loadUsers();
