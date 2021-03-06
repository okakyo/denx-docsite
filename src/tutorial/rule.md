# 記事を書くにあたって


## 記事のフォーマット

記事のフォーマットには、次のように定めています。この記法に従って記述してください。(この部分は役員たちで話し合い、任意に変更してください。)

- フォーマット例

```markdown
---
title:  <タイトル名>
createdAt: <作成日>
updatedAt: <更新日>(任意)
---

# {{$page.frontmatter.title}}

// 以下、記事を記入

```

## 記事を設定するとき
- 新規に記事リストを追加したいとき
    1. `/src` ディレクトリに 管理したいファイルを追加する
    2. 新規に追加した」ファイル内に `index.md` を追加する
    3. 以下の**記事を新しく追加するとき**に続く

- 記事を新しく追加するとき 
    1. `/src/<ディレクト名>`に新規の Markdown ファイルを追加する

新規にファイルやディレクトリを追加したときは、 `/src/.vitepress/nav.yaml`を次のように設定を行う

```yaml
# ディレクトリを一つで管理する場合: 

<ディレクトリ名>:
  title: <ディレクトリ名(変換したい日本語名)> # 設定されてなければそのまま
  children: 
    <記事ファイル名(拡張子(.md)は除く)>: <(表示させたい順番の数字).(変換したい日本語名)>
    example: 1.サンプル # example.md のリンクが サイドバーに 「1. サンプル」と表示される

# ディレクトリを多重に管理する場合

<ディレクトリの名前>: 
  title: <ディレクトリ名(変換したい日本語名)> # 設定されてなければそのまま
  <サブディレクトリ>:
    title: <(表示させたい順番の数字).(変換したい日本語名)> # 表示したい順番
    children:
      index : (はじめに) # これは必須
      <記事ファイル名(拡張子(.md)は除く)>: <(表示させたい順番の数字).(変換したい日本語名)>

  example: # <ディレクトリ名>/example ファイルに設定する場
    title: 0.サンプル
    children: # <ディレクトリ名>/example にindex.md, 1st.md が設定されている場合
      index : はじめに
      1st : 1.基本的な文法
```


## 記事の管理
この記事では、GitHub を利用して記事を管理しています。GitHub Flow を利用して記事を管理します。

GitHub Flow についてのやり方は次の記事の通りです。

0. このリポジトリをクローンしたあと、`npm install` を実行
1. まず、`git checkout -b <新規ブランチ名>` によってブランチを分割
2. 記事を新規に追加、修正を行ったら、GitHub へ push を行う。
3. 記事を新規に作成後、**Pull Request (PR)** を作成する
4. PR が発行されたらほかの部員(広報、副会長など) に見てチェックしてもらう。
5. 問題なければ PR をマージする
    - コンフリクトが発生していたら、PR 作成者がその部分を修正して main ブランチにマージ後、push を 実行

詳しい実装方法は次のサイトで各自確認してください。

<div class="blogCard"><div class="blogCardCont"><div class="blogCardTxt"><p class="blogCardTitle"><a href="https://backlog.com/ja/git-tutorial/pull-request/01/" target="_blank">プルリクエストとは？｜サル先生のGit入門【プロジェクト管理ツールBacklog】</a></p><p></p></div><div class="blogCardImg"><div class="blogCardImg__wrap"><a href="https://backlog.com/ja/git-tutorial/pull-request/01/" target="_blank"><img src="https://backlog.com/ja/git-tutorial/site_image.png" alt=""></a></div></div></div><div class="blogCardFooter"><a href="https://backlog.com/ja/git-tutorial/pull-request/01/"><img src="http://www.google.com/s2/favicons?domain=https://backlog.com/ja/git-tutorial/pull-request/01/" alt="">backlog.com</a></div></div>

## 講座について

講座の資料は次のように、**SlideShare**　や **Google スライド** に掲載し、シェアカードをmarkdown に直接埋め込むとで掲載することができます。

これによって、ブログを参照すればいつでも各自で確認やダウンロードすることができます。

<iframe src="//www.slideshare.net/slideshow/embed_code/key/ISLKYsDrZLNzF0" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe> <div style="margin-bottom:5px"> <strong> <a href="//www.slideshare.net/ssuserc2210b/my-portfolio-206279473" title="My portfolio" target="_blank">My portfolio</a> </strong> from <strong><a href="https://www.slideshare.net/ssuserc2210b" target="_blank">ssuserc2210b</a></strong> </div>

:::danger 掲載する資料について

部活動での特に機密事項についての資料を上げないように

:::


