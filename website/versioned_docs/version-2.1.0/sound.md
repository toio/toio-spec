---
id: ble_sound
title: 'サウンド'
sidebar_label: 'サウンド'
original_id: ble_sound
---

キューブは内部に音を再生するための圧電スピーカーを 1 つ持っています。
この圧電スピーカーは以下の特性（characteristic）を使うことでキューブ内に用意されている効果音や MIDI note number を使ったメロディーを再生できます。

| プロパティ          | 値                                   |
| ------------------- | ------------------------------------ |
| Characteristic UUID | 10B20104-5B3B-4571-9508-CF3EFCD7BBAE |
| Properties          | [Write](#書き込み操作)               |
| Descriptor          | Sound Control                        |

## 書き込み操作

### 効果音の再生

以下に示す構成のデータを書き込むことでキューブ内に用意されている効果音を再生できます。
例は"Mat in"の効果音を再生します。

| データ位置 | タイプ | 内容        | 例                                                |
| ---------- | ------ | ----------- | ------------------------------------------------- |
| 0          | UInt8  | 制御の種類  | <span class="fixed">`0x02`</span>（効果音の再生） |
| 1          | UInt8  | 効果音の ID | `0x04`（Mat in）                                  |
| 2          | UInt8  | 音量        | `0xFF`（最大）                                    |

#### 効果音の ID

効果音の ID は`0`以上`10`以下の範囲で指定します。ID と効果音の種類の対応は以下のとおりです。

| 効果音の ID | 効果音の種類 |
| ----------- | ------------ |
| 0           | Enter        |
| 1           | Selected     |
| 2           | Cancel       |
| 3           | Cursor       |
| 4           | Mat in       |
| 5           | Mat out      |
| 6           | Get 1        |
| 7           | Get 2        |
| 8           | Get 3        |
| 9           | Effect 1     |
| 10          | Effect 2     |

#### 音量

音量は`0`以上`255`以下の範囲で指定可能です。
`0`は音量 0（OFF）で`0`以外は全て最大音量になります。

### MIDI note number の再生

以下に示す構成のデータを書き込むことで MIDI note number を使ったメロディーを再生できます。例は"C5-D5-E5"を繰り返し再生しつづけます。

| データ位置 | タイプ | 内容             | 例                                                           |
| ---------- | ------ | ---------------- | ------------------------------------------------------------ |
| 0          | UInt8  | 制御の種類       | <span class="fixed">`0x03`</span>（MIDI note number の再生） |
| 1          | UInt8  | 繰り返し回数     | `0x00`（無限）                                               |
| 2          | UInt8  | Operation の数   | `0x03`（3 つ）                                               |
| 3          | UInt8  | 再生時間         | `0x1E`（300 ミリ秒）                                         |
| 4          | UInt8  | MIDI note number | `0x3C`（C5）                                                 |
| 5          | UInt8  | 音量             | `0xFF`（最大）                                               |
| 6          | UInt8  | 再生時間         | `0x1E`（300 ミリ秒）                                         |
| 7          | UInt8  | MIDI note number | `0x3E`（D5）                                                 |
| 8          | UInt8  | 音量             | `0xFF`（最大）                                               |
| 9          | UInt8  | 再生時間         | `0x1E`（300 ミリ秒）                                         |
| 10         | UInt8  | MIDI note number | `0x40`（E5）                                                 |
| 11         | UInt8  | 音量             | `0xFF`（最大）                                               |

#### データ構造と Operation

この書き込み操作のデータは以下の図のような長さが可変な構造になっています。

![Sound Sequence Data Structure](assets/sequential_operation.svg)

Operation とは、以下の 3 つをまとめたものを表します。

- 再生時間
- MIDI note number
- 音量

#### 繰り返し回数

Operation の繰り返し回数を`0`以上`255`以下の範囲で指定します。`0`は「無限回」を意味し、次の書き込み操作が行われるまで Operation の繰り返しが終わりません。`1`以上`255`以下の範囲では指定した回数繰り返した後に再生を停止します。

#### Operation の数

Operation の数を`1`以上`59`以下の範囲で指定します。ここで指定する値が続く Operation の数より小さい場合はここで指定した値の数の Operation だけが繰り返されます。ここで指定する値が続く Operation の数より大きい場合はエラーとなり書き込み操作が破棄されます。

#### 再生時間

MIDI note number を再生する時間を`1`以上`255`の範囲で指定します。指定した値 x10 ミリ秒再生します。

#### MIDI Note Number

再生する MIDI note number を指定します。値の範囲は`0`以上`128`です。Note name との対応は [MIDI note number と Note name](#midi-note-number-と-note-name) 参照してください。

### 再生の停止

以下に示す構成のデータを書き込むことで[効果音の生成](#効果音の再生)や [MIDI note number の再生](#midi-note-number-の再生)を停止できます。

| データ位置 | タイプ | 内容       | 例                                              |
| ---------- | ------ | ---------- | ----------------------------------------------- |
| 0          | UInt8  | 制御の種類 | <span class="fixed">`0x01`</span>（再生の停止） |

## Additional information

### MIDI note number と Note name

MIDI note number と Note name の対応は以下のとおりです。MIDI note number = 57 が 440 ヘルツの音に対応します。また、MIDI note number = 128 は無音となります。

<table>
  <thead>
    <tr>
      <th colspan="1" rowspan="2">オクターブ</th>
      <th colspan="12">音名</th>
    </tr>
    <tr align="middle">
      <th>C</th>
      <th>C#</th>
      <th>D</th>
      <th>D#</th>
      <th>E</th>
      <th>F</th>
      <th>F#</th>
      <th>G</th>
      <th>G#</th>
      <th>A</th>
      <th>A#</th>
      <th>B</th>
    </tr>    
  </thead>
  <tbody>
    <tr align="middle">
      <th>0</th>
      <td>0</td>
      <td>1</td>
      <td>2</td>
      <td>3</td>
      <td>4</td>
      <td>5</td>
      <td>6</td>
      <td>7</td>
      <td>8</td>
      <td>9</td>
      <td>10</td>
      <td>11</td>
    </tr>
    <tr align="middle">
      <th>1</th>
      <td>12</td>
      <td>13</td>
      <td>14</td>
      <td>15</td>
      <td>16</td>
      <td>17</td>
      <td>18</td>
      <td>19</td>
      <td>20</td>
      <td>21</td>
      <td>22</td>
      <td>23</td>
    </tr>
    <tr align="middle">
      <th>2</th>
      <td>24</td>
      <td>25</td>
      <td>26</td>
      <td>27</td>
      <td>28</td>
      <td>29</td>
      <td>30</td>
      <td>31</td>
      <td>32</td>
      <td>33</td>
      <td>34</td>
      <td>35</td>
    </tr>
    <tr align="middle">
      <th>3</th>
      <td>36</td>
      <td>37</td>
      <td>38</td>
      <td>39</td>
      <td>40</td>
      <td>41</td>
      <td>42</td>
      <td>43</td>
      <td>44</td>
      <td>45</td>
      <td>46</td>
      <td>47</td>
    </tr>
    <tr align="middle">
      <th>4</th>
      <td>48</td>
      <td>49</td>
      <td>50</td>
      <td>51</td>
      <td>52</td>
      <td>53</td>
      <td>54</td>
      <td>55</td>
      <td>56</td>
      <td>57</td>
      <td>58</td>
      <td>59</td>
    </tr>
    <tr align="middle">
      <th>5</th>
      <td>60</td>
      <td>61</td>
      <td>62</td>
      <td>63</td>
      <td>64</td>
      <td>65</td>
      <td>66</td>
      <td>67</td>
      <td>68</td>
      <td>69</td>
      <td>70</td>
      <td>71</td>
    </tr>
    <tr align="middle">
      <th>6</th>
      <td>72</td>
      <td>73</td>
      <td>74</td>
      <td>75</td>
      <td>76</td>
      <td>77</td>
      <td>78</td>
      <td>79</td>
      <td>80</td>
      <td>81</td>
      <td>82</td>
      <td>83</td>
    </tr>
    <tr align="middle">
      <th>7</th>
      <td>84</td>
      <td>85</td>
      <td>86</td>
      <td>87</td>
      <td>88</td>
      <td>89</td>
      <td>90</td>
      <td>91</td>
      <td>92</td>
      <td>93</td>
      <td>94</td>
      <td>95</td>
    </tr>
    <tr align="middle">
      <th>8</th>
      <td>96</td>
      <td>97</td>
      <td>98</td>
      <td>99</td>
      <td>100</td>
      <td>101</td>
      <td>102</td>
      <td>103</td>
      <td>104</td>
      <td>105</td>
      <td>106</td>
      <td>107</td>
    </tr>
    <tr align="middle">
      <th>9</th>
      <td>108</td>
      <td>109</td>
      <td>110</td>
      <td>111</td>
      <td>112</td>
      <td>113</td>
      <td>114</td>
      <td>115</td>
      <td>116</td>
      <td>117</td>
      <td>118</td>
      <td>119</td>
    </tr>
    <tr align="middle">
      <th>10</th>
      <td>120</td>
      <td>121</td>
      <td>122</td>
      <td>123</td>
      <td>124</td>
      <td>125</td>
      <td>126</td>
      <td>127</td>
    </tr>
  </tbody>
</table>
