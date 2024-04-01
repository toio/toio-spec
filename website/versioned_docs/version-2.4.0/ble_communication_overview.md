---
id: ble_communication_overview
title: '通信概要'
sidebar_label: '🔄 通信概要'
original_id: ble_communication_overview
---

## キューブとの通信について

キューブとの通信は Bluetooth&reg; 標準規格 Ver. 4.2（Bluetooth&reg; Low Energy、以下 BLE）で行います。

## キューブの発見 <span class="update"/>

キューブは電源をいれると BLE ペリフェラル（Peripheral）として起動し、下記の情報をアドバタイズします。

| 定義                                     | 値                                                  |
| ---------------------------------------- | --------------------------------------------------- |
| Flags                                    | General Discoverable Mode,<br/>BR/EDR Not Supported |
| Complete list of 128bit Service UUIDs    | 10B20100-5B3B-4571-9508-CF3EFCD7BBAE                |
| Shortened Local Name <span class="new"/> | toio-XXX                                            |

### Complete Local Name と Shortened Local Name について <span class="update"/>

キューブのシステムソフトウェア v02.0006（BLE プロトコルバージョン v2.4.0）から、Complete Local Name の代わりに Shortened Local Name がアドバタイズに含まれます。  
Shortened Local Name は `toio-XXX` です。  

Complete Local Name はキューブのシステムソフトウェア v02.0006（BLE プロトコルバージョン v2.4.0）からアドバタイズ情報に含まれなくなりました。  
Complete Local Name は Generic Access サービスの Device Name 特性から読み出せます。  
Complete Local Name は `toio-XXX (toio Core Cube)` です。  

XXX にはキューブごとに固有の ID 文字列が入ります。 これは電源を入れなおしても不変な値のため、数十台同時にキューブを運用する際に個体識別の補助に役立ちます。
ID 文字列は、すべてのキューブで固有の値になることを保証するものではありません。 また、キューブに記載されたシリアル番号と同じ番号ではありません。

ID に使われる文字列は 3 桁の文字列で、アルファベット＋数字＋アルファベットの順番で構成されます。

アルファベットは大文字、小文字の両方が使用されます。  
アルファベットのうち下記の文字は使用されません。

| ID に使用されないアルファベット         |
| --------------------------------------- |
| l,I,o,O,g,q,s,S,v,V,u,U,w,W,x,X,y,Y,z,Z |

| Complete Local Name の例 |
| ------------------------ |
| toio-M0p                 |
| toio-a9R                 |
| toio-C3P                 |

#### 旧バージョン（システムソフトウェア v02.0005, BLE プロトコルバージョン v2.3.0）での Local Name

キューブのシステムソフトウェア v02.0005（BLE プロトコルバージョン v2.3.0）では、アドバタイズに Complete Local Name が含まれます。
旧バージョンの Complete Local Name は `toio Core Cube-XXX` です。

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
