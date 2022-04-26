import { Buffer } from 'buffer'

const CHARACTERISTIC_CONFIG_UUID = '10B201FF-5B3B-4571-9508-CF3EFCD7BBAE'.toLowerCase()

export const initConfiguration = (characteristics, emitter) => {
  const characteristic = characteristics[CHARACTERISTIC_CONFIG_UUID]
  // characteristic?.startNotifications()
  // characteristic?.addEventListener('characteristicvaluechanged', (event) => {
  //   const data = event.target.value
  // })

  return {
    enablePostureAngleDetection: ({ enable }) => {
      characteristic.writeValue(Buffer.from([0x1d, 0x00, 0x01, enable ? 0x01 : 0x00, 0x01]))
    },
  }
}
