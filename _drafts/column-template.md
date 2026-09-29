---
# ▼ コラム記事のひな形 ▼
# 1. このファイルをコピーして _posts/ フォルダに入れる
# 2. ファイル名を「YYYY-MM-DD-英数字の短い名前.md」にする（例：2026-10-05-first-flight.md）
#    ・日付が公開日になります。未来の日付にすると、その日まで公開されません
#    ・英数字の部分がURLになります（例：/columns/2026/10/first-flight/）
# 3. 下の項目を書き換えて、本文を書く（# で始まる行は消してOK）

title: 記事のタイトル
description: 一覧カードと検索結果に出る説明文（80〜120文字くらい）
category: 制度・ルール   # 例：制度・ルール ／ 機体選び ／ 飛ばし方 ／ 資格・試験

# 任意の項目（使わない場合は行ごと消す）
# image: /assets/img/columns/first-flight.jpg   # アイキャッチ画像（横長 16:9 推奨）
# image_alt: 画像の説明
# last_modified_at: 2026-10-10                 # 内容を更新した日
# room_items: [landing-pad, spare-battery]     # 記事の最後に「紹介したアイテム」として並べる楽天ROOM商品（_data/room_items.yml の id）
---

導入の文章。読者がこの記事を読むと何がわかるかを、2〜3文で。

## 見出し（大）

本文。**強調したい部分**はアスタリスク2つで囲みます。

### 見出し（小）

- 箇条書き
- 箇条書き

> 補足や注意は、行頭に「>」をつけると囲みになります。

リンクは [表示する文字](https://www.mlit.go.jp/koku/drone/) のように書きます。

楽天ROOMの商品カードを本文の途中に入れるときは、次の1行を書きます（id は _data/room_items.yml のもの）。

{% include room-item.html id="landing-pad" %}

画像は `assets/img/columns/` にアップロードして、次のように書きます。

![画像の説明]({{ '/assets/img/columns/sample.jpg' | relative_url }})
