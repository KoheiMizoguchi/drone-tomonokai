# ドローン友の会 — LINE友だち追加ランディングページ

ドローン初心者向けLINE公式アカウントの、友だち追加を目的としたランディングページと、コラム（読みもの）です。
GitHub Pages 標準の Jekyll でビルドされます（ローカルでのビルド作業は不要）。

## 公開

GitHub Pages で配信します（Settings → Pages → Branch: `main` / `root`）。

- 公開URL: `https://<ユーザー名>.github.io/<リポジトリ名>/`

## ファイル構成

| ファイル | 内容 |
|---|---|
| `index.html` | LP本体。LP専用のCSS・JS・ヒーロー画像（WebP／data URI）を内包 |
| `_posts/` | **コラム記事**（Markdown）。1記事＝1ファイル |
| `_drafts/column-template.md` | 記事のひな形（このフォルダは公開されません） |
| `columns/index.html` | コラム一覧ページ（`/columns/`） |
| `_layouts/` | ページの枠（`base` = 共通、`column` = 記事ページ） |
| `_includes/` | 共通パーツ（ヘッダー、フッター、記事カード、LINE誘導ボックス） |
| `assets/css/base.css` | LPとコラムで共通のスタイル（配色トークン・ボタン・ヘッダー・フッター） |
| `assets/css/column.css` | コラム用スタイル（カード・記事本文） |
| `assets/img/columns/` | 記事で使う画像の置き場所 |
| `_data/sns.yml` | **SNSアカウント**の一覧 |
| `_data/room_items.yml` | **楽天ROOMで紹介するアイテム**の一覧 |
| `items/index.html` | おすすめアイテムページ（`/items/`） |
| `assets/css/sns.css` | SNSカード・アイコンのスタイル |
| `assets/css/room.css` | 楽天ROOMの商品カード・誘導ボックスのスタイル |
| `_config.yml` | サイト設定（URL、LINEリンク、楽天ROOMのURL、記事URLの形式など） |

## コラムを投稿する

GitHub のサイト上だけで投稿できます。

1. リポジトリの `_posts` フォルダを開き、**Add file → Create new file**
2. ファイル名を `YYYY-MM-DD-英数字の名前.md` にする（例：`2026-10-05-first-flight.md`）
   - 日付が公開日、英数字の部分がURLになります → `/columns/2026/10/first-flight/`
   - 未来の日付にすると、その日を過ぎてから次に更新したタイミングで公開されます
3. `_drafts/column-template.md` の中身を貼り付けて、タイトル・説明・カテゴリ・本文を書き換える
4. **Commit changes** を押す → 1〜2分でサイトに反映

公開されると、コラム一覧・LPの「コラム」欄（最新3件）・RSS（`/columns/feed.xml`）・サイトマップに自動で載ります。
記事の最後には、公開日時点の情報である旨の注記とLINE誘導ボックスが自動で付きます。

- **画像**：`assets/img/columns/` にアップロードし、本文で `![説明]({{ '/assets/img/columns/ファイル名.jpg' | relative_url }})` と書く。アイキャッチにする場合は front matter に `image: /assets/img/columns/ファイル名.jpg`
- **カテゴリ**：`category:` に書いた名前がそのまま一覧の絞り込みボタンになります。表記ゆれに注意（例：「制度・ルール」「機体選び」「飛ばし方」「資格・試験」）
- **下書き**：`_drafts/` に置いたファイルは公開されません
- **非公開に戻す**：front matter に `published: false` を追加するか、ファイルを削除
- 反映状況はリポジトリの **Actions** タブで確認できます（赤い×は記事の書式エラー。front matter の `---` やコロンの後の半角スペースを確認）

## ページ構成（トップページ）

サイトの目的は ①ドローンの情報提供 ②LINE登録 ③アフィリエイト（楽天ROOM） ④SNSへの誘導。
LINE登録を主な目標にして、「役に立つ情報 → 信頼 → 登録」の順に並べ、途中にアフィリエイトとSNSを入れています。

| # | セクション | 目的 | 備考 |
|---|---|---|---|
| 0 | ヒーロー | ② | LINEボタン（主）＋「先にルールを読む」（①への副導線） |
| 1 | 飛ばす前に知ること（`#learn`） | ① | 登録・空域・承認の3点。関連コラムへのリンク |
| 2 | LINEで届くもの | ② | 配信内容とメッセージ例 |
| 3 | LINE特典＋受け取りの流れ（`#line`） | ② | PDF3点と3ステップ、LINEボタン |
| 4 | 最新コラム（`#columns`） | ① | `_posts` の最新3件。0件なら非表示 |
| 5 | おすすめアイテム（`#items`） | ③ | `featured: true` の商品を最大4件＋ROOM誘導。PR表記つき |
| 6 | 発信のルール | ①の信頼 | 情報の根拠 |
| 7 | SNS（`#sns`） | ④ | `_data/sns.yml` が空なら非表示 |
| 8 | FAQ（`#faq`） | ② | 7問（広告についての質問を含む） |
| 9 | 最後のLINE誘導 | ② | ＋スマホでは画面下にLINEボタンが追従 |

コラム記事の最後は「注記 → 紹介したアイテム（③）→ LINE誘導（②）→ SNS（④）→ ROOM誘導（③）→ 前後の記事（①）」の順です。

## SNSのリンクを載せる

`_data/sns.yml` に LINE / X / Instagram / YouTube / note の枠を用意してあります。各SNSの `url:` にプロフィールURLを入れると、トップの「SNSでも発信中」、フッター、各コラムの最後に自動で表示されます。

- `url` が空のSNSは表示されません
- LINEは `url` が空でも `_config.yml` の `line_url` が使われます
- LINE以外のSNSが1つもURL入りでないうちは、SNS欄そのものが表示されません
- 各SNSの役割（`text`）の初期値：LINE＝毎朝の配信と特典／X＝ニュース速報／Instagram＝空撮写真と短い動画／YouTube＝操作の解説動画／note＝体験記など長めの記事

## コラムを投稿する

GitHub のサイト上だけで投稿できます。

1. リポジトリの `_posts` フォルダを開き、**Add file → Create new file**
2. ファイル名を `YYYY-MM-DD-英数字の名前.md` にする（例：`2026-10-05-first-flight.md`）
   - 日付が公開日、英数字の部分がURLになります → `/columns/2026/10/first-flight/`
   - 未来の日付にすると、その日を過ぎてから次に更新したタイミングで公開されます
3. `_drafts/column-template.md` の中身を貼り付けて、タイトル・説明・カテゴリ・本文を書き換える
4. **Commit changes** を押す → 1〜2分でサイトに反映

公開されると、コラム一覧・LPの「コラム」欄（最新3件）・RSS（`/columns/feed.xml`）・サイトマップに自動で載ります。
記事の最後には、公開日時点の情報である旨の注記とLINE誘導ボックスが自動で付きます。

- **画像**：`assets/img/columns/` にアップロードし、本文で `![説明]({{ '/assets/img/columns/ファイル名.jpg' | relative_url }})` と書く。アイキャッチにする場合は front matter に `image: /assets/img/columns/ファイル名.jpg`
- **カテゴリ**：`category:` に書いた名前がそのまま一覧の絞り込みボタンになります。表記ゆれに注意（例：「制度・ルール」「機体選び」「飛ばし方」「資格・試験」）
- **下書き**：`_drafts/` に置いたファイルは公開されません
- **非公開に戻す**：front matter に `published: false` を追加するか、ファイルを削除
- 反映状況はリポジトリの **Actions** タブで確認できます（赤い×は記事の書式エラー。front matter の `---` やコロンの後の半角スペースを確認）

## ページ構成

1. ヒーロー（主CTA・特典3点の提示）
2. 特典セクション（PDF3点の内容）
3. 受け取りの流れ（3ステップ）
4. 初心者がつまずく3点（登録・空域・承認）
5. LINEで届くもの（配信内容とメッセージ例）
6. 発信のルール（情報の根拠）
7. FAQ（6問）
8. コラム（最新3件。記事が0件なら非表示）
9. 最終CTA / 注意事項

## 楽天ROOMのリンクを載せる

1. `_config.yml` の `rakuten_room_url` に自分のROOMページのURLを入れる
   → ヘッダーに「おすすめ」、各コラムの最後に「楽天ROOMを見る」ボックスが出ます
2. 紹介したい商品を `_data/room_items.yml` に追加する（書き方はファイル内の説明を参照）
   - 商品URLは ROOMアプリの商品ページ →「シェア」→「リンクをコピー」で取得
   - 追加した商品は「おすすめアイテム」ページ（`/items/`）にカテゴリ別に並びます
3. コラムで紹介するときは、どちらかの方法で
   - 本文中の好きな位置に：`{% include room-item.html id="商品のid" %}`
   - 記事の最後にまとめて：front matter に `room_items: [id1, id2]`

表示・運用のルール
- **PR表記**：商品カード・ROOMボックス・おすすめページには「PR」ラベルと広告である旨の説明が自動で付きます（2023年10月施行のステルスマーケティング規制への対応）。消さないでください
- リンクには `rel="sponsored"` が付き、検索エンジンにも広告リンクであることを伝えます
- 価格は変わるので載せない設計です。コメントには「なぜおすすめか」を書いてください
- 計測用に各リンクへ `data-room="商品のid"`（ROOMページへのリンクは `profile`）を付与しています
- ROOMのリンクを外部サイトに載せる際の条件は、楽天ROOMの利用規約・ガイドラインで最新の内容を確認してください

## 編集するときのメモ

- **LINEの追加リンク**は `https://lin.ee/XqapxDi`。変更する場合は `_config.yml` の `line_url` を書き換えるだけで、全ページのLINEボタンに反映されます。
- **ヘッダー・フッター**は `_includes/site-header.html` / `site-footer.html` を編集すると、LPとコラムの両方に反映されます。
- **CTAの計測**用に各ボタンへ `data-cta="hero|header|gifts|final|dock|column-header|column|column-index"` を付与しています。アクセス解析を入れる際の識別子に使えます。
- **改行位置を固定したい文章**は `<span class="ln">…</span>`（`display:block`）で行を分けています。
- **デザイン**：白地・黒の太字ゴシック（Zen Kaku Gothic New）・広い余白。英字の小見出しと数字は Outfit。配色は `assets/css/base.css` の `:root` で一括管理。オレンジ（`--signal`）は数字と印だけ、緑（`--line`）はLINEボタン専用です。
- トップの見せ場は「数字でみるルール」（100g／3年／150m／30m）。制度が変わったら `index.html` の `.numbers` を更新してください。
- **フォント**は Google Fonts（Zen Kaku Gothic New / Outfit）を読み込みます。

## 注意事項

制度に関する記載は2026年9月時点のものです。航空法や登録制度は改正されるため、
公開を継続する場合は[国土交通省の飛行ルール](https://www.mlit.go.jp/koku/drone/)を確認のうえ内容を更新してください。
