(function() {
    var window = this;
    var d = this;
    var N = function(a) {
        N[" "](a);
        return a
    };
    N[" "] = function() {};
    var g = function() {
        return d.googletag || (d.googletag = {})
    };
    var f = {
        1: "pagead2.googlesyndication.com",
        2: "pubads.g.doubleclick.net",
        3: "securepubads.g.doubleclick.net",
        7: .02,
        10: 0,
        13: 1500,
        16: .01,
        17: 1,
        20: 0,
        23: .001,
        24: 200,
        27: .01,
        28: 0,
        29: .01,
        33: "pagead2.googlesyndication.com",
        34: 1,
        36: !1,
        37: .01,
        38: .001,
        46: !1,
        47: 1E-4,
        53: "",
        54: 0,
        57: .05,
        58: 1,
        60: 0,
        63: 0,
        65: .01,
        66: 1E-5,
        67: 1,
        69: .99,
        70: 0,
        71: .05,
        73: .001,
        74: .05,
        75: "",
        76: "",
        77: .001,
        78: .01,
        88: 1,
        79: .95,
        81: .001,
        83: 1E-4,
        84: .001,
        85: .01,
        87: .2,
        89: .995,
        90: .01,
        91: .01,
        92: .01,
        93: .05,
        94: .01,
        95: .05,
        96: .995,
        97: .001,
        98: .01,
        99: .01,
        101: .001,
        102: .95,
        103: .01,
        104: "/pagead/js/rum.js",
        105: 0,
        106: "1-0-9",
        107: "1-0-9",
        108: 1,
        109: .95,
        110: .001,
        112: .05,
        113: 0,
        114: .01,
        115: .001,
        116: .001,
        117: .001,
        118: .01,
        119: 0,
        123: .01,
        120: .01,
        121: 1E-4,
        124: .01,
        122: 1E-4,
        125: .01,
        126: .01,
        127: .001,
        128: .01,
        129: .001,
        130: 0,
        131: ""
    };
    f[6] = function(a, b) {
        try {
            for (var c = null; c != a; c = a, a = a.parent) switch (a.location.protocol) {
                case "https:":
                    return !0;
                case "file:":
                    return !!b;
                case "http:":
                    return !1
            }
        } catch (O) {}
        return !0
    }(window);
    f[49] = (new Date).getTime();
    var q = function() {
        var a = {}, b;
        for (b in f) a[b] = f[b];
        this.a = a
    };
    q.prototype.get = function(a) {
        return this.a[a]
    };
    q.prototype.set = function(a, b) {
        this.a[a] = b
    };
    q.a = void 0;
    q.getInstance = function() {
        return q.a ? q.a : q.a = new q
    };
    var r = q.getInstance().a,
        t = g(),
        u = t._vars_,
        m;
    for (m in u) r[m] = u[m];
    t._vars_ = r;
    var e = function() {
        return "121"
    }, h = g();
    h.hasOwnProperty("getVersion") || (h.getVersion = e);
    N("partner.googleadservices.com");
    N("www.googletagservices.com");
    var w = "",
        x = "",
        k = q.getInstance().get(46) && !q.getInstance().get(6),
        w = k ? "http:" : "https:",
        x = q.getInstance().get(k ? 2 : 3);
    var l = g(),
        n = l.fifWin || window,
        p = n.document,
        v = [],
        y = g();
    y.hasOwnProperty("cmd") || (y.cmd = v);
    if (l.evalScripts) l.evalScripts();
    else {
        var z = p.currentScript,
            A;
        var B = q.getInstance().get(76);
        if (B) A = B;
        else {
            var C = !! q.getInstance().get(131),
                D = "",
                E = x,
                F = w;
            C && (D = "?sf=1");
            B = F + "//" + E + "/gpt/pubads_impl_121.js" + D;
            q.getInstance().set(76, B);
            A = B
        } - 1 != (window.navigator && window.navigator.userAgent || "").indexOf("iPhone") && q.getInstance().set(79, 0);
        var G = n.performance;
        if (G && G.now) {
            var H = G.now();
            (n.google_js_reporting_queue = n.google_js_reporting_queue || []).push({
                label: "1",
                type: 9,
                value: H,
                uniqueId: "rt." + Math.random()
            })
        }
        if (!("complete" ==
            p.readyState || "loaded" == p.readyState || z && z.async)) {
            var M = "gpt-impl-" + Math.random();
            try {
                p.write('<script id="' + M + '" src="' + A + '">\x3c/script>'), l._syncTagged_ = !0
            } catch (a) {}
            p.getElementById(M) && (l._loadStarted_ = !0)
        }
        if (!l._loadStarted_) {
            var P = p.createElement("script");
            P.src = A;
            P.async = !0;
            (p.head || p.body || p.documentElement).appendChild(P);
            l._loadStarted_ = !0
        }
    };
}).call(this.googletag && googletag.fifWin ? googletag.fifWin.parent : this)