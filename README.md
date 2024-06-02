# WEB 名刺サンプル

## 概要

WEB 名刺のサンプルです。([Sample page](https://bizcard-sample.pleasurecode.jp/))
Next.js 14 および Tailwind CSS の学習用に作成しました。

オーナー用のページとクライアント用のページがあり、クライアント用のページは有効期間を設定できる仕組みを設けています。
またクライアント用のページはオーナー用ページに表示する二次元バーコードからアクセスできます。

<img width="640" src="https://raw.githubusercontent.com/yoshik159753/biz-card-sample/main/docs/images/top-image.png" alt="トップイメージ">

## Requirements

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## ディレクトリ構成

```txt
.
|-- .env.example
|-- .gitignore
|-- .prettierrc.json
|-- LICENSE.txt
|-- README.md
|-- app
|   |-- [token]
|   |   |-- lib
|   |   |   `-- auth.ts
|   |   |-- page.tsx
|   |   `-- ui
|   |       |-- client.tsx
|   |       `-- permission-denied.tsx
|   |-- actions.ts
|   |-- error.tsx
|   |-- globals.css
|   |-- layout.tsx
|   |-- lib
|   |   |-- auth.ts
|   |   `-- crypt.ts
|   |-- not-found.tsx
|   |-- page.tsx
|   |-- robots.txt
|   `-- ui
|       |-- auth-owner.tsx
|       |-- company-overview.tsx
|       |-- owner.tsx
|       |-- profile.tsx
|       `-- style.ts
|-- next-env.d.ts
|-- package-lock.json
|-- package.json
|-- postcss.config.js
|-- public
|   `-- logo.jpeg
|-- tailwind.config.js
`-- tsconfig.json
```

- `ui`: コンポーネント群
- `lib`: ロジック群
- `actions.ts`: サーバアクション
- `style.ts`: スタイル定義
- `app 配下`: オーナー用 page
- `app/[token] 配下`: クライアント用 page
