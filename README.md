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
| `_config.yml` | サイト設定（URL、LINEリンク、記事URLの形式など） |

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

## 編集するときのメモ

- **LINEの追加リンク**は `https://lin.ee/XqapxDi`。変更する場合は `_config.yml` の `line_url`（ヘッダーとコラム側）と、`index.html` 内の `href`（ヒーロー／特典後／最終CTA／追従バーの4箇所）を置換。
- **ヘッダー・フッター**は `_includes/site-header.html` / `site-footer.html` を編集すると、LPとコラムの両方に反映されます。
- **CTAの計測**用に各ボタンへ `data-cta="hero|header|gifts|final|dock|column-header|column|column-index"` を付与しています。アクセス解析を入れる際の識別子に使えます。
- **改行位置を固定したい文章**は `<span class="ln">…</span>`（`display:block`）で行を分けています。
- **配色**は `assets/css/base.css` の `:root` のCSS変数で一括管理。ライト／ダーク両対応。緑（`--line`）はCTA専用色なので、他の要素には使わないでください。
- **フォント**は Google Fonts（Zen Kaku Gothic New / Noto Sans JP / IBM Plex Mono）を読み込みます。
- スクロール時のフェードインはJS無効時・失敗時でも本文が表示されるようフェイルセーフ付き。

## 注意事項

制度に関する記載は2026年9月時点のものです。航空法や登録制度は改正されるため、
公開を継続する場合は[国土交通省の飛行ルール](https://www.mlit.go.jp/koku/drone/)を確認のうえ内容を更新してください。
