let empleados = [{
    id: 1,
    nombre: 'Nicolas'
}, {
    id: 2,
    nombre: 'Melissa'
}, {
    id: 3,
    nombre: 'Arthur'
}]

let salarios = [{
    id: 1,
    salario: 1000
}, {
    id: 2,
    salario: 2000
}]




let getEmpleado = async(id) => {

    let empleadoDB = empleados.find(empleado => empleado.id === id)

    if (!empleadoDB) {
        throw new Error(`No existe un empleado con ID ${ id }`)
    } else {
        return empleadoDB
    }
}

let getSalario = async(empleado) => {

    let salarioDB = salarios.find(salario => salario.id === empleado.id)

    if (!salarioDB) {
        throw new Error(`No se encontro ningun salario para el empleado ${ empleado.nombre }`)
    } else {
        return {
            nombre: empleado.nombre,
            salario: salarioDB.salario
        }
    }
}



let getInformacion = async(id) => {

    let empleado = await getEmpleado(id)

    let resp = await getSalario(empleado)

    return `El salsario de ${resp.nombre} es de $${resp.salario}`
}


getInformacion(2)
    .then(mensaje => {
        console.log(mensaje);
    })
    .catch(e => {
        console.log(e)
    })