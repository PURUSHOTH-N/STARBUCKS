!(function () {
  "use strict";
  var t = {
      log: "log",
      debug: "debug",
      info: "info",
      warn: "warn",
      error: "error",
    },
    e = console,
    n = {};
  Object.keys(t).forEach(function (t) {
    n[t] = e[t];
  });
  var r = "Datadog Browser SDK:",
    i = {
      debug: n.debug.bind(e, r),
      log: n.log.bind(e, r),
      info: n.info.bind(e, r),
      warn: n.warn.bind(e, r),
      error: n.error.bind(e, r),
    },
    o = "https://docs.datadoghq.com",
    a = "".concat(o, "/real_user_monitoring/browser/troubleshooting"),
    s = "More details:";
  function u(t, e) {
    return function () {
      for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
      try {
        return t.apply(void 0, n);
      } catch (t) {
        i.error(e, t);
      }
    };
  }
  var c,
    l = function (t, e, n) {
      if (n || 2 === arguments.length)
        for (var r, i = 0, o = e.length; i < o; i++)
          (!r && i in e) ||
            (r || (r = Array.prototype.slice.call(e, 0, i)), (r[i] = e[i]));
      return t.concat(r || Array.prototype.slice.call(e));
    },
    d = !1;
  function f(t) {
    d = t;
  }
  function p(t) {
    return function () {
      return v(t, this, arguments);
    };
  }
  function v(t, e, n) {
    try {
      return t.apply(e, n);
    } catch (t) {
      if ((h(t), c))
        try {
          c(t);
        } catch (t) {
          h(t);
        }
    }
  }
  function h() {
    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
    d && i.error.apply(i, l(["[MONITOR]"], t, !1));
  }
  function m(t, e) {
    return -1 !== t.indexOf(e);
  }
  function g(t) {
    if (Array.from) return Array.from(t);
    var e = [];
    if (t instanceof Set)
      t.forEach(function (t) {
        return e.push(t);
      });
    else for (var n = 0; n < t.length; n++) e.push(t[n]);
    return e;
  }
  function _(t, e) {
    for (var n = 0; n < t.length; n += 1) {
      var r = t[n];
      if (e(r, n)) return r;
    }
  }
  function y(t) {
    return Object.keys(t).map(function (e) {
      return t[e];
    });
  }
  function b(t) {
    return Object.keys(t).map(function (e) {
      return [e, t[e]];
    });
  }
  function w(t, e) {
    return t.slice(0, e.length) === e;
  }
  function S(t) {
    for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
    return (
      e.forEach(function (e) {
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      }),
      t
    );
  }
  function k() {
    if ("object" == typeof globalThis) return globalThis;
    Object.defineProperty(Object.prototype, "_dd_temp_", {
      get: function () {
        return this;
      },
      configurable: !0,
    });
    var t = _dd_temp_;
    return (
      delete Object.prototype._dd_temp_,
      "object" != typeof t &&
        (t =
          "object" == typeof self
            ? self
            : "object" == typeof window
            ? window
            : {}),
      t
    );
  }
  var x = 1024,
    C = 1024 * x,
    E = /[^\u0000-\u007F]/;
  function T(t) {
    return E.test(t)
      ? void 0 !== window.TextEncoder
        ? new TextEncoder().encode(t).length
        : new Blob([t]).size
      : t.length;
  }
  function A(t, e) {
    var n,
      r = k();
    return (
      r.Zone &&
        "function" == typeof r.Zone.__symbol__ &&
        (n = t[r.Zone.__symbol__(e)]),
      n || (n = t[e]),
      n
    );
  }
  function R(t, e) {
    return A(k(), "setTimeout")(p(t), e);
  }
  function I(t) {
    A(k(), "clearTimeout")(t);
  }
  function N(t, e) {
    return A(k(), "setInterval")(p(t), e);
  }
  function O(t) {
    A(k(), "clearInterval")(t);
  }
  function M(t, e, n) {
    var r,
      i,
      o = !n || void 0 === n.leading || n.leading,
      a = !n || void 0 === n.trailing || n.trailing,
      s = !1;
    return {
      throttled: function () {
        for (var n = [], u = 0; u < arguments.length; u++) n[u] = arguments[u];
        s
          ? (r = n)
          : (o ? t.apply(void 0, n) : (r = n),
            (s = !0),
            (i = R(function () {
              a && r && t.apply(void 0, r), (s = !1), (r = void 0);
            }, e)));
      },
      cancel: function () {
        I(i), (s = !1), (r = void 0);
      },
    };
  }
  function L() {}
  function D(t, e, n) {
    if ("object" != typeof t || null === t) return JSON.stringify(t);
    var r = P(Object.prototype),
      i = P(Array.prototype),
      o = P(Object.getPrototypeOf(t)),
      a = P(t);
    try {
      return JSON.stringify(t, e, n);
    } catch (t) {
      return "<error: unable to serialize object>";
    } finally {
      r(), i(), o(), a();
    }
  }
  function P(t) {
    var e = t,
      n = e.toJSON;
    return n
      ? (delete e.toJSON,
        function () {
          e.toJSON = n;
        })
      : L;
  }
  function U(t) {
    return S({}, t);
  }
  function z(t, e) {
    return Object.keys(t).some(function (n) {
      return t[n] === e;
    });
  }
  function V(t) {
    return 0 === Object.keys(t).length;
  }
  var F = 3 * x,
    B = 16 * x,
    H = 200;
  function q(t) {
    void 0 === t && (t = 2);
    var e = new Map(),
      n = !1;
    function r(r) {
      if ((void 0 === r && (r = 0), !n && 0 !== t)) {
        var o = 2 === t ? F : B,
          u = r;
        e.forEach(function (t) {
          u += t.getBytesCount();
        }),
          u > o &&
            (!(function (t) {
              i.warn(
                "Customer data exceeds the recommended "
                  .concat(t / x, "KiB threshold. ")
                  .concat(s, " ")
                  .concat(
                    a,
                    "/#customer-data-exceeds-the-recommended-threshold-warning"
                  )
              );
            })(o),
            (n = !0));
      }
    }
    return {
      createDetachedTracker: function () {
        var t = j(function () {
          return r(t.getBytesCount());
        });
        return t;
      },
      getOrCreateTracker: function (t) {
        return e.has(t) || e.set(t, j(r)), e.get(t);
      },
      setCompressionStatus: function (e) {
        0 === t && ((t = e), r());
      },
      getCompressionStatus: function () {
        return t;
      },
      stop: function () {
        e.forEach(function (t) {
          return t.stop();
        }),
          e.clear();
      },
    };
  }
  function j(t) {
    var e = 0,
      n = M(function (n) {
        (e = T(D(n))), t();
      }, H),
      r = n.throttled,
      i = n.cancel,
      o = function () {
        i(), (e = 0);
      };
    return {
      updateCustomerData: function (t) {
        V(t) ? o() : r(t);
      },
      resetCustomerData: o,
      getBytesCount: function () {
        return e;
      },
      stop: function () {
        i();
      },
    };
  }
  function G(t) {
    return null === t ? "null" : Array.isArray(t) ? "array" : typeof t;
  }
  function Z(t, e, n) {
    if (
      (void 0 === n &&
        (n = (function () {
          if ("undefined" != typeof WeakSet) {
            var t = new WeakSet();
            return {
              hasAlreadyBeenSeen: function (e) {
                var n = t.has(e);
                return n || t.add(e), n;
              },
            };
          }
          var e = [];
          return {
            hasAlreadyBeenSeen: function (t) {
              var n = e.indexOf(t) >= 0;
              return n || e.push(t), n;
            },
          };
        })()),
      void 0 === e)
    )
      return t;
    if ("object" != typeof e || null === e) return e;
    if (e instanceof Date) return new Date(e.getTime());
    if (e instanceof RegExp) {
      var r =
        e.flags ||
        [
          e.global ? "g" : "",
          e.ignoreCase ? "i" : "",
          e.multiline ? "m" : "",
          e.sticky ? "y" : "",
          e.unicode ? "u" : "",
        ].join("");
      return new RegExp(e.source, r);
    }
    if (!n.hasAlreadyBeenSeen(e)) {
      if (Array.isArray(e)) {
        for (var i = Array.isArray(t) ? t : [], o = 0; o < e.length; ++o)
          i[o] = Z(i[o], e[o], n);
        return i;
      }
      var a = "object" === G(t) ? t : {};
      for (var s in e)
        Object.prototype.hasOwnProperty.call(e, s) && (a[s] = Z(a[s], e[s], n));
      return a;
    }
  }
  function K(t) {
    return Z(void 0, t);
  }
  function W() {
    for (var t, e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
    for (var r = 0, i = e; r < i.length; r++) {
      var o = i[r];
      null != o && (t = Z(t, o));
    }
    return t;
  }
  var X = 220 * x,
    Y = "$",
    J = 3;
  function $(t, e) {
    void 0 === e && (e = X);
    var n = P(Object.prototype),
      r = P(Array.prototype),
      i = [],
      o = new WeakMap(),
      a = Q(t, Y, void 0, i, o),
      s = JSON.stringify(a),
      u = s ? s.length : 0;
    if (!(u > e)) {
      for (; i.length > 0 && u < e; ) {
        var c = i.shift(),
          l = 0;
        if (Array.isArray(c.source))
          for (var d = 0; d < c.source.length; d++) {
            if (
              ((u +=
                void 0 !== (f = Q(c.source[d], c.path, d, i, o))
                  ? JSON.stringify(f).length
                  : 4),
              (u += l),
              (l = 1),
              u > e)
            ) {
              tt(e, "truncated", t);
              break;
            }
            c.target[d] = f;
          }
        else
          for (var d in c.source)
            if (Object.prototype.hasOwnProperty.call(c.source, d)) {
              var f;
              if (
                (void 0 !== (f = Q(c.source[d], c.path, d, i, o)) &&
                  ((u += JSON.stringify(f).length + l + d.length + J), (l = 1)),
                u > e)
              ) {
                tt(e, "truncated", t);
                break;
              }
              c.target[d] = f;
            }
      }
      return n(), r(), a;
    }
    tt(e, "discarded", t);
  }
  function Q(t, e, n, r, i) {
    var o = (function (t) {
      var e = t;
      if (e && "function" == typeof e.toJSON)
        try {
          return e.toJSON();
        } catch (t) {}
      return t;
    })(t);
    if (!o || "object" != typeof o)
      return (function (t) {
        if ("bigint" == typeof t) return "[BigInt] ".concat(t.toString());
        if ("function" == typeof t)
          return "[Function] ".concat(t.name || "unknown");
        if ("symbol" == typeof t)
          return "[Symbol] ".concat(t.description || t.toString());
        return t;
      })(o);
    var a = (function (t) {
      try {
        if (t instanceof Event) return { isTrusted: t.isTrusted };
        var e = Object.prototype.toString.call(t).match(/\[object (.*)\]/);
        if (e && e[1]) return "[".concat(e[1], "]");
      } catch (t) {}
      return "[Unserializable]";
    })(o);
    if ("[Object]" !== a && "[Array]" !== a && "[Error]" !== a) return a;
    var s = t;
    if (i.has(s)) return "[Reference seen at ".concat(i.get(s), "]");
    var u = void 0 !== n ? "".concat(e, ".").concat(n) : e,
      c = Array.isArray(o) ? [] : {};
    return i.set(s, u), r.push({ source: o, target: c, path: u }), c;
  }
  function tt(t, e, n) {
    i.warn(
      "The data provided has been "
        .concat(e, " as it is over the limit of ")
        .concat(t, " characters:"),
      n
    );
  }
  var et = (function () {
    function t(t) {
      (this.onFirstSubscribe = t), (this.observers = []);
    }
    return (
      (t.prototype.subscribe = function (t) {
        var e = this;
        return (
          this.observers.push(t),
          1 === this.observers.length &&
            this.onFirstSubscribe &&
            (this.onLastUnsubscribe = this.onFirstSubscribe(this) || void 0),
          {
            unsubscribe: function () {
              (e.observers = e.observers.filter(function (e) {
                return t !== e;
              })),
                !e.observers.length &&
                  e.onLastUnsubscribe &&
                  e.onLastUnsubscribe();
            },
          }
        );
      }),
      (t.prototype.notify = function (t) {
        this.observers.forEach(function (e) {
          return e(t);
        });
      }),
      t
    );
  })();
  function nt() {
    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
    return new et(function (e) {
      var n = t.map(function (t) {
        return t.subscribe(function (t) {
          return e.notify(t);
        });
      });
      return function () {
        return n.forEach(function (t) {
          return t.unsubscribe();
        });
      };
    });
  }
  function rt(t) {
    var e = {},
      n = new et(),
      r = {
        getContext: function () {
          return K(e);
        },
        setContext: function (i) {
          "object" === G(i)
            ? ((e = $(i)), t && t.updateCustomerData(e))
            : r.clearContext(),
            n.notify();
        },
        setContextProperty: function (r, i) {
          (e[r] = $(i)), t && t.updateCustomerData(e), n.notify();
        },
        removeContextProperty: function (r) {
          delete e[r], t && t.updateCustomerData(e), n.notify();
        },
        clearContext: function () {
          (e = {}), t && t.resetCustomerData(), n.notify();
        },
        changeObservable: n,
      };
    return r;
  }
  var it = { GRANTED: "granted", NOT_GRANTED: "not-granted" };
  function ot(t, e, n, r, i) {
    return at(t, e, [n], r, i);
  }
  function at(t, e, n, r, i) {
    var o = void 0 === i ? {} : i,
      a = o.once,
      s = o.capture,
      u = o.passive,
      c = p(function (e) {
        (e.isTrusted || e.__ddIsTrusted || t.allowUntrustedEvents) &&
          (a && f(), r(e));
      }),
      l = u ? { capture: s, passive: u } : s,
      d = A(e, "addEventListener");
    function f() {
      var t = A(e, "removeEventListener");
      n.forEach(function (n) {
        return t.call(e, n, c, l);
      });
    }
    return (
      n.forEach(function (t) {
        return d.call(e, t, c, l);
      }),
      { stop: f }
    );
  }
  var st = "_dd_c",
    ut = [];
  function ct(t, e, n, r) {
    var i = (function (t, e) {
      return "".concat(st, "_").concat(t, "_").concat(e);
    })(n, r);
    function o() {
      var t = localStorage.getItem(i);
      return null !== t ? JSON.parse(t) : {};
    }
    ut.push(
      ot(t, window, "storage", function (t) {
        var n = t.key;
        i === n && e.setContext(o());
      })
    ),
      e.changeObservable.subscribe(function () {
        localStorage.setItem(i, JSON.stringify(e.getContext()));
      }),
      e.setContext(W(o(), e.getContext()));
  }
  function lt() {
    var t = "",
      e = 0;
    return {
      isAsync: !1,
      get isEmpty() {
        return !t;
      },
      write: function (n, r) {
        var i = T(n);
        (e += i), (t += n), r && r(i);
      },
      finish: function (t) {
        t(this.finishSync());
      },
      finishSync: function () {
        var n = {
          output: t,
          outputBytesCount: e,
          rawBytesCount: e,
          pendingData: "",
        };
        return (t = ""), (e = 0), n;
      },
      estimateEncodedBytesCount: function (t) {
        return t.length;
      },
    };
  }
  var dt = "?";
  function ft(t) {
    var e = [],
      n = wt(t, "stack"),
      r = String(t);
    return (
      n && w(n, r) && (n = n.slice(r.length)),
      n &&
        n.split("\n").forEach(function (t) {
          var n =
            (function (t) {
              var e = ht.exec(t);
              if (!e) return;
              var n = e[2] && 0 === e[2].indexOf("native"),
                r = e[2] && 0 === e[2].indexOf("eval"),
                i = mt.exec(e[2]);
              r && i && ((e[2] = i[1]), (e[3] = i[2]), (e[4] = i[3]));
              return {
                args: n ? [e[2]] : [],
                column: e[4] ? +e[4] : void 0,
                func: e[1] || dt,
                line: e[3] ? +e[3] : void 0,
                url: n ? void 0 : e[2],
              };
            })(t) ||
            (function (t) {
              var e = gt.exec(t);
              if (!e) return;
              return {
                args: [],
                column: e[3] ? +e[3] : void 0,
                func: dt,
                line: e[2] ? +e[2] : void 0,
                url: e[1],
              };
            })(t) ||
            (function (t) {
              var e = _t.exec(t);
              if (!e) return;
              return {
                args: [],
                column: e[4] ? +e[4] : void 0,
                func: e[1] || dt,
                line: +e[3],
                url: e[2],
              };
            })(t) ||
            (function (t) {
              var e = yt.exec(t);
              if (!e) return;
              var n = e[3] && e[3].indexOf(" > eval") > -1,
                r = bt.exec(e[3]);
              n && r && ((e[3] = r[1]), (e[4] = r[2]), (e[5] = void 0));
              return {
                args: e[2] ? e[2].split(",") : [],
                column: e[5] ? +e[5] : void 0,
                func: e[1] || dt,
                line: e[4] ? +e[4] : void 0,
                url: e[3],
              };
            })(t);
          n && (!n.func && n.line && (n.func = dt), e.push(n));
        }),
      { message: wt(t, "message"), name: wt(t, "name"), stack: e }
    );
  }
  var pt =
      "((?:file|https?|blob|chrome-extension|native|eval|webpack|snippet|<anonymous>|\\w+\\.|\\/).*?)",
    vt = "(?::(\\d+))",
    ht = new RegExp(
      "^\\s*at (.*?) ?\\(".concat(pt).concat(vt, "?").concat(vt, "?\\)?\\s*$"),
      "i"
    ),
    mt = new RegExp("\\((\\S*)".concat(vt).concat(vt, "\\)"));
  var gt = new RegExp(
    "^\\s*at ?".concat(pt).concat(vt, "?").concat(vt, "??\\s*$"),
    "i"
  );
  var _t =
    /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
  var yt =
      /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|capacitor|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i,
    bt = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
  function wt(t, e) {
    if ("object" == typeof t && t && e in t) {
      var n = t[e];
      return "string" == typeof n ? n : void 0;
    }
  }
  function St(t, e, n, r) {
    var i = [{ url: e, column: r, line: n }],
      o = (function (t) {
        var e, n, r;
        "[object String]" === {}.toString.call(t) &&
          ((n = (e = kt.exec(t))[1]), (r = e[2]));
        return { name: n, message: r };
      })(t);
    return { name: o.name, message: o.message, stack: i };
  }
  var kt =
    /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?([\s\S]*)$/;
  function xt() {
    var t,
      e = new Error();
    if (!e.stack)
      try {
        throw e;
      } catch (t) {}
    return (
      v(function () {
        var n = ft(e);
        (n.stack = n.stack.slice(2)), (t = Ct(n));
      }),
      t
    );
  }
  function Ct(t) {
    var e = Et(t);
    return (
      t.stack.forEach(function (t) {
        var n = "?" === t.func ? "<anonymous>" : t.func,
          r =
            t.args && t.args.length > 0
              ? "(".concat(t.args.join(", "), ")")
              : "",
          i = t.line ? ":".concat(t.line) : "",
          o = t.line && t.column ? ":".concat(t.column) : "";
        e += "\n  at "
          .concat(n)
          .concat(r, " @ ")
          .concat(t.url)
          .concat(i)
          .concat(o);
      }),
      e
    );
  }
  function Et(t) {
    return "".concat(t.name || "Error", ": ").concat(t.message);
  }
  var Tt,
    At = "No stack, consider using an instance of Error";
  function Rt(t) {
    var e = t.stackTrace,
      n = t.originalError,
      r = t.handlingStack,
      i = t.startClocks,
      o = t.nonErrorPrefix,
      a = t.source,
      s = t.handling,
      u = n instanceof Error,
      c = (function (t, e, n, r) {
        return (null == t ? void 0 : t.message) && (null == t ? void 0 : t.name)
          ? t.message
          : e
          ? "Empty message"
          : "".concat(n, " ").concat(D($(r)));
      })(e, u, o, n),
      l = (function (t, e) {
        if (void 0 === e) return !1;
        if (t) return !0;
        return (
          e.stack.length > 0 &&
          (e.stack.length > 1 || void 0 !== e.stack[0].url)
        );
      })(u, e)
        ? Ct(e)
        : At,
      d = u ? Nt(n, a) : void 0;
    return {
      startClocks: i,
      source: a,
      handling: s,
      handlingStack: r,
      originalError: n,
      type: e ? e.name : void 0,
      message: c,
      stack: l,
      causes: d,
      fingerprint: It(n),
    };
  }
  function It(t) {
    return t instanceof Error && "dd_fingerprint" in t
      ? String(t.dd_fingerprint)
      : void 0;
  }
  function Nt(t, e) {
    for (
      var n = t, r = [];
      (null == n ? void 0 : n.cause) instanceof Error && r.length < 10;

    ) {
      var i = ft(n.cause);
      r.push({
        message: n.cause.message,
        source: e,
        type: null == i ? void 0 : i.name,
        stack: i && Ct(i),
      }),
        (n = n.cause);
    }
    return r.length ? r : void 0;
  }
  !(function (t) {
    (t.WRITABLE_RESOURCE_GRAPHQL = "writable_resource_graphql"),
      (t.REMOTE_CONFIGURATION = "remote_configuration"),
      (t.UPDATE_VIEW_NAME = "update_view_name"),
      (t.LONG_ANIMATION_FRAME = "long_animation_frame");
  })(Tt || (Tt = {}));
  var Ot = new Set();
  function Mt(t) {
    Array.isArray(t) &&
      t
        .filter(function (t) {
          return z(Tt, t);
        })
        .forEach(function (t) {
          Ot.add(t);
        });
  }
  function Lt(t) {
    return Ot.has(t);
  }
  function Dt() {
    return Ot;
  }
  var Pt = "datad0g.com",
    Ut = "dd0g-gov.com",
    zt = "datadoghq.com",
    Vt = "datadoghq.eu",
    Ft = "pci.browser-intake-datadoghq.com";
  function Bt(t) {
    return 0 !== t && 100 * Math.random() <= t;
  }
  function Ht(t, e) {
    return +t.toFixed(e);
  }
  function qt(t) {
    return "number" == typeof t;
  }
  var jt,
    Gt = 1e3,
    Zt = 60 * Gt,
    Kt = 60 * Zt,
    Wt = 365 * (24 * Kt);
  function Xt(t) {
    return { relative: t, timeStamp: Yt(t) };
  }
  function Yt(t) {
    var e = $t() - performance.now();
    return e > ae()
      ? Math.round(ie(e, t))
      : (function (t) {
          return Math.round(ie(ae(), t));
        })(t);
  }
  function Jt(t) {
    return qt(t) ? Ht(1e6 * t, 0) : t;
  }
  function $t() {
    return new Date().getTime();
  }
  function Qt() {
    return $t();
  }
  function te() {
    return performance.now();
  }
  function ee() {
    return { relative: te(), timeStamp: Qt() };
  }
  function ne() {
    return { relative: 0, timeStamp: ae() };
  }
  function re(t, e) {
    return e - t;
  }
  function ie(t, e) {
    return t + e;
  }
  function oe(t) {
    return t - ae();
  }
  function ae() {
    return void 0 === jt && (jt = performance.timing.navigationStart), jt;
  }
  function se(t, e) {
    var n = window.__ddBrowserSdkExtensionCallback;
    n && n({ type: t, payload: e });
  }
  function ue() {
    var t,
      e = window.navigator;
    return {
      status: e.onLine ? "connected" : "not_connected",
      interfaces:
        e.connection && e.connection.type ? [e.connection.type] : void 0,
      effective_type:
        null === (t = e.connection) || void 0 === t ? void 0 : t.effectiveType,
    };
  }
  function ce(t, e) {
    var n = t.indexOf(e);
    n >= 0 && t.splice(n, 1);
  }
  var le = 500;
  function de() {
    var t = [];
    return {
      add: function (e) {
        t.push(e) > le && t.splice(0, 1);
      },
      remove: function (e) {
        ce(t, e);
      },
      drain: function (e) {
        t.forEach(function (t) {
          return t(e);
        }),
          (t.length = 0);
      },
    };
  }
  var fe = { log: "log", configuration: "configuration", usage: "usage" },
    pe = [
      "https://www.datadoghq-browser-agent.com",
      "https://www.datad0g-browser-agent.com",
      "https://d3uc069fcn7uxw.cloudfront.net",
      "https://d20xtzwzcl0ceb.cloudfront.net",
      "http://localhost",
      "<anonymous>",
    ],
    ve = ["ddog-gov.com"],
    he = de(),
    me = function (t) {
      he.add(function () {
        return me(t);
      });
    };
  function ge(t, e) {
    var n,
      r,
      i = new et(),
      o = new Set(),
      a = !m(ve, e.site) && Bt(e.telemetrySampleRate),
      s =
        (((n = {})[fe.log] = a),
        (n[fe.configuration] = a && Bt(e.telemetryConfigurationSampleRate)),
        (n[fe.usage] = a && Bt(e.telemetryUsageSampleRate)),
        n),
      u = {
        is_local_file: "file:" === window.location.protocol,
        is_worker: "WorkerGlobalScope" in self,
      };
    return (
      (me = function (n) {
        var a = D(n);
        if (s[n.type] && o.size < e.maxTelemetryEventsPerPage && !o.has(a)) {
          var c = (function (t, e, n) {
            return W(
              {
                type: "telemetry",
                date: Qt(),
                service: t,
                version: "5.28.0",
                source: "browser",
                _dd: { format_version: 2 },
                telemetry: W(e, { runtime_env: n, connectivity: ue() }),
                experimental_features: g(Dt()),
              },
              void 0 !== r ? r() : {}
            );
          })(t, n, u);
          i.notify(c), se("telemetry", c), o.add(a);
        }
      }),
      (c = ye),
      {
        setContextProvider: function (t) {
          r = t;
        },
        observable: i,
        enabled: a,
      }
    );
  }
  function _e(e, n) {
    h(t.debug, e, n), me(S({ type: fe.log, message: e, status: "debug" }, n));
  }
  function ye(t, e) {
    me(
      S(
        { type: fe.log, status: "error" },
        (function (t) {
          if (t instanceof Error) {
            var e = ft(t);
            return {
              error: { kind: e.name, stack: Ct(we(e)) },
              message: e.message,
            };
          }
          return {
            error: { stack: At },
            message: "".concat("Uncaught", " ").concat(D(t)),
          };
        })(t),
        e
      )
    );
  }
  function be(t) {
    me({ type: fe.usage, usage: t });
  }
  function we(t) {
    return (
      (t.stack = t.stack.filter(function (t) {
        return (
          !t.url ||
          pe.some(function (e) {
            return w(t.url, e);
          })
        );
      })),
      t
    );
  }
  function Se(t) {
    var e = S({}, t);
    return (
      ["id", "name", "email"].forEach(function (t) {
        t in e && (e[t] = String(e[t]));
      }),
      e
    );
  }
  function ke(t, e) {
    e.silentMultipleInit || i.error("".concat(t, " is already initialized."));
  }
  function xe(t) {
    return t
      ? (
          parseInt(t, 10) ^
          ((16 * Math.random()) >> (parseInt(t, 10) / 4))
        ).toString(16)
      : ""
          .concat(1e7, "-")
          .concat(1e3, "-")
          .concat(4e3, "-")
          .concat(8e3, "-")
          .concat(1e11)
          .replace(/[018]/g, xe);
  }
  var Ce = /([\w-]+)\s*=\s*([^;]+)/g;
  function Ee(t, e) {
    for (Ce.lastIndex = 0; ; ) {
      var n = Ce.exec(t);
      if (!n) break;
      if (n[1] === e) return n[2];
    }
  }
  function Te(t, e, n) {
    void 0 === n && (n = "");
    var r = t.charCodeAt(e - 1),
      i = r >= 55296 && r <= 56319 ? e + 1 : e;
    return t.length <= i ? t : "".concat(t.slice(0, i)).concat(n);
  }
  function Ae(t, e, n) {
    function r(n) {
      (function (t) {
        return !e.wasInPageStateDuringPeriod(
          "frozen",
          t.startClocks.relative,
          t.duration
        );
      })(n) &&
        t.notify(
          11,
          (function (t, e) {
            var n = {
              date: t.startClocks.timeStamp,
              vital: {
                id: xe(),
                type: t.type,
                name: t.name,
                duration: Jt(t.duration),
                description: t.description,
              },
              type: "vital",
            };
            e && (n._dd = { vital: { computed_value: !0 } });
            return {
              rawRumEvent: n,
              startTime: t.startClocks.relative,
              customerContext: t.context,
              domainContext: {},
            };
          })(n, !0)
        );
    }
    return {
      addDurationVital: r,
      startDurationVital: function (t, e) {
        return void 0 === e && (e = {}), Re(n, t, e);
      },
      stopDurationVital: function (t, e) {
        void 0 === e && (e = {}), Ie(r, n, t, e);
      },
    };
  }
  function Re(t, e, n) {
    var r = t.vitalsByName,
      i = t.vitalsByReference;
    void 0 === n && (n = {});
    var o = {
        name: e,
        startClocks: ee(),
        context: n.context,
        description: n.description,
      },
      a = { __dd_vital_reference: !0 };
    return r.set(e, o), i.set(a, o), a;
  }
  function Ie(t, e, n, r) {
    var i = e.vitalsByName,
      o = e.vitalsByReference;
    void 0 === r && (r = {});
    var a = "string" == typeof n ? i.get(n) : o.get(n);
    a &&
      (t(
        (function (t, e, n, r) {
          var i;
          return {
            name: t.name,
            type: "duration",
            startClocks: e,
            duration: re(e.timeStamp, r.timeStamp),
            context: W(t.context, n.context),
            description:
              null !== (i = n.description) && void 0 !== i ? i : t.description,
          };
        })(a, a.startClocks, r, ee())
      ),
      "string" == typeof n ? i.delete(n) : o.delete(n));
  }
  function Ne() {
    var t = k().DatadogEventBridge;
    if (t)
      return {
        getCapabilities: function () {
          var e;
          return JSON.parse(
            (null === (e = t.getCapabilities) || void 0 === e
              ? void 0
              : e.call(t)) || "[]"
          );
        },
        getPrivacyLevel: function () {
          var e;
          return null === (e = t.getPrivacyLevel) || void 0 === e
            ? void 0
            : e.call(t);
        },
        getAllowedWebViewHosts: function () {
          return JSON.parse(t.getAllowedWebViewHosts());
        },
        send: function (e, n, r) {
          var i = r ? { id: r } : void 0;
          t.send(JSON.stringify({ eventType: e, event: n, view: i }));
        },
      };
  }
  function Oe(t) {
    var e = Ne();
    return !!e && m(e.getCapabilities(), t);
  }
  function Me(t) {
    var e;
    void 0 === t &&
      (t = null === (e = k().location) || void 0 === e ? void 0 : e.hostname);
    var n = Ne();
    return (
      !!n &&
      n.getAllowedWebViewHosts().some(function (e) {
        return (
          t === e || ((n = t), (r = ".".concat(e)), n.slice(-r.length) === r)
        );
        var n, r;
      })
    );
  }
  function Le(t, e, n, r) {
    var i = (void 0 === r ? {} : r).computeHandlingStack,
      o = t[e];
    if ("function" != typeof o) {
      if (!(e in t) || !w(e, "on")) return { stop: L };
      o = L;
    }
    var a = !1,
      s = function () {
        if (a) return o.apply(this, arguments);
        var t,
          e = g(arguments);
        v(n, null, [
          {
            target: this,
            parameters: e,
            onPostCall: function (e) {
              t = e;
            },
            handlingStack: i ? xt() : void 0,
          },
        ]);
        var r = o.apply(this, e);
        return t && v(t, null, [r]), r;
      };
    return (
      (t[e] = s),
      {
        stop: function () {
          (a = !0), t[e] === s && (t[e] = o);
        },
      }
    );
  }
  function De(t, e, n) {
    var r = Object.getOwnPropertyDescriptor(t, e);
    if (!r || !r.set || !r.configurable) return { stop: L };
    var i = L,
      o = function (t, e) {
        R(function () {
          o !== i && n(t, e);
        }, 0);
      },
      a = function (t) {
        r.set.call(this, t), o(this, t);
      };
    return (
      Object.defineProperty(t, e, { set: a }),
      {
        stop: function () {
          var n;
          (null === (n = Object.getOwnPropertyDescriptor(t, e)) || void 0 === n
            ? void 0
            : n.set) === a && Object.defineProperty(t, e, r),
            (o = i);
        },
      }
    );
  }
  function Pe(t) {
    return Ue(t, location.href).href;
  }
  function Ue(t, e) {
    var n = (function () {
      if (void 0 === ze)
        try {
          var t = new He("http://test/path");
          ze = "http://test/path" === t.href;
        } catch (t) {
          ze = !1;
        }
      return ze ? He : void 0;
    })();
    if (n)
      try {
        return void 0 !== e ? new n(t, e) : new n(t);
      } catch (n) {
        throw new Error(
          "Failed to construct URL: "
            .concat(String(n), " ")
            .concat(D({ url: t, base: e }))
        );
      }
    if (void 0 === e && !/:/.test(t))
      throw new Error("Invalid URL: '".concat(t, "'"));
    var r = document,
      i = r.createElement("a");
    if (void 0 !== e) {
      var o = (r =
        document.implementation.createHTMLDocument("")).createElement("base");
      (o.href = e), r.head.appendChild(o), r.body.appendChild(i);
    }
    return (i.href = t), i;
  }
  var ze,
    Ve,
    Fe,
    Be,
    He = URL;
  function qe() {
    return (
      Ve ||
        (Ve = new et(function (t) {
          if (window.fetch) {
            var e = Le(
              window,
              "fetch",
              function (e) {
                return (function (t, e) {
                  var n = t.parameters,
                    r = t.onPostCall,
                    i = t.handlingStack,
                    o = n[0],
                    a = n[1],
                    s = a && a.method;
                  void 0 === s && o instanceof Request && (s = o.method);
                  var u = void 0 !== s ? String(s).toUpperCase() : "GET",
                    c = o instanceof Request ? o.url : Pe(String(o)),
                    l = ee(),
                    d = {
                      state: "start",
                      init: a,
                      input: o,
                      method: u,
                      startClocks: l,
                      url: c,
                      handlingStack: i,
                    };
                  e.notify(d),
                    (n[0] = d.input),
                    (n[1] = d.init),
                    r(function (t) {
                      return (function (t, e, n) {
                        var r = n;
                        function i(e) {
                          (r.state = "resolve"), S(r, e), t.notify(r);
                        }
                        e.then(
                          p(function (t) {
                            i({
                              response: t,
                              responseType: t.type,
                              status: t.status,
                              isAborted: !1,
                            });
                          }),
                          p(function (t) {
                            var e, n;
                            i({
                              status: 0,
                              isAborted:
                                (null ===
                                  (n =
                                    null === (e = r.init) || void 0 === e
                                      ? void 0
                                      : e.signal) || void 0 === n
                                  ? void 0
                                  : n.aborted) ||
                                (t instanceof DOMException &&
                                  t.code === DOMException.ABORT_ERR),
                              error: t,
                            });
                          })
                        );
                      })(e, t, d);
                    });
                })(e, t);
              },
              { computeHandlingStack: !0 }
            ).stop;
            return e;
          }
        })),
      Ve
    );
  }
  function je(t, e, n, r) {
    var i = new Date();
    i.setTime(i.getTime() + n);
    var o = "expires=".concat(i.toUTCString()),
      a = r && r.crossSite ? "none" : "strict",
      s = r && r.domain ? ";domain=".concat(r.domain) : "",
      u = r && r.secure ? ";secure" : "",
      c = r && r.partitioned ? ";partitioned" : "";
    document.cookie = ""
      .concat(t, "=")
      .concat(e, ";")
      .concat(o, ";path=/;samesite=")
      .concat(a)
      .concat(s)
      .concat(u)
      .concat(c);
  }
  function Ge(t) {
    return Ee(document.cookie, t);
  }
  function Ze(t) {
    return (
      Fe ||
        (Fe = (function (t) {
          var e = new Map();
          for (Ce.lastIndex = 0; ; ) {
            var n = Ce.exec(t);
            if (!n) break;
            e.set(n[1], n[2]);
          }
          return e;
        })(document.cookie)),
      Fe.get(t)
    );
  }
  function Ke(t, e) {
    je(t, "", 0, e);
  }
  var We,
    Xe = "datadog-synthetics-public-id",
    Ye = "datadog-synthetics-result-id",
    Je = "datadog-synthetics-injects-rum";
  function $e() {
    return Boolean(window._DATADOG_SYNTHETICS_INJECTS_RUM || Ze(Je));
  }
  function Qe() {
    return null != We
      ? We
      : (We = (function (t) {
          var e;
          void 0 === t && (t = window);
          var n = t.navigator.userAgent;
          if (t.chrome || /HeadlessChrome/.test(n)) return 1;
          if (
            0 ===
              (null === (e = t.navigator.vendor) || void 0 === e
                ? void 0
                : e.indexOf("Apple")) ||
            (/safari/i.test(n) && !/chrome|android/i.test(n))
          )
            return 2;
          if (t.document.documentMode) return 0;
          return 3;
        })());
  }
  var tn = "_dd_s",
    en = 4 * Kt,
    nn = 15 * Zt,
    rn = /^([a-zA-Z]+)=([a-z0-9-]+)$/,
    on = "&",
    an = "1";
  function sn() {
    return { isExpired: an };
  }
  function un(t) {
    return V(t);
  }
  function cn(t) {
    return !un(t);
  }
  function ln(t) {
    return (
      void 0 !== t.isExpired ||
      !(
        (void 0 === (e = t).created || $t() - Number(e.created) < en) &&
        (void 0 === e.expire || $t() < Number(e.expire))
      )
    );
    var e;
  }
  function dn(t) {
    t.expire = String($t() + nn);
  }
  function fn(t) {
    return b(t)
      .map(function (t) {
        var e = t[0],
          n = t[1];
        return "".concat(e, "=").concat(n);
      })
      .join(on);
  }
  function pn(t) {
    var e = {};
    return (
      (function (t) {
        return !!t && (-1 !== t.indexOf(on) || rn.test(t));
      })(t) &&
        t.split(on).forEach(function (t) {
          var n = rn.exec(t);
          if (null !== n) {
            var r = n[1],
              i = n[2];
            e[r] = i;
          }
        }),
      e
    );
  }
  var vn = "_dd",
    hn = "_dd_r",
    mn = "_dd_l",
    gn = "rum",
    _n = "logs";
  function yn(t) {
    var e = (function (t) {
      var e = {};
      (e.secure =
        !!t.useSecureSessionCookie ||
        !!t.usePartitionedCrossSiteSessionCookie ||
        !!t.useCrossSiteSessionCookie),
        (e.crossSite =
          !!t.usePartitionedCrossSiteSessionCookie ||
          !!t.useCrossSiteSessionCookie),
        (e.partitioned = !!t.usePartitionedCrossSiteSessionCookie),
        t.trackSessionAcrossSubdomains &&
          (e.domain = (function () {
            if (void 0 === Be) {
              for (
                var t = "dd_site_test_".concat(xe()),
                  e = window.location.hostname.split("."),
                  n = e.pop();
                e.length && !Ge(t);

              )
                (n = "".concat(e.pop(), ".").concat(n)),
                  je(t, "test", Gt, { domain: n });
              Ke(t, { domain: n }), (Be = n);
            }
            return Be;
          })());
      return e;
    })(t);
    return (function (t) {
      if (void 0 === document.cookie || null === document.cookie) return !1;
      try {
        var e = "dd_cookie_test_".concat(xe()),
          n = "test";
        je(e, n, Zt, t);
        var r = Ge(e) === n;
        return Ke(e, t), r;
      } catch (t) {
        return i.error(t), !1;
      }
    })(e)
      ? { type: "Cookie", cookieOptions: e }
      : void 0;
  }
  function bn(t) {
    var e,
      n = {
        isLockEnabled: 1 === Qe(),
        persistSession:
          ((e = t),
          function (t) {
            je(tn, fn(t), nn, e);
          }),
        retrieveSession: wn,
        expireSession: function () {
          return (function (t) {
            je(tn, fn(sn()), en, t);
          })(t);
        },
      };
    return (
      (function (t) {
        if (!Ze(tn)) {
          var e = Ze(vn),
            n = Ze(hn),
            r = Ze(mn),
            i = {};
          e && (i.id = e),
            r && /^[01]$/.test(r) && (i[_n] = r),
            n && /^[012]$/.test(n) && (i[gn] = n),
            cn(i) && (dn(i), t.persistSession(i));
        }
      })(n),
      n
    );
  }
  function wn() {
    return pn(Ge(tn));
  }
  var Sn = "_dd_test_";
  function kn(t) {
    localStorage.setItem(tn, fn(t));
  }
  function xn() {
    return pn(localStorage.getItem(tn));
  }
  function Cn() {
    kn(sn());
  }
  var En,
    Tn = 10,
    An = 100,
    Rn = [];
  function In(t, e, n) {
    var r;
    void 0 === n && (n = 0);
    var i = e.isLockEnabled,
      o = e.persistSession,
      a = e.expireSession,
      s = function (t) {
        return o(S({}, t, { lock: c }));
      },
      u = function () {
        var t = e.retrieveSession(),
          n = t.lock;
        return t.lock && delete t.lock, { session: t, lock: n };
      };
    if ((En || (En = t), t === En))
      if (i && n >= An) On(e);
      else {
        var c,
          l = u();
        if (i) {
          if (l.lock) return void Nn(t, e, n);
          if (((c = xe()), s(l.session), (l = u()).lock !== c))
            return void Nn(t, e, n);
        }
        var d = t.process(l.session);
        if (i && (l = u()).lock !== c) Nn(t, e, n);
        else {
          if (
            (d && (ln(d) ? a() : (dn(d), i ? s(d) : o(d))), i && (!d || !ln(d)))
          ) {
            if ((l = u()).lock !== c) return void Nn(t, e, n);
            o(l.session), (d = l.session);
          }
          null === (r = t.after) || void 0 === r || r.call(t, d || l.session),
            On(e);
        }
      }
    else Rn.push(t);
  }
  function Nn(t, e, n) {
    R(function () {
      In(t, e, n + 1);
    }, Tn);
  }
  function On(t) {
    En = void 0;
    var e = Rn.shift();
    e && In(e, t);
  }
  var Mn = Gt;
  function Ln(t) {
    var e = yn(t);
    return (
      !e &&
        t.allowFallbackToLocalStorage &&
        (e = (function () {
          try {
            var t = xe(),
              e = "".concat(Sn).concat(t);
            localStorage.setItem(e, t);
            var n = localStorage.getItem(e);
            return (
              localStorage.removeItem(e),
              t === n ? { type: "LocalStorage" } : void 0
            );
          } catch (t) {
            return;
          }
        })()),
      e
    );
  }
  function Dn(t, e, n) {
    var r,
      i = new et(),
      o = new et(),
      a = new et(),
      s =
        "Cookie" === t.type
          ? bn(t.cookieOptions)
          : {
              isLockEnabled: !1,
              persistSession: kn,
              retrieveSession: xn,
              expireSession: Cn,
            },
      u = s.expireSession,
      c = N(function () {
        In(
          {
            process: function (t) {
              return ln(t) ? sn() : void 0;
            },
            after: p,
          },
          s
        );
      }, Mn);
    v();
    var l = M(function () {
        In(
          {
            process: function (t) {
              if (!un(t)) {
                var r = p(t);
                return (
                  (function (t) {
                    if (un(t)) return !1;
                    var r = n(t[e]),
                      i = r.trackingType,
                      o = r.isTracked;
                    (t[e] = i),
                      delete t.isExpired,
                      o && !t.id && ((t.id = xe()), (t.created = String($t())));
                  })(r),
                  r
                );
              }
            },
            after: function (t) {
              cn(t) &&
                !h() &&
                (function (t) {
                  (r = t), i.notify();
                })(t),
                (r = t);
            },
          },
          s
        );
      }, Mn),
      d = l.throttled,
      f = l.cancel;
    function p(t) {
      return (
        ln(t) && (t = sn()),
        h() &&
          (!(function (t) {
            return r.id !== t.id || r[e] !== t[e];
          })(t)
            ? (a.notify({ previousState: r, newState: t }), (r = t))
            : ((r = sn()), o.notify())),
        t
      );
    }
    function v() {
      In(
        {
          process: function (t) {
            if (un(t)) return sn();
          },
          after: function (t) {
            r = t;
          },
        },
        s
      );
    }
    function h() {
      return void 0 !== r[e];
    }
    return {
      expandOrRenewSession: d,
      expandSession: function () {
        In(
          {
            process: function (t) {
              return h() ? p(t) : void 0;
            },
          },
          s
        );
      },
      getSession: function () {
        return r;
      },
      renewObservable: i,
      expireObservable: o,
      sessionStateUpdateObservable: a,
      restartSession: v,
      expire: function () {
        f(), u(), p(sn());
      },
      stop: function () {
        O(c);
      },
      updateSessionState: function (t) {
        In(
          {
            process: function (e) {
              return S({}, e, t);
            },
            after: p,
          },
          s
        );
      },
    };
  }
  function Pn(t, e, n) {
    var r = (function (t, e) {
      var n = "/api/v2/".concat(e),
        r = t.proxy;
      if ("string" == typeof r) {
        var i = Pe(r);
        return function (t) {
          return ""
            .concat(i, "?ddforward=")
            .concat(encodeURIComponent("".concat(n, "?").concat(t)));
        };
      }
      if ("function" == typeof r)
        return function (t) {
          return r({ path: n, parameters: t });
        };
      var o = (function (t, e) {
        var n = e.site,
          r = void 0 === n ? zt : n,
          i = e.internalAnalyticsSubdomain;
        if ("logs" === t && e.usePciIntake && r === zt) return Ft;
        if (i && r === zt) return "".concat(i, ".").concat(zt);
        if (r === Ut) return "http-intake.logs.".concat(r);
        var o = r.split("."),
          a = o.pop();
        return "browser-intake-".concat(o.join("-"), ".").concat(a);
      })(e, t);
      return function (t) {
        return "https://".concat(o).concat(n, "?").concat(t);
      };
    })(t, e);
    return {
      build: function (i, o) {
        var a = (function (t, e, n, r, i) {
          var o = t.clientToken,
            a = t.internalAnalyticsSubdomain,
            s = i.retry,
            u = i.encoding,
            c = ["sdk_version:".concat("5.28.0"), "api:".concat(r)].concat(n);
          s &&
            c.push(
              "retry_count:".concat(s.count),
              "retry_after:".concat(s.lastFailureStatus)
            );
          var l = [
            "ddsource=browser",
            "ddtags=".concat(encodeURIComponent(c.join(","))),
            "dd-api-key=".concat(o),
            "dd-evp-origin-version=".concat(encodeURIComponent("5.28.0")),
            "dd-evp-origin=browser",
            "dd-request-id=".concat(xe()),
          ];
          u && l.push("dd-evp-encoding=".concat(u));
          "rum" === e && l.push("batch_time=".concat(Qt()));
          a && l.reverse();
          return l.join("&");
        })(t, e, n, i, o);
        return r(a);
      },
      urlPrefix: r(""),
      trackType: e,
    };
  }
  var Un = 200;
  function zn(t, e) {
    var n = Un - t.length - 1;
    (e.length > n ||
      (function (t) {
        if (
          !(function () {
            try {
              return new RegExp("[\\p{Ll}]", "u"), !0;
            } catch (t) {
              return !1;
            }
          })()
        )
          return !1;
        return new RegExp("[^\\p{Ll}\\p{Lo}0-9_:./-]", "u").test(t);
      })(e)) &&
      i.warn(
        ""
          .concat(
            t,
            " value doesn't meet tag requirements and will be sanitized. "
          )
          .concat(s, " ")
          .concat(o, "/getting_started/tagging/#defining-tags")
      );
    var r = e.replace(/,/g, "_");
    return "".concat(t, ":").concat(r);
  }
  function Vn(t) {
    var e = t.site || zt,
      n = (function (t) {
        var e = t.env,
          n = t.service,
          r = t.version,
          i = t.datacenter,
          o = [];
        return (
          e && o.push(zn("env", e)),
          n && o.push(zn("service", n)),
          r && o.push(zn("version", r)),
          i && o.push(zn("datacenter", i)),
          o
        );
      })(t),
      r = (function (t, e) {
        return {
          logsEndpointBuilder: Pn(t, "logs", e),
          rumEndpointBuilder: Pn(t, "rum", e),
          sessionReplayEndpointBuilder: Pn(t, "replay", e),
        };
      })(t, n),
      i = (function (t, e) {
        var n = y(t).map(function (t) {
          return t.urlPrefix;
        });
        e === zt && n.push("https://".concat(Ft, "/"));
        return n;
      })(r, e),
      o = (function (t, e, n) {
        if (!t.replica) return;
        var r = S({}, t, { site: zt, clientToken: t.replica.clientToken }),
          i = {
            logsEndpointBuilder: Pn(r, "logs", n),
            rumEndpointBuilder: Pn(r, "rum", n),
          };
        return (
          e.push.apply(
            e,
            y(i).map(function (t) {
              return t.urlPrefix;
            })
          ),
          S({ applicationId: t.replica.applicationId }, i)
        );
      })(t, i, n);
    return S(
      {
        isIntakeUrl: function (t) {
          return i.some(function (e) {
            return 0 === t.indexOf(e);
          });
        },
        replica: o,
        site: e,
      },
      r
    );
  }
  var Fn = { ALLOW: "allow", MASK: "mask", MASK_USER_INPUT: "mask-user-input" },
    Bn = { ALL: "all", SAMPLED: "sampled" };
  function Hn(t, e) {
    return (
      null == t ||
      "string" == typeof t ||
      (i.error("".concat(e, " must be defined as a string")), !1)
    );
  }
  function qn(t, e) {
    return (
      !!(void 0 === t || ((n = t), qt(n) && n >= 0 && n <= 100)) ||
      (i.error(
        "".concat(e, " Sample Rate should be a number between 0 and 100")
      ),
      !1)
    );
    var n;
  }
  function jn(t) {
    var e, n, r, a, c;
    if (t && t.clientToken) {
      if (
        (!(l = t.site) ||
          "string" != typeof l ||
          /(datadog|ddog|datad0g|dd0g)/.test(l) ||
          (i.error(
            "Site should be a valid Datadog site. "
              .concat(s, " ")
              .concat(o, "/getting_started/site/.")
          ),
          0)) &&
        qn(t.sessionSampleRate, "Session") &&
        qn(t.telemetrySampleRate, "Telemetry") &&
        qn(t.telemetryConfigurationSampleRate, "Telemetry Configuration") &&
        qn(t.telemetryUsageSampleRate, "Telemetry Usage") &&
        Hn(t.version, "Version") &&
        Hn(t.env, "Env") &&
        Hn(t.service, "Service")
      ) {
        var l;
        if (void 0 === t.trackingConsent || z(it, t.trackingConsent))
          return S(
            {
              beforeSend:
                t.beforeSend && u(t.beforeSend, "beforeSend threw an error:"),
              sessionStoreStrategyType: Ln(t),
              sessionSampleRate:
                null !== (e = t.sessionSampleRate) && void 0 !== e ? e : 100,
              telemetrySampleRate:
                null !== (n = t.telemetrySampleRate) && void 0 !== n ? n : 20,
              telemetryConfigurationSampleRate:
                null !== (r = t.telemetryConfigurationSampleRate) &&
                void 0 !== r
                  ? r
                  : 5,
              telemetryUsageSampleRate:
                null !== (a = t.telemetryUsageSampleRate) && void 0 !== a
                  ? a
                  : 5,
              service: t.service || void 0,
              silentMultipleInit: !!t.silentMultipleInit,
              allowUntrustedEvents: !!t.allowUntrustedEvents,
              trackingConsent:
                null !== (c = t.trackingConsent) && void 0 !== c
                  ? c
                  : it.GRANTED,
              storeContextsAcrossPages: !!t.storeContextsAcrossPages,
              batchBytesLimit: 16 * x,
              eventRateLimiterThreshold: 3e3,
              maxTelemetryEventsPerPage: 15,
              flushTimeout: 30 * Gt,
              batchMessagesLimit: 50,
              messageBytesLimit: 256 * x,
            },
            Vn(t)
          );
        i.error('Tracking Consent should be either "granted" or "not-granted"');
      }
    } else
      i.error("Client Token is not configured, we will not send any data.");
  }
  function Gn(t) {
    var e = G(t);
    return "string" === e || "function" === e || t instanceof RegExp;
  }
  function Zn(t, e, n) {
    return (
      void 0 === n && (n = !1),
      t.some(function (t) {
        try {
          if ("function" == typeof t) return t(e);
          if (t instanceof RegExp) return t.test(e);
          if ("string" == typeof t) return n ? w(e, t) : t === e;
        } catch (t) {
          i.error(t);
        }
        return !1;
      })
    );
  }
  function Kn(t) {
    0 !== t.status ||
      t.isAborted ||
      ((t.traceId = void 0), (t.spanId = void 0), (t.traceSampled = void 0));
  }
  function Wn(t, e, n, r) {
    if (void 0 !== Xn() && n.findTrackedSession()) {
      var i,
        o,
        a,
        s,
        u,
        c = _(t.allowedTracingUrls, function (t) {
          return Zn([t.match], e.url, !0);
        });
      if (c)
        if (
          ((e.traceSampled = !qt(t.traceSampleRate) || Bt(t.traceSampleRate)),
          e.traceSampled || t.traceContextInjection === Bn.ALL)
        )
          (e.traceId = Yn()),
            (e.spanId = Yn()),
            r(
              ((i = e.traceId),
              (o = e.spanId),
              (a = e.traceSampled),
              (s = c.propagatorTypes),
              (u = {}),
              s.forEach(function (t) {
                switch (t) {
                  case "datadog":
                    S(u, {
                      "x-datadog-origin": "rum",
                      "x-datadog-parent-id": o.toDecimalString(),
                      "x-datadog-sampling-priority": a ? "1" : "0",
                      "x-datadog-trace-id": i.toDecimalString(),
                    });
                    break;
                  case "tracecontext":
                    S(u, {
                      traceparent: "00-0000000000000000"
                        .concat(i.toPaddedHexadecimalString(), "-")
                        .concat(o.toPaddedHexadecimalString(), "-0")
                        .concat(a ? "1" : "0"),
                    });
                    break;
                  case "b3":
                    S(u, {
                      b3: ""
                        .concat(i.toPaddedHexadecimalString(), "-")
                        .concat(o.toPaddedHexadecimalString(), "-")
                        .concat(a ? "1" : "0"),
                    });
                    break;
                  case "b3multi":
                    S(u, {
                      "X-B3-TraceId": i.toPaddedHexadecimalString(),
                      "X-B3-SpanId": o.toPaddedHexadecimalString(),
                      "X-B3-Sampled": a ? "1" : "0",
                    });
                }
              }),
              u)
            );
    }
  }
  function Xn() {
    return window.crypto || window.msCrypto;
  }
  function Yn() {
    var t = new Uint8Array(8);
    function e(e) {
      return 16777216 * t[e] + (t[e + 1] << 16) + (t[e + 2] << 8) + t[e + 3];
    }
    function n(t) {
      var n = e(0),
        r = e(4),
        i = "";
      do {
        var o = (n % t) * 4294967296 + r;
        (n = Math.floor(n / t)),
          (r = Math.floor(o / t)),
          (i = (o % t).toString(t) + i);
      } while (n || r);
      return i;
    }
    return (
      Xn().getRandomValues(t),
      (t[0] = 127 & t[0]),
      {
        toDecimalString: function () {
          return n(10);
        },
        toPaddedHexadecimalString: function () {
          var t = n(16);
          return Array(17 - t.length).join("0") + t;
        },
      }
    );
  }
  var Jn = ["tracecontext", "datadog"];
  function $n(t) {
    var e, n;
    if (t.applicationId) {
      if (
        qn(t.sessionReplaySampleRate, "Session Replay") &&
        qn(t.traceSampleRate, "Trace")
      )
        if (
          void 0 === t.excludedActivityUrls ||
          Array.isArray(t.excludedActivityUrls)
        ) {
          var r = (function (t) {
            if (void 0 === t.allowedTracingUrls) return [];
            if (!Array.isArray(t.allowedTracingUrls))
              return void i.error("Allowed Tracing URLs should be an array");
            if (0 !== t.allowedTracingUrls.length && void 0 === t.service)
              return void i.error(
                "Service needs to be configured when tracing is enabled"
              );
            var e = [];
            return (
              t.allowedTracingUrls.forEach(function (t) {
                var n;
                Gn(t)
                  ? e.push({ match: t, propagatorTypes: Jn })
                  : "object" === G((n = t)) &&
                    Gn(n.match) &&
                    Array.isArray(n.propagatorTypes)
                  ? e.push(t)
                  : i.warn(
                      "Allowed Tracing Urls parameters should be a string, RegExp, function, or an object. Ignoring parameter",
                      t
                    );
              }),
              e
            );
          })(t);
          if (r) {
            var o = jn(t);
            if (o)
              return S(
                {
                  applicationId: t.applicationId,
                  version: t.version || void 0,
                  actionNameAttribute: t.actionNameAttribute,
                  sessionReplaySampleRate:
                    null !== (e = t.sessionReplaySampleRate) && void 0 !== e
                      ? e
                      : 0,
                  startSessionReplayRecordingManually:
                    !!t.startSessionReplayRecordingManually,
                  traceSampleRate: t.traceSampleRate,
                  allowedTracingUrls: r,
                  excludedActivityUrls:
                    null !== (n = t.excludedActivityUrls) && void 0 !== n
                      ? n
                      : [],
                  workerUrl: t.workerUrl,
                  compressIntakeRequests: !!t.compressIntakeRequests,
                  trackUserInteractions: !!t.trackUserInteractions,
                  trackViewsManually: !!t.trackViewsManually,
                  trackResources: !!t.trackResources,
                  trackLongTasks: !!t.trackLongTasks,
                  subdomain: t.subdomain,
                  defaultPrivacyLevel: z(Fn, t.defaultPrivacyLevel)
                    ? t.defaultPrivacyLevel
                    : Fn.MASK,
                  enablePrivacyForActionName: !!t.enablePrivacyForActionName,
                  customerDataTelemetrySampleRate: 1,
                  traceContextInjection: z(Bn, t.traceContextInjection)
                    ? t.traceContextInjection
                    : Bn.ALL,
                  plugins: t.betaPlugins || [],
                },
                o
              );
          }
        } else i.error("Excluded Activity Urls should be an array");
    } else
      i.error(
        "Application ID is not configured, no RUM data will be collected."
      );
  }
  function Qn(t) {
    var e = new Set();
    return (
      Array.isArray(t.allowedTracingUrls) &&
        t.allowedTracingUrls.length > 0 &&
        t.allowedTracingUrls.forEach(function (t) {
          Gn(t)
            ? Jn.forEach(function (t) {
                return e.add(t);
              })
            : "object" === G(t) &&
              Array.isArray(t.propagatorTypes) &&
              t.propagatorTypes.forEach(function (t) {
                return e.add(t);
              });
        }),
      g(e)
    );
  }
  var tr = "https://d3uc069fcn7uxw.cloudfront.net/configuration";
  function er(t, e) {
    !(function (t, e) {
      var n = new XMLHttpRequest();
      ot(t, n, "load", function () {
        200 === n.status ? e(JSON.parse(n.responseText)) : nr();
      }),
        ot(t, n, "error", function () {
          nr();
        }),
        n.open(
          "GET",
          ""
            .concat(tr, "/")
            .concat(encodeURIComponent(t.remoteConfigurationId), ".json")
        ),
        n.send();
    })(t, function (n) {
      e(
        (function (t, e) {
          return S({}, t, e);
        })(t, n)
      );
    });
  }
  function nr() {
    i.error("Error fetching the remote configuration.");
  }
  function rr(t, e, n, r, o) {
    var a,
      s,
      u,
      c,
      l = t.ignoreInitIfSyntheticsWillInjectRum,
      d = t.startDeflateWorker,
      f = de(),
      p = n.observable.subscribe(v);
    function v() {
      if (u && c && n.isGranted()) {
        var t;
        if ((p.unsubscribe(), c.trackViewsManually)) {
          if (!a) return;
          f.remove(a.callback), (t = a.options);
        }
        var e = o(c, s, t);
        f.drain(e);
      }
    }
    function h(t) {
      var e = Me();
      if (
        (e &&
          (t = (function (t) {
            var e, n;
            return S({}, t, {
              applicationId: "00000000-aaaa-0000-aaaa-000000000000",
              clientToken: "empty",
              sessionSampleRate: 100,
              defaultPrivacyLevel:
                null !== (e = t.defaultPrivacyLevel) && void 0 !== e
                  ? e
                  : null === (n = Ne()) || void 0 === n
                  ? void 0
                  : n.getPrivacyLevel(),
            });
          })(t)),
        (u = t),
        (function (t) {
          me({ type: fe.configuration, configuration: t });
        })(
          (function (t) {
            var e,
              n,
              r = {
                session_sample_rate: (n = t).sessionSampleRate,
                telemetry_sample_rate: n.telemetrySampleRate,
                telemetry_configuration_sample_rate:
                  n.telemetryConfigurationSampleRate,
                telemetry_usage_sample_rate: n.telemetryUsageSampleRate,
                use_before_send: !!n.beforeSend,
                use_cross_site_session_cookie: n.useCrossSiteSessionCookie,
                use_partitioned_cross_site_session_cookie:
                  n.usePartitionedCrossSiteSessionCookie,
                use_secure_session_cookie: n.useSecureSessionCookie,
                use_proxy: !!n.proxy,
                silent_multiple_init: n.silentMultipleInit,
                track_session_across_subdomains: n.trackSessionAcrossSubdomains,
                allow_fallback_to_local_storage:
                  !!n.allowFallbackToLocalStorage,
                store_contexts_across_pages: !!n.storeContextsAcrossPages,
                allow_untrusted_events: !!n.allowUntrustedEvents,
                tracking_consent: n.trackingConsent,
              };
            return S(
              {
                session_replay_sample_rate: t.sessionReplaySampleRate,
                start_session_replay_recording_manually:
                  t.startSessionReplayRecordingManually,
                trace_sample_rate: t.traceSampleRate,
                trace_context_injection: t.traceContextInjection,
                action_name_attribute: t.actionNameAttribute,
                use_allowed_tracing_urls:
                  Array.isArray(t.allowedTracingUrls) &&
                  t.allowedTracingUrls.length > 0,
                selected_tracing_propagators: Qn(t),
                default_privacy_level: t.defaultPrivacyLevel,
                enable_privacy_for_action_name: t.enablePrivacyForActionName,
                use_excluded_activity_urls:
                  Array.isArray(t.excludedActivityUrls) &&
                  t.excludedActivityUrls.length > 0,
                use_worker_url: !!t.workerUrl,
                compress_intake_requests: t.compressIntakeRequests,
                track_views_manually: t.trackViewsManually,
                track_user_interactions: t.trackUserInteractions,
                track_resources: t.trackResources,
                track_long_task: t.trackLongTasks,
                plugins:
                  null === (e = t.betaPlugins) || void 0 === e
                    ? void 0
                    : e.map(function (t) {
                        var e;
                        return S(
                          { name: t.name },
                          null === (e = t.getConfigurationTelemetry) ||
                            void 0 === e
                            ? void 0
                            : e.call(t)
                        );
                      }),
              },
              r
            );
          })(t)
        ),
        c)
      )
        ke("DD_RUM", t);
      else {
        var r = $n(t);
        r &&
          (e || r.sessionStoreStrategyType
            ? (r.compressIntakeRequests &&
                !e &&
                d &&
                !(s = d(r, "Datadog RUM", L))) ||
              ((c = r), qe().subscribe(L), n.tryToInit(r.trackingConsent), v())
            : i.warn(
                "No storage available for session. We will not send any data."
              ));
      }
    }
    var m = function (t) {
      f.add(function (e) {
        return e.addDurationVital(t);
      });
    };
    return {
      init: function (t, e) {
        t
          ? (Mt(t.enableExperimentalFeatures),
            (u = t),
            (l && $e()) ||
              (!(function (t, e, n) {
                if (t)
                  for (var r = 0, i = t; r < i.length; r++) {
                    var o = i[r][e];
                    o && o(n);
                  }
              })(t.betaPlugins, "onInit", {
                initConfiguration: t,
                publicApi: e,
              }),
              t.remoteConfigurationId && Lt(Tt.REMOTE_CONFIGURATION)
                ? er(t, h)
                : h(t)))
          : i.error("Missing configuration");
      },
      get initConfiguration() {
        return u;
      },
      getInternalContext: L,
      stopSession: L,
      addTiming: function (t, e) {
        void 0 === e && (e = Qt()),
          f.add(function (n) {
            return n.addTiming(t, e);
          });
      },
      startView: function (t, e) {
        void 0 === e && (e = ee());
        var n = function (n) {
          n.startView(t, e);
        };
        f.add(n), a || ((a = { options: t, callback: n }), v());
      },
      updateViewName: function (t) {
        f.add(function (e) {
          return e.updateViewName(t);
        });
      },
      setViewContext: function (t) {
        f.add(function (e) {
          return e.setViewContext(t);
        });
      },
      setViewContextProperty: function (t, e) {
        f.add(function (n) {
          return n.setViewContextProperty(t, e);
        });
      },
      addAction: function (t, n) {
        void 0 === n && (n = e()),
          f.add(function (e) {
            return e.addAction(t, n);
          });
      },
      addError: function (t, n) {
        void 0 === n && (n = e()),
          f.add(function (e) {
            return e.addError(t, n);
          });
      },
      addFeatureFlagEvaluation: function (t, e) {
        f.add(function (n) {
          return n.addFeatureFlagEvaluation(t, e);
        });
      },
      startDurationVital: function (t, e) {
        return Re(r, t, e);
      },
      stopDurationVital: function (t, e) {
        Ie(m, r, t, e);
      },
      addDurationVital: m,
    };
  }
  var ir = {
    HIDDEN: "visibility_hidden",
    UNLOADING: "before_unload",
    PAGEHIDE: "page_hide",
    FROZEN: "page_frozen",
  };
  function or(t) {
    return m(y(ir), t);
  }
  function ar() {
    var t,
      e = window;
    if (
      e.Zone &&
      ((t = A(e, "MutationObserver")),
      e.MutationObserver && t === e.MutationObserver)
    ) {
      var n = A(new e.MutationObserver(L), "originalInstance");
      t = n && n.constructor;
    }
    return t || (t = e.MutationObserver), t;
  }
  var sr = {
    AGENT: "agent",
    CONSOLE: "console",
    CUSTOM: "custom",
    LOGGER: "logger",
    NETWORK: "network",
    SOURCE: "source",
    REPORT: "report",
  };
  function ur(t, e, n) {
    var r = 0,
      i = !1;
    return {
      isLimitReached: function () {
        if (
          (0 === r &&
            R(function () {
              r = 0;
            }, Zt),
          (r += 1) <= e || i)
        )
          return (i = !1), !1;
        if (r === e + 1) {
          i = !0;
          try {
            n({
              message: "Reached max number of "
                .concat(t, "s by minute: ")
                .concat(e),
              source: sr.AGENT,
              startClocks: ee(),
            });
          } finally {
            i = !1;
          }
        }
        return !0;
      },
    };
  }
  function cr() {
    var t,
      e =
        "string" == typeof (t = window._DATADOG_SYNTHETICS_PUBLIC_ID || Ze(Xe))
          ? t
          : void 0,
      n = (function () {
        var t = window._DATADOG_SYNTHETICS_RESULT_ID || Ze(Ye);
        return "string" == typeof t ? t : void 0;
      })();
    if (e && n) return { test_id: e, result_id: n, injected: $e() };
  }
  function lr(t, e, n) {
    var r = K(t),
      i = n(r);
    return (
      b(e).forEach(function (e) {
        var n = e[0],
          i = e[1],
          o = (function (t, e) {
            for (var n = t, r = 0, i = e.split("."); r < i.length; r++) {
              var o = i[r];
              if (!pr(n, o)) return;
              n = n[o];
            }
            return n;
          })(r, n),
          a = G(o);
        a === i
          ? dr(t, n, $(o))
          : "object" !== i ||
            ("undefined" !== a && "null" !== a) ||
            dr(t, n, {});
      }),
      i
    );
  }
  function dr(t, e, n) {
    for (var r = t, i = e.split("."), o = 0; o < i.length; o += 1) {
      var a = i[o];
      if (!fr(r)) return;
      o !== i.length - 1 ? (r = r[a]) : (r[a] = n);
    }
  }
  function fr(t) {
    return "object" === G(t);
  }
  function pr(t, e) {
    return fr(t) && Object.prototype.hasOwnProperty.call(t, e);
  }
  var vr,
    hr = {
      "view.name": "string",
      "view.url": "string",
      "view.referrer": "string",
    },
    mr = { context: "object" },
    gr = { service: "string", version: "string" };
  function _r(t, e, n, r, o, a, s, u, c, l) {
    var d, f;
    ((d = {}).view = S({}, mr, hr)),
      (d.error = S(
        {
          "error.message": "string",
          "error.stack": "string",
          "error.resource.url": "string",
          "error.fingerprint": "string",
        },
        mr,
        hr,
        gr
      )),
      (d.resource = S(
        { "resource.url": "string" },
        Lt(Tt.WRITABLE_RESOURCE_GRAPHQL)
          ? { "resource.graphql": "object" }
          : {},
        mr,
        hr,
        gr
      )),
      (d.action = S({ "action.target.name": "string" }, mr, hr, gr)),
      (d.long_task = S({}, mr, hr)),
      (d.vital = S({}, mr, hr)),
      (vr = d);
    var p =
        (((f = {}).error = ur("error", t.eventRateLimiterThreshold, l)),
        (f.action = ur("action", t.eventRateLimiterThreshold, l)),
        (f.vital = ur("vital", t.eventRateLimiterThreshold, l)),
        f),
      v = cr();
    e.subscribe(11, function (l) {
      var d,
        f = l.startTime,
        h = l.rawRumEvent,
        m = l.domainContext,
        g = l.savedCommonContext,
        _ = l.customerContext,
        y = r.findView(f),
        b = o.findUrl(f),
        w = n.findTrackedSession(f);
      if (w && y && b) {
        var S = g || c(),
          k = a.findActionId(f),
          x = W(
            {
              _dd: {
                format_version: 2,
                drift: Math.round($t() - ie(ae(), performance.now())),
                configuration: {
                  session_sample_rate: Ht(t.sessionSampleRate, 3),
                  session_replay_sample_rate: Ht(t.sessionReplaySampleRate, 3),
                },
                browser_sdk_version: Me() ? "5.28.0" : void 0,
              },
              application: { id: t.applicationId },
              date: Qt(),
              service: y.service || t.service,
              version: y.version || t.version,
              source: "browser",
              session: {
                id: w.id,
                type: v ? "synthetics" : u.get() ? "ci_test" : "user",
              },
              view: {
                id: y.id,
                name: y.name,
                url: b.url,
                referrer: b.referrer,
              },
              action:
                ((d = h),
                -1 !== ["error", "resource", "long_task"].indexOf(d.type) && k
                  ? { id: k }
                  : void 0),
              synthetics: v,
              ci_test: u.get(),
              display: s.get(),
              connectivity: ue(),
            },
            h
          );
        (x.context = W(S.context, y.context, _)),
          "has_replay" in x.session || (x.session.has_replay = S.hasReplay),
          "view" === x.type &&
            (x.session.sampled_for_replay = 1 === w.sessionReplay),
          V(S.user) || (x.usr = S.user),
          (function (t, e, n, r) {
            var o;
            if (e) {
              var a = lr(t, vr[t.type], function (t) {
                return e(t, n);
              });
              if (!1 === a && "view" !== t.type) return !1;
              !1 === a && i.warn("Can't dismiss view events using beforeSend!");
            }
            var s =
              null === (o = r[t.type]) || void 0 === o
                ? void 0
                : o.isLimitReached();
            return !s;
          })(x, t.beforeSend, m, p) &&
            (V(x.context) && delete x.context, e.notify(12, x));
      }
    });
  }
  var yr = (function () {
      function t() {
        this.callbacks = {};
      }
      return (
        (t.prototype.notify = function (t, e) {
          var n = this.callbacks[t];
          n &&
            n.forEach(function (t) {
              return t(e);
            });
        }),
        (t.prototype.subscribe = function (t, e) {
          var n = this;
          return (
            this.callbacks[t] || (this.callbacks[t] = []),
            this.callbacks[t].push(e),
            {
              unsubscribe: function () {
                n.callbacks[t] = n.callbacks[t].filter(function (t) {
                  return e !== t;
                });
              },
            }
          );
        }),
        t
      );
    })(),
    br = 1 / 0,
    wr = Zt;
  function Sr(t) {
    var e = t.expireDelay,
      n = t.maxEntries,
      r = [],
      i = N(function () {
        return (function () {
          var t = te() - e;
          for (; r.length > 0 && r[r.length - 1].endTime < t; ) r.pop();
        })();
      }, wr);
    return {
      add: function (t, e) {
        var i = {
          value: t,
          startTime: e,
          endTime: br,
          remove: function () {
            ce(r, i);
          },
          close: function (t) {
            i.endTime = t;
          },
        };
        return n && r.length >= n && r.pop(), r.unshift(i), i;
      },
      find: function (t, e) {
        void 0 === t && (t = br), void 0 === e && (e = { returnInactive: !1 });
        for (var n = 0, i = r; n < i.length; n++) {
          var o = i[n];
          if (o.startTime <= t) {
            if (e.returnInactive || t <= o.endTime) return o.value;
            break;
          }
        }
      },
      closeActive: function (t) {
        var e = r[0];
        e && e.endTime === br && e.close(t);
      },
      findAll: function (t, e) {
        void 0 === t && (t = br), void 0 === e && (e = 0);
        var n = ie(t, e);
        return r
          .filter(function (e) {
            return e.startTime <= n && t <= e.endTime;
          })
          .map(function (t) {
            return t.value;
          });
      },
      reset: function () {
        r = [];
      },
      stop: function () {
        O(i);
      },
    };
  }
  var kr,
    xr = en;
  var Cr = new WeakMap();
  function Er(t) {
    return (
      kr ||
        (kr = (function (t) {
          return new et(function (e) {
            var n = Le(XMLHttpRequest.prototype, "open", Tr).stop,
              r = Le(
                XMLHttpRequest.prototype,
                "send",
                function (n) {
                  !(function (t, e, n) {
                    var r = t.target,
                      i = t.handlingStack,
                      o = Cr.get(r);
                    if (!o) return;
                    var a = o;
                    (a.state = "start"),
                      (a.startClocks = ee()),
                      (a.isAborted = !1),
                      (a.xhr = r),
                      (a.handlingStack = i);
                    var s = !1,
                      u = Le(r, "onreadystatechange", function () {
                        r.readyState === XMLHttpRequest.DONE && c();
                      }).stop,
                      c = function () {
                        if ((l(), u(), !s)) {
                          s = !0;
                          var t = o;
                          (t.state = "complete"),
                            (t.duration = re(a.startClocks.timeStamp, Qt())),
                            (t.status = r.status),
                            n.notify(U(t));
                        }
                      },
                      l = ot(e, r, "loadend", c).stop;
                    n.notify(a);
                  })(n, t, e);
                },
                { computeHandlingStack: !0 }
              ).stop,
              i = Le(XMLHttpRequest.prototype, "abort", Ar).stop;
            return function () {
              n(), r(), i();
            };
          });
        })(t)),
      kr
    );
  }
  function Tr(t) {
    var e = t.target,
      n = t.parameters,
      r = n[0],
      i = n[1];
    Cr.set(e, {
      state: "open",
      method: String(r).toUpperCase(),
      url: Pe(String(i)),
    });
  }
  function Ar(t) {
    var e = t.target,
      n = Cr.get(e);
    n && (n.isAborted = !0);
  }
  var Rr = "initial_document",
    Ir = [
      [
        "document",
        function (t) {
          return Rr === t;
        },
      ],
      [
        "xhr",
        function (t) {
          return "xmlhttprequest" === t;
        },
      ],
      [
        "fetch",
        function (t) {
          return "fetch" === t;
        },
      ],
      [
        "beacon",
        function (t) {
          return "beacon" === t;
        },
      ],
      [
        "css",
        function (t, e) {
          return /\.css$/i.test(e);
        },
      ],
      [
        "js",
        function (t, e) {
          return /\.js$/i.test(e);
        },
      ],
      [
        "image",
        function (t, e) {
          return (
            m(["image", "img", "icon"], t) ||
            null !== /\.(gif|jpg|jpeg|tiff|png|svg|ico)$/i.exec(e)
          );
        },
      ],
      [
        "font",
        function (t, e) {
          return null !== /\.(woff|eot|woff2|ttf)$/i.exec(e);
        },
      ],
      [
        "media",
        function (t, e) {
          return m(["audio", "video"], t) || null !== /\.(mp3|mp4)$/i.exec(e);
        },
      ],
    ];
  function Nr(t) {
    var e = t.name;
    if (
      !(function (t) {
        try {
          return !!Ue(t);
        } catch (t) {
          return !1;
        }
      })(e)
    )
      return _e('Failed to construct URL for "'.concat(t.name, '"')), "other";
    for (
      var n = (function (t) {
          var e = Ue(t).pathname;
          return "/" === e[0] ? e : "/".concat(e);
        })(e),
        r = 0,
        i = Ir;
      r < i.length;
      r++
    ) {
      var o = i[r],
        a = o[0];
      if ((0, o[1])(t.initiatorType, n)) return a;
    }
    return "other";
  }
  function Or() {
    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
    for (var n = 1; n < t.length; n += 1) if (t[n - 1] > t[n]) return !1;
    return !0;
  }
  function Mr(t) {
    return "xmlhttprequest" === t.initiatorType || "fetch" === t.initiatorType;
  }
  function Lr(t) {
    var e = t.duration,
      n = t.startTime,
      r = t.responseEnd;
    return Jt(0 === e && n < r ? re(n, r) : e);
  }
  function Dr(t) {
    if (Ur(t)) {
      var e = t.startTime,
        n = t.fetchStart,
        r = t.redirectStart,
        i = t.redirectEnd,
        o = t.domainLookupStart,
        a = t.domainLookupEnd,
        s = t.connectStart,
        u = t.secureConnectionStart,
        c = t.connectEnd,
        l = t.requestStart,
        d = t.responseStart,
        f = { download: zr(e, d, t.responseEnd), first_byte: zr(e, l, d) };
      return (
        n < c &&
          ((f.connect = zr(e, s, c)),
          s <= u && u <= c && (f.ssl = zr(e, u, c))),
        n < a && (f.dns = zr(e, o, a)),
        e < i && (f.redirect = zr(e, r, i)),
        f
      );
    }
  }
  function Pr(t) {
    return t.duration >= 0;
  }
  function Ur(t) {
    var e = Or(
        t.startTime,
        t.fetchStart,
        t.domainLookupStart,
        t.domainLookupEnd,
        t.connectStart,
        t.connectEnd,
        t.requestStart,
        t.responseStart,
        t.responseEnd
      ),
      n =
        !(function (t) {
          return t.redirectEnd > t.startTime;
        })(t) || Or(t.startTime, t.redirectStart, t.redirectEnd, t.fetchStart);
    return e && n;
  }
  function zr(t, e, n) {
    if (t <= e && e <= n)
      return { duration: Jt(re(e, n)), start: Jt(re(t, e)) };
  }
  function Vr(t) {
    if (t.startTime < t.responseStart) {
      var e = t.encodedBodySize,
        n = t.decodedBodySize;
      return {
        size: n,
        encoded_body_size: e,
        decoded_body_size: n,
        transfer_size: t.transferSize,
      };
    }
    return {
      size: void 0,
      encoded_body_size: void 0,
      decoded_body_size: void 0,
      transfer_size: void 0,
    };
  }
  function Fr(t, e) {
    return e && !t.isIntakeUrl(e);
  }
  var Br = /data:(.+)?(;base64)?,/g,
    Hr = 24e3;
  function qr(t) {
    return (
      !(t.length <= Hr) &&
      "data:" === t.substring(0, 5) &&
      ((t = t.substring(0, Hr)), !0)
    );
  }
  function jr(t) {
    return "".concat(t.match(Br)[0], "[...]");
  }
  var Gr,
    Zr,
    Kr = 1;
  function Wr(t, e, n) {
    var r = (function (t, e) {
      return {
        clearTracingIfNeeded: Kn,
        traceFetch: function (n) {
          return Wn(t, n, e, function (t) {
            var e;
            if (
              n.input instanceof Request &&
              !(null === (e = n.init) || void 0 === e ? void 0 : e.headers)
            )
              (n.input = new Request(n.input)),
                Object.keys(t).forEach(function (e) {
                  n.input.headers.append(e, t[e]);
                });
            else {
              n.init = U(n.init);
              var r = [];
              n.init.headers instanceof Headers
                ? n.init.headers.forEach(function (t, e) {
                    r.push([e, t]);
                  })
                : Array.isArray(n.init.headers)
                ? n.init.headers.forEach(function (t) {
                    r.push(t);
                  })
                : n.init.headers &&
                  Object.keys(n.init.headers).forEach(function (t) {
                    r.push([t, n.init.headers[t]]);
                  }),
                (n.init.headers = r.concat(b(t)));
            }
          });
        },
        traceXhr: function (n, r) {
          return Wn(t, n, e, function (t) {
            Object.keys(t).forEach(function (e) {
              r.setRequestHeader(e, t[e]);
            });
          });
        },
      };
    })(e, n);
    !(function (t, e, n) {
      var r = Er(e).subscribe(function (r) {
        var i = r;
        if (Fr(e, i.url))
          switch (i.state) {
            case "start":
              n.traceXhr(i, i.xhr),
                (i.requestIndex = Xr()),
                t.notify(6, { requestIndex: i.requestIndex, url: i.url });
              break;
            case "complete":
              n.clearTracingIfNeeded(i),
                t.notify(7, {
                  duration: i.duration,
                  method: i.method,
                  requestIndex: i.requestIndex,
                  spanId: i.spanId,
                  startClocks: i.startClocks,
                  status: i.status,
                  traceId: i.traceId,
                  traceSampled: i.traceSampled,
                  type: "xhr",
                  url: i.url,
                  xhr: i.xhr,
                  isAborted: i.isAborted,
                  handlingStack: i.handlingStack,
                });
          }
      });
    })(t, e, r),
      (function (t, e, n) {
        var r = qe().subscribe(function (r) {
          var i = r;
          if (Fr(e, i.url))
            switch (i.state) {
              case "start":
                n.traceFetch(i),
                  (i.requestIndex = Xr()),
                  t.notify(6, { requestIndex: i.requestIndex, url: i.url });
                break;
              case "resolve":
                !(function (t, e) {
                  var n =
                    t.response &&
                    (function (t) {
                      try {
                        return t.clone();
                      } catch (t) {
                        return;
                      }
                    })(t.response);
                  n && n.body
                    ? (function (t, e, n) {
                        var r = t.getReader(),
                          i = [],
                          o = 0;
                        function a() {
                          var t, a;
                          if ((r.cancel().catch(L), n.collectStreamBody)) {
                            var s;
                            if (1 === i.length) s = i[0];
                            else {
                              s = new Uint8Array(o);
                              var u = 0;
                              i.forEach(function (t) {
                                s.set(t, u), (u += t.length);
                              });
                            }
                            (t = s.slice(0, n.bytesLimit)),
                              (a = s.length > n.bytesLimit);
                          }
                          e(void 0, t, a);
                        }
                        !(function t() {
                          r.read().then(
                            p(function (e) {
                              e.done
                                ? a()
                                : (n.collectStreamBody && i.push(e.value),
                                  (o += e.value.length) > n.bytesLimit
                                    ? a()
                                    : t());
                            }),
                            p(function (t) {
                              return e(t);
                            })
                          );
                        })();
                      })(
                        n.body,
                        function () {
                          e(re(t.startClocks.timeStamp, Qt()));
                        },
                        {
                          bytesLimit: Number.POSITIVE_INFINITY,
                          collectStreamBody: !1,
                        }
                      )
                    : e(re(t.startClocks.timeStamp, Qt()));
                })(i, function (e) {
                  n.clearTracingIfNeeded(i),
                    t.notify(7, {
                      duration: e,
                      method: i.method,
                      requestIndex: i.requestIndex,
                      responseType: i.responseType,
                      spanId: i.spanId,
                      startClocks: i.startClocks,
                      status: i.status,
                      traceId: i.traceId,
                      traceSampled: i.traceSampled,
                      type: "fetch",
                      url: i.url,
                      response: i.response,
                      init: i.init,
                      input: i.input,
                      isAborted: i.isAborted,
                      handlingStack: i.handlingStack,
                    });
                });
            }
        });
      })(t, e, r);
  }
  function Xr() {
    var t = Kr;
    return (Kr += 1), t;
  }
  function Yr(t) {
    return qt(t) && t < 0 ? void 0 : t;
  }
  function Jr(t) {
    var e = t.lifeCycle,
      n = t.isChildEvent,
      r = t.onChange,
      i = void 0 === r ? L : r,
      o = {
        errorCount: 0,
        longTaskCount: 0,
        resourceCount: 0,
        actionCount: 0,
        frustrationCount: 0,
      },
      a = e.subscribe(12, function (t) {
        var e;
        if ("view" !== t.type && "vital" !== t.type && n(t))
          switch (t.type) {
            case "error":
              (o.errorCount += 1), i();
              break;
            case "action":
              (o.actionCount += 1),
                t.action.frustration &&
                  (o.frustrationCount += t.action.frustration.type.length),
                i();
              break;
            case "long_task":
              (o.longTaskCount += 1), i();
              break;
            case "resource":
              (null === (e = t._dd) || void 0 === e ? void 0 : e.discarded) ||
                ((o.resourceCount += 1), i());
          }
      });
    return {
      stop: function () {
        a.unsubscribe();
      },
      eventCounts: o,
    };
  }
  function $r(t, e) {
    var n = $t(),
      r = !1,
      i = at(
        t,
        window,
        ["click", "mousedown", "keydown", "touchstart", "pointerdown"],
        function (e) {
          if (e.cancelable) {
            var n = {
              entryType: "first-input",
              processingStart: te(),
              processingEnd: te(),
              startTime: e.timeStamp,
              duration: 0,
              name: "",
              cancelable: !1,
              target: null,
              toJSON: function () {
                return {};
              },
            };
            "pointerdown" === e.type
              ? (function (t, e) {
                  at(
                    t,
                    window,
                    ["pointerup", "pointercancel"],
                    function (t) {
                      "pointerup" === t.type && o(e);
                    },
                    { once: !0 }
                  );
                })(t, n)
              : o(n);
          }
        },
        { passive: !0, capture: !0 }
      ).stop;
    return { stop: i };
    function o(t) {
      if (!r) {
        (r = !0), i();
        var o = t.processingStart - t.startTime;
        o >= 0 && o < $t() - n && e(t);
      }
    }
  }
  function Qr(t, e) {
    return new et(function (n) {
      if (window.PerformanceObserver) {
        var r,
          i,
          o = function (e) {
            var r = (function (t, e) {
              return e.filter(function (e) {
                return !(function (t, e) {
                  return !(
                    e.entryType !== Gr.RESOURCE ||
                    (Fr(t, e.name) && Pr(e))
                  );
                })(t, e);
              });
            })(t, e);
            r.length > 0 && n.notify(r);
          },
          a = !0,
          s = new PerformanceObserver(
            p(function (t) {
              a
                ? (r = R(function () {
                    return o(t.getEntries());
                  }))
                : o(t.getEntries());
            })
          );
        try {
          s.observe(e);
        } catch (t) {
          if (m([Gr.RESOURCE, Gr.NAVIGATION, Gr.LONG_TASK, Gr.PAINT], e.type)) {
            e.buffered &&
              (r = R(function () {
                return o(performance.getEntriesByType(e.type));
              }));
            try {
              s.observe({ entryTypes: [e.type] });
            } catch (t) {
              return;
            }
          }
        }
        return (
          (a = !1),
          (function (t) {
            !Zr &&
              void 0 !== window.performance &&
              "getEntries" in performance &&
              "addEventListener" in performance &&
              (Zr = ot(t, performance, "resourcetimingbufferfull", function () {
                performance.clearResourceTimings();
              }));
          })(t),
          ti(Gr.FIRST_INPUT) ||
            e.type !== Gr.FIRST_INPUT ||
            (i = $r(t, function (t) {
              o([t]);
            }).stop),
          function () {
            s.disconnect(), i && i(), I(r);
          }
        );
      }
    });
  }
  function ti(t) {
    return (
      window.PerformanceObserver &&
      void 0 !== PerformanceObserver.supportedEntryTypes &&
      PerformanceObserver.supportedEntryTypes.includes(t)
    );
  }
  !(function (t) {
    (t.EVENT = "event"),
      (t.FIRST_INPUT = "first-input"),
      (t.LARGEST_CONTENTFUL_PAINT = "largest-contentful-paint"),
      (t.LAYOUT_SHIFT = "layout-shift"),
      (t.LONG_TASK = "longtask"),
      (t.LONG_ANIMATION_FRAME = "long-animation-frame"),
      (t.NAVIGATION = "navigation"),
      (t.PAINT = "paint"),
      (t.RESOURCE = "resource");
  })(Gr || (Gr = {}));
  var ei = 100,
    ni = 100;
  function ri(t, e, n, r, i) {
    var o = (function (t, e, n) {
      return new et(function (r) {
        var i,
          o = [],
          a = 0;
        o.push(
          e.subscribe(c),
          Qr(n, { type: Gr.RESOURCE }).subscribe(function (t) {
            t.some(function (t) {
              return !ii(n, t.name);
            }) && c();
          }),
          t.subscribe(6, function (t) {
            ii(n, t.url) ||
              (void 0 === i && (i = t.requestIndex), (a += 1), c());
          }),
          t.subscribe(7, function (t) {
            ii(n, t.url) ||
              void 0 === i ||
              t.requestIndex < i ||
              ((a -= 1), c());
          })
        );
        var s,
          u = ((s = c), Le(window, "open", s)).stop;
        return function () {
          u(),
            o.forEach(function (t) {
              return t.unsubscribe();
            });
        };
        function c() {
          r.notify({ isBusy: a > 0 });
        }
      });
    })(t, e, n);
    return (function (t, e, n) {
      var r,
        i = !1,
        o = R(
          p(function () {
            return c({ hadActivity: !1 });
          }),
          ei
        ),
        a =
          void 0 !== n
            ? R(
                p(function () {
                  return c({ hadActivity: !0, end: Qt() });
                }),
                n
              )
            : void 0,
        s = t.subscribe(function (t) {
          var e = t.isBusy;
          I(o), I(r);
          var n = Qt();
          e ||
            (r = R(
              p(function () {
                return c({ hadActivity: !0, end: n });
              }),
              ni
            ));
        }),
        u = function () {
          (i = !0), I(o), I(r), I(a), s.unsubscribe();
        };
      function c(t) {
        i || (u(), e(t));
      }
      return { stop: u };
    })(o, r, i);
  }
  function ii(t, e) {
    return Zn(t.excludedActivityUrls, e);
  }
  function oi(t) {
    return window.CSS && window.CSS.escape
      ? window.CSS.escape(t)
      : t.replace(
          /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
          function (t, e) {
            return e
              ? "\0" === t
                ? "ï¿½"
                : ""
                    .concat(t.slice(0, -1), "\\")
                    .concat(t.charCodeAt(t.length - 1).toString(16), " ")
              : "\\".concat(t);
          }
        );
  }
  function ai(t, e) {
    return t.matches
      ? t.matches(e)
      : !!t.msMatchesSelector && t.msMatchesSelector(e);
  }
  function si(t) {
    if (t.parentElement) return t.parentElement;
    for (; t.parentNode; ) {
      if (t.parentNode.nodeType === Node.ELEMENT_NODE) return t.parentNode;
      t = t.parentNode;
    }
    return null;
  }
  var ui = (function () {
    function t(t) {
      var e = this;
      (this.map = new WeakMap()),
        t &&
          t.forEach(function (t) {
            return e.map.set(t, 1);
          });
    }
    return (
      (t.prototype.add = function (t) {
        return this.map.set(t, 1), this;
      }),
      (t.prototype.delete = function (t) {
        return this.map.delete(t);
      }),
      (t.prototype.has = function (t) {
        return this.map.has(t);
      }),
      t
    );
  })();
  function ci(t) {
    return t.nodeType === Node.TEXT_NODE;
  }
  function li(t) {
    return t.nodeType === Node.ELEMENT_NODE;
  }
  function di(t) {
    return li(t) && Boolean(t.shadowRoot);
  }
  function fi(t) {
    var e = t;
    return !!e.host && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && li(e.host);
  }
  function pi(t, e) {
    for (var n = t.firstChild; n; ) e(n), (n = n.nextSibling);
    di(t) && e(t.shadowRoot);
  }
  function vi(t) {
    return fi(t) ? t.host : t.parentNode;
  }
  var hi = {
      IGNORE: "ignore",
      HIDDEN: "hidden",
      ALLOW: Fn.ALLOW,
      MASK: Fn.MASK,
      MASK_USER_INPUT: Fn.MASK_USER_INPUT,
    },
    mi = "data-dd-privacy",
    gi = "hidden",
    _i = "dd-privacy-",
    yi = "***",
    bi =
      "data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==",
    wi = {
      INPUT: !0,
      OUTPUT: !0,
      TEXTAREA: !0,
      SELECT: !0,
      OPTION: !0,
      DATALIST: !0,
      OPTGROUP: !0,
    };
  function Si(t, e, n) {
    if (n && n.has(t)) return n.get(t);
    var r = vi(t),
      i = r ? Si(r, e, n) : e,
      o = ki(xi(t), i);
    return n && n.set(t, o), o;
  }
  function ki(t, e) {
    switch (e) {
      case hi.HIDDEN:
      case hi.IGNORE:
        return e;
    }
    switch (t) {
      case hi.ALLOW:
      case hi.MASK:
      case hi.MASK_USER_INPUT:
      case hi.HIDDEN:
      case hi.IGNORE:
        return t;
      default:
        return e;
    }
  }
  function xi(t) {
    if (li(t)) {
      if ("BASE" === t.tagName) return hi.ALLOW;
      if ("INPUT" === t.tagName) {
        var e = t;
        if ("password" === e.type || "email" === e.type || "tel" === e.type)
          return hi.MASK;
        if ("hidden" === e.type) return hi.MASK;
        var n = e.getAttribute("autocomplete");
        if (n && 0 === n.indexOf("cc-")) return hi.MASK;
      }
      return ai(t, Ri(hi.HIDDEN))
        ? hi.HIDDEN
        : ai(t, Ri(hi.MASK))
        ? hi.MASK
        : ai(t, Ri(hi.MASK_USER_INPUT))
        ? hi.MASK_USER_INPUT
        : ai(t, Ri(hi.ALLOW))
        ? hi.ALLOW
        : (function (t) {
            if ("SCRIPT" === t.nodeName) return !0;
            if ("LINK" === t.nodeName) {
              var e = i("rel");
              return (
                (/preload|prefetch/i.test(e) && "script" === i("as")) ||
                "shortcut icon" === e ||
                "icon" === e
              );
            }
            if ("META" === t.nodeName) {
              var n = i("name"),
                r = ((e = i("rel")), i("property"));
              return (
                /^msapplication-tile(image|color)$/.test(n) ||
                "application-name" === n ||
                "icon" === e ||
                "apple-touch-icon" === e ||
                "shortcut icon" === e ||
                "keywords" === n ||
                "description" === n ||
                /^(og|twitter|fb):/.test(r) ||
                /^(og|twitter):/.test(n) ||
                "pinterest" === n ||
                "robots" === n ||
                "googlebot" === n ||
                "bingbot" === n ||
                t.hasAttribute("http-equiv") ||
                "author" === n ||
                "generator" === n ||
                "framework" === n ||
                "publisher" === n ||
                "progid" === n ||
                /^article:/.test(r) ||
                /^product:/.test(r) ||
                "google-site-verification" === n ||
                "yandex-verification" === n ||
                "csrf-token" === n ||
                "p:domain_verify" === n ||
                "verify-v1" === n ||
                "verification" === n ||
                "shopify-checkout-api-token" === n
              );
            }
            function i(e) {
              return (t.getAttribute(e) || "").toLowerCase();
            }
            return !1;
          })(t)
        ? hi.IGNORE
        : void 0;
    }
  }
  function Ci(t, e) {
    switch (e) {
      case hi.MASK:
      case hi.HIDDEN:
      case hi.IGNORE:
        return !0;
      case hi.MASK_USER_INPUT:
        return ci(t) ? Ei(t.parentNode) : Ei(t);
      default:
        return !1;
    }
  }
  function Ei(t) {
    if (!t || t.nodeType !== t.ELEMENT_NODE) return !1;
    var e = t;
    if ("INPUT" === e.tagName)
      switch (e.type) {
        case "button":
        case "color":
        case "reset":
        case "submit":
          return !1;
      }
    return !!wi[e.tagName];
  }
  var Ti = function (t) {
    return t.replace(/\S/g, "x");
  };
  function Ai(t, e, n) {
    var r,
      i = null === (r = t.parentElement) || void 0 === r ? void 0 : r.tagName,
      o = t.textContent || "";
    if (!e || o.trim()) {
      var a = n;
      if ("SCRIPT" === i) o = yi;
      else if (a === hi.HIDDEN) o = yi;
      else if (Ci(t, a))
        if ("DATALIST" === i || "SELECT" === i || "OPTGROUP" === i) {
          if (!o.trim()) return;
        } else o = "OPTION" === i ? yi : Ti(o);
      return o;
    }
  }
  function Ri(t) {
    return "[".concat(mi, '="').concat(t, '"], .').concat(_i).concat(t);
  }
  var Ii = "data-dd-action-name",
    Ni = "Masked Element";
  function Oi(t, e, n) {
    var r = e.enablePrivacyForActionName,
      i = e.actionNameAttribute,
      o = Mi(t, Ii) || (i && Mi(t, i));
    return n === hi.MASK
      ? o || Ni
      : o || Vi(t, i, Pi, r) || Vi(t, i, Ui, r) || "";
  }
  function Mi(t, e) {
    var n;
    if (
      (function () {
        void 0 === Di && (Di = "closest" in HTMLElement.prototype);
        return Di;
      })()
    )
      n = t.closest("[".concat(e, "]"));
    else
      for (var r = t; r; ) {
        if (r.hasAttribute(e)) {
          n = r;
          break;
        }
        r = si(r);
      }
    if (n) return Bi(Fi(n.getAttribute(e).trim()));
  }
  var Li,
    Di,
    Pi = [
      function (t, e, n) {
        if (
          (function () {
            void 0 === Li && (Li = "labels" in HTMLInputElement.prototype);
            return Li;
          })()
        ) {
          if ("labels" in t && t.labels && t.labels.length > 0)
            return Hi(t.labels[0], e);
        } else if (t.id) {
          var r =
            t.ownerDocument &&
            _(t.ownerDocument.querySelectorAll("label"), function (e) {
              return e.htmlFor === t.id;
            });
          return r && Hi(r, e, n);
        }
      },
      function (t) {
        if ("INPUT" === t.nodeName) {
          var e = t,
            n = e.getAttribute("type");
          if ("button" === n || "submit" === n || "reset" === n) return e.value;
        }
      },
      function (t, e, n) {
        if (
          "BUTTON" === t.nodeName ||
          "LABEL" === t.nodeName ||
          "button" === t.getAttribute("role")
        )
          return Hi(t, e, n);
      },
      function (t) {
        return t.getAttribute("aria-label");
      },
      function (t, e, n) {
        var r = t.getAttribute("aria-labelledby");
        if (r)
          return r
            .split(/\s+/)
            .map(function (e) {
              return (function (t, e) {
                return t.ownerDocument
                  ? t.ownerDocument.getElementById(e)
                  : null;
              })(t, e);
            })
            .filter(function (t) {
              return Boolean(t);
            })
            .map(function (t) {
              return Hi(t, e, n);
            })
            .join(" ");
      },
      function (t) {
        return t.getAttribute("alt");
      },
      function (t) {
        return t.getAttribute("name");
      },
      function (t) {
        return t.getAttribute("title");
      },
      function (t) {
        return t.getAttribute("placeholder");
      },
      function (t, e) {
        if ("options" in t && t.options.length > 0) return Hi(t.options[0], e);
      },
    ],
    Ui = [
      function (t, e, n) {
        return Hi(t, e, n);
      },
    ],
    zi = 10;
  function Vi(t, e, n, r) {
    for (
      var i = t, o = 0;
      o <= zi &&
      i &&
      "BODY" !== i.nodeName &&
      "HTML" !== i.nodeName &&
      "HEAD" !== i.nodeName;

    ) {
      for (var a = 0, s = n; a < s.length; a++) {
        var u = (0, s[a])(i, e, r);
        if ("string" == typeof u) {
          var c = u.trim();
          if (c) return Bi(Fi(c));
        }
      }
      if ("FORM" === i.nodeName) break;
      (i = si(i)), (o += 1);
    }
  }
  function Fi(t) {
    return t.replace(/\s+/g, " ");
  }
  function Bi(t) {
    return t.length > 100 ? "".concat(Te(t, 100), " [...]") : t;
  }
  function Hi(t, e, n) {
    if (!t.isContentEditable) {
      if ("innerText" in t) {
        var r = t.innerText,
          i = function (e) {
            for (var n = t.querySelectorAll(e), i = 0; i < n.length; i += 1) {
              var o = n[i];
              if ("innerText" in o) {
                var a = o.innerText;
                a && a.trim().length > 0 && (r = r.replace(a, ""));
              }
            }
          };
        return (
          0 === Qe() && i("script, style"),
          i("[".concat(Ii, "]")),
          e && i("[".concat(e, "]")),
          n && i("".concat(Ri(hi.HIDDEN), ", ").concat(Ri(hi.MASK))),
          r
        );
      }
      return t.textContent;
    }
  }
  var qi,
    ji = [
      Ii,
      "data-testid",
      "data-test",
      "data-qa",
      "data-cy",
      "data-test-id",
      "data-qa-id",
      "data-testing",
      "data-component",
      "data-element",
      "data-source-file",
    ],
    Gi = [
      Xi,
      function (t) {
        if (t.id && !Wi(t.id)) return "#".concat(oi(t.id));
      },
    ],
    Zi = [
      Xi,
      function (t) {
        if ("BODY" === t.tagName) return;
        for (
          var e = (function (t) {
              if (t.classList) return t.classList;
              var e = (t.getAttribute("class") || "").trim();
              return e ? e.split(/\s+/) : [];
            })(t),
            n = 0;
          n < e.length;
          n += 1
        ) {
          var r = e[n];
          if (!Wi(r)) return "".concat(oi(t.tagName), ".").concat(oi(r));
        }
      },
      function (t) {
        return oi(t.tagName);
      },
    ];
  function Ki(t, e) {
    if (
      (function (t) {
        if ("isConnected" in t) return t.isConnected;
        return t.ownerDocument.documentElement.contains(t);
      })(t)
    ) {
      for (var n, r = t; r && "HTML" !== r.nodeName; ) {
        var i = Ji(r, Gi, $i, e, n);
        if (i) return i;
        (n = Ji(r, Zi, Qi, e, n) || to(Yi(r), n)), (r = si(r));
      }
      return n;
    }
  }
  function Wi(t) {
    return /[0-9]/.test(t);
  }
  function Xi(t, e) {
    if (e && (i = o(e))) return i;
    for (var n = 0, r = ji; n < r.length; n++) {
      var i;
      if ((i = o(r[n]))) return i;
    }
    function o(e) {
      if (t.hasAttribute(e))
        return ""
          .concat(oi(t.tagName), "[")
          .concat(e, '="')
          .concat(oi(t.getAttribute(e)), '"]');
    }
  }
  function Yi(t) {
    for (var e = si(t).firstElementChild, n = 1; e && e !== t; )
      e.tagName === t.tagName && (n += 1), (e = e.nextElementSibling);
    return "".concat(oi(t.tagName), ":nth-of-type(").concat(n, ")");
  }
  function Ji(t, e, n, r, i) {
    for (var o = 0, a = e; o < a.length; o++) {
      var s = (0, a[o])(t, r);
      if (s && n(t, s, i)) return to(s, i);
    }
  }
  function $i(t, e, n) {
    return 1 === t.ownerDocument.querySelectorAll(to(e, n)).length;
  }
  function Qi(t, e, n) {
    var r;
    if (void 0 === n)
      r = function (t) {
        return ai(t, e);
      };
    else {
      var i = (function () {
        if (void 0 === qi)
          try {
            document.querySelector(":scope"), (qi = !0);
          } catch (t) {
            qi = !1;
          }
        return qi;
      })()
        ? to("".concat(e, ":scope"), n)
        : to(e, n);
      r = function (t) {
        return null !== t.querySelector(i);
      };
    }
    for (var o = si(t).firstElementChild; o; ) {
      if (o !== t && r(o)) return !1;
      o = o.nextElementSibling;
    }
    return !0;
  }
  function to(t, e) {
    return e ? "".concat(t, ">").concat(e) : t;
  }
  var eo = Gt,
    no = 100;
  function ro(t, e) {
    var n,
      r = [],
      i = 0;
    function o(t) {
      t.stopObservable.subscribe(a), r.push(t), I(n), (n = R(s, eo));
    }
    function a() {
      1 === i &&
        r.every(function (t) {
          return t.isStopped();
        }) &&
        ((i = 2), e(r));
    }
    function s() {
      I(n), 0 === i && ((i = 1), a());
    }
    return (
      o(t),
      {
        tryAppend: function (t) {
          return (
            0 === i &&
            (r.length > 0 &&
            ((e = r[r.length - 1].event),
            (n = t.event),
            !(
              e.target === n.target &&
              ((a = e),
              (u = n),
              Math.sqrt(
                Math.pow(a.clientX - u.clientX, 2) +
                  Math.pow(a.clientY - u.clientY, 2)
              ) <= no) &&
              e.timeStamp - n.timeStamp <= eo
            ))
              ? (s(), !1)
              : (o(t), !0))
          );
          var e, n, a, u;
        },
        stop: function () {
          s();
        },
      }
    );
  }
  function io() {
    var t = window.getSelection();
    return !t || t.isCollapsed;
  }
  function oo(t) {
    return t.target instanceof Element && !1 !== t.isPrimary;
  }
  var ao = 3;
  function so(t, e) {
    if (
      (function (t) {
        if (
          t.some(function (t) {
            return t.getUserActivity().selection || t.getUserActivity().scroll;
          })
        )
          return !1;
        for (var e = 0; e < t.length - (ao - 1); e += 1)
          if (t[e + ao - 1].event.timeStamp - t[e].event.timeStamp <= Gt)
            return !0;
        return !1;
      })(t)
    )
      return (
        e.addFrustration("rage_click"),
        t.some(co) && e.addFrustration("dead_click"),
        e.hasError && e.addFrustration("error_click"),
        { isRage: !0 }
      );
    var n = t.some(function (t) {
      return t.getUserActivity().selection;
    });
    return (
      t.forEach(function (t) {
        t.hasError && t.addFrustration("error_click"),
          co(t) && !n && t.addFrustration("dead_click");
      }),
      { isRage: !1 }
    );
  }
  var uo =
    'input:not([type="checkbox"]):not([type="radio"]):not([type="button"]):not([type="submit"]):not([type="reset"]):not([type="range"]),textarea,select,[contenteditable],[contenteditable] *,canvas,a[href],a[href] *';
  function co(t) {
    return (
      !(
        t.hasPageActivity ||
        t.getUserActivity().input ||
        t.getUserActivity().scroll
      ) && !ai(t.event.target, uo)
    );
  }
  var lo = 10 * Gt,
    fo = 5 * Zt;
  function po(t, e, n) {
    var r,
      i = Sr({ expireDelay: fo }),
      o = new et();
    t.subscribe(9, function () {
      i.reset();
    }),
      t.subscribe(4, u);
    var a = (function (t, e) {
      var n,
        r,
        i = e.onPointerDown,
        o = e.onPointerUp,
        a = { selection: !1, input: !1, scroll: !1 },
        s = [
          ot(
            t,
            window,
            "pointerdown",
            function (t) {
              oo(t) &&
                ((n = io()),
                (a = { selection: !1, input: !1, scroll: !1 }),
                (r = i(t)));
            },
            { capture: !0 }
          ),
          ot(
            t,
            window,
            "selectionchange",
            function () {
              (n && io()) || (a.selection = !0);
            },
            { capture: !0 }
          ),
          ot(
            t,
            window,
            "scroll",
            function () {
              a.scroll = !0;
            },
            { capture: !0, passive: !0 }
          ),
          ot(
            t,
            window,
            "pointerup",
            function (t) {
              if (oo(t) && r) {
                var e = a;
                o(r, t, function () {
                  return e;
                }),
                  (r = void 0);
              }
            },
            { capture: !0 }
          ),
          ot(
            t,
            window,
            "input",
            function () {
              a.input = !0;
            },
            { capture: !0 }
          ),
        ];
      return {
        stop: function () {
          s.forEach(function (t) {
            return t.stop();
          });
        },
      };
    })(n, {
      onPointerDown: function (r) {
        return (function (t, e, n, r) {
          var i = t.enablePrivacyForActionName
            ? Si(r.target, t.defaultPrivacyLevel)
            : hi.ALLOW;
          if (i === hi.HIDDEN) return;
          var o = (function (t, e, n) {
              var r = t.target.getBoundingClientRect();
              return {
                type: "click",
                target: {
                  width: Math.round(r.width),
                  height: Math.round(r.height),
                  selector: Ki(t.target, n.actionNameAttribute),
                },
                position: {
                  x: Math.round(t.clientX - r.left),
                  y: Math.round(t.clientY - r.top),
                },
                name: Oi(t.target, n, e),
              };
            })(r, i, t),
            a = !1;
          return (
            ri(
              e,
              n,
              t,
              function (t) {
                a = t.hadActivity;
              },
              ei
            ),
            {
              clickActionBase: o,
              hadActivityOnPointerDown: function () {
                return a;
              },
            }
          );
        })(n, t, e, r);
      },
      onPointerUp: function (r, a, u) {
        var c = r.clickActionBase,
          l = r.hadActivityOnPointerDown;
        !(function (t, e, n, r, i, o, a, s, u, c) {
          var l = vo(e, r, u, a, s);
          o(l);
          var d = ri(
              e,
              n,
              t,
              function (t) {
                t.hadActivity && t.end < l.startClocks.timeStamp
                  ? l.discard()
                  : t.hadActivity
                  ? l.stop(t.end)
                  : c()
                  ? l.stop(l.startClocks.timeStamp)
                  : l.stop();
              },
              lo
            ).stop,
            f = e.subscribe(4, function (t) {
              var e = t.endClocks;
              l.stop(e.timeStamp);
            }),
            p = i.subscribe(function () {
              l.stop();
            });
          l.stopObservable.subscribe(function () {
            f.unsubscribe(), d(), p.unsubscribe();
          });
        })(n, t, e, i, o, s, c, a, u, l);
      },
    }).stop;
    return {
      stop: function () {
        u(), o.notify(), a();
      },
      actionContexts: {
        findActionId: function (t) {
          return i.findAll(t);
        },
      },
    };
    function s(t) {
      if (!r || !r.tryAppend(t)) {
        var e = t.clone();
        r = ro(t, function (t) {
          !(function (t, e) {
            var n = so(t, e).isRage;
            n
              ? (t.forEach(function (t) {
                  return t.discard();
                }),
                e.stop(Qt()),
                e.validate(
                  t.map(function (t) {
                    return t.event;
                  })
                ))
              : (e.discard(),
                t.forEach(function (t) {
                  return t.validate();
                }));
          })(t, e);
        });
      }
    }
    function u() {
      r && r.stop();
    }
  }
  function vo(t, e, n, r, i) {
    var o,
      a = xe(),
      s = ee(),
      u = e.add(a, s.relative),
      c = Jr({
        lifeCycle: t,
        isChildEvent: function (t) {
          return (
            void 0 !== t.action &&
            (Array.isArray(t.action.id) ? m(t.action.id, a) : t.action.id === a)
          );
        },
      }),
      l = 0,
      d = [],
      f = new et();
    function p(t) {
      0 === l &&
        ((l = 1), (o = t) ? u.close(oe(o)) : u.remove(), c.stop(), f.notify());
    }
    return {
      event: i,
      stop: p,
      stopObservable: f,
      get hasError() {
        return c.eventCounts.errorCount > 0;
      },
      get hasPageActivity() {
        return void 0 !== o;
      },
      getUserActivity: n,
      addFrustration: function (t) {
        d.push(t);
      },
      startClocks: s,
      isStopped: function () {
        return 1 === l || 2 === l;
      },
      clone: function () {
        return vo(t, e, n, r, i);
      },
      validate: function (e) {
        if ((p(), 1 === l)) {
          var n = c.eventCounts,
            u = n.resourceCount,
            f = n.errorCount,
            v = n.longTaskCount,
            h = S(
              {
                type: "click",
                duration: o && re(s.timeStamp, o),
                startClocks: s,
                id: a,
                frustrationTypes: d,
                counts: { resourceCount: u, errorCount: f, longTaskCount: v },
                events: null != e ? e : [i],
                event: i,
              },
              r
            );
          t.notify(0, h), (l = 2);
        }
      },
      discard: function () {
        p(), (l = 2);
      },
    };
  }
  function ho(t, e) {
    var n = mo(t)
        ? {
            action: {
              id: t.id,
              loading_time: Yr(Jt(t.duration)),
              frustration: { type: t.frustrationTypes },
              error: { count: t.counts.errorCount },
              long_task: { count: t.counts.longTaskCount },
              resource: { count: t.counts.resourceCount },
            },
            _dd: { action: { target: t.target, position: t.position } },
          }
        : void 0,
      r = mo(t) ? void 0 : t.context,
      i = W(
        {
          action: { id: xe(), target: { name: t.name }, type: t.type },
          date: t.startClocks.timeStamp,
          type: "action",
          view: {
            in_foreground: e.wasInPageStateAt("active", t.startClocks.relative),
          },
        },
        n
      ),
      o = mo(t) ? { events: t.events } : {};
    return (
      !mo(t) && t.handlingStack && (o.handlingStack = t.handlingStack),
      {
        customerContext: r,
        rawRumEvent: i,
        startTime: t.startClocks.relative,
        domainContext: o,
      }
    );
  }
  function mo(t) {
    return "custom" !== t.type;
  }
  function go(t) {
    var e,
      n = function (e, n) {
        var r = Rt({
          stackTrace: e,
          originalError: n,
          startClocks: ee(),
          nonErrorPrefix: "Uncaught",
          source: sr.SOURCE,
          handling: "unhandled",
        });
        t.notify(r);
      },
      r = ((e = n),
      Le(window, "onerror", function (t) {
        var n,
          r = t.parameters,
          i = r[0],
          o = r[1],
          a = r[2],
          s = r[3],
          u = r[4];
        (n = u instanceof Error ? ft(u) : St(i, o, a, s)),
          e(n, null != u ? u : i);
      })).stop,
      i = (function (t) {
        return Le(window, "onunhandledrejection", function (e) {
          var n = e.parameters[0].reason || "Empty reason",
            r = ft(n);
          t(r, n);
        });
      })(n).stop;
    return {
      stop: function () {
        r(), i();
      },
    };
  }
  var _o = {};
  function yo(n) {
    var r = n.map(function (n) {
      return (
        _o[n] ||
          (_o[n] = (function (n) {
            return new et(function (r) {
              var i = e[n];
              return (
                (e[n] = function () {
                  for (var e = [], o = 0; o < arguments.length; o++)
                    e[o] = arguments[o];
                  i.apply(console, e);
                  var a = xt();
                  v(function () {
                    r.notify(
                      (function (e, n, r) {
                        var i,
                          o = e
                            .map(function (t) {
                              return (function (t) {
                                if ("string" == typeof t) return $(t);
                                if (t instanceof Error) return Et(ft(t));
                                return D($(t), void 0, 2);
                              })(t);
                            })
                            .join(" ");
                        if (n === t.error) {
                          var a = _(e, function (t) {
                            return t instanceof Error;
                          });
                          i = {
                            stack: a ? Ct(ft(a)) : void 0,
                            fingerprint: It(a),
                            causes: a ? Nt(a, "console") : void 0,
                            startClocks: ee(),
                            message: o,
                            source: sr.CONSOLE,
                            handling: "handled",
                            handlingStack: r,
                          };
                        }
                        return {
                          api: n,
                          message: o,
                          error: i,
                          handlingStack: r,
                        };
                      })(e, n, a)
                    );
                  });
                }),
                function () {
                  e[n] = i;
                }
              );
            });
          })(n)),
        _o[n]
      );
    });
    return nt.apply(void 0, r);
  }
  var bo = {
    intervention: "intervention",
    deprecation: "deprecation",
    cspViolation: "csp_violation",
  };
  function wo(t, e) {
    var n = [];
    m(e, bo.cspViolation) &&
      n.push(
        (function (t) {
          return new et(function (e) {
            return ot(t, document, "securitypolicyviolation", function (t) {
              e.notify(
                (function (t) {
                  var e = "'"
                    .concat(t.blockedURI, "' blocked by '")
                    .concat(t.effectiveDirective, "' directive");
                  return So({
                    type: t.effectiveDirective,
                    message: "".concat(bo.cspViolation, ": ").concat(e),
                    originalError: t,
                    csp: { disposition: t.disposition },
                    stack: ko(
                      t.effectiveDirective,
                      t.originalPolicy
                        ? ""
                            .concat(e, ' of the policy "')
                            .concat(Te(t.originalPolicy, 100, "..."), '"')
                        : "no policy",
                      t.sourceFile,
                      t.lineNumber,
                      t.columnNumber
                    ),
                  });
                })(t)
              );
            }).stop;
          });
        })(t)
      );
    var r = e.filter(function (t) {
      return t !== bo.cspViolation;
    });
    return (
      r.length &&
        n.push(
          (function (t) {
            return new et(function (e) {
              if (window.ReportingObserver) {
                var n = p(function (t, n) {
                    return t.forEach(function (t) {
                      return e.notify(
                        (function (t) {
                          var e = t.type,
                            n = t.body;
                          return So({
                            type: n.id,
                            message: "".concat(e, ": ").concat(n.message),
                            originalError: t,
                            stack: ko(
                              n.id,
                              n.message,
                              n.sourceFile,
                              n.lineNumber,
                              n.columnNumber
                            ),
                          });
                        })(t)
                      );
                    });
                  }),
                  r = new window.ReportingObserver(n, {
                    types: t,
                    buffered: !0,
                  });
                return (
                  r.observe(),
                  function () {
                    r.disconnect();
                  }
                );
              }
            });
          })(r)
        ),
      nt.apply(void 0, n)
    );
  }
  function So(t) {
    return S(
      { startClocks: ee(), source: sr.REPORT, handling: "unhandled" },
      t
    );
  }
  function ko(t, e, n, r, i) {
    return n
      ? Ct({
          name: t,
          message: e,
          stack: [
            {
              func: "?",
              url: n,
              line: null != r ? r : void 0,
              column: null != i ? i : void 0,
            },
          ],
        })
      : void 0;
  }
  function xo(e, n, r, i) {
    var o = new et();
    return (
      (function (e) {
        var n = yo([t.error]).subscribe(function (t) {
          return e.notify(t.error);
        });
      })(o),
      go(o),
      (function (t, e) {
        var n = wo(t, [bo.cspViolation, bo.intervention]).subscribe(function (
          t
        ) {
          return e.notify(t);
        });
      })(n, o),
      o.subscribe(function (t) {
        return e.notify(13, { error: t });
      }),
      (function (t, e, n) {
        return (
          t.subscribe(13, function (r) {
            var i = r.error,
              o = r.customerContext,
              a = r.savedCommonContext;
            t.notify(
              11,
              S(
                { customerContext: o, savedCommonContext: a },
                (function (t, e, n) {
                  var r = {
                      date: t.startClocks.timeStamp,
                      error: {
                        id: xe(),
                        message: t.message,
                        source: t.source,
                        stack: t.stack,
                        handling_stack: t.handlingStack,
                        type: t.type,
                        handling: t.handling,
                        causes: t.causes,
                        source_type: "browser",
                        fingerprint: t.fingerprint,
                        csp: t.csp,
                      },
                      type: "error",
                      view: {
                        in_foreground: e.wasInPageStateAt(
                          "active",
                          t.startClocks.relative
                        ),
                      },
                    },
                    i = n.findFeatureFlagEvaluations(t.startClocks.relative);
                  i && !V(i) && (r.feature_flags = i);
                  var o = {
                    error: t.originalError,
                    handlingStack: t.handlingStack,
                  };
                  return {
                    rawRumEvent: r,
                    startTime: t.startClocks.relative,
                    domainContext: o,
                  };
                })(i, e, n)
              )
            );
          }),
          {
            addError: function (e, n) {
              var r = e.error,
                i = e.handlingStack,
                o = e.startClocks,
                a = e.context,
                s = Rt({
                  stackTrace: r instanceof Error ? ft(r) : void 0,
                  originalError: r,
                  handlingStack: i,
                  startClocks: o,
                  nonErrorPrefix: "Provided",
                  source: sr.CUSTOM,
                  handling: "handled",
                });
              t.notify(13, {
                customerContext: a,
                savedCommonContext: n,
                error: s,
              });
            },
          }
        );
      })(e, r, i)
    );
  }
  var Co = new ui();
  function Eo(t) {
    if (performance && "getEntriesByName" in performance) {
      var e = performance.getEntriesByName(t.url, "resource");
      if (e.length && "toJSON" in e[0]) {
        var n = e
          .filter(function (t) {
            return !Co.has(t);
          })
          .filter(function (t) {
            return Pr(t) && Ur(t);
          })
          .filter(function (e) {
            return (
              (n = e),
              (r = t.startClocks.relative),
              (i = To({
                startTime: t.startClocks.relative,
                duration: t.duration,
              })),
              (o = 1),
              n.startTime >= r - o && To(n) <= ie(i, o)
            );
            var n, r, i, o;
          });
        return 1 === n.length ? (Co.add(n[0]), n[0].toJSON()) : void 0;
      }
    }
  }
  function To(t) {
    return ie(t.startTime, t.duration);
  }
  function Ao(t, e, n) {
    return document.readyState === e || "complete" === document.readyState
      ? (n(), { stop: L })
      : ot(t, window, "complete" === e ? "load" : "DOMContentLoaded", n, {
          once: !0,
        });
  }
  var Ro = 2 * Zt;
  function Io(t) {
    var e =
      (function (t) {
        var e = t.querySelector("meta[name=dd-trace-id]"),
          n = t.querySelector("meta[name=dd-trace-time]");
        return No(e && e.content, n && n.content);
      })(t) ||
      (function (t) {
        var e = (function (t) {
          for (var e = 0; e < t.childNodes.length; e += 1) {
            if ((n = Oo(t.childNodes[e]))) return n;
          }
          if (t.body)
            for (e = t.body.childNodes.length - 1; e >= 0; e -= 1) {
              var n,
                r = t.body.childNodes[e];
              if ((n = Oo(r))) return n;
              if (!ci(r)) break;
            }
        })(t);
        if (!e) return;
        return No(Ee(e, "trace-id"), Ee(e, "trace-time"));
      })(t);
    if (e && !(e.traceTime <= $t() - Ro)) return e.traceId;
  }
  function No(t, e) {
    var n = e && Number(e);
    if (t && n) return { traceId: t, traceTime: n };
  }
  function Oo(t) {
    if (
      t &&
      (function (t) {
        return t.nodeType === Node.COMMENT_NODE;
      })(t)
    ) {
      var e = /^\s*DATADOG;(.*?)\s*$/.exec(t.data);
      if (e) return e[1];
    }
  }
  function Mo() {
    if (ti(Gr.NAVIGATION)) {
      var t = performance.getEntriesByType(Gr.NAVIGATION)[0];
      if (t) return t;
    }
    var e = (function () {
        var t = {},
          e = performance.timing;
        for (var n in e)
          if (qt(e[n])) {
            var r = n,
              i = e[r];
            t[r] = 0 === i ? 0 : oe(i);
          }
        return t;
      })(),
      n = S(
        {
          entryType: Gr.NAVIGATION,
          initiatorType: "navigation",
          name: window.location.href,
          startTime: 0,
          duration: e.responseEnd,
          decodedBodySize: 0,
          encodedBodySize: 0,
          transferSize: 0,
          toJSON: function () {
            return S({}, n, { toJSON: void 0 });
          },
        },
        e
      );
    return n;
  }
  function Lo(t, e) {
    Ao(t, "interactive", function () {
      var t = S(Mo().toJSON(), {
        entryType: Gr.RESOURCE,
        initiatorType: Rr,
        traceId: Io(document),
        toJSON: function () {
          return S({}, t, { toJSON: void 0 });
        },
      });
      e(t);
    });
  }
  function Do(t, e, n, r) {
    void 0 === r && (r = Lo),
      t.subscribe(7, function (r) {
        var i = (function (t, e, n) {
          var r = Eo(t),
            i = r ? Xt(r.startTime) : t.startClocks,
            o = (function (t, e) {
              var n = t.traceSampled && t.traceId && t.spanId;
              if (!n) return;
              return {
                _dd: {
                  span_id: t.spanId.toDecimalString(),
                  trace_id: t.traceId.toDecimalString(),
                  rule_psr: zo(e),
                },
              };
            })(t, e);
          if (!e.trackResources && !o) return;
          var a = "xhr" === t.type ? "xhr" : "fetch",
            s = r ? Uo(r) : void 0,
            u = (function (t, e, n) {
              return t.wasInPageStateDuringPeriod("frozen", e.relative, n)
                ? void 0
                : Jt(n);
            })(n, i, t.duration),
            c = W(
              {
                date: i.timeStamp,
                resource: {
                  id: xe(),
                  type: a,
                  duration: u,
                  method: t.method,
                  status_code: t.status,
                  url: qr(t.url) ? jr(t.url) : t.url,
                },
                type: "resource",
                _dd: { discarded: !e.trackResources },
              },
              o,
              s
            );
          return {
            startTime: i.relative,
            rawRumEvent: c,
            domainContext: {
              performanceEntry: r,
              xhr: t.xhr,
              response: t.response,
              requestInput: t.input,
              requestInit: t.init,
              error: t.error,
              isAborted: t.isAborted,
              handlingStack: t.handlingStack,
            },
          };
        })(r, e, n);
        i && t.notify(11, i);
      });
    var i = Qr(e, { type: Gr.RESOURCE, buffered: !0 }).subscribe(function (n) {
      for (var r = 0, i = n; r < i.length; r++) {
        var o = i[r];
        if (!Mr(o)) {
          var a = Po(o, e);
          a && t.notify(11, a);
        }
      }
    });
    return (
      r(e, function (n) {
        var r = Po(n, e);
        r && t.notify(11, r);
      }),
      {
        stop: function () {
          i.unsubscribe();
        },
      }
    );
  }
  function Po(t, e) {
    var n = Xt(t.startTime),
      r = (function (t, e) {
        var n = t.traceId;
        if (!n) return;
        return {
          _dd: {
            trace_id: t.traceId,
            span_id: Yn().toDecimalString(),
            rule_psr: zo(e),
          },
        };
      })(t, e);
    if (e.trackResources || r) {
      var i,
        o = Nr(t),
        a = Uo(t),
        s = W(
          {
            date: n.timeStamp,
            resource: {
              id: xe(),
              type: o,
              url: t.name,
              status_code: ((i = t.responseStatus), 0 === i ? void 0 : i),
            },
            type: "resource",
            _dd: { discarded: !e.trackResources },
          },
          r,
          a
        );
      return {
        startTime: n.relative,
        rawRumEvent: s,
        domainContext: { performanceEntry: t },
      };
    }
  }
  function Uo(t) {
    var e = t.renderBlockingStatus;
    return {
      resource: S({ duration: Lr(t), render_blocking_status: e }, Vr(t), Dr(t)),
    };
  }
  function zo(t) {
    return qt(t.traceSampleRate) ? t.traceSampleRate / 100 : void 0;
  }
  var Vo = 10 * Zt;
  function Fo(t, e, n) {
    return (
      void 0 === n && (n = Mo),
      (function (t, e) {
        var n,
          r = Ao(t, "complete", function () {
            n = R(function () {
              return e();
            });
          }).stop;
        return {
          stop: function () {
            r(), I(n);
          },
        };
      })(t, function () {
        var t = n();
        (function (t) {
          return t.loadEventEnd <= 0;
        })(t) ||
          e(
            (function (t) {
              return {
                domComplete: t.domComplete,
                domContentLoaded: t.domContentLoadedEventEnd,
                domInteractive: t.domInteractive,
                loadEvent: t.loadEventEnd,
                firstByte:
                  t.responseStart >= 0 && t.responseStart <= te()
                    ? t.responseStart
                    : void 0,
              };
            })(t)
          );
      })
    );
  }
  var Bo = 10 * Zt;
  function Ho(t, e) {
    var n, r;
    return (
      void 0 === e && (e = window),
      "hidden" === document.visibilityState
        ? (n = 0)
        : ((n = 1 / 0),
          (r = at(
            t,
            e,
            ["pagehide", "visibilitychange"],
            function (t) {
              ("pagehide" !== t.type &&
                "hidden" !== document.visibilityState) ||
                ((n = t.timeStamp), r());
            },
            { capture: !0 }
          ).stop)),
      {
        get timeStamp() {
          return n;
        },
        stop: function () {
          null == r || r();
        },
      }
    );
  }
  function qo(t, e, n) {
    var r = {},
      i = Fo(t, function (t) {
        e(t.loadEvent), (r.navigationTimings = t), n();
      }).stop,
      o = Ho(t),
      a = (function (t, e, n) {
        return {
          stop: Qr(t, { type: Gr.PAINT, buffered: !0 }).subscribe(function (t) {
            var r = _(t, function (t) {
              return (
                "first-contentful-paint" === t.name &&
                t.startTime < e.timeStamp &&
                t.startTime < Vo
              );
            });
            r && n(r.startTime);
          }).unsubscribe,
        };
      })(t, o, function (t) {
        (r.firstContentfulPaint = t), n();
      }).stop,
      s = (function (t, e, n, r) {
        var i = 1 / 0,
          o = at(
            t,
            n,
            ["pointerdown", "keydown"],
            function (t) {
              i = t.timeStamp;
            },
            { capture: !0, once: !0 }
          ).stop,
          a = 0,
          s = Qr(t, {
            type: Gr.LARGEST_CONTENTFUL_PAINT,
            buffered: !0,
          }).subscribe(function (n) {
            var o = (function (t, e) {
              for (var n = t.length - 1; n >= 0; n -= 1) {
                var r = t[n];
                if (e(r, n, t)) return r;
              }
            })(n, function (t) {
              return (
                t.entryType === Gr.LARGEST_CONTENTFUL_PAINT &&
                t.startTime < i &&
                t.startTime < e.timeStamp &&
                t.startTime < Bo &&
                t.size > a
              );
            });
            if (o) {
              var s = void 0;
              o.element && (s = Ki(o.element, t.actionNameAttribute)),
                r({ value: o.startTime, targetSelector: s }),
                (a = o.size);
            }
          });
        return {
          stop: function () {
            o(), s.unsubscribe();
          },
        };
      })(t, o, window, function (t) {
        (r.largestContentfulPaint = t), n();
      }).stop,
      u = (function (t, e, n) {
        var r = Qr(t, { type: Gr.FIRST_INPUT, buffered: !0 }).subscribe(
          function (r) {
            var i = _(r, function (t) {
              return t.startTime < e.timeStamp;
            });
            if (i) {
              var o = re(i.startTime, i.processingStart),
                a = void 0;
              i.target &&
                li(i.target) &&
                (a = Ki(i.target, t.actionNameAttribute)),
                n({
                  delay: o >= 0 ? o : 0,
                  time: i.startTime,
                  targetSelector: a,
                });
            }
          }
        );
        return {
          stop: function () {
            r.unsubscribe();
          },
        };
      })(t, o, function (t) {
        (r.firstInput = t), n();
      }).stop;
    return {
      stop: function () {
        i(), a(), s(), u(), o.stop();
      },
      initialViewMetrics: r,
    };
  }
  function jo(t, e, n) {
    if (!Xo()) return { stop: L };
    var r,
      i,
      o = 0;
    n({ value: 0 });
    var a = (function () {
        var t,
          e,
          n = 0,
          r = 0;
        return {
          update: function (i) {
            var o;
            return (
              void 0 === t || i.startTime - e >= Wo || i.startTime - t >= Ko
                ? ((t = e = i.startTime), (r = n = i.value), (o = !0))
                : ((n += i.value),
                  (e = i.startTime),
                  (o = i.value > r) && (r = i.value)),
              { cumulatedValue: n, isMaxValue: o }
            );
          },
        };
      })(),
      s = Qr(t, { type: Gr.LAYOUT_SHIFT, buffered: !0 }).subscribe(function (
        s
      ) {
        for (var u = 0, c = s; u < c.length; u++) {
          var l = c[u];
          if (!l.hadRecentInput) {
            var d = a.update(l),
              f = d.cumulatedValue;
            if (d.isMaxValue) {
              var p = Go(l.sources);
              (r = p ? new WeakRef(p) : void 0), (i = re(e, l.startTime));
            }
            if (f > o) {
              o = f;
              p = null == r ? void 0 : r.deref();
              n({
                value: Ht(o, 4),
                targetSelector: p && Ki(p, t.actionNameAttribute),
                time: i,
              });
            }
          }
        }
      });
    return {
      stop: function () {
        s.unsubscribe();
      },
    };
  }
  function Go(t) {
    var e;
    if (t)
      return null ===
        (e = _(t, function (t) {
          return !!t.node && li(t.node);
        })) || void 0 === e
        ? void 0
        : e.node;
  }
  var Zo,
    Ko = 5 * Gt,
    Wo = Gt;
  function Xo() {
    return ti(Gr.LAYOUT_SHIFT) && "WeakRef" in window;
  }
  var Yo = 0,
    Jo = 1 / 0,
    $o = 0;
  var Qo,
    ta = function () {
      return Zo ? Yo : window.performance.interactionCount || 0;
    },
    ea = 10,
    na = 1 * Zt;
  function ra(t, e, n) {
    if (
      !(
        ti(Gr.EVENT) &&
        window.PerformanceEventTiming &&
        "interactionId" in PerformanceEventTiming.prototype
      )
    )
      return {
        getInteractionToNextPaint: function () {},
        setViewEnd: L,
        stop: L,
      };
    var r,
      i,
      o = (function (t) {
        "interactionCount" in performance ||
          Zo ||
          (Zo = new window.PerformanceObserver(
            p(function (t) {
              t.getEntries().forEach(function (t) {
                var e = t;
                e.interactionId &&
                  ((Jo = Math.min(Jo, e.interactionId)),
                  ($o = Math.max($o, e.interactionId)),
                  (Yo = ($o - Jo) / 7 + 1));
              });
            })
          )).observe({ type: "event", buffered: !0, durationThreshold: 0 });
        var e = "initial_load" === t ? 0 : ta(),
          n = { stopped: !1 };
        function r() {
          return ta() - e;
        }
        return {
          getViewInteractionCount: function () {
            return n.stopped ? n.interactionCount : r();
          },
          stopViewInteractionCount: function () {
            n = { stopped: !0, interactionCount: r() };
          },
        };
      })(n),
      a = o.getViewInteractionCount,
      s = o.stopViewInteractionCount,
      u = 1 / 0,
      c = (function (t) {
        var e = [];
        function n() {
          e.sort(function (t, e) {
            return e.duration - t.duration;
          }).splice(ea);
        }
        return {
          process: function (t) {
            var r = e.findIndex(function (e) {
                return t.interactionId === e.interactionId;
              }),
              i = e[e.length - 1];
            -1 !== r
              ? t.duration > e[r].duration && ((e[r] = t), n())
              : (e.length < ea || t.duration > i.duration) && (e.push(t), n());
          },
          estimateP98Interaction: function () {
            var n = Math.min(e.length - 1, Math.floor(t() / 50));
            return e[n];
          },
        };
      })(a),
      l = -1;
    function d(n) {
      for (var o = 0, a = n; o < a.length; o++) {
        var s = a[o];
        s.interactionId && s.startTime >= e && s.startTime <= u && c.process(s);
      }
      var d = c.estimateP98Interaction();
      d &&
        d.duration !== l &&
        ((l = d.duration),
        (i = re(e, d.startTime)),
        (r =
          d.target && li(d.target)
            ? Ki(d.target, t.actionNameAttribute)
            : void 0));
    }
    var f = Qr(t, { type: Gr.FIRST_INPUT, buffered: !0 }).subscribe(d),
      v = Qr(t, {
        type: Gr.EVENT,
        durationThreshold: 40,
        buffered: !0,
      }).subscribe(d);
    return {
      getInteractionToNextPaint: function () {
        return l >= 0
          ? { value: Math.min(l, na), targetSelector: r, time: i }
          : a()
          ? { value: 0 }
          : void 0;
      },
      setViewEnd: function (t) {
        (u = t), s();
      },
      stop: function () {
        v.unsubscribe(), f.unsubscribe();
      },
    };
  }
  function ia() {
    var t,
      e = window.visualViewport;
    return (
      (t = e
        ? e.pageLeft - e.offsetLeft
        : void 0 !== window.scrollX
        ? window.scrollX
        : window.pageXOffset || 0),
      Math.round(t)
    );
  }
  function oa() {
    var t,
      e = window.visualViewport;
    return (
      (t = e
        ? e.pageTop - e.offsetTop
        : void 0 !== window.scrollY
        ? window.scrollY
        : window.pageYOffset || 0),
      Math.round(t)
    );
  }
  function aa(t) {
    return (
      Qo ||
        (Qo = (function (t) {
          return new et(function (e) {
            var n = M(function () {
              e.notify(sa());
            }, 200).throttled;
            return ot(t, window, "resize", n, {
              capture: !0,
              passive: !0,
            }).stop;
          });
        })(t)),
      Qo
    );
  }
  function sa() {
    var t = window.visualViewport;
    return t
      ? { width: Number(t.width * t.scale), height: Number(t.height * t.scale) }
      : {
          width: Number(window.innerWidth || 0),
          height: Number(window.innerHeight || 0),
        };
  }
  var ua = Gt;
  function ca(t, e, n, r) {
    void 0 === r &&
      (r = (function (t, e) {
        void 0 === e && (e = ua);
        return new et(function (n) {
          function r() {
            var t, e, r, i;
            n.notify(
              ((t = oa()),
              (e = sa().height),
              (r = Math.round(
                (document.scrollingElement || document.documentElement)
                  .scrollHeight
              )),
              (i = Math.round(e + t)),
              { scrollHeight: r, scrollDepth: i, scrollTop: t })
            );
          }
          if (window.ResizeObserver) {
            var i = M(r, e, { leading: !1, trailing: !0 }),
              o = document.scrollingElement || document.documentElement,
              a = new ResizeObserver(p(i.throttled));
            a.observe(o);
            var s = ot(t, window, "scroll", i.throttled, { passive: !0 });
            return function () {
              i.cancel(), a.unobserve(o), s.stop();
            };
          }
        });
      })(t));
    var i = 0,
      o = 0,
      a = 0,
      s = r.subscribe(function (t) {
        var r = t.scrollDepth,
          s = t.scrollTop,
          u = t.scrollHeight,
          c = !1;
        if ((r > i && ((i = r), (c = !0)), u > o)) {
          o = u;
          var l = te();
          (a = re(e.relative, l)), (c = !0);
        }
        c &&
          n({
            maxDepth: Math.min(i, o),
            maxDepthScrollTop: s,
            maxScrollHeight: o,
            maxScrollHeightTime: a,
          });
      });
    return {
      stop: function () {
        return s.unsubscribe();
      },
    };
  }
  function la(t, e, n, r, i, o) {
    var a = {},
      s = (function (t, e, n, r, i, o) {
        var a = "initial_load" === r,
          s = !0,
          u = [],
          c = Ho(n);
        function l() {
          if (!s && !a && u.length > 0) {
            var t = Math.max.apply(Math, u);
            t < c.timeStamp && o(t);
          }
        }
        var d = ri(t, e, n, function (t) {
          s && ((s = !1), t.hadActivity && u.push(re(i.timeStamp, t.end)), l());
        }).stop;
        return {
          stop: function () {
            d(), c.stop();
          },
          setLoadEvent: function (t) {
            a && ((a = !1), u.push(t), l());
          },
        };
      })(t, e, n, i, o, function (t) {
        (a.loadingTime = t), r();
      }),
      u = s.stop,
      c = s.setLoadEvent,
      l = ca(n, o, function (t) {
        a.scroll = t;
      }).stop,
      d = jo(n, o.relative, function (t) {
        (a.cumulativeLayoutShift = t), r();
      }).stop,
      f = ra(n, o.relative, i),
      p = f.stop,
      v = f.getInteractionToNextPaint;
    return {
      stop: function () {
        u(), d(), l();
      },
      stopINPTracking: p,
      setLoadEvent: c,
      setViewEnd: f.setViewEnd,
      getCommonViewMetrics: function () {
        return (a.interactionToNextPaint = v()), a;
      },
    };
  }
  var da = 3e3,
    fa = 5 * Zt,
    pa = 5 * Zt;
  function va(t, e, n, r, o, a, s) {
    var u,
      c = new Set(),
      l = d("initial_load", ne(), s);
    function d(o, a, s) {
      var u = (function (t, e, n, r, o, a, s) {
        void 0 === a && (a = ee());
        var u,
          c,
          l,
          d,
          f,
          p = xe(),
          v = new et(),
          h = {},
          m = 0,
          g = U(r),
          _ = rt(),
          y = !0;
        s &&
          ((c = s.name),
          (l = s.service || void 0),
          (d = s.version || void 0),
          s.context && ((f = s.context), _.setContext(f)));
        var b = {
          id: p,
          name: c,
          startClocks: a,
          service: l,
          version: d,
          context: f,
        };
        t.notify(1, b), t.notify(2, b);
        var w = M(q, da, { leading: !1 }),
          S = w.throttled,
          k = w.cancel,
          x = la(t, e, n, S, o, a),
          C = x.setLoadEvent,
          E = x.setViewEnd,
          T = x.stop,
          A = x.stopINPTracking,
          I = x.getCommonViewMetrics,
          D =
            "initial_load" === o
              ? qo(n, C, S)
              : { stop: L, initialViewMetrics: {} },
          P = D.stop,
          z = D.initialViewMetrics,
          V = (function (t, e, n) {
            var r = Jr({
              lifeCycle: t,
              isChildEvent: function (t) {
                return t.view.id === e;
              },
              onChange: n,
            });
            return { stop: r.stop, eventCounts: r.eventCounts };
          })(t, p, S),
          F = V.stop,
          B = V.eventCounts,
          H = N(q, fa);
        function q() {
          k(), (m += 1);
          var e = void 0 === u ? Qt() : u.timeStamp;
          t.notify(3, {
            customTimings: h,
            documentVersion: m,
            id: p,
            name: c,
            service: l,
            version: d,
            context: _.getContext(),
            loadingType: o,
            location: g,
            startClocks: a,
            commonViewMetrics: I(),
            initialViewMetrics: z,
            duration: re(a.timeStamp, e),
            isActive: void 0 === u,
            sessionIsActive: y,
            eventCounts: B,
          });
        }
        return (
          q(),
          _.changeObservable.subscribe(q),
          {
            get name() {
              return c;
            },
            service: l,
            version: d,
            contextManager: _,
            stopObservable: v,
            end: function (e) {
              var n,
                r,
                i = this;
              void 0 === e && (e = {}),
                u ||
                  ((u = null !== (n = e.endClocks) && void 0 !== n ? n : ee()),
                  (y = null === (r = e.sessionIsActive) || void 0 === r || r),
                  t.notify(4, { endClocks: u }),
                  t.notify(5, { endClocks: u }),
                  O(H),
                  E(u.relative),
                  T(),
                  q(),
                  R(function () {
                    i.stop();
                  }, pa));
            },
            stop: function () {
              P(), F(), A(), v.notify();
            },
            addTiming: function (t, e) {
              if (!u) {
                var n = (function (t) {
                  return t < Wt;
                })(e)
                  ? e
                  : re(a.timeStamp, e);
                (h[
                  (function (t) {
                    var e = t.replace(/[^a-zA-Z0-9-_.@$]/g, "_");
                    e !== t &&
                      i.warn(
                        "Invalid timing name: "
                          .concat(t, ", sanitized to: ")
                          .concat(e)
                      );
                    return e;
                  })(t)
                ] = n),
                  S();
              }
            },
            updateViewName: function (t) {
              Lt(Tt.UPDATE_VIEW_NAME) && ((c = t), q());
            },
          }
        );
      })(e, n, r, t, o, a, s);
      return (
        c.add(u),
        u.stopObservable.subscribe(function () {
          c.delete(u);
        }),
        u
      );
    }
    return (
      e.subscribe(9, function () {
        l = d("route_change", void 0, {
          name: l.name,
          service: l.service,
          version: l.version,
          context: l.contextManager.getContext(),
        });
      }),
      e.subscribe(8, function () {
        l.end({ sessionIsActive: !1 });
      }),
      e.subscribe(10, function (t) {
        t.reason === ir.UNLOADING && l.end();
      }),
      a &&
        (u = (function (t) {
          return t.subscribe(function (t) {
            var e,
              n,
              r,
              i,
              o = t.oldLocation,
              a = t.newLocation;
            (n = a),
              ((e = o).pathname === n.pathname &&
                ((r = n.hash),
                ("" !== (i = r.substring(1)) && document.getElementById(i)) ||
                  ha(n.hash) === ha(e.hash))) ||
                (l.end(), (l = d("route_change")));
          });
        })(o)),
      {
        addTiming: function (t, e) {
          void 0 === e && (e = Qt()), l.addTiming(t, e);
        },
        startView: function (t, e) {
          l.end({ endClocks: e }), (l = d("route_change", e, t));
        },
        setViewContext: function (t) {
          l.contextManager.setContext(t);
        },
        setViewContextProperty: function (t, e) {
          l.contextManager.setContextProperty(t, e);
        },
        updateViewName: function (t) {
          l.updateViewName(t);
        },
        stop: function () {
          u && u.unsubscribe(),
            l.end(),
            c.forEach(function (t) {
              return t.stop();
            });
        },
      }
    );
  }
  function ha(t) {
    var e = t.indexOf("?");
    return e < 0 ? t : t.slice(0, e);
  }
  function ma(t, e, n, r, i, o, a, s, u) {
    return (
      t.subscribe(3, function (n) {
        return t.notify(
          11,
          (function (t, e, n, r, i) {
            var o,
              a,
              s,
              u,
              c,
              l,
              d,
              f,
              p,
              v,
              h,
              m,
              g,
              _,
              y,
              b,
              w = r.getReplayStats(t.id),
              S = n.findFeatureFlagEvaluations(t.startClocks.relative),
              k = i.findAll(t.startClocks.relative, t.duration),
              x = {
                _dd: {
                  document_version: t.documentVersion,
                  replay_stats: w,
                  page_states: k,
                  configuration: {
                    start_session_replay_recording_manually:
                      e.startSessionReplayRecordingManually,
                  },
                },
                date: t.startClocks.timeStamp,
                type: "view",
                view: {
                  action: { count: t.eventCounts.actionCount },
                  frustration: { count: t.eventCounts.frustrationCount },
                  cumulative_layout_shift:
                    null === (o = t.commonViewMetrics.cumulativeLayoutShift) ||
                    void 0 === o
                      ? void 0
                      : o.value,
                  cumulative_layout_shift_time: Jt(
                    null === (a = t.commonViewMetrics.cumulativeLayoutShift) ||
                      void 0 === a
                      ? void 0
                      : a.time
                  ),
                  cumulative_layout_shift_target_selector:
                    null === (s = t.commonViewMetrics.cumulativeLayoutShift) ||
                    void 0 === s
                      ? void 0
                      : s.targetSelector,
                  first_byte: Jt(
                    null === (u = t.initialViewMetrics.navigationTimings) ||
                      void 0 === u
                      ? void 0
                      : u.firstByte
                  ),
                  dom_complete: Jt(
                    null === (c = t.initialViewMetrics.navigationTimings) ||
                      void 0 === c
                      ? void 0
                      : c.domComplete
                  ),
                  dom_content_loaded: Jt(
                    null === (l = t.initialViewMetrics.navigationTimings) ||
                      void 0 === l
                      ? void 0
                      : l.domContentLoaded
                  ),
                  dom_interactive: Jt(
                    null === (d = t.initialViewMetrics.navigationTimings) ||
                      void 0 === d
                      ? void 0
                      : d.domInteractive
                  ),
                  error: { count: t.eventCounts.errorCount },
                  first_contentful_paint: Jt(
                    t.initialViewMetrics.firstContentfulPaint
                  ),
                  first_input_delay: Jt(
                    null === (f = t.initialViewMetrics.firstInput) ||
                      void 0 === f
                      ? void 0
                      : f.delay
                  ),
                  first_input_time: Jt(
                    null === (p = t.initialViewMetrics.firstInput) ||
                      void 0 === p
                      ? void 0
                      : p.time
                  ),
                  first_input_target_selector:
                    null === (v = t.initialViewMetrics.firstInput) ||
                    void 0 === v
                      ? void 0
                      : v.targetSelector,
                  interaction_to_next_paint: Jt(
                    null === (h = t.commonViewMetrics.interactionToNextPaint) ||
                      void 0 === h
                      ? void 0
                      : h.value
                  ),
                  interaction_to_next_paint_time: Jt(
                    null === (m = t.commonViewMetrics.interactionToNextPaint) ||
                      void 0 === m
                      ? void 0
                      : m.time
                  ),
                  interaction_to_next_paint_target_selector:
                    null === (g = t.commonViewMetrics.interactionToNextPaint) ||
                    void 0 === g
                      ? void 0
                      : g.targetSelector,
                  is_active: t.isActive,
                  name: t.name,
                  largest_contentful_paint: Jt(
                    null ===
                      (_ = t.initialViewMetrics.largestContentfulPaint) ||
                      void 0 === _
                      ? void 0
                      : _.value
                  ),
                  largest_contentful_paint_target_selector:
                    null ===
                      (y = t.initialViewMetrics.largestContentfulPaint) ||
                    void 0 === y
                      ? void 0
                      : y.targetSelector,
                  load_event: Jt(
                    null === (b = t.initialViewMetrics.navigationTimings) ||
                      void 0 === b
                      ? void 0
                      : b.loadEvent
                  ),
                  loading_time: Yr(Jt(t.commonViewMetrics.loadingTime)),
                  loading_type: t.loadingType,
                  long_task: { count: t.eventCounts.longTaskCount },
                  resource: { count: t.eventCounts.resourceCount },
                  time_spent: Jt(t.duration),
                },
                feature_flags: S && !V(S) ? S : void 0,
                display: t.commonViewMetrics.scroll
                  ? {
                      scroll: {
                        max_depth: t.commonViewMetrics.scroll.maxDepth,
                        max_depth_scroll_top:
                          t.commonViewMetrics.scroll.maxDepthScrollTop,
                        max_scroll_height:
                          t.commonViewMetrics.scroll.maxScrollHeight,
                        max_scroll_height_time: Jt(
                          t.commonViewMetrics.scroll.maxScrollHeightTime
                        ),
                      },
                    }
                  : void 0,
                session: {
                  has_replay: !!w || void 0,
                  is_active: !!t.sessionIsActive && void 0,
                },
                privacy: { replay_level: e.defaultPrivacyLevel },
              };
            V(t.customTimings) ||
              (x.view.custom_timings = (function (t, e) {
                for (var n = {}, r = 0, i = Object.keys(t); r < i.length; r++) {
                  var o = i[r];
                  n[o] = e(t[o]);
                }
                return n;
              })(t.customTimings, Jt));
            return {
              rawRumEvent: x,
              startTime: t.startClocks.relative,
              domainContext: { location: t.location },
            };
          })(n, e, o, s, a)
        );
      }),
      va(n, t, r, e, i, !e.trackViewsManually, u)
    );
  }
  var ga = Zt,
    _a = en,
    ya = [];
  function ba(t, e, n, r) {
    var i = new et(),
      o = new et(),
      a = Dn(t.sessionStoreStrategyType, e, n);
    ya.push(function () {
      return a.stop();
    });
    var s = Sr({ expireDelay: _a });
    function u() {
      return {
        id: a.getSession().id,
        trackingType: a.getSession()[e],
        isReplayForced: !!a.getSession().forcedReplay,
      };
    }
    return (
      ya.push(function () {
        return s.stop();
      }),
      a.renewObservable.subscribe(function () {
        s.add(u(), te()), i.notify();
      }),
      a.expireObservable.subscribe(function () {
        o.notify(), s.closeActive(te());
      }),
      a.expandOrRenewSession(),
      s.add(u(), ne().relative),
      r.observable.subscribe(function () {
        r.isGranted() ? a.expandOrRenewSession() : a.expire();
      }),
      (function (t, e) {
        var n = at(t, window, ["click", "touchstart", "keydown", "scroll"], e, {
          capture: !0,
          passive: !0,
        }).stop;
        ya.push(n);
      })(t, function () {
        r.isGranted() && a.expandOrRenewSession();
      }),
      (function (t, e) {
        var n = function () {
            "visible" === document.visibilityState && e();
          },
          r = ot(t, document, "visibilitychange", n).stop;
        ya.push(r);
        var i = N(n, ga);
        ya.push(function () {
          O(i);
        });
      })(t, function () {
        return a.expandSession();
      }),
      (function (t, e) {
        var n = ot(t, window, "resume", e, { capture: !0 }).stop;
        ya.push(n);
      })(t, function () {
        return a.restartSession();
      }),
      {
        findSession: function (t, e) {
          return s.find(t, e);
        },
        renewObservable: i,
        expireObservable: o,
        sessionStateUpdateObservable: a.sessionStateUpdateObservable,
        expire: a.expire,
        updateSessionState: a.updateSessionState,
      }
    );
  }
  var wa = "rum";
  function Sa(t, e, n) {
    var r = ba(
      t,
      wa,
      function (e) {
        return (function (t, e) {
          var n;
          n = (function (t) {
            return "0" === t || "1" === t || "2" === t;
          })(e)
            ? e
            : Bt(t.sessionSampleRate)
            ? Bt(t.sessionReplaySampleRate)
              ? "1"
              : "2"
            : "0";
          return { trackingType: n, isTracked: ka(n) };
        })(t, e);
      },
      n
    );
    return (
      r.expireObservable.subscribe(function () {
        e.notify(8);
      }),
      r.renewObservable.subscribe(function () {
        e.notify(9);
      }),
      r.sessionStateUpdateObservable.subscribe(function (t) {
        var e = t.previousState,
          n = t.newState;
        if (!e.forcedReplay && n.forcedReplay) {
          var i = r.findSession();
          i && (i.isReplayForced = !0);
        }
      }),
      {
        findTrackedSession: function (t) {
          var e = r.findSession(t);
          if (e && ka(e.trackingType))
            return {
              id: e.id,
              sessionReplay:
                "1" === e.trackingType ? 1 : e.isReplayForced ? 2 : 0,
            };
        },
        expire: r.expire,
        expireObservable: r.expireObservable,
        setForcedReplay: function () {
          return r.updateSessionState({ forcedReplay: "1" });
        },
      }
    );
  }
  function ka(t) {
    return "2" === t || "1" === t;
  }
  function xa(t) {
    var e = t.encoder,
      n = t.request,
      r = t.flushController,
      o = t.messageBytesLimit,
      u = {},
      c = r.flushObservable.subscribe(function (t) {
        return (function (t) {
          var r = y(u).join("\n");
          u = {};
          var i = or(t.reason),
            o = i ? n.sendOnExit : n.send;
          if (i && e.isAsync) {
            var a = e.finishSync();
            a.outputBytesCount && o(Ca(a));
            var s = [a.pendingData, r].filter(Boolean).join("\n");
            s && o({ data: s, bytesCount: T(s) });
          } else
            r && e.write(e.isEmpty ? r : "\n".concat(r)),
              e.finish(function (t) {
                o(Ca(t));
              });
        })(t);
      });
    function l(t, n) {
      var c = D(t),
        l = e.estimateEncodedBytesCount(c);
      l >= o
        ? i.warn(
            "Discarded a message whose size was bigger than the maximum allowed size "
              .concat(o, "KB. ")
              .concat(s, " ")
              .concat(a, "/#technical-limitations")
          )
        : ((function (t) {
            return void 0 !== t && void 0 !== u[t];
          })(n) &&
            (function (t) {
              var n = u[t];
              delete u[t];
              var i = e.estimateEncodedBytesCount(n);
              r.notifyAfterRemoveMessage(i);
            })(n),
          (function (t, n, i) {
            r.notifyBeforeAddMessage(n),
              void 0 !== i
                ? ((u[i] = t), r.notifyAfterAddMessage())
                : e.write(e.isEmpty ? t : "\n".concat(t), function (t) {
                    r.notifyAfterAddMessage(t - n);
                  });
          })(c, l, n));
    }
    return { flushController: r, add: l, upsert: l, stop: c.unsubscribe };
  }
  function Ca(t) {
    return {
      data:
        "string" == typeof t.output
          ? t.output
          : new Blob([t.output], { type: "text/plain" }),
      bytesCount: t.outputBytesCount,
      encoding: t.encoding,
    };
  }
  var Ea = 80 * x,
    Ta = 32,
    Aa = 3 * C,
    Ra = Zt,
    Ia = Gt;
  function Na(t, e, n, r, i) {
    0 === e.transportStatus &&
    0 === e.queuedPayloads.size() &&
    e.bandwidthMonitor.canHandle(t)
      ? Ma(t, e, n, {
          onSuccess: function () {
            return La(0, e, n, r, i);
          },
          onFailure: function () {
            e.queuedPayloads.enqueue(t), Oa(e, n, r, i);
          },
        })
      : e.queuedPayloads.enqueue(t);
  }
  function Oa(t, e, n, r) {
    2 === t.transportStatus &&
      R(function () {
        Ma(t.queuedPayloads.first(), t, e, {
          onSuccess: function () {
            t.queuedPayloads.dequeue(),
              (t.currentBackoffTime = Ia),
              La(1, t, e, n, r);
          },
          onFailure: function () {
            (t.currentBackoffTime = Math.min(Ra, 2 * t.currentBackoffTime)),
              Oa(t, e, n, r);
          },
        });
      }, t.currentBackoffTime);
  }
  function Ma(t, e, n, r) {
    var i = r.onSuccess,
      o = r.onFailure;
    e.bandwidthMonitor.add(t),
      n(t, function (n) {
        e.bandwidthMonitor.remove(t),
          !(function (t) {
            return (
              "opaque" !== t.type &&
              ((0 === t.status && !navigator.onLine) ||
                408 === t.status ||
                429 === t.status ||
                ((e = t.status), e >= 500))
            );
            var e;
          })(n)
            ? ((e.transportStatus = 0), i())
            : ((e.transportStatus =
                e.bandwidthMonitor.ongoingRequestCount > 0 ? 1 : 2),
              (t.retry = {
                count: t.retry ? t.retry.count + 1 : 1,
                lastFailureStatus: n.status,
              }),
              o());
      });
  }
  function La(t, e, n, r, i) {
    0 === t &&
      e.queuedPayloads.isFull() &&
      !e.queueFullReported &&
      (i({
        message: "Reached max "
          .concat(r, " events size queued for upload: ")
          .concat(Aa / C, "MiB"),
        source: sr.AGENT,
        startClocks: ee(),
      }),
      (e.queueFullReported = !0));
    var o = e.queuedPayloads;
    for (e.queuedPayloads = Da(); o.size() > 0; ) Na(o.dequeue(), e, n, r, i);
  }
  function Da() {
    var t = [];
    return {
      bytesCount: 0,
      enqueue: function (e) {
        this.isFull() || (t.push(e), (this.bytesCount += e.bytesCount));
      },
      first: function () {
        return t[0];
      },
      dequeue: function () {
        var e = t.shift();
        return e && (this.bytesCount -= e.bytesCount), e;
      },
      size: function () {
        return t.length;
      },
      isFull: function () {
        return this.bytesCount >= Aa;
      },
    };
  }
  function Pa(t, e, n, r) {
    var i = {
        transportStatus: 0,
        currentBackoffTime: Ia,
        bandwidthMonitor: {
          ongoingRequestCount: 0,
          ongoingByteCount: 0,
          canHandle: function (t) {
            return (
              0 === this.ongoingRequestCount ||
              (this.ongoingByteCount + t.bytesCount <= Ea &&
                this.ongoingRequestCount < Ta)
            );
          },
          add: function (t) {
            (this.ongoingRequestCount += 1),
              (this.ongoingByteCount += t.bytesCount);
          },
          remove: function (t) {
            (this.ongoingRequestCount -= 1),
              (this.ongoingByteCount -= t.bytesCount);
          },
        },
        queuedPayloads: Da(),
        queueFullReported: !1,
      },
      o = function (r, i) {
        return (function (t, e, n, r, i) {
          var o =
            (function () {
              try {
                return window.Request && "keepalive" in new Request("http://a");
              } catch (t) {
                return !1;
              }
            })() && r.bytesCount < n;
          if (o) {
            var a = e.build("fetch", r);
            fetch(a, {
              method: "POST",
              body: r.data,
              keepalive: !0,
              mode: "cors",
            }).then(
              p(function (t) {
                return null == i
                  ? void 0
                  : i({ status: t.status, type: t.type });
              }),
              p(function () {
                var n = e.build("xhr", r);
                za(t, n, r.data, i);
              })
            );
          } else {
            var s = e.build("xhr", r);
            za(t, s, r.data, i);
          }
        })(t, e, n, r, i);
      };
    return {
      send: function (t) {
        Na(t, i, o, e.trackType, r);
      },
      sendOnExit: function (r) {
        !(function (t, e, n, r) {
          var i = !!navigator.sendBeacon && r.bytesCount < n;
          if (i)
            try {
              var o = e.build("beacon", r);
              if (navigator.sendBeacon(o, r.data)) return;
            } catch (t) {
              !(function (t) {
                Ua || ((Ua = !0), ye(t));
              })(t);
            }
          var a = e.build("xhr", r);
          za(t, a, r.data);
        })(t, e, n, r);
      },
    };
  }
  var Ua = !1;
  function za(t, e, n, r) {
    var i = new XMLHttpRequest();
    i.open("POST", e, !0),
      n instanceof Blob && i.setRequestHeader("Content-Type", n.type),
      ot(
        t,
        i,
        "loadend",
        function () {
          null == r || r({ status: i.status });
        },
        { once: !0 }
      ),
      i.send(n);
  }
  function Va(t) {
    var e,
      n = t.messagesLimit,
      r = t.bytesLimit,
      i = t.durationLimit,
      o = t.pageExitObservable,
      a = t.sessionExpireObservable,
      s = o.subscribe(function (t) {
        return f(t.reason);
      }),
      u = a.subscribe(function () {
        return f("session_expire");
      }),
      c = new et(function () {
        return function () {
          s.unsubscribe(), u.unsubscribe();
        };
      }),
      l = 0,
      d = 0;
    function f(t) {
      if (0 !== d) {
        var e = d,
          n = l;
        (d = 0),
          (l = 0),
          p(),
          c.notify({ reason: t, messagesCount: e, bytesCount: n });
      }
    }
    function p() {
      I(e), (e = void 0);
    }
    return {
      flushObservable: c,
      get messagesCount() {
        return d;
      },
      notifyBeforeAddMessage: function (t) {
        l + t >= r && f("bytes_limit"),
          (d += 1),
          (l += t),
          void 0 === e &&
            (e = R(function () {
              f("duration_limit");
            }, i));
      },
      notifyAfterAddMessage: function (t) {
        void 0 === t && (t = 0),
          (l += t),
          d >= n ? f("messages_limit") : l >= r && f("bytes_limit");
      },
      notifyAfterRemoveMessage: function (t) {
        (l -= t), 0 === (d -= 1) && p();
      },
    };
  }
  function Fa(t, e, n, r, i, o, a) {
    var s = t.replica,
      u = (function (t, e, n, r, i, o, a) {
        void 0 === a && (a = xa);
        var s = c(t, e),
          u = n && c(t, n);
        function c(t, e) {
          var n = e.endpoint,
            s = e.encoder;
          return a({
            encoder: s,
            request: Pa(t, n, t.batchBytesLimit, r),
            flushController: Va({
              messagesLimit: t.batchMessagesLimit,
              bytesLimit: t.batchBytesLimit,
              durationLimit: t.flushTimeout,
              pageExitObservable: i,
              sessionExpireObservable: o,
            }),
            messageBytesLimit: t.messageBytesLimit,
          });
        }
        return {
          flushObservable: s.flushController.flushObservable,
          add: function (t, e) {
            void 0 === e && (e = !0),
              s.add(t),
              u && e && u.add(n.transformMessage ? n.transformMessage(t) : t);
          },
          upsert: function (t, e) {
            s.upsert(t, e),
              u && u.upsert(n.transformMessage ? n.transformMessage(t) : t, e);
          },
          stop: function () {
            s.stop(), u && u.stop();
          },
        };
      })(
        t,
        { endpoint: t.rumEndpointBuilder, encoder: a(2) },
        s && {
          endpoint: s.rumEndpointBuilder,
          transformMessage: function (t) {
            return W(t, { application: { id: s.applicationId } });
          },
          encoder: a(3),
        },
        r,
        i,
        o
      );
    return (
      e.subscribe(12, function (t) {
        "view" === t.type ? u.upsert(t, t.view.id) : u.add(t);
      }),
      n.subscribe(function (e) {
        return u.add(
          e,
          (function (t) {
            return t.site === Pt;
          })(t)
        );
      }),
      u
    );
  }
  var Ba = en;
  function Ha(t, e) {
    var n = U(e);
    return new et(function (r) {
      var i = (function (t, e) {
          var n = Le(qa("pushState"), "pushState", function (t) {
              (0, t.onPostCall)(e);
            }).stop,
            r = Le(qa("replaceState"), "replaceState", function (t) {
              (0, t.onPostCall)(e);
            }).stop,
            i = ot(t, window, "popstate", e).stop;
          return {
            stop: function () {
              n(), r(), i();
            },
          };
        })(t, a).stop,
        o = (function (t, e) {
          return ot(t, window, "hashchange", e);
        })(t, a).stop;
      function a() {
        if (n.href !== e.href) {
          var t = U(e);
          r.notify({ newLocation: t, oldLocation: n }), (n = t);
        }
      }
      return function () {
        i(), o();
      };
    });
  }
  function qa(t) {
    return Object.prototype.hasOwnProperty.call(history, t)
      ? history
      : History.prototype;
  }
  var ja = en;
  var Ga,
    Za,
    Ka,
    Wa = 10 * Gt;
  function Xa() {
    0 !== Ga.batchCount && (_e("Customer data measures", Ga), $a());
  }
  function Ya(t, e) {
    (t.sum += e), (t.min = Math.min(t.min, e)), (t.max = Math.max(t.max, e));
  }
  function Ja(t, e) {
    (t.sum += e.sum),
      (t.min = Math.min(t.min, e.min)),
      (t.max = Math.max(t.max, e.max));
  }
  function $a() {
    Ga = {
      batchCount: 0,
      batchBytesCount: { min: 1 / 0, max: 0, sum: 0 },
      batchMessagesCount: { min: 1 / 0, max: 0, sum: 0 },
      globalContextBytes: { min: 1 / 0, max: 0, sum: 0 },
      userContextBytes: { min: 1 / 0, max: 0, sum: 0 },
      featureFlagBytes: { min: 1 / 0, max: 0, sum: 0 },
    };
  }
  function Qa() {
    (Ka = !1),
      (Za = {
        globalContextBytes: { min: 1 / 0, max: 0, sum: 0 },
        userContextBytes: { min: 1 / 0, max: 0, sum: 0 },
        featureFlagBytes: { min: 1 / 0, max: 0, sum: 0 },
      });
  }
  var ts = 4e3,
    es = 500,
    ns = en;
  function rs(t, e) {
    void 0 === e && (e = es);
    var n,
      r = Sr({ expireDelay: ns, maxEntries: ts });
    o(is(), te());
    var i = at(
      t,
      window,
      [
        "pageshow",
        "focus",
        "blur",
        "visibilitychange",
        "resume",
        "freeze",
        "pagehide",
      ],
      function (t) {
        o(
          (function (t) {
            if ("freeze" === t.type) return "frozen";
            if ("pagehide" === t.type)
              return t.persisted ? "frozen" : "terminated";
            return is();
          })(t),
          t.timeStamp
        );
      },
      { capture: !0 }
    ).stop;
    function o(t, e) {
      void 0 === e && (e = te()),
        t !== n &&
          ((n = t), r.closeActive(e), r.add({ state: n, startTime: e }, e));
    }
    var a = {
      findAll: function (t, n) {
        var i = r.findAll(t, n);
        if (0 !== i.length) {
          for (
            var o = [], a = Math.max(0, i.length - e), s = i.length - 1;
            s >= a;
            s--
          ) {
            var u = i[s],
              c = re(t, u.startTime);
            o.push({ state: u.state, start: Jt(c) });
          }
          return o;
        }
      },
      wasInPageStateAt: function (t, e) {
        return a.wasInPageStateDuringPeriod(t, e, 0);
      },
      wasInPageStateDuringPeriod: function (t, e, n) {
        return r.findAll(e, n).some(function (e) {
          return e.state === t;
        });
      },
      addPageState: o,
      stop: function () {
        i(), r.stop();
      },
    };
    return a;
  }
  function is() {
    return "hidden" === document.visibilityState
      ? "hidden"
      : document.hasFocus()
      ? "active"
      : "passive";
  }
  function os(t, e) {
    var n = window.cookieStore
      ? (function (t) {
          return function (e, n) {
            return ot(t, window.cookieStore, "change", function (t) {
              var r =
                _(t.changed, function (t) {
                  return t.name === e;
                }) ||
                _(t.deleted, function (t) {
                  return t.name === e;
                });
              r && n(r.value);
            }).stop;
          };
        })(t)
      : ss;
    return new et(function (t) {
      return n(e, function (e) {
        return t.notify(e);
      });
    });
  }
  var as = Gt;
  function ss(t, e) {
    var n = Ee(document.cookie, t),
      r = N(function () {
        var r = Ee(document.cookie, t);
        r !== n && e(r);
      }, as);
    return function () {
      O(r);
    };
  }
  var us = "datadog-ci-visibility-test-execution-id";
  function cs(t, e) {
    var n = e.session,
      r = e.viewContext,
      i = e.errorType,
      o = n ? n.id : "no-session-id",
      a = [];
    void 0 !== i && a.push("error-type=".concat(i)),
      r &&
        (a.push("seed=".concat(r.id)),
        a.push("from=".concat(r.startClocks.timeStamp)));
    var s,
      u,
      c,
      l =
        ((u = (s = t).site),
        (c =
          s.subdomain ||
          (function (t) {
            switch (t.site) {
              case zt:
              case Vt:
                return "app";
              case Pt:
                return "dd";
              default:
                return;
            }
          })(s)),
        "https://".concat(c ? "".concat(c, ".") : "").concat(u)),
      d = "/rum/replay/sessions/".concat(o);
    return "".concat(l).concat(d, "?").concat(a.join("&"));
  }
  var ls,
    ds = 10;
  function fs(t) {
    return ps(t).segments_count;
  }
  function ps(t) {
    var e;
    return (
      ls || (ls = new Map()),
      ls.has(t)
        ? (e = ls.get(t))
        : ((e = {
            records_count: 0,
            segments_count: 0,
            segments_total_raw_size: 0,
          }),
          ls.set(t, e),
          ls.size > ds &&
            (function () {
              if (!ls) return;
              if (ls.keys) {
                var t = ls.keys().next().value;
                t && ls.delete(t);
              } else {
                var e = !0;
                ls.forEach(function (t, n) {
                  e && (ls.delete(n), (e = !1));
                });
              }
            })()),
      e
    );
  }
  var vs = new WeakMap();
  function hs(t) {
    return vs.has(t);
  }
  function ms(t) {
    return vs.get(t);
  }
  function gs(t, e) {
    var n = t.tagName,
      r = t.value;
    if (Ci(t, e)) {
      var i = t.type;
      if ("INPUT" === n && ("button" === i || "submit" === i || "reset" === i))
        return r;
      if (!r || "OPTION" === n) return;
      return yi;
    }
    return "OPTION" === n || "SELECT" === n
      ? t.value
      : "INPUT" === n || "TEXTAREA" === n
      ? r
      : void 0;
  }
  var _s = /url\((?:(')([^']*)'|(")([^"]*)"|([^)]*))\)/gm,
    ys = /^[A-Za-z]+:|^\/\//,
    bs = /^data:.*,/i;
  function ws(t, e) {
    return t.replace(_s, function (t, n, r, i, o, a) {
      var s = r || o || a;
      if (!e || !s || ys.test(s) || bs.test(s)) return t;
      var u = n || i || "";
      return "url("
        .concat(u)
        .concat(
          (function (t, e) {
            try {
              return Ue(t, e).href;
            } catch (e) {
              return t;
            }
          })(s, e)
        )
        .concat(u, ")");
    });
  }
  var Ss = /[^a-z1-6-_]/;
  function ks(t) {
    var e = t.toLowerCase().trim();
    return Ss.test(e) ? "div" : e;
  }
  function xs(t, e) {
    return "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"
      .concat(t, "' height='")
      .concat(e, "' style='background-color:silver'%3E%3C/svg%3E");
  }
  var Cs = {
      FullSnapshot: 2,
      IncrementalSnapshot: 3,
      Meta: 4,
      Focus: 6,
      ViewEnd: 7,
      VisualViewport: 8,
      FrustrationRecord: 9,
    },
    Es = {
      Document: 0,
      DocumentType: 1,
      Element: 2,
      Text: 3,
      CDATA: 4,
      DocumentFragment: 11,
    },
    Ts = {
      Mutation: 0,
      MouseMove: 1,
      MouseInteraction: 2,
      Scroll: 3,
      ViewportResize: 4,
      Input: 5,
      TouchMove: 6,
      MediaInteraction: 7,
      StyleSheetRule: 8,
    },
    As = {
      MouseUp: 0,
      MouseDown: 1,
      Click: 2,
      ContextMenu: 3,
      DblClick: 4,
      Focus: 5,
      Blur: 6,
      TouchStart: 7,
      TouchEnd: 9,
    },
    Rs = { Play: 0, Pause: 1 };
  function Is(t) {
    if (void 0 !== t && 0 !== t.length)
      return t.map(function (t) {
        var e = t.cssRules || t.rules;
        return {
          cssRules: Array.from(e, function (t) {
            return t.cssText;
          }),
          disabled: t.disabled || void 0,
          media: t.media.length > 0 ? Array.from(t.media) : void 0,
        };
      });
  }
  function Ns(t, e, n, r) {
    if (e === hi.HIDDEN) return null;
    var i = t.getAttribute(n);
    if (
      e === hi.MASK &&
      n !== mi &&
      !ji.includes(n) &&
      n !== r.actionNameAttribute
    ) {
      var o = t.tagName;
      switch (n) {
        case "title":
        case "alt":
        case "placeholder":
          return yi;
      }
      if ("IMG" === o && ("src" === n || "srcset" === n)) {
        var a = t;
        if (a.naturalWidth > 0) return xs(a.naturalWidth, a.naturalHeight);
        var s = t.getBoundingClientRect(),
          u = s.width,
          c = s.height;
        return u > 0 || c > 0 ? xs(u, c) : bi;
      }
      if ("SOURCE" === o && ("src" === n || "srcset" === n)) return bi;
      if ("A" === o && "href" === n) return yi;
      if (i && w(n, "data-")) return yi;
      if ("IFRAME" === o && "srcdoc" === n) return yi;
    }
    return i && "string" == typeof i && qr(i) ? jr(i) : i;
  }
  function Os(t) {
    if (!t) return null;
    var e;
    try {
      e = t.rules || t.cssRules;
    } catch (t) {}
    return e ? ws(Array.from(e, 2 === Qe() ? Ms : Ls).join(""), t.href) : null;
  }
  function Ms(t) {
    if (
      (function (t) {
        return "selectorText" in t;
      })(t) &&
      t.selectorText.includes(":")
    ) {
      return t.cssText.replace(/(\[[\w-]+[^\\])(:[^\]]+\])/g, "$1\\$2");
    }
    return Ls(t);
  }
  function Ls(t) {
    return (
      ((function (t) {
        return "styleSheet" in t;
      })(t) &&
        Os(t.styleSheet)) ||
      t.cssText
    );
  }
  function Ds(t, e) {
    var n = (function (t, e) {
      switch (t.nodeType) {
        case t.DOCUMENT_NODE:
          return (function (t, e) {
            return {
              type: Es.Document,
              childNodes: Us(t, e),
              adoptedStyleSheets: Is(t.adoptedStyleSheets),
            };
          })(t, e);
        case t.DOCUMENT_FRAGMENT_NODE:
          return (function (t, e) {
            var n = fi(t);
            n && e.serializationContext.shadowRootsController.addShadowRoot(t);
            return {
              type: Es.DocumentFragment,
              childNodes: Us(t, e),
              isShadowRoot: n,
              adoptedStyleSheets: n ? Is(t.adoptedStyleSheets) : void 0,
            };
          })(t, e);
        case t.DOCUMENT_TYPE_NODE:
          return (
            (n = t),
            {
              type: Es.DocumentType,
              name: n.name,
              publicId: n.publicId,
              systemId: n.systemId,
            }
          );
        case t.ELEMENT_NODE:
          return (function (t, e) {
            var n,
              r = ks(t.tagName),
              i =
                ((a = t),
                "svg" === a.tagName || a instanceof SVGElement || void 0),
              o = ki(xi(t), e.parentNodePrivacyLevel);
            var a;
            if (o === hi.HIDDEN) {
              var s = t.getBoundingClientRect(),
                u = s.width,
                c = s.height;
              return {
                type: Es.Element,
                tagName: r,
                attributes:
                  ((n = {
                    rr_width: "".concat(u, "px"),
                    rr_height: "".concat(c, "px"),
                  }),
                  (n[mi] = gi),
                  n),
                childNodes: [],
                isSVG: i,
              };
            }
            if (o === hi.IGNORE) return;
            var l = (function (t, e, n) {
                var r;
                if (e === hi.HIDDEN) return {};
                for (
                  var i = {}, o = ks(t.tagName), a = t.ownerDocument, s = 0;
                  s < t.attributes.length;
                  s += 1
                ) {
                  var u = t.attributes.item(s).name,
                    c = Ns(t, e, u, n.configuration);
                  null !== c && (i[u] = c);
                }
                if (
                  t.value &&
                  ("textarea" === o ||
                    "select" === o ||
                    "option" === o ||
                    "input" === o)
                ) {
                  var l = gs(t, e);
                  void 0 !== l && (i.value = l);
                }
                if ("option" === o && e === hi.ALLOW) {
                  var d = t;
                  d.selected && (i.selected = d.selected);
                }
                if ("link" === o) {
                  var f,
                    p = Array.from(a.styleSheets).find(function (e) {
                      return e.href === t.href;
                    });
                  (f = Os(p)) && p && (i._cssText = f);
                }
                "style" === o &&
                  t.sheet &&
                  (f = Os(t.sheet)) &&
                  (i._cssText = f);
                var v,
                  h,
                  m = t;
                if (
                  ("input" !== o ||
                    ("radio" !== m.type && "checkbox" !== m.type) ||
                    (e === hi.ALLOW
                      ? (i.checked = !!m.checked)
                      : Ci(m, e) && delete i.checked),
                  "audio" === o || "video" === o)
                ) {
                  var g = t;
                  i.rr_mediaState = g.paused ? "paused" : "played";
                }
                var _ = n.serializationContext;
                switch (_.status) {
                  case 0:
                    (v = Math.round(t.scrollTop)),
                      (h = Math.round(t.scrollLeft)),
                      (v || h) &&
                        _.elementsScrollPositions.set(t, {
                          scrollTop: v,
                          scrollLeft: h,
                        });
                    break;
                  case 1:
                    _.elementsScrollPositions.has(t) &&
                      ((v = (r = _.elementsScrollPositions.get(t)).scrollTop),
                      (h = r.scrollLeft));
                }
                return h && (i.rr_scrollLeft = h), v && (i.rr_scrollTop = v), i;
              })(t, o, e),
              d = [];
            if (
              (function (t) {
                return t.childNodes.length > 0 || di(t);
              })(t) &&
              "style" !== r
            ) {
              d = Us(
                t,
                e.parentNodePrivacyLevel === o &&
                  e.ignoreWhiteSpace === ("head" === r)
                  ? e
                  : S({}, e, {
                      parentNodePrivacyLevel: o,
                      ignoreWhiteSpace: "head" === r,
                    })
              );
            }
            return {
              type: Es.Element,
              tagName: r,
              attributes: l,
              childNodes: d,
              isSVG: i,
            };
          })(t, e);
        case t.TEXT_NODE:
          return (function (t, e) {
            var n = Ai(t, e.ignoreWhiteSpace || !1, e.parentNodePrivacyLevel);
            if (void 0 === n) return;
            return { type: Es.Text, textContent: n };
          })(t, e);
        case t.CDATA_SECTION_NODE:
          return { type: Es.CDATA, textContent: "" };
      }
      var n;
    })(t, e);
    if (!n) return null;
    var r = ms(t) || Ps++,
      i = n;
    return (
      (i.id = r),
      (function (t, e) {
        vs.set(t, e);
      })(t, r),
      e.serializedNodeIds && e.serializedNodeIds.add(r),
      i
    );
  }
  var Ps = 1;
  function Us(t, e) {
    var n = [];
    return (
      pi(t, function (t) {
        var r = Ds(t, e);
        r && n.push(r);
      }),
      n
    );
  }
  function zs(t, e, n) {
    return Ds(t, {
      serializationContext: n,
      parentNodePrivacyLevel: e.defaultPrivacyLevel,
      configuration: e,
    });
  }
  function Vs(t) {
    return Boolean(t.changedTouches);
  }
  function Fs(t) {
    return !0 === t.composed && di(t.target) ? t.composedPath()[0] : t.target;
  }
  var Bs = function (t, e) {
      var n = window.visualViewport,
        r = {
          layoutViewportX: t,
          layoutViewportY: e,
          visualViewportX: t,
          visualViewportY: e,
        };
      return n
        ? (!(function (t) {
            return (
              Math.abs(t.pageTop - t.offsetTop - window.scrollY) > 25 ||
              Math.abs(t.pageLeft - t.offsetLeft - window.scrollX) > 25
            );
          })(n)
            ? ((r.visualViewportX = Math.round(t - n.offsetLeft)),
              (r.visualViewportY = Math.round(e - n.offsetTop)))
            : ((r.layoutViewportX = Math.round(t + n.offsetLeft)),
              (r.layoutViewportY = Math.round(e + n.offsetTop))),
          r)
        : r;
    },
    Hs = function (t) {
      return {
        scale: t.scale,
        offsetLeft: t.offsetLeft,
        offsetTop: t.offsetTop,
        pageLeft: t.pageLeft,
        pageTop: t.pageTop,
        height: t.height,
        width: t.width,
      };
    };
  function qs(t, e) {
    return {
      data: S({ source: t }, e),
      type: Cs.IncrementalSnapshot,
      timestamp: Qt(),
    };
  }
  var js,
    Gs = 50;
  function Zs(t, e) {
    var n = M(
        function (t) {
          var n = Fs(t);
          if (hs(n)) {
            var r = Ks(t);
            if (!r) return;
            var i = { id: ms(n), timeOffset: 0, x: r.x, y: r.y };
            e(qs(Vs(t) ? Ts.TouchMove : Ts.MouseMove, { positions: [i] }));
          }
        },
        Gs,
        { trailing: !1 }
      ),
      r = n.throttled,
      i = n.cancel,
      o = at(t, document, ["mousemove", "touchmove"], r, {
        capture: !0,
        passive: !0,
      }).stop;
    return {
      stop: function () {
        o(), i();
      },
    };
  }
  function Ks(t) {
    var e = Vs(t) ? t.changedTouches[0] : t,
      n = e.clientX,
      r = e.clientY;
    if (window.visualViewport) {
      var i = Bs(n, r);
      (n = i.visualViewportX), (r = i.visualViewportY);
    }
    if (Number.isFinite(n) && Number.isFinite(r)) return { x: n, y: r };
    t.isTrusted && _e("mouse/touch event without x/y");
  }
  var Ws =
    (((js = {}).pointerup = As.MouseUp),
    (js.mousedown = As.MouseDown),
    (js.click = As.Click),
    (js.contextmenu = As.ContextMenu),
    (js.dblclick = As.DblClick),
    (js.focus = As.Focus),
    (js.blur = As.Blur),
    (js.touchstart = As.TouchStart),
    (js.touchend = As.TouchEnd),
    js);
  function Xs(t, e, n) {
    return at(
      t,
      document,
      Object.keys(Ws),
      function (r) {
        var i = Fs(r);
        if (Si(i, t.defaultPrivacyLevel) !== hi.HIDDEN && hs(i)) {
          var o,
            a = ms(i),
            s = Ws[r.type];
          if (s !== As.Blur && s !== As.Focus) {
            var u = Ks(r);
            if (!u) return;
            o = { id: a, type: s, x: u.x, y: u.y };
          } else o = { id: a, type: s };
          var c = S({ id: n.getIdForEvent(r) }, qs(Ts.MouseInteraction, o));
          e(c);
        }
      },
      { capture: !0, passive: !0 }
    );
  }
  var Ys = 100;
  function Js(t, e, n, r) {
    void 0 === r && (r = document);
    var i = M(function (r) {
        var i = Fs(r);
        if (i && Si(i, t.defaultPrivacyLevel) !== hi.HIDDEN && hs(i)) {
          var o = ms(i),
            a =
              i === document
                ? { scrollTop: oa(), scrollLeft: ia() }
                : {
                    scrollTop: Math.round(i.scrollTop),
                    scrollLeft: Math.round(i.scrollLeft),
                  };
          n.set(i, a),
            e(qs(Ts.Scroll, { id: o, x: a.scrollLeft, y: a.scrollTop }));
        }
      }, Ys),
      o = i.throttled,
      a = i.cancel,
      s = ot(t, r, "scroll", o, { capture: !0, passive: !0 }).stop;
    return {
      stop: function () {
        s(), a();
      },
    };
  }
  var $s = 200;
  function Qs(t, e) {
    var n = aa(t).subscribe(function (t) {
      e(qs(Ts.ViewportResize, t));
    });
    return {
      stop: function () {
        n.unsubscribe();
      },
    };
  }
  function tu(t, e) {
    var n = window.visualViewport;
    if (!n) return { stop: L };
    var r = M(
        function () {
          e({ data: Hs(n), type: Cs.VisualViewport, timestamp: Qt() });
        },
        $s,
        { trailing: !1 }
      ),
      i = r.throttled,
      o = r.cancel,
      a = at(t, n, ["resize", "scroll"], i, { capture: !0, passive: !0 }).stop;
    return {
      stop: function () {
        a(), o();
      },
    };
  }
  function eu(t, e) {
    return at(
      t,
      document,
      ["play", "pause"],
      function (n) {
        var r = Fs(n);
        r &&
          Si(r, t.defaultPrivacyLevel) !== hi.HIDDEN &&
          hs(r) &&
          e(
            qs(Ts.MediaInteraction, {
              id: ms(r),
              type: "play" === n.type ? Rs.Play : Rs.Pause,
            })
          );
      },
      { capture: !0, passive: !0 }
    );
  }
  function nu(t) {
    function e(t, e) {
      t && hs(t.ownerNode) && e(ms(t.ownerNode));
    }
    var n = [
      Le(CSSStyleSheet.prototype, "insertRule", function (n) {
        var r = n.target,
          i = n.parameters,
          o = i[0],
          a = i[1];
        e(r, function (e) {
          return t(
            qs(Ts.StyleSheetRule, { id: e, adds: [{ rule: o, index: a }] })
          );
        });
      }),
      Le(CSSStyleSheet.prototype, "deleteRule", function (n) {
        var r = n.target,
          i = n.parameters[0];
        e(r, function (e) {
          return t(qs(Ts.StyleSheetRule, { id: e, removes: [{ index: i }] }));
        });
      }),
    ];
    function r(r) {
      n.push(
        Le(r.prototype, "insertRule", function (n) {
          var r = n.target,
            i = n.parameters,
            o = i[0],
            a = i[1];
          e(r.parentStyleSheet, function (e) {
            var n = ru(r);
            n &&
              (n.push(a || 0),
              t(
                qs(Ts.StyleSheetRule, { id: e, adds: [{ rule: o, index: n }] })
              ));
          });
        }),
        Le(r.prototype, "deleteRule", function (n) {
          var r = n.target,
            i = n.parameters[0];
          e(r.parentStyleSheet, function (e) {
            var n = ru(r);
            n &&
              (n.push(i),
              t(qs(Ts.StyleSheetRule, { id: e, removes: [{ index: n }] })));
          });
        })
      );
    }
    return (
      "undefined" != typeof CSSGroupingRule
        ? r(CSSGroupingRule)
        : (r(CSSMediaRule), r(CSSSupportsRule)),
      {
        stop: function () {
          n.forEach(function (t) {
            return t.stop();
          });
        },
      }
    );
  }
  function ru(t) {
    for (var e = [], n = t; n.parentRule; ) {
      var r = Array.from(n.parentRule.cssRules).indexOf(n);
      e.unshift(r), (n = n.parentRule);
    }
    if (n.parentStyleSheet) {
      var i = Array.from(n.parentStyleSheet.cssRules).indexOf(n);
      return e.unshift(i), e;
    }
  }
  function iu(t, e) {
    return at(t, window, ["focus", "blur"], function () {
      e({
        data: { has_focus: document.hasFocus() },
        type: Cs.Focus,
        timestamp: Qt(),
      });
    });
  }
  function ou(t, e, n) {
    var r = t.subscribe(11, function (t) {
      var r, i;
      "action" === t.rawRumEvent.type &&
        "click" === t.rawRumEvent.action.type &&
        (null ===
          (i =
            null === (r = t.rawRumEvent.action.frustration) || void 0 === r
              ? void 0
              : r.type) || void 0 === i
          ? void 0
          : i.length) &&
        "events" in t.domainContext &&
        t.domainContext.events &&
        t.domainContext.events.length &&
        e({
          timestamp: t.rawRumEvent.date,
          type: Cs.FrustrationRecord,
          data: {
            frustrationTypes: t.rawRumEvent.action.frustration.type,
            recordIds: t.domainContext.events.map(function (t) {
              return n.getIdForEvent(t);
            }),
          },
        });
    });
    return {
      stop: function () {
        r.unsubscribe();
      },
    };
  }
  function au(t, e) {
    var n = t.subscribe(4, function () {
      e({ timestamp: Qt(), type: Cs.ViewEnd });
    });
    return {
      stop: function () {
        n.unsubscribe();
      },
    };
  }
  function su(t, e, n) {
    void 0 === n && (n = document);
    var r,
      i = t.defaultPrivacyLevel,
      o = new WeakMap(),
      a = n !== document,
      s = at(
        t,
        n,
        a ? ["change"] : ["input", "change"],
        function (t) {
          var e = Fs(t);
          (e instanceof HTMLInputElement ||
            e instanceof HTMLTextAreaElement ||
            e instanceof HTMLSelectElement) &&
            c(e);
        },
        { capture: !0, passive: !0 }
      ).stop;
    if (a) r = L;
    else {
      var u = [
        De(HTMLInputElement.prototype, "value", c),
        De(HTMLInputElement.prototype, "checked", c),
        De(HTMLSelectElement.prototype, "value", c),
        De(HTMLTextAreaElement.prototype, "value", c),
        De(HTMLSelectElement.prototype, "selectedIndex", c),
      ];
      r = function () {
        u.forEach(function (t) {
          return t.stop();
        });
      };
    }
    return {
      stop: function () {
        r(), s();
      },
    };
    function c(t) {
      var e = Si(t, i);
      if (e !== hi.HIDDEN) {
        var n,
          r = t.type;
        if ("radio" === r || "checkbox" === r) {
          if (Ci(t, e)) return;
          n = { isChecked: t.checked };
        } else {
          var o = gs(t, e);
          if (void 0 === o) return;
          n = { text: o };
        }
        l(t, n);
        var a,
          s,
          u = t.name;
        "radio" === r &&
          u &&
          t.checked &&
          ((a = document.querySelectorAll(
            'input[type="radio"][name="'.concat(oi(u), '"]')
          )),
          (s = function (e) {
            e !== t && l(e, { isChecked: !1 });
          }),
          Array.prototype.forEach.call(a, s));
      }
    }
    function l(t, n) {
      if (hs(t)) {
        var r = o.get(t);
        (r && r.text === n.text && r.isChecked === n.isChecked) ||
          (o.set(t, n), e(qs(Ts.Input, S({ id: ms(t) }, n))));
      }
    }
  }
  var uu = 100,
    cu = 16;
  function lu(t) {
    var e = L,
      n = [];
    function r() {
      e(), t(n), (n = []);
    }
    var i = M(r, cu, { leading: !1 }),
      o = i.throttled,
      a = i.cancel;
    return {
      addMutations: function (t) {
        0 === n.length &&
          (e = (function (t, e) {
            if (window.requestIdleCallback && window.cancelIdleCallback) {
              var n = window.requestIdleCallback(p(t), e);
              return function () {
                return window.cancelIdleCallback(n);
              };
            }
            var r = window.requestAnimationFrame(p(t));
            return function () {
              return window.cancelAnimationFrame(r);
            };
          })(o, { timeout: uu })),
          n.push.apply(n, t);
      },
      flush: r,
      stop: function () {
        e(), a();
      },
    };
  }
  function du(t, e, n, r) {
    var i = ar();
    if (!i) return { stop: L, flush: L };
    var o = lu(function (r) {
        !(function (t, e, n, r) {
          var i = new Map();
          t.filter(function (t) {
            return "childList" === t.type;
          }).forEach(function (t) {
            t.removedNodes.forEach(function (t) {
              fu(t, r.removeShadowRoot);
            });
          });
          var o = t.filter(function (t) {
              return (
                t.target.isConnected &&
                (function (t) {
                  for (var e = t; e; ) {
                    if (!hs(e) && !fi(e)) return !1;
                    e = vi(e);
                  }
                  return !0;
                })(t.target) &&
                Si(t.target, n.defaultPrivacyLevel, i) !== hi.HIDDEN
              );
            }),
            a = (function (t, e, n, r) {
              for (
                var i = new Set(),
                  o = new Map(),
                  a = function (t) {
                    t.addedNodes.forEach(function (t) {
                      i.add(t);
                    }),
                      t.removedNodes.forEach(function (e) {
                        i.has(e) || o.set(e, t.target), i.delete(e);
                      });
                  },
                  s = 0,
                  u = t;
                s < u.length;
                s++
              ) {
                a(u[s]);
              }
              var c = Array.from(i);
              (l = c),
                l.sort(function (t, e) {
                  var n = t.compareDocumentPosition(e);
                  return n & Node.DOCUMENT_POSITION_CONTAINED_BY
                    ? -1
                    : n & Node.DOCUMENT_POSITION_CONTAINS ||
                      n & Node.DOCUMENT_POSITION_FOLLOWING
                    ? 1
                    : n & Node.DOCUMENT_POSITION_PRECEDING
                    ? -1
                    : 0;
                });
              var l;
              for (var d = new Set(), f = [], p = 0, v = c; p < v.length; p++) {
                var h = v[p];
                if (!b(h)) {
                  var m = Si(h.parentNode, e.defaultPrivacyLevel, r);
                  if (m !== hi.HIDDEN && m !== hi.IGNORE) {
                    var g = Ds(h, {
                      serializedNodeIds: d,
                      parentNodePrivacyLevel: m,
                      serializationContext: {
                        status: 2,
                        shadowRootsController: n,
                      },
                      configuration: e,
                    });
                    if (g) {
                      var _ = vi(h);
                      f.push({ nextId: w(h), parentId: ms(_), node: g });
                    }
                  }
                }
              }
              var y = [];
              return (
                o.forEach(function (t, e) {
                  hs(e) && y.push({ parentId: ms(t), id: ms(e) });
                }),
                { adds: f, removes: y, hasBeenSerialized: b }
              );
              function b(t) {
                return hs(t) && d.has(ms(t));
              }
              function w(t) {
                for (var e = t.nextSibling; e; ) {
                  if (hs(e)) return ms(e);
                  e = e.nextSibling;
                }
                return null;
              }
            })(
              o.filter(function (t) {
                return "childList" === t.type;
              }),
              n,
              r,
              i
            ),
            s = a.adds,
            u = a.removes,
            c = a.hasBeenSerialized,
            l = (function (t, e, n) {
              for (
                var r,
                  i = [],
                  o = new Set(),
                  a = t.filter(function (t) {
                    return !o.has(t.target) && (o.add(t.target), !0);
                  }),
                  s = 0,
                  u = a;
                s < u.length;
                s++
              ) {
                var c = u[s];
                if (c.target.textContent !== c.oldValue) {
                  var l = Si(vi(c.target), e.defaultPrivacyLevel, n);
                  l !== hi.HIDDEN &&
                    l !== hi.IGNORE &&
                    i.push({
                      id: ms(c.target),
                      value:
                        null !== (r = Ai(c.target, !1, l)) && void 0 !== r
                          ? r
                          : null,
                    });
                }
              }
              return i;
            })(
              o.filter(function (t) {
                return "characterData" === t.type && !c(t.target);
              }),
              n,
              i
            ),
            d = (function (t, e, n) {
              for (
                var r = [],
                  i = new Map(),
                  o = t.filter(function (t) {
                    var e = i.get(t.target);
                    return (
                      (!e || !e.has(t.attributeName)) &&
                      (e
                        ? e.add(t.attributeName)
                        : i.set(t.target, new Set([t.attributeName])),
                      !0)
                    );
                  }),
                  a = new Map(),
                  s = 0,
                  u = o;
                s < u.length;
                s++
              ) {
                var c = u[s];
                if (c.target.getAttribute(c.attributeName) !== c.oldValue) {
                  var l = Si(c.target, e.defaultPrivacyLevel, n),
                    d = Ns(c.target, l, c.attributeName, e),
                    f = void 0;
                  if ("value" === c.attributeName) {
                    var p = gs(c.target, l);
                    if (void 0 === p) continue;
                    f = p;
                  } else f = "string" == typeof d ? d : null;
                  var v = a.get(c.target);
                  v ||
                    ((v = { id: ms(c.target), attributes: {} }),
                    r.push(v),
                    a.set(c.target, v)),
                    (v.attributes[c.attributeName] = f);
                }
              }
              return r;
            })(
              o.filter(function (t) {
                return "attributes" === t.type && !c(t.target);
              }),
              n,
              i
            );
          if (!(l.length || d.length || u.length || s.length)) return;
          e(qs(Ts.Mutation, { adds: s, removes: u, texts: l, attributes: d }));
        })(r.concat(a.takeRecords()), t, e, n);
      }),
      a = new i(p(o.addMutations));
    return (
      a.observe(r, {
        attributeOldValue: !0,
        attributes: !0,
        characterData: !0,
        characterDataOldValue: !0,
        childList: !0,
        subtree: !0,
      }),
      {
        stop: function () {
          a.disconnect(), o.stop();
        },
        flush: function () {
          o.flush();
        },
      }
    );
  }
  function fu(t, e) {
    di(t) && e(t.shadowRoot),
      pi(t, function (t) {
        return fu(t, e);
      });
  }
  var pu = function (t, e, n) {
    var r = new Map(),
      i = {
        addShadowRoot: function (o) {
          if (!r.has(o)) {
            var a = du(e, t, i, o),
              s = su(t, e, o),
              u = Js(t, e, n, o);
            r.set(o, {
              flush: function () {
                return a.flush();
              },
              stop: function () {
                a.stop(), s.stop(), u.stop();
              },
            });
          }
        },
        removeShadowRoot: function (t) {
          var e = r.get(t);
          e && (e.stop(), r.delete(t));
        },
        stop: function () {
          r.forEach(function (t) {
            return (0, t.stop)();
          });
        },
        flush: function () {
          r.forEach(function (t) {
            return (0, t.flush)();
          });
        },
      };
    return i;
  };
  function vu(t) {
    var e = t.emit,
      n = t.configuration,
      r = t.lifeCycle;
    if (!e) throw new Error("emit function is required");
    var i,
      o = function (n) {
        e(n), se("record", { record: n });
        var r = t.viewHistory.findView();
        ps(r.id).records_count += 1;
      },
      a =
        ((i = new WeakMap()),
        {
          set: function (t, e) {
            (t !== document || document.scrollingElement) &&
              i.set(t === document ? document.scrollingElement : t, e);
          },
          get: function (t) {
            return i.get(t);
          },
          has: function (t) {
            return i.has(t);
          },
        }),
      s = pu(n, o, a),
      u = (function (t, e, n, r, i, o) {
        var a = function (n, i) {
          void 0 === n && (n = Qt()),
            void 0 === i &&
              (i = {
                status: 0,
                elementsScrollPositions: t,
                shadowRootsController: e,
              });
          var o = sa(),
            a = o.width,
            s = [
              {
                data: {
                  height: o.height,
                  href: window.location.href,
                  width: a,
                },
                type: Cs.Meta,
                timestamp: n,
              },
              {
                data: { has_focus: document.hasFocus() },
                type: Cs.Focus,
                timestamp: n,
              },
              {
                data: {
                  node: zs(document, r, i),
                  initialOffset: { left: ia(), top: oa() },
                },
                type: Cs.FullSnapshot,
                timestamp: n,
              },
            ];
          return (
            window.visualViewport &&
              s.push({
                data: Hs(window.visualViewport),
                type: Cs.VisualViewport,
                timestamp: n,
              }),
            s
          );
        };
        return (
          o(a()),
          {
            stop: n.subscribe(2, function (n) {
              i(),
                o(
                  a(n.startClocks.timeStamp, {
                    shadowRootsController: e,
                    status: 1,
                    elementsScrollPositions: t,
                  })
                );
            }).unsubscribe,
          }
        );
      })(a, s, r, n, c, function (t) {
        return t.forEach(function (t) {
          return o(t);
        });
      }).stop;
    function c() {
      s.flush(), d.flush();
    }
    var l = (function () {
        var t = new WeakMap(),
          e = 1;
        return {
          getIdForEvent: function (n) {
            return t.has(n) || t.set(n, e++), t.get(n);
          },
        };
      })(),
      d = du(o, n, s, document),
      f = [
        d,
        Zs(n, o),
        Xs(n, o, l),
        Js(n, o, a, document),
        Qs(n, o),
        su(n, o),
        eu(n, o),
        nu(o),
        iu(n, o),
        tu(n, o),
        ou(r, o, l),
        au(r, function (t) {
          c(), o(t);
        }),
      ];
    return {
      stop: function () {
        s.stop(),
          f.forEach(function (t) {
            return t.stop();
          }),
          u();
      },
      flushMutations: c,
      shadowRootsController: s,
    };
  }
  function hu(t) {
    var e = t.context,
      n = t.creationReason,
      r = t.encoder,
      i = 0,
      o = e.view.id,
      a = S(
        {
          start: 1 / 0,
          end: -1 / 0,
          creation_reason: n,
          records_count: 0,
          has_full_snapshot: !1,
          index_in_view: fs(o),
          source: "browser",
        },
        e
      );
    return (
      (function (t) {
        ps(t).segments_count += 1;
      })(o),
      {
        addRecord: function (t, e) {
          (a.start = Math.min(a.start, t.timestamp)),
            (a.end = Math.max(a.end, t.timestamp)),
            (a.records_count += 1),
            a.has_full_snapshot ||
              (a.has_full_snapshot = t.type === Cs.FullSnapshot);
          var n = r.isEmpty ? '{"records":[' : ",";
          r.write(n + JSON.stringify(t), function (t) {
            e((i += t));
          });
        },
        flush: function (t) {
          if (r.isEmpty) throw new Error("Empty segment flushed");
          r.write("],".concat(JSON.stringify(a).slice(1), "\n")),
            r.finish(function (e) {
              !(function (t, e) {
                ps(t).segments_total_raw_size += e;
              })(a.view.id, e.rawBytesCount),
                t(a, e);
            });
        },
      }
    );
  }
  var mu = 30 * Gt,
    gu = 6e4;
  function _u(t, e, n, r, i, o) {
    return (function (t, e, n, r) {
      var i = { status: 0, nextSegmentCreationReason: "init" },
        o = t.subscribe(2, function () {
          s("view_change");
        }).unsubscribe,
        a = t.subscribe(10, function (t) {
          s(t.reason);
        }).unsubscribe;
      function s(t) {
        1 === i.status &&
          (i.segment.flush(function (e, r) {
            var i = (function (t, e, n) {
              var r = new FormData();
              r.append(
                "segment",
                new Blob([t], { type: "application/octet-stream" }),
                "".concat(e.session.id, "-").concat(e.start)
              );
              var i = S(
                  {
                    raw_segment_size: n,
                    compressed_segment_size: t.byteLength,
                  },
                  e
                ),
                o = JSON.stringify(i);
              return (
                r.append("event", new Blob([o], { type: "application/json" })),
                { data: r, bytesCount: t.byteLength }
              );
            })(r.output, e, r.rawBytesCount);
            or(t) ? n.sendOnExit(i) : n.send(i);
          }),
          I(i.expirationTimeoutId)),
          (i =
            "stop" !== t
              ? { status: 0, nextSegmentCreationReason: t }
              : { status: 2 });
      }
      return {
        addRecord: function (t) {
          if (2 !== i.status) {
            if (0 === i.status) {
              var n = e();
              if (!n) return;
              i = {
                status: 1,
                segment: hu({
                  encoder: r,
                  context: n,
                  creationReason: i.nextSegmentCreationReason,
                }),
                expirationTimeoutId: R(function () {
                  s("segment_duration_limit");
                }, mu),
              };
            }
            i.segment.addRecord(t, function (t) {
              t > gu && s("segment_bytes_limit");
            });
          }
        },
        stop: function () {
          s("stop"), o(), a();
        },
      };
    })(
      t,
      function () {
        return (function (t, e, n) {
          var r = e.findTrackedSession(),
            i = n.findView();
          if (!r || !i) return;
          return {
            application: { id: t },
            session: { id: r.id },
            view: { id: i.id },
          };
        })(e.applicationId, n, r);
      },
      i,
      o
    );
  }
  function yu() {
    return (
      "function" == typeof Array.from &&
      "function" == typeof CSSSupportsRule &&
      "function" == typeof URL.createObjectURL &&
      "forEach" in NodeList.prototype
    );
  }
  function bu(t, e, n, r) {
    var i = e.findTrackedSession(),
      o = (function (t, e) {
        if (!yu()) return "browser-not-supported";
        if (!t) return "rum-not-tracked";
        if (0 === t.sessionReplay) return "incorrect-session-plan";
        if (!e) return "replay-not-started";
      })(i, r);
    return cs(t, { viewContext: n.findView(), errorType: o, session: i });
  }
  function wu(t, e, n) {
    var r,
      i = 0,
      o = [],
      a = 0,
      s = [],
      u = ot(t, e, "message", function (t) {
        var e = t.data;
        if ("wrote" === e.type && e.streamId === n) {
          (i += e.additionalBytesCount), o.push(e.result), (r = e.trailer);
          var a = s.shift();
          a && a.id === e.id
            ? a.writeCallback
              ? a.writeCallback(e.result.byteLength)
              : a.finishCallback && a.finishCallback()
            : (u(), _e("Worker responses received out of order."));
        }
      }).stop;
    function c() {
      var t =
          0 === o.length
            ? new Uint8Array(0)
            : (function (t) {
                for (
                  var e = t.reduce(function (t, e) {
                      return t + e.length;
                    }, 0),
                    n = new Uint8Array(e),
                    r = 0,
                    i = 0,
                    o = t;
                  i < o.length;
                  i++
                ) {
                  var a = o[i];
                  n.set(a, r), (r += a.length);
                }
                return n;
              })(o.concat(r)),
        e = {
          rawBytesCount: i,
          output: t,
          outputBytesCount: t.byteLength,
          encoding: "deflate",
        };
      return (i = 0), (o = []), e;
    }
    function l() {
      a > 0 && (e.postMessage({ action: "reset", streamId: n }), (a = 0));
    }
    return {
      isAsync: !0,
      get isEmpty() {
        return 0 === a;
      },
      write: function (t, r) {
        e.postMessage({ action: "write", id: a, data: t, streamId: n }),
          s.push({ id: a, writeCallback: r, data: t }),
          (a += 1);
      },
      finish: function (t) {
        l(),
          s.length
            ? (s.forEach(function (t) {
                delete t.writeCallback;
              }),
              (s[s.length - 1].finishCallback = function () {
                return t(c());
              }))
            : t(c());
      },
      finishSync: function () {
        l();
        var t = s
          .map(function (t) {
            return delete t.writeCallback, delete t.finishCallback, t.data;
          })
          .join("");
        return S(c(), { pendingData: t });
      },
      estimateEncodedBytesCount: function (t) {
        return t.length / 8;
      },
      stop: function () {
        u();
      },
    };
  }
  var Su = 30 * Gt;
  function ku(t) {
    return new Worker(
      t.workerUrl ||
        URL.createObjectURL(
          new Blob([
            '!function(){"use strict";function t(t){for(var e=t.reduce((function(t,e){return t+e.length}),0),a=new Uint8Array(e),n=0,r=0,i=t;r<i.length;r++){var s=i[r];a.set(s,n),n+=s.length}return a}function e(t){for(var e=t.length;--e>=0;)t[e]=0}var a=256,n=286,r=30,i=15,s=new Uint8Array([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0]),_=new Uint8Array([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]),h=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7]),l=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),o=new Array(576);e(o);var d=new Array(60);e(d);var u=new Array(512);e(u);var f=new Array(256);e(f);var c=new Array(29);e(c);var p,g,w,v=new Array(r);function b(t,e,a,n,r){this.static_tree=t,this.extra_bits=e,this.extra_base=a,this.elems=n,this.max_length=r,this.has_stree=t&&t.length}function m(t,e){this.dyn_tree=t,this.max_code=0,this.stat_desc=e}e(v);var y=function(t){return t<256?u[t]:u[256+(t>>>7)]},k=function(t,e){t.pending_buf[t.pending++]=255&e,t.pending_buf[t.pending++]=e>>>8&255},z=function(t,e,a){t.bi_valid>16-a?(t.bi_buf|=e<<t.bi_valid&65535,k(t,t.bi_buf),t.bi_buf=e>>16-t.bi_valid,t.bi_valid+=a-16):(t.bi_buf|=e<<t.bi_valid&65535,t.bi_valid+=a)},x=function(t,e,a){z(t,a[2*e],a[2*e+1])},A=function(t,e){var a=0;do{a|=1&t,t>>>=1,a<<=1}while(--e>0);return a>>>1},E=function(t,e,a){var n,r,s=new Array(16),_=0;for(n=1;n<=i;n++)s[n]=_=_+a[n-1]<<1;for(r=0;r<=e;r++){var h=t[2*r+1];0!==h&&(t[2*r]=A(s[h]++,h))}},Z=function(t){var e;for(e=0;e<n;e++)t.dyn_ltree[2*e]=0;for(e=0;e<r;e++)t.dyn_dtree[2*e]=0;for(e=0;e<19;e++)t.bl_tree[2*e]=0;t.dyn_ltree[512]=1,t.opt_len=t.static_len=0,t.last_lit=t.matches=0},U=function(t){t.bi_valid>8?k(t,t.bi_buf):t.bi_valid>0&&(t.pending_buf[t.pending++]=t.bi_buf),t.bi_buf=0,t.bi_valid=0},S=function(t,e,a,n){var r=2*e,i=2*a;return t[r]<t[i]||t[r]===t[i]&&n[e]<=n[a]},R=function(t,e,a){for(var n=t.heap[a],r=a<<1;r<=t.heap_len&&(r<t.heap_len&&S(e,t.heap[r+1],t.heap[r],t.depth)&&r++,!S(e,n,t.heap[r],t.depth));)t.heap[a]=t.heap[r],a=r,r<<=1;t.heap[a]=n},L=function(t,e,n){var r,i,h,l,o=0;if(0!==t.last_lit)do{r=t.pending_buf[t.d_buf+2*o]<<8|t.pending_buf[t.d_buf+2*o+1],i=t.pending_buf[t.l_buf+o],o++,0===r?x(t,i,e):(h=f[i],x(t,h+a+1,e),0!==(l=s[h])&&(i-=c[h],z(t,i,l)),r--,h=y(r),x(t,h,n),0!==(l=_[h])&&(r-=v[h],z(t,r,l)))}while(o<t.last_lit);x(t,256,e)},F=function(t,e){var a,n,r,s=e.dyn_tree,_=e.stat_desc.static_tree,h=e.stat_desc.has_stree,l=e.stat_desc.elems,o=-1;for(t.heap_len=0,t.heap_max=573,a=0;a<l;a++)0!==s[2*a]?(t.heap[++t.heap_len]=o=a,t.depth[a]=0):s[2*a+1]=0;for(;t.heap_len<2;)s[2*(r=t.heap[++t.heap_len]=o<2?++o:0)]=1,t.depth[r]=0,t.opt_len--,h&&(t.static_len-=_[2*r+1]);for(e.max_code=o,a=t.heap_len>>1;a>=1;a--)R(t,s,a);r=l;do{a=t.heap[1],t.heap[1]=t.heap[t.heap_len--],R(t,s,1),n=t.heap[1],t.heap[--t.heap_max]=a,t.heap[--t.heap_max]=n,s[2*r]=s[2*a]+s[2*n],t.depth[r]=(t.depth[a]>=t.depth[n]?t.depth[a]:t.depth[n])+1,s[2*a+1]=s[2*n+1]=r,t.heap[1]=r++,R(t,s,1)}while(t.heap_len>=2);t.heap[--t.heap_max]=t.heap[1],function(t,e){var a,n,r,s,_,h,l=e.dyn_tree,o=e.max_code,d=e.stat_desc.static_tree,u=e.stat_desc.has_stree,f=e.stat_desc.extra_bits,c=e.stat_desc.extra_base,p=e.stat_desc.max_length,g=0;for(s=0;s<=i;s++)t.bl_count[s]=0;for(l[2*t.heap[t.heap_max]+1]=0,a=t.heap_max+1;a<573;a++)(s=l[2*l[2*(n=t.heap[a])+1]+1]+1)>p&&(s=p,g++),l[2*n+1]=s,n>o||(t.bl_count[s]++,_=0,n>=c&&(_=f[n-c]),h=l[2*n],t.opt_len+=h*(s+_),u&&(t.static_len+=h*(d[2*n+1]+_)));if(0!==g){do{for(s=p-1;0===t.bl_count[s];)s--;t.bl_count[s]--,t.bl_count[s+1]+=2,t.bl_count[p]--,g-=2}while(g>0);for(s=p;0!==s;s--)for(n=t.bl_count[s];0!==n;)(r=t.heap[--a])>o||(l[2*r+1]!==s&&(t.opt_len+=(s-l[2*r+1])*l[2*r],l[2*r+1]=s),n--)}}(t,e),E(s,o,t.bl_count)},T=function(t,e,a){var n,r,i=-1,s=e[1],_=0,h=7,l=4;for(0===s&&(h=138,l=3),e[2*(a+1)+1]=65535,n=0;n<=a;n++)r=s,s=e[2*(n+1)+1],++_<h&&r===s||(_<l?t.bl_tree[2*r]+=_:0!==r?(r!==i&&t.bl_tree[2*r]++,t.bl_tree[32]++):_<=10?t.bl_tree[34]++:t.bl_tree[36]++,_=0,i=r,0===s?(h=138,l=3):r===s?(h=6,l=3):(h=7,l=4))},I=function(t,e,a){var n,r,i=-1,s=e[1],_=0,h=7,l=4;for(0===s&&(h=138,l=3),n=0;n<=a;n++)if(r=s,s=e[2*(n+1)+1],!(++_<h&&r===s)){if(_<l)do{x(t,r,t.bl_tree)}while(0!=--_);else 0!==r?(r!==i&&(x(t,r,t.bl_tree),_--),x(t,16,t.bl_tree),z(t,_-3,2)):_<=10?(x(t,17,t.bl_tree),z(t,_-3,3)):(x(t,18,t.bl_tree),z(t,_-11,7));_=0,i=r,0===s?(h=138,l=3):r===s?(h=6,l=3):(h=7,l=4)}},N=!1,O=function(t,e,a,n){z(t,0+(n?1:0),3),function(t,e,a,n){U(t),n&&(k(t,a),k(t,~a)),t.pending_buf.set(t.window.subarray(e,e+a),t.pending),t.pending+=a}(t,e,a,!0)},D=function(t,e,n,r){var i,s,_=0;t.level>0?(2===t.strm.data_type&&(t.strm.data_type=function(t){var e,n=4093624447;for(e=0;e<=31;e++,n>>>=1)if(1&n&&0!==t.dyn_ltree[2*e])return 0;if(0!==t.dyn_ltree[18]||0!==t.dyn_ltree[20]||0!==t.dyn_ltree[26])return 1;for(e=32;e<a;e++)if(0!==t.dyn_ltree[2*e])return 1;return 0}(t)),F(t,t.l_desc),F(t,t.d_desc),_=function(t){var e;for(T(t,t.dyn_ltree,t.l_desc.max_code),T(t,t.dyn_dtree,t.d_desc.max_code),F(t,t.bl_desc),e=18;e>=3&&0===t.bl_tree[2*l[e]+1];e--);return t.opt_len+=3*(e+1)+5+5+4,e}(t),i=t.opt_len+3+7>>>3,(s=t.static_len+3+7>>>3)<=i&&(i=s)):i=s=n+5,n+4<=i&&-1!==e?O(t,e,n,r):4===t.strategy||s===i?(z(t,2+(r?1:0),3),L(t,o,d)):(z(t,4+(r?1:0),3),function(t,e,a,n){var r;for(z(t,e-257,5),z(t,a-1,5),z(t,n-4,4),r=0;r<n;r++)z(t,t.bl_tree[2*l[r]+1],3);I(t,t.dyn_ltree,e-1),I(t,t.dyn_dtree,a-1)}(t,t.l_desc.max_code+1,t.d_desc.max_code+1,_+1),L(t,t.dyn_ltree,t.dyn_dtree)),Z(t),r&&U(t)},B={_tr_init:function(t){N||(!function(){var t,e,a,l,m,y=new Array(16);for(a=0,l=0;l<28;l++)for(c[l]=a,t=0;t<1<<s[l];t++)f[a++]=l;for(f[a-1]=l,m=0,l=0;l<16;l++)for(v[l]=m,t=0;t<1<<_[l];t++)u[m++]=l;for(m>>=7;l<r;l++)for(v[l]=m<<7,t=0;t<1<<_[l]-7;t++)u[256+m++]=l;for(e=0;e<=i;e++)y[e]=0;for(t=0;t<=143;)o[2*t+1]=8,t++,y[8]++;for(;t<=255;)o[2*t+1]=9,t++,y[9]++;for(;t<=279;)o[2*t+1]=7,t++,y[7]++;for(;t<=287;)o[2*t+1]=8,t++,y[8]++;for(E(o,287,y),t=0;t<r;t++)d[2*t+1]=5,d[2*t]=A(t,5);p=new b(o,s,257,n,i),g=new b(d,_,0,r,i),w=new b(new Array(0),h,0,19,7)}(),N=!0),t.l_desc=new m(t.dyn_ltree,p),t.d_desc=new m(t.dyn_dtree,g),t.bl_desc=new m(t.bl_tree,w),t.bi_buf=0,t.bi_valid=0,Z(t)},_tr_stored_block:O,_tr_flush_block:D,_tr_tally:function(t,e,n){return t.pending_buf[t.d_buf+2*t.last_lit]=e>>>8&255,t.pending_buf[t.d_buf+2*t.last_lit+1]=255&e,t.pending_buf[t.l_buf+t.last_lit]=255&n,t.last_lit++,0===e?t.dyn_ltree[2*n]++:(t.matches++,e--,t.dyn_ltree[2*(f[n]+a+1)]++,t.dyn_dtree[2*y(e)]++),t.last_lit===t.lit_bufsize-1},_tr_align:function(t){z(t,2,3),x(t,256,o),function(t){16===t.bi_valid?(k(t,t.bi_buf),t.bi_buf=0,t.bi_valid=0):t.bi_valid>=8&&(t.pending_buf[t.pending++]=255&t.bi_buf,t.bi_buf>>=8,t.bi_valid-=8)}(t)}},C=function(t,e,a,n){for(var r=65535&t|0,i=t>>>16&65535|0,s=0;0!==a;){a-=s=a>2e3?2e3:a;do{i=i+(r=r+e[n++]|0)|0}while(--s);r%=65521,i%=65521}return r|i<<16|0},H=new Uint32Array(function(){for(var t,e=[],a=0;a<256;a++){t=a;for(var n=0;n<8;n++)t=1&t?3988292384^t>>>1:t>>>1;e[a]=t}return e}()),M=function(t,e,a,n){var r=H,i=n+a;t^=-1;for(var s=n;s<i;s++)t=t>>>8^r[255&(t^e[s])];return-1^t},Y={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"},K={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_MEM_ERROR:-4,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8},P=B._tr_init,j=B._tr_stored_block,G=B._tr_flush_block,X=B._tr_tally,W=B._tr_align,q=K.Z_NO_FLUSH,J=K.Z_PARTIAL_FLUSH,Q=K.Z_FULL_FLUSH,V=K.Z_FINISH,$=K.Z_BLOCK,tt=K.Z_OK,et=K.Z_STREAM_END,at=K.Z_STREAM_ERROR,nt=K.Z_DATA_ERROR,rt=K.Z_BUF_ERROR,it=K.Z_DEFAULT_COMPRESSION,st=K.Z_FILTERED,_t=K.Z_HUFFMAN_ONLY,ht=K.Z_RLE,lt=K.Z_FIXED,ot=K.Z_DEFAULT_STRATEGY,dt=K.Z_UNKNOWN,ut=K.Z_DEFLATED,ft=258,ct=262,pt=103,gt=113,wt=666,vt=function(t,e){return t.msg=Y[e],e},bt=function(t){return(t<<1)-(t>4?9:0)},mt=function(t){for(var e=t.length;--e>=0;)t[e]=0},yt=function(t,e,a){return(e<<t.hash_shift^a)&t.hash_mask},kt=function(t){var e=t.state,a=e.pending;a>t.avail_out&&(a=t.avail_out),0!==a&&(t.output.set(e.pending_buf.subarray(e.pending_out,e.pending_out+a),t.next_out),t.next_out+=a,e.pending_out+=a,t.total_out+=a,t.avail_out-=a,e.pending-=a,0===e.pending&&(e.pending_out=0))},zt=function(t,e){G(t,t.block_start>=0?t.block_start:-1,t.strstart-t.block_start,e),t.block_start=t.strstart,kt(t.strm)},xt=function(t,e){t.pending_buf[t.pending++]=e},At=function(t,e){t.pending_buf[t.pending++]=e>>>8&255,t.pending_buf[t.pending++]=255&e},Et=function(t,e){var a,n,r=t.max_chain_length,i=t.strstart,s=t.prev_length,_=t.nice_match,h=t.strstart>t.w_size-ct?t.strstart-(t.w_size-ct):0,l=t.window,o=t.w_mask,d=t.prev,u=t.strstart+ft,f=l[i+s-1],c=l[i+s];t.prev_length>=t.good_match&&(r>>=2),_>t.lookahead&&(_=t.lookahead);do{if(l[(a=e)+s]===c&&l[a+s-1]===f&&l[a]===l[i]&&l[++a]===l[i+1]){i+=2,a++;do{}while(l[++i]===l[++a]&&l[++i]===l[++a]&&l[++i]===l[++a]&&l[++i]===l[++a]&&l[++i]===l[++a]&&l[++i]===l[++a]&&l[++i]===l[++a]&&l[++i]===l[++a]&&i<u);if(n=ft-(u-i),i=u-ft,n>s){if(t.match_start=e,s=n,n>=_)break;f=l[i+s-1],c=l[i+s]}}}while((e=d[e&o])>h&&0!=--r);return s<=t.lookahead?s:t.lookahead},Zt=function(t){var e,a,n,r,i,s,_,h,l,o,d=t.w_size;do{if(r=t.window_size-t.lookahead-t.strstart,t.strstart>=d+(d-ct)){t.window.set(t.window.subarray(d,d+d),0),t.match_start-=d,t.strstart-=d,t.block_start-=d,e=a=t.hash_size;do{n=t.head[--e],t.head[e]=n>=d?n-d:0}while(--a);e=a=d;do{n=t.prev[--e],t.prev[e]=n>=d?n-d:0}while(--a);r+=d}if(0===t.strm.avail_in)break;if(s=t.strm,_=t.window,h=t.strstart+t.lookahead,l=r,o=void 0,(o=s.avail_in)>l&&(o=l),a=0===o?0:(s.avail_in-=o,_.set(s.input.subarray(s.next_in,s.next_in+o),h),1===s.state.wrap?s.adler=C(s.adler,_,o,h):2===s.state.wrap&&(s.adler=M(s.adler,_,o,h)),s.next_in+=o,s.total_in+=o,o),t.lookahead+=a,t.lookahead+t.insert>=3)for(i=t.strstart-t.insert,t.ins_h=t.window[i],t.ins_h=yt(t,t.ins_h,t.window[i+1]);t.insert&&(t.ins_h=yt(t,t.ins_h,t.window[i+3-1]),t.prev[i&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=i,i++,t.insert--,!(t.lookahead+t.insert<3)););}while(t.lookahead<ct&&0!==t.strm.avail_in)},Ut=function(t,e){for(var a,n;;){if(t.lookahead<ct){if(Zt(t),t.lookahead<ct&&e===q)return 1;if(0===t.lookahead)break}if(a=0,t.lookahead>=3&&(t.ins_h=yt(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),0!==a&&t.strstart-a<=t.w_size-ct&&(t.match_length=Et(t,a)),t.match_length>=3)if(n=X(t,t.strstart-t.match_start,t.match_length-3),t.lookahead-=t.match_length,t.match_length<=t.max_lazy_match&&t.lookahead>=3){t.match_length--;do{t.strstart++,t.ins_h=yt(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart}while(0!=--t.match_length);t.strstart++}else t.strstart+=t.match_length,t.match_length=0,t.ins_h=t.window[t.strstart],t.ins_h=yt(t,t.ins_h,t.window[t.strstart+1]);else n=X(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++;if(n&&(zt(t,!1),0===t.strm.avail_out))return 1}return t.insert=t.strstart<2?t.strstart:2,e===V?(zt(t,!0),0===t.strm.avail_out?3:4):t.last_lit&&(zt(t,!1),0===t.strm.avail_out)?1:2},St=function(t,e){for(var a,n,r;;){if(t.lookahead<ct){if(Zt(t),t.lookahead<ct&&e===q)return 1;if(0===t.lookahead)break}if(a=0,t.lookahead>=3&&(t.ins_h=yt(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),t.prev_length=t.match_length,t.prev_match=t.match_start,t.match_length=2,0!==a&&t.prev_length<t.max_lazy_match&&t.strstart-a<=t.w_size-ct&&(t.match_length=Et(t,a),t.match_length<=5&&(t.strategy===st||3===t.match_length&&t.strstart-t.match_start>4096)&&(t.match_length=2)),t.prev_length>=3&&t.match_length<=t.prev_length){r=t.strstart+t.lookahead-3,n=X(t,t.strstart-1-t.prev_match,t.prev_length-3),t.lookahead-=t.prev_length-1,t.prev_length-=2;do{++t.strstart<=r&&(t.ins_h=yt(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart)}while(0!=--t.prev_length);if(t.match_available=0,t.match_length=2,t.strstart++,n&&(zt(t,!1),0===t.strm.avail_out))return 1}else if(t.match_available){if((n=X(t,0,t.window[t.strstart-1]))&&zt(t,!1),t.strstart++,t.lookahead--,0===t.strm.avail_out)return 1}else t.match_available=1,t.strstart++,t.lookahead--}return t.match_available&&(n=X(t,0,t.window[t.strstart-1]),t.match_available=0),t.insert=t.strstart<2?t.strstart:2,e===V?(zt(t,!0),0===t.strm.avail_out?3:4):t.last_lit&&(zt(t,!1),0===t.strm.avail_out)?1:2};function Rt(t,e,a,n,r){this.good_length=t,this.max_lazy=e,this.nice_length=a,this.max_chain=n,this.func=r}var Lt=[new Rt(0,0,0,0,(function(t,e){var a=65535;for(a>t.pending_buf_size-5&&(a=t.pending_buf_size-5);;){if(t.lookahead<=1){if(Zt(t),0===t.lookahead&&e===q)return 1;if(0===t.lookahead)break}t.strstart+=t.lookahead,t.lookahead=0;var n=t.block_start+a;if((0===t.strstart||t.strstart>=n)&&(t.lookahead=t.strstart-n,t.strstart=n,zt(t,!1),0===t.strm.avail_out))return 1;if(t.strstart-t.block_start>=t.w_size-ct&&(zt(t,!1),0===t.strm.avail_out))return 1}return t.insert=0,e===V?(zt(t,!0),0===t.strm.avail_out?3:4):(t.strstart>t.block_start&&(zt(t,!1),t.strm.avail_out),1)})),new Rt(4,4,8,4,Ut),new Rt(4,5,16,8,Ut),new Rt(4,6,32,32,Ut),new Rt(4,4,16,16,St),new Rt(8,16,32,32,St),new Rt(8,16,128,128,St),new Rt(8,32,128,256,St),new Rt(32,128,258,1024,St),new Rt(32,258,258,4096,St)];function Ft(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=ut,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new Uint16Array(1146),this.dyn_dtree=new Uint16Array(122),this.bl_tree=new Uint16Array(78),mt(this.dyn_ltree),mt(this.dyn_dtree),mt(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new Uint16Array(16),this.heap=new Uint16Array(573),mt(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new Uint16Array(573),mt(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}var Tt=function(t){if(!t||!t.state)return vt(t,at);t.total_in=t.total_out=0,t.data_type=dt;var e=t.state;return e.pending=0,e.pending_out=0,e.wrap<0&&(e.wrap=-e.wrap),e.status=e.wrap?42:gt,t.adler=2===e.wrap?0:1,e.last_flush=q,P(e),tt},It=function(t){var e,a=Tt(t);return a===tt&&((e=t.state).window_size=2*e.w_size,mt(e.head),e.max_lazy_match=Lt[e.level].max_lazy,e.good_match=Lt[e.level].good_length,e.nice_match=Lt[e.level].nice_length,e.max_chain_length=Lt[e.level].max_chain,e.strstart=0,e.block_start=0,e.lookahead=0,e.insert=0,e.match_length=e.prev_length=2,e.match_available=0,e.ins_h=0),a},Nt=function(t,e,a,n,r,i){if(!t)return at;var s=1;if(e===it&&(e=6),n<0?(s=0,n=-n):n>15&&(s=2,n-=16),r<1||r>9||a!==ut||n<8||n>15||e<0||e>9||i<0||i>lt)return vt(t,at);8===n&&(n=9);var _=new Ft;return t.state=_,_.strm=t,_.wrap=s,_.gzhead=null,_.w_bits=n,_.w_size=1<<_.w_bits,_.w_mask=_.w_size-1,_.hash_bits=r+7,_.hash_size=1<<_.hash_bits,_.hash_mask=_.hash_size-1,_.hash_shift=~~((_.hash_bits+3-1)/3),_.window=new Uint8Array(2*_.w_size),_.head=new Uint16Array(_.hash_size),_.prev=new Uint16Array(_.w_size),_.lit_bufsize=1<<r+6,_.pending_buf_size=4*_.lit_bufsize,_.pending_buf=new Uint8Array(_.pending_buf_size),_.d_buf=1*_.lit_bufsize,_.l_buf=3*_.lit_bufsize,_.level=e,_.strategy=i,_.method=a,It(t)},Ot={deflateInit:function(t,e){return Nt(t,e,ut,15,8,ot)},deflateInit2:Nt,deflateReset:It,deflateResetKeep:Tt,deflateSetHeader:function(t,e){return t&&t.state?2!==t.state.wrap?at:(t.state.gzhead=e,tt):at},deflate:function(t,e){var a,n;if(!t||!t.state||e>$||e<0)return t?vt(t,at):at;var r=t.state;if(!t.output||!t.input&&0!==t.avail_in||r.status===wt&&e!==V)return vt(t,0===t.avail_out?rt:at);r.strm=t;var i=r.last_flush;if(r.last_flush=e,42===r.status)if(2===r.wrap)t.adler=0,xt(r,31),xt(r,139),xt(r,8),r.gzhead?(xt(r,(r.gzhead.text?1:0)+(r.gzhead.hcrc?2:0)+(r.gzhead.extra?4:0)+(r.gzhead.name?8:0)+(r.gzhead.comment?16:0)),xt(r,255&r.gzhead.time),xt(r,r.gzhead.time>>8&255),xt(r,r.gzhead.time>>16&255),xt(r,r.gzhead.time>>24&255),xt(r,9===r.level?2:r.strategy>=_t||r.level<2?4:0),xt(r,255&r.gzhead.os),r.gzhead.extra&&r.gzhead.extra.length&&(xt(r,255&r.gzhead.extra.length),xt(r,r.gzhead.extra.length>>8&255)),r.gzhead.hcrc&&(t.adler=M(t.adler,r.pending_buf,r.pending,0)),r.gzindex=0,r.status=69):(xt(r,0),xt(r,0),xt(r,0),xt(r,0),xt(r,0),xt(r,9===r.level?2:r.strategy>=_t||r.level<2?4:0),xt(r,3),r.status=gt);else{var s=ut+(r.w_bits-8<<4)<<8;s|=(r.strategy>=_t||r.level<2?0:r.level<6?1:6===r.level?2:3)<<6,0!==r.strstart&&(s|=32),s+=31-s%31,r.status=gt,At(r,s),0!==r.strstart&&(At(r,t.adler>>>16),At(r,65535&t.adler)),t.adler=1}if(69===r.status)if(r.gzhead.extra){for(a=r.pending;r.gzindex<(65535&r.gzhead.extra.length)&&(r.pending!==r.pending_buf_size||(r.gzhead.hcrc&&r.pending>a&&(t.adler=M(t.adler,r.pending_buf,r.pending-a,a)),kt(t),a=r.pending,r.pending!==r.pending_buf_size));)xt(r,255&r.gzhead.extra[r.gzindex]),r.gzindex++;r.gzhead.hcrc&&r.pending>a&&(t.adler=M(t.adler,r.pending_buf,r.pending-a,a)),r.gzindex===r.gzhead.extra.length&&(r.gzindex=0,r.status=73)}else r.status=73;if(73===r.status)if(r.gzhead.name){a=r.pending;do{if(r.pending===r.pending_buf_size&&(r.gzhead.hcrc&&r.pending>a&&(t.adler=M(t.adler,r.pending_buf,r.pending-a,a)),kt(t),a=r.pending,r.pending===r.pending_buf_size)){n=1;break}n=r.gzindex<r.gzhead.name.length?255&r.gzhead.name.charCodeAt(r.gzindex++):0,xt(r,n)}while(0!==n);r.gzhead.hcrc&&r.pending>a&&(t.adler=M(t.adler,r.pending_buf,r.pending-a,a)),0===n&&(r.gzindex=0,r.status=91)}else r.status=91;if(91===r.status)if(r.gzhead.comment){a=r.pending;do{if(r.pending===r.pending_buf_size&&(r.gzhead.hcrc&&r.pending>a&&(t.adler=M(t.adler,r.pending_buf,r.pending-a,a)),kt(t),a=r.pending,r.pending===r.pending_buf_size)){n=1;break}n=r.gzindex<r.gzhead.comment.length?255&r.gzhead.comment.charCodeAt(r.gzindex++):0,xt(r,n)}while(0!==n);r.gzhead.hcrc&&r.pending>a&&(t.adler=M(t.adler,r.pending_buf,r.pending-a,a)),0===n&&(r.status=pt)}else r.status=pt;if(r.status===pt&&(r.gzhead.hcrc?(r.pending+2>r.pending_buf_size&&kt(t),r.pending+2<=r.pending_buf_size&&(xt(r,255&t.adler),xt(r,t.adler>>8&255),t.adler=0,r.status=gt)):r.status=gt),0!==r.pending){if(kt(t),0===t.avail_out)return r.last_flush=-1,tt}else if(0===t.avail_in&&bt(e)<=bt(i)&&e!==V)return vt(t,rt);if(r.status===wt&&0!==t.avail_in)return vt(t,rt);if(0!==t.avail_in||0!==r.lookahead||e!==q&&r.status!==wt){var _=r.strategy===_t?function(t,e){for(var a;;){if(0===t.lookahead&&(Zt(t),0===t.lookahead)){if(e===q)return 1;break}if(t.match_length=0,a=X(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++,a&&(zt(t,!1),0===t.strm.avail_out))return 1}return t.insert=0,e===V?(zt(t,!0),0===t.strm.avail_out?3:4):t.last_lit&&(zt(t,!1),0===t.strm.avail_out)?1:2}(r,e):r.strategy===ht?function(t,e){for(var a,n,r,i,s=t.window;;){if(t.lookahead<=ft){if(Zt(t),t.lookahead<=ft&&e===q)return 1;if(0===t.lookahead)break}if(t.match_length=0,t.lookahead>=3&&t.strstart>0&&(n=s[r=t.strstart-1])===s[++r]&&n===s[++r]&&n===s[++r]){i=t.strstart+ft;do{}while(n===s[++r]&&n===s[++r]&&n===s[++r]&&n===s[++r]&&n===s[++r]&&n===s[++r]&&n===s[++r]&&n===s[++r]&&r<i);t.match_length=ft-(i-r),t.match_length>t.lookahead&&(t.match_length=t.lookahead)}if(t.match_length>=3?(a=X(t,1,t.match_length-3),t.lookahead-=t.match_length,t.strstart+=t.match_length,t.match_length=0):(a=X(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++),a&&(zt(t,!1),0===t.strm.avail_out))return 1}return t.insert=0,e===V?(zt(t,!0),0===t.strm.avail_out?3:4):t.last_lit&&(zt(t,!1),0===t.strm.avail_out)?1:2}(r,e):Lt[r.level].func(r,e);if(3!==_&&4!==_||(r.status=wt),1===_||3===_)return 0===t.avail_out&&(r.last_flush=-1),tt;if(2===_&&(e===J?W(r):e!==$&&(j(r,0,0,!1),e===Q&&(mt(r.head),0===r.lookahead&&(r.strstart=0,r.block_start=0,r.insert=0))),kt(t),0===t.avail_out))return r.last_flush=-1,tt}return e!==V?tt:r.wrap<=0?et:(2===r.wrap?(xt(r,255&t.adler),xt(r,t.adler>>8&255),xt(r,t.adler>>16&255),xt(r,t.adler>>24&255),xt(r,255&t.total_in),xt(r,t.total_in>>8&255),xt(r,t.total_in>>16&255),xt(r,t.total_in>>24&255)):(At(r,t.adler>>>16),At(r,65535&t.adler)),kt(t),r.wrap>0&&(r.wrap=-r.wrap),0!==r.pending?tt:et)},deflateEnd:function(t){if(!t||!t.state)return at;var e=t.state.status;return 42!==e&&69!==e&&73!==e&&91!==e&&e!==pt&&e!==gt&&e!==wt?vt(t,at):(t.state=null,e===gt?vt(t,nt):tt)},deflateSetDictionary:function(t,e){var a=e.length;if(!t||!t.state)return at;var n=t.state,r=n.wrap;if(2===r||1===r&&42!==n.status||n.lookahead)return at;if(1===r&&(t.adler=C(t.adler,e,a,0)),n.wrap=0,a>=n.w_size){0===r&&(mt(n.head),n.strstart=0,n.block_start=0,n.insert=0);var i=new Uint8Array(n.w_size);i.set(e.subarray(a-n.w_size,a),0),e=i,a=n.w_size}var s=t.avail_in,_=t.next_in,h=t.input;for(t.avail_in=a,t.next_in=0,t.input=e,Zt(n);n.lookahead>=3;){var l=n.strstart,o=n.lookahead-2;do{n.ins_h=yt(n,n.ins_h,n.window[l+3-1]),n.prev[l&n.w_mask]=n.head[n.ins_h],n.head[n.ins_h]=l,l++}while(--o);n.strstart=l,n.lookahead=2,Zt(n)}return n.strstart+=n.lookahead,n.block_start=n.strstart,n.insert=n.lookahead,n.lookahead=0,n.match_length=n.prev_length=2,n.match_available=0,t.next_in=_,t.input=h,t.avail_in=s,n.wrap=r,tt},deflateInfo:"pako deflate (from Nodeca project)"};for(var Dt=new Uint8Array(256),Bt=0;Bt<256;Bt++)Dt[Bt]=Bt>=252?6:Bt>=248?5:Bt>=240?4:Bt>=224?3:Bt>=192?2:1;Dt[254]=Dt[254]=1;var Ct=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0},Ht=Object.prototype.toString,Mt=K.Z_NO_FLUSH,Yt=K.Z_SYNC_FLUSH,Kt=K.Z_FULL_FLUSH,Pt=K.Z_FINISH,jt=K.Z_OK,Gt=K.Z_STREAM_END,Xt=K.Z_DEFAULT_COMPRESSION,Wt=K.Z_DEFAULT_STRATEGY,qt=K.Z_DEFLATED;function Jt(){this.options={level:Xt,method:qt,chunkSize:16384,windowBits:15,memLevel:8,strategy:Wt};var t=this.options;t.raw&&t.windowBits>0?t.windowBits=-t.windowBits:t.gzip&&t.windowBits>0&&t.windowBits<16&&(t.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new Ct,this.strm.avail_out=0;var e=Ot.deflateInit2(this.strm,t.level,t.method,t.windowBits,t.memLevel,t.strategy);if(e!==jt)throw new Error(Y[e]);if(t.header&&Ot.deflateSetHeader(this.strm,t.header),t.dictionary){var a;if(a="[object ArrayBuffer]"===Ht.call(t.dictionary)?new Uint8Array(t.dictionary):t.dictionary,(e=Ot.deflateSetDictionary(this.strm,a))!==jt)throw new Error(Y[e]);this._dict_set=!0}}function Qt(t,e,a){try{t.postMessage({type:"errored",error:e,streamId:a})}catch(n){t.postMessage({type:"errored",error:String(e),streamId:a})}}function Vt(t){var e=t.strm.adler;return new Uint8Array([3,0,e>>>24&255,e>>>16&255,e>>>8&255,255&e])}Jt.prototype.push=function(t,e){var a,n,r=this.strm,i=this.options.chunkSize;if(this.ended)return!1;for(n=e===~~e?e:!0===e?Pt:Mt,"[object ArrayBuffer]"===Ht.call(t)?r.input=new Uint8Array(t):r.input=t,r.next_in=0,r.avail_in=r.input.length;;)if(0===r.avail_out&&(r.output=new Uint8Array(i),r.next_out=0,r.avail_out=i),(n===Yt||n===Kt)&&r.avail_out<=6)this.onData(r.output.subarray(0,r.next_out)),r.avail_out=0;else{if((a=Ot.deflate(r,n))===Gt)return r.next_out>0&&this.onData(r.output.subarray(0,r.next_out)),a=Ot.deflateEnd(this.strm),this.onEnd(a),this.ended=!0,a===jt;if(0!==r.avail_out){if(n>0&&r.next_out>0)this.onData(r.output.subarray(0,r.next_out)),r.avail_out=0;else if(0===r.avail_in)break}else this.onData(r.output)}return!0},Jt.prototype.onData=function(t){this.chunks.push(t)},Jt.prototype.onEnd=function(t){t===jt&&(this.result=function(t){for(var e=0,a=0,n=t.length;a<n;a++)e+=t[a].length;for(var r=new Uint8Array(e),i=0,s=0,_=t.length;i<_;i++){var h=t[i];r.set(h,s),s+=h.length}return r}(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg},function(e){void 0===e&&(e=self);try{var a=new Map;e.addEventListener("message",(function(n){try{var r=function(e,a){switch(a.action){case"init":return{type:"initialized",version:"5.28.0"};case"write":var n=e.get(a.streamId);n||(n=new Jt,e.set(a.streamId,n));var r=n.chunks.length,i=function(t){if("function"==typeof TextEncoder&&TextEncoder.prototype.encode)return(new TextEncoder).encode(t);var e,a,n,r,i,s=t.length,_=0;for(r=0;r<s;r++)55296==(64512&(a=t.charCodeAt(r)))&&r+1<s&&56320==(64512&(n=t.charCodeAt(r+1)))&&(a=65536+(a-55296<<10)+(n-56320),r++),_+=a<128?1:a<2048?2:a<65536?3:4;for(e=new Uint8Array(_),i=0,r=0;i<_;r++)55296==(64512&(a=t.charCodeAt(r)))&&r+1<s&&56320==(64512&(n=t.charCodeAt(r+1)))&&(a=65536+(a-55296<<10)+(n-56320),r++),a<128?e[i++]=a:a<2048?(e[i++]=192|a>>>6,e[i++]=128|63&a):a<65536?(e[i++]=224|a>>>12,e[i++]=128|a>>>6&63,e[i++]=128|63&a):(e[i++]=240|a>>>18,e[i++]=128|a>>>12&63,e[i++]=128|a>>>6&63,e[i++]=128|63&a);return e}(a.data);return n.push(i,K.Z_SYNC_FLUSH),{type:"wrote",id:a.id,streamId:a.streamId,result:t(n.chunks.slice(r)),trailer:Vt(n),additionalBytesCount:i.length};case"reset":e.delete(a.streamId)}}(a,n.data);r&&e.postMessage(r)}catch(t){Qt(e,t,n.data&&"streamId"in n.data?n.data.streamId:void 0)}}))}catch(t){Qt(e,t)}}()}();',
          ])
        )
    );
  }
  var xu = { status: 0 };
  function Cu(t, e, n, r) {
    switch (
      (void 0 === r && (r = ku),
      0 === xu.status &&
        (function (t, e, n) {
          void 0 === n && (n = ku);
          try {
            var r = n(t),
              o = ot(t, r, "error", function (n) {
                Tu(t, e, n);
              }).stop,
              a = ot(t, r, "message", function (n) {
                var r,
                  i = n.data;
                "errored" === i.type
                  ? Tu(t, e, i.error, i.streamId)
                  : "initialized" === i.type &&
                    ((r = i.version),
                    1 === xu.status &&
                      (xu = {
                        status: 3,
                        worker: xu.worker,
                        stop: xu.stop,
                        version: r,
                      }));
              }).stop;
            r.postMessage({ action: "init" }),
              R(function () {
                return (function (t) {
                  1 === xu.status &&
                    (i.error(
                      "".concat(
                        t,
                        " failed to start: a timeout occurred while initializing the Worker"
                      )
                    ),
                    xu.initializationFailureCallbacks.forEach(function (t) {
                      return t();
                    }),
                    (xu = { status: 2 }));
                })(e);
              }, Su),
              (xu = {
                status: 1,
                worker: r,
                stop: function () {
                  o(), a();
                },
                initializationFailureCallbacks: [],
              });
          } catch (n) {
            Tu(t, e, n);
          }
        })(t, e, r),
      xu.status)
    ) {
      case 1:
        return xu.initializationFailureCallbacks.push(n), xu.worker;
      case 3:
        return xu.worker;
    }
  }
  function Eu() {
    return xu.status;
  }
  function Tu(t, e, n, r) {
    if (1 === xu.status || 0 === xu.status) {
      if (
        (i.error(
          "".concat(
            e,
            " failed to start: an error occurred while creating the Worker:"
          ),
          n
        ),
        n instanceof Event ||
          (n instanceof Error &&
            (m((s = n.message), "Content Security Policy") ||
              m(s, "requires 'TrustedScriptURL'"))))
      ) {
        var a = void 0;
        (a = t.workerUrl
          ? "Please make sure the Worker URL ".concat(
              t.workerUrl,
              " is correct and CSP is correctly configured."
            )
          : "Please make sure CSP is correctly configured."),
          i.error(
            ""
              .concat(a, " See documentation at ")
              .concat(
                o,
                "/integrations/content_security_policy_logs/#use-csp-with-real-user-monitoring-and-session-replay"
              )
          );
      } else ye(n);
      1 === xu.status &&
        xu.initializationFailureCallbacks.forEach(function (t) {
          return t();
        }),
        (xu = { status: 2 });
    } else
      ye(n, { worker_version: 3 === xu.status && xu.version, stream_id: r });
    var s;
  }
  var Au,
    Ru,
    Iu,
    Nu,
    Ou = (function (t, e) {
      if ((Me() && !Oe("records")) || !yu())
        return {
          start: L,
          stop: L,
          getReplayStats: function () {},
          onRumStart: L,
          isRecording: function () {
            return !1;
          },
          getSessionReplayLink: function () {},
        };
      var n = { status: 1 },
        r = function () {
          n = { status: 1 };
        },
        i = function () {
          n = { status: 0 };
        },
        o = L;
      return {
        start: function (t) {
          return r(t);
        },
        stop: function () {
          return i();
        },
        getSessionReplayLink: function () {
          return o();
        },
        onRumStart: function (a, s, u, c, l) {
          var d;
          s.startSessionReplayRecordingManually && (n = { status: 0 }),
            a.subscribe(8, function () {
              (2 !== n.status && 3 !== n.status) || (i(), (n = { status: 1 }));
            }),
            a.subscribe(10, function (t) {
              t.reason === ir.UNLOADING && i();
            }),
            a.subscribe(9, function () {
              1 === n.status && r();
            }),
            (r = function (r) {
              var o = u.findTrackedSession();
              o && (0 !== o.sessionReplay || (r && r.force))
                ? 2 !== n.status &&
                  3 !== n.status &&
                  ((n = { status: 2 }),
                  Ao(s, "interactive", function () {
                    if (2 === n.status) {
                      var r =
                        (d ||
                          (l ||
                            (l = Cu(
                              s,
                              "Datadog Session Replay",
                              function () {
                                i();
                              },
                              e
                            )),
                          l && (d = wu(s, l, 1))),
                        d);
                      if (r) {
                        var o = t(a, s, u, c, r).stop;
                        n = { status: 3, stopRecording: o };
                      } else n = { status: 0 };
                    }
                  }),
                  r && r.force && 0 === o.sessionReplay && u.setForcedReplay())
                : (n = { status: 1 });
            }),
            (i = function () {
              0 !== n.status &&
                (3 === n.status && n.stopRecording(), (n = { status: 0 }));
            }),
            (o = function () {
              return bu(s, u, c, 0 !== n.status);
            }),
            1 === n.status && r();
        },
        isRecording: function () {
          return 3 === Eu() && 3 === n.status;
        },
        getReplayStats: function (t) {
          return 3 === Eu()
            ? (function (t) {
                return null == ls ? void 0 : ls.get(t);
              })(t)
            : void 0;
        },
      };
    })(function (t, e, n, r, i, o) {
      var a,
        s = [],
        u =
          o ||
          Pa(e, e.sessionReplayEndpointBuilder, gu, function (e) {
            t.notify(13, { error: e }),
              _e("Error reported to customer", { "error.message": e.message });
          });
      if (Me())
        a = (function (t) {
          var e = Ne();
          return {
            addRecord: function (n) {
              var r = t.findView();
              e.send("record", n, r.id);
            },
          };
        })(r).addRecord;
      else {
        var c = _u(t, e, n, r, u, i);
        (a = c.addRecord), s.push(c.stop);
      }
      var l = vu({
        emit: a,
        configuration: e,
        lifeCycle: t,
        viewHistory: r,
      }).stop;
      return (
        s.push(l),
        {
          stop: function () {
            s.forEach(function (t) {
              return t();
            });
          },
        }
      );
    }),
    Mu = (function (t, e, n) {
      void 0 === n && (n = {});
      var r,
        o,
        a = q(0),
        s = rt(a.getOrCreateTracker(2)),
        u = rt(a.getOrCreateTracker(1)),
        c = {
          tryToInit: function (t) {
            r || (r = t);
          },
          update: function (t) {
            (r = t), o.notify();
          },
          isGranted: function () {
            return r === it.GRANTED;
          },
          observable: (o = new et()),
        },
        l = { vitalsByName: new Map(), vitalsByReference: new WeakMap() };
      function d() {
        return (function (t, e, n) {
          return {
            context: t.getContext(),
            user: e.getContext(),
            hasReplay: !!n.isRecording() || void 0,
          };
        })(s, u, e);
      }
      var h,
        m,
        g = rr(n, d, c, l, function (r, i, o) {
          r.storeContextsAcrossPages &&
            (ct(r, s, "rum", 2), ct(r, u, "rum", 1)),
            a.setCompressionStatus(i ? 1 : 2);
          var f = t(
            r,
            e,
            a,
            d,
            o,
            i && n.createDeflateEncoder
              ? function (t) {
                  return n.createDeflateEncoder(r, i, t);
                }
              : lt,
            c,
            l
          );
          return (
            e.onRumStart(f.lifeCycle, r, f.session, f.viewHistory, i),
            (g = (function (t, e) {
              return S(
                {
                  init: function (t) {
                    ke("DD_RUM", t);
                  },
                  initConfiguration: t.initConfiguration,
                },
                e
              );
            })(g, f)),
            f
          );
        }),
        _ = p(function (t) {
          var e = "object" == typeof t ? t : { name: t };
          e.context && a.getOrCreateTracker(3).updateCustomerData(e.context),
            g.startView(e),
            be({ feature: "start-view" });
        }),
        y =
          ((h = {
            init: p(function (t) {
              g.init(t, y),
                Lt(Tt.UPDATE_VIEW_NAME) &&
                  (y.updateViewName = p(function (t) {
                    g.updateViewName(t);
                  }));
            }),
            setTrackingConsent: p(function (t) {
              c.update(t),
                be({ feature: "set-tracking-consent", tracking_consent: t });
            }),
            setViewContext: p(function (t) {
              g.setViewContext(t);
            }),
            setViewContextProperty: p(function (t, e) {
              g.setViewContextProperty(t, e);
            }),
            setGlobalContext: p(function (t) {
              s.setContext(t), be({ feature: "set-global-context" });
            }),
            getGlobalContext: p(function () {
              return s.getContext();
            }),
            setGlobalContextProperty: p(function (t, e) {
              s.setContextProperty(t, e), be({ feature: "set-global-context" });
            }),
            removeGlobalContextProperty: p(function (t) {
              return s.removeContextProperty(t);
            }),
            clearGlobalContext: p(function () {
              return s.clearContext();
            }),
            getInternalContext: p(function (t) {
              return g.getInternalContext(t);
            }),
            getInitConfiguration: p(function () {
              return K(g.initConfiguration);
            }),
            addAction: function (t, e) {
              var n = xt();
              v(function () {
                g.addAction({
                  name: $(t),
                  context: $(e),
                  startClocks: ee(),
                  type: "custom",
                  handlingStack: n,
                }),
                  be({ feature: "add-action" });
              });
            },
            addError: function (t, e) {
              var n = xt();
              v(function () {
                g.addError({
                  error: t,
                  handlingStack: n,
                  context: $(e),
                  startClocks: ee(),
                }),
                  be({ feature: "add-error" });
              });
            },
            addTiming: p(function (t, e) {
              g.addTiming($(t), e);
            }),
            setUser: p(function (t) {
              (function (t) {
                var e = "object" === G(t);
                return e || i.error("Unsupported user:", t), e;
              })(t) && u.setContext(Se(t)),
                be({ feature: "set-user" });
            }),
            getUser: p(function () {
              return u.getContext();
            }),
            setUserProperty: p(function (t, e) {
              var n,
                r = Se(((n = {}), (n[t] = e), n))[t];
              u.setContextProperty(t, r), be({ feature: "set-user" });
            }),
            removeUserProperty: p(function (t) {
              return u.removeContextProperty(t);
            }),
            clearUser: p(function () {
              return u.clearContext();
            }),
            startView: _,
            stopSession: p(function () {
              g.stopSession(), be({ feature: "stop-session" });
            }),
            addFeatureFlagEvaluation: p(function (t, e) {
              g.addFeatureFlagEvaluation($(t), $(e)),
                be({ feature: "add-feature-flag-evaluation" });
            }),
            getSessionReplayLink: p(function () {
              return e.getSessionReplayLink();
            }),
            startSessionReplayRecording: p(function (t) {
              e.start(t),
                be({
                  feature: "start-session-replay-recording",
                  force: t && t.force,
                });
            }),
            stopSessionReplayRecording: p(function () {
              return e.stop();
            }),
            addDurationVital: p(function (t, e) {
              var n;
              be({ feature: "add-duration-vital" }),
                g.addDurationVital({
                  name: $(t),
                  type: "duration",
                  startClocks:
                    ((n = e.startTime), { relative: oe(n), timeStamp: n }),
                  duration: e.duration,
                  context: $(e && e.context),
                  description: $(e && e.description),
                });
            }),
            startDurationVital: p(function (t, e) {
              return (
                be({ feature: "start-duration-vital" }),
                g.startDurationVital($(t), {
                  context: $(e && e.context),
                  description: $(e && e.description),
                })
              );
            }),
            stopDurationVital: p(function (t, e) {
              be({ feature: "stop-duration-vital" }),
                g.stopDurationVital("string" == typeof t ? $(t) : t, {
                  context: $(e && e.context),
                  description: $(e && e.description),
                });
            }),
          }),
          (m = S(
            {
              version: "5.28.0",
              onReady: function (t) {
                t();
              },
            },
            h
          )),
          Object.defineProperty(m, "_setDebug", {
            get: function () {
              return f;
            },
            enumerable: !1,
          }),
          m);
      return y;
    })(
      function (t, e, n, r, i, o, a, s) {
        var u = [],
          c = new yr();
        c.subscribe(12, function (t) {
          return se("rum", t);
        });
        var l = (function (t) {
          var e = ge("browser-rum-sdk", t);
          if (Me()) {
            var n = Ne();
            e.observable.subscribe(function (t) {
              return n.send("internal_telemetry", t);
            });
          }
          return e;
        })(t);
        l.setContextProvider(function () {
          var e, n;
          return {
            application: { id: t.applicationId },
            session: {
              id:
                null === (e = g.findTrackedSession()) || void 0 === e
                  ? void 0
                  : e.id,
            },
            view: {
              id: null === (n = C.findView()) || void 0 === n ? void 0 : n.id,
            },
            action: { id: T.findActionId() },
          };
        });
        var d = function (t) {
            c.notify(13, { error: t }),
              _e("Error reported to customer", { "error.message": t.message });
          },
          f = (function (t, e) {
            var n = Sr({ expireDelay: ja });
            return (
              t.subscribe(1, function (t) {
                var r = t.startClocks;
                n.add({}, r.relative), e.resetCustomerData();
              }),
              t.subscribe(5, function (t) {
                var e = t.endClocks;
                n.closeActive(e.relative);
              }),
              {
                findFeatureFlagEvaluations: function (t) {
                  return n.find(t);
                },
                addFeatureFlagEvaluation: function (t, r) {
                  var i = n.find();
                  i && ((i[t] = r), e.updateCustomerData(i));
                },
                stop: function () {
                  return e.stop();
                },
              }
            );
          })(c, n.getOrCreateTracker(0)),
          v = (function (t) {
            return new et(function (e) {
              var n = at(
                  t,
                  window,
                  ["visibilitychange", "freeze"],
                  function (t) {
                    "visibilitychange" === t.type &&
                    "hidden" === document.visibilityState
                      ? e.notify({ reason: ir.HIDDEN })
                      : "freeze" === t.type && e.notify({ reason: ir.FROZEN });
                  },
                  { capture: !0 }
                ).stop,
                r = ot(t, window, "beforeunload", function () {
                  e.notify({ reason: ir.UNLOADING });
                }).stop;
              return function () {
                n(), r();
              };
            });
          })(t),
          h = v.subscribe(function (t) {
            c.notify(10, t);
          });
        u.push(function () {
          return h.unsubscribe();
        });
        var g = Me()
          ? (function () {
              var t = {
                id: "00000000-aaaa-0000-aaaa-000000000000",
                sessionReplay: Oe("records") ? 1 : 0,
              };
              return {
                findTrackedSession: function () {
                  return t;
                },
                expire: L,
                expireObservable: new et(),
                setForcedReplay: L,
              };
            })()
          : Sa(t, c, a);
        if (Me())
          !(function (t) {
            var e = Ne();
            t.subscribe(12, function (t) {
              e.send("rum", t);
            });
          })(c);
        else {
          var _ = Fa(t, c, l.observable, d, v, g.expireObservable, o);
          u.push(function () {
            return _.stop();
          }),
            (function (t, e, n, r, i) {
              e.enabled &&
                Bt(t.customerDataTelemetrySampleRate) &&
                ($a(),
                Qa(),
                n.subscribe(12, function (t) {
                  (Ka = !0),
                    Ya(
                      Za.globalContextBytes,
                      r.getOrCreateTracker(2).getBytesCount()
                    ),
                    Ya(
                      Za.userContextBytes,
                      r.getOrCreateTracker(1).getBytesCount()
                    ),
                    Ya(
                      Za.featureFlagBytes,
                      m(["view", "error"], t.type)
                        ? r.getOrCreateTracker(0).getBytesCount()
                        : 0
                    );
                }),
                i.subscribe(function (t) {
                  var e = t.bytesCount,
                    n = t.messagesCount;
                  Ka &&
                    ((Ga.batchCount += 1),
                    Ya(Ga.batchBytesCount, e),
                    Ya(Ga.batchMessagesCount, n),
                    Ja(Ga.globalContextBytes, Za.globalContextBytes),
                    Ja(Ga.userContextBytes, Za.userContextBytes),
                    Ja(Ga.featureFlagBytes, Za.featureFlagBytes),
                    Qa());
                }),
                N(Xa, Wa));
            })(t, l, c, n, _.flushObservable);
        }
        var y,
          b =
            ((y = ar()),
            new et(function (t) {
              if (y) {
                var e = new y(
                  p(function () {
                    return t.notify();
                  })
                );
                return (
                  e.observe(document, {
                    attributes: !0,
                    characterData: !0,
                    childList: !0,
                    subtree: !0,
                  }),
                  function () {
                    return e.disconnect();
                  }
                );
              }
            })),
          w = Ha(t, location),
          k = rs(t),
          x = (function (t, e, n, r, i, o, a, s, u) {
            var c = (function (t) {
                var e = Sr({ expireDelay: xr });
                return (
                  t.subscribe(1, function (t) {
                    e.add(
                      (function (t) {
                        return {
                          service: t.service,
                          version: t.version,
                          context: t.context,
                          id: t.id,
                          name: t.name,
                          startClocks: t.startClocks,
                        };
                      })(t),
                      t.startClocks.relative
                    );
                  }),
                  t.subscribe(5, function (t) {
                    var n = t.endClocks;
                    e.closeActive(n.relative);
                  }),
                  t.subscribe(3, function (t) {
                    var n = e.find(t.startClocks.relative);
                    n && t.name && (n.name = t.name),
                      n && t.context && (n.context = t.context);
                  }),
                  t.subscribe(9, function () {
                    e.reset();
                  }),
                  {
                    findView: function (t) {
                      return e.find(t);
                    },
                    stop: function () {
                      e.stop();
                    },
                  }
                );
              })(t),
              l = (function (t, e, n) {
                var r,
                  i = Sr({ expireDelay: Ba });
                t.subscribe(1, function (t) {
                  var e = t.startClocks,
                    o = n.href;
                  i.add(
                    a({ url: o, referrer: r || document.referrer }),
                    e.relative
                  ),
                    (r = o);
                }),
                  t.subscribe(5, function (t) {
                    var e = t.endClocks;
                    i.closeActive(e.relative);
                  });
                var o = e.subscribe(function (t) {
                  var e = t.newLocation,
                    n = i.find();
                  if (n) {
                    var r = te();
                    i.closeActive(r),
                      i.add(a({ url: e.href, referrer: n.referrer }), r);
                  }
                });
                function a(t) {
                  return { url: t.url, referrer: t.referrer };
                }
                return {
                  findUrl: function (t) {
                    return i.find(t);
                  },
                  stop: function () {
                    o.unsubscribe(), i.stop();
                  },
                };
              })(t, o, n),
              d = (function (t, e, n, r) {
                t.subscribe(0, function (e) {
                  return t.notify(11, ho(e, r));
                });
                var i = { findActionId: L };
                return (
                  n.trackUserInteractions && (i = po(t, e, n).actionContexts),
                  {
                    addAction: function (e, n) {
                      t.notify(11, S({ savedCommonContext: n }, ho(e, r)));
                    },
                    actionContexts: i,
                  }
                );
              })(t, a, e, i),
              f = d.addAction,
              p = d.actionContexts,
              v = (function (t) {
                var e = sa();
                return {
                  get: function () {
                    return { viewport: e };
                  },
                  stop: aa(t).subscribe(function (t) {
                    e = t;
                  }).unsubscribe,
                };
              })(e),
              h = (function (t, e) {
                var n;
                void 0 === e && (e = os(t, us));
                var r =
                    Ze(us) ||
                    (null === (n = window.Cypress) || void 0 === n
                      ? void 0
                      : n.env("traceId")),
                  i = e.subscribe(function (t) {
                    r = t;
                  });
                return {
                  get: function () {
                    if ("string" == typeof r) return { test_execution_id: r };
                  },
                  stop: function () {
                    return i.unsubscribe();
                  },
                };
              })(e);
            return (
              _r(e, t, r, c, l, p, v, h, s, u),
              {
                viewHistory: c,
                pageStateHistory: i,
                urlContexts: l,
                addAction: f,
                actionContexts: p,
                stop: function () {
                  h.stop(), v.stop(), l.stop(), c.stop(), i.stop();
                },
              }
            );
          })(c, t, location, g, k, w, b, r, d),
          C = x.viewHistory,
          E = x.urlContexts,
          T = x.actionContexts,
          A = x.addAction,
          R = x.stop;
        u.push(R), he.drain();
        var I = ma(c, t, location, b, w, f, k, e, i),
          O = I.addTiming,
          M = I.startView,
          D = I.updateViewName,
          P = I.setViewContext,
          U = I.setViewContextProperty,
          z = I.stop;
        u.push(z);
        var V = Do(c, t, k).stop;
        if ((u.push(V), Lt(Tt.LONG_ANIMATION_FRAME))) {
          if (t.trackLongTasks) {
            var F = (function (t, e) {
              var n = Qr(e, {
                type: Gr.LONG_ANIMATION_FRAME,
                buffered: !0,
              }).subscribe(function (e) {
                for (var n = 0, r = e; n < r.length; n++) {
                  var i = r[n],
                    o = Xt(i.startTime),
                    a = {
                      date: o.timeStamp,
                      long_task: {
                        id: xe(),
                        entry_type: "long-animation-frame",
                        duration: Jt(i.duration),
                        blocking_duration: Jt(i.blockingDuration),
                        first_ui_event_timestamp: Jt(i.firstUIEventTimestamp),
                        render_start: Jt(i.renderStart),
                        style_and_layout_start: Jt(i.styleAndLayoutStart),
                        scripts: i.scripts.map(function (t) {
                          return {
                            duration: Jt(t.duration),
                            pause_duration: Jt(t.pauseDuration),
                            forced_style_and_layout_duration: Jt(
                              t.forcedStyleAndLayoutDuration
                            ),
                            start_time: Jt(t.startTime),
                            execution_start: Jt(t.executionStart),
                            source_url: t.sourceURL,
                            source_function_name: t.sourceFunctionName,
                            source_char_position: t.sourceCharPosition,
                            invoker: t.invoker,
                            invoker_type: t.invokerType,
                            window_attribution: t.windowAttribution,
                          };
                        }),
                      },
                      type: "long_task",
                      _dd: { discarded: !1 },
                    };
                  t.notify(11, {
                    rawRumEvent: a,
                    startTime: o.relative,
                    domainContext: { performanceEntry: i },
                  });
                }
              });
              return {
                stop: function () {
                  return n.unsubscribe();
                },
              };
            })(c, t).stop;
            u.push(F);
          }
        } else
          !(function (t, e) {
            var n = Qr(e, { type: Gr.LONG_TASK, buffered: !0 }).subscribe(
              function (n) {
                for (var r = 0, i = n; r < i.length; r++) {
                  var o = i[r];
                  if (o.entryType !== Gr.LONG_TASK) break;
                  if (!e.trackLongTasks) break;
                  var a = Xt(o.startTime),
                    s = {
                      date: a.timeStamp,
                      long_task: {
                        id: xe(),
                        entry_type: "long-task",
                        duration: Jt(o.duration),
                      },
                      type: "long_task",
                      _dd: { discarded: !1 },
                    };
                  t.notify(11, {
                    rawRumEvent: s,
                    startTime: a.relative,
                    domainContext: { performanceEntry: o },
                  });
                }
              }
            );
          })(c, t);
        var B = xo(c, t, k, f).addError;
        Wr(c, t, g);
        var H = Ae(c, k, s),
          q = (function (t, e, n, r, i) {
            return {
              get: function (o) {
                var a = n.findView(o),
                  s = i.findUrl(o),
                  u = e.findTrackedSession(o);
                if (u && a && s) {
                  var c = r.findActionId(o);
                  return {
                    application_id: t,
                    session_id: u.id,
                    user_action: c ? { id: c } : void 0,
                    view: {
                      id: a.id,
                      name: a.name,
                      referrer: s.referrer,
                      url: s.url,
                    },
                  };
                }
              },
            };
          })(t.applicationId, g, C, T, E);
        return {
          addAction: A,
          addError: B,
          addTiming: O,
          addFeatureFlagEvaluation: f.addFeatureFlagEvaluation,
          startView: M,
          setViewContext: P,
          setViewContextProperty: U,
          updateViewName: D,
          lifeCycle: c,
          viewHistory: C,
          session: g,
          stopSession: function () {
            return g.expire();
          },
          getInternalContext: q.get,
          startDurationVital: H.startDurationVital,
          stopDurationVital: H.stopDurationVital,
          addDurationVital: H.addDurationVital,
          stop: function () {
            u.forEach(function (t) {
              return t();
            });
          },
        };
      },
      Ou,
      { startDeflateWorker: Cu, createDeflateEncoder: wu }
    );
  (Au = k()),
    (Iu = Mu),
    (Nu = Au[(Ru = "DD_RUM")]) &&
      !Nu.q &&
      Nu.version &&
      i.warn(
        "SDK is loaded more than once. This is unsupported and might have unexpected behavior."
      ),
    (Au[Ru] = Iu),
    Nu &&
      Nu.q &&
      Nu.q.forEach(function (t) {
        return u(t, "onReady callback threw an error:")();
      });
})();
