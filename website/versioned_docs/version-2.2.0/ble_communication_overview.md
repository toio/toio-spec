---
id: ble_communication_overview
title: "通信概要"
sidebar_label: "通信概要"
original_id: ble_communication_overview
---

## キューブとの通信について

キューブとの通信は Bluetooth&reg; 標準規格 Ver. 4.2（Bluetooth&reg; Low Energy、以下 BLE）で行います。

## キューブの発見

キューブは電源をいれると BLE ペリフェラル（Peripheral）として起動し、下記の情報をアドバタイズします。

| 定義                                  | 値                                                  |
| ------------------------------------- | --------------------------------------------------- |
| Flags                                 | General Discoverable Mode,<br/>BR/EDR Not Supported |
| Complete list of 128bit Service UUIDs | 10B20100-5B3B-4571-9508-CF3EFCD7BBAE                |
| Complete Local Name                   | toio Core Cube                                      |

## キューブの機能の利用

キューブの各種機能は以下のサービス（service）とそこに含まれている特性（characteristic）を使うことで情報の取得や制御ができます。

| プロパティ      | 値                                                   |
| --------------- | ---------------------------------------------------- |
| Type            | Primary Service                                      |
| Service UUID    | 10B20100-5B3B-4571-9508-CF3EFCD7BBAE                 |
| Characteristics | [ID Information / 読み取りセンサー](id.md)           |
|                 | [Sensor Information / モーションセンサー](sensor.md) |
|                 | [Button Information / ボタン](button.md)             |
|                 | [Battery Information / バッテリー](battery.md)       |
|                 | [Motor Control / モーター](motor.md)                 |
|                 | [Light Control / ランプ](light.md)                   |
|                 | [Sound Control / サウンド](sound.md)                 |
|                 | [Configuration / 設定](configuration.md)             |
