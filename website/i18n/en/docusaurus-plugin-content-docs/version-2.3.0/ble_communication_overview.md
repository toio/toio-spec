---
id: ble_communication_overview
title: Communication Overview
sidebar_label: 🔄 Communication Overview
---

## Communication with the cube

Communication with the cube is done via Bluetooth&reg; standard Ver. 4.2 (Bluetooth&reg; Low Energy, hereafter BLE).

## Discovering the cube <span class="update"/>

When the cube is turned on, it runs as a BLE peripheral and advertises the following information.

| Definition                           | Value                                               |
| ------------------------------------ | --------------------------------------------------- |
| Flags                                | General Discoverable Mode,<br/>BR/EDR Not Supported |
| Complete list of 128bit Service UUID | 10B20100-5B3B-4571-9508-CF3EFCD7BBAE                |
| Complete Local Name                  | toio Core Cube-XXX                                  |

### Complete Local Name

The cube's system software complete local name has changed from v02.0005 (BLE protocol version v2.3.0), to toio Core Cube-XXX.
XXX is a unique cube ID string. Because this remains the same even after the cube is reset, it is useful for identifying individual cubes when dozens of cubes are being operated simultaneously.
The ID string is not guaranteed to be a unique to every cube. It is also not the same number as the serial number printed on the cube.

The string used for the ID is a string of 3 alphanumeric characters consisting of a letter + number + letter in that order.

The letter can be uppercase or lowercase.
The following letters are not used.

| Letters not used in ID                  |
| --------------------------------------- |
| l,I,o,O,g,q,s,S,v,V,u,U,w,W,x,X,y,Y,z,Z |

| Examples of complete local names |
| -------------------------------- |
| toio Core Cube-M0p               |
| toio Core Cube-a9R               |
| toio Core Cube-C3P               |

## Using the cube's functions

Each type of function can be viewed or controlled through the following services and the characteristics under these services.

| Property        | Value                                           |
| --------------- | ----------------------------------------------- |
| Type            | Primary Service                                 |
| Service UUID    | 10B20100-5B3B-4571-9508-CF3EFCD7BBAE            |
| Characteristics | [ID Information / Identification sensor](id.md) |
|                 | [Sensor Information / Motion Sensor](sensor.md) |
|                 | [Button Information / Button](button.md)        |
|                 | [Battery Information / Battery](battery.md)     |
|                 | [Motor Control / Motor](motor.md)               |
|                 | [Light Control / Indicator](light.md)           |
|                 | [Sound Control / Sound](sound.md)               |
|                 | [Configuration](configuration.md)               |
