

function iniciarSesion(event) {
  event.preventDefault();

  var usuarioLogin = document.getElementById('usuarioLogin').value;
  var contrasenaLogin = document.getElementById('contrasenaLogin').value;

  // Obtener los usuarios del archivo JSON
  var usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

  // Buscar si el usuario existe y las credenciales son válidas
  var usuarioEncontrado = usuarios.find(function(usuario) {
    return usuario.usuario === usuarioLogin && usuario.contrasena === contrasenaLogin;
  });

  if (usuarioEncontrado) {
    alert('Inicio de sesión exitoso.');
  } else {
    alert('Usuario o contraseña incorrectos.');
  }

  document.getElementById('inicioSesionForm').reset();
}

function registrarUsuario(event) {
  event.preventDefault();

  var nombre = document.getElementById('nombre').value;
  var apellido = document.getElementById('apellido').value;
  var telefono = document.getElementById('telefono').value;
  var correo = document.getElementById('correo').value;
  var usuario = document.getElementById('usuario').value;
  var contrasena = document.getElementById('contrasena').value;

  var usuarioNuevo = {
    nombre: nombre,
    apellido: apellido,
    telefono: telefono,
    correo: correo,
    usuario: usuario,
    contrasena: contrasena
  };

  // Guardar el usuario en el archivo JSON
  var usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
  usuarios.push(usuarioNuevo);
  localStorage.setItem('usuarios', JSON.stringify(usuarios));

  document.getElementById('registroForm').reset();
  alert('Usuario registrado exitosamente.');
}

//ACTUALIZAR USUARIOS
function registrarUsuario(event) {
  event.preventDefault();

  var nombre = document.getElementById('nombre').value;
  var apellido = document.getElementById('apellido').value;
  var telefono = document.getElementById('telefono').value;
  var correo = document.getElementById('correo').value;
  var usuario = document.getElementById('usuario').value;
  var contrasena = document.getElementById('contrasena').value;

  var usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

  var usuarioExistente = usuarios.find(function(usuarioItem) {
    return usuarioItem.usuario === usuario;
  });

  if (usuarioExistente) {
    alert('El nombre de usuario ya está en uso. Por favor, elige otro nombre de usuario.');
    return;
  }

  var contrasenaExistente = usuarios.find(function(usuarioItem) {
    return usuarioItem.contrasena === contrasena;
  });

  if (contrasenaExistente) {
    alert('La contraseña ya está en uso. Por favor, elige otra contraseña.');
    return;
  }

  var usuarioNuevo = {
    nombre: nombre,
    apellido: apellido,
    telefono: telefono,
    correo: correo,
    usuario: usuario,
    contrasena: contrasena
  };

  usuarios.push(usuarioNuevo);
  localStorage.setItem('usuarios', JSON.stringify(usuarios));

  document.getElementById('registroForm').reset();
  alert('Usuario registrado exitosamente.');
}

function iniciarSesion(event) {
  event.preventDefault();

  var usuarioLogin = document.getElementById('usuarioLogin').value;
  var contrasenaLogin = document.getElementById('contrasenaLogin').value;

  var usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

  var usuarioEncontrado = usuarios.find(function(usuario) {
    return usuario.usuario === usuarioLogin && usuario.contrasena === contrasenaLogin;
  });

  if (usuarioEncontrado) {
    alert('Inicio de sesión exitoso.');
  } else {
    alert('Usuario o contraseña incorrectos.');
  }

  document.getElementById('inicioSesionForm').reset();
}

function cargarDatosUsuario() {
  var usuario = localStorage.getItem('usuarioActual');

  if (usuario) {
    var usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    var usuarioEncontrado = usuarios.find(function(usuarioItem) {
      return usuarioItem.usuario === usuario;
    });

    if (usuarioEncontrado) {
      document.getElementById('usuarioActualizar').value = usuarioEncontrado.usuario;
      document.getElementById('nombre').value = usuarioEncontrado.nombre;
      document.getElementById('apellido').value = usuarioEncontrado.apellido;
      document.getElementById('telefono').value = usuarioEncontrado.telefono;
      document.getElementById('correo').value = usuarioEncontrado.correo;
      document.getElementById('contrasena').value = usuarioEncontrado.contrasena;
    }
  }
}

function actualizarUsuario(event) {
  event.preventDefault();

  var usuarioActualizar = document.getElementById('usuarioActualizar').value;
  var nombre = document.getElementById('nombre').value;
  var apellido = document.getElementById('apellido').value;
  var telefono = document.getElementById('telefono').value;
  var correo = document.getElementById('correo').value;
  var contrasena = document.getElementById('contrasena').value;

  var usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
  var usuarioEncontrado = usuarios.find(function(usuario) {
    return usuario.usuario === usuarioActualizar;
  });

  if (usuarioEncontrado) {
    usuarioEncontrado.nombre = nombre;
    usuarioEncontrado.apellido = apellido;
    usuarioEncontrado.telefono = telefono;
    usuarioEncontrado.correo = correo;
    usuarioEncontrado.contrasena = contrasena;

    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    alert('Datos de usuario actualizados correctamente.');
  } else {
    alert('El usuario no existe.');
  }

  document.getElementById('actualizarForm').reset();
}

cargarDatosUsuario();
