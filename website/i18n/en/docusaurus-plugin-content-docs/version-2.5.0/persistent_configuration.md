---
id: ble_persistent_configuration
title: Persistent configuration
sidebar_label: Persistent configuration
versionDiff:
  headingLevels: [1]
---

The cube has persistent configuration settings that are retained even after the cube is disconnected or turned off and on again.
These settings can be changed or initialized using the same characteristic as [Configuration](configuration.md).

| Property            | Value                                                                          |
| ------------------- | ------------------------------------------------------------------------------ |
| Characteristic UUID | 10B201FF-5B3B-4571-9508-CF3EFCD7BBAE                                           |
| Properties          | [Write](#write-operations), [Read](#read-operations), [Notify](#notifications) |
| Descriptor          | Configuration                                                                  |

## Write operations

### Speaker mute settings

Speaker mute can be configured by writing the following data **while the function button is pressed**.
See [Responses to speaker mute settings](#responses-to-speaker-mute-settings) for how to obtain the response.

| Data location | Type  | Content            | Example                                                        |
| ------------- | ----- | ------------------ | -------------------------------------------------------------- |
| 0             | UInt8 | Configuration type | <span class="fixed">`0x33`</span> (Speaker mute settings)      |
| 1             | UInt8 | Reserved           | `0x00`                                                         |
| 2             | UInt8 | Mute setting       | `0x01`                                                         |

| Mute setting | Meaning                                                        |
| ------------ | -------------------------------------------------------------- |
| `0x00`       | Disable mute setting (default value)                           |
| `0x01`       | Mute all sounds                                                |
| `0x02`       | Mute only system sounds (startup, shutdown, connection, etc.)  |

When the mute setting is accepted, the cube notifies you with indicator colors (off, white, off) and sound (no sound is played if mute is configured).

### Initializing saved settings

All settings saved in the cube can be initialized by writing the following data **while the function button is pressed**.
See [Responses to initialize saved settings](#responses-to-initialize-saved-settings) for how to obtain the response.

| Data location | Type  | Content            | Example                                                           |
| ------------- | ----- | ------------------ | ----------------------------------------------------------------- |
| 0             | UInt8 | Configuration type | <span class="fixed">`0x0f`</span> (Initialize saved settings)     |

When initialization is accepted, the cube notifies you with indicator colors (off, white, off) and sound.

## Read operations

### Responses to speaker mute settings

If [Speaker mute settings](#speaker-mute-settings) is written, the following response is obtained.

| Data location | Type  | Content            | Example                                                             |
| ------------- | ----- | ------------------ | ------------------------------------------------------------------- |
| 0             | UInt8 | Configuration type | <span class="fixed">`0xb3`</span> (Responses to speaker mute settings) |
| 1             | UInt8 | Reserved           | `0x00`                                                              |
| 2             | UInt8 | Result value       | `0x00` (Set successfully)                                           |

The meanings of the result values are as follows.

| Result value            | Definition             |
| ----------------------- | ---------------------- |
| `0x00`                  | OK/Set successfully    |
| Value other than `0x00` | NG/Setting failed \*1  |

\*1 The request is not accepted when the function button is not pressed. (No acceptance effect is played.)

### Responses to initialize saved settings

If [Initializing saved settings](#initializing-saved-settings) is written, the following response is obtained depending on the result.

| Data location | Type  | Content            | Example                                                                 |
| ------------- | ----- | ------------------ | ----------------------------------------------------------------------- |
| 0             | UInt8 | Configuration type | <span class="fixed">`0x8f`</span> (Responses to initialize saved settings) |
| 1             | UInt8 | Reserved           | `0x00`                                                                  |
| 2             | UInt8 | Result value       | `0x00` (Initialized successfully)                                       |

The meanings of the result values are as follows.

| Result value            | Definition                  |
| ----------------------- | --------------------------- |
| `0x00`                  | OK/Initialized successfully |
| Value other than `0x00` | NG/Initialization failed \*1 |

\*1 The request is not accepted when the function button is not pressed. (No acceptance effect is played.)

## Notifications

The data obtained from [Read operations](#read-operations) can also be received through notifications.
