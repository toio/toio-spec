const CHARACTERISTIC_SENSOR_UUID = '10B20106-5B3B-4571-9508-CF3EFCD7BBAE'.toLowerCase()

export const initSensor = (characteristics, emitter) => {
  const characteristic = characteristics[CHARACTERISTIC_SENSOR_UUID]
  characteristic?.startNotifications()
  characteristic?.addEventListener('characteristicvaluechanged', (event) => {
    const data = event.target.value

    // handle posture angle in euler
    if (data?.getUint8(0) === 0x03) {
      const roll = data.getInt16(2, true)
      const pitch = data.getInt16(4, true)
      const yaw = data.getInt16(6, true)
      emitter.dispatchEvent(
        new CustomEvent('posture-angle:euler', { detail: { roll, pitch, yaw } })
      )
    }
  })

  return {}
}
