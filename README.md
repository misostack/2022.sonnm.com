# SONNM

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
