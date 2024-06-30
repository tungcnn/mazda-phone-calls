function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/view/call-in-use/call-in-use.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/view/call-in-use/call-in-use.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewCallInUseCallInUseComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1>Call In Use</h1>\r\n\r\n<div class=\"main-content\">\r\n\r\n    <div>\r\n        <h2>Customer</h2>\r\n        <form [formGroup]=\"customerForm\" (ngSubmit)=\"update()\">\r\n            <input hidden formControlName=\"id\">\r\n            <table>\r\n                <tr>\r\n                    <td>\r\n                        <mat-form-field appearance=\"outline\">\r\n                            <mat-label>Title</mat-label>\r\n                            <input matInput id=\"title\" formControlName=\"title\" required>\r\n                            <mat-error *ngIf=\"title.invalid\">Title is required</mat-error>\r\n                        </mat-form-field>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>\r\n                        <mat-form-field appearance=\"outline\">\r\n                            <mat-label>First name</mat-label>\r\n                            <input matInput id=\"firstName\" formControlName=\"firstName\" required>\r\n                            <mat-error *ngIf=\"firstName.invalid\">First name is required</mat-error>\r\n                        </mat-form-field>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>\r\n                        <mat-form-field appearance=\"outline\">\r\n                            <mat-label>Surname</mat-label>\r\n                            <input matInput id=\"surName\" formControlName=\"surName\" required>\r\n                            <mat-error *ngIf=\"surName.invalid\">Surname is required</mat-error>\r\n                        </mat-form-field>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>\r\n                        <mat-form-field appearance=\"outline\">\r\n                            <mat-label>Mobile</mat-label>\r\n                            <input type=\"tel\" id=\"mobile\" matInput formControlName=\"mobile\" required>\r\n                            <mat-error *ngIf=\"mobile.invalid\">Mobile is required</mat-error>\r\n                        </mat-form-field>\r\n                    </td>\r\n                    <td>\r\n                        <a class=\"callButton\" mat-raised-button color=\"primary\" href=\"tel://{{customer.mobile}}\">\r\n                            <mat-icon aria-hidden=\"false\">call</mat-icon>\r\n                            Call Mobile Phone\r\n                        </a>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>\r\n                        <mat-form-field appearance=\"outline\">\r\n                            <mat-label>Home</mat-label>\r\n                            <input type=\"tel\" id=\"home\" matInput formControlName=\"home\" required>\r\n                            <mat-error *ngIf=\"home.invalid\">Home is required</mat-error>\r\n                        </mat-form-field>\r\n                    </td>\r\n                    <td>\r\n                        <a class=\"callButton\" mat-raised-button color=\"primary\" href=\"tel://{{customer.home}}\">\r\n                            <mat-icon aria-hidden=\"false\">call</mat-icon>\r\n                            Call Home Phone\r\n                        </a>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td></td>\r\n                    <td>\r\n                        <button class=\"updateButton\" mat-raised-button color=\"accent\" [disabled]=\"!customerForm.valid\">\r\n                            Update\r\n                        </button>\r\n                        <a *ngIf=\"!updated\" class=\"resetButton\" mat-raised-button color=\"accent\" (click)=\"reset()\">\r\n                            Reset\r\n                        </a>\r\n                        <a *ngIf=\"updated\" disabled class=\"resetButton\" mat-raised-button color=\"accent\"\r\n                            (click)=\"reset()\">\r\n                            Reset\r\n                        </a>\r\n                    </td>\r\n                </tr>\r\n            </table>\r\n        </form>\r\n\r\n        <button class=\"completeButton\" mat-raised-button color=\"primary\" (click)=\"completeCall()\" [routerLink]=\"['']\">\r\n            Call Completed\r\n        </button>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/view/call-list/call-list.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/view/call-list/call-list.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewCallListCallListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"main-content\">\r\n    <h1>Call List</h1>\r\n\r\n    <form #callSearchForm=\"ngForm\">\r\n        <div class=\"searchBar\">\r\n            <div class=\"searchBarCol\">\r\n                <h4>Call Type</h4>\r\n                <mat-form-field appearance=\"fill\">\r\n                    <mat-label>Select a Type</mat-label>\r\n                    <mat-select [(ngModel)]=\"callSearchForm.type\" name=\"type\">\r\n                        <mat-option *ngFor=\"let type of types\" [value]=\"type\">\r\n                            {{type}}\r\n                        </mat-option>\r\n                    </mat-select>\r\n                </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"searchBarCol\">\r\n                <h4>Date sold</h4>\r\n                <mat-form-field appearance=\"fill\">\r\n                    <mat-label>Choose a date</mat-label>\r\n                    <input matInput [matDatepicker]=\"startDate\" [(ngModel)]=\"callSearchForm.startDate\" name=\"startDate\" [max]=\"callSearchForm.endDate\">\r\n                    <mat-datepicker-toggle matSuffix [for]=\"startDate\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #startDate></mat-datepicker>\r\n                </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"searchBarCol\">\r\n                <h4>To</h4>\r\n                <mat-form-field appearance=\"fill\">\r\n                    <mat-label>Choose a date</mat-label>\r\n                    <input matInput [matDatepicker]=\"endDate\" [(ngModel)]=\"callSearchForm.endDate\" name=\"endDate\" [min]=\"callSearchForm.startDate\">\r\n                    <mat-datepicker-toggle matSuffix [for]=\"endDate\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #endDate></mat-datepicker>\r\n                </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"searchBarCol\">\r\n                <h4>Status</h4>\r\n                <mat-form-field appearance=\"fill\">\r\n                    <mat-label>Select a Status</mat-label>\r\n                    <mat-select [(ngModel)]=\"callSearchForm.callStatus\" name=\"callStatus\">\r\n                        <mat-option *ngFor=\"let callStatus of statuses\" [value]=\"callStatus\">\r\n                            {{callStatus}}\r\n                        </mat-option>\r\n                    </mat-select>\r\n                </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"searchButtonCol\">\r\n                <button class=\"searchButton\" mat-raised-button color=\"primary\" (click)=\"searchCall(callSearchForm)\">\r\n                    <mat-icon aria-hidden=\"false\">search</mat-icon>\r\n                    Search\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </form>\r\n\r\n    <div class=\"tableDiv\">\r\n        <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\r\n            <ng-container matColumnDef=\"name\">\r\n                <th mat-header-cell *matHeaderCellDef> Name </th>\r\n                <td mat-cell *matCellDef=\"let call\"> {{call.name}} </td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"date\">\r\n                <th mat-header-cell *matHeaderCellDef> Date Sold </th>\r\n                <td mat-cell *matCellDef=\"let call\"> {{call.date | date}} </td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"type\">\r\n                <th mat-header-cell *matHeaderCellDef> Type </th>\r\n                <td mat-cell *matCellDef=\"let call\"> {{call.type}} </td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"status\">\r\n                <th mat-header-cell *matHeaderCellDef> Status </th>\r\n                <td mat-cell *matCellDef=\"let call\"> {{call.callStatus}} </td>\r\n            </ng-container>\r\n\r\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n            <tr mat-row (click)=\"setSelectedCall(row)\" *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n        </table>\r\n    </div>\r\n\r\n    <p>{{currentCall ? currentCall.name : 'Select a call'}}</p>\r\n    <br>\r\n    <br>\r\n    <br>\r\n    <button *ngIf=\"currentCall\" [routerLink]=\"['/calls', currentCall.customerId]\" class=\"makeCallButton\" mat-raised-button color=\"primary\" >\r\n        <mat-icon aria-hidden=\"false\">call</mat-icon>\r\n        Make call\r\n    </button>\r\n    <button *ngIf=\"!currentCall\" disabled class=\"makeCallButton\" mat-raised-button color=\"primary\" >\r\n        <mat-icon aria-hidden=\"false\">call</mat-icon>\r\n        Make call\r\n    </button>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _view_call_in_use_call_in_use_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./view/call-in-use/call-in-use.component */
    "./src/app/view/call-in-use/call-in-use.component.ts");
    /* harmony import */


    var _view_call_list_call_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./view/call-list/call-list.component */
    "./src/app/view/call-list/call-list.component.ts");

    var routes = [{
      path: '',
      component: _view_call_list_call_list_component__WEBPACK_IMPORTED_MODULE_4__["CallListComponent"]
    }, {
      path: 'calls/:id',
      component: _view_call_in_use_call_in_use_component__WEBPACK_IMPORTED_MODULE_3__["CallInUseComponent"]
    }];

    var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    });

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = /*#__PURE__*/_createClass(function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'mazda-phone-app';
    });

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _view_call_list_call_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./view/call-list/call-list.component */
    "./src/app/view/call-list/call-list.component.ts");
    /* harmony import */


    var _view_call_in_use_call_in_use_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./view/call-in-use/call-in-use.component */
    "./src/app/view/call-in-use/call-in-use.component.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var AppModule = /*#__PURE__*/_createClass(function AppModule() {
      _classCallCheck(this, AppModule);
    });

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _view_call_list_call_list_component__WEBPACK_IMPORTED_MODULE_6__["CallListComponent"], _view_call_in_use_call_in_use_component__WEBPACK_IMPORTED_MODULE_7__["CallInUseComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatNativeDateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/data/data.ts":
  /*!******************************!*\
    !*** ./src/app/data/data.ts ***!
    \******************************/

  /*! exports provided: callsData, customersData */

  /***/
  function srcAppDataDataTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "callsData", function () {
      return callsData;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "customersData", function () {
      return customersData;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var callsData = [{
      customerId: 1,
      name: "Mr Eren Yaeger",
      date: new Date("01/21/2022"),
      callStatus: "Completed",
      type: "Service"
    }, {
      customerId: 2,
      name: "Mrs Mikasa Ackerman",
      date: new Date("04/29/2021"),
      callStatus: "New",
      type: "Service"
    }, {
      customerId: 3,
      name: "Mr Levi Ackerman",
      date: new Date("06/13/2021"),
      callStatus: "New",
      type: "Sales"
    }, {
      customerId: 4,
      name: "Miss Historia Reiss",
      date: new Date("09/07/2021"),
      callStatus: "In use",
      type: "Sales"
    }, {
      customerId: 5,
      name: "Miss Ymir Fritz",
      date: new Date("03/02/2022"),
      callStatus: "In use",
      type: "Service"
    }];
    var customersData = [{
      id: 1,
      title: "Mr",
      firstName: "Eren",
      surName: "Yaeger",
      mobile: "0412345678",
      home: "0387654321"
    }, {
      id: 2,
      title: "Mrs",
      firstName: "Mikasa",
      surName: "Ackerman",
      mobile: "0412345678",
      home: "0387654321"
    }, {
      id: 3,
      title: "Mr",
      firstName: "Levi",
      surName: "Ackerman",
      mobile: "0412345678",
      home: "0387654321"
    }, {
      id: 4,
      title: "Miss",
      firstName: "Historia",
      surName: "Reiss",
      mobile: "0412345678",
      home: "0387654321"
    }, {
      id: 5,
      title: "Miss",
      firstName: "Ymir",
      surName: "Fritz",
      mobile: "0412345678",
      home: "0387654321"
    }];
    /***/
  },

  /***/
  "./src/app/view/call-in-use/call-in-use.component.css":
  /*!************************************************************!*\
    !*** ./src/app/view/call-in-use/call-in-use.component.css ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppViewCallInUseCallInUseComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".main-content {\r\n    width: 700px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\nh1 {\r\n    text-align: center;\r\n}\r\n\r\ntable {\r\n    width: 100%;\r\n    border: 1px black solid;\r\n    padding: 30px;\r\n}\r\n\r\n.mat-form-field {\r\n    width: 100%;\r\n}\r\n\r\n.callButton {\r\n    width: 174px;\r\n    left: 80px;\r\n    bottom: 10px;\r\n}\r\n\r\n.updateButton {\r\n    left: 80px;\r\n}\r\n\r\n.resetButton {\r\n    left: 110px;\r\n}\r\n\r\n.completeButton {\r\n    margin-top: 30px;\r\n    float: right;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy9jYWxsLWluLXVzZS9jYWxsLWluLXVzZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0lBQ1osVUFBVTtJQUNWLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvY2FsbC1pbi11c2UvY2FsbC1pbi11c2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWNvbnRlbnQge1xyXG4gICAgd2lkdGg6IDcwMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbmgxIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxudGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IDFweCBibGFjayBzb2xpZDtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmNhbGxCdXR0b24ge1xyXG4gICAgd2lkdGg6IDE3NHB4O1xyXG4gICAgbGVmdDogODBweDtcclxuICAgIGJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLnVwZGF0ZUJ1dHRvbiB7XHJcbiAgICBsZWZ0OiA4MHB4O1xyXG59XHJcblxyXG4ucmVzZXRCdXR0b24ge1xyXG4gICAgbGVmdDogMTEwcHg7XHJcbn1cclxuXHJcbi5jb21wbGV0ZUJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/view/call-in-use/call-in-use.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/view/call-in-use/call-in-use.component.ts ***!
    \***********************************************************/

  /*! exports provided: CallInUseComponent */

  /***/
  function srcAppViewCallInUseCallInUseComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CallInUseComponent", function () {
      return CallInUseComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_data_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/data/data */
    "./src/app/data/data.ts");

    var CallInUseComponent = /*#__PURE__*/function () {
      function CallInUseComponent(route) {
        _classCallCheck(this, CallInUseComponent);

        this.route = route;
        this.customerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
          id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
          title: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
          firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
          surName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
          mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
          home: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('')
        });
        this.updated = false;
      }

      _createClass(CallInUseComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.customers = src_app_data_data__WEBPACK_IMPORTED_MODULE_4__["customersData"];
          this.route.paramMap.subscribe(function (params) {
            var id = params.get("id");
            _this.customer = _this.customers.find(function (customer) {
              return customer.id == parseInt(id);
            });
          });
          this.customerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.customer.id),
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.customer.title, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.customer.firstName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            surName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.customer.surName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.customer.mobile, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            home: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.customer.home, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
          });
        }
      }, {
        key: "title",
        get: function get() {
          return this.customerForm.get('title');
        }
      }, {
        key: "firstName",
        get: function get() {
          return this.customerForm.get('firstName');
        }
      }, {
        key: "surName",
        get: function get() {
          return this.customerForm.get('surName');
        }
      }, {
        key: "mobile",
        get: function get() {
          return this.customerForm.get('mobile');
        }
      }, {
        key: "home",
        get: function get() {
          return this.customerForm.get('home');
        }
      }, {
        key: "reset",
        value: function reset() {
          if (!this.updated) {
            this.customerForm.setValue({
              id: this.customer.id,
              title: this.customer.title,
              firstName: this.customer.firstName,
              surName: this.customer.surName,
              mobile: this.customer.mobile,
              home: this.customer.home
            });
          }
        }
      }, {
        key: "update",
        value: function update() {
          var newCustomer = this.customerForm.value;
          var oldCustomer = src_app_data_data__WEBPACK_IMPORTED_MODULE_4__["customersData"].find(function (customer) {
            return customer.id == newCustomer.id;
          });
          var oldCall = src_app_data_data__WEBPACK_IMPORTED_MODULE_4__["callsData"].find(function (call) {
            return call.customerId == newCustomer.id;
          });

          if (oldCustomer && oldCall) {
            oldCustomer.title = newCustomer.title;
            oldCustomer.firstName = newCustomer.firstName;
            oldCustomer.surName = newCustomer.surName;
            oldCustomer.mobile = newCustomer.mobile;
            oldCustomer.home = newCustomer.home;
            oldCall.name = "".concat(newCustomer.title, " ").concat(newCustomer.firstName, " ").concat(newCustomer.surName);
            this.updated = true;
          }
        }
      }, {
        key: "completeCall",
        value: function completeCall() {
          var _this2 = this;

          var oldCall = src_app_data_data__WEBPACK_IMPORTED_MODULE_4__["callsData"].find(function (call) {
            return call.customerId == _this2.customer.id;
          });
          if (oldCall) oldCall.callStatus = "Completed";
        }
      }]);

      return CallInUseComponent;
    }();

    CallInUseComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    CallInUseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-call-in-use',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./call-in-use.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/view/call-in-use/call-in-use.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./call-in-use.component.css */
      "./src/app/view/call-in-use/call-in-use.component.css"))["default"]]
    })], CallInUseComponent);
    /***/
  },

  /***/
  "./src/app/view/call-list/call-list.component.css":
  /*!********************************************************!*\
    !*** ./src/app/view/call-list/call-list.component.css ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppViewCallListCallListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".main-content {\r\n    width: 1200px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\nh1 {\r\n    text-align: center;\r\n}\r\n\r\n.searchBar {\r\n    display: flex;\r\n    \r\n    margin-bottom: 50px;\r\n}\r\n\r\n.searchBarCol {\r\n    margin-right: 30px;\r\n}\r\n\r\n.searchButton {\r\n    height: 60px;\r\n    font-size: 20px;\r\n    float: right;\r\n}\r\n\r\n.searchButtonCol{\r\n    padding-top: 60px;\r\n    width: 100%;\r\n}\r\n\r\ntable {\r\n    width: 100%;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.mat-header-cell {\r\n    font-size: large;\r\n    background-color: #673ab7;\r\n    color: #ffffff;\r\n}\r\n\r\n.mat-row:hover .mat-cell {\r\n    background-color: #673ab7;\r\n    color: #ffffff;\r\n}\r\n\r\n.makeCallButton, p{\r\n    float: right;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy9jYWxsLWxpc3QvY2FsbC1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7O0lBRWIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC92aWV3L2NhbGwtbGlzdC9jYWxsLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWNvbnRlbnQge1xyXG4gICAgd2lkdGg6IDEyMDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zZWFyY2hCYXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIFxyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxufVxyXG5cclxuLnNlYXJjaEJhckNvbCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbi5zZWFyY2hCdXR0b24ge1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4uc2VhcmNoQnV0dG9uQ29se1xyXG4gICAgcGFkZGluZy10b3A6IDYwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4gICBcclxudGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4ubWF0LWhlYWRlci1jZWxsIHtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjczYWI3O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5tYXQtcm93OmhvdmVyIC5tYXQtY2VsbCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjczYWI3O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5tYWtlQ2FsbEJ1dHRvbiwgcHtcclxuICAgIGZsb2F0OiByaWdodDtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/view/call-list/call-list.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/view/call-list/call-list.component.ts ***!
    \*******************************************************/

  /*! exports provided: CallListComponent */

  /***/
  function srcAppViewCallListCallListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CallListComponent", function () {
      return CallListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_data_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/data/data */
    "./src/app/data/data.ts");

    var CallListComponent = /*#__PURE__*/function () {
      function CallListComponent() {
        _classCallCheck(this, CallListComponent);

        this.displayedColumns = ['name', 'date', 'type', 'status'];
      }

      _createClass(CallListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.calls = src_app_data_data__WEBPACK_IMPORTED_MODULE_2__["callsData"];
          this.searchResults = this.calls;
          this.dataSource = this.searchResults;
          this.statuses = ["New", "Completed", "In use"];
          this.types = ["Sales", "Service"];
          console.log("Again");
        }
      }, {
        key: "searchCall",
        value: function searchCall(callParam) {
          var searchParam = callParam.value;
          this.searchResults = this.calls.filter(function (call) {
            var hasType = call.type == searchParam.type || !searchParam.type;
            var hasStatus = call.callStatus == searchParam.callStatus || !searchParam.callStatus;
            var withinDateRange = (call.date >= searchParam.startDate || !searchParam.startDate) && (call.date <= searchParam.endDate || !searchParam.endDate);
            if (hasType && hasStatus && withinDateRange) return call;
          });
          this.dataSource = this.searchResults;
          this.currentCall = undefined;
        }
      }, {
        key: "setSelectedCall",
        value: function setSelectedCall(call) {
          this.currentCall = call;
        }
      }]);

      return CallListComponent;
    }();

    CallListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-call-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./call-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/view/call-list/call-list.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./call-list.component.css */
      "./src/app/view/call-list/call-list.component.css"))["default"]]
    })], CallListComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\sontu\OneDrive\Documents\mazda-phone-calls\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map