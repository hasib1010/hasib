import { t as require_jsx_runtime } from "../index.js";
import { t as motion } from "./proxy-Dxg5xFUv.js";
//#region components/MotionReveal.tsx
var import_jsx_runtime = require_jsx_runtime();
function MotionReveal({ children, className, delay = 0 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		className,
		initial: { y: 22 },
		whileInView: { y: 0 },
		viewport: {
			once: true,
			amount: .12
		},
		transition: {
			duration: .65,
			delay,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		children
	});
}
//#endregion
export { MotionReveal as default };
