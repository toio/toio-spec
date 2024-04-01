---
id: ble_light
title: Indicator
sidebar_label: Indicator
---

![Indicator of cube](assets/cube_basics_light.svg)

The cube has one indicator on the bottom (see [Parts](hardware_components.md)).
The color for this indicator can be specified and the indicator can be turned on and off using the following characteristics.

| Property            | Value                                |
| ------------------- | ------------------------------------ |
| Characteristic UUID | 10B20103-5B3B-4571-9508-CF3EFCD7BBAE |
| Properties          | [Write](#write-operations)           |
| Descriptor          | Light Control                        |

## Write operations

### Turning the indicator on and off

The indicator can be turned on and off by writing the following configuration data.
For the example, the indicator is turned on in red for 160 milliseconds then turned off.

| Data location | Type  | Content                          | Example                                                         |
| ------------- | ----- | -------------------------------- | --------------------------------------------------------------- |
| 0             | UInt8 | Control type                     | <span class="fixed">`0x03`</span> (indicator on, indicator off) |
| 1             | UInt8 | Duration indicator is controlled | `0x10` (160 milliseconds)                                       |
| 2             | UInt8 | Number of indicators controlled  | <span class="fixed">`0x01`</span>                               |
| 3             | UInt8 | ID of the indicator controlled   | <span class="fixed">`0x01`</span>                               |
| 4             | UInt8 | Value for red indicator          | `0xFF`                                                          |
| 5             | UInt8 | Value for green indicator        | `0x00`                                                          |
| 6             | UInt8 | Value for blue indicator         | `0x00`                                                          |

#### Duration indicator is controlled

The duration in which the indicator is controlled is specified with a value range between `0` to `255`. A value of `0` creates no time limit, so the indicator stays on or off until the next write operation is performed. For values `1` to `255`, the indicator turns on or off for 10 times the specified value in milliseconds, then turns off.

#### Number of indicators controlled ID of indicator controlled

Specifies the number or ID of the indicators being controlled. Only one indicator can be controlled, and both are set to `1`.

#### Red/Green/Blue values for the indicator

Each indicator color can be specified with a value range between `0` and `255`. If all of them are set to `0`, the indicator is turned off.

### Repeated turning on and off of indicator

The indicator can be turned on and off repeatedly by writing the following configuration data.
The indicator is blinking repeatedly in green and blue every 300 milliseconds in the example.

| Data location | Type  | Content                          | Example                                                         |
| ------------- | ----- | -------------------------------- | --------------------------------------------------------------- |
| 0             | UInt8 | Control type                     | <span class="fixed">`0x04`</span> (Repeatedly turns on and off) |
| 1             | UInt8 | Number of repetitions            | `0x00` (Infinite)                                               |
| 2             | UInt8 | Number of operations             | `0x02` (Two operations)                                         |
| 3             | UInt8 | Duration indicator is controlled | `0x1E` (300 milliseconds)                                       |
| 4             | UInt8 | Number of indicators controlled  | <span class="fixed">`0x01`</span>                               |
| 5             | UInt8 | ID of the indicator controlled   | <span class="fixed">`0x01`</span>                               |
| 6             | UInt8 | Value for red indicator          | `0x00`                                                          |
| 7             | UInt8 | Value for green indicator        | `0xFF`                                                          |
| 8             | UInt8 | Value for blue indicator         | `0x00`                                                          |
| 9             | UInt8 | Duration indicator is controlled | `0x1E` (300 milliseconds)                                       |
| 10            | UInt8 | Number of indicators controlled  | <span class="fixed">`0x01`</span>                               |
| 11            | UInt8 | ID of the indicator controlled   | <span class="fixed">`0x01`</span>                               |
| 12            | UInt8 | Value for red indicator          | `0x00`                                                          |
| 13            | UInt8 | Value for green indicator        | `0x00`                                                          |
| 14            | UInt8 | Value for blue indicator         | `0xFF`                                                          |

#### Data Structure and Operation

The data for this write operation has a structure with a variable length as shown in the figure below.

![Indicator Scenario Data Structure](assets/sequential_operation.svg)

Operation is made up of the following six items written with the [Turning the indicator on and off](#turning-the-indicator-on-and-off) data.

- Duration indicator is controlled
- Number of indicators controlled
- ID of indicator controlled
- Value for red indicator
- Value for green indicator
- Value for blue indicator

#### Number of repetitions

The number of times operations are repeated is specified with a value ranging between `0` and `255`. `0` repeats operations for an infinite number of times, meaning that the repetition of operations does not end until the next write operation is performed. For values `1` to `255`, the indicator turns off after finishing the specified number of repetitions.

#### Number of Operations

The number of operations is specified with a value range of `1` to `29`. If the value specified is smaller than the number of operations that follow, only the number of operations specified are repeated. If the value specified is greater than the number of operations that follow, an error occurs and the write operation is discarded.

#### Duration indicator is controlled

The duration the indicator is controlled is specified with a value range of `1` to `255`. In the range between `1` and `255`, the indicator turns on and off for 10 times the value specified in milliseconds.

### Turn off all indicators.

All indicators are turned off by writing the following configuration data.

| Data location | Type  | Content      | Example                                                     |
| ------------- | ----- | ------------ | ----------------------------------------------------------- |
| 0             | UInt8 | Control type | <span class="fixed">`0x01`</span> (Turn off all indicators) |

### Turn off a specific indicator.

A specific indicator can be turned off by writing the following configuration data.

| Data location | Type  | Content                         | Example                                                           |
| ------------- | ----- | ------------------------------- | ----------------------------------------------------------------- |
| 0             | UInt8 | Control type                    | <span class="fixed">`0x02`</span> (Turn off a specific indicator) |
| 1             | UInt8 | Number of indicators controlled | <span class="fixed">`0x01`</span>                                 |
| 2             | UInt8 | ID of indicator controlled      | <span class="fixed">`0x01`</span>                                 |
