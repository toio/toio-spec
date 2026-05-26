---
id: ble_battery
title: Battery
sidebar_label: Battery
---

The following characteristics can be used to view the remaining battery level of the cube.

| Property            | Value                                              |
| ------------------- | -------------------------------------------------- |
| Characteristic UUID | 10B20108-5B3B-4571-9508-CF3EFCD7BBAE               |
| Properties          | [Read](#read-operations), [Notify](#notifications) |
| Descriptor          | Battery Information                                |

## Read operations

The configuration data below can be used to obtain the remaining battery level of the cube.

| Data location | Type  | Content                 | Example             |
| ------------- | ----- | ----------------------- | ------------------- |
| 0             | UInt8 | Remaining battery level | `0x50` (80 percent) |

#### Remaining battery level

The remaining battery level is obtained in values ranging between 0 and 100 in increments of 10. These values are in percentages.

## Notifications

At intervals of about 5 seconds, this characteristic sends information to the BLE central.
The type of information and structure of data being sent is the same as that for the [Read operations](#read-operations).
