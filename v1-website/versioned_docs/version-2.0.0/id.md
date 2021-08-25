---
id: version-2.0.0-ble_id
title: 読み取りセンサー
sidebar_label: 読み取りセンサー
original_id: ble_id
---

[トイオ・コレクション](https://toio.io/titles/toio-collection.html)に付属するマットやカードには特殊なパターンが印刷されています。これを toio ID と呼びます。キューブは底面にある「読み取りセンサー」でそのパターンから固有の情報を読み取り、印刷物上での位置の特定（絶対位置検出）を行います。

読み取りセンサーが toio ID から読み取る情報は以下の特性（characteristic）を使うことで取得できます。

| プロパティ          | 値                                     |
| ------------------- | -------------------------------------- |
| Characteristic UUID | 10B20101-5B3B-4571-9508-CF3EFCD7BBAE   |
| Properties          | [Read](#読み出し操作), [Notify](#通知) |
| Descriptor          | ID Information                         |

## toio ID の種類

toio ID には Position ID と Standard ID の 2 種類があり、それぞれ以下のように取得できる情報が異なります。

| toio ID の種類 | 印刷されているモノの例                                                      | 取得できる情報               |
| -------------- | --------------------------------------------------------------------------- | ---------------------------- |
| Position ID    | マット ![マット](assets/id_illust_mat.png)                                  | キューブの位置と角度         |
| Standard ID    | カードやステッカー ![カードやステッカー](assets/id_illust_card_sticker.svg) | ユニークな値とキューブの角度 |

## 読み出し操作

### Position ID

キューブがマットに印刷された Position ID から受け取った情報を、以下に示す構成のデータで取得できます。

| データ位置 | タイプ | 内容                        | 例                                       |
| ---------- | ------ | --------------------------- | ---------------------------------------- |
| 0          | UInt8  | 情報の種類                  | <span fixed>`0x01`</span>（Position ID） |
| 1          | UInt16 | キューブの中心の X 座標値   | `0x02c5`（709）                          |
| 3          | UInt16 | キューブの中心の Y 座標値   | `0x017f`（383）                          |
| 5          | UInt16 | キューブの角度              | `0x0132`（306 度）                       |
| 7          | UInt16 | 読み取りセンサーの X 座標値 | `0x02bc`（700）                          |
| 9          | UInt16 | 読み取りセンサーの Y 座標値 | `0x0182`（386）                          |
| 11         | UInt16 | 読み取りセンサーの角度      | `0x0132`（306 度）                       |

#### 座標（X 座標、Y 座標）

X 座標および Y 座標は Position ID が印刷されたマットの上での位置を示す座標です。
toio ID 独自に定義されているもので、単位は**ミリメートルではありません**。
トイオ・コレクションのマットには以下のような座標が割り振られています。

![ID detection coordinate system](assets/id_position_id_coordinate.png)

#### 角度

角度はマット上での向きです。以下の図において X 軸方向が 0 度で時計回りが正となる値です。
値の範囲は 0 度から 360 度です。

![ID detection angle](assets/id_position_id_angle.svg)

### Standard ID

キューブがカードやステッカーなどに印刷された Standard ID から受け取った情報を、以下に示す構成のデータで取得できます。

| データ位置 | タイプ | 内容             | 例                                       |
| ---------- | ------ | ---------------- | ---------------------------------------- |
| 0          | UInt8  | 情報の種類       | <span fixed>`0x02`</span>（Standard ID） |
| 1          | UInt32 | Standard ID の値 | `0x00380000`<br/>（3670016: タイフーン） |
| 5          | UInt16 | キューブの角度   | `0x0015`（21 度）                        |

#### Standard ID の値

トイオ・コレクションに含まれる Standard ID が印刷されたアイテムと取得できる値の一覧は以下のとおりです。
この値を取得することでキューブがどのアイテムの上に置かれているかを判断できます。

| 名前                            | カード・ステッカー                                                                                                                      | 値      |
| ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| タイフーン                      | ![タイフーン](assets/id_card_typhoon.svg)![タイフーン・裏](assets/id_card_typhoon_back.svg)                                             | 3670016 |
| ラッシュ                        | ![ラッシュ](assets/id_card_rush.svg)![ラッシュ・裏](assets/id_card_rush_back.svg)                                                       | 3670054 |
| オートタックル                  | ![オートタックル](assets/id_card_auto_tackle.svg)![オートタックル・裏](assets/id_card_auto_tackle_back.svg)                             | 3670018 |
| ランダム                        | ![ランダム](assets/id_card_random.svg)![ランダム・裏](assets/id_card_random_back.svg)                                                   | 3670056 |
| ツキパワーアップ                | ![ツキパワーアップ](assets/id_card_tackle_power_up.svg)![ツキパワーアップ・裏](assets/id_card_tackle_power_up_back.svg)                 | 3670020 |
| ハリテパワーアップ              | ![ハリテパワーアップ](assets/id_card_swing_attack_power_up.svg)![ハリテパワーアップ・裏](assets/id_card_swing_attack_power_up_back.svg) | 3670058 |
| サイドアタック                  | ![サイドアタック](assets/id_card_side_attack.svg)![サイドアタック・裏](assets/id_card_side_attack_back.svg)                             | 3670022 |
| イージーモード                  | ![イージーモード](assets/id_card_automatic_chasing.svg)![イージーモード](assets/id_card_automatic_chasing_back.svg)                     | 3670060 |
| ひだり                          | ![ひだり](assets/id_rhythm_left.svg)                                                                                                    | 3670024 |
| みぎ                            | ![みぎ](assets/id_rhythm_right.svg)                                                                                                     | 3670062 |
| まえ                            | ![まえ](assets/id_rhythm_front.svg)                                                                                                     | 3670026 |
| うしろ                          | ![うしろ](assets/id_rhythm_back.svg)                                                                                                    | 3670064 |
| GO                              | ![GO](assets/id_rhythm_go.svg)                                                                                                          | 3670028 |
| スカンク（青色）                | ![スカンク（青色）](assets/id_skunk_blue.svg)                                                                                           | 3670078 |
| スカンク（緑色）                | ![スカンク（緑色）](assets/id_skunk_green.svg)                                                                                          | 3670042 |
| スカンク（黄色）                | ![スカンク（黄色）](assets/id_skunk_yellow.svg)                                                                                         | 3670080 |
| スカンク（オレンジ色）          | ![スカンク（橙色）](assets/id_skunk_orange.svg)                                                                                         | 3670044 |
| スカンク（赤色）                | ![スカンク（赤色）](assets/id_skunk_red.svg)                                                                                            | 3670082 |
| スカンク（茶色）                | ![スカンク（茶色）](assets/id_skunk_brown.svg)                                                                                          | 3670046 |
| スピードアップ                  | ![スピードアップ](assets/id_sticker_speed_up.svg)                                                                                       | 3670066 |
| スピードダウン                  | ![スピードダウン](assets/id_sticker_speed_down.svg)                                                                                     | 3670030 |
| ふらつき                        | ![ふらつき](assets/id_sticker_wobble.svg)                                                                                               | 3670068 |
| パニック                        | ![パニック](assets/id_sticker_panic.svg)                                                                                                | 3670032 |
| スピン                          | ![スピン](assets/id_sticker_spin.svg)                                                                                                   | 3670070 |
| ショック                        | ![ショック](assets/id_sticker_shock.svg)                                                                                                | 3670034 |
| クラフトファイター              | ![クラフトファイター](assets/id_mark_craft_fighter.svg)                                                                                 | 3670048 |
| リズム＆ゴー                    | ![リズム＆ゴー](assets/id_mark_rhythm_and_go.svg)                                                                                       | 3670052 |
| スカンクチェイサー              | ![スカンクチェイサー](assets/id_mark_skunk_chaser.svg)                                                                                  | 3670086 |
| フィンガーストライク            | ![フィンガーストライク](assets/id_mark_finger_strike.svg)                                                                               | 3670050 |
| フィンガーストライク 1 人プレイ | ![フィンガーストライク１人プレイ](assets/id_mark_finger_strike_1p.svg)                                                                  | 3670088 |
| フリームーブ                    | ![フリームーブ](assets/id_mark_free_move.svg)                                                                                           | 3670084 |

#### キューブの角度

キューブの角度は Standard ID が印刷されたアイテム上でのキューブの向きです。
値の範囲は 0 度から 360 度です。

### Position ID missed

キューブが Position ID の印刷されたマットの上から取り除かれたという情報を、以下に示す構成のデータで取得できます。

| データ位置 | タイプ | 内容       | 例                                              |
| ---------- | ------ | ---------- | ----------------------------------------------- |
| 0          | UInt8  | 情報の種類 | <span fixed>`0x03`</span>（Position ID missed） |

### Standard ID missed

キューブが Standard ID の印刷されたカードやシールの上から取り除かれたという情報を、以下に示す構成のデータで取得できます。

| データ位置 | タイプ | 内容       | 例                                              |
| ---------- | ------ | ---------- | ----------------------------------------------- |
| 0          | UInt8  | 情報の種類 | <span fixed>`0x04`</span>（Standard ID missed） |

## 通知

読み取りセンサーの読み取る情報が変化すると、この特性は BLE セントラルに情報を通知します。
通知される情報の内容とデータの構造は[読み出し操作](#読み出し操作)で得られるものと同じです。
