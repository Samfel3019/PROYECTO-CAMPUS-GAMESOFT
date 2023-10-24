const usuarios = JSON.parse(localStorage.getItem('usuarios')) || []


const btn_registro = document.getElementById('btn_registrarse');
btn_registro.addEventListener('click', (e) => {
    e.preventDefault()
    let correo = document.getElementById('registerUsername');
    let contraseña = document.getElementById('registerPassword');

    alert('funcionando')
    console.log(correo.value)
    console.log(contraseña.value)

    const estaRegistrado = usuarios.find(user => user.email === correo.value)
    if(estaRegistrado){
        return alert('El usuario ya esta registado!')
    }

    usuarios.push({ email: correo.value, password: contraseña.value})
    localStorage.setItem('usuarios', JSON.stringify(usuarios))
    alert('Registro Exitoso!')
    correo.innerHTML = "";
    contraseña.innerHTML = "";
})


const btn_sesion = document.getElementById('btn_iniciar_sesion');
btn_sesion.addEventListener('click', (e) => {
    e.preventDefault()
    let correo = document.getElementById('loginUsername');
    let contraseña = document.getElementById('loginPassword');


    const user = usuarios.find(u => u.email === correo.value && u.password === contraseña.value);

    if (user) {
        alert('Bienvenido!')
    } else {
        alert('Datos incorrectos!')
    }
    correo.innerHTML = "";
    contraseña.innerHTML = "";
})
console.log(usuarios)


/* const users = JSON.parse(localStorage.getItem('users')) || [];

function saveUsers() {
    localStorage.setItem('users', JSON.stringify(users));
}

function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    // Comprobar si el usuario existe en la lista (en una aplicación real, verificaría en la base de datos).
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        document.getElementById('message').innerText = 'Inicio de sesión exitoso';
    } else {
        document.getElementById('message').innerText = 'Credenciales incorrectas';
    }
}

function register() {
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;

    // Verificar si el usuario ya existe (en una aplicación real, verificaría en la base de datos).
    const existingUser = users.find(u => u.username === username);

    if (existingUser) {
        document.getElementById('message').innerText = 'El usuario ya existe';
    } else {
        // Agregar el nuevo usuario a la lista (en una aplicación real, lo guardarías en la base de datos).
        users.push({ username, password });
        saveUsers();
        document.getElementById('message').innerText = 'Registro exitoso';
    }
} */