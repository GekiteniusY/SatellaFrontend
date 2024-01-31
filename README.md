# Satella
## 技術スタック

###
- React
- Next.js

### UI

- Material UI
- Tailwind CSS


## ディレクトリ構成
こちらの記事を参考に構成
https://zenn.dev/yodaka/articles/eca2d4bf552aeb

### /components
アプリケーションで使用するコンポーネントを格納する親ディレクトリ

#### /components/elements
ナビゲーションやモーダルなどのコンポーネントを保持するディレクトリ

- /components/elements/{component name}/layout
  コンポーネントの大枠を規定する
  状態制御のロジックやドメインの情報を含めない
  SomethingLayoutのように命名規則としてLayoutを付与する
  準フレームワーク的な位置づけ
  /components/elements/{component name}のみ依存可能（呼び出し可能）

- /components/elements/{component name}
  {component name}/layoutを利用しながら状態制御のロジックやドメインの情報を加えていく
  

#### /components/page-layouts
ページ単位のレイアウトをコンポーネントとして保持する場合のディレクトリ



# Auto Generated

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
