import { initConfiguration } from './characteristics/configuration'
import { initSensor } from './characteristics/sensor'

const SERVICE_UUID = '10B20100-5B3B-4571-9508-CF3EFCD7BBAE'.toLowerCase()

export const scan = async () => {
  const device = await navigator.bluetooth.requestDevice({
    filters: [{ services: [SERVICE_UUID] }],
  })
  return await init(device)
}

const init = async (device) => {
  // event emitter
  const emitter = new EventTarget()

  // connect to device
  const server = await device?.gatt?.connect()
  // retrieve primary service
  const service = await server?.getPrimaryService(SERVICE_UUID)
  // retrieve all characteristics
  const characteristics = await service?.getCharacteristics()
  // create dictionary
  const characteristicMap = characteristics.reduce((map, characteristic) => {
    map[characteristic.uuid] = characteristic
    return map
  }, {})

  // handle disconnection
  device.addEventListener('gattserverdisconnected', () => {
    emitter.dispatchEvent(new CustomEvent('disconnect'))
  })

  return {
    isConnected: () => {
      return device.gatt.connected
    },
    on: (type, callback) => {
      emitter.addEventListener(type, callback)
    },
    off: (type, callback) => {
      emitter.removeEventListener(type, callback)
    },
    sensor: initSensor(characteristicMap, emitter),
    configuration: initConfiguration(characteristicMap, emitter),
  }
}
