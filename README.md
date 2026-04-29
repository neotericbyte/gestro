# Gestro

**Minimal gesture engine for image transforms.**
Pan • Zoom • Rotate • Export — powered by pointer gestures.

---

## 🔗 Live Demo

👉 https://neotericbyte.github.io/gestro/

---

## ✨ Features

* Multi-touch gestures (pinch, rotate, drag)
* Works on mobile + desktop (Pointer Events)
* High-quality export (original resolution)
* No dependencies
* Lightweight & fast
* Web Component (framework agnostic)

---

## 📦 Installation

```bash
npm install gestro
```

---

## 🚀 Basic Usage

```html
<gestro-image id="editor"></gestro-image>

<script type="module">
  import "gestro";

  const editor = document.getElementById("editor");
  editor.setImage("https://picsum.photos/800/1200");
</script>
```

---

## 🎛 API

### Image

* `setImage(src: string)`
  Load image into the editor

---

### Zoom

* `zoom(delta?: number)`
* `setZoom(scale: number)`

---

### Rotation

* `rotate(deltaDeg?: number)`
* `setRotation(deg: number)`

---

### Position

* `center()`
* `resetTransform()`

---

### Export

* `exportImage(): Promise<string>`
  Returns a **PNG data URL** of the visible cropped area in original quality

---

## 🧩 Integration Guide

### ✅ Vanilla JS

```html
<gestro-image id="editor"></gestro-image>

<script type="module">
  import "gestro";

  const el = document.getElementById("editor");
  el.setImage("image.jpg");
</script>
```

---

### ⚛️ React

```jsx
import { useEffect, useRef } from "react";
import "gestro";

export default function App() {
  const ref = useRef(null);

  useEffect(() => {
    ref.current.setImage("image.jpg");
  }, []);

  return <gestro-image ref={ref}></gestro-image>;
}
```

---

### 🅰️ Angular

#### 1. Allow custom elements

```ts
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
```

#### 2. Use in template

```html
<gestro-image #editor></gestro-image>
```

#### 3. Access in component

```ts
@ViewChild('editor') editor!: ElementRef;

ngAfterViewInit() {
  this.editor.nativeElement.setImage('image.jpg');
}
```

---

## 🧠 Philosophy

Gestro is a **low-level primitive**, not a full editor.

Use it to build:

* image editors
* croppers
* social media tools
* design apps

---

## 📁 Package Contents

* `dist/` → optimized build (used in production)
* `types/` → TypeScript definitions

Source code is available on GitHub.

---

## 📄 License

MIT

---

## ⭐ Support

If you find this useful, consider starring the repo ⭐
