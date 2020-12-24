# マークダウンの記述法

## 基本的な書き方

### 見出し
* 書き方

```
# 見出しh1
```


* **結果**

># 見出しh1

# リスト
* 書き方

```
* テキスト
    * テキスト
    * テキスト または
- テキスト
    - テキスト
    - テキスト
```

* **結果**

>
>* テキスト
>    * テキスト
>    * テキスト

### 番号付きリスト
* 書き方

```
1. テキスト
2. テキスト
    3. テキスト
```

* **結果**

>
>1. テキスト
>2. テキスト
>    3. テキスト

### 空行、改行
* 書き方

```
1行目__（←半角スペース２つ）
2行目
<br>
<br>
3行目
```

* **結果**


>1行目  
>2行目
><br>
><br>
>3行目


# インライン表示
* 書き方

```
`テキストやコード`
```

```
例： `int i = 0`
```

* **結果**


>このように`int i = 0`がインライン表示されます

* 補足
    * バッククォート 「 shift + @ 」

### コードの挿入
* 書き方

>```
>```python
>import numpy as np
>import scipy as sp 
>```

* 補足
    * バッククォート 「 shift + @ 」
    * 言語を指定すればシンタックスハイライトが使えます。

```python
import numpy as np
import scipy as sp
```
この Vurepress では、` ```(プログラミング言語) ` を入力すれば、自動的にハイライトがつくようになってます。

### リンクの挿入
* 書き方

```
[タイトル](URL)
// URL だけを掲載してもそのままリンクとして使用することが可能 
```

```
例：[Qiita](http://qiita.com/)
```

* **結果**

>例：[Qiita](http://qiita.com/)

### テーブル

* 書き方

```
| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |
```

* **結果**

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |



### 引用
* 書き方

>
```
>> テキスト
>>> テキスト
```

* **結果**

>
>> テキスト
>>> テキスト


### 画像の挿入
* 書き方

```
![代替テキスト](URL "タイトル")
```
```
例： ![qiita-square.png](https://qiita-image-store.s3.amazonaws.com/0/126861/90386757-fd96-8ba6-3477-485669713c55.png "qiita-square")
```

* **結果**

>例：![qiita-square.png](https://qiita-image-store.s3.amazonaws.com/0/126861/90386757-fd96-8ba6-3477-485669713c55.png "qiita-square")

## Vuepress ならではの記法

### UML

- 書き方

```
```plantuml
actor Entrant

Entrant -> Ticket : Attend Event Request

activate Ticket
Ticket -> Member : Create Member Request

activate Member
Member -> Member : Create Member
Ticket <-- Member : Create Member Response
deactivate Member

Ticket -> Ticket : Create Ticket
Entrant <-- Ticket : Attend Event Response
deactivate Ticket
```

- **結果**


```plantuml
actor Entrant

Entrant -> Ticket : Attend Event Request

activate Ticket
Ticket -> Member : Create Member Request

activate Member
Member -> Member : Create Member
Ticket <-- Member : Create Member Response
deactivate Member

Ticket -> Ticket : Create Ticket
Entrant <-- Ticket : Attend Event Response
deactivate Ticket
```
### 数式

準備中 (表示されたが、エラーでデプロイできなくなってしまったため)

### Custom Containers

- 書き方

```
::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

::: details
This is a details block, which does not work in IE / Edge
:::
```
* **結果**

::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

::: details
This is a details block, which does not work in IE / Edge
:::

### 絵文字

* 書き方

```
:tada: :100:
```

* **結果**
:tada: :100:

詳しくはこちらを参照してください。
- [a list of Emoji](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json)


### Embed

Youtube のURL を掲載して動画を流すこともできます。
```
@[youtube](https://www.youtube.com/watch?v=pVLt-XJLZiI)
```

* **結果**
@[youtube](https://www.youtube.com/watch?v=pVLt-XJLZiI)


## 参考文献
- [公式ドキュメント](https://v1.vuepress.vuejs.org/guide/markdown.html#header-anchors)
- [Qiita markdown チートシート](https://qiita.com/kamorits/items/6f342da395ad57468ae3)