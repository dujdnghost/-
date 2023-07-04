const {JSDOM} = require("jsdom");
const fs = require('fs')
eval(fs.readFileSync('./all_dicts.js', {encoding: 'utf8'}))
const dom = new JSDOM("<!DOCTYPE html><p>Hello world</p>");
window = dom.window;
document = window.document;
navigator = window.navigator;
location = window.location;
let megumin, anya = [], new_dict = {};
(function (e) {
        function t(t) {
            for (var a, o, s = t[0], u = t[1], f = t[2], p = 0, l = []; p < s.length; p++)
                o = s[p],
                Object.prototype.hasOwnProperty.call(i, o) && i[o] && l.push(i[o][0]),
                    i[o] = 0;
            for (a in u)
                Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
            c && c(t);
            while (l.length)
                l.shift()();
            return r.push.apply(r, f || []),
                n()
        }

        function n() {
            for (var e, t = 0; t < r.length; t++) {
                for (var n = r[t], a = !0, s = 1; s < n.length; s++) {
                    var u = n[s];
                    0 !== i[u] && (a = !1)
                }
                a && (r.splice(t--, 1),
                    e = o(o.s = n[0]))
            }
            return e
        }

        var a = {}
            , i = {
            index: 0
        }
            , r = [];

        function o(t) {
            if (a[t])
                return a[t].exports;
            var n = a[t] = {
                i: t,
                l: !1,
                exports: {}
            };
            // console.log(t)
            anya.push(t)
            return e[t].call(n.exports, n, n.exports, o),
                n.l = !0,
                n.exports
        }

        megumin = o
        o.e = function (e) {
            var t = []
                , n = i[e];
            if (0 !== n)
                if (n)
                    t.push(n[2]);
                else {
                    var a = new Promise((function (t, a) {
                            n = i[e] = [t, a]
                        }
                    ));
                    t.push(n[2] = a);
                    var r, s = document.createElement("script");
                    s.charset = "utf-8",
                        s.timeout = 120,
                    o.nc && s.setAttribute("nonce", o.nc),
                        s.src = function (e) {
                            return o.p + "static/js/" + ({
                                "pages-Notices-Notices~pages-VRexhibition-VRexhibition~pages-artUp-artUp~pages-artUp-seriesUp~pages-b~2e490dfa": "pages-Notices-Notices~pages-VRexhibition-VRexhibition~pages-artUp-artUp~pages-artUp-seriesUp~pages-b~2e490dfa",
                                "pages-Notices-Notices~pages-account-account~pages-artUp-artUp~pages-artUp-seriesUp~pages-batchDetail~aaeb3cbd": "pages-Notices-Notices~pages-account-account~pages-artUp-artUp~pages-artUp-seriesUp~pages-batchDetail~aaeb3cbd",
                                "pages-Notices-Notices": "pages-Notices-Notices",
                                "pages-batchDetail-sellHistory": "pages-batchDetail-sellHistory",
                                "pages-bazaar-bb": "pages-bazaar-bb",
                                "pages-bazaar-series": "pages-bazaar-series",
                                "pages-blockList-blockList": "pages-blockList-blockList",
                                "pages-board-board": "pages-board-board",
                                "pages-box-box": "pages-box-box",
                                "pages-cashRecords-cashRecords": "pages-cashRecords-cashRecords",
                                "pages-create-views-shareBenefit": "pages-create-views-shareBenefit",
                                "pages-discount-discount": "pages-discount-discount",
                                "pages-explore-explore": "pages-explore-explore",
                                "pages-hotArtDetail-sellHistory": "pages-hotArtDetail-sellHistory",
                                "pages-leaderboard-leaderboard": "pages-leaderboard-leaderboard",
                                "pages-myBatch-myBatch": "pages-myBatch-myBatch",
                                "pages-mySeries-mySeries": "pages-mySeries-mySeries",
                                "pages-point-history": "pages-point-history",
                                "pages-point-point": "pages-point-point",
                                "pages-sellHistory-sellHistory": "pages-sellHistory-sellHistory",
                                "pages-series-series": "pages-series-series",
                                "pages-VRexhibition-VRexhibition~pages-account-account~pages-artUp-artUp~pages-artUp-seriesUp~pages-b~856e9038": "pages-VRexhibition-VRexhibition~pages-account-account~pages-artUp-artUp~pages-artUp-seriesUp~pages-b~856e9038",
                                "pages-account-account~pages-batchDetail-batchDetail~pages-blindDetail-blindDetail~pages-boxDetail-bo~543d47fb": "pages-account-account~pages-batchDetail-batchDetail~pages-blindDetail-blindDetail~pages-boxDetail-bo~543d47fb",
                                "pages-center-uCenter": "pages-center-uCenter",
                                "pages-resellBB-resellBB": "pages-resellBB-resellBB",
                                "pages-resellBB-resellFree": "pages-resellBB-resellFree",
                                "pages-resellDiy-resellDiy": "pages-resellDiy-resellDiy",
                                "pages-resellRand-resellRand": "pages-resellRand-resellRand",
                                "pages-artUp-artUp~pages-create-components-artwork~pages-create-components-blindManager~pages-create-~b45de7ff": "pages-artUp-artUp~pages-create-components-artwork~pages-create-components-blindManager~pages-create-~b45de7ff",
                                "pages-artUp-artUp": "pages-artUp-artUp",
                                "pages-create-components-artwork": "pages-create-components-artwork",
                                "pages-create-components-blindManager": "pages-create-components-blindManager",
                                "pages-create-components-notApproved": "pages-create-components-notApproved",
                                "pages-ownedBatch-ownedBatch": "pages-ownedBatch-ownedBatch",
                                "pages-artUp-seriesUp~pages-blindDetail-blindDetail~pages-create-components-castArt~pages-create-view~e7921878": "pages-artUp-seriesUp~pages-blindDetail-blindDetail~pages-create-components-castArt~pages-create-view~e7921878",
                                "pages-artUp-seriesUp": "pages-artUp-seriesUp",
                                "pages-order-order": "pages-order-order",
                                "pages-ownedBB-ownedBB": "pages-ownedBB-ownedBB",
                                "pages-batchRecords-batchRecords~pages-bbRecords-bbRecords~pages-bbRecords-freeRecords~pages-center-c~5412c401": "pages-batchRecords-batchRecords~pages-bbRecords-bbRecords~pages-bbRecords-freeRecords~pages-center-c~5412c401",
                                "pages-bbRecords-freeRecords": "pages-bbRecords-freeRecords",
                                "pages-hotArt-hotArt": "pages-hotArt-hotArt",
                                "pages-hotBatch-hotBatch": "pages-hotBatch-hotBatch",
                                "pages-VRexhibition-VRexhibition": "pages-VRexhibition-VRexhibition",
                                "pages-blindDetail-blindDetail": "pages-blindDetail-blindDetail",
                                "pages-diy-diy": "pages-diy-diy",
                                "pages-diyDetail-diyDetail": "pages-diyDetail-diyDetail",
                                "pages-randDetail-randDetail": "pages-randDetail-randDetail",
                                "pages-batchDetail-batchDetail~pages-buy-order-buy-order~pages-buySecondOrder-buySecondOrder~pages-ch~fc20b6d8": "pages-batchDetail-batchDetail~pages-buy-order-buy-order~pages-buySecondOrder-buySecondOrder~pages-ch~fc20b6d8",
                                "pages-batchDetail-batchDetail": "pages-batchDetail-batchDetail",
                                "pages-chainCert-chainCert": "pages-chainCert-chainCert",
                                "pages-seriesDetail-seriesDetail": "pages-seriesDetail-seriesDetail",
                                "pages-board-boardDetail~pages-boxDetail-boxDetail~pages-boxDetail-diyDetail~pages-boxDetail-randDeta~4aab3b6d": "pages-board-boardDetail~pages-boxDetail-boxDetail~pages-boxDetail-diyDetail~pages-boxDetail-randDeta~4aab3b6d",
                                "pages-boxDetail-boxDetail": "pages-boxDetail-boxDetail",
                                "pages-boxDetail-diyDetail": "pages-boxDetail-diyDetail",
                                "pages-boxDetail-randDetail": "pages-boxDetail-randDetail",
                                "pages-create-components-artworkUp": "pages-create-components-artworkUp",
                                "pages-create-components-blindBoxUp": "pages-create-components-blindBoxUp",
                                "pages-create-components-castArt": "pages-create-components-castArt",
                                "pages-create-views-copyrightUp": "pages-create-views-copyrightUp",
                                "pages-real-real": "pages-real-real",
                                "pages-buy-order-buy-order": "pages-buy-order-buy-order",
                                "pages-buySecondOrder-buySecondOrder": "pages-buySecondOrder-buySecondOrder",
                                "pages-bindEmail-bindEmail~pages-editPwd-editPwd~pages-login-login~pages-resigter-resigter": "pages-bindEmail-bindEmail~pages-editPwd-editPwd~pages-login-login~pages-resigter-resigter",
                                "pages-resigter-resigter": "pages-resigter-resigter",
                                "pages-help-help": "pages-help-help",
                                "pages-payResult-payResult": "pages-payResult-payResult",
                                "pages-pickCash-pickCash": "pages-pickCash-pickCash",
                                "pages-safe-safe": "pages-safe-safe",
                                "pages-setup-setup": "pages-setup-setup",
                                "pages-wallet-wallet": "pages-wallet-wallet",
                                "pages-order-return": "pages-order-return",
                                "pages-personalData-personalData": "pages-personalData-personalData",
                                "pages-recipeList-recipeList": "pages-recipeList-recipeList",
                                "pages-bindAccount-bindAccount": "pages-bindAccount-bindAccount",
                                "pages-editPwd-editPwd": "pages-editPwd-editPwd",
                                "pages-board-boardDetail": "pages-board-boardDetail",
                                "pages-private-private": "pages-private-private",
                                "pages-resellBB-desc": "pages-resellBB-desc",
                                "pages-resellDiy-desc": "pages-resellDiy-desc",
                                "pages-download-download": "pages-download-download",
                                "pages-inviteData-inviteData": "pages-inviteData-inviteData",
                                "pages-licenseInformation-licenseInformation": "pages-licenseInformation-licenseInformation",
                                "pages-bazaar-bazaar": "pages-bazaar-bazaar",
                                "pages-firstRecord-firstRecord": "pages-firstRecord-firstRecord",
                                "pages-account-account~pages-inviteF-inviteF~pages-lottery-lottery": "pages-account-account~pages-inviteF-inviteF~pages-lottery-lottery",
                                "pages-account-account": "pages-account-account",
                                "pages-center-center": "pages-center-center",
                                "pages-recipe-recipe": "pages-recipe-recipe",
                                "pages-batchRecords-batchRecords": "pages-batchRecords-batchRecords",
                                "pages-bbRecords-bbRecords": "pages-bbRecords-bbRecords",
                                "pages-diyRecords-diyRecords": "pages-diyRecords-diyRecords",
                                "pages-search-search": "pages-search-search",
                                "pages-home-home": "pages-home-home",
                                "pages-inviteF-inviteF": "pages-inviteF-inviteF",
                                "pages-hotArtDetail-hotArtDetail": "pages-hotArtDetail-hotArtDetail",
                                "pages-myDetail-myDetail": "pages-myDetail-myDetail",
                                "pages-lottery-lottery": "pages-lottery-lottery",
                                "pages-bindEmail-bindEmail~pages-editMobile-editMobile": "pages-bindEmail-bindEmail~pages-editMobile-editMobile",
                                "pages-bindEmail-bindEmail": "pages-bindEmail-bindEmail",
                                "pages-interest-interest": "pages-interest-interest",
                                "pages-editMobile-editMobile": "pages-editMobile-editMobile",
                                "pages-login-login": "pages-login-login",
                                "pages-helpDetail-helpDetail": "pages-helpDetail-helpDetail",
                                "pages-exhibition-exhibition": "pages-exhibition-exhibition",
                                "pages-hashWeb-hashWeb": "pages-hashWeb-hashWeb",
                                "pages-login-gt": "pages-login-gt",
                                "pages-webView-webView": "pages-webView-webView",
                                "uni_modules-uni-upgrade-center-app-pages-upgrade-popup": "uni_modules-uni-upgrade-center-app-pages-upgrade-popup"
                            }[e] || e) + "." + {
                                "pages-Notices-Notices~pages-VRexhibition-VRexhibition~pages-artUp-artUp~pages-artUp-seriesUp~pages-b~2e490dfa": "49268858",
                                "pages-Notices-Notices~pages-account-account~pages-artUp-artUp~pages-artUp-seriesUp~pages-batchDetail~aaeb3cbd": "02234c0d",
                                "pages-Notices-Notices": "d612778d",
                                "pages-batchDetail-sellHistory": "da1b9b71",
                                "pages-bazaar-bb": "521fb55a",
                                "pages-bazaar-series": "dcea1442",
                                "pages-blockList-blockList": "1d7c5479",
                                "pages-board-board": "cda2e697",
                                "pages-box-box": "fc278127",
                                "pages-cashRecords-cashRecords": "96e95c53",
                                "pages-create-views-shareBenefit": "9a51a83b",
                                "pages-discount-discount": "ef3f5d66",
                                "pages-explore-explore": "e264179c",
                                "pages-hotArtDetail-sellHistory": "9d2c7a98",
                                "pages-leaderboard-leaderboard": "5245678a",
                                "pages-myBatch-myBatch": "e16c1ab1",
                                "pages-mySeries-mySeries": "bdb0559f",
                                "pages-point-history": "3f72a1f4",
                                "pages-point-point": "eb7a6f81",
                                "pages-sellHistory-sellHistory": "d6cfbad6",
                                "pages-series-series": "03bb95ec",
                                "pages-VRexhibition-VRexhibition~pages-account-account~pages-artUp-artUp~pages-artUp-seriesUp~pages-b~856e9038": "83b35833",
                                "pages-account-account~pages-batchDetail-batchDetail~pages-blindDetail-blindDetail~pages-boxDetail-bo~543d47fb": "c89c6448",
                                "pages-center-uCenter": "d458f3f7",
                                "pages-resellBB-resellBB": "3f55a573",
                                "pages-resellBB-resellFree": "6666d70f",
                                "pages-resellDiy-resellDiy": "3a2e16b5",
                                "pages-resellRand-resellRand": "14dbeb23",
                                "pages-artUp-artUp~pages-create-components-artwork~pages-create-components-blindManager~pages-create-~b45de7ff": "77e6837b",
                                "pages-artUp-artUp": "bfc84fc1",
                                "pages-create-components-artwork": "167effb2",
                                "pages-create-components-blindManager": "c5b32732",
                                "pages-create-components-notApproved": "c7903b2e",
                                "pages-ownedBatch-ownedBatch": "04eded7d",
                                "pages-artUp-seriesUp~pages-blindDetail-blindDetail~pages-create-components-castArt~pages-create-view~e7921878": "cda53cde",
                                "pages-artUp-seriesUp": "fae7c195",
                                "pages-order-order": "4ca8e49c",
                                "pages-ownedBB-ownedBB": "29463dcd",
                                "pages-batchRecords-batchRecords~pages-bbRecords-bbRecords~pages-bbRecords-freeRecords~pages-center-c~5412c401": "4837993b",
                                "pages-bbRecords-freeRecords": "cb118955",
                                "pages-hotArt-hotArt": "3ddb9fab",
                                "pages-hotBatch-hotBatch": "562e27e1",
                                "pages-VRexhibition-VRexhibition": "fedf7869",
                                "pages-blindDetail-blindDetail": "fc3d87a0",
                                "pages-diy-diy": "02dd4ba1",
                                "pages-diyDetail-diyDetail": "21b87fe2",
                                "pages-randDetail-randDetail": "2c112922",
                                "pages-batchDetail-batchDetail~pages-buy-order-buy-order~pages-buySecondOrder-buySecondOrder~pages-ch~fc20b6d8": "53d2dd73",
                                "pages-batchDetail-batchDetail": "858c9209",
                                "pages-chainCert-chainCert": "22861998",
                                "pages-seriesDetail-seriesDetail": "5ecf9b8e",
                                "pages-board-boardDetail~pages-boxDetail-boxDetail~pages-boxDetail-diyDetail~pages-boxDetail-randDeta~4aab3b6d": "c2c1fb09",
                                "pages-boxDetail-boxDetail": "20da75ce",
                                "pages-boxDetail-diyDetail": "0fbba818",
                                "pages-boxDetail-randDetail": "5b2e0bdb",
                                "pages-create-components-artworkUp": "5fabebfe",
                                "pages-create-components-blindBoxUp": "11423277",
                                "pages-create-components-castArt": "dc522255",
                                "pages-create-views-copyrightUp": "0e19aa4d",
                                "pages-real-real": "130f790b",
                                "pages-buy-order-buy-order": "9a6029cb",
                                "pages-buySecondOrder-buySecondOrder": "6e3ee0ca",
                                "pages-bindEmail-bindEmail~pages-editPwd-editPwd~pages-login-login~pages-resigter-resigter": "1182091c",
                                "pages-resigter-resigter": "d9d1e1ba",
                                "pages-help-help": "8c3ba5c9",
                                "pages-payResult-payResult": "0342e292",
                                "pages-pickCash-pickCash": "9d48ef61",
                                "pages-safe-safe": "b4aa9420",
                                "pages-setup-setup": "d2de50c6",
                                "pages-wallet-wallet": "b6478983",
                                "pages-order-return": "5d8acbd1",
                                "pages-personalData-personalData": "71737c91",
                                "pages-recipeList-recipeList": "9dd7eeef",
                                "pages-bindAccount-bindAccount": "f9c35731",
                                "pages-editPwd-editPwd": "ce9b0f19",
                                "pages-board-boardDetail": "844e92f7",
                                "pages-private-private": "210c9149",
                                "pages-resellBB-desc": "ae672b74",
                                "pages-resellDiy-desc": "2dc1fdaa",
                                "pages-download-download": "3e3be9f1",
                                "pages-inviteData-inviteData": "d2ebf517",
                                "pages-licenseInformation-licenseInformation": "6c4235bd",
                                "pages-bazaar-bazaar": "b252a8d3",
                                "pages-firstRecord-firstRecord": "7768e3d3",
                                "pages-account-account~pages-inviteF-inviteF~pages-lottery-lottery": "2769ee8b",
                                "pages-account-account": "6195a302",
                                "pages-center-center": "d787e3fd",
                                "pages-recipe-recipe": "60e8845a",
                                "pages-batchRecords-batchRecords": "32fe6911",
                                "pages-bbRecords-bbRecords": "e7a283f6",
                                "pages-diyRecords-diyRecords": "0d2cd7bf",
                                "pages-search-search": "44facaf9",
                                "pages-home-home": "da8bd3ed",
                                "pages-inviteF-inviteF": "0d4a6efb",
                                "pages-hotArtDetail-hotArtDetail": "d158982b",
                                "pages-myDetail-myDetail": "e5abc2d9",
                                "pages-lottery-lottery": "d9a31298",
                                "pages-bindEmail-bindEmail~pages-editMobile-editMobile": "98859b74",
                                "pages-bindEmail-bindEmail": "51c37ea5",
                                "pages-interest-interest": "5f59ed94",
                                "pages-editMobile-editMobile": "1ee1bd79",
                                "pages-login-login": "3edf6f72",
                                "pages-helpDetail-helpDetail": "e27607f3",
                                "pages-exhibition-exhibition": "d328a87f",
                                "pages-hashWeb-hashWeb": "eae4fcb1",
                                "pages-login-gt": "ec61fbdb",
                                "pages-webView-webView": "b7bf8e85",
                                "uni_modules-uni-upgrade-center-app-pages-upgrade-popup": "9b88c458"
                            }[e] + ".js"
                        }(e);
                    var u = new Error;
                    r = function (t) {
                        s.onerror = s.onload = null,
                            clearTimeout(f);
                        var n = i[e];
                        if (0 !== n) {
                            if (n) {
                                var a = t && ("load" === t.type ? "missing" : t.type)
                                    , r = t && t.target && t.target.src;
                                u.message = "Loading chunk " + e + " failed.\n(" + a + ": " + r + ")",
                                    u.name = "ChunkLoadError",
                                    u.type = a,
                                    u.request = r,
                                    n[1](u)
                            }
                            i[e] = void 0
                        }
                    }
                    ;
                    var f = setTimeout((function () {
                            r({
                                type: "timeout",
                                target: s
                            })
                        }
                    ), 12e4);
                    s.onerror = s.onload = r,
                        document.head.appendChild(s)
                }
            return Promise.all(t)
        }
            ,
            o.m = e,
            o.c = a,
            o.d = function (e, t, n) {
                o.o(e, t) || Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: n
                })
            }
            ,
            o.r = function (e) {
                "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                }),
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    })
            }
            ,
            o.t = function (e, t) {
                if (1 & t && (e = o(e)),
                8 & t)
                    return e;
                if (4 & t && "object" === typeof e && e && e.__esModule)
                    return e;
                var n = Object.create(null);
                if (o.r(n),
                    Object.defineProperty(n, "default", {
                        enumerable: !0,
                        value: e
                    }),
                2 & t && "string" != typeof e)
                    for (var a in e)
                        o.d(n, a, function (t) {
                            return e[t]
                        }
                            .bind(null, a));
                return n
            }
            ,
            o.n = function (e) {
                var t = e && e.__esModule ? function () {
                            return e["default"]
                        }
                        : function () {
                            return e
                        }
                ;
                return o.d(t, "a", t),
                    t
            }
            ,
            o.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }
            ,
            o.p = "/h5/",
            o.oe = function (e) {
                throw console.error(e),
                    e
            }
        ;
        var s = window["webpackJsonp"] = window["webpackJsonp"] || []
            , u = s.push.bind(s);
        s.push = t,
            s = s.slice();
        for (var f = 0; f < s.length; f++)
            t(s[f]);
        var c = u;
        r.push([0, "chunk-vendors"]),
            n()
    }
)(dict);

function decrypt(response) {
    var data = {
        "data": response,
        "statusCode": 200,
        "header": {
            "access-control-allow-headers": "Content-Type, AccessToken, X-CSRF-Token, Authorization, Token, Language,loginFrom",
            "access-control-allow-origin": "*",
            "content-length": "102",
            "content-type": "application/json; charset=utf-8"
        },
        "errMsg": "request:ok"
    }
    var ap = megumin("4ea4").default;
    var e = megumin("b639").Buffer, c = ap(megumin("8e31"))
    var f = megumin("8559"), p = megumin("c3bf"), l = e.from(c.default("miniGuangTou"))
    var n = data.data
        , a = Uint8Array.from(f.base64ToBuffer(n))
        , i = a.slice(0, 12);
    a = a.slice(12, a.length);
    var r = p.AES_GCM.decrypt(a, l, i)
    return JSON.parse(p.bytes_to_string(r, "utf-8"));
}

function main(phone, password) {
    var a = megumin("4ea4").default;
    var r = a(megumin("2909")), c = a(megumin("8e31"))
    var p = megumin("c3bf"), f = megumin("8559")
    var e = megumin("b639").Buffer
    var D = e.from(JSON.stringify({
            "phone": phone,
            "password": password,
            "loginType": "pwd"
        })), g = new Uint8Array(12), m = Array.from(g),
        l = (new Uint8Array, e.from(c.default("miniGuangTou")))
    var y = p.AES_GCM.encrypt(D, l, g)
    return f.base64Encode(m.concat.apply(m, r.default(y)))
}


// 运行入口
if (module.parent === null) {
    handler(main,'')
}
function handler(func, arg_list) {
	if (!(typeof func === 'string' || Array.isArray(arg_list))) {
		if (typeof func !== 'string' && !Array.isArray(arg_list)) {
			throw new Error('func is not a string and arg_list in not a Array')
		}
		if (typeof func !== 'string') {
			throw new Error('func is not a string')
		} else {
			throw new Error('arg_list in not a Array')
		}
	}
	// 主函数调用区   func即为主函数  arg_list为参数列表
	let command = ''
	for (let i = 0; i < arg_list.length; i++) {
		if (i === arg_list.length - 1) {
			command += JSON.stringify(arg_list[i])
		} else {
			command += JSON.stringify(arg_list[i]) + ','
		}
	}
	console.log('(⑅˃◡˂⑅)运行结果: ', eval(`${func}(` + command + ")"));
	// 后续写入功能
	write_new_dicts()
}
function dispose_dict() {
    let code = ''
    anya.forEach((key) => {
        code += JSON.stringify(key) + ':' + dict[key].toString() + ',\n'
    })
    return code
}

function write_new_dicts() {
    let before = Object.keys(dict).length;
    let later = Object.keys(new_dict).length
    if (before - later !== 0) {
        console.log('◕‿◕没有可以剔除的哦')
    } else {
        let code = dispose_dict()
        let codes = 'var dict = {\n' + code + '}\n'
        console.log('₍ᐢ..ᐢ₎♡处理后方法个数: ', later)
        console.log('૮꒰ ˶• ༝ •˶꒱ა处理前方法个数: ', before)
        console.log(`(˚ ˃̣̣̥᷄⌓˂̣̣̥᷅ )共计剔除: ${before - later} 个无用方法`)
        fs.writeFile('./all_dicts.js', codes, {encoding: "utf-8"}, (err) => {
            if (err) {
                console.error('ಠ_ರೃ',err);
                return;
            }
            console.log('(◍˃̶ᗜ˂̶◍)✩已成功写入all_dicts.js文件');
        })
    }
}
