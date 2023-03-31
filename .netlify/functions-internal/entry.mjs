import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { options, h as h$1, Fragment, Component } from 'preact';
import { s as server_default$1, g as deserializeManifest } from './chunks/astro.070edda8.mjs';
import { _ as _page0, a as _page1, b as _page2 } from './chunks/pages/all.484b361a.mjs';
/* empty css                                   *//* empty css                                 */
var n=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i,o=/^(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)$/,i=/[\s\n\\/='"\0<>]/,l=/^xlink:?./,a=/["&<]/;function s(e){if(!1===a.test(e+=""))return e;for(var t=0,r=0,n="",o="";r<e.length;r++){switch(e.charCodeAt(r)){case 34:o="&quot;";break;case 38:o="&amp;";break;case 60:o="&lt;";break;default:continue}r!==t&&(n+=e.slice(t,r)),n+=o,t=r+1;}return r!==t&&(n+=e.slice(t,r)),n}var f=function(e,t){return String(e).replace(/(\n+)/g,"$1"+(t||"\t"))},u=function(e,t,r){return String(e).length>(t||40)||!r&&-1!==String(e).indexOf("\n")||-1!==String(e).indexOf("<")},c={},_=/([A-Z])/g;function p(e){var t="";for(var r in e){var o=e[r];null!=o&&""!==o&&(t&&(t+=" "),t+="-"==r[0]?r:c[r]||(c[r]=r.replace(_,"-$1").toLowerCase()),t="number"==typeof o&&!1===n.test(r)?t+": "+o+"px;":t+": "+o+";");}return t||void 0}function d(e,t){return Array.isArray(t)?t.reduce(d,e):null!=t&&!1!==t&&e.push(t),e}function v(){this.__d=!0;}function h(e,t){return {__v:e,context:t,props:e.props,setState:v,forceUpdate:v,__d:!0,__h:[]}}function g(e,t){var r=e.contextType,n=r&&t[r.__c];return null!=r?n?n.props.value:r.__:t}var y=[];function m(r,n,a,c,_,v){if(null==r||"boolean"==typeof r)return "";if("object"!=typeof r)return "function"==typeof r?"":s(r);var b=a.pretty,x=b&&"string"==typeof b?b:"\t";if(Array.isArray(r)){for(var k="",S=0;S<r.length;S++)b&&S>0&&(k+="\n"),k+=m(r[S],n,a,c,_,v);return k}if(void 0!==r.constructor)return "";var w,C=r.type,O=r.props,j=!1;if("function"==typeof C){if(j=!0,!a.shallow||!c&&!1!==a.renderRootComponent){if(C===Fragment){var A=[];return d(A,r.props.children),m(A,n,a,!1!==a.shallowHighOrder,_,v)}var F,H=r.__c=h(r,n);options.__b&&options.__b(r);var M=options.__r;if(C.prototype&&"function"==typeof C.prototype.render){var L=g(C,n);(H=r.__c=new C(O,L)).__v=r,H._dirty=H.__d=!0,H.props=O,null==H.state&&(H.state={}),null==H._nextState&&null==H.__s&&(H._nextState=H.__s=H.state),H.context=L,C.getDerivedStateFromProps?H.state=Object.assign({},H.state,C.getDerivedStateFromProps(H.props,H.state)):H.componentWillMount&&(H.componentWillMount(),H.state=H._nextState!==H.state?H._nextState:H.__s!==H.state?H.__s:H.state),M&&M(r),F=H.render(H.props,H.state,H.context);}else for(var T=g(C,n),E=0;H.__d&&E++<25;)H.__d=!1,M&&M(r),F=C.call(r.__c,O,T);return H.getChildContext&&(n=Object.assign({},n,H.getChildContext())),options.diffed&&options.diffed(r),m(F,n,a,!1!==a.shallowHighOrder,_,v)}C=(w=C).displayName||w!==Function&&w.name||function(e){var t=(Function.prototype.toString.call(e).match(/^\s*function\s+([^( ]+)/)||"")[1];if(!t){for(var r=-1,n=y.length;n--;)if(y[n]===e){r=n;break}r<0&&(r=y.push(e)-1),t="UnnamedComponent"+r;}return t}(w);}var $,D,N="<"+C;if(O){var P=Object.keys(O);a&&!0===a.sortAttributes&&P.sort();for(var W=0;W<P.length;W++){var I=P[W],R=O[I];if("children"!==I){if(!i.test(I)&&(a&&a.allAttributes||"key"!==I&&"ref"!==I&&"__self"!==I&&"__source"!==I)){if("defaultValue"===I)I="value";else if("defaultChecked"===I)I="checked";else if("defaultSelected"===I)I="selected";else if("className"===I){if(void 0!==O.class)continue;I="class";}else _&&l.test(I)&&(I=I.toLowerCase().replace(/^xlink:?/,"xlink:"));if("htmlFor"===I){if(O.for)continue;I="for";}"style"===I&&R&&"object"==typeof R&&(R=p(R)),"a"===I[0]&&"r"===I[1]&&"boolean"==typeof R&&(R=String(R));var U=a.attributeHook&&a.attributeHook(I,R,n,a,j);if(U||""===U)N+=U;else if("dangerouslySetInnerHTML"===I)D=R&&R.__html;else if("textarea"===C&&"value"===I)$=R;else if((R||0===R||""===R)&&"function"!=typeof R){if(!(!0!==R&&""!==R||(R=I,a&&a.xml))){N=N+" "+I;continue}if("value"===I){if("select"===C){v=R;continue}"option"===C&&v==R&&void 0===O.selected&&(N+=" selected");}N=N+" "+I+'="'+s(R)+'"';}}}else $=R;}}if(b){var V=N.replace(/\n\s*/," ");V===N||~V.indexOf("\n")?b&&~N.indexOf("\n")&&(N+="\n"):N=V;}if(N+=">",i.test(C))throw new Error(C+" is not a valid HTML tag name in "+N);var q,z=o.test(C)||a.voidElements&&a.voidElements.test(C),Z=[];if(D)b&&u(D)&&(D="\n"+x+f(D,x)),N+=D;else if(null!=$&&d(q=[],$).length){for(var B=b&&~N.indexOf("\n"),G=!1,J=0;J<q.length;J++){var K=q[J];if(null!=K&&!1!==K){var Q=m(K,n,a,!0,"svg"===C||"foreignObject"!==C&&_,v);if(b&&!B&&u(Q)&&(B=!0),Q)if(b){var X=Q.length>0&&"<"!=Q[0];G&&X?Z[Z.length-1]+=Q:Z.push(Q),G=X;}else Z.push(Q);}}if(b&&B)for(var Y=Z.length;Y--;)Z[Y]="\n"+x+f(Z[Y],x);}if(Z.length||D)N+=Z.join("");else if(a&&a.xml)return N.substring(0,N.length-1)+" />";return !z||q||D?(b&&~N.indexOf("\n")&&(N+="\n"),N=N+"</"+C+">"):N=N.replace(/>$/," />"),N}var b={shallow:!0};S.render=S;var x=function(e,t){return S(e,t,b)},k=[];function S(n,o,i){o=o||{};var l=options.__s;options.__s=!0;var a,s=h$1(Fragment,null);return s.__k=[n],a=i&&(i.pretty||i.voidElements||i.sortAttributes||i.shallow||i.allAttributes||i.xml||i.attributeHook)?m(n,o,i):F(n,o,!1,void 0,s),options.__c&&options.__c(n,k),options.__s=l,k.length=0,a}function w(e){return null==e||"boolean"==typeof e?null:"string"==typeof e||"number"==typeof e||"bigint"==typeof e?h$1(null,null,e):e}function C(e,t){return "className"===e?"class":"htmlFor"===e?"for":"defaultValue"===e?"value":"defaultChecked"===e?"checked":"defaultSelected"===e?"selected":t&&l.test(e)?e.toLowerCase().replace(/^xlink:?/,"xlink:"):e}function O(e,t){return "style"===e&&null!=t&&"object"==typeof t?p(t):"a"===e[0]&&"r"===e[1]&&"boolean"==typeof t?String(t):t}var j=Array.isArray,A=Object.assign;function F(r,n,l,a,f){if(null==r||!0===r||!1===r||""===r)return "";if("object"!=typeof r)return "function"==typeof r?"":s(r);if(j(r)){var u="";f.__k=r;for(var c=0;c<r.length;c++)u+=F(r[c],n,l,a,f),r[c]=w(r[c]);return u}if(void 0!==r.constructor)return "";r.__=f,options.__b&&options.__b(r);var _=r.type,p=r.props;if("function"==typeof _){var d;if(_===Fragment)d=p.children;else {d=_.prototype&&"function"==typeof _.prototype.render?function(e,r){var n=e.type,o=g(n,r),i=new n(e.props,o);e.__c=i,i.__v=e,i.__d=!0,i.props=e.props,null==i.state&&(i.state={}),null==i.__s&&(i.__s=i.state),i.context=o,n.getDerivedStateFromProps?i.state=A({},i.state,n.getDerivedStateFromProps(i.props,i.state)):i.componentWillMount&&(i.componentWillMount(),i.state=i.__s!==i.state?i.__s:i.state);var l=options.__r;return l&&l(e),i.render(i.props,i.state,i.context)}(r,n):function(e,r){var n,o=h(e,r),i=g(e.type,r);e.__c=o;for(var l=options.__r,a=0;o.__d&&a++<25;)o.__d=!1,l&&l(e),n=e.type.call(o,e.props,i);return n}(r,n);var v=r.__c;v.getChildContext&&(n=A({},n,v.getChildContext()));}var y=F(d=null!=d&&d.type===Fragment&&null==d.key?d.props.children:d,n,l,a,r);return options.diffed&&options.diffed(r),r.__=void 0,options.unmount&&options.unmount(r),y}var m,b,x="<";if(x+=_,p)for(var k in m=p.children,p){var S=p[k];if(!("key"===k||"ref"===k||"__self"===k||"__source"===k||"children"===k||"className"===k&&"class"in p||"htmlFor"===k&&"for"in p||i.test(k)))if(S=O(k=C(k,l),S),"dangerouslySetInnerHTML"===k)b=S&&S.__html;else if("textarea"===_&&"value"===k)m=S;else if((S||0===S||""===S)&&"function"!=typeof S){if(!0===S||""===S){S=k,x=x+" "+k;continue}if("value"===k){if("select"===_){a=S;continue}"option"!==_||a!=S||"selected"in p||(x+=" selected");}x=x+" "+k+'="'+s(S)+'"';}}var H=x;if(x+=">",i.test(_))throw new Error(_+" is not a valid HTML tag name in "+x);var M="",L=!1;if(b)M+=b,L=!0;else if("string"==typeof m)M+=s(m),L=!0;else if(j(m)){r.__k=m;for(var T=0;T<m.length;T++){var E=m[T];if(m[T]=w(E),null!=E&&!1!==E){var $=F(E,n,"svg"===_||"foreignObject"!==_&&l,a,r);$&&(M+=$,L=!0);}}}else if(null!=m&&!1!==m&&!0!==m){r.__k=[w(m)];var D=F(m,n,"svg"===_||"foreignObject"!==_&&l,a,r);D&&(M+=D,L=!0);}if(options.diffed&&options.diffed(r),r.__=void 0,options.unmount&&options.unmount(r),L)x+=M;else if(o.test(_))return H+" />";return x+"</"+_+">"}S.shallowRender=x;

const contexts = /* @__PURE__ */ new WeakMap();
function getContext(result) {
  if (contexts.has(result)) {
    return contexts.get(result);
  }
  let ctx = {
    c: 0,
    get id() {
      return "p" + this.c.toString();
    },
    signals: /* @__PURE__ */ new Map(),
    propsToSignals: /* @__PURE__ */ new Map()
  };
  contexts.set(result, ctx);
  return ctx;
}
function incrementId(ctx) {
  let id = ctx.id;
  ctx.c++;
  return id;
}

function isSignal(x) {
  return x != null && typeof x === "object" && typeof x.peek === "function" && "value" in x;
}
function restoreSignalsOnProps(ctx, props) {
  let propMap;
  if (ctx.propsToSignals.has(props)) {
    propMap = ctx.propsToSignals.get(props);
  } else {
    propMap = /* @__PURE__ */ new Map();
    ctx.propsToSignals.set(props, propMap);
  }
  for (const [key, signal] of propMap) {
    props[key] = signal;
  }
  return propMap;
}
function serializeSignals(ctx, props, attrs, map) {
  const signals = {};
  for (const [key, value] of Object.entries(props)) {
    if (isSignal(value)) {
      props[key] = value.peek();
      map.set(key, value);
      let id;
      if (ctx.signals.has(value)) {
        id = ctx.signals.get(value);
      } else {
        id = incrementId(ctx);
        ctx.signals.set(value, id);
      }
      signals[key] = id;
    }
  }
  if (Object.keys(signals).length) {
    attrs["data-preact-signals"] = JSON.stringify(signals);
  }
}

const StaticHtml = ({ value, name }) => {
  if (!value)
    return null;
  return h$1("astro-slot", { name, dangerouslySetInnerHTML: { __html: value } });
};
StaticHtml.shouldComponentUpdate = () => false;
var static_html_default = StaticHtml;

const slotName = (str) => str.trim().replace(/[-_]([a-z])/g, (_, w) => w.toUpperCase());
let originalConsoleError;
let consoleFilterRefs = 0;
function check(Component$1, props, children) {
  if (typeof Component$1 !== "function")
    return false;
  if (Component$1.prototype != null && typeof Component$1.prototype.render === "function") {
    return Component.isPrototypeOf(Component$1);
  }
  useConsoleFilter();
  try {
    try {
      const { html } = renderToStaticMarkup.call(this, Component$1, props, children);
      if (typeof html !== "string") {
        return false;
      }
      return !/\<undefined\>/.test(html);
    } catch (err) {
      return false;
    }
  } finally {
    finishUsingConsoleFilter();
  }
}
function renderToStaticMarkup(Component, props, { default: children, ...slotted }) {
  const ctx = getContext(this.result);
  const slots = {};
  for (const [key, value] of Object.entries(slotted)) {
    const name = slotName(key);
    slots[name] = h$1(static_html_default, { value, name });
  }
  let propsMap = restoreSignalsOnProps(ctx, props);
  const newProps = { ...props, ...slots };
  const attrs = {};
  serializeSignals(ctx, props, attrs, propsMap);
  const html = S(
    h$1(Component, newProps, children != null ? h$1(static_html_default, { value: children }) : children)
  );
  return {
    attrs,
    html
  };
}
function useConsoleFilter() {
  consoleFilterRefs++;
  if (!originalConsoleError) {
    originalConsoleError = console.error;
    try {
      console.error = filteredConsoleError;
    } catch (error) {
    }
  }
}
function finishUsingConsoleFilter() {
  consoleFilterRefs--;
}
function filteredConsoleError(msg, ...rest) {
  if (consoleFilterRefs > 0 && typeof msg === "string") {
    const isKnownReactHookError = msg.includes("Warning: Invalid hook call.") && msg.includes("https://reactjs.org/link/invalid-hook-call");
    if (isKnownReactHookError)
      return;
  }
  originalConsoleError(msg, ...rest);
}
var server_default = {
  check,
  renderToStaticMarkup
};

const pageMap = new Map([["src/pages/index.astro", _page0],["src/pages/services.astro", _page1],["src/pages/contact.astro", _page2],]);
const renderers = [Object.assign({"name":"astro:jsx","serverEntrypoint":"astro/jsx/server.js","jsxImportSource":"astro"}, { ssr: server_default$1 }),Object.assign({"name":"@astrojs/preact","clientEntrypoint":"@astrojs/preact/client.js","serverEntrypoint":"@astrojs/preact/server.js","jsxImportSource":"preact"}, { ssr: server_default }),];

const _manifest = Object.assign(deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":["_astro/contact.c67cd13c.css","_astro/index.4abed740.css"],"scripts":[],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":["_astro/contact.c67cd13c.css"],"scripts":[],"routeData":{"route":"/services","type":"page","pattern":"^\\/services\\/?$","segments":[[{"content":"services","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services.astro","pathname":"/services","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":["_astro/contact.c67cd13c.css"],"scripts":[{"type":"external","value":"_astro/hoisted.28347b51.js"}],"routeData":{"route":"/contact","type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"base":"/","markdown":{"drafts":false,"syntaxHighlight":"shiki","shikiConfig":{"langs":[],"theme":"github-dark","wrap":false},"remarkPlugins":[],"rehypePlugins":[],"remarkRehype":{},"gfm":true,"smartypants":true},"pageMap":null,"componentMetadata":[["/Users/jsheets/dev/astor-tech-website/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["/Users/jsheets/dev/astor-tech-website/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/jsheets/dev/astor-tech-website/src/pages/services.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"_@astrojs-ssr-virtual-entry.mjs","@astrojs/preact/client.js":"_astro/client.e4f6c779.js","/Users/jsheets/dev/astor-tech-website/node_modules/.pnpm/@preact+signals@1.1.3_preact@10.13.2/node_modules/@preact/signals/dist/signals.module.js":"_astro/signals.module.c80bbb9a.js","/astro/hoisted.js?q=0":"_astro/hoisted.28347b51.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/contact.c67cd13c.css","/_astro/index.4abed740.css","/app.svg","/at-logo-md.png","/headshot.jpg","/idea.svg","/web.svg","/_astro/client.633d57da.js","/_astro/client.e4f6c779.js","/_astro/hoisted.28347b51.js","/_astro/signals.module.c80bbb9a.js"]}), {
	pageMap: pageMap,
	renderers: renderers
});
const _args = {};
const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap, renderers };
