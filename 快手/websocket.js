let main

(function (t)
{
    var i = {};
    function e(s) {
        if (i[s]) return i[s].exports;
        var n = i[s] = {
            exports: {},
            id: s,
            loaded: !1
        };
        // console.log(t[s],s)
        return t[s].call(n.exports, n, n.exports, e), n.loaded = !0, n.exports
    }
    main = e
})(
    {
    7645: (e,t,r)=>{
        "use strict";
        e.exports = g;
        var n = r(69313);
        ((g.prototype = Object.create(n.prototype)).constructor = g).className = "Type";
        var i = r(67025)
          , a = r(27598)
          , o = r(13548)
          , s = r(16039)
          , c = r(77513)
          , l = r(88368)
          , u = r(51408)
          , d = r(41173)
          , h = r(9935)
          , p = r(44928)
          , f = r(15305)
          , m = r(24497)
          , _ = r(33996)
          , v = r(71667);
        function g(e, t) {
            n.call(this, e, t),
            this.fields = {},
            this.oneofs = void 0,
            this.extensions = void 0,
            this.reserved = void 0,
            this.group = void 0,
            this._fieldsById = null,
            this._fieldsArray = null,
            this._oneofsArray = null,
            this._ctor = null
        }
        function y(e) {
            return e._fieldsById = e._fieldsArray = e._oneofsArray = null,
            delete e.encode,
            delete e.decode,
            delete e.verify,
            e
        }
        Object.defineProperties(g.prototype, {
            fieldsById: {
                get: function() {
                    if (this._fieldsById)
                        return this._fieldsById;
                    this._fieldsById = {};
                    for (var e = Object.keys(this.fields), t = 0; t < e.length; ++t) {
                        var r = this.fields[e[t]]
                          , n = r.id;
                        if (this._fieldsById[n])
                            throw Error("duplicate id " + n + " in " + this);
                        this._fieldsById[n] = r
                    }
                    return this._fieldsById
                }
            },
            fieldsArray: {
                get: function() {
                    return this._fieldsArray || (this._fieldsArray = h.toArray(this.fields))
                }
            },
            oneofsArray: {
                get: function() {
                    return this._oneofsArray || (this._oneofsArray = h.toArray(this.oneofs))
                }
            },
            ctor: {
                get: function() {
                    return this._ctor || (this.ctor = g.generateConstructor(this)())
                },
                set: function(e) {
                    var t = e.prototype;
                    t instanceof l || ((e.prototype = new l).constructor = e,
                    h.merge(e.prototype, t)),
                    e.$type = e.prototype.$type = this,
                    h.merge(e, l, !0),
                    this._ctor = e;
                    for (var r = 0; r < this.fieldsArray.length; ++r)
                        this._fieldsArray[r].resolve();
                    var n = {};
                    for (r = 0; r < this.oneofsArray.length; ++r)
                        n[this._oneofsArray[r].resolve().name] = {
                            get: h.oneOfGetter(this._oneofsArray[r].oneof),
                            set: h.oneOfSetter(this._oneofsArray[r].oneof)
                        };
                    r && Object.defineProperties(e.prototype, n)
                }
            }
        }),
        g.generateConstructor = function(e) {
            for (var t, r = h.codegen(["p"], e.name), n = 0; n < e.fieldsArray.length; ++n)
                (t = e._fieldsArray[n]).map ? r("this%s={}", h.safeProp(t.name)) : t.repeated && r("this%s=[]", h.safeProp(t.name));
            return r("if(p)for(var ks=Object.keys(p),i=0;i<ks.length;++i)if(p[ks[i]]!=null)")("this[ks[i]]=p[ks[i]]")
        }
        ,
        g.fromJSON = function(e, t) {
            var r = new g(e,t.options);
            r.extensions = t.extensions,
            r.reserved = t.reserved;
            for (var l = Object.keys(t.fields), u = 0; u < l.length; ++u)
                r.add((void 0 !== t.fields[l[u]].keyType ? s.fromJSON : o.fromJSON)(l[u], t.fields[l[u]]));
            if (t.oneofs)
                for (l = Object.keys(t.oneofs),
                u = 0; u < l.length; ++u)
                    r.add(a.fromJSON(l[u], t.oneofs[l[u]]));
            if (t.nested)
                for (l = Object.keys(t.nested),
                u = 0; u < l.length; ++u) {
                    var d = t.nested[l[u]];
                    r.add((void 0 !== d.id ? o.fromJSON : void 0 !== d.fields ? g.fromJSON : void 0 !== d.values ? i.fromJSON : void 0 !== d.methods ? c.fromJSON : n.fromJSON)(l[u], d))
                }
            return t.extensions && t.extensions.length && (r.extensions = t.extensions),
            t.reserved && t.reserved.length && (r.reserved = t.reserved),
            t.group && (r.group = !0),
            t.comment && (r.comment = t.comment),
            r
        }
        ,
        g.prototype.toJSON = function(e) {
            var t = n.prototype.toJSON.call(this, e)
              , r = !!e && Boolean(e.keepComments);
            return h.toObject(["options", t && t.options || void 0, "oneofs", n.arrayToJSON(this.oneofsArray, e), "fields", n.arrayToJSON(this.fieldsArray.filter((function(e) {
                return !e.declaringField
            }
            )), e) || {}, "extensions", this.extensions && this.extensions.length ? this.extensions : void 0, "reserved", this.reserved && this.reserved.length ? this.reserved : void 0, "group", this.group || void 0, "nested", t && t.nested || void 0, "comment", r ? this.comment : void 0])
        }
        ,
        g.prototype.resolveAll = function() {
            for (var e = this.fieldsArray, t = 0; t < e.length; )
                e[t++].resolve();
            var r = this.oneofsArray;
            for (t = 0; t < r.length; )
                r[t++].resolve();
            return n.prototype.resolveAll.call(this)
        }
        ,
        g.prototype.get = function(e) {
            return this.fields[e] || this.oneofs && this.oneofs[e] || this.nested && this.nested[e] || null
        }
        ,
        g.prototype.add = function(e) {
            if (this.get(e.name))
                throw Error("duplicate name '" + e.name + "' in " + this);
            if (e instanceof o && void 0 === e.extend) {
                if (this._fieldsById ? this._fieldsById[e.id] : this.fieldsById[e.id])
                    throw Error("duplicate id " + e.id + " in " + this);
                if (this.isReservedId(e.id))
                    throw Error("id " + e.id + " is reserved in " + this);
                if (this.isReservedName(e.name))
                    throw Error("name '" + e.name + "' is reserved in " + this);
                return e.parent && e.parent.remove(e),
                this.fields[e.name] = e,
                e.message = this,
                e.onAdd(this),
                y(this)
            }
            return e instanceof a ? (this.oneofs || (this.oneofs = {}),
            this.oneofs[e.name] = e,
            e.onAdd(this),
            y(this)) : n.prototype.add.call(this, e)
        }
        ,
        g.prototype.remove = function(e) {
            if (e instanceof o && void 0 === e.extend) {
                if (!this.fields || this.fields[e.name] !== e)
                    throw Error(e + " is not a member of " + this);
                return delete this.fields[e.name],
                e.parent = null,
                e.onRemove(this),
                y(this)
            }
            if (e instanceof a) {
                if (!this.oneofs || this.oneofs[e.name] !== e)
                    throw Error(e + " is not a member of " + this);
                return delete this.oneofs[e.name],
                e.parent = null,
                e.onRemove(this),
                y(this)
            }
            return n.prototype.remove.call(this, e)
        }
        ,
        g.prototype.isReservedId = function(e) {
            return n.isReservedId(this.reserved, e)
        }
        ,
        g.prototype.isReservedName = function(e) {
            return n.isReservedName(this.reserved, e)
        }
        ,
        g.prototype.create = function(e) {
            return new this.ctor(e)
        }
        ,
        g.prototype.setup = function() {
            for (var e = this.fullName, t = [], r = 0; r < this.fieldsArray.length; ++r)
                t.push(this._fieldsArray[r].resolve().resolvedType);
            this.encode = p(this)({
                Writer: d,
                types: t,
                util: h
            }),
            this.decode = f(this)({
                Reader: u,
                types: t,
                util: h
            }),
            this.verify = m(this)({
                types: t,
                util: h
            }),
            this.fromObject = _.fromObject(this)({
                types: t,
                util: h
            }),
            this.toObject = _.toObject(this)({
                types: t,
                util: h
            });
            var n = v[e];
            if (n) {
                var i = Object.create(this);
                i.fromObject = this.fromObject,
                this.fromObject = n.fromObject.bind(i),
                i.toObject = this.toObject,
                this.toObject = n.toObject.bind(i)
            }
            return this
        }
        ,
        g.prototype.encode = function(e, t) {
            return this.setup().encode(e, t)
        }
        ,
        g.prototype.encodeDelimited = function(e, t) {
            return this.encode(e, t && t.len ? t.fork() : t).ldelim()
        }
        ,
        g.prototype.decode = function(e, t) {
            return this.setup().decode(e, t)
        }
        ,
        g.prototype.decodeDelimited = function(e) {
            return e instanceof u || (e = u.create(e)),
            this.decode(e, e.uint32())
        }
        ,
        g.prototype.verify = function(e) {
            return this.setup().verify(e)
        }
        ,
        g.prototype.fromObject = function(e) {
            return this.setup().fromObject(e)
        }
        ,
        g.prototype.toObject = function(e, t) {
            return this.setup().toObject(e, t)
        }
        ,
        g.d = function(e) {
            return function(t) {
                h.decorateType(t, e)
            }
        }
    },
    69313: (e,t,r)=>{
        "use strict";
        e.exports = d;
        var n = r(3243);
        ((d.prototype = Object.create(n.prototype)).constructor = d).className = "Namespace";
        var i, a, o, s = r(13548), c = r(27598), l = r(9935);
        function u(e, t) {
            if (e && e.length) {
                for (var r = {}, n = 0; n < e.length; ++n)
                    r[e[n].name] = e[n].toJSON(t);
                return r
            }
        }
        function d(e, t) {
            n.call(this, e, t),
            this.nested = void 0,
            this._nestedArray = null
        }
        function h(e) {
            return e._nestedArray = null,
            e
        }
        d.fromJSON = function(e, t) {
            return new d(e,t.options).addJSON(t.nested)
        }
        ,
        d.arrayToJSON = u,
        d.isReservedId = function(e, t) {
            if (e)
                for (var r = 0; r < e.length; ++r)
                    if ("string" != typeof e[r] && e[r][0] <= t && e[r][1] > t)
                        return !0;
            return !1
        }
        ,
        d.isReservedName = function(e, t) {
            if (e)
                for (var r = 0; r < e.length; ++r)
                    if (e[r] === t)
                        return !0;
            return !1
        }
        ,
        Object.defineProperty(d.prototype, "nestedArray", {
            get: function() {
                return this._nestedArray || (this._nestedArray = l.toArray(this.nested))
            }
        }),
        d.prototype.toJSON = function(e) {
            return l.toObject(["options", this.options, "nested", u(this.nestedArray, e)])
        }
        ,
        d.prototype.addJSON = function(e) {
            if (e)
                for (var t, r = Object.keys(e), n = 0; n < r.length; ++n)
                    t = e[r[n]],
                    this.add((void 0 !== t.fields ? i.fromJSON : void 0 !== t.values ? o.fromJSON : void 0 !== t.methods ? a.fromJSON : void 0 !== t.id ? s.fromJSON : d.fromJSON)(r[n], t));
            return this
        }
        ,
        d.prototype.get = function(e) {
            return this.nested && this.nested[e] || null
        }
        ,
        d.prototype.getEnum = function(e) {
            if (this.nested && this.nested[e]instanceof o)
                return this.nested[e].values;
            throw Error("no such enum: " + e)
        }
        ,
        d.prototype.add = function(e) {
            if (!(e instanceof s && void 0 !== e.extend || e instanceof i || e instanceof o || e instanceof a || e instanceof d || e instanceof c))
                throw TypeError("object must be a valid nested object");
            if (this.nested) {
                var t = this.get(e.name);
                if (t) {
                    if (!(t instanceof d && e instanceof d) || t instanceof i || t instanceof a)
                        throw Error("duplicate name '" + e.name + "' in " + this);
                    for (var r = t.nestedArray, n = 0; n < r.length; ++n)
                        e.add(r[n]);
                    this.remove(t),
                    this.nested || (this.nested = {}),
                    e.setOptions(t.options, !0)
                }
            } else
                this.nested = {};
            return this.nested[e.name] = e,
            e.onAdd(this),
            h(this)
        }
        ,
        d.prototype.remove = function(e) {
            if (!(e instanceof n))
                throw TypeError("object must be a ReflectionObject");
            if (e.parent !== this)
                throw Error(e + " is not a member of " + this);
            return delete this.nested[e.name],
            Object.keys(this.nested).length || (this.nested = void 0),
            e.onRemove(this),
            h(this)
        }
        ,
        d.prototype.define = function(e, t) {
            if (l.isString(e))
                e = e.split(".");
            else if (!Array.isArray(e))
                throw TypeError("illegal path");
            if (e && e.length && "" === e[0])
                throw Error("path must be relative");
            for (var r = this; e.length > 0; ) {
                var n = e.shift();
                if (r.nested && r.nested[n]) {
                    if (!((r = r.nested[n])instanceof d))
                        throw Error("path conflicts with non-namespace objects")
                } else
                    r.add(r = new d(n))
            }
            return t && r.addJSON(t),
            r
        }
        ,
        d.prototype.resolveAll = function() {
            for (var e = this.nestedArray, t = 0; t < e.length; )
                e[t]instanceof d ? e[t++].resolveAll() : e[t++].resolve();
            return this.resolve()
        }
        ,
        d.prototype.lookup = function(e, t, r) {
            if ("boolean" == typeof t ? (r = t,
            t = void 0) : t && !Array.isArray(t) && (t = [t]),
            l.isString(e) && e.length) {
                if ("." === e)
                    return this.root;
                e = e.split(".")
            } else if (!e.length)
                return this;
            if ("" === e[0])
                return this.root.lookup(e.slice(1), t);
            var n = this.get(e[0]);
            if (n) {
                if (1 === e.length) {
                    if (!t || t.indexOf(n.constructor) > -1)
                        return n
                } else if (n instanceof d && (n = n.lookup(e.slice(1), t, !0)))
                    return n
            } else
                for (var i = 0; i < this.nestedArray.length; ++i)
                    if (this._nestedArray[i]instanceof d && (n = this._nestedArray[i].lookup(e, t, !0)))
                        return n;
            return null === this.parent || r ? null : this.parent.lookup(e, t)
        }
        ,
        d.prototype.lookupType = function(e) {
            var t = this.lookup(e, [i]);
            if (!t)
                throw Error("no such type: " + e);
            return t
        }
        ,
        d.prototype.lookupEnum = function(e) {
            var t = this.lookup(e, [o]);
            if (!t)
                throw Error("no such Enum '" + e + "' in " + this);
            return t
        }
        ,
        d.prototype.lookupTypeOrEnum = function(e) {
            var t = this.lookup(e, [i, o]);
            if (!t)
                throw Error("no such Type or Enum '" + e + "' in " + this);
            return t
        }
        ,
        d.prototype.lookupService = function(e) {
            var t = this.lookup(e, [a]);
            if (!t)
                throw Error("no such Service '" + e + "' in " + this);
            return t
        }
        ,
        d._configure = function(e, t, r) {
            i = e,
            a = t,
            o = r
        }
    }
    ,
        3243: (e,t,r)=>{
        "use strict";
        e.exports = a,
        a.className = "ReflectionObject";
        var n, i = r(9935);
        function a(e, t) {
            if (!i.isString(e))
                throw TypeError("name must be a string");
            if (t && !i.isObject(t))
                throw TypeError("options must be an object");
            this.options = t,
            this.parsedOptions = null,
            this.name = e,
            this.parent = null,
            this.resolved = !1,
            this.comment = null,
            this.filename = null
        }
        Object.defineProperties(a.prototype, {
            root: {
                get: function() {
                    for (var e = this; null !== e.parent; )
                        e = e.parent;
                    return e
                }
            },
            fullName: {
                get: function() {
                    for (var e = [this.name], t = this.parent; t; )
                        e.unshift(t.name),
                        t = t.parent;
                    return e.join(".")
                }
            }
        }),
        a.prototype.toJSON = function() {
            throw Error()
        }
        ,
        a.prototype.onAdd = function(e) {
            this.parent && this.parent !== e && this.parent.remove(this),
            this.parent = e,
            this.resolved = !1;
            var t = e.root;
            t instanceof n && t._handleAdd(this)
        }
        ,
        a.prototype.onRemove = function(e) {
            var t = e.root;
            t instanceof n && t._handleRemove(this),
            this.parent = null,
            this.resolved = !1
        }
        ,
        a.prototype.resolve = function() {
            return this.resolved || this.root instanceof n && (this.resolved = !0),
            this
        }
        ,
        a.prototype.getOption = function(e) {
            if (this.options)
                return this.options[e]
        }
        ,
        a.prototype.setOption = function(e, t, r) {
            return r && this.options && void 0 !== this.options[e] || ((this.options || (this.options = {}))[e] = t),
            this
        }
        ,
        a.prototype.setParsedOption = function(e, t, r) {
            this.parsedOptions || (this.parsedOptions = []);
            var n = this.parsedOptions;
            if (r) {
                var a = n.find((function(t) {
                    return Object.prototype.hasOwnProperty.call(t, e)
                }
                ));
                if (a) {
                    var o = a[e];
                    i.setProperty(o, r, t)
                } else
                    (a = {})[e] = i.setProperty({}, r, t),
                    n.push(a)
            } else {
                var s = {};
                s[e] = t,
                n.push(s)
            }
            return this
        }
        ,
        a.prototype.setOptions = function(e, t) {
            if (e)
                for (var r = Object.keys(e), n = 0; n < r.length; ++n)
                    this.setOption(r[n], e[r[n]], t);
            return this
        }
        ,
        a.prototype.toString = function() {
            var e = this.constructor.className
              , t = this.fullName;
            return t.length ? e + " " + t : e
        }
        ,
        a._configure = function(e) {
            n = e
        }
    }
    ,
         9935: (e,t,r)=>{
        "use strict";
        var n, i, a = e.exports = r(99693), o = r(85054);
        a.codegen = r(75124),
        a.fetch = r(49054),
        a.path = r(18626),
        a.fs = a.inquire("fs"),
        a.toArray = function(e) {
            if (e) {
                for (var t = Object.keys(e), r = new Array(t.length), n = 0; n < t.length; )
                    r[n] = e[t[n++]];
                return r
            }
            return []
        }
        ,
        a.toObject = function(e) {
            for (var t = {}, r = 0; r < e.length; ) {
                var n = e[r++]
                  , i = e[r++];
                void 0 !== i && (t[n] = i)
            }
            return t
        }
        ;
        var s = /\\/g
          , c = /"/g;
        a.isReserved = function(e) {
            return /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/.test(e)
        }
        ,
        a.safeProp = function(e) {
            return !/^[$\w_]+$/.test(e) || a.isReserved(e) ? '["' + e.replace(s, "\\\\").replace(c, '\\"') + '"]' : "." + e
        }
        ,
        a.ucFirst = function(e) {
            return e.charAt(0).toUpperCase() + e.substring(1)
        }
        ;
        var l = /_([a-z])/g;
        a.camelCase = function(e) {
            return e.substring(0, 1) + e.substring(1).replace(l, (function(e, t) {
                return t.toUpperCase()
            }
            ))
        }
        ,
        a.compareFieldsById = function(e, t) {
            return e.id - t.id
        }
        ,
        a.decorateType = function(e, t) {
            if (e.$type)
                return t && e.$type.name !== t && (a.decorateRoot.remove(e.$type),
                e.$type.name = t,
                a.decorateRoot.add(e.$type)),
                e.$type;
            n || (n = r(7645));
            var i = new n(t || e.name);
            return a.decorateRoot.add(i),
            i.ctor = e,
            Object.defineProperty(e, "$type", {
                value: i,
                enumerable: !1
            }),
            Object.defineProperty(e.prototype, "$type", {
                value: i,
                enumerable: !1
            }),
            i
        }
        ;
        var u = 0;
        a.decorateEnum = function(e) {
            if (e.$type)
                return e.$type;
            i || (i = r(67025));
            var t = new i("Enum" + u++,e);
            return a.decorateRoot.add(t),
            Object.defineProperty(e, "$type", {
                value: t,
                enumerable: !1
            }),
            t
        }
        ,
        a.setProperty = function(e, t, r) {
            if ("object" != typeof e)
                throw TypeError("dst must be an object");
            if (!t)
                throw TypeError("path must be specified");
            return function e(t, r, n) {
                var i = r.shift();
                if (r.length > 0)
                    t[i] = e(t[i] || {}, r, n);
                else {
                    var a = t[i];
                    a && (n = [].concat(a).concat(n)),
                    t[i] = n
                }
                return t
            }(e, t = t.split("."), r)
        }
        ,
        Object.defineProperty(a, "decorateRoot", {
            get: function() {
                return o.decorated || (o.decorated = new (r(99424)))
            }
        })
    }
    ,
        99693: function(e, t, r) {
        "use strict";
        var n = t;
        function i(e, t, r) {
            for (var n = Object.keys(t), i = 0; i < n.length; ++i)
                void 0 !== e[n[i]] && r || (e[n[i]] = t[n[i]]);
            return e
        }
        function a(e) {
            function t(e, r) {
                if (!(this instanceof t))
                    return new t(e,r);
                Object.defineProperty(this, "message", {
                    get: function() {
                        return e
                    }
                }),
                Error.captureStackTrace ? Error.captureStackTrace(this, t) : Object.defineProperty(this, "stack", {
                    value: (new Error).stack || ""
                }),
                r && i(this, r)
            }
            return (t.prototype = Object.create(Error.prototype)).constructor = t,
            Object.defineProperty(t.prototype, "name", {
                get: function() {
                    return e
                }
            }),
            t.prototype.toString = function() {
                return this.name + ": " + this.message
            }
            ,
            t
        }
        n.asPromise = r(34537),
        n.base64 = r(97419),
        n.EventEmitter = r(19211),
        n.float = r(10945),
        n.inquire = r(67199),
        n.utf8 = r(94997),
        n.pool = r(76662),
        n.LongBits = r(1945),
        n.isNode = Boolean(void 0 !== r.g && r.g && r.g.process && r.g.process.versions && r.g.process.versions.node),
        n.global = n.isNode && r.g || "undefined" != typeof window && window || "undefined" != typeof self && self || this,
        n.emptyArray = Object.freeze ? Object.freeze([]) : [],
        n.emptyObject = Object.freeze ? Object.freeze({}) : {},
        n.isInteger = Number.isInteger || function(e) {
            return "number" == typeof e && isFinite(e) && Math.floor(e) === e
        }
        ,
        n.isString = function(e) {
            return "string" == typeof e || e instanceof String
        }
        ,
        n.isObject = function(e) {
            return e && "object" == typeof e
        }
        ,
        n.isset = n.isSet = function(e, t) {
            var r = e[t];
            return !(null == r || !e.hasOwnProperty(t)) && ("object" != typeof r || (Array.isArray(r) ? r.length : Object.keys(r).length) > 0)
        }
        ,
        n.Buffer = function() {
            try {
                var e = n.inquire("buffer").Buffer;
                return e.prototype.utf8Write ? e : null
            } catch (e) {
                return null
            }
        }(),
        n._Buffer_from = null,
        n._Buffer_allocUnsafe = null,
        n.newBuffer = function(e) {
            return "number" == typeof e ? n.Buffer ? n._Buffer_allocUnsafe(e) : new n.Array(e) : n.Buffer ? n._Buffer_from(e) : "undefined" == typeof Uint8Array ? e : new Uint8Array(e)
        }
        ,
        n.Array = "undefined" != typeof Uint8Array ? Uint8Array : Array,
        n.Long = n.global.dcodeIO && n.global.dcodeIO.Long || n.global.Long || n.inquire("long"),
        n.key2Re = /^true|false|0|1$/,
        n.key32Re = /^-?(?:0|[1-9][0-9]*)$/,
        n.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/,
        n.longToHash = function(e) {
            return e ? n.LongBits.from(e).toHash() : n.LongBits.zeroHash
        }
        ,
        n.longFromHash = function(e, t) {
            var r = n.LongBits.fromHash(e);
            return n.Long ? n.Long.fromBits(r.lo, r.hi, t) : r.toNumber(Boolean(t))
        }
        ,
        n.merge = i,
        n.lcFirst = function(e) {
            return e.charAt(0).toLowerCase() + e.substring(1)
        }
        ,
        n.newError = a,
        n.ProtocolError = a("ProtocolError"),
        n.oneOfGetter = function(e) {
            for (var t = {}, r = 0; r < e.length; ++r)
                t[e[r]] = 1;
            return function() {
                for (var e = Object.keys(this), r = e.length - 1; r > -1; --r)
                    if (1 === t[e[r]] && void 0 !== this[e[r]] && null !== this[e[r]])
                        return e[r]
            }
        }
        ,
        n.oneOfSetter = function(e) {
            return function(t) {
                for (var r = 0; r < e.length; ++r)
                    e[r] !== t && delete this[e[r]]
            }
        }
        ,
        n.toJSONOptions = {
            longs: String,
            enums: String,
            bytes: String,
            json: !0
        },
        n._configure = function() {
            var e = n.Buffer;
            e ? (n._Buffer_from = e.from !== Uint8Array.from && e.from || function(t, r) {
                return new e(t,r)
            }
            ,
            n._Buffer_allocUnsafe = e.allocUnsafe || function(t) {
                return new e(t)
            }
            ) : n._Buffer_from = n._Buffer_allocUnsafe = null
        }
    },
        34537: e=>{
        "use strict";
        e.exports = function(e, t) {
            for (var r = new Array(arguments.length - 1), n = 0, i = 2, a = !0; i < arguments.length; )
                r[n++] = arguments[i++];
            return new Promise((function(i, o) {
                r[n] = function(e) {
                    if (a)
                        if (a = !1,
                        e)
                            o(e);
                        else {
                            for (var t = new Array(arguments.length - 1), r = 0; r < t.length; )
                                t[r++] = arguments[r];
                            i.apply(null, t)
                        }
                }
                ;
                try {
                    e.apply(t || null, r)
                } catch (e) {
                    a && (a = !1,
                    o(e))
                }
            }
            ))
        }
    }
    ,
        97419: (e,t)=>{
        "use strict";
        var r = t;
        r.length = function(e) {
            var t = e.length;
            if (!t)
                return 0;
            for (var r = 0; --t % 4 > 1 && "=" === e.charAt(t); )
                ++r;
            return Math.ceil(3 * e.length) / 4 - r
        }
        ;
        for (var n = new Array(64), i = new Array(123), a = 0; a < 64; )
            i[n[a] = a < 26 ? a + 65 : a < 52 ? a + 71 : a < 62 ? a - 4 : a - 59 | 43] = a++;
        r.encode = function(e, t, r) {
            for (var i, a = null, o = [], s = 0, c = 0; t < r; ) {
                var l = e[t++];
                switch (c) {
                case 0:
                    o[s++] = n[l >> 2],
                    i = (3 & l) << 4,
                    c = 1;
                    break;
                case 1:
                    o[s++] = n[i | l >> 4],
                    i = (15 & l) << 2,
                    c = 2;
                    break;
                case 2:
                    o[s++] = n[i | l >> 6],
                    o[s++] = n[63 & l],
                    c = 0
                }
                s > 8191 && ((a || (a = [])).push(String.fromCharCode.apply(String, o)),
                s = 0)
            }
            return c && (o[s++] = n[i],
            o[s++] = 61,
            1 === c && (o[s++] = 61)),
            a ? (s && a.push(String.fromCharCode.apply(String, o.slice(0, s))),
            a.join("")) : String.fromCharCode.apply(String, o.slice(0, s))
        }
        ;
        var o = "invalid encoding";
        r.decode = function(e, t, r) {
            for (var n, a = r, s = 0, c = 0; c < e.length; ) {
                var l = e.charCodeAt(c++);
                if (61 === l && s > 1)
                    break;
                if (void 0 === (l = i[l]))
                    throw Error(o);
                switch (s) {
                case 0:
                    n = l,
                    s = 1;
                    break;
                case 1:
                    t[r++] = n << 2 | (48 & l) >> 4,
                    n = l,
                    s = 2;
                    break;
                case 2:
                    t[r++] = (15 & n) << 4 | (60 & l) >> 2,
                    n = l,
                    s = 3;
                    break;
                case 3:
                    t[r++] = (3 & n) << 6 | l,
                    s = 0
                }
            }
            if (1 === s)
                throw Error(o);
            return r - a
        }
        ,
        r.test = function(e) {
            return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(e)
        }
    }
    ,
         19211: e=>{
        "use strict";
        function t() {
            this._listeners = {}
        }
        e.exports = t,
        t.prototype.on = function(e, t, r) {
            return (this._listeners[e] || (this._listeners[e] = [])).push({
                fn: t,
                ctx: r || this
            }),
            this
        }
        ,
        t.prototype.off = function(e, t) {
            if (void 0 === e)
                this._listeners = {};
            else if (void 0 === t)
                this._listeners[e] = [];
            else
                for (var r = this._listeners[e], n = 0; n < r.length; )
                    r[n].fn === t ? r.splice(n, 1) : ++n;
            return this
        }
        ,
        t.prototype.emit = function(e) {
            var t = this._listeners[e];
            if (t) {
                for (var r = [], n = 1; n < arguments.length; )
                    r.push(arguments[n++]);
                for (n = 0; n < t.length; )
                    t[n].fn.apply(t[n++].ctx, r)
            }
            return this
        }
    }
    ,
         10945: e=>{
        "use strict";
        function t(e) {
            return "undefined" != typeof Float32Array ? function() {
                var t = new Float32Array([-0])
                  , r = new Uint8Array(t.buffer)
                  , n = 128 === r[3];
                function i(e, n, i) {
                    t[0] = e,
                    n[i] = r[0],
                    n[i + 1] = r[1],
                    n[i + 2] = r[2],
                    n[i + 3] = r[3]
                }
                function a(e, n, i) {
                    t[0] = e,
                    n[i] = r[3],
                    n[i + 1] = r[2],
                    n[i + 2] = r[1],
                    n[i + 3] = r[0]
                }
                function o(e, n) {
                    return r[0] = e[n],
                    r[1] = e[n + 1],
                    r[2] = e[n + 2],
                    r[3] = e[n + 3],
                    t[0]
                }
                function s(e, n) {
                    return r[3] = e[n],
                    r[2] = e[n + 1],
                    r[1] = e[n + 2],
                    r[0] = e[n + 3],
                    t[0]
                }
                e.writeFloatLE = n ? i : a,
                e.writeFloatBE = n ? a : i,
                e.readFloatLE = n ? o : s,
                e.readFloatBE = n ? s : o
            }() : function() {
                function t(e, t, r, n) {
                    var i = t < 0 ? 1 : 0;
                    if (i && (t = -t),
                    0 === t)
                        e(1 / t > 0 ? 0 : 2147483648, r, n);
                    else if (isNaN(t))
                        e(2143289344, r, n);
                    else if (t > 34028234663852886e22)
                        e((i << 31 | 2139095040) >>> 0, r, n);
                    else if (t < 11754943508222875e-54)
                        e((i << 31 | Math.round(t / 1401298464324817e-60)) >>> 0, r, n);
                    else {
                        var a = Math.floor(Math.log(t) / Math.LN2);
                        e((i << 31 | a + 127 << 23 | 8388607 & Math.round(t * Math.pow(2, -a) * 8388608)) >>> 0, r, n)
                    }
                }
                function o(e, t, r) {
                    var n = e(t, r)
                      , i = 2 * (n >> 31) + 1
                      , a = n >>> 23 & 255
                      , o = 8388607 & n;
                    return 255 === a ? o ? NaN : i * (1 / 0) : 0 === a ? 1401298464324817e-60 * i * o : i * Math.pow(2, a - 150) * (o + 8388608)
                }
                e.writeFloatLE = t.bind(null, r),
                e.writeFloatBE = t.bind(null, n),
                e.readFloatLE = o.bind(null, i),
                e.readFloatBE = o.bind(null, a)
            }(),
            "undefined" != typeof Float64Array ? function() {
                var t = new Float64Array([-0])
                  , r = new Uint8Array(t.buffer)
                  , n = 128 === r[7];
                function i(e, n, i) {
                    t[0] = e,
                    n[i] = r[0],
                    n[i + 1] = r[1],
                    n[i + 2] = r[2],
                    n[i + 3] = r[3],
                    n[i + 4] = r[4],
                    n[i + 5] = r[5],
                    n[i + 6] = r[6],
                    n[i + 7] = r[7]
                }
                function a(e, n, i) {
                    t[0] = e,
                    n[i] = r[7],
                    n[i + 1] = r[6],
                    n[i + 2] = r[5],
                    n[i + 3] = r[4],
                    n[i + 4] = r[3],
                    n[i + 5] = r[2],
                    n[i + 6] = r[1],
                    n[i + 7] = r[0]
                }
                function o(e, n) {
                    return r[0] = e[n],
                    r[1] = e[n + 1],
                    r[2] = e[n + 2],
                    r[3] = e[n + 3],
                    r[4] = e[n + 4],
                    r[5] = e[n + 5],
                    r[6] = e[n + 6],
                    r[7] = e[n + 7],
                    t[0]
                }
                function s(e, n) {
                    return r[7] = e[n],
                    r[6] = e[n + 1],
                    r[5] = e[n + 2],
                    r[4] = e[n + 3],
                    r[3] = e[n + 4],
                    r[2] = e[n + 5],
                    r[1] = e[n + 6],
                    r[0] = e[n + 7],
                    t[0]
                }
                e.writeDoubleLE = n ? i : a,
                e.writeDoubleBE = n ? a : i,
                e.readDoubleLE = n ? o : s,
                e.readDoubleBE = n ? s : o
            }() : function() {
                function t(e, t, r, n, i, a) {
                    var o = n < 0 ? 1 : 0;
                    if (o && (n = -n),
                    0 === n)
                        e(0, i, a + t),
                        e(1 / n > 0 ? 0 : 2147483648, i, a + r);
                    else if (isNaN(n))
                        e(0, i, a + t),
                        e(2146959360, i, a + r);
                    else if (n > 17976931348623157e292)
                        e(0, i, a + t),
                        e((o << 31 | 2146435072) >>> 0, i, a + r);
                    else {
                        var s;
                        if (n < 22250738585072014e-324)
                            e((s = n / 5e-324) >>> 0, i, a + t),
                            e((o << 31 | s / 4294967296) >>> 0, i, a + r);
                        else {
                            var c = Math.floor(Math.log(n) / Math.LN2);
                            1024 === c && (c = 1023),
                            e(4503599627370496 * (s = n * Math.pow(2, -c)) >>> 0, i, a + t),
                            e((o << 31 | c + 1023 << 20 | 1048576 * s & 1048575) >>> 0, i, a + r)
                        }
                    }
                }
                function o(e, t, r, n, i) {
                    var a = e(n, i + t)
                      , o = e(n, i + r)
                      , s = 2 * (o >> 31) + 1
                      , c = o >>> 20 & 2047
                      , l = 4294967296 * (1048575 & o) + a;
                    return 2047 === c ? l ? NaN : s * (1 / 0) : 0 === c ? 5e-324 * s * l : s * Math.pow(2, c - 1075) * (l + 4503599627370496)
                }
                e.writeDoubleLE = t.bind(null, r, 0, 4),
                e.writeDoubleBE = t.bind(null, n, 4, 0),
                e.readDoubleLE = o.bind(null, i, 0, 4),
                e.readDoubleBE = o.bind(null, a, 4, 0)
            }(),
            e
        }
        function r(e, t, r) {
            t[r] = 255 & e,
            t[r + 1] = e >>> 8 & 255,
            t[r + 2] = e >>> 16 & 255,
            t[r + 3] = e >>> 24
        }
        function n(e, t, r) {
            t[r] = e >>> 24,
            t[r + 1] = e >>> 16 & 255,
            t[r + 2] = e >>> 8 & 255,
            t[r + 3] = 255 & e
        }
        function i(e, t) {
            return (e[t] | e[t + 1] << 8 | e[t + 2] << 16 | e[t + 3] << 24) >>> 0
        }
        function a(e, t) {
            return (e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3]) >>> 0
        }
        e.exports = t(t)
    }
    ,
         67199: module=>{
        "use strict";
        function inquire(moduleName) {
            try {
                var mod = eval("quire".replace(/^/, "re"))(moduleName);
                if (mod && (mod.length || Object.keys(mod).length))
                    return mod
            } catch (e) {}
            return null
        }
        module.exports = inquire
    },
         94997: (e,t)=>{
        "use strict";
        var r = t;
        r.length = function(e) {
            for (var t = 0, r = 0, n = 0; n < e.length; ++n)
                (r = e.charCodeAt(n)) < 128 ? t += 1 : r < 2048 ? t += 2 : 55296 == (64512 & r) && 56320 == (64512 & e.charCodeAt(n + 1)) ? (++n,
                t += 4) : t += 3;
            return t
        }
        ,
        r.read = function(e, t, r) {
            if (r - t < 1)
                return "";
            for (var n, i = null, a = [], o = 0; t < r; )
                (n = e[t++]) < 128 ? a[o++] = n : n > 191 && n < 224 ? a[o++] = (31 & n) << 6 | 63 & e[t++] : n > 239 && n < 365 ? (n = ((7 & n) << 18 | (63 & e[t++]) << 12 | (63 & e[t++]) << 6 | 63 & e[t++]) - 65536,
                a[o++] = 55296 + (n >> 10),
                a[o++] = 56320 + (1023 & n)) : a[o++] = (15 & n) << 12 | (63 & e[t++]) << 6 | 63 & e[t++],
                o > 8191 && ((i || (i = [])).push(String.fromCharCode.apply(String, a)),
                o = 0);
            return i ? (o && i.push(String.fromCharCode.apply(String, a.slice(0, o))),
            i.join("")) : String.fromCharCode.apply(String, a.slice(0, o))
        }
        ,
        r.write = function(e, t, r) {
            for (var n, i, a = r, o = 0; o < e.length; ++o)
                (n = e.charCodeAt(o)) < 128 ? t[r++] = n : n < 2048 ? (t[r++] = n >> 6 | 192,
                t[r++] = 63 & n | 128) : 55296 == (64512 & n) && 56320 == (64512 & (i = e.charCodeAt(o + 1))) ? (n = 65536 + ((1023 & n) << 10) + (1023 & i),
                ++o,
                t[r++] = n >> 18 | 240,
                t[r++] = n >> 12 & 63 | 128,
                t[r++] = n >> 6 & 63 | 128,
                t[r++] = 63 & n | 128) : (t[r++] = n >> 12 | 224,
                t[r++] = n >> 6 & 63 | 128,
                t[r++] = 63 & n | 128);
            return r - a
        }
    }
    ,
        76662: e=>{
        "use strict";
        e.exports = function(e, t, r) {
            var n = r || 8192
              , i = n >>> 1
              , a = null
              , o = n;
            return function(r) {
                if (r < 1 || r > i)
                    return e(r);
                o + r > n && (a = e(n),
                o = 0);
                var s = t.call(a, o, o += r);
                return 7 & o && (o = 1 + (7 | o)),
                s
            }
        }
    }
    ,
         1945: (e,t,r)=>{
        "use strict";
        e.exports = i;
        var n = r(99693);
        function i(e, t) {
            this.lo = e >>> 0,
            this.hi = t >>> 0
        }
        var a = i.zero = new i(0,0);
        a.toNumber = function() {
            return 0
        }
        ,
        a.zzEncode = a.zzDecode = function() {
            return this
        }
        ,
        a.length = function() {
            return 1
        }
        ;
        var o = i.zeroHash = "\0\0\0\0\0\0\0\0";
        i.fromNumber = function(e) {
            if (0 === e)
                return a;
            var t = e < 0;
            t && (e = -e);
            var r = e >>> 0
              , n = (e - r) / 4294967296 >>> 0;
            return t && (n = ~n >>> 0,
            r = ~r >>> 0,
            ++r > 4294967295 && (r = 0,
            ++n > 4294967295 && (n = 0))),
            new i(r,n)
        }
        ,
        i.from = function(e) {
            if ("number" == typeof e)
                return i.fromNumber(e);
            if (n.isString(e)) {
                if (!n.Long)
                    return i.fromNumber(parseInt(e, 10));
                e = n.Long.fromString(e)
            }
            return e.low || e.high ? new i(e.low >>> 0,e.high >>> 0) : a
        }
        ,
        i.prototype.toNumber = function(e) {
            if (!e && this.hi >>> 31) {
                var t = 1 + ~this.lo >>> 0
                  , r = ~this.hi >>> 0;
                return t || (r = r + 1 >>> 0),
                -(t + 4294967296 * r)
            }
            return this.lo + 4294967296 * this.hi
        }
        ,
        i.prototype.toLong = function(e) {
            return n.Long ? new n.Long(0 | this.lo,0 | this.hi,Boolean(e)) : {
                low: 0 | this.lo,
                high: 0 | this.hi,
                unsigned: Boolean(e)
            }
        }
        ;
        var s = String.prototype.charCodeAt;
        i.fromHash = function(e) {
            return e === o ? a : new i((s.call(e, 0) | s.call(e, 1) << 8 | s.call(e, 2) << 16 | s.call(e, 3) << 24) >>> 0,(s.call(e, 4) | s.call(e, 5) << 8 | s.call(e, 6) << 16 | s.call(e, 7) << 24) >>> 0)
        }
        ,
        i.prototype.toHash = function() {
            return String.fromCharCode(255 & this.lo, this.lo >>> 8 & 255, this.lo >>> 16 & 255, this.lo >>> 24, 255 & this.hi, this.hi >>> 8 & 255, this.hi >>> 16 & 255, this.hi >>> 24)
        }
        ,
        i.prototype.zzEncode = function() {
            var e = this.hi >> 31;
            return this.hi = ((this.hi << 1 | this.lo >>> 31) ^ e) >>> 0,
            this.lo = (this.lo << 1 ^ e) >>> 0,
            this
        }
        ,
        i.prototype.zzDecode = function() {
            var e = -(1 & this.lo);
            return this.lo = ((this.lo >>> 1 | this.hi << 31) ^ e) >>> 0,
            this.hi = (this.hi >>> 1 ^ e) >>> 0,
            this
        }
        ,
        i.prototype.length = function() {
            var e = this.lo
              , t = (this.lo >>> 28 | this.hi << 4) >>> 0
              , r = this.hi >>> 24;
            return 0 === r ? 0 === t ? e < 16384 ? e < 128 ? 1 : 2 : e < 2097152 ? 3 : 4 : t < 16384 ? t < 128 ? 5 : 6 : t < 2097152 ? 7 : 8 : r < 128 ? 9 : 10
        }
    }
    ,
     85054: e=>{
        "use strict";
        e.exports = {}
    }
    ,
         75124: e=>{
        "use strict";
        function t(e, r) {
            "string" == typeof e && (r = e,
            e = void 0);
            var n = [];
            function i(e) {
                if ("string" != typeof e) {
                    var r = a();
                    if (t.verbose && console.log("codegen: " + r),
                    r = "return " + r,
                    e) {
                        for (var o = Object.keys(e), s = new Array(o.length + 1), c = new Array(o.length), l = 0; l < o.length; )
                            s[l] = o[l],
                            c[l] = e[o[l++]];
                        return s[l] = r,
                        Function.apply(null, s).apply(null, c)
                    }
                    return Function(r)()
                }
                for (var u = new Array(arguments.length - 1), d = 0; d < u.length; )
                    u[d] = arguments[++d];
                if (d = 0,
                e = e.replace(/%([%dfijs])/g, (function(e, t) {
                    var r = u[d++];
                    switch (t) {
                    case "d":
                    case "f":
                        return String(Number(r));
                    case "i":
                        return String(Math.floor(r));
                    case "j":
                        return JSON.stringify(r);
                    case "s":
                        return String(r)
                    }
                    return "%"
                }
                )),
                d !== u.length)
                    throw Error("parameter count mismatch");
                return n.push(e),
                i
            }
            function a(t) {
                return "function " + (t || r || "") + "(" + (e && e.join(",") || "") + "){\n  " + n.join("\n  ") + "\n}"
            }
            return i.toString = a,
            i
        }
        e.exports = t,
        t.verbose = !1
    }
    ,
         49054: (e,t,r)=>{
        "use strict";
        e.exports = a;
        var n = r(34537)
          , i = r(67199)("fs");
        function a(e, t, r) {
            return "function" == typeof t ? (r = t,
            t = {}) : t || (t = {}),
            r ? !t.xhr && i && i.readFile ? i.readFile(e, (function(n, i) {
                return n && "undefined" != typeof XMLHttpRequest ? a.xhr(e, t, r) : n ? r(n) : r(null, t.binary ? i : i.toString("utf8"))
            }
            )) : a.xhr(e, t, r) : n(a, this, e, t)
        }
        a.xhr = function(e, t, r) {
            var n = new XMLHttpRequest;
            n.onreadystatechange = function() {
                if (4 === n.readyState) {
                    if (0 !== n.status && 200 !== n.status)
                        return r(Error("status " + n.status));
                    if (t.binary) {
                        var e = n.response;
                        if (!e) {
                            e = [];
                            for (var i = 0; i < n.responseText.length; ++i)
                                e.push(255 & n.responseText.charCodeAt(i))
                        }
                        return r(null, "undefined" != typeof Uint8Array ? new Uint8Array(e) : e)
                    }
                    return r(null, n.responseText)
                }
            }
            ,
            t.binary && ("overrideMimeType"in n && n.overrideMimeType("text/plain; charset=x-user-defined"),
            n.responseType = "arraybuffer"),
            n.open("GET", e),
            n.send()
        }
    }
    ,
        18626: (e,t)=>{
        "use strict";
        var r = t
          , n = r.isAbsolute = function(e) {
            return /^(?:\/|\w+:)/.test(e)
        }
          , i = r.normalize = function(e) {
            var t = (e = e.replace(/\\/g, "/").replace(/\/{2,}/g, "/")).split("/")
              , r = n(e)
              , i = "";
            r && (i = t.shift() + "/");
            for (var a = 0; a < t.length; )
                ".." === t[a] ? a > 0 && ".." !== t[a - 1] ? t.splice(--a, 2) : r ? t.splice(a, 1) : ++a : "." === t[a] ? t.splice(a, 1) : ++a;
            return i + t.join("/")
        }
        ;
        r.resolve = function(e, t, r) {
            return r || (t = i(t)),
            n(t) ? t : (r || (e = i(e)),
            (e = e.replace(/(?:\/|^)[^/]+$/, "")).length ? i(e + "/" + t) : t)
        }
    }
    ,
         13548: (e,t,r)=>{
        "use strict";
        e.exports = l;
        var n = r(3243);
        ((l.prototype = Object.create(n.prototype)).constructor = l).className = "Field";
        var i, a = r(67025), o = r(77063), s = r(9935), c = /^required|optional|repeated$/;
        function l(e, t, r, i, a, l, u) {
            if (s.isObject(i) ? (u = a,
            l = i,
            i = a = void 0) : s.isObject(a) && (u = l,
            l = a,
            a = void 0),
            n.call(this, e, l),
            !s.isInteger(t) || t < 0)
                throw TypeError("id must be a non-negative integer");
            if (!s.isString(r))
                throw TypeError("type must be a string");
            if (void 0 !== i && !c.test(i = i.toString().toLowerCase()))
                throw TypeError("rule must be a string rule");
            if (void 0 !== a && !s.isString(a))
                throw TypeError("extend must be a string");
            "proto3_optional" === i && (i = "optional"),
            this.rule = i && "optional" !== i ? i : void 0,
            this.type = r,
            this.id = t,
            this.extend = a || void 0,
            this.required = "required" === i,
            this.optional = !this.required,
            this.repeated = "repeated" === i,
            this.map = !1,
            this.message = null,
            this.partOf = null,
            this.typeDefault = null,
            this.defaultValue = null,
            this.long = !!s.Long && void 0 !== o.long[r],
            this.bytes = "bytes" === r,
            this.resolvedType = null,
            this.extensionField = null,
            this.declaringField = null,
            this._packed = null,
            this.comment = u
        }
        l.fromJSON = function(e, t) {
            return new l(e,t.id,t.type,t.rule,t.extend,t.options,t.comment)
        }
        ,
        Object.defineProperty(l.prototype, "packed", {
            get: function() {
                return null === this._packed && (this._packed = !1 !== this.getOption("packed")),
                this._packed
            }
        }),
        l.prototype.setOption = function(e, t, r) {
            return "packed" === e && (this._packed = null),
            n.prototype.setOption.call(this, e, t, r)
        }
        ,
        l.prototype.toJSON = function(e) {
            var t = !!e && Boolean(e.keepComments);
            return s.toObject(["rule", "optional" !== this.rule && this.rule || void 0, "type", this.type, "id", this.id, "extend", this.extend, "options", this.options, "comment", t ? this.comment : void 0])
        }
        ,
        l.prototype.resolve = function() {
            if (this.resolved)
                return this;
            if (void 0 === (this.typeDefault = o.defaults[this.type]) && (this.resolvedType = (this.declaringField ? this.declaringField.parent : this.parent).lookupTypeOrEnum(this.type),
            this.resolvedType instanceof i ? this.typeDefault = null : this.typeDefault = this.resolvedType.values[Object.keys(this.resolvedType.values)[0]]),
            this.options && null != this.options.default && (this.typeDefault = this.options.default,
            this.resolvedType instanceof a && "string" == typeof this.typeDefault && (this.typeDefault = this.resolvedType.values[this.typeDefault])),
            this.options && (!0 !== this.options.packed && (void 0 === this.options.packed || !this.resolvedType || this.resolvedType instanceof a) || delete this.options.packed,
            Object.keys(this.options).length || (this.options = void 0)),
            this.long)
                this.typeDefault = s.Long.fromNumber(this.typeDefault, "u" === this.type.charAt(0)),
                Object.freeze && Object.freeze(this.typeDefault);
            else if (this.bytes && "string" == typeof this.typeDefault) {
                var e;
                s.base64.test(this.typeDefault) ? s.base64.decode(this.typeDefault, e = s.newBuffer(s.base64.length(this.typeDefault)), 0) : s.utf8.write(this.typeDefault, e = s.newBuffer(s.utf8.length(this.typeDefault)), 0),
                this.typeDefault = e
            }
            return this.map ? this.defaultValue = s.emptyObject : this.repeated ? this.defaultValue = s.emptyArray : this.defaultValue = this.typeDefault,
            this.parent instanceof i && (this.parent.ctor.prototype[this.name] = this.defaultValue),
            n.prototype.resolve.call(this)
        }
        ,
        l.d = function(e, t, r, n) {
            return "function" == typeof t ? t = s.decorateType(t).name : t && "object" == typeof t && (t = s.decorateEnum(t).name),
            function(i, a) {
                s.decorateType(i.constructor).add(new l(a,e,t,r,{
                    default: n
                }))
            }
        }
        ,
        l._configure = function(e) {
            i = e
        }
    }
    ,
         67025: (e,t,r)=>{
        "use strict";
        e.exports = o;
        var n = r(3243);
        ((o.prototype = Object.create(n.prototype)).constructor = o).className = "Enum";
        var i = r(69313)
          , a = r(9935);
        function o(e, t, r, i, a) {
            if (n.call(this, e, r),
            t && "object" != typeof t)
                throw TypeError("values must be an object");
            if (this.valuesById = {},
            this.values = Object.create(this.valuesById),
            this.comment = i,
            this.comments = a || {},
            this.reserved = void 0,
            t)
                for (var o = Object.keys(t), s = 0; s < o.length; ++s)
                    "number" == typeof t[o[s]] && (this.valuesById[this.values[o[s]] = t[o[s]]] = o[s])
        }
        o.fromJSON = function(e, t) {
            var r = new o(e,t.values,t.options,t.comment,t.comments);
            return r.reserved = t.reserved,
            r
        }
        ,
        o.prototype.toJSON = function(e) {
            var t = !!e && Boolean(e.keepComments);
            return a.toObject(["options", this.options, "values", this.values, "reserved", this.reserved && this.reserved.length ? this.reserved : void 0, "comment", t ? this.comment : void 0, "comments", t ? this.comments : void 0])
        }
        ,
        o.prototype.add = function(e, t, r) {
            if (!a.isString(e))
                throw TypeError("name must be a string");
            if (!a.isInteger(t))
                throw TypeError("id must be an integer");
            if (void 0 !== this.values[e])
                throw Error("duplicate name '" + e + "' in " + this);
            if (this.isReservedId(t))
                throw Error("id " + t + " is reserved in " + this);
            if (this.isReservedName(e))
                throw Error("name '" + e + "' is reserved in " + this);
            if (void 0 !== this.valuesById[t]) {
                if (!this.options || !this.options.allow_alias)
                    throw Error("duplicate id " + t + " in " + this);
                this.values[e] = t
            } else
                this.valuesById[this.values[e] = t] = e;
            return this.comments[e] = r || null,
            this
        }
        ,
        o.prototype.remove = function(e) {
            if (!a.isString(e))
                throw TypeError("name must be a string");
            var t = this.values[e];
            if (null == t)
                throw Error("name '" + e + "' does not exist in " + this);
            return delete this.valuesById[t],
            delete this.values[e],
            delete this.comments[e],
            this
        }
        ,
        o.prototype.isReservedId = function(e) {
            return i.isReservedId(this.reserved, e)
        }
        ,
        o.prototype.isReservedName = function(e) {
            return i.isReservedName(this.reserved, e)
        }
    }
    ,
         77063: (e,t,r)=>{
        "use strict";
        var n = t
          , i = r(9935)
          , a = ["double", "float", "int32", "uint32", "sint32", "fixed32", "sfixed32", "int64", "uint64", "sint64", "fixed64", "sfixed64", "bool", "string", "bytes"];
        function o(e, t) {
            var r = 0
              , n = {};
            for (t |= 0; r < e.length; )
                n[a[r + t]] = e[r++];
            return n
        }
        n.basic = o([1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2, 2]),
        n.defaults = o([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, !1, "", i.emptyArray, null]),
        n.long = o([0, 0, 0, 1, 1], 7),
        n.mapKey = o([0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2], 2),
        n.packed = o([1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0])
    }
    ,
         27598: (e,t,r)=>{
        "use strict";
        e.exports = o;
        var n = r(3243);
        ((o.prototype = Object.create(n.prototype)).constructor = o).className = "OneOf";
        var i = r(13548)
          , a = r(9935);
        function o(e, t, r, i) {
            if (Array.isArray(t) || (r = t,
            t = void 0),
            n.call(this, e, r),
            void 0 !== t && !Array.isArray(t))
                throw TypeError("fieldNames must be an Array");
            this.oneof = t || [],
            this.fieldsArray = [],
            this.comment = i
        }
        function s(e) {
            if (e.parent)
                for (var t = 0; t < e.fieldsArray.length; ++t)
                    e.fieldsArray[t].parent || e.parent.add(e.fieldsArray[t])
        }
        o.fromJSON = function(e, t) {
            return new o(e,t.oneof,t.options,t.comment)
        }
        ,
        o.prototype.toJSON = function(e) {
            var t = !!e && Boolean(e.keepComments);
            return a.toObject(["options", this.options, "oneof", this.oneof, "comment", t ? this.comment : void 0])
        }
        ,
        o.prototype.add = function(e) {
            if (!(e instanceof i))
                throw TypeError("field must be a Field");
            return e.parent && e.parent !== this.parent && e.parent.remove(e),
            this.oneof.push(e.name),
            this.fieldsArray.push(e),
            e.partOf = this,
            s(this),
            this
        }
        ,
        o.prototype.remove = function(e) {
            if (!(e instanceof i))
                throw TypeError("field must be a Field");
            var t = this.fieldsArray.indexOf(e);
            if (t < 0)
                throw Error(e + " is not a member of " + this);
            return this.fieldsArray.splice(t, 1),
            (t = this.oneof.indexOf(e.name)) > -1 && this.oneof.splice(t, 1),
            e.partOf = null,
            this
        }
        ,
        o.prototype.onAdd = function(e) {
            n.prototype.onAdd.call(this, e);
            for (var t = 0; t < this.oneof.length; ++t) {
                var r = e.get(this.oneof[t]);
                r && !r.partOf && (r.partOf = this,
                this.fieldsArray.push(r))
            }
            s(this)
        }
        ,
        o.prototype.onRemove = function(e) {
            for (var t, r = 0; r < this.fieldsArray.length; ++r)
                (t = this.fieldsArray[r]).parent && t.parent.remove(t);
            n.prototype.onRemove.call(this, e)
        }
        ,
        o.d = function() {
            for (var e = new Array(arguments.length), t = 0; t < arguments.length; )
                e[t] = arguments[t++];
            return function(t, r) {
                a.decorateType(t.constructor).add(new o(r,e)),
                Object.defineProperty(t, r, {
                    get: a.oneOfGetter(e),
                    set: a.oneOfSetter(e)
                })
            }
        }
    }
    ,
         16039: (e,t,r)=>{
        "use strict";
        e.exports = o;
        var n = r(13548);
        ((o.prototype = Object.create(n.prototype)).constructor = o).className = "MapField";
        var i = r(77063)
          , a = r(9935);
        function o(e, t, r, i, o, s) {
            if (n.call(this, e, t, i, void 0, void 0, o, s),
            !a.isString(r))
                throw TypeError("keyType must be a string");
            this.keyType = r,
            this.resolvedKeyType = null,
            this.map = !0
        }
        o.fromJSON = function(e, t) {
            return new o(e,t.id,t.keyType,t.type,t.options,t.comment)
        }
        ,
        o.prototype.toJSON = function(e) {
            var t = !!e && Boolean(e.keepComments);
            return a.toObject(["keyType", this.keyType, "type", this.type, "id", this.id, "extend", this.extend, "options", this.options, "comment", t ? this.comment : void 0])
        }
        ,
        o.prototype.resolve = function() {
            if (this.resolved)
                return this;
            if (void 0 === i.mapKey[this.keyType])
                throw Error("invalid key type: " + this.keyType);
            return n.prototype.resolve.call(this)
        }
        ,
        o.d = function(e, t, r) {
            return "function" == typeof r ? r = a.decorateType(r).name : r && "object" == typeof r && (r = a.decorateEnum(r).name),
            function(n, i) {
                a.decorateType(n.constructor).add(new o(i,e,t,r))
            }
        }
    }
    ,
         77513: (e,t,r)=>{
        "use strict";
        e.exports = s;
        var n = r(69313);
        ((s.prototype = Object.create(n.prototype)).constructor = s).className = "Service";
        var i = r(94429)
          , a = r(9935)
          , o = r(35994);
        function s(e, t) {
            n.call(this, e, t),
            this.methods = {},
            this._methodsArray = null
        }
        function c(e) {
            return e._methodsArray = null,
            e
        }
        s.fromJSON = function(e, t) {
            var r = new s(e,t.options);
            if (t.methods)
                for (var n = Object.keys(t.methods), a = 0; a < n.length; ++a)
                    r.add(i.fromJSON(n[a], t.methods[n[a]]));
            return t.nested && r.addJSON(t.nested),
            r.comment = t.comment,
            r
        }
        ,
        s.prototype.toJSON = function(e) {
            var t = n.prototype.toJSON.call(this, e)
              , r = !!e && Boolean(e.keepComments);
            return a.toObject(["options", t && t.options || void 0, "methods", n.arrayToJSON(this.methodsArray, e) || {}, "nested", t && t.nested || void 0, "comment", r ? this.comment : void 0])
        }
        ,
        Object.defineProperty(s.prototype, "methodsArray", {
            get: function() {
                return this._methodsArray || (this._methodsArray = a.toArray(this.methods))
            }
        }),
        s.prototype.get = function(e) {
            return this.methods[e] || n.prototype.get.call(this, e)
        }
        ,
        s.prototype.resolveAll = function() {
            for (var e = this.methodsArray, t = 0; t < e.length; ++t)
                e[t].resolve();
            return n.prototype.resolve.call(this)
        }
        ,
        s.prototype.add = function(e) {
            if (this.get(e.name))
                throw Error("duplicate name '" + e.name + "' in " + this);
            return e instanceof i ? (this.methods[e.name] = e,
            e.parent = this,
            c(this)) : n.prototype.add.call(this, e)
        }
        ,
        s.prototype.remove = function(e) {
            if (e instanceof i) {
                if (this.methods[e.name] !== e)
                    throw Error(e + " is not a member of " + this);
                return delete this.methods[e.name],
                e.parent = null,
                c(this)
            }
            return n.prototype.remove.call(this, e)
        }
        ,
        s.prototype.create = function(e, t, r) {
            for (var n, i = new o.Service(e,t,r), s = 0; s < this.methodsArray.length; ++s) {
                var c = a.lcFirst((n = this._methodsArray[s]).resolve().name).replace(/[^$\w_]/g, "");
                i[c] = a.codegen(["r", "c"], a.isReserved(c) ? c + "_" : c)("return this.rpcCall(m,q,s,r,c)")({
                    m: n,
                    q: n.resolvedRequestType.ctor,
                    s: n.resolvedResponseType.ctor
                })
            }
            return i
        }
    }
    ,
         94429: (e,t,r)=>{
        "use strict";
        e.exports = a;
        var n = r(3243);
        ((a.prototype = Object.create(n.prototype)).constructor = a).className = "Method";
        var i = r(9935);
        function a(e, t, r, a, o, s, c, l, u) {
            if (i.isObject(o) ? (c = o,
            o = s = void 0) : i.isObject(s) && (c = s,
            s = void 0),
            void 0 !== t && !i.isString(t))
                throw TypeError("type must be a string");
            if (!i.isString(r))
                throw TypeError("requestType must be a string");
            if (!i.isString(a))
                throw TypeError("responseType must be a string");
            n.call(this, e, c),
            this.type = t || "rpc",
            this.requestType = r,
            this.requestStream = !!o || void 0,
            this.responseType = a,
            this.responseStream = !!s || void 0,
            this.resolvedRequestType = null,
            this.resolvedResponseType = null,
            this.comment = l,
            this.parsedOptions = u
        }
        a.fromJSON = function(e, t) {
            return new a(e,t.type,t.requestType,t.responseType,t.requestStream,t.responseStream,t.options,t.comment,t.parsedOptions)
        }
        ,
        a.prototype.toJSON = function(e) {
            var t = !!e && Boolean(e.keepComments);
            return i.toObject(["type", "rpc" !== this.type && this.type || void 0, "requestType", this.requestType, "requestStream", this.requestStream, "responseType", this.responseType, "responseStream", this.responseStream, "options", this.options, "comment", t ? this.comment : void 0, "parsedOptions", this.parsedOptions])
        }
        ,
        a.prototype.resolve = function() {
            return this.resolved ? this : (this.resolvedRequestType = this.parent.lookupType(this.requestType),
            this.resolvedResponseType = this.parent.lookupType(this.responseType),
            n.prototype.resolve.call(this))
        }
    }
    ,
        35994: (e,t,r)=>{
        "use strict";
        t.Service = r(77948)
    }
    ,
        77948: (e,t,r)=>{
        "use strict";
        e.exports = i;
        var n = r(99693);
        function i(e, t, r) {
            if ("function" != typeof e)
                throw TypeError("rpcImpl must be a function");
            n.EventEmitter.call(this),
            this.rpcImpl = e,
            this.requestDelimited = Boolean(t),
            this.responseDelimited = Boolean(r)
        }
        (i.prototype = Object.create(n.EventEmitter.prototype)).constructor = i,
        i.prototype.rpcCall = function e(t, r, i, a, o) {
            if (!a)
                throw TypeError("request must be specified");
            var s = this;
            if (!o)
                return n.asPromise(e, s, t, r, i, a);
            if (s.rpcImpl)
                try {
                    return s.rpcImpl(t, r[s.requestDelimited ? "encodeDelimited" : "encode"](a).finish(), (function(e, r) {
                        if (e)
                            return s.emit("error", e, t),
                            o(e);
                        if (null !== r) {
                            if (!(r instanceof i))
                                try {
                                    r = i[s.responseDelimited ? "decodeDelimited" : "decode"](r)
                                } catch (e) {
                                    return s.emit("error", e, t),
                                    o(e)
                                }
                            return s.emit("data", r, t),
                            o(null, r)
                        }
                        s.end(!0)
                    }
                    ))
                } catch (e) {
                    return s.emit("error", e, t),
                    void setTimeout((function() {
                        o(e)
                    }
                    ), 0)
                }
            else
                setTimeout((function() {
                    o(Error("already ended"))
                }
                ), 0)
        }
        ,
        i.prototype.end = function(e) {
            return this.rpcImpl && (e || this.rpcImpl(null, null, null),
            this.rpcImpl = null,
            this.emit("end").off()),
            this
        }
    }
    ,
         88368: (e,t,r)=>{
        "use strict";
        e.exports = i;
        var n = r(99693);
        function i(e) {
            if (e)
                for (var t = Object.keys(e), r = 0; r < t.length; ++r)
                    this[t[r]] = e[t[r]]
        }
        i.create = function(e) {
            return this.$type.create(e)
        }
        ,
        i.encode = function(e, t) {
            return this.$type.encode(e, t)
        }
        ,
        i.encodeDelimited = function(e, t) {
            return this.$type.encodeDelimited(e, t)
        }
        ,
        i.decode = function(e) {
            return this.$type.decode(e)
        }
        ,
        i.decodeDelimited = function(e) {
            return this.$type.decodeDelimited(e)
        }
        ,
        i.verify = function(e) {
            return this.$type.verify(e)
        }
        ,
        i.fromObject = function(e) {
            return this.$type.fromObject(e)
        }
        ,
        i.toObject = function(e, t) {
            return this.$type.toObject(e, t)
        }
        ,
        i.prototype.toJSON = function() {
            return this.$type.toObject(this, n.toJSONOptions)
        }
    }
    ,
                51408: (e,t,r)=>{
        "use strict";
        e.exports = c;
        var n, i = r(99693), a = i.LongBits, o = i.utf8;
        function s(e, t) {
            return RangeError("index out of range: " + e.pos + " + " + (t || 1) + " > " + e.len)
        }
        function c(e) {
            this.buf = e,
            this.pos = 0,
            this.len = e.length
        }
        var l, u = "undefined" != typeof Uint8Array ? function(e) {
            if (e instanceof Uint8Array || Array.isArray(e))
                return new c(e);
            throw Error("illegal buffer")
        }
        : function(e) {
            if (Array.isArray(e))
                return new c(e);
            throw Error("illegal buffer")
        }
        , d = function() {
            return i.Buffer ? function(e) {
                return (c.create = function(e) {
                    return i.Buffer.isBuffer(e) ? new n(e) : u(e)
                }
                )(e)
            }
            : u
        };
        function h() {
            var e = new a(0,0)
              , t = 0;
            if (!(this.len - this.pos > 4)) {
                for (; t < 3; ++t) {
                    if (this.pos >= this.len)
                        throw s(this);
                    if (e.lo = (e.lo | (127 & this.buf[this.pos]) << 7 * t) >>> 0,
                    this.buf[this.pos++] < 128)
                        return e
                }
                return e.lo = (e.lo | (127 & this.buf[this.pos++]) << 7 * t) >>> 0,
                e
            }
            for (; t < 4; ++t)
                if (e.lo = (e.lo | (127 & this.buf[this.pos]) << 7 * t) >>> 0,
                this.buf[this.pos++] < 128)
                    return e;
            if (e.lo = (e.lo | (127 & this.buf[this.pos]) << 28) >>> 0,
            e.hi = (e.hi | (127 & this.buf[this.pos]) >> 4) >>> 0,
            this.buf[this.pos++] < 128)
                return e;
            if (t = 0,
            this.len - this.pos > 4) {
                for (; t < 5; ++t)
                    if (e.hi = (e.hi | (127 & this.buf[this.pos]) << 7 * t + 3) >>> 0,
                    this.buf[this.pos++] < 128)
                        return e
            } else
                for (; t < 5; ++t) {
                    if (this.pos >= this.len)
                        throw s(this);
                    if (e.hi = (e.hi | (127 & this.buf[this.pos]) << 7 * t + 3) >>> 0,
                    this.buf[this.pos++] < 128)
                        return e
                }
            throw Error("invalid varint encoding")
        }
        function p(e, t) {
            return (e[t - 4] | e[t - 3] << 8 | e[t - 2] << 16 | e[t - 1] << 24) >>> 0
        }
        function f() {
            if (this.pos + 8 > this.len)
                throw s(this, 8);
            return new a(p(this.buf, this.pos += 4),p(this.buf, this.pos += 4))
        }
        c.create = d(),
        c.prototype._slice = i.Array.prototype.subarray || i.Array.prototype.slice,
        c.prototype.uint32 = (l = 4294967295,
        function() {
            if (l = (127 & this.buf[this.pos]) >>> 0,
            this.buf[this.pos++] < 128)
                return l;
            if (l = (l | (127 & this.buf[this.pos]) << 7) >>> 0,
            this.buf[this.pos++] < 128)
                return l;
            if (l = (l | (127 & this.buf[this.pos]) << 14) >>> 0,
            this.buf[this.pos++] < 128)
                return l;
            if (l = (l | (127 & this.buf[this.pos]) << 21) >>> 0,
            this.buf[this.pos++] < 128)
                return l;
            if (l = (l | (15 & this.buf[this.pos]) << 28) >>> 0,
            this.buf[this.pos++] < 128)
                return l;
            if ((this.pos += 5) > this.len)
                throw this.pos = this.len,
                s(this, 10);
            return l
        }
        ),
        c.prototype.int32 = function() {
            return 0 | this.uint32()
        }
        ,
        c.prototype.sint32 = function() {
            var e = this.uint32();
            return e >>> 1 ^ -(1 & e) | 0
        }
        ,
        c.prototype.bool = function() {
            return 0 !== this.uint32()
        }
        ,
        c.prototype.fixed32 = function() {
            if (this.pos + 4 > this.len)
                throw s(this, 4);
            return p(this.buf, this.pos += 4)
        }
        ,
        c.prototype.sfixed32 = function() {
            if (this.pos + 4 > this.len)
                throw s(this, 4);
            return 0 | p(this.buf, this.pos += 4)
        }
        ,
        c.prototype.float = function() {
            if (this.pos + 4 > this.len)
                throw s(this, 4);
            var e = i.float.readFloatLE(this.buf, this.pos);
            return this.pos += 4,
            e
        }
        ,
        c.prototype.double = function() {
            if (this.pos + 8 > this.len)
                throw s(this, 4);
            var e = i.float.readDoubleLE(this.buf, this.pos);
            return this.pos += 8,
            e
        }
        ,
        c.prototype.bytes = function() {
            var e = this.uint32()
              , t = this.pos
              , r = this.pos + e;
            if (r > this.len)
                throw s(this, e);
            return this.pos += e,
            Array.isArray(this.buf) ? this.buf.slice(t, r) : t === r ? new this.buf.constructor(0) : this._slice.call(this.buf, t, r)
        }
        ,
        c.prototype.string = function() {
            var e = this.bytes();
            return o.read(e, 0, e.length)
        }
        ,
        c.prototype.skip = function(e) {
            if ("number" == typeof e) {
                if (this.pos + e > this.len)
                    throw s(this, e);
                this.pos += e
            } else
                do {
                    if (this.pos >= this.len)
                        throw s(this)
                } while (128 & this.buf[this.pos++]);
            return this
        }
        ,
        c.prototype.skipType = function(e) {
            switch (e) {
            case 0:
                this.skip();
                break;
            case 1:
                this.skip(8);
                break;
            case 2:
                this.skip(this.uint32());
                break;
            case 3:
                for (; 4 != (e = 7 & this.uint32()); )
                    this.skipType(e);
                break;
            case 5:
                this.skip(4);
                break;
            default:
                throw Error("invalid wire type " + e + " at offset " + this.pos)
            }
            return this
        }
        ,
        c._configure = function(e) {
            n = e,
            c.create = d(),
            n._configure();
            var t = i.Long ? "toLong" : "toNumber";
            i.merge(c.prototype, {
                int64: function() {
                    return h.call(this)[t](!1)
                },
                uint64: function() {
                    return h.call(this)[t](!0)
                },
                sint64: function() {
                    return h.call(this).zzDecode()[t](!1)
                },
                fixed64: function() {
                    return f.call(this)[t](!0)
                },
                sfixed64: function() {
                    return f.call(this)[t](!1)
                }
            })
        }
    }
    ,
            41173: (e,t,r)=>{
        "use strict";
        e.exports = d;
        var n, i = r(99693), a = i.LongBits, o = i.base64, s = i.utf8;
        function c(e, t, r) {
            this.fn = e,
            this.len = t,
            this.next = void 0,
            this.val = r
        }
        function l() {}
        function u(e) {
            this.head = e.head,
            this.tail = e.tail,
            this.len = e.len,
            this.next = e.states
        }
        function d() {
            this.len = 0,
            this.head = new c(l,0,0),
            this.tail = this.head,
            this.states = null
        }
        var h = function() {
            return i.Buffer ? function() {
                return (d.create = function() {
                    return new n
                }
                )()
            }
            : function() {
                return new d
            }
        };
        function p(e, t, r) {
            t[r] = 255 & e
        }
        function f(e, t) {
            this.len = e,
            this.next = void 0,
            this.val = t
        }
        function m(e, t, r) {
            for (; e.hi; )
                t[r++] = 127 & e.lo | 128,
                e.lo = (e.lo >>> 7 | e.hi << 25) >>> 0,
                e.hi >>>= 7;
            for (; e.lo > 127; )
                t[r++] = 127 & e.lo | 128,
                e.lo = e.lo >>> 7;
            t[r++] = e.lo
        }
        function _(e, t, r) {
            t[r] = 255 & e,
            t[r + 1] = e >>> 8 & 255,
            t[r + 2] = e >>> 16 & 255,
            t[r + 3] = e >>> 24
        }
        d.create = h(),
        d.alloc = function(e) {
            return new i.Array(e)
        }
        ,
        i.Array !== Array && (d.alloc = i.pool(d.alloc, i.Array.prototype.subarray)),
        d.prototype._push = function(e, t, r) {
            return this.tail = this.tail.next = new c(e,t,r),
            this.len += t,
            this
        }
        ,
        f.prototype = Object.create(c.prototype),
        f.prototype.fn = function(e, t, r) {
            for (; e > 127; )
                t[r++] = 127 & e | 128,
                e >>>= 7;
            t[r] = e
        }
        ,
        d.prototype.uint32 = function(e) {
            return this.len += (this.tail = this.tail.next = new f((e >>>= 0) < 128 ? 1 : e < 16384 ? 2 : e < 2097152 ? 3 : e < 268435456 ? 4 : 5,e)).len,
            this
        }
        ,
        d.prototype.int32 = function(e) {
            return e < 0 ? this._push(m, 10, a.fromNumber(e)) : this.uint32(e)
        }
        ,
        d.prototype.sint32 = function(e) {
            return this.uint32((e << 1 ^ e >> 31) >>> 0)
        }
        ,
        d.prototype.uint64 = function(e) {
            var t = a.from(e);
            return this._push(m, t.length(), t)
        }
        ,
        d.prototype.int64 = d.prototype.uint64,
        d.prototype.sint64 = function(e) {
            var t = a.from(e).zzEncode();
            return this._push(m, t.length(), t)
        }
        ,
        d.prototype.bool = function(e) {
            return this._push(p, 1, e ? 1 : 0)
        }
        ,
        d.prototype.fixed32 = function(e) {
            return this._push(_, 4, e >>> 0)
        }
        ,
        d.prototype.sfixed32 = d.prototype.fixed32,
        d.prototype.fixed64 = function(e) {
            var t = a.from(e);
            return this._push(_, 4, t.lo)._push(_, 4, t.hi)
        }
        ,
        d.prototype.sfixed64 = d.prototype.fixed64,
        d.prototype.float = function(e) {
            return this._push(i.float.writeFloatLE, 4, e)
        }
        ,
        d.prototype.double = function(e) {
            return this._push(i.float.writeDoubleLE, 8, e)
        }
        ;
        var v = i.Array.prototype.set ? function(e, t, r) {
            t.set(e, r)
        }
        : function(e, t, r) {
            for (var n = 0; n < e.length; ++n)
                t[r + n] = e[n]
        }
        ;
        d.prototype.bytes = function(e) {
            var t = e.length >>> 0;
            if (!t)
                return this._push(p, 1, 0);
            if (i.isString(e)) {
                var r = d.alloc(t = o.length(e));
                o.decode(e, r, 0),
                e = r
            }
            return this.uint32(t)._push(v, t, e)
        }
        ,
        d.prototype.string = function(e) {
            var t = s.length(e);
            return t ? this.uint32(t)._push(s.write, t, e) : this._push(p, 1, 0)
        }
        ,
        d.prototype.fork = function() {
            return this.states = new u(this),
            this.head = this.tail = new c(l,0,0),
            this.len = 0,
            this
        }
        ,
        d.prototype.reset = function() {
            return this.states ? (this.head = this.states.head,
            this.tail = this.states.tail,
            this.len = this.states.len,
            this.states = this.states.next) : (this.head = this.tail = new c(l,0,0),
            this.len = 0),
            this
        }
        ,
        d.prototype.ldelim = function() {
            var e = this.head
              , t = this.tail
              , r = this.len;
            return this.reset().uint32(r),
            r && (this.tail.next = e.next,
            this.tail = t,
            this.len += r),
            this
        }
        ,
        d.prototype.finish = function() {
            for (var e = this.head.next, t = this.constructor.alloc(this.len), r = 0; e; )
                e.fn(e.val, t, r),
                r += e.len,
                e = e.next;
            return t
        }
        ,
        d._configure = function(e) {
            n = e,
            d.create = h(),
            n._configure()
        }
    }
    ,
            44928: (e,t,r)=>{
        "use strict";
        e.exports = function(e) {
            for (var t, r = a.codegen(["m", "w"], e.name + "$encode")("if(!w)")("w=Writer.create()"), s = e.fieldsArray.slice().sort(a.compareFieldsById), c = 0; c < s.length; ++c) {
                var l = s[c].resolve()
                  , u = e._fieldsArray.indexOf(l)
                  , d = l.resolvedType instanceof n ? "int32" : l.type
                  , h = i.basic[d];
                t = "m" + a.safeProp(l.name),
                l.map ? (r("if(%s!=null&&Object.hasOwnProperty.call(m,%j)){", t, l.name)("for(var ks=Object.keys(%s),i=0;i<ks.length;++i){", t)("w.uint32(%i).fork().uint32(%i).%s(ks[i])", (l.id << 3 | 2) >>> 0, 8 | i.mapKey[l.keyType], l.keyType),
                void 0 === h ? r("types[%i].encode(%s[ks[i]],w.uint32(18).fork()).ldelim().ldelim()", u, t) : r(".uint32(%i).%s(%s[ks[i]]).ldelim()", 16 | h, d, t),
                r("}")("}")) : l.repeated ? (r("if(%s!=null&&%s.length){", t, t),
                l.packed && void 0 !== i.packed[d] ? r("w.uint32(%i).fork()", (l.id << 3 | 2) >>> 0)("for(var i=0;i<%s.length;++i)", t)("w.%s(%s[i])", d, t)("w.ldelim()") : (r("for(var i=0;i<%s.length;++i)", t),
                void 0 === h ? o(r, l, u, t + "[i]") : r("w.uint32(%i).%s(%s[i])", (l.id << 3 | h) >>> 0, d, t)),
                r("}")) : (l.optional && r("if(%s!=null&&Object.hasOwnProperty.call(m,%j))", t, l.name),
                void 0 === h ? o(r, l, u, t) : r("w.uint32(%i).%s(%s)", (l.id << 3 | h) >>> 0, d, t))
            }
            return r("return w")
        }
        ;
        var n = r(67025)
          , i = r(77063)
          , a = r(9935);
        function o(e, t, r, n) {
            return t.resolvedType.group ? e("types[%i].encode(%s,w.uint32(%i)).uint32(%i)", r, n, (t.id << 3 | 3) >>> 0, (t.id << 3 | 4) >>> 0) : e("types[%i].encode(%s,w.uint32(%i).fork()).ldelim()", r, n, (t.id << 3 | 2) >>> 0)
        }
    }
    ,
          15305: (e,t,r)=>{
        "use strict";
        e.exports = function(e) {
            var t = a.codegen(["r", "l"], e.name + "$decode")("if(!(r instanceof Reader))")("r=Reader.create(r)")("var c=l===undefined?r.len:r.pos+l,m=new this.ctor" + (e.fieldsArray.filter((function(e) {
                return e.map
            }
            )).length ? ",k,value" : ""))("while(r.pos<c){")("var t=r.uint32()");
            e.group && t("if((t&7)===4)")("break"),
            t("switch(t>>>3){");
            for (var r = 0; r < e.fieldsArray.length; ++r) {
                var s = e._fieldsArray[r].resolve()
                  , c = s.resolvedType instanceof n ? "int32" : s.type
                  , l = "m" + a.safeProp(s.name);
                t("case %i:", s.id),
                s.map ? (t("if(%s===util.emptyObject)", l)("%s={}", l)("var c2 = r.uint32()+r.pos"),
                void 0 !== i.defaults[s.keyType] ? t("k=%j", i.defaults[s.keyType]) : t("k=null"),
                void 0 !== i.defaults[c] ? t("value=%j", i.defaults[c]) : t("value=null"),
                t("while(r.pos<c2){")("var tag2=r.uint32()")("switch(tag2>>>3){")("case 1: k=r.%s(); break", s.keyType)("case 2:"),
                void 0 === i.basic[c] ? t("value=types[%i].decode(r,r.uint32())", r) : t("value=r.%s()", c),
                t("break")("default:")("r.skipType(tag2&7)")("break")("}")("}"),
                void 0 !== i.long[s.keyType] ? t('%s[typeof k==="object"?util.longToHash(k):k]=value', l) : t("%s[k]=value", l)) : s.repeated ? (t("if(!(%s&&%s.length))", l, l)("%s=[]", l),
                void 0 !== i.packed[c] && t("if((t&7)===2){")("var c2=r.uint32()+r.pos")("while(r.pos<c2)")("%s.push(r.%s())", l, c)("}else"),
                void 0 === i.basic[c] ? t(s.resolvedType.group ? "%s.push(types[%i].decode(r))" : "%s.push(types[%i].decode(r,r.uint32()))", l, r) : t("%s.push(r.%s())", l, c)) : void 0 === i.basic[c] ? t(s.resolvedType.group ? "%s=types[%i].decode(r)" : "%s=types[%i].decode(r,r.uint32())", l, r) : t("%s=r.%s()", l, c),
                t("break")
            }
            for (t("default:")("r.skipType(t&7)")("break")("}")("}"),
            r = 0; r < e._fieldsArray.length; ++r) {
                var u = e._fieldsArray[r];
                u.required && t("if(!m.hasOwnProperty(%j))", u.name)("throw util.ProtocolError(%j,{instance:m})", o(u))
            }
            return t("return m")
        }
        ;
        var n = r(67025)
          , i = r(77063)
          , a = r(9935);
        function o(e) {
            return "missing required '" + e.name + "'"
        }
    }
    ,
            24497: (e,t,r)=>{
        "use strict";
        e.exports = function(e) {
            var t = i.codegen(["m"], e.name + "$verify")('if(typeof m!=="object"||m===null)')("return%j", "object expected")
              , r = {};
            e.oneofsArray.length && t("var p={}");
            for (var n = 0; n < e.fieldsArray.length; ++n) {
                var c = e._fieldsArray[n].resolve()
                  , l = "m" + i.safeProp(c.name);
                if (c.optional && t("if(%s!=null&&m.hasOwnProperty(%j)){", l, c.name),
                c.map)
                    t("if(!util.isObject(%s))", l)("return%j", a(c, "object"))("var k=Object.keys(%s)", l)("for(var i=0;i<k.length;++i){"),
                    s(t, c, "k[i]"),
                    o(t, c, n, l + "[k[i]]")("}");
                else if (c.repeated)
                    t("if(!Array.isArray(%s))", l)("return%j", a(c, "array"))("for(var i=0;i<%s.length;++i){", l),
                    o(t, c, n, l + "[i]")("}");
                else {
                    if (c.partOf) {
                        var u = i.safeProp(c.partOf.name);
                        1 === r[c.partOf.name] && t("if(p%s===1)", u)("return%j", c.partOf.name + ": multiple values"),
                        r[c.partOf.name] = 1,
                        t("p%s=1", u)
                    }
                    o(t, c, n, l)
                }
                c.optional && t("}")
            }
            return t("return null")
        }
        ;
        var n = r(67025)
          , i = r(9935);
        function a(e, t) {
            return e.name + ": " + t + (e.repeated && "array" !== t ? "[]" : e.map && "object" !== t ? "{k:" + e.keyType + "}" : "") + " expected"
        }
        function o(e, t, r, i) {
            if (t.resolvedType)
                if (t.resolvedType instanceof n) {
                    e("switch(%s){", i)("default:")("return%j", a(t, "enum value"));
                    for (var o = Object.keys(t.resolvedType.values), s = 0; s < o.length; ++s)
                        e("case %i:", t.resolvedType.values[o[s]]);
                    e("break")("}")
                } else
                    e("{")("var e=types[%i].verify(%s);", r, i)("if(e)")("return%j+e", t.name + ".")("}");
            else
                switch (t.type) {
                case "int32":
                case "uint32":
                case "sint32":
                case "fixed32":
                case "sfixed32":
                    e("if(!util.isInteger(%s))", i)("return%j", a(t, "integer"));
                    break;
                case "int64":
                case "uint64":
                case "sint64":
                case "fixed64":
                case "sfixed64":
                    e("if(!util.isInteger(%s)&&!(%s&&util.isInteger(%s.low)&&util.isInteger(%s.high)))", i, i, i, i)("return%j", a(t, "integer|Long"));
                    break;
                case "float":
                case "double":
                    e('if(typeof %s!=="number")', i)("return%j", a(t, "number"));
                    break;
                case "bool":
                    e('if(typeof %s!=="boolean")', i)("return%j", a(t, "boolean"));
                    break;
                case "string":
                    e("if(!util.isString(%s))", i)("return%j", a(t, "string"));
                    break;
                case "bytes":
                    e('if(!(%s&&typeof %s.length==="number"||util.isString(%s)))', i, i, i)("return%j", a(t, "buffer"))
                }
            return e
        }
        function s(e, t, r) {
            switch (t.keyType) {
            case "int32":
            case "uint32":
            case "sint32":
            case "fixed32":
            case "sfixed32":
                e("if(!util.key32Re.test(%s))", r)("return%j", a(t, "integer key"));
                break;
            case "int64":
            case "uint64":
            case "sint64":
            case "fixed64":
            case "sfixed64":
                e("if(!util.key64Re.test(%s))", r)("return%j", a(t, "integer|Long key"));
                break;
            case "bool":
                e("if(!util.key2Re.test(%s))", r)("return%j", a(t, "boolean key"))
            }
            return e
        }
    }
    ,
            33996: (e,t,r)=>{
        "use strict";
        var n = t
          , i = r(67025)
          , a = r(9935);
        function o(e, t, r, n) {
            if (t.resolvedType)
                if (t.resolvedType instanceof i) {
                    e("switch(d%s){", n);
                    for (var a = t.resolvedType.values, o = Object.keys(a), s = 0; s < o.length; ++s)
                        t.repeated && a[o[s]] === t.typeDefault && e("default:"),
                        e("case%j:", o[s])("case %i:", a[o[s]])("m%s=%j", n, a[o[s]])("break");
                    e("}")
                } else
                    e('if(typeof d%s!=="object")', n)("throw TypeError(%j)", t.fullName + ": object expected")("m%s=types[%i].fromObject(d%s)", n, r, n);
            else {
                var c = !1;
                switch (t.type) {
                case "double":
                case "float":
                    e("m%s=Number(d%s)", n, n);
                    break;
                case "uint32":
                case "fixed32":
                    e("m%s=d%s>>>0", n, n);
                    break;
                case "int32":
                case "sint32":
                case "sfixed32":
                    e("m%s=d%s|0", n, n);
                    break;
                case "uint64":
                    c = !0;
                case "int64":
                case "sint64":
                case "fixed64":
                case "sfixed64":
                    e("if(util.Long)")("(m%s=util.Long.fromValue(d%s)).unsigned=%j", n, n, c)('else if(typeof d%s==="string")', n)("m%s=parseInt(d%s,10)", n, n)('else if(typeof d%s==="number")', n)("m%s=d%s", n, n)('else if(typeof d%s==="object")', n)("m%s=new util.LongBits(d%s.low>>>0,d%s.high>>>0).toNumber(%s)", n, n, n, c ? "true" : "");
                    break;
                case "bytes":
                    e('if(typeof d%s==="string")', n)("util.base64.decode(d%s,m%s=util.newBuffer(util.base64.length(d%s)),0)", n, n, n)("else if(d%s.length)", n)("m%s=d%s", n, n);
                    break;
                case "string":
                    e("m%s=String(d%s)", n, n);
                    break;
                case "bool":
                    e("m%s=Boolean(d%s)", n, n)
                }
            }
            return e
        }
        function s(e, t, r, n) {
            if (t.resolvedType)
                t.resolvedType instanceof i ? e("d%s=o.enums===String?types[%i].values[m%s]:m%s", n, r, n, n) : e("d%s=types[%i].toObject(m%s,o)", n, r, n);
            else {
                var a = !1;
                switch (t.type) {
                case "double":
                case "float":
                    e("d%s=o.json&&!isFinite(m%s)?String(m%s):m%s", n, n, n, n);
                    break;
                case "uint64":
                    a = !0;
                case "int64":
                case "sint64":
                case "fixed64":
                case "sfixed64":
                    e('if(typeof m%s==="number")', n)("d%s=o.longs===String?String(m%s):m%s", n, n, n)("else")("d%s=o.longs===String?util.Long.prototype.toString.call(m%s):o.longs===Number?new util.LongBits(m%s.low>>>0,m%s.high>>>0).toNumber(%s):m%s", n, n, n, n, a ? "true" : "", n);
                    break;
                case "bytes":
                    e("d%s=o.bytes===String?util.base64.encode(m%s,0,m%s.length):o.bytes===Array?Array.prototype.slice.call(m%s):m%s", n, n, n, n, n);
                    break;
                default:
                    e("d%s=m%s", n, n)
                }
            }
            return e
        }
        n.fromObject = function(e) {
            var t = e.fieldsArray
              , r = a.codegen(["d"], e.name + "$fromObject")("if(d instanceof this.ctor)")("return d");
            if (!t.length)
                return r("return new this.ctor");
            r("var m=new this.ctor");
            for (var n = 0; n < t.length; ++n) {
                var s = t[n].resolve()
                  , c = a.safeProp(s.name);
                s.map ? (r("if(d%s){", c)('if(typeof d%s!=="object")', c)("throw TypeError(%j)", s.fullName + ": object expected")("m%s={}", c)("for(var ks=Object.keys(d%s),i=0;i<ks.length;++i){", c),
                o(r, s, n, c + "[ks[i]]")("}")("}")) : s.repeated ? (r("if(d%s){", c)("if(!Array.isArray(d%s))", c)("throw TypeError(%j)", s.fullName + ": array expected")("m%s=[]", c)("for(var i=0;i<d%s.length;++i){", c),
                o(r, s, n, c + "[i]")("}")("}")) : (s.resolvedType instanceof i || r("if(d%s!=null){", c),
                o(r, s, n, c),
                s.resolvedType instanceof i || r("}"))
            }
            return r("return m")
        }
        ,
        n.toObject = function(e) {
            var t = e.fieldsArray.slice().sort(a.compareFieldsById);
            if (!t.length)
                return a.codegen()("return {}");
            for (var r = a.codegen(["m", "o"], e.name + "$toObject")("if(!o)")("o={}")("var d={}"), n = [], o = [], c = [], l = 0; l < t.length; ++l)
                t[l].partOf || (t[l].resolve().repeated ? n : t[l].map ? o : c).push(t[l]);
            if (n.length) {
                for (r("if(o.arrays||o.defaults){"),
                l = 0; l < n.length; ++l)
                    r("d%s=[]", a.safeProp(n[l].name));
                r("}")
            }
            if (o.length) {
                for (r("if(o.objects||o.defaults){"),
                l = 0; l < o.length; ++l)
                    r("d%s={}", a.safeProp(o[l].name));
                r("}")
            }
            if (c.length) {
                for (r("if(o.defaults){"),
                l = 0; l < c.length; ++l) {
                    var u = c[l]
                      , d = a.safeProp(u.name);
                    if (u.resolvedType instanceof i)
                        r("d%s=o.enums===String?%j:%j", d, u.resolvedType.valuesById[u.typeDefault], u.typeDefault);
                    else if (u.long)
                        r("if(util.Long){")("var n=new util.Long(%i,%i,%j)", u.typeDefault.low, u.typeDefault.high, u.typeDefault.unsigned)("d%s=o.longs===String?n.toString():o.longs===Number?n.toNumber():n", d)("}else")("d%s=o.longs===String?%j:%i", d, u.typeDefault.toString(), u.typeDefault.toNumber());
                    else if (u.bytes) {
                        var h = "[" + Array.prototype.slice.call(u.typeDefault).join(",") + "]";
                        r("if(o.bytes===String)d%s=%j", d, String.fromCharCode.apply(String, u.typeDefault))("else{")("d%s=%s", d, h)("if(o.bytes!==Array)d%s=util.newBuffer(d%s)", d, d)("}")
                    } else
                        r("d%s=%j", d, u.typeDefault)
                }
                r("}")
            }
            var p = !1;
            for (l = 0; l < t.length; ++l) {
                u = t[l];
                var f = e._fieldsArray.indexOf(u);
                d = a.safeProp(u.name),
                u.map ? (p || (p = !0,
                r("var ks2")),
                r("if(m%s&&(ks2=Object.keys(m%s)).length){", d, d)("d%s={}", d)("for(var j=0;j<ks2.length;++j){"),
                s(r, u, f, d + "[ks2[j]]")("}")) : u.repeated ? (r("if(m%s&&m%s.length){", d, d)("d%s=[]", d)("for(var j=0;j<m%s.length;++j){", d),
                s(r, u, f, d + "[j]")("}")) : (r("if(m%s!=null&&m.hasOwnProperty(%j)){", d, u.name),
                s(r, u, f, d),
                u.partOf && r("if(o.oneofs)")("d%s=%j", a.safeProp(u.partOf.name), u.name)),
                r("}")
            }
            return r("return d")
        }
    }
    ,
            71667: (e,t,r)=>{
        "use strict";
        var n = t
          , i = r(88368);
        n[".google.protobuf.Any"] = {
            fromObject: function(e) {
                if (e && e["@type"]) {
                    var t = e["@type"].substring(e["@type"].lastIndexOf("/") + 1)
                      , r = this.lookup(t);
                    if (r) {
                        var n = "." === e["@type"].charAt(0) ? e["@type"].substr(1) : e["@type"];
                        return -1 === n.indexOf("/") && (n = "/" + n),
                        this.create({
                            type_url: n,
                            value: r.encode(r.fromObject(e)).finish()
                        })
                    }
                }
                return this.fromObject(e)
            },
            toObject: function(e, t) {
                var r = ""
                  , n = "";
                if (t && t.json && e.type_url && e.value) {
                    n = e.type_url.substring(e.type_url.lastIndexOf("/") + 1),
                    r = e.type_url.substring(0, e.type_url.lastIndexOf("/") + 1);
                    var a = this.lookup(n);
                    a && (e = a.decode(e.value))
                }
                if (!(e instanceof this.ctor) && e instanceof i) {
                    var o = e.$type.toObject(e, t);
                    return "" === r && (r = "type.googleapis.com/"),
                    n = r + ("." === e.$type.fullName[0] ? e.$type.fullName.substr(1) : e.$type.fullName),
                    o["@type"] = n,
                    o
                }
                return this.toObject(e, t)
            }
        }
    }
    ,
         99424: (e,t,r)=>{
        "use strict";
        e.exports = d;
        var n = r(69313);
        ((d.prototype = Object.create(n.prototype)).constructor = d).className = "Root";
        var i, a, o, s = r(13548), c = r(67025), l = r(27598), u = r(9935);
        function d(e) {
            n.call(this, "", e),
            this.deferred = [],
            this.files = []
        }
        function h() {}
        d.fromJSON = function(e, t) {
            return t || (t = new d),
            e.options && t.setOptions(e.options),
            t.addJSON(e.nested)
        }
        ,
        d.prototype.resolvePath = u.path.resolve,
        d.prototype.fetch = u.fetch,
        d.prototype.load = function e(t, r, n) {
            "function" == typeof r && (n = r,
            r = void 0);
            var i = this;
            if (!n)
                return u.asPromise(e, i, t, r);
            var s = n === h;
            function c(e, t) {
                if (n) {
                    var r = n;
                    if (n = null,
                    s)
                        throw e;
                    r(e, t)
                }
            }
            function l(e) {
                var t = e.lastIndexOf("google/protobuf/");
                if (t > -1) {
                    var r = e.substring(t);
                    if (r in o)
                        return r
                }
                return null
            }
            function d(e, t) {
                try {
                    if (u.isString(t) && "{" === t.charAt(0) && (t = JSON.parse(t)),
                    u.isString(t)) {
                        a.filename = e;
                        var n, o = a(t, i, r), d = 0;
                        if (o.imports)
                            for (; d < o.imports.length; ++d)
                                (n = l(o.imports[d]) || i.resolvePath(e, o.imports[d])) && p(n);
                        if (o.weakImports)
                            for (d = 0; d < o.weakImports.length; ++d)
                                (n = l(o.weakImports[d]) || i.resolvePath(e, o.weakImports[d])) && p(n, !0)
                    } else
                        i.setOptions(t.options).addJSON(t.nested)
                } catch (e) {
                    c(e)
                }
                s || f || c(null, i)
            }
            function p(e, t) {
                if (!(i.files.indexOf(e) > -1))
                    if (i.files.push(e),
                    e in o)
                        s ? d(e, o[e]) : (++f,
                        setTimeout((function() {
                            --f,
                            d(e, o[e])
                        }
                        )));
                    else if (s) {
                        var r;
                        try {
                            r = u.fs.readFileSync(e).toString("utf8")
                        } catch (e) {
                            return void (t || c(e))
                        }
                        d(e, r)
                    } else
                        ++f,
                        i.fetch(e, (function(r, a) {
                            --f,
                            n && (r ? t ? f || c(null, i) : c(r) : d(e, a))
                        }
                        ))
            }
            var f = 0;
            u.isString(t) && (t = [t]);
            for (var m, _ = 0; _ < t.length; ++_)
                (m = i.resolvePath("", t[_])) && p(m);
            if (s)
                return i;
            f || c(null, i)
        }
        ,
        d.prototype.loadSync = function(e, t) {
            if (!u.isNode)
                throw Error("not supported");
            return this.load(e, t, h)
        }
        ,
        d.prototype.resolveAll = function() {
            if (this.deferred.length)
                throw Error("unresolvable extensions: " + this.deferred.map((function(e) {
                    return "'extend " + e.extend + "' in " + e.parent.fullName
                }
                )).join(", "));
            return n.prototype.resolveAll.call(this)
        }
        ;
        var p = /^[A-Z]/;
        function f(e, t) {
            var r = t.parent.lookup(t.extend);
            if (r) {
                var n = new s(t.fullName,t.id,t.type,t.rule,void 0,t.options);
                return n.declaringField = t,
                t.extensionField = n,
                r.add(n),
                !0
            }
            return !1
        }
        d.prototype._handleAdd = function(e) {
            if (e instanceof s)
                void 0 === e.extend || e.extensionField || f(0, e) || this.deferred.push(e);
            else if (e instanceof c)
                p.test(e.name) && (e.parent[e.name] = e.values);
            else if (!(e instanceof l)) {
                if (e instanceof i)
                    for (var t = 0; t < this.deferred.length; )
                        f(0, this.deferred[t]) ? this.deferred.splice(t, 1) : ++t;
                for (var r = 0; r < e.nestedArray.length; ++r)
                    this._handleAdd(e._nestedArray[r]);
                p.test(e.name) && (e.parent[e.name] = e)
            }
        }
        ,
        d.prototype._handleRemove = function(e) {
            if (e instanceof s) {
                if (void 0 !== e.extend)
                    if (e.extensionField)
                        e.extensionField.parent.remove(e.extensionField),
                        e.extensionField = null;
                    else {
                        var t = this.deferred.indexOf(e);
                        t > -1 && this.deferred.splice(t, 1)
                    }
            } else if (e instanceof c)
                p.test(e.name) && delete e.parent[e.name];
            else if (e instanceof n) {
                for (var r = 0; r < e.nestedArray.length; ++r)
                    this._handleRemove(e._nestedArray[r]);
                p.test(e.name) && delete e.parent[e.name]
            }
        }
        ,
        d._configure = function(e, t, r) {
            i = e,
            a = t,
            o = r
        }
    }
    ,
})











var p =   main(99693)

// E = {
//     CS_ENTER_ROOM: {
//         key: 200,
//         value: p.prototype.lookupType("CSWebEnterRoom")
//     },
//     CS_HEARTBEAT: {
//         key: 1,
//         value: p.prototype.lookupType("CSWebHeartbeat")
//     },
//     CS_USER_EXIT: {
//         key: 202,
//         value: p.prototype.lookupType("CSWebUserExit")
//     }
// };
// p.Buffer = null
// console.log(p.Buffer)
function T(e) {
    var t =  main(7645).prototype
        console.log(t)
      , n = {
        payloadType: 200,
        payload: t['encode'](e.payload || e).finish()
    };
    return t.encode(n).finish().slice().buffer
}

console.log(T({
    "type": "CS_ENTER_ROOM",
    "payload": {
        "liveStreamId": "3it1OsyAjPk",
        "token": "odueGd0xYhTDRRji24jyGUVg5xpRqoATPaoFwvUUjclMd4F60wCqVWOEnKWFyBnABAeO63pyJtgb/6E2LDLgVjuXJ2FdzPHYxmzax0jA6eBMwLd6gDDJpTmPRt+XJlPAqPjb2KeBMupWIkA6TL5f2A==",
        "pageId": "RwCOthQQBerSloT9_1687589768762"
    }
}));
