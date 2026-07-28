import { C as stripBasePath, O as __toESM, b as require_react, t as require_jsx_runtime, u as ReadonlyURLSearchParams } from "../index.js";
import Link from "./link-DfaCeAjN.js";
//#region ../../node_modules/lucide-react/dist/esm/shared/src/utils/mergeClasses.js
var import_react = /* @__PURE__ */ __toESM(require_react());
/**
* @license lucide-react v0.563.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var mergeClasses = (...classes) => classes.filter((className, index, array) => {
	return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
//#endregion
//#region ../../node_modules/lucide-react/dist/esm/shared/src/utils/toKebabCase.js
/**
* @license lucide-react v0.563.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
//#endregion
//#region ../../node_modules/lucide-react/dist/esm/shared/src/utils/toCamelCase.js
/**
* @license lucide-react v0.563.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var toCamelCase = (string) => string.replace(/^([A-Z])|[\s-_]+(\w)/g, (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase());
//#endregion
//#region ../../node_modules/lucide-react/dist/esm/shared/src/utils/toPascalCase.js
/**
* @license lucide-react v0.563.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var toPascalCase = (string) => {
	const camelCase = toCamelCase(string);
	return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
//#endregion
//#region ../../node_modules/lucide-react/dist/esm/defaultAttributes.js
/**
* @license lucide-react v0.563.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var defaultAttributes = {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: 2,
	strokeLinecap: "round",
	strokeLinejoin: "round"
};
//#endregion
//#region ../../node_modules/lucide-react/dist/esm/shared/src/utils/hasA11yProp.js
/**
* @license lucide-react v0.563.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var hasA11yProp = (props) => {
	for (const prop in props) if (prop.startsWith("aria-") || prop === "role" || prop === "title") return true;
	return false;
};
//#endregion
//#region ../../node_modules/lucide-react/dist/esm/Icon.js
/**
* @license lucide-react v0.563.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Icon = (0, import_react.forwardRef)(({ color = "currentColor", size = 24, strokeWidth = 2, absoluteStrokeWidth, className = "", children, iconNode, ...rest }, ref) => (0, import_react.createElement)("svg", {
	ref,
	...defaultAttributes,
	width: size,
	height: size,
	stroke: color,
	strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
	className: mergeClasses("lucide", className),
	...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
	...rest
}, [...iconNode.map(([tag, attrs]) => (0, import_react.createElement)(tag, attrs)), ...Array.isArray(children) ? children : [children]]));
//#endregion
//#region ../../node_modules/lucide-react/dist/esm/createLucideIcon.js
/**
* @license lucide-react v0.563.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var createLucideIcon = (iconName, iconNode) => {
	const Component = (0, import_react.forwardRef)(({ className, ...props }, ref) => (0, import_react.createElement)(Icon, {
		ref,
		iconNode,
		className: mergeClasses(`lucide-${toKebabCase(toPascalCase(iconName))}`, `lucide-${iconName}`, className),
		...props
	}));
	Component.displayName = toPascalCase(iconName);
	return Component;
};
/**
* @license lucide-react v0.563.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ArrowRight = createLucideIcon("arrow-right", [["path", {
	d: "M5 12h14",
	key: "1ays0h"
}], ["path", {
	d: "m12 5 7 7-7 7",
	key: "xquz4c"
}]]);
/**
* @license lucide-react v0.563.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ArrowUpRight = createLucideIcon("arrow-up-right", [["path", {
	d: "M7 7h10v10",
	key: "1tivn9"
}], ["path", {
	d: "M7 17 17 7",
	key: "1vkiza"
}]]);
//#endregion
//#region ../../node_modules/vinext/dist/shims/navigation.js
var _SERVER_INSERTED_HTML_CTX_KEY = Symbol.for("vinext.serverInsertedHTMLContext");
function getServerInsertedHTMLContext() {
	if (typeof import_react.createContext !== "function") return null;
	const globalState = globalThis;
	if (!globalState[_SERVER_INSERTED_HTML_CTX_KEY]) globalState[_SERVER_INSERTED_HTML_CTX_KEY] = import_react.createContext(null);
	return globalState[_SERVER_INSERTED_HTML_CTX_KEY] ?? null;
}
getServerInsertedHTMLContext();
var _GLOBAL_ACCESSORS_KEY = Symbol.for("vinext.navigation.globalAccessors");
var _GLOBAL_HYDRATION_CONTEXT_KEY = Symbol.for("vinext.navigation.clientHydrationContext");
function _getGlobalAccessors() {
	return globalThis[_GLOBAL_ACCESSORS_KEY];
}
function _getClientHydrationContext() {
	const globalState = globalThis;
	if (Object.prototype.hasOwnProperty.call(globalState, _GLOBAL_HYDRATION_CONTEXT_KEY)) return globalState[_GLOBAL_HYDRATION_CONTEXT_KEY] ?? null;
}
var _serverContext = null;
var _getServerContext = () => {
	if (typeof window !== "undefined") {
		const hydrationContext = _getClientHydrationContext();
		return hydrationContext !== void 0 ? hydrationContext : _serverContext;
	}
	const g = _getGlobalAccessors();
	return g ? g.getServerContext() : _serverContext;
};
var isServer = typeof window === "undefined";
var _CLIENT_NAV_STATE_KEY = Symbol.for("vinext.clientNavigationState");
function getClientNavigationState() {
	if (isServer) return null;
	const globalState = window;
	globalState[_CLIENT_NAV_STATE_KEY] ??= {
		listeners: /* @__PURE__ */ new Set(),
		cachedSearch: window.location.search,
		cachedReadonlySearchParams: new ReadonlyURLSearchParams(window.location.search),
		cachedPathname: stripBasePath(window.location.pathname, ""),
		clientParams: {},
		clientParamsJson: "{}",
		pendingClientParams: null,
		pendingClientParamsJson: null,
		pendingPathname: null,
		pendingPathnameNavId: null,
		originalPushState: window.history.pushState.bind(window.history),
		originalReplaceState: window.history.replaceState.bind(window.history),
		patchInstalled: false,
		hasPendingNavigationUpdate: false,
		suppressUrlNotifyCount: 0,
		navigationSnapshotActiveCount: 0
	};
	return globalState[_CLIENT_NAV_STATE_KEY];
}
function notifyNavigationListeners() {
	const state = getClientNavigationState();
	if (!state) return;
	for (const fn of state.listeners) fn();
}
/**
* Get cached pathname snapshot for useSyncExternalStore.
* Note: Returns cached value from ClientNavigationState, not live window.location.
* The cache is updated by syncCommittedUrlStateFromLocation() after navigation commits.
* This ensures referential stability and prevents infinite re-renders.
* External pushState/replaceState while URL notifications are suppressed won't
* be visible until the next commit.
*/
function getPathnameSnapshot() {
	return getClientNavigationState()?.cachedPathname ?? "/";
}
function syncCommittedUrlStateFromLocation() {
	const state = getClientNavigationState();
	if (!state) return false;
	let changed = false;
	const pathname = stripBasePath(window.location.pathname, "");
	if (pathname !== state.cachedPathname) {
		state.cachedPathname = pathname;
		changed = true;
	}
	const search = window.location.search;
	if (search !== state.cachedSearch) {
		state.cachedSearch = search;
		state.cachedReadonlySearchParams = new ReadonlyURLSearchParams(search);
		changed = true;
	}
	return changed;
}
var _CLIENT_NAV_RENDER_CTX_KEY = Symbol.for("vinext.clientNavigationRenderContext");
function getClientNavigationRenderContext() {
	if (typeof import_react.createContext !== "function") return null;
	const globalState = globalThis;
	if (!globalState[_CLIENT_NAV_RENDER_CTX_KEY]) globalState[_CLIENT_NAV_RENDER_CTX_KEY] = import_react.createContext(null);
	return globalState[_CLIENT_NAV_RENDER_CTX_KEY] ?? null;
}
function useClientNavigationRenderSnapshot() {
	const ctx = getClientNavigationRenderContext();
	if (!ctx || typeof import_react.useContext !== "function") return null;
	try {
		return import_react.useContext(ctx);
	} catch {
		return null;
	}
}
function subscribeToNavigation(cb) {
	const state = getClientNavigationState();
	if (!state) return () => {};
	state.listeners.add(cb);
	return () => {
		state.listeners.delete(cb);
	};
}
/**
* Returns the current pathname.
* Server: from request context. Client: from window.location.
*/
function usePathname() {
	if (isServer) return _getServerContext()?.pathname ?? "/";
	const renderSnapshot = useClientNavigationRenderSnapshot();
	const pathname = import_react.useSyncExternalStore(subscribeToNavigation, getPathnameSnapshot, () => _getServerContext()?.pathname ?? "/");
	if (renderSnapshot && (getClientNavigationState()?.navigationSnapshotActiveCount ?? 0) > 0) return renderSnapshot.pathname;
	return pathname;
}
/**
* Commit pending client navigation state to committed snapshots.
*
* navId is optional: callers that don't own pendingPathname (for example,
* superseded pre-paint cleanup) may pass undefined to flush URL/params state
* without clearing pendingPathname owned by the active navigation. Such callers
* must opt in explicitly if they also own an activated render snapshot.
*/
function commitClientNavigationState(navId, options) {
	if (isServer) return;
	const state = getClientNavigationState();
	if (!state) return;
	if ((navId !== void 0 || options?.releaseSnapshot === true) && state.navigationSnapshotActiveCount > 0) state.navigationSnapshotActiveCount -= 1;
	const urlChanged = syncCommittedUrlStateFromLocation();
	if (state.pendingClientParams !== null && state.pendingClientParamsJson !== null) {
		state.clientParams = state.pendingClientParams;
		state.clientParamsJson = state.pendingClientParamsJson;
		state.pendingClientParams = null;
		state.pendingClientParamsJson = null;
	}
	if (state.pendingPathnameNavId === null || navId !== void 0 && state.pendingPathnameNavId === navId) {
		state.pendingPathname = null;
		state.pendingPathnameNavId = null;
	}
	const shouldNotify = urlChanged || state.hasPendingNavigationUpdate;
	state.hasPendingNavigationUpdate = false;
	if (shouldNotify) notifyNavigationListeners();
}
/**
* Restore scroll position from a history state object (used on popstate).
*
* When an RSC navigation is in flight (back/forward triggers both this
* handler and the browser entry's popstate handler which calls
* __VINEXT_RSC_NAVIGATE__), we must wait for the new content to render
* before scrolling. Otherwise the user sees old content flash at the
* restored scroll position.
*
* This handler fires before the browser entry's popstate handler (because
* navigation.ts is loaded before hydration completes), so we defer via a
* microtask to give the browser entry handler a chance to set
* __VINEXT_RSC_PENDING__. Promise.resolve() schedules a microtask
* that runs after all synchronous event listeners have completed.
*/
function restoreScrollPosition(state) {
	if (state && typeof state === "object" && "__vinext_scrollY" in state) {
		const { __vinext_scrollX: x, __vinext_scrollY: y } = state;
		Promise.resolve().then(() => {
			const pending = window.__VINEXT_RSC_PENDING__ ?? null;
			if (pending) pending.then(() => {
				requestAnimationFrame(() => {
					window.scrollTo(x, y);
				});
			});
			else requestAnimationFrame(() => {
				window.scrollTo(x, y);
			});
		});
	}
}
if (!isServer) {
	const state = getClientNavigationState();
	if (state && !state.patchInstalled) {
		state.patchInstalled = true;
		window.addEventListener("popstate", (event) => {
			if (typeof window.__VINEXT_RSC_NAVIGATE__ !== "function") {
				commitClientNavigationState();
				restoreScrollPosition(event.state);
			}
		});
		window.history.pushState = function patchedPushState(data, unused, url) {
			state.originalPushState.call(window.history, data, unused, url);
			if (state.suppressUrlNotifyCount === 0) commitClientNavigationState();
		};
		window.history.replaceState = function patchedReplaceState(data, unused, url) {
			state.originalReplaceState.call(window.history, data, unused, url);
			if (state.suppressUrlNotifyCount === 0) commitClientNavigationState();
		};
	}
}
/**
* @license lucide-react v0.563.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Mail = createLucideIcon("mail", [["path", {
	d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",
	key: "132q7q"
}], ["rect", {
	x: "2",
	y: "4",
	width: "20",
	height: "16",
	rx: "2",
	key: "izxlao"
}]]);
/**
* @license lucide-react v0.563.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Menu = createLucideIcon("menu", [
	["path", {
		d: "M4 5h16",
		key: "1tepv9"
	}],
	["path", {
		d: "M4 12h16",
		key: "1lakjw"
	}],
	["path", {
		d: "M4 19h16",
		key: "1djgab"
	}]
]);
/**
* @license lucide-react v0.563.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var X = createLucideIcon("x", [["path", {
	d: "M18 6 6 18",
	key: "1bl5f8"
}], ["path", {
	d: "m6 6 12 12",
	key: "d8bk6v"
}]]);
//#endregion
//#region components/PortfolioHeader.tsx
var import_jsx_runtime = require_jsx_runtime();
var navItems = [
	{
		label: "Work",
		href: "/#work"
	},
	{
		label: "Services",
		href: "/#services"
	},
	{
		label: "About",
		href: "/#about"
	},
	{
		label: "Profiles",
		href: "/#profiles"
	}
];
function PortfolioHeader() {
	const pathname = usePathname();
	const [menuOpen, setMenuOpen] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [progress, setProgress] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const handleScroll = () => {
			const scrollable = document.documentElement.scrollHeight - window.innerHeight;
			setScrolled(window.scrollY > 18);
			setProgress(scrollable > 0 ? window.scrollY / scrollable : 0);
		};
		handleScroll();
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		setMenuOpen(false);
	}, [pathname]);
	(0, import_react.useEffect)(() => {
		const handleEscape = (event) => {
			if (event.key === "Escape") setMenuOpen(false);
		};
		window.addEventListener("keydown", handleEscape);
		return () => window.removeEventListener("keydown", handleEscape);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `site-header ${scrolled ? "site-header--scrolled" : ""}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				href: "/",
				className: "brand",
				"aria-label": "Hasib home",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "brand__mark",
					children: "H."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "brand__name",
					children: ["Hasibul", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Full-stack developer" })]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "desktop-nav",
				"aria-label": "Main navigation",
				children: [navItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					href: item.href,
					children: item.label
				}, item.href)), pathname !== "/" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					href: "/case-studies",
					children: "Case studies"
				}) : null]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				className: "header-cta",
				href: "mailto:mdhasibulhasan360@gmail.com",
				children: ["Let's talk", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { "aria-hidden": "true" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "menu-button",
				type: "button",
				"aria-label": menuOpen ? "Close navigation menu" : "Open navigation menu",
				"aria-expanded": menuOpen,
				onClick: () => setMenuOpen((open) => !open),
				children: menuOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { "aria-hidden": "true" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { "aria-hidden": "true" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `mobile-nav ${menuOpen ? "mobile-nav--open" : ""}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					"aria-label": "Mobile navigation",
					children: [
						navItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							href: item.href,
							children: [item.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { "aria-hidden": "true" })]
						}, item.href)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							href: "/case-studies",
							children: ["Case studies", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { "aria-hidden": "true" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "mailto:mdhasibulhasan360@gmail.com",
							children: ["Start a project", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { "aria-hidden": "true" })]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "scroll-progress",
				style: { transform: `scaleX(${Math.min(progress, 1)})` },
				"aria-hidden": "true"
			})
		]
	});
}
//#endregion
export { PortfolioHeader as default, ArrowRight as n, createLucideIcon as r, ArrowUpRight as t };
