var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Shapes = /** @class */ (function () {
    function Shapes(shapeColor, shapeFilled) {
        this.shapeColor = shapeColor;
        this.shapeFilled = shapeFilled;
    }
    Object.defineProperty(Shapes.prototype, "getColor", {
        get: function () {
            return "The Color of the shape is " + this.shapeColor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Shapes.prototype, "setColor", {
        set: function (shapeColor) {
            this.shapeColor = shapeColor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Shapes.prototype, "getFilled", {
        get: function () {
            return this.getFilled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Shapes.prototype, "setFilled", {
        set: function (shapeFilled) {
            this.shapeFilled = shapeFilled;
        },
        enumerable: false,
        configurable: true
    });
    Shapes.prototype.getAll = function () {
        return "The Color is " + this.shapeColor + " And " + this.shapeFilled + " for Filling.";
    };
    return Shapes;
}());
var Circles = /** @class */ (function (_super) {
    __extends(Circles, _super);
    function Circles(shapeColor, shapeFilled, cirRadius) {
        var _this = _super.call(this, shapeColor, shapeFilled) || this;
        _this.cirRadius = cirRadius;
        return _this;
    }
    Object.defineProperty(Circles.prototype, "getRadius", {
        get: function () {
            return this.cirRadius;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Circles.prototype, "setRadius", {
        set: function (cirRadius) {
            this.cirRadius = cirRadius;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Circles.prototype, "getAreaCir", {
        get: function () {
            var cirArea = 3.14 * this.cirRadius * this.cirRadius;
            return cirArea;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Circles.prototype, "getPeriCir", {
        get: function () {
            var cirPeri = 2 * 3.14 * this.cirRadius;
            return cirPeri;
        },
        enumerable: false,
        configurable: true
    });
    Circles.prototype.getAllCir = function () {
        return "The Circle Color is " + this.shapeColor + " , " + this.shapeFilled + " for Filling , And the Radius is "
            + this.cirRadius;
    };
    return Circles;
}(Shapes));
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(shapeColor, shapeFilled, recWidth, recLength) {
        var _this = _super.call(this, shapeColor, shapeFilled) || this;
        _this.recLength = recLength;
        _this.recWidth = recWidth;
        return _this;
    }
    Object.defineProperty(Rectangle.prototype, "getWidth", {
        get: function () {
            return this.recWidth;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "setWidth", {
        set: function (recWidth) {
            this.recWidth = recWidth;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "getLength", {
        get: function () {
            return this.recLength;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "setLength", {
        set: function (recLength) {
            this.recWidth = recLength;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "getAreaRec", {
        get: function () {
            var recArea = this.recLength * this.recWidth;
            return recArea;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "getPeriRec", {
        get: function () {
            var recPeri = 2 * (this.recLength + this.recWidth);
            return recPeri;
        },
        enumerable: false,
        configurable: true
    });
    Rectangle.prototype.getAllRec = function () {
        return "The Rectangle Color is " + this.shapeColor + " , " + this.shapeFilled + " for Filling , It's width is " + this.recWidth + " And it's length is "
            + this.recLength;
    };
    return Rectangle;
}(Shapes));
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(shapeColor, shapeFilled, recWidth, recLength, sqrSides) {
        var _this = _super.call(this, shapeColor, shapeFilled, recWidth, recLength) || this;
        _this.sqrSides = sqrSides;
        return _this;
    }
    Object.defineProperty(Square.prototype, "getSides", {
        get: function () {
            return this.sqrSides;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Square.prototype, "setSides", {
        set: function (sqrSides) {
            this.sqrSides = sqrSides;
        },
        enumerable: false,
        configurable: true
    });
    Square.prototype.setWidthSqr = function (sqrSides) {
        this.recWidth = this.recWidth;
    };
    Square.prototype.setLengthSqr = function (sqrSides) {
        this.recLength = this.recLength;
    };
    Square.prototype.getAllSqr = function () {
        return "The Square Color is " + this.shapeColor + " , " + this.shapeFilled + " for Filling , It's width is " + this.recWidth + " , it's length is "
            + this.recLength + " ,And it's Sides are " + this.sqrSides;
    };
    return Square;
}(Rectangle));
