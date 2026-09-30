# 作業ログ

## 2026-09-30 トップ画像の差し替え、「数字でみるルール」の変更、ファビコン追加、CLAUDE.md作成

**変更ファイル**
- `assets/img/hero-drone.webp`, `assets/img/hero-drone.jpg`
- `index.html`
- `favicon.svg`, `favicon.ico`, `assets/img/icons/apple-touch-icon.png`
- `_includes/head-common.html`
- `_config.yml`
- `README.md`
- `CLAUDE.md`, `log.md`（新規）

**概要**
- トップ画像を、白背景で正面を向いたダークグレーのドローンの写真に差し替え。写真を画面右側に寄せて表示
- 「数字でみるルール」を 100g／150m／夜間飛行 の3項目に変更（3年を削除）
- ヘッダーのマークをファビコンに設定（暗いタブでは白に切り替わるSVG）
- CLAUDE.md（サイト固有ルール）と log.md を新規作成し、公開されないよう `_config.yml` の exclude に追加

**備考**
- ユーザーの指示でコミット・プッシュ
- 「夜間飛行」の説明文はClaudeが作成。公開前にユーザー確認が必要

## 2026-09-30 「数字でみるルール」を3項目に整理、楽天ROOM誘導の見出し変更（プッシュ済み de5bb31）

**変更ファイル**
- `index.html`, `_includes/room-banner.html`, `README.md`

**概要**
- 「30m 人や物から離す距離」を削除
- ROOM誘導ボックスの見出しを「カテゴリごとの必須・便利アイテムなどを紹介中」に変更

## 2026-09-29 サイトの初期構築〜デザイン刷新（詳細は git log を参照）

**概要**
- claude.ai のアーティファクトからGitHubへ移行、コラム機能（Jekyll）、楽天ROOM、SNS枠、トップの構成見直し、JINS風のデザイン刷新、トップ画像の差し替え
