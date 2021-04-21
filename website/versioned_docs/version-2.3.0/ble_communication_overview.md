---
id: version-2.3.0-ble_communication_overview
title: 通信概要
sidebar_label: 🔄 通信概要
original_id: ble_communication_overview
---

## キューブとの通信について

キューブとの通信は Bluetooth&reg; 標準規格 Ver. 4.2（Bluetooth&reg; Low Energy、以下 BLE）で行います。

## _キューブの発見_

キューブは電源をいれると BLE ペリフェラル（Peripheral）として起動し、下記の情報をアドバタイズします。

| 定義                                  | 値                                                  |
| ------------------------------------- | --------------------------------------------------- |
| Flags                                 | General Discoverable Mode,<br/>BR/EDR Not Supported |
| Complete list of 128bit Service UUIDs | 10B20100-5B3B-4571-9508-CF3EFCD7BBAE                |
| Complete Local Name                   | toio Core Cube-XXX                                 |

### Complete Local Nameについて

キューブのシステムソフトウェア v02.0005（BLE プロトコルバージョン v2.3.0）から、Complete Local Name が toio Core Cube-XXXに変更されました。  
XXXにはキューブごとに固有のID文字列が入ります。 これは電源を入れなおしても不変な値のため、数十台同時にキューブを運用する際に個体識別の補助に役立ちます。
ID文字列は、すべてのキューブで固有の値になることを保証するものではありません。 また、キューブに記載されたシリアル番号と同じ番号ではありません。

IDに使われる文字列は3桁の文字列で、アルファベット＋数字＋アルファベットの順番で構成されます。

アルファベットは大文字、小文字の両方が使用されます。  
アルファベットのうち下記の文字は使用されません。

| IDに使用されないアルファベット          |
| --------------------------------------- |
| l,I,o,O,g,q,s,S,v,V,u,U,w,W,x,X,y,Y,z,Z |



| Complete Local Nameの例 |
| ----------------------- |
| toio Core Cube-M0p      |
| toio Core Cube-a9R      |
| toio Core Cube-C3P      |


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
