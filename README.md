# Vite Plugin Juice

[![Node.js CI](https://github.com/citrus/vite-plugin-juice/actions/workflows/node.js.yml/badge.svg)](https://github.com/citrus/vite-plugin-juice/actions/workflows/node.js.yml)

A vite plugin to inline css styles via [Juice](https://github.com/Automattic/juice)

### Usage

```ts
import juicePlugin from 'vite-plugin-juice'

export default {
  plugins: [
    juicePlugin(),
  ]
}
```
