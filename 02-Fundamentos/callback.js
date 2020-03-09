let getUsuarioById = (id, callback) => {

    let usuario = {
        nombre: 'Nicolas',
        id
    }

    if (id === 20) {
        callback(`El usuario con id ${ id }, no existe`)
    } else {
        callback(null, usuario)
    }
}


getUsuarioById(2, (err, usuario) => {

    if (err) {
        return console.log(err)
    }

    console.log('Usuario de base de datos', usuario);
})