export class GestroImage extends HTMLElement {
  setImage(src: string): void;

  zoom(delta?: number): void;
  setZoom(scale: number): void;

  rotate(deltaDeg?: number): void;
  setRotation(deg: number): void;

  resetTransform(): void;
  center(): void;

  exportImage(): Promise<string>;
}

declare global {
  interface HTMLElementTagNameMap {
    "gestro-image": GestroImage;
  }
}