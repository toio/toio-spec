---
id: how_to_update_cube
title: How to update
sidebar_label: How to update
versionDiff:
  headings:
    20240318: none
---

## Updating the cube

Updating the cube's system software will add new features and improve stability, primarily for the communication specifications. For details on how to update the system software, please see the [toio System Software Update Guide](https://toio.io/update).

### BLE protocol version

The communication specifications of the cube is versioned with the BLE protocol version. The BLE protocol version of your cube can be seen in [Configuration - Requesting the BLE protocol version](configuration.md#requesting-the-ble-protocol-version).

### Version combinations

The system software version corresponds to the BLE protocol version as follows.

| System Software | BLE Protocol Version |
| --------------- | -------------------- |
| v02.0000        | v2.0.0               |
| v02.0001        | v2.1.0               |
| v02.0003        | v2.1.0               |
| v02.0004        | v2.2.0               |
| v02.0005        | v2.3.0               |
| v02.0006        | v2.4.0               |
| v02.0007        | v2.5.0               |

## Updating the technical specifications

The technical specifications for each BLE protocol version can be viewed on this website. The number in the upper right corner of the page indicates the BLE protocol version that corresponds to the specifications displayed. You can change the version by clicking on this number.

### Displaying updated items

For the displayed version, features changed since the previous version are marked with <span className="version-diff-sign is-dot is-updated" /> in the sidebar and each page table of contents. In addition, each page marks changed items with badges such as <span className="version-diff-sign is-pill is-new">NEW</span> and <span className="version-diff-sign is-pill is-updated">UPDATED</span> for reference.

## Major updates

### 2026/04/27

Added information about the cube's system software v02.0007 (BLE protocol version v2.5.0).

- Updated the toio PlayGround state and transition conditions in [System state](how_to_use_cube.md#system-state)
- Added notification timing for responses to obtain the actual connection interval value
  - [Request to change connection interval](configuration.md#request-to-change-connection-interval)
- Added persistent configuration
  - [Initializing saved settings](persistent_configuration.md#initializing-saved-settings)
  - [Responses to initialize saved settings](persistent_configuration.md#responses-to-initialize-saved-settings)
  - [Speaker mute settings](persistent_configuration.md#speaker-mute-settings)
  - [Responses to speaker mute settings](persistent_configuration.md#responses-to-speaker-mute-settings)
- Added request for remote power off
  - [Request for remote power off](configuration.md#request-for-remote-power-off)
  - [Responses to request for remote power off](configuration.md#responses-to-request-for-remote-power-off)
- Added smooth blinking
  - [Smooth blinking](light.md#smooth-blinking)

### 2024/04/14

Fixed the example value.

- [Posture Angle detection](high_precision_tilt_sensor.md)
  - Fixed [the value of notification by high precision Euler angle](high_precision_tilt_sensor.md#obtaining-posture-angle-information-notifications-in-high-precision-euler-angles)

### 2024/03/18

Added information on the cube's system software v02.0006 (BLE protocol version v2.4.0).

- [How to use the cube](how_to_use_cube.md)
  - Added toio PlayGround state to [the system state](how_to_use_cube.md#system-state)
- [Communication overview](ble_communication_overview.md)
  - **BREAKING CHANGE:** Changed [the local name specifications](ble_communication_overview.md#complete-local-name-and-shortened-local-name)
- [Posture Angle detection](high_precision_tilt_sensor.md)
  - Added specifiable values to [request posture angle detection](high_precision_tilt_sensor.md#requesting-posture-angle-detection)
  - Added [the notification by quaternion](high_precision_tilt_sensor.md#obtaining-posture-angle-information-notifications-in-quaternions)
  - Added [the notification by high precision Euler angle](high_precision_tilt_sensor.md#obtaining-posture-angle-information-notifications-in-high-precision-euler-angles)
- [Configuration](configuration.md)
  - Added specifiable values to [posture angle detection settings](configuration.md#posture-angle-detection-settings)
  - Added the operation to [request to change connection interval](configuration.md#request-to-change-connection-interval)
  - Added the operation to [obtain the requested connection interval value](configuration.md#obtaining-the-requested-connection-interval-value)
  - Added the operation to [obtain the actual connection interval value](configuration.md#obtaining-the-actual-connection-interval-value)
  - Added the [responses to request to change connection interval](configuration.md#responses-to-request-to-change-connection-interval)
  - Added the [responses to obtain the requested connection interval value](configuration.md#responses-to-obtain-the-requested-connection-interval-value)
  - Added the [responses to obtain the actual connection interval value](configuration.md#responses-to-obtain-the-actual-connection-interval-value)

### 2023/12/14

Added cube's [Charging connector](hardware_other.md#charging-connector) information.

### 2023/09/29

Added cube's [Battery](hardware_other.md#battery) information.

### 2022/04/27

Added cube's [3D model data](hardware_shape.mdx#3d-model) and information about [shapes of block attachment](hardware_shape.mdx#protruding-shapes-for-block-attachment).

### 2021/07/19

Added "[Papercraft Creatures - Gesundroid](https://toio.io/titles/gesundroid.html)" toio ID information.

- Added information on [Play mat included with Papercraft Creatures - Gesundroid](info_position_id.md#play-mat-included-with-papercraft-creatures---gesundroid)

### 2021/04/21

Added information on the cube's system software v02.0005 (BLE protocol version v2.3.0).

- Changed advertising packet (Complete Local Name)
  - [Communication overview - Discovering the cube](ble_communication_overview.md#discovering-the-cube)
- Added posture angle detection functions
  - [Communication specifications for acquisition of posture angle detection](high_precision_tilt_sensor.md)
- Added magnetic sensor functions
  - [Communication specifications for acquisition of magnetic sensor information](magnetic_sensor.md)

### 2020/09/30

Added information about the cube's system software v02.0004 (BLE protocol version v2.2.0).

- Added [How to view remaining battery level](how_to_use_cube.md#checking-the-remaining-battery-level)
- Added identification sensor notification frequency settings
  - [Identification sensor ID notification settings](configuration.md#identification-sensor-id-notification-settings)
  - [Identification sensor ID missed notification settings](configuration.md#identification-sensor-id-missed-notification-settings)
- Added [Shake detection](sensor.md#shake-detection)
- Added magnetic sensor functions
  - [Magnetic sensor hardware specifications](hardware_magnet.md)
  - [Communication specifications for magnetic sensor information acquisition](magnetic_sensor.md)
  - [Enabling magnetic sensor](configuration.md#magnetic-sensor-settings)
- Added motor speed information functions
  - [Acquisition of motor speed information](motor.md#obtaining-motor-speed-information)
  - [Enabling acquisition of motor speed information](configuration.md#motor-speed-information-acquisition-settings)
- toio ID information moved from communication specifications to hardware specifications.
  - [Position ID](info_position_id.md)
  - [Standard ID](info_standard_id.md)
- Added "[toio COLLECTION Expansion Pack](https://toio.io/titles/toio-collection-extension.html)" and "[PICOTONS](https://toio.io/titles/picotons.html)" toio ID information
  - [Standard ID - toio COLLECTION Expansion Pack](info_standard_id.md#scanning-marks-included-with-the-toio-collection-extension-pack)
  - [Position ID - PICOTONS](info_position_id.md#mats-included-with-picotons)

### 2020/04/23

Added information on the simple play mat and simple card included with the toio Core Cube (single package).

- Moved toio ID information to [Position ID](info_position_id.md) and [Standard ID](info_standard_id.md).
- Added information on the [Simple play mat](info_position_id.md#simple-play-mat-included-with-the-toio-core-cube-single-package) and [Simple card](info_standard_id.md#simple-card-included-with-the-toio-core-cube-single-package) included with the toio Core Cube (single package)

### 2019/11/13

The following changes and additions have been made with BLE protocol version v2.1.0.

- Added [Double-tap detection/position detection](sensor.md)
- Expanded valid range for [Motor speed command values](motor.md#motor-speed-command-values)
  - The maximum value for speed commands increased from `100` to `115` to allow for faster movement.
  - The minimum value for speed commands decreased from `10` to `8` to allow for slower movement.
- Added variations to motor controls
  - [Motor control with target specified](motor.md#motor-control-with-target-specified)
  - [Motor control with multiple targets specified](motor.md#motor-control-with-multiple-targets-specified)
  - [Motor control with acceleration specified](motor.md#motor-control-with-acceleration-specified)

The detailed specifications are described on this website as well as partially explained on the [toio blog](https://toio.io/blog/). Please also refer to the blog for the specification details.
