var app = (function () {
  "use strict";
  function e() {}
  const t = (e) => e;
  function n(e, t) {
    for (const n in t) e[n] = t[n];
    return e;
  }
  function i(e) {
    return e();
  }
  function o() {
    return Object.create(null);
  }
  function a(e) {
    e.forEach(i);
  }
  function r(e) {
    return "function" == typeof e;
  }
  function s(e, t) {
    return e != e
      ? t == t
      : e !== t || (e && "object" == typeof e) || "function" == typeof e;
  }
  function l(e, t, i, o) {
    return e[1] && o ? n(i.ctx.slice(), e[1](o(t))) : i.ctx;
  }
  function c(e, t, n, i, o, a, r) {
    const s = (function (e, t, n, i) {
      if (e[2] && i) {
        const o = e[2](i(n));
        if (void 0 === t.dirty) return o;
        if ("object" == typeof o) {
          const e = [],
            n = Math.max(t.dirty.length, o.length);
          for (let i = 0; i < n; i += 1) e[i] = t.dirty[i] | o[i];
          return e;
        }
        return t.dirty | o;
      }
      return t.dirty;
    })(t, i, o, a);
    if (s) {
      const o = l(t, n, i, r);
      e.p(o, s);
    }
  }
  function u(e) {
    const t = {};
    for (const n in e) "$" !== n[0] && (t[n] = e[n]);
    return t;
  }
  function d(e) {
    return null == e ? "" : e;
  }
  const p = "undefined" != typeof window;
  let h = p ? () => window.performance.now() : () => Date.now(),
    f = p ? (e) => requestAnimationFrame(e) : e;
  const m = new Set();
  function v(e) {
    m.forEach((t) => {
      t.c(e) || (m.delete(t), t.f());
    }),
      0 !== m.size && f(v);
  }
  function g(e) {
    let t;
    return (
      0 === m.size && f(v),
      {
        promise: new Promise((n) => {
          m.add((t = { c: e, f: n }));
        }),
        abort() {
          m.delete(t);
        },
      }
    );
  }
  function w(e, t) {
    e.appendChild(t);
  }
  function b(e, t, n) {
    e.insertBefore(t, n || null);
  }
  function y(e) {
    e.parentNode.removeChild(e);
  }
  function x(e, t) {
    for (let n = 0; n < e.length; n += 1) e[n] && e[n].d(t);
  }
  function k(e) {
    return document.createElement(e);
  }
  function C(e) {
    return document.createElementNS("http://www.w3.org/2000/svg", e);
  }
  function $(e) {
    return document.createTextNode(e);
  }
  function T() {
    return $(" ");
  }
  function I() {
    return $("");
  }
  function S(e, t, n, i) {
    return e.addEventListener(t, n, i), () => e.removeEventListener(t, n, i);
  }
  function N(e) {
    return function (t) {
      return t.stopPropagation(), e.call(this, t);
    };
  }
  function q(e, t, n) {
    null == n
      ? e.removeAttribute(t)
      : e.getAttribute(t) !== n && e.setAttribute(t, n);
  }
  function D(e) {
    return "" === e ? null : +e;
  }
  function M(e, t) {
    (t = "" + t), e.wholeText !== t && (e.data = t);
  }
  function U(e, t) {
    e.value = null == t ? "" : t;
  }
  function z(e, t, n, i) {
    e.style.setProperty(t, n, i ? "important" : "");
  }
  function A(e, t) {
    for (let n = 0; n < e.options.length; n += 1) {
      const i = e.options[n];
      if (i.__value === t) return void (i.selected = !0);
    }
  }
  function E(e) {
    const t = e.querySelector(":checked") || e.options[0];
    return t && t.__value;
  }
  let L;
  function O() {
    if (void 0 === L) {
      L = !1;
      try {
        "undefined" != typeof window && window.parent && window.parent.document;
      } catch (e) {
        L = !0;
      }
    }
    return L;
  }
  function j(e, t) {
    "static" === getComputedStyle(e).position &&
      (e.style.position = "relative");
    const n = k("iframe");
    n.setAttribute(
      "style",
      "display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"
    ),
      n.setAttribute("aria-hidden", "true"),
      (n.tabIndex = -1);
    const i = O();
    let o;
    return (
      i
        ? ((n.src =
            "data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}</script>"),
          (o = S(window, "message", (e) => {
            e.source === n.contentWindow && t();
          })))
        : ((n.src = "about:blank"),
          (n.onload = () => {
            o = S(n.contentWindow, "resize", t);
          })),
      w(e, n),
      () => {
        (i || (o && n.contentWindow)) && o(), y(n);
      }
    );
  }
  function B(e, t, n) {
    e.classList[n ? "add" : "remove"](t);
  }
  function F(e, t) {
    const n = document.createEvent("CustomEvent");
    return n.initCustomEvent(e, !1, !1, t), n;
  }
  const R = new Set();
  let P,
    V = 0;
  function _(e, t, n, i, o, a, r, s = 0) {
    const l = 16.666 / i;
    let c = "{\n";
    for (let e = 0; e <= 1; e += l) {
      const i = t + (n - t) * a(e);
      c += 100 * e + `%{${r(i, 1 - i)}}\n`;
    }
    const u = c + `100% {${r(n, 1 - n)}}\n}`,
      d = `__gcohtech_${(function (e) {
        let t = 5381,
          n = e.length;
        for (; n--; ) t = ((t << 5) - t) ^ e.charCodeAt(n);
        return t >>> 0;
      })(u)}_${s}`,
      p = e.ownerDocument;
    R.add(p);
    const h =
        p.__gcohtech_stylesheet ||
        (p.__gcohtech_stylesheet = p.head.appendChild(k("style")).sheet),
      f = p.__gcohtech_rules || (p.__gcohtech_rules = {});
    f[d] ||
      ((f[d] = !0), h.insertRule(`@keyframes ${d} ${u}`, h.cssRules.length));
    const m = e.style.animation || "";
    return (
      (e.style.animation = `${
        m ? `${m}, ` : ""
      }${d} ${i}ms linear ${o}ms 1 both`),
      (V += 1),
      d
    );
  }
  function H(e, t) {
    const n = (e.style.animation || "").split(", "),
      i = n.filter(
        t ? (e) => e.indexOf(t) < 0 : (e) => -1 === e.indexOf("__gcohtech")
      ),
      o = n.length - i.length;
    o &&
      ((e.style.animation = i.join(", ")),
      (V -= o),
      V ||
        f(() => {
          V ||
            (R.forEach((e) => {
              const t = e.__gcohtech_stylesheet;
              let n = t.cssRules.length;
              for (; n--; ) t.deleteRule(n);
              e.__gcohtech_rules = {};
            }),
            R.clear());
        }));
  }
  function G(e) {
    P = e;
  }
  function Z() {
    if (!P) throw new Error("Function called outside component initialization");
    return P;
  }
  function W(e) {
    Z().$$.on_mount.push(e);
  }
  function K() {
    const e = Z();
    return (t, n) => {
      const i = e.$$.callbacks[t];
      if (i) {
        const o = F(t, n);
        i.slice().forEach((t) => {
          t.call(e, o);
        });
      }
    };
  }
  const Y = [],
    X = [],
    J = [],
    Q = [],
    ee = Promise.resolve();
  let te = !1;
  function ne() {
    te || ((te = !0), ee.then(se));
  }
  function ie(e) {
    J.push(e);
  }
  function oe(e) {
    Q.push(e);
  }
  let ae = !1;
  const re = new Set();
  function se() {
    if (!ae) {
      ae = !0;
      do {
        for (let e = 0; e < Y.length; e += 1) {
          const t = Y[e];
          G(t), le(t.$$);
        }
        for (G(null), Y.length = 0; X.length; ) X.pop()();
        for (let e = 0; e < J.length; e += 1) {
          const t = J[e];
          re.has(t) || (re.add(t), t());
        }
        J.length = 0;
      } while (Y.length);
      for (; Q.length; ) Q.pop()();
      (te = !1), (ae = !1), re.clear();
    }
  }
  function le(e) {
    if (null !== e.fragment) {
      e.update(), a(e.before_update);
      const t = e.dirty;
      (e.dirty = [-1]),
        e.fragment && e.fragment.p(e.ctx, t),
        e.after_update.forEach(ie);
    }
  }
  let ce;
  function ue() {
    return (
      ce ||
        ((ce = Promise.resolve()),
        ce.then(() => {
          ce = null;
        })),
      ce
    );
  }
  function de(e, t, n) {
    e.dispatchEvent(F(`${t ? "intro" : "outro"}${n}`));
  }
  const pe = new Set();
  let he;
  function fe() {
    he = { r: 0, c: [], p: he };
  }
  function me() {
    he.r || a(he.c), (he = he.p);
  }
  function ve(e, t) {
    e && e.i && (pe.delete(e), e.i(t));
  }
  function ge(e, t, n, i) {
    if (e && e.o) {
      if (pe.has(e)) return;
      pe.add(e),
        he.c.push(() => {
          pe.delete(e), i && (n && e.d(1), i());
        }),
        e.o(t);
    }
  }
  const we = { duration: 0 };
  function be(n, i, o) {
    let a,
      s,
      l = i(n, o),
      c = !1,
      u = 0;
    function d() {
      a && H(n, a);
    }
    function p() {
      const {
        delay: i = 0,
        duration: o = 300,
        easing: r = t,
        tick: p = e,
        css: f,
      } = l || we;
      f && (a = _(n, 0, 1, o, i, r, f, u++)), p(0, 1);
      const m = h() + i,
        v = m + o;
      s && s.abort(),
        (c = !0),
        ie(() => de(n, !0, "start")),
        (s = g((e) => {
          if (c) {
            if (e >= v) return p(1, 0), de(n, !0, "end"), d(), (c = !1);
            if (e >= m) {
              const t = r((e - m) / o);
              p(t, 1 - t);
            }
          }
          return c;
        }));
    }
    let f = !1;
    return {
      start() {
        f || (H(n), r(l) ? ((l = l()), ue().then(p)) : p());
      },
      invalidate() {
        f = !1;
      },
      end() {
        c && (d(), (c = !1));
      },
    };
  }
  function ye(n, i, o) {
    let s,
      l = i(n, o),
      c = !0;
    const u = he;
    function d() {
      const {
        delay: i = 0,
        duration: o = 300,
        easing: r = t,
        tick: d = e,
        css: p,
      } = l || we;
      p && (s = _(n, 1, 0, o, i, r, p));
      const f = h() + i,
        m = f + o;
      ie(() => de(n, !1, "start")),
        g((e) => {
          if (c) {
            if (e >= m) return d(0, 1), de(n, !1, "end"), --u.r || a(u.c), !1;
            if (e >= f) {
              const t = r((e - f) / o);
              d(1 - t, t);
            }
          }
          return c;
        });
    }
    return (
      (u.r += 1),
      r(l)
        ? ue().then(() => {
            (l = l()), d();
          })
        : d(),
      {
        end(e) {
          e && l.tick && l.tick(1, 0), c && (s && H(n, s), (c = !1));
        },
      }
    );
  }
  function xe(n, i, o, s) {
    let l = i(n, o),
      c = s ? 0 : 1,
      u = null,
      d = null,
      p = null;
    function f() {
      p && H(n, p);
    }
    function m(e, t) {
      const n = e.b - c;
      return (
        (t *= Math.abs(n)),
        {
          a: c,
          b: e.b,
          d: n,
          duration: t,
          start: e.start,
          end: e.start + t,
          group: e.group,
        }
      );
    }
    function v(i) {
      const {
          delay: o = 0,
          duration: r = 300,
          easing: s = t,
          tick: v = e,
          css: w,
        } = l || we,
        b = { start: h() + o, b: i };
      i || ((b.group = he), (he.r += 1)),
        u || d
          ? (d = b)
          : (w && (f(), (p = _(n, c, i, r, o, s, w))),
            i && v(0, 1),
            (u = m(b, r)),
            ie(() => de(n, i, "start")),
            g((e) => {
              if (
                (d &&
                  e > d.start &&
                  ((u = m(d, r)),
                  (d = null),
                  de(n, u.b, "start"),
                  w && (f(), (p = _(n, c, u.b, u.duration, 0, s, l.css)))),
                u)
              )
                if (e >= u.end)
                  v((c = u.b), 1 - c),
                    de(n, u.b, "end"),
                    d || (u.b ? f() : --u.group.r || a(u.group.c)),
                    (u = null);
                else if (e >= u.start) {
                  const t = e - u.start;
                  (c = u.a + u.d * s(t / u.duration)), v(c, 1 - c);
                }
              return !(!u && !d);
            }));
    }
    return {
      run(e) {
        r(l)
          ? ue().then(() => {
              (l = l()), v(e);
            })
          : v(e);
      },
      end() {
        f(), (u = d = null);
      },
    };
  }
  const ke =
    "undefined" != typeof window
      ? window
      : "undefined" != typeof globalThis
      ? globalThis
      : global;
  function Ce(e, t) {
    ge(e, 1, 1, () => {
      t.delete(e.key);
    });
  }
  function $e(e, t, n) {
    const i = e.$$.props[t];
    void 0 !== i && ((e.$$.bound[i] = n), n(e.$$.ctx[i]));
  }
  function Te(e) {
    e && e.c();
  }
  function Ie(e, t, n) {
    const { fragment: o, on_mount: s, on_destroy: l, after_update: c } = e.$$;
    o && o.m(t, n),
      ie(() => {
        const t = s.map(i).filter(r);
        l ? l.push(...t) : a(t), (e.$$.on_mount = []);
      }),
      c.forEach(ie);
  }
  function Se(e, t) {
    const n = e.$$;
    null !== n.fragment &&
      (a(n.on_destroy),
      n.fragment && n.fragment.d(t),
      (n.on_destroy = n.fragment = null),
      (n.ctx = []));
  }
  function Ne(t, n, i, r, s, l, c = [-1]) {
    const u = P;
    G(t);
    const d = n.props || {},
      p = (t.$$ = {
        fragment: null,
        ctx: null,
        props: l,
        update: e,
        not_equal: s,
        bound: o(),
        on_mount: [],
        on_destroy: [],
        before_update: [],
        after_update: [],
        context: new Map(u ? u.$$.context : []),
        callbacks: o(),
        dirty: c,
        skip_bound: !1,
      });
    let h = !1;
    if (
      ((p.ctx = i
        ? i(t, d, (e, n, ...i) => {
            const o = i.length ? i[0] : n;
            return (
              p.ctx &&
                s(p.ctx[e], (p.ctx[e] = o)) &&
                (!p.skip_bound && p.bound[e] && p.bound[e](o),
                h &&
                  (function (e, t) {
                    -1 === e.$$.dirty[0] &&
                      (Y.push(e), ne(), e.$$.dirty.fill(0)),
                      (e.$$.dirty[(t / 31) | 0] |= 1 << t % 31);
                  })(t, e)),
              n
            );
          })
        : []),
      p.update(),
      (h = !0),
      a(p.before_update),
      (p.fragment = !!r && r(p.ctx)),
      n.target)
    ) {
      if (n.hydrate) {
        const e = (function (e) {
          return Array.from(e.childNodes);
        })(n.target);
        p.fragment && p.fragment.l(e), e.forEach(y);
      } else p.fragment && p.fragment.c();
      n.intro && ve(t.$$.fragment), Ie(t, n.target, n.anchor), se();
    }
    G(u);
  }
  class qe {
    $destroy() {
      Se(this, 1), (this.$destroy = e);
    }
    $on(e, t) {
      const n = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
      return (
        n.push(t),
        () => {
          const e = n.indexOf(t);
          -1 !== e && n.splice(e, 1);
        }
      );
    }
    $set(e) {
      var t;
      this.$$set &&
        ((t = e), 0 !== Object.keys(t).length) &&
        ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1));
    }
  }
  function De(e) {
    const t = e - 1;
    return t * t * t + 1;
  }
  function Me(e, { delay: n = 0, duration: i = 400, easing: o = t }) {
    const a = +getComputedStyle(e).opacity;
    return {
      delay: n,
      duration: i,
      easing: o,
      css: (e) => "opacity: " + e * a,
    };
  }
  function Ue(e, { delay: t = 0, duration: n = 400, easing: i = De }) {
    const o = getComputedStyle(e),
      a = +o.opacity,
      r = parseFloat(o.height),
      s = parseFloat(o.paddingTop),
      l = parseFloat(o.paddingBottom),
      c = parseFloat(o.marginTop),
      u = parseFloat(o.marginBottom),
      d = parseFloat(o.borderTopWidth),
      p = parseFloat(o.borderBottomWidth);
    return {
      delay: t,
      duration: n,
      easing: i,
      css: (e) =>
        `overflow: hidden;opacity: ${Math.min(20 * e, 1) * a};height: ${
          e * r
        }px;padding-top: ${e * s}px;padding-bottom: ${e * l}px;margin-top: ${
          e * c
        }px;margin-bottom: ${e * u}px;border-top-width: ${
          e * d
        }px;border-bottom-width: ${e * p}px;`,
    };
  }
  function ze(e) {
    let t,
      n,
      i,
      o,
      a,
      r,
      s = !0 === e[0].showCounter && Le(e);
    return {
      c() {
        (t = k("div")),
          (n = k("img")),
          (o = T()),
          s && s.c(),
          q(n, "class", "chatwith-img gcohtech-1uvbhzx"),
          z(n, "width", "calc(" + e[4] + "*45px)"),
          z(n, "height", "calc(" + e[4] + "*45px)"),
          z(n, "padding", "calc(" + e[4] + "*5px)"),
          q(n, "alt", "tochat-whatsapp"),
          n.src !==
            (i =
              e[0].whatsappIconUrl ?? "https://widget.tochat.be/icon-1.png") &&
            q(n, "src", i),
          q(t, "class", "chatwith-mainbutton without-text gcohtech-1uvbhzx"),
          q(t, "style", e[5]);
      },
      m(i, l) {
        b(i, t, l),
          w(t, n),
          w(t, o),
          s && s.m(t, null),
          a || ((r = S(t, "click", e[7])), (a = !0));
      },
      p(e, o) {
        16 & o && z(n, "width", "calc(" + e[4] + "*45px)"),
          16 & o && z(n, "height", "calc(" + e[4] + "*45px)"),
          16 & o && z(n, "padding", "calc(" + e[4] + "*5px)"),
          1 & o &&
            n.src !==
              (i =
                e[0].whatsappIconUrl ??
                "https://widget.tochat.be/icon-1.png") &&
            q(n, "src", i),
          !0 === e[0].showCounter
            ? s
              ? s.p(e, o)
              : ((s = Le(e)), s.c(), s.m(t, null))
            : s && (s.d(1), (s = null)),
          32 & o && q(t, "style", e[5]);
      },
      d(e) {
        e && y(t), s && s.d(), (a = !1), r();
      },
    };
  }
  function Ae(e) {
    let t,
      n,
      i,
      o,
      a,
      r,
      s,
      l,
      c,
      u = e[0].buttonMessage + "",
      d = !0 === e[0].showCounter && Oe(e);
    return {
      c() {
        (t = k("div")),
          (n = k("span")),
          (i = $(u)),
          (o = T()),
          (a = k("img")),
          (s = T()),
          d && d.c(),
          q(n, "class", " chatwith-text gcohtech-1uvbhzx"),
          z(n, "color", e[0].textColor),
          z(n, "font-size", "calc(" + e[6] + "*16px)"),
          q(a, "class", "chatwith-img gcohtech-1uvbhzx"),
          z(a, "width", "calc(" + e[4] + "*45px)"),
          z(a, "height", "calc(" + e[4] + "*45px)"),
          q(a, "alt", "tochat-whatsapp"),
          a.src !==
            (r =
              e[0].whatsappIconUrl ?? "https://widget.tochat.be/icon-1.png") &&
            q(a, "src", r),
          q(t, "class", "chatwith-mainbutton gcohtech-1uvbhzx"),
          q(t, "style", e[5]);
      },
      m(r, u) {
        b(r, t, u),
          w(t, n),
          w(n, i),
          w(t, o),
          w(t, a),
          w(t, s),
          d && d.m(t, null),
          l || ((c = S(t, "click", e[7])), (l = !0));
      },
      p(e, o) {
        1 & o && u !== (u = e[0].buttonMessage + "") && M(i, u),
          1 & o && z(n, "color", e[0].textColor),
          64 & o && z(n, "font-size", "calc(" + e[6] + "*16px)"),
          16 & o && z(a, "width", "calc(" + e[4] + "*45px)"),
          16 & o && z(a, "height", "calc(" + e[4] + "*45px)"),
          1 & o &&
            a.src !==
              (r =
                e[0].whatsappIconUrl ??
                "https://widget.tochat.be/icon-1.png") &&
            q(a, "src", r),
          !0 === e[0].showCounter
            ? d
              ? d.p(e, o)
              : ((d = Oe(e)), d.c(), d.m(t, null))
            : d && (d.d(1), (d = null)),
          32 & o && q(t, "style", e[5]);
      },
      d(e) {
        e && y(t), d && d.d(), (l = !1), c();
      },
    };
  }
  function Ee(e) {
    let t, n, i, o, a, r, s, l, c;
    return {
      c() {
        (t = k("div")),
          (n = C("svg")),
          (i = C("path")),
          (a = C("path")),
          q(i, "fill", (o = e[0].color)),
          q(
            i,
            "d",
            "M504.1,256C504.1,119,393,7.9,256,7.9C119,7.9,7.9,119,7.9,256C7.9,393,119,504.1,256,504.1C393,504.1,504.1,393,504.1,256z"
          ),
          q(a, "fill", "#FFF"),
          q(
            a,
            "d",
            "M285,256l72.5-84.2c7.9-9.2,6.9-23-2.3-31c-9.2-7.9-23-6.9-30.9,2.3L256,222.4l-68.2-79.2c-7.9-9.2-21.8-10.2-31-2.3c-9.2,7.9-10.2,21.8-2.3,31L227,256l-72.5,84.2c-7.9,9.2-6.9,23,2.3,31c4.1,3.6,9.2,5.3,14.3,5.3c6.2,0,12.3-2.6,16.6-7.6l68.2-79.2l68.2,79.2c4.3,5,10.5,7.6,16.6,7.6c5.1,0,10.2-1.7,14.3-5.3c9.2-7.9,10.2-21.8,2.3-31L285,256z"
          ),
          q(n, "xmlns", "http://www.w3.org/2000/svg"),
          q(n, "viewBox", "0 0 512 512"),
          q(n, "width", (r = 45 * e[4] + "px")),
          q(n, "height", (s = 45 * e[4] + "px")),
          q(n, "class", "gcohtech-1uvbhzx"),
          q(t, "class", "chatwith-mainbutton without-text gcohtech-1uvbhzx"),
          q(t, "style", e[5]);
      },
      m(o, r) {
        b(o, t, r),
          w(t, n),
          w(n, i),
          w(n, a),
          l || ((c = S(t, "click", e[7])), (l = !0));
      },
      p(e, a) {
        1 & a && o !== (o = e[0].color) && q(i, "fill", o),
          16 & a && r !== (r = 45 * e[4] + "px") && q(n, "width", r),
          16 & a && s !== (s = 45 * e[4] + "px") && q(n, "height", s),
          32 & a && q(t, "style", e[5]);
      },
      d(e) {
        e && y(t), (l = !1), c();
      },
    };
  }
  function Le(e) {
    let t, n, i;
    return {
      c() {
        (t = k("span")),
          (n = $("1")),
          q(
            t,
            "class",
            (i =
              "no1 " +
              (0 == e[0].rightpos ? "left" : "right") +
              " gcohtech-1uvbhzx")
          );
      },
      m(e, i) {
        b(e, t, i), w(t, n);
      },
      p(e, n) {
        1 & n &&
          i !==
            (i =
              "no1 " +
              (0 == e[0].rightpos ? "left" : "right") +
              " gcohtech-1uvbhzx") &&
          q(t, "class", i);
      },
      d(e) {
        e && y(t);
      },
    };
  }
  function Oe(e) {
    let t, n, i;
    return {
      c() {
        (t = k("span")),
          (n = $("1")),
          q(
            t,
            "class",
            (i =
              "no1 " +
              (0 == e[0].rightpos ? "left" : "right") +
              " gcohtech-1uvbhzx")
          );
      },
      m(e, i) {
        b(e, t, i), w(t, n);
      },
      p(e, n) {
        1 & n &&
          i !==
            (i =
              "no1 " +
              (0 == e[0].rightpos ? "left" : "right") +
              " gcohtech-1uvbhzx") &&
          q(t, "class", i);
      },
      d(e) {
        e && y(t);
      },
    };
  }
  function je(t) {
    let n, i;
    function o(e, t) {
      return e[2] && "BigPerson" !== e[1]
        ? Ee
        : e[0].buttonMessage &&
          "null" != e[0].buttonMessage &&
          null != e[0].buttonMessage
        ? Ae
        : ze;
    }
    let a = o(t),
      r = a(t);
    return {
      c() {
        (n = k("div")),
          r.c(),
          q(n, "class", "chatwith-inline-wrapper gcohtech-1uvbhzx"),
          q(
            n,
            "style",
            (i = t[3] && t[0].expandFullScreenMobile && "display: none;")
          );
      },
      m(e, t) {
        b(e, n, t), r.m(n, null);
      },
      p(e, [t]) {
        a === (a = o(e)) && r
          ? r.p(e, t)
          : (r.d(1), (r = a(e)), r && (r.c(), r.m(n, null))),
          9 & t &&
            i !==
              (i = e[3] && e[0].expandFullScreenMobile && "display: none;") &&
            q(n, "style", i);
      },
      i: e,
      o: e,
      d(e) {
        e && y(n), r.d();
      },
    };
  }
  function Be(e, t, n) {
    let { data: i } = t,
      { height: o } = t,
      { widgetType: a } = t,
      { up: r } = t,
      { videoSplashOpen: s } = t;
    const l = K();
    let c,
      u = 1,
      d = 1;
    return (
      (e.$$set = (e) => {
        "data" in e && n(0, (i = e.data)),
          "height" in e && n(8, (o = e.height)),
          "widgetType" in e && n(1, (a = e.widgetType)),
          "up" in e && n(2, (r = e.up)),
          "videoSplashOpen" in e && n(3, (s = e.videoSplashOpen));
      }),
      (e.$$.update = () => {
        305 & e.$$.dirty &&
          (n(
            5,
            (c =
              "background:" +
              i.color +
              ";border-radius:" +
              i.buttonRounding +
              "px;")
          ),
          i.expandFullScreenMobile &&
            n(5, (c += "top:" + (o - 28 - 28 * u) + "px;")),
          i.iconSize &&
            (n(4, (u = i.iconSize.slice(1))), u > 1 && n(6, (d = 0.8 * u))));
      }),
      [
        i,
        a,
        r,
        s,
        u,
        c,
        d,
        function () {
          l("close");
        },
        o,
      ]
    );
  }
  class Fe extends qe {
    constructor(e) {
      var t;
      super(),
        document.getElementById("gcohtech-1uvbhzx-style") ||
          (((t = k("style")).id = "gcohtech-1uvbhzx-style"),
          (t.textContent =
            ".chatwith-mainbutton.gcohtech-1uvbhzx.gcohtech-1uvbhzx{position:relative;display:flex;align-items:center;border-radius:200px;z-index:99999;color:white;box-shadow:0 0 30px rgba(0, 0, 0, 0.3);min-height:45px;vertical-align:middle;cursor:pointer}.chatwith-mainbutton.without-text.gcohtech-1uvbhzx.gcohtech-1uvbhzx{min-width:45px}.chatwith-mainbutton.without-text.gcohtech-1uvbhzx svg.gcohtech-1uvbhzx{transition:transform .7s ease-in-out}.chatwith-mainbutton.without-text.gcohtech-1uvbhzx svg.gcohtech-1uvbhzx:hover{transform:rotate(180deg)}.chatwith-mainbutton.gcohtech-1uvbhzx .chatwith-text.gcohtech-1uvbhzx{padding:0px 10px 0 20px;max-width:225px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;font-weight:normal;color:white}.chatwith-mainbutton.gcohtech-1uvbhzx .chatwith-img.gcohtech-1uvbhzx{display:block;padding:3px;border-radius:100px;-o-object-fit:cover;object-fit:cover}.chatwith-mainbutton.without-text.gcohtech-1uvbhzx .chatwith-img.gcohtech-1uvbhzx{margin:0 auto}.chatwith-inline-wrapper.gcohtech-1uvbhzx.gcohtech-1uvbhzx{display:inline-block}.no1.gcohtech-1uvbhzx.gcohtech-1uvbhzx{background:red;width:15px;height:15px;border-radius:200px;display:flex;justify-content:center;align-items:center;position:absolute;top:-3px;right:-3px;font-size:12px;text-align:center;color:white}.no1.left.gcohtech-1uvbhzx.gcohtech-1uvbhzx{right:auto;left:0}"),
          w(document.head, t)),
        Ne(this, e, Be, je, s, {
          data: 0,
          height: 8,
          widgetType: 1,
          up: 2,
          videoSplashOpen: 3,
        });
    }
  }
  function Re(e) {
    let t;
    return {
      c() {
        t = $("Offline");
      },
      m(e, n) {
        b(e, t, n);
      },
      d(e) {
        e && y(t);
      },
    };
  }
  function Pe(e) {
    let t;
    return {
      c() {
        t = $("Online");
      },
      m(e, n) {
        b(e, t, n);
      },
      d(e) {
        e && y(t);
      },
    };
  }
  function Ve(t) {
    let n, i, o, a, r;
    function s(e, t) {
      return !0 === e[0].online ? Pe : Re;
    }
    let l = s(t),
      c = l(t);
    return {
      c() {
        (n = k("div")),
          (i = k("div")),
          (o = k("span")),
          (a = T()),
          c.c(),
          q(o, "class", "chatwith-circle gcohtech-a14ou5"),
          q(i, "class", "chatwith-status chatwith-online gcohtech-a14ou5"),
          q(
            n,
            "class",
            (r =
              d(!0 === t[0].online ? "chatwith-active" : "chatwith-inactive") +
              " gcohtech-a14ou5")
          );
      },
      m(e, t) {
        b(e, n, t), w(n, i), w(i, o), w(i, a), c.m(i, null);
      },
      p(e, [t]) {
        l !== (l = s(e)) && (c.d(1), (c = l(e)), c && (c.c(), c.m(i, null))),
          1 & t &&
            r !==
              (r =
                d(
                  !0 === e[0].online ? "chatwith-active" : "chatwith-inactive"
                ) + " gcohtech-a14ou5") &&
            q(n, "class", r);
      },
      i: e,
      o: e,
      d(e) {
        e && y(n), c.d();
      },
    };
  }
  function _e(e, t, n) {
    let { person: i } = t;
    return (
      (e.$$set = (e) => {
        "person" in e && n(0, (i = e.person));
      }),
      [i]
    );
  }
  class He extends qe {
    constructor(e) {
      var t;
      super(),
        document.getElementById("gcohtech-a14ou5-style") ||
          (((t = k("style")).id = "gcohtech-a14ou5-style"),
          (t.textContent =
            ".chatwith-status.gcohtech-a14ou5.gcohtech-a14ou5{font-size:.65em;font-weight:normal;position:absolute;top:74px;right:-9px;display:flex;align-items:center}.chatwith-active.gcohtech-a14ou5 .chatwith-status.gcohtech-a14ou5{color:#2acc04}.chatwith-active.gcohtech-a14ou5 .chatwith-circle.gcohtech-a14ou5{background:#2acc04}.chatwith-circle.gcohtech-a14ou5.gcohtech-a14ou5{width:20px;height:20px;border:4px solid #fff;border-radius:20px;display:inline-block;background:#ccc}"),
          w(document.head, t)),
        Ne(this, e, _e, Ve, s, { person: 0 });
    }
  }
  function Ge(e) {
    let t, n;
    return {
      c() {
        (t = k("div")),
          (n = $(e[1])),
          q(t, "class", "chatwith-error-text gcohtech-1mzsvcl");
      },
      m(e, i) {
        b(e, t, i), w(t, n);
      },
      p(e, t) {
        2 & t && M(n, e[1]);
      },
      d(e) {
        e && y(t);
      },
    };
  }
  function Ze(t) {
    let n,
      i = t[0] && Ge(t);
    return {
      c() {
        i && i.c(), (n = I());
      },
      m(e, t) {
        i && i.m(e, t), b(e, n, t);
      },
      p(e, [t]) {
        e[0]
          ? i
            ? i.p(e, t)
            : ((i = Ge(e)), i.c(), i.m(n.parentNode, n))
          : i && (i.d(1), (i = null));
      },
      i: e,
      o: e,
      d(e) {
        i && i.d(e), e && y(n);
      },
    };
  }
  function We(e, t, n) {
    const i = K();
    let { data: o } = t,
      { item: a } = t,
      { value: r } = t,
      { index: s } = t,
      l = !1,
      c = "";
    return (
      (e.$$set = (e) => {
        "data" in e && n(3, (o = e.data)),
          "item" in e && n(2, (a = e.item)),
          "value" in e && n(4, (r = e.value)),
          "index" in e && n(5, (s = e.index));
      }),
      [
        l,
        c,
        a,
        o,
        r,
        s,
        () => {
          void 0 === a.val && n(2, (a.val = ""), a),
            a.required &&
            ("" === a.val ||
              !1 === a.val ||
              ("tel" == a.type && "" === a.telNum))
              ? (n(
                  1,
                  (c = o.requiredValidationText
                    ? o.requiredValidationText
                    : "This field is required")
                ),
                -1 === r.findIndex((e) => e.index === s) &&
                  r.push({ index: s }),
                n(0, (l = !0)))
              : "number" !== a.type || "" === a.val || /^\d+$/.test(a.val)
              ? "url" !== a.type ||
                "" === a.val ||
                /(http(s)?:\/\/)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g.test(
                  a.val
                )
                ? "tel" !== a.type ||
                  "" === a.telNum ||
                  /^\d{6,15}$/.test(a.telNum)
                  ? "email" !== a.type ||
                    "" === a.val ||
                    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(a.val)
                    ? (r.findIndex((e) => e.index === s) > -1 &&
                        r.splice(r.findIndex((e) => e.index === s)),
                      n(0, (l = !1)))
                    : (n(
                        1,
                        (c = o.emailValidationText
                          ? o.emailValidationText
                          : "Sorry but this email is not valid.")
                      ),
                      -1 === r.findIndex((e) => e.index === s) &&
                        r.push({ index: s }),
                      n(0, (l = !0)))
                  : (n(
                      1,
                      (c = o.telValidationText
                        ? o.telValidationText
                        : "This is not a phone number.")
                    ),
                    -1 === r.findIndex((e) => e.index === s) &&
                      r.push({ index: s }),
                    n(0, (l = !0)))
                : (n(
                    1,
                    (c = o.urlValidationText
                      ? o.urlValidationText
                      : "Please use a https:// or http:// URL.")
                  ),
                  -1 === r.findIndex((e) => e.index === s) &&
                    r.push({ index: s }),
                  n(0, (l = !0)))
              : (n(
                  1,
                  (c = o.numberValidationText
                    ? o.numberValidationText
                    : "This is not a number.")
                ),
                -1 === r.findIndex((e) => e.index === s) &&
                  r.push({ index: s }),
                n(0, (l = !0))),
            i("error", l);
        },
      ]
    );
  }
  class Ke extends qe {
    constructor(e) {
      var t;
      super(),
        document.getElementById("gcohtech-1mzsvcl-style") ||
          (((t = k("style")).id = "gcohtech-1mzsvcl-style"),
          (t.textContent =
            ".chatwith-error-text.gcohtech-1mzsvcl{padding:3px;color:#ff8076;font-weight:bold;font-size:10pt;margin-top:3px;border-radius:5px}"),
          w(document.head, t)),
        Ne(this, e, We, Ze, s, {
          data: 3,
          item: 2,
          value: 4,
          index: 5,
          validate: 6,
        });
    }
    get validate() {
      return this.$$.ctx[6];
    }
  }
  const Ye = [
    {
      Iso2: "BD",
      Name: "Bangladesh",
      Iso3: "BGD",
      Unicode: "🇧🇩",
      Dial: "880",
      Currency: "BDT",
      Capital: "Dhaka",
      Continent: "AS",
    },
    {
      Iso2: "BE",
      Name: "Belgium",
      Iso3: "BEL",
      Unicode: "🇧🇪",
      Dial: "32",
      Currency: "EUR",
      Capital: "Brussels",
      Continent: "EU",
    },
    {
      Iso2: "BF",
      Name: "Burkina Faso",
      Iso3: "BFA",
      Unicode: "🇧🇫",
      Dial: "226",
      Currency: "XOF",
      Capital: "Ouagadougou",
      Continent: "AF",
    },
    {
      Iso2: "BG",
      Name: "Bulgaria",
      Iso3: "BGR",
      Unicode: "🇧🇬",
      Dial: "359",
      Currency: "BGN",
      Capital: "Sofia",
      Continent: "EU",
    },
    {
      Iso2: "BA",
      Name: "Bosnia and Herzegovina",
      Iso3: "BIH",
      Unicode: "🇧🇦",
      Dial: "387",
      Currency: "BAM",
      Capital: "Sarajevo",
      Continent: "EU",
    },
    {
      Iso2: "BB",
      Name: "Barbados",
      Iso3: "BRB",
      Unicode: "🇧🇧",
      Dial: "1246",
      Currency: "BBD",
      Capital: "Bridgetown",
      Continent: "NA",
    },
    {
      Iso2: "WF",
      Name: "Wallis and Futuna",
      Iso3: "WLF",
      Unicode: "🇼🇫",
      Dial: "681",
      Currency: "XPF",
      Capital: "Mata Utu",
      Continent: "OC",
    },
    {
      Iso2: "BL",
      Name: "Saint Barthelemy",
      Iso3: "BLM",
      Unicode: "🇧🇱",
      Dial: "590",
      Currency: "EUR",
      Capital: "Gustavia",
      Continent: "NA",
    },
    {
      Iso2: "BM",
      Name: "Bermuda",
      Iso3: "BMU",
      Unicode: "🇧🇲",
      Dial: "1441",
      Currency: "BMD",
      Capital: "Hamilton",
      Continent: "NA",
    },
    {
      Iso2: "BN",
      Name: "Brunei",
      Iso3: "BRN",
      Unicode: "🇧🇳",
      Dial: "673",
      Currency: "BND",
      Capital: "Bandar Seri Begawan",
      Continent: "AS",
    },
    {
      Iso2: "BO",
      Name: "Bolivia",
      Iso3: "BOL",
      Unicode: "🇧🇴",
      Dial: "591",
      Currency: "BOB",
      Capital: "Sucre",
      Continent: "SA",
    },
    {
      Iso2: "BH",
      Name: "Bahrain",
      Iso3: "BHR",
      Unicode: "🇧🇭",
      Dial: "973",
      Currency: "BHD",
      Capital: "Manama",
      Continent: "AS",
    },
    {
      Iso2: "BI",
      Name: "Burundi",
      Iso3: "BDI",
      Unicode: "🇧🇮",
      Dial: "257",
      Currency: "BIF",
      Capital: "Bujumbura",
      Continent: "AF",
    },
    {
      Iso2: "BJ",
      Name: "Benin",
      Iso3: "BEN",
      Unicode: "🇧🇯",
      Dial: "229",
      Currency: "XOF",
      Capital: "Porto-Novo",
      Continent: "AF",
    },
    {
      Iso2: "BT",
      Name: "Bhutan",
      Iso3: "BTN",
      Unicode: "🇧🇹",
      Dial: "975",
      Currency: "BTN",
      Capital: "Thimphu",
      Continent: "AS",
    },
    {
      Iso2: "JM",
      Name: "Jamaica",
      Iso3: "JAM",
      Unicode: "🇯🇲",
      Dial: "1876",
      Currency: "JMD",
      Capital: "Kingston",
      Continent: "NA",
    },
    {
      Iso2: "BW",
      Name: "Botswana",
      Iso3: "BWA",
      Unicode: "🇧🇼",
      Dial: "267",
      Currency: "BWP",
      Capital: "Gaborone",
      Continent: "AF",
    },
    {
      Iso2: "WS",
      Name: "Samoa",
      Iso3: "WSM",
      Unicode: "🇼🇸",
      Dial: "685",
      Currency: "WST",
      Capital: "Apia",
      Continent: "OC",
    },
    {
      Iso2: "BR",
      Name: "Brazil",
      Iso3: "BRA",
      Unicode: "🇧🇷",
      Dial: "55",
      Currency: "BRL",
      Capital: "Brasilia",
      Continent: "SA",
    },
    {
      Iso2: "BS",
      Name: "Bahamas",
      Iso3: "BHS",
      Unicode: "🇧🇸",
      Dial: "1242",
      Currency: "BSD",
      Capital: "Nassau",
      Continent: "NA",
    },
    {
      Iso2: "JE",
      Name: "Jersey",
      Iso3: "JEY",
      Unicode: "🇯🇪",
      Dial: "441534",
      Currency: "GBP",
      Capital: "Saint Helier",
      Continent: "EU",
    },
    {
      Iso2: "BY",
      Name: "Belarus",
      Iso3: "BLR",
      Unicode: "🇧🇾",
      Dial: "375",
      Currency: "BYR",
      Capital: "Minsk",
      Continent: "EU",
    },
    {
      Iso2: "BZ",
      Name: "Belize",
      Iso3: "BLZ",
      Unicode: "🇧🇿",
      Dial: "501",
      Currency: "BZD",
      Capital: "Belmopan",
      Continent: "NA",
    },
    {
      Iso2: "RU",
      Name: "Russia",
      Iso3: "RUS",
      Unicode: "🇷🇺",
      Dial: "7",
      Currency: "RUB",
      Capital: "Moscow",
      Continent: "EU",
    },
    {
      Iso2: "RW",
      Name: "Rwanda",
      Iso3: "RWA",
      Unicode: "🇷🇼",
      Dial: "250",
      Currency: "RWF",
      Capital: "Kigali",
      Continent: "AF",
    },
    {
      Iso2: "RS",
      Name: "Serbia",
      Iso3: "SRB",
      Unicode: "🇷🇸",
      Dial: "381",
      Currency: "RSD",
      Capital: "Belgrade",
      Continent: "EU",
    },
    {
      Iso2: "TL",
      Name: "East Timor",
      Iso3: "TLS",
      Unicode: "🇹🇱",
      Dial: "670",
      Currency: "USD",
      Capital: "Dili",
      Continent: "OC",
    },
    {
      Iso2: "RE",
      Name: "Reunion",
      Iso3: "REU",
      Unicode: "🇷🇪",
      Dial: "262",
      Currency: "EUR",
      Capital: "Saint-Denis",
      Continent: "AF",
    },
    {
      Iso2: "TM",
      Name: "Turkmenistan",
      Iso3: "TKM",
      Unicode: "🇹🇲",
      Dial: "993",
      Currency: "TMT",
      Capital: "Ashgabat",
      Continent: "AS",
    },
    {
      Iso2: "TJ",
      Name: "Tajikistan",
      Iso3: "TJK",
      Unicode: "🇹🇯",
      Dial: "992",
      Currency: "TJS",
      Capital: "Dushanbe",
      Continent: "AS",
    },
    {
      Iso2: "RO",
      Name: "Romania",
      Iso3: "ROU",
      Unicode: "🇷🇴",
      Dial: "40",
      Currency: "RON",
      Capital: "Bucharest",
      Continent: "EU",
    },
    {
      Iso2: "GW",
      Name: "Guinea-Bissau",
      Iso3: "GNB",
      Unicode: "🇬🇼",
      Dial: "245",
      Currency: "XOF",
      Capital: "Bissau",
      Continent: "AF",
    },
    {
      Iso2: "GU",
      Name: "Guam",
      Iso3: "GUM",
      Unicode: "🇬🇺",
      Dial: "1671",
      Currency: "USD",
      Capital: "Hagatna",
      Continent: "OC",
    },
    {
      Iso2: "GT",
      Name: "Guatemala",
      Iso3: "GTM",
      Unicode: "🇬🇹",
      Dial: "502",
      Currency: "GTQ",
      Capital: "Guatemala City",
      Continent: "NA",
    },
    {
      Iso2: "GR",
      Name: "Greece",
      Iso3: "GRC",
      Unicode: "🇬🇷",
      Dial: "30",
      Currency: "EUR",
      Capital: "Athens",
      Continent: "EU",
    },
    {
      Iso2: "GQ",
      Name: "Equatorial Guinea",
      Iso3: "GNQ",
      Unicode: "🇬🇶",
      Dial: "240",
      Currency: "XAF",
      Capital: "Malabo",
      Continent: "AF",
    },
    {
      Iso2: "GP",
      Name: "Guadeloupe",
      Iso3: "GLP",
      Unicode: "🇬🇵",
      Dial: "590",
      Currency: "EUR",
      Capital: "Basse-Terre",
      Continent: "NA",
    },
    {
      Iso2: "JP",
      Name: "Japan",
      Iso3: "JPN",
      Unicode: "🇯🇵",
      Dial: "81",
      Currency: "JPY",
      Capital: "Tokyo",
      Continent: "AS",
    },
    {
      Iso2: "GY",
      Name: "Guyana",
      Iso3: "GUY",
      Unicode: "🇬🇾",
      Dial: "592",
      Currency: "GYD",
      Capital: "Georgetown",
      Continent: "SA",
    },
    {
      Iso2: "GG",
      Name: "Guernsey",
      Iso3: "GGY",
      Unicode: "🇬🇬",
      Dial: "441481",
      Currency: "GBP",
      Capital: "St Peter Port",
      Continent: "EU",
    },
    {
      Iso2: "GF",
      Name: "French Guiana",
      Iso3: "GUF",
      Unicode: "🇬🇫",
      Dial: "594",
      Currency: "EUR",
      Capital: "Cayenne",
      Continent: "SA",
    },
    {
      Iso2: "GE",
      Name: "Georgia",
      Iso3: "GEO",
      Unicode: "🇬🇪",
      Dial: "995",
      Currency: "GEL",
      Capital: "Tbilisi",
      Continent: "AS",
    },
    {
      Iso2: "GD",
      Name: "Grenada",
      Iso3: "GRD",
      Unicode: "🇬🇩",
      Dial: "1-473",
      Currency: "XCD",
      Capital: "St. George's",
      Continent: "NA",
    },
    {
      Iso2: "GB",
      Name: "United Kingdom",
      Iso3: "GBR",
      Unicode: "🇬🇧",
      Dial: "44",
      Currency: "GBP",
      Capital: "London",
      Continent: "EU",
    },
    {
      Iso2: "GA",
      Name: "Gabon",
      Iso3: "GAB",
      Unicode: "🇬🇦",
      Dial: "241",
      Currency: "XAF",
      Capital: "Libreville",
      Continent: "AF",
    },
    {
      Iso2: "SV",
      Name: "El Salvador",
      Iso3: "SLV",
      Unicode: "🇸🇻",
      Dial: "503",
      Currency: "USD",
      Capital: "San Salvador",
      Continent: "NA",
    },
    {
      Iso2: "GN",
      Name: "Guinea",
      Iso3: "GIN",
      Unicode: "🇬🇳",
      Dial: "224",
      Currency: "GNF",
      Capital: "Conakry",
      Continent: "AF",
    },
    {
      Iso2: "GM",
      Name: "Gambia",
      Iso3: "GMB",
      Unicode: "🇬🇲",
      Dial: "220",
      Currency: "GMD",
      Capital: "Banjul",
      Continent: "AF",
    },
    {
      Iso2: "GL",
      Name: "Greenland",
      Iso3: "GRL",
      Unicode: "🇬🇱",
      Dial: "299",
      Currency: "DKK",
      Capital: "Nuuk",
      Continent: "NA",
    },
    {
      Iso2: "GI",
      Name: "Gibraltar",
      Iso3: "GIB",
      Unicode: "🇬🇮",
      Dial: "350",
      Currency: "GIP",
      Capital: "Gibraltar",
      Continent: "EU",
    },
    {
      Iso2: "GH",
      Name: "Ghana",
      Iso3: "GHA",
      Unicode: "🇬🇭",
      Dial: "233",
      Currency: "GHS",
      Capital: "Accra",
      Continent: "AF",
    },
    {
      Iso2: "OM",
      Name: "Oman",
      Iso3: "OMN",
      Unicode: "🇴🇲",
      Dial: "968",
      Currency: "OMR",
      Capital: "Muscat",
      Continent: "AS",
    },
    {
      Iso2: "TN",
      Name: "Tunisia",
      Iso3: "TUN",
      Unicode: "🇹🇳",
      Dial: "216",
      Currency: "TND",
      Capital: "Tunis",
      Continent: "AF",
    },
    {
      Iso2: "JO",
      Name: "Jordan",
      Iso3: "JOR",
      Unicode: "🇯🇴",
      Dial: "962",
      Currency: "JOD",
      Capital: "Amman",
      Continent: "AS",
    },
    {
      Iso2: "HR",
      Name: "Croatia",
      Iso3: "HRV",
      Unicode: "🇭🇷",
      Dial: "385",
      Currency: "HRK",
      Capital: "Zagreb",
      Continent: "EU",
    },
    {
      Iso2: "HT",
      Name: "Haiti",
      Iso3: "HTI",
      Unicode: "🇭🇹",
      Dial: "509",
      Currency: "HTG",
      Capital: "Port-au-Prince",
      Continent: "NA",
    },
    {
      Iso2: "HU",
      Name: "Hungary",
      Iso3: "HUN",
      Unicode: "🇭🇺",
      Dial: "36",
      Currency: "HUF",
      Capital: "Budapest",
      Continent: "EU",
    },
    {
      Iso2: "HK",
      Name: "Hong Kong",
      Iso3: "HKG",
      Unicode: "🇭🇰",
      Dial: "852",
      Currency: "HKD",
      Capital: "Hong Kong",
      Continent: "AS",
    },
    {
      Iso2: "HN",
      Name: "Honduras",
      Iso3: "HND",
      Unicode: "🇭🇳",
      Dial: "504",
      Currency: "HNL",
      Capital: "Tegucigalpa",
      Continent: "NA",
    },
    {
      Iso2: "VE",
      Name: "Venezuela",
      Iso3: "VEN",
      Unicode: "🇻🇪",
      Dial: "58",
      Currency: "VEF",
      Capital: "Caracas",
      Continent: "SA",
    },
    {
      Iso2: "PR",
      Name: "Puerto Rico",
      Iso3: "PRI",
      Unicode: "🇵🇷",
      Dial: "1-787",
      Currency: "USD",
      Capital: "San Juan",
      Continent: "NA",
    },
    {
      Iso2: "PS",
      Name: "Palestinian Territory",
      Iso3: "PSE",
      Unicode: "🇵🇸",
      Dial: "970",
      Currency: "ILS",
      Capital: "East Jerusalem",
      Continent: "AS",
    },
    {
      Iso2: "PW",
      Name: "Palau",
      Iso3: "PLW",
      Unicode: "🇵🇼",
      Dial: "680",
      Currency: "USD",
      Capital: "Melekeok",
      Continent: "OC",
    },
    {
      Iso2: "PT",
      Name: "Portugal",
      Iso3: "PRT",
      Unicode: "🇵🇹",
      Dial: "351",
      Currency: "EUR",
      Capital: "Lisbon",
      Continent: "EU",
    },
    {
      Iso2: "SJ",
      Name: "Svalbard and Jan Mayen",
      Iso3: "SJM",
      Unicode: "🇸🇯",
      Dial: "47",
      Currency: "NOK",
      Capital: "Longyearbyen",
      Continent: "EU",
    },
    {
      Iso2: "PY",
      Name: "Paraguay",
      Iso3: "PRY",
      Unicode: "🇵🇾",
      Dial: "595",
      Currency: "PYG",
      Capital: "Asuncion",
      Continent: "SA",
    },
    {
      Iso2: "IQ",
      Name: "Iraq",
      Iso3: "IRQ",
      Unicode: "🇮🇶",
      Dial: "964",
      Currency: "IQD",
      Capital: "Baghdad",
      Continent: "AS",
    },
    {
      Iso2: "PA",
      Name: "Panama",
      Iso3: "PAN",
      Unicode: "🇵🇦",
      Dial: "507",
      Currency: "PAB",
      Capital: "Panama City",
      Continent: "NA",
    },
    {
      Iso2: "PF",
      Name: "French Polynesia",
      Iso3: "PYF",
      Unicode: "🇵🇫",
      Dial: "689",
      Currency: "XPF",
      Capital: "Papeete",
      Continent: "OC",
    },
    {
      Iso2: "PG",
      Name: "Papua New Guinea",
      Iso3: "PNG",
      Unicode: "🇵🇬",
      Dial: "675",
      Currency: "PGK",
      Capital: "Port Moresby",
      Continent: "OC",
    },
    {
      Iso2: "PE",
      Name: "Peru",
      Iso3: "PER",
      Unicode: "🇵🇪",
      Dial: "51",
      Currency: "PEN",
      Capital: "Lima",
      Continent: "SA",
    },
    {
      Iso2: "PK",
      Name: "Pakistan",
      Iso3: "PAK",
      Unicode: "🇵🇰",
      Dial: "92",
      Currency: "PKR",
      Capital: "Islamabad",
      Continent: "AS",
    },
    {
      Iso2: "PH",
      Name: "Philippines",
      Iso3: "PHL",
      Unicode: "🇵🇭",
      Dial: "63",
      Currency: "PHP",
      Capital: "Manila",
      Continent: "AS",
    },
    {
      Iso2: "PN",
      Name: "Pitcairn",
      Iso3: "PCN",
      Unicode: "🇵🇳",
      Dial: "870",
      Currency: "NZD",
      Capital: "Adamstown",
      Continent: "OC",
    },
    {
      Iso2: "PL",
      Name: "Poland",
      Iso3: "POL",
      Unicode: "🇵🇱",
      Dial: "48",
      Currency: "PLN",
      Capital: "Warsaw",
      Continent: "EU",
    },
    {
      Iso2: "PM",
      Name: "Saint Pierre and Miquelon",
      Iso3: "SPM",
      Unicode: "🇵🇲",
      Dial: "508",
      Currency: "EUR",
      Capital: "Saint-Pierre",
      Continent: "NA",
    },
    {
      Iso2: "ZM",
      Name: "Zambia",
      Iso3: "ZMB",
      Unicode: "🇿🇲",
      Dial: "260",
      Currency: "ZMK",
      Capital: "Lusaka",
      Continent: "AF",
    },
    {
      Iso2: "EH",
      Name: "Western Sahara",
      Iso3: "ESH",
      Unicode: "🇪🇭",
      Dial: "212",
      Currency: "MAD",
      Capital: "El-Aaiun",
      Continent: "AF",
    },
    {
      Iso2: "EE",
      Name: "Estonia",
      Iso3: "EST",
      Unicode: "🇪🇪",
      Dial: "372",
      Currency: "EUR",
      Capital: "Tallinn",
      Continent: "EU",
    },
    {
      Iso2: "EG",
      Name: "Egypt",
      Iso3: "EGY",
      Unicode: "🇪🇬",
      Dial: "20",
      Currency: "EGP",
      Capital: "Cairo",
      Continent: "AF",
    },
    {
      Iso2: "ZA",
      Name: "South Africa",
      Iso3: "ZAF",
      Unicode: "🇿🇦",
      Dial: "27",
      Currency: "ZAR",
      Capital: "Pretoria",
      Continent: "AF",
    },
    {
      Iso2: "EC",
      Name: "Ecuador",
      Iso3: "ECU",
      Unicode: "🇪🇨",
      Dial: "593",
      Currency: "USD",
      Capital: "Quito",
      Continent: "SA",
    },
    {
      Iso2: "IT",
      Name: "Italy",
      Iso3: "ITA",
      Unicode: "🇮🇹",
      Dial: "39",
      Currency: "EUR",
      Capital: "Rome",
      Continent: "EU",
    },
    {
      Iso2: "VN",
      Name: "Vietnam",
      Iso3: "VNM",
      Unicode: "🇻🇳",
      Dial: "84",
      Currency: "VND",
      Capital: "Hanoi",
      Continent: "AS",
    },
    {
      Iso2: "SB",
      Name: "Solomon Islands",
      Iso3: "SLB",
      Unicode: "🇸🇧",
      Dial: "677",
      Currency: "SBD",
      Capital: "Honiara",
      Continent: "OC",
    },
    {
      Iso2: "ET",
      Name: "Ethiopia",
      Iso3: "ETH",
      Unicode: "🇪🇹",
      Dial: "251",
      Currency: "ETB",
      Capital: "Addis Ababa",
      Continent: "AF",
    },
    {
      Iso2: "SO",
      Name: "Somalia",
      Iso3: "SOM",
      Unicode: "🇸🇴",
      Dial: "252",
      Currency: "SOS",
      Capital: "Mogadishu",
      Continent: "AF",
    },
    {
      Iso2: "ZW",
      Name: "Zimbabwe",
      Iso3: "ZWE",
      Unicode: "🇿🇼",
      Dial: "263",
      Currency: "ZWL",
      Capital: "Harare",
      Continent: "AF",
    },
    {
      Iso2: "SA",
      Name: "Saudi Arabia",
      Iso3: "SAU",
      Unicode: "🇸🇦",
      Dial: "966",
      Currency: "SAR",
      Capital: "Riyadh",
      Continent: "AS",
    },
    {
      Iso2: "ES",
      Name: "Spain",
      Iso3: "ESP",
      Unicode: "🇪🇸",
      Dial: "34",
      Currency: "EUR",
      Capital: "Madrid",
      Continent: "EU",
    },
    {
      Iso2: "ER",
      Name: "Eritrea",
      Iso3: "ERI",
      Unicode: "🇪🇷",
      Dial: "291",
      Currency: "ERN",
      Capital: "Asmara",
      Continent: "AF",
    },
    {
      Iso2: "ME",
      Name: "Montenegro",
      Iso3: "MNE",
      Unicode: "🇲🇪",
      Dial: "382",
      Currency: "EUR",
      Capital: "Podgorica",
      Continent: "EU",
    },
    {
      Iso2: "MD",
      Name: "Moldova",
      Iso3: "MDA",
      Unicode: "🇲🇩",
      Dial: "373",
      Currency: "MDL",
      Capital: "Chisinau",
      Continent: "EU",
    },
    {
      Iso2: "MG",
      Name: "Madagascar",
      Iso3: "MDG",
      Unicode: "🇲🇬",
      Dial: "261",
      Currency: "MGA",
      Capital: "Antananarivo",
      Continent: "AF",
    },
    {
      Iso2: "MF",
      Name: "Saint Martin",
      Iso3: "MAF",
      Unicode: "🇲🇫",
      Dial: "590",
      Currency: "EUR",
      Capital: "Marigot",
      Continent: "NA",
    },
    {
      Iso2: "MA",
      Name: "Morocco",
      Iso3: "MAR",
      Unicode: "🇲🇦",
      Dial: "212",
      Currency: "MAD",
      Capital: "Rabat",
      Continent: "AF",
    },
    {
      Iso2: "MC",
      Name: "Monaco",
      Iso3: "MCO",
      Unicode: "🇲🇨",
      Dial: "377",
      Currency: "EUR",
      Capital: "Monaco",
      Continent: "EU",
    },
    {
      Iso2: "UZ",
      Name: "Uzbekistan",
      Iso3: "UZB",
      Unicode: "🇺🇿",
      Dial: "998",
      Currency: "UZS",
      Capital: "Tashkent",
      Continent: "AS",
    },
    {
      Iso2: "MM",
      Name: "Myanmar",
      Iso3: "MMR",
      Unicode: "🇲🇲",
      Dial: "95",
      Currency: "MMK",
      Capital: "Nay Pyi Taw",
      Continent: "AS",
    },
    {
      Iso2: "ML",
      Name: "Mali",
      Iso3: "MLI",
      Unicode: "🇲🇱",
      Dial: "223",
      Currency: "XOF",
      Capital: "Bamako",
      Continent: "AF",
    },
    {
      Iso2: "MO",
      Name: "Macao",
      Iso3: "MAC",
      Unicode: "🇲🇴",
      Dial: "853",
      Currency: "MOP",
      Capital: "Macao",
      Continent: "AS",
    },
    {
      Iso2: "MN",
      Name: "Mongolia",
      Iso3: "MNG",
      Unicode: "🇲🇳",
      Dial: "976",
      Currency: "MNT",
      Capital: "Ulan Bator",
      Continent: "AS",
    },
    {
      Iso2: "MH",
      Name: "Marshall Islands",
      Iso3: "MHL",
      Unicode: "🇲🇭",
      Dial: "692",
      Currency: "USD",
      Capital: "Majuro",
      Continent: "OC",
    },
    {
      Iso2: "MK",
      Name: "Macedonia",
      Iso3: "MKD",
      Unicode: "🇲🇰",
      Dial: "389",
      Currency: "MKD",
      Capital: "Skopje",
      Continent: "EU",
    },
    {
      Iso2: "MU",
      Name: "Mauritius",
      Iso3: "MUS",
      Unicode: "🇲🇺",
      Dial: "230",
      Currency: "MUR",
      Capital: "Port Louis",
      Continent: "AF",
    },
    {
      Iso2: "MT",
      Name: "Malta",
      Iso3: "MLT",
      Unicode: "🇲🇹",
      Dial: "356",
      Currency: "EUR",
      Capital: "Valletta",
      Continent: "EU",
    },
    {
      Iso2: "MW",
      Name: "Malawi",
      Iso3: "MWI",
      Unicode: "🇲🇼",
      Dial: "265",
      Currency: "MWK",
      Capital: "Lilongwe",
      Continent: "AF",
    },
    {
      Iso2: "MV",
      Name: "Maldives",
      Iso3: "MDV",
      Unicode: "🇲🇻",
      Dial: "960",
      Currency: "MVR",
      Capital: "Male",
      Continent: "AS",
    },
    {
      Iso2: "MQ",
      Name: "Martinique",
      Iso3: "MTQ",
      Unicode: "🇲🇶",
      Dial: "596",
      Currency: "EUR",
      Capital: "Fort-de-France",
      Continent: "NA",
    },
    {
      Iso2: "MP",
      Name: "Northern Mariana Islands",
      Iso3: "MNP",
      Unicode: "🇲🇵",
      Dial: "1670",
      Currency: "USD",
      Capital: "Saipan",
      Continent: "OC",
    },
    {
      Iso2: "MS",
      Name: "Montserrat",
      Iso3: "MSR",
      Unicode: "🇲🇸",
      Dial: "1664",
      Currency: "XCD",
      Capital: "Plymouth",
      Continent: "NA",
    },
    {
      Iso2: "MR",
      Name: "Mauritania",
      Iso3: "MRT",
      Unicode: "🇲🇷",
      Dial: "222",
      Currency: "MRO",
      Capital: "Nouakchott",
      Continent: "AF",
    },
    {
      Iso2: "IM",
      Name: "Isle of Man",
      Iso3: "IMN",
      Unicode: "🇮🇲",
      Dial: "441624",
      Currency: "GBP",
      Capital: "Douglas, Isle of Man",
      Continent: "EU",
    },
    {
      Iso2: "UG",
      Name: "Uganda",
      Iso3: "UGA",
      Unicode: "🇺🇬",
      Dial: "256",
      Currency: "UGX",
      Capital: "Kampala",
      Continent: "AF",
    },
    {
      Iso2: "TZ",
      Name: "Tanzania",
      Iso3: "TZA",
      Unicode: "🇹🇿",
      Dial: "255",
      Currency: "TZS",
      Capital: "Dodoma",
      Continent: "AF",
    },
    {
      Iso2: "MY",
      Name: "Malaysia",
      Iso3: "MYS",
      Unicode: "🇲🇾",
      Dial: "60",
      Currency: "MYR",
      Capital: "Kuala Lumpur",
      Continent: "AS",
    },
    {
      Iso2: "MX",
      Name: "Mexico",
      Iso3: "MEX",
      Unicode: "🇲🇽",
      Dial: "52",
      Currency: "MXN",
      Capital: "Mexico City",
      Continent: "NA",
    },
    {
      Iso2: "IL",
      Name: "Israel",
      Iso3: "ISR",
      Unicode: "🇮🇱",
      Dial: "972",
      Currency: "ILS",
      Capital: "Jerusalem",
      Continent: "AS",
    },
    {
      Iso2: "FR",
      Name: "France",
      Iso3: "FRA",
      Unicode: "🇫🇷",
      Dial: "33",
      Currency: "EUR",
      Capital: "Paris",
      Continent: "EU",
    },
    {
      Iso2: "IO",
      Name: "British Indian Ocean Territory",
      Iso3: "IOT",
      Unicode: "🇮🇴",
      Dial: "246",
      Currency: "USD",
      Capital: "Diego Garcia",
      Continent: "AS",
    },
    {
      Iso2: "SH",
      Name: "Saint Helena",
      Iso3: "SHN",
      Unicode: "🇸🇭",
      Dial: "290",
      Currency: "SHP",
      Capital: "Jamestown",
      Continent: "AF",
    },
    {
      Iso2: "FI",
      Name: "Finland",
      Iso3: "FIN",
      Unicode: "🇫🇮",
      Dial: "358",
      Currency: "EUR",
      Capital: "Helsinki",
      Continent: "EU",
    },
    {
      Iso2: "FJ",
      Name: "Fiji",
      Iso3: "FJI",
      Unicode: "🇫🇯",
      Dial: "679",
      Currency: "FJD",
      Capital: "Suva",
      Continent: "OC",
    },
    {
      Iso2: "FK",
      Name: "Falkland Islands",
      Iso3: "FLK",
      Unicode: "🇫🇰",
      Dial: "500",
      Currency: "FKP",
      Capital: "Stanley",
      Continent: "SA",
    },
    {
      Iso2: "FM",
      Name: "Micronesia",
      Iso3: "FSM",
      Unicode: "🇫🇲",
      Dial: "691",
      Currency: "USD",
      Capital: "Palikir",
      Continent: "OC",
    },
    {
      Iso2: "FO",
      Name: "Faroe Islands",
      Iso3: "FRO",
      Unicode: "🇫🇴",
      Dial: "298",
      Currency: "DKK",
      Capital: "Torshavn",
      Continent: "EU",
    },
    {
      Iso2: "NI",
      Name: "Nicaragua",
      Iso3: "NIC",
      Unicode: "🇳🇮",
      Dial: "505",
      Currency: "NIO",
      Capital: "Managua",
      Continent: "NA",
    },
    {
      Iso2: "NL",
      Name: "Netherlands",
      Iso3: "NLD",
      Unicode: "🇳🇱",
      Dial: "31",
      Currency: "EUR",
      Capital: "Amsterdam",
      Continent: "EU",
    },
    {
      Iso2: "NO",
      Name: "Norway",
      Iso3: "NOR",
      Unicode: "🇳🇴",
      Dial: "47",
      Currency: "NOK",
      Capital: "Oslo",
      Continent: "EU",
    },
    {
      Iso2: "NA",
      Name: "Namibia",
      Iso3: "NAM",
      Unicode: "🇳🇦",
      Dial: "264",
      Currency: "NAD",
      Capital: "Windhoek",
      Continent: "AF",
    },
    {
      Iso2: "VU",
      Name: "Vanuatu",
      Iso3: "VUT",
      Unicode: "🇻🇺",
      Dial: "678",
      Currency: "VUV",
      Capital: "Port Vila",
      Continent: "OC",
    },
    {
      Iso2: "NC",
      Name: "New Caledonia",
      Iso3: "NCL",
      Unicode: "🇳🇨",
      Dial: "687",
      Currency: "XPF",
      Capital: "Noumea",
      Continent: "OC",
    },
    {
      Iso2: "NE",
      Name: "Niger",
      Iso3: "NER",
      Unicode: "🇳🇪",
      Dial: "227",
      Currency: "XOF",
      Capital: "Niamey",
      Continent: "AF",
    },
    {
      Iso2: "NF",
      Name: "Norfolk Island",
      Iso3: "NFK",
      Unicode: "🇳🇫",
      Dial: "672",
      Currency: "AUD",
      Capital: "Kingston",
      Continent: "OC",
    },
    {
      Iso2: "NG",
      Name: "Nigeria",
      Iso3: "NGA",
      Unicode: "🇳🇬",
      Dial: "234",
      Currency: "NGN",
      Capital: "Abuja",
      Continent: "AF",
    },
    {
      Iso2: "NZ",
      Name: "New Zealand",
      Iso3: "NZL",
      Unicode: "🇳🇿",
      Dial: "64",
      Currency: "NZD",
      Capital: "Wellington",
      Continent: "OC",
    },
    {
      Iso2: "NP",
      Name: "Nepal",
      Iso3: "NPL",
      Unicode: "🇳🇵",
      Dial: "977",
      Currency: "NPR",
      Capital: "Kathmandu",
      Continent: "AS",
    },
    {
      Iso2: "NR",
      Name: "Nauru",
      Iso3: "NRU",
      Unicode: "🇳🇷",
      Dial: "674",
      Currency: "AUD",
      Capital: "Yaren",
      Continent: "OC",
    },
    {
      Iso2: "NU",
      Name: "Niue",
      Iso3: "NIU",
      Unicode: "🇳🇺",
      Dial: "683",
      Currency: "NZD",
      Capital: "Alofi",
      Continent: "OC",
    },
    {
      Iso2: "CK",
      Name: "Cook Islands",
      Iso3: "COK",
      Unicode: "🇨🇰",
      Dial: "682",
      Currency: "NZD",
      Capital: "Avarua",
      Continent: "OC",
    },
    {
      Iso2: "CI",
      Name: "Ivory Coast",
      Iso3: "CIV",
      Unicode: "🇨🇮",
      Dial: "225",
      Currency: "XOF",
      Capital: "Yamoussoukro",
      Continent: "AF",
    },
    {
      Iso2: "CH",
      Name: "Switzerland",
      Iso3: "CHE",
      Unicode: "🇨🇭",
      Dial: "41",
      Currency: "CHF",
      Capital: "Berne",
      Continent: "EU",
    },
    {
      Iso2: "CO",
      Name: "Colombia",
      Iso3: "COL",
      Unicode: "🇨🇴",
      Dial: "57",
      Currency: "COP",
      Capital: "Bogota",
      Continent: "SA",
    },
    {
      Iso2: "CN",
      Name: "China",
      Iso3: "CHN",
      Unicode: "🇨🇳",
      Dial: "86",
      Currency: "CNY",
      Capital: "Beijing",
      Continent: "AS",
    },
    {
      Iso2: "CM",
      Name: "Cameroon",
      Iso3: "CMR",
      Unicode: "🇨🇲",
      Dial: "237",
      Currency: "XAF",
      Capital: "Yaounde",
      Continent: "AF",
    },
    {
      Iso2: "CL",
      Name: "Chile",
      Iso3: "CHL",
      Unicode: "🇨🇱",
      Dial: "56",
      Currency: "CLP",
      Capital: "Santiago",
      Continent: "SA",
    },
    {
      Iso2: "CC",
      Name: "Cocos Islands",
      Iso3: "CCK",
      Unicode: "🇨🇨",
      Dial: "61",
      Currency: "AUD",
      Capital: "West Island",
      Continent: "AS",
    },
    {
      Iso2: "CA",
      Name: "Canada",
      Iso3: "CAN",
      Unicode: "🇨🇦",
      Dial: "1",
      Currency: "CAD",
      Capital: "Ottawa",
      Continent: "NA",
    },
    {
      Iso2: "CG",
      Name: "Republic of the Congo",
      Iso3: "COG",
      Unicode: "🇨🇬",
      Dial: "242",
      Currency: "XAF",
      Capital: "Brazzaville",
      Continent: "AF",
    },
    {
      Iso2: "CF",
      Name: "Central African Republic",
      Iso3: "CAF",
      Unicode: "🇨🇫",
      Dial: "236",
      Currency: "XAF",
      Capital: "Bangui",
      Continent: "AF",
    },
    {
      Iso2: "CD",
      Name: "Democratic Republic of the Congo",
      Iso3: "COD",
      Unicode: "🇨🇩",
      Dial: "243",
      Currency: "CDF",
      Capital: "Kinshasa",
      Continent: "AF",
    },
    {
      Iso2: "CZ",
      Name: "Czech Republic",
      Iso3: "CZE",
      Unicode: "🇨🇿",
      Dial: "420",
      Currency: "CZK",
      Capital: "Prague",
      Continent: "EU",
    },
    {
      Iso2: "CY",
      Name: "Cyprus",
      Iso3: "CYP",
      Unicode: "🇨🇾",
      Dial: "357",
      Currency: "EUR",
      Capital: "Nicosia",
      Continent: "EU",
    },
    {
      Iso2: "CX",
      Name: "Christmas Island",
      Iso3: "CXR",
      Unicode: "🇨🇽",
      Dial: "61",
      Currency: "AUD",
      Capital: "Flying Fish Cove",
      Continent: "AS",
    },
    {
      Iso2: "CR",
      Name: "Costa Rica",
      Iso3: "CRI",
      Unicode: "🇨🇷",
      Dial: "506",
      Currency: "CRC",
      Capital: "San Jose",
      Continent: "NA",
    },
    {
      Iso2: "CW",
      Name: "Curacao",
      Iso3: "CUW",
      Unicode: "🇨🇼",
      Dial: "599",
      Currency: "ANG",
      Capital: " Willemstad",
      Continent: "NA",
    },
    {
      Iso2: "CV",
      Name: "Cape Verde",
      Iso3: "CPV",
      Unicode: "🇨🇻",
      Dial: "238",
      Currency: "CVE",
      Capital: "Praia",
      Continent: "AF",
    },
    {
      Iso2: "CU",
      Name: "Cuba",
      Iso3: "CUB",
      Unicode: "🇨🇺",
      Dial: "53",
      Currency: "CUP",
      Capital: "Havana",
      Continent: "NA",
    },
    {
      Iso2: "SZ",
      Name: "Swaziland",
      Iso3: "SWZ",
      Unicode: "🇸🇿",
      Dial: "268",
      Currency: "SZL",
      Capital: "Mbabane",
      Continent: "AF",
    },
    {
      Iso2: "SY",
      Name: "Syria",
      Iso3: "SYR",
      Unicode: "🇸🇾",
      Dial: "963",
      Currency: "SYP",
      Capital: "Damascus",
      Continent: "AS",
    },
    {
      Iso2: "SX",
      Name: "Sint Maarten",
      Iso3: "SXM",
      Unicode: "🇸🇽",
      Dial: "599",
      Currency: "ANG",
      Capital: "Philipsburg",
      Continent: "NA",
    },
    {
      Iso2: "KG",
      Name: "Kyrgyzstan",
      Iso3: "KGZ",
      Unicode: "🇰🇬",
      Dial: "996",
      Currency: "KGS",
      Capital: "Bishkek",
      Continent: "AS",
    },
    {
      Iso2: "KE",
      Name: "Kenya",
      Iso3: "KEN",
      Unicode: "🇰🇪",
      Dial: "254",
      Currency: "KES",
      Capital: "Nairobi",
      Continent: "AF",
    },
    {
      Iso2: "SS",
      Name: "South Sudan",
      Iso3: "SSD",
      Unicode: "🇸🇸",
      Dial: "211",
      Currency: "SSP",
      Capital: "Juba",
      Continent: "AF",
    },
    {
      Iso2: "SR",
      Name: "Suriname",
      Iso3: "SUR",
      Unicode: "🇸🇷",
      Dial: "597",
      Currency: "SRD",
      Capital: "Paramaribo",
      Continent: "SA",
    },
    {
      Iso2: "KI",
      Name: "Kiribati",
      Iso3: "KIR",
      Unicode: "🇰🇮",
      Dial: "686",
      Currency: "AUD",
      Capital: "Tarawa",
      Continent: "OC",
    },
    {
      Iso2: "KH",
      Name: "Cambodia",
      Iso3: "KHM",
      Unicode: "🇰🇭",
      Dial: "855",
      Currency: "KHR",
      Capital: "Phnom Penh",
      Continent: "AS",
    },
    {
      Iso2: "KN",
      Name: "Saint Kitts and Nevis",
      Iso3: "KNA",
      Unicode: "🇰🇳",
      Dial: "1869",
      Currency: "XCD",
      Capital: "Basseterre",
      Continent: "NA",
    },
    {
      Iso2: "KM",
      Name: "Comoros",
      Iso3: "COM",
      Unicode: "🇰🇲",
      Dial: "269",
      Currency: "KMF",
      Capital: "Moroni",
      Continent: "AF",
    },
    {
      Iso2: "ST",
      Name: "Sao Tome and Principe",
      Iso3: "STP",
      Unicode: "🇸🇹",
      Dial: "239",
      Currency: "STD",
      Capital: "Sao Tome",
      Continent: "AF",
    },
    {
      Iso2: "SK",
      Name: "Slovakia",
      Iso3: "SVK",
      Unicode: "🇸🇰",
      Dial: "421",
      Currency: "EUR",
      Capital: "Bratislava",
      Continent: "EU",
    },
    {
      Iso2: "KR",
      Name: "South Korea",
      Iso3: "KOR",
      Unicode: "🇰🇷",
      Dial: "82",
      Currency: "KRW",
      Capital: "Seoul",
      Continent: "AS",
    },
    {
      Iso2: "SI",
      Name: "Slovenia",
      Iso3: "SVN",
      Unicode: "🇸🇮",
      Dial: "386",
      Currency: "EUR",
      Capital: "Ljubljana",
      Continent: "EU",
    },
    {
      Iso2: "KP",
      Name: "North Korea",
      Iso3: "PRK",
      Unicode: "🇰🇵",
      Dial: "850",
      Currency: "KPW",
      Capital: "Pyongyang",
      Continent: "AS",
    },
    {
      Iso2: "KW",
      Name: "Kuwait",
      Iso3: "KWT",
      Unicode: "🇰🇼",
      Dial: "965",
      Currency: "KWD",
      Capital: "Kuwait City",
      Continent: "AS",
    },
    {
      Iso2: "SN",
      Name: "Senegal",
      Iso3: "SEN",
      Unicode: "🇸🇳",
      Dial: "221",
      Currency: "XOF",
      Capital: "Dakar",
      Continent: "AF",
    },
    {
      Iso2: "SM",
      Name: "San Marino",
      Iso3: "SMR",
      Unicode: "🇸🇲",
      Dial: "378",
      Currency: "EUR",
      Capital: "San Marino",
      Continent: "EU",
    },
    {
      Iso2: "SL",
      Name: "Sierra Leone",
      Iso3: "SLE",
      Unicode: "🇸🇱",
      Dial: "232",
      Currency: "SLL",
      Capital: "Freetown",
      Continent: "AF",
    },
    {
      Iso2: "SC",
      Name: "Seychelles",
      Iso3: "SYC",
      Unicode: "🇸🇨",
      Dial: "248",
      Currency: "SCR",
      Capital: "Victoria",
      Continent: "AF",
    },
    {
      Iso2: "KZ",
      Name: "Kazakhstan",
      Iso3: "KAZ",
      Unicode: "🇰🇿",
      Dial: "7",
      Currency: "KZT",
      Capital: "Astana",
      Continent: "AS",
    },
    {
      Iso2: "KY",
      Name: "Cayman Islands",
      Iso3: "CYM",
      Unicode: "🇰🇾",
      Dial: "1345",
      Currency: "KYD",
      Capital: "George Town",
      Continent: "NA",
    },
    {
      Iso2: "SG",
      Name: "Singapore",
      Iso3: "SGP",
      Unicode: "🇸🇬",
      Dial: "65",
      Currency: "SGD",
      Capital: "Singapur",
      Continent: "AS",
    },
    {
      Iso2: "SE",
      Name: "Sweden",
      Iso3: "SWE",
      Unicode: "🇸🇪",
      Dial: "46",
      Currency: "SEK",
      Capital: "Stockholm",
      Continent: "EU",
    },
    {
      Iso2: "SD",
      Name: "Sudan",
      Iso3: "SDN",
      Unicode: "🇸🇩",
      Dial: "249",
      Currency: "SDG",
      Capital: "Khartoum",
      Continent: "AF",
    },
    {
      Iso2: "DO",
      Name: "Dominican Republic",
      Iso3: "DOM",
      Unicode: "🇩🇴",
      Dial: "1809",
      Currency: "DOP",
      Capital: "Santo Domingo",
      Continent: "NA",
    },
    {
      Iso2: "DM",
      Name: "Dominica",
      Iso3: "DMA",
      Unicode: "🇩🇲",
      Dial: "1767",
      Currency: "XCD",
      Capital: "Roseau",
      Continent: "NA",
    },
    {
      Iso2: "DJ",
      Name: "Djibouti",
      Iso3: "DJI",
      Unicode: "🇩🇯",
      Dial: "253",
      Currency: "DJF",
      Capital: "Djibouti",
      Continent: "AF",
    },
    {
      Iso2: "DK",
      Name: "Denmark",
      Iso3: "DNK",
      Unicode: "🇩🇰",
      Dial: "45",
      Currency: "DKK",
      Capital: "Copenhagen",
      Continent: "EU",
    },
    {
      Iso2: "VG",
      Name: "British Virgin Islands",
      Iso3: "VGB",
      Unicode: "🇻🇬",
      Dial: "1284",
      Currency: "USD",
      Capital: "Road Town",
      Continent: "NA",
    },
    {
      Iso2: "DE",
      Name: "Germany",
      Iso3: "DEU",
      Unicode: "🇩🇪",
      Dial: "49",
      Currency: "EUR",
      Capital: "Berlin",
      Continent: "EU",
    },
    {
      Iso2: "YE",
      Name: "Yemen",
      Iso3: "YEM",
      Unicode: "🇾🇪",
      Dial: "967",
      Currency: "YER",
      Capital: "Sanaa",
      Continent: "AS",
    },
    {
      Iso2: "DZ",
      Name: "Algeria",
      Iso3: "DZA",
      Unicode: "🇩🇿",
      Dial: "213",
      Currency: "DZD",
      Capital: "Algiers",
      Continent: "AF",
    },
    {
      Iso2: "US",
      Name: "United States",
      Iso3: "USA",
      Unicode: "🇺🇸",
      Dial: "1",
      Currency: "USD",
      Capital: "Washington",
      Continent: "NA",
    },
    {
      Iso2: "UY",
      Name: "Uruguay",
      Iso3: "URY",
      Unicode: "🇺🇾",
      Dial: "598",
      Currency: "UYU",
      Capital: "Montevideo",
      Continent: "SA",
    },
    {
      Iso2: "YT",
      Name: "Mayotte",
      Iso3: "MYT",
      Unicode: "🇾🇹",
      Dial: "262",
      Currency: "EUR",
      Capital: "Mamoudzou",
      Continent: "AF",
    },
    {
      Iso2: "UM",
      Name: "United States Minor Outlying Islands",
      Iso3: "UMI",
      Unicode: "🇺🇲",
      Dial: "1",
      Currency: "USD",
      Capital: "",
      Continent: "OC",
    },
    {
      Iso2: "LB",
      Name: "Lebanon",
      Iso3: "LBN",
      Unicode: "🇱🇧",
      Dial: "961",
      Currency: "LBP",
      Capital: "Beirut",
      Continent: "AS",
    },
    {
      Iso2: "LC",
      Name: "Saint Lucia",
      Iso3: "LCA",
      Unicode: "🇱🇨",
      Dial: "1758",
      Currency: "XCD",
      Capital: "Castries",
      Continent: "NA",
    },
    {
      Iso2: "LA",
      Name: "Laos",
      Iso3: "LAO",
      Unicode: "🇱🇦",
      Dial: "856",
      Currency: "LAK",
      Capital: "Vientiane",
      Continent: "AS",
    },
    {
      Iso2: "TV",
      Name: "Tuvalu",
      Iso3: "TUV",
      Unicode: "🇹🇻",
      Dial: "688",
      Currency: "AUD",
      Capital: "Funafuti",
      Continent: "OC",
    },
    {
      Iso2: "TW",
      Name: "Taiwan",
      Iso3: "TWN",
      Unicode: "🇹🇼",
      Dial: "886",
      Currency: "TWD",
      Capital: "Taipei",
      Continent: "AS",
    },
    {
      Iso2: "TT",
      Name: "Trinidad and Tobago",
      Iso3: "TTO",
      Unicode: "🇹🇹",
      Dial: "1868",
      Currency: "TTD",
      Capital: "Port of Spain",
      Continent: "NA",
    },
    {
      Iso2: "TR",
      Name: "Turkey",
      Iso3: "TUR",
      Unicode: "🇹🇷",
      Dial: "90",
      Currency: "TRY",
      Capital: "Ankara",
      Continent: "AS",
    },
    {
      Iso2: "LK",
      Name: "Sri Lanka",
      Iso3: "LKA",
      Unicode: "🇱🇰",
      Dial: "94",
      Currency: "LKR",
      Capital: "Colombo",
      Continent: "AS",
    },
    {
      Iso2: "LI",
      Name: "Liechtenstein",
      Iso3: "LIE",
      Unicode: "🇱🇮",
      Dial: "423",
      Currency: "CHF",
      Capital: "Vaduz",
      Continent: "EU",
    },
    {
      Iso2: "LV",
      Name: "Latvia",
      Iso3: "LVA",
      Unicode: "🇱🇻",
      Dial: "371",
      Currency: "EUR",
      Capital: "Riga",
      Continent: "EU",
    },
    {
      Iso2: "TO",
      Name: "Tonga",
      Iso3: "TON",
      Unicode: "🇹🇴",
      Dial: "676",
      Currency: "TOP",
      Capital: "Nuku'alofa",
      Continent: "OC",
    },
    {
      Iso2: "LT",
      Name: "Lithuania",
      Iso3: "LTU",
      Unicode: "🇱🇹",
      Dial: "370",
      Currency: "LTL",
      Capital: "Vilnius",
      Continent: "EU",
    },
    {
      Iso2: "LU",
      Name: "Luxembourg",
      Iso3: "LUX",
      Unicode: "🇱🇺",
      Dial: "352",
      Currency: "EUR",
      Capital: "Luxembourg",
      Continent: "EU",
    },
    {
      Iso2: "LR",
      Name: "Liberia",
      Iso3: "LBR",
      Unicode: "🇱🇷",
      Dial: "231",
      Currency: "LRD",
      Capital: "Monrovia",
      Continent: "AF",
    },
    {
      Iso2: "LS",
      Name: "Lesotho",
      Iso3: "LSO",
      Unicode: "🇱🇸",
      Dial: "266",
      Currency: "LSL",
      Capital: "Maseru",
      Continent: "AF",
    },
    {
      Iso2: "TH",
      Name: "Thailand",
      Iso3: "THA",
      Unicode: "🇹🇭",
      Dial: "66",
      Currency: "THB",
      Capital: "Bangkok",
      Continent: "AS",
    },
    {
      Iso2: "TG",
      Name: "Togo",
      Iso3: "TGO",
      Unicode: "🇹🇬",
      Dial: "228",
      Currency: "XOF",
      Capital: "Lome",
      Continent: "AF",
    },
    {
      Iso2: "TD",
      Name: "Chad",
      Iso3: "TCD",
      Unicode: "🇹🇩",
      Dial: "235",
      Currency: "XAF",
      Capital: "N'Djamena",
      Continent: "AF",
    },
    {
      Iso2: "TC",
      Name: "Turks and Caicos Islands",
      Iso3: "TCA",
      Unicode: "🇹🇨",
      Dial: "1649",
      Currency: "USD",
      Capital: "Cockburn Town",
      Continent: "NA",
    },
    {
      Iso2: "LY",
      Name: "Libya",
      Iso3: "LBY",
      Unicode: "🇱🇾",
      Dial: "218",
      Currency: "LYD",
      Capital: "Tripolis",
      Continent: "AF",
    },
    {
      Iso2: "VA",
      Name: "Vatican",
      Iso3: "VAT",
      Unicode: "🇻🇦",
      Dial: "379",
      Currency: "EUR",
      Capital: "Vatican City",
      Continent: "EU",
    },
    {
      Iso2: "VC",
      Name: "Saint Vincent and the Grenadines",
      Iso3: "VCT",
      Unicode: "🇻🇨",
      Dial: "1784",
      Currency: "XCD",
      Capital: "Kingstown",
      Continent: "NA",
    },
    {
      Iso2: "AE",
      Name: "United Arab Emirates",
      Iso3: "ARE",
      Unicode: "🇦🇪",
      Dial: "971",
      Currency: "AED",
      Capital: "Abu Dhabi",
      Continent: "AS",
    },
    {
      Iso2: "AD",
      Name: "Andorra",
      Iso3: "AND",
      Unicode: "🇦🇩",
      Dial: "376",
      Currency: "EUR",
      Capital: "Andorra la Vella",
      Continent: "EU",
    },
    {
      Iso2: "AG",
      Name: "Antigua and Barbuda",
      Iso3: "ATG",
      Unicode: "🇦🇬",
      Dial: "1268",
      Currency: "XCD",
      Capital: "St. John's",
      Continent: "NA",
    },
    {
      Iso2: "AF",
      Name: "Afghanistan",
      Iso3: "AFG",
      Unicode: "🇦🇫",
      Dial: "93",
      Currency: "AFN",
      Capital: "Kabul",
      Continent: "AS",
    },
    {
      Iso2: "AI",
      Name: "Anguilla",
      Iso3: "AIA",
      Unicode: "🇦🇮",
      Dial: "1264",
      Currency: "XCD",
      Capital: "The Valley",
      Continent: "NA",
    },
    {
      Iso2: "VI",
      Name: "U.S. Virgin Islands",
      Iso3: "VIR",
      Unicode: "🇻🇮",
      Dial: "1340",
      Currency: "USD",
      Capital: "Charlotte Amalie",
      Continent: "NA",
    },
    {
      Iso2: "IS",
      Name: "Iceland",
      Iso3: "ISL",
      Unicode: "🇮🇸",
      Dial: "354",
      Currency: "ISK",
      Capital: "Reykjavik",
      Continent: "EU",
    },
    {
      Iso2: "IR",
      Name: "Iran",
      Iso3: "IRN",
      Unicode: "🇮🇷",
      Dial: "98",
      Currency: "IRR",
      Capital: "Tehran",
      Continent: "AS",
    },
    {
      Iso2: "AM",
      Name: "Armenia",
      Iso3: "ARM",
      Unicode: "🇦🇲",
      Dial: "374",
      Currency: "AMD",
      Capital: "Yerevan",
      Continent: "AS",
    },
    {
      Iso2: "AL",
      Name: "Albania",
      Iso3: "ALB",
      Unicode: "🇦🇱",
      Dial: "355",
      Currency: "ALL",
      Capital: "Tirana",
      Continent: "EU",
    },
    {
      Iso2: "AO",
      Name: "Angola",
      Iso3: "AGO",
      Unicode: "🇦🇴",
      Dial: "244",
      Currency: "AOA",
      Capital: "Luanda",
      Continent: "AF",
    },
    {
      Iso2: "AS",
      Name: "American Samoa",
      Iso3: "ASM",
      Unicode: "🇦🇸",
      Dial: "1684",
      Currency: "USD",
      Capital: "Pago Pago",
      Continent: "OC",
    },
    {
      Iso2: "AR",
      Name: "Argentina",
      Iso3: "ARG",
      Unicode: "🇦🇷",
      Dial: "54",
      Currency: "ARS",
      Capital: "Buenos Aires",
      Continent: "SA",
    },
    {
      Iso2: "AU",
      Name: "Australia",
      Iso3: "AUS",
      Unicode: "🇦🇺",
      Dial: "61",
      Currency: "AUD",
      Capital: "Canberra",
      Continent: "OC",
    },
    {
      Iso2: "AT",
      Name: "Austria",
      Iso3: "AUT",
      Unicode: "🇦🇹",
      Dial: "43",
      Currency: "EUR",
      Capital: "Vienna",
      Continent: "EU",
    },
    {
      Iso2: "AW",
      Name: "Aruba",
      Iso3: "ABW",
      Unicode: "🇦🇼",
      Dial: "297",
      Currency: "AWG",
      Capital: "Oranjestad",
      Continent: "NA",
    },
    {
      Iso2: "IN",
      Name: "India",
      Iso3: "IND",
      Unicode: "🇮🇳",
      Dial: "91",
      Currency: "INR",
      Capital: "New Delhi",
      Continent: "AS",
    },
    {
      Iso2: "AX",
      Name: "Aland Islands",
      Iso3: "ALA",
      Unicode: "🇦🇽",
      Dial: "35818",
      Currency: "EUR",
      Capital: "Mariehamn",
      Continent: "EU",
    },
    {
      Iso2: "AZ",
      Name: "Azerbaijan",
      Iso3: "AZE",
      Unicode: "🇦🇿",
      Dial: "994",
      Currency: "AZN",
      Capital: "Baku",
      Continent: "AS",
    },
    {
      Iso2: "IE",
      Name: "Ireland",
      Iso3: "IRL",
      Unicode: "🇮🇪",
      Dial: "353",
      Currency: "EUR",
      Capital: "Dublin",
      Continent: "EU",
    },
    {
      Iso2: "ID",
      Name: "Indonesia",
      Iso3: "IDN",
      Unicode: "🇮🇩",
      Dial: "62",
      Currency: "IDR",
      Capital: "Jakarta",
      Continent: "AS",
    },
    {
      Iso2: "UA",
      Name: "Ukraine",
      Iso3: "UKR",
      Unicode: "🇺🇦",
      Dial: "380",
      Currency: "UAH",
      Capital: "Kiev",
      Continent: "EU",
    },
    {
      Iso2: "QA",
      Name: "Qatar",
      Iso3: "QAT",
      Unicode: "🇶🇦",
      Dial: "974",
      Currency: "QAR",
      Capital: "Doha",
      Continent: "AS",
    },
    {
      Iso2: "MZ",
      Name: "Mozambique",
      Iso3: "MOZ",
      Unicode: "🇲🇿",
      Dial: "258",
      Currency: "MZN",
      Capital: "Maputo",
      Continent: "AF",
    },
  ];
  function Xe(e, t, n) {
    const i = e.slice();
    return (i[22] = t[n]), i;
  }
  function Je(e, t, n) {
    const i = e.slice();
    return (i[22] = t[n]), i;
  }
  function Qe(e) {
    let t,
      n,
      i,
      o,
      r,
      s,
      l,
      c,
      u = Ye,
      d = [];
    for (let t = 0; t < u.length; t += 1) d[t] = tt(Xe(e, u, t));
    return {
      c() {
        (t = k("div")), (n = k("select"));
        for (let e = 0; e < d.length; e += 1) d[e].c();
        (i = T()),
          (o = k("div")),
          (r = k("input")),
          q(n, "class", "gcohtech-o8wzxq"),
          void 0 === e[4] && ie(() => e[17].call(n)),
          q(t, "class", "chat-with-telfield gcohtech-o8wzxq"),
          z(t, "flex", "1"),
          q(r, "type", "tel"),
          z(r, "border", "1px solid " + (e[3] ? "#ff8076" : "#ccc")),
          q(
            r,
            "placeholder",
            (s = e[2]
              ? e[2]
              : e[0].transYourPhone
              ? e[0].transYourPhone
              : "Your phone number")
          ),
          q(r, "class", "gcohtech-o8wzxq"),
          q(o, "class", "chat-with-telfield gcohtech-o8wzxq"),
          z(o, "flex", "2");
      },
      m(a, s) {
        b(a, t, s), w(t, n);
        for (let e = 0; e < d.length; e += 1) d[e].m(n, null);
        A(n, e[4]),
          b(a, i, s),
          b(a, o, s),
          w(o, r),
          U(r, e[5]),
          l ||
            ((c = [
              S(n, "change", e[17]),
              S(r, "input", e[18]),
              S(r, "keyup", e[19]),
              S(r, "keypress", e[9]),
            ]),
            (l = !0));
      },
      p(e, t) {
        if (0 & t) {
          let i;
          for (u = Ye, i = 0; i < u.length; i += 1) {
            const o = Xe(e, u, i);
            d[i] ? d[i].p(o, t) : ((d[i] = tt(o)), d[i].c(), d[i].m(n, null));
          }
          for (; i < d.length; i += 1) d[i].d(1);
          d.length = u.length;
        }
        16 & t && A(n, e[4]),
          8 & t && z(r, "border", "1px solid " + (e[3] ? "#ff8076" : "#ccc")),
          5 & t &&
            s !==
              (s = e[2]
                ? e[2]
                : e[0].transYourPhone
                ? e[0].transYourPhone
                : "Your phone number") &&
            q(r, "placeholder", s),
          32 & t && U(r, e[5]);
      },
      d(e) {
        e && y(t), x(d, e), e && y(i), e && y(o), (l = !1), a(c);
      },
    };
  }
  function et(e) {
    let t,
      n,
      i,
      o,
      r,
      s,
      l,
      c,
      u,
      d,
      p,
      h = Ye,
      f = [];
    for (let t = 0; t < h.length; t += 1) f[t] = nt(Je(e, h, t));
    return {
      c() {
        (t = k("div")), (n = k("select"));
        for (let e = 0; e < f.length; e += 1) f[e].c();
        (i = T()),
          (o = k("div")),
          (r = k("input")),
          (l = T()),
          (c = k("div")),
          (u = k("button")),
          (u.innerHTML =
            '<svg style="width: 18px;" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="gcohtech-o8wzxq"><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" class="gcohtech-o8wzxq"></path></svg>'),
          q(n, "class", "gcohtech-o8wzxq"),
          void 0 === e[4] && ie(() => e[13].call(n)),
          q(t, "class", "chat-with-telfield gcohtech-o8wzxq"),
          z(t, "flex", "1 1 35%"),
          q(r, "type", "tel"),
          q(r, "class", "show-button gcohtech-o8wzxq"),
          z(r, "border", "1px solid #ccc"),
          q(
            r,
            "placeholder",
            (s = e[2]
              ? e[2]
              : e[0].transYourPhone
              ? e[0].transYourPhone
              : "Your phone number")
          ),
          q(o, "class", "chat-with-telfield gcohtech-o8wzxq"),
          z(o, "flex", "2 1 45%"),
          q(u, "class", "whatapp-button half gcohtech-o8wzxq"),
          q(c, "class", "chat-with-telfield gcohtech-o8wzxq"),
          z(c, "flex", "3 1 20%");
      },
      m(a, s) {
        b(a, t, s), w(t, n);
        for (let e = 0; e < f.length; e += 1) f[e].m(n, null);
        A(n, e[4]),
          b(a, i, s),
          b(a, o, s),
          w(o, r),
          U(r, e[5]),
          b(a, l, s),
          b(a, c, s),
          w(c, u),
          d ||
            ((p = [
              S(n, "change", e[13]),
              S(r, "input", e[14]),
              S(r, "keyup", e[15]),
              S(r, "keypress", e[9]),
              S(u, "click", e[16]),
            ]),
            (d = !0));
      },
      p(e, t) {
        if (0 & t) {
          let i;
          for (h = Ye, i = 0; i < h.length; i += 1) {
            const o = Je(e, h, i);
            f[i] ? f[i].p(o, t) : ((f[i] = nt(o)), f[i].c(), f[i].m(n, null));
          }
          for (; i < f.length; i += 1) f[i].d(1);
          f.length = h.length;
        }
        16 & t && A(n, e[4]),
          5 & t &&
            s !==
              (s = e[2]
                ? e[2]
                : e[0].transYourPhone
                ? e[0].transYourPhone
                : "Your phone number") &&
            q(r, "placeholder", s),
          32 & t && U(r, e[5]);
      },
      d(e) {
        e && y(t),
          x(f, e),
          e && y(i),
          e && y(o),
          e && y(l),
          e && y(c),
          (d = !1),
          a(p);
      },
    };
  }
  function tt(t) {
    let n,
      i,
      o,
      a,
      r = t[22].Unicode + "",
      s = t[22].Dial + "";
    return {
      c() {
        (n = k("option")),
          (i = $(r)),
          (o = $(" +")),
          (a = $(s)),
          (n.__value = t[22].Dial),
          (n.value = n.__value),
          q(n, "class", "gcohtech-o8wzxq");
      },
      m(e, t) {
        b(e, n, t), w(n, i), w(n, o), w(n, a);
      },
      p: e,
      d(e) {
        e && y(n);
      },
    };
  }
  function nt(t) {
    let n,
      i,
      o,
      a,
      r = t[22].Unicode + "",
      s = t[22].Dial + "";
    return {
      c() {
        (n = k("option")),
          (i = $(r)),
          (o = $(" +")),
          (a = $(s)),
          (n.__value = t[22].Dial),
          (n.value = n.__value),
          q(n, "class", "gcohtech-o8wzxq");
      },
      m(e, t) {
        b(e, n, t), w(n, i), w(n, o), w(n, a);
      },
      p: e,
      d(e) {
        e && y(n);
      },
    };
  }
  function it(t) {
    let n, i;
    function o(e, t) {
      return !0 === e[1] ? et : Qe;
    }
    let a = o(t),
      r = a(t);
    return {
      c() {
        (n = k("div")),
          r.c(),
          q(n, "class", (i = d(t[10].class) + " gcohtech-o8wzxq")),
          z(n, "display", "flex"),
          B(n, "roundedTheme", t[6]),
          B(n, "bubbleTheme", t[7]);
      },
      m(e, t) {
        b(e, n, t), r.m(n, null);
      },
      p(e, [t]) {
        a === (a = o(e)) && r
          ? r.p(e, t)
          : (r.d(1), (r = a(e)), r && (r.c(), r.m(n, null))),
          1024 & t &&
            i !== (i = d(e[10].class) + " gcohtech-o8wzxq") &&
            q(n, "class", i),
          1088 & t && B(n, "roundedTheme", e[6]),
          1152 & t && B(n, "bubbleTheme", e[7]);
      },
      i: e,
      o: e,
      d(e) {
        e && y(n), r.d();
      },
    };
  }
  function ot(e, t, i) {
    let o, a, r;
    const s = K();
    let { data: l } = t,
      { showButton: c } = t,
      { value: d = "" } = t,
      { telNum: p = "" } = t,
      { placeholder: h = "" } = t,
      { isError: f } = t,
      m = l.dialingCode;
    function v(e) {
      i(11, (d = m + o)),
        i(12, (p = o.replace(/\s/g, ""))),
        s("Enter" === e ? "submit" : "message", { code: m, num: o });
    }
    Ye.sort((e, t) => e.Dial.localeCompare(t.Dial));
    return (
      (e.$$set = (e) => {
        i(10, (t = n(n({}, t), u(e)))),
          "data" in e && i(0, (l = e.data)),
          "showButton" in e && i(1, (c = e.showButton)),
          "value" in e && i(11, (d = e.value)),
          "telNum" in e && i(12, (p = e.telNum)),
          "placeholder" in e && i(2, (h = e.placeholder)),
          "isError" in e && i(3, (f = e.isError));
      }),
      (e.$$.update = () => {
        1 & e.$$.dirty &&
          i(
            6,
            (a =
              "roundedTheme" === l.widgetTheme ||
              "bubbleTheme" === l.widgetTheme)
          ),
          3 & e.$$.dirty && i(7, (r = "bubbleTheme" === l.widgetTheme && c));
      }),
      i(5, (o = "")),
      (t = u(t)),
      [
        l,
        c,
        h,
        f,
        m,
        o,
        a,
        r,
        v,
        () => {
          "Enter" == event.code && event.preventDefault();
        },
        t,
        d,
        p,
        function () {
          (m = E(this)), i(4, m);
        },
        function () {
          (o = this.value), i(5, o);
        },
        (e) => v(e.key),
        () => v("Enter"),
        function () {
          (m = E(this)), i(4, m);
        },
        function () {
          (o = this.value), i(5, o);
        },
        (e) => v(e.key),
      ]
    );
  }
  class at extends qe {
    constructor(e) {
      var t;
      super(),
        document.getElementById("gcohtech-o8wzxq-style") ||
          (((t = k("style")).id = "gcohtech-o8wzxq-style"),
          (t.textContent =
            ".chat-with-telfield.gcohtech-o8wzxq input.gcohtech-o8wzxq,.chat-with-telfield.gcohtech-o8wzxq select.gcohtech-o8wzxq{height:45px;margin-bottom:0;font-weight:0;font-weight:normal;font-family:'Inter';font-size:14px;display:block;border-radius:5px;display:block;width:100%;max-width:280px;box-sizing:border-box;border:1px solid #ccc;background:#fff!important;min-height:45px;padding:4px}.chat-with-telfield.gcohtech-o8wzxq input.gcohtech-o8wzxq{font-size:16px}.whatapp-button.gcohtech-o8wzxq.gcohtech-o8wzxq{background:rgb(39, 217, 116);color:white;border:none;height:100%;display:inline-block;border-radius:5px;width:100%}.gcohtech-o8wzxq.gcohtech-o8wzxq::-webkit-input-placeholder{color:#c2bdbd!important;font-style:normal}.gcohtech-o8wzxq.gcohtech-o8wzxq::-moz-placeholder{color:#c2bdbd!important;font-style:normal}.gcohtech-o8wzxq.gcohtech-o8wzxq:-ms-input-placeholder{color:#c2bdbd!important;font-style:normal}.gcohtech-o8wzxq.gcohtech-o8wzxq:-moz-placeholder{color:#c2bdbd!important;font-style:normal}.roundedTheme.gcohtech-o8wzxq .whatapp-button.gcohtech-o8wzxq{border-top-left-radius:0px;border-bottom-left-radius:0px;border-top-right-radius:40px;border-bottom-right-radius:40px}.roundedTheme.gcohtech-o8wzxq .chat-with-telfield input.gcohtech-o8wzxq{border-top-left-radius:0px;border-bottom-left-radius:0px;border-top-right-radius:40px;border-bottom-right-radius:40px}.roundedTheme.gcohtech-o8wzxq .chat-with-telfield .show-button.gcohtech-o8wzxq{border-radius:0px}.roundedTheme.gcohtech-o8wzxq .chat-with-telfield select.gcohtech-o8wzxq{border-top-left-radius:40px;border-bottom-left-radius:40px;border-top-right-radius:0px;border-bottom-right-radius:0px}.bubbleTheme.gcohtech-o8wzxq .whatapp-button.gcohtech-o8wzxq,.bubbleTheme.gcohtech-o8wzxq .chat-with-telfield .show-button.gcohtech-o8wzxq,.bubbleTheme.gcohtech-o8wzxq .chat-with-telfield input.gcohtech-o8wzxq,.bubbleTheme.gcohtech-o8wzxq .chat-with-telfield select.gcohtech-o8wzxq{border-radius:0px}"),
          w(document.head, t)),
        Ne(this, e, ot, it, s, {
          data: 0,
          showButton: 1,
          value: 11,
          telNum: 12,
          placeholder: 2,
          isError: 3,
        });
    }
  }
  let rt = !1;
  const st = "chatwith_storage";
  let lt = { calls: [] };
  const ct = (e, t = "calls") => {
      if (!1 === rt) return !1;
      const n = e ? dt(e, ut()) : "";
      return n && !0 === n.hasOwnProperty("payload") ? n.payload : null;
    },
    ut = () => {
      const e = localStorage.getItem(st);
      return null === e ? lt : JSON.parse(e);
    },
    dt = (e, t, n = "calls") => t[n].find((t) => e == t.id),
    pt = (e, t, n, i = "calls") => {
      if (dt(e, n, "calls")) {
        const t = n[i].findIndex((t) => t.id == e);
        t > -1 && n[i].splice(t, 1);
      }
      n[i].push({ id: e, payload: t }),
        localStorage.setItem(st, JSON.stringify(n));
    },
    ht = () => {
      if (rt) {
        if (localStorage.getItem("tochatuser")) return !0;
        if (localStorage.getItem(st)) return !0;
      }
      return !1;
    };
  function ft(e, t, n) {
    const i = e.slice();
    return (i[33] = t[n]), i;
  }
  function mt(e, t, n) {
    const i = e.slice();
    return (i[33] = t[n]), (i[36] = t), (i[37] = n), i;
  }
  function vt(e, t, n) {
    const i = e.slice();
    return (i[2] = t[n]), i;
  }
  function gt(t) {
    let n, i, o;
    return {
      c() {
        (n = k("div")),
          (n.innerHTML =
            '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" class="svg-inline--fa fa-times fa-w-11 gcohtech-rpi3le" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path fill="black" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" class="gcohtech-rpi3le"></path></svg>'),
          q(n, "class", "close-modal gcohtech-rpi3le");
      },
      m(e, a) {
        b(e, n, a), i || ((o = S(n, "click", t[9])), (i = !0));
      },
      p: e,
      d(e) {
        e && y(n), (i = !1), o();
      },
    };
  }
  function wt(e) {
    let t,
      n,
      i = e[0].info + "";
    return {
      c() {
        (t = k("div")), (n = $(i)), q(t, "class", "textito gcohtech-rpi3le");
      },
      m(e, i) {
        b(e, t, i), w(t, n);
      },
      p(e, t) {
        1 & t[0] && i !== (i = e[0].info + "") && M(n, i);
      },
      d(e) {
        e && y(t);
      },
    };
  }
  function bt(t) {
    let n, i, o, r, s, l;
    function c() {
      t[24].call(i, t[36], t[37]);
    }
    return {
      c() {
        (n = k("div")),
          (i = k("input")),
          q(i, "type", "email"),
          q(i, "style", (o = t[33].isError ? Et : "")),
          q(i, "placeholder", (r = t[33].label)),
          q(i, "class", "gcohtech-rpi3le"),
          q(n, "class", "form-element gcohtech-rpi3le");
      },
      m(e, o) {
        b(e, n, o),
          w(n, i),
          U(i, t[33].val),
          s || ((l = [S(i, "input", c), S(i, "keypress", t[13])]), (s = !0));
      },
      p(e, n) {
        (t = e),
          257 & n[0] && o !== (o = t[33].isError ? Et : "") && q(i, "style", o),
          257 & n[0] && r !== (r = t[33].label) && q(i, "placeholder", r),
          257 & n[0] && i.value !== t[33].val && U(i, t[33].val);
      },
      i: e,
      o: e,
      d(e) {
        e && y(n), (s = !1), a(l);
      },
    };
  }
  function yt(e) {
    let t, n, i, o, a;
    function r(t) {
      e[22].call(null, t, e[33]);
    }
    function s(t) {
      e[23].call(null, t, e[33]);
    }
    let l = { data: e[2], placeholder: e[33].label, isError: e[33].isError };
    return (
      void 0 !== e[33].val && (l.value = e[33].val),
      void 0 !== e[33].telNum && (l.telNum = e[33].telNum),
      (n = new at({ props: l })),
      X.push(() => $e(n, "value", r)),
      X.push(() => $e(n, "telNum", s)),
      {
        c() {
          (t = k("div")),
            Te(n.$$.fragment),
            q(t, "class", "form-element gcohtech-rpi3le");
        },
        m(e, i) {
          b(e, t, i), Ie(n, t, null), (a = !0);
        },
        p(t, a) {
          e = t;
          const r = {};
          4 & a[0] && (r.data = e[2]),
            1 & a[0] && (r.placeholder = e[33].label),
            1 & a[0] && (r.isError = e[33].isError),
            !i &&
              1 & a[0] &&
              ((i = !0), (r.value = e[33].val), oe(() => (i = !1))),
            !o &&
              1 & a[0] &&
              ((o = !0), (r.telNum = e[33].telNum), oe(() => (o = !1))),
            n.$set(r);
        },
        i(e) {
          a || (ve(n.$$.fragment, e), (a = !0));
        },
        o(e) {
          ge(n.$$.fragment, e), (a = !1);
        },
        d(e) {
          e && y(t), Se(n);
        },
      }
    );
  }
  function xt(t) {
    let n,
      i,
      o,
      a,
      r,
      s,
      l,
      c,
      u,
      d = t[33].label + "";
    function p() {
      t[21].call(a, t[36], t[37]);
    }
    return {
      c() {
        (n = k("div")),
          (i = k("div")),
          (o = k("label")),
          (a = k("input")),
          (r = T()),
          (s = k("p")),
          (l = $(d)),
          (a.__value = !1),
          (a.value = a.__value),
          q(a, "type", "checkbox"),
          q(a, "class", "gcohtech-rpi3le"),
          q(s, "class", "gcohtech-rpi3le"),
          q(o, "class", "gcohtech-rpi3le"),
          q(i, "class", "gcohtech-rpi3le"),
          q(n, "class", "form-element gcohtech-rpi3le");
      },
      m(e, d) {
        b(e, n, d),
          w(n, i),
          w(i, o),
          w(o, a),
          (a.checked = t[33].val),
          w(o, r),
          w(o, s),
          w(s, l),
          c || ((u = S(a, "change", p)), (c = !0));
      },
      p(e, n) {
        (t = e),
          257 & n[0] && (a.checked = t[33].val),
          1 & n[0] && d !== (d = t[33].label + "") && M(l, d);
      },
      i: e,
      o: e,
      d(e) {
        e && y(n), (c = !1), u();
      },
    };
  }
  function kt(t) {
    let n,
      i,
      o,
      a,
      r,
      s,
      l,
      c,
      u,
      d,
      p = t[33].label + "",
      h = t[8](t[33].data),
      f = [];
    for (let e = 0; e < h.length; e += 1) f[e] = Nt(vt(t, h, e));
    function m() {
      t[20].call(o, t[36], t[37]);
    }
    return {
      c() {
        (n = k("div")),
          (i = k("div")),
          (o = k("select")),
          (a = k("option")),
          (r = $("--")),
          (s = $(p)),
          (l = $("--"));
        for (let e = 0; e < f.length; e += 1) f[e].c();
        (a.__value = ""),
          (a.value = a.__value),
          q(a, "class", "gcohtech-rpi3le"),
          q(o, "style", (c = t[33].isError ? Et : "")),
          q(o, "class", "gcohtech-rpi3le"),
          void 0 === t[33].val && ie(m),
          q(i, "class", "select gcohtech-rpi3le"),
          q(n, "class", "form-element gcohtech-rpi3le");
      },
      m(e, c) {
        b(e, n, c), w(n, i), w(i, o), w(o, a), w(a, r), w(a, s), w(a, l);
        for (let e = 0; e < f.length; e += 1) f[e].m(o, null);
        A(o, t[33].val), u || ((d = S(o, "change", m)), (u = !0));
      },
      p(e, n) {
        if (
          ((t = e),
          1 & n[0] && p !== (p = t[33].label + "") && M(s, p),
          257 & n[0])
        ) {
          let e;
          for (h = t[8](t[33].data), e = 0; e < h.length; e += 1) {
            const i = vt(t, h, e);
            f[e] ? f[e].p(i, n) : ((f[e] = Nt(i)), f[e].c(), f[e].m(o, null));
          }
          for (; e < f.length; e += 1) f[e].d(1);
          f.length = h.length;
        }
        257 & n[0] && c !== (c = t[33].isError ? Et : "") && q(o, "style", c),
          257 & n[0] && A(o, t[33].val);
      },
      i: e,
      o: e,
      d(e) {
        e && y(n), x(f, e), (u = !1), d();
      },
    };
  }
  function Ct(t) {
    let n, i, o, r, s, l;
    function c() {
      t[19].call(i, t[36], t[37]);
    }
    return {
      c() {
        (n = k("div")),
          (i = k("input")),
          q(i, "class", "form-element-input gcohtech-rpi3le"),
          q(i, "type", "text"),
          q(i, "style", (o = t[33].isError ? Et : "")),
          q(i, "onfocus", "(this.type='time')"),
          q(i, "placeholder", (r = t[33].label)),
          q(n, "class", "form-element gcohtech-rpi3le");
      },
      m(e, o) {
        b(e, n, o),
          w(n, i),
          U(i, t[33].val),
          s || ((l = [S(i, "input", c), S(i, "keypress", t[13])]), (s = !0));
      },
      p(e, n) {
        (t = e),
          257 & n[0] && o !== (o = t[33].isError ? Et : "") && q(i, "style", o),
          257 & n[0] && r !== (r = t[33].label) && q(i, "placeholder", r),
          257 & n[0] && i.value !== t[33].val && U(i, t[33].val);
      },
      i: e,
      o: e,
      d(e) {
        e && y(n), (s = !1), a(l);
      },
    };
  }
  function $t(t) {
    let n, i, o, r, s, l;
    function c() {
      t[18].call(i, t[36], t[37]);
    }
    return {
      c() {
        (n = k("div")),
          (i = k("input")),
          q(i, "class", "form-element-input gcohtech-rpi3le"),
          q(i, "type", "text"),
          q(i, "style", (o = t[33].isError ? Et : "")),
          q(i, "onfocus", "(this.type='date')"),
          q(i, "placeholder", (r = t[33].label)),
          q(n, "class", "form-element gcohtech-rpi3le");
      },
      m(e, o) {
        b(e, n, o),
          w(n, i),
          U(i, t[33].val),
          s || ((l = [S(i, "input", c), S(i, "keypress", t[13])]), (s = !0));
      },
      p(e, n) {
        (t = e),
          257 & n[0] && o !== (o = t[33].isError ? Et : "") && q(i, "style", o),
          257 & n[0] && r !== (r = t[33].label) && q(i, "placeholder", r),
          257 & n[0] && i.value !== t[33].val && U(i, t[33].val);
      },
      i: e,
      o: e,
      d(e) {
        e && y(n), (s = !1), a(l);
      },
    };
  }
  function Tt(t) {
    let n, i, o, r, s, l;
    function c() {
      t[17].call(i, t[36], t[37]);
    }
    return {
      c() {
        (n = k("div")),
          (i = k("input")),
          q(i, "type", "url"),
          q(i, "style", (o = t[33].isError ? Et : "")),
          q(i, "placeholder", (r = t[33].label)),
          q(i, "class", "gcohtech-rpi3le"),
          q(n, "class", "form-element gcohtech-rpi3le");
      },
      m(e, o) {
        b(e, n, o),
          w(n, i),
          U(i, t[33].val),
          s || ((l = [S(i, "input", c), S(i, "keypress", t[13])]), (s = !0));
      },
      p(e, n) {
        (t = e),
          257 & n[0] && o !== (o = t[33].isError ? Et : "") && q(i, "style", o),
          257 & n[0] && r !== (r = t[33].label) && q(i, "placeholder", r),
          257 & n[0] && U(i, t[33].val);
      },
      i: e,
      o: e,
      d(e) {
        e && y(n), (s = !1), a(l);
      },
    };
  }
  function It(t) {
    let n, i, o, r, s, l;
    function c() {
      t[16].call(i, t[36], t[37]);
    }
    return {
      c() {
        (n = k("div")),
          (i = k("input")),
          q(i, "type", "number"),
          q(i, "style", (o = t[33].isError ? Et : "")),
          q(i, "placeholder", (r = t[33].label)),
          q(i, "class", "gcohtech-rpi3le"),
          q(n, "class", "form-element gcohtech-rpi3le");
      },
      m(e, o) {
        b(e, n, o),
          w(n, i),
          U(i, t[33].val),
          s || ((l = [S(i, "input", c), S(i, "keypress", t[13])]), (s = !0));
      },
      p(e, n) {
        (t = e),
          257 & n[0] && o !== (o = t[33].isError ? Et : "") && q(i, "style", o),
          257 & n[0] && r !== (r = t[33].label) && q(i, "placeholder", r),
          257 & n[0] && D(i.value) !== t[33].val && U(i, t[33].val);
      },
      i: e,
      o: e,
      d(e) {
        e && y(n), (s = !1), a(l);
      },
    };
  }
  function St(t) {
    let n, i, o, r, s, l;
    function c() {
      t[15].call(i, t[36], t[37]);
    }
    return {
      c() {
        (n = k("div")),
          (i = k("input")),
          q(i, "type", "text"),
          q(i, "style", (o = t[33].isError ? Et : "")),
          q(i, "placeholder", (r = t[33].label)),
          q(i, "class", "gcohtech-rpi3le"),
          q(n, "class", "form-element gcohtech-rpi3le");
      },
      m(e, o) {
        b(e, n, o),
          w(n, i),
          U(i, t[33].val),
          s || ((l = [S(i, "input", c), S(i, "keypress", t[13])]), (s = !0));
      },
      p(e, n) {
        (t = e),
          257 & n[0] && o !== (o = t[33].isError ? Et : "") && q(i, "style", o),
          257 & n[0] && r !== (r = t[33].label) && q(i, "placeholder", r),
          257 & n[0] && i.value !== t[33].val && U(i, t[33].val);
      },
      i: e,
      o: e,
      d(e) {
        e && y(n), (s = !1), a(l);
      },
    };
  }
  function Nt(e) {
    let t,
      n,
      i,
      o = e[2] + "";
    return {
      c() {
        (t = k("option")),
          (n = $(o)),
          (t.__value = i = e[2]),
          (t.value = t.__value),
          q(t, "class", "gcohtech-rpi3le");
      },
      m(e, i) {
        b(e, t, i), w(t, n);
      },
      p(e, a) {
        1 & a[0] && o !== (o = e[2] + "") && M(n, o),
          257 & a[0] &&
            i !== (i = e[2]) &&
            ((t.__value = i), (t.value = t.__value));
      },
      d(e) {
        e && y(t);
      },
    };
  }
  function qt(e) {
    let t,
      n,
      i,
      o,
      a = (e[33].legalUrlText ?? "Click here to see the Privacy Policy") + "";
    return {
      c() {
        (t = k("div")),
          (n = k("a")),
          (i = $(a)),
          q(n, "target", "_blank"),
          q(n, "href", (o = e[33].legalUrl)),
          q(n, "class", "gcohtech-rpi3le"),
          q(t, "class", "checkbox-link gcohtech-rpi3le");
      },
      m(e, o) {
        b(e, t, o), w(t, n), w(n, i);
      },
      p(e, t) {
        1 & t[0] &&
          a !==
            (a =
              (e[33].legalUrlText ?? "Click here to see the Privacy Policy") +
              "") &&
          M(i, a),
          257 & t[0] && o !== (o = e[33].legalUrl) && q(n, "href", o);
      },
      d(e) {
        e && y(t);
      },
    };
  }
  function Dt(e) {
    let t,
      n,
      i,
      o,
      a,
      r,
      s,
      l,
      c = e[37];
    const u = [St, It, Tt, $t, Ct, kt, xt, yt, bt],
      d = [];
    function p(e, t) {
      return "text" == e[33].type
        ? 0
        : "number" == e[33].type
        ? 1
        : "url" == e[33].type
        ? 2
        : "date" == e[33].type
        ? 3
        : "time" == e[33].type
        ? 4
        : "select" == e[33].type
        ? 5
        : "checkbox" == e[33].type
        ? 6
        : "tel" == e[33].type
        ? 7
        : "email" == e[33].type
        ? 8
        : -1;
    }
    function h(t) {
      e[25].call(null, t);
    }
    ~(t = p(e)) && (n = d[t] = u[t](e));
    const f = () => e[26](o, c),
      m = () => e[26](null, c);
    let v = { item: e[33], data: e[2], index: e[37] };
    void 0 !== e[3] && (v.value = e[3]),
      (o = new Ke({ props: v })),
      X.push(() => $e(o, "value", h)),
      f(),
      o.$on("error", function (...t) {
        return e[27](e[33], e[36], e[37], ...t);
      });
    let g = "checkbox" == e[33].type && e[33].legalUrl && qt(e);
    return {
      c() {
        n && n.c(),
          (i = T()),
          Te(o.$$.fragment),
          (r = T()),
          g && g.c(),
          (s = I());
      },
      m(e, n) {
        ~t && d[t].m(e, n),
          b(e, i, n),
          Ie(o, e, n),
          b(e, r, n),
          g && g.m(e, n),
          b(e, s, n),
          (l = !0);
      },
      p(r, l) {
        let h = t;
        (t = p((e = r))),
          t === h
            ? ~t && d[t].p(e, l)
            : (n &&
                (fe(),
                ge(d[h], 1, 1, () => {
                  d[h] = null;
                }),
                me()),
              ~t
                ? ((n = d[t]),
                  n ? n.p(e, l) : ((n = d[t] = u[t](e)), n.c()),
                  ve(n, 1),
                  n.m(i.parentNode, i))
                : (n = null)),
          c !== e[37] && (m(), (c = e[37]), f());
        const v = {};
        1 & l[0] && (v.item = e[33]),
          4 & l[0] && (v.data = e[2]),
          !a && 8 & l[0] && ((a = !0), (v.value = e[3]), oe(() => (a = !1))),
          o.$set(v),
          "checkbox" == e[33].type && e[33].legalUrl
            ? g
              ? g.p(e, l)
              : ((g = qt(e)), g.c(), g.m(s.parentNode, s))
            : g && (g.d(1), (g = null));
      },
      i(e) {
        l || (ve(n), ve(o.$$.fragment, e), (l = !0));
      },
      o(e) {
        ge(n), ge(o.$$.fragment, e), (l = !1);
      },
      d(e) {
        ~t && d[t].d(e),
          e && y(i),
          m(),
          Se(o, e),
          e && y(r),
          g && g.d(e),
          e && y(s);
      },
    };
  }
  function Mt(e) {
    let t,
      n,
      i,
      o,
      a,
      r,
      s,
      l,
      c,
      u,
      d = e[0].buttontext + "";
    return {
      c() {
        (t = k("div")),
          (n = k("span")),
          (i = $(d)),
          (a = T()),
          (r = k("img")),
          q(n, "style", (o = e[11](e[0].buttontext.length))),
          q(n, "class", "gcohtech-rpi3le"),
          q(r, "class", "chatwith-img gcohtech-rpi3le"),
          q(r, "style", (s = e[12](e[0].buttontext.length))),
          q(r, "alt", "tochat-whatsapp"),
          r.src !==
            (l =
              e[2].whatsappIconUrl ?? "https://widget.tochat.be/icon-1.png") &&
            q(r, "src", l),
          q(t, "class", "chatwith-button gcohtech-rpi3le"),
          z(t, "color", e[2].textColor),
          z(t, "background", e[2].color),
          z(t, "border-color", e[2].color);
      },
      m(o, s) {
        b(o, t, s),
          w(t, n),
          w(n, i),
          w(t, a),
          w(t, r),
          c || ((u = S(t, "click", e[29])), (c = !0));
      },
      p(e, a) {
        1 & a[0] && d !== (d = e[0].buttontext + "") && M(i, d),
          257 & a[0] &&
            o !== (o = e[11](e[0].buttontext.length)) &&
            q(n, "style", o),
          257 & a[0] &&
            s !== (s = e[12](e[0].buttontext.length)) &&
            q(r, "style", s),
          4 & a[0] &&
            r.src !==
              (l =
                e[2].whatsappIconUrl ??
                "https://widget.tochat.be/icon-1.png") &&
            q(r, "src", l),
          4 & a[0] && z(t, "color", e[2].textColor),
          4 & a[0] && z(t, "background", e[2].color),
          4 & a[0] && z(t, "border-color", e[2].color);
      },
      d(e) {
        e && y(t), (c = !1), u();
      },
    };
  }
  function Ut(e) {
    let t,
      n = e[0].buyLinks,
      i = [];
    for (let t = 0; t < n.length; t += 1) i[t] = zt(ft(e, n, t));
    return {
      c() {
        for (let e = 0; e < i.length; e += 1) i[e].c();
        t = I();
      },
      m(e, n) {
        for (let t = 0; t < i.length; t += 1) i[t].m(e, n);
        b(e, t, n);
      },
      p(e, o) {
        if (7173 & o[0]) {
          let a;
          for (n = e[0].buyLinks, a = 0; a < n.length; a += 1) {
            const r = ft(e, n, a);
            i[a]
              ? i[a].p(r, o)
              : ((i[a] = zt(r)), i[a].c(), i[a].m(t.parentNode, t));
          }
          for (; a < i.length; a += 1) i[a].d(1);
          i.length = n.length;
        }
      },
      d(e) {
        x(i, e), e && y(t);
      },
    };
  }
  function zt(e) {
    let t,
      n,
      i,
      o,
      a,
      r,
      s,
      l,
      c,
      u,
      d,
      p = e[33].buttontext + "";
    function h() {
      return e[28](e[33]);
    }
    return {
      c() {
        (t = k("div")),
          (n = k("span")),
          (i = $(p)),
          (a = T()),
          (r = k("img")),
          (c = T()),
          q(n, "style", (o = e[11](e[33].buttontext.length))),
          q(n, "class", "gcohtech-rpi3le"),
          q(r, "class", "chatwith-img gcohtech-rpi3le"),
          q(r, "style", (s = e[12](e[33].buttontext.length))),
          q(r, "alt", "tochat-whatsapp"),
          r.src !==
            (l =
              e[2].whatsappIconUrl ?? "https://widget.tochat.be/icon-1.png") &&
            q(r, "src", l),
          q(t, "class", "chatwith-button buyButton gcohtech-rpi3le"),
          z(t, "color", e[2].textColor),
          z(t, "background", e[2].color),
          z(t, "border-color", e[2].color);
      },
      m(e, o) {
        b(e, t, o),
          w(t, n),
          w(n, i),
          w(t, a),
          w(t, r),
          w(t, c),
          u || ((d = S(t, "click", h)), (u = !0));
      },
      p(a, c) {
        (e = a),
          1 & c[0] && p !== (p = e[33].buttontext + "") && M(i, p),
          257 & c[0] &&
            o !== (o = e[11](e[33].buttontext.length)) &&
            q(n, "style", o),
          257 & c[0] &&
            s !== (s = e[12](e[33].buttontext.length)) &&
            q(r, "style", s),
          4 & c[0] &&
            r.src !==
              (l =
                e[2].whatsappIconUrl ??
                "https://widget.tochat.be/icon-1.png") &&
            q(r, "src", l),
          4 & c[0] && z(t, "color", e[2].textColor),
          4 & c[0] && z(t, "background", e[2].color),
          4 & c[0] && z(t, "border-color", e[2].color);
      },
      d(e) {
        e && y(t), (u = !1), d();
      },
    };
  }
  function At(e) {
    let t,
      n,
      i,
      o,
      a,
      r,
      s,
      l = !0 !== e[1] && gt(e),
      c = "" != e[0].info && wt(e),
      u = e[0].items,
      d = [];
    for (let t = 0; t < u.length; t += 1) d[t] = Dt(mt(e, u, t));
    const p = (e) =>
      ge(d[e], 1, 1, () => {
        d[e] = null;
      });
    function h(e, t) {
      return e[0].buyLinks && e[0].buyLinks.length > 0 ? Ut : Mt;
    }
    let f = h(e),
      m = f(e);
    return {
      c() {
        (t = k("div")),
          (n = k("div")),
          (i = k("div")),
          l && l.c(),
          (o = T()),
          c && c.c(),
          (a = T());
        for (let e = 0; e < d.length; e += 1) d[e].c();
        (r = T()),
          m.c(),
          z(i, "padding-top", "20px"),
          q(i, "class", "gcohtech-rpi3le"),
          q(n, "class", "chatwith-box gcohtech-rpi3le"),
          z(t, "min-width", "80%"),
          z(t, "height", "100%"),
          q(t, "class", "gcohtech-rpi3le"),
          B(t, "whatsappTheme", e[5]),
          B(t, "roundedTheme", e[6]),
          B(t, "fullScreenMobile", e[7]);
      },
      m(e, u) {
        b(e, t, u),
          w(t, n),
          w(n, i),
          l && l.m(i, null),
          w(i, o),
          c && c.m(i, null),
          w(i, a);
        for (let e = 0; e < d.length; e += 1) d[e].m(i, null);
        w(i, r), m.m(i, null), (s = !0);
      },
      p(e, n) {
        if (
          (!0 !== e[1]
            ? l
              ? l.p(e, n)
              : ((l = gt(e)), l.c(), l.m(i, o))
            : l && (l.d(1), (l = null)),
          "" != e[0].info
            ? c
              ? c.p(e, n)
              : ((c = wt(e)), c.c(), c.m(i, a))
            : c && (c.d(1), (c = null)),
          8477 & n[0])
        ) {
          let t;
          for (u = e[0].items, t = 0; t < u.length; t += 1) {
            const o = mt(e, u, t);
            d[t]
              ? (d[t].p(o, n), ve(d[t], 1))
              : ((d[t] = Dt(o)), d[t].c(), ve(d[t], 1), d[t].m(i, r));
          }
          for (fe(), t = u.length; t < d.length; t += 1) p(t);
          me();
        }
        f === (f = h(e)) && m
          ? m.p(e, n)
          : (m.d(1), (m = f(e)), m && (m.c(), m.m(i, null))),
          32 & n[0] && B(t, "whatsappTheme", e[5]),
          64 & n[0] && B(t, "roundedTheme", e[6]),
          128 & n[0] && B(t, "fullScreenMobile", e[7]);
      },
      i(e) {
        if (!s) {
          for (let e = 0; e < u.length; e += 1) ve(d[e]);
          s = !0;
        }
      },
      o(e) {
        d = d.filter(Boolean);
        for (let e = 0; e < d.length; e += 1) ge(d[e]);
        s = !1;
      },
      d(e) {
        e && y(t), l && l.d(), c && c.d(), x(d, e), m.d();
      },
    };
  }
  const Et = "border:1px solid #ff8076";
  function Lt(e, t, n) {
    let i, o, a;
    const r = K();
    let s = [],
      l = [],
      { formitems: c } = t,
      { data: u } = t,
      { noclose: d } = t,
      { person: p } = t;
    c.items.forEach((e) => (e.val = ""));
    const h = `${p.id}form`,
      f = ct(h);
    var m, v;
    c = f
      ? ((m = f),
        (v = c),
        !0 === p.chatform
          ? v
          : m
          ? (v.items.forEach((e, t) => {
              const n = m.items.find((t) => t.label == e.label);
              n && (v.items[t].val = n.val);
            }),
            v)
          : v)
      : c;
    const g = (e) => e.split("|"),
      w = (e = null) => {
        for (let e in l)
          try {
            l[e].validate();
          } catch (e) {
            console.log(e);
          }
        var t, n;
        0 == s.length &&
          ((t = h),
          (n = c),
          !0 === rt && pt(t, n, ut()),
          r("callmex", { data: c.items, url: e }),
          c.items.forEach((e) => (e.val = "")));
      };
    return (
      (e.$$set = (e) => {
        "formitems" in e && n(0, (c = e.formitems)),
          "data" in e && n(2, (u = e.data)),
          "noclose" in e && n(1, (d = e.noclose)),
          "person" in e && n(14, (p = e.person));
      }),
      (e.$$.update = () => {
        4 & e.$$.dirty[0] && n(5, (i = "whatsappTheme" === u.widgetTheme)),
          4 & e.$$.dirty[0] &&
            n(
              6,
              (o =
                "roundedTheme" === u.widgetTheme ||
                "bubbleTheme" === u.widgetTheme)
            ),
          4 & e.$$.dirty[0] && n(7, (a = u.expandFullScreenMobile));
      }),
      [
        c,
        d,
        u,
        s,
        l,
        i,
        o,
        a,
        g,
        () => {
          r("close");
        },
        w,
        (e) =>
          e >= 25 ? "width:150px;padding-left:0px;text-align:center;" : "",
        (e) => (e >= 25 ? "width:35px;height:35px;" : ""),
        () => {
          "Enter" == event.code && event.preventDefault();
        },
        p,
        function (e, t) {
          (e[t].val = this.value), n(0, c), n(8, g);
        },
        function (e, t) {
          (e[t].val = D(this.value)), n(0, c), n(8, g);
        },
        function (e, t) {
          (e[t].val = this.value), n(0, c), n(8, g);
        },
        function (e, t) {
          (e[t].val = this.value), n(0, c), n(8, g);
        },
        function (e, t) {
          (e[t].val = this.value), n(0, c), n(8, g);
        },
        function (e, t) {
          (e[t].val = E(this)), n(0, c), n(8, g);
        },
        function (e, t) {
          (e[t].val = this.checked), n(0, c), n(8, g);
        },
        function (e, t) {
          (t.val = e), n(0, c);
        },
        function (e, t) {
          (t.telNum = e), n(0, c);
        },
        function (e, t) {
          (e[t].val = this.value), n(0, c), n(8, g);
        },
        function (e) {
          (s = e), n(3, s);
        },
        function (e, t) {
          X[e ? "unshift" : "push"](() => {
            (l[t] = e), n(4, l);
          });
        },
        (e, t, i, o) => {
          n(0, (t[i].isError = o.detail), c);
        },
        (e) => w(e.link),
        () => w(null),
      ]
    );
  }
  class Ot extends qe {
    constructor(e) {
      var t;
      super(),
        document.getElementById("gcohtech-rpi3le-style") ||
          (((t = k("style")).id = "gcohtech-rpi3le-style"),
          (t.textContent =
            '.chatwith-box.gcohtech-rpi3le label.gcohtech-rpi3le,.chatwith-box.gcohtech-rpi3le select.gcohtech-rpi3le,.chatwith-box.gcohtech-rpi3le input.gcohtech-rpi3le{display:block;padding:4px 0;font-size:16px}.chatwith-box.gcohtech-rpi3le input.gcohtech-rpi3le{padding:8px 0}.chatwith-box.gcohtech-rpi3le label.gcohtech-rpi3le{padding-bottom:0 !important;margin-bottom:0.25em;color:#5c5b5b;display:flex;flex-direction:row;align-items:center}.chatwith-box.gcohtech-rpi3le label p.gcohtech-rpi3le{margin:0;cursor:pointer;font-weight:500;font-family:\'Inter\';font-size:16px;background:white;box-shadow:none}.whatsappTheme.gcohtech-rpi3le .chatwith-box label p.gcohtech-rpi3le{background:unset}.chatwith-box.gcohtech-rpi3le select.gcohtech-rpi3le,.chatwith-box.gcohtech-rpi3le input.gcohtech-rpi3le,.chatwith-box.gcohtech-rpi3le .chatwith-button.gcohtech-rpi3le{border:1px solid #ccc;padding:5px 5px;box-sizing:border-box;line-height:1;min-height:45px;width:100%;border-radius:5px}.chatwith-box.gcohtech-rpi3le input[type=\'checkbox\'].gcohtech-rpi3le{width:auto;height:inherit;min-height:unset;opacity:1;z-index:unset;margin:3px;-webkit-appearance:auto;-moz-appearance:auto;appearance:auto}.chatwith-box.gcohtech-rpi3le select.gcohtech-rpi3le{height:45px}.chatwith-box.gcohtech-rpi3le .form-element.gcohtech-rpi3le,.chatwith-box.gcohtech-rpi3le .chatwith-button.gcohtech-rpi3le{margin-top:10px}.chatwith-box.gcohtech-rpi3le .form-element input.gcohtech-rpi3le{display:inline-block}.checkbox-link.gcohtech-rpi3le.gcohtech-rpi3le{padding:5px 0px}.checkbox-link.gcohtech-rpi3le a.gcohtech-rpi3le{font-size:16px}.chatwith-box.gcohtech-rpi3le select.gcohtech-rpi3le{-webkit-appearance:none;-moz-appearance:none;appearance:none}.chatwith-box.gcohtech-rpi3le .select.gcohtech-rpi3le{position:relative}.chatwith-box.gcohtech-rpi3le .select.gcohtech-rpi3le::after{content:"v";position:absolute;top:11px;right:5px;width:14px;height:14px;font-size:16px;color:#12b03f;font-family:\'Inter\';text-align:center}.chatwith-box.gcohtech-rpi3le .chatwith-button.gcohtech-rpi3le{border:1px solid green;background:green;color:white;cursor:pointer;display:flex;justify-content:center;align-items:center;padding:9px}.whatsappTheme.fullScreenMobile.gcohtech-rpi3le .chatwith-box .chatwith-button.gcohtech-rpi3le{background-image:url(\'https://services.tochat.be/img/bk-wa.png\')}.chatwith-box.gcohtech-rpi3le .chatwith-button span.gcohtech-rpi3le{color:white;font-size:16px!important}.chatwith-box.gcohtech-rpi3le.gcohtech-rpi3le{padding:10px;box-sizing:border-box;background:white;color:#5c5b5b;width:100%}.chatwith-box.gcohtech-rpi3le .textito.gcohtech-rpi3le{font-weight:bold;padding-bottom:5px;font-size:16px;margin-top:-20px;text-align:center;padding-top:10px}.chatwith-box.gcohtech-rpi3le .chatwith-img.gcohtech-rpi3le{width:25px;height:25px}.close-modal.gcohtech-rpi3le.gcohtech-rpi3le{position:absolute;right:0;z-index:1000000;top:0;padding:4px 10px 0 10px;color:#fff;border-top-right-radius:1em;border-bottom-left-radius:1em;cursor:pointer}.close-modal.gcohtech-rpi3le svg.gcohtech-rpi3le{width:0.7em}.gcohtech-rpi3le.gcohtech-rpi3le::-webkit-input-placeholder{color:#c2bdbd!important;font-style:normal}.chatwith-box.gcohtech-rpi3le .gcohtech-rpi3le::-moz-placeholder{color:#c2bdbd!important;font-style:normal}.chatwith-box.gcohtech-rpi3le .gcohtech-rpi3le:-ms-input-placeholder{color:#c2bdbd!important;font-style:normal}.chatwith-box.gcohtech-rpi3le .gcohtech-rpi3le:-moz-placeholder{color:#c2bdbd!important;font-style:normal}.chatwith-box.gcohtech-rpi3le .form-element-input.gcohtech-rpi3le,.chatwith-box.gcohtech-rpi3le select.gcohtech-rpi3le,.chatwith-box.gcohtech-rpi3le input[type="email"].gcohtech-rpi3le,.chatwith-box.gcohtech-rpi3le input[type="text"].gcohtech-rpi3le,.chatwith-box.gcohtech-rpi3le input[type="number"].gcohtech-rpi3le,.chatwith-box.gcohtech-rpi3le input[type="url"].gcohtech-rpi3le{color:#5c5b5b;height:45px;margin-bottom:0;font-weight:0;font-weight:normal;font-family:\'Inter\';font-size:16px;background:white;box-shadow:none}.chatwith-box.gcohtech-rpi3le select.gcohtech-rpi3le:focus,.chatwith-box.gcohtech-rpi3le input[type="email"].gcohtech-rpi3le:focus,.chatwith-box.gcohtech-rpi3le input[type="text"].gcohtech-rpi3le:focus,.chatwith-box.gcohtech-rpi3le input[type="number"].gcohtech-rpi3le:focus,.chatwith-box.gcohtech-rpi3le input[type="url"].gcohtech-rpi3le:focus{outline:2px solid black;border:0!important}.buyButton.gcohtech-rpi3le.gcohtech-rpi3le:last-of-type{margin-bottom:0}.whatsappTheme.gcohtech-rpi3le div.gcohtech-rpi3le::-webkit-scrollbar{background:#B8B6B5;width:10px}.whatsappTheme.gcohtech-rpi3le div.gcohtech-rpi3le::-webkit-scrollbar-thumb{background:#5d5c5c}.whatsappTheme.gcohtech-rpi3le>.chatwith-box.gcohtech-rpi3le{background-image:url(\'https://services.tochat.be/img/bk-wa.png\')}.roundedTheme.gcohtech-rpi3le .chatwith-box select.gcohtech-rpi3le,.roundedTheme.gcohtech-rpi3le .chatwith-box input.gcohtech-rpi3le,.roundedTheme.gcohtech-rpi3le .chatwith-box .chatwith-button.gcohtech-rpi3le{border-radius:40px}.fullScreenMobile.gcohtech-rpi3le .chatwith-box.gcohtech-rpi3le{height:100%;display:flex;flex-direction:column;justify-content:flex-end}'),
          w(document.head, t)),
        Ne(
          this,
          e,
          Lt,
          At,
          s,
          { formitems: 0, data: 2, noclose: 1, person: 14 },
          [-1, -1]
        );
    }
  }
  const jt = "function" == typeof btoa,
    Bt = "function" == typeof Buffer,
    Ft =
      ("function" == typeof TextDecoder && new TextDecoder(),
      "function" == typeof TextEncoder ? new TextEncoder() : void 0),
    Rt = [
      ..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    ],
    Pt =
      (((e) => {
        let t = {};
        e.forEach((e, n) => (t[e] = n));
      })(Rt),
      String.fromCharCode.bind(String)),
    Vt =
      ("function" == typeof Uint8Array.from && Uint8Array.from.bind(Uint8Array),
      (e) =>
        e.replace(/[+\/]/g, (e) => ("+" == e ? "-" : "_")).replace(/=+$/m, "")),
    _t = (e) => {
      let t,
        n,
        i,
        o,
        a = "";
      const r = e.length % 3;
      for (let r = 0; r < e.length; ) {
        if (
          (n = e.charCodeAt(r++)) > 255 ||
          (i = e.charCodeAt(r++)) > 255 ||
          (o = e.charCodeAt(r++)) > 255
        )
          throw new TypeError("invalid character found");
        (t = (n << 16) | (i << 8) | o),
          (a +=
            Rt[(t >> 18) & 63] +
            Rt[(t >> 12) & 63] +
            Rt[(t >> 6) & 63] +
            Rt[63 & t]);
      }
      return r ? a.slice(0, r - 3) + "===".substring(r) : a;
    },
    Ht = jt
      ? (e) => btoa(e)
      : Bt
      ? (e) => Buffer.from(e, "binary").toString("base64")
      : _t,
    Gt = Bt
      ? (e) => Buffer.from(e).toString("base64")
      : (e) => {
          let t = [];
          for (let n = 0, i = e.length; n < i; n += 4096)
            t.push(Pt.apply(null, e.subarray(n, n + 4096)));
          return Ht(t.join(""));
        },
    Zt = (e) => {
      if (e.length < 2)
        return (t = e.charCodeAt(0)) < 128
          ? e
          : t < 2048
          ? Pt(192 | (t >>> 6)) + Pt(128 | (63 & t))
          : Pt(224 | ((t >>> 12) & 15)) +
            Pt(128 | ((t >>> 6) & 63)) +
            Pt(128 | (63 & t));
      var t =
        65536 + 1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320);
      return (
        Pt(240 | ((t >>> 18) & 7)) +
        Pt(128 | ((t >>> 12) & 63)) +
        Pt(128 | ((t >>> 6) & 63)) +
        Pt(128 | (63 & t))
      );
    },
    Wt = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,
    Kt = (e) => e.replace(Wt, Zt),
    Yt = Bt
      ? (e) => Buffer.from(e, "utf8").toString("base64")
      : Ft
      ? (e) => Gt(Ft.encode(e))
      : (e) => Ht(Kt(e)),
    Xt = (e, t = !1) => (t ? Vt(Yt(e)) : Yt(e)),
    Jt = (e) => Xt(e, !0),
    Qt = Jt;
  var en = function (e, t) {
      return function () {
        for (var n = new Array(arguments.length), i = 0; i < n.length; i++)
          n[i] = arguments[i];
        return e.apply(t, n);
      };
    },
    tn = Object.prototype.toString;
  function nn(e) {
    return "[object Array]" === tn.call(e);
  }
  function on(e) {
    return void 0 === e;
  }
  function an(e) {
    return null !== e && "object" == typeof e;
  }
  function rn(e) {
    if ("[object Object]" !== tn.call(e)) return !1;
    var t = Object.getPrototypeOf(e);
    return null === t || t === Object.prototype;
  }
  function sn(e) {
    return "[object Function]" === tn.call(e);
  }
  function ln(e, t) {
    if (null != e)
      if (("object" != typeof e && (e = [e]), nn(e)))
        for (var n = 0, i = e.length; n < i; n++) t.call(null, e[n], n, e);
      else
        for (var o in e)
          Object.prototype.hasOwnProperty.call(e, o) &&
            t.call(null, e[o], o, e);
  }
  var cn = {
    isArray: nn,
    isArrayBuffer: function (e) {
      return "[object ArrayBuffer]" === tn.call(e);
    },
    isBuffer: function (e) {
      return (
        null !== e &&
        !on(e) &&
        null !== e.constructor &&
        !on(e.constructor) &&
        "function" == typeof e.constructor.isBuffer &&
        e.constructor.isBuffer(e)
      );
    },
    isFormData: function (e) {
      return "undefined" != typeof FormData && e instanceof FormData;
    },
    isArrayBufferView: function (e) {
      return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView
        ? ArrayBuffer.isView(e)
        : e && e.buffer && e.buffer instanceof ArrayBuffer;
    },
    isString: function (e) {
      return "string" == typeof e;
    },
    isNumber: function (e) {
      return "number" == typeof e;
    },
    isObject: an,
    isPlainObject: rn,
    isUndefined: on,
    isDate: function (e) {
      return "[object Date]" === tn.call(e);
    },
    isFile: function (e) {
      return "[object File]" === tn.call(e);
    },
    isBlob: function (e) {
      return "[object Blob]" === tn.call(e);
    },
    isFunction: sn,
    isStream: function (e) {
      return an(e) && sn(e.pipe);
    },
    isURLSearchParams: function (e) {
      return (
        "undefined" != typeof URLSearchParams && e instanceof URLSearchParams
      );
    },
    isStandardBrowserEnv: function () {
      return (
        ("undefined" == typeof navigator ||
          ("ReactNative" !== navigator.product &&
            "NativeScript" !== navigator.product &&
            "NS" !== navigator.product)) &&
        "undefined" != typeof window &&
        "undefined" != typeof document
      );
    },
    forEach: ln,
    merge: function e() {
      var t = {};
      function n(n, i) {
        rn(t[i]) && rn(n)
          ? (t[i] = e(t[i], n))
          : rn(n)
          ? (t[i] = e({}, n))
          : nn(n)
          ? (t[i] = n.slice())
          : (t[i] = n);
      }
      for (var i = 0, o = arguments.length; i < o; i++) ln(arguments[i], n);
      return t;
    },
    extend: function (e, t, n) {
      return (
        ln(t, function (t, i) {
          e[i] = n && "function" == typeof t ? en(t, n) : t;
        }),
        e
      );
    },
    trim: function (e) {
      return e.replace(/^\s*/, "").replace(/\s*$/, "");
    },
    stripBOM: function (e) {
      return 65279 === e.charCodeAt(0) && (e = e.slice(1)), e;
    },
  };
  function un(e) {
    return encodeURIComponent(e)
      .replace(/%3A/gi, ":")
      .replace(/%24/g, "$")
      .replace(/%2C/gi, ",")
      .replace(/%20/g, "+")
      .replace(/%5B/gi, "[")
      .replace(/%5D/gi, "]");
  }
  var dn = function (e, t, n) {
    if (!t) return e;
    var i;
    if (n) i = n(t);
    else if (cn.isURLSearchParams(t)) i = t.toString();
    else {
      var o = [];
      cn.forEach(t, function (e, t) {
        null != e &&
          (cn.isArray(e) ? (t += "[]") : (e = [e]),
          cn.forEach(e, function (e) {
            cn.isDate(e)
              ? (e = e.toISOString())
              : cn.isObject(e) && (e = JSON.stringify(e)),
              o.push(un(t) + "=" + un(e));
          }));
      }),
        (i = o.join("&"));
    }
    if (i) {
      var a = e.indexOf("#");
      -1 !== a && (e = e.slice(0, a)),
        (e += (-1 === e.indexOf("?") ? "?" : "&") + i);
    }
    return e;
  };
  function pn() {
    this.handlers = [];
  }
  (pn.prototype.use = function (e, t) {
    return (
      this.handlers.push({ fulfilled: e, rejected: t }),
      this.handlers.length - 1
    );
  }),
    (pn.prototype.eject = function (e) {
      this.handlers[e] && (this.handlers[e] = null);
    }),
    (pn.prototype.forEach = function (e) {
      cn.forEach(this.handlers, function (t) {
        null !== t && e(t);
      });
    });
  var hn = pn,
    fn = function (e, t, n) {
      return (
        cn.forEach(n, function (n) {
          e = n(e, t);
        }),
        e
      );
    },
    mn = function (e) {
      return !(!e || !e.__CANCEL__);
    },
    vn = function (e, t) {
      cn.forEach(e, function (n, i) {
        i !== t &&
          i.toUpperCase() === t.toUpperCase() &&
          ((e[t] = n), delete e[i]);
      });
    },
    gn = function (e, t, n, i, o) {
      return (function (e, t, n, i, o) {
        return (
          (e.config = t),
          n && (e.code = n),
          (e.request = i),
          (e.response = o),
          (e.isAxiosError = !0),
          (e.toJSON = function () {
            return {
              message: this.message,
              name: this.name,
              description: this.description,
              number: this.number,
              fileName: this.fileName,
              lineNumber: this.lineNumber,
              columnNumber: this.columnNumber,
              stack: this.stack,
              config: this.config,
              code: this.code,
            };
          }),
          e
        );
      })(new Error(e), t, n, i, o);
    },
    wn = cn.isStandardBrowserEnv()
      ? {
          write: function (e, t, n, i, o, a) {
            var r = [];
            r.push(e + "=" + encodeURIComponent(t)),
              cn.isNumber(n) && r.push("expires=" + new Date(n).toGMTString()),
              cn.isString(i) && r.push("path=" + i),
              cn.isString(o) && r.push("domain=" + o),
              !0 === a && r.push("secure"),
              (document.cookie = r.join("; "));
          },
          read: function (e) {
            var t = document.cookie.match(
              new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
            );
            return t ? decodeURIComponent(t[3]) : null;
          },
          remove: function (e) {
            this.write(e, "", Date.now() - 864e5);
          },
        }
      : {
          write: function () {},
          read: function () {
            return null;
          },
          remove: function () {},
        },
    bn = [
      "age",
      "authorization",
      "content-length",
      "content-type",
      "etag",
      "expires",
      "from",
      "host",
      "if-modified-since",
      "if-unmodified-since",
      "last-modified",
      "location",
      "max-forwards",
      "proxy-authorization",
      "referer",
      "retry-after",
      "user-agent",
    ],
    yn = cn.isStandardBrowserEnv()
      ? (function () {
          var e,
            t = /(msie|trident)/i.test(navigator.userAgent),
            n = document.createElement("a");
          function i(e) {
            var i = e;
            return (
              t && (n.setAttribute("href", i), (i = n.href)),
              n.setAttribute("href", i),
              {
                href: n.href,
                protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                host: n.host,
                search: n.search ? n.search.replace(/^\?/, "") : "",
                hash: n.hash ? n.hash.replace(/^#/, "") : "",
                hostname: n.hostname,
                port: n.port,
                pathname:
                  "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname,
              }
            );
          }
          return (
            (e = i(window.location.href)),
            function (t) {
              var n = cn.isString(t) ? i(t) : t;
              return n.protocol === e.protocol && n.host === e.host;
            }
          );
        })()
      : function () {
          return !0;
        },
    xn = function (e) {
      return new Promise(function (t, n) {
        var i = e.data,
          o = e.headers;
        cn.isFormData(i) && delete o["Content-Type"];
        var a = new XMLHttpRequest();
        if (e.auth) {
          var r = e.auth.username || "",
            s = e.auth.password
              ? unescape(encodeURIComponent(e.auth.password))
              : "";
          o.Authorization = "Basic " + btoa(r + ":" + s);
        }
        var l,
          c,
          u =
            ((l = e.baseURL),
            (c = e.url),
            l && !/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(c)
              ? (function (e, t) {
                  return t
                    ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "")
                    : e;
                })(l, c)
              : c);
        if (
          (a.open(
            e.method.toUpperCase(),
            dn(u, e.params, e.paramsSerializer),
            !0
          ),
          (a.timeout = e.timeout),
          (a.onreadystatechange = function () {
            if (
              a &&
              4 === a.readyState &&
              (0 !== a.status ||
                (a.responseURL && 0 === a.responseURL.indexOf("file:")))
            ) {
              var i,
                o,
                r,
                s,
                l,
                c =
                  "getAllResponseHeaders" in a
                    ? ((i = a.getAllResponseHeaders()),
                      (l = {}),
                      i
                        ? (cn.forEach(i.split("\n"), function (e) {
                            if (
                              ((s = e.indexOf(":")),
                              (o = cn.trim(e.substr(0, s)).toLowerCase()),
                              (r = cn.trim(e.substr(s + 1))),
                              o)
                            ) {
                              if (l[o] && bn.indexOf(o) >= 0) return;
                              l[o] =
                                "set-cookie" === o
                                  ? (l[o] ? l[o] : []).concat([r])
                                  : l[o]
                                  ? l[o] + ", " + r
                                  : r;
                            }
                          }),
                          l)
                        : l)
                    : null,
                u = {
                  data:
                    e.responseType && "text" !== e.responseType
                      ? a.response
                      : a.responseText,
                  status: a.status,
                  statusText: a.statusText,
                  headers: c,
                  config: e,
                  request: a,
                };
              !(function (e, t, n) {
                var i = n.config.validateStatus;
                n.status && i && !i(n.status)
                  ? t(
                      gn(
                        "Request failed with status code " + n.status,
                        n.config,
                        null,
                        n.request,
                        n
                      )
                    )
                  : e(n);
              })(t, n, u),
                (a = null);
            }
          }),
          (a.onabort = function () {
            a && (n(gn("Request aborted", e, "ECONNABORTED", a)), (a = null));
          }),
          (a.onerror = function () {
            n(gn("Network Error", e, null, a)), (a = null);
          }),
          (a.ontimeout = function () {
            var t = "timeout of " + e.timeout + "ms exceeded";
            e.timeoutErrorMessage && (t = e.timeoutErrorMessage),
              n(gn(t, e, "ECONNABORTED", a)),
              (a = null);
          }),
          cn.isStandardBrowserEnv())
        ) {
          var d =
            (e.withCredentials || yn(u)) && e.xsrfCookieName
              ? wn.read(e.xsrfCookieName)
              : void 0;
          d && (o[e.xsrfHeaderName] = d);
        }
        if (
          ("setRequestHeader" in a &&
            cn.forEach(o, function (e, t) {
              void 0 === i && "content-type" === t.toLowerCase()
                ? delete o[t]
                : a.setRequestHeader(t, e);
            }),
          cn.isUndefined(e.withCredentials) ||
            (a.withCredentials = !!e.withCredentials),
          e.responseType)
        )
          try {
            a.responseType = e.responseType;
          } catch (t) {
            if ("json" !== e.responseType) throw t;
          }
        "function" == typeof e.onDownloadProgress &&
          a.addEventListener("progress", e.onDownloadProgress),
          "function" == typeof e.onUploadProgress &&
            a.upload &&
            a.upload.addEventListener("progress", e.onUploadProgress),
          e.cancelToken &&
            e.cancelToken.promise.then(function (e) {
              a && (a.abort(), n(e), (a = null));
            }),
          i || (i = null),
          a.send(i);
      });
    },
    kn = { "Content-Type": "application/x-www-form-urlencoded" };
  function Cn(e, t) {
    !cn.isUndefined(e) &&
      cn.isUndefined(e["Content-Type"]) &&
      (e["Content-Type"] = t);
  }
  var $n,
    Tn = {
      adapter:
        (("undefined" != typeof XMLHttpRequest ||
          ("undefined" != typeof process &&
            "[object process]" === Object.prototype.toString.call(process))) &&
          ($n = xn),
        $n),
      transformRequest: [
        function (e, t) {
          return (
            vn(t, "Accept"),
            vn(t, "Content-Type"),
            cn.isFormData(e) ||
            cn.isArrayBuffer(e) ||
            cn.isBuffer(e) ||
            cn.isStream(e) ||
            cn.isFile(e) ||
            cn.isBlob(e)
              ? e
              : cn.isArrayBufferView(e)
              ? e.buffer
              : cn.isURLSearchParams(e)
              ? (Cn(t, "application/x-www-form-urlencoded;charset=utf-8"),
                e.toString())
              : cn.isObject(e)
              ? (Cn(t, "application/json;charset=utf-8"), JSON.stringify(e))
              : e
          );
        },
      ],
      transformResponse: [
        function (e) {
          if ("string" == typeof e)
            try {
              e = JSON.parse(e);
            } catch (e) {}
          return e;
        },
      ],
      timeout: 0,
      xsrfCookieName: "XSRF-TOKEN",
      xsrfHeaderName: "X-XSRF-TOKEN",
      maxContentLength: -1,
      maxBodyLength: -1,
      validateStatus: function (e) {
        return e >= 200 && e < 300;
      },
    };
  (Tn.headers = { common: { Accept: "application/json, text/plain, */*" } }),
    cn.forEach(["delete", "get", "head"], function (e) {
      Tn.headers[e] = {};
    }),
    cn.forEach(["post", "put", "patch"], function (e) {
      Tn.headers[e] = cn.merge(kn);
    });
  var In = Tn;
  function Sn(e) {
    e.cancelToken && e.cancelToken.throwIfRequested();
  }
  var Nn = function (e) {
      return (
        Sn(e),
        (e.headers = e.headers || {}),
        (e.data = fn(e.data, e.headers, e.transformRequest)),
        (e.headers = cn.merge(
          e.headers.common || {},
          e.headers[e.method] || {},
          e.headers
        )),
        cn.forEach(
          ["delete", "get", "head", "post", "put", "patch", "common"],
          function (t) {
            delete e.headers[t];
          }
        ),
        (e.adapter || In.adapter)(e).then(
          function (t) {
            return (
              Sn(e), (t.data = fn(t.data, t.headers, e.transformResponse)), t
            );
          },
          function (t) {
            return (
              mn(t) ||
                (Sn(e),
                t &&
                  t.response &&
                  (t.response.data = fn(
                    t.response.data,
                    t.response.headers,
                    e.transformResponse
                  ))),
              Promise.reject(t)
            );
          }
        )
      );
    },
    qn = function (e, t) {
      t = t || {};
      var n = {},
        i = ["url", "method", "data"],
        o = ["headers", "auth", "proxy", "params"],
        a = [
          "baseURL",
          "transformRequest",
          "transformResponse",
          "paramsSerializer",
          "timeout",
          "timeoutMessage",
          "withCredentials",
          "adapter",
          "responseType",
          "xsrfCookieName",
          "xsrfHeaderName",
          "onUploadProgress",
          "onDownloadProgress",
          "decompress",
          "maxContentLength",
          "maxBodyLength",
          "maxRedirects",
          "transport",
          "httpAgent",
          "httpsAgent",
          "cancelToken",
          "socketPath",
          "responseEncoding",
        ],
        r = ["validateStatus"];
      function s(e, t) {
        return cn.isPlainObject(e) && cn.isPlainObject(t)
          ? cn.merge(e, t)
          : cn.isPlainObject(t)
          ? cn.merge({}, t)
          : cn.isArray(t)
          ? t.slice()
          : t;
      }
      function l(i) {
        cn.isUndefined(t[i])
          ? cn.isUndefined(e[i]) || (n[i] = s(void 0, e[i]))
          : (n[i] = s(e[i], t[i]));
      }
      cn.forEach(i, function (e) {
        cn.isUndefined(t[e]) || (n[e] = s(void 0, t[e]));
      }),
        cn.forEach(o, l),
        cn.forEach(a, function (i) {
          cn.isUndefined(t[i])
            ? cn.isUndefined(e[i]) || (n[i] = s(void 0, e[i]))
            : (n[i] = s(void 0, t[i]));
        }),
        cn.forEach(r, function (i) {
          i in t ? (n[i] = s(e[i], t[i])) : i in e && (n[i] = s(void 0, e[i]));
        });
      var c = i.concat(o).concat(a).concat(r),
        u = Object.keys(e)
          .concat(Object.keys(t))
          .filter(function (e) {
            return -1 === c.indexOf(e);
          });
      return cn.forEach(u, l), n;
    };
  function Dn(e) {
    (this.defaults = e),
      (this.interceptors = { request: new hn(), response: new hn() });
  }
  (Dn.prototype.request = function (e) {
    "string" == typeof e
      ? ((e = arguments[1] || {}).url = arguments[0])
      : (e = e || {}),
      (e = qn(this.defaults, e)).method
        ? (e.method = e.method.toLowerCase())
        : this.defaults.method
        ? (e.method = this.defaults.method.toLowerCase())
        : (e.method = "get");
    var t = [Nn, void 0],
      n = Promise.resolve(e);
    for (
      this.interceptors.request.forEach(function (e) {
        t.unshift(e.fulfilled, e.rejected);
      }),
        this.interceptors.response.forEach(function (e) {
          t.push(e.fulfilled, e.rejected);
        });
      t.length;

    )
      n = n.then(t.shift(), t.shift());
    return n;
  }),
    (Dn.prototype.getUri = function (e) {
      return (
        (e = qn(this.defaults, e)),
        dn(e.url, e.params, e.paramsSerializer).replace(/^\?/, "")
      );
    }),
    cn.forEach(["delete", "get", "head", "options"], function (e) {
      Dn.prototype[e] = function (t, n) {
        return this.request(
          qn(n || {}, { method: e, url: t, data: (n || {}).data })
        );
      };
    }),
    cn.forEach(["post", "put", "patch"], function (e) {
      Dn.prototype[e] = function (t, n, i) {
        return this.request(qn(i || {}, { method: e, url: t, data: n }));
      };
    });
  var Mn = Dn;
  function Un(e) {
    this.message = e;
  }
  (Un.prototype.toString = function () {
    return "Cancel" + (this.message ? ": " + this.message : "");
  }),
    (Un.prototype.__CANCEL__ = !0);
  var zn = Un;
  function An(e) {
    if ("function" != typeof e)
      throw new TypeError("executor must be a function.");
    var t;
    this.promise = new Promise(function (e) {
      t = e;
    });
    var n = this;
    e(function (e) {
      n.reason || ((n.reason = new zn(e)), t(n.reason));
    });
  }
  (An.prototype.throwIfRequested = function () {
    if (this.reason) throw this.reason;
  }),
    (An.source = function () {
      var e;
      return {
        token: new An(function (t) {
          e = t;
        }),
        cancel: e,
      };
    });
  var En = An;
  function Ln(e) {
    var t = new Mn(e),
      n = en(Mn.prototype.request, t);
    return cn.extend(n, Mn.prototype, t), cn.extend(n, t), n;
  }
  var On = Ln(In);
  (On.Axios = Mn),
    (On.create = function (e) {
      return Ln(qn(On.defaults, e));
    }),
    (On.Cancel = zn),
    (On.CancelToken = En),
    (On.isCancel = mn),
    (On.all = function (e) {
      return Promise.all(e);
    }),
    (On.spread = function (e) {
      return function (t) {
        return e.apply(null, t);
      };
    }),
    (On.isAxiosError = function (e) {
      return "object" == typeof e && !0 === e.isAxiosError;
    });
  var jn = On,
    Bn = On;
  jn.default = Bn;
  var Fn = jn;
  function Rn(e, t, n) {
    return (
      e(
        (n = {
          path: t,
          exports: {},
          require: function (e, t) {
            return (function () {
              throw new Error(
                "Dynamic requires are not currently supported by @rollup/plugin-commonjs"
              );
            })(null == t && n.path);
          },
        }),
        n.exports
      ),
      n.exports
    );
  }
  var Pn = Rn(function (e, t) {
    function n(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    function i(e, t, i) {
      return t && n(e.prototype, t), i && n(e, i), e;
    }
    function o(e, t) {
      (e.prototype = Object.create(t.prototype)),
        (e.prototype.constructor = e),
        (e.__proto__ = t);
    }
    function a(e) {
      return (a = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function r(e, t) {
      return (r =
        Object.setPrototypeOf ||
        function (e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function s() {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return (
          Date.prototype.toString.call(
            Reflect.construct(Date, [], function () {})
          ),
          !0
        );
      } catch (e) {
        return !1;
      }
    }
    function l(e, t, n) {
      return (l = s()
        ? Reflect.construct
        : function (e, t, n) {
            var i = [null];
            i.push.apply(i, t);
            var o = new (Function.bind.apply(e, i))();
            return n && r(o, n.prototype), o;
          }).apply(null, arguments);
    }
    function c(e) {
      var t = "function" == typeof Map ? new Map() : void 0;
      return (c = function (e) {
        if (
          null === e ||
          ((n = e), -1 === Function.toString.call(n).indexOf("[native code]"))
        )
          return e;
        var n;
        if ("function" != typeof e)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        if (void 0 !== t) {
          if (t.has(e)) return t.get(e);
          t.set(e, i);
        }
        function i() {
          return l(e, arguments, a(this).constructor);
        }
        return (
          (i.prototype = Object.create(e.prototype, {
            constructor: {
              value: i,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          r(i, e)
        );
      })(e);
    }
    function u(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
      return i;
    }
    function d(e) {
      var t = 0;
      if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
        if (
          Array.isArray(e) ||
          (e = (function (e, t) {
            if (e) {
              if ("string" == typeof e) return u(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              return (
                "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(n)
                  : "Arguments" === n ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                  ? u(e, t)
                  : void 0
              );
            }
          })(e))
        )
          return function () {
            return t >= e.length ? { done: !0 } : { done: !1, value: e[t++] };
          };
        throw new TypeError(
          "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
      return (t = e[Symbol.iterator]()).next.bind(t);
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var p = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return o(t, e), t;
      })(c(Error)),
      h = (function (e) {
        function t(t) {
          return e.call(this, "Invalid DateTime: " + t.toMessage()) || this;
        }
        return o(t, e), t;
      })(p),
      f = (function (e) {
        function t(t) {
          return e.call(this, "Invalid Interval: " + t.toMessage()) || this;
        }
        return o(t, e), t;
      })(p),
      m = (function (e) {
        function t(t) {
          return e.call(this, "Invalid Duration: " + t.toMessage()) || this;
        }
        return o(t, e), t;
      })(p),
      v = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return o(t, e), t;
      })(p),
      g = (function (e) {
        function t(t) {
          return e.call(this, "Invalid unit " + t) || this;
        }
        return o(t, e), t;
      })(p),
      w = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return o(t, e), t;
      })(p),
      b = (function (e) {
        function t() {
          return e.call(this, "Zone is an abstract class") || this;
        }
        return o(t, e), t;
      })(p),
      y = "numeric",
      x = "short",
      k = "long",
      C = { year: y, month: y, day: y },
      $ = { year: y, month: x, day: y },
      T = { year: y, month: x, day: y, weekday: x },
      I = { year: y, month: k, day: y },
      S = { year: y, month: k, day: y, weekday: k },
      N = { hour: y, minute: y },
      q = { hour: y, minute: y, second: y },
      D = { hour: y, minute: y, second: y, timeZoneName: x },
      M = { hour: y, minute: y, second: y, timeZoneName: k },
      U = { hour: y, minute: y, hour12: !1 },
      z = { hour: y, minute: y, second: y, hour12: !1 },
      A = { hour: y, minute: y, second: y, hour12: !1, timeZoneName: x },
      E = { hour: y, minute: y, second: y, hour12: !1, timeZoneName: k },
      L = { year: y, month: y, day: y, hour: y, minute: y },
      O = { year: y, month: y, day: y, hour: y, minute: y, second: y },
      j = { year: y, month: x, day: y, hour: y, minute: y },
      B = { year: y, month: x, day: y, hour: y, minute: y, second: y },
      F = { year: y, month: x, day: y, weekday: x, hour: y, minute: y },
      R = { year: y, month: k, day: y, hour: y, minute: y, timeZoneName: x },
      P = {
        year: y,
        month: k,
        day: y,
        hour: y,
        minute: y,
        second: y,
        timeZoneName: x,
      },
      V = {
        year: y,
        month: k,
        day: y,
        weekday: k,
        hour: y,
        minute: y,
        timeZoneName: k,
      },
      _ = {
        year: y,
        month: k,
        day: y,
        weekday: k,
        hour: y,
        minute: y,
        second: y,
        timeZoneName: k,
      };
    function H(e) {
      return void 0 === e;
    }
    function G(e) {
      return "number" == typeof e;
    }
    function Z(e) {
      return "number" == typeof e && e % 1 == 0;
    }
    function W() {
      try {
        return "undefined" != typeof Intl && Intl.DateTimeFormat;
      } catch (e) {
        return !1;
      }
    }
    function K() {
      return !H(Intl.DateTimeFormat.prototype.formatToParts);
    }
    function Y() {
      try {
        return "undefined" != typeof Intl && !!Intl.RelativeTimeFormat;
      } catch (e) {
        return !1;
      }
    }
    function X(e, t, n) {
      if (0 !== e.length)
        return e.reduce(function (e, i) {
          var o = [t(i), i];
          return e && n(e[0], o[0]) === e[0] ? e : o;
        }, null)[1];
    }
    function J(e, t) {
      return t.reduce(function (t, n) {
        return (t[n] = e[n]), t;
      }, {});
    }
    function Q(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }
    function ee(e, t, n) {
      return Z(e) && e >= t && e <= n;
    }
    function te(e, t) {
      return (
        void 0 === t && (t = 2),
        e.toString().length < t ? ("0".repeat(t) + e).slice(-t) : e.toString()
      );
    }
    function ne(e) {
      return H(e) || null === e || "" === e ? void 0 : parseInt(e, 10);
    }
    function ie(e) {
      if (!H(e) && null !== e && "" !== e) {
        var t = 1e3 * parseFloat("0." + e);
        return Math.floor(t);
      }
    }
    function oe(e, t, n) {
      void 0 === n && (n = !1);
      var i = Math.pow(10, t);
      return (n ? Math.trunc : Math.round)(e * i) / i;
    }
    function ae(e) {
      return e % 4 == 0 && (e % 100 != 0 || e % 400 == 0);
    }
    function re(e) {
      return ae(e) ? 366 : 365;
    }
    function se(e, t) {
      var n =
        (function (e, t) {
          return e - t * Math.floor(e / t);
        })(t - 1, 12) + 1;
      return 2 === n
        ? ae(e + (t - n) / 12)
          ? 29
          : 28
        : [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][n - 1];
    }
    function le(e) {
      var t = Date.UTC(
        e.year,
        e.month - 1,
        e.day,
        e.hour,
        e.minute,
        e.second,
        e.millisecond
      );
      return (
        e.year < 100 &&
          e.year >= 0 &&
          (t = new Date(t)).setUTCFullYear(t.getUTCFullYear() - 1900),
        +t
      );
    }
    function ce(e) {
      var t =
          (e + Math.floor(e / 4) - Math.floor(e / 100) + Math.floor(e / 400)) %
          7,
        n = e - 1,
        i =
          (n + Math.floor(n / 4) - Math.floor(n / 100) + Math.floor(n / 400)) %
          7;
      return 4 === t || 3 === i ? 53 : 52;
    }
    function ue(e) {
      return e > 99 ? e : e > 60 ? 1900 + e : 2e3 + e;
    }
    function de(e, t, n, i) {
      void 0 === i && (i = null);
      var o = new Date(e),
        a = {
          hour12: !1,
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
        };
      i && (a.timeZone = i);
      var r = Object.assign({ timeZoneName: t }, a),
        s = W();
      if (s && K()) {
        var l = new Intl.DateTimeFormat(n, r)
          .formatToParts(o)
          .find(function (e) {
            return "timezonename" === e.type.toLowerCase();
          });
        return l ? l.value : null;
      }
      if (s) {
        var c = new Intl.DateTimeFormat(n, a).format(o);
        return new Intl.DateTimeFormat(n, r)
          .format(o)
          .substring(c.length)
          .replace(/^[, \u200e]+/, "");
      }
      return null;
    }
    function pe(e, t) {
      var n = parseInt(e, 10);
      Number.isNaN(n) && (n = 0);
      var i = parseInt(t, 10) || 0;
      return 60 * n + (n < 0 || Object.is(n, -0) ? -i : i);
    }
    function he(e) {
      var t = Number(e);
      if ("boolean" == typeof e || "" === e || Number.isNaN(t))
        throw new w("Invalid unit value " + e);
      return t;
    }
    function fe(e, t, n) {
      var i = {};
      for (var o in e)
        if (Q(e, o)) {
          if (n.indexOf(o) >= 0) continue;
          var a = e[o];
          if (null == a) continue;
          i[t(o)] = he(a);
        }
      return i;
    }
    function me(e, t) {
      var n = Math.trunc(Math.abs(e / 60)),
        i = Math.trunc(Math.abs(e % 60)),
        o = e >= 0 ? "+" : "-";
      switch (t) {
        case "short":
          return "" + o + te(n, 2) + ":" + te(i, 2);
        case "narrow":
          return "" + o + n + (i > 0 ? ":" + i : "");
        case "techie":
          return "" + o + te(n, 2) + te(i, 2);
        default:
          throw new RangeError(
            "Value format " + t + " is out of range for property format"
          );
      }
    }
    function ve(e) {
      return J(e, ["hour", "minute", "second", "millisecond"]);
    }
    var ge =
      /[A-Za-z_+-]{1,256}(:?\/[A-Za-z_+-]{1,256}(\/[A-Za-z_+-]{1,256})?)?/;
    function we(e) {
      return JSON.stringify(e, Object.keys(e).sort());
    }
    var be = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      ye = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      xe = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
    function ke(e) {
      switch (e) {
        case "narrow":
          return xe;
        case "short":
          return ye;
        case "long":
          return be;
        case "numeric":
          return [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "11",
            "12",
          ];
        case "2-digit":
          return [
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07",
            "08",
            "09",
            "10",
            "11",
            "12",
          ];
        default:
          return null;
      }
    }
    var Ce = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      $e = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      Te = ["M", "T", "W", "T", "F", "S", "S"];
    function Ie(e) {
      switch (e) {
        case "narrow":
          return Te;
        case "short":
          return $e;
        case "long":
          return Ce;
        case "numeric":
          return ["1", "2", "3", "4", "5", "6", "7"];
        default:
          return null;
      }
    }
    var Se = ["AM", "PM"],
      Ne = ["Before Christ", "Anno Domini"],
      qe = ["BC", "AD"],
      De = ["B", "A"];
    function Me(e) {
      switch (e) {
        case "narrow":
          return De;
        case "short":
          return qe;
        case "long":
          return Ne;
        default:
          return null;
      }
    }
    function Ue(e, t) {
      for (var n, i = "", o = d(e); !(n = o()).done; ) {
        var a = n.value;
        a.literal ? (i += a.val) : (i += t(a.val));
      }
      return i;
    }
    var ze = {
        D: C,
        DD: $,
        DDD: I,
        DDDD: S,
        t: N,
        tt: q,
        ttt: D,
        tttt: M,
        T: U,
        TT: z,
        TTT: A,
        TTTT: E,
        f: L,
        ff: j,
        fff: R,
        ffff: V,
        F: O,
        FF: B,
        FFF: P,
        FFFF: _,
      },
      Ae = (function () {
        function e(e, t) {
          (this.opts = t), (this.loc = e), (this.systemLoc = null);
        }
        (e.create = function (t, n) {
          return void 0 === n && (n = {}), new e(t, n);
        }),
          (e.parseFormat = function (e) {
            for (
              var t = null, n = "", i = !1, o = [], a = 0;
              a < e.length;
              a++
            ) {
              var r = e.charAt(a);
              "'" === r
                ? (n.length > 0 && o.push({ literal: i, val: n }),
                  (t = null),
                  (n = ""),
                  (i = !i))
                : i || r === t
                ? (n += r)
                : (n.length > 0 && o.push({ literal: !1, val: n }),
                  (n = r),
                  (t = r));
            }
            return n.length > 0 && o.push({ literal: i, val: n }), o;
          }),
          (e.macroTokenToFormatOpts = function (e) {
            return ze[e];
          });
        var t = e.prototype;
        return (
          (t.formatWithSystemDefault = function (e, t) {
            return (
              null === this.systemLoc &&
                (this.systemLoc = this.loc.redefaultToSystem()),
              this.systemLoc
                .dtFormatter(e, Object.assign({}, this.opts, t))
                .format()
            );
          }),
          (t.formatDateTime = function (e, t) {
            return (
              void 0 === t && (t = {}),
              this.loc.dtFormatter(e, Object.assign({}, this.opts, t)).format()
            );
          }),
          (t.formatDateTimeParts = function (e, t) {
            return (
              void 0 === t && (t = {}),
              this.loc
                .dtFormatter(e, Object.assign({}, this.opts, t))
                .formatToParts()
            );
          }),
          (t.resolvedOptions = function (e, t) {
            return (
              void 0 === t && (t = {}),
              this.loc
                .dtFormatter(e, Object.assign({}, this.opts, t))
                .resolvedOptions()
            );
          }),
          (t.num = function (e, t) {
            if ((void 0 === t && (t = 0), this.opts.forceSimple))
              return te(e, t);
            var n = Object.assign({}, this.opts);
            return (
              t > 0 && (n.padTo = t), this.loc.numberFormatter(n).format(e)
            );
          }),
          (t.formatDateTimeFromString = function (t, n) {
            var i = this,
              o = "en" === this.loc.listingMode(),
              a =
                this.loc.outputCalendar &&
                "gregory" !== this.loc.outputCalendar &&
                K(),
              r = function (e, n) {
                return i.loc.extract(t, e, n);
              },
              s = function (e) {
                return t.isOffsetFixed && 0 === t.offset && e.allowZ
                  ? "Z"
                  : t.isValid
                  ? t.zone.formatOffset(t.ts, e.format)
                  : "";
              },
              l = function () {
                return o
                  ? (function (e) {
                      return Se[e.hour < 12 ? 0 : 1];
                    })(t)
                  : r({ hour: "numeric", hour12: !0 }, "dayperiod");
              },
              c = function (e, n) {
                return o
                  ? (function (e, t) {
                      return ke(t)[e.month - 1];
                    })(t, e)
                  : r(n ? { month: e } : { month: e, day: "numeric" }, "month");
              },
              u = function (e, n) {
                return o
                  ? (function (e, t) {
                      return Ie(t)[e.weekday - 1];
                    })(t, e)
                  : r(
                      n
                        ? { weekday: e }
                        : { weekday: e, month: "long", day: "numeric" },
                      "weekday"
                    );
              },
              d = function (e) {
                return o
                  ? (function (e, t) {
                      return Me(t)[e.year < 0 ? 0 : 1];
                    })(t, e)
                  : r({ era: e }, "era");
              };
            return Ue(e.parseFormat(n), function (n) {
              switch (n) {
                case "S":
                  return i.num(t.millisecond);
                case "u":
                case "SSS":
                  return i.num(t.millisecond, 3);
                case "s":
                  return i.num(t.second);
                case "ss":
                  return i.num(t.second, 2);
                case "m":
                  return i.num(t.minute);
                case "mm":
                  return i.num(t.minute, 2);
                case "h":
                  return i.num(t.hour % 12 == 0 ? 12 : t.hour % 12);
                case "hh":
                  return i.num(t.hour % 12 == 0 ? 12 : t.hour % 12, 2);
                case "H":
                  return i.num(t.hour);
                case "HH":
                  return i.num(t.hour, 2);
                case "Z":
                  return s({ format: "narrow", allowZ: i.opts.allowZ });
                case "ZZ":
                  return s({ format: "short", allowZ: i.opts.allowZ });
                case "ZZZ":
                  return s({ format: "techie", allowZ: i.opts.allowZ });
                case "ZZZZ":
                  return t.zone.offsetName(t.ts, {
                    format: "short",
                    locale: i.loc.locale,
                  });
                case "ZZZZZ":
                  return t.zone.offsetName(t.ts, {
                    format: "long",
                    locale: i.loc.locale,
                  });
                case "z":
                  return t.zoneName;
                case "a":
                  return l();
                case "d":
                  return a ? r({ day: "numeric" }, "day") : i.num(t.day);
                case "dd":
                  return a ? r({ day: "2-digit" }, "day") : i.num(t.day, 2);
                case "c":
                  return i.num(t.weekday);
                case "ccc":
                  return u("short", !0);
                case "cccc":
                  return u("long", !0);
                case "ccccc":
                  return u("narrow", !0);
                case "E":
                  return i.num(t.weekday);
                case "EEE":
                  return u("short", !1);
                case "EEEE":
                  return u("long", !1);
                case "EEEEE":
                  return u("narrow", !1);
                case "L":
                  return a
                    ? r({ month: "numeric", day: "numeric" }, "month")
                    : i.num(t.month);
                case "LL":
                  return a
                    ? r({ month: "2-digit", day: "numeric" }, "month")
                    : i.num(t.month, 2);
                case "LLL":
                  return c("short", !0);
                case "LLLL":
                  return c("long", !0);
                case "LLLLL":
                  return c("narrow", !0);
                case "M":
                  return a ? r({ month: "numeric" }, "month") : i.num(t.month);
                case "MM":
                  return a
                    ? r({ month: "2-digit" }, "month")
                    : i.num(t.month, 2);
                case "MMM":
                  return c("short", !1);
                case "MMMM":
                  return c("long", !1);
                case "MMMMM":
                  return c("narrow", !1);
                case "y":
                  return a ? r({ year: "numeric" }, "year") : i.num(t.year);
                case "yy":
                  return a
                    ? r({ year: "2-digit" }, "year")
                    : i.num(t.year.toString().slice(-2), 2);
                case "yyyy":
                  return a ? r({ year: "numeric" }, "year") : i.num(t.year, 4);
                case "yyyyyy":
                  return a ? r({ year: "numeric" }, "year") : i.num(t.year, 6);
                case "G":
                  return d("short");
                case "GG":
                  return d("long");
                case "GGGGG":
                  return d("narrow");
                case "kk":
                  return i.num(t.weekYear.toString().slice(-2), 2);
                case "kkkk":
                  return i.num(t.weekYear, 4);
                case "W":
                  return i.num(t.weekNumber);
                case "WW":
                  return i.num(t.weekNumber, 2);
                case "o":
                  return i.num(t.ordinal);
                case "ooo":
                  return i.num(t.ordinal, 3);
                case "q":
                  return i.num(t.quarter);
                case "qq":
                  return i.num(t.quarter, 2);
                case "X":
                  return i.num(Math.floor(t.ts / 1e3));
                case "x":
                  return i.num(t.ts);
                default:
                  return (function (n) {
                    var o = e.macroTokenToFormatOpts(n);
                    return o ? i.formatWithSystemDefault(t, o) : n;
                  })(n);
              }
            });
          }),
          (t.formatDurationFromString = function (t, n) {
            var i,
              o = this,
              a = function (e) {
                switch (e[0]) {
                  case "S":
                    return "millisecond";
                  case "s":
                    return "second";
                  case "m":
                    return "minute";
                  case "h":
                    return "hour";
                  case "d":
                    return "day";
                  case "M":
                    return "month";
                  case "y":
                    return "year";
                  default:
                    return null;
                }
              },
              r = e.parseFormat(n),
              s = r.reduce(function (e, t) {
                var n = t.literal,
                  i = t.val;
                return n ? e : e.concat(i);
              }, []),
              l = t.shiftTo.apply(
                t,
                s.map(a).filter(function (e) {
                  return e;
                })
              );
            return Ue(
              r,
              ((i = l),
              function (e) {
                var t = a(e);
                return t ? o.num(i.get(t), e.length) : e;
              })
            );
          }),
          e
        );
      })(),
      Ee = (function () {
        function e(e, t) {
          (this.reason = e), (this.explanation = t);
        }
        return (
          (e.prototype.toMessage = function () {
            return this.explanation
              ? this.reason + ": " + this.explanation
              : this.reason;
          }),
          e
        );
      })(),
      Le = (function () {
        function e() {}
        var t = e.prototype;
        return (
          (t.offsetName = function (e, t) {
            throw new b();
          }),
          (t.formatOffset = function (e, t) {
            throw new b();
          }),
          (t.offset = function (e) {
            throw new b();
          }),
          (t.equals = function (e) {
            throw new b();
          }),
          i(e, [
            {
              key: "type",
              get: function () {
                throw new b();
              },
            },
            {
              key: "name",
              get: function () {
                throw new b();
              },
            },
            {
              key: "universal",
              get: function () {
                throw new b();
              },
            },
            {
              key: "isValid",
              get: function () {
                throw new b();
              },
            },
          ]),
          e
        );
      })(),
      Oe = null,
      je = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        o(t, e);
        var n = t.prototype;
        return (
          (n.offsetName = function (e, t) {
            return de(e, t.format, t.locale);
          }),
          (n.formatOffset = function (e, t) {
            return me(this.offset(e), t);
          }),
          (n.offset = function (e) {
            return -new Date(e).getTimezoneOffset();
          }),
          (n.equals = function (e) {
            return "local" === e.type;
          }),
          i(
            t,
            [
              {
                key: "type",
                get: function () {
                  return "local";
                },
              },
              {
                key: "name",
                get: function () {
                  return W()
                    ? new Intl.DateTimeFormat().resolvedOptions().timeZone
                    : "local";
                },
              },
              {
                key: "universal",
                get: function () {
                  return !1;
                },
              },
              {
                key: "isValid",
                get: function () {
                  return !0;
                },
              },
            ],
            [
              {
                key: "instance",
                get: function () {
                  return null === Oe && (Oe = new t()), Oe;
                },
              },
            ]
          ),
          t
        );
      })(Le),
      Be = RegExp("^" + ge.source + "$"),
      Fe = {};
    var Re = { year: 0, month: 1, day: 2, hour: 3, minute: 4, second: 5 };
    var Pe = {},
      Ve = (function (e) {
        function t(n) {
          var i;
          return (
            ((i = e.call(this) || this).zoneName = n),
            (i.valid = t.isValidZone(n)),
            i
          );
        }
        o(t, e),
          (t.create = function (e) {
            return Pe[e] || (Pe[e] = new t(e)), Pe[e];
          }),
          (t.resetCache = function () {
            (Pe = {}), (Fe = {});
          }),
          (t.isValidSpecifier = function (e) {
            return !(!e || !e.match(Be));
          }),
          (t.isValidZone = function (e) {
            try {
              return (
                new Intl.DateTimeFormat("en-US", { timeZone: e }).format(), !0
              );
            } catch (e) {
              return !1;
            }
          }),
          (t.parseGMTOffset = function (e) {
            if (e) {
              var t = e.match(/^Etc\/GMT([+-]\d{1,2})$/i);
              if (t) return -60 * parseInt(t[1]);
            }
            return null;
          });
        var n = t.prototype;
        return (
          (n.offsetName = function (e, t) {
            return de(e, t.format, t.locale, this.name);
          }),
          (n.formatOffset = function (e, t) {
            return me(this.offset(e), t);
          }),
          (n.offset = function (e) {
            var t,
              n = new Date(e),
              i =
                ((t = this.name),
                Fe[t] ||
                  (Fe[t] = new Intl.DateTimeFormat("en-US", {
                    hour12: !1,
                    timeZone: t,
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                  })),
                Fe[t]),
              o = i.formatToParts
                ? (function (e, t) {
                    for (
                      var n = e.formatToParts(t), i = [], o = 0;
                      o < n.length;
                      o++
                    ) {
                      var a = n[o],
                        r = a.type,
                        s = a.value,
                        l = Re[r];
                      H(l) || (i[l] = parseInt(s, 10));
                    }
                    return i;
                  })(i, n)
                : (function (e, t) {
                    var n = e.format(t).replace(/\u200E/g, ""),
                      i = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(n),
                      o = i[1],
                      a = i[2];
                    return [i[3], o, a, i[4], i[5], i[6]];
                  })(i, n),
              a = o[0],
              r = o[1],
              s = o[2],
              l = o[3],
              c = +n,
              u = c % 1e3;
            return (
              (le({
                year: a,
                month: r,
                day: s,
                hour: 24 === l ? 0 : l,
                minute: o[4],
                second: o[5],
                millisecond: 0,
              }) -
                (c -= u >= 0 ? u : 1e3 + u)) /
              6e4
            );
          }),
          (n.equals = function (e) {
            return "iana" === e.type && e.name === this.name;
          }),
          i(t, [
            {
              key: "type",
              get: function () {
                return "iana";
              },
            },
            {
              key: "name",
              get: function () {
                return this.zoneName;
              },
            },
            {
              key: "universal",
              get: function () {
                return !1;
              },
            },
            {
              key: "isValid",
              get: function () {
                return this.valid;
              },
            },
          ]),
          t
        );
      })(Le),
      _e = null,
      He = (function (e) {
        function t(t) {
          var n;
          return ((n = e.call(this) || this).fixed = t), n;
        }
        o(t, e),
          (t.instance = function (e) {
            return 0 === e ? t.utcInstance : new t(e);
          }),
          (t.parseSpecifier = function (e) {
            if (e) {
              var n = e.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
              if (n) return new t(pe(n[1], n[2]));
            }
            return null;
          }),
          i(t, null, [
            {
              key: "utcInstance",
              get: function () {
                return null === _e && (_e = new t(0)), _e;
              },
            },
          ]);
        var n = t.prototype;
        return (
          (n.offsetName = function () {
            return this.name;
          }),
          (n.formatOffset = function (e, t) {
            return me(this.fixed, t);
          }),
          (n.offset = function () {
            return this.fixed;
          }),
          (n.equals = function (e) {
            return "fixed" === e.type && e.fixed === this.fixed;
          }),
          i(t, [
            {
              key: "type",
              get: function () {
                return "fixed";
              },
            },
            {
              key: "name",
              get: function () {
                return 0 === this.fixed
                  ? "UTC"
                  : "UTC" + me(this.fixed, "narrow");
              },
            },
            {
              key: "universal",
              get: function () {
                return !0;
              },
            },
            {
              key: "isValid",
              get: function () {
                return !0;
              },
            },
          ]),
          t
        );
      })(Le),
      Ge = (function (e) {
        function t(t) {
          var n;
          return ((n = e.call(this) || this).zoneName = t), n;
        }
        o(t, e);
        var n = t.prototype;
        return (
          (n.offsetName = function () {
            return null;
          }),
          (n.formatOffset = function () {
            return "";
          }),
          (n.offset = function () {
            return NaN;
          }),
          (n.equals = function () {
            return !1;
          }),
          i(t, [
            {
              key: "type",
              get: function () {
                return "invalid";
              },
            },
            {
              key: "name",
              get: function () {
                return this.zoneName;
              },
            },
            {
              key: "universal",
              get: function () {
                return !1;
              },
            },
            {
              key: "isValid",
              get: function () {
                return !1;
              },
            },
          ]),
          t
        );
      })(Le);
    function Ze(e, t) {
      var n;
      if (H(e) || null === e) return t;
      if (e instanceof Le) return e;
      if ("string" == typeof e) {
        var i = e.toLowerCase();
        return "local" === i
          ? t
          : "utc" === i || "gmt" === i
          ? He.utcInstance
          : null != (n = Ve.parseGMTOffset(e))
          ? He.instance(n)
          : Ve.isValidSpecifier(i)
          ? Ve.create(e)
          : He.parseSpecifier(i) || new Ge(e);
      }
      return G(e)
        ? He.instance(e)
        : "object" == typeof e && e.offset && "number" == typeof e.offset
        ? e
        : new Ge(e);
    }
    var We = function () {
        return Date.now();
      },
      Ke = null,
      Ye = null,
      Xe = null,
      Je = null,
      Qe = !1,
      et = (function () {
        function e() {}
        return (
          (e.resetCaches = function () {
            dt.resetCache(), Ve.resetCache();
          }),
          i(e, null, [
            {
              key: "now",
              get: function () {
                return We;
              },
              set: function (e) {
                We = e;
              },
            },
            {
              key: "defaultZoneName",
              get: function () {
                return e.defaultZone.name;
              },
              set: function (e) {
                Ke = e ? Ze(e) : null;
              },
            },
            {
              key: "defaultZone",
              get: function () {
                return Ke || je.instance;
              },
            },
            {
              key: "defaultLocale",
              get: function () {
                return Ye;
              },
              set: function (e) {
                Ye = e;
              },
            },
            {
              key: "defaultNumberingSystem",
              get: function () {
                return Xe;
              },
              set: function (e) {
                Xe = e;
              },
            },
            {
              key: "defaultOutputCalendar",
              get: function () {
                return Je;
              },
              set: function (e) {
                Je = e;
              },
            },
            {
              key: "throwOnInvalid",
              get: function () {
                return Qe;
              },
              set: function (e) {
                Qe = e;
              },
            },
          ]),
          e
        );
      })(),
      tt = {};
    function nt(e, t) {
      void 0 === t && (t = {});
      var n = JSON.stringify([e, t]),
        i = tt[n];
      return i || ((i = new Intl.DateTimeFormat(e, t)), (tt[n] = i)), i;
    }
    var it = {};
    var ot = {};
    function at(e, t) {
      void 0 === t && (t = {});
      var n = t,
        i =
          (n.base,
          (function (e, t) {
            if (null == e) return {};
            var n,
              i,
              o = {},
              a = Object.keys(e);
            for (i = 0; i < a.length; i++)
              (n = a[i]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(n, ["base"])),
        o = JSON.stringify([e, i]),
        a = ot[o];
      return a || ((a = new Intl.RelativeTimeFormat(e, t)), (ot[o] = a)), a;
    }
    var rt = null;
    function st(e, t, n, i, o) {
      var a = e.listingMode(n);
      return "error" === a ? null : "en" === a ? i(t) : o(t);
    }
    var lt = (function () {
        function e(e, t, n) {
          if (
            ((this.padTo = n.padTo || 0),
            (this.floor = n.floor || !1),
            !t && W())
          ) {
            var i = { useGrouping: !1 };
            n.padTo > 0 && (i.minimumIntegerDigits = n.padTo),
              (this.inf = (function (e, t) {
                void 0 === t && (t = {});
                var n = JSON.stringify([e, t]),
                  i = it[n];
                return i || ((i = new Intl.NumberFormat(e, t)), (it[n] = i)), i;
              })(e, i));
          }
        }
        return (
          (e.prototype.format = function (e) {
            if (this.inf) {
              var t = this.floor ? Math.floor(e) : e;
              return this.inf.format(t);
            }
            return te(this.floor ? Math.floor(e) : oe(e, 3), this.padTo);
          }),
          e
        );
      })(),
      ct = (function () {
        function e(e, t, n) {
          var i;
          if (
            ((this.opts = n),
            (this.hasIntl = W()),
            e.zone.universal && this.hasIntl
              ? ((i = "UTC"),
                n.timeZoneName
                  ? (this.dt = e)
                  : (this.dt =
                      0 === e.offset
                        ? e
                        : di.fromMillis(e.ts + 60 * e.offset * 1e3)))
              : "local" === e.zone.type
              ? (this.dt = e)
              : ((this.dt = e), (i = e.zone.name)),
            this.hasIntl)
          ) {
            var o = Object.assign({}, this.opts);
            i && (o.timeZone = i), (this.dtf = nt(t, o));
          }
        }
        var t = e.prototype;
        return (
          (t.format = function () {
            if (this.hasIntl) return this.dtf.format(this.dt.toJSDate());
            var e = (function (e) {
                var t = "EEEE, LLLL d, yyyy, h:mm a";
                switch (
                  we(
                    J(e, [
                      "weekday",
                      "era",
                      "year",
                      "month",
                      "day",
                      "hour",
                      "minute",
                      "second",
                      "timeZoneName",
                      "hour12",
                    ])
                  )
                ) {
                  case we(C):
                    return "M/d/yyyy";
                  case we($):
                    return "LLL d, yyyy";
                  case we(T):
                    return "EEE, LLL d, yyyy";
                  case we(I):
                    return "LLLL d, yyyy";
                  case we(S):
                    return "EEEE, LLLL d, yyyy";
                  case we(N):
                    return "h:mm a";
                  case we(q):
                    return "h:mm:ss a";
                  case we(D):
                  case we(M):
                    return "h:mm a";
                  case we(U):
                    return "HH:mm";
                  case we(z):
                    return "HH:mm:ss";
                  case we(A):
                  case we(E):
                    return "HH:mm";
                  case we(L):
                    return "M/d/yyyy, h:mm a";
                  case we(j):
                    return "LLL d, yyyy, h:mm a";
                  case we(R):
                    return "LLLL d, yyyy, h:mm a";
                  case we(V):
                    return t;
                  case we(O):
                    return "M/d/yyyy, h:mm:ss a";
                  case we(B):
                    return "LLL d, yyyy, h:mm:ss a";
                  case we(F):
                    return "EEE, d LLL yyyy, h:mm a";
                  case we(P):
                    return "LLLL d, yyyy, h:mm:ss a";
                  case we(_):
                    return "EEEE, LLLL d, yyyy, h:mm:ss a";
                  default:
                    return t;
                }
              })(this.opts),
              t = dt.create("en-US");
            return Ae.create(t).formatDateTimeFromString(this.dt, e);
          }),
          (t.formatToParts = function () {
            return this.hasIntl && K()
              ? this.dtf.formatToParts(this.dt.toJSDate())
              : [];
          }),
          (t.resolvedOptions = function () {
            return this.hasIntl
              ? this.dtf.resolvedOptions()
              : {
                  locale: "en-US",
                  numberingSystem: "latn",
                  outputCalendar: "gregory",
                };
          }),
          e
        );
      })(),
      ut = (function () {
        function e(e, t, n) {
          (this.opts = Object.assign({ style: "long" }, n)),
            !t && Y() && (this.rtf = at(e, n));
        }
        var t = e.prototype;
        return (
          (t.format = function (e, t) {
            return this.rtf
              ? this.rtf.format(e, t)
              : (function (e, t, n, i) {
                  void 0 === n && (n = "always"), void 0 === i && (i = !1);
                  var o = {
                      years: ["year", "yr."],
                      quarters: ["quarter", "qtr."],
                      months: ["month", "mo."],
                      weeks: ["week", "wk."],
                      days: ["day", "day", "days"],
                      hours: ["hour", "hr."],
                      minutes: ["minute", "min."],
                      seconds: ["second", "sec."],
                    },
                    a = -1 === ["hours", "minutes", "seconds"].indexOf(e);
                  if ("auto" === n && a) {
                    var r = "days" === e;
                    switch (t) {
                      case 1:
                        return r ? "tomorrow" : "next " + o[e][0];
                      case -1:
                        return r ? "yesterday" : "last " + o[e][0];
                      case 0:
                        return r ? "today" : "this " + o[e][0];
                    }
                  }
                  var s = Object.is(t, -0) || t < 0,
                    l = Math.abs(t),
                    c = 1 === l,
                    u = o[e],
                    d = i ? (c ? u[1] : u[2] || u[1]) : c ? o[e][0] : e;
                  return s ? l + " " + d + " ago" : "in " + l + " " + d;
                })(t, e, this.opts.numeric, "long" !== this.opts.style);
          }),
          (t.formatToParts = function (e, t) {
            return this.rtf ? this.rtf.formatToParts(e, t) : [];
          }),
          e
        );
      })(),
      dt = (function () {
        function e(e, t, n, i) {
          var o = (function (e) {
              var t = e.indexOf("-u-");
              if (-1 === t) return [e];
              var n,
                i = e.substring(0, t);
              try {
                n = nt(e).resolvedOptions();
              } catch (e) {
                n = nt(i).resolvedOptions();
              }
              var o = n;
              return [i, o.numberingSystem, o.calendar];
            })(e),
            a = o[0],
            r = o[1],
            s = o[2];
          (this.locale = a),
            (this.numberingSystem = t || r || null),
            (this.outputCalendar = n || s || null),
            (this.intl = (function (e, t, n) {
              return W()
                ? n || t
                  ? ((e += "-u"),
                    n && (e += "-ca-" + n),
                    t && (e += "-nu-" + t),
                    e)
                  : e
                : [];
            })(this.locale, this.numberingSystem, this.outputCalendar)),
            (this.weekdaysCache = { format: {}, standalone: {} }),
            (this.monthsCache = { format: {}, standalone: {} }),
            (this.meridiemCache = null),
            (this.eraCache = {}),
            (this.specifiedLocale = i),
            (this.fastNumbersCached = null);
        }
        (e.fromOpts = function (t) {
          return e.create(
            t.locale,
            t.numberingSystem,
            t.outputCalendar,
            t.defaultToEN
          );
        }),
          (e.create = function (t, n, i, o) {
            void 0 === o && (o = !1);
            var a = t || et.defaultLocale;
            return new e(
              a ||
                (o
                  ? "en-US"
                  : (function () {
                      if (rt) return rt;
                      if (W()) {
                        var e = new Intl.DateTimeFormat().resolvedOptions()
                          .locale;
                        return (rt = e && "und" !== e ? e : "en-US");
                      }
                      return (rt = "en-US");
                    })()),
              n || et.defaultNumberingSystem,
              i || et.defaultOutputCalendar,
              a
            );
          }),
          (e.resetCache = function () {
            (rt = null), (tt = {}), (it = {}), (ot = {});
          }),
          (e.fromObject = function (t) {
            var n = void 0 === t ? {} : t,
              i = n.locale,
              o = n.numberingSystem,
              a = n.outputCalendar;
            return e.create(i, o, a);
          });
        var t = e.prototype;
        return (
          (t.listingMode = function (e) {
            void 0 === e && (e = !0);
            var t = W() && K(),
              n = this.isEnglish(),
              i = !(
                (null !== this.numberingSystem &&
                  "latn" !== this.numberingSystem) ||
                (null !== this.outputCalendar &&
                  "gregory" !== this.outputCalendar)
              );
            return t || (n && i) || e
              ? !t || (n && i)
                ? "en"
                : "intl"
              : "error";
          }),
          (t.clone = function (t) {
            return t && 0 !== Object.getOwnPropertyNames(t).length
              ? e.create(
                  t.locale || this.specifiedLocale,
                  t.numberingSystem || this.numberingSystem,
                  t.outputCalendar || this.outputCalendar,
                  t.defaultToEN || !1
                )
              : this;
          }),
          (t.redefaultToEN = function (e) {
            return (
              void 0 === e && (e = {}),
              this.clone(Object.assign({}, e, { defaultToEN: !0 }))
            );
          }),
          (t.redefaultToSystem = function (e) {
            return (
              void 0 === e && (e = {}),
              this.clone(Object.assign({}, e, { defaultToEN: !1 }))
            );
          }),
          (t.months = function (e, t, n) {
            var i = this;
            return (
              void 0 === t && (t = !1),
              void 0 === n && (n = !0),
              st(this, e, n, ke, function () {
                var n = t ? { month: e, day: "numeric" } : { month: e },
                  o = t ? "format" : "standalone";
                return (
                  i.monthsCache[o][e] ||
                    (i.monthsCache[o][e] = (function (e) {
                      for (var t = [], n = 1; n <= 12; n++) {
                        var i = di.utc(2016, n, 1);
                        t.push(e(i));
                      }
                      return t;
                    })(function (e) {
                      return i.extract(e, n, "month");
                    })),
                  i.monthsCache[o][e]
                );
              })
            );
          }),
          (t.weekdays = function (e, t, n) {
            var i = this;
            return (
              void 0 === t && (t = !1),
              void 0 === n && (n = !0),
              st(this, e, n, Ie, function () {
                var n = t
                    ? {
                        weekday: e,
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      }
                    : { weekday: e },
                  o = t ? "format" : "standalone";
                return (
                  i.weekdaysCache[o][e] ||
                    (i.weekdaysCache[o][e] = (function (e) {
                      for (var t = [], n = 1; n <= 7; n++) {
                        var i = di.utc(2016, 11, 13 + n);
                        t.push(e(i));
                      }
                      return t;
                    })(function (e) {
                      return i.extract(e, n, "weekday");
                    })),
                  i.weekdaysCache[o][e]
                );
              })
            );
          }),
          (t.meridiems = function (e) {
            var t = this;
            return (
              void 0 === e && (e = !0),
              st(
                this,
                void 0,
                e,
                function () {
                  return Se;
                },
                function () {
                  if (!t.meridiemCache) {
                    var e = { hour: "numeric", hour12: !0 };
                    t.meridiemCache = [
                      di.utc(2016, 11, 13, 9),
                      di.utc(2016, 11, 13, 19),
                    ].map(function (n) {
                      return t.extract(n, e, "dayperiod");
                    });
                  }
                  return t.meridiemCache;
                }
              )
            );
          }),
          (t.eras = function (e, t) {
            var n = this;
            return (
              void 0 === t && (t = !0),
              st(this, e, t, Me, function () {
                var t = { era: e };
                return (
                  n.eraCache[e] ||
                    (n.eraCache[e] = [
                      di.utc(-40, 1, 1),
                      di.utc(2017, 1, 1),
                    ].map(function (e) {
                      return n.extract(e, t, "era");
                    })),
                  n.eraCache[e]
                );
              })
            );
          }),
          (t.extract = function (e, t, n) {
            var i = this.dtFormatter(e, t)
              .formatToParts()
              .find(function (e) {
                return e.type.toLowerCase() === n;
              });
            return i ? i.value : null;
          }),
          (t.numberFormatter = function (e) {
            return (
              void 0 === e && (e = {}),
              new lt(this.intl, e.forceSimple || this.fastNumbers, e)
            );
          }),
          (t.dtFormatter = function (e, t) {
            return void 0 === t && (t = {}), new ct(e, this.intl, t);
          }),
          (t.relFormatter = function (e) {
            return (
              void 0 === e && (e = {}), new ut(this.intl, this.isEnglish(), e)
            );
          }),
          (t.isEnglish = function () {
            return (
              "en" === this.locale ||
              "en-us" === this.locale.toLowerCase() ||
              (W() &&
                new Intl.DateTimeFormat(this.intl)
                  .resolvedOptions()
                  .locale.startsWith("en-us"))
            );
          }),
          (t.equals = function (e) {
            return (
              this.locale === e.locale &&
              this.numberingSystem === e.numberingSystem &&
              this.outputCalendar === e.outputCalendar
            );
          }),
          i(e, [
            {
              key: "fastNumbers",
              get: function () {
                var e;
                return (
                  null == this.fastNumbersCached &&
                    (this.fastNumbersCached =
                      (!(e = this).numberingSystem ||
                        "latn" === e.numberingSystem) &&
                      ("latn" === e.numberingSystem ||
                        !e.locale ||
                        e.locale.startsWith("en") ||
                        (W() &&
                          "latn" ===
                            new Intl.DateTimeFormat(e.intl).resolvedOptions()
                              .numberingSystem))),
                  this.fastNumbersCached
                );
              },
            },
          ]),
          e
        );
      })();
    function pt() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      var i = t.reduce(function (e, t) {
        return e + t.source;
      }, "");
      return RegExp("^" + i + "$");
    }
    function ht() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      return function (e) {
        return t
          .reduce(
            function (t, n) {
              var i = t[0],
                o = t[1],
                a = t[2],
                r = n(e, a),
                s = r[0],
                l = r[1],
                c = r[2];
              return [Object.assign(i, s), o || l, c];
            },
            [{}, null, 1]
          )
          .slice(0, 2);
      };
    }
    function ft(e) {
      if (null == e) return [null, null];
      for (
        var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1;
        i < t;
        i++
      )
        n[i - 1] = arguments[i];
      for (var o = 0, a = n; o < a.length; o++) {
        var r = a[o],
          s = r[0],
          l = r[1],
          c = s.exec(e);
        if (c) return l(c);
      }
      return [null, null];
    }
    function mt() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      return function (e, n) {
        var i,
          o = {};
        for (i = 0; i < t.length; i++) o[t[i]] = ne(e[n + i]);
        return [o, null, n + i];
      };
    }
    var vt = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,
      gt = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,
      wt = RegExp("" + gt.source + vt.source + "?"),
      bt = RegExp("(?:T" + wt.source + ")?"),
      yt = mt("weekYear", "weekNumber", "weekDay"),
      xt = mt("year", "ordinal"),
      kt = RegExp(gt.source + " ?(?:" + vt.source + "|(" + ge.source + "))?"),
      Ct = RegExp("(?: " + kt.source + ")?");
    function $t(e, t, n) {
      var i = e[t];
      return H(i) ? n : ne(i);
    }
    function Tt(e, t) {
      return [
        { year: $t(e, t), month: $t(e, t + 1, 1), day: $t(e, t + 2, 1) },
        null,
        t + 3,
      ];
    }
    function It(e, t) {
      return [
        {
          hour: $t(e, t, 0),
          minute: $t(e, t + 1, 0),
          second: $t(e, t + 2, 0),
          millisecond: ie(e[t + 3]),
        },
        null,
        t + 4,
      ];
    }
    function St(e, t) {
      var n = !e[t] && !e[t + 1],
        i = pe(e[t + 1], e[t + 2]);
      return [{}, n ? null : He.instance(i), t + 3];
    }
    function Nt(e, t) {
      return [{}, e[t] ? Ve.create(e[t]) : null, t + 1];
    }
    var qt =
      /^-?P(?:(?:(-?\d{1,9})Y)?(?:(-?\d{1,9})M)?(?:(-?\d{1,9})W)?(?:(-?\d{1,9})D)?(?:T(?:(-?\d{1,9})H)?(?:(-?\d{1,9})M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,9}))?S)?)?)$/;
    function Dt(e) {
      var t = e[0],
        n = e[1],
        i = e[2],
        o = e[3],
        a = e[4],
        r = e[5],
        s = e[6],
        l = e[7],
        c = e[8],
        u = "-" === t[0],
        d = function (e) {
          return e && u ? -e : e;
        };
      return [
        {
          years: d(ne(n)),
          months: d(ne(i)),
          weeks: d(ne(o)),
          days: d(ne(a)),
          hours: d(ne(r)),
          minutes: d(ne(s)),
          seconds: d(ne(l)),
          milliseconds: d(ie(c)),
        },
      ];
    }
    var Mt = {
      GMT: 0,
      EDT: -240,
      EST: -300,
      CDT: -300,
      CST: -360,
      MDT: -360,
      MST: -420,
      PDT: -420,
      PST: -480,
    };
    function Ut(e, t, n, i, o, a, r) {
      var s = {
        year: 2 === t.length ? ue(ne(t)) : ne(t),
        month: ye.indexOf(n) + 1,
        day: ne(i),
        hour: ne(o),
        minute: ne(a),
      };
      return (
        r && (s.second = ne(r)),
        e && (s.weekday = e.length > 3 ? Ce.indexOf(e) + 1 : $e.indexOf(e) + 1),
        s
      );
    }
    var zt =
      /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;
    function At(e) {
      var t,
        n = e[1],
        i = e[2],
        o = e[3],
        a = e[4],
        r = e[5],
        s = e[6],
        l = e[7],
        c = e[8],
        u = e[9],
        d = e[10],
        p = e[11],
        h = Ut(n, a, o, i, r, s, l);
      return (t = c ? Mt[c] : u ? 0 : pe(d, p)), [h, new He(t)];
    }
    var Et =
        /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,
      Lt =
        /^(Monday|Tuesday|Wedsday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,
      Ot =
        /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;
    function jt(e) {
      var t = e[1],
        n = e[2],
        i = e[3];
      return [Ut(t, e[4], i, n, e[5], e[6], e[7]), He.utcInstance];
    }
    function Bt(e) {
      var t = e[1],
        n = e[2],
        i = e[3],
        o = e[4],
        a = e[5],
        r = e[6];
      return [Ut(t, e[7], n, i, o, a, r), He.utcInstance];
    }
    var Ft = pt(/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/, bt),
      Rt = pt(/(\d{4})-?W(\d\d)(?:-?(\d))?/, bt),
      Pt = pt(/(\d{4})-?(\d{3})/, bt),
      Vt = pt(wt),
      _t = ht(Tt, It, St),
      Ht = ht(yt, It, St),
      Gt = ht(xt, It),
      Zt = ht(It, St);
    var Wt = pt(/(\d{4})-(\d\d)-(\d\d)/, Ct),
      Kt = pt(kt),
      Yt = ht(Tt, It, St, Nt),
      Xt = ht(It, St, Nt);
    var Jt = {
        weeks: {
          days: 7,
          hours: 168,
          minutes: 10080,
          seconds: 604800,
          milliseconds: 6048e5,
        },
        days: { hours: 24, minutes: 1440, seconds: 86400, milliseconds: 864e5 },
        hours: { minutes: 60, seconds: 3600, milliseconds: 36e5 },
        minutes: { seconds: 60, milliseconds: 6e4 },
        seconds: { milliseconds: 1e3 },
      },
      Qt = Object.assign(
        {
          years: {
            quarters: 4,
            months: 12,
            weeks: 52,
            days: 365,
            hours: 8760,
            minutes: 525600,
            seconds: 31536e3,
            milliseconds: 31536e6,
          },
          quarters: {
            months: 3,
            weeks: 13,
            days: 91,
            hours: 2184,
            minutes: 131040,
            seconds: 7862400,
            milliseconds: 78624e5,
          },
          months: {
            weeks: 4,
            days: 30,
            hours: 720,
            minutes: 43200,
            seconds: 2592e3,
            milliseconds: 2592e6,
          },
        },
        Jt
      ),
      en = 365.2425,
      tn = 30.436875,
      nn = Object.assign(
        {
          years: {
            quarters: 4,
            months: 12,
            weeks: 52.1775,
            days: en,
            hours: 8765.82,
            minutes: 525949.2,
            seconds: 525949.2 * 60,
            milliseconds: 525949.2 * 60 * 1e3,
          },
          quarters: {
            months: 3,
            weeks: 13.044375,
            days: 91.310625,
            hours: 2191.455,
            minutes: 131487.3,
            seconds: (525949.2 * 60) / 4,
            milliseconds: 7889237999.999999,
          },
          months: {
            weeks: 4.3481250000000005,
            days: tn,
            hours: 730.485,
            minutes: 43829.1,
            seconds: 2629746,
            milliseconds: 2629746e3,
          },
        },
        Jt
      ),
      on = [
        "years",
        "quarters",
        "months",
        "weeks",
        "days",
        "hours",
        "minutes",
        "seconds",
        "milliseconds",
      ],
      an = on.slice(0).reverse();
    function rn(e, t, n) {
      void 0 === n && (n = !1);
      var i = {
        values: n ? t.values : Object.assign({}, e.values, t.values || {}),
        loc: e.loc.clone(t.loc),
        conversionAccuracy: t.conversionAccuracy || e.conversionAccuracy,
      };
      return new ln(i);
    }
    function sn(e, t, n, i, o) {
      var a = e[o][n],
        r = t[n] / a,
        s =
          !(Math.sign(r) === Math.sign(i[o])) && 0 !== i[o] && Math.abs(r) <= 1
            ? (function (e) {
                return e < 0 ? Math.floor(e) : Math.ceil(e);
              })(r)
            : Math.trunc(r);
      (i[o] += s), (t[n] -= s * a);
    }
    var ln = (function () {
      function e(e) {
        var t = "longterm" === e.conversionAccuracy || !1;
        (this.values = e.values),
          (this.loc = e.loc || dt.create()),
          (this.conversionAccuracy = t ? "longterm" : "casual"),
          (this.invalid = e.invalid || null),
          (this.matrix = t ? nn : Qt),
          (this.isLuxonDuration = !0);
      }
      (e.fromMillis = function (t, n) {
        return e.fromObject(Object.assign({ milliseconds: t }, n));
      }),
        (e.fromObject = function (t) {
          if (null == t || "object" != typeof t)
            throw new w(
              "Duration.fromObject: argument expected to be an object, got " +
                (null === t ? "null" : typeof t)
            );
          return new e({
            values: fe(t, e.normalizeUnit, [
              "locale",
              "numberingSystem",
              "conversionAccuracy",
              "zone",
            ]),
            loc: dt.fromObject(t),
            conversionAccuracy: t.conversionAccuracy,
          });
        }),
        (e.fromISO = function (t, n) {
          var i = (function (e) {
            return ft(e, [qt, Dt]);
          })(t)[0];
          if (i) {
            var o = Object.assign(i, n);
            return e.fromObject(o);
          }
          return e.invalid(
            "unparsable",
            'the input "' + t + "\" can't be parsed as ISO 8601"
          );
        }),
        (e.invalid = function (t, n) {
          if ((void 0 === n && (n = null), !t))
            throw new w("need to specify a reason the Duration is invalid");
          var i = t instanceof Ee ? t : new Ee(t, n);
          if (et.throwOnInvalid) throw new m(i);
          return new e({ invalid: i });
        }),
        (e.normalizeUnit = function (e) {
          var t = {
            year: "years",
            years: "years",
            quarter: "quarters",
            quarters: "quarters",
            month: "months",
            months: "months",
            week: "weeks",
            weeks: "weeks",
            day: "days",
            days: "days",
            hour: "hours",
            hours: "hours",
            minute: "minutes",
            minutes: "minutes",
            second: "seconds",
            seconds: "seconds",
            millisecond: "milliseconds",
            milliseconds: "milliseconds",
          }[e ? e.toLowerCase() : e];
          if (!t) throw new g(e);
          return t;
        }),
        (e.isDuration = function (e) {
          return (e && e.isLuxonDuration) || !1;
        });
      var t = e.prototype;
      return (
        (t.toFormat = function (e, t) {
          void 0 === t && (t = {});
          var n = Object.assign({}, t, {
            floor: !1 !== t.round && !1 !== t.floor,
          });
          return this.isValid
            ? Ae.create(this.loc, n).formatDurationFromString(this, e)
            : "Invalid Duration";
        }),
        (t.toObject = function (e) {
          if ((void 0 === e && (e = {}), !this.isValid)) return {};
          var t = Object.assign({}, this.values);
          return (
            e.includeConfig &&
              ((t.conversionAccuracy = this.conversionAccuracy),
              (t.numberingSystem = this.loc.numberingSystem),
              (t.locale = this.loc.locale)),
            t
          );
        }),
        (t.toISO = function () {
          if (!this.isValid) return null;
          var e = "P";
          return (
            0 !== this.years && (e += this.years + "Y"),
            (0 === this.months && 0 === this.quarters) ||
              (e += this.months + 3 * this.quarters + "M"),
            0 !== this.weeks && (e += this.weeks + "W"),
            0 !== this.days && (e += this.days + "D"),
            (0 === this.hours &&
              0 === this.minutes &&
              0 === this.seconds &&
              0 === this.milliseconds) ||
              (e += "T"),
            0 !== this.hours && (e += this.hours + "H"),
            0 !== this.minutes && (e += this.minutes + "M"),
            (0 === this.seconds && 0 === this.milliseconds) ||
              (e += oe(this.seconds + this.milliseconds / 1e3, 3) + "S"),
            "P" === e && (e += "T0S"),
            e
          );
        }),
        (t.toJSON = function () {
          return this.toISO();
        }),
        (t.toString = function () {
          return this.toISO();
        }),
        (t.valueOf = function () {
          return this.as("milliseconds");
        }),
        (t.plus = function (e) {
          if (!this.isValid) return this;
          for (var t, n = cn(e), i = {}, o = d(on); !(t = o()).done; ) {
            var a = t.value;
            (Q(n.values, a) || Q(this.values, a)) &&
              (i[a] = n.get(a) + this.get(a));
          }
          return rn(this, { values: i }, !0);
        }),
        (t.minus = function (e) {
          if (!this.isValid) return this;
          var t = cn(e);
          return this.plus(t.negate());
        }),
        (t.mapUnits = function (e) {
          if (!this.isValid) return this;
          for (
            var t = {}, n = 0, i = Object.keys(this.values);
            n < i.length;
            n++
          ) {
            var o = i[n];
            t[o] = he(e(this.values[o], o));
          }
          return rn(this, { values: t }, !0);
        }),
        (t.get = function (t) {
          return this[e.normalizeUnit(t)];
        }),
        (t.set = function (t) {
          return this.isValid
            ? rn(this, {
                values: Object.assign(this.values, fe(t, e.normalizeUnit, [])),
              })
            : this;
        }),
        (t.reconfigure = function (e) {
          var t = void 0 === e ? {} : e,
            n = t.locale,
            i = t.numberingSystem,
            o = t.conversionAccuracy,
            a = { loc: this.loc.clone({ locale: n, numberingSystem: i }) };
          return o && (a.conversionAccuracy = o), rn(this, a);
        }),
        (t.as = function (e) {
          return this.isValid ? this.shiftTo(e).get(e) : NaN;
        }),
        (t.normalize = function () {
          if (!this.isValid) return this;
          var e = this.toObject();
          return (
            (function (e, t) {
              an.reduce(function (n, i) {
                return H(t[i]) ? n : (n && sn(e, t, n, t, i), i);
              }, null);
            })(this.matrix, e),
            rn(this, { values: e }, !0)
          );
        }),
        (t.shiftTo = function () {
          for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++)
            n[i] = arguments[i];
          if (!this.isValid) return this;
          if (0 === n.length) return this;
          n = n.map(function (t) {
            return e.normalizeUnit(t);
          });
          for (
            var o, a, r = {}, s = {}, l = this.toObject(), c = d(on);
            !(a = c()).done;

          ) {
            var u = a.value;
            if (n.indexOf(u) >= 0) {
              o = u;
              var p = 0;
              for (var h in s) (p += this.matrix[h][u] * s[h]), (s[h] = 0);
              G(l[u]) && (p += l[u]);
              var f = Math.trunc(p);
              for (var m in ((r[u] = f), (s[u] = p - f), l))
                on.indexOf(m) > on.indexOf(u) && sn(this.matrix, l, m, r, u);
            } else G(l[u]) && (s[u] = l[u]);
          }
          for (var v in s)
            0 !== s[v] && (r[o] += v === o ? s[v] : s[v] / this.matrix[o][v]);
          return rn(this, { values: r }, !0).normalize();
        }),
        (t.negate = function () {
          if (!this.isValid) return this;
          for (
            var e = {}, t = 0, n = Object.keys(this.values);
            t < n.length;
            t++
          ) {
            var i = n[t];
            e[i] = -this.values[i];
          }
          return rn(this, { values: e }, !0);
        }),
        (t.equals = function (e) {
          if (!this.isValid || !e.isValid) return !1;
          if (!this.loc.equals(e.loc)) return !1;
          for (var t, n = d(on); !(t = n()).done; ) {
            var i = t.value;
            if (this.values[i] !== e.values[i]) return !1;
          }
          return !0;
        }),
        i(e, [
          {
            key: "locale",
            get: function () {
              return this.isValid ? this.loc.locale : null;
            },
          },
          {
            key: "numberingSystem",
            get: function () {
              return this.isValid ? this.loc.numberingSystem : null;
            },
          },
          {
            key: "years",
            get: function () {
              return this.isValid ? this.values.years || 0 : NaN;
            },
          },
          {
            key: "quarters",
            get: function () {
              return this.isValid ? this.values.quarters || 0 : NaN;
            },
          },
          {
            key: "months",
            get: function () {
              return this.isValid ? this.values.months || 0 : NaN;
            },
          },
          {
            key: "weeks",
            get: function () {
              return this.isValid ? this.values.weeks || 0 : NaN;
            },
          },
          {
            key: "days",
            get: function () {
              return this.isValid ? this.values.days || 0 : NaN;
            },
          },
          {
            key: "hours",
            get: function () {
              return this.isValid ? this.values.hours || 0 : NaN;
            },
          },
          {
            key: "minutes",
            get: function () {
              return this.isValid ? this.values.minutes || 0 : NaN;
            },
          },
          {
            key: "seconds",
            get: function () {
              return this.isValid ? this.values.seconds || 0 : NaN;
            },
          },
          {
            key: "milliseconds",
            get: function () {
              return this.isValid ? this.values.milliseconds || 0 : NaN;
            },
          },
          {
            key: "isValid",
            get: function () {
              return null === this.invalid;
            },
          },
          {
            key: "invalidReason",
            get: function () {
              return this.invalid ? this.invalid.reason : null;
            },
          },
          {
            key: "invalidExplanation",
            get: function () {
              return this.invalid ? this.invalid.explanation : null;
            },
          },
        ]),
        e
      );
    })();
    function cn(e) {
      if (G(e)) return ln.fromMillis(e);
      if (ln.isDuration(e)) return e;
      if ("object" == typeof e) return ln.fromObject(e);
      throw new w("Unknown duration argument " + e + " of type " + typeof e);
    }
    var un = "Invalid Interval";
    function dn(e, t) {
      return e && e.isValid
        ? t && t.isValid
          ? t < e
            ? pn.invalid(
                "end before start",
                "The end of an interval must be after its start, but you had start=" +
                  e.toISO() +
                  " and end=" +
                  t.toISO()
              )
            : null
          : pn.invalid("missing or invalid end")
        : pn.invalid("missing or invalid start");
    }
    var pn = (function () {
        function e(e) {
          (this.s = e.start),
            (this.e = e.end),
            (this.invalid = e.invalid || null),
            (this.isLuxonInterval = !0);
        }
        (e.invalid = function (t, n) {
          if ((void 0 === n && (n = null), !t))
            throw new w("need to specify a reason the Interval is invalid");
          var i = t instanceof Ee ? t : new Ee(t, n);
          if (et.throwOnInvalid) throw new f(i);
          return new e({ invalid: i });
        }),
          (e.fromDateTimes = function (t, n) {
            var i = pi(t),
              o = pi(n),
              a = dn(i, o);
            return null == a ? new e({ start: i, end: o }) : a;
          }),
          (e.after = function (t, n) {
            var i = cn(n),
              o = pi(t);
            return e.fromDateTimes(o, o.plus(i));
          }),
          (e.before = function (t, n) {
            var i = cn(n),
              o = pi(t);
            return e.fromDateTimes(o.minus(i), o);
          }),
          (e.fromISO = function (t, n) {
            var i = (t || "").split("/", 2),
              o = i[0],
              a = i[1];
            if (o && a) {
              var r, s, l, c;
              try {
                s = (r = di.fromISO(o, n)).isValid;
              } catch (a) {
                s = !1;
              }
              try {
                c = (l = di.fromISO(a, n)).isValid;
              } catch (a) {
                c = !1;
              }
              if (s && c) return e.fromDateTimes(r, l);
              if (s) {
                var u = ln.fromISO(a, n);
                if (u.isValid) return e.after(r, u);
              } else if (c) {
                var d = ln.fromISO(o, n);
                if (d.isValid) return e.before(l, d);
              }
            }
            return e.invalid(
              "unparsable",
              'the input "' + t + "\" can't be parsed as ISO 8601"
            );
          }),
          (e.isInterval = function (e) {
            return (e && e.isLuxonInterval) || !1;
          });
        var t = e.prototype;
        return (
          (t.length = function (e) {
            return (
              void 0 === e && (e = "milliseconds"),
              this.isValid ? this.toDuration.apply(this, [e]).get(e) : NaN
            );
          }),
          (t.count = function (e) {
            if ((void 0 === e && (e = "milliseconds"), !this.isValid))
              return NaN;
            var t = this.start.startOf(e),
              n = this.end.startOf(e);
            return Math.floor(n.diff(t, e).get(e)) + 1;
          }),
          (t.hasSame = function (e) {
            return (
              !!this.isValid &&
              (this.isEmpty() || this.e.minus(1).hasSame(this.s, e))
            );
          }),
          (t.isEmpty = function () {
            return this.s.valueOf() === this.e.valueOf();
          }),
          (t.isAfter = function (e) {
            return !!this.isValid && this.s > e;
          }),
          (t.isBefore = function (e) {
            return !!this.isValid && this.e <= e;
          }),
          (t.contains = function (e) {
            return !!this.isValid && this.s <= e && this.e > e;
          }),
          (t.set = function (t) {
            var n = void 0 === t ? {} : t,
              i = n.start,
              o = n.end;
            return this.isValid
              ? e.fromDateTimes(i || this.s, o || this.e)
              : this;
          }),
          (t.splitAt = function () {
            var t = this;
            if (!this.isValid) return [];
            for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++)
              i[o] = arguments[o];
            for (
              var a = i
                  .map(pi)
                  .filter(function (e) {
                    return t.contains(e);
                  })
                  .sort(),
                r = [],
                s = this.s,
                l = 0;
              s < this.e;

            ) {
              var c = a[l] || this.e,
                u = +c > +this.e ? this.e : c;
              r.push(e.fromDateTimes(s, u)), (s = u), (l += 1);
            }
            return r;
          }),
          (t.splitBy = function (t) {
            var n = cn(t);
            if (!this.isValid || !n.isValid || 0 === n.as("milliseconds"))
              return [];
            for (var i, o, a = this.s, r = []; a < this.e; )
              (o = +(i = a.plus(n)) > +this.e ? this.e : i),
                r.push(e.fromDateTimes(a, o)),
                (a = o);
            return r;
          }),
          (t.divideEqually = function (e) {
            return this.isValid
              ? this.splitBy(this.length() / e).slice(0, e)
              : [];
          }),
          (t.overlaps = function (e) {
            return this.e > e.s && this.s < e.e;
          }),
          (t.abutsStart = function (e) {
            return !!this.isValid && +this.e == +e.s;
          }),
          (t.abutsEnd = function (e) {
            return !!this.isValid && +e.e == +this.s;
          }),
          (t.engulfs = function (e) {
            return !!this.isValid && this.s <= e.s && this.e >= e.e;
          }),
          (t.equals = function (e) {
            return (
              !(!this.isValid || !e.isValid) &&
              this.s.equals(e.s) &&
              this.e.equals(e.e)
            );
          }),
          (t.intersection = function (t) {
            if (!this.isValid) return this;
            var n = this.s > t.s ? this.s : t.s,
              i = this.e < t.e ? this.e : t.e;
            return n > i ? null : e.fromDateTimes(n, i);
          }),
          (t.union = function (t) {
            if (!this.isValid) return this;
            var n = this.s < t.s ? this.s : t.s,
              i = this.e > t.e ? this.e : t.e;
            return e.fromDateTimes(n, i);
          }),
          (e.merge = function (e) {
            var t = e
                .sort(function (e, t) {
                  return e.s - t.s;
                })
                .reduce(
                  function (e, t) {
                    var n = e[0],
                      i = e[1];
                    return i
                      ? i.overlaps(t) || i.abutsStart(t)
                        ? [n, i.union(t)]
                        : [n.concat([i]), t]
                      : [n, t];
                  },
                  [[], null]
                ),
              n = t[0],
              i = t[1];
            return i && n.push(i), n;
          }),
          (e.xor = function (t) {
            for (
              var n,
                i,
                o = null,
                a = 0,
                r = [],
                s = t.map(function (e) {
                  return [
                    { time: e.s, type: "s" },
                    { time: e.e, type: "e" },
                  ];
                }),
                l = d(
                  (n = Array.prototype).concat
                    .apply(n, s)
                    .sort(function (e, t) {
                      return e.time - t.time;
                    })
                );
              !(i = l()).done;

            ) {
              var c = i.value;
              1 === (a += "s" === c.type ? 1 : -1)
                ? (o = c.time)
                : (o && +o != +c.time && r.push(e.fromDateTimes(o, c.time)),
                  (o = null));
            }
            return e.merge(r);
          }),
          (t.difference = function () {
            for (
              var t = this, n = arguments.length, i = new Array(n), o = 0;
              o < n;
              o++
            )
              i[o] = arguments[o];
            return e
              .xor([this].concat(i))
              .map(function (e) {
                return t.intersection(e);
              })
              .filter(function (e) {
                return e && !e.isEmpty();
              });
          }),
          (t.toString = function () {
            return this.isValid
              ? "[" + this.s.toISO() + " – " + this.e.toISO() + ")"
              : un;
          }),
          (t.toISO = function (e) {
            return this.isValid ? this.s.toISO(e) + "/" + this.e.toISO(e) : un;
          }),
          (t.toISODate = function () {
            return this.isValid
              ? this.s.toISODate() + "/" + this.e.toISODate()
              : un;
          }),
          (t.toISOTime = function (e) {
            return this.isValid
              ? this.s.toISOTime(e) + "/" + this.e.toISOTime(e)
              : un;
          }),
          (t.toFormat = function (e, t) {
            var n = (void 0 === t ? {} : t).separator,
              i = void 0 === n ? " – " : n;
            return this.isValid
              ? "" + this.s.toFormat(e) + i + this.e.toFormat(e)
              : un;
          }),
          (t.toDuration = function (e, t) {
            return this.isValid
              ? this.e.diff(this.s, e, t)
              : ln.invalid(this.invalidReason);
          }),
          (t.mapEndpoints = function (t) {
            return e.fromDateTimes(t(this.s), t(this.e));
          }),
          i(e, [
            {
              key: "start",
              get: function () {
                return this.isValid ? this.s : null;
              },
            },
            {
              key: "end",
              get: function () {
                return this.isValid ? this.e : null;
              },
            },
            {
              key: "isValid",
              get: function () {
                return null === this.invalidReason;
              },
            },
            {
              key: "invalidReason",
              get: function () {
                return this.invalid ? this.invalid.reason : null;
              },
            },
            {
              key: "invalidExplanation",
              get: function () {
                return this.invalid ? this.invalid.explanation : null;
              },
            },
          ]),
          e
        );
      })(),
      hn = (function () {
        function e() {}
        return (
          (e.hasDST = function (e) {
            void 0 === e && (e = et.defaultZone);
            var t = di.local().setZone(e).set({ month: 12 });
            return !e.universal && t.offset !== t.set({ month: 6 }).offset;
          }),
          (e.isValidIANAZone = function (e) {
            return Ve.isValidSpecifier(e) && Ve.isValidZone(e);
          }),
          (e.normalizeZone = function (e) {
            return Ze(e, et.defaultZone);
          }),
          (e.months = function (e, t) {
            void 0 === e && (e = "long");
            var n = void 0 === t ? {} : t,
              i = n.locale,
              o = void 0 === i ? null : i,
              a = n.numberingSystem,
              r = void 0 === a ? null : a,
              s = n.outputCalendar,
              l = void 0 === s ? "gregory" : s;
            return dt.create(o, r, l).months(e);
          }),
          (e.monthsFormat = function (e, t) {
            void 0 === e && (e = "long");
            var n = void 0 === t ? {} : t,
              i = n.locale,
              o = void 0 === i ? null : i,
              a = n.numberingSystem,
              r = void 0 === a ? null : a,
              s = n.outputCalendar,
              l = void 0 === s ? "gregory" : s;
            return dt.create(o, r, l).months(e, !0);
          }),
          (e.weekdays = function (e, t) {
            void 0 === e && (e = "long");
            var n = void 0 === t ? {} : t,
              i = n.locale,
              o = void 0 === i ? null : i,
              a = n.numberingSystem,
              r = void 0 === a ? null : a;
            return dt.create(o, r, null).weekdays(e);
          }),
          (e.weekdaysFormat = function (e, t) {
            void 0 === e && (e = "long");
            var n = void 0 === t ? {} : t,
              i = n.locale,
              o = void 0 === i ? null : i,
              a = n.numberingSystem,
              r = void 0 === a ? null : a;
            return dt.create(o, r, null).weekdays(e, !0);
          }),
          (e.meridiems = function (e) {
            var t = (void 0 === e ? {} : e).locale,
              n = void 0 === t ? null : t;
            return dt.create(n).meridiems();
          }),
          (e.eras = function (e, t) {
            void 0 === e && (e = "short");
            var n = (void 0 === t ? {} : t).locale,
              i = void 0 === n ? null : n;
            return dt.create(i, null, "gregory").eras(e);
          }),
          (e.features = function () {
            var e = !1,
              t = !1,
              n = !1,
              i = !1;
            if (W()) {
              (e = !0), (t = K()), (i = Y());
              try {
                n =
                  "America/New_York" ===
                  new Intl.DateTimeFormat("en", {
                    timeZone: "America/New_York",
                  }).resolvedOptions().timeZone;
              } catch (e) {
                n = !1;
              }
            }
            return { intl: e, intlTokens: t, zones: n, relative: i };
          }),
          e
        );
      })();
    function fn(e, t) {
      var n = function (e) {
          return e.toUTC(0, { keepLocalTime: !0 }).startOf("day").valueOf();
        },
        i = n(t) - n(e);
      return Math.floor(ln.fromMillis(i).as("days"));
    }
    function mn(e, t, n, i) {
      var o = (function (e, t, n) {
          for (
            var i,
              o,
              a = {},
              r = 0,
              s = [
                [
                  "years",
                  function (e, t) {
                    return t.year - e.year;
                  },
                ],
                [
                  "months",
                  function (e, t) {
                    return t.month - e.month + 12 * (t.year - e.year);
                  },
                ],
                [
                  "weeks",
                  function (e, t) {
                    var n = fn(e, t);
                    return (n - (n % 7)) / 7;
                  },
                ],
                ["days", fn],
              ];
            r < s.length;
            r++
          ) {
            var l = s[r],
              c = l[0],
              u = l[1];
            if (n.indexOf(c) >= 0) {
              var d;
              i = c;
              var p,
                h = u(e, t);
              (o = e.plus((((d = {})[c] = h), d))) > t
                ? ((e = e.plus((((p = {})[c] = h - 1), p))), (h -= 1))
                : (e = o),
                (a[c] = h);
            }
          }
          return [e, a, o, i];
        })(e, t, n),
        a = o[0],
        r = o[1],
        s = o[2],
        l = o[3],
        c = t - a,
        u = n.filter(function (e) {
          return (
            ["hours", "minutes", "seconds", "milliseconds"].indexOf(e) >= 0
          );
        });
      if (0 === u.length) {
        var d;
        if (s < t) s = a.plus((((d = {})[l] = 1), d));
        s !== a && (r[l] = (r[l] || 0) + c / (s - a));
      }
      var p,
        h = ln.fromObject(Object.assign(r, i));
      return u.length > 0
        ? (p = ln.fromMillis(c, i)).shiftTo.apply(p, u).plus(h)
        : h;
    }
    var vn = {
        arab: "[٠-٩]",
        arabext: "[۰-۹]",
        bali: "[᭐-᭙]",
        beng: "[০-৯]",
        deva: "[०-९]",
        fullwide: "[０-９]",
        gujr: "[૦-૯]",
        hanidec: "[〇|一|二|三|四|五|六|七|八|九]",
        khmr: "[០-៩]",
        knda: "[೦-೯]",
        laoo: "[໐-໙]",
        limb: "[᥆-᥏]",
        mlym: "[൦-൯]",
        mong: "[᠐-᠙]",
        mymr: "[၀-၉]",
        orya: "[୦-୯]",
        tamldec: "[௦-௯]",
        telu: "[౦-౯]",
        thai: "[๐-๙]",
        tibt: "[༠-༩]",
        latn: "\\d",
      },
      gn = {
        arab: [1632, 1641],
        arabext: [1776, 1785],
        bali: [6992, 7001],
        beng: [2534, 2543],
        deva: [2406, 2415],
        fullwide: [65296, 65303],
        gujr: [2790, 2799],
        khmr: [6112, 6121],
        knda: [3302, 3311],
        laoo: [3792, 3801],
        limb: [6470, 6479],
        mlym: [3430, 3439],
        mong: [6160, 6169],
        mymr: [4160, 4169],
        orya: [2918, 2927],
        tamldec: [3046, 3055],
        telu: [3174, 3183],
        thai: [3664, 3673],
        tibt: [3872, 3881],
      },
      wn = vn.hanidec.replace(/[\[|\]]/g, "").split("");
    function bn(e, t) {
      var n = e.numberingSystem;
      return void 0 === t && (t = ""), new RegExp("" + vn[n || "latn"] + t);
    }
    function yn(e, t) {
      return (
        void 0 === t &&
          (t = function (e) {
            return e;
          }),
        {
          regex: e,
          deser: function (e) {
            var n = e[0];
            return t(
              (function (e) {
                var t = parseInt(e, 10);
                if (isNaN(t)) {
                  t = "";
                  for (var n = 0; n < e.length; n++) {
                    var i = e.charCodeAt(n);
                    if (-1 !== e[n].search(vn.hanidec)) t += wn.indexOf(e[n]);
                    else
                      for (var o in gn) {
                        var a = gn[o],
                          r = a[0],
                          s = a[1];
                        i >= r && i <= s && (t += i - r);
                      }
                  }
                  return parseInt(t, 10);
                }
                return t;
              })(n)
            );
          },
        }
      );
    }
    var xn = "( |" + String.fromCharCode(160) + ")",
      kn = new RegExp(xn, "g");
    function Cn(e) {
      return e.replace(/\./g, "\\.?").replace(kn, xn);
    }
    function $n(e) {
      return e.replace(/\./g, "").replace(kn, " ").toLowerCase();
    }
    function Tn(e, t) {
      return null === e
        ? null
        : {
            regex: RegExp(e.map(Cn).join("|")),
            deser: function (n) {
              var i = n[0];
              return (
                e.findIndex(function (e) {
                  return $n(i) === $n(e);
                }) + t
              );
            },
          };
    }
    function In(e, t) {
      return {
        regex: e,
        deser: function (e) {
          return pe(e[1], e[2]);
        },
        groups: t,
      };
    }
    function Sn(e) {
      return {
        regex: e,
        deser: function (e) {
          return e[0];
        },
      };
    }
    var Nn = {
      year: { "2-digit": "yy", numeric: "yyyyy" },
      month: { numeric: "M", "2-digit": "MM", short: "MMM", long: "MMMM" },
      day: { numeric: "d", "2-digit": "dd" },
      weekday: { short: "EEE", long: "EEEE" },
      dayperiod: "a",
      dayPeriod: "a",
      hour: { numeric: "h", "2-digit": "hh" },
      minute: { numeric: "m", "2-digit": "mm" },
      second: { numeric: "s", "2-digit": "ss" },
    };
    var qn = null;
    function Dn(e, t) {
      if (e.literal) return e;
      var n = Ae.macroTokenToFormatOpts(e.val);
      if (!n) return e;
      var i = Ae.create(t, n)
        .formatDateTimeParts((qn || (qn = di.fromMillis(1555555555555)), qn))
        .map(function (e) {
          return (function (e, t, n) {
            var i = e.type,
              o = e.value;
            if ("literal" === i) return { literal: !0, val: o };
            var a = n[i],
              r = Nn[i];
            return (
              "object" == typeof r && (r = r[a]),
              r ? { literal: !1, val: r } : void 0
            );
          })(e, 0, n);
        });
      return i.includes(void 0) ? e : i;
    }
    function Mn(e, t, n) {
      var i = (function (e, t) {
          var n;
          return (n = Array.prototype).concat.apply(
            n,
            e.map(function (e) {
              return Dn(e, t);
            })
          );
        })(Ae.parseFormat(n), e),
        o = i.map(function (t) {
          return (
            (n = t),
            (o = bn((i = e))),
            (a = bn(i, "{2}")),
            (r = bn(i, "{3}")),
            (s = bn(i, "{4}")),
            (l = bn(i, "{6}")),
            (c = bn(i, "{1,2}")),
            (u = bn(i, "{1,3}")),
            (d = bn(i, "{1,6}")),
            (p = bn(i, "{1,9}")),
            (h = bn(i, "{2,4}")),
            (f = bn(i, "{4,6}")),
            (m = function (e) {
              return {
                regex: RegExp(
                  ((t = e.val),
                  t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"))
                ),
                deser: function (e) {
                  return e[0];
                },
                literal: !0,
              };
              var t;
            }),
            ((v = (function (e) {
              if (n.literal) return m(e);
              switch (e.val) {
                case "G":
                  return Tn(i.eras("short", !1), 0);
                case "GG":
                  return Tn(i.eras("long", !1), 0);
                case "y":
                  return yn(d);
                case "yy":
                  return yn(h, ue);
                case "yyyy":
                  return yn(s);
                case "yyyyy":
                  return yn(f);
                case "yyyyyy":
                  return yn(l);
                case "M":
                  return yn(c);
                case "MM":
                  return yn(a);
                case "MMM":
                  return Tn(i.months("short", !0, !1), 1);
                case "MMMM":
                  return Tn(i.months("long", !0, !1), 1);
                case "L":
                  return yn(c);
                case "LL":
                  return yn(a);
                case "LLL":
                  return Tn(i.months("short", !1, !1), 1);
                case "LLLL":
                  return Tn(i.months("long", !1, !1), 1);
                case "d":
                  return yn(c);
                case "dd":
                  return yn(a);
                case "o":
                  return yn(u);
                case "ooo":
                  return yn(r);
                case "HH":
                  return yn(a);
                case "H":
                  return yn(c);
                case "hh":
                  return yn(a);
                case "h":
                  return yn(c);
                case "mm":
                  return yn(a);
                case "m":
                case "q":
                  return yn(c);
                case "qq":
                  return yn(a);
                case "s":
                  return yn(c);
                case "ss":
                  return yn(a);
                case "S":
                  return yn(u);
                case "SSS":
                  return yn(r);
                case "u":
                  return Sn(p);
                case "a":
                  return Tn(i.meridiems(), 0);
                case "kkkk":
                  return yn(s);
                case "kk":
                  return yn(h, ue);
                case "W":
                  return yn(c);
                case "WW":
                  return yn(a);
                case "E":
                case "c":
                  return yn(o);
                case "EEE":
                  return Tn(i.weekdays("short", !1, !1), 1);
                case "EEEE":
                  return Tn(i.weekdays("long", !1, !1), 1);
                case "ccc":
                  return Tn(i.weekdays("short", !0, !1), 1);
                case "cccc":
                  return Tn(i.weekdays("long", !0, !1), 1);
                case "Z":
                case "ZZ":
                  return In(
                    new RegExp(
                      "([+-]" + c.source + ")(?::(" + a.source + "))?"
                    ),
                    2
                  );
                case "ZZZ":
                  return In(
                    new RegExp("([+-]" + c.source + ")(" + a.source + ")?"),
                    2
                  );
                case "z":
                  return Sn(/[a-z_+-/]{1,256}?/i);
                default:
                  return m(e);
              }
            })(n) || {
              invalidReason:
                "missing Intl.DateTimeFormat.formatToParts support",
            }).token = n),
            v
          );
          var n, i, o, a, r, s, l, c, u, d, p, h, f, m, v;
        }),
        a = o.find(function (e) {
          return e.invalidReason;
        });
      if (a) return { input: t, tokens: i, invalidReason: a.invalidReason };
      var r = (function (e) {
          return [
            "^" +
              e
                .map(function (e) {
                  return e.regex;
                })
                .reduce(function (e, t) {
                  return e + "(" + t.source + ")";
                }, "") +
              "$",
            e,
          ];
        })(o),
        s = r[0],
        l = r[1],
        c = RegExp(s, "i"),
        u = (function (e, t, n) {
          var i = e.match(t);
          if (i) {
            var o = {},
              a = 1;
            for (var r in n)
              if (Q(n, r)) {
                var s = n[r],
                  l = s.groups ? s.groups + 1 : 1;
                !s.literal &&
                  s.token &&
                  (o[s.token.val[0]] = s.deser(i.slice(a, a + l))),
                  (a += l);
              }
            return [i, o];
          }
          return [i, {}];
        })(t, c, l),
        d = u[0],
        p = u[1],
        h = p
          ? (function (e) {
              var t;
              return (
                (t = H(e.Z) ? (H(e.z) ? null : Ve.create(e.z)) : new He(e.Z)),
                H(e.q) || (e.M = 3 * (e.q - 1) + 1),
                H(e.h) ||
                  (e.h < 12 && 1 === e.a
                    ? (e.h += 12)
                    : 12 === e.h && 0 === e.a && (e.h = 0)),
                0 === e.G && e.y && (e.y = -e.y),
                H(e.u) || (e.S = ie(e.u)),
                [
                  Object.keys(e).reduce(function (t, n) {
                    var i = (function (e) {
                      switch (e) {
                        case "S":
                          return "millisecond";
                        case "s":
                          return "second";
                        case "m":
                          return "minute";
                        case "h":
                        case "H":
                          return "hour";
                        case "d":
                          return "day";
                        case "o":
                          return "ordinal";
                        case "L":
                        case "M":
                          return "month";
                        case "y":
                          return "year";
                        case "E":
                        case "c":
                          return "weekday";
                        case "W":
                          return "weekNumber";
                        case "k":
                          return "weekYear";
                        case "q":
                          return "quarter";
                        default:
                          return null;
                      }
                    })(n);
                    return i && (t[i] = e[n]), t;
                  }, {}),
                  t,
                ]
              );
            })(p)
          : [null, null],
        f = h[0],
        m = h[1];
      if (Q(p, "a") && Q(p, "H"))
        throw new v("Can't include meridiem when specifying 24-hour format");
      return {
        input: t,
        tokens: i,
        regex: c,
        rawMatches: d,
        matches: p,
        result: f,
        zone: m,
      };
    }
    var Un = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
      zn = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
    function An(e, t) {
      return new Ee(
        "unit out of range",
        "you specified " +
          t +
          " (of type " +
          typeof t +
          ") as a " +
          e +
          ", which is invalid"
      );
    }
    function En(e, t, n) {
      var i = new Date(Date.UTC(e, t - 1, n)).getUTCDay();
      return 0 === i ? 7 : i;
    }
    function Ln(e, t, n) {
      return n + (ae(e) ? zn : Un)[t - 1];
    }
    function On(e, t) {
      var n = ae(e) ? zn : Un,
        i = n.findIndex(function (e) {
          return e < t;
        });
      return { month: i + 1, day: t - n[i] };
    }
    function jn(e) {
      var t,
        n = e.year,
        i = e.month,
        o = e.day,
        a = Ln(n, i, o),
        r = En(n, i, o),
        s = Math.floor((a - r + 10) / 7);
      return (
        s < 1
          ? (s = ce((t = n - 1)))
          : s > ce(n)
          ? ((t = n + 1), (s = 1))
          : (t = n),
        Object.assign({ weekYear: t, weekNumber: s, weekday: r }, ve(e))
      );
    }
    function Bn(e) {
      var t,
        n = e.weekYear,
        i = e.weekNumber,
        o = e.weekday,
        a = En(n, 1, 4),
        r = re(n),
        s = 7 * i + o - a - 3;
      s < 1
        ? (s += re((t = n - 1)))
        : s > r
        ? ((t = n + 1), (s -= re(n)))
        : (t = n);
      var l = On(t, s),
        c = l.month,
        u = l.day;
      return Object.assign({ year: t, month: c, day: u }, ve(e));
    }
    function Fn(e) {
      var t = e.year,
        n = Ln(t, e.month, e.day);
      return Object.assign({ year: t, ordinal: n }, ve(e));
    }
    function Rn(e) {
      var t = e.year,
        n = On(t, e.ordinal),
        i = n.month,
        o = n.day;
      return Object.assign({ year: t, month: i, day: o }, ve(e));
    }
    function Pn(e) {
      var t = Z(e.year),
        n = ee(e.month, 1, 12),
        i = ee(e.day, 1, se(e.year, e.month));
      return t
        ? n
          ? !i && An("day", e.day)
          : An("month", e.month)
        : An("year", e.year);
    }
    function Vn(e) {
      var t = e.hour,
        n = e.minute,
        i = e.second,
        o = e.millisecond,
        a = ee(t, 0, 23) || (24 === t && 0 === n && 0 === i && 0 === o),
        r = ee(n, 0, 59),
        s = ee(i, 0, 59),
        l = ee(o, 0, 999);
      return a
        ? r
          ? s
            ? !l && An("millisecond", o)
            : An("second", i)
          : An("minute", n)
        : An("hour", t);
    }
    var _n = "Invalid DateTime",
      Hn = 864e13;
    function Gn(e) {
      return new Ee(
        "unsupported zone",
        'the zone "' + e.name + '" is not supported'
      );
    }
    function Zn(e) {
      return null === e.weekData && (e.weekData = jn(e.c)), e.weekData;
    }
    function Wn(e, t) {
      var n = {
        ts: e.ts,
        zone: e.zone,
        c: e.c,
        o: e.o,
        loc: e.loc,
        invalid: e.invalid,
      };
      return new di(Object.assign({}, n, t, { old: n }));
    }
    function Kn(e, t, n) {
      var i = e - 60 * t * 1e3,
        o = n.offset(i);
      if (t === o) return [i, t];
      i -= 60 * (o - t) * 1e3;
      var a = n.offset(i);
      return o === a ? [i, o] : [e - 60 * Math.min(o, a) * 1e3, Math.max(o, a)];
    }
    function Yn(e, t) {
      var n = new Date((e += 60 * t * 1e3));
      return {
        year: n.getUTCFullYear(),
        month: n.getUTCMonth() + 1,
        day: n.getUTCDate(),
        hour: n.getUTCHours(),
        minute: n.getUTCMinutes(),
        second: n.getUTCSeconds(),
        millisecond: n.getUTCMilliseconds(),
      };
    }
    function Xn(e, t, n) {
      return Kn(le(e), t, n);
    }
    function Jn(e, t) {
      var n = e.o,
        i = e.c.year + Math.trunc(t.years),
        o = e.c.month + Math.trunc(t.months) + 3 * Math.trunc(t.quarters),
        a = Object.assign({}, e.c, {
          year: i,
          month: o,
          day:
            Math.min(e.c.day, se(i, o)) +
            Math.trunc(t.days) +
            7 * Math.trunc(t.weeks),
        }),
        r = ln
          .fromObject({
            years: t.years - Math.trunc(t.years),
            quarters: t.quarters - Math.trunc(t.quarters),
            months: t.months - Math.trunc(t.months),
            weeks: t.weeks - Math.trunc(t.weeks),
            days: t.days - Math.trunc(t.days),
            hours: t.hours,
            minutes: t.minutes,
            seconds: t.seconds,
            milliseconds: t.milliseconds,
          })
          .as("milliseconds"),
        s = Kn(le(a), n, e.zone),
        l = s[0],
        c = s[1];
      return 0 !== r && ((l += r), (c = e.zone.offset(l))), { ts: l, o: c };
    }
    function Qn(e, t, n, i, o) {
      var a = n.setZone,
        r = n.zone;
      if (e && 0 !== Object.keys(e).length) {
        var s = t || r,
          l = di.fromObject(Object.assign(e, n, { zone: s, setZone: void 0 }));
        return a ? l : l.setZone(r);
      }
      return di.invalid(
        new Ee("unparsable", 'the input "' + o + "\" can't be parsed as " + i)
      );
    }
    function ei(e, t, n) {
      return (
        void 0 === n && (n = !0),
        e.isValid
          ? Ae.create(dt.create("en-US"), {
              allowZ: n,
              forceSimple: !0,
            }).formatDateTimeFromString(e, t)
          : null
      );
    }
    function ti(e, t) {
      var n = t.suppressSeconds,
        i = void 0 !== n && n,
        o = t.suppressMilliseconds,
        a = void 0 !== o && o,
        r = t.includeOffset,
        s = t.includeZone,
        l = void 0 !== s && s,
        c = t.spaceZone,
        u = void 0 !== c && c,
        d = t.format,
        p = void 0 === d ? "extended" : d,
        h = "basic" === p ? "HHmm" : "HH:mm";
      return (
        (i && 0 === e.second && 0 === e.millisecond) ||
          ((h += "basic" === p ? "ss" : ":ss"),
          (a && 0 === e.millisecond) || (h += ".SSS")),
        (l || r) && u && (h += " "),
        l ? (h += "z") : r && (h += "basic" === p ? "ZZZ" : "ZZ"),
        ei(e, h)
      );
    }
    var ni = {
        month: 1,
        day: 1,
        hour: 0,
        minute: 0,
        second: 0,
        millisecond: 0,
      },
      ii = {
        weekNumber: 1,
        weekday: 1,
        hour: 0,
        minute: 0,
        second: 0,
        millisecond: 0,
      },
      oi = { ordinal: 1, hour: 0, minute: 0, second: 0, millisecond: 0 },
      ai = ["year", "month", "day", "hour", "minute", "second", "millisecond"],
      ri = [
        "weekYear",
        "weekNumber",
        "weekday",
        "hour",
        "minute",
        "second",
        "millisecond",
      ],
      si = ["year", "ordinal", "hour", "minute", "second", "millisecond"];
    function li(e) {
      var t = {
        year: "year",
        years: "year",
        month: "month",
        months: "month",
        day: "day",
        days: "day",
        hour: "hour",
        hours: "hour",
        minute: "minute",
        minutes: "minute",
        quarter: "quarter",
        quarters: "quarter",
        second: "second",
        seconds: "second",
        millisecond: "millisecond",
        milliseconds: "millisecond",
        weekday: "weekday",
        weekdays: "weekday",
        weeknumber: "weekNumber",
        weeksnumber: "weekNumber",
        weeknumbers: "weekNumber",
        weekyear: "weekYear",
        weekyears: "weekYear",
        ordinal: "ordinal",
      }[e.toLowerCase()];
      if (!t) throw new g(e);
      return t;
    }
    function ci(e, t) {
      for (var n, i = d(ai); !(n = i()).done; ) {
        var o = n.value;
        H(e[o]) && (e[o] = ni[o]);
      }
      var a = Pn(e) || Vn(e);
      if (a) return di.invalid(a);
      var r = et.now(),
        s = Xn(e, t.offset(r), t),
        l = s[0],
        c = s[1];
      return new di({ ts: l, zone: t, o: c });
    }
    function ui(e, t, n) {
      var i = !!H(n.round) || n.round,
        o = function (e, o) {
          return (
            (e = oe(e, i || n.calendary ? 0 : 2, !0)),
            t.loc.clone(n).relFormatter(n).format(e, o)
          );
        },
        a = function (i) {
          return n.calendary
            ? t.hasSame(e, i)
              ? 0
              : t.startOf(i).diff(e.startOf(i), i).get(i)
            : t.diff(e, i).get(i);
        };
      if (n.unit) return o(a(n.unit), n.unit);
      for (var r, s = d(n.units); !(r = s()).done; ) {
        var l = r.value,
          c = a(l);
        if (Math.abs(c) >= 1) return o(c, l);
      }
      return o(0, n.units[n.units.length - 1]);
    }
    var di = (function () {
      function e(e) {
        var t = e.zone || et.defaultZone,
          n =
            e.invalid ||
            (Number.isNaN(e.ts) ? new Ee("invalid input") : null) ||
            (t.isValid ? null : Gn(t));
        this.ts = H(e.ts) ? et.now() : e.ts;
        var i = null,
          o = null;
        if (!n)
          if (e.old && e.old.ts === this.ts && e.old.zone.equals(t)) {
            var a = [e.old.c, e.old.o];
            (i = a[0]), (o = a[1]);
          } else {
            var r = t.offset(this.ts);
            (i = Yn(this.ts, r)),
              (i = (n = Number.isNaN(i.year) ? new Ee("invalid input") : null)
                ? null
                : i),
              (o = n ? null : r);
          }
        (this._zone = t),
          (this.loc = e.loc || dt.create()),
          (this.invalid = n),
          (this.weekData = null),
          (this.c = i),
          (this.o = o),
          (this.isLuxonDateTime = !0);
      }
      (e.local = function (t, n, i, o, a, r, s) {
        return H(t)
          ? new e({ ts: et.now() })
          : ci(
              {
                year: t,
                month: n,
                day: i,
                hour: o,
                minute: a,
                second: r,
                millisecond: s,
              },
              et.defaultZone
            );
      }),
        (e.utc = function (t, n, i, o, a, r, s) {
          return H(t)
            ? new e({ ts: et.now(), zone: He.utcInstance })
            : ci(
                {
                  year: t,
                  month: n,
                  day: i,
                  hour: o,
                  minute: a,
                  second: r,
                  millisecond: s,
                },
                He.utcInstance
              );
        }),
        (e.fromJSDate = function (t, n) {
          void 0 === n && (n = {});
          var i,
            o =
              ((i = t),
              "[object Date]" === Object.prototype.toString.call(i)
                ? t.valueOf()
                : NaN);
          if (Number.isNaN(o)) return e.invalid("invalid input");
          var a = Ze(n.zone, et.defaultZone);
          return a.isValid
            ? new e({ ts: o, zone: a, loc: dt.fromObject(n) })
            : e.invalid(Gn(a));
        }),
        (e.fromMillis = function (t, n) {
          if ((void 0 === n && (n = {}), G(t)))
            return t < -Hn || t > Hn
              ? e.invalid("Timestamp out of range")
              : new e({
                  ts: t,
                  zone: Ze(n.zone, et.defaultZone),
                  loc: dt.fromObject(n),
                });
          throw new w(
            "fromMillis requires a numerical input, but received a " +
              typeof t +
              " with value " +
              t
          );
        }),
        (e.fromSeconds = function (t, n) {
          if ((void 0 === n && (n = {}), G(t)))
            return new e({
              ts: 1e3 * t,
              zone: Ze(n.zone, et.defaultZone),
              loc: dt.fromObject(n),
            });
          throw new w("fromSeconds requires a numerical input");
        }),
        (e.fromObject = function (t) {
          var n = Ze(t.zone, et.defaultZone);
          if (!n.isValid) return e.invalid(Gn(n));
          var i = et.now(),
            o = n.offset(i),
            a = fe(t, li, [
              "zone",
              "locale",
              "outputCalendar",
              "numberingSystem",
            ]),
            r = !H(a.ordinal),
            s = !H(a.year),
            l = !H(a.month) || !H(a.day),
            c = s || l,
            u = a.weekYear || a.weekNumber,
            p = dt.fromObject(t);
          if ((c || r) && u)
            throw new v(
              "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
            );
          if (l && r) throw new v("Can't mix ordinal dates with month/day");
          var h,
            f,
            m = u || (a.weekday && !c),
            g = Yn(i, o);
          m
            ? ((h = ri), (f = ii), (g = jn(g)))
            : r
            ? ((h = si), (f = oi), (g = Fn(g)))
            : ((h = ai), (f = ni));
          for (var w, b = !1, y = d(h); !(w = y()).done; ) {
            var x = w.value;
            H(a[x]) ? (a[x] = b ? f[x] : g[x]) : (b = !0);
          }
          var k =
            (m
              ? (function (e) {
                  var t = Z(e.weekYear),
                    n = ee(e.weekNumber, 1, ce(e.weekYear)),
                    i = ee(e.weekday, 1, 7);
                  return t
                    ? n
                      ? !i && An("weekday", e.weekday)
                      : An("week", e.week)
                    : An("weekYear", e.weekYear);
                })(a)
              : r
              ? (function (e) {
                  var t = Z(e.year),
                    n = ee(e.ordinal, 1, re(e.year));
                  return t
                    ? !n && An("ordinal", e.ordinal)
                    : An("year", e.year);
                })(a)
              : Pn(a)) || Vn(a);
          if (k) return e.invalid(k);
          var C = Xn(m ? Bn(a) : r ? Rn(a) : a, o, n),
            $ = new e({ ts: C[0], zone: n, o: C[1], loc: p });
          return a.weekday && c && t.weekday !== $.weekday
            ? e.invalid(
                "mismatched weekday",
                "you can't specify both a weekday of " +
                  a.weekday +
                  " and a date of " +
                  $.toISO()
              )
            : $;
        }),
        (e.fromISO = function (e, t) {
          void 0 === t && (t = {});
          var n = (function (e) {
            return ft(e, [Ft, _t], [Rt, Ht], [Pt, Gt], [Vt, Zt]);
          })(e);
          return Qn(n[0], n[1], t, "ISO 8601", e);
        }),
        (e.fromRFC2822 = function (e, t) {
          void 0 === t && (t = {});
          var n = (function (e) {
            return ft(
              (function (e) {
                return e
                  .replace(/\([^)]*\)|[\n\t]/g, " ")
                  .replace(/(\s\s+)/g, " ")
                  .trim();
              })(e),
              [zt, At]
            );
          })(e);
          return Qn(n[0], n[1], t, "RFC 2822", e);
        }),
        (e.fromHTTP = function (e, t) {
          void 0 === t && (t = {});
          var n = (function (e) {
            return ft(e, [Et, jt], [Lt, jt], [Ot, Bt]);
          })(e);
          return Qn(n[0], n[1], t, "HTTP", t);
        }),
        (e.fromFormat = function (t, n, i) {
          if ((void 0 === i && (i = {}), H(t) || H(n)))
            throw new w("fromFormat requires an input string and a format");
          var o = i,
            a = o.locale,
            r = void 0 === a ? null : a,
            s = o.numberingSystem,
            l = void 0 === s ? null : s,
            c = (function (e, t, n) {
              var i = Mn(e, t, n);
              return [i.result, i.zone, i.invalidReason];
            })(
              dt.fromOpts({ locale: r, numberingSystem: l, defaultToEN: !0 }),
              t,
              n
            ),
            u = c[0],
            d = c[1],
            p = c[2];
          return p ? e.invalid(p) : Qn(u, d, i, "format " + n, t);
        }),
        (e.fromString = function (t, n, i) {
          return void 0 === i && (i = {}), e.fromFormat(t, n, i);
        }),
        (e.fromSQL = function (e, t) {
          void 0 === t && (t = {});
          var n = (function (e) {
            return ft(e, [Wt, Yt], [Kt, Xt]);
          })(e);
          return Qn(n[0], n[1], t, "SQL", e);
        }),
        (e.invalid = function (t, n) {
          if ((void 0 === n && (n = null), !t))
            throw new w("need to specify a reason the DateTime is invalid");
          var i = t instanceof Ee ? t : new Ee(t, n);
          if (et.throwOnInvalid) throw new h(i);
          return new e({ invalid: i });
        }),
        (e.isDateTime = function (e) {
          return (e && e.isLuxonDateTime) || !1;
        });
      var t = e.prototype;
      return (
        (t.get = function (e) {
          return this[e];
        }),
        (t.resolvedLocaleOpts = function (e) {
          void 0 === e && (e = {});
          var t = Ae.create(this.loc.clone(e), e).resolvedOptions(this);
          return {
            locale: t.locale,
            numberingSystem: t.numberingSystem,
            outputCalendar: t.calendar,
          };
        }),
        (t.toUTC = function (e, t) {
          return (
            void 0 === e && (e = 0),
            void 0 === t && (t = {}),
            this.setZone(He.instance(e), t)
          );
        }),
        (t.toLocal = function () {
          return this.setZone(et.defaultZone);
        }),
        (t.setZone = function (t, n) {
          var i = void 0 === n ? {} : n,
            o = i.keepLocalTime,
            a = void 0 !== o && o,
            r = i.keepCalendarTime,
            s = void 0 !== r && r;
          if ((t = Ze(t, et.defaultZone)).equals(this.zone)) return this;
          if (t.isValid) {
            var l = this.ts;
            if (a || s) {
              var c = t.offset(this.ts);
              l = Xn(this.toObject(), c, t)[0];
            }
            return Wn(this, { ts: l, zone: t });
          }
          return e.invalid(Gn(t));
        }),
        (t.reconfigure = function (e) {
          var t = void 0 === e ? {} : e,
            n = t.locale,
            i = t.numberingSystem,
            o = t.outputCalendar;
          return Wn(this, {
            loc: this.loc.clone({
              locale: n,
              numberingSystem: i,
              outputCalendar: o,
            }),
          });
        }),
        (t.setLocale = function (e) {
          return this.reconfigure({ locale: e });
        }),
        (t.set = function (e) {
          if (!this.isValid) return this;
          var t,
            n = fe(e, li, []);
          !H(n.weekYear) || !H(n.weekNumber) || !H(n.weekday)
            ? (t = Bn(Object.assign(jn(this.c), n)))
            : H(n.ordinal)
            ? ((t = Object.assign(this.toObject(), n)),
              H(n.day) && (t.day = Math.min(se(t.year, t.month), t.day)))
            : (t = Rn(Object.assign(Fn(this.c), n)));
          var i = Xn(t, this.o, this.zone);
          return Wn(this, { ts: i[0], o: i[1] });
        }),
        (t.plus = function (e) {
          return this.isValid ? Wn(this, Jn(this, cn(e))) : this;
        }),
        (t.minus = function (e) {
          return this.isValid ? Wn(this, Jn(this, cn(e).negate())) : this;
        }),
        (t.startOf = function (e) {
          if (!this.isValid) return this;
          var t = {},
            n = ln.normalizeUnit(e);
          switch (n) {
            case "years":
              t.month = 1;
            case "quarters":
            case "months":
              t.day = 1;
            case "weeks":
            case "days":
              t.hour = 0;
            case "hours":
              t.minute = 0;
            case "minutes":
              t.second = 0;
            case "seconds":
              t.millisecond = 0;
          }
          if (("weeks" === n && (t.weekday = 1), "quarters" === n)) {
            var i = Math.ceil(this.month / 3);
            t.month = 3 * (i - 1) + 1;
          }
          return this.set(t);
        }),
        (t.endOf = function (e) {
          var t;
          return this.isValid
            ? this.plus(((t = {}), (t[e] = 1), t))
                .startOf(e)
                .minus(1)
            : this;
        }),
        (t.toFormat = function (e, t) {
          return (
            void 0 === t && (t = {}),
            this.isValid
              ? Ae.create(this.loc.redefaultToEN(t)).formatDateTimeFromString(
                  this,
                  e
                )
              : _n
          );
        }),
        (t.toLocaleString = function (e) {
          return (
            void 0 === e && (e = C),
            this.isValid
              ? Ae.create(this.loc.clone(e), e).formatDateTime(this)
              : _n
          );
        }),
        (t.toLocaleParts = function (e) {
          return (
            void 0 === e && (e = {}),
            this.isValid
              ? Ae.create(this.loc.clone(e), e).formatDateTimeParts(this)
              : []
          );
        }),
        (t.toISO = function (e) {
          return (
            void 0 === e && (e = {}),
            this.isValid ? this.toISODate(e) + "T" + this.toISOTime(e) : null
          );
        }),
        (t.toISODate = function (e) {
          var t = (void 0 === e ? {} : e).format,
            n =
              "basic" === (void 0 === t ? "extended" : t)
                ? "yyyyMMdd"
                : "yyyy-MM-dd";
          return this.year > 9999 && (n = "+" + n), ei(this, n);
        }),
        (t.toISOWeekDate = function () {
          return ei(this, "kkkk-'W'WW-c");
        }),
        (t.toISOTime = function (e) {
          var t = void 0 === e ? {} : e,
            n = t.suppressMilliseconds,
            i = void 0 !== n && n,
            o = t.suppressSeconds,
            a = void 0 !== o && o,
            r = t.includeOffset,
            s = void 0 === r || r,
            l = t.format;
          return ti(this, {
            suppressSeconds: a,
            suppressMilliseconds: i,
            includeOffset: s,
            format: void 0 === l ? "extended" : l,
          });
        }),
        (t.toRFC2822 = function () {
          return ei(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", !1);
        }),
        (t.toHTTP = function () {
          return ei(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
        }),
        (t.toSQLDate = function () {
          return ei(this, "yyyy-MM-dd");
        }),
        (t.toSQLTime = function (e) {
          var t = void 0 === e ? {} : e,
            n = t.includeOffset,
            i = void 0 === n || n,
            o = t.includeZone;
          return ti(this, {
            includeOffset: i,
            includeZone: void 0 !== o && o,
            spaceZone: !0,
          });
        }),
        (t.toSQL = function (e) {
          return (
            void 0 === e && (e = {}),
            this.isValid ? this.toSQLDate() + " " + this.toSQLTime(e) : null
          );
        }),
        (t.toString = function () {
          return this.isValid ? this.toISO() : _n;
        }),
        (t.valueOf = function () {
          return this.toMillis();
        }),
        (t.toMillis = function () {
          return this.isValid ? this.ts : NaN;
        }),
        (t.toSeconds = function () {
          return this.isValid ? this.ts / 1e3 : NaN;
        }),
        (t.toJSON = function () {
          return this.toISO();
        }),
        (t.toBSON = function () {
          return this.toJSDate();
        }),
        (t.toObject = function (e) {
          if ((void 0 === e && (e = {}), !this.isValid)) return {};
          var t = Object.assign({}, this.c);
          return (
            e.includeConfig &&
              ((t.outputCalendar = this.outputCalendar),
              (t.numberingSystem = this.loc.numberingSystem),
              (t.locale = this.loc.locale)),
            t
          );
        }),
        (t.toJSDate = function () {
          return new Date(this.isValid ? this.ts : NaN);
        }),
        (t.diff = function (e, t, n) {
          if (
            (void 0 === t && (t = "milliseconds"),
            void 0 === n && (n = {}),
            !this.isValid || !e.isValid)
          )
            return ln.invalid(
              this.invalid || e.invalid,
              "created by diffing an invalid DateTime"
            );
          var i,
            o = Object.assign(
              { locale: this.locale, numberingSystem: this.numberingSystem },
              n
            ),
            a = ((i = t), Array.isArray(i) ? i : [i]).map(ln.normalizeUnit),
            r = e.valueOf() > this.valueOf(),
            s = mn(r ? this : e, r ? e : this, a, o);
          return r ? s.negate() : s;
        }),
        (t.diffNow = function (t, n) {
          return (
            void 0 === t && (t = "milliseconds"),
            void 0 === n && (n = {}),
            this.diff(e.local(), t, n)
          );
        }),
        (t.until = function (e) {
          return this.isValid ? pn.fromDateTimes(this, e) : this;
        }),
        (t.hasSame = function (e, t) {
          if (!this.isValid) return !1;
          if ("millisecond" === t) return this.valueOf() === e.valueOf();
          var n = e.valueOf();
          return this.startOf(t) <= n && n <= this.endOf(t);
        }),
        (t.equals = function (e) {
          return (
            this.isValid &&
            e.isValid &&
            this.valueOf() === e.valueOf() &&
            this.zone.equals(e.zone) &&
            this.loc.equals(e.loc)
          );
        }),
        (t.toRelative = function (t) {
          if ((void 0 === t && (t = {}), !this.isValid)) return null;
          var n = t.base || e.fromObject({ zone: this.zone }),
            i = t.padding ? (this < n ? -t.padding : t.padding) : 0;
          return ui(
            n,
            this.plus(i),
            Object.assign(t, {
              numeric: "always",
              units: ["years", "months", "days", "hours", "minutes", "seconds"],
            })
          );
        }),
        (t.toRelativeCalendar = function (t) {
          return (
            void 0 === t && (t = {}),
            this.isValid
              ? ui(
                  t.base || e.fromObject({ zone: this.zone }),
                  this,
                  Object.assign(t, {
                    numeric: "auto",
                    units: ["years", "months", "days"],
                    calendary: !0,
                  })
                )
              : null
          );
        }),
        (e.min = function () {
          for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++)
            n[i] = arguments[i];
          if (!n.every(e.isDateTime))
            throw new w("min requires all arguments be DateTimes");
          return X(
            n,
            function (e) {
              return e.valueOf();
            },
            Math.min
          );
        }),
        (e.max = function () {
          for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++)
            n[i] = arguments[i];
          if (!n.every(e.isDateTime))
            throw new w("max requires all arguments be DateTimes");
          return X(
            n,
            function (e) {
              return e.valueOf();
            },
            Math.max
          );
        }),
        (e.fromFormatExplain = function (e, t, n) {
          void 0 === n && (n = {});
          var i = n,
            o = i.locale,
            a = void 0 === o ? null : o,
            r = i.numberingSystem,
            s = void 0 === r ? null : r;
          return Mn(
            dt.fromOpts({ locale: a, numberingSystem: s, defaultToEN: !0 }),
            e,
            t
          );
        }),
        (e.fromStringExplain = function (t, n, i) {
          return void 0 === i && (i = {}), e.fromFormatExplain(t, n, i);
        }),
        i(
          e,
          [
            {
              key: "isValid",
              get: function () {
                return null === this.invalid;
              },
            },
            {
              key: "invalidReason",
              get: function () {
                return this.invalid ? this.invalid.reason : null;
              },
            },
            {
              key: "invalidExplanation",
              get: function () {
                return this.invalid ? this.invalid.explanation : null;
              },
            },
            {
              key: "locale",
              get: function () {
                return this.isValid ? this.loc.locale : null;
              },
            },
            {
              key: "numberingSystem",
              get: function () {
                return this.isValid ? this.loc.numberingSystem : null;
              },
            },
            {
              key: "outputCalendar",
              get: function () {
                return this.isValid ? this.loc.outputCalendar : null;
              },
            },
            {
              key: "zone",
              get: function () {
                return this._zone;
              },
            },
            {
              key: "zoneName",
              get: function () {
                return this.isValid ? this.zone.name : null;
              },
            },
            {
              key: "year",
              get: function () {
                return this.isValid ? this.c.year : NaN;
              },
            },
            {
              key: "quarter",
              get: function () {
                return this.isValid ? Math.ceil(this.c.month / 3) : NaN;
              },
            },
            {
              key: "month",
              get: function () {
                return this.isValid ? this.c.month : NaN;
              },
            },
            {
              key: "day",
              get: function () {
                return this.isValid ? this.c.day : NaN;
              },
            },
            {
              key: "hour",
              get: function () {
                return this.isValid ? this.c.hour : NaN;
              },
            },
            {
              key: "minute",
              get: function () {
                return this.isValid ? this.c.minute : NaN;
              },
            },
            {
              key: "second",
              get: function () {
                return this.isValid ? this.c.second : NaN;
              },
            },
            {
              key: "millisecond",
              get: function () {
                return this.isValid ? this.c.millisecond : NaN;
              },
            },
            {
              key: "weekYear",
              get: function () {
                return this.isValid ? Zn(this).weekYear : NaN;
              },
            },
            {
              key: "weekNumber",
              get: function () {
                return this.isValid ? Zn(this).weekNumber : NaN;
              },
            },
            {
              key: "weekday",
              get: function () {
                return this.isValid ? Zn(this).weekday : NaN;
              },
            },
            {
              key: "ordinal",
              get: function () {
                return this.isValid ? Fn(this.c).ordinal : NaN;
              },
            },
            {
              key: "monthShort",
              get: function () {
                return this.isValid
                  ? hn.months("short", { locale: this.locale })[this.month - 1]
                  : null;
              },
            },
            {
              key: "monthLong",
              get: function () {
                return this.isValid
                  ? hn.months("long", { locale: this.locale })[this.month - 1]
                  : null;
              },
            },
            {
              key: "weekdayShort",
              get: function () {
                return this.isValid
                  ? hn.weekdays("short", { locale: this.locale })[
                      this.weekday - 1
                    ]
                  : null;
              },
            },
            {
              key: "weekdayLong",
              get: function () {
                return this.isValid
                  ? hn.weekdays("long", { locale: this.locale })[
                      this.weekday - 1
                    ]
                  : null;
              },
            },
            {
              key: "offset",
              get: function () {
                return this.isValid ? +this.o : NaN;
              },
            },
            {
              key: "offsetNameShort",
              get: function () {
                return this.isValid
                  ? this.zone.offsetName(this.ts, {
                      format: "short",
                      locale: this.locale,
                    })
                  : null;
              },
            },
            {
              key: "offsetNameLong",
              get: function () {
                return this.isValid
                  ? this.zone.offsetName(this.ts, {
                      format: "long",
                      locale: this.locale,
                    })
                  : null;
              },
            },
            {
              key: "isOffsetFixed",
              get: function () {
                return this.isValid ? this.zone.universal : null;
              },
            },
            {
              key: "isInDST",
              get: function () {
                return (
                  !this.isOffsetFixed &&
                  (this.offset > this.set({ month: 1 }).offset ||
                    this.offset > this.set({ month: 5 }).offset)
                );
              },
            },
            {
              key: "isInLeapYear",
              get: function () {
                return ae(this.year);
              },
            },
            {
              key: "daysInMonth",
              get: function () {
                return se(this.year, this.month);
              },
            },
            {
              key: "daysInYear",
              get: function () {
                return this.isValid ? re(this.year) : NaN;
              },
            },
            {
              key: "weeksInWeekYear",
              get: function () {
                return this.isValid ? ce(this.weekYear) : NaN;
              },
            },
          ],
          [
            {
              key: "DATE_SHORT",
              get: function () {
                return C;
              },
            },
            {
              key: "DATE_MED",
              get: function () {
                return $;
              },
            },
            {
              key: "DATE_MED_WITH_WEEKDAY",
              get: function () {
                return T;
              },
            },
            {
              key: "DATE_FULL",
              get: function () {
                return I;
              },
            },
            {
              key: "DATE_HUGE",
              get: function () {
                return S;
              },
            },
            {
              key: "TIME_SIMPLE",
              get: function () {
                return N;
              },
            },
            {
              key: "TIME_WITH_SECONDS",
              get: function () {
                return q;
              },
            },
            {
              key: "TIME_WITH_SHORT_OFFSET",
              get: function () {
                return D;
              },
            },
            {
              key: "TIME_WITH_LONG_OFFSET",
              get: function () {
                return M;
              },
            },
            {
              key: "TIME_24_SIMPLE",
              get: function () {
                return U;
              },
            },
            {
              key: "TIME_24_WITH_SECONDS",
              get: function () {
                return z;
              },
            },
            {
              key: "TIME_24_WITH_SHORT_OFFSET",
              get: function () {
                return A;
              },
            },
            {
              key: "TIME_24_WITH_LONG_OFFSET",
              get: function () {
                return E;
              },
            },
            {
              key: "DATETIME_SHORT",
              get: function () {
                return L;
              },
            },
            {
              key: "DATETIME_SHORT_WITH_SECONDS",
              get: function () {
                return O;
              },
            },
            {
              key: "DATETIME_MED",
              get: function () {
                return j;
              },
            },
            {
              key: "DATETIME_MED_WITH_SECONDS",
              get: function () {
                return B;
              },
            },
            {
              key: "DATETIME_MED_WITH_WEEKDAY",
              get: function () {
                return F;
              },
            },
            {
              key: "DATETIME_FULL",
              get: function () {
                return R;
              },
            },
            {
              key: "DATETIME_FULL_WITH_SECONDS",
              get: function () {
                return P;
              },
            },
            {
              key: "DATETIME_HUGE",
              get: function () {
                return V;
              },
            },
            {
              key: "DATETIME_HUGE_WITH_SECONDS",
              get: function () {
                return _;
              },
            },
          ]
        ),
        e
      );
    })();
    function pi(e) {
      if (di.isDateTime(e)) return e;
      if (e && e.valueOf && G(e.valueOf())) return di.fromJSDate(e);
      if (e && "object" == typeof e) return di.fromObject(e);
      throw new w("Unknown datetime argument: " + e + ", of type " + typeof e);
    }
    (t.DateTime = di),
      (t.Duration = ln),
      (t.FixedOffsetZone = He),
      (t.IANAZone = Ve),
      (t.Info = hn),
      (t.Interval = pn),
      (t.InvalidZone = Ge),
      (t.LocalZone = je),
      (t.Settings = et),
      (t.Zone = Le);
  });
  const Vn = { product: null, price: null, fullMessage: null };
  function _n(e, t) {
    null === t && (t = Intl.DateTimeFormat().resolvedOptions().timeZone);
    const n = new Date(e.toLocaleString("en-US", { timeZone: t })),
      i = e.getTime() - n.getTime();
    return new Date(e.getTime() - i);
  }
  async function Hn(e) {
    document.currentScript.hasAttribute("data-product") &&
      (Vn.product = document.currentScript.getAttribute("data-product")),
      document.currentScript.hasAttribute("data-price") &&
        (Vn.price = document.currentScript.getAttribute("data-price")),
      document.currentScript.hasAttribute("data-fullmessage") &&
        (Vn.fullMessage =
          document.currentScript.getAttribute("data-fullmessage"));
    const t =
      e +
      "/api/business/get/" +
      (function () {
        let e = "";
        e = document.currentScript.hasAttribute("data-key")
          ? document.currentScript.getAttribute("data-key")
          : document.currentScript.hasAttribute("key")
          ? document.currentScript.getAttribute("key")
          : document.currentScript.getAttribute("src").split("key=")[1];
        return e;
      })();
    let n = {};
    return (
      await Fn.get(t)
        .then(function (e) {
          (n = e.data.data),
            (n.premium = 1 == e.data.premium),
            (n.dialingCode = e.data.dialingCode);
          const t = e.data.country;
          if (
            (n.whatsapps.forEach((e, t) => {
              (n.whatsapps[t].online = (function (e) {
                if (0 === e.length) return !0;
                const t = Pn.DateTime.local();
                let n = t.toISODate();
                const i = {
                    1: "MO",
                    2: "TU",
                    3: "WE",
                    4: "TH",
                    5: "FR",
                    6: "SA",
                    7: "SU",
                  },
                  o = t.weekday;
                let a,
                  r = !1;
                for (let t = 0; t < e.length; t++)
                  if (
                    (e[t].timezone
                      ? ((a = Pn.DateTime.local().setZone(e[t].timezone, {
                          keepLocalTime: !1,
                        }).weekday),
                        (n = Pn.DateTime.local()
                          .setZone(e[t].timezone, { keepLocalTime: !1 })
                          .toISODate()))
                      : (a = o),
                    e[t].day == i[a])
                  ) {
                    let i = Pn.DateTime.fromISO(
                        n + "T" + e[t].availableFrom
                      ).diffNow("minutes").minutes,
                      o = Pn.DateTime.fromISO(
                        n + "T" + e[t].availableUntil
                      ).diffNow("minutes").minutes;
                    if (e[t].timezone) {
                      let n = Pn.DateTime.local()
                        .setZone(e[t].timezone, { keepLocalTime: !1 })
                        .toISODate();
                      (i = Pn.DateTime.fromISO(n + "T" + e[t].availableFrom)
                        .setZone(e[t].timezone, { keepLocalTime: !0 })
                        .diffNow("minutes").minutes),
                        (o = Pn.DateTime.fromISO(n + "T" + e[t].availableUntil)
                          .setZone(e[t].timezone, { keepLocalTime: !0 })
                          .diffNow("minutes").minutes);
                    }
                    if (i < 0 && o > 0) return !0;
                  }
                return r;
              })(e.optimes)),
                (n.whatsapps[t].businessGaTag = n.gaTag);
            }),
            !0 === n.random)
          ) {
            (n.whatsapps = (function (e) {
              let t = e.length;
              for (; t > 0; ) {
                let n = Math.floor(Math.random() * t);
                t--;
                let i = e[t];
                (e[t] = e[n]), (e[n] = i);
              }
              return e;
            })(n.whatsapps)),
              (n.whatsapps = Gn(n.whatsapps));
            const e = n.whatsapps.pop();
            n.whatsapps = [e];
          } else !0 === n.onlyactive && (n.whatsapps = Gn(n.whatsapps));
          if (
            (n.whatsapps.forEach((e, i) => {
              !0 === n.whatsapps[i].active &&
                (n.whatsapps[i].active = Zn(
                  t,
                  n.whatsapps[i].countryActivate,
                  n.whatsapps[i].country
                )),
                !0 === n.whatsapps[i].active &&
                  n.whatsapps[i].enableHolidays &&
                  1 == n.whatsapps[i].online &&
                  (n.whatsapps[i].online = (function (e) {
                    const t = new Date().getTime();
                    let n = new Date(e.holidayFrom);
                    n = _n(n, e.holidayTimezone);
                    let i = new Date(e.holidayUntil);
                    return (
                      (i = _n(i, e.holidayTimezone)),
                      (i = i.getTime() + 864e5),
                      !(t >= n.getTime() && t <= i)
                    );
                  })(n.whatsapps[i]));
            }),
            !0 === n.hideIfNoone)
          ) {
            let e = !1;
            n.whatsapps.forEach((t) => (1 == t.online ? (e = !0) : "")),
              !1 === e && (n.active = !1);
          }
          console.log(n),
            (n.whatsapps = n.whatsapps.filter((e) => !0 === e.active)),
            (n.active = Zn(t, n.countryActivate, n.country)),
            0 === n.whatsapps.length && (n.active = !1),
            (n.faqDisplay = n.alternativeFaq),
            n.whatsapps.find((e) => !0 === e.activateDirectlyChat) &&
              (n.isopen = !1),
            n.expandFullScreenMobile &&
              (n.expandFullScreenMobile = /iPhone|iPad|iPod|Android/i.test(
                navigator.userAgent
              )),
            n.expandFullScreenMobile &&
              ((n.outCloseButton = !1),
              "dotTheme" === n.widgetTheme && (n.widgetTheme = "normal"));
          const i =
              navigator.userLanguage ||
              (navigator.languages &&
                navigator.languages.length &&
                navigator.languages[0]) ||
              navigator.language ||
              navigator.browserLanguage ||
              navigator.systemLanguage ||
              "en",
            o = new Intl.DateTimeFormat(i, {
              weekday: "short",
              timeZone: "UTC",
            }),
            a = [1, 2, 3, 4, 5, 6, 7].map(
              (e) => new Date(`2017-01-${e < 10 ? `0${e}` : e}T00:00:00+00:00`)
            );
          console.log(
            "days",
            a.map((e) => o.format(e))
          );
          const r = a.map((e) => o.format(e)),
            s = { SU: 0, MO: 1, TU: 2, WE: 3, TH: 4, FR: 5, SA: 6 };
          n.whatsapps.forEach((e) => {
            e.optimes.length > 0 &&
              e.optimes.forEach((e) => {
                e.day = r[s[e.day]];
              });
          }),
            "whatsappTheme" === n.widgetTheme && (n.color = "#115E52"),
            n.whatsapps.forEach((e) => {
              e.onboardPaymentLinks &&
                e.onboardPaymentLinks.forEach((e) => {
                  e.showOnWidget &&
                    e.useStripe &&
                    (n.whatsapps.push({
                      name: e.name,
                      iconUrl: e.image,
                      online: !0,
                      isExtraLink: !0,
                      type: "payment",
                      id: e.link,
                    }),
                    n.onboardPaymentLinks || (n.onboardPaymentLinks = []),
                    n.onboardPaymentLinks.push(e));
                });
            }),
            n.extraLinks &&
              n.extraLinks.forEach((e) => {
                n.whatsapps.push({
                  name: e.label,
                  iconUrl: e.icon,
                  online: !0,
                  isExtraLink: !0,
                  url: e.url,
                  type: e.type,
                });
              });
        })
        .catch(function (e) {
          console.log(e);
        }),
      n
    );
  }
  function Gn(e) {
    return e.filter((e) => !0 === e.online);
  }
  function Zn(e, t, n) {
    return ("KO" != t || !n.includes(e)) && !("OK" == t && !n.includes(e));
  }
  let Wn;
  function Kn(e, t) {
    let n = JSON.stringify(t.detail.data);
    (n = Qt(n)),
      t.detail.url && null !== t.detail.url ? Yn(e, n, t.detail.url) : Yn(e, n);
  }
  function Yn(e, t = "", n = null) {
    !(function (e) {
      let t = {};
      (t = {
        widget: e.businessGaTag ? e.businessGaTag : "whatapp",
        agent: e.gaTag ? e.gaTag : e.id,
      }),
        "function" == typeof window.fbq &&
          window.fbq("trackCustom", "chatWithEvent", t),
        "function" == typeof window.gtag
          ? window.gtag("event", "chatwith", {
              event_category: e.businessGaTag ? e.businessGaTag : "whatapp",
              event_label: e.gaTag ? e.gaTag : e.id,
            })
          : "object" == typeof window.dataLayer &&
            (console.log("GA dataLayer "),
            window.dataLayer.push({
              event: "chatwith",
              cw_event_category: e.businessGaTag ? e.businessGaTag : "whatsapp",
              cw_event_action: "chatwith",
              cw_event_label: e.gaTag ? e.gaTag : e.id,
            }));
    })(e),
      rt && localStorage.setItem("tochatuser", "true");
    let i = "&url=" + encodeURIComponent(window.location.href);
    Vn.product && (i = i + "&product=" + encodeURIComponent(Vn.product)),
      Vn.price && (i = i + "&price=" + encodeURIComponent(Vn.price)),
      Vn.fullMessage &&
        (i = i + "&fullmessage=" + encodeURIComponent(Vn.fullMessage));
    let o = "";
    n && (o = "&buyUrl=" + encodeURIComponent(n)),
      window.open(Wn + "/api/business/send/" + e.id + "?data=" + t + i + o);
  }
  function Xn(e) {
    let t = !1;
    return (
      null != e.form &&
        "object" == typeof e.form &&
        (t = Object.keys(e.form).length > 0 && e.form.constructor === Object),
      t
    );
  }
  function Jn(e) {
    let t, n, i, o, a, r, s, u;
    const d = e[3].default,
      p = (function (e, t, n, i) {
        if (e) {
          const o = l(e, t, n, i);
          return e[0](o);
        }
      })(d, e, e[2], null);
    return {
      c() {
        (t = k("div")),
          (n = k("div")),
          (i = k("div")),
          (i.innerHTML =
            '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" class="svg-inline--fa fa-times fa-w-11 gcohtech-1qptg2t" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path fill="#000" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>'),
          (o = T()),
          (a = k("div")),
          p && p.c(),
          q(i, "class", "close-modal gcohtech-1qptg2t"),
          q(n, "class", "modal-content gcohtech-1qptg2t"),
          q(t, "class", "modal gcohtech-1qptg2t");
      },
      m(l, c) {
        b(l, t, c),
          w(t, n),
          w(n, i),
          w(n, o),
          w(n, a),
          p && p.m(a, null),
          (r = !0),
          s || ((u = S(i, "click", e[4])), (s = !0));
      },
      p(e, t) {
        p && p.p && 4 & t && c(p, d, e, e[2], t, null, null);
      },
      i(e) {
        r || (ve(p, e), (r = !0));
      },
      o(e) {
        ge(p, e), (r = !1);
      },
      d(e) {
        e && y(t), p && p.d(e), (s = !1), u();
      },
    };
  }
  function Qn(e) {
    let t,
      n,
      i = e[0] && Jn(e);
    return {
      c() {
        i && i.c(), (t = I());
      },
      m(e, o) {
        i && i.m(e, o), b(e, t, o), (n = !0);
      },
      p(e, [n]) {
        e[0]
          ? i
            ? (i.p(e, n), 1 & n && ve(i, 1))
            : ((i = Jn(e)), i.c(), ve(i, 1), i.m(t.parentNode, t))
          : i &&
            (fe(),
            ge(i, 1, 1, () => {
              i = null;
            }),
            me());
      },
      i(e) {
        n || (ve(i), (n = !0));
      },
      o(e) {
        ge(i), (n = !1);
      },
      d(e) {
        i && i.d(e), e && y(t);
      },
    };
  }
  function ei(e, t, n) {
    let { $$slots: i = {}, $$scope: o } = t,
      { isOpen: a } = t,
      r = 0;
    return (
      (e.$$set = (e) => {
        "isOpen" in e && n(1, (a = e.isOpen)),
          "$$scope" in e && n(2, (o = e.$$scope));
      }),
      (e.$$.update = () => {
        2 & e.$$.dirty && a > 0 && n(0, (r = !0));
      }),
      [r, a, o, i, () => n(0, (r = !1))]
    );
  }
  class ti extends qe {
    constructor(e) {
      var t;
      super(),
        document.getElementById("gcohtech-1qptg2t-style") ||
          (((t = k("style")).id = "gcohtech-1qptg2t-style"),
          (t.textContent =
            "@-webkit-keyframes gcohtech-1qptg2t-flip-in-hor-bottom{0%{transform:rotateX(80deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@keyframes gcohtech-1qptg2t-flip-in-hor-bottom{0%{transform:rotateX(80deg);opacity:0}100%{transform:rotateX(0);opacity:1}}.modal.gcohtech-1qptg2t.gcohtech-1qptg2t{position:absolute;top:0;left:0;right:0;bottom:0;background:rgba(255,255,255,0.7);display:flex;align-items:center;justify-content:center;z-index:5;border:0;width:100%;height:100%}.modal-content.gcohtech-1qptg2t.gcohtech-1qptg2t{box-shadow:0px 0px 50px 0px rgba(0,0,0,0.45);background:#fff;padding:1.25em;border-radius:1em;position:relative}.close-modal.gcohtech-1qptg2t.gcohtech-1qptg2t{position:absolute;right:0;z-index:1000000;top:0;padding:4px 10px 0 10px;color:#fff;border-top-right-radius:1em;border-bottom-left-radius:1em;cursor:pointer}.close-modal.gcohtech-1qptg2t svg.gcohtech-1qptg2t{width:.7em}"),
          w(document.head, t)),
        Ne(this, e, ei, Qn, s, { isOpen: 1 });
    }
  }
  function ni(t) {
    let n, i, o, r, s, l, c, u, d, p, h, f, m, v;
    return {
      c() {
        (n = k("div")),
          (i = k("div")),
          (o = k("input")),
          (r = T()),
          (s = k("div")),
          (l = k("button")),
          (c = C("svg")),
          (u = C("defs")),
          (d = C("style")),
          (p = $(".cls-1{fill:none;}")),
          (h = C("path")),
          q(o, "type", "text"),
          q(o, "class", "gcohtech-4n0ipz"),
          q(i, "class", "whatapp-chat-textbox-input gcohtech-4n0ipz"),
          q(h, "fill", "#fff"),
          q(
            h,
            "d",
            "M27.45,15.11l-22-11a1,1,0,0,0-1.08.12,1,1,0,0,0-.33,1L7,16,4,26.74A1,1,0,0,0,5,28a1,1,0,0,0,.45-.11l22-11a1,1,0,0,0,0-1.78Zm-20.9,10L8.76,17H18V15H8.76L6.55,6.89,24.76,16Z"
          ),
          q(c, "width", "24px"),
          q(c, "height", "24px"),
          q(c, "viewBox", "0 0 32 32"),
          q(c, "id", "icon"),
          q(c, "xmlns", "http://www.w3.org/2000/svg"),
          q(c, "class", "gcohtech-4n0ipz"),
          z(l, "background-color", t[1]),
          q(l, "class", "gcohtech-4n0ipz"),
          q(s, "class", "whatapp-chat-textbox-button gcohtech-4n0ipz"),
          q(n, "class", "whataapp-chat-textbox gcohtech-4n0ipz"),
          q(
            n,
            "style",
            (f = t[0] && "border:1px solid #f0f0f0;border-radius:0px;")
          ),
          B(n, "fullScreenMobile", t[2]),
          B(n, "bubbleTheme", t[5]);
      },
      m(e, a) {
        b(e, n, a),
          w(n, i),
          w(i, o),
          U(o, t[4]),
          t[11](o),
          w(n, r),
          w(n, s),
          w(s, l),
          w(l, c),
          w(c, u),
          w(u, d),
          w(d, p),
          w(c, h),
          m ||
            ((v = [
              S(o, "input", t[9]),
              S(o, "keyup", N(t[10])),
              S(o, "keypress", t[7]),
              S(l, "click", t[12]),
            ]),
            (m = !0));
      },
      p(e, [t]) {
        16 & t && o.value !== e[4] && U(o, e[4]),
          2 & t && z(l, "background-color", e[1]),
          1 & t &&
            f !== (f = e[0] && "border:1px solid #f0f0f0;border-radius:0px;") &&
            q(n, "style", f),
          4 & t && B(n, "fullScreenMobile", e[2]),
          32 & t && B(n, "bubbleTheme", e[5]);
      },
      i: e,
      o: e,
      d(e) {
        e && y(n), t[11](null), (m = !1), a(v);
      },
    };
  }
  function ii(e, t, n) {
    let i,
      o,
      a,
      { hasBorder: r } = t,
      { color: s } = t,
      { widgetTheme: l } = t,
      { fullScreenMobile: c } = t;
    W(() => {
      /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || a.focus();
    });
    const u = K();
    function d() {
      u("message", i), n(4, (i = ""));
    }
    return (
      (e.$$set = (e) => {
        "hasBorder" in e && n(0, (r = e.hasBorder)),
          "color" in e && n(1, (s = e.color)),
          "widgetTheme" in e && n(8, (l = e.widgetTheme)),
          "fullScreenMobile" in e && n(2, (c = e.fullScreenMobile));
      }),
      (e.$$.update = () => {
        256 & e.$$.dirty && n(5, (o = "bubbleTheme" === l));
      }),
      n(4, (i = "")),
      [
        r,
        s,
        c,
        a,
        i,
        o,
        d,
        () => {
          "Enter" == event.code && event.preventDefault();
        },
        l,
        function () {
          (i = this.value), n(4, i);
        },
        (e) => "Enter" === e.key && d(),
        function (e) {
          X[e ? "unshift" : "push"](() => {
            (a = e), n(3, a);
          });
        },
        () => d(),
      ]
    );
  }
  class oi extends qe {
    constructor(e) {
      var t;
      super(),
        document.getElementById("gcohtech-4n0ipz-style") ||
          (((t = k("style")).id = "gcohtech-4n0ipz-style"),
          (t.textContent =
            ".whataapp-chat-textbox.gcohtech-4n0ipz.gcohtech-4n0ipz{border-radius:5px;display:flex;flex-wrap:nowrap}.whatapp-chat-textbox-input.gcohtech-4n0ipz.gcohtech-4n0ipz{flex:7;background:white}.whatapp-chat-textbox-input.gcohtech-4n0ipz input.gcohtech-4n0ipz{border:none;font-family:'Inter';font-size:16px;width:100% !important;resize:none !important;color:#666 !important;height:35px !important;background:#fff !important;outline:none;padding-left:15px;box-sizing:none}.whatapp-chat-textbox-input.gcohtech-4n0ipz input.gcohtech-4n0ipz:focus{box-shadow:0px}.whatapp-chat-textbox-button.gcohtech-4n0ipz.gcohtech-4n0ipz{flex:2;flex-grow:1;flex-shrink:1;background-color:white}.whatapp-chat-textbox-button.gcohtech-4n0ipz button.gcohtech-4n0ipz{border:none;border-radius:100px;position:absolute;bottom:1px;right:2px;width:35px;height:35px;cursor:pointer;display:flex;justify-content:center;align-items:center;padding:0px}.fullScreenMobile.gcohtech-4n0ipz .whatapp-chat-textbox-button button.gcohtech-4n0ipz{position:relative;margin-top:2px;margin-right:2px;float:right}.whatapp-chat-textbox-button.gcohtech-4n0ipz button svg.gcohtech-4n0ipz{margin-left:3px}.bubbleTheme.gcohtech-4n0ipz .whatapp-chat-textbox-input.gcohtech-4n0ipz,.bubbleTheme.gcohtech-4n0ipz .whatapp-chat-textbox-input input.gcohtech-4n0ipz,.bubbleTheme.gcohtech-4n0ipz .whatapp-chat-textbox-button.gcohtech-4n0ipz{border-radius:50px}.bubbleTheme.gcohtech-4n0ipz .whatapp-chat-textbox-input input.gcohtech-4n0ipz{border-top-right-radius:0px;border-bottom-right-radius:0px}"),
          w(document.head, t)),
        Ne(this, e, ii, ni, s, {
          hasBorder: 0,
          color: 1,
          widgetTheme: 8,
          fullScreenMobile: 2,
        });
    }
  }
  function ai(t) {
    let n, i, o, r, s, l;
    return {
      c() {
        (n = k("div")),
          (i = k("button")),
          (i.innerHTML =
            '<svg style="width: 18px" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>'),
          (o = T()),
          (r = k("button")),
          (r.innerHTML =
            '<svg style="width: 14px;margin-top:3px" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>'),
          q(i, "class", "whatapp-button half gcohtech-1i8s9u9"),
          q(r, "class", "whatapp-button half gcohtech-1i8s9u9"),
          q(n, "class", "scale-in-center gcohtech-1i8s9u9");
      },
      m(e, a) {
        b(e, n, a),
          w(n, i),
          w(n, o),
          w(n, r),
          s || ((l = [S(i, "click", t[1]), S(r, "click", t[2])]), (s = !0));
      },
      p: e,
      i: e,
      o: e,
      d(e) {
        e && y(n), (s = !1), a(l);
      },
    };
  }
  function ri(e) {
    const t = K();
    function n(e) {
      t("message", e);
    }
    return [n, () => n("Yes"), () => n("No")];
  }
  class si extends qe {
    constructor(e) {
      var t;
      super(),
        document.getElementById("gcohtech-1i8s9u9-style") ||
          (((t = k("style")).id = "gcohtech-1i8s9u9-style"),
          (t.textContent =
            ".whatapp-button.gcohtech-1i8s9u9{background:rgb(39, 217, 116);color:white;border:none;height:45px;display:inline-block;margin-bottom:5px;border-radius:5px}.whatapp-button.half.gcohtech-1i8s9u9{flex:1;margin:2px}.scale-in-center.gcohtech-1i8s9u9{-webkit-animation:gcohtech-1i8s9u9-scale-in-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;animation:gcohtech-1i8s9u9-scale-in-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;display:flex;-webkit-animation-delay:0;animation-delay:0;margin-right:5px;margin-bottom:5px}@-webkit-keyframes gcohtech-1i8s9u9-scale-in-center{0%{transform:scale(0);opacity:1}100%{transform:scale(1);opacity:1}}@keyframes gcohtech-1i8s9u9-scale-in-center{0%{transform:scale(0);opacity:1}100%{transform:scale(1);opacity:1}}"),
          w(document.head, t)),
        Ne(this, e, ri, ai, s, {});
    }
  }
  function li(e, t, n) {
    const i = e.slice();
    return (i[8] = t[n]), i;
  }
  function ci(e) {
    let t,
      n,
      i,
      o = e[8] + "";
    return {
      c() {
        (t = k("option")),
          (n = $(o)),
          (t.__value = i = e[8]),
          (t.value = t.__value);
      },
      m(e, i) {
        b(e, t, i), w(t, n);
      },
      p(e, a) {
        1 & a && o !== (o = e[8] + "") && M(n, o),
          1 & a && i !== (i = e[8]) && ((t.__value = i), (t.value = t.__value));
      },
      d(e) {
        e && y(t);
      },
    };
  }
  function ui(t) {
    let n,
      i,
      o,
      r,
      s,
      l,
      c,
      u,
      d,
      p,
      h = t[4](t[0].label) + "",
      f = t[3](t[0].data),
      m = [];
    for (let e = 0; e < f.length; e += 1) m[e] = ci(li(t, f, e));
    return {
      c() {
        (n = k("div")),
          (i = k("select")),
          (o = k("option")),
          (r = $("--")),
          (s = $(h)),
          (l = $("--"));
        for (let e = 0; e < m.length; e += 1) m[e].c();
        (c = T()),
          (u = k("button")),
          (u.innerHTML =
            '<svg style="width: 18px;" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>'),
          (o.__value = ""),
          (o.value = o.__value),
          q(i, "class", "whatapp-select gcohtech-1yssnv9"),
          void 0 === t[1] && ie(() => t[5].call(i)),
          q(u, "class", "whatapp-button gcohtech-1yssnv9"),
          q(n, "class", "scale-in-center gcohtech-1yssnv9");
      },
      m(e, a) {
        b(e, n, a), w(n, i), w(i, o), w(o, r), w(o, s), w(o, l);
        for (let e = 0; e < m.length; e += 1) m[e].m(i, null);
        A(i, t[1]),
          w(n, c),
          w(n, u),
          d || ((p = [S(i, "change", t[5]), S(u, "click", t[6])]), (d = !0));
      },
      p(e, [t]) {
        if ((1 & t && h !== (h = e[4](e[0].label) + "") && M(s, h), 9 & t)) {
          let n;
          for (f = e[3](e[0].data), n = 0; n < f.length; n += 1) {
            const o = li(e, f, n);
            m[n] ? m[n].p(o, t) : ((m[n] = ci(o)), m[n].c(), m[n].m(i, null));
          }
          for (; n < m.length; n += 1) m[n].d(1);
          m.length = f.length;
        }
        11 & t && A(i, e[1]);
      },
      i: e,
      o: e,
      d(e) {
        e && y(n), x(m, e), (d = !1), a(p);
      },
    };
  }
  function di(e, t, n) {
    let i,
      { options: o } = t;
    const a = K();
    function r() {
      a("message", i), n(1, (i = ""));
    }
    const s = (e) => e.split("|");
    return (
      (e.$$set = (e) => {
        "options" in e && n(0, (o = e.options));
      }),
      n(1, (i = "")),
      [
        o,
        i,
        r,
        s,
        (e) => (e.length > 20 ? e.substring(0, 20) + "..." : e),
        function () {
          (i = E(this)), n(1, i), n(3, s), n(0, o);
        },
        () => r(),
      ]
    );
  }
  class pi extends qe {
    constructor(e) {
      var t;
      super(),
        document.getElementById("gcohtech-1yssnv9-style") ||
          (((t = k("style")).id = "gcohtech-1yssnv9-style"),
          (t.textContent =
            ".whatapp-select.gcohtech-1yssnv9{height:45px;display:inline-block;margin-bottom:5px;border-radius:5px;flex:1 1 80%;max-width:200px;margin:2px 0px 2px 4px}.whatapp-button.gcohtech-1yssnv9{background:rgb(39, 217, 116);color:white;border:none;height:45px;display:inline-block;margin-bottom:5px;border-radius:5px;margin:2px;flex:2 1 20%}.scale-in-center.gcohtech-1yssnv9{-webkit-animation:gcohtech-1yssnv9-scale-in-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;animation:gcohtech-1yssnv9-scale-in-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;display:flex;-webkit-animation-delay:0;animation-delay:0;margin-right:5px;margin-bottom:5px}@-webkit-keyframes gcohtech-1yssnv9-scale-in-center{0%{transform:scale(0);opacity:1}100%{transform:scale(1);opacity:1}}@keyframes gcohtech-1yssnv9-scale-in-center{0%{transform:scale(0);opacity:1}100%{transform:scale(1);opacity:1}}"),
          w(document.head, t)),
        Ne(this, e, di, ui, s, { options: 0 });
    }
  }
  function hi(t) {
    let n, i, o, a, r, s;
    return {
      c() {
        (n = k("div")),
          (i = k("span")),
          (o = T()),
          (a = k("span")),
          (r = T()),
          (s = k("span")),
          q(i, "class", "dot gcohtech-1j583h9"),
          z(i, "background-color", t[0]),
          q(a, "class", "dot gcohtech-1j583h9"),
          z(a, "background-color", t[0]),
          q(s, "class", "dot gcohtech-1j583h9"),
          z(s, "background-color", t[0]),
          q(n, "class", "dots-wave hideMeAfter2Seconds gcohtech-1j583h9");
      },
      m(e, t) {
        b(e, n, t), w(n, i), w(n, o), w(n, a), w(n, r), w(n, s);
      },
      p(e, [t]) {
        1 & t && z(i, "background-color", e[0]),
          1 & t && z(a, "background-color", e[0]),
          1 & t && z(s, "background-color", e[0]);
      },
      i: e,
      o: e,
      d(e) {
        e && y(n);
      },
    };
  }
  function fi(e, t, n) {
    let { backgroundColor: i } = t;
    return (
      (e.$$set = (e) => {
        "backgroundColor" in e && n(0, (i = e.backgroundColor));
      }),
      [i]
    );
  }
  class mi extends qe {
    constructor(e) {
      var t;
      super(),
        document.getElementById("gcohtech-1j583h9-style") ||
          (((t = k("style")).id = "gcohtech-1j583h9-style"),
          (t.textContent =
            "div.dots-wave.gcohtech-1j583h9.gcohtech-1j583h9{position:relative;text-align:center;margin-left:auto;margin-right:auto}div.dots-wave.gcohtech-1j583h9 .dot.gcohtech-1j583h9{display:inline-block;width:5px;height:5px;border-radius:50%;-webkit-animation:gcohtech-1j583h9-wave 1s linear infinite;animation:gcohtech-1j583h9-wave 1s linear infinite}div.dots-wave.gcohtech-1j583h9 .dot.gcohtech-1j583h9:nth-child(2){-webkit-animation-delay:-0.8s;animation-delay:-0.8s}div.dots-wave.gcohtech-1j583h9 .dot.gcohtech-1j583h9:nth-child(3){-webkit-animation-delay:-0.6s;animation-delay:-0.6s}@-webkit-keyframes gcohtech-1j583h9-wave{0%,60%,100%{transform:initial}30%{transform:translateY(-8px)}}@keyframes gcohtech-1j583h9-wave{0%,60%,100%{transform:initial}30%{transform:translateY(-8px)}}.hideMeAfter2Seconds.gcohtech-1j583h9.gcohtech-1j583h9{-webkit-animation:gcohtech-1j583h9-hideAnimation 0s ease-in-out 2s;animation:gcohtech-1j583h9-hideAnimation 0s ease-in-out 2s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}@-webkit-keyframes gcohtech-1j583h9-hideAnimation{to{visibility:hidden}}@keyframes gcohtech-1j583h9-hideAnimation{to{visibility:hidden}}"),
          w(document.head, t)),
        Ne(this, e, fi, hi, s, { backgroundColor: 0 });
    }
  }
  function vi(t) {
    return { c: e, m: e, p: e, i: e, o: e, d: e };
  }
  function gi(t) {
    let n, i;
    return {
      c() {
        (n = k("div")), (i = $(t[0])), q(n, "class", "gcohtech-gujjdw");
      },
      m(e, t) {
        b(e, n, t), w(n, i);
      },
      p(e, t) {
        1 & t && M(i, e[0]);
      },
      i: e,
      o: e,
      d(e) {
        e && y(n);
      },
    };
  }
  function wi(e) {
    let t, n;
    return (
      (t = new mi({
        props: {
          backgroundColor: "whatsappTheme" === e[1] ? "#383934" : "white",
        },
      })),
      {
        c() {
          Te(t.$$.fragment);
        },
        m(e, i) {
          Ie(t, e, i), (n = !0);
        },
        p(e, n) {
          const i = {};
          2 & n &&
            (i.backgroundColor =
              "whatsappTheme" === e[1] ? "#383934" : "white"),
            t.$set(i);
        },
        i(e) {
          n || (ve(t.$$.fragment, e), (n = !0));
        },
        o(e) {
          ge(t.$$.fragment, e), (n = !1);
        },
        d(e) {
          Se(t, e);
        },
      }
    );
  }
  function bi(e) {
    let t,
      n,
      i,
      o = {
        ctx: e,
        current: null,
        token: null,
        hasCatch: !1,
        pending: wi,
        then: gi,
        catch: vi,
        value: 5,
        blocks: [, , ,],
      };
    return (
      (function (e, t) {
        const n = (t.token = {});
        function i(e, i, o, a) {
          if (t.token !== n) return;
          t.resolved = a;
          let r = t.ctx;
          void 0 !== o && ((r = r.slice()), (r[o] = a));
          const s = e && (t.current = e)(r);
          let l = !1;
          t.block &&
            (t.blocks
              ? t.blocks.forEach((e, n) => {
                  n !== i &&
                    e &&
                    (fe(),
                    ge(e, 1, 1, () => {
                      t.blocks[n] === e && (t.blocks[n] = null);
                    }),
                    me());
                })
              : t.block.d(1),
            s.c(),
            ve(s, 1),
            s.m(t.mount(), t.anchor),
            (l = !0)),
            (t.block = s),
            t.blocks && (t.blocks[i] = s),
            l && se();
        }
        if ((o = e) && "object" == typeof o && "function" == typeof o.then) {
          const n = Z();
          if (
            (e.then(
              (e) => {
                G(n), i(t.then, 1, t.value, e), G(null);
              },
              (e) => {
                if ((G(n), i(t.catch, 2, t.error, e), G(null), !t.hasCatch))
                  throw e;
              }
            ),
            t.current !== t.pending)
          )
            return i(t.pending, 0), !0;
        } else {
          if (t.current !== t.then) return i(t.then, 1, t.value, e), !0;
          t.resolved = e;
        }
        var o;
      })(e[3](), o),
      {
        c() {
          (t = k("div")),
            (n = k("div")),
            o.block.c(),
            q(n, "class", "whataapp-chat-bubble-bot gcohtech-gujjdw"),
            q(t, "class", "whataapp-chat-bubble-bot-wrapper gcohtech-gujjdw"),
            B(t, "whatsappTheme", e[2]);
        },
        m(e, a) {
          b(e, t, a),
            w(t, n),
            o.block.m(n, (o.anchor = null)),
            (o.mount = () => n),
            (o.anchor = null),
            (i = !0);
        },
        p(n, [i]) {
          {
            const t = (e = n).slice();
            (t[5] = o.resolved), o.block.p(t, i);
          }
          4 & i && B(t, "whatsappTheme", e[2]);
        },
        i(e) {
          i || (ve(o.block), (i = !0));
        },
        o(e) {
          for (let e = 0; e < 3; e += 1) {
            ge(o.blocks[e]);
          }
          i = !1;
        },
        d(e) {
          e && y(t), o.block.d(), (o.token = null), (o = null);
        },
      }
    );
  }
  function yi(e, t, n) {
    let i,
      { text: o } = t,
      { widgetTheme: a } = t,
      { showDot: r } = t;
    return (
      (e.$$set = (e) => {
        "text" in e && n(0, (o = e.text)),
          "widgetTheme" in e && n(1, (a = e.widgetTheme)),
          "showDot" in e && n(4, (r = e.showDot));
      }),
      (e.$$.update = () => {
        2 & e.$$.dirty && n(2, (i = "whatsappTheme" === a));
      }),
      [
        o,
        a,
        i,
        async function () {
          return !r || (await new Promise((e) => setTimeout(e, 2e3)), !0);
        },
        r,
      ]
    );
  }
  class xi extends qe {
    constructor(e) {
      var t;
      super(),
        document.getElementById("gcohtech-gujjdw-style") ||
          (((t = k("style")).id = "gcohtech-gujjdw-style"),
          (t.textContent =
            ".whataapp-chat-bubble-bot.gcohtech-gujjdw.gcohtech-gujjdw{display:inline-block;padding:10px 10px;margin:0 5px 5px 5px;font-size:14px;background-color:rgb(91, 160, 208)!important;border-radius:0 18px 18px 18px;color:white!important}.whataapp-chat-bubble-bot.gcohtech-gujjdw div.gcohtech-gujjdw{color:white!important}.whatsappTheme.gcohtech-gujjdw .whataapp-chat-bubble-bot.gcohtech-gujjdw{background-color:#F7F7F7!important;color:#383934!important}.whatsappTheme.gcohtech-gujjdw .whataapp-chat-bubble-bot div.gcohtech-gujjdw{color:#383934!important}"),
          w(document.head, t)),
        Ne(this, e, yi, bi, s, { text: 0, widgetTheme: 1, showDot: 4 });
    }
  }
  function ki(t) {
    let n,
      i,
      o,
      a,
      r = t[0].val + "";
    return {
      c() {
        (n = k("div")),
          (i = k("div")),
          (o = $(r)),
          q(i, "class", "whataapp-chat-bubble-user gcohtech-1uyvyop"),
          q(
            i,
            "style",
            (a =
              "whatsappTheme" === t[1]
                ? "background-color: #D4FAC1;color: #383934;"
                : "")
          ),
          q(n, "class", "whataapp-chat-bubble-user-wrapper gcohtech-1uyvyop");
      },
      m(e, t) {
        b(e, n, t), w(n, i), w(i, o);
      },
      p(e, [t]) {
        1 & t && r !== (r = e[0].val + "") && M(o, r),
          2 & t &&
            a !==
              (a =
                "whatsappTheme" === e[1]
                  ? "background-color: #D4FAC1;color: #383934;"
                  : "") &&
            q(i, "style", a);
      },
      i: e,
      o: e,
      d(e) {
        e && y(n);
      },
    };
  }
  function Ci(e, t, n) {
    let { bubbleData: i } = t,
      { widgetTheme: o } = t;
    K();
    return (
      (e.$$set = (e) => {
        "bubbleData" in e && n(0, (i = e.bubbleData)),
          "widgetTheme" in e && n(1, (o = e.widgetTheme));
      }),
      [i, o]
    );
  }
  class $i extends qe {
    constructor(e) {
      var t;
      super(),
        document.getElementById("gcohtech-1uyvyop-style") ||
          (((t = k("style")).id = "gcohtech-1uyvyop-style"),
          (t.textContent =
            ".whataapp-chat-bubble-user-wrapper.gcohtech-1uyvyop{text-align:right}.whataapp-chat-bubble-user.gcohtech-1uyvyop{display:inline-block;background:#e6e6e6;border-radius:18px 0 18px 18px;padding:10px 10px;margin:0 5px 5px 5px;font-size:14px;text-align:right}"),
          w(document.head, t)),
        Ne(this, e, Ci, ki, s, { bubbleData: 0, widgetTheme: 1 });
    }
  }
  const { document: Ti } = ke;
  function Ii(e, t, n) {
    const i = e.slice();
    return (i[29] = t[n]), i;
  }
  function Si(e, t, n) {
    const i = e.slice();
    return (i[32] = t[n]), (i[34] = n), i;
  }
  function Ni(t) {
    let n, i, o;
    return {
      c() {
        (n = k("div")),
          (n.innerHTML =
            '<svg style="width: 12px" aria-hidden="true" focusable="false" data-icon="times" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512" class="gcohtech-12q2qcn"><path fill="#333" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>'),
          q(n, "class", "close-chatwith gcohtech-12q2qcn");
      },
      m(e, a) {
        b(e, n, a), i || ((o = S(n, "click", t[16])), (i = !0));
      },
      p: e,
      d(e) {
        e && y(n), (i = !1), o();
      },
    };
  }
  function qi(e) {
    let t,
      n,
      i,
      o,
      a,
      r,
      s = e[1].name + "";
    return (
      (a = new xi({
        props: {
          widgetTheme: e[0].widgetTheme,
          text: e[32].label,
          showDot: e[18](e[34]),
        },
      })),
      {
        c() {
          (t = k("div")),
            (n = k("div")),
            (i = $(s)),
            (o = T()),
            Te(a.$$.fragment),
            q(n, "class", "whatsapp-msg-header gcohtech-12q2qcn"),
            q(
              t,
              "class",
              d(e[18](e[34]) && "scale-in-left") + " gcohtech-12q2qcn"
            );
        },
        m(e, s) {
          b(e, t, s), w(t, n), w(n, i), w(t, o), Ie(a, t, null), (r = !0);
        },
        p(e, t) {
          (!r || 2 & t[0]) && s !== (s = e[1].name + "") && M(i, s);
          const n = {};
          1 & t[0] && (n.widgetTheme = e[0].widgetTheme),
            512 & t[0] && (n.text = e[32].label),
            a.$set(n);
        },
        i(e) {
          r || (ve(a.$$.fragment, e), (r = !0));
        },
        o(e) {
          ge(a.$$.fragment, e), (r = !1);
        },
        d(e) {
          e && y(t), Se(a);
        },
      }
    );
  }
  function Di(e) {
    let t, n, i, o;
    return (
      (n = new $i({
        props: { widgetTheme: e[0].widgetTheme, bubbleData: e[32] },
      })),
      {
        c() {
          (t = k("div")),
            Te(n.$$.fragment),
            (i = T()),
            q(t, "class", "scale-in-right gcohtech-12q2qcn");
        },
        m(e, a) {
          b(e, t, a), Ie(n, t, null), w(t, i), (o = !0);
        },
        p(e, t) {
          const i = {};
          1 & t[0] && (i.widgetTheme = e[0].widgetTheme),
            512 & t[0] && (i.bubbleData = e[32]),
            n.$set(i);
        },
        i(e) {
          o || (ve(n.$$.fragment, e), (o = !0));
        },
        o(e) {
          ge(n.$$.fragment, e), (o = !1);
        },
        d(e) {
          e && y(t), Se(n);
        },
      }
    );
  }
  function Mi(e) {
    let t,
      n,
      i,
      o = !0 === e[17](e[34], e[32]),
      a = !0 === e[19](e[34], e[32]),
      r = o && qi(e),
      s = a && Di(e);
    return {
      c() {
        r && r.c(), (t = T()), s && s.c(), (n = I());
      },
      m(e, o) {
        r && r.m(e, o), b(e, t, o), s && s.m(e, o), b(e, n, o), (i = !0);
      },
      p(e, i) {
        512 & i[0] && (o = !0 === e[17](e[34], e[32])),
          o
            ? r
              ? (r.p(e, i), 512 & i[0] && ve(r, 1))
              : ((r = qi(e)), r.c(), ve(r, 1), r.m(t.parentNode, t))
            : r &&
              (fe(),
              ge(r, 1, 1, () => {
                r = null;
              }),
              me()),
          512 & i[0] && (a = !0 === e[19](e[34], e[32])),
          a
            ? s
              ? (s.p(e, i), 512 & i[0] && ve(s, 1))
              : ((s = Di(e)), s.c(), ve(s, 1), s.m(n.parentNode, n))
            : s &&
              (fe(),
              ge(s, 1, 1, () => {
                s = null;
              }),
              me());
      },
      i(e) {
        i || (ve(r), ve(s), (i = !0));
      },
      o(e) {
        ge(r), ge(s), (i = !1);
      },
      d(e) {
        r && r.d(e), e && y(t), s && s.d(e), e && y(n);
      },
    };
  }
  function Ui(e) {
    let t,
      n,
      i,
      o,
      a,
      r = e[7] && Ai(e);
    const s = [ji, Oi, Li, Ei],
      l = [];
    function c(e, t) {
      return "checkbox" == e[10]
        ? 0
        : "select" === e[10]
        ? 1
        : "tel" === e[10]
        ? 2
        : 3;
    }
    return (
      (n = c(e)),
      (i = l[n] = s[n](e)),
      {
        c() {
          r && r.c(), (t = T()), i.c(), (o = I());
        },
        m(e, i) {
          r && r.m(e, i), b(e, t, i), l[n].m(e, i), b(e, o, i), (a = !0);
        },
        p(e, a) {
          e[7]
            ? r
              ? r.p(e, a)
              : ((r = Ai(e)), r.c(), r.m(t.parentNode, t))
            : r && (r.d(1), (r = null));
          let u = n;
          (n = c(e)),
            n === u
              ? l[n].p(e, a)
              : (fe(),
                ge(l[u], 1, 1, () => {
                  l[u] = null;
                }),
                me(),
                (i = l[n]),
                i ? i.p(e, a) : ((i = l[n] = s[n](e)), i.c()),
                ve(i, 1),
                i.m(o.parentNode, o));
        },
        i(e) {
          a || (ve(i), (a = !0));
        },
        o(e) {
          ge(i), (a = !1);
        },
        d(e) {
          r && r.d(e), e && y(t), l[n].d(e), e && y(o);
        },
      }
    );
  }
  function zi(t) {
    let n;
    function i(e, t) {
      return e[5] && e[5].length > 0 ? Fi : Bi;
    }
    let o = i(t),
      a = o(t);
    return {
      c() {
        a.c(), (n = I());
      },
      m(e, t) {
        a.m(e, t), b(e, n, t);
      },
      p(e, t) {
        o === (o = i(e)) && a
          ? a.p(e, t)
          : (a.d(1), (a = o(e)), a && (a.c(), a.m(n.parentNode, n)));
      },
      i: e,
      o: e,
      d(e) {
        a.d(e), e && y(n);
      },
    };
  }
  function Ai(e) {
    let t, n;
    return {
      c() {
        (t = k("div")),
          (n = $(e[7])),
          z(t, "color", "darkred"),
          z(t, "font-size", "14px"),
          q(t, "class", "gcohtech-12q2qcn");
      },
      m(e, i) {
        b(e, t, i), w(t, n);
      },
      p(e, t) {
        128 & t[0] && M(n, e[7]);
      },
      d(e) {
        e && y(t);
      },
    };
  }
  function Ei(e) {
    let t, n;
    return (
      (t = new oi({
        props: {
          hasBorder: "bigperson" === e[0].widgetType,
          color: e[0].color,
          widgetTheme: e[0].widgetTheme,
        },
      })),
      t.$on("message", e[21]),
      {
        c() {
          Te(t.$$.fragment);
        },
        m(e, i) {
          Ie(t, e, i), (n = !0);
        },
        p(e, n) {
          const i = {};
          1 & n[0] && (i.hasBorder = "bigperson" === e[0].widgetType),
            1 & n[0] && (i.color = e[0].color),
            1 & n[0] && (i.widgetTheme = e[0].widgetTheme),
            t.$set(i);
        },
        i(e) {
          n || (ve(t.$$.fragment, e), (n = !0));
        },
        o(e) {
          ge(t.$$.fragment, e), (n = !1);
        },
        d(e) {
          Se(t, e);
        },
      }
    );
  }
  function Li(e) {
    let t, n;
    return (
      (t = new at({
        props: { data: e[0], showButton: !0, class: "whatsapp-telfield" },
      })),
      t.$on("submit", e[21]),
      {
        c() {
          Te(t.$$.fragment);
        },
        m(e, i) {
          Ie(t, e, i), (n = !0);
        },
        p(e, n) {
          const i = {};
          1 & n[0] && (i.data = e[0]), t.$set(i);
        },
        i(e) {
          n || (ve(t.$$.fragment, e), (n = !0));
        },
        o(e) {
          ge(t.$$.fragment, e), (n = !1);
        },
        d(e) {
          Se(t, e);
        },
      }
    );
  }
  function Oi(e) {
    let t, n;
    return (
      (t = new pi({ props: { options: e[9][e[8]] } })),
      t.$on("message", e[21]),
      {
        c() {
          Te(t.$$.fragment);
        },
        m(e, i) {
          Ie(t, e, i), (n = !0);
        },
        p(e, n) {
          const i = {};
          768 & n[0] && (i.options = e[9][e[8]]), t.$set(i);
        },
        i(e) {
          n || (ve(t.$$.fragment, e), (n = !0));
        },
        o(e) {
          ge(t.$$.fragment, e), (n = !1);
        },
        d(e) {
          Se(t, e);
        },
      }
    );
  }
  function ji(t) {
    let n, i;
    return (
      (n = new si({})),
      n.$on("message", t[21]),
      {
        c() {
          Te(n.$$.fragment);
        },
        m(e, t) {
          Ie(n, e, t), (i = !0);
        },
        p: e,
        i(e) {
          i || (ve(n.$$.fragment, e), (i = !0));
        },
        o(e) {
          ge(n.$$.fragment, e), (i = !1);
        },
        d(e) {
          Se(n, e);
        },
      }
    );
  }
  function Bi(t) {
    let n;
    return {
      c() {
        (n = k("div")),
          (n.textContent = "Your message has been sent"),
          q(n, "class", "whatsapp-sent-message gcohtech-12q2qcn");
      },
      m(e, t) {
        b(e, n, t);
      },
      p: e,
      d(e) {
        e && y(n);
      },
    };
  }
  function Fi(e) {
    let t,
      n = e[5],
      i = [];
    for (let t = 0; t < n.length; t += 1) i[t] = Ri(Ii(e, n, t));
    return {
      c() {
        for (let e = 0; e < i.length; e += 1) i[e].c();
        t = I();
      },
      m(e, n) {
        for (let t = 0; t < i.length; t += 1) i[t].m(e, n);
        b(e, t, n);
      },
      p(e, o) {
        if (4194337 & o[0]) {
          let a;
          for (n = e[5], a = 0; a < n.length; a += 1) {
            const r = Ii(e, n, a);
            i[a]
              ? i[a].p(r, o)
              : ((i[a] = Ri(r)), i[a].c(), i[a].m(t.parentNode, t));
          }
          for (; a < i.length; a += 1) i[a].d(1);
          i.length = n.length;
        }
      },
      d(e) {
        x(i, e), e && y(t);
      },
    };
  }
  function Ri(e) {
    let t,
      n,
      i,
      o,
      a,
      r,
      s,
      l,
      c,
      u = e[29].buttontext + "";
    function d() {
      return e[24](e[29]);
    }
    return {
      c() {
        (t = k("div")),
          (n = k("span")),
          (i = $(u)),
          (o = T()),
          (a = k("img")),
          (s = T()),
          q(a, "class", "chatwith-img gcohtech-12q2qcn"),
          q(a, "alt", "tochat-whatsapp"),
          a.src !==
            (r =
              e[0].whatsappIconUrl ?? "https://widget.tochat.be/icon-1.png") &&
            q(a, "src", r),
          q(t, "class", "chatwith-button buyButton gcohtech-12q2qcn"),
          z(t, "color", e[0].textColor),
          z(t, "background", e[0].color),
          z(t, "border-color", e[0].color),
          z(t, "font-size", "18px");
      },
      m(e, r) {
        b(e, t, r),
          w(t, n),
          w(n, i),
          w(t, o),
          w(t, a),
          w(t, s),
          l || ((c = S(t, "click", d)), (l = !0));
      },
      p(n, o) {
        (e = n),
          32 & o[0] && u !== (u = e[29].buttontext + "") && M(i, u),
          1 & o[0] &&
            a.src !==
              (r =
                e[0].whatsappIconUrl ??
                "https://widget.tochat.be/icon-1.png") &&
            q(a, "src", r),
          1 & o[0] && z(t, "color", e[0].textColor),
          1 & o[0] && z(t, "background", e[0].color),
          1 & o[0] && z(t, "border-color", e[0].color);
      },
      d(e) {
        e && y(t), (l = !1), c();
      },
    };
  }
  function Pi(e) {
    let t, n, i, o, a, r, s, l, c, u, d, p, h, f;
    ie(e[23]);
    let m = "bigperson" !== e[0].widgetType && Ni(e),
      v = e[9],
      g = [];
    for (let t = 0; t < v.length; t += 1) g[t] = Mi(Si(e, v, t));
    const C = (e) =>
        ge(g[e], 1, 1, () => {
          g[e] = null;
        }),
      $ = [zi, Ui],
      I = [];
    function N(e, t) {
      return 4 & t[0] && (s = !(!0 !== e[2] && !e[20]())), s ? 0 : 1;
    }
    return (
      (l = N(e, [-1])),
      (c = I[l] = $[l](e)),
      {
        c() {
          (t = k("div")), (n = k("div")), m && m.c(), (i = T()), (o = k("div"));
          for (let e = 0; e < g.length; e += 1) g[e].c();
          (a = T()),
            (r = k("div")),
            c.c(),
            q(o, "class", "whatsapp-messages gcohtech-12q2qcn"),
            q(o, "id", "messageBox"),
            q(r, "class", "whatsapp-fix-to-bottom gcohtech-12q2qcn"),
            q(
              r,
              "style",
              (u = e[14] && !e[6] ? "position:relative;margin-top:-60px;" : "")
            ),
            q(n, "class", "whatsapp-chat-panel gcohtech-12q2qcn"),
            q(n, "style", e[15]),
            ie(() => e[25].call(n)),
            q(t, "class", "gcohtech-12q2qcn"),
            B(t, "whatsappTheme", e[11]),
            B(t, "bubbleTheme", e[12]),
            B(t, "roundedTheme", e[13]),
            B(t, "fullScreenMobile", e[6]);
        },
        m(s, c) {
          b(s, t, c), w(t, n), m && m.m(n, null), w(n, i), w(n, o);
          for (let e = 0; e < g.length; e += 1) g[e].m(o, null);
          w(n, a),
            w(n, r),
            I[l].m(r, null),
            (d = j(n, e[25].bind(n))),
            (p = !0),
            h || ((f = S(window, "resize", e[23])), (h = !0));
        },
        p(e, a) {
          if (
            ("bigperson" !== e[0].widgetType
              ? m
                ? m.p(e, a)
                : ((m = Ni(e)), m.c(), m.m(n, i))
              : m && (m.d(1), (m = null)),
            918019 & a[0])
          ) {
            let t;
            for (v = e[9], t = 0; t < v.length; t += 1) {
              const n = Si(e, v, t);
              g[t]
                ? (g[t].p(n, a), ve(g[t], 1))
                : ((g[t] = Mi(n)), g[t].c(), ve(g[t], 1), g[t].m(o, null));
            }
            for (fe(), t = v.length; t < g.length; t += 1) C(t);
            me();
          }
          let s = l;
          (l = N(e, a)),
            l === s
              ? I[l].p(e, a)
              : (fe(),
                ge(I[s], 1, 1, () => {
                  I[s] = null;
                }),
                me(),
                (c = I[l]),
                c ? c.p(e, a) : ((c = I[l] = $[l](e)), c.c()),
                ve(c, 1),
                c.m(r, null)),
            (!p ||
              (16448 & a[0] &&
                u !==
                  (u =
                    e[14] && !e[6]
                      ? "position:relative;margin-top:-60px;"
                      : ""))) &&
              q(r, "style", u),
            (!p || 32768 & a[0]) && q(n, "style", e[15]),
            2048 & a[0] && B(t, "whatsappTheme", e[11]),
            4096 & a[0] && B(t, "bubbleTheme", e[12]),
            8192 & a[0] && B(t, "roundedTheme", e[13]),
            64 & a[0] && B(t, "fullScreenMobile", e[6]);
        },
        i(e) {
          if (!p) {
            for (let e = 0; e < v.length; e += 1) ve(g[e]);
            ve(c), (p = !0);
          }
        },
        o(e) {
          g = g.filter(Boolean);
          for (let e = 0; e < g.length; e += 1) ge(g[e]);
          ge(c), (p = !1);
        },
        d(e) {
          e && y(t), m && m.d(), x(g, e), I[l].d(), d(), (h = !1), f();
        },
      }
    );
  }
  function Vi(e, t, n) {
    let i,
      o,
      a,
      r,
      s,
      l,
      c,
      u,
      d,
      p,
      h,
      { data: f } = t,
      { activePerson: m } = t,
      v = !1,
      g = !1,
      w = 0;
    W(() => {
      i.forEach((e) => {
        e.val && n(8, w++, w);
      }),
        n(10, (a = i[w]?.type));
    });
    const b = K();
    const y = () => !!i[i.length - 1].val,
      x = (e, t) => i.length - 1 == e,
      k = (e, t, i) => {
        if ("" === t)
          return (
            !i ||
            (n(
              7,
              (g = f.requiredValidationText
                ? f.requiredValidationText
                : "This needs to be filled in.")
            ),
            !1)
          );
        if ("checkbox" === e && i && "No" === t)
          return (
            n(
              7,
              (g = f.requiredValidationText
                ? f.requiredValidationText
                : "This needs to be confirmed.")
            ),
            !1
          );
        if ("email" === e) {
          if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(t))
            return (
              n(
                7,
                (g = f.emailValidationText
                  ? f.emailValidationText
                  : "Sorry but this email is not valid.")
              ),
              !1
            );
        } else if ("tel" === e) {
          if (!/^\d{6,15}$/.test(t))
            return (
              n(
                7,
                (g = f.telValidationText
                  ? f.telValidationText
                  : "This is not a phone number.")
              ),
              !1
            );
        } else if ("number" === e) {
          if (!/^\d+$/.test(t))
            return (
              n(
                7,
                (g = f.numberValidationText
                  ? f.numberValidationText
                  : "This is not a number.")
              ),
              !1
            );
        } else if (
          "url" === e &&
          !/(http(s)?:\/\/)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g.test(
            t
          )
        )
          return (
            n(
              7,
              (g = f.urlValidationText
                ? f.urlValidationText
                : "Please use a https:// or http:// URL.")
            ),
            !1
          );
        return n(7, (g = !1)), !0;
      },
      C = (e = null) => {
        b("callmex", { data: i, url: e });
      };
    return (
      (e.$$set = (e) => {
        "data" in e && n(0, (f = e.data)),
          "activePerson" in e && n(1, (m = e.activePerson));
      }),
      (e.$$.update = () => {
        2 & e.$$.dirty[0] && n(9, (i = m.form.items)),
          2 & e.$$.dirty[0] && n(5, (o = m.form.buyLinks)),
          1 & e.$$.dirty[0] && n(11, (r = "whatsappTheme" === f.widgetTheme)),
          1 & e.$$.dirty[0] && n(12, (s = "bubbleTheme" === f.widgetTheme)),
          1 & e.$$.dirty[0] && n(13, (l = "roundedTheme" === f.widgetTheme)),
          36 & e.$$.dirty[0] &&
            n(14, (c = (!0 === v || y()) && o && o.length > 0)),
          1 & e.$$.dirty[0] && n(6, (u = f.expandFullScreenMobile)),
          88 & e.$$.dirty[0] &&
            n(15, (d = u && (h > p ? "height:100%;" : "height:max-content;")));
      }),
      n(10, (a = "text")),
      [
        f,
        m,
        v,
        p,
        h,
        o,
        u,
        g,
        w,
        i,
        a,
        r,
        s,
        l,
        c,
        d,
        function () {
          b("close");
        },
        (e, t) => 0 == e || !!i[e - 1].val,
        (e) => !i[e].val,
        (e, t) => !!i[e].val,
        y,
        (e) => {
          let t,
            r = document.getElementById("messageBox");
          (r.scrollTop = r.scrollHeight),
            n(8, (w = i.findIndex((e) => !e.val))),
            (t =
              "tel" == a
                ? "" === e.detail.num
                  ? ""
                  : "+" + e.detail.code + "-" + e.detail.num
                : e.detail.trim());
          let s = m.form.items[w].required;
          if (
            ("checkbox" === a && (s = s && m.form.items[w].legalUrl),
            !k(a, "tel" === a ? e.detail.num : e.detail.trim(), s))
          )
            return !1;
          n(9, (i[w].val = "" === t ? " " : t), i),
            x(w)
              ? (n(2, (v = !0)),
                (o && 0 !== o.length) || Kn(m, { detail: { data: i } }))
              : n(10, (a = i[w + 1].type)),
            n(8, w++, w),
            setTimeout(() => {
              r.scrollTop = r.scrollHeight;
            }, 300),
            (r.scrollTop = r.scrollHeight);
        },
        C,
        function () {
          n(4, (h = window.innerHeight));
        },
        (e) => C(e.link),
        function () {
          (p = this.clientHeight), n(3, p);
        },
      ]
    );
  }
  class _i extends qe {
    constructor(e) {
      var t;
      super(),
        Ti.getElementById("gcohtech-12q2qcn-style") ||
          (((t = k("style")).id = "gcohtech-12q2qcn-style"),
          (t.textContent =
            ".whatsappTheme.gcohtech-12q2qcn div.gcohtech-12q2qcn::-webkit-scrollbar{background:#b8b6b5;width:10px}.whatsappTheme.gcohtech-12q2qcn div.gcohtech-12q2qcn::-webkit-scrollbar-thumb{background:#5d5c5c}.whatsappTheme.gcohtech-12q2qcn .whatsapp-chat-panel.gcohtech-12q2qcn,.whatsappTheme.gcohtech-12q2qcn .whatsapp-fix-to-bottom.gcohtech-12q2qcn{background-image:url('https://services.tochat.be/img/bk-wa.png')}.whatsapp-fix-to-bottom.gcohtech-12q2qcn .chatwith-button.gcohtech-12q2qcn{border-radius:5px;color:white;cursor:pointer;display:flex;justify-content:center;align-items:center;padding:9px;min-height:45px;margin:20px 10px 10px;box-sizing:border-box}.chatwith-person-big-person .whatsapp-fix-to-bottom.gcohtech-12q2qcn .chatwith-button.gcohtech-12q2qcn{margin:20px 0 0 0}.roundedTheme.gcohtech-12q2qcn .whatsapp-fix-to-bottom .chatwith-button.gcohtech-12q2qcn,.bubbleTheme.gcohtech-12q2qcn .whatsapp-fix-to-bottom .chatwith-button.gcohtech-12q2qcn{border-radius:40px}.whatsapp-fix-to-bottom.gcohtech-12q2qcn .chatwith-img.gcohtech-12q2qcn{width:25px;height:25px}.whatsapp-messages.gcohtech-12q2qcn.gcohtech-12q2qcn{max-height:400px;overflow-y:auto}.fullScreenMobile.gcohtech-12q2qcn .whatsapp-messages.gcohtech-12q2qcn{max-height:calc(calc(100vh - 640px) + 300px)}.whatsapp-chat-panel.gcohtech-12q2qcn.gcohtech-12q2qcn{min-height:200px;padding-top:5px;background:#f0f0f0;position:relative;width:100%}.whatsapp-sent-message.gcohtech-12q2qcn.gcohtech-12q2qcn{text-align:center;padding:20px;background:rgb(39, 217, 116);color:white}.whatsapp-fix-to-bottom.gcohtech-12q2qcn.gcohtech-12q2qcn{position:absolute;bottom:0;left:0;right:0;background:#f0f0f0}.whatsapp-messages.gcohtech-12q2qcn.gcohtech-12q2qcn{padding-bottom:60px}.whatsapp-telfield{padding:5px 5px 0 5px}.bubbleTheme .whatsapp-telfield{padding:0}.fullScreenMobile.gcohtech-12q2qcn.gcohtech-12q2qcn{height:100%;display:flex;flex-direction:column}.fullScreenMobile.gcohtech-12q2qcn .whatsapp-chat-panel.gcohtech-12q2qcn{min-height:unset}.scale-in-left.gcohtech-12q2qcn.gcohtech-12q2qcn{-webkit-animation:gcohtech-12q2qcn-scale-in-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)\n      both;animation:gcohtech-12q2qcn-scale-in-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;-webkit-animation-delay:1s;animation-delay:1s}.close-chatwith.gcohtech-12q2qcn.gcohtech-12q2qcn{position:relative;z-index:100;cursor:pointer}.close-chatwith.gcohtech-12q2qcn svg.gcohtech-12q2qcn{position:absolute;right:12px;top:0px}@-webkit-keyframes gcohtech-12q2qcn-scale-in-left{0%{transform:scale(0);transform-origin:0% 50%;opacity:1}100%{transform:scale(1);transform-origin:0% 50%;opacity:1}}@keyframes gcohtech-12q2qcn-scale-in-left{0%{transform:scale(0);transform-origin:0% 50%;opacity:1}100%{transform:scale(1);transform-origin:0% 50%;opacity:1}}.whatsapp-msg-header.gcohtech-12q2qcn.gcohtech-12q2qcn{font-size:12px;line-height:1.42;-webkit-padding-start:5px;padding-inline-start:5px}.scale-in-right.gcohtech-12q2qcn.gcohtech-12q2qcn{-webkit-animation:gcohtech-12q2qcn-scale-in-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)\n      both;animation:gcohtech-12q2qcn-scale-in-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both}@-webkit-keyframes gcohtech-12q2qcn-scale-in-right{0%{transform:scale(0);transform-origin:100% 50%;opacity:1}100%{transform:scale(1);transform-origin:100% 50%;opacity:1}}@keyframes gcohtech-12q2qcn-scale-in-right{0%{transform:scale(0);transform-origin:100% 50%;opacity:1}100%{transform:scale(1);transform-origin:100% 50%;opacity:1}}"),
          w(Ti.head, t)),
        Ne(this, e, Vi, Pi, s, { data: 0, activePerson: 1 }, [-1, -1]);
    }
  }
  const { document: Hi } = ke;
  function Gi(e) {
    let t;
    return {
      c() {
        (t = k("div")),
          (t.textContent = "Please wait while your card is being processed"),
          q(t, "id", "info"),
          q(t, "class", "gcohtech-i3injr");
      },
      m(e, n) {
        b(e, t, n);
      },
      d(e) {
        e && y(t);
      },
    };
  }
  function Zi(e) {
    let t;
    return {
      c() {
        (t = k("div")),
          (t.textContent = "Your payment has not been activated."),
          q(t, "class", "chatwith-inactive gcohtech-i3injr");
      },
      m(e, n) {
        b(e, t, n);
      },
      d(e) {
        e && y(t);
      },
    };
  }
  function Wi(e) {
    let t, n;
    return {
      c() {
        (t = k("div")),
          (n = $("Your payment has been successful")),
          q(t, "class", "chatwith-success gcohtech-i3injr"),
          q(t, "id", "success-banner"),
          z(t, "background-color", e[0]);
      },
      m(e, i) {
        b(e, t, i), w(t, n);
      },
      p(e, n) {
        1 & n && z(t, "background-color", e[0]);
      },
      d(e) {
        e && y(t);
      },
    };
  }
  function Ki(t) {
    let n,
      i,
      o,
      a,
      r,
      s,
      l,
      c,
      u,
      d,
      p,
      h,
      f,
      m,
      v = t[2] && Gi(),
      g = !t[1] && Zi(),
      x = t[3] && Wi(t);
    return {
      c() {
        (n = k("script")),
          (o = T()),
          (a = k("div")),
          (r = k("div")),
          (s = T()),
          (l = k("div")),
          (c = T()),
          (u = k("div")),
          (u.innerHTML =
            '<img src="https://services.tochat.be/img/accepted-cards.png" alt="" class="gcohtech-i3injr"/>'),
          (d = T()),
          v && v.c(),
          (p = T()),
          g && g.c(),
          (h = T()),
          x && x.c(),
          n.src !== (i = "https://js.stripe.com/v3/") &&
            q(n, "src", "https://js.stripe.com/v3/"),
          q(r, "class", "chatwith-card gcohtech-i3injr"),
          q(r, "id", "card"),
          q(l, "class", "chatwith-box-error gcohtech-i3injr"),
          q(l, "id", "card-errors"),
          q(l, "role", "alert"),
          z(l, "display", t[4] ? "block" : "none"),
          q(u, "class", "chatwith-card-image gcohtech-i3injr"),
          q(a, "class", "chatwith-stripe gcohtech-i3injr");
      },
      m(e, i) {
        w(Hi.head, n),
          b(e, o, i),
          b(e, a, i),
          w(a, r),
          w(a, s),
          w(a, l),
          w(a, c),
          w(a, u),
          w(a, d),
          v && v.m(a, null),
          w(a, p),
          g && g.m(a, null),
          w(a, h),
          x && x.m(a, null),
          f || ((m = S(n, "load", t[5])), (f = !0));
      },
      p(e, [t]) {
        16 & t && z(l, "display", e[4] ? "block" : "none"),
          e[2]
            ? v || ((v = Gi()), v.c(), v.m(a, p))
            : v && (v.d(1), (v = null)),
          e[1]
            ? g && (g.d(1), (g = null))
            : g || ((g = Zi()), g.c(), g.m(a, h)),
          e[3]
            ? x
              ? x.p(e, t)
              : ((x = Wi(e)), x.c(), x.m(a, null))
            : x && (x.d(1), (x = null));
      },
      i: e,
      o: e,
      d(e) {
        y(n),
          e && y(o),
          e && y(a),
          v && v.d(),
          g && g.d(),
          x && x.d(),
          (f = !1),
          m();
      },
    };
  }
  let Yi = "https://services.tochat.be";
  function Xi(e, t, n) {
    const i = K();
    let o,
      a,
      { bgcolor: r } = t,
      { onboardPaymentLink: s } = t,
      { name: l } = t,
      { phoneNumber: c } = t,
      { address: u } = t,
      { email: d } = t,
      p = s.active,
      h = !1,
      f = !1,
      m = !1,
      v = !1,
      g = !1;
    function w() {
      console.log("onboardPaymentLink", s),
        (o = Stripe(s.publicKey, { stripeAccount: s.stripeAccount }));
      const e = o.elements();
      (a = e.create("card", {
        showIcon: !0,
        placeholder: "Card Number",
        style: {
          base: {
            color: "#32325d",
            lineHeight: "45px",
            fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
            fontSmoothing: "antialiased",
            fontSize: "16px",
            "::placeholder": { color: "#aaa" },
            height: "45px",
          },
          invalid: { color: "#ff0000", iconColor: "#ff0000" },
        },
      })),
        a.mount("#card"),
        a.on("change", b);
    }
    function b(e) {
      let t = document.getElementById("card-errors");
      e.error
        ? ((t.textContent = e.error.message), n(4, (g = !0)))
        : ((t.textContent = ""), n(4, (g = !1)));
    }
    return (
      W(() => {
        (f = !0), h && w();
      }),
      (e.$$set = (e) => {
        "bgcolor" in e && n(0, (r = e.bgcolor)),
          "onboardPaymentLink" in e && n(6, (s = e.onboardPaymentLink)),
          "name" in e && n(7, (l = e.name)),
          "phoneNumber" in e && n(8, (c = e.phoneNumber)),
          "address" in e && n(9, (u = e.address)),
          "email" in e && n(10, (d = e.email));
      }),
      [
        r,
        p,
        m,
        v,
        g,
        function () {
          (h = !0), f && w();
        },
        s,
        l,
        c,
        u,
        d,
        async function () {
          let e;
          try {
            if (
              (await Fn.post(Yi + "/api/payment-active/" + s.link, {})
                .then((e) => {
                  console.log("response", e), e.data.active || n(1, (p = !1));
                })
                .catch((e) => {
                  console.log("error", e), n(1, (p = !1));
                }),
              !p)
            )
              return;
            n(2, (m = !0)),
              n(4, (g = !1)),
              await Fn.post(Yi + "/api/connect-payment-intent/" + s.link, {
                name: l || "",
                phone: c || "",
                address: u || "",
                email: d || "",
              })
                .then((t) => {
                  console.log("response", t), (e = t.data.client_secret);
                })
                .catch((t) => {
                  console.log("error", t), (e = !1);
                });
          } catch (t) {
            console.log(t), (e = !1);
          }
          n(2, (m = !1)),
            e
              ? await o
                  .confirmCardPayment(e, { payment_method: { card: a } })
                  .then(function (e) {
                    e.error
                      ? b(e)
                      : "succeeded" === e.paymentIntent.status &&
                        (n(3, (v = !0)), i("success"));
                  })
              : b({ error: { message: "Client secret not found." } });
        },
      ]
    );
  }
  class Ji extends qe {
    constructor(e) {
      var t;
      super(),
        Hi.getElementById("gcohtech-i3injr-style") ||
          (((t = k("style")).id = "gcohtech-i3injr-style"),
          (t.textContent =
            '.chatwith-card.gcohtech-i3injr.gcohtech-i3injr{color:#5c5b5b;height:45px;margin-bottom:0;font-weight:0;font-weight:normal;font-family:"Inter", Arial, sans-serif;font-size:16px;border:1px solid #ccc;border-radius:5px;padding:0 5px 0 5px;margin-bottom:10px}.chatwith-card-image.gcohtech-i3injr.gcohtech-i3injr{margin-bottom:4px;width:100%;text-align:center}.chatwith-card-image.gcohtech-i3injr img.gcohtech-i3injr{max-width:230px}.chatwith-box-error.gcohtech-i3injr.gcohtech-i3injr{padding:3px;margin-top:3px;margin-bottom:10px;border-radius:5px}.chatwith-success.gcohtech-i3injr.gcohtech-i3injr{text-align:center;padding:5px;color:white}.chatwith-inactive.gcohtech-i3injr.gcohtech-i3injr{text-align:center;padding:5px;color:white;background-color:gold\n  }.chatwith-stripe.gcohtech-i3injr div.gcohtech-i3injr{transition:1s}'),
          w(Hi.head, t)),
        Ne(this, e, Xi, Ki, s, {
          bgcolor: 0,
          onboardPaymentLink: 6,
          name: 7,
          phoneNumber: 8,
          address: 9,
          email: 10,
          submit: 11,
        });
    }
    get submit() {
      return this.$$.ctx[11];
    }
  }
  function Qi(e) {
    let t,
      n,
      i,
      o,
      a,
      r,
      s = e[10].image && eo(e),
      l = e[10].name && to(e);
    return {
      c() {
        (t = k("div")),
          (t.innerHTML =
            '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" class="svg-inline--fa fa-times fa-w-11 gcohtech-17zrtnq" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path fill="black" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" class="gcohtech-17zrtnq"></path></svg>'),
          (n = T()),
          s && s.c(),
          (i = T()),
          l && l.c(),
          (o = I()),
          q(t, "class", "close-modal gcohtech-17zrtnq");
      },
      m(c, u) {
        b(c, t, u),
          b(c, n, u),
          s && s.m(c, u),
          b(c, i, u),
          l && l.m(c, u),
          b(c, o, u),
          a || ((r = S(t, "click", e[11])), (a = !0));
      },
      p(e, t) {
        e[10].image
          ? s
            ? s.p(e, t)
            : ((s = eo(e)), s.c(), s.m(i.parentNode, i))
          : s && (s.d(1), (s = null)),
          e[10].name
            ? l
              ? l.p(e, t)
              : ((l = to(e)), l.c(), l.m(o.parentNode, o))
            : l && (l.d(1), (l = null));
      },
      d(e) {
        e && y(t),
          e && y(n),
          s && s.d(e),
          e && y(i),
          l && l.d(e),
          e && y(o),
          (a = !1),
          r();
      },
    };
  }
  function eo(e) {
    let t, n, i;
    return {
      c() {
        (t = k("div")),
          (n = k("img")),
          q(n, "alt", "imageFile"),
          n.src !== (i = e[10].image) && q(n, "src", i),
          q(n, "class", "gcohtech-17zrtnq"),
          q(t, "class", "chatwith-image gcohtech-17zrtnq");
      },
      m(e, i) {
        b(e, t, i), w(t, n);
      },
      p(e, t) {
        1024 & t[0] && n.src !== (i = e[10].image) && q(n, "src", i);
      },
      d(e) {
        e && y(t);
      },
    };
  }
  function to(e) {
    let t,
      n,
      i = e[10].name + "";
    return {
      c() {
        (t = k("div")),
          (n = $(i)),
          q(t, "class", "chatwith-title gcohtech-17zrtnq");
      },
      m(e, i) {
        b(e, t, i), w(t, n);
      },
      p(e, t) {
        1024 & t[0] && i !== (i = e[10].name + "") && M(n, i);
      },
      d(e) {
        e && y(t);
      },
    };
  }
  function no(e) {
    let t,
      n = e[10].Description + "";
    return {
      c() {
        (t = k("div")), q(t, "class", "chatwith-description gcohtech-17zrtnq");
      },
      m(e, i) {
        b(e, t, i), (t.innerHTML = n);
      },
      p(e, i) {
        1024 & i[0] && n !== (n = e[10].Description + "") && (t.innerHTML = n);
      },
      d(e) {
        e && y(t);
      },
    };
  }
  function io(e) {
    let t, n, i, o, r, s, l, c;
    function u(t) {
      e[18].call(null, t);
    }
    let d = {
      item: { type: "text", val: e[6], telNum: "", required: !0 },
      data: e[0],
      index: 0,
    };
    return (
      void 0 !== e[2] && (d.value = e[2]),
      (o = new Ke({ props: d })),
      X.push(() => $e(o, "value", u)),
      e[19](o),
      {
        c() {
          (t = k("div")),
            (n = k("input")),
            (i = T()),
            Te(o.$$.fragment),
            q(n, "type", "text"),
            q(n, "placeholder", "Name"),
            q(n, "class", "gcohtech-17zrtnq"),
            q(t, "class", "chatwith-form-element gcohtech-17zrtnq");
        },
        m(a, r) {
          b(a, t, r),
            w(t, n),
            U(n, e[6]),
            b(a, i, r),
            Ie(o, a, r),
            (s = !0),
            l ||
              ((c = [S(n, "input", e[17]), S(n, "keypress", e[15])]), (l = !0));
        },
        p(e, t) {
          64 & t[0] && n.value !== e[6] && U(n, e[6]);
          const i = {};
          64 & t[0] &&
            (i.item = { type: "text", val: e[6], telNum: "", required: !0 }),
            1 & t[0] && (i.data = e[0]),
            !r && 4 & t[0] && ((r = !0), (i.value = e[2]), oe(() => (r = !1))),
            o.$set(i);
        },
        i(e) {
          s || (ve(o.$$.fragment, e), (s = !0));
        },
        o(e) {
          ge(o.$$.fragment, e), (s = !1);
        },
        d(n) {
          n && y(t), n && y(i), e[19](null), Se(o, n), (l = !1), a(c);
        },
      }
    );
  }
  function oo(e) {
    let t, n, i, o, r, s, l, c;
    function u(t) {
      e[21].call(null, t);
    }
    let d = {
      item: { type: "tel", val: e[7], telNum: e[7], required: !0 },
      data: e[0],
      index: 1,
    };
    return (
      void 0 !== e[2] && (d.value = e[2]),
      (o = new Ke({ props: d })),
      X.push(() => $e(o, "value", u)),
      e[22](o),
      {
        c() {
          (t = k("div")),
            (n = k("input")),
            (i = T()),
            Te(o.$$.fragment),
            q(n, "type", "text"),
            q(n, "placeholder", "Phone number"),
            q(n, "class", "gcohtech-17zrtnq"),
            q(t, "class", "chatwith-form-element gcohtech-17zrtnq");
        },
        m(a, r) {
          b(a, t, r),
            w(t, n),
            U(n, e[7]),
            b(a, i, r),
            Ie(o, a, r),
            (s = !0),
            l ||
              ((c = [S(n, "input", e[20]), S(n, "keypress", e[15])]), (l = !0));
        },
        p(e, t) {
          128 & t[0] && n.value !== e[7] && U(n, e[7]);
          const i = {};
          128 & t[0] &&
            (i.item = { type: "tel", val: e[7], telNum: e[7], required: !0 }),
            1 & t[0] && (i.data = e[0]),
            !r && 4 & t[0] && ((r = !0), (i.value = e[2]), oe(() => (r = !1))),
            o.$set(i);
        },
        i(e) {
          s || (ve(o.$$.fragment, e), (s = !0));
        },
        o(e) {
          ge(o.$$.fragment, e), (s = !1);
        },
        d(n) {
          n && y(t), n && y(i), e[22](null), Se(o, n), (l = !1), a(c);
        },
      }
    );
  }
  function ao(e) {
    let t, n, i, o, r, s, l, c;
    function u(t) {
      e[24].call(null, t);
    }
    let d = {
      item: { type: "text", val: e[8], telNum: "", required: !0 },
      data: e[0],
      index: 2,
    };
    return (
      void 0 !== e[2] && (d.value = e[2]),
      (o = new Ke({ props: d })),
      X.push(() => $e(o, "value", u)),
      e[25](o),
      {
        c() {
          (t = k("div")),
            (n = k("input")),
            (i = T()),
            Te(o.$$.fragment),
            q(n, "type", "text"),
            q(n, "placeholder", "Address"),
            q(n, "class", "gcohtech-17zrtnq"),
            q(t, "class", "chatwith-form-element gcohtech-17zrtnq");
        },
        m(a, r) {
          b(a, t, r),
            w(t, n),
            U(n, e[8]),
            b(a, i, r),
            Ie(o, a, r),
            (s = !0),
            l ||
              ((c = [S(n, "input", e[23]), S(n, "keypress", e[15])]), (l = !0));
        },
        p(e, t) {
          256 & t[0] && n.value !== e[8] && U(n, e[8]);
          const i = {};
          256 & t[0] &&
            (i.item = { type: "text", val: e[8], telNum: "", required: !0 }),
            1 & t[0] && (i.data = e[0]),
            !r && 4 & t[0] && ((r = !0), (i.value = e[2]), oe(() => (r = !1))),
            o.$set(i);
        },
        i(e) {
          s || (ve(o.$$.fragment, e), (s = !0));
        },
        o(e) {
          ge(o.$$.fragment, e), (s = !1);
        },
        d(n) {
          n && y(t), n && y(i), e[25](null), Se(o, n), (l = !1), a(c);
        },
      }
    );
  }
  function ro(e) {
    let t, n, i, o, r, s, l, c;
    function u(t) {
      e[27].call(null, t);
    }
    let d = {
      item: { type: "email", val: e[9], telNum: "", required: !0 },
      data: e[0],
      index: 3,
    };
    return (
      void 0 !== e[2] && (d.value = e[2]),
      (o = new Ke({ props: d })),
      X.push(() => $e(o, "value", u)),
      e[28](o),
      {
        c() {
          (t = k("div")),
            (n = k("input")),
            (i = T()),
            Te(o.$$.fragment),
            q(n, "type", "email"),
            q(n, "placeholder", "Email"),
            q(n, "class", "gcohtech-17zrtnq"),
            q(t, "class", "chatwith-form-element gcohtech-17zrtnq");
        },
        m(a, r) {
          b(a, t, r),
            w(t, n),
            U(n, e[9]),
            b(a, i, r),
            Ie(o, a, r),
            (s = !0),
            l ||
              ((c = [S(n, "input", e[26]), S(n, "keypress", e[15])]), (l = !0));
        },
        p(e, t) {
          512 & t[0] && n.value !== e[9] && U(n, e[9]);
          const i = {};
          512 & t[0] &&
            (i.item = { type: "email", val: e[9], telNum: "", required: !0 }),
            1 & t[0] && (i.data = e[0]),
            !r && 4 & t[0] && ((r = !0), (i.value = e[2]), oe(() => (r = !1))),
            o.$set(i);
        },
        i(e) {
          s || (ve(o.$$.fragment, e), (s = !0));
        },
        o(e) {
          ge(o.$$.fragment, e), (s = !1);
        },
        d(n) {
          n && y(t), n && y(i), e[28](null), Se(o, n), (l = !1), a(c);
        },
      }
    );
  }
  function so(e) {
    let t,
      n,
      i,
      o,
      a,
      r,
      s,
      l,
      c = e[13](e[10].price) + "",
      u = e[10].currency + "";
    return {
      c() {
        (t = k("button")),
          (n = $("Pay ")),
          (i = $(c)),
          (o = T()),
          (a = $(u)),
          (r = $(" - Stripe")),
          z(t, "color", e[0].textColor),
          z(t, "background", e[0].color),
          z(t, "border-color", e[0].color),
          q(t, "type", "button"),
          q(t, "class", "gcohtech-17zrtnq");
      },
      m(c, u) {
        b(c, t, u),
          w(t, n),
          w(t, i),
          w(t, o),
          w(t, a),
          w(t, r),
          s || ((l = S(t, "click", e[30])), (s = !0));
      },
      p(e, n) {
        1024 & n[0] && c !== (c = e[13](e[10].price) + "") && M(i, c),
          1024 & n[0] && u !== (u = e[10].currency + "") && M(a, u),
          1 & n[0] && z(t, "color", e[0].textColor),
          1 & n[0] && z(t, "background", e[0].color),
          1 & n[0] && z(t, "border-color", e[0].color);
      },
      d(e) {
        e && y(t), (s = !1), l();
      },
    };
  }
  function lo(e) {
    let t,
      n,
      i,
      o,
      a,
      r,
      s,
      l,
      c = e[13](e[10].price) + "",
      u = e[10].currency + "";
    return {
      c() {
        (t = k("div")),
          (n = k("a")),
          (i = $("Pay ")),
          (o = $(c)),
          (a = T()),
          (r = $(u)),
          (s = $(" - Paypal")),
          z(n, "color", e[0].textColor),
          z(n, "background", "#0C59AC"),
          z(n, "border-color", "#0C59AC"),
          z(n, "text-decoration", "none"),
          q(n, "href", (l = e[10].payLink)),
          q(n, "target", "_blank"),
          q(n, "class", "gcohtech-17zrtnq"),
          q(t, "class", "chatwith-paypal-element gcohtech-17zrtnq");
      },
      m(e, l) {
        b(e, t, l), w(t, n), w(n, i), w(n, o), w(n, a), w(n, r), w(n, s);
      },
      p(e, t) {
        1024 & t[0] && c !== (c = e[13](e[10].price) + "") && M(o, c),
          1024 & t[0] && u !== (u = e[10].currency + "") && M(r, u),
          1 & t[0] && z(n, "color", e[0].textColor),
          1024 & t[0] && l !== (l = e[10].payLink) && q(n, "href", l);
      },
      d(e) {
        e && y(t);
      },
    };
  }
  function co(e) {
    let t,
      n,
      i,
      o,
      a,
      r,
      s,
      l,
      c,
      u,
      d,
      p,
      h,
      f,
      m,
      v,
      g,
      x,
      C,
      I,
      S = e[13](e[10].price) + "",
      N = e[10].currency + "",
      D = !e[1] && Qi(e),
      U = e[10].Description && no(e),
      z = 1 == e[10].requireName && io(e),
      A = 1 == e[10].requirePhoneNumber && oo(e),
      E = 1 == e[10].requireAddress && ao(e),
      L = 1 == e[10].requireEmail && ro(e),
      O = {
        onboardPaymentLink: e[10],
        bgcolor: e[0].color,
        name: e[6],
        email: e[9],
        phoneNumber: e[7],
        address: e[8],
      };
    (m = new Ji({ props: O })), e[29](m), m.$on("success", e[14]);
    let j = !e[4] && so(e),
      B = e[10].usePaypal && lo(e);
    return {
      c() {
        (t = k("div")),
          (n = k("div")),
          D && D.c(),
          (i = T()),
          U && U.c(),
          (o = T()),
          (a = k("div")),
          (r = $(S)),
          (s = T()),
          (l = $(N)),
          (c = T()),
          z && z.c(),
          (u = T()),
          A && A.c(),
          (d = T()),
          E && E.c(),
          (p = T()),
          L && L.c(),
          (h = T()),
          (f = k("div")),
          Te(m.$$.fragment),
          (v = T()),
          (g = k("div")),
          j && j.c(),
          (x = T()),
          B && B.c(),
          q(a, "class", "chatwith-price gcohtech-17zrtnq"),
          q(f, "class", "chatwith-form-element gcohtech-17zrtnq"),
          q(g, "class", "gcohtech-17zrtnq"),
          q(n, "class", " gcohtech-17zrtnq"),
          q(t, "class", "chatwith-box gcohtech-17zrtnq"),
          q(
            t,
            "style",
            (C =
              "whatsappTheme" === e[0].widgetTheme &&
              "background-image: url('https://services.tochat.be/img/bk-wa.png')")
          );
      },
      m(e, y) {
        b(e, t, y),
          w(t, n),
          D && D.m(n, null),
          w(n, i),
          U && U.m(n, null),
          w(n, o),
          w(n, a),
          w(a, r),
          w(a, s),
          w(a, l),
          w(n, c),
          z && z.m(n, null),
          w(n, u),
          A && A.m(n, null),
          w(n, d),
          E && E.m(n, null),
          w(n, p),
          L && L.m(n, null),
          w(n, h),
          w(n, f),
          Ie(m, f, null),
          w(n, v),
          w(n, g),
          j && j.m(g, null),
          w(n, x),
          B && B.m(n, null),
          (I = !0);
      },
      p(e, a) {
        e[1]
          ? D && (D.d(1), (D = null))
          : D
          ? D.p(e, a)
          : ((D = Qi(e)), D.c(), D.m(n, i)),
          e[10].Description
            ? U
              ? U.p(e, a)
              : ((U = no(e)), U.c(), U.m(n, o))
            : U && (U.d(1), (U = null)),
          (!I || 1024 & a[0]) && S !== (S = e[13](e[10].price) + "") && M(r, S),
          (!I || 1024 & a[0]) && N !== (N = e[10].currency + "") && M(l, N),
          1 == e[10].requireName
            ? z
              ? (z.p(e, a), 1024 & a[0] && ve(z, 1))
              : ((z = io(e)), z.c(), ve(z, 1), z.m(n, u))
            : z &&
              (fe(),
              ge(z, 1, 1, () => {
                z = null;
              }),
              me()),
          1 == e[10].requirePhoneNumber
            ? A
              ? (A.p(e, a), 1024 & a[0] && ve(A, 1))
              : ((A = oo(e)), A.c(), ve(A, 1), A.m(n, d))
            : A &&
              (fe(),
              ge(A, 1, 1, () => {
                A = null;
              }),
              me()),
          1 == e[10].requireAddress
            ? E
              ? (E.p(e, a), 1024 & a[0] && ve(E, 1))
              : ((E = ao(e)), E.c(), ve(E, 1), E.m(n, p))
            : E &&
              (fe(),
              ge(E, 1, 1, () => {
                E = null;
              }),
              me()),
          1 == e[10].requireEmail
            ? L
              ? (L.p(e, a), 1024 & a[0] && ve(L, 1))
              : ((L = ro(e)), L.c(), ve(L, 1), L.m(n, h))
            : L &&
              (fe(),
              ge(L, 1, 1, () => {
                L = null;
              }),
              me());
        const s = {};
        1024 & a[0] && (s.onboardPaymentLink = e[10]),
          1 & a[0] && (s.bgcolor = e[0].color),
          64 & a[0] && (s.name = e[6]),
          512 & a[0] && (s.email = e[9]),
          128 & a[0] && (s.phoneNumber = e[7]),
          256 & a[0] && (s.address = e[8]),
          m.$set(s),
          e[4]
            ? j && (j.d(1), (j = null))
            : j
            ? j.p(e, a)
            : ((j = so(e)), j.c(), j.m(g, null)),
          e[10].usePaypal
            ? B
              ? B.p(e, a)
              : ((B = lo(e)), B.c(), B.m(n, null))
            : B && (B.d(1), (B = null)),
          (!I ||
            (1 & a[0] &&
              C !==
                (C =
                  "whatsappTheme" === e[0].widgetTheme &&
                  "background-image: url('https://services.tochat.be/img/bk-wa.png')"))) &&
            q(t, "style", C);
      },
      i(e) {
        I || (ve(z), ve(A), ve(E), ve(L), ve(m.$$.fragment, e), (I = !0));
      },
      o(e) {
        ge(z), ge(A), ge(E), ge(L), ge(m.$$.fragment, e), (I = !1);
      },
      d(n) {
        n && y(t),
          D && D.d(),
          U && U.d(),
          z && z.d(),
          A && A.d(),
          E && E.d(),
          L && L.d(),
          e[29](null),
          Se(m),
          j && j.d(),
          B && B.d();
      },
    };
  }
  function uo(e, t, n) {
    let i;
    const o = K();
    let a,
      r,
      s,
      l,
      c,
      { data: u } = t,
      { person: d } = t,
      { noclose: p } = t,
      h = [],
      f = [],
      m = !1;
    const v = () => {
      for (let e in f)
        try {
          f[e].validate();
        } catch (e) {
          console.log(e);
        }
      0 == h.length && a.submit();
    };
    return (
      (e.$$set = (e) => {
        "data" in e && n(0, (u = e.data)),
          "person" in e && n(16, (d = e.person)),
          "noclose" in e && n(1, (p = e.noclose));
      }),
      (e.$$.update = () => {
        65537 & e.$$.dirty[0] &&
          n(10, (i = u.onboardPaymentLinks.filter((e) => e.link === d.id)[0]));
      }),
      [
        u,
        p,
        h,
        f,
        m,
        a,
        r,
        s,
        l,
        c,
        i,
        () => {
          o("close");
        },
        v,
        (e) => parseFloat(e).toFixed(2),
        () => {
          n(4, (m = !0));
        },
        () => {
          "Enter" == event.code && event.preventDefault();
        },
        d,
        function () {
          (r = this.value), n(6, r);
        },
        function (e) {
          (h = e), n(2, h);
        },
        function (e) {
          X[e ? "unshift" : "push"](() => {
            (f[0] = e), n(3, f);
          });
        },
        function () {
          (s = this.value), n(7, s);
        },
        function (e) {
          (h = e), n(2, h);
        },
        function (e) {
          X[e ? "unshift" : "push"](() => {
            (f[1] = e), n(3, f);
          });
        },
        function () {
          (l = this.value), n(8, l);
        },
        function (e) {
          (h = e), n(2, h);
        },
        function (e) {
          X[e ? "unshift" : "push"](() => {
            (f[2] = e), n(3, f);
          });
        },
        function () {
          (c = this.value), n(9, c);
        },
        function (e) {
          (h = e), n(2, h);
        },
        function (e) {
          X[e ? "unshift" : "push"](() => {
            (f[3] = e), n(3, f);
          });
        },
        function (e) {
          X[e ? "unshift" : "push"](() => {
            (a = e), n(5, a);
          });
        },
        () => v(),
      ]
    );
  }
  class po extends qe {
    constructor(e) {
      var t;
      super(),
        document.getElementById("gcohtech-17zrtnq-style") ||
          (((t = k("style")).id = "gcohtech-17zrtnq-style"),
          (t.textContent =
            '.chatwith-image.gcohtech-17zrtnq img.gcohtech-17zrtnq{width:80px;height:80px;display:block;border-radius:100px;border:1px solid #ccc;margin:0 auto;padding:10px}.chatwith-box.gcohtech-17zrtnq .chatwith-title.gcohtech-17zrtnq{font-weight:bold;padding-bottom:5px;font-size:24px;margin-top:10px;text-align:center !important}.chatwith-box.gcohtech-17zrtnq .chatwith-description.gcohtech-17zrtnq{text-align:center}.chatwith-box.gcohtech-17zrtnq .chatwith-price.gcohtech-17zrtnq{font-weight:bold;padding-bottom:5px;font-size:18px;text-align:center}.chatwith-box.gcohtech-17zrtnq input.gcohtech-17zrtnq{display:block;padding:8px 0;font-size:16px}.chatwith-box.gcohtech-17zrtnq input.gcohtech-17zrtnq,.chatwith-box.gcohtech-17zrtnq button.gcohtech-17zrtnq,.chatwith-box.gcohtech-17zrtnq a.gcohtech-17zrtnq{border:1px solid #ccc;padding:5px 5px;width:100%;box-sizing:border-box;border-radius:5px;font-size:16px;line-height:1;height:auto}.chatwith-box.gcohtech-17zrtnq .chatwith-form-element.gcohtech-17zrtnq{margin-top:10px;margin-bottom:5px}.chatwith-box.gcohtech-17zrtnq .chatwith-paypal-element.gcohtech-17zrtnq{margin-top:10px}.chatwith-box.gcohtech-17zrtnq .chatwith-paypal-element a.gcohtech-17zrtnq{display:block;text-align:center}.chatwith-box.gcohtech-17zrtnq button.gcohtech-17zrtnq,.chatwith-box.gcohtech-17zrtnq a.gcohtech-17zrtnq{border:1px solid green;background:green;color:white;padding:10px;cursor:pointer}.chatwith-box.gcohtech-17zrtnq.gcohtech-17zrtnq{padding:10px;box-sizing:border-box;background:white;color:#5c5b5b;width:100%}.close-modal.gcohtech-17zrtnq.gcohtech-17zrtnq{position:absolute;right:0;z-index:1000000;top:0;padding:4px 10px 0 10px;color:#fff;border-top-right-radius:1em;border-bottom-left-radius:1em;cursor:pointer}.close-modal.gcohtech-17zrtnq svg.gcohtech-17zrtnq{width:0.7em}.gcohtech-17zrtnq.gcohtech-17zrtnq::-webkit-input-placeholder{color:#c2bdbd!important;font-style:normal}.chatwith-box.gcohtech-17zrtnq .gcohtech-17zrtnq::-moz-placeholder{color:#c2bdbd!important;font-style:normal}.chatwith-box.gcohtech-17zrtnq .gcohtech-17zrtnq:-ms-input-placeholder{color:#c2bdbd!important;font-style:normal}.chatwith-box.gcohtech-17zrtnq .gcohtech-17zrtnq:-moz-placeholder{color:#c2bdbd!important;font-style:normal}.chatwith-box.gcohtech-17zrtnq input[type="text"].gcohtech-17zrtnq,.chatwith-box.gcohtech-17zrtnq input[type="email"].gcohtech-17zrtnq{color:#5c5b5b;height:45px;margin-bottom:0;font-weight:0;font-weight:normal;font-family:"Inter", Arial, sans-serif;font-size:16px}'),
          w(document.head, t)),
        Ne(this, e, uo, co, s, { data: 0, person: 16, noclose: 1 }, [-1, -1]);
    }
  }
  function ho(t) {
    let n,
      i,
      o,
      a,
      r,
      s,
      l,
      c,
      u,
      d = t[0].question + "",
      p = (!1 === t[5] || !1 === t[3]) && fo(t);
    return {
      c() {
        (n = k("div")),
          (i = k("div")),
          (o = C("svg")),
          (a = C("polygon")),
          (r = T()),
          (s = $(d)),
          (l = T()),
          p && p.c(),
          z(a, "fill", t[1]),
          q(a, "points", "18.468,467.029 255.99,55.638 493.497,467.029 "),
          q(o, "width", "12"),
          q(o, "height", "12"),
          q(o, "version", "1.1"),
          q(o, "id", "Layer_1"),
          q(o, "xmlns", "http://www.w3.org/2000/svg"),
          q(o, "xmlns:xlink", "http://www.w3.org/1999/xlink"),
          q(o, "x", "0px"),
          q(o, "y", "0px"),
          q(o, "viewBox", "0 0 511.98 511.98"),
          z(o, "enable-background", "new 0 0 511.98 511.98"),
          q(o, "xml:space", "preserve"),
          q(o, "class", "gcohtech-10q8lgf"),
          z(i, "color", t[1]),
          q(i, "class", "chatwith-question gcohtech-10q8lgf"),
          q(n, "class", "faq gcohtech-10q8lgf"),
          q(n, "aria-expanded", t[5]),
          B(n, "fullScreenMobile", t[4]);
      },
      m(e, d) {
        b(e, n, d),
          w(n, i),
          w(i, o),
          w(o, a),
          w(i, r),
          w(i, s),
          w(n, l),
          p && p.m(n, null),
          c || ((u = S(i, "click", t[7])), (c = !0));
      },
      p(e, t) {
        2 & t && z(a, "fill", e[1]),
          1 & t && d !== (d = e[0].question + "") && M(s, d),
          2 & t && z(i, "color", e[1]),
          !1 === e[5] || !1 === e[3]
            ? p
              ? (p.p(e, t), 40 & t && ve(p, 1))
              : ((p = fo(e)), p.c(), ve(p, 1), p.m(n, null))
            : p && (p.d(1), (p = null)),
          32 & t && q(n, "aria-expanded", e[5]),
          16 & t && B(n, "fullScreenMobile", e[4]);
      },
      i(e) {
        ve(p);
      },
      o: e,
      d(e) {
        e && y(n), p && p.d(), (c = !1), u();
      },
    };
  }
  function fo(t) {
    let n,
      i,
      o = t[0].answer + "";
    return {
      c() {
        (n = k("div")), q(n, "class", "chatwith-answer gcohtech-10q8lgf");
      },
      m(e, t) {
        b(e, n, t), (n.innerHTML = o);
      },
      p(e, t) {
        1 & t && o !== (o = e[0].answer + "") && (n.innerHTML = o);
      },
      i(e) {
        i ||
          ie(() => {
            (i = be(n, Me, {})), i.start();
          });
      },
      o: e,
      d(e) {
        e && y(n);
      },
    };
  }
  function mo(t) {
    let n,
      i = !0 === t[2] && ho(t);
    return {
      c() {
        i && i.c(), (n = I());
      },
      m(e, t) {
        i && i.m(e, t), b(e, n, t);
      },
      p(e, [t]) {
        !0 === e[2]
          ? i
            ? (i.p(e, t), 4 & t && ve(i, 1))
            : ((i = ho(e)), i.c(), ve(i, 1), i.m(n.parentNode, n))
          : i && (i.d(1), (i = null));
      },
      i(e) {
        ve(i);
      },
      o: e,
      d(e) {
        i && i.d(e), e && y(n);
      },
    };
  }
  function vo(e, t, n) {
    let { faq: i } = t,
      { bgcolor: o } = t,
      { activeFaq: a } = t,
      { allowToggle: r } = t,
      { fullScreenMobile: s } = t,
      l = !0;
    const c = () => {
      !0 === r && n(5, (l = !l));
    };
    return (
      (e.$$set = (e) => {
        "faq" in e && n(0, (i = e.faq)),
          "bgcolor" in e && n(1, (o = e.bgcolor)),
          "activeFaq" in e && n(2, (a = e.activeFaq)),
          "allowToggle" in e && n(3, (r = e.allowToggle)),
          "fullScreenMobile" in e && n(4, (s = e.fullScreenMobile));
      }),
      [i, o, a, r, s, l, c, () => c()]
    );
  }
  class go extends qe {
    constructor(e) {
      var t;
      super(),
        document.getElementById("gcohtech-10q8lgf-style") ||
          (((t = k("style")).id = "gcohtech-10q8lgf-style"),
          (t.textContent =
            ".faq.gcohtech-10q8lgf.gcohtech-10q8lgf{padding-top:10px\n    }.chatwith-question.gcohtech-10q8lgf.gcohtech-10q8lgf{font-weight:bold;font-size:14px;cursor:pointer}.fullScreenMobile.gcohtech-10q8lgf .chatwith-question.gcohtech-10q8lgf{padding-bottom:10px}.chatwith-answer.gcohtech-10q8lgf.gcohtech-10q8lgf{max-width:240px;font-size:14px !important;padding-left:20px}.chatwith-answer p{margin-top:5px;margin-bottom:5px;color:#444847}.chatwith-answer strong{color:#444847}svg.gcohtech-10q8lgf.gcohtech-10q8lgf{transform:translate(0px, 1px) rotate(0.25turn)}[aria-expanded=false].gcohtech-10q8lgf svg.gcohtech-10q8lgf{transform:translate(0px, 1px) rotate(0.5turn)}"),
          w(document.head, t)),
        Ne(this, e, vo, mo, s, {
          faq: 0,
          bgcolor: 1,
          activeFaq: 2,
          allowToggle: 3,
          fullScreenMobile: 4,
        });
    }
  }
  function wo(t) {
    let n;
    return {
      c() {
        n = $(
          "This operator is not online at the moment. Please leave your telephone\n      number and we'll get back"
        );
      },
      m(e, t) {
        b(e, n, t);
      },
      p: e,
      d(e) {
        e && y(n);
      },
    };
  }
  function bo(e) {
    let t,
      n = e[1].offlineMessage + "";
    return {
      c() {
        t = $(n);
      },
      m(e, n) {
        b(e, t, n);
      },
      p(e, i) {
        2 & i && n !== (n = e[1].offlineMessage + "") && M(t, n);
      },
      d(e) {
        e && y(t);
      },
    };
  }
  function yo(e) {
    let t;
    return {
      c() {
        (t = k("div")),
          (t.textContent = "Your message has been created"),
          q(t, "class", "success gcohtech-3lkpzz"),
          z(t, "font-size", "14px");
      },
      m(e, n) {
        b(e, t, n);
      },
      d(e) {
        e && y(t);
      },
    };
  }
  function xo(e) {
    let t;
    return {
      c() {
        (t = k("div")),
          (t.textContent = "There has been an error, Please contact support"),
          q(t, "class", "fail gcohtech-3lkpzz"),
          z(t, "font-size", "14px");
      },
      m(e, n) {
        b(e, t, n);
      },
      d(e) {
        e && y(t);
      },
    };
  }
  function ko(e) {
    let t, n;
    return {
      c() {
        (t = k("div")),
          (n = $(e[4])),
          z(t, "color", "darkred"),
          z(t, "font-size", "14px");
      },
      m(e, i) {
        b(e, t, i), w(t, n);
      },
      p(e, t) {
        16 & t && M(n, e[4]);
      },
      d(e) {
        e && y(t);
      },
    };
  }
  function Co(t) {
    let n;
    return {
      c() {
        n = $("Leave a message");
      },
      m(e, t) {
        b(e, n, t);
      },
      p: e,
      d(e) {
        e && y(n);
      },
    };
  }
  function $o(e) {
    let t,
      n = e[1].leaveMessage + "";
    return {
      c() {
        t = $(n);
      },
      m(e, n) {
        b(e, t, n);
      },
      p(e, i) {
        2 & i && n !== (n = e[1].leaveMessage + "") && M(t, n);
      },
      d(e) {
        e && y(t);
      },
    };
  }
  function To(e) {
    let t, n, i, o, a, r, s, l, c, u, d, p;
    function h(e, t) {
      return e[1].offlineMessage ? bo : wo;
    }
    let f = h(e),
      m = f(e),
      v = e[2] && yo(),
      g = e[3] && xo();
    (r = new at({ props: { data: e[1], class: "whataapp-telfield" } })),
      r.$on("message", e[10]);
    let x = e[4] && ko(e);
    function C(e, t) {
      return e[1].leaveMessage ? $o : Co;
    }
    let $ = C(e),
      I = $(e);
    return {
      c() {
        (t = k("div")),
          (n = k("p")),
          m.c(),
          (i = T()),
          v && v.c(),
          (o = T()),
          g && g.c(),
          (a = T()),
          Te(r.$$.fragment),
          (s = T()),
          x && x.c(),
          (l = T()),
          (c = k("button")),
          I.c(),
          z(n, "font-size", "14px"),
          z(c, "background", e[0]),
          z(c, "color", "#fff"),
          q(c, "class", "button gcohtech-3lkpzz"),
          q(t, "class", "leave-message gcohtech-3lkpzz"),
          B(t, "whatsappTheme", e[5]),
          B(t, "roundedTheme", e[6]),
          B(t, "fullScreenMobile", e[8]),
          B(t, "bubbleTheme", e[7]);
      },
      m(h, f) {
        b(h, t, f),
          w(t, n),
          m.m(n, null),
          w(t, i),
          v && v.m(t, null),
          w(t, o),
          g && g.m(t, null),
          w(t, a),
          Ie(r, t, null),
          w(t, s),
          x && x.m(t, null),
          w(t, l),
          w(t, c),
          I.m(c, null),
          (u = !0),
          d || ((p = S(c, "click", e[12])), (d = !0));
      },
      p(e, [i]) {
        f === (f = h(e)) && m
          ? m.p(e, i)
          : (m.d(1), (m = f(e)), m && (m.c(), m.m(n, null))),
          e[2]
            ? v || ((v = yo()), v.c(), v.m(t, o))
            : v && (v.d(1), (v = null)),
          e[3]
            ? g || ((g = xo()), g.c(), g.m(t, a))
            : g && (g.d(1), (g = null));
        const s = {};
        2 & i && (s.data = e[1]),
          r.$set(s),
          e[4]
            ? x
              ? x.p(e, i)
              : ((x = ko(e)), x.c(), x.m(t, l))
            : x && (x.d(1), (x = null)),
          $ === ($ = C(e)) && I
            ? I.p(e, i)
            : (I.d(1), (I = $(e)), I && (I.c(), I.m(c, null))),
          (!u || 1 & i) && z(c, "background", e[0]),
          32 & i && B(t, "whatsappTheme", e[5]),
          64 & i && B(t, "roundedTheme", e[6]),
          256 & i && B(t, "fullScreenMobile", e[8]),
          128 & i && B(t, "bubbleTheme", e[7]);
      },
      i(e) {
        u || (ve(r.$$.fragment, e), (u = !0));
      },
      o(e) {
        ge(r.$$.fragment, e), (u = !1);
      },
      d(e) {
        e && y(t),
          m.d(),
          v && v.d(),
          g && g.d(),
          Se(r),
          x && x.d(),
          I.d(),
          (d = !1),
          p();
      },
    };
  }
  function Io(e, t, n) {
    let i,
      o,
      a,
      r,
      { person: s } = t,
      { bgcolor: l } = t,
      { data: c } = t;
    const u = `${s.id}leaveMessage`,
      d = ct(u);
    let p = d && d.num ? d.num : null,
      h = c.dialingCode,
      f = !1,
      m = !1,
      v = !1;
    function g() {
      if (!p) return void n(4, (v = "You number is necessary"));
      if (p.toString().length < 6)
        return void n(4, (v = "You must have a number here"));
      n(4, (v = !1));
      let e = h.toString() + p.toString();
      Fn.post("https://services.tochat.be/api/callback", {
        id: s.id,
        number: e,
      })
        .then((e) => {
          n(2, (f = !0)), n(3, (m = !1));
        })
        .catch((e) => {
          console.log(e), n(2, (f = !1)), n(3, (m = !0));
        });
    }
    return (
      (e.$$set = (e) => {
        "person" in e && n(11, (s = e.person)),
          "bgcolor" in e && n(0, (l = e.bgcolor)),
          "data" in e && n(1, (c = e.data));
      }),
      (e.$$.update = () => {
        2 & e.$$.dirty && n(5, (i = "whatsappTheme" === c.widgetTheme)),
          2 & e.$$.dirty && n(6, (o = "roundedTheme" === c.widgetTheme)),
          2 & e.$$.dirty && n(7, (a = "bubbleTheme" === c.widgetTheme)),
          2 & e.$$.dirty && n(8, (r = c.expandFullScreenMobile));
      }),
      [
        l,
        c,
        f,
        m,
        v,
        i,
        o,
        a,
        r,
        g,
        (e) => {
          (h = e.detail.code.trim()), (p = e.detail.num.trim());
        },
        s,
        () => g(),
      ]
    );
  }
  class So extends qe {
    constructor(e) {
      var t;
      super(),
        document.getElementById("gcohtech-3lkpzz-style") ||
          (((t = k("style")).id = "gcohtech-3lkpzz-style"),
          (t.textContent =
            ".button.gcohtech-3lkpzz.gcohtech-3lkpzz{width:100%;text-align:center;padding:10px;box-sizing:border-box;border-radius:5px;margin-bottom:10px;border:none;cursor:pointer;font-size:16px;height:45px}.roundedTheme.gcohtech-3lkpzz .button.gcohtech-3lkpzz,.bubbleTheme.gcohtech-3lkpzz .button.gcohtech-3lkpzz{border-radius:40px}.success.gcohtech-3lkpzz.gcohtech-3lkpzz{padding:10px;background:darkgreen;color:white;margin-bottom:10px;border-radius:5px}.fail.gcohtech-3lkpzz.gcohtech-3lkpzz{padding:10px;background:darkred;color:white;margin-bottom:10px;border-radius:5px}.whataapp-telfield{margin-bottom:20px}"),
          w(document.head, t)),
        Ne(this, e, Io, To, s, { person: 11, bgcolor: 0, data: 1 });
    }
  }
  function No(e, t, n) {
    const i = e.slice();
    return (i[20] = t[n]), (i[22] = n), i;
  }
  function qo(e, t, n) {
    const i = e.slice();
    return (i[20] = t[n]), (i[22] = n), i;
  }
  function Do(e) {
    let t,
      n,
      i,
      o,
      a,
      r,
      s,
      l,
      c,
      u,
      d = (e[0].title ?? "FAQs") + "",
      p = e[0].faqs,
      h = [];
    for (let t = 0; t < p.length; t += 1) h[t] = Eo(qo(e, p, t));
    let f = e[0].faqs,
      m = [];
    for (let t = 0; t < f.length; t += 1) m[t] = jo(No(e, f, t));
    const v = (e) =>
      ge(m[e], 1, 1, () => {
        m[e] = null;
      });
    let g = "bigperson" !== e[3].widgetType && Bo(e);
    function C(e, t) {
      return !0 === e[1].online
        ? Vo
        : "bigperson" !== e[3].widgetType
        ? Po
        : void 0;
    }
    let I = C(e),
      S = I && I(e);
    return {
      c() {
        (t = k("div")), (n = $(d)), (i = T()), (o = k("div"));
        for (let e = 0; e < h.length; e += 1) h[e].c();
        (a = T()), (r = k("div"));
        for (let e = 0; e < m.length; e += 1) m[e].c();
        (s = T()),
          (l = k("div")),
          g && g.c(),
          (c = T()),
          S && S.c(),
          q(t, "class", "title gcohtech-irfn4o"),
          q(o, "class", "faqs-shortcuts gcohtech-irfn4o"),
          q(r, "class", "faqs-content gcohtech-irfn4o"),
          q(l, "class", "my-buttons gcohtech-irfn4o");
      },
      m(e, d) {
        b(e, t, d), w(t, n), b(e, i, d), b(e, o, d);
        for (let e = 0; e < h.length; e += 1) h[e].m(o, null);
        b(e, a, d), b(e, r, d);
        for (let e = 0; e < m.length; e += 1) m[e].m(r, null);
        b(e, s, d),
          b(e, l, d),
          g && g.m(l, null),
          w(l, c),
          S && S.m(l, null),
          (u = !0);
      },
      p(e, t) {
        if (
          ((!u || 1 & t) && d !== (d = (e[0].title ?? "FAQs") + "") && M(n, d),
          4209 & t)
        ) {
          let n;
          for (p = e[0].faqs, n = 0; n < p.length; n += 1) {
            const i = qo(e, p, n);
            h[n] ? h[n].p(i, t) : ((h[n] = Eo(i)), h[n].c(), h[n].m(o, null));
          }
          for (; n < h.length; n += 1) h[n].d(1);
          h.length = p.length;
        }
        if (1141 & t) {
          let n;
          for (f = e[0].faqs, n = 0; n < f.length; n += 1) {
            const i = No(e, f, n);
            m[n]
              ? (m[n].p(i, t), ve(m[n], 1))
              : ((m[n] = jo(i)), m[n].c(), ve(m[n], 1), m[n].m(r, null));
          }
          for (fe(), n = f.length; n < m.length; n += 1) v(n);
          me();
        }
        "bigperson" !== e[3].widgetType
          ? g
            ? g.p(e, t)
            : ((g = Bo(e)), g.c(), g.m(l, c))
          : g && (g.d(1), (g = null)),
          I === (I = C(e)) && S
            ? S.p(e, t)
            : (S && S.d(1), (S = I && I(e)), S && (S.c(), S.m(l, null)));
      },
      i(e) {
        if (!u) {
          for (let e = 0; e < f.length; e += 1) ve(m[e]);
          u = !0;
        }
      },
      o(e) {
        m = m.filter(Boolean);
        for (let e = 0; e < m.length; e += 1) ge(m[e]);
        u = !1;
      },
      d(e) {
        e && y(t),
          e && y(i),
          e && y(o),
          x(h, e),
          e && y(a),
          e && y(r),
          x(m, e),
          e && y(s),
          e && y(l),
          g && g.d(),
          S && S.d();
      },
    };
  }
  function Mo(e) {
    let t, n, i, o, a, r, s, l;
    return (
      (a = new So({ props: { data: e[3], person: e[1], bgcolor: e[2] } })),
      {
        c() {
          (t = k("div")),
            (n = C("svg")),
            (i = C("path")),
            (o = T()),
            Te(a.$$.fragment),
            q(i, "fill", "#333"),
            q(
              i,
              "d",
              "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
            ),
            z(n, "width", "15px"),
            q(n, "aria-hidden", "true"),
            q(n, "focusable", "false"),
            q(n, "data-icon", "times"),
            q(n, "role", "img"),
            q(n, "xmlns", "http://www.w3.org/2000/svg"),
            q(n, "viewBox", "0 0 352 512"),
            q(t, "class", "closeit gcohtech-irfn4o");
        },
        m(c, u) {
          b(c, t, u),
            w(t, n),
            w(n, i),
            b(c, o, u),
            Ie(a, c, u),
            (r = !0),
            s || ((l = S(n, "click", e[13])), (s = !0));
        },
        p(e, t) {
          const n = {};
          8 & t && (n.data = e[3]),
            2 & t && (n.person = e[1]),
            4 & t && (n.bgcolor = e[2]),
            a.$set(n);
        },
        i(e) {
          r || (ve(a.$$.fragment, e), (r = !0));
        },
        o(e) {
          ge(a.$$.fragment, e), (r = !1);
        },
        d(e) {
          e && y(t), e && y(o), Se(a, e), (s = !1), l();
        },
      }
    );
  }
  function Uo(e) {
    let t, n, i, o, a, r, s, l;
    function c(e, t) {
      return e[20].translateShortCut ? Ao : zo;
    }
    let u = c(e),
      d = u(e);
    function p() {
      return e[14](e[20]);
    }
    return {
      c() {
        (t = k("span")),
          (n = k("img")),
          (a = T()),
          d.c(),
          (r = T()),
          q(n, "class", "sml-ico gcohtech-irfn4o"),
          q(n, "alt", (i = e[20].shortcutName)),
          n.src !== (o = e[12](e[20].shortcutName, "icon")) && q(n, "src", o),
          q(t, "class", "faq-shortcut gcohtech-irfn4o"),
          z(t, "background-color", e[12](e[20].shortcutName, "color"));
      },
      m(e, i) {
        b(e, t, i),
          w(t, n),
          w(t, a),
          d.m(t, null),
          w(t, r),
          s || ((l = S(t, "click", p)), (s = !0));
      },
      p(a, s) {
        (e = a),
          1 & s && i !== (i = e[20].shortcutName) && q(n, "alt", i),
          1 & s &&
            n.src !== (o = e[12](e[20].shortcutName, "icon")) &&
            q(n, "src", o),
          u === (u = c(e)) && d
            ? d.p(e, s)
            : (d.d(1), (d = u(e)), d && (d.c(), d.m(t, r))),
          1 & s && z(t, "background-color", e[12](e[20].shortcutName, "color"));
      },
      d(e) {
        e && y(t), d.d(), (s = !1), l();
      },
    };
  }
  function zo(e) {
    let t,
      n = e[20].shortcutName + "";
    return {
      c() {
        t = $(n);
      },
      m(e, n) {
        b(e, t, n);
      },
      p(e, i) {
        1 & i && n !== (n = e[20].shortcutName + "") && M(t, n);
      },
      d(e) {
        e && y(t);
      },
    };
  }
  function Ao(e) {
    let t,
      n = e[20].translateShortCut + "";
    return {
      c() {
        t = $(n);
      },
      m(e, n) {
        b(e, t, n);
      },
      p(e, i) {
        1 & i && n !== (n = e[20].translateShortCut + "") && M(t, n);
      },
      d(e) {
        e && y(t);
      },
    };
  }
  function Eo(e) {
    let t,
      n = null !== e[20].shortcutName && Uo(e);
    return {
      c() {
        n && n.c(), (t = I());
      },
      m(e, i) {
        n && n.m(e, i), b(e, t, i);
      },
      p(e, i) {
        null !== e[20].shortcutName
          ? n
            ? n.p(e, i)
            : ((n = Uo(e)), n.c(), n.m(t.parentNode, t))
          : n && (n.d(1), (n = null));
      },
      d(e) {
        n && n.d(e), e && y(t);
      },
    };
  }
  function Lo(e) {
    let t, n;
    return (
      (t = new go({
        props: {
          activeFaq: !0,
          bgcolor: e[2],
          faq: e[20],
          allowToggle: !0,
          fullScreenMobile: e[10],
        },
      })),
      {
        c() {
          Te(t.$$.fragment);
        },
        m(e, i) {
          Ie(t, e, i), (n = !0);
        },
        p(e, n) {
          const i = {};
          4 & n && (i.bgcolor = e[2]),
            1 & n && (i.faq = e[20]),
            1024 & n && (i.fullScreenMobile = e[10]),
            t.$set(i);
        },
        i(e) {
          n || (ve(t.$$.fragment, e), (n = !0));
        },
        o(e) {
          ge(t.$$.fragment, e), (n = !1);
        },
        d(e) {
          Se(t, e);
        },
      }
    );
  }
  function Oo(e) {
    let t, n;
    return (
      (t = new go({
        props: {
          activeFaq: (e[4] === e[20].id && !1 === e[5]) || e[6],
          bgcolor: e[2],
          faq: e[20],
          allowToggle: !1,
          fullScreenMobile: e[10],
        },
      })),
      {
        c() {
          Te(t.$$.fragment);
        },
        m(e, i) {
          Ie(t, e, i), (n = !0);
        },
        p(e, n) {
          const i = {};
          113 & n && (i.activeFaq = (e[4] === e[20].id && !1 === e[5]) || e[6]),
            4 & n && (i.bgcolor = e[2]),
            1 & n && (i.faq = e[20]),
            1024 & n && (i.fullScreenMobile = e[10]),
            t.$set(i);
        },
        i(e) {
          n || (ve(t.$$.fragment, e), (n = !0));
        },
        o(e) {
          ge(t.$$.fragment, e), (n = !1);
        },
        d(e) {
          Se(t, e);
        },
      }
    );
  }
  function jo(e) {
    let t, n, i, o;
    const a = [Oo, Lo],
      r = [];
    function s(e, t) {
      return e[20].shortcutName ? 0 : 1;
    }
    return (
      (t = s(e)),
      (n = r[t] = a[t](e)),
      {
        c() {
          n.c(), (i = I());
        },
        m(e, n) {
          r[t].m(e, n), b(e, i, n), (o = !0);
        },
        p(e, o) {
          let l = t;
          (t = s(e)),
            t === l
              ? r[t].p(e, o)
              : (fe(),
                ge(r[l], 1, 1, () => {
                  r[l] = null;
                }),
                me(),
                (n = r[t]),
                n ? n.p(e, o) : ((n = r[t] = a[t](e)), n.c()),
                ve(n, 1),
                n.m(i.parentNode, i));
        },
        i(e) {
          o || (ve(n), (o = !0));
        },
        o(e) {
          ge(n), (o = !1);
        },
        d(e) {
          r[t].d(e), e && y(i);
        },
      }
    );
  }
  function Bo(e) {
    let t, n, i;
    function o(e, t) {
      return e[0].solvedButton ? Ro : Fo;
    }
    let a = o(e),
      r = a(e);
    return {
      c() {
        (t = k("div")),
          r.c(),
          z(t, "border", "1px solid " + e[2]),
          z(t, "color", e[2]),
          z(t, "background", "#fff"),
          q(t, "class", "button gcohtech-irfn4o");
      },
      m(o, a) {
        b(o, t, a), r.m(t, null), n || ((i = S(t, "click", e[15])), (n = !0));
      },
      p(e, n) {
        a === (a = o(e)) && r
          ? r.p(e, n)
          : (r.d(1), (r = a(e)), r && (r.c(), r.m(t, null))),
          4 & n && z(t, "border", "1px solid " + e[2]),
          4 & n && z(t, "color", e[2]);
      },
      d(e) {
        e && y(t), r.d(), (n = !1), i();
      },
    };
  }
  function Fo(t) {
    let n;
    return {
      c() {
        n = $("More help?");
      },
      m(e, t) {
        b(e, n, t);
      },
      p: e,
      d(e) {
        e && y(n);
      },
    };
  }
  function Ro(e) {
    let t,
      n = e[0].solvedButton + "";
    return {
      c() {
        t = $(n);
      },
      m(e, n) {
        b(e, t, n);
      },
      p(e, i) {
        1 & i && n !== (n = e[0].solvedButton + "") && M(t, n);
      },
      d(e) {
        e && y(t);
      },
    };
  }
  function Po(e) {
    let t, n, i;
    function o(e, t) {
      return e[3].leaveMessage ? Ho : _o;
    }
    let a = o(e),
      r = a(e);
    return {
      c() {
        (t = k("div")),
          r.c(),
          z(t, "background", e[2]),
          z(t, "color", "white"),
          q(t, "class", "button gcohtech-irfn4o");
      },
      m(o, a) {
        b(o, t, a), r.m(t, null), n || ((i = S(t, "click", e[17])), (n = !0));
      },
      p(e, n) {
        a === (a = o(e)) && r
          ? r.p(e, n)
          : (r.d(1), (r = a(e)), r && (r.c(), r.m(t, null))),
          4 & n && z(t, "background", e[2]);
      },
      d(e) {
        e && y(t), r.d(), (n = !1), i();
      },
    };
  }
  function Vo(e) {
    let t, n, i, o, a, r, s;
    return {
      c() {
        (t = k("div")),
          (n = k("span")),
          (n.textContent = "WhatsApp"),
          (i = T()),
          (o = k("img")),
          q(n, "class", "gcohtech-irfn4o"),
          q(o, "class", "chatwith-img gcohtech-irfn4o"),
          q(o, "alt", "tochat-whatsapp"),
          o.src !==
            (a =
              e[3].whatsappIconUrl ?? "https://widget.tochat.be/icon-1.png") &&
            q(o, "src", a),
          z(t, "background", e[2]),
          z(t, "color", "white"),
          q(t, "class", "button whatsapp-button gcohtech-irfn4o");
      },
      m(a, l) {
        b(a, t, l),
          w(t, n),
          w(t, i),
          w(t, o),
          r || ((s = S(t, "click", e[16])), (r = !0));
      },
      p(e, n) {
        8 & n &&
          o.src !==
            (a =
              e[3].whatsappIconUrl ?? "https://widget.tochat.be/icon-1.png") &&
          q(o, "src", a),
          4 & n && z(t, "background", e[2]);
      },
      d(e) {
        e && y(t), (r = !1), s();
      },
    };
  }
  function _o(t) {
    let n;
    return {
      c() {
        n = $("Leave a message");
      },
      m(e, t) {
        b(e, n, t);
      },
      p: e,
      d(e) {
        e && y(n);
      },
    };
  }
  function Ho(e) {
    let t,
      n = e[3].leaveMessage + "";
    return {
      c() {
        t = $(n);
      },
      m(e, n) {
        b(e, t, n);
      },
      p(e, i) {
        8 & i && n !== (n = e[3].leaveMessage + "") && M(t, n);
      },
      d(e) {
        e && y(t);
      },
    };
  }
  function Go(e) {
    let t, n, i, o, a;
    const r = [Mo, Do],
      s = [];
    function l(e, t) {
      return !0 === e[7] ? 0 : 1;
    }
    return (
      (i = l(e)),
      (o = s[i] = r[i](e)),
      {
        c() {
          (t = k("div")),
            (n = k("div")),
            o.c(),
            q(n, "class", "faqs gcohtech-irfn4o"),
            q(t, "class", "gcohtech-irfn4o"),
            B(t, "whatsappTheme", e[8]),
            B(t, "roundedTheme", e[9]),
            B(t, "fullScreenMobile", e[10]);
        },
        m(e, o) {
          b(e, t, o), w(t, n), s[i].m(n, null), (a = !0);
        },
        p(e, [a]) {
          let c = i;
          (i = l(e)),
            i === c
              ? s[i].p(e, a)
              : (fe(),
                ge(s[c], 1, 1, () => {
                  s[c] = null;
                }),
                me(),
                (o = s[i]),
                o ? o.p(e, a) : ((o = s[i] = r[i](e)), o.c()),
                ve(o, 1),
                o.m(n, null)),
            256 & a && B(t, "whatsappTheme", e[8]),
            512 & a && B(t, "roundedTheme", e[9]),
            1024 & a && B(t, "fullScreenMobile", e[10]);
        },
        i(e) {
          a || (ve(o), (a = !0));
        },
        o(e) {
          ge(o), (a = !1);
        },
        d(e) {
          e && y(t), s[i].d();
        },
      }
    );
  }
  function Zo(e, t, n) {
    let i, o, a;
    const r = K();
    let { faqs: s } = t,
      { activePerson: l } = t,
      { bgcolor: c } = t,
      { data: u } = t,
      d = null,
      p = !0,
      h = !1,
      f = !1;
    const m = [
      {
        id: "Return",
        name: "Returns",
        color: "#F2DFC4",
        icon: "https://widget.tochat.be/img/faq-icons/box.png",
      },
      {
        id: "Broken",
        name: "Broken",
        color: "#E8B5B0",
        icon: "https://widget.tochat.be/img/faq-icons/broken-heart.png",
      },
      {
        id: "Discount",
        name: "Returns",
        color: "#D9DBC3",
        icon: "https://widget.tochat.be/img/faq-icons/money-bag.png",
      },
      {
        id: "Delivery",
        name: "Returns",
        color: "#D7EEF6",
        icon: "https://widget.tochat.be/img/faq-icons/broken-heart.png",
      },
    ];
    return (
      (e.$$set = (e) => {
        "faqs" in e && n(0, (s = e.faqs)),
          "activePerson" in e && n(1, (l = e.activePerson)),
          "bgcolor" in e && n(2, (c = e.bgcolor)),
          "data" in e && n(3, (u = e.data));
      }),
      (e.$$.update = () => {
        8 & e.$$.dirty && n(8, (i = "whatsappTheme" === u.widgetTheme)),
          8 & e.$$.dirty &&
            n(
              9,
              (o =
                "roundedTheme" === u.widgetTheme ||
                "bubbleTheme" === u.widgetTheme)
            ),
          8 & e.$$.dirty && n(10, (a = u.expandFullScreenMobile));
      }),
      [
        s,
        l,
        c,
        u,
        d,
        p,
        h,
        f,
        i,
        o,
        a,
        r,
        (e, t) => {
          const n = ((e) => m.find((t) => t.id == e))(e);
          return n && n.hasOwnProperty(t) ? n[t] : "";
        },
        () => {
          n(7, (f = !1));
        },
        (e) => {
          n(6, (h = !1)),
            d === e.id
              ? (n(4, (d = null)), n(5, (p = !0)))
              : (n(4, (d = e.id)), n(5, (p = !1)));
        },
        () => {
          r("problem-solved");
        },
        () => {
          r("problem-not-solved");
        },
        () => {
          n(7, (f = !0)), r("leave-message");
        },
      ]
    );
  }
  class Wo extends qe {
    constructor(e) {
      var t;
      super(),
        document.getElementById("gcohtech-irfn4o-style") ||
          (((t = k("style")).id = "gcohtech-irfn4o-style"),
          (t.textContent =
            ".fullScreenMobile.gcohtech-irfn4o.gcohtech-irfn4o{display:flex;flex-direction:column;justify-content:flex-end;height:100%}.faqs.gcohtech-irfn4o.gcohtech-irfn4o{max-height:320px;overflow-y:auto;padding:10px;color:#5c5b5b;background:white}.fullScreenMobile.gcohtech-irfn4o .faqs.gcohtech-irfn4o{padding:10px 20px;height:80%;display:flex;flex-direction:column;justify-content:flex-end;max-height:unset}.title.gcohtech-irfn4o.gcohtech-irfn4o{font-size:16px;font-weight:bold;padding:5px 5px 0px 5px}.faqs-content.gcohtech-irfn4o.gcohtech-irfn4o{padding:5px 5px;overflow-y:auto;max-height:150px}.fullScreenMobile.gcohtech-irfn4o .faqs-content.gcohtech-irfn4o{max-height:300px}.button.gcohtech-irfn4o.gcohtech-irfn4o{width:100%;text-align:center;padding:10px;box-sizing:border-box;border-radius:5px;margin-bottom:10px;cursor:pointer;height:45px;box-shadow:none;font-size:16px;letter-spacing:0;font-weight:500;line-height:inherit;text-transform:none}.my-buttons.gcohtech-irfn4o.gcohtech-irfn4o{padding-top:10px;z-index:1000;position:relative}.my-buttons.gcohtech-irfn4o .whatsapp-button.gcohtech-irfn4o{color:white;display:flex;align-items:center;justify-content:center;flex:1;padding:6px}.my-buttons.gcohtech-irfn4o .whatsapp-button span.gcohtech-irfn4o{color:white}.whatsappTheme.fullScreenMobile.gcohtech-irfn4o .my-buttons.gcohtech-irfn4o{background-image:url('https://services.tochat.be/img/bk-wa.png')}.chatwith-img.gcohtech-irfn4o.gcohtech-irfn4o{height:25px;width:25px;display:block}.closeit.gcohtech-irfn4o.gcohtech-irfn4o{text-align:right;cursor:pointer}.faqs-shortcuts.gcohtech-irfn4o.gcohtech-irfn4o{display:flex;flex-direction:row;align-items:center;flex-wrap:wrap;padding-top:5px}.faq-shortcut.gcohtech-irfn4o.gcohtech-irfn4o{border-radius:10px;margin:2.5px;display:block;padding:10px 10px 12px 10px;text-decoration:none;font-size:16px;text-transform:capitalize;text-align:center;color:#010101;cursor:pointer}.sml-ico.gcohtech-irfn4o.gcohtech-irfn4o{width:auto;height:15px;vertical-align:text-bottom}.whatsappTheme.gcohtech-irfn4o div.gcohtech-irfn4o::-webkit-scrollbar{background:#B8B6B5;width:10px}.whatsappTheme.gcohtech-irfn4o div.gcohtech-irfn4o::-webkit-scrollbar-thumb{background:#5d5c5c}.whatsappTheme.gcohtech-irfn4o>.faqs.gcohtech-irfn4o{background-image:url('https://services.tochat.be/img/bk-wa.png')}.roundedTheme.gcohtech-irfn4o .button.gcohtech-irfn4o{border-radius:40px}"),
          w(document.head, t)),
        Ne(this, e, Zo, Go, s, {
          faqs: 0,
          activePerson: 1,
          bgcolor: 2,
          data: 3,
        });
    }
  }
  function Ko(t) {
    let n,
      i,
      o = !0 !== t[4] && Yo(t),
      a = (!1 === t[7] || !1 === t[3]) && Xo(t);
    return {
      c() {
        (n = k("div")),
          o && o.c(),
          (i = T()),
          a && a.c(),
          q(n, "class", "faq gcohtech-i8c0d9"),
          q(n, "aria-expanded", t[7]),
          B(n, "whatsappTheme", t[8]),
          B(n, "bottomBorder", t[5]),
          B(n, "fullScreenMobile", t[6]);
      },
      m(e, t) {
        b(e, n, t), o && o.m(n, null), w(n, i), a && a.m(n, null);
      },
      p(e, t) {
        !0 !== e[4]
          ? o
            ? o.p(e, t)
            : ((o = Yo(e)), o.c(), o.m(n, i))
          : o && (o.d(1), (o = null)),
          !1 === e[7] || !1 === e[3]
            ? a
              ? (a.p(e, t), 136 & t && ve(a, 1))
              : ((a = Xo(e)), a.c(), ve(a, 1), a.m(n, null))
            : a && (a.d(1), (a = null)),
          128 & t && q(n, "aria-expanded", e[7]),
          256 & t && B(n, "whatsappTheme", e[8]),
          32 & t && B(n, "bottomBorder", e[5]),
          64 & t && B(n, "fullScreenMobile", e[6]);
      },
      i(e) {
        ve(a);
      },
      o: e,
      d(e) {
        e && y(n), o && o.d(), a && a.d();
      },
    };
  }
  function Yo(e) {
    let t,
      n,
      i,
      o,
      a,
      r,
      s,
      l,
      c = e[1].question + "";
    return {
      c() {
        (t = k("div")),
          (n = k("div")),
          (i = $(c)),
          (o = T()),
          (a = C("svg")),
          (r = C("path")),
          z(n, "color", e[0]),
          q(n, "class", "chatwith-question-text gcohtech-i8c0d9"),
          q(r, "d", "M9 5l7 7-7 7"),
          q(a, "width", "15"),
          q(a, "height", "15"),
          q(a, "fill", "none"),
          q(a, "stroke-linecap", "round"),
          q(a, "stroke-linejoin", "round"),
          q(a, "stroke-width", "2"),
          q(a, "viewBox", "0 0 24 24"),
          q(a, "stroke", "currentColor"),
          q(a, "class", "gcohtech-i8c0d9"),
          z(t, "color", e[0]),
          q(t, "class", "chatwith-question gcohtech-i8c0d9");
      },
      m(c, u) {
        b(c, t, u),
          w(t, n),
          w(n, i),
          w(t, o),
          w(t, a),
          w(a, r),
          s || ((l = S(t, "click", e[11])), (s = !0));
      },
      p(e, o) {
        2 & o && c !== (c = e[1].question + "") && M(i, c),
          1 & o && z(n, "color", e[0]),
          1 & o && z(t, "color", e[0]);
      },
      d(e) {
        e && y(t), (s = !1), l();
      },
    };
  }
  function Xo(t) {
    let n,
      i,
      o = t[1].answer + "";
    return {
      c() {
        (n = k("div")), q(n, "class", "chatwith-answer gcohtech-i8c0d9");
      },
      m(e, t) {
        b(e, n, t), (n.innerHTML = o);
      },
      p(e, t) {
        2 & t && o !== (o = e[1].answer + "") && (n.innerHTML = o);
      },
      i(e) {
        i ||
          ie(() => {
            (i = be(n, Me, {})), i.start();
          });
      },
      o: e,
      d(e) {
        e && y(n);
      },
    };
  }
  function Jo(t) {
    let n,
      i = !0 === t[2] && Ko(t);
    return {
      c() {
        i && i.c(), (n = I());
      },
      m(e, t) {
        i && i.m(e, t), b(e, n, t);
      },
      p(e, [t]) {
        !0 === e[2]
          ? i
            ? (i.p(e, t), 4 & t && ve(i, 1))
            : ((i = Ko(e)), i.c(), ve(i, 1), i.m(n.parentNode, n))
          : i && (i.d(1), (i = null));
      },
      i(e) {
        ve(i);
      },
      o: e,
      d(e) {
        i && i.d(e), e && y(n);
      },
    };
  }
  function Qo(e, t, n) {
    let i,
      { faq: o } = t,
      { bgcolor: a } = t,
      { activeFaq: r } = t,
      { allowToggle: s } = t,
      { noQuestion: l } = t,
      { bottomBorder: c } = t,
      { widgetTheme: u } = t,
      { fullScreenMobile: d } = t,
      p = !0;
    const h = () => {
      !0 === s && n(7, (p = !p));
    };
    a = "#000";
    return (
      (e.$$set = (e) => {
        "faq" in e && n(1, (o = e.faq)),
          "bgcolor" in e && n(0, (a = e.bgcolor)),
          "activeFaq" in e && n(2, (r = e.activeFaq)),
          "allowToggle" in e && n(3, (s = e.allowToggle)),
          "noQuestion" in e && n(4, (l = e.noQuestion)),
          "bottomBorder" in e && n(5, (c = e.bottomBorder)),
          "widgetTheme" in e && n(10, (u = e.widgetTheme)),
          "fullScreenMobile" in e && n(6, (d = e.fullScreenMobile));
      }),
      (e.$$.update = () => {
        1024 & e.$$.dirty && n(8, (i = "whatsappTheme" === u));
      }),
      [a, o, r, s, l, c, d, p, i, h, u, () => h()]
    );
  }
  class ea extends qe {
    constructor(e) {
      var t;
      super(),
        document.getElementById("gcohtech-i8c0d9-style") ||
          (((t = k("style")).id = "gcohtech-i8c0d9-style"),
          (t.textContent =
            ".faq.gcohtech-i8c0d9.gcohtech-i8c0d9{padding:5px 0px 5px 5px}.fullScreenMobile.faq.gcohtech-i8c0d9.gcohtech-i8c0d9{padding:8px 0px 8px 5px}.chatwith-question.gcohtech-i8c0d9.gcohtech-i8c0d9{font-weight:bold;font-size:14px;display:flex;align-items:center;justify-content:space-between;padding-bottom:5px}.chatwith-question-text.gcohtech-i8c0d9.gcohtech-i8c0d9{overflow-wrap:break-word;width:180px;min-width:180px}.chatwith-answer.gcohtech-i8c0d9.gcohtech-i8c0d9{max-width:240px;font-size:13px !important}.bottomBorder.gcohtech-i8c0d9.gcohtech-i8c0d9{border-bottom:#efefef 1px solid}.whatsappTheme.bottomBorder.gcohtech-i8c0d9.gcohtech-i8c0d9{border-color:#888}.chatwith-answer p{margin-top:5px;margin-bottom:5px;color:#444847}.chatwith-answer strong{color:#444847}svg.gcohtech-i8c0d9.gcohtech-i8c0d9{transition:transform 0.2s ease-in;color:#01010161;margin-left:20px}[aria-expanded=false].gcohtech-i8c0d9 svg.gcohtech-i8c0d9{transform:rotate(0.25turn)}"),
          w(document.head, t)),
        Ne(this, e, Qo, Jo, s, {
          faq: 1,
          bgcolor: 0,
          activeFaq: 2,
          allowToggle: 3,
          noQuestion: 4,
          bottomBorder: 5,
          widgetTheme: 10,
          fullScreenMobile: 6,
        });
    }
  }
  function ta(e, t, n) {
    const i = e.slice();
    return (i[22] = t[n]), (i[24] = n), i;
  }
  function na(e, t, n) {
    const i = e.slice();
    return (i[22] = t[n]), (i[24] = n), i;
  }
  function ia(e) {
    let t,
      n,
      i,
      o,
      a,
      r,
      s,
      l,
      c,
      u,
      d = (e[0].title ?? "FAQs") + "",
      p = e[0].faqs,
      h = [];
    for (let t = 0; t < p.length; t += 1) h[t] = la(na(e, p, t));
    let f = e[0].faqs,
      m = [];
    for (let t = 0; t < f.length; t += 1) m[t] = da(ta(e, f, t));
    const v = (e) =>
      ge(m[e], 1, 1, () => {
        m[e] = null;
      });
    let g = "bigperson" !== e[3].widgetType && pa(e);
    function C(e, t) {
      return !0 === e[1].online
        ? va
        : "bigperson" !== e[3].widgetType
        ? ma
        : void 0;
    }
    let I = C(e),
      S = I && I(e);
    return {
      c() {
        (t = k("div")), (n = $(d)), (i = T()), (o = k("div"));
        for (let e = 0; e < h.length; e += 1) h[e].c();
        (a = T()), (r = k("div"));
        for (let e = 0; e < m.length; e += 1) m[e].c();
        (s = T()),
          (l = k("div")),
          g && g.c(),
          (c = T()),
          S && S.c(),
          q(t, "class", "faqs-title gcohtech-1mdj05"),
          q(o, "class", "faqs-shortcuts gcohtech-1mdj05"),
          q(r, "class", "faqs-content gcohtech-1mdj05"),
          (r.hidden = e[8]),
          q(l, "class", "my-buttons gcohtech-1mdj05");
      },
      m(e, d) {
        b(e, t, d), w(t, n), b(e, i, d), b(e, o, d);
        for (let e = 0; e < h.length; e += 1) h[e].m(o, null);
        b(e, a, d), b(e, r, d);
        for (let e = 0; e < m.length; e += 1) m[e].m(r, null);
        b(e, s, d),
          b(e, l, d),
          g && g.m(l, null),
          w(l, c),
          S && S.m(l, null),
          (u = !0);
      },
      p(e, t) {
        if (
          ((!u || 1 & t) && d !== (d = (e[0].title ?? "FAQs") + "") && M(n, d),
          8305 & t)
        ) {
          let n;
          for (p = e[0].faqs, n = 0; n < p.length; n += 1) {
            const i = na(e, p, n);
            h[n] ? h[n].p(i, t) : ((h[n] = la(i)), h[n].c(), h[n].m(o, null));
          }
          for (; n < h.length; n += 1) h[n].d(1);
          h.length = p.length;
        }
        if (18557 & t) {
          let n;
          for (f = e[0].faqs, n = 0; n < f.length; n += 1) {
            const i = ta(e, f, n);
            m[n]
              ? (m[n].p(i, t), ve(m[n], 1))
              : ((m[n] = da(i)), m[n].c(), ve(m[n], 1), m[n].m(r, null));
          }
          for (fe(), n = f.length; n < m.length; n += 1) v(n);
          me();
        }
        (!u || 256 & t) && (r.hidden = e[8]),
          "bigperson" !== e[3].widgetType
            ? g
              ? g.p(e, t)
              : ((g = pa(e)), g.c(), g.m(l, c))
            : g && (g.d(1), (g = null)),
          I === (I = C(e)) && S
            ? S.p(e, t)
            : (S && S.d(1), (S = I && I(e)), S && (S.c(), S.m(l, null)));
      },
      i(e) {
        if (!u) {
          for (let e = 0; e < f.length; e += 1) ve(m[e]);
          u = !0;
        }
      },
      o(e) {
        m = m.filter(Boolean);
        for (let e = 0; e < m.length; e += 1) ge(m[e]);
        u = !1;
      },
      d(e) {
        e && y(t),
          e && y(i),
          e && y(o),
          x(h, e),
          e && y(a),
          e && y(r),
          x(m, e),
          e && y(s),
          e && y(l),
          g && g.d(),
          S && S.d();
      },
    };
  }
  function oa(e) {
    let t, n, i, o, a, r, s, l;
    return (
      (a = new So({ props: { data: e[3], person: e[1], bgcolor: e[2] } })),
      {
        c() {
          (t = k("div")),
            (n = C("svg")),
            (i = C("path")),
            (o = T()),
            Te(a.$$.fragment),
            q(i, "fill", "#333"),
            q(
              i,
              "d",
              "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
            ),
            q(n, "aria-hidden", "true"),
            q(n, "focusable", "false"),
            q(n, "data-icon", "times"),
            q(n, "role", "img"),
            q(n, "xmlns", "http://www.w3.org/2000/svg"),
            q(n, "viewBox", "0 0 352 512"),
            q(n, "class", "gcohtech-1mdj05"),
            q(t, "class", "closeit gcohtech-1mdj05");
        },
        m(c, u) {
          b(c, t, u),
            w(t, n),
            w(n, i),
            b(c, o, u),
            Ie(a, c, u),
            (r = !0),
            s || ((l = S(n, "click", e[15])), (s = !0));
        },
        p(e, t) {
          const n = {};
          8 & t && (n.data = e[3]),
            2 & t && (n.person = e[1]),
            4 & t && (n.bgcolor = e[2]),
            a.$set(n);
        },
        i(e) {
          r || (ve(a.$$.fragment, e), (r = !0));
        },
        o(e) {
          ge(a.$$.fragment, e), (r = !1);
        },
        d(e) {
          e && y(t), e && y(o), Se(a, e), (s = !1), l();
        },
      }
    );
  }
  function aa(e) {
    let t, n, i, o, a, r, s, l;
    function c(e, t) {
      return e[22].translateShortCut ? sa : ra;
    }
    let u = c(e),
      d = u(e);
    function p() {
      return e[16](e[22]);
    }
    return {
      c() {
        (t = k("span")),
          d.c(),
          (n = T()),
          (i = k("img")),
          (r = T()),
          q(i, "class", "sml-ico gcohtech-1mdj05"),
          q(i, "alt", (o = e[22].shortcutName)),
          i.src !== (a = e[13](e[22].shortcutName, "icon")) && q(i, "src", a),
          q(t, "class", "faq-shortcut gcohtech-1mdj05");
      },
      m(e, o) {
        b(e, t, o),
          d.m(t, null),
          w(t, n),
          w(t, i),
          w(t, r),
          s || ((l = S(t, "click", p)), (s = !0));
      },
      p(r, s) {
        u === (u = c((e = r))) && d
          ? d.p(e, s)
          : (d.d(1), (d = u(e)), d && (d.c(), d.m(t, n))),
          1 & s && o !== (o = e[22].shortcutName) && q(i, "alt", o),
          1 & s &&
            i.src !== (a = e[13](e[22].shortcutName, "icon")) &&
            q(i, "src", a);
      },
      d(e) {
        e && y(t), d.d(), (s = !1), l();
      },
    };
  }
  function ra(e) {
    let t,
      n = e[22].shortcutName + "";
    return {
      c() {
        t = $(n);
      },
      m(e, n) {
        b(e, t, n);
      },
      p(e, i) {
        1 & i && n !== (n = e[22].shortcutName + "") && M(t, n);
      },
      d(e) {
        e && y(t);
      },
    };
  }
  function sa(e) {
    let t,
      n = e[22].translateShortCut + "";
    return {
      c() {
        t = $(n);
      },
      m(e, n) {
        b(e, t, n);
      },
      p(e, i) {
        1 & i && n !== (n = e[22].translateShortCut + "") && M(t, n);
      },
      d(e) {
        e && y(t);
      },
    };
  }
  function la(e) {
    let t,
      n = null !== e[22].shortcutName && aa(e);
    return {
      c() {
        n && n.c(), (t = I());
      },
      m(e, i) {
        n && n.m(e, i), b(e, t, i);
      },
      p(e, i) {
        null !== e[22].shortcutName
          ? n
            ? n.p(e, i)
            : ((n = aa(e)), n.c(), n.m(t.parentNode, t))
          : n && (n.d(1), (n = null));
      },
      d(e) {
        n && n.d(e), e && y(t);
      },
    };
  }
  function ca(e) {
    let t, n;
    return (
      (t = new ea({
        props: {
          activeFaq: !0,
          bgcolor: e[2],
          faq: e[22],
          allowToggle: !0,
          bottomBorder: e[14](e[24]),
          widgetTheme: e[3].widgetTheme,
          fullScreenMobile: e[11],
        },
      })),
      {
        c() {
          Te(t.$$.fragment);
        },
        m(e, i) {
          Ie(t, e, i), (n = !0);
        },
        p(e, n) {
          const i = {};
          4 & n && (i.bgcolor = e[2]),
            1 & n && (i.faq = e[22]),
            8 & n && (i.widgetTheme = e[3].widgetTheme),
            2048 & n && (i.fullScreenMobile = e[11]),
            t.$set(i);
        },
        i(e) {
          n || (ve(t.$$.fragment, e), (n = !0));
        },
        o(e) {
          ge(t.$$.fragment, e), (n = !1);
        },
        d(e) {
          Se(t, e);
        },
      }
    );
  }
  function ua(e) {
    let t, n;
    return (
      (t = new ea({
        props: {
          activeFaq: (e[4] === e[22].id && !1 === e[5]) || e[6],
          bgcolor: e[2],
          faq: e[22],
          allowToggle: !1,
          noQuestion: !0,
          widgetTheme: e[3].widgetTheme,
          fullScreenMobile: e[11],
        },
      })),
      {
        c() {
          Te(t.$$.fragment);
        },
        m(e, i) {
          Ie(t, e, i), (n = !0);
        },
        p(e, n) {
          const i = {};
          113 & n && (i.activeFaq = (e[4] === e[22].id && !1 === e[5]) || e[6]),
            4 & n && (i.bgcolor = e[2]),
            1 & n && (i.faq = e[22]),
            8 & n && (i.widgetTheme = e[3].widgetTheme),
            2048 & n && (i.fullScreenMobile = e[11]),
            t.$set(i);
        },
        i(e) {
          n || (ve(t.$$.fragment, e), (n = !0));
        },
        o(e) {
          ge(t.$$.fragment, e), (n = !1);
        },
        d(e) {
          Se(t, e);
        },
      }
    );
  }
  function da(e) {
    let t, n, i, o;
    const a = [ua, ca],
      r = [];
    function s(e, t) {
      return e[22].shortcutName ? 0 : 1;
    }
    return (
      (t = s(e)),
      (n = r[t] = a[t](e)),
      {
        c() {
          n.c(), (i = I());
        },
        m(e, n) {
          r[t].m(e, n), b(e, i, n), (o = !0);
        },
        p(e, o) {
          let l = t;
          (t = s(e)),
            t === l
              ? r[t].p(e, o)
              : (fe(),
                ge(r[l], 1, 1, () => {
                  r[l] = null;
                }),
                me(),
                (n = r[t]),
                n ? n.p(e, o) : ((n = r[t] = a[t](e)), n.c()),
                ve(n, 1),
                n.m(i.parentNode, i));
        },
        i(e) {
          o || (ve(n), (o = !0));
        },
        o(e) {
          ge(n), (o = !1);
        },
        d(e) {
          r[t].d(e), e && y(i);
        },
      }
    );
  }
  function pa(e) {
    let t, n, i;
    function o(e, t) {
      return e[0].solvedButton ? fa : ha;
    }
    let a = o(e),
      r = a(e);
    return {
      c() {
        (t = k("div")),
          r.c(),
          q(t, "class", "button help-button gcohtech-1mdj05");
      },
      m(o, a) {
        b(o, t, a), r.m(t, null), n || ((i = S(t, "click", e[17])), (n = !0));
      },
      p(e, n) {
        a === (a = o(e)) && r
          ? r.p(e, n)
          : (r.d(1), (r = a(e)), r && (r.c(), r.m(t, null)));
      },
      d(e) {
        e && y(t), r.d(), (n = !1), i();
      },
    };
  }
  function ha(t) {
    let n;
    return {
      c() {
        n = $("More help?");
      },
      m(e, t) {
        b(e, n, t);
      },
      p: e,
      d(e) {
        e && y(n);
      },
    };
  }
  function fa(e) {
    let t,
      n = e[0].solvedButton + "";
    return {
      c() {
        t = $(n);
      },
      m(e, n) {
        b(e, t, n);
      },
      p(e, i) {
        1 & i && n !== (n = e[0].solvedButton + "") && M(t, n);
      },
      d(e) {
        e && y(t);
      },
    };
  }
  function ma(e) {
    let t, n, i;
    function o(e, t) {
      return e[3].leaveMessage ? wa : ga;
    }
    let a = o(e),
      r = a(e);
    return {
      c() {
        (t = k("div")),
          r.c(),
          z(t, "background", e[2]),
          z(t, "color", "white"),
          q(t, "class", "button gcohtech-1mdj05");
      },
      m(o, a) {
        b(o, t, a), r.m(t, null), n || ((i = S(t, "click", e[19])), (n = !0));
      },
      p(e, n) {
        a === (a = o(e)) && r
          ? r.p(e, n)
          : (r.d(1), (r = a(e)), r && (r.c(), r.m(t, null))),
          4 & n && z(t, "background", e[2]);
      },
      d(e) {
        e && y(t), r.d(), (n = !1), i();
      },
    };
  }
  function va(e) {
    let t, n, i, o, a, r, s;
    return {
      c() {
        (t = k("div")),
          (n = k("span")),
          (n.textContent = "WhatsApp"),
          (i = T()),
          (o = k("img")),
          q(n, "class", "gcohtech-1mdj05"),
          q(o, "class", "chatwith-img gcohtech-1mdj05"),
          q(o, "alt", "tochat-whatsapp"),
          o.src !==
            (a =
              e[3].whatsappIconUrl ?? "https://widget.tochat.be/icon-1.png") &&
            q(o, "src", a),
          z(t, "background", e[2]),
          q(t, "class", "button whatsapp-button gcohtech-1mdj05");
      },
      m(a, l) {
        b(a, t, l),
          w(t, n),
          w(t, i),
          w(t, o),
          r || ((s = S(t, "click", e[18])), (r = !0));
      },
      p(e, n) {
        8 & n &&
          o.src !==
            (a =
              e[3].whatsappIconUrl ?? "https://widget.tochat.be/icon-1.png") &&
          q(o, "src", a),
          4 & n && z(t, "background", e[2]);
      },
      d(e) {
        e && y(t), (r = !1), s();
      },
    };
  }
  function ga(t) {
    let n;
    return {
      c() {
        n = $("Leave a message");
      },
      m(e, t) {
        b(e, n, t);
      },
      p: e,
      d(e) {
        e && y(n);
      },
    };
  }
  function wa(e) {
    let t,
      n = e[3].leaveMessage + "";
    return {
      c() {
        t = $(n);
      },
      m(e, n) {
        b(e, t, n);
      },
      p(e, i) {
        8 & i && n !== (n = e[3].leaveMessage + "") && M(t, n);
      },
      d(e) {
        e && y(t);
      },
    };
  }
  function ba(e) {
    let t, n, i, o, a, r;
    const s = [oa, ia],
      l = [];
    function c(e, t) {
      return !0 === e[7] ? 0 : 1;
    }
    return (
      (i = c(e)),
      (o = l[i] = s[i](e)),
      {
        c() {
          (t = k("div")),
            (n = k("div")),
            o.c(),
            q(n, "class", "faqs gcohtech-1mdj05"),
            q(
              n,
              "style",
              (a = !e[3].expandFullScreenMobile && "max-height: 350px;")
            ),
            q(t, "class", "gcohtech-1mdj05"),
            B(t, "whatsappTheme", e[9]),
            B(t, "roundedTheme", e[10]),
            B(t, "fullScreenMobile", e[11]);
        },
        m(e, o) {
          b(e, t, o), w(t, n), l[i].m(n, null), (r = !0);
        },
        p(e, [u]) {
          let d = i;
          (i = c(e)),
            i === d
              ? l[i].p(e, u)
              : (fe(),
                ge(l[d], 1, 1, () => {
                  l[d] = null;
                }),
                me(),
                (o = l[i]),
                o ? o.p(e, u) : ((o = l[i] = s[i](e)), o.c()),
                ve(o, 1),
                o.m(n, null)),
            (!r ||
              (8 & u &&
                a !==
                  (a =
                    !e[3].expandFullScreenMobile && "max-height: 350px;"))) &&
              q(n, "style", a),
            512 & u && B(t, "whatsappTheme", e[9]),
            1024 & u && B(t, "roundedTheme", e[10]),
            2048 & u && B(t, "fullScreenMobile", e[11]);
        },
        i(e) {
          r || (ve(o), (r = !0));
        },
        o(e) {
          ge(o), (r = !1);
        },
        d(e) {
          e && y(t), l[i].d();
        },
      }
    );
  }
  function ya(e, t, n) {
    let i, o, a;
    const r = K();
    let { faqs: s } = t,
      { activePerson: l } = t,
      { bgcolor: c } = t,
      { data: u } = t,
      d = null,
      p = !0,
      h = !1,
      f = !1,
      m = !0;
    const v = [
      {
        id: "Return",
        name: "Returns",
        color: "#F2DFC4",
        icon: "https://widget.tochat.be/img/faq-icons/box.png",
      },
      {
        id: "Broken",
        name: "Broken",
        color: "#E8B5B0",
        icon: "https://widget.tochat.be/img/faq-icons/broken-heart.png",
      },
      {
        id: "Discount",
        name: "Returns",
        color: "#D9DBC3",
        icon: "https://widget.tochat.be/img/faq-icons/money-bag.png",
      },
      {
        id: "Delivery",
        name: "Returns",
        color: "#D7EEF6",
        icon: "https://widget.tochat.be/img/faq-icons/broken-heart.png",
      },
    ];
    return (
      (e.$$set = (e) => {
        "faqs" in e && n(0, (s = e.faqs)),
          "activePerson" in e && n(1, (l = e.activePerson)),
          "bgcolor" in e && n(2, (c = e.bgcolor)),
          "data" in e && n(3, (u = e.data));
      }),
      (e.$$.update = () => {
        8 & e.$$.dirty && n(9, (i = "whatsappTheme" === u.widgetTheme)),
          8 & e.$$.dirty &&
            n(
              10,
              (o =
                "roundedTheme" === u.widgetTheme ||
                "bubbleTheme" === u.widgetTheme)
            ),
          8 & e.$$.dirty && n(11, (a = u.expandFullScreenMobile)),
          17 & e.$$.dirty &&
            (null != d || s.faqs.filter((e) => !e.shortcutName).length > 0) &&
            n(8, (m = !1));
      }),
      [
        s,
        l,
        c,
        u,
        d,
        p,
        h,
        f,
        m,
        i,
        o,
        a,
        r,
        (e, t) => {
          const n = ((e) => v.find((t) => t.id == e))(e);
          return n && n.hasOwnProperty(t) ? n[t] : "";
        },
        function (e) {
          return e < s.faqs.length - 1;
        },
        () => {
          n(7, (f = !1));
        },
        (e) => {
          n(6, (h = !1)), n(4, (d = e.id)), n(5, (p = !1));
        },
        () => {
          r("problem-solved");
        },
        () => {
          r("problem-not-solved");
        },
        () => {
          n(7, (f = !0)), r("leave-message");
        },
      ]
    );
  }
  class xa extends qe {
    constructor(e) {
      var t;
      super(),
        document.getElementById("gcohtech-1mdj05-style") ||
          (((t = k("style")).id = "gcohtech-1mdj05-style"),
          (t.textContent =
            ".fullScreenMobile.gcohtech-1mdj05.gcohtech-1mdj05{display:flex;flex-direction:column;justify-content:flex-end;height:100%}.faqs.gcohtech-1mdj05.gcohtech-1mdj05{overflow-y:auto;padding:10px;background:white;color:#5c5b5b}.fullScreenMobile.gcohtech-1mdj05 .faqs.gcohtech-1mdj05{padding:10px 20px;height:100%;display:flex;flex-direction:column;justify-content:flex-end}.faqs.gcohtech-1mdj05 svg.gcohtech-1mdj05{width:15px}.faqs-content.gcohtech-1mdj05.gcohtech-1mdj05{padding:5px 5px;border:#efefef 1px solid;border-radius:5px;cursor:pointer;overflow-y:auto;max-height:130px}.fullScreenMobile.gcohtech-1mdj05 .faqs-content.gcohtech-1mdj05{max-height:400px;margin-top:10px;border:1px solid #888}.whatsappTheme.gcohtech-1mdj05 .faqs-content.gcohtech-1mdj05{border-color:#888}.closeit.gcohtech-1mdj05.gcohtech-1mdj05{text-align:right;cursor:pointer}.faqs-title.gcohtech-1mdj05.gcohtech-1mdj05{color:#444847;font-size:15px;font-weight:bold;margin-bottom:10px;padding:8px;border-bottom-left-radius:10px;border-bottom-right-radius:10px;border-top-right-radius:10px}.faqs-shortcuts.gcohtech-1mdj05.gcohtech-1mdj05{display:flex;flex-direction:row;align-items:center;flex-wrap:wrap;justify-content:space-evenly}.faq-shortcut.gcohtech-1mdj05.gcohtech-1mdj05:hover{box-shadow:0 8px 16px 0 rgba(0,0,0,0.2)}.faq-shortcut.gcohtech-1mdj05.gcohtech-1mdj05{border-radius:10px;margin:2.5px;display:block;padding:8px 10px 8px 10px;text-decoration:none;font-size:12px;text-transform:capitalize;text-align:center;color:#444847;cursor:pointer;box-shadow:0 2px 8px 0 rgba(0,0,0,0.2);transition:0.3s}.sml-ico.gcohtech-1mdj05.gcohtech-1mdj05{width:auto;height:15px;vertical-align:text-bottom}.chatwith-img.gcohtech-1mdj05.gcohtech-1mdj05{height:25px;width:25px;display:block}.button.gcohtech-1mdj05.gcohtech-1mdj05{width:100%;text-align:center;padding:10px;box-sizing:border-box;border-radius:5px;margin-top:10px;cursor:pointer;height:45px;box-shadow:none;font-size:16px;letter-spacing:0;font-weight:500;line-height:inherit;text-transform:none}.my-buttons.gcohtech-1mdj05.gcohtech-1mdj05{padding-top:10px;z-index:1000;position:relative;cursor:pointer}.whatsappTheme.fullScreenMobile.gcohtech-1mdj05 .my-buttons.gcohtech-1mdj05{background-image:url('https://services.tochat.be/img/bk-wa.png')}.my-buttons.gcohtech-1mdj05 .help-button.gcohtech-1mdj05{font-weight:bold;font-size:16px;color:black;text-align:center;border-radius:5px;border:2px solid black;background:white}.my-buttons.gcohtech-1mdj05 .whatsapp-button.gcohtech-1mdj05{color:white;display:flex;align-items:center;justify-content:center;flex:1;padding:6px}.my-buttons.gcohtech-1mdj05 .whatsapp-button span.gcohtech-1mdj05{color:white}.whatsappTheme.gcohtech-1mdj05 div.gcohtech-1mdj05::-webkit-scrollbar{background:#B8B6B5;width:10px}.whatsappTheme.gcohtech-1mdj05 div.gcohtech-1mdj05::-webkit-scrollbar-thumb{background:#5d5c5c}.whatsappTheme.gcohtech-1mdj05>.faqs.gcohtech-1mdj05{background-image:url('https://services.tochat.be/img/bk-wa.png')}.roundedTheme.gcohtech-1mdj05 .button.gcohtech-1mdj05{border-radius:40px}"),
          w(document.head, t)),
        Ne(this, e, ya, ba, s, {
          faqs: 0,
          activePerson: 1,
          bgcolor: 2,
          data: 3,
        });
    }
  }
  const { document: ka } = ke;
  function Ca(e, t, n) {
    const i = e.slice();
    return (i[18] = t[n]), (i[20] = n), i;
  }
  function $a(e, t, n) {
    const i = e.slice();
    return (i[21] = t[n]), (i[20] = n), i;
  }
  function Ta(e) {
    let t,
      n,
      i,
      o,
      a,
      r,
      s,
      l,
      c,
      u,
      d,
      p,
      h = [],
      f = new Map(),
      m = "bigperson" !== e[0].widgetType && Sa(e),
      v = e[2];
    const g = (e) => e[21].id;
    for (let t = 0; t < v.length; t += 1) {
      let n = $a(e, v, t),
        i = g(n);
      f.set(i, (h[t] = Da(i, n)));
    }
    let C = e[3],
      $ = [];
    for (let t = 0; t < C.length; t += 1) $[t] = Ma(Ca(e, C, t));
    const I = (e) =>
      ge($[e], 1, 1, () => {
        $[e] = null;
      });
    let S = e[2].length > 1 && Ua(e);
    return (
      (u = new oi({
        props: {
          hasBorder: "bigperson" === e[0].widgetType,
          color: e[0].color,
          widgetTheme: e[0].widgetTheme,
          fullScreenMobile: e[0].expandFullScreenMobile,
        },
      })),
      u.$on("message", e[11]),
      {
        c() {
          (t = k("div")), (n = k("div")), m && m.c(), (i = T()), (o = k("div"));
          for (let e = 0; e < h.length; e += 1) h[e].c();
          (a = T()), (r = k("div"));
          for (let e = 0; e < $.length; e += 1) $[e].c();
          (s = T()),
            S && S.c(),
            (l = T()),
            (c = k("div")),
            Te(u.$$.fragment),
            q(o, "class", "whatsapp-messages gcohtech-ff58yd"),
            q(o, "id", "messageBox"),
            q(r, "class", "whatsapp-faqs-content gcohtech-ff58yd"),
            z(r, "display", e[4] ? "block" : "none"),
            q(n, "class", "whatsapp-chat-content gcohtech-ff58yd"),
            q(
              c,
              "class",
              (d =
                "whatsapp-fix-to-bottom " +
                (e[2].length > 1 ? "" : "mt-65") +
                " gcohtech-ff58yd")
            ),
            q(t, "class", "whatsapp-chat-panel gcohtech-ff58yd");
        },
        m(e, d) {
          b(e, t, d), w(t, n), m && m.m(n, null), w(n, i), w(n, o);
          for (let e = 0; e < h.length; e += 1) h[e].m(o, null);
          w(n, a), w(n, r);
          for (let e = 0; e < $.length; e += 1) $[e].m(r, null);
          w(t, s),
            S && S.m(t, null),
            w(t, l),
            w(t, c),
            Ie(u, c, null),
            (p = !0);
        },
        p(e, a) {
          if (
            ("bigperson" !== e[0].widgetType
              ? m
                ? m.p(e, a)
                : ((m = Sa(e)), m.c(), m.m(n, i))
              : m && (m.d(1), (m = null)),
            5 & a &&
              ((v = e[2]),
              fe(),
              (h = (function (e, t, n, i, o, a, r, s, l, c, u, d) {
                let p = e.length,
                  h = a.length,
                  f = p;
                const m = {};
                for (; f--; ) m[e[f].key] = f;
                const v = [],
                  g = new Map(),
                  w = new Map();
                for (f = h; f--; ) {
                  const e = d(o, a, f),
                    s = n(e);
                  let l = r.get(s);
                  l ? i && l.p(e, t) : ((l = c(s, e)), l.c()),
                    g.set(s, (v[f] = l)),
                    s in m && w.set(s, Math.abs(f - m[s]));
                }
                const b = new Set(),
                  y = new Set();
                function x(e) {
                  ve(e, 1), e.m(s, u), r.set(e.key, e), (u = e.first), h--;
                }
                for (; p && h; ) {
                  const t = v[h - 1],
                    n = e[p - 1],
                    i = t.key,
                    o = n.key;
                  t === n
                    ? ((u = t.first), p--, h--)
                    : g.has(o)
                    ? !r.has(i) || b.has(i)
                      ? x(t)
                      : y.has(o)
                      ? p--
                      : w.get(i) > w.get(o)
                      ? (y.add(i), x(t))
                      : (b.add(o), p--)
                    : (l(n, r), p--);
                }
                for (; p--; ) {
                  const t = e[p];
                  g.has(t.key) || l(t, r);
                }
                for (; h; ) x(v[h - 1]);
                return v;
              })(h, a, g, 1, e, v, f, o, Ce, Da, null, $a)),
              me()),
            4105 & a)
          ) {
            let t;
            for (C = e[3], t = 0; t < C.length; t += 1) {
              const n = Ca(e, C, t);
              $[t]
                ? ($[t].p(n, a), ve($[t], 1))
                : (($[t] = Ma(n)), $[t].c(), ve($[t], 1), $[t].m(r, null));
            }
            for (fe(), t = C.length; t < $.length; t += 1) I(t);
            me();
          }
          (!p || 16 & a) && z(r, "display", e[4] ? "block" : "none"),
            e[2].length > 1
              ? S
                ? S.p(e, a)
                : ((S = Ua(e)), S.c(), S.m(t, l))
              : S && (S.d(1), (S = null));
          const s = {};
          1 & a && (s.hasBorder = "bigperson" === e[0].widgetType),
            1 & a && (s.color = e[0].color),
            1 & a && (s.widgetTheme = e[0].widgetTheme),
            1 & a && (s.fullScreenMobile = e[0].expandFullScreenMobile),
            u.$set(s),
            (!p ||
              (4 & a &&
                d !==
                  (d =
                    "whatsapp-fix-to-bottom " +
                    (e[2].length > 1 ? "" : "mt-65") +
                    " gcohtech-ff58yd"))) &&
              q(c, "class", d);
        },
        i(e) {
          if (!p) {
            for (let e = 0; e < v.length; e += 1) ve(h[e]);
            for (let e = 0; e < C.length; e += 1) ve($[e]);
            ve(u.$$.fragment, e), (p = !0);
          }
        },
        o(e) {
          for (let e = 0; e < h.length; e += 1) ge(h[e]);
          $ = $.filter(Boolean);
          for (let e = 0; e < $.length; e += 1) ge($[e]);
          ge(u.$$.fragment, e), (p = !1);
        },
        d(e) {
          e && y(t), m && m.d();
          for (let e = 0; e < h.length; e += 1) h[e].d();
          x($, e), S && S.d(), Se(u);
        },
      }
    );
  }
  function Ia(e) {
    let t, n, i, o, a, r, s, l, c;
    return (
      (r = new So({
        props: { data: e[0], person: e[1], bgcolor: e[0].color },
      })),
      {
        c() {
          (t = k("div")),
            (n = k("div")),
            (i = C("svg")),
            (o = C("path")),
            (a = T()),
            Te(r.$$.fragment),
            q(o, "fill", "#333"),
            q(
              o,
              "d",
              "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
            ),
            z(i, "width", "15px"),
            q(i, "aria-hidden", "true"),
            q(i, "focusable", "false"),
            q(i, "data-icon", "times"),
            q(i, "role", "img"),
            q(i, "xmlns", "http://www.w3.org/2000/svg"),
            q(i, "viewBox", "0 0 352 512"),
            q(i, "class", "gcohtech-ff58yd"),
            q(n, "class", "closeit gcohtech-ff58yd"),
            q(t, "class", "leavemessage gcohtech-ff58yd");
        },
        m(u, d) {
          b(u, t, d),
            w(t, n),
            w(n, i),
            w(i, o),
            w(t, a),
            Ie(r, t, null),
            (s = !0),
            l || ((c = S(i, "click", e[15])), (l = !0));
        },
        p(e, t) {
          const n = {};
          1 & t && (n.data = e[0]),
            2 & t && (n.person = e[1]),
            1 & t && (n.bgcolor = e[0].color),
            r.$set(n);
        },
        i(e) {
          s || (ve(r.$$.fragment, e), (s = !0));
        },
        o(e) {
          ge(r.$$.fragment, e), (s = !1);
        },
        d(e) {
          e && y(t), Se(r), (l = !1), c();
        },
      }
    );
  }
  function Sa(t) {
    let n, i, o;
    return {
      c() {
        (n = k("div")),
          (n.innerHTML =
            '<svg aria-hidden="true" focusable="false" data-icon="times" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512" class="gcohtech-ff58yd"><path fill="#333" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>'),
          q(n, "class", "close-chatwith gcohtech-ff58yd");
      },
      m(e, a) {
        b(e, n, a), i || ((o = S(n, "click", t[13])), (i = !0));
      },
      p: e,
      d(e) {
        e && y(n), (i = !1), o();
      },
    };
  }
  function Na(e) {
    let t, n;
    return (
      (t = new xi({
        props: {
          widgetTheme: e[0].widgetTheme,
          text: e[21].botText,
          showDot: !0,
        },
      })),
      {
        c() {
          Te(t.$$.fragment);
        },
        m(e, i) {
          Ie(t, e, i), (n = !0);
        },
        p(e, n) {
          const i = {};
          1 & n && (i.widgetTheme = e[0].widgetTheme),
            4 & n && (i.text = e[21].botText),
            t.$set(i);
        },
        i(e) {
          n || (ve(t.$$.fragment, e), (n = !0));
        },
        o(e) {
          ge(t.$$.fragment, e), (n = !1);
        },
        d(e) {
          Se(t, e);
        },
      }
    );
  }
  function qa(e) {
    let t, n, i, o;
    return (
      (n = new $i({
        props: {
          widgetTheme: e[0].widgetTheme,
          bubbleData: { val: e[21].userText },
        },
      })),
      {
        c() {
          (t = k("div")),
            Te(n.$$.fragment),
            (i = T()),
            q(t, "class", "scale-in-right gcohtech-ff58yd");
        },
        m(e, a) {
          b(e, t, a), Ie(n, t, null), w(t, i), (o = !0);
        },
        p(e, t) {
          const i = {};
          1 & t && (i.widgetTheme = e[0].widgetTheme),
            4 & t && (i.bubbleData = { val: e[21].userText }),
            n.$set(i);
        },
        i(e) {
          o || (ve(n.$$.fragment, e), (o = !0));
        },
        o(e) {
          ge(n.$$.fragment, e), (o = !1);
        },
        d(e) {
          e && y(t), Se(n);
        },
      }
    );
  }
  function Da(e, t) {
    let n,
      i,
      o,
      a,
      r = "" !== t[21].botText && Na(t),
      s = "" !== t[21].userText && qa(t);
    return {
      key: e,
      first: null,
      c() {
        (n = k("div")),
          r && r.c(),
          (i = T()),
          s && s.c(),
          (o = I()),
          q(n, "class", "scale-in-left gcohtech-ff58yd"),
          (this.first = n);
      },
      m(e, t) {
        b(e, n, t),
          r && r.m(n, null),
          b(e, i, t),
          s && s.m(e, t),
          b(e, o, t),
          (a = !0);
      },
      p(e, i) {
        "" !== (t = e)[21].botText
          ? r
            ? (r.p(t, i), 4 & i && ve(r, 1))
            : ((r = Na(t)), r.c(), ve(r, 1), r.m(n, null))
          : r &&
            (fe(),
            ge(r, 1, 1, () => {
              r = null;
            }),
            me()),
          "" !== t[21].userText
            ? s
              ? (s.p(t, i), 4 & i && ve(s, 1))
              : ((s = qa(t)), s.c(), ve(s, 1), s.m(o.parentNode, o))
            : s &&
              (fe(),
              ge(s, 1, 1, () => {
                s = null;
              }),
              me());
      },
      i(e) {
        a || (ve(r), ve(s), (a = !0));
      },
      o(e) {
        ge(r), ge(s), (a = !1);
      },
      d(e) {
        e && y(n), r && r.d(), e && y(i), s && s.d(e), e && y(o);
      },
    };
  }
  function Ma(e) {
    let t, n, i, o;
    return (
      (n = new ea({
        props: {
          activeFaq: !0,
          color: e[0].color,
          faq: e[18],
          allowToggle: !0,
        },
      })),
      {
        c() {
          (t = k("div")),
            Te(n.$$.fragment),
            (i = T()),
            q(t, "class", d(e[12](e[20])) + " gcohtech-ff58yd");
        },
        m(e, a) {
          b(e, t, a), Ie(n, t, null), w(t, i), (o = !0);
        },
        p(e, t) {
          const i = {};
          1 & t && (i.color = e[0].color), 8 & t && (i.faq = e[18]), n.$set(i);
        },
        i(e) {
          o || (ve(n.$$.fragment, e), (o = !0));
        },
        o(e) {
          ge(n.$$.fragment, e), (o = !1);
        },
        d(e) {
          e && y(t), Se(n);
        },
      }
    );
  }
  function Ua(e) {
    let t;
    function n(e, t) {
      return !0 === e[1].online ? Aa : za;
    }
    let i = n(e),
      o = i(e);
    return {
      c() {
        (t = k("div")), o.c(), q(t, "class", "new-buttons gcohtech-ff58yd");
      },
      m(e, n) {
        b(e, t, n), o.m(t, null);
      },
      p(e, a) {
        i === (i = n(e)) && o
          ? o.p(e, a)
          : (o.d(1), (o = i(e)), o && (o.c(), o.m(t, null)));
      },
      d(e) {
        e && y(t), o.d();
      },
    };
  }
  function za(e) {
    let t, n, i;
    function o(e, t) {
      return e[0].leaveMessage ? La : Ea;
    }
    let a = o(e),
      r = a(e);
    return {
      c() {
        (t = k("div")),
          r.c(),
          z(t, "background", e[0].color),
          z(t, "color", "white"),
          q(t, "class", "button whatsapp-button gcohtech-ff58yd");
      },
      m(o, a) {
        b(o, t, a), r.m(t, null), n || ((i = S(t, "click", e[17])), (n = !0));
      },
      p(e, n) {
        a === (a = o(e)) && r
          ? r.p(e, n)
          : (r.d(1), (r = a(e)), r && (r.c(), r.m(t, null))),
          1 & n && z(t, "background", e[0].color);
      },
      d(e) {
        e && y(t), r.d(), (n = !1), i();
      },
    };
  }
  function Aa(e) {
    let t, n, i, o, a, r, s;
    return {
      c() {
        (t = k("div")),
          (n = k("img")),
          (o = T()),
          (a = k("span")),
          (a.textContent = "WhatsApp"),
          q(n, "class", "chatwith-img gcohtech-ff58yd"),
          q(n, "alt", "tochat-whatsapp"),
          n.src !== (i = "https://widget.tochat.be/icon-1.png") &&
            q(n, "src", "https://widget.tochat.be/icon-1.png"),
          z(t, "background", e[0].color),
          q(t, "class", "button whatsapp-button gcohtech-ff58yd");
      },
      m(i, l) {
        b(i, t, l),
          w(t, n),
          w(t, o),
          w(t, a),
          r || ((s = S(t, "click", e[16])), (r = !0));
      },
      p(e, n) {
        1 & n && z(t, "background", e[0].color);
      },
      d(e) {
        e && y(t), (r = !1), s();
      },
    };
  }
  function Ea(t) {
    let n;
    return {
      c() {
        n = $("Leave a message");
      },
      m(e, t) {
        b(e, n, t);
      },
      p: e,
      d(e) {
        e && y(n);
      },
    };
  }
  function La(e) {
    let t,
      n = e[0].leaveMessage + "";
    return {
      c() {
        t = $(n);
      },
      m(e, n) {
        b(e, t, n);
      },
      p(e, i) {
        1 & i && n !== (n = e[0].leaveMessage + "") && M(t, n);
      },
      d(e) {
        e && y(t);
      },
    };
  }
  function Oa(e) {
    let t, n, i, o;
    const a = [Ia, Ta],
      r = [];
    function s(e, t) {
      return !0 === e[5] ? 0 : 1;
    }
    return (
      (n = s(e)),
      (i = r[n] = a[n](e)),
      {
        c() {
          (t = k("div")),
            i.c(),
            q(t, "class", "gcohtech-ff58yd"),
            B(t, "whatsappTheme", e[6]),
            B(t, "roundedTheme", e[7]),
            B(t, "bubbleTheme", e[8]),
            B(t, "fullScreenMobile", e[9]);
        },
        m(e, i) {
          b(e, t, i), r[n].m(t, null), (o = !0);
        },
        p(e, [o]) {
          let l = n;
          (n = s(e)),
            n === l
              ? r[n].p(e, o)
              : (fe(),
                ge(r[l], 1, 1, () => {
                  r[l] = null;
                }),
                me(),
                (i = r[n]),
                i ? i.p(e, o) : ((i = r[n] = a[n](e)), i.c()),
                ve(i, 1),
                i.m(t, null)),
            64 & o && B(t, "whatsappTheme", e[6]),
            128 & o && B(t, "roundedTheme", e[7]),
            256 & o && B(t, "bubbleTheme", e[8]),
            512 & o && B(t, "fullScreenMobile", e[9]);
        },
        i(e) {
          o || (ve(i), (o = !0));
        },
        o(e) {
          ge(i), (o = !1);
        },
        d(e) {
          e && y(t), r[n].d();
        },
      }
    );
  }
  function ja(e, t, n) {
    let i,
      o,
      a,
      r,
      { data: s } = t,
      { activePerson: l } = t,
      { faqlevel: c } = t,
      u = [
        {
          id: 1,
          botText: s.faqsChatBotQuestionText ?? "Hello, how can I help you?",
          userText: "",
        },
      ],
      d = [],
      p = !1,
      h = !1;
    const f = K();
    return (
      (e.$$set = (e) => {
        "data" in e && n(0, (s = e.data)),
          "activePerson" in e && n(1, (l = e.activePerson)),
          "faqlevel" in e && n(14, (c = e.faqlevel));
      }),
      (e.$$.update = () => {
        1 & e.$$.dirty && n(6, (i = "whatsappTheme" === s.widgetTheme)),
          1 & e.$$.dirty && n(7, (o = "roundedTheme" === s.widgetTheme)),
          1 & e.$$.dirty && n(8, (a = "bubbleTheme" === s.widgetTheme)),
          1 & e.$$.dirty && n(9, (r = s.expandFullScreenMobile));
      }),
      [
        s,
        l,
        u,
        d,
        p,
        h,
        i,
        o,
        a,
        r,
        f,
        async function (e) {
          let t = document.getElementById("messageBox");
          if (((t.scrollTop = t.scrollHeight), "" == e.detail.trim())) return;
          let i = e.detail,
            o = { search: e.detail.trim() };
          "business" === c
            ? (o.business = s.id)
            : "whatsapp" === c && (o.whatsapp = l.id),
            await Fn.post("https://services.tochat.be/api/searchfaqs", o)
              .then((e) => {
                n(3, (d = e.data)),
                  d.length > 0 ? n(4, (p = !0)) : n(4, (p = !1));
              })
              .catch((e) => {
                console.log(e);
              }),
            n(2, (u[u.length - 1].userText = i), u),
            u.push({
              id: u.length + 1,
              botText: p
                ? ""
                : s.faqsChatBotNotSolvedText ??
                  "Sorry, I don't have an answer for that, what else can I help you with?",
              userText: "",
            }),
            setTimeout(() => {
              t.scrollTop = t.scrollHeight;
            }, 300),
            (t.scrollTop = t.scrollHeight);
        },
        function (e) {
          return e < d.length - 1 ? "bottom-border" : "";
        },
        function () {
          f("problem-solved");
        },
        c,
        () => {
          n(5, (h = !1));
        },
        () => {
          f("problem-not-solved");
        },
        () => {
          n(5, (h = !0)), f("leave-message");
        },
      ]
    );
  }
  class Ba extends qe {
    constructor(e) {
      var t;
      super(),
        ka.getElementById("gcohtech-ff58yd-style") ||
          (((t = k("style")).id = "gcohtech-ff58yd-style"),
          (t.textContent =
            ".fullScreenMobile.gcohtech-ff58yd.gcohtech-ff58yd{height:100%;display:flex;flex-direction:column}.fullScreenMobile.gcohtech-ff58yd .mt-65.gcohtech-ff58yd{margin-top:65px}.leavemessage.gcohtech-ff58yd.gcohtech-ff58yd{display:flex;flex-direction:column;justify-content:flex-end;padding:10px 20px;height:100%}.whatsappTheme.gcohtech-ff58yd div.gcohtech-ff58yd::-webkit-scrollbar{background:#B8B6B5;width:10px}.whatsappTheme.gcohtech-ff58yd div.gcohtech-ff58yd::-webkit-scrollbar-thumb{background:#5d5c5c}.whatsappTheme.gcohtech-ff58yd .whatsapp-chat-panel.gcohtech-ff58yd{background-image:url('https://services.tochat.be/img/bk-wa.png')}.fullScreenMobile.gcohtech-ff58yd .whatsapp-chat-panel.gcohtech-ff58yd{height:100%}.whatsapp-chat-content.gcohtech-ff58yd.gcohtech-ff58yd{height:calc(100% - 102px);overflow-y:auto}.bottom-border.gcohtech-ff58yd.gcohtech-ff58yd{margin-bottom:10px}.closeit.gcohtech-ff58yd.gcohtech-ff58yd{text-align:right}.whatsapp-faqs-content.gcohtech-ff58yd.gcohtech-ff58yd{padding:5px 5px;border:#efefef 1px solid;border-radius:5px;cursor:pointer;max-height:400px;overflow-y:auto}.whatsappTheme.gcohtech-ff58yd .whatsapp-faqs-content.gcohtech-ff58yd{border-color:#888}.whatsapp-chat-panel.gcohtech-ff58yd.gcohtech-ff58yd{min-height:200px;padding-top:5px;background:#f0f0f0;position:relative;overflow-y:auto;color:#5c5b5b}.whatsapp-chat-panel.gcohtech-ff58yd svg.gcohtech-ff58yd{width:12px}.whatsapp-fix-to-bottom.gcohtech-ff58yd.gcohtech-ff58yd{position:absolute;bottom:0;left:0;right:0}.fullScreenMobile.gcohtech-ff58yd .whatsapp-fix-to-bottom.gcohtech-ff58yd{position:relative}.bubbleTheme.gcohtech-ff58yd .whatsapp-fix-to-bottom.gcohtech-ff58yd{border-radius:50px}.new-buttons.gcohtech-ff58yd.gcohtech-ff58yd{margin-top:10px;padding:10px 10px 0;display:flex;align-items:center;cursor:pointer;margin-bottom:40px}.fullScreenMobile.gcohtech-ff58yd .new-buttons.gcohtech-ff58yd{margin-bottom:10px;padding:0px 5px}.new-buttons.gcohtech-ff58yd .button.gcohtech-ff58yd{text-align:center;padding:5px;box-sizing:border-box;border-radius:5px;min-height:45px}.roundedTheme.gcohtech-ff58yd .new-buttons .button.gcohtech-ff58yd,.bubbleTheme.gcohtech-ff58yd .new-buttons .button.gcohtech-ff58yd{border-radius:40px}.new-buttons.gcohtech-ff58yd .whatsapp-button.gcohtech-ff58yd{color:white;display:flex;align-items:center;justify-content:center;flex:1}.new-buttons.gcohtech-ff58yd .chatwith-img.gcohtech-ff58yd{height:25px;width:25px;display:block;margin-left:-3px;margin-bottom:3px}.whatsapp-messages.gcohtech-ff58yd.gcohtech-ff58yd{max-height:400px;overflow-y:auto}.fullScreenMobile.gcohtech-ff58yd .whatsapp-messages.gcohtech-ff58yd{max-height:calc(calc(100vh - 640px) + 200px)}.scale-in-left.gcohtech-ff58yd.gcohtech-ff58yd{-webkit-animation:gcohtech-ff58yd-scale-in-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;animation:gcohtech-ff58yd-scale-in-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;-webkit-animation-delay:1s;animation-delay:1s}@-webkit-keyframes gcohtech-ff58yd-scale-in-left{0%{transform:scale(0);transform-origin:0% 50%;opacity:1}100%{transform:scale(1);transform-origin:0% 50%;opacity:1}}@keyframes gcohtech-ff58yd-scale-in-left{0%{transform:scale(0);transform-origin:0% 50%;opacity:1}100%{transform:scale(1);transform-origin:0% 50%;opacity:1}}.scale-in-right.gcohtech-ff58yd.gcohtech-ff58yd{-webkit-animation:gcohtech-ff58yd-scale-in-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;animation:gcohtech-ff58yd-scale-in-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;margin-bottom:5px}@-webkit-keyframes gcohtech-ff58yd-scale-in-right{0%{transform:scale(0);transform-origin:100% 50%;opacity:1}100%{transform:scale(1);transform-origin:100% 50%;opacity:1}}@keyframes gcohtech-ff58yd-scale-in-right{0%{transform:scale(0);transform-origin:100% 50%;opacity:1}100%{transform:scale(1);transform-origin:100% 50%;opacity:1}}.close-chatwith.gcohtech-ff58yd.gcohtech-ff58yd{position:relative;z-index:100}.close-chatwith.gcohtech-ff58yd svg.gcohtech-ff58yd{position:absolute;right:12px;top:0px\n    }.fullScreenMobile.gcohtech-ff58yd .close-chatwith svg.gcohtech-ff58yd{position:relative}"),
          w(ka.head, t)),
        Ne(this, e, ja, Oa, s, { data: 0, activePerson: 1, faqlevel: 14 });
    }
  }
  const { document: Fa } = ke;
  function Ra(e, t, n) {
    const i = e.slice();
    return (i[21] = t[n]), i;
  }
  function Pa(e) {
    let t,
      n,
      i = e[0].widgetMessage + "";
    return {
      c() {
        (t = k("div")),
          (n = $(i)),
          z(t, "padding", "0 0 20px"),
          z(t, "font-size", "14px"),
          z(t, "color", e[0].bgcolor);
      },
      m(e, i) {
        b(e, t, i), w(t, n);
      },
      p(e, o) {
        1 & o && i !== (i = e[0].widgetMessage + "") && M(n, i),
          1 & o && z(t, "color", e[0].bgcolor);
      },
      d(e) {
        e && y(t);
      },
    };
  }
  function Va(e) {
    let t,
      n,
      i,
      o = e[1].post + "";
    return {
      c() {
        (t = k("div")),
          (n = $(o)),
          (i = $(" ")),
          q(t, "class", "post"),
          z(t, "color", e[0].bgcolor);
      },
      m(e, o) {
        b(e, t, o), w(t, n), w(t, i);
      },
      p(e, i) {
        2 & i && o !== (o = e[1].post + "") && M(n, o),
          1 & i && z(t, "color", e[0].bgcolor);
      },
      d(e) {
        e && y(t);
      },
    };
  }
  function _a(t) {
    let n, i, o, a, r;
    return {
      c() {
        (n = k("div")),
          (n.textContent = "Copy and paste this code into your website"),
          (i = T()),
          (o = k("textarea")),
          z(n, "font-size", "14px"),
          z(n, "margin", "10px"),
          z(n, "font-weight", "bold"),
          z(o, "font-size", "14px"),
          z(o, "color", "#999"),
          q(o, "rows", "7"),
          (o.value = "\n          " + t[11] + "\n        "),
          q(o, "class", "gcohtech-1fwjph6");
      },
      m(e, s) {
        b(e, n, s),
          b(e, i, s),
          b(e, o, s),
          t[16](o),
          a || ((r = S(o, "click", t[12])), (a = !0));
      },
      p: e,
      d(e) {
        e && y(n), e && y(i), e && y(o), t[16](null), (a = !1), r();
      },
    };
  }
  function Ha(e) {
    let t,
      n = e[21].timezone + "";
    return {
      c() {
        t = $(n);
      },
      m(e, n) {
        b(e, t, n);
      },
      p(e, i) {
        2 & i && n !== (n = e[21].timezone + "") && M(t, n);
      },
      d(e) {
        e && y(t);
      },
    };
  }
  function Ga(e) {
    let t,
      n,
      i,
      o,
      a,
      r,
      s,
      l,
      c,
      u,
      d,
      p,
      h = e[21].day + "",
      f = e[21].availableFrom.slice(0, -3) + "",
      m = e[21].availableUntil.slice(0, -3) + "",
      v = e[21].timezone && Ha(e);
    return {
      c() {
        (t = k("tr")),
          (n = k("td")),
          (i = $(h)),
          (o = T()),
          (a = k("td")),
          (r = $(f)),
          (s = T()),
          (l = k("td")),
          (c = $(m)),
          (u = T()),
          (d = k("td")),
          v && v.c(),
          (p = T()),
          z(n, "padding", "2px"),
          z(n, "text-align", "left"),
          z(a, "padding", "2px"),
          z(a, "text-align", "left"),
          z(l, "padding", "2px"),
          z(l, "text-align", "left"),
          z(d, "color", "#999"),
          z(d, "padding", "2px"),
          z(d, "text-align", "left");
      },
      m(e, h) {
        b(e, t, h),
          w(t, n),
          w(n, i),
          w(t, o),
          w(t, a),
          w(a, r),
          w(t, s),
          w(t, l),
          w(l, c),
          w(t, u),
          w(t, d),
          v && v.m(d, null),
          w(t, p);
      },
      p(e, t) {
        2 & t && h !== (h = e[21].day + "") && M(i, h),
          2 & t && f !== (f = e[21].availableFrom.slice(0, -3) + "") && M(r, f),
          2 & t &&
            m !== (m = e[21].availableUntil.slice(0, -3) + "") &&
            M(c, m),
          e[21].timezone
            ? v
              ? v.p(e, t)
              : ((v = Ha(e)), v.c(), v.m(d, null))
            : v && (v.d(1), (v = null));
      },
      d(e) {
        e && y(t), v && v.d();
      },
    };
  }
  function Za(e) {
    let t,
      n,
      i,
      o,
      a,
      r = (e[0].translateOnlineFrom ?? "I'm online from") + "",
      s = e[1].optimes,
      l = [];
    for (let t = 0; t < s.length; t += 1) l[t] = Ga(Ra(e, s, t));
    return {
      c() {
        (t = k("div")), (n = $(r)), (i = $(":")), (o = T()), (a = k("table"));
        for (let e = 0; e < l.length; e += 1) l[e].c();
        z(t, "font-weight", "bold"),
          z(t, "font-size", "14px"),
          z(t, "padding-bottom", "10px"),
          z(a, "font-size", "14px");
      },
      m(e, r) {
        b(e, t, r), w(t, n), w(t, i), b(e, o, r), b(e, a, r);
        for (let e = 0; e < l.length; e += 1) l[e].m(a, null);
      },
      p(e, t) {
        if (
          (1 & t &&
            r !== (r = (e[0].translateOnlineFrom ?? "I'm online from") + "") &&
            M(n, r),
          2 & t)
        ) {
          let n;
          for (s = e[1].optimes, n = 0; n < s.length; n += 1) {
            const i = Ra(e, s, n);
            l[n] ? l[n].p(i, t) : ((l[n] = Ga(i)), l[n].c(), l[n].m(a, null));
          }
          for (; n < l.length; n += 1) l[n].d(1);
          l.length = s.length;
        }
      },
      d(e) {
        e && y(t), e && y(o), e && y(a), x(l, e);
      },
    };
  }
  function Wa(e) {
    let t, n, i, o;
    return (
      (i = new Fe({ props: { data: e[0], widgetType: "BigPerson" } })),
      i.$on("close", e[14]),
      {
        c() {
          (t = k("div")),
            (n = k("div")),
            Te(i.$$.fragment),
            q(t, "class", "widget-button-wrapper gcohtech-1fwjph6");
        },
        m(a, r) {
          b(a, t, r), w(t, n), Ie(i, n, null), e[17](n), e[18](t), (o = !0);
        },
        p(e, t) {
          const n = {};
          1 & t && (n.data = e[0]), i.$set(n);
        },
        i(e) {
          o || (ve(i.$$.fragment, e), (o = !0));
        },
        o(e) {
          ge(i.$$.fragment, e), (o = !1);
        },
        d(n) {
          n && y(t), Se(i), e[17](null), e[18](null);
        },
      }
    );
  }
  function Ka(e) {
    let t, n;
    return (
      (t = new po({ props: { data: e[0], person: e[1], noclose: ar } })),
      {
        c() {
          Te(t.$$.fragment);
        },
        m(e, i) {
          Ie(t, e, i), (n = !0);
        },
        p(e, n) {
          const i = {};
          1 & n && (i.data = e[0]), 2 & n && (i.person = e[1]), t.$set(i);
        },
        i(e) {
          n || (ve(t.$$.fragment, e), (n = !0));
        },
        o(e) {
          ge(t.$$.fragment, e), (n = !1);
        },
        d(e) {
          Se(t, e);
        },
      }
    );
  }
  function Ya(e) {
    let t,
      n,
      i,
      o,
      a,
      r,
      s,
      l,
      c = (e[0].translateShowTimetable ?? "Show timetable") + "";
    return {
      c() {
        (t = k("div")),
          (n = k("span")),
          (i = C("svg")),
          (o = C("path")),
          (a = T()),
          (r = $(c)),
          q(o, "fill", "currentColor"),
          q(
            o,
            "d",
            "M496 224c-79.6 0-144 64.4-144 144s64.4 144 144 144 144-64.4 144-144-64.4-144-144-144zm64 150.3c0 5.3-4.4 9.7-9.7 9.7h-60.6c-5.3 0-9.7-4.4-9.7-9.7v-76.6c0-5.3 4.4-9.7 9.7-9.7h12.6c5.3 0 9.7 4.4 9.7 9.7V352h38.3c5.3 0 9.7 4.4 9.7 9.7v12.6zM320 368c0-27.8 6.7-54.1 18.2-77.5-8-1.5-16.2-2.5-24.6-2.5h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h347.1c-45.3-31.9-75.1-84.5-75.1-144zm-96-112c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128z"
          ),
          q(i, "aria-hidden", "true"),
          q(i, "focusable", "false"),
          q(i, "data-prefix", "fas"),
          q(i, "data-icon", "user-clock"),
          q(i, "class", "svg-inline--fa fa-user-clock fa-w-20 gcohtech-1fwjph6"),
          q(i, "role", "img"),
          q(i, "xmlns", "http://www.w3.org/2000/svg"),
          q(i, "viewBox", "0 0 640 512"),
          q(n, "class", "gcohtech-1fwjph6"),
          q(t, "class", "timetable gcohtech-1fwjph6");
      },
      m(c, u) {
        b(c, t, u),
          w(t, n),
          w(n, i),
          w(i, o),
          w(n, a),
          w(n, r),
          s || ((l = S(n, "click", e[20])), (s = !0));
      },
      p(e, t) {
        1 & t &&
          c !== (c = (e[0].translateShowTimetable ?? "Show timetable") + "") &&
          M(r, c);
      },
      d(e) {
        e && y(t), (s = !1), l();
      },
    };
  }
  function Xa(e) {
    let t, n, i, o;
    const a = [er, Qa],
      r = [];
    function s(e, t) {
      return e[1].chatform ? 0 : 1;
    }
    return (
      (t = s(e)),
      (n = r[t] = a[t](e)),
      {
        c() {
          n.c(), (i = I());
        },
        m(e, n) {
          r[t].m(e, n), b(e, i, n), (o = !0);
        },
        p(e, o) {
          let l = t;
          (t = s(e)),
            t === l
              ? r[t].p(e, o)
              : (fe(),
                ge(r[l], 1, 1, () => {
                  r[l] = null;
                }),
                me(),
                (n = r[t]),
                n ? n.p(e, o) : ((n = r[t] = a[t](e)), n.c()),
                ve(n, 1),
                n.m(i.parentNode, i));
        },
        i(e) {
          o || (ve(n), (o = !0));
        },
        o(e) {
          ge(n), (o = !1);
        },
        d(e) {
          r[t].d(e), e && y(i);
        },
      }
    );
  }
  function Ja(e) {
    let t, n, i, o, a;
    const r = [ir, nr, tr],
      s = [];
    function l(e, t) {
      return !0 === e[0].faqsChat ? 0 : !0 === e[0].faqDisplay ? 1 : 2;
    }
    return (
      (n = l(e)),
      (i = s[n] = r[n](e)),
      {
        c() {
          (t = k("div")), i.c(), q(t, "class", "chat-container gcohtech-1fwjph6");
        },
        m(e, i) {
          b(e, t, i), s[n].m(t, null), (a = !0);
        },
        p(e, o) {
          let a = n;
          (n = l(e)),
            n === a
              ? s[n].p(e, o)
              : (fe(),
                ge(s[a], 1, 1, () => {
                  s[a] = null;
                }),
                me(),
                (i = s[n]),
                i ? i.p(e, o) : ((i = s[n] = r[n](e)), i.c()),
                ve(i, 1),
                i.m(t, null));
        },
        i(e) {
          a ||
            (ve(i),
            o ||
              ie(() => {
                (o = be(t, Me, {})), o.start();
              }),
            (a = !0));
        },
        o(e) {
          ge(i), (a = !1);
        },
        d(e) {
          e && y(t), s[n].d();
        },
      }
    );
  }
  function Qa(e) {
    let t, n;
    return (
      (t = new Ot({
        props: { data: e[0], person: e[1], formitems: e[3], noclose: ar },
      })),
      t.$on("callmex", e[13]),
      t.$on("close", rr),
      {
        c() {
          Te(t.$$.fragment);
        },
        m(e, i) {
          Ie(t, e, i), (n = !0);
        },
        p(e, n) {
          const i = {};
          1 & n && (i.data = e[0]),
            2 & n && (i.person = e[1]),
            8 & n && (i.formitems = e[3]),
            t.$set(i);
        },
        i(e) {
          n || (ve(t.$$.fragment, e), (n = !0));
        },
        o(e) {
          ge(t.$$.fragment, e), (n = !1);
        },
        d(e) {
          Se(t, e);
        },
      }
    );
  }
  function er(e) {
    let t, n, i, o;
    return (
      (i = new _i({ props: { data: e[0], activePerson: e[1] } })),
      i.$on("callmex", e[13]),
      {
        c() {
          (t = k("div")),
            (n = k("div")),
            Te(i.$$.fragment),
            q(n, "class", "chat-container-box gcohtech-1fwjph6"),
            q(t, "class", "chat-container gcohtech-1fwjph6");
        },
        m(e, a) {
          b(e, t, a), w(t, n), Ie(i, n, null), (o = !0);
        },
        p(e, t) {
          const n = {};
          1 & t && (n.data = e[0]), 2 & t && (n.activePerson = e[1]), i.$set(n);
        },
        i(e) {
          o || (ve(i.$$.fragment, e), (o = !0));
        },
        o(e) {
          ge(i.$$.fragment, e), (o = !1);
        },
        d(e) {
          e && y(t), Se(i);
        },
      }
    );
  }
  function tr(e) {
    let t, n;
    return (
      (t = new Wo({
        props: {
          bgcolor: e[0].color,
          faqs: e[0].activeFaqs,
          activePerson: e[1],
          data: e[0],
        },
      })),
      t.$on("problem-solved", sr),
      t.$on("problem-not-solved", e[15]),
      {
        c() {
          Te(t.$$.fragment);
        },
        m(e, i) {
          Ie(t, e, i), (n = !0);
        },
        p(e, n) {
          const i = {};
          1 & n && (i.bgcolor = e[0].color),
            1 & n && (i.faqs = e[0].activeFaqs),
            2 & n && (i.activePerson = e[1]),
            1 & n && (i.data = e[0]),
            t.$set(i);
        },
        i(e) {
          n || (ve(t.$$.fragment, e), (n = !0));
        },
        o(e) {
          ge(t.$$.fragment, e), (n = !1);
        },
        d(e) {
          Se(t, e);
        },
      }
    );
  }
  function nr(e) {
    let t, n;
    return (
      (t = new xa({
        props: {
          bgcolor: e[0].color,
          faqs: e[0].activeFaqs,
          activePerson: e[1],
          data: e[0],
        },
      })),
      t.$on("problem-solved", sr),
      t.$on("problem-not-solved", e[15]),
      {
        c() {
          Te(t.$$.fragment);
        },
        m(e, i) {
          Ie(t, e, i), (n = !0);
        },
        p(e, n) {
          const i = {};
          1 & n && (i.bgcolor = e[0].color),
            1 & n && (i.faqs = e[0].activeFaqs),
            2 & n && (i.activePerson = e[1]),
            1 & n && (i.data = e[0]),
            t.$set(i);
        },
        i(e) {
          n || (ve(t.$$.fragment, e), (n = !0));
        },
        o(e) {
          ge(t.$$.fragment, e), (n = !1);
        },
        d(e) {
          Se(t, e);
        },
      }
    );
  }
  function ir(e) {
    let t, n;
    return (
      (t = new Ba({
        props: {
          bgcolor: e[0].color,
          activePerson: e[1],
          faqlevel: e[7],
          data: e[0],
        },
      })),
      t.$on("problem-solved", sr),
      t.$on("problem-not-solved", e[15]),
      {
        c() {
          Te(t.$$.fragment);
        },
        m(e, i) {
          Ie(t, e, i), (n = !0);
        },
        p(e, n) {
          const i = {};
          1 & n && (i.bgcolor = e[0].color),
            2 & n && (i.activePerson = e[1]),
            128 & n && (i.faqlevel = e[7]),
            1 & n && (i.data = e[0]),
            t.$set(i);
        },
        i(e) {
          n || (ve(t.$$.fragment, e), (n = !0));
        },
        o(e) {
          ge(t.$$.fragment, e), (n = !1);
        },
        d(e) {
          Se(t, e);
        },
      }
    );
  }
  function or(e) {
    let t,
      n,
      i,
      o,
      a,
      r,
      s,
      l,
      c,
      u,
      d,
      p,
      h,
      f,
      m,
      v,
      g,
      x,
      C,
      I,
      N,
      D,
      U,
      A,
      E,
      L,
      O,
      j,
      F,
      R,
      P,
      V,
      _,
      H = e[1].name + "";
    l = new He({ props: { person: e[1] } });
    let G = 1 == e[0].whatsapps.length && Pa(e),
      Z = e[1].post && "null" != e[1].post && null != e[1].post && Va(e);
    (g = new ti({
      props: { isOpen: e[4], $$slots: { default: [_a] }, $$scope: { ctx: e } },
    })),
      (C = new ti({
        props: {
          isOpen: e[5],
          $$slots: { default: [Za] },
          $$scope: { ctx: e },
        },
      }));
    const W = [Ka, Wa],
      K = [];
    function Y(e, t) {
      return e[1].isExtraLink && "payment" == e[1].type
        ? 0
        : 0 != e[3].items.length || e[2]
        ? -1
        : 1;
    }
    ~(N = Y(e)) && (D = K[N] = W[N](e));
    let X = e[1].optimes && e[1].optimes.length > 0 && Ya(e);
    const J = [Ja, Xa],
      Q = [];
    function ee(e, t) {
      return e[2] ? 0 : e[3].items.length > 0 ? 1 : -1;
    }
    return (
      ~(j = ee(e)) && (F = Q[j] = J[j](e)),
      {
        c() {
          (t = k("div")),
            (n = k("div")),
            (i = k("div")),
            (o = k("div")),
            (a = k("img")),
            (s = T()),
            Te(l.$$.fragment),
            (c = T()),
            (u = k("div")),
            G && G.c(),
            (d = T()),
            Z && Z.c(),
            (p = T()),
            (h = k("div")),
            (f = k("strong")),
            (m = $(H)),
            (v = T()),
            Te(g.$$.fragment),
            (x = T()),
            Te(C.$$.fragment),
            (I = T()),
            D && D.c(),
            (U = T()),
            (A = k("div")),
            (E = k("span")),
            (E.innerHTML =
              '<svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="copy" class="svg-inline--fa fa-copy fa-w-14 gcohtech-1fwjph6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M433.941 65.941l-51.882-51.882A48 48 0 0 0 348.118 0H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h80c26.51 0 48-21.49 48-48V99.882a48 48 0 0 0-14.059-33.941zM266 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h74v224c0 26.51 21.49 48 48 48h96v42a6 6 0 0 1-6 6zm128-96H182a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h106v88c0 13.255 10.745 24 24 24h88v202a6 6 0 0 1-6 6zm6-256h-64V48h9.632c1.591 0 3.117.632 4.243 1.757l48.368 48.368a6 6 0 0 1 1.757 4.243V112z"></path></svg>\n        Copy widget'),
            (L = T()),
            X && X.c(),
            (O = T()),
            F && F.c(),
            q(a, "class", "avatar-pic gcohtech-1fwjph6"),
            q(a, "alt", ""),
            a.src !== (r = e[1].iconUrl) && q(a, "src", r),
            q(o, "class", "image-wrapper gcohtech-1fwjph6"),
            q(i, "class", "avatar gcohtech-1fwjph6"),
            z(f, "color", e[0].bgcolor),
            q(h, "class", "name gcohtech-1fwjph6"),
            z(h, "color", e[0].bgcolor),
            q(u, "class", "persondata gcohtech-1fwjph6"),
            q(E, "class", "gcohtech-1fwjph6"),
            q(A, "class", "copy-widget-wrapper gcohtech-1fwjph6"),
            q(
              n,
              "class",
              (R =
                "singleperson " +
                (!0 === e[1].online ? "active" : "inactive") +
                " gcohtech-1fwjph6")
            ),
            q(t, "class", "chatwith-person-big-person gcohtech-1fwjph6"),
            B(t, "whatsappTheme", e[10]);
        },
        m(r, y) {
          b(r, t, y),
            w(t, n),
            w(n, i),
            w(i, o),
            w(o, a),
            w(i, s),
            Ie(l, i, null),
            w(n, c),
            w(n, u),
            G && G.m(u, null),
            w(u, d),
            Z && Z.m(u, null),
            w(u, p),
            w(u, h),
            w(h, f),
            w(f, m),
            w(u, v),
            Ie(g, u, null),
            w(u, x),
            Ie(C, u, null),
            w(n, I),
            ~N && K[N].m(n, null),
            w(n, U),
            w(n, A),
            w(A, E),
            w(n, L),
            X && X.m(n, null),
            w(n, O),
            ~j && Q[j].m(n, null),
            (P = !0),
            V || ((_ = S(E, "click", e[19])), (V = !0));
        },
        p(e, [i]) {
          (!P || (2 & i && a.src !== (r = e[1].iconUrl))) && q(a, "src", r);
          const o = {};
          2 & i && (o.person = e[1]),
            l.$set(o),
            1 == e[0].whatsapps.length
              ? G
                ? G.p(e, i)
                : ((G = Pa(e)), G.c(), G.m(u, d))
              : G && (G.d(1), (G = null)),
            e[1].post && "null" != e[1].post && null != e[1].post
              ? Z
                ? Z.p(e, i)
                : ((Z = Va(e)), Z.c(), Z.m(u, p))
              : Z && (Z.d(1), (Z = null)),
            (!P || 2 & i) && H !== (H = e[1].name + "") && M(m, H),
            (!P || 1 & i) && z(f, "color", e[0].bgcolor),
            (!P || 1 & i) && z(h, "color", e[0].bgcolor);
          const s = {};
          16 & i && (s.isOpen = e[4]),
            16777280 & i && (s.$$scope = { dirty: i, ctx: e }),
            g.$set(s);
          const c = {};
          32 & i && (c.isOpen = e[5]),
            16777219 & i && (c.$$scope = { dirty: i, ctx: e }),
            C.$set(c);
          let v = N;
          (N = Y(e)),
            N === v
              ? ~N && K[N].p(e, i)
              : (D &&
                  (fe(),
                  ge(K[v], 1, 1, () => {
                    K[v] = null;
                  }),
                  me()),
                ~N
                  ? ((D = K[N]),
                    D ? D.p(e, i) : ((D = K[N] = W[N](e)), D.c()),
                    ve(D, 1),
                    D.m(n, U))
                  : (D = null)),
            e[1].optimes && e[1].optimes.length > 0
              ? X
                ? X.p(e, i)
                : ((X = Ya(e)), X.c(), X.m(n, O))
              : X && (X.d(1), (X = null));
          let w = j;
          (j = ee(e)),
            j === w
              ? ~j && Q[j].p(e, i)
              : (F &&
                  (fe(),
                  ge(Q[w], 1, 1, () => {
                    Q[w] = null;
                  }),
                  me()),
                ~j
                  ? ((F = Q[j]),
                    F ? F.p(e, i) : ((F = Q[j] = J[j](e)), F.c()),
                    ve(F, 1),
                    F.m(n, null))
                  : (F = null)),
            (!P ||
              (2 & i &&
                R !==
                  (R =
                    "singleperson " +
                    (!0 === e[1].online ? "active" : "inactive") +
                    " gcohtech-1fwjph6"))) &&
              q(n, "class", R),
            1024 & i && B(t, "whatsappTheme", e[10]);
        },
        i(e) {
          P ||
            (ve(l.$$.fragment, e),
            ve(g.$$.fragment, e),
            ve(C.$$.fragment, e),
            ve(D),
            ve(F),
            (P = !0));
        },
        o(e) {
          ge(l.$$.fragment, e),
            ge(g.$$.fragment, e),
            ge(C.$$.fragment, e),
            ge(D),
            ge(F),
            (P = !1);
        },
        d(e) {
          e && y(t),
            Se(l),
            G && G.d(),
            Z && Z.d(),
            Se(g),
            Se(C),
            ~N && K[N].d(),
            X && X.d(),
            ~j && Q[j].d(),
            (V = !1),
            _();
        },
      }
    );
  }
  let ar = !0;
  function rr() {
    showform = !1;
  }
  function sr() {}
  function lr(e, t, n) {
    let i,
      o,
      a,
      r,
      s,
      { person: l } = t,
      { data: c } = t,
      u = !1,
      d = { items: [] },
      p = !1,
      h = !1,
      f = `<script defer data-widget-type="group" data-person="${l.id}"     src='/build/bundle.js?key=${c.id}'><\/script><div id="whatapp-people-widget"></div>`;
    W(() => {
      if (l.isExtraLink && "payment" != l.type) {
        const e = document.createElement("a");
        (e.target = "link" == l.type ? "_blank" : "_self"),
          (e.href =
            ("link" == l.type
              ? ""
              : ("email" == l.type ? "mailto" : l.type) + ":") + l.url),
          (e.style["text-decoration"] = "none"),
          e.append(s),
          r.append(e);
      }
    }),
      l?.faqGrps?.length > 0
        ? ((c.activeFaqs = l.faqGrps[0]), (u = !0), (a = "whatsapp"))
        : c.faqGrps?.length > 0
        ? ((c.activeFaqs = c.faqGrps[0]), (u = !0), (a = "business"))
        : (u = !1),
      l.form && (d = l.form);
    return (
      (e.$$set = (e) => {
        "person" in e && n(1, (l = e.person)),
          "data" in e && n(0, (c = e.data));
      }),
      (e.$$.update = () => {
        1 & e.$$.dirty && n(10, (i = "whatsappTheme" === c.widgetTheme));
      }),
      [
        c,
        l,
        u,
        d,
        p,
        h,
        o,
        a,
        r,
        s,
        i,
        f,
        async function () {
          await (ne(), ee), o.focus(), o.select();
          try {
            document.execCommand("copy") && alert("Text copied to clipboard");
          } catch (e) {
            console.log("could not copy to clipbloard");
          }
        },
        function (e) {
          Kn(l, e);
        },
        function (e) {
          if (l.form) showform = !0;
          else {
            if (l.isExtraLink && "payment" != l.type) return;
            Yn(l, e);
          }
        },
        function () {
          const e = Xn(l);
          (!1 === e && !1 === l.online) ||
            (!1 === e ? Yn(l, {}) : n(2, (u = !1)));
        },
        function (e) {
          X[e ? "unshift" : "push"](() => {
            (o = e), n(6, o);
          });
        },
        function (e) {
          X[e ? "unshift" : "push"](() => {
            (s = e), n(9, s);
          });
        },
        function (e) {
          X[e ? "unshift" : "push"](() => {
            (r = e), n(8, r);
          });
        },
        () => n(4, (p = Math.random())),
        () => n(5, (h = Math.random())),
      ]
    );
  }
  class cr extends qe {
    constructor(e) {
      var t;
      super(),
        Fa.getElementById("gcohtech-1fwjph6-style") ||
          (((t = k("style")).id = "gcohtech-1fwjph6-style"),
          (t.textContent =
            "@-webkit-keyframes gcohtech-1fwjph6-flip-in-hor-bottom{0%{transform:rotateX(80deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@keyframes gcohtech-1fwjph6-flip-in-hor-bottom{0%{transform:rotateX(80deg);opacity:0}100%{transform:rotateX(0);opacity:1}}.chatwith-person-big-person.gcohtech-1fwjph6.gcohtech-1fwjph6{position:relative;padding:0 1em;box-sizing:border-box;margin-bottom:2em;flex-grow:1;width:33%;justify-content:center;font-family:\"Inter\";font-weight:normal;font-size:16px;max-width:450px}.chatwith-person-big-person.gcohtech-1fwjph6 .singleperson.gcohtech-1fwjph6{border-radius:15px;box-shadow:0px 0px 10px 0px rgba(0, 0, 0, 0.05);padding:1.25em 1.25em 44px;border-radius:0.5em;display:flex;max-width:450px;align-items:center;flex-flow:wrap row;position:relative;margin:auto;background:#fff;justify-content:center}.chatwith-person-big-person.whatsappTheme.gcohtech-1fwjph6 .singleperson.gcohtech-1fwjph6{background-image:url('https://services.tochat.be/img/bk-wa.png')\n  }.chatwith-person-big-person.gcohtech-1fwjph6 .singleperson .avatar.gcohtech-1fwjph6{width:120px;position:relative;margin:5px auto 0px}.chatwith-person-big-person.gcohtech-1fwjph6 .singleperson .persondata.gcohtech-1fwjph6{width:100%;box-sizing:border-box;text-align:center;margin-bottom:10px}.chatwith-person-big-person.gcohtech-1fwjph6 .singleperson .persondata .name.gcohtech-1fwjph6{font-size:1.25em}.chatwith-person-big-person.gcohtech-1fwjph6 .singleperson .avatar .image-wrapper.gcohtech-1fwjph6{display:flex;width:100px;height:100px;overflow:hidden;position:relative;justify-content:center;align-items:center;flex-flow:wrap column;border-radius:50%;margin-bottom:0.5em;border:1px solid #eee}.chatwith-person-big-person.gcohtech-1fwjph6 .singleperson .avatar .image-wrapper .avatar-pic.gcohtech-1fwjph6{max-height:100%}.chatwith-person-big-person.gcohtech-1fwjph6 .singleperson.inactive .avatar .image-wrapper .avatar-pic.gcohtech-1fwjph6{filter:grayscale(100%)}.chatwith-person-big-person.gcohtech-1fwjph6 .modal textarea.gcohtech-1fwjph6{width:100%}.chatwith-person-big-person.gcohtech-1fwjph6 .widget-button-wrapper.gcohtech-1fwjph6{display:flex;justify-content:center;width:100%;margin:0.5em 0 1.3em;background:transparent}.chatwith-person-big-person.gcohtech-1fwjph6 .copy-widget-wrapper.gcohtech-1fwjph6{display:none;position:absolute;bottom:0;right:0;padding:0.5em 0.75em;border-top-left-radius:0.75em;border-bottom-right-radius:0.5em;box-shadow:inset 1px 1px 3px 0px rgba(0, 0, 0, 0.05);background:#00bcbe}.chatwith-person-big-person.gcohtech-1fwjph6 .timetable.gcohtech-1fwjph6{position:absolute;bottom:0;left:0;color:#fff;background-color:#aaa;padding:0.5em 0.75em;border-bottom-right-radius:0.5em;border-bottom-left-radius:0.5em;right:0;text-align:center}.chatwith-person-big-person.gcohtech-1fwjph6 .timetable span.gcohtech-1fwjph6{color:#fff}.chatwith-person-big-person.gcohtech-1fwjph6 .timetable span.gcohtech-1fwjph6,.chatwith-person-big-person.gcohtech-1fwjph6 .copy-widget-wrapper span.gcohtech-1fwjph6{font-size:0.9em;cursor:pointer}.chatwith-person-big-person.gcohtech-1fwjph6 .timetable svg.gcohtech-1fwjph6,.chatwith-person-big-person.gcohtech-1fwjph6 .copy-widget-wrapper svg.gcohtech-1fwjph6{width:1em;margin-right:0.25em}.chatwith-person-big-person.gcohtech-1fwjph6 .chat-container.gcohtech-1fwjph6{width:100%;margin:auto;background:#f0f0f0;padding:10px}.chatwith-person-big-person.whatsappTheme.gcohtech-1fwjph6 .chat-container.gcohtech-1fwjph6{background-image:url('https://services.tochat.be/img/bk-wa.png')\n  }.chatwith-person-big-person.gcohtech-1fwjph6 .chat-container-box.gcohtech-1fwjph6{margin:20px auto 0}.chatwith-person-big-person.whatsappTheme.gcohtech-1fwjph6 .chat-container-box.gcohtech-1fwjph6{background-image:url('https://services.tochat.be/img/bk-wa.png')\n  }@media only screen and (min-width: 992px){}@media only screen and (max-width: 991px){.chatwith-person-big-person.gcohtech-1fwjph6.gcohtech-1fwjph6{flex-grow:1;width:50%}}@media only screen and (max-width: 576px){.chatwith-person-big-person.gcohtech-1fwjph6.gcohtech-1fwjph6{flex-grow:1;width:100%}}"),
          w(Fa.head, t)),
        Ne(this, e, lr, or, s, { person: 1, data: 0 });
    }
  }
  function ur(e) {
    let t,
      n,
      i,
      o,
      a,
      r,
      s,
      l,
      c = e[0].widgetMessage + "",
      u = e[0].expandFullScreenMobile && dr(e),
      d = !0 !== e[0].hideHeaderLogo && pr(e),
      p = e[2] && hr(e);
    return {
      c() {
        (t = k("div")),
          u && u.c(),
          (n = T()),
          d && d.c(),
          (i = T()),
          (o = k("div")),
          (a = $(c)),
          (s = T()),
          p && p.c(),
          (l = I()),
          z(o, "color", e[0].textColor),
          q(o, "class", "chatwith-intro gcohtech-1ofbfsd"),
          q(t, "class", "chatwith-header gcohtech-1ofbfsd"),
          q(
            t,
            "style",
            (r =
              "background: " +
              ("roundedTheme" === e[0].widgetTheme
                ? "linear-gradient(to right, " +
                  e[0].color +
                  ", " +
                  e[0].color +
                  "50)"
                : e[0].color) +
              ";\n     " +
              (e[0].hideHeaderLogo ? "" : "padding-bottom:5px;"))
          ),
          B(t, "fullScreenMobile", e[3]);
      },
      m(e, r) {
        b(e, t, r),
          u && u.m(t, null),
          w(t, n),
          d && d.m(t, null),
          w(t, i),
          w(t, o),
          w(o, a),
          b(e, s, r),
          p && p.m(e, r),
          b(e, l, r);
      },
      p(e, s) {
        e[0].expandFullScreenMobile
          ? u
            ? u.p(e, s)
            : ((u = dr(e)), u.c(), u.m(t, n))
          : u && (u.d(1), (u = null)),
          !0 !== e[0].hideHeaderLogo
            ? d
              ? d.p(e, s)
              : ((d = pr(e)), d.c(), d.m(t, i))
            : d && (d.d(1), (d = null)),
          1 & s && c !== (c = e[0].widgetMessage + "") && M(a, c),
          1 & s && z(o, "color", e[0].textColor),
          1 & s &&
            r !==
              (r =
                "background: " +
                ("roundedTheme" === e[0].widgetTheme
                  ? "linear-gradient(to right, " +
                    e[0].color +
                    ", " +
                    e[0].color +
                    "50)"
                  : e[0].color) +
                ";\n     " +
                (e[0].hideHeaderLogo ? "" : "padding-bottom:5px;")) &&
            q(t, "style", r),
          8 & s && B(t, "fullScreenMobile", e[3]),
          e[2]
            ? p
              ? p.p(e, s)
              : ((p = hr(e)), p.c(), p.m(l.parentNode, l))
            : p && (p.d(1), (p = null));
      },
      d(e) {
        e && y(t), u && u.d(), d && d.d(), e && y(s), p && p.d(e), e && y(l);
      },
    };
  }
  function dr(t) {
    let n, i, o;
    return {
      c() {
        (n = k("div")),
          (n.innerHTML =
            '<svg aria-hidden="true" focusable="false" data-icon="times" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512" class="gcohtech-1ofbfsd"><path fill="#fff" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>'),
          q(n, "class", "close-chatwith gcohtech-1ofbfsd");
      },
      m(e, a) {
        b(e, n, a), i || ((o = S(n, "click", t[4])), (i = !0));
      },
      p: e,
      d(e) {
        e && y(n), (i = !1), o();
      },
    };
  }
  function pr(e) {
    let t, n, i, o, a;
    return {
      c() {
        (t = k("div")),
          (n = k("img")),
          q(n, "class", "profile-img gcohtech-1ofbfsd"),
          q(
            n,
            "style",
            (i =
              60 != e[0].iconWidth || 60 != e[0].iconHeight
                ? "width:" +
                  e[0].iconWidth +
                  "px; height:" +
                  e[0].iconHeight +
                  "px"
                : "")
          ),
          q(n, "alt", ""),
          n.src !== (o = e[0].iconUrl) && q(n, "src", o),
          q(n, "onerror", "this.src='https://services.tochat.be'+'/bk.png'"),
          q(
            t,
            "class",
            (a =
              "okewa-avatar " +
              (!0 === e[0].roundedLogo ? "roundedLogo" : "squareLogo") +
              "  gcohtech-1ofbfsd")
          ),
          z(t, "border-color", e[0].color);
      },
      m(e, i) {
        b(e, t, i), w(t, n);
      },
      p(e, r) {
        1 & r &&
          i !==
            (i =
              60 != e[0].iconWidth || 60 != e[0].iconHeight
                ? "width:" +
                  e[0].iconWidth +
                  "px; height:" +
                  e[0].iconHeight +
                  "px"
                : "") &&
          q(n, "style", i),
          1 & r && n.src !== (o = e[0].iconUrl) && q(n, "src", o),
          1 & r &&
            a !==
              (a =
                "okewa-avatar " +
                (!0 === e[0].roundedLogo ? "roundedLogo" : "squareLogo") +
                "  gcohtech-1ofbfsd") &&
            q(t, "class", a),
          1 & r && z(t, "border-color", e[0].color);
      },
      d(e) {
        e && y(t);
      },
    };
  }
  function hr(e) {
    let t, n;
    return {
      c() {
        (t = k("div")),
          q(
            t,
            "class",
            (n =
              d(
                "banner" === e[2]
                  ? "chatwith-header-round-banner"
                  : "chatwith-header-round"
              ) + " gcohtech-1ofbfsd")
          ),
          z(t, "border-bottom-color", e[0].color);
      },
      m(e, n) {
        b(e, t, n);
      },
      p(e, i) {
        4 & i &&
          n !==
            (n =
              d(
                "banner" === e[2]
                  ? "chatwith-header-round-banner"
                  : "chatwith-header-round"
              ) + " gcohtech-1ofbfsd") &&
          q(t, "class", n),
          1 & i && z(t, "border-bottom-color", e[0].color);
      },
      d(e) {
        e && y(t);
      },
    };
  }
  function fr(t) {
    let n,
      i =
        !0 !== t[0].noHeader &&
        ("dotTheme" !== t[0].widgetTheme || !t[1]) &&
        ur(t);
    return {
      c() {
        i && i.c(), (n = I());
      },
      m(e, t) {
        i && i.m(e, t), b(e, n, t);
      },
      p(e, [t]) {
        !0 === e[0].noHeader || ("dotTheme" === e[0].widgetTheme && e[1])
          ? i && (i.d(1), (i = null))
          : i
          ? i.p(e, t)
          : ((i = ur(e)), i.c(), i.m(n.parentNode, n));
      },
      i: e,
      o: e,
      d(e) {
        i && i.d(e), e && y(n);
      },
    };
  }
  function mr(e, t, n) {
    let i,
      { data: o } = t,
      { agentsView: a } = t,
      { showRounded: r } = t;
    const s = K();
    return (
      (e.$$set = (e) => {
        "data" in e && n(0, (o = e.data)),
          "agentsView" in e && n(1, (a = e.agentsView)),
          "showRounded" in e && n(2, (r = e.showRounded));
      }),
      (e.$$.update = () => {
        1 & e.$$.dirty && n(3, (i = o.expandFullScreenMobile));
      }),
      [
        o,
        a,
        r,
        i,
        function () {
          s("close");
        },
      ]
    );
  }
  class vr extends qe {
    constructor(e) {
      var t;
      super(),
        document.getElementById("gcohtech-1ofbfsd-style") ||
          (((t = k("style")).id = "gcohtech-1ofbfsd-style"),
          (t.textContent =
            ".close-chatwith.gcohtech-1ofbfsd.gcohtech-1ofbfsd{position:absolute;right:10px;top:10px;width:25px;height:25px}.close-chatwith.gcohtech-1ofbfsd svg.gcohtech-1ofbfsd{width:25px;height:25px}.chatwith-header.gcohtech-1ofbfsd.gcohtech-1ofbfsd{position:relative;padding:15px 35px 15px;display:flex;justify-content:center;flex-direction:column}.chatwith-header.gcohtech-1ofbfsd .profile-img.gcohtech-1ofbfsd{display:block;width:60px;height:60px;margin:auto;border-radius:200px;background:white;-o-object-fit:cover;object-fit:cover}.chatwith-header.gcohtech-1ofbfsd .squareLogo .profile-img.gcohtech-1ofbfsd,.chatwith-header-small .squareLogo.gcohtech-1ofbfsd .profile-img.gcohtech-1ofbfsd{border-radius:0 !important}.chatwith-header.gcohtech-1ofbfsd .chatwith-intro.gcohtech-1ofbfsd{text-align:center;color:white;font-size:14px;font-weight:500;width:100%;box-shadow:none;line-height:16px}.chatwith-header-round.gcohtech-1ofbfsd.gcohtech-1ofbfsd{border-bottom:30px solid;border-radius:0 0 100% 100%;margin-top:-12px}.chatwith-header-round-banner.gcohtech-1ofbfsd.gcohtech-1ofbfsd{border-bottom:30px solid;border-radius:0 0 100% 100%;position:absolute;width:260px;margin-top:0px}@media(max-width: 767px){.chatwith-header.gcohtech-1ofbfsd.gcohtech-1ofbfsd{justify-content:flex-start;flex-direction:row;align-items:center;padding:.5em 2.25em .5em .5em}.chatwith-header.gcohtech-1ofbfsd .profile-img.gcohtech-1ofbfsd{width:36px;height:36px;min-height:36px;min-width:36px}.chatwith-header.gcohtech-1ofbfsd .profile-img.gcohtech-1ofbfsd{width:36px;height:36px;min-height:36px;min-width:36px}.chatwith-header.gcohtech-1ofbfsd .chatwith-intro.gcohtech-1ofbfsd{text-align:left;margin:.5em 0;font-size:12px;font-weight:normal;width:100%}.okewa-avatar.gcohtech-1ofbfsd.gcohtech-1ofbfsd{margin-right:1em}.fullScreenMobile.gcohtech-1ofbfsd .profile-img.gcohtech-1ofbfsd{width:60px;height:60px}.fullScreenMobile.gcohtech-1ofbfsd .chatwith-intro.gcohtech-1ofbfsd{font-size:18px}.close-chatwith.gcohtech-1ofbfsd.gcohtech-1ofbfsd{width:18px;height:18px}.close-chatwith.gcohtech-1ofbfsd svg.gcohtech-1ofbfsd{width:18px;height:18px}}"),
          w(document.head, t)),
        Ne(this, e, mr, fr, s, { data: 0, agentsView: 1, showRounded: 2 });
    }
  }
  function gr(e) {
    let t = 0,
      n = 0,
      i = 0;
    if (void 0 === e) return 0;
    if (
      (4 == e.length
        ? ((t = "0x" + e[1] + e[1]),
          (n = "0x" + e[2] + e[2]),
          (i = "0x" + e[3] + e[3]))
        : 7 == e.length &&
          ((t = "0x" + e[1] + e[2]),
          (n = "0x" + e[3] + e[4]),
          (i = "0x" + e[5] + e[6])),
      Math.abs(t - n) <= 10 && Math.abs(n - i) <= 10 && Math.abs(i - t) <= 10)
    )
      return -1;
    (t /= 255), (n /= 255), (i /= 255);
    let o = Math.min(t, n, i),
      a = Math.max(t, n, i),
      r = a - o,
      s = 0;
    return (
      (s =
        0 == r
          ? 0
          : a == t
          ? ((n - i) / r) % 6
          : a == n
          ? (i - t) / r + 2
          : (t - n) / r + 4),
      (s = Math.round(60 * s)),
      s < 0 && (s += 360),
      s
    );
  }
  function wr(e, t = 2, n = "0") {
    if (e > 99) return 99;
    const { length: i } = e.toString();
    return i >= t ? e.toString() : `${n.repeat(t - i)}${e}`;
  }
  function br(e) {
    let t,
      n,
      i,
      o,
      a,
      r,
      s,
      l,
      c,
      u,
      d,
      p,
      h,
      f,
      m,
      v,
      g,
      x,
      C,
      S,
      N,
      D,
      U,
      A,
      E,
      L,
      O,
      j,
      B,
      F,
      R = wr(e[2]) + "",
      P = wr(e[3]) + "",
      V = wr(e[4]) + "",
      _ = wr(e[6]) + "",
      H = "bubbleTheme" === e[0].widgetTheme && !e[1] && yr(e);
    return {
      c() {
        (t = k("div")),
          (n = k("div")),
          (i = k("span")),
          (o = $(R)),
          (a = T()),
          (r = k("p")),
          (r.textContent = "DAYS"),
          (l = T()),
          (c = k("div")),
          (u = k("span")),
          (d = $(P)),
          (p = T()),
          (h = k("p")),
          (h.textContent = "HOURS"),
          (m = T()),
          (v = k("div")),
          (g = k("span")),
          (x = $(V)),
          (C = T()),
          (S = k("p")),
          (S.textContent = "MINUTES"),
          (D = T()),
          (U = k("div")),
          (A = k("span")),
          (E = $(_)),
          (L = T()),
          (O = k("p")),
          (O.textContent = "SECONDS"),
          (B = T()),
          H && H.c(),
          (F = I()),
          z(i, "color", "white"),
          q(i, "class", "gcohtech-1syfteq"),
          q(r, "class", "gcohtech-1syfteq"),
          q(n, "class", "chatwith-countdown-box gcohtech-1syfteq"),
          q(
            n,
            "style",
            (s =
              "whatsappTheme" === e[0].widgetTheme
                ? "background-color: #128C7E"
                : -1 !== e[7]
                ? "background-color: hsl(" + e[7] + "deg 100% 30%)"
                : "")
          ),
          z(u, "color", "white"),
          q(u, "class", "gcohtech-1syfteq"),
          q(h, "class", "gcohtech-1syfteq"),
          q(c, "class", "chatwith-countdown-box gcohtech-1syfteq"),
          q(
            c,
            "style",
            (f =
              "whatsappTheme" === e[0].widgetTheme
                ? "background-color: #128C7E"
                : -1 !== e[7]
                ? "background-color: hsl(" + e[7] + "deg 100% 30%)"
                : "")
          ),
          z(g, "color", "white"),
          q(g, "class", "gcohtech-1syfteq"),
          q(S, "class", "gcohtech-1syfteq"),
          q(v, "class", "chatwith-countdown-box gcohtech-1syfteq"),
          q(
            v,
            "style",
            (N =
              "whatsappTheme" === e[0].widgetTheme
                ? "background-color: #128C7E"
                : -1 !== e[7]
                ? "background-color: hsl(" + e[7] + "deg 100% 30%)"
                : "")
          ),
          z(A, "color", "white"),
          q(A, "class", "gcohtech-1syfteq"),
          q(O, "class", "gcohtech-1syfteq"),
          q(U, "class", "chatwith-countdown-box gcohtech-1syfteq"),
          q(
            U,
            "style",
            (j =
              "whatsappTheme" === e[0].widgetTheme
                ? "background-color: #128C7E"
                : -1 !== e[7]
                ? "background-color: hsl(" + e[7] + "deg 100% 30%)"
                : "")
          ),
          q(t, "class", "chatwith-countdown gcohtech-1syfteq"),
          z(t, "background", e[5]);
      },
      m(e, s) {
        b(e, t, s),
          w(t, n),
          w(n, i),
          w(i, o),
          w(n, a),
          w(n, r),
          w(t, l),
          w(t, c),
          w(c, u),
          w(u, d),
          w(c, p),
          w(c, h),
          w(t, m),
          w(t, v),
          w(v, g),
          w(g, x),
          w(v, C),
          w(v, S),
          w(t, D),
          w(t, U),
          w(U, A),
          w(A, E),
          w(U, L),
          w(U, O),
          b(e, B, s),
          H && H.m(e, s),
          b(e, F, s);
      },
      p(e, i) {
        4 & i && R !== (R = wr(e[2]) + "") && M(o, R),
          129 & i &&
            s !==
              (s =
                "whatsappTheme" === e[0].widgetTheme
                  ? "background-color: #128C7E"
                  : -1 !== e[7]
                  ? "background-color: hsl(" + e[7] + "deg 100% 30%)"
                  : "") &&
            q(n, "style", s),
          8 & i && P !== (P = wr(e[3]) + "") && M(d, P),
          129 & i &&
            f !==
              (f =
                "whatsappTheme" === e[0].widgetTheme
                  ? "background-color: #128C7E"
                  : -1 !== e[7]
                  ? "background-color: hsl(" + e[7] + "deg 100% 30%)"
                  : "") &&
            q(c, "style", f),
          16 & i && V !== (V = wr(e[4]) + "") && M(x, V),
          129 & i &&
            N !==
              (N =
                "whatsappTheme" === e[0].widgetTheme
                  ? "background-color: #128C7E"
                  : -1 !== e[7]
                  ? "background-color: hsl(" + e[7] + "deg 100% 30%)"
                  : "") &&
            q(v, "style", N),
          64 & i && _ !== (_ = wr(e[6]) + "") && M(E, _),
          129 & i &&
            j !==
              (j =
                "whatsappTheme" === e[0].widgetTheme
                  ? "background-color: #128C7E"
                  : -1 !== e[7]
                  ? "background-color: hsl(" + e[7] + "deg 100% 30%)"
                  : "") &&
            q(U, "style", j),
          32 & i && z(t, "background", e[5]),
          "bubbleTheme" !== e[0].widgetTheme || e[1]
            ? H && (H.d(1), (H = null))
            : H
            ? H.p(e, i)
            : ((H = yr(e)), H.c(), H.m(F.parentNode, F));
      },
      d(e) {
        e && y(t), e && y(B), H && H.d(e), e && y(F);
      },
    };
  }
  function yr(e) {
    let t;
    return {
      c() {
        (t = k("div")),
          q(t, "class", "chatwith-header-round gcohtech-1syfteq"),
          z(t, "border-bottom-color", e[0].color);
      },
      m(e, n) {
        b(e, t, n);
      },
      p(e, n) {
        1 & n && z(t, "border-bottom-color", e[0].color);
      },
      d(e) {
        e && y(t);
      },
    };
  }
  function xr(t) {
    let n,
      i = !0 === t[0].countDownEnabled && br(t);
    return {
      c() {
        i && i.c(), (n = I());
      },
      m(e, t) {
        i && i.m(e, t), b(e, n, t);
      },
      p(e, [t]) {
        !0 === e[0].countDownEnabled
          ? i
            ? i.p(e, t)
            : ((i = br(e)), i.c(), i.m(n.parentNode, n))
          : i && (i.d(1), (i = null));
      },
      i: e,
      o: e,
      d(e) {
        i && i.d(e), e && y(n);
      },
    };
  }
  function kr(e, t, n) {
    let i,
      o,
      a,
      r,
      s,
      l,
      c,
      { data: u } = t,
      { hasBanner: d } = t,
      p = Date.now(),
      h = u.countDownEnds ? new Date(u.countDownEnds) : Date.now();
    let f = setInterval(function () {
      n(8, (p = Date.now()));
    }, 1e3);
    var m;
    return (
      (m = () => {
        clearInterval(f);
      }),
      Z().$$.on_destroy.push(m),
      (e.$$set = (e) => {
        "data" in e && n(0, (u = e.data)),
          "hasBanner" in e && n(1, (d = e.hasBanner));
      }),
      (e.$$.update = () => {
        1 & e.$$.dirty &&
          n(
            5,
            (i =
              "roundedTheme" === u.widgetTheme
                ? "linear-gradient(to right, " +
                  u.color +
                  ", " +
                  u.color +
                  "50)"
                : "whatsappTheme" === u.widgetTheme
                ? "#075E54"
                : u.color)
          ),
          256 & e.$$.dirty && n(9, (o = Math.round((h - p) / 1e3))),
          512 & e.$$.dirty && o <= 0 && (n(9, (o = 0)), clearInterval(f)),
          512 & e.$$.dirty && n(2, (a = o ? Math.floor(o / 3600 / 24) : 0)),
          516 & e.$$.dirty &&
            n(3, (r = o ? Math.floor((o - 3600 * a * 24) / 3600) : 0)),
          524 & e.$$.dirty &&
            n(4, (s = o ? Math.floor((o - 3600 * a * 24 - 3600 * r) / 60) : 0)),
          540 & e.$$.dirty &&
            n(6, (l = o ? o - 3600 * a * 24 - 3600 * r - 60 * s : 0)),
          1 & e.$$.dirty && n(7, (c = gr(u.color)));
      }),
      [u, d, a, r, s, i, l, c, p, o]
    );
  }
  class Cr extends qe {
    constructor(e) {
      var t;
      super(),
        document.getElementById("gcohtech-1syfteq-style") ||
          (((t = k("style")).id = "gcohtech-1syfteq-style"),
          (t.textContent =
            ".chatwith-countdown.gcohtech-1syfteq.gcohtech-1syfteq{width:100%;background-color:#111111;display:flex;flex-direction:row;justify-content:center;padding-left:5px}.chatwith-countdown-box.gcohtech-1syfteq.gcohtech-1syfteq{width:52px;background-color:#3e3e3e;display:flex;flex-direction:column;align-items:center;margin:20px 10px 10px 0px;border-radius:10%}.chatwith-countdown.gcohtech-1syfteq span.gcohtech-1syfteq{font-size:20pt;font-weight:600;margin-top:5px}.chatwith-countdown.gcohtech-1syfteq p.gcohtech-1syfteq{color:#ffffff;font-size:6pt;margin:0px 0px 10px}.chatwith-header-round.gcohtech-1syfteq.gcohtech-1syfteq{border-bottom:30px solid;border-radius:0 0 100% 100%;margin-top:-12px}"),
          w(document.head, t)),
        Ne(this, e, kr, xr, s, { data: 0, hasBanner: 1 });
    }
  }
  const { document: $r } = ke;
  function Tr(e) {
    let t, n, i, o;
    return {
      c() {
        (t = k("img")),
          (i = T()),
          (o = k("span")),
          q(t, "class", "chatwith-avatar-pic gcohtech-1kwtkms"),
          q(t, "alt", ""),
          t.src !== (n = e[0].iconUrl) && q(t, "src", n),
          q(t, "onerror", "this.src='https://services.tochat.be'+'/bk.png'"),
          q(o, "class", "chatwith-circle gcohtech-1kwtkms");
      },
      m(e, n) {
        b(e, t, n), b(e, i, n), b(e, o, n);
      },
      p(e, i) {
        1 & i && t.src !== (n = e[0].iconUrl) && q(t, "src", n);
      },
      d(e) {
        e && y(t), e && y(i), e && y(o);
      },
    };
  }
  function Ir(e) {
    let t,
      n,
      i,
      o,
      a,
      r,
      s = e[0].name + "",
      l = e[0].post && "null" != e[0].post && null != e[0].post && Sr(e);
    function c(e, t) {
      return e[0].isExtraLink ? ("payment" == e[0].type ? Nr : void 0) : qr;
    }
    let u = c(e),
      d = u && u(e);
    return {
      c() {
        (t = k("div")),
          l && l.c(),
          (n = T()),
          (i = k("div")),
          (o = $(s)),
          (r = T()),
          d && d.c(),
          q(i, "class", "chatwith-name gcohtech-1kwtkms"),
          q(i, "style", (a = e[7] && e[2] && "color:" + e[1].color)),
          q(t, "class", "chatwith-persondata gcohtech-1kwtkms");
      },
      m(e, a) {
        b(e, t, a),
          l && l.m(t, null),
          w(t, n),
          w(t, i),
          w(i, o),
          w(t, r),
          d && d.m(t, null);
      },
      p(e, r) {
        e[0].post && "null" != e[0].post && null != e[0].post
          ? l
            ? l.p(e, r)
            : ((l = Sr(e)), l.c(), l.m(t, n))
          : l && (l.d(1), (l = null)),
          1 & r && s !== (s = e[0].name + "") && M(o, s),
          134 & r &&
            a !== (a = e[7] && e[2] && "color:" + e[1].color) &&
            q(i, "style", a),
          u === (u = c(e)) && d
            ? d.p(e, r)
            : (d && d.d(1), (d = u && u(e)), d && (d.c(), d.m(t, null)));
      },
      d(e) {
        e && y(t), l && l.d(), d && d.d();
      },
    };
  }
  function Sr(e) {
    let t,
      n,
      i,
      o = e[0].post + "";
    return {
      c() {
        (t = k("div")),
          (n = $(o)),
          q(t, "class", "chatwith-post gcohtech-1kwtkms"),
          q(t, "style", (i = e[7] && e[2] && "color:" + e[1].color));
      },
      m(e, i) {
        b(e, t, i), w(t, n);
      },
      p(e, a) {
        1 & a && o !== (o = e[0].post + "") && M(n, o),
          134 & a &&
            i !== (i = e[7] && e[2] && "color:" + e[1].color) &&
            q(t, "style", i);
      },
      d(e) {
        e && y(t);
      },
    };
  }
  function Nr(t) {
    let n;
    return {
      c() {
        (n = k("div")),
          (n.innerHTML =
            '<span class="chatwith-circle gcohtech-1kwtkms"></span>\n            Buy Online'),
          q(n, "class", "chatwith-status chatwith-online gcohtech-1kwtkms");
      },
      m(e, t) {
        b(e, n, t);
      },
      p: e,
      d(e) {
        e && y(n);
      },
    };
  }
  function qr(e) {
    let t, n, i;
    function o(e, t) {
      return !0 === e[0].online ? Mr : Dr;
    }
    let a = o(e),
      r = a(e);
    return {
      c() {
        (t = k("div")),
          (n = k("span")),
          (i = T()),
          r.c(),
          q(n, "class", "chatwith-circle gcohtech-1kwtkms"),
          q(t, "class", "chatwith-status chatwith-online gcohtech-1kwtkms");
      },
      m(e, o) {
        b(e, t, o), w(t, n), w(t, i), r.m(t, null);
      },
      p(e, n) {
        a !== (a = o(e)) && (r.d(1), (r = a(e)), r && (r.c(), r.m(t, null)));
      },
      d(e) {
        e && y(t), r.d();
      },
    };
  }
  function Dr(e) {
    let t;
    return {
      c() {
        t = $("Offline");
      },
      m(e, n) {
        b(e, t, n);
      },
      d(e) {
        e && y(t);
      },
    };
  }
  function Mr(e) {
    let t;
    return {
      c() {
        t = $("Online");
      },
      m(e, n) {
        b(e, t, n);
      },
      d(e) {
        e && y(t);
      },
    };
  }
  function Ur(t) {
    let n,
      i,
      o,
      a,
      r,
      s,
      l,
      c = "roundedTheme" !== t[1].widgetTheme && Tr(t),
      u = ("dotTheme" !== t[1].widgetTheme || !t[2]) && Ir(t);
    return {
      c() {
        (n = k("div")),
          (i = k("div")),
          (o = k("div")),
          (a = k("div")),
          c && c.c(),
          (r = T()),
          u && u.c(),
          q(a, "class", "chatwith-avatar gcohtech-1kwtkms"),
          q(
            o,
            "class",
            (s =
              "chatwith-singleperson " +
              (!0 === t[0].online ? "chatwith-active" : "chatwith-inactive") +
              " gcohtech-1kwtkms")
          ),
          q(n, "class", "chatwith-person gcohtech-1kwtkms"),
          q(
            n,
            "style",
            (l =
              t[7] &&
              t[2] &&
              "background-image: linear-gradient(to right, " +
                t[1].color +
                "50, " +
                t[1].color +
                "50), linear-gradient(to right, #ffffff, #ffffff);")
          ),
          B(n, "roundedTheme", t[5]),
          B(n, "whatsappTheme", t[6]),
          B(n, "buttonTheme", t[7]),
          B(n, "dotTheme", t[8]),
          B(n, "fullScreenMobile", t[9]),
          B(n, "innerPeople", t[11]),
          B(n, "gridView", t[10]);
      },
      m(e, s) {
        b(e, n, s),
          w(n, i),
          w(i, o),
          w(o, a),
          c && c.m(a, null),
          w(o, r),
          u && u.m(o, null),
          t[13](i),
          t[14](n);
      },
      p(e, [t]) {
        "roundedTheme" !== e[1].widgetTheme
          ? c
            ? c.p(e, t)
            : ((c = Tr(e)), c.c(), c.m(a, null))
          : c && (c.d(1), (c = null)),
          "dotTheme" === e[1].widgetTheme && e[2]
            ? u && (u.d(1), (u = null))
            : u
            ? u.p(e, t)
            : ((u = Ir(e)), u.c(), u.m(o, null)),
          1 & t &&
            s !==
              (s =
                "chatwith-singleperson " +
                (!0 === e[0].online ? "chatwith-active" : "chatwith-inactive") +
                " gcohtech-1kwtkms") &&
            q(o, "class", s),
          134 & t &&
            l !==
              (l =
                e[7] &&
                e[2] &&
                "background-image: linear-gradient(to right, " +
                  e[1].color +
                  "50, " +
                  e[1].color +
                  "50), linear-gradient(to right, #ffffff, #ffffff);") &&
            q(n, "style", l),
          32 & t && B(n, "roundedTheme", e[5]),
          64 & t && B(n, "whatsappTheme", e[6]),
          128 & t && B(n, "buttonTheme", e[7]),
          256 & t && B(n, "dotTheme", e[8]),
          512 & t && B(n, "fullScreenMobile", e[9]),
          2048 & t && B(n, "innerPeople", e[11]),
          1024 & t && B(n, "gridView", e[10]);
      },
      i: e,
      o: e,
      d(e) {
        e && y(n), c && c.d(), u && u.d(), t[13](null), t[14](null);
      },
    };
  }
  function zr(e, t, n) {
    let i,
      o,
      a,
      r,
      s,
      l,
      c,
      u,
      d,
      { person: p } = t,
      { data: h } = t,
      { isGrid: f } = t,
      { isInnerPeople: m } = t;
    return (
      W(() => {
        if (p.isExtraLink && "payment" != p.type) {
          const e = document.createElement("a");
          (e.target = "link" == p.type ? "_blank" : "_self"),
            (e.href =
              ("link" == p.type
                ? ""
                : ("email" == p.type ? "mailto" : p.type) + ":") + p.url),
            (e.style["text-decoration"] = "none"),
            e.append(d),
            u.append(e);
        }
      }),
      (e.$$set = (e) => {
        "person" in e && n(0, (p = e.person)),
          "data" in e && n(1, (h = e.data)),
          "isGrid" in e && n(12, (f = e.isGrid)),
          "isInnerPeople" in e && n(2, (m = e.isInnerPeople));
      }),
      (e.$$.update = () => {
        2 & e.$$.dirty && n(5, (i = "roundedTheme" === h.widgetTheme)),
          2 & e.$$.dirty && n(6, (o = "whatsappTheme" === h.widgetTheme)),
          2 & e.$$.dirty && n(7, (a = "buttonTheme" === h.widgetTheme)),
          6 & e.$$.dirty && n(8, (r = "dotTheme" === h.widgetTheme && m)),
          2 & e.$$.dirty && n(9, (s = h.expandFullScreenMobile)),
          4096 & e.$$.dirty && n(10, (l = f)),
          4 & e.$$.dirty && n(11, (c = m));
      }),
      [
        p,
        h,
        m,
        u,
        d,
        i,
        o,
        a,
        r,
        s,
        l,
        c,
        f,
        function (e) {
          X[e ? "unshift" : "push"](() => {
            (d = e), n(4, d);
          });
        },
        function (e) {
          X[e ? "unshift" : "push"](() => {
            (u = e), n(3, u);
          });
        },
      ]
    );
  }
  class Ar extends qe {
    constructor(e) {
      var t;
      super(),
        $r.getElementById("gcohtech-1kwtkms-style") ||
          (((t = k("style")).id = "gcohtech-1kwtkms-style"),
          (t.textContent =
            ".fullScreenMobile.gcohtech-1kwtkms.gcohtech-1kwtkms,.buttonTheme.gcohtech-1kwtkms.gcohtech-1kwtkms{border-radius:10px;padding:8px}.chatwith-person.gcohtech-1kwtkms .chatwith-post.gcohtech-1kwtkms{font-size:12px;color:#5c5b5b;line-height:1.1em}.chatwith-person.gcohtech-1kwtkms .chatwith-singleperson.gcohtech-1kwtkms{color:#5c5b5b;display:flex;cursor:pointer}.gridView.gcohtech-1kwtkms .chatwith-singleperson.gcohtech-1kwtkms{display:inherit}.chatwith-person.gcohtech-1kwtkms .chatwith-avatar.gcohtech-1kwtkms{flex:1;display:flex;justify-content:center}.fullScreenMobile.chatwith-person.gcohtech-1kwtkms .chatwith-avatar.gcohtech-1kwtkms{display:block}.chatwith-person.gcohtech-1kwtkms .chatwith-persondata.gcohtech-1kwtkms{flex:3;text-align:left;display:flex;justify-content:center;flex-direction:column}.gridView.gcohtech-1kwtkms .chatwith-persondata.gcohtech-1kwtkms{text-align:center}.chatwith-avatar-pic.gcohtech-1kwtkms.gcohtech-1kwtkms{width:50px;height:50px;border-radius:100px;margin:auto;display:block}.chatwith-person.gcohtech-1kwtkms .chatwith-name.gcohtech-1kwtkms{font-weight:bold;font-size:16px;padding:5px 0;line-height:1.1em;width:160px;overflow:hidden;text-overflow:ellipsis}.chatwith-person.gcohtech-1kwtkms .chatwith-post.gcohtech-1kwtkms{width:160px;overflow:hidden;text-overflow:ellipsis}.gridView.gcohtech-1kwtkms .chatwith-name.gcohtech-1kwtkms{font-size:13px;padding:5px 0 1px;width:78px}.gridView.gcohtech-1kwtkms .chatwith-post.gcohtech-1kwtkms{width:78px}.chatwith-person.gcohtech-1kwtkms .chatwith-status.gcohtech-1kwtkms{font-size:11px;color:#ccc}.chatwith-person.gcohtech-1kwtkms .chatwith-circle.gcohtech-1kwtkms{width:10px;height:10px;border-radius:20px;display:inline-block;background:#ccc}.chatwith-person.gcohtech-1kwtkms .chatwith-active .chatwith-status.gcohtech-1kwtkms{color:green}.chatwith-person.gcohtech-1kwtkms .chatwith-active .chatwith-circle.gcohtech-1kwtkms{background:green}.chatwith-person.gcohtech-1kwtkms .chatwith-active.gcohtech-1kwtkms{cursor:pointer;line-height:1.1em}.chatwith-person.gcohtech-1kwtkms .chatwith-avatar .chatwith-circle.gcohtech-1kwtkms{display:none}@media(max-width: 767px){.chatwith-person.gcohtech-1kwtkms .chatwith-singleperson.gcohtech-1kwtkms{align-items:center}.chatwith-avatar.gcohtech-1kwtkms.gcohtech-1kwtkms{display:block;flex:0.5;margin-right:0.5em;position:relative}.dotTheme.gcohtech-1kwtkms .chatwith-avatar.gcohtech-1kwtkms{margin-right:0}.chatwith-person.gcohtech-1kwtkms .chatwith-post.gcohtech-1kwtkms{font-size:11px;width:120px;overflow:hidden;text-overflow:ellipsis}.gridView.gcohtech-1kwtkms .chatwith-post.gcohtech-1kwtkms{width:78px}.fullScreenMobile.gcohtech-1kwtkms .chatwith-post.gcohtech-1kwtkms{margin-top:8px;margin-bottom:2px}.chatwith-person.gcohtech-1kwtkms .chatwith-name.gcohtech-1kwtkms{font-weight:bold;font-size:14px;padding:3px 0;line-height:1.1em}.chatwith-status.gcohtech-1kwtkms.gcohtech-1kwtkms{display:block}.chatwith-person.gcohtech-1kwtkms .chatwith-avatar .chatwith-circle.gcohtech-1kwtkms{display:none;position:absolute;right:0;top:25px;border:2px solid #fff}.chatwith-person.gcohtech-1kwtkms .chatwith-inactive .chatwith-avatar .chatwith-avatar-pic.gcohtech-1kwtkms{filter:grayscale(100%)}.fullScreenMobile.gcohtech-1kwtkms .chatwith-name.gcohtech-1kwtkms,.fullScreenMobile.gcohtech-1kwtkms .chatwith-post.gcohtech-1kwtkms{width:240px}}.roundedTheme.gcohtech-1kwtkms .chatwith-avatar.gcohtech-1kwtkms{width:15px;flex:none}.people .roundedTheme.gcohtech-1kwtkms .chatwith-avatar.gcohtech-1kwtkms{width:1px;flex:none}.whatsappTheme.gcohtech-1kwtkms.gcohtech-1kwtkms{background-image:url('https://services.tochat.be/img/bk-wa.png')}.whatsappTheme.gcohtech-1kwtkms .chatwith-inactive .chatwith-status.gcohtech-1kwtkms{color:#555}.whatsappTheme.gcohtech-1kwtkms .chatwith-inactive .chatwith-status .chatwith-circle.gcohtech-1kwtkms{background:#555}"),
          w($r.head, t)),
        Ne(this, e, zr, Ur, s, {
          person: 0,
          data: 1,
          isGrid: 12,
          isInnerPeople: 2,
        });
    }
  }
  function Er(e, t, n) {
    const i = e.slice();
    return (i[15] = t[n]), (i[17] = n), i;
  }
  function Lr(e) {
    let t, n, i, o;
    const a = [Br, jr, Or],
      r = [];
    function s(e, t) {
      return e[0].whatsapps.length <= 3 || e[2] || e[4] || e[5]
        ? 0
        : e[0].whatsapps.length <= 6
        ? 1
        : e[17] % 3 == 0
        ? 2
        : -1;
    }
    return (
      ~(t = s(e)) && (n = r[t] = a[t](e)),
      {
        c() {
          n && n.c(), (i = I());
        },
        m(e, n) {
          ~t && r[t].m(e, n), b(e, i, n), (o = !0);
        },
        p(e, o) {
          let l = t;
          (t = s(e)),
            t === l
              ? ~t && r[t].p(e, o)
              : (n &&
                  (fe(),
                  ge(r[l], 1, 1, () => {
                    r[l] = null;
                  }),
                  me()),
                ~t
                  ? ((n = r[t]),
                    n ? n.p(e, o) : ((n = r[t] = a[t](e)), n.c()),
                    ve(n, 1),
                    n.m(i.parentNode, i))
                  : (n = null));
        },
        i(e) {
          o || (ve(n), (o = !0));
        },
        o(e) {
          ge(n), (o = !1);
        },
        d(e) {
          ~t && r[t].d(e), e && y(i);
        },
      }
    );
  }
  function Or(e) {
    let t, n, i, o, a, r, s, l, c, u;
    function d() {
      return e[12](e[17]);
    }
    i = new Ar({
      props: {
        person: e[0].whatsapps[e[17]],
        data: e[0],
        isGrid: !0,
        isInnerPeople: !0,
      },
    });
    let p = e[0].whatsapps.length > e[17] + 1 && Fr(e),
      h = e[0].whatsapps.length > e[17] + 2 && Rr(e);
    return {
      c() {
        (t = k("div")),
          (n = k("div")),
          Te(i.$$.fragment),
          (a = T()),
          p && p.c(),
          (r = T()),
          h && h.c(),
          (s = T()),
          q(n, "class", "chatwith-person-vertical gcohtech-iv31cp"),
          q(t, "class", "chatwith-people-list gcohtech-iv31cp");
      },
      m(e, o) {
        b(e, t, o),
          w(t, n),
          Ie(i, n, null),
          w(t, a),
          p && p.m(t, null),
          w(t, r),
          h && h.m(t, null),
          w(t, s),
          (l = !0),
          c || ((u = S(n, "click", d)), (c = !0));
      },
      p(n, o) {
        e = n;
        const a = {};
        1 & o && (a.person = e[0].whatsapps[e[17]]),
          1 & o && (a.data = e[0]),
          i.$set(a),
          e[0].whatsapps.length > e[17] + 1
            ? p
              ? (p.p(e, o), 1 & o && ve(p, 1))
              : ((p = Fr(e)), p.c(), ve(p, 1), p.m(t, r))
            : p &&
              (fe(),
              ge(p, 1, 1, () => {
                p = null;
              }),
              me()),
          e[0].whatsapps.length > e[17] + 2
            ? h
              ? (h.p(e, o), 1 & o && ve(h, 1))
              : ((h = Rr(e)), h.c(), ve(h, 1), h.m(t, s))
            : h &&
              (fe(),
              ge(h, 1, 1, () => {
                h = null;
              }),
              me());
      },
      i(e) {
        l ||
          (ve(i.$$.fragment, e),
          e &&
            ie(() => {
              o || (o = xe(n, Ue, {}, !0)), o.run(1);
            }),
          ve(p),
          ve(h),
          (l = !0));
      },
      o(e) {
        ge(i.$$.fragment, e),
          e && (o || (o = xe(n, Ue, {}, !1)), o.run(0)),
          ge(p),
          ge(h),
          (l = !1);
      },
      d(e) {
        e && y(t),
          Se(i),
          e && o && o.end(),
          p && p.d(),
          h && h.d(),
          (c = !1),
          u();
      },
    };
  }
  function jr(e) {
    let t,
      n,
      i =
        e[17] % 2 == 0 &&
        (function (e) {
          let t, n, i, o, a, r, s, l, c;
          function u() {
            return e[10](e[17]);
          }
          i = new Ar({
            props: {
              person: e[0].whatsapps[e[17]],
              data: e[0],
              isGrid: !0,
              isInnerPeople: !0,
            },
          });
          let d = e[0].whatsapps.length > e[17] + 1 && Pr(e);
          return {
            c() {
              (t = k("div")),
                (n = k("div")),
                Te(i.$$.fragment),
                (a = T()),
                d && d.c(),
                (r = T()),
                q(n, "class", "chatwith-person-vertical gcohtech-iv31cp"),
                q(t, "class", "chatwith-people-list gcohtech-iv31cp");
            },
            m(e, o) {
              b(e, t, o),
                w(t, n),
                Ie(i, n, null),
                w(t, a),
                d && d.m(t, null),
                w(t, r),
                (s = !0),
                l || ((c = S(n, "click", u)), (l = !0));
            },
            p(n, o) {
              e = n;
              const a = {};
              1 & o && (a.person = e[0].whatsapps[e[17]]),
                1 & o && (a.data = e[0]),
                i.$set(a),
                e[0].whatsapps.length > e[17] + 1
                  ? d
                    ? (d.p(e, o), 1 & o && ve(d, 1))
                    : ((d = Pr(e)), d.c(), ve(d, 1), d.m(t, r))
                  : d &&
                    (fe(),
                    ge(d, 1, 1, () => {
                      d = null;
                    }),
                    me());
            },
            i(e) {
              s ||
                (ve(i.$$.fragment, e),
                e &&
                  ie(() => {
                    o || (o = xe(n, Ue, {}, !0)), o.run(1);
                  }),
                ve(d),
                (s = !0));
            },
            o(e) {
              ge(i.$$.fragment, e),
                e && (o || (o = xe(n, Ue, {}, !1)), o.run(0)),
                ge(d),
                (s = !1);
            },
            d(e) {
              e && y(t), Se(i), e && o && o.end(), d && d.d(), (l = !1), c();
            },
          };
        })(e);
    return {
      c() {
        i && i.c(), (t = I());
      },
      m(e, o) {
        i && i.m(e, o), b(e, t, o), (n = !0);
      },
      p(e, t) {
        e[17] % 2 == 0 && i.p(e, t);
      },
      i(e) {
        n || (ve(i), (n = !0));
      },
      o(e) {
        ge(i), (n = !1);
      },
      d(e) {
        i && i.d(e), e && y(t);
      },
    };
  }
  function Br(e) {
    let t, n, i, o, a, r, s, l;
    function c() {
      return e[9](e[15]);
    }
    return (
      (n = new Ar({ props: { person: e[15], data: e[0], isInnerPeople: !0 } })),
      {
        c() {
          (t = k("div")),
            Te(n.$$.fragment),
            (i = T()),
            q(t, "class", "chatwith-person gcohtech-iv31cp"),
            q(
              t,
              "style",
              (o =
                (e[0].outCloseButton && !e[2]
                  ? "padding: 20px 10px 20px 10px;"
                  : "") +
                ";" +
                (e[0].whatsapps.length - 1 == e[17] && "border-bottom:0px;") +
                ";")
            );
        },
        m(e, o) {
          b(e, t, o),
            Ie(n, t, null),
            w(t, i),
            (r = !0),
            s || ((l = S(t, "click", c)), (s = !0));
        },
        p(i, a) {
          e = i;
          const s = {};
          1 & a && (s.person = e[15]),
            1 & a && (s.data = e[0]),
            n.$set(s),
            (!r ||
              (5 & a &&
                o !==
                  (o =
                    (e[0].outCloseButton && !e[2]
                      ? "padding: 20px 10px 20px 10px;"
                      : "") +
                    ";" +
                    (e[0].whatsapps.length - 1 == e[17] &&
                      "border-bottom:0px;") +
                    ";"))) &&
              q(t, "style", o);
        },
        i(e) {
          r ||
            (ve(n.$$.fragment, e),
            e &&
              ie(() => {
                a || (a = xe(t, Ue, {}, !0)), a.run(1);
              }),
            (r = !0));
        },
        o(e) {
          ge(n.$$.fragment, e),
            e && (a || (a = xe(t, Ue, {}, !1)), a.run(0)),
            (r = !1);
        },
        d(e) {
          e && y(t), Se(n), e && a && a.end(), (s = !1), l();
        },
      }
    );
  }
  function Fr(e) {
    let t, n, i, o, a, r;
    function s() {
      return e[13](e[17]);
    }
    return (
      (n = new Ar({
        props: {
          person: e[0].whatsapps[e[17] + 1],
          data: e[0],
          isGrid: !0,
          isInnerPeople: !0,
        },
      })),
      {
        c() {
          (t = k("div")),
            Te(n.$$.fragment),
            q(t, "class", "chatwith-person-vertical gcohtech-iv31cp");
        },
        m(e, i) {
          b(e, t, i),
            Ie(n, t, null),
            (o = !0),
            a || ((r = S(t, "click", s)), (a = !0));
        },
        p(t, i) {
          e = t;
          const o = {};
          1 & i && (o.person = e[0].whatsapps[e[17] + 1]),
            1 & i && (o.data = e[0]),
            n.$set(o);
        },
        i(e) {
          o ||
            (ve(n.$$.fragment, e),
            e &&
              ie(() => {
                i || (i = xe(t, Ue, {}, !0)), i.run(1);
              }),
            (o = !0));
        },
        o(e) {
          ge(n.$$.fragment, e),
            e && (i || (i = xe(t, Ue, {}, !1)), i.run(0)),
            (o = !1);
        },
        d(e) {
          e && y(t), Se(n), e && i && i.end(), (a = !1), r();
        },
      }
    );
  }
  function Rr(e) {
    let t, n, i, o, a, r;
    function s() {
      return e[14](e[17]);
    }
    return (
      (n = new Ar({
        props: {
          person: e[0].whatsapps[e[17] + 2],
          data: e[0],
          isGrid: !0,
          isInnerPeople: !0,
        },
      })),
      {
        c() {
          (t = k("div")),
            Te(n.$$.fragment),
            q(t, "class", "chatwith-person-vertical gcohtech-iv31cp");
        },
        m(e, i) {
          b(e, t, i),
            Ie(n, t, null),
            (o = !0),
            a || ((r = S(t, "click", s)), (a = !0));
        },
        p(t, i) {
          e = t;
          const o = {};
          1 & i && (o.person = e[0].whatsapps[e[17] + 2]),
            1 & i && (o.data = e[0]),
            n.$set(o);
        },
        i(e) {
          o ||
            (ve(n.$$.fragment, e),
            e &&
              ie(() => {
                i || (i = xe(t, Ue, {}, !0)), i.run(1);
              }),
            (o = !0));
        },
        o(e) {
          ge(n.$$.fragment, e),
            e && (i || (i = xe(t, Ue, {}, !1)), i.run(0)),
            (o = !1);
        },
        d(e) {
          e && y(t), Se(n), e && i && i.end(), (a = !1), r();
        },
      }
    );
  }
  function Pr(e) {
    let t, n, i, o, a, r;
    function s() {
      return e[11](e[17]);
    }
    return (
      (n = new Ar({
        props: {
          person: e[0].whatsapps[e[17] + 1],
          data: e[0],
          isGrid: !0,
          isInnerPeople: !0,
        },
      })),
      {
        c() {
          (t = k("div")),
            Te(n.$$.fragment),
            q(t, "class", "chatwith-person-vertical gcohtech-iv31cp");
        },
        m(e, i) {
          b(e, t, i),
            Ie(n, t, null),
            (o = !0),
            a || ((r = S(t, "click", s)), (a = !0));
        },
        p(t, i) {
          e = t;
          const o = {};
          1 & i && (o.person = e[0].whatsapps[e[17] + 1]),
            1 & i && (o.data = e[0]),
            n.$set(o);
        },
        i(e) {
          o ||
            (ve(n.$$.fragment, e),
            e &&
              ie(() => {
                i || (i = xe(t, Ue, {}, !0)), i.run(1);
              }),
            (o = !0));
        },
        o(e) {
          ge(n.$$.fragment, e),
            e && (i || (i = xe(t, Ue, {}, !1)), i.run(0)),
            (o = !1);
        },
        d(e) {
          e && y(t), Se(n), e && i && i.end(), (a = !1), r();
        },
      }
    );
  }
  function Vr(e) {
    let t,
      n,
      i = (e[17] < 9 || e[1] || e[4] || e[5]) && Lr(e);
    return {
      c() {
        i && i.c(), (t = I());
      },
      m(e, o) {
        i && i.m(e, o), b(e, t, o), (n = !0);
      },
      p(e, n) {
        e[17] < 9 || e[1] || e[4] || e[5]
          ? i
            ? (i.p(e, n), 50 & n && ve(i, 1))
            : ((i = Lr(e)), i.c(), ve(i, 1), i.m(t.parentNode, t))
          : i &&
            (fe(),
            ge(i, 1, 1, () => {
              i = null;
            }),
            me());
      },
      i(e) {
        n || (ve(i), (n = !0));
      },
      o(e) {
        ge(i), (n = !1);
      },
      d(e) {
        i && i.d(e), e && y(t);
      },
    };
  }
  function _r(e) {
    let t,
      n,
      i,
      o = e[0].whatsapps,
      a = [];
    for (let t = 0; t < o.length; t += 1) a[t] = Vr(Er(e, o, t));
    const r = (e) =>
      ge(a[e], 1, 1, () => {
        a[e] = null;
      });
    return {
      c() {
        t = k("div");
        for (let e = 0; e < a.length; e += 1) a[e].c();
        q(t, "class", "chatwith-peopleScroll gcohtech-iv31cp"),
          q(
            t,
            "style",
            (n =
              e[7] +
              ";--color:hsl(" +
              gr(e[0].color) +
              "deg 100% 30%);--bgcolor:hsl(" +
              gr(e[0].color) +
              "deg 100% 60%)")
          ),
          B(t, "buttonTheme", e[2]),
          B(t, "whatsappTheme", e[3]),
          B(t, "dotTheme", e[4]),
          B(t, "fullScreenMobile", e[5]),
          B(t, "scrollExtended", e[6]);
      },
      m(e, n) {
        b(e, t, n);
        for (let e = 0; e < a.length; e += 1) a[e].m(t, null);
        i = !0;
      },
      p(e, [s]) {
        if (311 & s) {
          let n;
          for (o = e[0].whatsapps, n = 0; n < o.length; n += 1) {
            const i = Er(e, o, n);
            a[n]
              ? (a[n].p(i, s), ve(a[n], 1))
              : ((a[n] = Vr(i)), a[n].c(), ve(a[n], 1), a[n].m(t, null));
          }
          for (fe(), n = o.length; n < a.length; n += 1) r(n);
          me();
        }
        (!i ||
          (129 & s &&
            n !==
              (n =
                e[7] +
                ";--color:hsl(" +
                gr(e[0].color) +
                "deg 100% 30%);--bgcolor:hsl(" +
                gr(e[0].color) +
                "deg 100% 60%)"))) &&
          q(t, "style", n),
          4 & s && B(t, "buttonTheme", e[2]),
          8 & s && B(t, "whatsappTheme", e[3]),
          16 & s && B(t, "dotTheme", e[4]),
          32 & s && B(t, "fullScreenMobile", e[5]),
          64 & s && B(t, "scrollExtended", e[6]);
      },
      i(e) {
        if (!i) {
          for (let e = 0; e < o.length; e += 1) ve(a[e]);
          i = !0;
        }
      },
      o(e) {
        a = a.filter(Boolean);
        for (let e = 0; e < a.length; e += 1) ge(a[e]);
        i = !1;
      },
      d(e) {
        e && y(t), x(a, e);
      },
    };
  }
  function Hr(e, t, n) {
    let i, o, a, r, s, l;
    const c = K();
    let { data: u } = t,
      { showall: d } = t;
    return (
      (e.$$set = (e) => {
        "data" in e && n(0, (u = e.data)),
          "showall" in e && n(1, (d = e.showall));
      }),
      (e.$$.update = () => {
        1 & e.$$.dirty && n(2, (i = "buttonTheme" === u.widgetTheme)),
          1 & e.$$.dirty && n(3, (o = "whatsappTheme" === u.widgetTheme)),
          1 & e.$$.dirty && n(4, (a = "dotTheme" === u.widgetTheme)),
          1 & e.$$.dirty && n(5, (r = u.expandFullScreenMobile)),
          3 & e.$$.dirty && n(6, (s = !0 === d && u.whatsapps.length > 9)),
          1 & e.$$.dirty &&
            n(
              7,
              (l =
                "buttonTheme" == u.widgetTheme
                  ? "background-color:" + u.color
                  : (u.widgetTheme, ""))
            );
      }),
      [
        u,
        d,
        i,
        o,
        a,
        r,
        s,
        l,
        c,
        (e) => c("message", e),
        (e) => c("message", u.whatsapps[e]),
        (e) => c("message", u.whatsapps[e + 1]),
        (e) => c("message", u.whatsapps[e]),
        (e) => c("message", u.whatsapps[e + 1]),
        (e) => c("message", u.whatsapps[e + 2]),
      ]
    );
  }
  class Gr extends qe {
    constructor(e) {
      var t;
      super(),
        document.getElementById("gcohtech-iv31cp-style") ||
          (((t = k("style")).id = "gcohtech-iv31cp-style"),
          (t.textContent =
            ".chatwith-peopleScroll.gcohtech-iv31cp.gcohtech-iv31cp{overflow-y:auto;max-height:320px;padding:5px 5px 0}.chatwith-peopleScroll.gcohtech-iv31cp.gcohtech-iv31cp::-webkit-scrollbar{width:10px;background:var(--bgcolor)}.chatwith-peopleScroll.gcohtech-iv31cp.gcohtech-iv31cp::-webkit-scrollbar-thumb{background:var(--color);border-radius:10px}.chatwith-peopleScroll.dotTheme.gcohtech-iv31cp.gcohtech-iv31cp{max-height:none}.scrollExtended.gcohtech-iv31cp.gcohtech-iv31cp{max-height:420px}.fullScreenMobile.gcohtech-iv31cp.gcohtech-iv31cp{max-height:unset}.chatwith-person.gcohtech-iv31cp.gcohtech-iv31cp{padding:5px;background:#fff;border-bottom:#efefef 1px solid}.dotTheme.gcohtech-iv31cp .chatwith-person.gcohtech-iv31cp{background:transparent;border-bottom:none}.whatsappTheme.gcohtech-iv31cp .chatwith-person.gcohtech-iv31cp{background:inherit;border-bottom:inherit}.buttonTheme.gcohtech-iv31cp .chatwith-person.gcohtech-iv31cp{padding-top:5px;background:inherit;border-bottom:inherit}.fullScreenMobile.gcohtech-iv31cp .chatwith-person.gcohtech-iv31cp{border-bottom:0px}.buttonTheme.gcohtech-iv31cp .chatwith-person.gcohtech-iv31cp:last-child{padding-bottom:10px}.chatwith-person-vertical.gcohtech-iv31cp.gcohtech-iv31cp{padding-top:10px;background:#fff}.whatsappTheme.gcohtech-iv31cp .chatwith-person-vertical.gcohtech-iv31cp{padding-top:10px;background:inherit}.chatwith-people-list.gcohtech-iv31cp.gcohtech-iv31cp{display:flex;justify-content:space-around}@media only screen and (max-width: 768px){.fullScreenMobile.gcohtech-iv31cp.gcohtech-iv31cp{display:flex;flex-direction:column;justify-content:flex-start;height:100%}}"),
          w(document.head, t)),
        Ne(this, e, Hr, _r, s, { data: 0, showall: 1 });
    }
  }
  function Zr(t) {
    let n, i, o;
    return {
      c() {
        (n = k("div")),
          (n.innerHTML =
            '<svg height="15px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" class="svg-inline--fa fa-times fa-w-11 gcohtech-1b1b4z7" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path fill="black" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" class="gcohtech-1b1b4z7"></path></svg>'),
          q(n, "class", "closer gcohtech-3ua5tt");
      },
      m(e, a) {
        b(e, n, a), i || ((o = S(n, "click", t[1])), (i = !0));
      },
      p: e,
      i: e,
      o: e,
      d(e) {
        e && y(n), (i = !1), o();
      },
    };
  }
  function Wr(e) {
    const t = K();
    return [t, () => t("closeIt")];
  }
  class Kr extends qe {
    constructor(e) {
      var t;
      super(),
        document.getElementById("gcohtech-3ua5tt-style") ||
          (((t = k("style")).id = "gcohtech-3ua5tt-style"),
          (t.textContent =
            ".closer.gcohtech-3ua5tt{position:absolute;top:10px;right:10px}"),
          w(document.head, t)),
        Ne(this, e, Wr, Zr, s, {});
    }
  }
  function Yr(e) {
    let t, n, i, o, a;
    return {
      c() {
        (t = k("div")),
          (n = $(e[1])),
          z(t, "background", e[0].color),
          q(t, "class", "welcome-back gcohtech-18kos3g");
      },
      m(e, i) {
        b(e, t, i), w(t, n), (a = !0);
      },
      p(e, i) {
        (!a || 2 & i) && M(n, e[1]),
          (!a || 1 & i) && z(t, "background", e[0].color);
      },
      i(e) {
        a ||
          (ie(() => {
            o && o.end(1), i || (i = be(t, Me, { delay: 2e3 })), i.start();
          }),
          (a = !0));
      },
      o(e) {
        i && i.invalidate(), (o = ye(t, Me, { delay: 4e3 })), (a = !1);
      },
      d(e) {
        e && y(t), e && o && o.end();
      },
    };
  }
  function Xr(t) {
    let n, i, o, a, r, s;
    return {
      c() {
        (n = k("div")),
          (i = C("svg")),
          (o = C("path")),
          q(o, "fill", "#fff"),
          q(
            o,
            "d",
            "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
          ),
          q(i, "aria-hidden", "true"),
          q(i, "focusable", "false"),
          q(i, "data-icon", "times"),
          q(i, "role", "img"),
          q(i, "xmlns", "http://www.w3.org/2000/svg"),
          q(i, "viewBox", "0 0 352 512"),
          q(i, "class", "gcohtech-18kos3g"),
          q(n, "class", "close-chatwith gcohtech-18kos3g"),
          z(n, "background-color", t[0].color);
      },
      m(e, a) {
        b(e, n, a),
          w(n, i),
          w(i, o),
          r || ((s = S(n, "click", t[3])), (r = !0));
      },
      p(e, t) {
        1 & t && z(n, "background-color", e[0].color);
      },
      i(e) {
        a ||
          ie(() => {
            (a = be(n, Me, { delay: 100 })), a.start();
          });
      },
      o: e,
      d(e) {
        e && y(n), (r = !1), s();
      },
    };
  }
  function Jr(e) {
    let t,
      n,
      i,
      o = e[2] && e[1] && Yr(e),
      a = e[0].outCloseButton && Xr(e);
    return {
      c() {
        o && o.c(), (t = T()), a && a.c(), (n = I());
      },
      m(e, r) {
        o && o.m(e, r), b(e, t, r), a && a.m(e, r), b(e, n, r), (i = !0);
      },
      p(e, [i]) {
        e[2] && e[1]
          ? o
            ? (o.p(e, i), 6 & i && ve(o, 1))
            : ((o = Yr(e)), o.c(), ve(o, 1), o.m(t.parentNode, t))
          : o &&
            (fe(),
            ge(o, 1, 1, () => {
              o = null;
            }),
            me()),
          e[0].outCloseButton
            ? a
              ? (a.p(e, i), 1 & i && ve(a, 1))
              : ((a = Xr(e)), a.c(), ve(a, 1), a.m(n.parentNode, n))
            : a && (a.d(1), (a = null));
      },
      i(e) {
        i || (ve(o), ve(a), (i = !0));
      },
      o(e) {
        ge(o), (i = !1);
      },
      d(e) {
        o && o.d(e), e && y(t), a && a.d(e), e && y(n);
      },
    };
  }
  function Qr(e, t, n) {
    const i = K();
    let { data: o } = t,
      { message: a } = t,
      r = !1;
    return (
      W(() => {
        ht() &&
          (sessionStorage.getItem("tochatsess") ||
            (sessionStorage.setItem("tochatsess", "true"), n(2, (r = !0))),
          setTimeout(() => n(2, (r = !1)), 3e3));
      }),
      (e.$$set = (e) => {
        "data" in e && n(0, (o = e.data)),
          "message" in e && n(1, (a = e.message));
      }),
      [
        o,
        a,
        r,
        function () {
          i("close");
        },
      ]
    );
  }
  class es extends qe {
    constructor(e) {
      var t;
      super(),
        document.getElementById("gcohtech-18kos3g-style") ||
          (((t = k("style")).id = "gcohtech-18kos3g-style"),
          (t.textContent =
            ".close-chatwith.gcohtech-18kos3g.gcohtech-18kos3g{top:10px;width:22px;height:22px;padding-top:2px;padding-left:2px;margin-bottom:8px;float:right;cursor:pointer}.close-chatwith.gcohtech-18kos3g svg.gcohtech-18kos3g{width:20px;height:20px;display:block}.welcome-back.gcohtech-18kos3g.gcohtech-18kos3g{box-sizing:border-box;min-width:200px;max-width:260px;padding:10px 12px;margin:10px;border-radius:6px;background-color:white;box-shadow:0 0 30px rgba(0, 0, 0, 0.3);text-align:center;font-size:.9rem;color:black}"),
          w(document.head, t)),
        Ne(this, e, Qr, Jr, s, { data: 0, message: 1 });
    }
  }
  function ts(e) {
    let t;
    function n(e, t) {
      return e[1]
        ? is
        : null !== e[0].bannerUrl && !0 === e[0].ActivateBanner
        ? ns
        : void 0;
    }
    let i = n(e),
      o = i && i(e);
    return {
      c() {
        o && o.c(), (t = I());
      },
      m(e, n) {
        o && o.m(e, n), b(e, t, n);
      },
      p(e, a) {
        i === (i = n(e)) && o
          ? o.p(e, a)
          : (o && o.d(1), (o = i && i(e)), o && (o.c(), o.m(t.parentNode, t)));
      },
      d(e) {
        o && o.d(e), e && y(t);
      },
    };
  }
  function ns(e) {
    let t,
      n,
      i = "bubbleTheme" === e[0].widgetTheme && os(e);
    function o(e, t) {
      return null !== e[0].bannerLink ? rs : as;
    }
    let a = o(e),
      r = a(e);
    return {
      c() {
        i && i.c(), (t = T()), r.c(), (n = I());
      },
      m(e, o) {
        i && i.m(e, o), b(e, t, o), r.m(e, o), b(e, n, o);
      },
      p(e, s) {
        "bubbleTheme" === e[0].widgetTheme
          ? i
            ? i.p(e, s)
            : ((i = os(e)), i.c(), i.m(t.parentNode, t))
          : i && (i.d(1), (i = null)),
          a === (a = o(e)) && r
            ? r.p(e, s)
            : (r.d(1), (r = a(e)), r && (r.c(), r.m(n.parentNode, n)));
      },
      d(e) {
        i && i.d(e), e && y(t), r.d(e), e && y(n);
      },
    };
  }
  function is(e) {
    let t,
      n =
        null !== e[0].returningBannerUrl &&
        !0 === e[0].activateReturningBanner &&
        ss(e);
    return {
      c() {
        n && n.c(), (t = I());
      },
      m(e, i) {
        n && n.m(e, i), b(e, t, i);
      },
      p(e, i) {
        null !== e[0].returningBannerUrl && !0 === e[0].activateReturningBanner
          ? n
            ? n.p(e, i)
            : ((n = ss(e)), n.c(), n.m(t.parentNode, t))
          : n && (n.d(1), (n = null));
      },
      d(e) {
        n && n.d(e), e && y(t);
      },
    };
  }
  function os(e) {
    let t;
    return {
      c() {
        (t = k("div")),
          q(t, "class", "chatwith-banner-round gcohtech-1k71pt1"),
          q(t, "style", e[2]);
      },
      m(e, n) {
        b(e, t, n);
      },
      p(e, n) {
        4 & n && q(t, "style", e[2]);
      },
      d(e) {
        e && y(t);
      },
    };
  }
  function as(e) {
    let t, n;
    return {
      c() {
        (t = k("img")),
          q(t, "class", "chatwith-banner gcohtech-1k71pt1"),
          q(t, "alt", "Banner"),
          q(t, "title", "No available link"),
          t.src !== (n = e[0].bannerUrl) && q(t, "src", n);
      },
      m(e, n) {
        b(e, t, n);
      },
      p(e, i) {
        1 & i && t.src !== (n = e[0].bannerUrl) && q(t, "src", n);
      },
      d(e) {
        e && y(t);
      },
    };
  }
  function rs(e) {
    let t, n, i, o, a;
    return {
      c() {
        (t = k("a")),
          (n = k("img")),
          q(n, "class", "chatwith-banner gcohtech-1k71pt1"),
          q(n, "alt", "Banner"),
          n.src !== (i = e[0].bannerUrl) && q(n, "src", i),
          q(t, "class", "chatwith-banner-link gcohtech-1k71pt1"),
          q(t, "href", (o = e[0].bannerLink)),
          q(t, "target", (a = e[0].bannerSelf ? "_self" : "_blank"));
      },
      m(e, i) {
        b(e, t, i), w(t, n);
      },
      p(e, r) {
        1 & r && n.src !== (i = e[0].bannerUrl) && q(n, "src", i),
          1 & r && o !== (o = e[0].bannerLink) && q(t, "href", o),
          1 & r &&
            a !== (a = e[0].bannerSelf ? "_self" : "_blank") &&
            q(t, "target", a);
      },
      d(e) {
        e && y(t);
      },
    };
  }
  function ss(e) {
    let t,
      n,
      i = "bubbleTheme" === e[0].widgetTheme && ls(e);
    function o(e, t) {
      return null !== e[0].returningBannerLink ? us : cs;
    }
    let a = o(e),
      r = a(e);
    return {
      c() {
        i && i.c(), (t = T()), r.c(), (n = I());
      },
      m(e, o) {
        i && i.m(e, o), b(e, t, o), r.m(e, o), b(e, n, o);
      },
      p(e, s) {
        "bubbleTheme" === e[0].widgetTheme
          ? i
            ? i.p(e, s)
            : ((i = ls(e)), i.c(), i.m(t.parentNode, t))
          : i && (i.d(1), (i = null)),
          a === (a = o(e)) && r
            ? r.p(e, s)
            : (r.d(1), (r = a(e)), r && (r.c(), r.m(n.parentNode, n)));
      },
      d(e) {
        i && i.d(e), e && y(t), r.d(e), e && y(n);
      },
    };
  }
  function ls(e) {
    let t;
    return {
      c() {
        (t = k("div")),
          q(t, "class", "chatwith-banner-round gcohtech-1k71pt1"),
          q(t, "style", e[2]);
      },
      m(e, n) {
        b(e, t, n);
      },
      p(e, n) {
        4 & n && q(t, "style", e[2]);
      },
      d(e) {
        e && y(t);
      },
    };
  }
  function cs(e) {
    let t, n;
    return {
      c() {
        (t = k("img")),
          q(t, "class", "chatwith-banner gcohtech-1k71pt1"),
          q(t, "alt", "Banner"),
          q(t, "title", "No available link"),
          t.src !== (n = e[0].returningBannerUrl) && q(t, "src", n);
      },
      m(e, n) {
        b(e, t, n);
      },
      p(e, i) {
        1 & i && t.src !== (n = e[0].returningBannerUrl) && q(t, "src", n);
      },
      d(e) {
        e && y(t);
      },
    };
  }
  function us(e) {
    let t, n, i, o, a;
    return {
      c() {
        (t = k("a")),
          (n = k("img")),
          q(n, "class", "chatwith-banner gcohtech-1k71pt1"),
          q(n, "alt", "Banner"),
          n.src !== (i = e[0].returningBannerUrl) && q(n, "src", i),
          q(t, "class", "chatwith-banner-link gcohtech-1k71pt1"),
          q(t, "href", (o = e[0].returningBannerLink)),
          q(t, "target", (a = e[0].returningBannerSelf ? "_self" : "_blank"));
      },
      m(e, i) {
        b(e, t, i), w(t, n);
      },
      p(e, r) {
        1 & r && n.src !== (i = e[0].returningBannerUrl) && q(n, "src", i),
          1 & r && o !== (o = e[0].returningBannerLink) && q(t, "href", o),
          1 & r &&
            a !== (a = e[0].returningBannerSelf ? "_self" : "_blank") &&
            q(t, "target", a);
      },
      d(e) {
        e && y(t);
      },
    };
  }
  function ds(t) {
    let n,
      i = !t[0].outCloseButton && ts(t);
    return {
      c() {
        i && i.c(), (n = I());
      },
      m(e, t) {
        i && i.m(e, t), b(e, n, t);
      },
      p(e, [t]) {
        e[0].outCloseButton
          ? i && (i.d(1), (i = null))
          : i
          ? i.p(e, t)
          : ((i = ts(e)), i.c(), i.m(n.parentNode, n));
      },
      i: e,
      o: e,
      d(e) {
        i && i.d(e), e && y(n);
      },
    };
  }
  function ps(e, t, n) {
    let i,
      { data: o } = t,
      { isReturnUser: a } = t;
    return (
      (e.$$set = (e) => {
        "data" in e && n(0, (o = e.data)),
          "isReturnUser" in e && n(1, (a = e.isReturnUser));
      }),
      (e.$$.update = () => {
        1 & e.$$.dirty &&
          n(
            2,
            (i = `border-bottom-color: ${o.color};${
              o.expandFullScreenMobile
                ? "width: 100%;border-bottom-width:30px;margin-top:0;" +
                  (o.countDownEnabled ? "top: 131px;" : " top: 74px;")
                : ""
            }`)
          );
      }),
      [o, a, i]
    );
  }
  class hs extends qe {
    constructor(e) {
      var t;
      super(),
        document.getElementById("gcohtech-1k71pt1-style") ||
          (((t = k("style")).id = "gcohtech-1k71pt1-style"),
          (t.textContent =
            ".chatwith-banner-link.gcohtech-1k71pt1{display:block;text-decoration:none;cursor:pointer}.chatwith-banner.gcohtech-1k71pt1{height:auto;width:100%;margin:auto;display:block}.chatwith-banner-round.gcohtech-1k71pt1{border-bottom:20px solid;border-radius:0 0 100% 100%;position:absolute;width:260px;margin-top:-8px}"),
          w(document.head, t)),
        Ne(this, e, ps, ds, s, { data: 0, isReturnUser: 1 });
    }
  }
  function fs(e) {
    let t, n;
    return {
      c() {
        (t = k("img")),
          q(t, "class", "chatwith-img gcohtech-c8hdsh"),
          z(t, "width", 150 * e[1] + 10 + "px"),
          z(t, "height", 150 * e[1] + 10 + "px"),
          q(t, "alt", "tochat-whatsapp"),
          t.src !==
            (n = e[0].videoBubbleUrl
              ? e[0].videoBubbleUrl
              : "https://widget.tochat.be/icon-1.png") && q(t, "src", n);
      },
      m(e, n) {
        b(e, t, n);
      },
      p(e, i) {
        2 & i && z(t, "width", 150 * e[1] + 10 + "px"),
          2 & i && z(t, "height", 150 * e[1] + 10 + "px"),
          1 & i &&
            t.src !==
              (n = e[0].videoBubbleUrl
                ? e[0].videoBubbleUrl
                : "https://widget.tochat.be/icon-1.png") &&
            q(t, "src", n);
      },
      d(e) {
        e && y(t);
      },
    };
  }
  function ms(e) {
    let t, n, i;
    return {
      c() {
        (t = k("video")),
          (n = k("track")),
          q(n, "kind", "captions"),
          z(t, "width", 150 * e[1] + 10 + "px"),
          z(t, "height", 150 * e[1] + 10 + "px"),
          t.src !== (i = e[0].videoBubbleUrl) && q(t, "src", i),
          (t.playsInline = !0),
          (t.loop = !0),
          (t.muted = !0),
          q(t, "class", "gcohtech-c8hdsh");
      },
      m(i, o) {
        b(i, t, o), w(t, n), e[5](t);
      },
      p(e, n) {
        2 & n && z(t, "width", 150 * e[1] + 10 + "px"),
          2 & n && z(t, "height", 150 * e[1] + 10 + "px"),
          1 & n && t.src !== (i = e[0].videoBubbleUrl) && q(t, "src", i);
      },
      d(n) {
        n && y(t), e[5](null);
      },
    };
  }
  function vs(t) {
    let n, i, o, a;
    function r(e, t) {
      return (
        (null == i || 1 & t) &&
          (i = !!(e[0].videoBubbleUrl.split(".").pop() in e[4])),
        i ? ms : fs
      );
    }
    let s = r(t, -1),
      l = s(t);
    return {
      c() {
        (n = k("div")),
          l.c(),
          q(n, "class", "chatwith-videobubble gcohtech-c8hdsh"),
          z(n, "width", 150 * t[1] + "px"),
          z(n, "height", 150 * t[1] + "px");
      },
      m(e, i) {
        b(e, n, i), l.m(n, null), o || ((a = S(n, "click", t[6])), (o = !0));
      },
      p(e, [t]) {
        s === (s = r(e, t)) && l
          ? l.p(e, t)
          : (l.d(1), (l = s(e)), l && (l.c(), l.m(n, null))),
          2 & t && z(n, "width", 150 * e[1] + "px"),
          2 & t && z(n, "height", 150 * e[1] + "px");
      },
      i: e,
      o: e,
      d(e) {
        e && y(n), l.d(), (o = !1), a();
      },
    };
  }
  function gs(e, t, n) {
    const i = K();
    let { data: o } = t,
      a = 1;
    const r = () => {
      i("click");
    };
    let s;
    const l = {
      mp4: "mp4",
      avi: "avi",
      mpg: "mpg",
      mpeg: "mpeg",
      webm: "webm",
    };
    o.videoBubbleUrl.split(".").pop() in l &&
      setInterval(() => {
        s.play();
      }, 300);
    return (
      (e.$$set = (e) => {
        "data" in e && n(0, (o = e.data));
      }),
      (e.$$.update = () => {
        1 & e.$$.dirty && o.iconSize && n(1, (a = o.iconSize.slice(1)));
      }),
      [
        o,
        a,
        s,
        r,
        l,
        function (e) {
          X[e ? "unshift" : "push"](() => {
            (s = e), n(2, s);
          });
        },
        () => r(),
      ]
    );
  }
  class ws extends qe {
    constructor(e) {
      var t;
      super(),
        document.getElementById("gcohtech-c8hdsh-style") ||
          (((t = k("style")).id = "gcohtech-c8hdsh-style"),
          (t.textContent =
            ".chatwith-videobubble.gcohtech-c8hdsh.gcohtech-c8hdsh{position:relative;justify-content:center;display:flex;border-radius:150px;top:-10px;left:-10px;-webkit-mask-image:-webkit-radial-gradient(circle, white 100%, black 100%);mask-image:-webkit-radial-gradient(circle, white 100%, black 100%);cursor:pointer;transform:translate(-10%, -10%);transition:0.3s all ease-in-out;margin-top:50px}.chatwith-videobubble.gcohtech-c8hdsh.gcohtech-c8hdsh:hover{transform:scale(1.1) translate(-10px,-10px)}.chatwith-videobubble.gcohtech-c8hdsh video.gcohtech-c8hdsh,.chatwith-videobubble.gcohtech-c8hdsh img.gcohtech-c8hdsh{top:0;bottom:0;left:0;right:0;position:absolute;-o-object-fit:cover;object-fit:cover}"),
          w(document.head, t)),
        Ne(this, e, gs, vs, s, { data: 0 });
    }
  }
  const { isNaN: bs } = ke;
  function ys(e) {
    let t, n, i, o, a, r, s, l, c, u, d;
    return {
      c() {
        (t = k("div")),
          (n = k("div")),
          (i = C("svg")),
          (o = C("g")),
          (a = C("g")),
          (r = C("path")),
          (l = C("path")),
          q(r, "fill", (s = e[0].color)),
          q(
            r,
            "d",
            "M410.6,70.4C365.1,25,304.7,0,240.5,0S115.9,25,70.4,70.4C25,115.9,0,176.3,0,240.5s25,124.6,70.4,170.1\n\t\t\t\t\t\t\tC115.8,456,176.2,481,240.5,481s124.6-25,170.1-70.4C456,365.2,481,304.8,481,240.5S456,115.9,410.6,70.4z M240.5,454\n\t\t\t\t\t\t\tC122.8,454,27,358.2,27,240.5S122.8,27,240.5,27S454,122.8,454,240.5S358.2,454,240.5,454z"
          ),
          q(l, "fill", (c = e[0].color)),
          q(
            l,
            "d",
            "M349.2,229.1l-152.6-97.9c-4.2-2.7-9.4-2.9-13.8-0.5c-4.3,2.4-7,6.9-7,11.8v195.7c0,4.9,2.7,9.5,7,11.8\n\t\t\t\t\t\t\tc2,1.1,4.3,1.7,6.5,1.7c2.5,0,5.1-0.7,7.3-2.1l152.6-97.9c3.9-2.5,6.2-6.8,6.2-11.4S353,231.6,349.2,229.1z M202.8,313.7V167.3\n\t\t\t\t\t\t\tl114.1,73.2L202.8,313.7z"
          ),
          q(i, "class", "start-icon gcohtech-2p1uaq"),
          q(i, "width", "94px"),
          q(i, "height", "94px"),
          q(i, "version", "1.1"),
          q(i, "id", "Capa_1"),
          q(i, "xmlns", "http://www.w3.org/2000/svg"),
          q(i, "xmlns:xlink", "http://www.w3.org/1999/xlink"),
          q(i, "x", "0px"),
          q(i, "y", "0px"),
          q(i, "viewBox", "0 0 481 481"),
          z(i, "enable-background", "new 0 0 481 481"),
          q(i, "xml:space", "preserve"),
          q(n, "class", "pause-screen enter-transition gcohtech-2p1uaq"),
          q(t, "class", "start-screen-container z-index-10000 gcohtech-2p1uaq");
      },
      m(s, c) {
        b(s, t, c),
          w(t, n),
          w(n, i),
          w(i, o),
          w(o, a),
          w(a, r),
          w(a, l),
          u || ((d = S(i, "click", e[17])), (u = !0));
      },
      p(e, t) {
        1 & t && s !== (s = e[0].color) && q(r, "fill", s),
          1 & t && c !== (c = e[0].color) && q(l, "fill", c);
      },
      d(e) {
        e && y(t), (u = !1), d();
      },
    };
  }
  function xs(e) {
    let t, n, i, o;
    function a(e, t) {
      return e[0].videoAgentButtonText ? Cs : ks;
    }
    let r = a(e),
      s = r(e);
    return {
      c() {
        (t = k("div")),
          (n = k("button")),
          s.c(),
          z(n, "background", e[0].color),
          z(n, "color", "#fff"),
          q(n, "class", "gcohtech-2p1uaq"),
          q(t, "class", "chatwith-video-closebutton gcohtech-2p1uaq"),
          z(t, "opacity", e[4] ? 1 : 0);
      },
      m(a, r) {
        b(a, t, r),
          w(t, n),
          s.m(n, null),
          i || ((o = S(n, "click", e[27])), (i = !0));
      },
      p(e, i) {
        r === (r = a(e)) && s
          ? s.p(e, i)
          : (s.d(1), (s = r(e)), s && (s.c(), s.m(n, null))),
          1 & i && z(n, "background", e[0].color),
          16 & i && z(t, "opacity", e[4] ? 1 : 0);
      },
      d(e) {
        e && y(t), s.d(), (i = !1), o();
      },
    };
  }
  function ks(t) {
    let n;
    return {
      c() {
        n = $("Let's chat!");
      },
      m(e, t) {
        b(e, n, t);
      },
      p: e,
      d(e) {
        e && y(n);
      },
    };
  }
  function Cs(e) {
    let t,
      n = e[0].videoAgentButtonText + "";
    return {
      c() {
        t = $(n);
      },
      m(e, n) {
        b(e, t, n);
      },
      p(e, i) {
        1 & i && n !== (n = e[0].videoAgentButtonText + "") && M(t, n);
      },
      d(e) {
        e && y(t);
      },
    };
  }
  function $s(t) {
    let n,
      i,
      o,
      r,
      s,
      l,
      c,
      u,
      p,
      h,
      m,
      v,
      g,
      x,
      I,
      N,
      D,
      U,
      A,
      E,
      L,
      O,
      j,
      F,
      R,
      P,
      V,
      _,
      H,
      G,
      Z,
      W,
      K,
      Y,
      X,
      J,
      Q,
      ee,
      te,
      ne,
      oe,
      ae,
      re,
      se,
      le = t[13](t[3]) + "",
      ce = t[13](t[4]) + "",
      ue = !1,
      de = !0,
      pe = t[8] && ys(t);
    function he() {
      cancelAnimationFrame(H),
        R.paused || ((H = f(he)), (ue = !0)),
        t[20].call(R);
    }
    let fe = t[0].videoAgent && xs(t);
    return {
      c() {
        (n = k("div")),
          pe && pe.c(),
          (i = T()),
          (o = k("div")),
          (r = C("svg")),
          (s = C("path")),
          (l = T()),
          (c = k("div")),
          (u = k("progress")),
          (h = T()),
          (m = k("span")),
          (v = $(le)),
          (g = $(" / ")),
          (x = $(ce)),
          (I = T()),
          (N = C("svg")),
          (D = C("path")),
          (U = C("path")),
          (E = C("path")),
          (O = C("path")),
          (F = T()),
          (R = k("video")),
          (P = k("track")),
          (G = T()),
          (Z = k("div")),
          (W = C("svg")),
          (K = C("circle")),
          (Y = C("path")),
          (X = C("path")),
          (J = T()),
          (Q = k("div")),
          (ee = C("svg")),
          (te = C("circle")),
          (ne = C("path")),
          (oe = C("path")),
          (ae = T()),
          fe && fe.c(),
          q(
            s,
            "d",
            "M 2 2 L 4.9394531 4.9394531 C 3.1262684 6.7482143 2 9.2427079 2 12 C 2 17.514 6.486 22 12 22 C 17.514 22 22 17.514 22 12 C 22 6.486 17.514 2 12 2 L 12 4 C 16.411 4 20 7.589 20 12 C 20 16.411 16.411 20 12 20 C 7.589 20 4 16.411 4 12 C 4 9.7940092 4.9004767 7.7972757 6.3496094 6.3496094 L 9 9 L 9 2 L 2 2 z"
          ),
          q(r, "xmlns", "http://www.w3.org/2000/svg"),
          q(r, "x", "0px"),
          q(r, "y", "0px"),
          q(r, "width", "32"),
          q(r, "height", "32"),
          q(r, "viewBox", "0 0 24 24"),
          q(r, "transform", "scale(-1 -1)"),
          z(r, "fill", "#ffffff"),
          q(r, "class", "gcohtech-2p1uaq"),
          (u.value = p = t[3] / t[4] || 0),
          q(u, "class", "gcohtech-2p1uaq"),
          q(m, "class", "time gcohtech-2p1uaq"),
          q(c, "class", "chatwith-video-info gcohtech-2p1uaq"),
          q(
            D,
            "d",
            "M253.674,80.899L90.27,197.638H26.392C11.857,197.638,0,209.495,0,224.03v70.457c0,14.534,11.857,26.392,26.392,26.392\n\t\t\t\tH90.27l163.557,116.739c11.857,8.491,21.419,3.52,21.419-11.016V91.915C275.246,77.38,265.607,72.407,253.674,80.899z"
          ),
          q(U, "class", (A = d(t[5]) + " gcohtech-2p1uaq")),
          q(
            U,
            "d",
            "M342.338,81.97c-12.164,0-22.033,9.869-22.033,22.032s9.869,22.032,22.033,22.032c72.98,0,132.115,59.135,132.115,132.116\n\t\t\t\tc0,72.981-59.135,132.115-132.115,132.115c-12.164,0-22.033,9.869-22.033,22.032s9.869,22.032,22.033,22.032\n\t\t\t\tc97.307,0,176.18-78.872,176.18-176.18C518.518,160.918,439.723,81.97,342.338,81.97z"
          ),
          q(E, "class", (L = d(t[5]) + " gcohtech-2p1uaq")),
          q(
            E,
            "d",
            "M342.338,313.153c-12.164,0-22.033,9.868-22.033,22.031c0,12.164,9.869,22.032,22.033,22.032\n\t\t\t\tc54.773,0,99.066-44.37,99.066-99.067c0-54.698-44.369-99.067-99.066-99.067c-12.164,0-22.033,9.868-22.033,22.032\n\t\t\t\ts9.869,22.032,22.033,22.032c30.369,0,55.08,24.633,55.08,55.08C397.418,288.673,372.785,313.153,342.338,313.153z"
          ),
          q(O, "class", (j = d(t[6]) + " gcohtech-2p1uaq")),
          q(
            O,
            "d",
            "M452.115,260.329l62.5-62.501c5.201-5.202,5.201-13.846,0-19.048l-12.623-12.623c-5.201-5.202-13.846-5.202-19.049,0\n\t\t\tl-62.5,62.5l-62.041-62.042c-5.201-5.202-13.846-5.202-19.049,0l-12.623,12.623c-5.201,5.202-5.201,13.847,0,19.048l62.043,62.042\n\t\t\tL326.73,322.37c-5.201,5.202-5.201,13.847,0,19.049l12.623,12.622c5.203,5.202,13.848,5.202,19.049,0L420.443,292l62.041,62.041\n\t\t\tc5.203,5.202,13.848,5.202,19.049,0l12.623-12.622c5.201-5.202,5.201-13.847,0-19.049L452.115,260.329z"
          ),
          q(N, "xmlns", "http://www.w3.org/2000/svg"),
          q(N, "x", "0px"),
          q(N, "y", "0px"),
          q(N, "width", "32"),
          q(N, "height", "32"),
          q(N, "viewBox", "0 0 518.518 518.518"),
          z(N, "enable-background", "new 0 0 518.518 518.518"),
          z(N, "fill", "#ffffff"),
          q(N, "class", "gcohtech-2p1uaq"),
          q(o, "class", "chatwith-video-controls gcohtech-2p1uaq"),
          z(o, "opacity", t[4] ? 1 : 0),
          q(P, "kind", "captions"),
          R.src !==
            (V =
              t[1] && t[0].returningVideoSplashUrl
                ? t[0].returningVideoSplashUrl
                : t[0].videoSplashUrl) && q(R, "src", V),
          q(R, "style", (_ = "border-radius: " + t[0].rounding + "px;")),
          (R.playsInline = !0),
          q(R, "class", "gcohtech-2p1uaq"),
          void 0 === t[4] && ie(() => t[21].call(R)),
          q(K, "cx", "12"),
          q(K, "cy", "12"),
          q(K, "r", "10"),
          z(K, "fill", "white"),
          q(
            Y,
            "d",
            "M14.812,16.215L7.785,9.188c-0.384-0.384-0.384-1.008,0-1.392l0.011-0.011c0.384-0.384,1.008-0.384,1.392,0l7.027,7.027 c0.384,0.384,0.384,1.008,0,1.392l-0.011,0.011C15.82,16.599,15.196,16.599,14.812,16.215z"
          ),
          q(
            X,
            "d",
            "M7.785,14.812l7.027-7.027c0.384-0.384,1.008-0.384,1.392,0l0.011,0.011c0.384,0.384,0.384,1.008,0,1.392l-7.027,7.027 c-0.384,0.384-1.008,0.384-1.392,0l-0.011-0.011C7.401,15.82,7.401,15.196,7.785,14.812z"
          ),
          q(W, "xmlns", "http://www.w3.org/2000/svg"),
          q(W, "viewBox", "0 0 24 24"),
          q(W, "width", "32px"),
          q(W, "height", "32px"),
          z(W, "fill", "black"),
          q(Z, "class", "chatwith-video-close gcohtech-2p1uaq"),
          z(Z, "opacity", t[4] ? 1 : 0),
          q(te, "cx", "12"),
          q(te, "cy", "12"),
          q(te, "r", "10"),
          z(te, "fill", "white"),
          q(
            ne,
            "d",
            "M14.812,16.215L7.785,9.188c-0.384-0.384-0.384-1.008,0-1.392l0.011-0.011c0.384-0.384,1.008-0.384,1.392,0l7.027,7.027 c0.384,0.384,0.384,1.008,0,1.392l-0.011,0.011C15.82,16.599,15.196,16.599,14.812,16.215z"
          ),
          q(
            oe,
            "d",
            "M7.785,14.812l7.027-7.027c0.384-0.384,1.008-0.384,1.392,0l0.011,0.011c0.384,0.384,0.384,1.008,0,1.392l-7.027,7.027 c-0.384,0.384-1.008,0.384-1.392,0l-0.011-0.011C7.401,15.82,7.401,15.196,7.785,14.812z"
          ),
          q(ee, "xmlns", "http://www.w3.org/2000/svg"),
          q(ee, "viewBox", "0 0 24 24"),
          q(ee, "width", "32px"),
          q(ee, "height", "32px"),
          z(ee, "fill", "black"),
          q(Q, "class", "chatwith-video-close gcohtech-2p1uaq"),
          z(Q, "opacity", t[4] ? 1 : 0),
          q(n, "class", "chatwith-video gcohtech-2p1uaq"),
          B(n, "fullScreenMobile", t[9]);
      },
      m(e, a) {
        b(e, n, a),
          pe && pe.m(n, null),
          w(n, i),
          w(n, o),
          w(o, r),
          w(r, s),
          w(o, l),
          w(o, c),
          w(c, u),
          w(c, h),
          w(c, m),
          w(m, v),
          w(m, g),
          w(m, x),
          w(o, I),
          w(o, N),
          w(N, D),
          w(N, U),
          w(N, E),
          w(N, O),
          w(n, F),
          w(n, R),
          w(R, P),
          (R.muted = t[7]),
          t[24](R),
          w(n, G),
          w(n, Z),
          w(Z, W),
          w(W, K),
          w(W, Y),
          w(W, X),
          w(n, J),
          w(n, Q),
          w(Q, ee),
          w(ee, te),
          w(ee, ne),
          w(ee, oe),
          w(n, ae),
          fe && fe.m(n, null),
          re ||
            ((se = [
              S(r, "click", t[18]),
              S(N, "click", t[19]),
              S(R, "timeupdate", he),
              S(R, "durationchange", t[21]),
              S(R, "volumechange", t[22]),
              S(R, "play", t[23]),
              S(R, "pause", t[23]),
              S(R, "mousemove", t[14]),
              S(W, "click", t[25]),
              S(ee, "click", t[26]),
            ]),
            (re = !0));
      },
      p(e, [t]) {
        e[8]
          ? pe
            ? pe.p(e, t)
            : ((pe = ys(e)), pe.c(), pe.m(n, i))
          : pe && (pe.d(1), (pe = null)),
          24 & t && p !== (p = e[3] / e[4] || 0) && (u.value = p),
          8 & t && le !== (le = e[13](e[3]) + "") && M(v, le),
          16 & t && ce !== (ce = e[13](e[4]) + "") && M(x, ce),
          32 & t && A !== (A = d(e[5]) + " gcohtech-2p1uaq") && q(U, "class", A),
          32 & t && L !== (L = d(e[5]) + " gcohtech-2p1uaq") && q(E, "class", L),
          64 & t && j !== (j = d(e[6]) + " gcohtech-2p1uaq") && q(O, "class", j),
          16 & t && z(o, "opacity", e[4] ? 1 : 0),
          3 & t &&
            R.src !==
              (V =
                e[1] && e[0].returningVideoSplashUrl
                  ? e[0].returningVideoSplashUrl
                  : e[0].videoSplashUrl) &&
            q(R, "src", V),
          1 & t &&
            _ !== (_ = "border-radius: " + e[0].rounding + "px;") &&
            q(R, "style", _),
          !ue && 8 & t && !bs(e[3]) && (R.currentTime = e[3]),
          (ue = !1),
          128 & t && (R.muted = e[7]),
          256 & t && de !== (de = e[8]) && R[de ? "pause" : "play"](),
          16 & t && z(Z, "opacity", e[4] ? 1 : 0),
          16 & t && z(Q, "opacity", e[4] ? 1 : 0),
          e[0].videoAgent
            ? fe
              ? fe.p(e, t)
              : ((fe = xs(e)), fe.c(), fe.m(n, null))
            : fe && (fe.d(1), (fe = null)),
          512 & t && B(n, "fullScreenMobile", e[9]);
      },
      i: e,
      o: e,
      d(e) {
        e && y(n), pe && pe.d(), t[24](null), fe && fe.d(), (re = !1), a(se);
      },
    };
  }
  function Ts(e, t, n) {
    let i;
    const o = K();
    let a,
      r,
      s,
      l = 0,
      c = "chatwith-volume-show",
      u = "chatwith-volume-hide",
      d = !1,
      { data: p } = t,
      { width: h } = t,
      { height: f } = t,
      { isReturnUser: m } = t,
      v = setTimeout(() => {
        r && a.play();
      }, 300);
    const g = () => {
        n(7, (d = !d)), n(5, ([c, u] = [u, c]), c, n(6, u));
      },
      w = () => {
        n(3, (l = 0)), a.play();
      },
      b = (e) => {
        clearInterval(v), o("close", e);
      };
    return (
      (e.$$set = (e) => {
        "data" in e && n(0, (p = e.data)),
          "width" in e && n(15, (h = e.width)),
          "height" in e && n(16, (f = e.height)),
          "isReturnUser" in e && n(1, (m = e.isReturnUser));
      }),
      (e.$$.update = () => {
        1 & e.$$.dirty && n(9, (i = p.expandFullScreenMobile));
      }),
      [
        p,
        m,
        a,
        l,
        r,
        c,
        u,
        d,
        s,
        i,
        g,
        w,
        b,
        (e) => {
          if (isNaN(e)) return "...";
          const t = Math.floor(e / 60);
          return (e = Math.floor(e % 60)) < 10 && (e = "0" + e), `${t}:${e}`;
        },
        function (e) {
          if (!r) return;
          if ("touchmove" !== e.type && !(1 & e.buttons)) return;
          const t = "touchmove" === e.type ? e.touches[0].clientX : e.clientX,
            { left: i, right: o } = this.getBoundingClientRect();
          n(3, (l = (r * (t - i)) / (o - i)));
        },
        h,
        f,
        () => w(),
        () => w(),
        () => g(),
        function () {
          (l = this.currentTime), n(3, l);
        },
        function () {
          (r = this.duration), n(4, r);
        },
        function () {
          (d = this.muted), n(7, d);
        },
        function () {
          (s = this.paused), n(8, s);
        },
        function (e) {
          X[e ? "unshift" : "push"](() => {
            (a = e), n(2, a);
          });
        },
        () => b(),
        () => b(!1),
        () => b(!0),
      ]
    );
  }
  class Is extends qe {
    constructor(e) {
      var t;
      super(),
        document.getElementById("gcohtech-2p1uaq-style") ||
          (((t = k("style")).id = "gcohtech-2p1uaq-style"),
          (t.textContent =
            ".chatwith-video.gcohtech-2p1uaq.gcohtech-2p1uaq{position:relative;justify-content:center;display:flex}.fullScreenMobile.chatwith-video.gcohtech-2p1uaq.gcohtech-2p1uaq{width:100%;height:100%}.chatwith-video.gcohtech-2p1uaq video.gcohtech-2p1uaq{top:0;bottom:0;left:0;right:0;position:absolute;-o-object-fit:cover;object-fit:cover;width:225px;height:400px}.fullScreenMobile.chatwith-video.gcohtech-2p1uaq video.gcohtech-2p1uaq{width:100%;height:100%}.chatwith-video-controls.gcohtech-2p1uaq.gcohtech-2p1uaq{width:100%;transition:opacity 1s;display:flex;margin:30px 20px;z-index:999}.fullScreenMobile.gcohtech-2p1uaq .chatwith-video-controls.gcohtech-2p1uaq{width:100%;height:100%}.chatwith-video-controls.gcohtech-2p1uaq svg.gcohtech-2p1uaq:first-child,.chatwith-video-controls.gcohtech-2p1uaq svg.gcohtech-2p1uaq:last-child{padding-left:10px;cursor:pointer}.chatwith-video-info.gcohtech-2p1uaq.gcohtech-2p1uaq{width:100%;text-align:right}.chatwith-video-info.gcohtech-2p1uaq span.gcohtech-2p1uaq{padding:0.2em 0.5em;color:white;font-size:0.8em;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.chatwith-video-info.gcohtech-2p1uaq progress.gcohtech-2p1uaq{width:100%;height:8px}.chatwith-video-info.gcohtech-2p1uaq progress.gcohtech-2p1uaq::-webkit-progress-bar{background-color:rgba(0,0,0,0.2)}.chatwith-video-info.gcohtech-2p1uaq progress.gcohtech-2p1uaq::-webkit-progress-value{background-color:rgba(255,255,255,0.6)}.chatwith-volume-show.gcohtech-2p1uaq.gcohtech-2p1uaq{display:block}.chatwith-volume-hide.gcohtech-2p1uaq.gcohtech-2p1uaq{display:none}.chatwith-video-close.gcohtech-2p1uaq.gcohtech-2p1uaq{top:-12px;z-index:999;position:absolute;cursor:pointer;transition:opacity 1s}.chatwith-video-closebutton.gcohtech-2p1uaq.gcohtech-2p1uaq{top:320px;z-index:999;position:absolute;transition:opacity 1s}.fullScreenMobile.gcohtech-2p1uaq .chatwith-video-closebutton.gcohtech-2p1uaq{top:unset;bottom:80px}.chatwith-video-closebutton.gcohtech-2p1uaq button.gcohtech-2p1uaq{width:100%;text-align:center;padding:13px;box-sizing:border-box;border-radius:5px;margin-bottom:10px;border:none;font-size:16px;cursor:pointer;opacity:0;-webkit-animation:gcohtech-2p1uaq-closebutton 1s 2s forwards;animation:gcohtech-2p1uaq-closebutton 1s 2s forwards}@keyframes gcohtech-2p1uaq-closebutton{to{opacity:1}}@-webkit-keyframes gcohtech-2p1uaq-closebutton{to{opacity:1}}.start-screen-container.gcohtech-2p1uaq.gcohtech-2p1uaq{z-index:42;border-radius:10px;position:absolute;left:0;width:100%;height:400px;display:flex;justify-content:center;align-items:center;background:linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.6));z-index:10000}.fullScreenMobile.gcohtech-2p1uaq .start-screen-container.gcohtech-2p1uaq{height:100%}.pause-screen.gcohtech-2p1uaq.gcohtech-2p1uaq{z-index:20;display:flex;justify-content:center;justify-items:center;flex-direction:column;align-items:center;cursor:pointer}.start-icon.gcohtech-2p1uaq.gcohtech-2p1uaq{width:75px;height:75px;border-radius:50%;align-self:center;margin-top:20px;transition:all 0.2s ease-in-out}.pause-screen.gcohtech-2p1uaq:hover>.start-icon.gcohtech-2p1uaq{transform:scale(1.1)}.enter-transition.gcohtech-2p1uaq.gcohtech-2p1uaq{visibility:visible;opacity:1;transform:scale(1);transition:all 250ms}"),
          w(document.head, t)),
        Ne(this, e, Ts, $s, s, {
          data: 0,
          width: 15,
          height: 16,
          isReturnUser: 1,
        });
    }
  }
  function Ss(e, t, n) {
    const i = e.slice();
    return (i[3] = t[n]), (i[5] = n), i;
  }
  function Ns(e) {
    let t,
      n,
      i,
      o,
      a,
      r,
      s,
      l = e[3].name + "";
    function c() {
      return e[2](e[3]);
    }
    return {
      c() {
        (t = k("div")),
          (n = $(l)),
          (i = T()),
          q(t, "class", "question-form-agents gcohtech-150wffz");
      },
      m(e, o) {
        b(e, t, o),
          w(t, n),
          w(t, i),
          (a = !0),
          r || ((s = S(t, "click", c)), (r = !0));
      },
      p(t, i) {
        (e = t), (!a || 1 & i) && l !== (l = e[3].name + "") && M(n, l);
      },
      i(e) {
        a ||
          (e &&
            ie(() => {
              o || (o = xe(t, Ue, {}, !0)), o.run(1);
            }),
          (a = !0));
      },
      o(e) {
        e && (o || (o = xe(t, Ue, {}, !1)), o.run(0)), (a = !1);
      },
      d(e) {
        e && y(t), e && o && o.end(), (r = !1), s();
      },
    };
  }
  function qs(e) {
    let t,
      n,
      i,
      o,
      a,
      r = e[0].question + "",
      s = e[0].agents,
      l = [];
    for (let t = 0; t < s.length; t += 1) l[t] = Ns(Ss(e, s, t));
    const c = (e) =>
      ge(l[e], 1, 1, () => {
        l[e] = null;
      });
    return {
      c() {
        (t = k("div")), (n = k("div")), (i = $(r)), (o = T());
        for (let e = 0; e < l.length; e += 1) l[e].c();
        q(n, "class", "question-form-question gcohtech-150wffz"),
          q(t, "class", "question-form-container gcohtech-150wffz");
      },
      m(e, r) {
        b(e, t, r), w(t, n), w(n, i), w(t, o);
        for (let e = 0; e < l.length; e += 1) l[e].m(t, null);
        a = !0;
      },
      p(e, [n]) {
        if (
          ((!a || 1 & n) && r !== (r = e[0].question + "") && M(i, r), 3 & n)
        ) {
          let i;
          for (s = e[0].agents, i = 0; i < s.length; i += 1) {
            const o = Ss(e, s, i);
            l[i]
              ? (l[i].p(o, n), ve(l[i], 1))
              : ((l[i] = Ns(o)), l[i].c(), ve(l[i], 1), l[i].m(t, null));
          }
          for (fe(), i = s.length; i < l.length; i += 1) c(i);
          me();
        }
      },
      i(e) {
        if (!a) {
          for (let e = 0; e < s.length; e += 1) ve(l[e]);
          a = !0;
        }
      },
      o(e) {
        l = l.filter(Boolean);
        for (let e = 0; e < l.length; e += 1) ge(l[e]);
        a = !1;
      },
      d(e) {
        e && y(t), x(l, e);
      },
    };
  }
  function Ds(e, t, n) {
    const i = K();
    let { data: o } = t;
    return (
      (e.$$set = (e) => {
        "data" in e && n(0, (o = e.data));
      }),
      [
        o,
        i,
        (e) =>
          i(
            "message",
            o.whatsapps.find((t) => t.id == e.id)
          ),
      ]
    );
  }
  class Ms extends qe {
    constructor(e) {
      var t;
      super(),
        document.getElementById("gcohtech-150wffz-style") ||
          (((t = k("style")).id = "gcohtech-150wffz-style"),
          (t.textContent =
            ".question-form-container.gcohtech-150wffz{overflow-y:auto;max-height:320px;padding:0 5px 0 10px}.question-form-question.gcohtech-150wffz{color:#444847;font-size:15px;font-weight:bold;margin-bottom:10px;padding:8px;border-bottom-left-radius:10px;border-bottom-right-radius:10px;border-top-right-radius:10px}.question-form-agents.gcohtech-150wffz{background:#fff;border-bottom:#efefef 1px solid;color:#444847;font-size:15px;margin-bottom:10px;padding:8px 8px 8px 20px;border-bottom-left-radius:10px;border-bottom-right-radius:10px;border-top-right-radius:10px;cursor:pointer}"),
          w(document.head, t)),
        Ne(this, e, Ds, qs, s, { data: 0 });
    }
  }
  const { window: Us } = ke;
  function zs(e) {
    let t,
      n,
      i,
      o,
      r,
      s,
      l,
      c,
      u,
      d,
      p,
      h,
      f,
      m,
      v,
      g,
      x,
      C,
      I = e[0].title + "",
      D = e[0].description + "",
      U = e[0].iconUrl && As(e);
    return {
      c() {
        (t = k("div")),
          (n = k("div")),
          (n.innerHTML =
            '<svg aria-hidden="true" focusable="false" data-icon="times" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512" class="gcohtech-an7sv7"><path fill="#c8c8c8" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>'),
          (o = T()),
          U && U.c(),
          (r = T()),
          (s = k("div")),
          (l = k("div")),
          (c = $(I)),
          (u = T()),
          (d = k("div")),
          (p = $(D)),
          q(n, "class", "close-chatwith gcohtech-an7sv7"),
          q(l, "class", "chatwith-notification-title gcohtech-an7sv7"),
          q(d, "class", "chatwith-notification-description gcohtech-an7sv7"),
          q(s, "class", "chatwith-notification-wrapper gcohtech-an7sv7"),
          q(s, "style", (h = !e[0]?.iconUrl && "padding-left: 5px;")),
          q(t, "class", "chatwith-notification gcohtech-an7sv7"),
          q(t, "style", (f = e[0]?.url && "cursor: pointer;")),
          B(t, "positionRight", e[2]);
      },
      m(i, a) {
        b(i, t, a),
          w(t, n),
          w(t, o),
          U && U.m(t, null),
          w(t, r),
          w(t, s),
          w(s, l),
          w(l, c),
          w(s, u),
          w(s, d),
          w(d, p),
          (g = !0),
          x || ((C = [S(n, "click", N(e[4])), S(t, "click", e[5])]), (x = !0));
      },
      p(e, n) {
        e[0].iconUrl
          ? U
            ? U.p(e, n)
            : ((U = As(e)), U.c(), U.m(t, r))
          : U && (U.d(1), (U = null)),
          (!g || 1 & n) && I !== (I = e[0].title + "") && M(c, I),
          (!g || 1 & n) && D !== (D = e[0].description + "") && M(p, D),
          (!g ||
            (1 & n && h !== (h = !e[0]?.iconUrl && "padding-left: 5px;"))) &&
            q(s, "style", h),
          (!g || (1 & n && f !== (f = e[0]?.url && "cursor: pointer;"))) &&
            q(t, "style", f),
          4 & n && B(t, "positionRight", e[2]);
      },
      i(e) {
        g ||
          (i ||
            ie(() => {
              (i = be(n, Me, { delay: 100 })), i.start();
            }),
          ie(() => {
            v && v.end(1), m || (m = be(t, Me, { delay: 1e3 })), m.start();
          }),
          (g = !0));
      },
      o(e) {
        m && m.invalidate(), (v = ye(t, Me, { delay: 100 })), (g = !1);
      },
      d(e) {
        e && y(t), U && U.d(), e && v && v.end(), (x = !1), a(C);
      },
    };
  }
  function As(e) {
    let t, n, i;
    return {
      c() {
        (t = k("div")),
          (n = k("img")),
          q(n, "class", "chatwith-notification-img gcohtech-an7sv7"),
          q(n, "alt", ""),
          n.src !== (i = e[0].iconUrl) && q(n, "src", i),
          q(t, "class", "chatwith-notification-icon gcohtech-an7sv7");
      },
      m(e, i) {
        b(e, t, i), w(t, n);
      },
      p(e, t) {
        1 & t && n.src !== (i = e[0].iconUrl) && q(n, "src", i);
      },
      d(e) {
        e && y(t);
      },
    };
  }
  function Es(e) {
    let t, n, i, o;
    ie(e[7]);
    let a = e[3] && zs(e);
    return {
      c() {
        a && a.c(), (t = I());
      },
      m(r, s) {
        a && a.m(r, s),
          b(r, t, s),
          (n = !0),
          i || ((o = S(Us, "resize", e[7])), (i = !0));
      },
      p(e, [n]) {
        e[3]
          ? a
            ? (a.p(e, n), 8 & n && ve(a, 1))
            : ((a = zs(e)), a.c(), ve(a, 1), a.m(t.parentNode, t))
          : a &&
            (fe(),
            ge(a, 1, 1, () => {
              a = null;
            }),
            me());
      },
      i(e) {
        n || (ve(a), (n = !0));
      },
      o(e) {
        ge(a), (n = !1);
      },
      d(e) {
        a && a.d(e), e && y(t), (i = !1), o();
      },
    };
  }
  function Ls(e, t, n) {
    let i,
      o,
      a,
      { popupInfo: r } = t,
      s = !1;
    return (
      (e.$$set = (e) => {
        "popupInfo" in e && n(0, (r = e.popupInfo));
      }),
      (e.$$.update = () => {
        1 & e.$$.dirty && n(2, (i = "right" === r?.position)),
          67 & e.$$.dirty &&
            n(
              3,
              (o =
                !s &&
                r?.activePopUp &&
                (a > 768 ? r?.displayOnLargeScreens : r?.displayOnSmallScreens))
            );
      }),
      [
        r,
        a,
        i,
        o,
        () => {
          n(6, (s = !0));
        },
        () => {
          r?.url && window.open(r?.url, r?.urlOpenNewTab ? "_blank" : "_self");
        },
        s,
        function () {
          n(1, (a = Us.innerWidth));
        },
      ]
    );
  }
  class Os extends qe {
    constructor(e) {
      var t;
      super(),
        document.getElementById("gcohtech-an7sv7-style") ||
          (((t = k("style")).id = "gcohtech-an7sv7-style"),
          (t.textContent =
            '.close-chatwith.gcohtech-an7sv7.gcohtech-an7sv7{top:4px;width:22px;height:22px;padding-top:2px;padding-left:2px;margin-bottom:8px;float:right;cursor:pointer;position:absolute;left:267px}.close-chatwith.gcohtech-an7sv7 svg.gcohtech-an7sv7{width:15px;height:15px;display:block}.chatwith-notification.gcohtech-an7sv7.gcohtech-an7sv7{box-sizing:border-box;width:290px;padding:10px 12px;margin:10px;border-radius:6px;background-color:white;box-shadow:0 0 10px rgba(14, 9, 9, 0.3);text-align:center;color:black;position:fixed;left:0px;bottom:0px;display:flex;z-index:99999;cursor:default\n  }.chatwith-notification.positionRight.gcohtech-an7sv7.gcohtech-an7sv7{right:0px;left:unset}.chatwith-notification.gcohtech-an7sv7 .chatwith-notification-icon.gcohtech-an7sv7{display:flex;align-items:center}.chatwith-notification.gcohtech-an7sv7 .chatwith-notification-icon img.gcohtech-an7sv7{width:50px;height:50px}.chatwith-notification.gcohtech-an7sv7 .chatwith-notification-wrapper.gcohtech-an7sv7{font-weight:normal;font-family:"Inter", Arial, sans-serif;font-size:16px;text-align:left;padding-left:10px}.chatwith-notification.gcohtech-an7sv7 .chatwith-notification-wrapper .chatwith-notification-title.gcohtech-an7sv7{font-weight:bold;padding-right:10px;padding-bottom:3px}.chatwith-notification.gcohtech-an7sv7 .chatwith-notification-wrapper .chatwith-notification-description.gcohtech-an7sv7{font-size:13px}'),
          w(document.head, t)),
        Ne(this, e, Ls, Es, s, { popupInfo: 0 });
    }
  }
  function js(e) {
    let t,
      n,
      i,
      o,
      a,
      r,
      s,
      l,
      c,
      u,
      d,
      p = !e[22] && Bs(e);
    (o = new vr({
      props: { data: e[0], agentsView: e[9], embed: e[1], showRounded: e[24] },
    })),
      o.$on("close", e[30]);
    const h = [Hs, _s, Vs, Ps, Rs, Fs],
      f = [];
    function m(e, t) {
      return !0 === e[8]
        ? 0
        : e[6]
        ? 1
        : e[5] && !0 === e[17].chatform
        ? 2
        : e[5]
        ? 3
        : e[7]
        ? 4
        : 5;
    }
    (r = m(e)), (s = f[r] = h[r](e));
    let v = !e[22] && ol(e);
    return {
      c() {
        (t = k("div")),
          p && p.c(),
          (n = T()),
          (i = k("div")),
          Te(o.$$.fragment),
          (a = T()),
          s.c(),
          (l = T()),
          v && v.c(),
          q(i, "style", e[13]),
          q(
            i,
            "class",
            (c =
              "chatwith-bubble " +
              (e[1]
                ? ""
                : 0 == e[0].rightpos
                ? "slide-in-left"
                : "slide-in-right") +
              " gcohtech-sxykpf")
          ),
          q(t, "class", "chatwith-widget gcohtech-sxykpf"),
          q(t, "style", (u = e[1] ? "margin:0 auto;" : "")),
          (t.hidden = e[11]);
      },
      m(e, s) {
        b(e, t, s),
          p && p.m(t, null),
          w(t, n),
          w(t, i),
          Ie(o, i, null),
          w(i, a),
          f[r].m(i, null),
          w(i, l),
          v && v.m(i, null),
          (d = !0);
      },
      p(e, a) {
        e[22]
          ? p &&
            (fe(),
            ge(p, 1, 1, () => {
              p = null;
            }),
            me())
          : p
          ? (p.p(e, a), 4194304 & a[0] && ve(p, 1))
          : ((p = Bs(e)), p.c(), ve(p, 1), p.m(t, n));
        const g = {};
        1 & a[0] && (g.data = e[0]),
          512 & a[0] && (g.agentsView = e[9]),
          2 & a[0] && (g.embed = e[1]),
          16777216 & a[0] && (g.showRounded = e[24]),
          o.$set(g);
        let w = r;
        (r = m(e)),
          r === w
            ? f[r].p(e, a)
            : (fe(),
              ge(f[w], 1, 1, () => {
                f[w] = null;
              }),
              me(),
              (s = f[r]),
              s ? s.p(e, a) : ((s = f[r] = h[r](e)), s.c()),
              ve(s, 1),
              s.m(i, l)),
          e[22]
            ? v && (v.d(1), (v = null))
            : v
            ? v.p(e, a)
            : ((v = ol(e)), v.c(), v.m(i, null)),
          (!d || 8192 & a[0]) && q(i, "style", e[13]),
          (!d ||
            (3 & a[0] &&
              c !==
                (c =
                  "chatwith-bubble " +
                  (e[1]
                    ? ""
                    : 0 == e[0].rightpos
                    ? "slide-in-left"
                    : "slide-in-right") +
                  " gcohtech-sxykpf"))) &&
            q(i, "class", c),
          (!d || (2 & a[0] && u !== (u = e[1] ? "margin:0 auto;" : ""))) &&
            q(t, "style", u),
          (!d || 2048 & a[0]) && (t.hidden = e[11]);
      },
      i(e) {
        d || (ve(p), ve(o.$$.fragment, e), ve(s), (d = !0));
      },
      o(e) {
        ge(p), ge(o.$$.fragment, e), ge(s), (d = !1);
      },
      d(e) {
        e && y(t), p && p.d(), Se(o), f[r].d(), v && v.d();
      },
    };
  }
  function Bs(e) {
    let t, n;
    return (
      (t = new es({ props: { message: e[0].WelcomeBackMessage, data: e[0] } })),
      t.$on("close", e[30]),
      {
        c() {
          Te(t.$$.fragment);
        },
        m(e, i) {
          Ie(t, e, i), (n = !0);
        },
        p(e, n) {
          const i = {};
          1 & n[0] && (i.message = e[0].WelcomeBackMessage),
            1 & n[0] && (i.data = e[0]),
            t.$set(i);
        },
        i(e) {
          n || (ve(t.$$.fragment, e), (n = !0));
        },
        o(e) {
          ge(t.$$.fragment, e), (n = !1);
        },
        d(e) {
          Se(t, e);
        },
      }
    );
  }
  function Fs(e) {
    let t,
      n,
      i,
      o,
      a,
      r,
      s,
      l = !e[22] && Gs(e);
    const c = [Ws, Zs],
      u = [];
    function d(e, t) {
      return e[0].activateQuestionForm ? 0 : 1;
    }
    return (
      (o = d(e)),
      (a = u[o] = c[o](e)),
      {
        c() {
          (t = k("div")),
            l && l.c(),
            (n = T()),
            (i = k("div")),
            a.c(),
            q(i, "class", "people gcohtech-sxykpf"),
            q(t, "class", "chatwith-content space-evenly gcohtech-sxykpf");
        },
        m(e, a) {
          b(e, t, a),
            l && l.m(t, null),
            w(t, n),
            w(t, i),
            u[o].m(i, null),
            (s = !0);
        },
        p(e, r) {
          e[22]
            ? l &&
              (fe(),
              ge(l, 1, 1, () => {
                l = null;
              }),
              me())
            : l
            ? (l.p(e, r), 4194304 & r[0] && ve(l, 1))
            : ((l = Gs(e)), l.c(), ve(l, 1), l.m(t, n));
          let s = o;
          (o = d(e)),
            o === s
              ? u[o].p(e, r)
              : (fe(),
                ge(u[s], 1, 1, () => {
                  u[s] = null;
                }),
                me(),
                (a = u[o]),
                a ? a.p(e, r) : ((a = u[o] = c[o](e)), a.c()),
                ve(a, 1),
                a.m(i, null));
        },
        i(e) {
          s ||
            (ve(l),
            ve(a),
            r ||
              ie(() => {
                (r = be(t, Me, {})), r.start();
              }),
            (s = !0));
        },
        o(e) {
          ge(l), ge(a), (s = !1);
        },
        d(e) {
          e && y(t), l && l.d(), u[o].d();
        },
      }
    );
  }
  function Rs(e) {
    let t, n;
    return (
      (t = new po({ props: { data: e[0], person: e[17] } })),
      t.$on("close", e[38]),
      {
        c() {
          Te(t.$$.fragment);
        },
        m(e, i) {
          Ie(t, e, i), (n = !0);
        },
        p(e, n) {
          const i = {};
          1 & n[0] && (i.data = e[0]),
            131072 & n[0] && (i.person = e[17]),
            t.$set(i);
        },
        i(e) {
          n || (ve(t.$$.fragment, e), (n = !0));
        },
        o(e) {
          ge(t.$$.fragment, e), (n = !1);
        },
        d(e) {
          Se(t, e);
        },
      }
    );
  }
  function Ps(e) {
    let t, n, i, o, a, r, s, l;
    return (
      (i = new Ar({ props: { person: e[17], data: e[0] } })),
      (r = new Ot({
        props: {
          data: e[0],
          person: e[17],
          formitems: e[16],
          showWelcomeMessage: e[19],
          hidden: 0 == e[5],
        },
      })),
      r.$on("callmex", e[26]),
      r.$on("close", e[25]),
      {
        c() {
          (t = k("div")),
            (n = k("div")),
            Te(i.$$.fragment),
            (o = T()),
            (a = k("div")),
            Te(r.$$.fragment),
            q(n, "class", "person gcohtech-sxykpf"),
            z(a, "position", "relative"),
            z(a, "height", "100%"),
            q(t, "class", "chatwith-content gcohtech-sxykpf");
        },
        m(e, s) {
          b(e, t, s),
            w(t, n),
            Ie(i, n, null),
            w(t, o),
            w(t, a),
            Ie(r, a, null),
            (l = !0);
        },
        p(e, t) {
          const n = {};
          131072 & t[0] && (n.person = e[17]),
            1 & t[0] && (n.data = e[0]),
            i.$set(n);
          const o = {};
          1 & t[0] && (o.data = e[0]),
            131072 & t[0] && (o.person = e[17]),
            65536 & t[0] && (o.formitems = e[16]),
            524288 & t[0] && (o.showWelcomeMessage = e[19]),
            32 & t[0] && (o.hidden = 0 == e[5]),
            r.$set(o);
        },
        i(e) {
          l ||
            (ve(i.$$.fragment, e),
            ve(r.$$.fragment, e),
            s ||
              ie(() => {
                (s = be(t, Me, {})), s.start();
              }),
            (l = !0));
        },
        o(e) {
          ge(i.$$.fragment, e), ge(r.$$.fragment, e), (l = !1);
        },
        d(e) {
          e && y(t), Se(i), Se(r);
        },
      }
    );
  }
  function Vs(e) {
    let t, n, i, o, a, r, s;
    return (
      (i = new Ar({ props: { person: e[17], data: e[0] } })),
      (a = new _i({ props: { data: e[0], activePerson: e[17] } })),
      a.$on("close", e[37]),
      a.$on("callmex", e[26]),
      {
        c() {
          (t = k("div")),
            (n = k("div")),
            Te(i.$$.fragment),
            (o = T()),
            Te(a.$$.fragment),
            q(n, "class", "person gcohtech-sxykpf"),
            q(t, "class", "chatwith-content gcohtech-sxykpf");
        },
        m(e, r) {
          b(e, t, r),
            w(t, n),
            Ie(i, n, null),
            w(t, o),
            Ie(a, t, null),
            (s = !0);
        },
        p(e, t) {
          const n = {};
          131072 & t[0] && (n.person = e[17]),
            1 & t[0] && (n.data = e[0]),
            i.$set(n);
          const o = {};
          1 & t[0] && (o.data = e[0]),
            131072 & t[0] && (o.activePerson = e[17]),
            a.$set(o);
        },
        i(e) {
          s ||
            (ve(i.$$.fragment, e),
            ve(a.$$.fragment, e),
            r ||
              ie(() => {
                (r = be(t, Me, {})), r.start();
              }),
            (s = !0));
        },
        o(e) {
          ge(i.$$.fragment, e), ge(a.$$.fragment, e), (s = !1);
        },
        d(e) {
          e && y(t), Se(i), Se(a);
        },
      }
    );
  }
  function _s(e) {
    let t, n, i, o, a, r, s, l;
    i = new Ar({ props: { person: e[17], data: e[0] } });
    const c = [il, nl, tl],
      u = [];
    function d(e, t) {
      return !0 === e[0].faqsChat ? 0 : !0 === e[0].faqDisplay ? 1 : 2;
    }
    return (
      (a = d(e)),
      (r = u[a] = c[a](e)),
      {
        c() {
          (t = k("div")),
            (n = k("div")),
            Te(i.$$.fragment),
            (o = T()),
            r.c(),
            q(n, "class", "person gcohtech-sxykpf"),
            q(t, "class", "chatwith-content gcohtech-sxykpf");
        },
        m(e, r) {
          b(e, t, r),
            w(t, n),
            Ie(i, n, null),
            w(t, o),
            u[a].m(t, null),
            (l = !0);
        },
        p(e, n) {
          const o = {};
          131072 & n[0] && (o.person = e[17]),
            1 & n[0] && (o.data = e[0]),
            i.$set(o);
          let s = a;
          (a = d(e)),
            a === s
              ? u[a].p(e, n)
              : (fe(),
                ge(u[s], 1, 1, () => {
                  u[s] = null;
                }),
                me(),
                (r = u[a]),
                r ? r.p(e, n) : ((r = u[a] = c[a](e)), r.c()),
                ve(r, 1),
                r.m(t, null));
        },
        i(e) {
          l ||
            (ve(i.$$.fragment, e),
            ve(r),
            s ||
              ie(() => {
                (s = be(t, Me, {})), s.start();
              }),
            (l = !0));
        },
        o(e) {
          ge(i.$$.fragment, e), ge(r), (l = !1);
        },
        d(e) {
          e && y(t), Se(i), u[a].d();
        },
      }
    );
  }
  function Hs(e) {
    let t, n, i, o, a, r, s, l, c, u, d;
    return (
      (i = new Ar({ props: { person: e[17], data: e[0] } })),
      (r = new Kr({})),
      r.$on("closeIt", e[36]),
      (c = new So({
        props: { data: e[0], person: e[17], bgcolor: e[0].color },
      })),
      {
        c() {
          (t = k("div")),
            (n = k("div")),
            Te(i.$$.fragment),
            (o = T()),
            (a = k("div")),
            Te(r.$$.fragment),
            (s = T()),
            (l = k("div")),
            Te(c.$$.fragment),
            q(n, "class", "person gcohtech-sxykpf"),
            z(l, "padding", "10px"),
            z(a, "position", "relative"),
            z(a, "background", "#fff"),
            q(t, "class", "chatwith-content gcohtech-sxykpf");
        },
        m(e, u) {
          b(e, t, u),
            w(t, n),
            Ie(i, n, null),
            w(t, o),
            w(t, a),
            Ie(r, a, null),
            w(a, s),
            w(a, l),
            Ie(c, l, null),
            (d = !0);
        },
        p(e, t) {
          const n = {};
          131072 & t[0] && (n.person = e[17]),
            1 & t[0] && (n.data = e[0]),
            i.$set(n);
          const o = {};
          1 & t[0] && (o.data = e[0]),
            131072 & t[0] && (o.person = e[17]),
            1 & t[0] && (o.bgcolor = e[0].color),
            c.$set(o);
        },
        i(e) {
          d ||
            (ve(i.$$.fragment, e),
            ve(r.$$.fragment, e),
            ve(c.$$.fragment, e),
            u ||
              ie(() => {
                (u = be(t, Me, {})), u.start();
              }),
            (d = !0));
        },
        o(e) {
          ge(i.$$.fragment, e),
            ge(r.$$.fragment, e),
            ge(c.$$.fragment, e),
            (d = !1);
        },
        d(e) {
          e && y(t), Se(i), Se(r), Se(c);
        },
      }
    );
  }
  function Gs(e) {
    let t, n, i, o;
    return (
      (t = new Cr({ props: { data: e[0], hasBanner: e[10] } })),
      (i = new hs({ props: { data: e[0], isReturnUser: ht() } })),
      {
        c() {
          Te(t.$$.fragment), (n = T()), Te(i.$$.fragment);
        },
        m(e, a) {
          Ie(t, e, a), b(e, n, a), Ie(i, e, a), (o = !0);
        },
        p(e, n) {
          const o = {};
          1 & n[0] && (o.data = e[0]),
            1024 & n[0] && (o.hasBanner = e[10]),
            t.$set(o);
          const a = {};
          1 & n[0] && (a.data = e[0]), i.$set(a);
        },
        i(e) {
          o || (ve(t.$$.fragment, e), ve(i.$$.fragment, e), (o = !0));
        },
        o(e) {
          ge(t.$$.fragment, e), ge(i.$$.fragment, e), (o = !1);
        },
        d(e) {
          Se(t, e), e && y(n), Se(i, e);
        },
      }
    );
  }
  function Zs(e) {
    let t, n, i, o;
    (t = new Gr({ props: { data: e[0], showall: e[18] } })),
      t.$on("message", e[40]);
    let a = e[0].whatsapps.length > 9 && !e[22] && Ks(e);
    return {
      c() {
        Te(t.$$.fragment), (n = T()), a && a.c(), (i = I());
      },
      m(e, r) {
        Ie(t, e, r), b(e, n, r), a && a.m(e, r), b(e, i, r), (o = !0);
      },
      p(e, n) {
        const o = {};
        1 & n[0] && (o.data = e[0]),
          262144 & n[0] && (o.showall = e[18]),
          t.$set(o),
          e[0].whatsapps.length > 9 && !e[22]
            ? a
              ? a.p(e, n)
              : ((a = Ks(e)), a.c(), a.m(i.parentNode, i))
            : a && (a.d(1), (a = null));
      },
      i(e) {
        o || (ve(t.$$.fragment, e), (o = !0));
      },
      o(e) {
        ge(t.$$.fragment, e), (o = !1);
      },
      d(e) {
        Se(t, e), e && y(n), a && a.d(e), e && y(i);
      },
    };
  }
  function Ws(e) {
    let t, n;
    return (
      (t = new Ms({ props: { data: e[0] } })),
      t.$on("message", e[39]),
      {
        c() {
          Te(t.$$.fragment);
        },
        m(e, i) {
          Ie(t, e, i), (n = !0);
        },
        p(e, n) {
          const i = {};
          1 & n[0] && (i.data = e[0]), t.$set(i);
        },
        i(e) {
          n || (ve(t.$$.fragment, e), (n = !0));
        },
        o(e) {
          ge(t.$$.fragment, e), (n = !1);
        },
        d(e) {
          Se(t, e);
        },
      }
    );
  }
  function Ks(e) {
    let t, n, i;
    function o(e, t) {
      return !1 === e[18] ? Js : e[0].showLessAgents ? Xs : Ys;
    }
    let a = o(e),
      r = a(e);
    return {
      c() {
        (t = k("button")),
          r.c(),
          z(t, "background", e[0].color),
          q(t, "class", "showmore gcohtech-sxykpf");
      },
      m(o, a) {
        b(o, t, a), r.m(t, null), n || ((i = S(t, "click", e[41])), (n = !0));
      },
      p(e, n) {
        a === (a = o(e)) && r
          ? r.p(e, n)
          : (r.d(1), (r = a(e)), r && (r.c(), r.m(t, null))),
          1 & n[0] && z(t, "background", e[0].color);
      },
      d(e) {
        e && y(t), r.d(), (n = !1), i();
      },
    };
  }
  function Ys(t) {
    let n;
    return {
      c() {
        n = $("Show less agents");
      },
      m(e, t) {
        b(e, n, t);
      },
      p: e,
      d(e) {
        e && y(n);
      },
    };
  }
  function Xs(e) {
    let t,
      n = e[0].showLessAgents + "";
    return {
      c() {
        t = $(n);
      },
      m(e, n) {
        b(e, t, n);
      },
      p(e, i) {
        1 & i[0] && n !== (n = e[0].showLessAgents + "") && M(t, n);
      },
      d(e) {
        e && y(t);
      },
    };
  }
  function Js(e) {
    let t,
      n,
      i,
      o = e[0].whatsapps.length + "";
    function a(e, t) {
      return e[0].showAllAgents ? el : Qs;
    }
    let r = a(e),
      s = r(e);
    return {
      c() {
        s.c(), (t = $(" \n                  (")), (n = $(o)), (i = $(")"));
      },
      m(e, o) {
        s.m(e, o), b(e, t, o), b(e, n, o), b(e, i, o);
      },
      p(e, i) {
        r === (r = a(e)) && s
          ? s.p(e, i)
          : (s.d(1), (s = r(e)), s && (s.c(), s.m(t.parentNode, t))),
          1 & i[0] && o !== (o = e[0].whatsapps.length + "") && M(n, o);
      },
      d(e) {
        s.d(e), e && y(t), e && y(n), e && y(i);
      },
    };
  }
  function Qs(t) {
    let n;
    return {
      c() {
        n = $("Show all agents");
      },
      m(e, t) {
        b(e, n, t);
      },
      p: e,
      d(e) {
        e && y(n);
      },
    };
  }
  function el(e) {
    let t,
      n = e[0].showAllAgents + "";
    return {
      c() {
        t = $(n);
      },
      m(e, n) {
        b(e, t, n);
      },
      p(e, i) {
        1 & i[0] && n !== (n = e[0].showAllAgents + "") && M(t, n);
      },
      d(e) {
        e && y(t);
      },
    };
  }
  function tl(e) {
    let t, n;
    return (
      (t = new Wo({
        props: {
          bgcolor: e[0].color,
          faqs: e[0].activeFaqs,
          activePerson: e[17],
          data: e[0],
        },
      })),
      t.$on("leave-message", e[33]),
      t.$on("problem-solved", e[27]),
      t.$on("problem-not-solved", e[28]),
      {
        c() {
          Te(t.$$.fragment);
        },
        m(e, i) {
          Ie(t, e, i), (n = !0);
        },
        p(e, n) {
          const i = {};
          1 & n[0] && (i.bgcolor = e[0].color),
            1 & n[0] && (i.faqs = e[0].activeFaqs),
            131072 & n[0] && (i.activePerson = e[17]),
            1 & n[0] && (i.data = e[0]),
            t.$set(i);
        },
        i(e) {
          n || (ve(t.$$.fragment, e), (n = !0));
        },
        o(e) {
          ge(t.$$.fragment, e), (n = !1);
        },
        d(e) {
          Se(t, e);
        },
      }
    );
  }
  function nl(e) {
    let t, n;
    return (
      (t = new xa({
        props: {
          bgcolor: e[0].color,
          faqs: e[0].activeFaqs,
          activePerson: e[17],
          data: e[0],
        },
      })),
      t.$on("leave-message", e[33]),
      t.$on("problem-solved", e[27]),
      t.$on("problem-not-solved", e[28]),
      {
        c() {
          Te(t.$$.fragment);
        },
        m(e, i) {
          Ie(t, e, i), (n = !0);
        },
        p(e, n) {
          const i = {};
          1 & n[0] && (i.bgcolor = e[0].color),
            1 & n[0] && (i.faqs = e[0].activeFaqs),
            131072 & n[0] && (i.activePerson = e[17]),
            1 & n[0] && (i.data = e[0]),
            t.$set(i);
        },
        i(e) {
          n || (ve(t.$$.fragment, e), (n = !0));
        },
        o(e) {
          ge(t.$$.fragment, e), (n = !1);
        },
        d(e) {
          Se(t, e);
        },
      }
    );
  }
  function il(e) {
    let t, n;
    return (
      (t = new Ba({
        props: {
          bgcolor: e[0].color,
          activePerson: e[17],
          faqlevel: e[20],
          data: e[0],
        },
      })),
      t.$on("leave-message", e[33]),
      t.$on("problem-solved", e[27]),
      t.$on("problem-not-solved", e[28]),
      {
        c() {
          Te(t.$$.fragment);
        },
        m(e, i) {
          Ie(t, e, i), (n = !0);
        },
        p(e, n) {
          const i = {};
          1 & n[0] && (i.bgcolor = e[0].color),
            131072 & n[0] && (i.activePerson = e[17]),
            1048576 & n[0] && (i.faqlevel = e[20]),
            1 & n[0] && (i.data = e[0]),
            t.$set(i);
        },
        i(e) {
          n || (ve(t.$$.fragment, e), (n = !0));
        },
        o(e) {
          ge(t.$$.fragment, e), (n = !1);
        },
        d(e) {
          Se(t, e);
        },
      }
    );
  }
  function ol(e) {
    let t,
      n = !0 !== e[0].premium && al();
    return {
      c() {
        n && n.c(), (t = I());
      },
      m(e, i) {
        n && n.m(e, i), b(e, t, i);
      },
      p(e, i) {
        !0 !== e[0].premium
          ? n || ((n = al()), n.c(), n.m(t.parentNode, t))
          : n && (n.d(1), (n = null));
      },
      d(e) {
        n && n.d(e), e && y(t);
      },
    };
  }
  function al(e) {
    let t;
    return {
      c() {
        (t = k("div")),
          (t.innerHTML =
            '<a href="https://tochat.be/" title="Free WhatsApp Widget" class="gcohtech-sxykpf">Powered by ToChat.be</a>'),
          q(t, "class", "powered-by-tochatbe gcohtech-sxykpf");
      },
      m(e, n) {
        b(e, t, n);
      },
      d(e) {
        e && y(t);
      },
    };
  }
  function rl(e) {
    let t, n, i;
    return (
      (n = new Is({ props: { data: e[0], width: e[15], height: e[4] } })),
      n.$on("close", e[32]),
      {
        c() {
          (t = k("div")), Te(n.$$.fragment), q(t, "style", e[14]);
        },
        m(e, o) {
          b(e, t, o), Ie(n, t, null), (i = !0);
        },
        p(e, o) {
          const a = {};
          1 & o[0] && (a.data = e[0]),
            32768 & o[0] && (a.width = e[15]),
            16 & o[0] && (a.height = e[4]),
            n.$set(a),
            (!i || 16384 & o[0]) && q(t, "style", e[14]);
        },
        i(e) {
          i || (ve(n.$$.fragment, e), (i = !0));
        },
        o(e) {
          ge(n.$$.fragment, e), (i = !1);
        },
        d(e) {
          e && y(t), Se(n);
        },
      }
    );
  }
  function sl(e) {
    let t, n, i, o, a;
    const r = [cl, ll],
      s = [];
    function l(e, t) {
      return !0 === e[0].videoBubble ? 0 : 1;
    }
    return (
      (n = l(e)),
      (i = s[n] = r[n](e)),
      {
        c() {
          (t = k("div")),
            i.c(),
            q(
              t,
              "class",
              (o =
                "mbutton  " +
                (0 == e[0].rightpos
                  ? e[0].animation + "-in-left"
                  : e[0].animation + "-in-right") +
                " gcohtech-sxykpf")
            );
        },
        m(e, i) {
          b(e, t, i), s[n].m(t, null), (a = !0);
        },
        p(e, c) {
          let u = n;
          (n = l(e)),
            n === u
              ? s[n].p(e, c)
              : (fe(),
                ge(s[u], 1, 1, () => {
                  s[u] = null;
                }),
                me(),
                (i = s[n]),
                i ? i.p(e, c) : ((i = s[n] = r[n](e)), i.c()),
                ve(i, 1),
                i.m(t, null)),
            (!a ||
              (1 & c[0] &&
                o !==
                  (o =
                    "mbutton  " +
                    (0 == e[0].rightpos
                      ? e[0].animation + "-in-left"
                      : e[0].animation + "-in-right") +
                    " gcohtech-sxykpf"))) &&
              q(t, "class", o);
        },
        i(e) {
          a || (ve(i), (a = !0));
        },
        o(e) {
          ge(i), (a = !1);
        },
        d(e) {
          e && y(t), s[n].d();
        },
      }
    );
  }
  function ll(e) {
    let t, n;
    return (
      (t = new Fe({
        props: { data: e[0], height: e[4], up: e[2], videoSplashOpen: e[3] },
      })),
      t.$on("close", e[30]),
      {
        c() {
          Te(t.$$.fragment);
        },
        m(e, i) {
          Ie(t, e, i), (n = !0);
        },
        p(e, n) {
          const i = {};
          1 & n[0] && (i.data = e[0]),
            16 & n[0] && (i.height = e[4]),
            4 & n[0] && (i.up = e[2]),
            8 & n[0] && (i.videoSplashOpen = e[3]),
            t.$set(i);
        },
        i(e) {
          n || (ve(t.$$.fragment, e), (n = !0));
        },
        o(e) {
          ge(t.$$.fragment, e), (n = !1);
        },
        d(e) {
          Se(t, e);
        },
      }
    );
  }
  function cl(e) {
    let t, n;
    return (
      (t = new ws({ props: { data: e[0] } })),
      t.$on("click", e[31]),
      {
        c() {
          Te(t.$$.fragment);
        },
        m(e, i) {
          Ie(t, e, i), (n = !0);
        },
        p(e, n) {
          const i = {};
          1 & n[0] && (i.data = e[0]), t.$set(i);
        },
        i(e) {
          n || (ve(t.$$.fragment, e), (n = !0));
        },
        o(e) {
          ge(t.$$.fragment, e), (n = !1);
        },
        d(e) {
          Se(t, e);
        },
      }
    );
  }
  function ul(e) {
    let t, n, i, o, a, r, s, l, c, u;
    n = new Os({ props: { popupInfo: e[0].businessPopUpNotification } });
    let d = !0 === e[2] && js(e),
      p = !0 === e[3] && rl(e),
      h = 1 != e[1] && (1 != e[0].expandFullScreenMobile || 1 != e[2]) && sl(e);
    return {
      c() {
        (t = k("div")),
          Te(n.$$.fragment),
          (i = T()),
          d && d.c(),
          (o = T()),
          p && p.c(),
          (a = T()),
          h && h.c(),
          q(t, "style", (r = e[12] + ";--color:" + e[0].color)),
          (t.hidden = s = 1 != e[0].active),
          q(
            t,
            "class",
            (l =
              "chatwith device-" +
              e[0].device +
              " " +
              (0 == e[0].rightpos ? "leftx" : "rightx") +
              " gcohtech-sxykpf")
          ),
          ie(() => e[42].call(t)),
          B(t, "whatsappTheme", e[21]),
          B(t, "dotTheme", e[22]),
          B(t, "fullScreenMobile", e[23]);
      },
      m(r, s) {
        b(r, t, s),
          Ie(n, t, null),
          w(t, i),
          d && d.m(t, null),
          w(t, o),
          p && p.m(t, null),
          w(t, a),
          h && h.m(t, null),
          (c = j(t, e[42].bind(t))),
          (u = !0);
      },
      p(e, i) {
        const c = {};
        1 & i[0] && (c.popupInfo = e[0].businessPopUpNotification),
          n.$set(c),
          !0 === e[2]
            ? d
              ? (d.p(e, i), 4 & i[0] && ve(d, 1))
              : ((d = js(e)), d.c(), ve(d, 1), d.m(t, o))
            : d &&
              (fe(),
              ge(d, 1, 1, () => {
                d = null;
              }),
              me()),
          !0 === e[3]
            ? p
              ? (p.p(e, i), 8 & i[0] && ve(p, 1))
              : ((p = rl(e)), p.c(), ve(p, 1), p.m(t, a))
            : p &&
              (fe(),
              ge(p, 1, 1, () => {
                p = null;
              }),
              me()),
          1 == e[1] || (1 == e[0].expandFullScreenMobile && 1 == e[2])
            ? h &&
              (fe(),
              ge(h, 1, 1, () => {
                h = null;
              }),
              me())
            : h
            ? (h.p(e, i), 7 & i[0] && ve(h, 1))
            : ((h = sl(e)), h.c(), ve(h, 1), h.m(t, null)),
          (!u ||
            (4097 & i[0] && r !== (r = e[12] + ";--color:" + e[0].color))) &&
            q(t, "style", r),
          (!u || (1 & i[0] && s !== (s = 1 != e[0].active))) && (t.hidden = s),
          (!u ||
            (1 & i[0] &&
              l !==
                (l =
                  "chatwith device-" +
                  e[0].device +
                  " " +
                  (0 == e[0].rightpos ? "leftx" : "rightx") +
                  " gcohtech-sxykpf"))) &&
            q(t, "class", l),
          2097153 & i[0] && B(t, "whatsappTheme", e[21]),
          4194305 & i[0] && B(t, "dotTheme", e[22]),
          8388609 & i[0] && B(t, "fullScreenMobile", e[23]);
      },
      i(e) {
        u || (ve(n.$$.fragment, e), ve(d), ve(p), ve(h), (u = !0));
      },
      o(e) {
        ge(n.$$.fragment, e), ge(d), ge(p), ge(h), (u = !1);
      },
      d(e) {
        e && y(t), Se(n), d && d.d(), p && p.d(), h && h.d(), c();
      },
    };
  }
  function dl(e, t, n) {
    let i,
      o,
      a,
      r,
      s,
      l,
      c,
      u,
      d,
      p,
      h,
      f,
      m,
      { data: v } = t,
      { openWidget: g } = t,
      { embed: w } = t,
      b = v.isopen,
      y = !1,
      x = !1,
      k = !1,
      C = !1,
      $ = !1,
      T = !1,
      I = !1,
      S = { items: [] },
      N = !1,
      q = !1,
      D = !1;
    function M(e, t = {}) {
      if (e.isExtraLink)
        return void ("payment" === e.type && (n(17, (f = e)), n(7, (I = !0))));
      if (
        (n(17, (f = e)),
        f.faqGrps.length > 0
          ? (n(0, (v.activeFaqs = f.faqGrps[0]), v),
            n(6, (T = !0)),
            n(20, (m = "whatsapp")),
            1)
          : v.faqGrps.length > 0
          ? (n(0, (v.activeFaqs = v.faqGrps[0]), v),
            n(6, (T = !0)),
            n(20, (m = "business")),
            1)
          : (n(6, (T = !1)), 0))
      )
        return;
      const i = Xn(e);
      n(8, (D = !1)),
        !1 === i &&
        ((!1 === e.online && !0 === v.offlineLeads) ||
          (!0 === v.desktopLeads && window.innerWidth > 1e3))
          ? n(8, (D = !0))
          : !1 === i
          ? !0 === f.online && Yn(e, t)
          : (U("form"), n(5, ($ = !0)), n(16, (S = e.form)));
    }
    function U(e) {
      const t = `${f.id}${e}`;
      ct(t) &&
        (setTimeout(() => {
          n(19, (q = !0));
        }, 500),
        setTimeout(() => {
          n(19, (q = !1));
        }, 3500));
    }
    return (
      (e.$$set = (e) => {
        "data" in e && n(0, (v = e.data)),
          "openWidget" in e && n(34, (g = e.openWidget)),
          "embed" in e && n(1, (w = e.embed));
      }),
      (e.$$.update = () => {
        if (
          (2 & e.$$.dirty[0] &&
            w &&
            (n(0, (v.isopen = !0), v),
            n(34, (g = !0)),
            n(0, (v.outCloseButton = !1), v)),
          (1 & e.$$.dirty[0]) | (8 & e.$$.dirty[1]) &&
            !1 !== g &&
            (n(2, (b = g)),
            v.videoSplashUrlActivated
              ? (n(3, (k = !0)), n(11, (C = !0)))
              : n(11, (C = !1)),
            (x = !0),
            n(0, (v.videoBubble = !1), v),
            n(34, (g = !1))),
          e.$$.dirty[0],
          29047 & e.$$.dirty[0] &&
            (w && (n(0, (v.xAxis = 0), v), n(0, (v.yAxis = 0), v)),
            n(12, (c = "z-index:" + v.zIndex + ";bottom:" + v.yAxis + "px;")),
            n(
              12,
              (c +=
                0 == v.rightpos
                  ? "left:" + v.xAxis + "px;"
                  : "right:" + v.xAxis + "px;")
            ),
            n(12, (c += w ? "position:relative;" : "position:fixed;")),
            v.expandFullScreenMobile &&
              b &&
              n(12, (c += "left:0px;right:0px;top:0px;bottom:0px;")),
            "bubbleTheme" === v.widgetTheme
              ? n(13, (u = "border-radius: 20px;"))
              : n(13, (u = "border-radius: " + v.rounding + "px;")),
            v.expandFullScreenMobile
              ? n(
                  13,
                  (u +=
                    "height: " +
                    h +
                    "px;overflow-y:auto;display:flex;flex-direction:column;border-radius: 0px;")
                )
              : ("dotTheme" !== v.widgetTheme || D || T || $) &&
                n(13, (u += "min-width: 240px;width: 260px;")),
            "whatsappTheme" === v.widgetTheme &&
              n(
                13,
                (u +=
                  "background-image: url('https://services.tochat.be/img/bk-wa.png')")
              ),
            n(
              14,
              (d =
                "margin-bottom:10px;background: black;border-radius: " +
                v.rounding +
                "px;")
            ),
            v.expandFullScreenMobile
              ? n(
                  14,
                  (d +=
                    "position:fixed;top:0px;left:0px;width:100%;height: 100%;")
                )
              : n(14, (d += "margin-left: 35px;width:225px;height:400px;")),
            w && n(14, (d += "margin: auto;"))),
          (1 & e.$$.dirty[0]) | (16 & e.$$.dirty[1]) &&
            !0 === v.openFirstAvailable)
        ) {
          const e = v.whatsapps.find((e) => !0 === e.online && null !== e.form);
          e && !1 === y && (n(35, (y = !0)), M(e));
        }
        1 & e.$$.dirty[0] && n(21, (i = "whatsappTheme" === v.widgetTheme)),
          489 & e.$$.dirty[0] &&
            n(
              22,
              (o = !("dotTheme" !== v.widgetTheme || D || T || $ || I || k))
            ),
          1 & e.$$.dirty[0] && n(23, (a = v.expandFullScreenMobile)),
          480 & e.$$.dirty[0] && n(9, (r = !(D || T || $ || I))),
          1 & e.$$.dirty[0] &&
            n(
              10,
              (s =
                (ht() &&
                  null !== v.returningBannerUrl &&
                  !0 === v.activateReturningBanner) ||
                (!ht() && null !== v.bannerUrl && !0 === v.ActivateBanner))
            ),
          1537 & e.$$.dirty[0] &&
            n(
              24,
              (l =
                "bubbleTheme" === v.widgetTheme &&
                ((!0 !== v.countDownEnabled && !s) || !r))
            );
      }),
      [
        v,
        w,
        b,
        k,
        h,
        $,
        T,
        I,
        D,
        r,
        s,
        C,
        c,
        u,
        d,
        p,
        S,
        f,
        N,
        q,
        m,
        i,
        o,
        a,
        l,
        function () {
          n(5, ($ = !1));
        },
        function (e) {
          Kn(f, e);
        },
        function () {
          n(17, (f = null)), n(5, ($ = !1)), n(6, (T = !1));
        },
        function () {
          const e = Xn(f);
          U("form"),
            (!1 === e && !1 === f.online) ||
              (!1 === e
                ? Yn(f, {})
                : (n(5, ($ = !0)), n(6, (T = !1)), n(16, (S = f.form))));
        },
        M,
        function () {
          const e = v.whatsapps.find((e) => !0 === e.activateDirectlyChat);
          !e || b
            ? (n(2, (b = !b)),
              b &&
              !x &&
              !0 === v.videoSplashUrlActivated &&
              "" !== v.videoSplashUrl
                ? ((x = !0), n(3, (k = !0)), n(11, (C = !0)))
                : (n(3, (k = !1)), n(11, (C = !1))))
            : Yn(e);
        },
        function () {
          v.videoSplashUrlActivated
            ? (n(3, (k = !k)), (x = !0))
            : (n(11, (C = !1)), n(2, (b = !0))),
            n(0, (v.videoBubble = !1), v);
        },
        function (e) {
          if (
            (n(0, (v.videoBubble = !1), v),
            n(3, (k = !1)),
            (x = !0),
            n(11, (C = !1)),
            n(2, (b = !0)),
            e.detail)
          ) {
            const e = v.whatsapps.find((e) => e.id === v.videoAgent);
            e && M(e);
          }
        },
        function () {
          U("leaveMessage");
        },
        g,
        y,
        () => n(8, (D = !1)),
        () => {
          n(5, ($ = !1));
        },
        () => {
          n(7, (I = !1));
        },
        (e) => {
          M(e.detail);
        },
        (e) => {
          M(e.detail);
        },
        () => n(18, (N = !N)),
        function () {
          (p = this.clientWidth), (h = this.clientHeight), n(15, p), n(4, h);
        },
      ]
    );
  }
  class pl extends qe {
    constructor(e) {
      var t;
      super(),
        document.getElementById("gcohtech-sxykpf-style") ||
          (((t = k("style")).id = "gcohtech-sxykpf-style"),
          (t.textContent =
            ".chatwith.gcohtech-sxykpf.gcohtech-sxykpf{position:fixed;bottom:10px;font-family:\"Inter\", Arial, sans-serif;font-weight:normal;text-align:initial}.chatwith.rightx.gcohtech-sxykpf.gcohtech-sxykpf{right:10px}.chatwith.leftx.gcohtech-sxykpf.gcohtech-sxykpf{left:10px}.chatwith-widget.gcohtech-sxykpf.gcohtech-sxykpf{max-width:260px}.dotTheme.gcohtech-sxykpf .chatwith-widget.gcohtech-sxykpf{margin-right:-12px}.chatwith.gcohtech-sxykpf .chatwith-bubble.gcohtech-sxykpf{border-radius:10px;overflow:hidden;box-shadow:0 0 30px rgba(0, 0, 0, 0.3);margin-bottom:10px;background:#fff}.chatwith.dotTheme.gcohtech-sxykpf .chatwith-bubble.gcohtech-sxykpf{background:transparent;box-shadow:none}.chatwith.gcohtech-sxykpf .peopleScroll.gcohtech-sxykpf{overflow-y:scroll;max-height:320px}.chatwith.gcohtech-sxykpf .people.gcohtech-sxykpf{background:white}.chatwith.dotTheme.gcohtech-sxykpf .people.gcohtech-sxykpf{background:transparent}.chatwith.gcohtech-sxykpf .person.gcohtech-sxykpf{border-bottom:#efefef 1px solid;padding:10px 0;background:#fff}.chatwith.gcohtech-sxykpf .person.gcohtech-sxykpf:last-child{border-bottom:#fff 1px solid}.chatwith.whatsappTheme.gcohtech-sxykpf .person.gcohtech-sxykpf,.chatwith.whatsappTheme.gcohtech-sxykpf .people.gcohtech-sxykpf{background-image:url('https://services.tochat.be/img/bk-wa.png');border:none}.chatwith.rightx.gcohtech-sxykpf .mbutton.gcohtech-sxykpf{text-align:right;display:flex;flex-direction:row-reverse}.chatwith.gcohtech-sxykpf .slide-in-right.gcohtech-sxykpf{-webkit-animation:gcohtech-sxykpf-slide-in-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)\n      both;animation:gcohtech-sxykpf-slide-in-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both}.chatwith.gcohtech-sxykpf .slide-in-left.gcohtech-sxykpf{-webkit-animation:gcohtech-sxykpf-slide-in-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)\n      both;animation:gcohtech-sxykpf-slide-in-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both}.chatwith.gcohtech-sxykpf .bounce-in-right.gcohtech-sxykpf{-webkit-animation:gcohtech-sxykpf-bounce-in-right 1.1s both;animation:gcohtech-sxykpf-bounce-in-right 1.1s both}.chatwith.gcohtech-sxykpf .bounce-in-left.gcohtech-sxykpf{-webkit-animation:gcohtech-sxykpf-bounce-in-left 1.1s both;animation:gcohtech-sxykpf-bounce-in-left 1.1s both}.chatwith.gcohtech-sxykpf .swing-in-bottom-fwd.gcohtech-sxykpf{-webkit-animation:gcohtech-sxykpf-swing-in-bottom-fwd 0.5s\n      cubic-bezier(0.175, 0.885, 0.32, 1.275) both;animation:gcohtech-sxykpf-swing-in-bottom-fwd 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n      both}.chatwith.gcohtech-sxykpf .showmore.gcohtech-sxykpf{width:100%;margin:auto;color:white;font-size:14px;border:none;border-top:2px solid var(--color)}.welcome-back.gcohtech-sxykpf.gcohtech-sxykpf{text-align:right;background:#2b70cd;float:right;padding:15px 42px;margin:10px;font-size:19px;color:#fff;border-radius:6px;max-width:200px}.powered-by-tochatbe.gcohtech-sxykpf.gcohtech-sxykpf{border-top:1px solid #efefef;-webkit-padding-end:15px;padding-inline-end:15px;-webkit-padding-after:3px;padding-block-end:3px;text-align:right}.powered-by-tochatbe.gcohtech-sxykpf a.gcohtech-sxykpf,.powered-by-tochatbe.gcohtech-sxykpf a.gcohtech-sxykpf:active,.powered-by-tochatbe.gcohtech-sxykpf a.gcohtech-sxykpf:visited{color:#dfdcdc;text-decoration:none;font-size:9pt}@media only screen and (min-width: 769px){.device-M.gcohtech-sxykpf.gcohtech-sxykpf{display:none}}@media only screen and (max-width: 768px){.device-D.gcohtech-sxykpf.gcohtech-sxykpf{display:none}.fullScreenMobile.gcohtech-sxykpf .chatwith-widget.gcohtech-sxykpf{max-width:unset}.fullScreenMobile.gcohtech-sxykpf .chatwith-content.gcohtech-sxykpf{display:flex;flex-direction:column;height:100%}.fullScreenMobile.gcohtech-sxykpf .space-evenly.gcohtech-sxykpf{justify-content:space-evenly}.fullScreenMobile.gcohtech-sxykpf .people.gcohtech-sxykpf{display:flex;flex-direction:column;height:100%}}@-webkit-keyframes gcohtech-sxykpf-swing-in-bottom-fwd{0%{transform:rotateX(100deg);transform-origin:bottom;opacity:0}100%{transform:rotateX(0);transform-origin:bottom;opacity:1}}@keyframes gcohtech-sxykpf-swing-in-bottom-fwd{0%{transform:rotateX(100deg);transform-origin:bottom;opacity:0}100%{transform:rotateX(0);transform-origin:bottom;opacity:1}}@-webkit-keyframes gcohtech-sxykpf-slide-in-right{0%{transform:translateX(1000px);opacity:0}100%{transform:translateX(0);opacity:1}}@keyframes gcohtech-sxykpf-slide-in-right{0%{transform:translateX(1000px);opacity:0}100%{transform:translateX(0);opacity:1}}@-webkit-keyframes gcohtech-sxykpf-slide-in-left{0%{transform:translateX(-1000px);opacity:0}100%{transform:translateX(0);opacity:1}}@keyframes gcohtech-sxykpf-slide-in-left{0%{transform:translateX(-1000px);opacity:0}100%{transform:translateX(0);opacity:1}}@-webkit-keyframes gcohtech-sxykpf-bounce-in-right{0%{transform:translateX(600px);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;opacity:0}38%{transform:translateX(0);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;opacity:1}55%{transform:translateX(68px);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}72%{transform:translateX(0);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}81%{transform:translateX(32px);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}90%{transform:translateX(0);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}95%{transform:translateX(8px);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}100%{transform:translateX(0);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}}@keyframes gcohtech-sxykpf-bounce-in-right{0%{transform:translateX(600px);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;opacity:0}38%{transform:translateX(0);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;opacity:1}55%{transform:translateX(68px);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}72%{transform:translateX(0);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}81%{transform:translateX(32px);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}90%{transform:translateX(0);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}95%{transform:translateX(8px);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}100%{transform:translateX(0);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}}.slide-in-bottom.gcohtech-sxykpf.gcohtech-sxykpf{-webkit-animation:gcohtech-sxykpf-slide-in-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)\n      both;animation:gcohtech-sxykpf-slide-in-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both}@-webkit-keyframes gcohtech-sxykpf-bounce-in-left{0%{transform:translateX(-600px);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;opacity:0}38%{transform:translateX(0);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;opacity:1}55%{transform:translateX(-68px);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}72%{transform:translateX(0);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}81%{transform:translateX(-28px);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}90%{transform:translateX(0);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}95%{transform:translateX(-8px);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}100%{transform:translateX(0);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}}@keyframes gcohtech-sxykpf-bounce-in-left{0%{transform:translateX(-600px);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;opacity:0}38%{transform:translateX(0);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;opacity:1}55%{transform:translateX(-68px);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}72%{transform:translateX(0);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}81%{transform:translateX(-28px);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}90%{transform:translateX(0);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}95%{transform:translateX(-8px);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}100%{transform:translateX(0);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}}@-webkit-keyframes gcohtech-sxykpf-slide-in-bottom{0%{transform:translateY(1000px);opacity:0}100%{transform:translateY(0);opacity:1}}@keyframes gcohtech-sxykpf-slide-in-bottom{0%{transform:translateY(1000px);opacity:0}100%{transform:translateY(0);opacity:1}}"),
          w(document.head, t)),
        Ne(this, e, dl, ul, s, { data: 0, openWidget: 34, embed: 1 }, [-1, -1]);
    }
  }
  function hl(e, t, n) {
    const i = e.slice();
    return (i[5] = t[n]), (i[7] = n), i;
  }
  function fl(e) {
    let t,
      n,
      i,
      o = "bigperson" == e[0] && ml(e),
      a = "classic" == e[0] && yl(e);
    return {
      c() {
        (t = k("div")),
          o && o.c(),
          (n = T()),
          a && a.c(),
          q(t, "class", "gcohtech-x8mclh"),
          B(t, "chatwithrtl", !0 === e[2].rtl);
      },
      m(e, r) {
        b(e, t, r), o && o.m(t, null), w(t, n), a && a.m(t, null), (i = !0);
      },
      p(e, i) {
        "bigperson" == e[0]
          ? o
            ? (o.p(e, i), 1 & i && ve(o, 1))
            : ((o = ml(e)), o.c(), ve(o, 1), o.m(t, n))
          : o &&
            (fe(),
            ge(o, 1, 1, () => {
              o = null;
            }),
            me()),
          "classic" == e[0]
            ? a
              ? (a.p(e, i), 1 & i && ve(a, 1))
              : ((a = yl(e)), a.c(), ve(a, 1), a.m(t, null))
            : a &&
              (fe(),
              ge(a, 1, 1, () => {
                a = null;
              }),
              me()),
          4 & i && B(t, "chatwithrtl", !0 === e[2].rtl);
      },
      i(e) {
        i || (ve(o), ve(a), (i = !0));
      },
      o(e) {
        ge(o), ge(a), (i = !1);
      },
      d(e) {
        e && y(t), o && o.d(), a && a.d();
      },
    };
  }
  function ml(e) {
    let t, n, i, o;
    const a = [gl, vl],
      r = [];
    function s(e, t) {
      return e[4] ? 0 : 1;
    }
    return (
      (n = s(e)),
      (i = r[n] = a[n](e)),
      {
        c() {
          (t = k("div")),
            i.c(),
            z(t, "display", "flex"),
            z(t, "justify-content", "center"),
            z(t, "flex-flow", "wrap row"),
            z(t, "margin-left", "-1em"),
            z(t, "margin-right", "-1em");
        },
        m(e, i) {
          b(e, t, i), r[n].m(t, null), (o = !0);
        },
        p(e, o) {
          let l = n;
          (n = s(e)),
            n === l
              ? r[n].p(e, o)
              : (fe(),
                ge(r[l], 1, 1, () => {
                  r[l] = null;
                }),
                me(),
                (i = r[n]),
                i ? i.p(e, o) : ((i = r[n] = a[n](e)), i.c()),
                ve(i, 1),
                i.m(t, null));
        },
        i(e) {
          o || (ve(i), (o = !0));
        },
        o(e) {
          ge(i), (o = !1);
        },
        d(e) {
          e && y(t), r[n].d();
        },
      }
    );
  }
  function vl(e) {
    let t,
      n,
      i = e[2].whatsapps,
      o = [];
    for (let t = 0; t < i.length; t += 1) o[t] = bl(hl(e, i, t));
    const a = (e) =>
      ge(o[e], 1, 1, () => {
        o[e] = null;
      });
    return {
      c() {
        for (let e = 0; e < o.length; e += 1) o[e].c();
        t = I();
      },
      m(e, i) {
        for (let t = 0; t < o.length; t += 1) o[t].m(e, i);
        b(e, t, i), (n = !0);
      },
      p(e, n) {
        if (12 & n) {
          let r;
          for (i = e[2].whatsapps, r = 0; r < i.length; r += 1) {
            const a = hl(e, i, r);
            o[r]
              ? (o[r].p(a, n), ve(o[r], 1))
              : ((o[r] = bl(a)),
                o[r].c(),
                ve(o[r], 1),
                o[r].m(t.parentNode, t));
          }
          for (fe(), r = i.length; r < o.length; r += 1) a(r);
          me();
        }
      },
      i(e) {
        if (!n) {
          for (let e = 0; e < i.length; e += 1) ve(o[e]);
          n = !0;
        }
      },
      o(e) {
        o = o.filter(Boolean);
        for (let e = 0; e < o.length; e += 1) ge(o[e]);
        n = !1;
      },
      d(e) {
        x(o, e), e && y(t);
      },
    };
  }
  function gl(e) {
    let t, n;
    return (
      (t = new cr({ props: { person: e[5], data: e[2] } })),
      {
        c() {
          Te(t.$$.fragment);
        },
        m(e, i) {
          Ie(t, e, i), (n = !0);
        },
        p(e, n) {
          const i = {};
          32 & n && (i.person = e[5]), 4 & n && (i.data = e[2]), t.$set(i);
        },
        i(e) {
          n || (ve(t.$$.fragment, e), (n = !0));
        },
        o(e) {
          ge(t.$$.fragment, e), (n = !1);
        },
        d(e) {
          Se(t, e);
        },
      }
    );
  }
  function wl(e) {
    let t, n;
    return (
      (t = new cr({ props: { person: e[5], data: e[2] } })),
      {
        c() {
          Te(t.$$.fragment);
        },
        m(e, i) {
          Ie(t, e, i), (n = !0);
        },
        p(e, n) {
          const i = {};
          4 & n && (i.person = e[5]), 4 & n && (i.data = e[2]), t.$set(i);
        },
        i(e) {
          n || (ve(t.$$.fragment, e), (n = !0));
        },
        o(e) {
          ge(t.$$.fragment, e), (n = !1);
        },
        d(e) {
          Se(t, e);
        },
      }
    );
  }
  function bl(e) {
    let t,
      n,
      i = (null === e[3] || e[3] == e[5].id) && wl(e);
    return {
      c() {
        i && i.c(), (t = I());
      },
      m(e, o) {
        i && i.m(e, o), b(e, t, o), (n = !0);
      },
      p(e, n) {
        null === e[3] || e[3] == e[5].id
          ? i
            ? (i.p(e, n), 12 & n && ve(i, 1))
            : ((i = wl(e)), i.c(), ve(i, 1), i.m(t.parentNode, t))
          : i &&
            (fe(),
            ge(i, 1, 1, () => {
              i = null;
            }),
            me());
      },
      i(e) {
        n || (ve(i), (n = !0));
      },
      o(e) {
        ge(i), (n = !1);
      },
      d(e) {
        i && i.d(e), e && y(t);
      },
    };
  }
  function yl(e) {
    let t, n, i;
    return (
      (n = new pl({
        props: {
          openWidget: e[2].isopen,
          data: e[2],
          embed: e[1] && !e[2].expandFullScreenMobile,
        },
      })),
      {
        c() {
          (t = k("div")), Te(n.$$.fragment);
        },
        m(e, o) {
          b(e, t, o), Ie(n, t, null), (i = !0);
        },
        p(e, t) {
          const i = {};
          4 & t && (i.openWidget = e[2].isopen),
            4 & t && (i.data = e[2]),
            6 & t && (i.embed = e[1] && !e[2].expandFullScreenMobile),
            n.$set(i);
        },
        i(e) {
          i || (ve(n.$$.fragment, e), (i = !0));
        },
        o(e) {
          ge(n.$$.fragment, e), (i = !1);
        },
        d(e) {
          e && y(t), Se(n);
        },
      }
    );
  }
  function xl(e) {
    let t,
      n,
      i,
      o = !e[2].notMounted && fl(e);
    return {
      c() {
        o && o.c(),
          (t = T()),
          (n = k("style")),
          (n.textContent =
            "@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;400&display=swap');");
      },
      m(e, a) {
        o && o.m(e, a), b(e, t, a), w(document.head, n), (i = !0);
      },
      p(e, [n]) {
        e[2].notMounted
          ? o &&
            (fe(),
            ge(o, 1, 1, () => {
              o = null;
            }),
            me())
          : o
          ? (o.p(e, n), 4 & n && ve(o, 1))
          : ((o = fl(e)), o.c(), ve(o, 1), o.m(t.parentNode, t));
      },
      i(e) {
        i || (ve(o), (i = !0));
      },
      o(e) {
        ge(o), (i = !1);
      },
      d(e) {
        o && o.d(e), e && y(t), y(n);
      },
    };
  }
  function kl(e, t, n) {
    let i,
      { widgetType: o } = t,
      { embed: a } = t,
      r = {
        widgetDelay: 0,
        active: 0,
        isopen: !1,
        whatsapps: [],
        faqState: "HIDE",
        activeFaqs: [],
        notMounted: !0,
      },
      s = null,
      l = !1;
    return (
      W(async () => {
        n(
          3,
          (s = document.currentScript.hasAttribute("data-person")
            ? document.currentScript.getAttribute("data-person")
            : null)
        );
        const e = "https://services.tochat.be";
        var t;
        (Wn = e),
          n(2, (r = await Hn(e))),
          (t = !r.turnOffCookies),
          (rt = t),
          "bigperson" == o && n(2, (r.widgetType = "bigperson"), r),
          n(
            5,
            (i =
              r.whatsapps &&
              r.whatsapps.find((e) => e.isExtraLink && "payment" === e.type))
          ),
          i && n(4, (l = !0)),
          !0 === r.openOnce &&
            n(
              2,
              (r.isopen = (function (e, t) {
                if (
                  !0 === e.openOnce &&
                  !0 !== e.turnOffCookies &&
                  "classic" == t
                ) {
                  if (-1 != document.cookie.indexOf("wWidgetOnlyOnce"))
                    return !1;
                  document.cookie = "wWidgetOnlyOnce=true";
                } else
                  "classic" == t &&
                    (document.cookie =
                      "wWidgetOnlyOnce=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;");
                return !0;
              })(r, o)),
              r
            ),
          r.widgetDelay > 0 &&
            r.active &&
            (n(2, (r.active = !1), r),
            setTimeout(() => n(2, (r.active = !0), r), 1e3 * r.widgetDelay));
      }),
      (e.$$set = (e) => {
        "widgetType" in e && n(0, (o = e.widgetType)),
          "embed" in e && n(1, (a = e.embed));
      }),
      [o, a, r, s, l, i]
    );
  }
  class Cl extends qe {
    constructor(e) {
      var t;
      super(),
        document.getElementById("gcohtech-x8mclh-style") ||
          (((t = k("style")).id = "gcohtech-x8mclh-style"),
          (t.textContent =
            ".chatwithrtl.gcohtech-x8mclh{direction:rtl;text-align:initial}"),
          w(document.head, t)),
        Ne(this, e, kl, xl, s, { widgetType: 0, embed: 1 });
    }
  }
  Rn(function (e, t) {
    var n;
    (n = function () {
      function e() {
        for (var e = 0, t = {}; e < arguments.length; e++) {
          var n = arguments[e];
          for (var i in n) t[i] = n[i];
        }
        return t;
      }
      function t(e) {
        return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
      }
      return (function n(i) {
        function o() {}
        function a(t, n, a) {
          if ("undefined" != typeof document) {
            "number" == typeof (a = e({ path: "/" }, o.defaults, a)).expires &&
              (a.expires = new Date(1 * new Date() + 864e5 * a.expires)),
              (a.expires = a.expires ? a.expires.toUTCString() : "");
            try {
              var r = JSON.stringify(n);
              /^[\{\[]/.test(r) && (n = r);
            } catch (e) {}
            (n = i.write
              ? i.write(n, t)
              : encodeURIComponent(String(n)).replace(
                  /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
                  decodeURIComponent
                )),
              (t = encodeURIComponent(String(t))
                .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
                .replace(/[\(\)]/g, escape));
            var s = "";
            for (var l in a)
              a[l] &&
                ((s += "; " + l),
                !0 !== a[l] && (s += "=" + a[l].split(";")[0]));
            return (document.cookie = t + "=" + n + s);
          }
        }
        function r(e, n) {
          if ("undefined" != typeof document) {
            for (
              var o = {},
                a = document.cookie ? document.cookie.split("; ") : [],
                r = 0;
              r < a.length;
              r++
            ) {
              var s = a[r].split("="),
                l = s.slice(1).join("=");
              n || '"' !== l.charAt(0) || (l = l.slice(1, -1));
              try {
                var c = t(s[0]);
                if (((l = (i.read || i)(l, c) || t(l)), n))
                  try {
                    l = JSON.parse(l);
                  } catch (e) {}
                if (((o[c] = l), e === c)) break;
              } catch (e) {}
            }
            return e ? o[e] : o;
          }
        }
        return (
          (o.set = a),
          (o.get = function (e) {
            return r(e, !1);
          }),
          (o.getJSON = function (e) {
            return r(e, !0);
          }),
          (o.remove = function (t, n) {
            a(t, "", e(n, { expires: -1 }));
          }),
          (o.defaults = {}),
          (o.withConverter = n),
          o
        );
      })(function () {});
    }),
      (e.exports = n());
  });
  if (document.currentScript.hasAttribute("data-widget-type")) {
    new Cl({
      target: document.getElementById("whatapp-people-widget"),
      props: { widgetType: "bigperson" },
    });
  } else if (document.currentScript.hasAttribute("data-widget-embed")) {
    new Cl({
      target: document.getElementById("data-widget-embed"),
      props: { widgetType: "classic" },
    });
  } else if (document.currentScript.hasAttribute("data-widget-embed-google")) {
    new Cl({
      target: document.getElementById("data-widget-embed-google"),
      props: { widgetType: "classic", embed: !0 },
    });
  } else {
    new Cl({ target: document.body, props: { widgetType: "classic" } });
  }
  return app;
})();


//# sourceMappingURL=bundle.js.map
