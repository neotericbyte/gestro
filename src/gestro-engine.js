export default class GestroEngine {
	constructor(target, callbacks = {}) {
		this.el = target;
		this.cb = callbacks;

		this.pointers = new Map();
		this.startDistance = 0;
		this.startAngle = 0;

		this._bind();
	}

	destroy() {
		this.el.onpointerdown = null;
		this.el.onpointermove = null;
		this.el.onpointerup = null;
		this.el.onpointercancel = null;
		this.pointers.clear();
	}

	_bind() {
		this.el.onpointerdown = (e) => {
			this.el.setPointerCapture(e.pointerId);

			this.pointers.set(e.pointerId, {
				x: e.clientX,
				y: e.clientY,
				prevX: e.clientX,
				prevY: e.clientY
			});

			if (this.pointers.size === 2) {
				const [a, b] = [...this.pointers.values()];
				this.startDistance = this._distance(a, b);
				this.startAngle = this._angle(a, b);
			}

			this.cb.onStart?.(e);
		};

		this.el.onpointermove = (e) => {
			if (!this.pointers.has(e.pointerId)) return;

			const p = this.pointers.get(e.pointerId);

			const dx = e.clientX - p.prevX;
			const dy = e.clientY - p.prevY;

			p.prevX = e.clientX;
			p.prevY = e.clientY;
			p.x = e.clientX;
			p.y = e.clientY;

			this.pointers.set(e.pointerId, p);

			// PAN
			if (this.pointers.size === 1) {
				this.cb.onPan?.({ dx, dy });
			}

			// PINCH + ROTATE
			if (this.pointers.size === 2) {
				const [a, b] = [...this.pointers.values()];

				const newDist = this._distance(a, b);
				const scaleFactor = newDist / this.startDistance;

				const newAngle = this._angle(a, b);
				const rotationDelta = newAngle - this.startAngle;

				this.startDistance = newDist;
				this.startAngle = newAngle;

				this.cb.onPinchRotate?.({
					scaleFactor,
					rotationDelta
				});
			}

			this.cb.onMove?.(e);
		};

		this.el.onpointerup = (e) => {
			this.pointers.delete(e.pointerId);
			this.cb.onEnd?.(e);
		};

		this.el.onpointercancel = (e) => {
			this.pointers.delete(e.pointerId);
			this.cb.onEnd?.(e);
		};
	}

	_distance(a, b) {
		return Math.hypot(b.x - a.x, b.y - a.y);
	}

	_angle(a, b) {
		return Math.atan2(b.y - a.y, b.x - a.x) * 180 / Math.PI;
	}
}