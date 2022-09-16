# SONNM

## Overview

![Sitemap](./documents/sitemap.png)

## Cheatsheet

1. The upgrade guide

> Upgrade React version to latest

```bash
yarn add react@latest react-dom@latest
```

> Upgrade next.js version to 12

```bash
yarn add next@12
```

## Adding Typescript

```bash
yarn add -D typescript @types/react @types/node @types/styled-jsx
```

> Error : style jsx global nextjs typescript is not assigned

Just create **custom.d.ts**

```ts
// custom.d.ts
import "react";

declare module "react" {
  interface StyleHTMLAttributes<T> extends React.HTMLAttributes<T> {
    jsx?: boolean;
    global?: boolean;
  }
}
```

### Add routes for sitemap

1. Home -> index.tsx
2. Pages -> [pageSlug].tsx : contact, service's pages
3. Case Studies -> case-studies/index.tsx case-studies/[slug].tsx
4. Documents -> documents/index.tsx documents/[_id].tsx documents/[_id]/download.tsx
5. Blog -> blog/index.tsx /blog/search.tsx blog/[categorySlug].tsx blog/posts/[postSlug].tsx
6. Search -> search/index.tsx

### Defined ServerSideProps
