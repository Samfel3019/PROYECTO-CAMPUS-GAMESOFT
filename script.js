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