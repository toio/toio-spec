---
id: ble_button
title: Button
sidebar_label: Button
---

There is one function button located at the bottom of the cube (see [Parts](hardware_components.md)).

The state of the button can be obtained using the following characteristics.

| Property            | Value                                              |
| ------------------- | -------------------------------------------------- |
| Characteristic UUID | 10B20107-5B3B-4571-9508-CF3EFCD7BBAE               |
| Properties          | [Read](#read-operations), [Notify](#notifications) |
| Descriptor          | Button Information                                 |

## Read operations

The configuration data below can be used to obtain the state of the button.

| Data location | Type  | Content         | Example                                     |
| ------------- | ----- | --------------- | ------------------------------------------- |
| 0             | UInt8 | Button ID       | <span fixed>`0x01`</span> (Function button) |
| 1             | UInt8 | State of button | `0x80` (Pressed)                            |

Button ID

The ID and corresponding button are as follows (see: [Parts](hardware_components.md)).

| Button ID | Button          |
| --------- | --------------- |
| `0x01`    | Function button |

#### State of button

The value for the state of the button is `0x80` when pressed and `0x00` when released.

## Notifications

When the state of the button changes, this characteristic notifies the BLE central of this.
The type of information and structure of data being sent are the same as for the [Read operations](#read-operations).
