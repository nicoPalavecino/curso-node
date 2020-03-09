const lugar = require('./location/location')
const clima = require('./weather/weather')

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        demand: true
    }
}).argv




let getInfo = async(direccion) => {

    try {
        const coords = await lugar.getLugarLatLng(direccion)
        const temperatura = await clima.getClima(coords.lat, coords.lng)
        return `El clima de ${coords.direccion} es de ${temperatura} grados`
    } catch (e) {
        return `No se pudo determinar el clima de ${direccion}`
    }

}



getInfo(argv.direccion)
    .then(resp => console.log(resp))
    .catch(err => console.log(err))