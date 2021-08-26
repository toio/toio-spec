---
id: ble_how_to_communicate
title: Function usage
sidebar_label: Function usage
---

The functions of the cube can be obtained and controlled by using characteristics. Each characteristic supports one of the Write, Read, or Notify properties, and can be used in the following ways.

| Properties | How to use                                                                                           |
| ---------- | ---------------------------------------------------------------------------------------------------- |
| Write      | Writes data to a characteristic, and controls the cube according to the data content.                |
| Read       | Reads data from a characteristic to obtain information about the cube contained in the data.         |
| Notify     | Received whenever information that can be retrieved by "reading" data is changed by "notifications". |

## Data structures

The structure of the data to which "Write", "Read", and "Notify" operations are applied is explained in the following pages.

| Data location | Type | Content | Example |
| ------------- | ---- | ------- | ------- |

#### Data location

The location of data in buffers starting with 0.

#### Type

The type of data, such as `UInt8` or `String`. All byte orders are **little endian**.

#### Content

Indicates the content of the data in words.

#### Example

A concrete example is given in the following manner.

- <span class="fixed"><code>0x00</code></span>: Fixed data (only the indicated value is valid or exists)
- `0x00`: An example of non-fixed data

## Write operation errors

For write operations, the following cases are determined errors.
When there is an error, the write operation is discarded and does not affect the operation of the cube.

- When the full data length is different from the specified length
- When the data value is out side the specified range

If there are other cases of errors, they are listed as notes for each characteristic.
