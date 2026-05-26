---
id: ble_serialized_information
title: Serialized information
sidebar_label: 🆕 Serialized information
original_id: ble_serialized_information
---

This feature provides read/notification information that can be obtained from the cube as a single serialized data block. Use this feature when serialized information is required for some reason. It is not necessary when all other read/notification information can be obtained in your environment.

:::note

This feature is **disabled** by default. It becomes available only after it is enabled in [Configuration - Serialized information notification settings](configuration.md#serialized-information-notification-settings).

:::

Serialized information can be obtained using the following characteristic. This characteristic is the same as [Configuration](configuration.md).

| Property            | Value                                                                                                          |
| ------------------- | -------------------------------------------------------------------------------------------------------------- |
| Characteristic UUID | 10B201FF-5B3B-4571-9508-CF3EFCD7BBAE                                                                           |
| Properties          | [Write](#write-operations), [Read](#read-operations--notifications), [Notify](#read-operations--notifications) |
| Descriptor          | Configuration                                                                                                  |

## Write operations

There are no write operations used for serialized information.

## Read operations / Notifications <span class="new"/>

This characteristic notifies the BLE central with information.
The notified information can also be obtained with a read operation.

:::note

This characteristic is shared with [Configuration](configuration.md). Because that information is also obtained, also check [Configuration - Read operations](configuration.md#read-operations) and [Configuration - Notifications](configuration.md#notifications) when using this feature.

:::

### Obtaining serialized information

The following data can be obtained.

| Data location | Type   | Content                | Example                                                |
| ------------- | ------ | ---------------------- | ------------------------------------------------------ |
| 0             | UInt8  | Information type       | **`0xf0`** Obtaining serialized information            |
| 1             | 19Byte | Serialized information | Omitted                                                |

#### Information type

**`0xf0`** represents "Obtaining serialized information".

Because the characteristic is shared with [Configuration](configuration.md), the information described below can also be obtained. Check the value of this information type to determine which information was obtained.

- [Configuration - Read operations](configuration.md#read-operations)
- [Configuration - Notifications](configuration.md#notifications)

#### Serialized information

The following data can be obtained by bit position and bit size.

| Bit position | Bit size | Content                                                                 |
| ------------ | -------- | ----------------------------------------------------------------------- |
| 0            | 4 bits   | Reserved                                                                |
| 4            | 1 bit    | Function button state                                                   |
| 5            | 2 bits   | toio ID detection state                                                 |
| 7            | 1 bit    | Cube angle for Position ID or Standard ID (lower bit)                   |
| 8            | 8 bits   | Cube angle for Position ID or Standard ID (upper bits)                  |
| 16           | 8 bits   | X coordinate value of the cube center for Position ID (lower bits)      |
| 24           | 6 bits   | X coordinate value of the cube center for Position ID (upper bits)      |
| 30           | 2 bits   | Y coordinate value of the cube center for Position ID (lower bits)      |
| 32           | 8 bits   | Y coordinate value of the cube center for Position ID (middle bits)     |
| 40           | 4 bits   | Y coordinate value of the cube center for Position ID (upper bits)      |
| 44           | 4 bits   | Standard ID value (lower bits)                                          |
| 48           | 8 bits   | Standard ID value (lower-middle bits)                                   |
| 56           | 8 bits   | Standard ID value (upper-middle bits)                                   |
| 64           | 8 bits   | Standard ID value (upper bits)                                          |
| 72           | 8 bits   | Motor ID 1 (left) speed                                                 |
| 80           | 8 bits   | Motor ID 2 (right) speed                                                |
| 88           | 5 bits   | Response for motor control with target or motor control with multi-target |
| 93           | 3 bits   | Posture detection in motion detection information                       |
| 96           | 7 bits   | Remaining battery level                                                 |
| 103          | 1 bit    | Horizontal detection in motion detection information                    |
| 104          | 5 bits   | Shake detection in motion detection information                         |
| 109          | 1 bit    | Collision detection in motion detection information                     |
| 110          | 1 bit    | Double-tap detection in motion detection information                    |
| 111          | 1 bit    | Reserved                                                                |
| 112          | 8 bits   | Absolute value of Roll (X axis) in posture angle information (Euler angles) |
| 120          | 8 bits   | Absolute value of Pitch (Y axis) in posture angle information (Euler angles) |
| 128          | 8 bits   | Absolute value of Yaw (Z axis) in posture angle information (Euler angles) |
| 136          | 1 bit    | Sign of Roll (X axis) in posture angle information (Euler angles)       |
| 137          | 1 bit    | Sign of Pitch (Y axis) in posture angle information (Euler angles)      |
| 138          | 1 bit    | Sign of Yaw (Z axis) in posture angle information (Euler angles)        |
| 139          | 2 bits   | Reserved                                                                |
| 141          | 3 bits   | Magnet state of the magnetic sensor                                     |
| 144          | 8 bits   | Magnetic force strength of the magnetic sensor                          |

##### Function button state

Represents the [state](button.md#state-of-button) of the function button that can be obtained with [Button](button.md).

| Value | Function button state |
| ----- | --------------------- |
| `0b0` | Not pressed           |
| `0b1` | Pressed               |

##### toio ID detection state

Represents the current toio ID detection state that can be obtained with [Identification sensor](id.md).

| Value  | toio ID detection state  |
| ------ | ------------------------ |
| `0b01` | Reading Standard ID      |
| `0b10` | Reading Position ID      |
| `0b11` | Not reading              |

##### Cube angle for Position ID or Standard ID

Represents the [cube angle for Position ID](id.md#angle) or the [cube angle for Standard ID](id.md#angle-of-cube) that can be obtained with [Identification sensor](id.md). The angle obtained most recently is reflected.

##### X coordinate value of the cube center for Position ID

Represents the [X coordinate value of the cube center for Position ID](id.md#coordinates-x-coordinate-y-coordinate) that can be obtained with [Identification sensor](id.md).
The maximum value is `0x3fff`; values greater than this are truncated.

##### Y coordinate value of the cube center for Position ID

Represents the [Y coordinate value of the cube center for Position ID](id.md#coordinates-x-coordinate-y-coordinate) that can be obtained with [Identification sensor](id.md).
The maximum value is `0x3fff`; values greater than this are truncated.

##### Standard ID value

Represents the [Standard ID value](id.md#standard-id-values) that can be obtained with [Identification sensor](id.md).
The maximum value is `0xfffffff`; values greater than this are truncated.

##### Motor ID 1 (left) speed

Represents the [Motor ID 1 (left) speed](motor.md#speed) that can be obtained with [Motor](motor.md).
If [Configuration - Motor speed information acquisition settings](configuration.md#motor-speed-information-acquisition-settings) is disabled, this value is always `0x00`.

##### Motor ID 2 (right) speed

Represents the [Motor ID 2 (right) speed](motor.md#speed) that can be obtained with [Motor](motor.md).
If [Configuration - Motor speed information acquisition settings](configuration.md#motor-speed-information-acquisition-settings) is disabled, this value is always `0x00`.

##### Response for motor control with target or motor control with multi-target

Represents the [response content for motor control with target](motor.md#response-content) or the [response content for motor control with multi-target](motor.md#response-content-1) that can be obtained with [Motor](motor.md).
The response result for the last executed [motor control with target](motor.md#motor-control-with-target-specified) or [motor control with multi-target](motor.md#motor-control-with-multiple-targets-specified) is reflected; while control is being executed, the state is `0x1f`.

| Value             | Response for motor control with target or motor control with multi-target |
| ----------------- | ------------------------------------------------------------------------ |
| `0x1f`            | Motor control with target or motor control with multi-target is executing |
| Other than `0x1f` | Same as the response for motor control with target or motor control with multi-target |

##### Posture detection in motion detection information

Represents [posture detection](sensor.md#posture-detection) that can be obtained with [Motion detection](sensor.md).

##### Remaining battery level

Represents the [remaining battery level](battery.md#remaining-battery-level) that can be obtained with [Battery](battery.md).

##### Horizontal detection in motion detection information

Represents [horizontal detection](sensor.md#horizontal-detection) that can be obtained with [Motion detection](sensor.md).

##### Shake detection in motion detection information

Represents [shake detection](sensor.md#shake-detection) that can be obtained with [Motion detection](sensor.md).

##### Collision detection in motion detection information

Represents [collision detection](sensor.md#collision-detection) that can be obtained with [Motion detection](sensor.md).

##### Double-tap detection in motion detection information

Represents [double-tap detection](sensor.md#double-tap-detection) that can be obtained with [Motion detection](sensor.md).

##### Absolute value of Roll (X axis) in posture angle information (Euler angles)

Represents the absolute value of [Roll (X axis) in posture angle information (Euler angles)](high_precision_tilt_sensor.md#angles) that can be obtained with [Posture Angle detection](high_precision_tilt_sensor.md). For sign information, see [Sign of Roll (X axis) in posture angle information (Euler angles)](#sign-of-roll-x-axis-in-posture-angle-information-euler-angles).

##### Absolute value of Pitch (Y axis) in posture angle information (Euler angles)

Represents the absolute value of [Pitch (Y axis) in posture angle information (Euler angles)](high_precision_tilt_sensor.md#angles) that can be obtained with [Posture Angle detection](high_precision_tilt_sensor.md). For sign information, see [Sign of Pitch (Y axis) in posture angle information (Euler angles)](#sign-of-pitch-y-axis-in-posture-angle-information-euler-angles).

##### Absolute value of Yaw (Z axis) in posture angle information (Euler angles)

Represents the absolute value of [Yaw (Z axis) in posture angle information (Euler angles)](high_precision_tilt_sensor.md#angles) that can be obtained with [Posture Angle detection](high_precision_tilt_sensor.md). For sign information, see [Sign of Yaw (Z axis) in posture angle information (Euler angles)](#sign-of-yaw-z-axis-in-posture-angle-information-euler-angles).

##### Sign of Roll (X axis) in posture angle information (Euler angles)

Represents the sign of [Roll (X axis) in posture angle information (Euler angles)](high_precision_tilt_sensor.md#angles) that can be obtained with [Posture Angle detection](high_precision_tilt_sensor.md). For absolute value information, see [Absolute value of Roll (X axis) in posture angle information (Euler angles)](#absolute-value-of-roll-x-axis-in-posture-angle-information-euler-angles).

##### Sign of Pitch (Y axis) in posture angle information (Euler angles)

Represents the sign of [Pitch (Y axis) in posture angle information (Euler angles)](high_precision_tilt_sensor.md#angles) that can be obtained with [Posture Angle detection](high_precision_tilt_sensor.md). For absolute value information, see [Absolute value of Pitch (Y axis) in posture angle information (Euler angles)](#absolute-value-of-pitch-y-axis-in-posture-angle-information-euler-angles).

##### Sign of Yaw (Z axis) in posture angle information (Euler angles)

Represents the sign of [Yaw (Z axis) in posture angle information (Euler angles)](high_precision_tilt_sensor.md#angles) that can be obtained with [Posture Angle detection](high_precision_tilt_sensor.md). For absolute value information, see [Absolute value of Yaw (Z axis) in posture angle information (Euler angles)](#absolute-value-of-yaw-z-axis-in-posture-angle-information-euler-angles).

##### Magnet state of the magnetic sensor

Represents the [magnet state](magnetic_sensor.md#magnet-state) that can be obtained with [Magnetic sensor](magnetic_sensor.md).

##### Magnetic force strength of the magnetic sensor

Represents the [magnetic force strength](magnetic_sensor.md#magnetic-force-strength) that can be obtained with [Magnetic sensor](magnetic_sensor.md).
The [magnetic force direction](magnetic_sensor.md#magnetic-force-direction) cannot be obtained in serialized information.
