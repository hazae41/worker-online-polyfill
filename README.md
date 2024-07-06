# WebWorkers "online" and "offline" events polyfill

Polyfill for `online` and `offline` events on WebWorkers

https://issues.chromium.org/issues/40155587

```bash
npm i @hazae41/worker-online-polyfill
```

[**Node Package 📦**](https://www.npmjs.com/package/@hazae41/worker-online-polyfill)

## Features
- ESModules and CommonJS
- No external dependency

## Usage

### How?

ESModules 

```tsx
import "@hazae41/worker-online-polyfill"
```

CommonJS

```tsx
require("@hazae41/worker-online-polyfill")
```

### Where? 

You can import the polyfill **in your worker entry file** or **in a specific file**

```tsx
import "@hazae41/worker-online-polyfill"

self.addEventListener("online", () => console.log("online"))
self.addEventListener("offline", () => console.log("offline"))
```
