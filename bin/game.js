var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define("node_modules/decentraland-ecs-utils/transform/component/itransformcomponent", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("node_modules/decentraland-ecs-utils/transform/math/interpolation", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Interpolate = exports.InterpolationType = void 0;
    var InterpolationType;
    (function (InterpolationType) {
        InterpolationType[InterpolationType["LINEAR"] = 0] = "LINEAR";
        InterpolationType[InterpolationType["EASEINQUAD"] = 1] = "EASEINQUAD";
        InterpolationType[InterpolationType["EASEOUTQUAD"] = 2] = "EASEOUTQUAD";
        InterpolationType[InterpolationType["EASEQUAD"] = 3] = "EASEQUAD";
    })(InterpolationType = exports.InterpolationType || (exports.InterpolationType = {}));
    function Interpolate(type, t) {
        switch (type) {
            case InterpolationType.LINEAR:
                return InterpolateLinear(t);
            case InterpolationType.EASEINQUAD:
                return InterpolateEaseInQuad(t);
            case InterpolationType.EASEOUTQUAD:
                return InterpolateEaseOutQuad(t);
            case InterpolationType.EASEQUAD:
                return InterpolateEaseQuad(t);
            default:
                return InterpolateLinear(t);
        }
    }
    exports.Interpolate = Interpolate;
    function InterpolateLinear(t) {
        return t;
    }
    function InterpolateEaseInQuad(t) {
        return t * t;
    }
    function InterpolateEaseOutQuad(t) {
        return t * (2 - t);
    }
    function InterpolateEaseQuad(t) {
        return (t * t) / (2.0 * (t * t - t) + 1.0);
    }
});
define("node_modules/decentraland-ecs-utils/transform/component/rotate", ["require", "exports", "node_modules/decentraland-ecs-utils/transform/system/transfromSystem", "node_modules/decentraland-ecs-utils/transform/math/interpolation"], function (require, exports, transfromSystem_1, interpolation_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RotateTransformComponent = void 0;
    /**
     * Component to rotate entity from one rotation (start) to another (end) in an amount of time
     */
    var RotateTransformComponent = /** @class */ (function () {
        /**
         * Create a RotateTransformComponent instance to add as a component to a Entity
         * @param {ReadOnlyQuaternion} start starting rotation
         * @param {ReadOnlyQuaternion} end ending rotation
         * @param {number} duration duration (in seconds) of start to end rotation
         * @param {() => void} onFinishCallback called when rotation ends
         * @param {InterpolationType} interpolationType type of interpolation to be used (default: LINEAR)
         */
        function RotateTransformComponent(start, end, duration, onFinishCallback, interpolationType) {
            if (interpolationType === void 0) { interpolationType = interpolation_1.InterpolationType.LINEAR; }
            this.start = start;
            this.end = end;
            this.normalizedTime = 0;
            this.lerpTime = 0;
            this.onFinishCallback = onFinishCallback;
            this.interpolationType = interpolationType;
            if (duration != 0) {
                this.speed = 1 / duration;
            }
            else {
                this.speed = 0;
                this.normalizedTime = 1;
                this.lerpTime = 1;
            }
            transfromSystem_1.TransformSystem.createAndAddToEngine();
        }
        RotateTransformComponent.prototype.update = function (dt) {
            this.normalizedTime = Scalar.Clamp(this.normalizedTime + dt * this.speed, 0, 1);
            this.lerpTime = interpolation_1.Interpolate(this.interpolationType, this.normalizedTime);
        };
        RotateTransformComponent.prototype.hasFinished = function () {
            return this.normalizedTime >= 1;
        };
        RotateTransformComponent.prototype.assignValueToTransform = function (transform) {
            transform.rotation = Quaternion.Slerp(this.start, this.end, this.lerpTime);
        };
        RotateTransformComponent = __decorate([
            Component('rotateTransformComponent')
        ], RotateTransformComponent);
        return RotateTransformComponent;
    }());
    exports.RotateTransformComponent = RotateTransformComponent;
});
define("node_modules/decentraland-ecs-utils/transform/component/scale", ["require", "exports", "node_modules/decentraland-ecs-utils/transform/system/transfromSystem", "node_modules/decentraland-ecs-utils/transform/math/interpolation"], function (require, exports, transfromSystem_2, interpolation_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ScaleTransformComponent = void 0;
    /**
     * Component to scale entity from one value (start) to another (end) in an amount of time
     */
    var ScaleTransformComponent = /** @class */ (function () {
        /**
         * Create a ScaleTransformComponent instance to add as a component to a Entity
         * @param {ReadOnlyVector3} start starting scale
         * @param {ReadOnlyVector3} end ending scale
         * @param {number} duration duration (in seconds) of start to end scaling
         * @param {() => void} onFinishCallback called when scaling ends
         * @param {InterpolationType} interpolationType type of interpolation to be used (default: LINEAR)
         */
        function ScaleTransformComponent(start, end, duration, onFinishCallback, interpolationType) {
            if (interpolationType === void 0) { interpolationType = interpolation_2.InterpolationType.LINEAR; }
            this.start = start;
            this.end = end;
            this.normalizedTime = 0;
            this.lerpTime = 0;
            this.onFinishCallback = onFinishCallback;
            this.interpolationType = interpolationType;
            if (duration != 0) {
                this.speed = 1 / duration;
            }
            else {
                this.speed = 0;
                this.normalizedTime = 1;
                this.lerpTime = 1;
            }
            transfromSystem_2.TransformSystem.createAndAddToEngine();
        }
        ScaleTransformComponent.prototype.update = function (dt) {
            this.normalizedTime = Scalar.Clamp(this.normalizedTime + dt * this.speed, 0, 1);
            this.lerpTime = interpolation_2.Interpolate(this.interpolationType, this.normalizedTime);
        };
        ScaleTransformComponent.prototype.hasFinished = function () {
            return this.normalizedTime >= 1;
        };
        ScaleTransformComponent.prototype.assignValueToTransform = function (transform) {
            transform.scale = Vector3.Lerp(this.start, this.end, this.lerpTime);
        };
        ScaleTransformComponent = __decorate([
            Component('scaleTransformComponent')
        ], ScaleTransformComponent);
        return ScaleTransformComponent;
    }());
    exports.ScaleTransformComponent = ScaleTransformComponent;
});
define("node_modules/decentraland-ecs-utils/transform/component/followpath", ["require", "exports", "node_modules/decentraland-ecs-utils/transform/system/transfromSystem"], function (require, exports, transfromSystem_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.FollowCurvedPathComponent = exports.FollowPathComponent = void 0;
    /**
     * Component to move an entity down a fixed path in a given amount of time
     */
    var FollowPathComponent = /** @class */ (function () {
        /**
         * Create a FollowPathComponent instance to add as a component to a Entity
         * @param {Vector3[]} points array of points for the path
         * @param {number} duration duration of the movement through the path
         * @param {() => void} onFinishCallback called when movement ends
         * @param {(currentPoint: Vector3, nextPoint: Vector3) => void} onPointReachedCallback called everytime an entity reaches a point of the path
         */
        function FollowPathComponent(points, duration, onFinishCallback, onPointReachedCallback) {
            this.speed = [];
            this.normalizedTime = 0;
            this.currentIndex = 0;
            this.points = points;
            this.onFinishCallback = onFinishCallback;
            this.onPointReachedCallback = onPointReachedCallback;
            if (points.length < 2) {
                throw new Error('At least 2 points are needed for FollowPathComponent.');
            }
            if (duration > 0) {
                var totalDist = 0;
                var pointsDist = [];
                for (var i = 0; i < points.length - 1; i++) {
                    var sqDist = Vector3.Distance(points[i], points[i + 1]);
                    totalDist += sqDist;
                    pointsDist.push(sqDist);
                }
                for (var i = 0; i < pointsDist.length; i++) {
                    this.speed.push(1 / ((pointsDist[i] / totalDist) * duration));
                }
            }
            else {
                this.normalizedTime = 1;
                this.currentIndex = points.length - 2;
            }
            transfromSystem_3.TransformSystem.createAndAddToEngine();
        }
        FollowPathComponent.prototype.update = function (dt) {
            this.normalizedTime = Scalar.Clamp(this.normalizedTime + dt * this.speed[this.currentIndex], 0, 1);
            if (this.normalizedTime >= 1 &&
                this.currentIndex < this.points.length - 2) {
                this.currentIndex++;
                this.normalizedTime = 0;
                if (this.onPointReachedCallback &&
                    this.currentIndex < this.points.length - 1)
                    this.onPointReachedCallback(this.points[this.currentIndex], this.points[this.currentIndex + 1]);
            }
        };
        FollowPathComponent.prototype.hasFinished = function () {
            return (this.currentIndex >= this.points.length - 2 && this.normalizedTime >= 1);
        };
        FollowPathComponent.prototype.assignValueToTransform = function (transform) {
            transform.position = Vector3.Lerp(this.points[this.currentIndex], this.points[this.currentIndex + 1], this.normalizedTime);
        };
        FollowPathComponent = __decorate([
            Component('followPathComponent')
        ], FollowPathComponent);
        return FollowPathComponent;
    }());
    exports.FollowPathComponent = FollowPathComponent;
    /**
     * Component to move a entity down a fixed path in an amount of time
     */
    var FollowCurvedPathComponent = /** @class */ (function () {
        /**
         * Create a FollowCurvedPathComponent instance to add as a component to a Entity
         * @param {Vector3[]} points array of points that the curve must pass through
         * @param {number} duration duration of the movement through the path
         * @param {number} numberOfSegments how many straight line segments to use to construct the curve
         * @param {boolean} turnToFaceNext if true, rotates for each segment to always look forward
         * @param {boolean} closedCircle if true, traces a circle that starts back at the beginning, keeping the curvature rounded in the seams too
         * @param {() => void} onFinishCallback called when movement ends
         */
        function FollowCurvedPathComponent(points, duration, numberOfSegments, turnToFaceNext, closedCircle, onFinishCallback) {
            this.speed = [];
            this.turnToFaceNext = false;
            this.facingNext = false;
            this.normalizedTime = 0;
            this.currentIndex = 0;
            this.points = Curve3.CreateCatmullRomSpline(points, numberOfSegments, closedCircle ? true : false).getPoints();
            this.onFinishCallback = onFinishCallback;
            this.turnToFaceNext = turnToFaceNext ? turnToFaceNext : false;
            if (this.points.length < 2) {
                throw new Error('At least 2 points are needed for FollowPathComponent.');
            }
            if (duration > 0) {
                var totalDist = 0;
                var pointsDist = [];
                for (var i = 0; i < this.points.length - 1; i++) {
                    var sqDist = Vector3.Distance(this.points[i], this.points[i + 1]);
                    totalDist += sqDist;
                    pointsDist.push(sqDist);
                }
                for (var i = 0; i < pointsDist.length; i++) {
                    this.speed.push(1 / ((pointsDist[i] / totalDist) * duration));
                }
            }
            else {
                this.normalizedTime = 1;
                this.currentIndex = points.length - 2;
            }
            transfromSystem_3.TransformSystem.createAndAddToEngine();
        }
        FollowCurvedPathComponent.prototype.update = function (dt) {
            this.normalizedTime = Scalar.Clamp(this.normalizedTime + dt * this.speed[this.currentIndex], 0, 1);
            if (this.normalizedTime >= 1 &&
                this.currentIndex < this.points.length - 2) {
                this.currentIndex++;
                this.normalizedTime = 0;
                if (this.turnToFaceNext == true) {
                    this.facingNext = false;
                }
            }
        };
        FollowCurvedPathComponent.prototype.hasFinished = function () {
            return (this.currentIndex >= this.points.length - 2 && this.normalizedTime >= 1);
        };
        FollowCurvedPathComponent.prototype.assignValueToTransform = function (transform) {
            transform.position = Vector3.Lerp(this.points[this.currentIndex], this.points[this.currentIndex + 1], this.normalizedTime);
            if (!this.facingNext) {
                this.facingNext = true;
                if (this.currentIndex < this.points.length - 1) {
                    transform.lookAt(this.points[this.currentIndex + 1]);
                }
                else {
                    transform.lookAt(this.points[0]);
                }
            }
        };
        FollowCurvedPathComponent = __decorate([
            Component('followCurvedPathComponent')
        ], FollowCurvedPathComponent);
        return FollowCurvedPathComponent;
    }());
    exports.FollowCurvedPathComponent = FollowCurvedPathComponent;
});
define("node_modules/decentraland-ecs-utils/transform/component/keeprotating", ["require", "exports", "node_modules/decentraland-ecs-utils/transform/system/transfromSystem"], function (require, exports, transfromSystem_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.KeepRotatingComponent = void 0;
    /**
     * Component to rotate entity indefinitely until stop is called
     */
    var KeepRotatingComponent = /** @class */ (function () {
        /**
         * Rotates an entity continuously. The entity will keep rotating forever until it's explicitly stopped or the component is removed.
         * @param {Quaternion} rotationVelocity a quaternion describing the desired rotation to perform each second second
         * @param {() => void} onFinishCallback called when rotation ends
         */
        function KeepRotatingComponent(rotationVelocity, onFinishCallback) {
            this.rotationVelocity = rotationVelocity;
            this.onFinishCallback = onFinishCallback;
            this.rotation = Quaternion.Identity;
            this.finished = false;
            transfromSystem_4.TransformSystem.createAndAddToEngine();
        }
        KeepRotatingComponent.prototype.update = function (dt) {
            this.rotation = Quaternion.Slerp(Quaternion.Identity, this.rotationVelocity, dt);
        };
        KeepRotatingComponent.prototype.hasFinished = function () {
            return this.finished;
        };
        KeepRotatingComponent.prototype.assignValueToTransform = function (transform) {
            transform.rotation = transform.rotation.multiply(this.rotation);
        };
        KeepRotatingComponent.prototype.stop = function () {
            this.finished = true;
        };
        KeepRotatingComponent = __decorate([
            Component('keepRotatingComponent')
        ], KeepRotatingComponent);
        return KeepRotatingComponent;
    }());
    exports.KeepRotatingComponent = KeepRotatingComponent;
});
define("node_modules/decentraland-ecs-utils/transform/system/transfromSystem", ["require", "exports", "node_modules/decentraland-ecs-utils/transform/component/move", "node_modules/decentraland-ecs-utils/transform/component/rotate", "node_modules/decentraland-ecs-utils/transform/component/scale", "node_modules/decentraland-ecs-utils/transform/component/followpath", "node_modules/decentraland-ecs-utils/transform/component/keeprotating"], function (require, exports, move_1, rotate_1, scale_1, followpath_1, keeprotating_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TransformSystem = void 0;
    var TransformSystem = /** @class */ (function () {
        function TransformSystem() {
            this._components = [];
            this._componentGroups = [];
            TransformSystem._instance = this;
            this._components.push(move_1.MoveTransformComponent);
            this._componentGroups.push(engine.getComponentGroup(move_1.MoveTransformComponent, Transform));
            this._components.push(rotate_1.RotateTransformComponent);
            this._componentGroups.push(engine.getComponentGroup(rotate_1.RotateTransformComponent, Transform));
            this._components.push(scale_1.ScaleTransformComponent);
            this._componentGroups.push(engine.getComponentGroup(scale_1.ScaleTransformComponent, Transform));
            this._components.push(followpath_1.FollowPathComponent);
            this._componentGroups.push(engine.getComponentGroup(followpath_1.FollowPathComponent, Transform));
            this._components.push(followpath_1.FollowCurvedPathComponent);
            this._componentGroups.push(engine.getComponentGroup(followpath_1.FollowCurvedPathComponent, Transform));
            this._components.push(keeprotating_1.KeepRotatingComponent);
            this._componentGroups.push(engine.getComponentGroup(keeprotating_1.KeepRotatingComponent, Transform));
        }
        TransformSystem.createAndAddToEngine = function () {
            if (this._instance == null) {
                this._instance = new TransformSystem();
                engine.addSystem(this._instance);
            }
            return this._instance;
        };
        TransformSystem.registerCustomComponent = function (component) {
            this.createAndAddToEngine()._components.push(component);
        };
        TransformSystem.prototype.update = function (dt) {
            for (var i = 0; i < this._components.length; i++) {
                this.updateComponent(dt, this._components[i], this._componentGroups[i]);
            }
        };
        TransformSystem.prototype.updateComponent = function (dt, component, group) {
            group.entities.forEach(function (entity) {
                var transform = entity.getComponent(Transform);
                var comp = entity.getComponent(component);
                comp.update(dt);
                comp.assignValueToTransform(transform);
                if (comp.hasFinished()) {
                    entity.removeComponent(comp);
                    if (comp.onFinishCallback != null)
                        comp.onFinishCallback();
                }
            });
        };
        TransformSystem._instance = null;
        return TransformSystem;
    }());
    exports.TransformSystem = TransformSystem;
});
define("node_modules/decentraland-ecs-utils/transform/component/move", ["require", "exports", "node_modules/decentraland-ecs-utils/transform/system/transfromSystem", "node_modules/decentraland-ecs-utils/transform/math/interpolation"], function (require, exports, transfromSystem_5, interpolation_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MoveTransformComponent = void 0;
    /**
     * Component to translate entity from one position (start) to another (end) in an amount of time
     */
    var MoveTransformComponent = /** @class */ (function () {
        /**
         * Create a MoveTransformComponent instance to add as a component to a Entity
         * @param {ReadOnlyVector3} start starting position
         * @param {ReadOnlyVector3} end ending position
         * @param {number} duration duration (in seconds) of start to end translation
         * @param {()=>void} onFinishCallback called when translation ends
         * @param {InterpolationType} interpolationType type of interpolation to be used (default: LINEAR)
         */
        function MoveTransformComponent(start, end, duration, onFinishCallback, interpolationType) {
            if (interpolationType === void 0) { interpolationType = interpolation_3.InterpolationType.LINEAR; }
            this.start = start;
            this.end = end;
            this.normalizedTime = 0;
            this.lerpTime = 0;
            this.onFinishCallback = onFinishCallback;
            this.interpolationType = interpolationType;
            if (duration != 0) {
                this.speed = 1 / duration;
            }
            else {
                this.speed = 0;
                this.normalizedTime = 1;
                this.lerpTime = 1;
            }
            transfromSystem_5.TransformSystem.createAndAddToEngine();
        }
        MoveTransformComponent.prototype.update = function (dt) {
            this.normalizedTime = Scalar.Clamp(this.normalizedTime + dt * this.speed, 0, 1);
            this.lerpTime = interpolation_3.Interpolate(this.interpolationType, this.normalizedTime);
        };
        MoveTransformComponent.prototype.hasFinished = function () {
            return this.normalizedTime >= 1;
        };
        MoveTransformComponent.prototype.assignValueToTransform = function (transform) {
            transform.position = Vector3.Lerp(this.start, this.end, this.lerpTime);
        };
        MoveTransformComponent = __decorate([
            Component('moveTransformComponent')
        ], MoveTransformComponent);
        return MoveTransformComponent;
    }());
    exports.MoveTransformComponent = MoveTransformComponent;
});
define("node_modules/decentraland-ecs-utils/toggle/toggleComponent", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ToggleComponent = exports.ToggleState = void 0;
    var ToggleState;
    (function (ToggleState) {
        ToggleState[ToggleState["Off"] = 0] = "Off";
        ToggleState[ToggleState["On"] = 1] = "On";
    })(ToggleState = exports.ToggleState || (exports.ToggleState = {}));
    /**
     * Toggle component for entities with two states (ON or OFF)
     */
    var ToggleComponent = /** @class */ (function () {
        /**
         * Create an instance of a ToggleComponent
         * @param {ToggleState} startingState starting state of the toggle (ON or OFF)
         * @param {(value: ToggleState) => void} onValueChangedCallback called when toggle state changed
         */
        function ToggleComponent(startingState, onValueChangedCallback) {
            if (startingState === void 0) { startingState = ToggleState.On; }
            this.enabled = true;
            this.state = ToggleState.Off;
            this.set(startingState);
            if (onValueChangedCallback)
                this.setCallback(onValueChangedCallback);
        }
        /**
         * Set trigger to a state
         * @param {ToggleState} state new state
         */
        ToggleComponent.prototype.set = function (state) {
            this.state = state;
            if (this.onValueChangedCallback)
                this.onValueChangedCallback(state);
        };
        /**
         * Toggle state of ToggleComponent
         */
        ToggleComponent.prototype.toggle = function () {
            if (this.enabled) {
                this.set(1 - this.state);
            }
        };
        /**
         * Get if the current toggle state is ON
         * @return {boolean}
         */
        ToggleComponent.prototype.isOn = function () {
            return this.state == ToggleState.On;
        };
        /**
         * Set callback for when ToggleComponent state changed
         * @param {(value: ToggleState) => void} onValueChangedCallback callback
         */
        ToggleComponent.prototype.setCallback = function (onValueChangedCallback) {
            this.onValueChangedCallback = onValueChangedCallback;
        };
        ToggleComponent = __decorate([
            Component('toggle')
        ], ToggleComponent);
        return ToggleComponent;
    }());
    exports.ToggleComponent = ToggleComponent;
    exports.default = {
        ToggleComponent: ToggleComponent,
        ToggleState: ToggleState
    };
});
define("node_modules/decentraland-ecs-utils/timer/component/itimercomponent", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("node_modules/decentraland-ecs-utils/timer/component/interval", ["require", "exports", "node_modules/decentraland-ecs-utils/timer/system/timerSystem"], function (require, exports, timerSystem_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Interval = void 0;
    /**
     * Execute every X milliseconds
     */
    var Interval = /** @class */ (function () {
        /**
         * @param {number} millisecs amount of time in milliseconds
         * @param {() => void} onTimeReachedCallback callback for when time is reached
         */
        function Interval(millisecs, onTimeReachedCallback) {
            var _this = this;
            timerSystem_1.TimerSystem.createAndAddToEngine();
            this.elapsedTime = 0;
            this.targetTime = millisecs / 1000;
            this.onTimeReachedCallback = onTimeReachedCallback;
            this.onTargetTimeReached = function () {
                _this.elapsedTime = 0;
                if (_this.onTimeReachedCallback)
                    _this.onTimeReachedCallback();
            };
        }
        Interval.prototype.setCallback = function (onTimeReachedCallback) {
            this.onTimeReachedCallback = onTimeReachedCallback;
        };
        Interval = __decorate([
            Component('timerInterval')
        ], Interval);
        return Interval;
    }());
    exports.Interval = Interval;
});
define("node_modules/decentraland-ecs-utils/timer/component/expire", ["require", "exports", "node_modules/decentraland-ecs-utils/timer/system/timerSystem"], function (require, exports, timerSystem_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ExpireIn = void 0;
    /**
     * Remove entity after X milliseconds
     */
    var ExpireIn = /** @class */ (function () {
        /**
         * @param {number} millisecs amount of time in milliseconds
         * @param {() => void} onTimeReachedCallback callback for when time is reached
         */
        function ExpireIn(millisecs, onTimeReachedCallback) {
            var _this = this;
            timerSystem_2.TimerSystem.createAndAddToEngine();
            this.elapsedTime = 0;
            this.targetTime = millisecs / 1000;
            this.onTimeReachedCallback = onTimeReachedCallback;
            this.onTargetTimeReached = function (entity) {
                if (_this.onTimeReachedCallback)
                    _this.onTimeReachedCallback();
                entity.removeComponent(_this);
                engine.removeEntity(entity);
            };
        }
        ExpireIn.prototype.setCallback = function (onTimeReachedCallback) {
            this.onTimeReachedCallback = onTimeReachedCallback;
        };
        ExpireIn = __decorate([
            Component('timerExpireIn')
        ], ExpireIn);
        return ExpireIn;
    }());
    exports.ExpireIn = ExpireIn;
});
define("node_modules/decentraland-ecs-utils/timer/system/timerSystem", ["require", "exports", "node_modules/decentraland-ecs-utils/timer/component/interval", "node_modules/decentraland-ecs-utils/timer/component/delay", "node_modules/decentraland-ecs-utils/timer/component/expire"], function (require, exports, interval_1, delay_1, expire_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TimerSystem = void 0;
    var TimerSystem = /** @class */ (function () {
        function TimerSystem() {
            this._components = [];
            TimerSystem._instance = this;
            this._components.push(interval_1.Interval);
            this._components.push(delay_1.Delay);
            this._components.push(expire_1.ExpireIn);
        }
        TimerSystem.createAndAddToEngine = function () {
            if (this._instance == null) {
                this._instance = new TimerSystem();
                engine.addSystem(this._instance);
            }
            return this._instance;
        };
        TimerSystem.registerCustomComponent = function (component) {
            this.createAndAddToEngine()._components.push(component);
        };
        TimerSystem.prototype.update = function (dt) {
            var _this = this;
            this._components.forEach(function (component) {
                _this.updateComponent(dt, component);
            });
        };
        TimerSystem.prototype.updateComponent = function (dt, component) {
            var record = engine.getEntitiesWithComponent(component);
            for (var key in record) {
                if (record.hasOwnProperty(key)) {
                    var entity = record[key];
                    var timerComponent = entity.getComponent(component);
                    timerComponent.elapsedTime += dt;
                    if (timerComponent.elapsedTime >= timerComponent.targetTime) {
                        timerComponent.onTargetTimeReached(entity);
                    }
                }
            }
        };
        TimerSystem._instance = null;
        return TimerSystem;
    }());
    exports.TimerSystem = TimerSystem;
});
define("node_modules/decentraland-ecs-utils/timer/component/delay", ["require", "exports", "node_modules/decentraland-ecs-utils/timer/system/timerSystem"], function (require, exports, timerSystem_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Delay = void 0;
    /**
     * Execute once after X milliseconds
     */
    var Delay = /** @class */ (function () {
        /**
         * @param {number} millisecs amount of time in milliseconds
         * @param {() => void} onTimeReachedCallback callback for when time is reached
         */
        function Delay(millisecs, onTimeReachedCallback) {
            var _this = this;
            timerSystem_3.TimerSystem.createAndAddToEngine();
            this.elapsedTime = 0;
            this.targetTime = millisecs / 1000;
            this.onTimeReachedCallback = onTimeReachedCallback;
            this.onTargetTimeReached = function (entity) {
                if (_this.onTimeReachedCallback)
                    _this.onTimeReachedCallback();
                entity.removeComponent(_this);
            };
        }
        Delay.prototype.setCallback = function (onTimeReachedCallback) {
            this.onTimeReachedCallback = onTimeReachedCallback;
        };
        Delay = __decorate([
            Component('timerDelay')
        ], Delay);
        return Delay;
    }());
    exports.Delay = Delay;
});
define("node_modules/decentraland-ecs-utils/helpers/helperfunctions", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getEntityWorldRotation = exports.getEntityWorldPosition = exports.clamp = exports.map = void 0;
    /**
     * Maps a value from one range of values to its equivalent, scaled in proportion to another range of values, using maximum and minimum.
     *
     * @param {number} value input number
     * @param {number} min1 Minimum value in the range of the input.
     * @param {number} max1 Maximum value in the range of the input.
     * @param {number} min2 Minimum value in the range of the output.
     * @param {number} max2 Maximum value in the range of the output.
     * @return {number} The resulting mapped value between the new min and max
     *
     */
    function map(value, min1, max1, min2, max2) {
        var range1 = max1 - min1;
        var range2 = max2 - min2;
        return ((value - min1) / range1) * range2 + min2;
    }
    exports.map = map;
    // constrain
    /**
     * Clamps a value so that it doesn't exceed a minimum or a maximum value.
     *
     * @param {number} value input number
     * @param {number} min Minimum output value.
     * @param {number} max Maximum output value.
     * @return {number} The resulting mapped value between the min and max
     *
     */
    function clamp(value, min, max) {
        var result = value;
        if (value > max) {
            result = max;
        }
        else if (value < min) {
            result = min;
        }
        return result;
    }
    exports.clamp = clamp;
    /**
     * Returns the position of an entity that is a child of other entities, relative to the scene instead of relative to the parent. Returns a Vector3.
     *
     * @param {Entity} entity Entity to calculate position
     * @return {Vector3} The Entity's global position in reference to the scene's origin
     *
     */
    function getEntityWorldPosition(entity) {
        var entityPosition = entity.hasComponent(Transform)
            ? entity.getComponent(Transform).position.clone()
            : Vector3.Zero();
        var parentEntity = entity.getParent();
        if (parentEntity != null) {
            if (parentEntity.uuid == 'FirstPersonCameraEntityReference') {
                //log('ATTACHED TO CAMERA')
                var parentRotation = Camera.instance.rotation.clone();
                return Camera.instance.position
                    .clone()
                    .add(entityPosition.rotate(parentRotation));
            }
            else if (parentEntity.uuid == 'AvatarEntityReference') {
                //log('ATTACHED TO AVATAR')
                var camRotation = Camera.instance.rotation;
                var parentRotation = Quaternion.Euler(0, camRotation.eulerAngles.y, 0);
                //log(Camera.instance.rotation.eulerAngles.y)
                return Camera.instance.position
                    .clone()
                    .add(entityPosition.rotate(parentRotation))
                    .add(new Vector3(0, -0.875, 0));
            }
            else {
                var parentRotation = parentEntity.hasComponent(Transform)
                    ? parentEntity.getComponent(Transform).rotation
                    : Quaternion.Identity;
                return getEntityWorldPosition(parentEntity).add(entityPosition.rotate(parentRotation));
            }
        }
        return entityPosition;
    }
    exports.getEntityWorldPosition = getEntityWorldPosition;
    /**
     * Returns the position of an entity that is a child of other entities, relative to the scene instead of relative to the parent. Returns a Vector3.
     *
     * @param {Entity} entity Entity to calculate position
     * @return {Quaternion} The Entity's global rotation in reference to the scene's origin
     *
     */
    function getEntityWorldRotation(entity) {
        var entityRotation = entity.hasComponent(Transform)
            ? entity.getComponent(Transform).rotation.clone()
            : Quaternion.Zero();
        var parentEntity = entity.getParent();
        if (parentEntity != null) {
            if (parentEntity.uuid == 'FirstPersonCameraEntityReference') {
                //log('ATTACHED TO CAMERA')
                var parentRotation = Camera.instance.rotation.clone();
                return entityRotation.multiply(parentRotation);
            }
            else if (parentEntity.uuid == 'AvatarEntityReference') {
                //log('ATTACHED TO AVATAR')
                var parentRotation = Quaternion.Euler(0, Camera.instance.rotation.eulerAngles.y, 0);
                return entityRotation.multiply(parentRotation);
            }
            else {
                //   let parentRotation = parentEntity.hasComponent(Transform)
                //     ? parentEntity.getComponent(Transform).rotation
                //     : Quaternion.Identity
                return entityRotation.multiply(getEntityWorldRotation(parentEntity));
            }
        }
        return entityRotation;
    }
    exports.getEntityWorldRotation = getEntityWorldRotation;
});
define("node_modules/decentraland-ecs-utils/helpers/testCube", ["require", "exports", "@decentraland/EnvironmentAPI"], function (require, exports, EnvironmentAPI_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.addLabel = exports.addTestCube = void 0;
    /**
     * Quick function to add a cube that can run functions when clicked. By default only displayed when in preview mode for tests.
     *
     * @param {TranformConstructorArgs} pos Transform arguments for the cube, including position, scale and rotation
     * @param {() => void} triggeredFunction Function to execute every time the cube is clicked.
     * @param {string} label Text to display over cube and on hover.
     * @param {Color3} color Cube color.
     * @param {boolean} sphere If true, use a sphere shape instead of cube.
     * @param {boolean} noCollider If true, cube has no collider.
     * @return {Entity} A new entity with the configured settings and a label as a child
     *
     */
    function addTestCube(pos, triggeredFunction, label, color, sphere, noCollider, keepInProduction) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, cube, cubeMaterial;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = !keepInProduction;
                        if (!_a) return [3 /*break*/, 2];
                        return [4 /*yield*/, !EnvironmentAPI_1.isPreviewMode()];
                    case 1:
                        _a = (_b.sent());
                        _b.label = 2;
                    case 2:
                        // if not in preview return
                        if (_a) {
                            return [2 /*return*/];
                        }
                        cube = new Entity();
                        cube.addComponent(new Transform(pos));
                        if (sphere) {
                            cube.addComponent(new SphereShape());
                            cube.getComponent(Transform).scale.setAll(0.5);
                        }
                        else {
                            cube.addComponent(new BoxShape());
                        }
                        engine.addEntity(cube);
                        cube.addComponent(new OnPointerDown(triggeredFunction, {
                            hoverText: label ? label : 'click',
                            button: ActionButton.POINTER
                        }));
                        if (color) {
                            cubeMaterial = new Material();
                            cubeMaterial.albedoColor = color;
                            cube.addComponent(cubeMaterial);
                        }
                        if (noCollider) {
                            cube.getComponent(BoxShape).withCollisions = false;
                        }
                        if (label) {
                            addLabel(label, cube, true);
                        }
                        return [2 /*return*/, cube];
                }
            });
        });
    }
    exports.addTestCube = addTestCube;
    /**
     * Maps a value from one range of values to its equivalent, scaled in proportion to another range of values, using maximum and minimum.
     *
     * @param {string} text Text to use on label
     * @param {Entity} parent Entity to place label on.
     * @param {boolean} billboard If true, label turns to always face player.
     * @param {Color3} color Text color. Black by default.
     * @param {number} size Text font size, 3 by default.
     * @param {TranformConstructorArgs} textOffset Offset from parent entity's position. By default 1.5 meters above the parent.
     * @return {Entity} A new entity with the configured settings that is a child of the provided parent
     *
     */
    function addLabel(text, parent, billboard, color, size, textOffset) {
        var label = new Entity();
        label.addComponent(new Transform(textOffset ? textOffset : { position: new Vector3(0, 1.5, 0) }));
        label.setParent(parent);
        var textShape = new TextShape(text);
        textShape.fontSize = size ? size : 3;
        textShape.color = color ? color : Color3.Black();
        label.addComponent(textShape);
        if (billboard) {
            label.addComponent(new Billboard());
        }
        engine.addEntity(label);
        return label;
    }
    exports.addLabel = addLabel;
});
define("node_modules/decentraland-ecs-utils/helpers/requests", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.sendRequest = void 0;
    /**
     * Quick function to send HTTP requests to an external address
     *
     * @param {string} url URL to send request to
     * @param {string} method HTTP method (GET by default)
     * @param {*} headers Headers to add to request, as a JSON with key/value pairs per each header
     * @param {*} body Body to add to request, as a JSON object
     * @return {*} The response of the request. If the response is a JSON object, it will be parsed.
     *
     */
    function sendRequest(url, method, headers, body) {
        return __awaiter(this, void 0, void 0, function () {
            var propsObject, response, json, _a, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 6, , 7]);
                        propsObject = {
                            method: method ? method : 'GET'
                        };
                        if (headers) {
                            propsObject.headers = headers;
                        }
                        if (body) {
                            propsObject.body = JSON.stringify(body);
                        }
                        return [4 /*yield*/, fetch(url, propsObject)];
                    case 1:
                        response = _b.sent();
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, response.json()];
                    case 3:
                        json = _b.sent();
                        return [2 /*return*/, json];
                    case 4:
                        _a = _b.sent();
                        return [2 /*return*/, response];
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        error_1 = _b.sent();
                        log('error fetching from ', url, ' : ', error_1);
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    }
    exports.sendRequest = sendRequest;
});
define("node_modules/decentraland-ecs-utils/triggers/triggerSystem", ["require", "exports", "@decentraland/EnvironmentAPI"], function (require, exports, EnvironmentAPI_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TriggerSphereShape = exports.TriggerBoxShape = exports.TriggerComponent = exports.TriggerSystem = void 0;
    var TriggerSystem = /** @class */ (function () {
        function TriggerSystem() {
            this._triggers = {};
            TriggerSystem._instance = this;
            this._cameraTriggerWrapper = new CameraTrigger(new TriggerBoxShape(new Vector3(0.5, 1.8, 0.5), new Vector3(0, 0.91, 0)));
            this._componentGroup = engine.getComponentGroup(TriggerComponent);
        }
        Object.defineProperty(TriggerSystem, "instance", {
            get: function () {
                return this.createAndAddToEngine();
            },
            enumerable: false,
            configurable: true
        });
        TriggerSystem.createAndAddToEngine = function () {
            if (this._instance == null) {
                this._instance = new TriggerSystem();
                engine.addSystem(this._instance);
            }
            return this._instance;
        };
        /**
         * set a custom trigger's shape for the camera
         * @param {TriggerBoxShape | TriggerSphereShape} shape custom trigger's shape
         */
        TriggerSystem.prototype.setCameraTriggerShape = function (shape) {
            this._cameraTriggerWrapper.setShape(shape);
        };
        TriggerSystem.prototype.update = function () {
            var _this = this;
            var entitiesWithTriggers = this._componentGroup.entities;
            //iterate through all entities with triggers and wrap entities that weren't wrapped yet
            entitiesWithTriggers.forEach(function (entity) {
                if (_this.shouldWrapTriggerEntity(entity)) {
                    _this.wrapTriggerEntity(entity);
                }
            });
            //iterate through wrapped entities
            for (var key in this._triggers) {
                if (this._triggers.hasOwnProperty(key)) {
                    var wrapper = this._triggers[key];
                    //update debug entity
                    if (wrapper.isDebugging()) {
                        wrapper.updateDebugEntity();
                    }
                    if (!wrapper.isInEngine()) {
                        //remove debugging
                        if (wrapper.isDebugging()) {
                            wrapper.removeDebugEntity();
                        }
                        //remove old collisions
                        TriggerSystem.removeTriggerFromSystem(wrapper);
                        //remove from record
                        delete this._triggers[key];
                    }
                    else if (wrapper.trigger != null && wrapper.trigger.enabled) {
                        //if was set as enabled in last frame
                        if (!wrapper.wasEnabled) {
                            if (wrapper.isDebugging()) {
                                wrapper.addDebugEntity();
                            }
                        }
                        //set as enabled
                        wrapper.wasEnabled = true;
                        //check collision camera
                        if (wrapper.trigger.onCameraEnter || wrapper.trigger.onCameraExit) {
                            this.checkCollisionAgainstCamera(wrapper);
                        }
                        //check collision with others
                        if (wrapper.trigger.onTriggerEnter || wrapper.trigger.onTriggerExit) {
                            this.checkCollisionAgainstOtherTriggers(wrapper);
                        }
                    }
                    else if (wrapper.wasEnabled) {
                        wrapper.wasEnabled = false;
                        //remove debugging
                        if (wrapper.isDebugging()) {
                            wrapper.removeDebugEntity();
                        }
                        TriggerSystem.removeTriggerFromSystem(wrapper);
                    }
                }
            }
        };
        TriggerSystem.prototype.shouldWrapTriggerEntity = function (entity) {
            return (this._triggers[entity.uuid] == undefined ||
                this._triggers[entity.uuid] == null);
        };
        TriggerSystem.prototype.wrapTriggerEntity = function (entity) {
            this._triggers[entity.uuid] = new TriggerWrapper(entity);
        };
        TriggerSystem.removeTriggerFromSystem = function (wrapper) {
            var _a;
            var activeCollisions = wrapper.getActiveCollisions();
            for (var i = 0; i < activeCollisions.length; i++) {
                var activeCollisionHasTrigger = !(activeCollisions[i] === ((_a = TriggerSystem._instance) === null || _a === void 0 ? void 0 : _a._cameraTriggerWrapper) ||
                    activeCollisions[i].trigger == null);
                if (activeCollisionHasTrigger &&
                    activeCollisions[i].trigger.onTriggerExit &&
                    wrapper.entity)
                    activeCollisions[i].trigger.onTriggerExit(wrapper.entity);
                activeCollisions[i].disengageActiveCollision(wrapper);
                wrapper.disengageActiveCollision(activeCollisions[i]);
            }
        };
        TriggerSystem.disengageCollision = function (t1, t2) {
            t1.disengageActiveCollision(t2);
            t2.disengageActiveCollision(t1);
            if (t1.trigger.onTriggerExit && t2.entity)
                t1.trigger.onTriggerExit(t2.entity);
            if (t2.trigger.onTriggerExit && t1.entity)
                t2.trigger.onTriggerExit(t1.entity);
        };
        TriggerSystem.engageCollision = function (t1, t2) {
            t1.engageCollision(t2);
            t2.engageCollision(t1);
            if (t1.trigger.onTriggerEnter && t2.entity)
                t1.trigger.onTriggerEnter(t2.entity);
            if (t2.trigger.onTriggerEnter && t1.entity)
                t2.trigger.onTriggerEnter(t1.entity);
        };
        TriggerSystem.prototype.checkCollisionAgainstCamera = function (wrapper) {
            var wereColliding = wrapper.hasActiveCollision(this._cameraTriggerWrapper);
            var areColliding = TriggerSystem.areColliding(wrapper, this._cameraTriggerWrapper);
            if (wereColliding && !areColliding) {
                wrapper.disengageActiveCollision(this._cameraTriggerWrapper);
                if (wrapper.trigger.onCameraExit)
                    wrapper.trigger.onCameraExit();
            }
            else if (!wereColliding && areColliding) {
                wrapper.engageCollision(this._cameraTriggerWrapper);
                if (wrapper.trigger.onCameraEnter)
                    wrapper.trigger.onCameraEnter();
            }
        };
        TriggerSystem.prototype.checkCollisionAgainstOtherTriggers = function (wrapper) {
            for (var key in this._triggers) {
                if (this._triggers.hasOwnProperty(key)) {
                    if (key != wrapper.uuid && this._triggers[key].trigger.enabled) {
                        if (TriggerSystem.canTriggersCollide(wrapper, this._triggers[key])) {
                            var wereColliding = wrapper.hasActiveCollision(this._triggers[key]);
                            var areColliding = TriggerSystem.areColliding(wrapper, this._triggers[key]);
                            if (wereColliding && !areColliding)
                                TriggerSystem.disengageCollision(wrapper, this._triggers[key]);
                            else if (!wereColliding && areColliding)
                                TriggerSystem.engageCollision(wrapper, this._triggers[key]);
                        }
                    }
                }
            }
        };
        TriggerSystem.canTriggersCollide = function (t1, t2) {
            if (t1.trigger.triggeredByLayer == 0)
                return true;
            return (t2.trigger.layer & t1.trigger.triggeredByLayer) != 0;
        };
        TriggerSystem.areColliding = function (t1, t2) {
            if (t1.getShape() instanceof TriggerBoxShape &&
                t2.getShape() instanceof TriggerBoxShape) {
                return TriggerSystem.areCollidingAABB(t1.getGlobalPosition(), t1.getShape(), t2.getGlobalPosition(), t2.getShape());
            }
            else if (t1.getShape() instanceof TriggerSphereShape &&
                t2.getShape() instanceof TriggerSphereShape) {
                return TriggerSystem.areCollidingSphere(t1.getGlobalPosition(), t1.getShape(), t2.getGlobalPosition(), t2.getShape());
            }
            else if (t1.getShape() instanceof TriggerBoxShape &&
                t2.getShape() instanceof TriggerSphereShape) {
                return TriggerSystem.areCollidingAABBSphere(t1.getGlobalPosition(), t1.getShape(), t2.getGlobalPosition(), t2.getShape());
            }
            else if (t1.getShape() instanceof TriggerSphereShape &&
                t2.getShape() instanceof TriggerBoxShape) {
                return TriggerSystem.areCollidingAABBSphere(t2.getGlobalPosition(), t2.getShape(), t1.getGlobalPosition(), t1.getShape());
            }
            return false;
        };
        TriggerSystem.areCollidingAABB = function (t1GlobalPosition, t1Shape, t2GlobalPosition, t2Shape) {
            var t1 = TriggerSystem.getBoxShapeValues(t1GlobalPosition, t1Shape);
            var t2 = TriggerSystem.getBoxShapeValues(t2GlobalPosition, t2Shape);
            return (t1.min.x <= t2.max.x &&
                t1.max.x >= t2.min.x &&
                t1.min.y <= t2.max.y &&
                t1.max.y >= t2.min.y &&
                t1.min.z <= t2.max.z &&
                t1.max.z >= t2.min.z);
        };
        TriggerSystem.areCollidingSphere = function (t1GlobalPosition, t1Shape, t2GlobalPosition, t2Shape) {
            var sqDist = Vector3.DistanceSquared(t1GlobalPosition.add(t1Shape.position), t2GlobalPosition.add(t2Shape.position));
            return (sqDist < t1Shape.radius * t1Shape.radius + t2Shape.radius * t2Shape.radius);
        };
        TriggerSystem.areCollidingAABBSphere = function (t1GlobalPosition, t1Shape, t2GlobalPosition, t2Shape) {
            var box = TriggerSystem.getBoxShapeValues(t1GlobalPosition, t1Shape);
            var sphere = {
                center: t2GlobalPosition.add(t2Shape.position),
                radius: t2Shape.radius
            };
            var dmin = 0;
            if (sphere.center.x < box.min.x)
                dmin += (box.min.x - sphere.center.x) * (box.min.x - sphere.center.x);
            if (sphere.center.x > box.max.x)
                dmin += (sphere.center.x - box.max.x) * (sphere.center.x - box.max.x);
            if (sphere.center.y < box.min.y)
                dmin += (box.min.y - sphere.center.y) * (box.min.y - sphere.center.y);
            if (sphere.center.y > box.max.y)
                dmin += (sphere.center.y - box.max.y) * (sphere.center.y - box.max.y);
            if (sphere.center.z < box.min.z)
                dmin += (box.min.z - sphere.center.z) * (box.min.z - sphere.center.z);
            if (sphere.center.z > box.max.z)
                dmin += (sphere.center.z - box.max.z) * (sphere.center.z - box.max.z);
            return dmin < sphere.radius * sphere.radius;
        };
        TriggerSystem.getBoxShapeValues = function (entityGlobalPosition, shape) {
            var center = entityGlobalPosition.add(shape.position);
            return {
                center: center,
                min: center.subtract(shape.size.scale(0.5)),
                max: center.add(shape.size.scale(0.5))
            };
        };
        TriggerSystem._instance = null;
        return TriggerSystem;
    }());
    exports.TriggerSystem = TriggerSystem;
    var TriggerWrapper = /** @class */ (function () {
        function TriggerWrapper(entity) {
            this.wasEnabled = true;
            this._uuid = '';
            this._collidingWith = {};
            this._isDebug = false;
            this._debugEntity = null;
            this._entity = entity;
            if (entity) {
                this._trigger = entity.getComponent(TriggerComponent);
                this._uuid = entity.uuid;
                this._isDebug = this._trigger.debugEnabled;
                if (this._isDebug) {
                    this.addDebugEntity();
                }
            }
        }
        Object.defineProperty(TriggerWrapper.prototype, "entity", {
            get: function () {
                return this._entity;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TriggerWrapper.prototype, "trigger", {
            get: function () {
                return this._trigger;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TriggerWrapper.prototype, "uuid", {
            get: function () {
                return this._uuid;
            },
            enumerable: false,
            configurable: true
        });
        TriggerWrapper.prototype.getGlobalPosition = function () {
            if (this._entity)
                return TriggerWrapper.getEntityWorldPosition(this._entity);
            return Vector3.Zero();
        };
        TriggerWrapper.prototype.getShape = function () {
            return this._trigger.shape;
        };
        TriggerWrapper.prototype.isInEngine = function () {
            return this._entity != null && this._entity.isAddedToEngine();
        };
        TriggerWrapper.prototype.getActiveCollisions = function () {
            var ret = [];
            for (var key in this._collidingWith) {
                if (this._collidingWith.hasOwnProperty(key)) {
                    ret.push(this._collidingWith[key]);
                }
            }
            return ret;
        };
        TriggerWrapper.prototype.hasActiveCollision = function (other) {
            return (this._collidingWith[other.uuid] != undefined &&
                this._collidingWith[other.uuid] != null);
        };
        TriggerWrapper.prototype.disengageActiveCollision = function (other) {
            delete this._collidingWith[other.uuid];
        };
        TriggerWrapper.prototype.engageCollision = function (other) {
            this._collidingWith[other.uuid] = other;
        };
        TriggerWrapper.prototype.isDebugging = function () {
            return this._isDebug;
        };
        TriggerWrapper.prototype.addDebugEntity = function () {
            return __awaiter(this, void 0, void 0, function () {
                var transform, shape, shape, rad;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, !EnvironmentAPI_2.isPreviewMode()];
                        case 1:
                            if (_a.sent()) {
                                return [2 /*return*/];
                            }
                            if (!TriggerWrapper._debugMaterial) {
                                TriggerWrapper._debugMaterial = new Material();
                                TriggerWrapper._debugMaterial.alphaTest = 0.5;
                            }
                            if (this._debugEntity == null) {
                                this._debugEntity = new Entity();
                                transform = new Transform();
                                this._debugEntity.addComponent(transform);
                                this._debugEntity.addComponent(TriggerWrapper._debugMaterial);
                                if (this.getShape() instanceof TriggerBoxShape) {
                                    shape = new BoxShape();
                                    shape.withCollisions = false;
                                    this._debugEntity.addComponent(shape);
                                    transform.scale = this.getShape().size;
                                }
                                if (this.getShape() instanceof TriggerSphereShape) {
                                    shape = new SphereShape();
                                    shape.withCollisions = false;
                                    this._debugEntity.addComponent(shape);
                                    rad = this.getShape().radius;
                                    transform.scale = new Vector3(rad, rad, rad);
                                }
                            }
                            engine.addEntity(this._debugEntity);
                            return [2 /*return*/];
                    }
                });
            });
        };
        TriggerWrapper.prototype.removeDebugEntity = function () {
            if (this._debugEntity != null)
                engine.removeEntity(this._debugEntity);
        };
        TriggerWrapper.prototype.updateDebugEntity = function () {
            if (this._debugEntity) {
                this._debugEntity.getComponent(Transform).position = this.getGlobalPosition().add(this.getShape().position);
            }
        };
        TriggerWrapper.getEntityWorldPosition = function (entity) {
            var entityPosition = entity.hasComponent(Transform)
                ? entity.getComponent(Transform).position.clone()
                : Vector3.Zero();
            var parentEntity = entity.getParent();
            if (parentEntity != null) {
                var parentRotation = parentEntity.hasComponent(Transform)
                    ? parentEntity.getComponent(Transform).rotation
                    : Quaternion.Identity;
                return this.getEntityWorldPosition(parentEntity).add(entityPosition.rotate(parentRotation));
            }
            return entityPosition;
        };
        TriggerWrapper._debugMaterial = null;
        return TriggerWrapper;
    }());
    var CameraTrigger = /** @class */ (function (_super) {
        __extends(CameraTrigger, _super);
        function CameraTrigger(shape) {
            var _this = _super.call(this) || this;
            _this._shape = shape;
            _this._uuid = 'cameraTrigger';
            return _this;
        }
        CameraTrigger.prototype.getGlobalPosition = function () {
            return Camera.instance.position;
        };
        CameraTrigger.prototype.getShape = function () {
            return this._shape;
        };
        CameraTrigger.prototype.setShape = function (shape) {
            this._shape = shape;
        };
        CameraTrigger.prototype.isInEngine = function () {
            return false;
        };
        CameraTrigger.prototype.hasActiveCollision = function (other) {
            return false;
        };
        CameraTrigger.prototype.disengageActiveCollision = function (other) { };
        CameraTrigger.prototype.engageCollision = function (other) { };
        CameraTrigger.prototype.isDebugging = function () {
            return false;
        };
        return CameraTrigger;
    }(TriggerWrapper));
    var TriggerComponent = /** @class */ (function () {
        /**
         *
         * @param {TriggerBoxShape | TriggerSphereShape} shape shape of the triggering collider area
         * @param {TriggerData} data An object with additional parameters for the trigger component
         */
        function TriggerComponent(shape, data) {
            /**
             * Is the trigger enabled? If false, the associated functions aren't triggered.
             */
            this.enabled = true;
            /**
             * bit layer of the Tigger (usefull to discriminate between trigger events)
             */
            this.layer = 0;
            /**
             * against which layer are we going to check trigger's collisions
             */
            this.triggeredByLayer = 0;
            this._debugEnabled = false;
            TriggerSystem.createAndAddToEngine();
            this.shape = shape;
            if (data) {
                if (data.layer)
                    this.layer = data.layer;
                if (data.triggeredByLayer)
                    this.triggeredByLayer = data.triggeredByLayer;
                if (data.onTriggerEnter)
                    this.onTriggerEnter = data.onTriggerEnter;
                if (data.onTriggerExit)
                    this.onTriggerExit = data.onTriggerExit;
                if (data.onCameraEnter)
                    this.onCameraEnter = data.onCameraEnter;
                if (data.onCameraExit)
                    this.onCameraExit = data.onCameraExit;
                if (data.enableDebug)
                    this._debugEnabled = data.enableDebug;
            }
        }
        Object.defineProperty(TriggerComponent.prototype, "debugEnabled", {
            /**
             * get if debug is enabled
             */
            get: function () {
                return this._debugEnabled;
            },
            enumerable: false,
            configurable: true
        });
        TriggerComponent = __decorate([
            Component('triggerComponent')
        ], TriggerComponent);
        return TriggerComponent;
    }());
    exports.TriggerComponent = TriggerComponent;
    /**
     * Define a box-shaped area for using on a TriggerComponent
     * @param {Vector3} size The scale of the box area
     * @param {Vector3} position The offset from the position of the entity that owns the TriggerComponent
     */
    var TriggerBoxShape = /** @class */ (function () {
        function TriggerBoxShape(size, position) {
            this.size = size ? size : Vector3.One().scale(2);
            this.position = position ? position : Vector3.Zero();
        }
        return TriggerBoxShape;
    }());
    exports.TriggerBoxShape = TriggerBoxShape;
    /**
     * Define a sphere-shaped area for using on a TriggerComponent
     * @param {number} radius The radius of the sphere area
     * @param {Vector3} position The offset from the position of the entity that owns the TriggerComponent
     */
    var TriggerSphereShape = /** @class */ (function () {
        function TriggerSphereShape(radius, position) {
            this.radius = radius ? radius : 2;
            this.position = position ? position : Vector3.Zero();
        }
        return TriggerSphereShape;
    }());
    exports.TriggerSphereShape = TriggerSphereShape;
});
define("node_modules/decentraland-ecs-utils/actionsSequenceSystem/actionsSequenceSystem", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ActionsSequenceSystem = void 0;
    var ActionsSequenceSystem = /** @class */ (function () {
        function ActionsSequenceSystem(sequenceBuilt) {
            this.beginSequenceNode = null;
            this.currentSequenceNode = null;
            this.running = false;
            this.started = false;
            if (sequenceBuilt) {
                this.startSequence(sequenceBuilt);
            }
        }
        ActionsSequenceSystem.prototype.startSequence = function (sequenceBuilt) {
            this.beginSequenceNode = sequenceBuilt.beginSequenceNode;
            this.currentSequenceNode = this.beginSequenceNode;
            this.running = true;
            this.started = false;
        };
        ActionsSequenceSystem.prototype.setOnFinishCallback = function (onFinishCallback) {
            this.onFinishCallback = onFinishCallback;
        };
        ActionsSequenceSystem.prototype.isRunning = function () {
            return this.running;
        };
        ActionsSequenceSystem.prototype.stop = function () {
            this.running = false;
        };
        ActionsSequenceSystem.prototype.resume = function () {
            if (this.beginSequenceNode != null) {
                this.running = true;
            }
        };
        ActionsSequenceSystem.prototype.reset = function () {
            this.currentSequenceNode = this.beginSequenceNode;
            this.running = true;
            this.started = false;
        };
        ActionsSequenceSystem.prototype.getRunningAction = function () {
            var currentNode = this.currentSequenceNode;
            if (this.currentSequenceNode instanceof SubSequenceNode) {
                do {
                    currentNode = currentNode.currentInnerSequence;
                } while (currentNode instanceof SubSequenceNode);
            }
            return currentNode.action;
        };
        ActionsSequenceSystem.prototype.update = function (dt) {
            if (this.running) {
                if (!this.started) {
                    ;
                    this.currentSequenceNode.onStart();
                    this.started = true;
                }
                else {
                    if (!this.currentSequenceNode.hasFinish()) {
                        ;
                        this.currentSequenceNode.update(dt);
                    }
                    else {
                        ;
                        this.currentSequenceNode.onFinish();
                        this.currentSequenceNode = this
                            .currentSequenceNode.next;
                        if (this.currentSequenceNode) {
                            this.currentSequenceNode.onStart();
                        }
                        else {
                            this.running = false;
                            if (this.onFinishCallback)
                                this.onFinishCallback();
                        }
                    }
                }
            }
        };
        return ActionsSequenceSystem;
    }());
    exports.ActionsSequenceSystem = ActionsSequenceSystem;
    (function (ActionsSequenceSystem) {
        var SequenceBuilder = /** @class */ (function () {
            function SequenceBuilder() {
                this.currentSequenceNode = null;
                this.beginSequenceNode = null;
                this.whileNodeStack = [];
            }
            SequenceBuilder.prototype.then = function (action) {
                if (this.currentSequenceNode == null) {
                    this.currentSequenceNode = new SequenceNode();
                    this.currentSequenceNode.action = action;
                    this.beginSequenceNode = this.currentSequenceNode;
                }
                else {
                    var next = new SequenceNode();
                    next.action = action;
                    this.currentSequenceNode = this.currentSequenceNode.then(next);
                }
                return this;
            };
            SequenceBuilder.prototype.if = function (condition) {
                var ifSeq = new IfSequenceNode(condition);
                if (this.currentSequenceNode == null) {
                    this.currentSequenceNode = ifSeq;
                    this.beginSequenceNode = ifSeq;
                }
                else {
                    this.currentSequenceNode = this.currentSequenceNode.then(ifSeq);
                }
                return this;
            };
            SequenceBuilder.prototype.else = function () {
                var seq = this.currentSequenceNode.getSequence();
                if (seq instanceof IfSequenceNode) {
                    seq.closed = true;
                    var elseSeq = new ElseSequenceNode(seq);
                    this.currentSequenceNode = this
                        .currentSequenceNode.then(elseSeq);
                }
                else {
                    throw new Error('IF statement is needed to be called before ELSE statement.');
                }
                return this;
            };
            SequenceBuilder.prototype.endIf = function () {
                var seq = this.currentSequenceNode.getSequence();
                if (seq instanceof IfSequenceNode || seq instanceof ElseSequenceNode) {
                    seq.closed = true;
                }
                else {
                    throw new Error('IF statement is needed to be called before ENDIF statement.');
                }
                return this;
            };
            SequenceBuilder.prototype.while = function (condition) {
                var whileSeq = new WhileSequenceNode(condition);
                if (this.currentSequenceNode == null) {
                    this.currentSequenceNode = whileSeq;
                    this.beginSequenceNode = whileSeq;
                }
                else {
                    this.currentSequenceNode = this.currentSequenceNode.then(whileSeq);
                }
                this.whileNodeStack.push(whileSeq);
                return this;
            };
            SequenceBuilder.prototype.endWhile = function () {
                var seq = this.currentSequenceNode.getSequence();
                if (seq instanceof WhileSequenceNode) {
                    seq.closed = true;
                    if (this.whileNodeStack.length > 0) {
                        this.whileNodeStack.splice(this.whileNodeStack.length - 1, 1);
                    }
                }
                else {
                    throw new Error('WHILE statement is needed to be called before ENDWHILE statement.');
                }
                return this;
            };
            SequenceBuilder.prototype.breakWhile = function () {
                if (this.whileNodeStack.length > 0) {
                    this.currentSequenceNode = this
                        .currentSequenceNode.then(new BreakWhileSequenceNode(this.whileNodeStack[this.whileNodeStack.length - 1]));
                }
                else {
                    throw new Error('WHILE statement is needed to be called before BREAKWHILE statement.');
                }
                return this;
            };
            return SequenceBuilder;
        }());
        ActionsSequenceSystem.SequenceBuilder = SequenceBuilder;
    })(ActionsSequenceSystem = exports.ActionsSequenceSystem || (exports.ActionsSequenceSystem = {}));
    exports.ActionsSequenceSystem = ActionsSequenceSystem;
    var SequenceNode = /** @class */ (function () {
        function SequenceNode() {
            this.action = null;
            this.next = null;
        }
        SequenceNode.prototype.then = function (next) {
            this.next = next;
            return next;
        };
        SequenceNode.prototype.onStart = function () {
            if (this.action)
                this.action.onStart();
        };
        SequenceNode.prototype.update = function (dt) {
            if (this.action)
                this.action.update(dt);
        };
        SequenceNode.prototype.onFinish = function () {
            if (this.action)
                this.action.onFinish();
        };
        SequenceNode.prototype.hasFinish = function () {
            if (this.action)
                return this.action.hasFinished;
            else
                return true;
        };
        SequenceNode.prototype.getSequence = function () {
            return this;
        };
        return SequenceNode;
    }());
    var SubSequenceNode = /** @class */ (function (_super) {
        __extends(SubSequenceNode, _super);
        function SubSequenceNode() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.currentInnerSequence = null;
            _this.startingInnerSequence = null;
            _this.closed = false;
            return _this;
        }
        SubSequenceNode.prototype.then = function (next) {
            if (this.currentInnerSequence == null) {
                this.currentInnerSequence = next;
                this.startingInnerSequence = next;
            }
            else {
                if (this.closed) {
                    this.next = next;
                    return next;
                }
                else {
                    this.currentInnerSequence = this.currentInnerSequence.then(next);
                }
            }
            return this;
        };
        SubSequenceNode.prototype.onStart = function () {
            this.currentInnerSequence = this.startingInnerSequence;
            if (this.currentInnerSequence)
                this.currentInnerSequence.onStart();
        };
        SubSequenceNode.prototype.update = function (dt) {
            if (this.currentInnerSequence) {
                if (!this.currentInnerSequence.hasFinish()) {
                    this.currentInnerSequence.update(dt);
                }
                else {
                    this.currentInnerSequence.onFinish();
                    this.currentInnerSequence = this.currentInnerSequence.next;
                    if (this.currentInnerSequence)
                        this.currentInnerSequence.onStart();
                }
            }
        };
        SubSequenceNode.prototype.onFinish = function () {
            if (this.currentInnerSequence)
                this.currentInnerSequence.onFinish();
        };
        SubSequenceNode.prototype.hasFinish = function () {
            return this.currentInnerSequence == null;
        };
        SubSequenceNode.prototype.getSequence = function () {
            if (this.currentInnerSequence) {
                var innerSeq = this.currentInnerSequence.getSequence();
                if (innerSeq instanceof SubSequenceNode) {
                    if (!innerSeq.closed) {
                        return innerSeq;
                    }
                }
            }
            return this;
        };
        return SubSequenceNode;
    }(SequenceNode));
    var IfSequenceNode = /** @class */ (function (_super) {
        __extends(IfSequenceNode, _super);
        function IfSequenceNode(condition) {
            var _this = _super.call(this) || this;
            _this.result = false;
            _this.condition = condition;
            return _this;
        }
        IfSequenceNode.prototype.onStart = function () {
            this.result = this.condition();
            if (this.result)
                _super.prototype.onStart.call(this);
            else
                this.currentInnerSequence = null;
        };
        return IfSequenceNode;
    }(SubSequenceNode));
    var ElseSequenceNode = /** @class */ (function (_super) {
        __extends(ElseSequenceNode, _super);
        function ElseSequenceNode(ifSequence) {
            var _this = _super.call(this) || this;
            _this.ifSequence = null;
            _this.ifSequence = ifSequence;
            return _this;
        }
        ElseSequenceNode.prototype.onStart = function () {
            if (this.ifSequence && !this.ifSequence.result)
                _super.prototype.onStart.call(this);
            else
                this.currentInnerSequence = null;
        };
        return ElseSequenceNode;
    }(SubSequenceNode));
    var WhileSequenceNode = /** @class */ (function (_super) {
        __extends(WhileSequenceNode, _super);
        function WhileSequenceNode(condition) {
            var _this = _super.call(this) || this;
            _this.breakWhile = false;
            _this.condition = condition;
            return _this;
        }
        WhileSequenceNode.prototype.onStart = function () {
            this.breakWhile = false;
            if (this.condition())
                _super.prototype.onStart.call(this);
            else
                this.currentInnerSequence = null;
        };
        WhileSequenceNode.prototype.update = function (dt) {
            if (this.currentInnerSequence) {
                if (!this.currentInnerSequence.hasFinish()) {
                    this.currentInnerSequence.update(dt);
                }
                else {
                    this.currentInnerSequence.onFinish();
                    this.currentInnerSequence = this.currentInnerSequence.next;
                    if (this.currentInnerSequence == null)
                        this.currentInnerSequence = this.startingInnerSequence;
                    if (this.currentInnerSequence)
                        this.currentInnerSequence.onStart();
                }
            }
        };
        WhileSequenceNode.prototype.hasFinish = function () {
            return this.breakWhile || !this.condition();
        };
        return WhileSequenceNode;
    }(SubSequenceNode));
    var BreakWhileSequenceNode = /** @class */ (function (_super) {
        __extends(BreakWhileSequenceNode, _super);
        function BreakWhileSequenceNode(whileNode) {
            var _this = _super.call(this) || this;
            _this.whileNode = whileNode;
            return _this;
        }
        BreakWhileSequenceNode.prototype.onStart = function () {
            this.whileNode.breakWhile = true;
        };
        return BreakWhileSequenceNode;
    }(SequenceNode));
});
define("node_modules/decentraland-ecs-utils/index", ["require", "exports", "node_modules/decentraland-ecs-utils/transform/component/move", "node_modules/decentraland-ecs-utils/transform/component/rotate", "node_modules/decentraland-ecs-utils/transform/component/scale", "node_modules/decentraland-ecs-utils/transform/component/followpath", "node_modules/decentraland-ecs-utils/transform/component/keeprotating", "node_modules/decentraland-ecs-utils/transform/system/transfromSystem", "node_modules/decentraland-ecs-utils/transform/math/interpolation", "node_modules/decentraland-ecs-utils/toggle/toggleComponent", "node_modules/decentraland-ecs-utils/timer/component/delay", "node_modules/decentraland-ecs-utils/timer/component/expire", "node_modules/decentraland-ecs-utils/timer/component/interval", "node_modules/decentraland-ecs-utils/helpers/helperfunctions", "node_modules/decentraland-ecs-utils/helpers/testCube", "node_modules/decentraland-ecs-utils/helpers/requests", "node_modules/decentraland-ecs-utils/triggers/triggerSystem", "node_modules/decentraland-ecs-utils/actionsSequenceSystem/actionsSequenceSystem"], function (require, exports, move_2, rotate_2, scale_2, followpath_2, keeprotating_2, transfromSystem_6, interpolation_4, toggleComponent_1, delay_2, expire_2, interval_2, helperfunctions_1, testCube_1, requests_1, triggerSystem_1, actionsSequenceSystem_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        TransformSystem: transfromSystem_6.TransformSystem,
        MoveTransformComponent: move_2.MoveTransformComponent,
        RotateTransformComponent: rotate_2.RotateTransformComponent,
        ScaleTransformComponent: scale_2.ScaleTransformComponent,
        FollowPathComponent: followpath_2.FollowPathComponent,
        FollowCurvedPathComponent: followpath_2.FollowCurvedPathComponent,
        KeepRotatingComponent: keeprotating_2.KeepRotatingComponent,
        Interpolate: interpolation_4.Interpolate,
        InterpolationType: interpolation_4.InterpolationType,
        ToggleComponent: toggleComponent_1.ToggleComponent,
        ToggleState: toggleComponent_1.ToggleState,
        Delay: delay_2.Delay,
        ExpireIn: expire_2.ExpireIn,
        Interval: interval_2.Interval,
        TriggerComponent: triggerSystem_1.TriggerComponent,
        TriggerSystem: triggerSystem_1.TriggerSystem,
        TriggerSphereShape: triggerSystem_1.TriggerSphereShape,
        TriggerBoxShape: triggerSystem_1.TriggerBoxShape,
        ActionsSequenceSystem: actionsSequenceSystem_1.ActionsSequenceSystem,
        map: helperfunctions_1.map,
        clamp: helperfunctions_1.clamp,
        addTestCube: testCube_1.addTestCube,
        addLabel: testCube_1.addLabel,
        sendRequest: requests_1.sendRequest,
        getEntityWorldPosition: helperfunctions_1.getEntityWorldPosition,
        getEntityWorldRotation: helperfunctions_1.getEntityWorldRotation
    };
});
define("src/game", ["require", "exports", "@decentraland/RestrictedActions", "node_modules/decentraland-ecs-utils/index"], function (require, exports, RestrictedActions, index_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var camera = Camera.instance;
    var SomeSystem = /** @class */ (function () {
        function SomeSystem(entity) {
            this.entity = entity;
        }
        SomeSystem.prototype.update = function () {
            var transform = this.entity.getComponent(Transform);
            transform.rotation = camera.rotation;
        };
        return SomeSystem;
    }());
    var min = 2.75; // number in minutes
    var gametime;
    var points = 0;
    var totals = 0;
    var result = 0;
    var gameStarted = false;
    var canvas = new UICanvas();
    var statusText = new UIText(canvas);
    statusText.value = "";
    statusText.vAlign = "bottom";
    statusText.hAlign = "center";
    statusText.fontSize = 25;
    statusText.width = 120;
    statusText.height = 30;
    statusText.color = Color4.Yellow();
    var countdownTimer = new Entity();
    var idoor = new Entity();
    engine.addEntity(idoor);
    idoor.addComponent(new GLTFShape("models/lama.gltf"));
    idoor.addComponent(new Transform({ position: new Vector3(4, 0, 4), rotation: Quaternion.Euler(0, 90, 0), }));
    idoor.addComponent(new OnPointerDown(function (_e) {
        home.addComponentOrReplace(new Transform({
            position: new Vector3(0, 0, 0),
        }));
        RestrictedActions.movePlayerTo({ x: 3, y: 25, z: 40 }, { x: 40, y: 0, z: 40 }),
            inventoryContainer.visible = true;
        bugscore.visible = true;
        if (!gameStarted) {
            gameStarted = true;
            gametime = Date.now() + (1000 * 60 * min);
            engine.addEntity(countdownTimer);
            updateCountdowntimer();
            countdownTimer.addComponentOrReplace(new index_1.default.Interval(1000, function () {
                updateCountdowntimer();
            }));
        }
    }, { hoverText: "Click to start!",
        distance: 50,
    }));
    engine.addSystem(new SomeSystem(idoor));
    var bugscore = new UIText(canvas);
    bugscore.width = 76;
    bugscore.height = 76;
    bugscore.hAlign = "right";
    bugscore.vAlign = "bottom";
    bugscore.positionY = 110;
    bugscore.positionX = -120;
    bugscore.fontSize = 25;
    bugscore.color = Color4.Black();
    var totalscore = new UIText(canvas);
    totalscore.width = 76;
    totalscore.height = 76;
    totalscore.hAlign = "right";
    totalscore.vAlign = "bottom";
    totalscore.positionY = 210;
    totalscore.positionX = -120;
    totalscore.fontSize = 25;
    totalscore.color = Color4.Black();
    totalscore.value = "";
    var home = new Entity();
    engine.addEntity(home);
    home.addComponent(new GLTFShape("models/home.gltf"));
    home.addComponent(new Transform({ position: new Vector3(0, 0, 0) }));
    var entity = new Entity('entity');
    engine.addEntity(entity);
    var gltfShape = new GLTFShape('models/grass/FloorBaseGrass_01.glb');
    entity.addComponent(gltfShape);
    var transform2 = new Transform({
        position: new Vector3(40, 0, 40),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(5, 1, 5),
    });
    entity.addComponentOrReplace(transform2);
    var imageTexture = new Texture('images/UI_Guestbook.png');
    var inventoryContainer = new UIContainerStack(canvas);
    inventoryContainer.adaptWidth = true;
    inventoryContainer.adaptHeight = true;
    inventoryContainer.width = 200;
    inventoryContainer.height = 75;
    inventoryContainer.positionY = 100;
    inventoryContainer.positionX = 0;
    inventoryContainer.color = Color4.Yellow();
    inventoryContainer.hAlign = "right";
    inventoryContainer.vAlign = "bottom";
    inventoryContainer.stackOrientation = UIStackOrientation.VERTICAL;
    inventoryContainer.opacity = 0.1;
    inventoryContainer.visible = true;
    var clickexit = new Entity();
    engine.addEntity(clickexit);
    clickexit.addComponent(new GLTFShape("models/home.glb"));
    clickexit.addComponent(new Transform({ position: new Vector3(0, 0, 0) }));
    clickexit.addComponent(new OnPointerDown(function (_e) {
        RestrictedActions.movePlayerTo({ x: 40, y: 3, z: 40 }, { x: 3, y: 50, z: 40 }),
            inventoryContainer.visible = false;
    }, { hoverText: "Exit!",
        distance: 5, }));
    var point1 = new Vector3(55, 0, 90);
    var point2 = new Vector3(55, 0, 75);
    var point3 = new Vector3(55, 0, 40);
    var point4 = new Vector3(55, 0, 4);
    var point5 = new Vector3(55, 0, -10);
    var point6 = new Vector3(25, 0, 90);
    var point7 = new Vector3(25, 0, 75);
    var point8 = new Vector3(25, 0, 40);
    var point9 = new Vector3(25, 0, 4);
    var point10 = new Vector3(25, 0, -10);
    var point11 = new Vector3(40, 0, 90);
    var point12 = new Vector3(40, 0, 75);
    var point13 = new Vector3(40, 0, 40);
    var point14 = new Vector3(40, 0, 4);
    var point15 = new Vector3(40, 222, -10);
    var point16 = new Vector3(70, 0, 90);
    var point17 = new Vector3(70, 0, 75);
    var point18 = new Vector3(70, 0, 40);
    var point19 = new Vector3(70, 0, 4);
    var point20 = new Vector3(70, 0, -10);
    var point21 = new Vector3(90, 0, 90);
    var point22 = new Vector3(90, 0, 75);
    var point23 = new Vector3(90, 0, 40);
    var point24 = new Vector3(90, 0, 4);
    var point25 = new Vector3(90, 222, -10);
    var Path1 = [point22, point24, point19, point17, point2, point4, point14, point11];
    var Path2 = [point6, point7, point8, point9, point10, point11];
    var Path3 = [point22, point17, point18, point19, point10, point21];
    var Path4 = [point15, point25, point15, point20, point6, point25];
    var Path5 = [point1, point7, point23, point14, point9, point21];
    var Path6 = [point21, point12, point4, point17, point20, point6];
    var Pathz = [point15, point25];
    var doorAudioSource = new AudioSource(new AudioClip("sounds/bang.wav"));
    var bonusAudioSource = new AudioSource(new AudioClip("sounds/bonus.wav"));
    var bug = new Entity();
    bug.addComponent(new GLTFShape('models/bug.glb'));
    bug.addComponent(new Transform({
        position: new Vector3(20, 500, 20),
        rotation: Quaternion.Euler(0, 0, 0),
        scale: new Vector3(2, 1, 2),
    }));
    bug.addComponent(new OnPointerDown(function () {
        doorAudioSource.playOnce();
        bugscore.visible = false;
        points = points + 10;
        totals = points;
        bugscore.value = totals.toString() + " points";
        bugscore.visible = true;
    }, {
        hoverText: "BANG!",
        distance: 500,
    }));
    engine.addEntity(bug);
    var spider = new Entity();
    spider.addComponent(new GLTFShape('models/spider.gltf'));
    spider.addComponent(new Transform({
        position: new Vector3(30, 500, 40),
        rotation: Quaternion.Euler(0, 90, 0),
        scale: new Vector3(2, 1, 2),
    }));
    spider.addComponent(new OnPointerDown(function () {
        doorAudioSource.playOnce();
        points = points + 222;
        totals = points;
        bugscore.value = totals.toString() + " points";
        bugscore.visible = true;
    }, {
        hoverText: "BANG!",
        distance: 500,
    }));
    engine.addEntity(spider);
    var spider2 = new Entity();
    spider2.addComponent(new GLTFShape('models/spider.gltf'));
    spider2.addComponent(new Transform({
        position: new Vector3(20, 500, 20),
        rotation: Quaternion.Euler(0, 90, 0),
        scale: new Vector3(2, 1, 2),
    }));
    spider2.addComponent(new OnPointerDown(function () {
        doorAudioSource.playOnce();
        points = points + 69;
        totals = points;
        bugscore.value = totals.toString() + " points";
        bugscore.visible = true;
    }, {
        hoverText: "BANG!",
        distance: 500,
    }));
    engine.addEntity(spider2);
    var jumper = new Entity();
    jumper.addComponent(new GLTFShape('models/jumper.glb'));
    jumper.addComponent(new Transform({
        position: new Vector3(20, 500, 20),
        rotation: Quaternion.Euler(0, 90, 0),
        scale: new Vector3(2, 1, 2),
    }));
    jumper.addComponent(new OnPointerDown(function () {
        doorAudioSource.playOnce();
        points = points + 200;
        totals = points;
        bugscore.value = totals.toString() + " points";
        bugscore.visible = true;
    }, {
        hoverText: "BANG!",
        distance: 500,
    }));
    var worm = new Entity();
    worm.addComponent(new GLTFShape('models/worm.glb'));
    worm.addComponent(new Transform({
        position: new Vector3(20, 500, 20),
        rotation: Quaternion.Euler(0, 90, 0),
        scale: new Vector3(2, 1, 2),
    }));
    worm.addComponent(new OnPointerDown(function () {
        bonusAudioSource.playOnce();
        points = points + 1000;
        totals = points;
        bugscore.value = totals.toString() + " points";
        bugscore.visible = true;
    }, {
        hoverText: "BANG!",
        distance: 500,
    }));
    engine.addEntity(jumper);
    engine.addEntity(worm);
    var StartPos = new Vector3(40, 0, 90);
    var EndPos = new Vector3(40, 0, 0);
    home.addComponent(doorAudioSource);
    clickexit.addComponent(bonusAudioSource);
    function updateCountdowntimer() {
        var distance = gametime - Date.now();
        if (distance > 165000) {
        }
        if (distance > 163000 && distance < 165000) {
            totalscore.value = "Ready?!";
        }
        if (distance > 160000 && distance < 163000) {
            totalscore.value = "Set..";
        }
        if (distance > 130000 && distance < 160000) {
            totalscore.value = "Wave 1";
            bug.addComponent(new index_1.default.FollowPathComponent(Path1, 30));
        }
        if (distance > 120000 && distance < 130000) {
            spider2.addComponent(new index_1.default.FollowPathComponent(Path2, 10));
            worm.addComponent(new index_1.default.FollowPathComponent(Path3, 10));
        }
        if (distance > 75000 && distance < 115000) {
            totalscore.value = "Wave 2";
            spider.addComponent(new index_1.default.FollowPathComponent(Path1, 20));
            jumper.addComponent(new index_1.default.FollowPathComponent(Path2, 10));
        }
        if (distance < 70000 && distance > 1) {
            totalscore.value = "Final Wave!";
            bug.addComponent(new index_1.default.FollowPathComponent(Path1, 20));
            spider.addComponent(new index_1.default.FollowPathComponent(Path2, 20));
            jumper.addComponent(new index_1.default.FollowPathComponent(Path4, 20));
            spider2.addComponent(new index_1.default.FollowPathComponent(Path5, 10));
            worm.addComponent(new index_1.default.FollowPathComponent(Path6, 10));
            spider2.addComponent(new index_1.default.MoveTransformComponent(StartPos, EndPos, 8));
        }
        if (distance < 1) {
            result = points;
            log('Game over');
            engine.removeEntity(countdownTimer);
            statusText.value = "Game Over! Try again.";
            gameStarted = false;
            totalscore.value = "Result: " + result.toString() + " points";
            points = points * 0;
        }
        else {
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            statusText.value = "Squash bugs! " + distance.toString();
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9kZWNlbnRyYWxhbmQtZWNzLXV0aWxzL3RyYW5zZm9ybS9jb21wb25lbnQvaXRyYW5zZm9ybWNvbXBvbmVudC50cyIsIi4uL25vZGVfbW9kdWxlcy9kZWNlbnRyYWxhbmQtZWNzLXV0aWxzL3RyYW5zZm9ybS9tYXRoL2ludGVycG9sYXRpb24udHMiLCIuLi9ub2RlX21vZHVsZXMvZGVjZW50cmFsYW5kLWVjcy11dGlscy90cmFuc2Zvcm0vY29tcG9uZW50L3JvdGF0ZS50cyIsIi4uL25vZGVfbW9kdWxlcy9kZWNlbnRyYWxhbmQtZWNzLXV0aWxzL3RyYW5zZm9ybS9jb21wb25lbnQvc2NhbGUudHMiLCIuLi9ub2RlX21vZHVsZXMvZGVjZW50cmFsYW5kLWVjcy11dGlscy90cmFuc2Zvcm0vY29tcG9uZW50L2ZvbGxvd3BhdGgudHMiLCIuLi9ub2RlX21vZHVsZXMvZGVjZW50cmFsYW5kLWVjcy11dGlscy90cmFuc2Zvcm0vY29tcG9uZW50L2tlZXByb3RhdGluZy50cyIsIi4uL25vZGVfbW9kdWxlcy9kZWNlbnRyYWxhbmQtZWNzLXV0aWxzL3RyYW5zZm9ybS9zeXN0ZW0vdHJhbnNmcm9tU3lzdGVtLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RlY2VudHJhbGFuZC1lY3MtdXRpbHMvdHJhbnNmb3JtL2NvbXBvbmVudC9tb3ZlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RlY2VudHJhbGFuZC1lY3MtdXRpbHMvdG9nZ2xlL3RvZ2dsZUNvbXBvbmVudC50cyIsIi4uL25vZGVfbW9kdWxlcy9kZWNlbnRyYWxhbmQtZWNzLXV0aWxzL3RpbWVyL2NvbXBvbmVudC9pdGltZXJjb21wb25lbnQudHMiLCIuLi9ub2RlX21vZHVsZXMvZGVjZW50cmFsYW5kLWVjcy11dGlscy90aW1lci9jb21wb25lbnQvaW50ZXJ2YWwudHMiLCIuLi9ub2RlX21vZHVsZXMvZGVjZW50cmFsYW5kLWVjcy11dGlscy90aW1lci9jb21wb25lbnQvZXhwaXJlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RlY2VudHJhbGFuZC1lY3MtdXRpbHMvdGltZXIvc3lzdGVtL3RpbWVyU3lzdGVtLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RlY2VudHJhbGFuZC1lY3MtdXRpbHMvdGltZXIvY29tcG9uZW50L2RlbGF5LnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RlY2VudHJhbGFuZC1lY3MtdXRpbHMvaGVscGVycy9oZWxwZXJmdW5jdGlvbnMudHMiLCIuLi9ub2RlX21vZHVsZXMvZGVjZW50cmFsYW5kLWVjcy11dGlscy9oZWxwZXJzL3Rlc3RDdWJlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RlY2VudHJhbGFuZC1lY3MtdXRpbHMvaGVscGVycy9yZXF1ZXN0cy50cyIsIi4uL25vZGVfbW9kdWxlcy9kZWNlbnRyYWxhbmQtZWNzLXV0aWxzL3RyaWdnZXJzL3RyaWdnZXJTeXN0ZW0udHMiLCIuLi9ub2RlX21vZHVsZXMvZGVjZW50cmFsYW5kLWVjcy11dGlscy9hY3Rpb25zU2VxdWVuY2VTeXN0ZW0vYWN0aW9uc1NlcXVlbmNlU3lzdGVtLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RlY2VudHJhbGFuZC1lY3MtdXRpbHMvaW5kZXgudHMiLCIuLi9zcmMvZ2FtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNBQSxJQUFZLGlCQUtYO0lBTEQsV0FBWSxpQkFBaUI7UUFDM0IsNkRBQU0sQ0FBQTtRQUNOLHFFQUFVLENBQUE7UUFDVix1RUFBVyxDQUFBO1FBQ1gsaUVBQVEsQ0FBQTtJQUNWLENBQUMsRUFMVyxpQkFBaUIsR0FBakIseUJBQWlCLEtBQWpCLHlCQUFpQixRQUs1QjtJQUVELFNBQWdCLFdBQVcsQ0FBQyxJQUF1QixFQUFFLENBQVM7UUFDNUQsUUFBUSxJQUFJLEVBQUU7WUFDWixLQUFLLGlCQUFpQixDQUFDLE1B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QUMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUN2RSxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDN0IsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDdkUsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzdCLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBQ3ZFLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUM3QixJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUN2RSxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDN0IsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDdkUsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzdCLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBRXZFLE9BQU8sSUFBSSxHQUFHLE1BQU0sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQTtRQUM3QyxDQUFDO1FBRWMsK0JBQWlCLEdBQWhDLFVBQ0Usb0JBQTZCLEVBQzdCLEtBQXNCO1lBRXRCLElBQUksTUFBTSxHQUFHLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUE7WUFDckQsT0FBTztnQkFDTCxNQUFNLEVBQUUsTUFBTTtnQkFDZCxHQUFHLEVBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDM0MsR0FBRyxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDdkMsQ0FBQTtRQUNILENBQUM7UUFyVGMsdUJBQVMsR0FBeUIsSUFBSSxDQUFBO1FBc1R2RCxvQkFBQztLQUFBLEFBdlRELElBdVRDO0lBdlRZLHNDQUFhO0lBeVQxQjtRQXNCRSx3QkFBWSxNQUFlO1lBckIzQixlQUFVLEdBQVksSUFBSSxDQUFBO1lBY2hCLFVBQUssR0FBVyxFQUFFLENBQUE7WUFDbEIsbUJBQWMsR0FBbUMsRUFBRSxDQUFBO1lBRXJELGFBQVEsR0FBWSxLQUFLLENBQUE7WUFDekIsaUJBQVksR0FBa0IsSUFBSSxDQUFBO1lBSXhDLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFBO1lBQ3JCLElBQUksTUFBTSxFQUFFO2dCQUNWLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO2dCQUNyRCxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUE7Z0JBQ3hCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUE7Z0JBQzFDLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtvQkFDakIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFBO2lCQUN0QjthQUNGO1FBQ0gsQ0FBQztRQTdCRCxzQkFBSSxrQ0FBTTtpQkFBVjtnQkFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUE7WUFDckIsQ0FBQzs7O1dBQUE7UUFDRCxzQkFBSSxtQ0FBTztpQkFBWDtnQkFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUE7WUFDdEIsQ0FBQzs7O1dBQUE7UUFDRCxzQkFBSSxnQ0FBSTtpQkFBUjtnQkFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUE7WUFDbkIsQ0FBQzs7O1dBQUE7UUF1QkQsMENBQWlCLEdBQWpCO1lBQ0UsSUFBSSxJQUFJLENBQUMsT0FBTztnQkFBRSxPQUFPLGNBQWMsQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7WUFDNUUsT0FBTyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUE7UUFDdkIsQ0FBQztRQUVELGlDQUFRLEdBQVI7WUFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFBO1FBQzVCLENBQUM7UUFFRCxtQ0FBVSxHQUFWO1lBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsRUFBRSxDQUFBO1FBQy9ELENBQUM7UUFFRCw0Q0FBbUIsR0FBbkI7WUFDRSxJQUFJLEdBQUcsR0FBcUIsRUFBRSxDQUFBO1lBRTlCLEtBQUssSUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtnQkFDckMsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRTtvQkFDM0MsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7aUJBQ25DO2FBQ0Y7WUFDRCxPQUFPLEdBQUcsQ0FBQTtRQUNaLENBQUM7UUFFRCwyQ0FBa0IsR0FBbEIsVUFBbUIsS0FBcUI7WUFDdEMsT0FBTyxDQUNMLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLFNBQVM7Z0JBQzVDLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FDeEMsQ0FBQTtRQUNILENBQUM7UUFFRCxpREFBd0IsR0FBeEIsVUFBeUIsS0FBcUI7WUFDNUMsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUN4QyxDQUFDO1FBRUQsd0NBQWUsR0FBZixVQUFnQixLQUFxQjtZQUNuQyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUE7UUFDekMsQ0FBQztRQUVELG9DQUFXLEdBQVg7WUFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUE7UUFDdEIsQ0FBQztRQUVLLHVDQUFjLEdBQXBCOzs7OztnQ0FDTSxxQkFBTSxDQUFDLDhCQUFhLEVBQUUsRUFBQTs7NEJBQTFCLElBQUksU0FBc0IsRUFBRTtnQ0FDMUIsc0JBQU07NkJBQ1A7NEJBRUQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLEVBQUU7Z0NBQ2xDLGNBQWMsQ0FBQyxjQUFjLEdBQUcsSUFBSSxRQUFRLEVBQUUsQ0FBQTtnQ0FDOUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFBOzZCQUM5Qzs0QkFFRCxJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxFQUFFO2dDQUM3QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksTUFBTSxFQUFFLENBQUE7Z0NBRTFCLFNBQVMsR0FBRyxJQUFJLFNBQVMsRUFBRSxDQUFBO2dDQUNqQyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQTtnQ0FDekMsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFBO2dDQUU3RCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUUsWUFBWSxlQUFlLEVBQUU7b0NBQ3hDLEtBQUssR0FBRyxJQUFJLFFBQVEsRUFBRSxDQUFBO29DQUM1QixLQUFLLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQTtvQ0FDNUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUE7b0NBQ3JDLFNBQVMsQ0FBQyxLQUFLLEdBQUksSUFBSSxDQUFDLFFBQVEsRUFBc0IsQ0FBQyxJQUFJLENBQUE7aUNBQzVEO2dDQUNELElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxZQUFZLGtCQUFrQixFQUFFO29DQUMzQyxLQUFLLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQTtvQ0FDL0IsS0FBSyxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUE7b0NBQzVCLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFBO29DQUNqQyxHQUFHLEdBQUksSUFBSSxDQUFDLFFBQVEsRUFBeUIsQ0FBQyxNQUFNLENBQUE7b0NBQ3hELFNBQVMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQTtpQ0FDN0M7NkJBQ0Y7NEJBQ0QsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUE7Ozs7O1NBQ3BDO1FBRUQsMENBQWlCLEdBQWpCO1lBQ0UsSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUk7Z0JBQUUsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUE7UUFDdkUsQ0FBQztRQUVELDBDQUFpQixHQUFqQjtZQUNFLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtnQkFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQzVCLFNBQVMsQ0FDVixDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFBO2FBQ3BFO1FBQ0gsQ0FBQztRQUVjLHFDQUFzQixHQUFyQyxVQUFzQyxNQUFlO1lBQ25ELElBQUksY0FBYyxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDO2dCQUNqRCxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFO2dCQUNqRCxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFBO1lBQ2xCLElBQUksWUFBWSxHQUFHLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQTtZQUVyQyxJQUFJLFlBQVksSUFBSSxJQUFJLEVBQUU7Z0JBQ3hCLElBQUksY0FBYyxHQUFHLFlBQVksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDO29CQUN2RCxDQUFDLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxRQUFRO29CQUMvQyxDQUFDLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQTtnQkFDdkIsT0FBTyxJQUFJLENBQUMsc0JBQXNCLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxDQUNsRCxjQUFjLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUN0QyxDQUFBO2FBQ0Y7WUFDRCxPQUFPLGNBQWMsQ0FBQTtRQUN2QixDQUFDO1FBdEhjLDZCQUFjLEdBQW9CLElBQUksQ0FBQTtRQXVIdkQscUJBQUM7S0FBQSxBQTNJRCxJQTJJQztJQUVEO1FBQTRCLGlDQUFjO1FBR3hDLHVCQUFZLEtBQTJDO1lBQXZELFlBQ0UsaUJBQU8sU0FHUjtZQUZDLEtBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFBO1lBQ25CLEtBQUksQ0FBQyxLQUFLLEdBQUcsZUFBZSxDQUFBOztRQUM5QixDQUFDO1FBRUQseUNBQWlCLEdBQWpCO1lBQ0UsT0FBTyxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQTtRQUNqQyxDQUFDO1FBRUQsZ0NBQVEsR0FBUjtZQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQTtRQUNwQixDQUFDO1FBRUQsZ0NBQVEsR0FBUixVQUFTLEtBQTJDO1lBQ2xELElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFBO1FBQ3JCLENBQUM7UUFFRCxrQ0FBVSxHQUFWO1lBQ0UsT0FBTyxLQUFLLENBQUE7UUFDZCxDQUFDO1FBRUQsMENBQWtCLEdBQWxCLFVBQW1CLEtBQXFCO1lBQ3RDLE9BQU8sS0FBSyxDQUFBO1FBQ2QsQ0FBQztRQUVELGdEQUF3QixHQUF4QixVQUF5QixLQUFxQixJQUFHLENBQUM7UUFFbEQsdUNBQWUsR0FBZixVQUFnQixLQUFxQixJQUFHLENBQUM7UUFDekMsbUNBQVcsR0FBWDtZQUNFLE9BQU8sS0FBSyxDQUFBO1FBQ2QsQ0FBQztRQUNILG9CQUFDO0lBQUQsQ0FBQyxBQW5DRCxDQUE0QixjQUFjLEdBbUN6QztJQUdEO1FBMENFOzs7O1dBSUc7UUFDSCwwQkFBWSxLQUEyQyxFQUFFLElBQWtCO1lBOUMzRTs7ZUFFRztZQUNILFlBQU8sR0FBWSxJQUFJLENBQUE7WUFLdkI7O2VBRUc7WUFDSCxVQUFLLEdBQVcsQ0FBQyxDQUFBO1lBQ2pCOztlQUVHO1lBQ0gscUJBQWdCLEdBQVcsQ0FBQyxDQUFBO1lBd0JwQixrQkFBYSxHQUFZLEtBQUssQ0FBQTtZQVFwQyxhQUFhLENBQUMsb0JBQW9CLEVBQUUsQ0FBQTtZQUNwQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQTtZQUNsQixJQUFJLElBQUksRUFBRTtnQkFDUixJQUFJLElBQUksQ0FBQyxLQUFLO29CQUFFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQTtnQkFDdkMsSUFBSSxJQUFJLENBQUMsZ0JBQWdCO29CQUFFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUE7Z0JBQ3hFLElBQUksSUFBSSxDQUFDLGNBQWM7b0JBQUUsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFBO2dCQUNsRSxJQUFJLElBQUksQ0FBQyxhQUFhO29CQUFFLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQTtnQkFDL0QsSUFBSSxJQUFJLENBQUMsYUFBYTtvQkFBRSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUE7Z0JBQy9ELElBQUksSUFBSSxDQUFDLFlBQVk7b0JBQUUsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFBO2dCQUM1RCxJQUFJLElBQUksQ0FBQyxXQUFXO29CQUFFLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQTthQUM1RDtRQUNILENBQUM7UUF2QkQsc0JBQUksMENBQVk7WUFIaEI7O2VBRUc7aUJBQ0g7Z0JBQ0UsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFBO1lBQzNCLENBQUM7OztXQUFBO1FBdENVLGdCQUFnQjtZQUQ1QixTQUFTLENBQUMsa0JBQWtCLENBQUM7V0FDakIsZ0JBQWdCLENBNEQ1QjtRQUFELHVCQUFDO0tBQUEsQUE1REQsSUE0REM7SUE1RFksNENBQWdCO0lBOEQ3Qjs7OztPQUlHO0lBQ0g7UUFJRSx5QkFBWSxJQUFjLEVBQUUsUUFBa0I7WUFDNUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUNoRCxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUE7UUFDdEQsQ0FBQztRQUNILHNCQUFDO0lBQUQsQ0FBQyxBQVJELElBUUM7SUFSWSwwQ0FBZTtJQVU1Qjs7OztPQUlHO0lBQ0g7UUFJRSw0QkFBWSxNQUFlLEVBQUUsUUFBa0I7WUFDN0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBQ2pDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQTtRQUN0RCxDQUFDO1FBQ0gseUJBQUM7SUFBRCxDQUFDLEFBUkQsSUFRQztJQVJZLGdEQUFrQjs7Ozs7O0lDcmxCL0I7UUFTRSwrQkFBWSxhQUFxRDtZQVJ6RCxzQkFBaUIsR0FBd0IsSUFBSSxDQUFBO1lBQzdDLHdCQUFtQixHQUF3QixJQUFJLENBQUE7WUFFL0MsWUFBTyxHQUFZLEtBQUssQ0FBQTtZQUN4QixZQUFPLEdBQVksS0FBSyxDQUFBO1lBSzlCLElBQUksYUFBYSxFQUFFO2dCQUNqQixJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFBO2FBQ2xDO1FBQ0gsQ0FBQztRQUVELDZDQUFhLEdBQWIsVUFBYyxhQUFvRDtZQUNoRSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsYUFBYSxDQUFDLGlCQUFpQixDQUFBO1lBQ3hELElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUE7WUFDakQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUE7WUFDbkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUE7UUFDdEIsQ0FBQztRQUVELG1EQUFtQixHQUFuQixVQUFvQixnQkFBNEI7WUFDOUMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGdCQUFnQixDQUFBO1FBQzFDLENBQUM7UUFFRCx5Q0FBUyxHQUFUO1lBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFBO1FBQ3JCLENBQUM7UUFFRCxvQ0FBSSxHQUFKO1lBQ0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUE7UUFDdEIsQ0FBQztRQUVELHNDQUFNLEdBQU47WUFDRSxJQUFJLElBQUksQ0FBQyxpQkFBaUIsSUFBSSxJQUFJLEVBQUU7Z0JBQ2xDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFBO2FBQ3BCO1FBQ0gsQ0FBQztRQUVELHFDQUFLLEdBQUw7WUFDRSxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFBO1lBQ2pELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFBO1lBQ25CLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFBO1FBQ3RCLENBQUM7UUFFRCxnREFBZ0IsR0FBaEI7WUFDRSxJQUFJLFdBQVcsR0FBd0IsSUFBSSxDQUFDLG1CQUFtQixDQUFBO1lBRS9ELElBQUksSUFBSSxDQUFDLG1CQUFtQixZQUFZLGVBQWUsRUFBRTtnQkFDdkQsR0FBRztvQkFDRCxXQUFXLEdBQUksV0FBK0IsQ0FBQyxvQkFBb0IsQ0FBQTtpQkFDcEUsUUFBUSxXQUFXLFlBQVksZUFBZSxFQUFDO2FBQ2pEO1lBQ0QsT0FBUSxXQUE0QixDQUFDLE1BQU0sQ0FBQTtRQUM3QyxDQUFDO1FBRUQsc0NBQU0sR0FBTixVQUFPLEVBQVU7WUFDZixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ2hCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO29CQUNqQixDQUFDO29CQUFDLElBQUksQ0FBQyxtQkFBb0MsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtvQkFDckQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUE7aUJBQ3BCO3FCQUFNO29CQUNMLElBQUksQ0FBRSxJQUFJLENBQUMsbUJBQW9DLENBQUMsU0FBUyxFQUFFLEVBQUU7d0JBQzNELENBQUM7d0JBQUMsSUFBSSxDQUFDLG1CQUFvQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQTtxQkFDdkQ7eUJBQU07d0JBQ0wsQ0FBQzt3QkFBQyxJQUFJLENBQUMsbUJBQW9DLENBQUMsUUFBUSxFQUFFLENBQUE7d0JBQ3RELElBQUksQ0FBQyxtQkFBbUIsR0FBSSxJQUFJOzZCQUM3QixtQkFBb0MsQ0FBQyxJQUFJLENBQUE7d0JBQzVDLElBQUksSUFBSSxDQUFDLG1CQUFtQixFQUFFOzRCQUM1QixJQUFJLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLENBQUE7eUJBQ25DOzZCQUFNOzRCQUNMLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFBOzRCQUNwQixJQUFJLElBQUksQ0FBQyxnQkFBZ0I7Z0NBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUE7eUJBQ25EO3FCQUNGO2lCQUNGO2FBQ0Y7UUFDSCxDQUFDO1FBQ0gsNEJBQUM7SUFBRCxDQUFDLEFBL0VELElBK0VDO0lBL0VZLHNEQUFxQjtJQWlGbEMsV0FBaUIscUJBQXFCO1FBUXBDO1lBQUE7Z0JBQ1Usd0JBQW1CLEdBQXdCLElBQUksQ0FBQTtnQkFDaEQsc0JBQWlCLEdBQXdCLElBQUksQ0FBQTtnQkFFNUMsbUJBQWMsR0FBd0IsRUFBRSxDQUFBO1lBK0ZsRCxDQUFDO1lBN0ZDLDhCQUFJLEdBQUosVUFBSyxNQUFxQztnQkFDeEMsSUFBSSxJQUFJLENBQUMsbUJBQW1CLElBQUksSUFBSSxFQUFFO29CQUNwQyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQTtvQkFDN0MsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUE7b0JBQ3hDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUE7aUJBQ2xEO3FCQUFNO29CQUNMLElBQUksSUFBSSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUE7b0JBQzdCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFBO29CQUNwQixJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtpQkFDL0Q7Z0JBQ0QsT0FBTyxJQUFJLENBQUE7WUFDYixDQUFDO1lBRUQsNEJBQUUsR0FBRixVQUFHLFNBQXdCO2dCQUN6QixJQUFJLEtBQUssR0FBRyxJQUFJLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQTtnQkFDekMsSUFBSSxJQUFJLENBQUMsbUJBQW1CLElBQUksSUFBSSxFQUFFO29CQUNwQyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsS0FBSyxDQUFBO29CQUNoQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFBO2lCQUMvQjtxQkFBTTtvQkFDTCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtpQkFDaEU7Z0JBQ0QsT0FBTyxJQUFJLENBQUE7WUFDYixDQUFDO1lBRUQsOEJBQUksR0FBSjtnQkFDRSxJQUFJLEdBQUcsR0FBSSxJQUFJLENBQUMsbUJBQW9DLENBQUMsV0FBVyxFQUFFLENBQUE7Z0JBQ2xFLElBQUksR0FBRyxZQUFZLGNBQWMsRUFBRTtvQkFDakMsR0FBRyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7b0JBQ2pCLElBQUksT0FBTyxHQUFHLElBQUksZ0JBQWdCLENBQUMsR0FBRyxDQUFDLENBQUE7b0JBQ3ZDLElBQUksQ0FBQyxtQkFBbUIsR0FBSSxJQUFJO3lCQUM3QixtQkFBb0MsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7aUJBQ3REO3FCQUFNO29CQUNMLE1BQU0sSUFBSSxLQUFLLENBQ2IsNERBQTRELENBQzdELENBQUE7aUJBQ0Y7Z0JBQ0QsT0FBTyxJQUFJLENBQUE7WUFDYixDQUFDO1lBRUQsK0JBQUssR0FBTDtnQkFDRSxJQUFJLEdBQUcsR0FBSSxJQUFJLENBQUMsbUJBQW9DLENBQUMsV0FBVyxFQUFFLENBQUE7Z0JBQ2xFLElBQUksR0FBRyxZQUFZLGNBQWMsSUFBSSxHQUFHLFlBQVksZ0JBQWdCLEVBQUU7b0JBQ3BFLEdBQUcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO2lCQUNsQjtxQkFBTTtvQkFDTCxNQUFNLElBQUksS0FBSyxDQUNiLDZEQUE2RCxDQUM5RCxDQUFBO2lCQUNGO2dCQUNELE9BQU8sSUFBSSxDQUFBO1lBQ2IsQ0FBQztZQUVELCtCQUFLLEdBQUwsVUFBTSxTQUF3QjtnQkFDNUIsSUFBSSxRQUFRLEdBQUcsSUFBSSxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsQ0FBQTtnQkFDL0MsSUFBSSxJQUFJLENBQUMsbUJBQW1CLElBQUksSUFBSSxFQUFFO29CQUNwQyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsUUFBUSxDQUFBO29CQUNuQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsUUFBUSxDQUFBO2lCQUNsQztxQkFBTTtvQkFDTCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtpQkFDbkU7Z0JBQ0QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7Z0JBQ2xDLE9BQU8sSUFBSSxDQUFBO1lBQ2IsQ0FBQztZQUVELGtDQUFRLEdBQVI7Z0JBQ0UsSUFBSSxHQUFHLEdBQUksSUFBSSxDQUFDLG1CQUFvQyxDQUFDLFdBQVcsRUFBRSxDQUFBO2dCQUNsRSxJQUFJLEdBQUcsWUFBWSxpQkFBaUIsRUFBRTtvQkFDcEMsR0FBRyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7b0JBQ2pCLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO3dCQUNsQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7cUJBQzlEO2lCQUNGO3FCQUFNO29CQUNMLE1BQU0sSUFBSSxLQUFLLENBQ2IsbUVBQW1FLENBQ3BFLENBQUE7aUJBQ0Y7Z0JBQ0QsT0FBTyxJQUFJLENBQUE7WUFDYixDQUFDO1lBRUQsb0NBQVUsR0FBVjtnQkFDRSxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtvQkFDbEMsSUFBSSxDQUFDLG1CQUFtQixHQUFJLElBQUk7eUJBQzdCLG1CQUFvQyxDQUFDLElBQUksQ0FDMUMsSUFBSSxzQkFBc0IsQ0FDeEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FDcEQsQ0FDRixDQUFBO2lCQUNGO3FCQUFNO29CQUNMLE1BQU0sSUFBSSxLQUFLLENBQ2IscUVBQXFFLENBQ3RFLENBQUE7aUJBQ0Y7Z0JBQ0QsT0FBTyxJQUFJLENBQUE7WUFDYixDQUFDO1lBQ0gsc0JBQUM7UUFBRCxDQUFDLEFBbkdELElBbUdDO1FBbkdZLHFDQUFlLGtCQW1HM0IsQ0FBQTtJQUNILENBQUMsRUE1R2dCLHFCQUFxQixHQUFyQiw2QkFBcUIsS0FBckIsNkJBQXFCLFFBNEdyQztJQTdMWSxzREFBcUI7SUErTGxDO1FBQUE7WUFDRSxXQUFNLEdBQXlDLElBQUksQ0FBQTtZQUNuRCxTQUFJLEdBQXdCLElBQUksQ0FBQTtRQTJCbEMsQ0FBQztRQXpCQywyQkFBSSxHQUFKLFVBQUssSUFBa0I7WUFDckIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUE7WUFDaEIsT0FBTyxJQUFJLENBQUE7UUFDYixDQUFDO1FBRUQsOEJBQU8sR0FBUDtZQUNFLElBQUksSUFBSSxDQUFDLE1BQU07Z0JBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQTtRQUN4QyxDQUFDO1FBRUQsNkJBQU0sR0FBTixVQUFPLEVBQVU7WUFDZixJQUFJLElBQUksQ0FBQyxNQUFNO2dCQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFBO1FBQ3pDLENBQUM7UUFFRCwrQkFBUSxHQUFSO1lBQ0UsSUFBSSxJQUFJLENBQUMsTUFBTTtnQkFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFBO1FBQ3pDLENBQUM7UUFFRCxnQ0FBUyxHQUFUO1lBQ0UsSUFBSSxJQUFJLENBQUMsTUFBTTtnQkFBRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFBOztnQkFDMUMsT0FBTyxJQUFJLENBQUE7UUFDbEIsQ0FBQztRQUVELGtDQUFXLEdBQVg7WUFDRSxPQUFPLElBQUksQ0FBQTtRQUNiLENBQUM7UUFDSCxtQkFBQztJQUFELENBQUMsQUE3QkQsSUE2QkM7SUFFRDtRQUE4QixtQ0FBWTtRQUExQztZQUFBLHFFQXdEQztZQXZEQywwQkFBb0IsR0FBd0IsSUFBSSxDQUFBO1lBQ2hELDJCQUFxQixHQUF3QixJQUFJLENBQUE7WUFDakQsWUFBTSxHQUFZLEtBQUssQ0FBQTs7UUFxRHpCLENBQUM7UUFuREMsOEJBQUksR0FBSixVQUFLLElBQWtCO1lBQ3JCLElBQUksSUFBSSxDQUFDLG9CQUFvQixJQUFJLElBQUksRUFBRTtnQkFDckMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQTtnQkFDaEMsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQTthQUNsQztpQkFBTTtnQkFDTCxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7b0JBQ2YsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUE7b0JBQ2hCLE9BQU8sSUFBSSxDQUFBO2lCQUNaO3FCQUFNO29CQUNMLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO2lCQUNqRTthQUNGO1lBQ0QsT0FBTyxJQUFJLENBQUE7UUFDYixDQUFDO1FBRUQsaUNBQU8sR0FBUDtZQUNFLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUE7WUFDdEQsSUFBSSxJQUFJLENBQUMsb0JBQW9CO2dCQUFFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtRQUNwRSxDQUFDO1FBRUQsZ0NBQU0sR0FBTixVQUFPLEVBQVU7WUFDZixJQUFJLElBQUksQ0FBQyxvQkFBb0IsRUFBRTtnQkFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLEVBQUUsRUFBRTtvQkFDMUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQTtpQkFDckM7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsRUFBRSxDQUFBO29CQUNwQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQTtvQkFDMUQsSUFBSSxJQUFJLENBQUMsb0JBQW9CO3dCQUFFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtpQkFDbkU7YUFDRjtRQUNILENBQUM7UUFFRCxrQ0FBUSxHQUFSO1lBQ0UsSUFBSSxJQUFJLENBQUMsb0JBQW9CO2dCQUFFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQTtRQUNyRSxDQUFDO1FBRUQsbUNBQVMsR0FBVDtZQUNFLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixJQUFJLElBQUksQ0FBQTtRQUMxQyxDQUFDO1FBRUQscUNBQVcsR0FBWDtZQUNFLElBQUksSUFBSSxDQUFDLG9CQUFvQixFQUFFO2dCQUM3QixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsV0FBVyxFQUFFLENBQUE7Z0JBQ3RELElBQUksUUFBUSxZQUFZLGVBQWUsRUFBRTtvQkFDdkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUU7d0JBQ3BCLE9BQU8sUUFBUSxDQUFBO3FCQUNoQjtpQkFDRjthQUNGO1lBQ0QsT0FBTyxJQUFJLENBQUE7UUFDYixDQUFDO1FBQ0gsc0JBQUM7SUFBRCxDQUFDLEFBeERELENBQThCLFlBQVksR0F3RHpDO0lBRUQ7UUFBNkIsa0NBQWU7UUFJMUMsd0JBQVksU0FBd0I7WUFBcEMsWUFDRSxpQkFBTyxTQUVSO1lBTEQsWUFBTSxHQUFZLEtBQUssQ0FBQTtZQUlyQixLQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQTs7UUFDNUIsQ0FBQztRQUVELGdDQUFPLEdBQVA7WUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQTtZQUM5QixJQUFJLElBQUksQ0FBQyxNQUFNO2dCQUFFLGlCQUFNLE9BQU8sV0FBRSxDQUFBOztnQkFDM0IsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQTtRQUN2QyxDQUFDO1FBQ0gscUJBQUM7SUFBRCxDQUFDLEFBZEQsQ0FBNkIsZUFBZSxHQWMzQztJQUVEO1FBQStCLG9DQUFlO1FBRzVDLDBCQUFZLFVBQTBCO1lBQXRDLFlBQ0UsaUJBQU8sU0FFUjtZQUxELGdCQUFVLEdBQTBCLElBQUksQ0FBQTtZQUl0QyxLQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQTs7UUFDOUIsQ0FBQztRQUVELGtDQUFPLEdBQVA7WUFDRSxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU07Z0JBQUUsaUJBQU0sT0FBTyxXQUFFLENBQUE7O2dCQUMxRCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFBO1FBQ3ZDLENBQUM7UUFDSCx1QkFBQztJQUFELENBQUMsQUFaRCxDQUErQixlQUFlLEdBWTdDO0lBRUQ7UUFBZ0MscUNBQWU7UUFJN0MsMkJBQVksU0FBd0I7WUFBcEMsWUFDRSxpQkFBTyxTQUVSO1lBTEQsZ0JBQVUsR0FBWSxLQUFLLENBQUE7WUFJekIsS0FBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUE7O1FBQzVCLENBQUM7UUFFRCxtQ0FBTyxHQUFQO1lBQ0UsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUE7WUFDdkIsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUFFLGlCQUFNLE9BQU8sV0FBRSxDQUFBOztnQkFDaEMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQTtRQUN2QyxDQUFDO1FBRUQsa0NBQU0sR0FBTixVQUFPLEVBQVU7WUFDZixJQUFJLElBQUksQ0FBQyxvQkFBb0IsRUFBRTtnQkFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLEVBQUUsRUFBRTtvQkFDMUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQTtpQkFDckM7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsRUFBRSxDQUFBO29CQUNwQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQTtvQkFDMUQsSUFBSSxJQUFJLENBQUMsb0JBQW9CLElBQUksSUFBSTt3QkFDbkMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQTtvQkFDeEQsSUFBSSxJQUFJLENBQUMsb0JBQW9CO3dCQUFFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtpQkFDbkU7YUFDRjtRQUNILENBQUM7UUFFRCxxQ0FBUyxHQUFUO1lBQ0UsT0FBTyxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFBO1FBQzdDLENBQUM7UUFDSCx3QkFBQztJQUFELENBQUMsQUFoQ0QsQ0FBZ0MsZUFBZSxHQWdDOUM7SUFFRDtRQUFxQywwQ0FBWTtRQUcvQyxnQ0FBWSxTQUE0QjtZQUF4QyxZQUNFLGlCQUFPLFNBRVI7WUFEQyxLQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQTs7UUFDNUIsQ0FBQztRQUVELHdDQUFPLEdBQVA7WUFDRSxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUE7UUFDbEMsQ0FBQztRQUNILDZCQUFDO0lBQUQsQ0FBQyxBQVhELENBQXFDLFlBQVksR0FXaEQ7Ozs7O0lDbFVELGtCQUFlO1FBQ2IsZUFBZSxtQ0FBQTtRQUNmLHNCQUFzQiwrQkFBQTtRQUN0Qix3QkFBd0IsbUNBQUE7UUFDeEIsdUJBQXVCLGlDQUFBO1FBQ3ZCLG1CQUFtQixrQ0FBQTtRQUNuQix5QkFBeUIsd0NBQUE7UUFDekIscUJBQXFCLHNDQUFBO1FBQ3JCLFdBQVcsNkJBQUE7UUFDWCxpQkFBaUIsbUNBQUE7UUFDakIsZUFBZSxtQ0FBQTtRQUNmLFdBQVcsK0JBQUE7UUFDWCxLQUFLLGVBQUE7UUFDTCxRQUFRLG1CQUFBO1FBQ1IsUUFBUSxxQkFBQTtRQUNSLGdCQUFnQixrQ0FBQTtRQUNoQixhQUFhLCtCQUFBO1FBQ2Isa0JBQWtCLG9DQUFBO1FBQ2xCLGVBQWUsaUNBQUE7UUFDZixxQkFBcUIsK0NBQUE7UUFDckIsR0FBRyx1QkFBQTtRQUNILEtBQUsseUJBQUE7UUFDTCxXQUFXLHdCQUFBO1FBQ1gsUUFBUSxxQkFBQTtRQUNSLFdBQVcsd0JBQUE7UUFDWCxzQkFBc0IsMENBQUE7UUFDdEIsc0JBQXNCLDBDQUFBO0tBQ3ZCLENBQUE7Ozs7O0lDckRELElBQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUE7SUFFOUI7UUFFRSxvQkFBWSxNQUFjO1lBQ3hCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFBO1FBQ3RCLENBQUM7UUFFRCwyQkFBTSxHQUFOO1lBQ0UsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUE7WUFDckQsU0FBUyxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFBO1FBQ3RDLENBQUM7UUFDSCxpQkFBQztJQUFELENBQUMsQUFWRCxJQVVDO0lBRUQsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFBLENBQUMsb0JBQW9CO0lBQ25DLElBQUksUUFBZ0IsQ0FBQTtJQUNwQixJQUFJLE1BQU0sR0FBVyxDQUFDLENBQUM7SUFDdkIsSUFBSSxNQUFNLEdBQVcsQ0FBQyxDQUFDO0lBQ3ZCLElBQUksTUFBTSxHQUFXLENBQUMsQ0FBQztJQUN2QixJQUFJLFdBQVcsR0FBRyxLQUFLLENBQUE7SUFFdkIsSUFBTSxNQUFNLEdBQUcsSUFBSSxRQUFRLEVBQUUsQ0FBQTtJQUM3QixJQUFNLFVBQVUsR0FBRyxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUNyQyxVQUFVLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQTtJQUNyQixVQUFVLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQTtJQUM1QixVQUFVLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQTtJQUM1QixVQUFVLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQTtJQUN4QixVQUFVLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQTtJQUN0QixVQUFVLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQTtJQUN0QixVQUFVLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQTtJQUVsQyxJQUFJLGNBQWMsR0FBRyxJQUFJLE1BQU0sRUFBRSxDQUFBO0lBRWpDLElBQU0sS0FBSyxHQUFHLElBQUksTUFBTSxFQUFFLENBQUE7SUFDMUIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUN2QixLQUFLLENBQUMsWUFBWSxDQUFDLElBQUksU0FBUyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQTtJQUNyRCxLQUFLLENBQUMsWUFBWSxDQUFDLElBQUksU0FBUyxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksT0FBTyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUUzRyxLQUFLLENBQUMsWUFBWSxDQUNoQixJQUFJLGFBQWEsQ0FDZixVQUFDLEVBQUU7UUFDRCxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxTQUFTLENBQUM7WUFDckMsUUFBUSxFQUFFLElBQUksT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBRS9CLENBQUMsQ0FBQyxDQUFDO1FBQ04saUJBQWlCLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUM7WUFDNUUsa0JBQWtCLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNsQyxRQUFRLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUcxQixJQUFHLENBQUMsV0FBVyxFQUFDO1lBQ2QsV0FBVyxHQUFHLElBQUksQ0FBQTtZQUNsQixRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsSUFBSSxHQUFHLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQTtZQUN6QyxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxDQUFBO1lBQ2hDLG9CQUFvQixFQUFFLENBQUE7WUFDdEIsY0FBYyxDQUFDLHFCQUFxQixDQUFDLElBQUksZUFBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUU7Z0JBQzVELG9CQUFvQixFQUFFLENBQUE7WUFDeEIsQ0FBQyxDQUFDLENBQUMsQ0FBQTtTQUNKO0lBR0gsQ0FBQyxFQUNELEVBQUUsU0FBUyxFQUFFLGlCQUFpQjtRQUM5QixRQUFRLEVBQUUsRUFBRTtLQUViLENBQ0EsQ0FDRixDQUFBO0lBRUQsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFBO0lBS3ZDLElBQU0sUUFBUSxHQUFHLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQ25DLFFBQVEsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFBO0lBQ25CLFFBQVEsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFBO0lBQ3BCLFFBQVEsQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFBO0lBQ3pCLFFBQVEsQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFBO0lBQzFCLFFBQVEsQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFBO0lBQ3hCLFFBQVEsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxHQUFHLENBQUE7SUFDekIsUUFBUSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUE7SUFDdEIsUUFBUSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUE7SUFHL0IsSUFBTSxVQUFVLEdBQUcsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDckMsVUFBVSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUE7SUFDckIsVUFBVSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUE7SUFDdEIsVUFBVSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUE7SUFDM0IsVUFBVSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUE7SUFDNUIsVUFBVSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUE7SUFDMUIsVUFBVSxDQUFDLFNBQVMsR0FBRyxDQUFDLEdBQUcsQ0FBQTtJQUMzQixVQUFVLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQTtJQUN4QixVQUFVLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQTtJQUNqQyxVQUFVLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQTtJQUdyQixJQUFNLElBQUksR0FBRyxJQUFJLE1BQU0sRUFBRSxDQUFBO0lBQ3pCLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDdEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUE7SUFDcEQsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLFNBQVMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBRXJFLElBQU0sTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQ25DLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDeEIsSUFBTSxTQUFTLEdBQUcsSUFBSSxTQUFTLENBQzdCLG9DQUFvQyxDQUNyQyxDQUFBO0lBQ0QsTUFBTSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQTtJQUM5QixJQUFNLFVBQVUsR0FBRyxJQUFJLFNBQVMsQ0FBQztRQUMvQixRQUFRLEVBQUUsSUFBSSxPQUFPLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7UUFDaEMsUUFBUSxFQUFFLElBQUksVUFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNwQyxLQUFLLEVBQUUsSUFBSSxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7S0FDNUIsQ0FBQyxDQUFBO0lBQ0YsTUFBTSxDQUFDLHFCQUFxQixDQUFDLFVBQVUsQ0FBQyxDQUFBO0lBSXhDLElBQU0sWUFBWSxHQUFHLElBQUksT0FBTyxDQUFDLHlCQUF5QixDQUFDLENBQUE7SUFHM0QsSUFBTSxrQkFBa0IsR0FBRyxJQUFJLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQ3ZELGtCQUFrQixDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUE7SUFDcEMsa0JBQWtCLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQTtJQUNyQyxrQkFBa0IsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFBO0lBQzlCLGtCQUFrQixDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUE7SUFDOUIsa0JBQWtCLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQTtJQUNsQyxrQkFBa0IsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFBO0lBQ2hDLGtCQUFrQixDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUE7SUFDMUMsa0JBQWtCLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQTtJQUNuQyxrQkFBa0IsQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFBO0lBQ3BDLGtCQUFrQixDQUFDLGdCQUFnQixHQUFHLGtCQUFrQixDQUFDLFFBQVEsQ0FBQTtJQUNqRSxrQkFBa0IsQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFBO0lBQ2hDLGtCQUFrQixDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUE7SUFHakMsSUFBTSxTQUFTLEdBQUcsSUFBSSxNQUFNLEVBQUUsQ0FBQTtJQUM5QixNQUFNLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBQzNCLFNBQVMsQ0FBQyxZQUFZLENBQUMsSUFBSSxTQUFTLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFBO0lBQ3hELFNBQVMsQ0FBQyxZQUFZLENBQUMsSUFBSSxTQUFTLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMxRSxTQUFTLENBQUMsWUFBWSxDQUVwQixJQUFJLGFBQWEsQ0FDZixVQUFDLEVBQUU7UUFDRCxpQkFBaUIsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQztZQUM1RSxrQkFBa0IsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFBO0lBRXRDLENBQUMsRUFDRCxFQUFFLFNBQVMsRUFBRSxPQUFPO1FBQ3BCLFFBQVEsRUFBRSxDQUFDLEdBQUksQ0FDaEIsQ0FDRixDQUFBO0lBUUMsSUFBTSxNQUFNLEdBQUcsSUFBSSxPQUFPLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQTtJQUNyQyxJQUFNLE1BQU0sR0FBRyxJQUFJLE9BQU8sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFBO0lBQ3JDLElBQU0sTUFBTSxHQUFHLElBQUksT0FBTyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUE7SUFDckMsSUFBTSxNQUFNLEdBQUcsSUFBSSxPQUFPLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtJQUNwQyxJQUFNLE1BQU0sR0FBRyxJQUFJLE9BQU8sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUE7SUFDdEMsSUFBTSxNQUFNLEdBQUcsSUFBSSxPQUFPLENBQUMsRUFBRSxFQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQTtJQUNwQyxJQUFNLE1BQU0sR0FBRyxJQUFJLE9BQU8sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFBO0lBQ3JDLElBQU0sTUFBTSxHQUFHLElBQUksT0FBTyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUE7SUFDckMsSUFBTSxNQUFNLEdBQUcsSUFBSSxPQUFPLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtJQUNwQyxJQUFNLE9BQU8sR0FBRyxJQUFJLE9BQU8sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUE7SUFDdkMsSUFBTSxPQUFPLEdBQUcsSUFBSSxPQUFPLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQTtJQUN0QyxJQUFNLE9BQU8sR0FBRyxJQUFJLE9BQU8sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFBO0lBQ3RDLElBQU0sT0FBTyxHQUFHLElBQUksT0FBTyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUE7SUFDdEMsSUFBTSxPQUFPLEdBQUcsSUFBSSxPQUFPLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtJQUNyQyxJQUFNLE9BQU8sR0FBRyxJQUFJLE9BQU8sQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUE7SUFDekMsSUFBTSxPQUFPLEdBQUcsSUFBSSxPQUFPLENBQUMsRUFBRSxFQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQTtJQUNyQyxJQUFNLE9BQU8sR0FBRyxJQUFJLE9BQU8sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFBO0lBQ3RDLElBQU0sT0FBTyxHQUFHLElBQUksT0FBTyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUE7SUFDdEMsSUFBTSxPQUFPLEdBQUcsSUFBSSxPQUFPLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtJQUNyQyxJQUFNLE9BQU8sR0FBRyxJQUFJLE9BQU8sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUE7SUFDdkMsSUFBTSxPQUFPLEdBQUcsSUFBSSxPQUFPLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQTtJQUN0QyxJQUFNLE9BQU8sR0FBRyxJQUFJLE9BQU8sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFBO0lBQ3RDLElBQU0sT0FBTyxHQUFHLElBQUksT0FBTyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUE7SUFDdEMsSUFBTSxPQUFPLEdBQUcsSUFBSSxPQUFPLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtJQUNyQyxJQUFNLE9BQU8sR0FBRyxJQUFJLE9BQU8sQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUE7SUFFM0MsSUFBTSxLQUFLLEdBQUcsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUE7SUFDcEYsSUFBTSxLQUFLLEdBQUcsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFBO0lBQ2hFLElBQU0sS0FBSyxHQUFHLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVB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Q0FBQyxJQUFJLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzlFLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN0RSxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7WUFDMUQsVUFBVSxDQUFDLEtBQUssR0FBRyxlQUFlLEdBQUcsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFBO1NBQ3ZEO0lBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBpbnRlcmZhY2UgSVRyYW5zZm9ybUNvbXBvbmVudCB7XG4gIG9uRmluaXNoQ2FsbGJhY2s/OiAoKSA9PiB2b2lkXG4gIHVwZGF0ZShkdDogbnVtYmVyKTogdm9pZFxuICBoYXNGaW5pc2hlZCgpOiBib29sZWFuXG4gIGFzc2lnblZhbHVlVG9UcmFuc2Zvcm0odHJhbnNmb3JtOiBUcmFuc2Zvcm0pOiB2b2lkXG59XG4iLCJleHBvcnQgZW51bSBJbnRlcnBvbGF0aW9uVHlwZSB7XG4gIExJTkVBUixcbiAgRUFTRUlOUVVBRCxcbiAgRUFTRU9VVFFVQUQsXG4gIEVBU0VRVUFEXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBJbnRlcnBvbGF0ZSh0eXBlOiBJbnRlcnBvbGF0aW9uVHlwZSwgdDogbnVtYmVyKTogbnVtYmVyIHtcbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBJbnRlcnBvbGF0aW9uVHlwZS5MSU5FQVI6XG4gICAgICByZXR1cm4gSW50ZXJwb2xhdGVMaW5lYXIodClcbiAgICBjYXNlIEludGVycG9sYXRpb25UeXBlLkVBU0VJTlFVQUQ6XG4gICAgICByZXR1cm4gSW50ZXJwb2xhdGVFYXNlSW5RdWFkKHQpXG4gICAgY2FzZSBJbnRlcnBvbGF0aW9uVHlwZS5FQVNFT1VUUVVBRDpcbiAgICAgIHJldHVybiBJbnRlcnBvbGF0ZUVhc2VPdXRRdWFkKHQpXG4gICAgY2FzZSBJbnRlcnBvbGF0aW9uVHlwZS5FQVNFUVVBRDpcbiAgICAgIHJldHVybiBJbnRlcnBvbGF0ZUVhc2VRdWFkKHQpXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBJbnRlcnBvbGF0ZUxpbmVhcih0KVxuICB9XG59XG5mdW5jdGlvbiBJbnRlcnBvbGF0ZUxpbmVhcih0OiBudW1iZXIpOiBudW1iZXIge1xuICByZXR1cm4gdFxufVxuZnVuY3Rpb24gSW50ZXJwb2xhdGVFYXNlSW5RdWFkKHQ6IG51bWJlcik6IG51bWJlciB7XG4gIHJldHVybiB0ICogdFxufVxuZnVuY3Rpb24gSW50ZXJwb2xhdGVFYXNlT3V0UXVhZCh0OiBudW1iZXIpOiBudW1iZXIge1xuICByZXR1cm4gdCAqICgyIC0gdClcbn1cbmZ1bmN0aW9uIEludGVycG9sYXRlRWFzZVF1YWQodDogbnVtYmVyKTogbnVtYmVyIHtcbiAgcmV0dXJuICh0ICogdCkgLyAoMi4wICogKHQgKiB0IC0gdCkgKyAxLjApXG59XG4iLCJpbXBvcnQgeyBJVHJhbnNmb3JtQ29tcG9uZW50IH0gZnJvbSAnLi9pdHJhbnNmb3JtY29tcG9uZW50J1xuaW1wb3J0IHsgVHJhbnNmb3JtU3lzdGVtIH0gZnJvbSAnLi4vc3lzdGVtL3RyYW5zZnJvbVN5c3RlbSdcbmltcG9ydCB7IEludGVycG9sYXRpb25UeXBlLCBJbnRlcnBvbGF0ZSB9IGZyb20gJy4uL21hdGgvaW50ZXJwb2xhdGlvbidcblxuLyoqXG4gKiBDb21wb25lbnQgdG8gcm90YXRlIGVudGl0eSBmcm9tIG9uZSByb3RhdGlvbiAoc3RhcnQpIHRvIGFub3RoZXIgKGVuZCkgaW4gYW4gYW1vdW50IG9mIHRpbWVcbiAqL1xuQENvbXBvbmVudCgncm90YXRlVHJhbnNmb3JtQ29tcG9uZW50JylcbmV4cG9ydCBjbGFzcyBSb3RhdGVUcmFuc2Zvcm1Db21wb25lbnQgaW1wbGVtZW50cyBJVHJhbnNmb3JtQ29tcG9uZW50IHtcbiAgcHJpdmF0ZSBzdGFydDogUmVhZE9ubHlRdWF0ZXJuaW9uXG4gIHByaXZhdGUgZW5kOiBSZWFkT25seVF1YXRlcm5pb25cbiAgcHJpdmF0ZSBzcGVlZDogbnVtYmVyXG4gIHByaXZhdGUgbm9ybWFsaXplZFRpbWU6IG51bWJlclxuICBwcml2YXRlIGludGVycG9sYXRpb25UeXBlOiBJbnRlcnBvbGF0aW9uVHlwZVxuICBwcml2YXRlIGxlcnBUaW1lOiBudW1iZXJcblxuICBvbkZpbmlzaENhbGxiYWNrPzogKCkgPT4gdm9pZFxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBSb3RhdGVUcmFuc2Zvcm1Db21wb25lbnQgaW5zdGFuY2UgdG8gYWRkIGFzIGEgY29tcG9uZW50IHRvIGEgRW50aXR5XG4gICAqIEBwYXJhbSB7UmVhZE9ubHlRdWF0ZXJuaW9ufSBzdGFydCBzdGFydGluZyByb3RhdGlvblxuICAgKiBAcGFyYW0ge1JlYWRPbmx5UXVhdGVybmlvbn0gZW5kIGVuZGluZyByb3RhdGlvblxuICAgKiBAcGFyYW0ge251bWJlcn0gZHVyYXRpb24gZHVyYXRpb24gKGluIHNlY29uZHMpIG9mIHN0YXJ0IHRvIGVuZCByb3RhdGlvblxuICAgKiBAcGFyYW0geygpID0+IHZvaWR9IG9uRmluaXNoQ2FsbGJhY2sgY2FsbGVkIHdoZW4gcm90YXRpb24gZW5kc1xuICAgKiBAcGFyYW0ge0ludGVycG9sYXRpb25UeXBlfSBpbnRlcnBvbGF0aW9uVHlwZSB0eXBlIG9mIGludGVycG9sYXRpb24gdG8gYmUgdXNlZCAoZGVmYXVsdDogTElORUFSKVxuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgc3RhcnQ6IFJlYWRPbmx5UXVhdGVybmlvbixcbiAgICBlbmQ6IFJlYWRPbmx5UXVhdGVybmlvbixcbiAgICBkdXJhdGlvbjogbnVtYmVyLFxuICAgIG9uRmluaXNoQ2FsbGJhY2s/OiAoKSA9PiB2b2lkLFxuICAgIGludGVycG9sYXRpb25UeXBlOiBJbnRlcnBvbGF0aW9uVHlwZSA9IEludGVycG9sYXRpb25UeXBlLkxJTkVBUlxuICApIHtcbiAgICB0aGlzLnN0YXJ0ID0gc3RhcnRcbiAgICB0aGlzLmVuZCA9IGVuZFxuICAgIHRoaXMubm9ybWFsaXplZFRpbWUgPSAwXG4gICAgdGhpcy5sZXJwVGltZSA9IDBcbiAgICB0aGlzLm9uRmluaXNoQ2FsbGJhY2sgPSBvbkZpbmlzaENhbGxiYWNrXG4gICAgdGhpcy5pbnRlcnBvbGF0aW9uVHlwZSA9IGludGVycG9sYXRpb25UeXBlXG5cbiAgICBpZiAoZHVyYXRpb24gIT0gMCkge1xuICAgICAgdGhpcy5zcGVlZCA9IDEgLyBkdXJhdGlvblxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNwZWVkID0gMFxuICAgICAgdGhpcy5ub3JtYWxpemVkVGltZSA9IDFcbiAgICAgIHRoaXMubGVycFRpbWUgPSAxXG4gICAgfVxuXG4gICAgVHJhbnNmb3JtU3lzdGVtLmNyZWF0ZUFuZEFkZFRvRW5naW5lKClcbiAgfVxuXG4gIHVwZGF0ZShkdDogbnVtYmVyKSB7XG4gICAgdGhpcy5ub3JtYWxpemVkVGltZSA9IFNjYWxhci5DbGFtcChcbiAgICAgIHRoaXMubm9ybWFsaXplZFRpbWUgKyBkdCAqIHRoaXMuc3BlZWQsXG4gICAgICAwLFxuICAgICAgMVxuICAgIClcbiAgICB0aGlzLmxlcnBUaW1lID0gSW50ZXJwb2xhdGUodGhpcy5pbnRlcnBvbGF0aW9uVHlwZSwgdGhpcy5ub3JtYWxpemVkVGltZSlcbiAgfVxuXG4gIGhhc0ZpbmlzaGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm5vcm1hbGl6ZWRUaW1lID49IDFcbiAgfVxuXG4gIGFzc2lnblZhbHVlVG9UcmFuc2Zvcm0odHJhbnNmb3JtOiBUcmFuc2Zvcm0pIHtcbiAgICB0cmFuc2Zvcm0ucm90YXRpb24gPSBRdWF0ZXJuaW9uLlNsZXJwKHRoaXMuc3RhcnQsIHRoaXMuZW5kLCB0aGlzLmxlcnBUaW1lKVxuICB9XG59XG4iLCJpbXBvcnQgeyBJVHJhbnNmb3JtQ29tcG9uZW50IH0gZnJvbSAnLi9pdHJhbnNmb3JtY29tcG9uZW50J1xuaW1wb3J0IHsgVHJhbnNmb3JtU3lzdGVtIH0gZnJvbSAnLi4vc3lzdGVtL3RyYW5zZnJvbVN5c3RlbSdcbmltcG9ydCB7IEludGVycG9sYXRpb25UeXBlLCBJbnRlcnBvbGF0ZSB9IGZyb20gJy4uL21hdGgvaW50ZXJwb2xhdGlvbidcblxuLyoqXG4gKiBDb21wb25lbnQgdG8gc2NhbGUgZW50aXR5IGZyb20gb25lIHZhbHVlIChzdGFydCkgdG8gYW5vdGhlciAoZW5kKSBpbiBhbiBhbW91bnQgb2YgdGltZVxuICovXG5AQ29tcG9uZW50KCdzY2FsZVRyYW5zZm9ybUNvbXBvbmVudCcpXG5leHBvcnQgY2xhc3MgU2NhbGVUcmFuc2Zvcm1Db21wb25lbnQgaW1wbGVtZW50cyBJVHJhbnNmb3JtQ29tcG9uZW50IHtcbiAgcHJpdmF0ZSBzdGFydDogUmVhZE9ubHlWZWN0b3IzXG4gIHByaXZhdGUgZW5kOiBSZWFkT25seVZlY3RvcjNcbiAgcHJpdmF0ZSBzcGVlZDogbnVtYmVyXG4gIHByaXZhdGUgbm9ybWFsaXplZFRpbWU6IG51bWJlclxuICBwcml2YXRlIGludGVycG9sYXRpb25UeXBlOiBJbnRlcnBvbGF0aW9uVHlwZVxuICBwcml2YXRlIGxlcnBUaW1lOiBudW1iZXJcblxuICBvbkZpbmlzaENhbGxiYWNrPzogKCkgPT4gdm9pZFxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBTY2FsZVRyYW5zZm9ybUNvbXBvbmVudCBpbnN0YW5jZSB0byBhZGQgYXMgYSBjb21wb25lbnQgdG8gYSBFbnRpdHlcbiAgICogQHBhcmFtIHtSZWFkT25seVZlY3RvcjN9IHN0YXJ0IHN0YXJ0aW5nIHNjYWxlXG4gICAqIEBwYXJhbSB7UmVhZE9ubHlWZWN0b3IzfSBlbmQgZW5kaW5nIHNjYWxlXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBkdXJhdGlvbiBkdXJhdGlvbiAoaW4gc2Vjb25kcykgb2Ygc3RhcnQgdG8gZW5kIHNjYWxpbmdcbiAgICogQHBhcmFtIHsoKSA9PiB2b2lkfSBvbkZpbmlzaENhbGxiYWNrIGNhbGxlZCB3aGVuIHNjYWxpbmcgZW5kc1xuICAgKiBAcGFyYW0ge0ludGVycG9sYXRpb25UeXBlfSBpbnRlcnBvbGF0aW9uVHlwZSB0eXBlIG9mIGludGVycG9sYXRpb24gdG8gYmUgdXNlZCAoZGVmYXVsdDogTElORUFSKVxuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgc3RhcnQ6IFJlYWRPbmx5VmVjdG9yMyxcbiAgICBlbmQ6IFJlYWRPbmx5VmVjdG9yMyxcbiAgICBkdXJhdGlvbjogbnVtYmVyLFxuICAgIG9uRmluaXNoQ2FsbGJhY2s/OiAoKSA9PiB2b2lkLFxuICAgIGludGVycG9sYXRpb25UeXBlOiBJbnRlcnBvbGF0aW9uVHlwZSA9IEludGVycG9sYXRpb25UeXBlLkxJTkVBUlxuICApIHtcbiAgICB0aGlzLnN0YXJ0ID0gc3RhcnRcbiAgICB0aGlzLmVuZCA9IGVuZFxuICAgIHRoaXMubm9ybWFsaXplZFRpbWUgPSAwXG4gICAgdGhpcy5sZXJwVGltZSA9IDBcbiAgICB0aGlzLm9uRmluaXNoQ2FsbGJhY2sgPSBvbkZpbmlzaENhbGxiYWNrXG4gICAgdGhpcy5pbnRlcnBvbGF0aW9uVHlwZSA9IGludGVycG9sYXRpb25UeXBlXG5cbiAgICBpZiAoZHVyYXRpb24gIT0gMCkge1xuICAgICAgdGhpcy5zcGVlZCA9IDEgLyBkdXJhdGlvblxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNwZWVkID0gMFxuICAgICAgdGhpcy5ub3JtYWxpemVkVGltZSA9IDFcbiAgICAgIHRoaXMubGVycFRpbWUgPSAxXG4gICAgfVxuXG4gICAgVHJhbnNmb3JtU3lzdGVtLmNyZWF0ZUFuZEFkZFRvRW5naW5lKClcbiAgfVxuXG4gIHVwZGF0ZShkdDogbnVtYmVyKSB7XG4gICAgdGhpcy5ub3JtYWxpemVkVGltZSA9IFNjYWxhci5DbGFtcChcbiAgICAgIHRoaXMubm9ybWFsaXplZFRpbWUgKyBkdCAqIHRoaXMuc3BlZWQsXG4gICAgICAwLFxuICAgICAgMVxuICAgIClcbiAgICB0aGlzLmxlcnBUaW1lID0gSW50ZXJwb2xhdGUodGhpcy5pbnRlcnBvbGF0aW9uVHlwZSwgdGhpcy5ub3JtYWxpemVkVGltZSlcbiAgfVxuXG4gIGhhc0ZpbmlzaGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm5vcm1hbGl6ZWRUaW1lID49IDFcbiAgfVxuXG4gIGFzc2lnblZhbHVlVG9UcmFuc2Zvcm0odHJhbnNmb3JtOiBUcmFuc2Zvcm0pIHtcbiAgICB0cmFuc2Zvcm0uc2NhbGUgPSBWZWN0b3IzLkxlcnAodGhpcy5zdGFydCwgdGhpcy5lbmQsIHRoaXMubGVycFRpbWUpXG4gIH1cbn1cbiIsImltcG9ydCB7IElUcmFuc2Zvcm1Db21wb25lbnQgfSBmcm9tICcuL2l0cmFuc2Zvcm1jb21wb25lbnQnXG5pbXBvcnQgeyBUcmFuc2Zvcm1TeXN0ZW0gfSBmcm9tICcuLi9zeXN0ZW0vdHJhbnNmcm9tU3lzdGVtJ1xuXG4vKipcbiAqIENvbXBvbmVudCB0byBtb3ZlIGFuIGVudGl0eSBkb3duIGEgZml4ZWQgcGF0aCBpbiBhIGdpdmVuIGFtb3VudCBvZiB0aW1lXG4gKi9cbkBDb21wb25lbnQoJ2ZvbGxvd1BhdGhDb21wb25lbnQnKVxuZXhwb3J0IGNsYXNzIEZvbGxvd1BhdGhDb21wb25lbnQgaW1wbGVtZW50cyBJVHJhbnNmb3JtQ29tcG9uZW50IHtcbiAgcHJpdmF0ZSBwb2ludHM6IFZlY3RvcjNbXVxuICBwcml2YXRlIHNwZWVkOiBudW1iZXJbXSA9IFtdXG4gIHByaXZhdGUgbm9ybWFsaXplZFRpbWU6IG51bWJlclxuICBwcml2YXRlIGN1cnJlbnRJbmRleDogbnVtYmVyXG5cbiAgb25GaW5pc2hDYWxsYmFjaz86ICgpID0+IHZvaWRcbiAgb25Qb2ludFJlYWNoZWRDYWxsYmFjaz86IChjdXJyZW50UG9pbnQ6IFZlY3RvcjMsIG5leHRQb2ludDogVmVjdG9yMykgPT4gdm9pZFxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBGb2xsb3dQYXRoQ29tcG9uZW50IGluc3RhbmNlIHRvIGFkZCBhcyBhIGNvbXBvbmVudCB0byBhIEVudGl0eVxuICAgKiBAcGFyYW0ge1ZlY3RvcjNbXX0gcG9pbnRzIGFycmF5IG9mIHBvaW50cyBmb3IgdGhlIHBhdGhcbiAgICogQHBhcmFtIHtudW1iZXJ9IGR1cmF0aW9uIGR1cmF0aW9uIG9mIHRoZSBtb3ZlbWVudCB0aHJvdWdoIHRoZSBwYXRoXG4gICAqIEBwYXJhbSB7KCkgPT4gdm9pZH0gb25GaW5pc2hDYWxsYmFjayBjYWxsZWQgd2hlbiBtb3ZlbWVudCBlbmRzXG4gICAqIEBwYXJhbSB7KGN1cnJlbnRQb2ludDogVmVjdG9yMywgbmV4dFBvaW50OiBWZWN0b3IzKSA9PiB2b2lkfSBvblBvaW50UmVhY2hlZENhbGxiYWNrIGNhbGxlZCBldmVyeXRpbWUgYW4gZW50aXR5IHJlYWNoZXMgYSBwb2ludCBvZiB0aGUgcGF0aFxuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgcG9pbnRzOiBWZWN0b3IzW10sXG4gICAgZHVyYXRpb246IG51bWJlcixcbiAgICBvbkZpbmlzaENhbGxiYWNrPzogKCkgPT4gdm9pZCxcbiAgICBvblBvaW50UmVhY2hlZENhbGxiYWNrPzogKGN1cnJlbnRQb2ludDogVmVjdG9yMywgbmV4dFBvaW50OiBWZWN0b3IzKSA9PiB2b2lkXG4gICkge1xuICAgIHRoaXMubm9ybWFsaXplZFRpbWUgPSAwXG4gICAgdGhpcy5jdXJyZW50SW5kZXggPSAwXG4gICAgdGhpcy5wb2ludHMgPSBwb2ludHNcbiAgICB0aGlzLm9uRmluaXNoQ2FsbGJhY2sgPSBvbkZpbmlzaENhbGxiYWNrXG4gICAgdGhpcy5vblBvaW50UmVhY2hlZENhbGxiYWNrID0gb25Qb2ludFJlYWNoZWRDYWxsYmFja1xuXG4gICAgaWYgKHBvaW50cy5sZW5ndGggPCAyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0F0IGxlYXN0IDIgcG9pbnRzIGFyZSBuZWVkZWQgZm9yIEZvbGxvd1BhdGhDb21wb25lbnQuJylcbiAgICB9XG5cbiAgICBpZiAoZHVyYXRpb24gPiAwKSB7XG4gICAgICBsZXQgdG90YWxEaXN0ID0gMFxuICAgICAgbGV0IHBvaW50c0Rpc3QgPSBbXVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb2ludHMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAgIGxldCBzcURpc3QgPSBWZWN0b3IzLkRpc3RhbmNlKHBvaW50c1tpXSwgcG9pbnRzW2kgKyAxXSlcbiAgICAgICAgdG90YWxEaXN0ICs9IHNxRGlzdFxuICAgICAgICBwb2ludHNEaXN0LnB1c2goc3FEaXN0KVxuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb2ludHNEaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRoaXMuc3BlZWQucHVzaCgxIC8gKChwb2ludHNEaXN0W2ldIC8gdG90YWxEaXN0KSAqIGR1cmF0aW9uKSlcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5ub3JtYWxpemVkVGltZSA9IDFcbiAgICAgIHRoaXMuY3VycmVudEluZGV4ID0gcG9pbnRzLmxlbmd0aCAtIDJcbiAgICB9XG5cbiAgICBUcmFuc2Zvcm1TeXN0ZW0uY3JlYXRlQW5kQWRkVG9FbmdpbmUoKVxuICB9XG5cbiAgdXBkYXRlKGR0OiBudW1iZXIpIHtcbiAgICB0aGlzLm5vcm1hbGl6ZWRUaW1lID0gU2NhbGFyLkNsYW1wKFxuICAgICAgdGhpcy5ub3JtYWxpemVkVGltZSArIGR0ICogdGhpcy5zcGVlZFt0aGlzLmN1cnJlbnRJbmRleF0sXG4gICAgICAwLFxuICAgICAgMVxuICAgIClcbiAgICBpZiAoXG4gICAgICB0aGlzLm5vcm1hbGl6ZWRUaW1lID49IDEgJiZcbiAgICAgIHRoaXMuY3VycmVudEluZGV4IDwgdGhpcy5wb2ludHMubGVuZ3RoIC0gMlxuICAgICkge1xuICAgICAgdGhpcy5jdXJyZW50SW5kZXgrK1xuICAgICAgdGhpcy5ub3JtYWxpemVkVGltZSA9IDBcbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5vblBvaW50UmVhY2hlZENhbGxiYWNrICYmXG4gICAgICAgIHRoaXMuY3VycmVudEluZGV4IDwgdGhpcy5wb2ludHMubGVuZ3RoIC0gMVxuICAgICAgKVxuICAgICAgICB0aGlzLm9uUG9pbnRSZWFjaGVkQ2FsbGJhY2soXG4gICAgICAgICAgdGhpcy5wb2ludHNbdGhpcy5jdXJyZW50SW5kZXhdLFxuICAgICAgICAgIHRoaXMucG9pbnRzW3RoaXMuY3VycmVudEluZGV4ICsgMV1cbiAgICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGhhc0ZpbmlzaGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLmN1cnJlbnRJbmRleCA+PSB0aGlzLnBvaW50cy5sZW5ndGggLSAyICYmIHRoaXMubm9ybWFsaXplZFRpbWUgPj0gMVxuICAgIClcbiAgfVxuXG4gIGFzc2lnblZhbHVlVG9UcmFuc2Zvcm0odHJhbnNmb3JtOiBUcmFuc2Zvcm0pIHtcbiAgICB0cmFuc2Zvcm0ucG9zaXRpb24gPSBWZWN0b3IzLkxlcnAoXG4gICAgICB0aGlzLnBvaW50c1t0aGlzLmN1cnJlbnRJbmRleF0sXG4gICAgICB0aGlzLnBvaW50c1t0aGlzLmN1cnJlbnRJbmRleCArIDFdLFxuICAgICAgdGhpcy5ub3JtYWxpemVkVGltZVxuICAgIClcbiAgfVxufVxuXG4vKipcbiAqIENvbXBvbmVudCB0byBtb3ZlIGEgZW50aXR5IGRvd24gYSBmaXhlZCBwYXRoIGluIGFuIGFtb3VudCBvZiB0aW1lXG4gKi9cbkBDb21wb25lbnQoJ2ZvbGxvd0N1cnZlZFBhdGhDb21wb25lbnQnKVxuZXhwb3J0IGNsYXNzIEZvbGxvd0N1cnZlZFBhdGhDb21wb25lbnQgaW1wbGVtZW50cyBJVHJhbnNmb3JtQ29tcG9uZW50IHtcbiAgcHJpdmF0ZSBwb2ludHM6IFZlY3RvcjNbXVxuICBwcml2YXRlIHNwZWVkOiBudW1iZXJbXSA9IFtdXG4gIHByaXZhdGUgbm9ybWFsaXplZFRpbWU6IG51bWJlclxuICBwcml2YXRlIGN1cnJlbnRJbmRleDogbnVtYmVyXG4gIHByaXZhdGUgdHVyblRvRmFjZU5leHQ6IGJvb2xlYW4gPSBmYWxzZVxuICBwcml2YXRlIGZhY2luZ05leHQ6IGJvb2xlYW4gPSBmYWxzZVxuXG4gIG9uRmluaXNoQ2FsbGJhY2s/OiAoKSA9PiB2b2lkXG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIEZvbGxvd0N1cnZlZFBhdGhDb21wb25lbnQgaW5zdGFuY2UgdG8gYWRkIGFzIGEgY29tcG9uZW50IHRvIGEgRW50aXR5XG4gICAqIEBwYXJhbSB7VmVjdG9yM1tdfSBwb2ludHMgYXJyYXkgb2YgcG9pbnRzIHRoYXQgdGhlIGN1cnZlIG11c3QgcGFzcyB0aHJvdWdoXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBkdXJhdGlvbiBkdXJhdGlvbiBvZiB0aGUgbW92ZW1lbnQgdGhyb3VnaCB0aGUgcGF0aFxuICAgKiBAcGFyYW0ge251bWJlcn0gbnVtYmVyT2ZTZWdtZW50cyBob3cgbWFueSBzdHJhaWdodCBsaW5lIHNlZ21lbnRzIHRvIHVzZSB0byBjb25zdHJ1Y3QgdGhlIGN1cnZlXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gdHVyblRvRmFjZU5leHQgaWYgdHJ1ZSwgcm90YXRlcyBmb3IgZWFjaCBzZWdtZW50IHRvIGFsd2F5cyBsb29rIGZvcndhcmRcbiAgICogQHBhcmFtIHtib29sZWFufSBjbG9zZWRDaXJjbGUgaWYgdHJ1ZSwgdHJhY2VzIGEgY2lyY2xlIHRoYXQgc3RhcnRzIGJhY2sgYXQgdGhlIGJlZ2lubmluZywga2VlcGluZyB0aGUgY3VydmF0dXJlIHJvdW5kZWQgaW4gdGhlIHNlYW1zIHRvb1xuICAgKiBAcGFyYW0geygpID0+IHZvaWR9IG9uRmluaXNoQ2FsbGJhY2sgY2FsbGVkIHdoZW4gbW92ZW1lbnQgZW5kc1xuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgcG9pbnRzOiBWZWN0b3IzW10sXG4gICAgZHVyYXRpb246IG51bWJlcixcbiAgICBudW1iZXJPZlNlZ21lbnRzOiBudW1iZXIsXG4gICAgdHVyblRvRmFjZU5leHQ/OiBib29sZWFuLFxuICAgIGNsb3NlZENpcmNsZT86IGJvb2xlYW4sXG4gICAgb25GaW5pc2hDYWxsYmFjaz86ICgpID0+IHZvaWRcbiAgKSB7XG4gICAgdGhpcy5ub3JtYWxpemVkVGltZSA9IDBcbiAgICB0aGlzLmN1cnJlbnRJbmRleCA9IDBcbiAgICB0aGlzLnBvaW50cyA9IEN1cnZlMy5DcmVhdGVDYXRtdWxsUm9tU3BsaW5lKFxuICAgICAgcG9pbnRzLFxuICAgICAgbnVtYmVyT2ZTZWdtZW50cyxcbiAgICAgIGNsb3NlZENpcmNsZSA/IHRydWUgOiBmYWxzZVxuICAgICkuZ2V0UG9pbnRzKClcbiAgICB0aGlzLm9uRmluaXNoQ2FsbGJhY2sgPSBvbkZpbmlzaENhbGxiYWNrXG4gICAgdGhpcy50dXJuVG9GYWNlTmV4dCA9IHR1cm5Ub0ZhY2VOZXh0ID8gdHVyblRvRmFjZU5leHQgOiBmYWxzZVxuXG4gICAgaWYgKHRoaXMucG9pbnRzLmxlbmd0aCA8IDIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQXQgbGVhc3QgMiBwb2ludHMgYXJlIG5lZWRlZCBmb3IgRm9sbG93UGF0aENvbXBvbmVudC4nKVxuICAgIH1cblxuICAgIGlmIChkdXJhdGlvbiA+IDApIHtcbiAgICAgIGxldCB0b3RhbERpc3QgPSAwXG4gICAgICBsZXQgcG9pbnRzRGlzdCA9IFtdXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucG9pbnRzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgICBsZXQgc3FEaXN0ID0gVmVjdG9yMy5EaXN0YW5jZSh0aGlzLnBvaW50c1tpXSwgdGhpcy5wb2ludHNbaSArIDFdKVxuICAgICAgICB0b3RhbERpc3QgKz0gc3FEaXN0XG4gICAgICAgIHBvaW50c0Rpc3QucHVzaChzcURpc3QpXG4gICAgICB9XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvaW50c0Rpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy5zcGVlZC5wdXNoKDEgLyAoKHBvaW50c0Rpc3RbaV0gLyB0b3RhbERpc3QpICogZHVyYXRpb24pKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm5vcm1hbGl6ZWRUaW1lID0gMVxuICAgICAgdGhpcy5jdXJyZW50SW5kZXggPSBwb2ludHMubGVuZ3RoIC0gMlxuICAgIH1cblxuICAgIFRyYW5zZm9ybVN5c3RlbS5jcmVhdGVBbmRBZGRUb0VuZ2luZSgpXG4gIH1cblxuICB1cGRhdGUoZHQ6IG51bWJlcikge1xuICAgIHRoaXMubm9ybWFsaXplZFRpbWUgPSBTY2FsYXIuQ2xhbXAoXG4gICAgICB0aGlzLm5vcm1hbGl6ZWRUaW1lICsgZHQgKiB0aGlzLnNwZWVkW3RoaXMuY3VycmVudEluZGV4XSxcbiAgICAgIDAsXG4gICAgICAxXG4gICAgKVxuICAgIGlmIChcbiAgICAgIHRoaXMubm9ybWFsaXplZFRpbWUgPj0gMSAmJlxuICAgICAgdGhpcy5jdXJyZW50SW5kZXggPCB0aGlzLnBvaW50cy5sZW5ndGggLSAyXG4gICAgKSB7XG4gICAgICB0aGlzLmN1cnJlbnRJbmRleCsrXG4gICAgICB0aGlzLm5vcm1hbGl6ZWRUaW1lID0gMFxuICAgICAgaWYgKHRoaXMudHVyblRvRmFjZU5leHQgPT0gdHJ1ZSkge1xuICAgICAgICB0aGlzLmZhY2luZ05leHQgPSBmYWxzZVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGhhc0ZpbmlzaGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLmN1cnJlbnRJbmRleCA+PSB0aGlzLnBvaW50cy5sZW5ndGggLSAyICYmIHRoaXMubm9ybWFsaXplZFRpbWUgPj0gMVxuICAgIClcbiAgfVxuXG4gIGFzc2lnblZhbHVlVG9UcmFuc2Zvcm0odHJhbnNmb3JtOiBUcmFuc2Zvcm0pIHtcbiAgICB0cmFuc2Zvcm0ucG9zaXRpb24gPSBWZWN0b3IzLkxlcnAoXG4gICAgICB0aGlzLnBvaW50c1t0aGlzLmN1cnJlbnRJbmRleF0sXG4gICAgICB0aGlzLnBvaW50c1t0aGlzLmN1cnJlbnRJbmRleCArIDFdLFxuICAgICAgdGhpcy5ub3JtYWxpemVkVGltZVxuICAgIClcblxuICAgIGlmICghdGhpcy5mYWNpbmdOZXh0KSB7XG4gICAgICB0aGlzLmZhY2luZ05leHQgPSB0cnVlXG5cbiAgICAgIGlmICh0aGlzLmN1cnJlbnRJbmRleCA8IHRoaXMucG9pbnRzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgdHJhbnNmb3JtLmxvb2tBdCh0aGlzLnBvaW50c1t0aGlzLmN1cnJlbnRJbmRleCArIDFdKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJhbnNmb3JtLmxvb2tBdCh0aGlzLnBvaW50c1swXSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IElUcmFuc2Zvcm1Db21wb25lbnQgfSBmcm9tICcuL2l0cmFuc2Zvcm1jb21wb25lbnQnXG5pbXBvcnQgeyBUcmFuc2Zvcm1TeXN0ZW0gfSBmcm9tICcuLi9zeXN0ZW0vdHJhbnNmcm9tU3lzdGVtJ1xuXG4vKipcbiAqIENvbXBvbmVudCB0byByb3RhdGUgZW50aXR5IGluZGVmaW5pdGVseSB1bnRpbCBzdG9wIGlzIGNhbGxlZFxuICovXG5AQ29tcG9uZW50KCdrZWVwUm90YXRpbmdDb21wb25lbnQnKVxuZXhwb3J0IGNsYXNzIEtlZXBSb3RhdGluZ0NvbXBvbmVudCBpbXBsZW1lbnRzIElUcmFuc2Zvcm1Db21wb25lbnQge1xuICBvbkZpbmlzaENhbGxiYWNrPzogKCkgPT4gdm9pZFxuXG4gIHByaXZhdGUgcm90YXRpb25WZWxvY2l0eTogUXVhdGVybmlvblxuICBwcml2YXRlIHJvdGF0aW9uOiBRdWF0ZXJuaW9uXG4gIHByaXZhdGUgZmluaXNoZWQ6IGJvb2xlYW5cblxuICAvKipcbiAgICogUm90YXRlcyBhbiBlbnRpdHkgY29udGludW91c2x5LiBUaGUgZW50aXR5IHdpbGwga2VlcCByb3RhdGluZyBmb3JldmVyIHVudGlsIGl0J3MgZXhwbGljaXRseSBzdG9wcGVkIG9yIHRoZSBjb21wb25lbnQgaXMgcmVtb3ZlZC5cbiAgICogQHBhcmFtIHtRdWF0ZXJuaW9ufSByb3RhdGlvblZlbG9jaXR5IGEgcXVhdGVybmlvbiBkZXNjcmliaW5nIHRoZSBkZXNpcmVkIHJvdGF0aW9uIHRvIHBlcmZvcm0gZWFjaCBzZWNvbmQgc2Vjb25kXG4gICAqIEBwYXJhbSB7KCkgPT4gdm9pZH0gb25GaW5pc2hDYWxsYmFjayBjYWxsZWQgd2hlbiByb3RhdGlvbiBlbmRzXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihyb3RhdGlvblZlbG9jaXR5OiBRdWF0ZXJuaW9uLCBvbkZpbmlzaENhbGxiYWNrPzogKCkgPT4gdm9pZCkge1xuICAgIHRoaXMucm90YXRpb25WZWxvY2l0eSA9IHJvdGF0aW9uVmVsb2NpdHlcbiAgICB0aGlzLm9uRmluaXNoQ2FsbGJhY2sgPSBvbkZpbmlzaENhbGxiYWNrXG4gICAgdGhpcy5yb3RhdGlvbiA9IFF1YXRlcm5pb24uSWRlbnRpdHlcbiAgICB0aGlzLmZpbmlzaGVkID0gZmFsc2VcblxuICAgIFRyYW5zZm9ybVN5c3RlbS5jcmVhdGVBbmRBZGRUb0VuZ2luZSgpXG4gIH1cblxuICB1cGRhdGUoZHQ6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMucm90YXRpb24gPSBRdWF0ZXJuaW9uLlNsZXJwKFxuICAgICAgUXVhdGVybmlvbi5JZGVudGl0eSxcbiAgICAgIHRoaXMucm90YXRpb25WZWxvY2l0eSxcbiAgICAgIGR0XG4gICAgKVxuICB9XG5cbiAgaGFzRmluaXNoZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZmluaXNoZWRcbiAgfVxuXG4gIGFzc2lnblZhbHVlVG9UcmFuc2Zvcm0odHJhbnNmb3JtOiBUcmFuc2Zvcm0pOiB2b2lkIHtcbiAgICB0cmFuc2Zvcm0ucm90YXRpb24gPSB0cmFuc2Zvcm0ucm90YXRpb24ubXVsdGlwbHkodGhpcy5yb3RhdGlvbilcbiAgfVxuXG4gIHN0b3AoKSB7XG4gICAgdGhpcy5maW5pc2hlZCA9IHRydWVcbiAgfVxufVxuIiwiaW1wb3J0IHsgSVRyYW5zZm9ybUNvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudC9pdHJhbnNmb3JtY29tcG9uZW50J1xuaW1wb3J0IHsgTW92ZVRyYW5zZm9ybUNvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudC9tb3ZlJ1xuaW1wb3J0IHsgUm90YXRlVHJhbnNmb3JtQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50L3JvdGF0ZSdcbmltcG9ydCB7IFNjYWxlVHJhbnNmb3JtQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50L3NjYWxlJ1xuaW1wb3J0IHtcbiAgRm9sbG93UGF0aENvbXBvbmVudCxcbiAgRm9sbG93Q3VydmVkUGF0aENvbXBvbmVudFxufSBmcm9tICcuLi9jb21wb25lbnQvZm9sbG93cGF0aCdcbmltcG9ydCB7IEtlZXBSb3RhdGluZ0NvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudC9rZWVwcm90YXRpbmcnXG5cbmV4cG9ydCBjbGFzcyBUcmFuc2Zvcm1TeXN0ZW0gaW1wbGVtZW50cyBJU3lzdGVtIHtcbiAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBUcmFuc2Zvcm1TeXN0ZW0gfCBudWxsID0gbnVsbFxuXG4gIHByaXZhdGUgX2NvbXBvbmVudHM6IENvbXBvbmVudENvbnN0cnVjdG9yPElUcmFuc2Zvcm1Db21wb25lbnQ+W10gPSBbXVxuICBwcml2YXRlIF9jb21wb25lbnRHcm91cHM6IENvbXBvbmVudEdyb3VwW10gPSBbXVxuXG4gIHN0YXRpYyBjcmVhdGVBbmRBZGRUb0VuZ2luZSgpOiBUcmFuc2Zvcm1TeXN0ZW0ge1xuICAgIGlmICh0aGlzLl9pbnN0YW5jZSA9PSBudWxsKSB7XG4gICAgICB0aGlzLl9pbnN0YW5jZSA9IG5ldyBUcmFuc2Zvcm1TeXN0ZW0oKVxuICAgICAgZW5naW5lLmFkZFN5c3RlbSh0aGlzLl9pbnN0YW5jZSlcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlXG4gIH1cblxuICBzdGF0aWMgcmVnaXN0ZXJDdXN0b21Db21wb25lbnQ8VCBleHRlbmRzIElUcmFuc2Zvcm1Db21wb25lbnQ+KFxuICAgIGNvbXBvbmVudDogQ29tcG9uZW50Q29uc3RydWN0b3I8VD5cbiAgKSB7XG4gICAgdGhpcy5jcmVhdGVBbmRBZGRUb0VuZ2luZSgpLl9jb21wb25lbnRzLnB1c2goY29tcG9uZW50KVxuICB9XG5cbiAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHtcbiAgICBUcmFuc2Zvcm1TeXN0ZW0uX2luc3RhbmNlID0gdGhpc1xuICAgIHRoaXMuX2NvbXBvbmVudHMucHVzaChNb3ZlVHJhbnNmb3JtQ29tcG9uZW50KVxuICAgIHRoaXMuX2NvbXBvbmVudEdyb3Vwcy5wdXNoKFxuICAgICAgZW5naW5lLmdldENvbXBvbmVudEdyb3VwKE1vdmVUcmFuc2Zvcm1Db21wb25lbnQsIFRyYW5zZm9ybSlcbiAgICApXG5cbiAgICB0aGlzLl9jb21wb25lbnRzLnB1c2goUm90YXRlVHJhbnNmb3JtQ29tcG9uZW50KVxuICAgIHRoaXMuX2NvbXBvbmVudEdyb3Vwcy5wdXNoKFxuICAgICAgZW5naW5lLmdldENvbXBvbmVudEdyb3VwKFJvdGF0ZVRyYW5zZm9ybUNvbXBvbmVudCwgVHJhbnNmb3JtKVxuICAgIClcblxuICAgIHRoaXMuX2NvbXBvbmVudHMucHVzaChTY2FsZVRyYW5zZm9ybUNvbXBvbmVudClcbiAgICB0aGlzLl9jb21wb25lbnRHcm91cHMucHVzaChcbiAgICAgIGVuZ2luZS5nZXRDb21wb25lbnRHcm91cChTY2FsZVRyYW5zZm9ybUNvbXBvbmVudCwgVHJhbnNmb3JtKVxuICAgIClcblxuICAgIHRoaXMuX2NvbXBvbmVudHMucHVzaChGb2xsb3dQYXRoQ29tcG9uZW50KVxuICAgIHRoaXMuX2NvbXBvbmVudEdyb3Vwcy5wdXNoKFxuICAgICAgZW5naW5lLmdldENvbXBvbmVudEdyb3VwKEZvbGxvd1BhdGhDb21wb25lbnQsIFRyYW5zZm9ybSlcbiAgICApXG5cbiAgICB0aGlzLl9jb21wb25lbnRzLnB1c2goRm9sbG93Q3VydmVkUGF0aENvbXBvbmVudClcbiAgICB0aGlzLl9jb21wb25lbnRHcm91cHMucHVzaChcbiAgICAgIGVuZ2luZS5nZXRDb21wb25lbnRHcm91cChGb2xsb3dDdXJ2ZWRQYXRoQ29tcG9uZW50LCBUcmFuc2Zvcm0pXG4gICAgKVxuXG4gICAgdGhpcy5fY29tcG9uZW50cy5wdXNoKEtlZXBSb3RhdGluZ0NvbXBvbmVudClcbiAgICB0aGlzLl9jb21wb25lbnRHcm91cHMucHVzaChcbiAgICAgIGVuZ2luZS5nZXRDb21wb25lbnRHcm91cChLZWVwUm90YXRpbmdDb21wb25lbnQsIFRyYW5zZm9ybSlcbiAgICApXG4gIH1cblxuICB1cGRhdGUoZHQ6IG51bWJlcikge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fY29tcG9uZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy51cGRhdGVDb21wb25lbnQoZHQsIHRoaXMuX2NvbXBvbmVudHNbaV0sIHRoaXMuX2NvbXBvbmVudEdyb3Vwc1tpXSlcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZUNvbXBvbmVudDxUIGV4dGVuZHMgSVRyYW5zZm9ybUNvbXBvbmVudD4oXG4gICAgZHQ6IG51bWJlcixcbiAgICBjb21wb25lbnQ6IENvbXBvbmVudENvbnN0cnVjdG9yPFQ+LFxuICAgIGdyb3VwOiBDb21wb25lbnRHcm91cFxuICApIHtcbiAgICBncm91cC5lbnRpdGllcy5mb3JFYWNoKGVudGl0eSA9PiB7XG4gICAgICBjb25zdCB0cmFuc2Zvcm0gPSBlbnRpdHkuZ2V0Q29tcG9uZW50KFRyYW5zZm9ybSlcbiAgICAgIGNvbnN0IGNvbXAgPSBlbnRpdHkuZ2V0Q29tcG9uZW50KGNvbXBvbmVudClcblxuICAgICAgY29tcC51cGRhdGUoZHQpXG4gICAgICBjb21wLmFzc2lnblZhbHVlVG9UcmFuc2Zvcm0odHJhbnNmb3JtKVxuICAgICAgaWYgKGNvbXAuaGFzRmluaXNoZWQoKSkge1xuICAgICAgICBlbnRpdHkucmVtb3ZlQ29tcG9uZW50KGNvbXApXG4gICAgICAgIGlmIChjb21wLm9uRmluaXNoQ2FsbGJhY2sgIT0gbnVsbCkgY29tcC5vbkZpbmlzaENhbGxiYWNrKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG4iLCJpbXBvcnQgeyBJVHJhbnNmb3JtQ29tcG9uZW50IH0gZnJvbSAnLi9pdHJhbnNmb3JtY29tcG9uZW50J1xuaW1wb3J0IHsgVHJhbnNmb3JtU3lzdGVtIH0gZnJvbSAnLi4vc3lzdGVtL3RyYW5zZnJvbVN5c3RlbSdcbmltcG9ydCB7IEludGVycG9sYXRpb25UeXBlLCBJbnRlcnBvbGF0ZSB9IGZyb20gJy4uL21hdGgvaW50ZXJwb2xhdGlvbidcblxuLyoqXG4gKiBDb21wb25lbnQgdG8gdHJhbnNsYXRlIGVudGl0eSBmcm9tIG9uZSBwb3NpdGlvbiAoc3RhcnQpIHRvIGFub3RoZXIgKGVuZCkgaW4gYW4gYW1vdW50IG9mIHRpbWVcbiAqL1xuQENvbXBvbmVudCgnbW92ZVRyYW5zZm9ybUNvbXBvbmVudCcpXG5leHBvcnQgY2xhc3MgTW92ZVRyYW5zZm9ybUNvbXBvbmVudCBpbXBsZW1lbnRzIElUcmFuc2Zvcm1Db21wb25lbnQge1xuICBwcml2YXRlIHN0YXJ0OiBSZWFkT25seVZlY3RvcjNcbiAgcHJpdmF0ZSBlbmQ6IFJlYWRPbmx5VmVjdG9yM1xuICBwcml2YXRlIHNwZWVkOiBudW1iZXJcbiAgcHJpdmF0ZSBub3JtYWxpemVkVGltZTogbnVtYmVyXG4gIHByaXZhdGUgaW50ZXJwb2xhdGlvblR5cGU6IEludGVycG9sYXRpb25UeXBlXG4gIHByaXZhdGUgbGVycFRpbWU6IG51bWJlclxuXG4gIG9uRmluaXNoQ2FsbGJhY2s/OiAoKSA9PiB2b2lkXG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIE1vdmVUcmFuc2Zvcm1Db21wb25lbnQgaW5zdGFuY2UgdG8gYWRkIGFzIGEgY29tcG9uZW50IHRvIGEgRW50aXR5XG4gICAqIEBwYXJhbSB7UmVhZE9ubHlWZWN0b3IzfSBzdGFydCBzdGFydGluZyBwb3NpdGlvblxuICAgKiBAcGFyYW0ge1JlYWRPbmx5VmVjdG9yM30gZW5kIGVuZGluZyBwb3NpdGlvblxuICAgKiBAcGFyYW0ge251bWJlcn0gZHVyYXRpb24gZHVyYXRpb24gKGluIHNlY29uZHMpIG9mIHN0YXJ0IHRvIGVuZCB0cmFuc2xhdGlvblxuICAgKiBAcGFyYW0geygpPT52b2lkfSBvbkZpbmlzaENhbGxiYWNrIGNhbGxlZCB3aGVuIHRyYW5zbGF0aW9uIGVuZHNcbiAgICogQHBhcmFtIHtJbnRlcnBvbGF0aW9uVHlwZX0gaW50ZXJwb2xhdGlvblR5cGUgdHlwZSBvZiBpbnRlcnBvbGF0aW9uIHRvIGJlIHVzZWQgKGRlZmF1bHQ6IExJTkVBUilcbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIHN0YXJ0OiBSZWFkT25seVZlY3RvcjMsXG4gICAgZW5kOiBSZWFkT25seVZlY3RvcjMsXG4gICAgZHVyYXRpb246IG51bWJlcixcbiAgICBvbkZpbmlzaENhbGxiYWNrPzogKCkgPT4gdm9pZCxcbiAgICBpbnRlcnBvbGF0aW9uVHlwZTogSW50ZXJwb2xhdGlvblR5cGUgPSBJbnRlcnBvbGF0aW9uVHlwZS5MSU5FQVJcbiAgKSB7XG4gICAgdGhpcy5zdGFydCA9IHN0YXJ0XG4gICAgdGhpcy5lbmQgPSBlbmRcbiAgICB0aGlzLm5vcm1hbGl6ZWRUaW1lID0gMFxuICAgIHRoaXMubGVycFRpbWUgPSAwXG4gICAgdGhpcy5vbkZpbmlzaENhbGxiYWNrID0gb25GaW5pc2hDYWxsYmFja1xuICAgIHRoaXMuaW50ZXJwb2xhdGlvblR5cGUgPSBpbnRlcnBvbGF0aW9uVHlwZVxuXG4gICAgaWYgKGR1cmF0aW9uICE9IDApIHtcbiAgICAgIHRoaXMuc3BlZWQgPSAxIC8gZHVyYXRpb25cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zcGVlZCA9IDBcbiAgICAgIHRoaXMubm9ybWFsaXplZFRpbWUgPSAxXG4gICAgICB0aGlzLmxlcnBUaW1lID0gMVxuICAgIH1cblxuICAgIFRyYW5zZm9ybVN5c3RlbS5jcmVhdGVBbmRBZGRUb0VuZ2luZSgpXG4gIH1cblxuICB1cGRhdGUoZHQ6IG51bWJlcikge1xuICAgIHRoaXMubm9ybWFsaXplZFRpbWUgPSBTY2FsYXIuQ2xhbXAoXG4gICAgICB0aGlzLm5vcm1hbGl6ZWRUaW1lICsgZHQgKiB0aGlzLnNwZWVkLFxuICAgICAgMCxcbiAgICAgIDFcbiAgICApXG4gICAgdGhpcy5sZXJwVGltZSA9IEludGVycG9sYXRlKHRoaXMuaW50ZXJwb2xhdGlvblR5cGUsIHRoaXMubm9ybWFsaXplZFRpbWUpXG4gIH1cblxuICBoYXNGaW5pc2hlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5ub3JtYWxpemVkVGltZSA+PSAxXG4gIH1cblxuICBhc3NpZ25WYWx1ZVRvVHJhbnNmb3JtKHRyYW5zZm9ybTogVHJhbnNmb3JtKSB7XG4gICAgdHJhbnNmb3JtLnBvc2l0aW9uID0gVmVjdG9yMy5MZXJwKHRoaXMuc3RhcnQsIHRoaXMuZW5kLCB0aGlzLmxlcnBUaW1lKVxuICB9XG59XG4iLCJleHBvcnQgZW51bSBUb2dnbGVTdGF0ZSB7XG4gIE9mZiA9IDAsXG4gIE9uXG59XG5cbi8qKlxuICogVG9nZ2xlIGNvbXBvbmVudCBmb3IgZW50aXRpZXMgd2l0aCB0d28gc3RhdGVzIChPTiBvciBPRkYpXG4gKi9cbkBDb21wb25lbnQoJ3RvZ2dsZScpXG5leHBvcnQgY2xhc3MgVG9nZ2xlQ29tcG9uZW50IHtcbiAgcHVibGljIGVuYWJsZWQ6IGJvb2xlYW4gPSB0cnVlXG5cbiAgcHJpdmF0ZSBvblZhbHVlQ2hhbmdlZENhbGxiYWNrPzogKHZhbHVlOiBUb2dnbGVTdGF0ZSkgPT4gdm9pZFxuICBwcml2YXRlIHN0YXRlOiBUb2dnbGVTdGF0ZSA9IFRvZ2dsZVN0YXRlLk9mZlxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgYSBUb2dnbGVDb21wb25lbnRcbiAgICogQHBhcmFtIHtUb2dnbGVTdGF0ZX0gc3RhcnRpbmdTdGF0ZSBzdGFydGluZyBzdGF0ZSBvZiB0aGUgdG9nZ2xlIChPTiBvciBPRkYpXG4gICAqIEBwYXJhbSB7KHZhbHVlOiBUb2dnbGVTdGF0ZSkgPT4gdm9pZH0gb25WYWx1ZUNoYW5nZWRDYWxsYmFjayBjYWxsZWQgd2hlbiB0b2dnbGUgc3RhdGUgY2hhbmdlZFxuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgc3RhcnRpbmdTdGF0ZTogVG9nZ2xlU3RhdGUgPSBUb2dnbGVTdGF0ZS5PbixcbiAgICBvblZhbHVlQ2hhbmdlZENhbGxiYWNrPzogKHZhbHVlOiBUb2dnbGVTdGF0ZSkgPT4gdm9pZFxuICApIHtcbiAgICB0aGlzLnNldChzdGFydGluZ1N0YXRlKVxuICAgIGlmIChvblZhbHVlQ2hhbmdlZENhbGxiYWNrKSB0aGlzLnNldENhbGxiYWNrKG9uVmFsdWVDaGFuZ2VkQ2FsbGJhY2spXG4gIH1cblxuICAvKipcbiAgICogU2V0IHRyaWdnZXIgdG8gYSBzdGF0ZVxuICAgKiBAcGFyYW0ge1RvZ2dsZVN0YXRlfSBzdGF0ZSBuZXcgc3RhdGVcbiAgICovXG4gIHB1YmxpYyBzZXQoc3RhdGU6IFRvZ2dsZVN0YXRlKTogdm9pZCB7XG4gICAgdGhpcy5zdGF0ZSA9IHN0YXRlXG4gICAgaWYgKHRoaXMub25WYWx1ZUNoYW5nZWRDYWxsYmFjaykgdGhpcy5vblZhbHVlQ2hhbmdlZENhbGxiYWNrKHN0YXRlKVxuICB9XG5cbiAgLyoqXG4gICAqIFRvZ2dsZSBzdGF0ZSBvZiBUb2dnbGVDb21wb25lbnRcbiAgICovXG4gIHB1YmxpYyB0b2dnbGUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZW5hYmxlZCkge1xuICAgICAgdGhpcy5zZXQoMSAtIHRoaXMuc3RhdGUpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdldCBpZiB0aGUgY3VycmVudCB0b2dnbGUgc3RhdGUgaXMgT05cbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIHB1YmxpYyBpc09uKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnN0YXRlID09IFRvZ2dsZVN0YXRlLk9uXG4gIH1cblxuICAvKipcbiAgICogU2V0IGNhbGxiYWNrIGZvciB3aGVuIFRvZ2dsZUNvbXBvbmVudCBzdGF0ZSBjaGFuZ2VkXG4gICAqIEBwYXJhbSB7KHZhbHVlOiBUb2dnbGVTdGF0ZSkgPT4gdm9pZH0gb25WYWx1ZUNoYW5nZWRDYWxsYmFjayBjYWxsYmFja1xuICAgKi9cbiAgcHVibGljIHNldENhbGxiYWNrKFxuICAgIG9uVmFsdWVDaGFuZ2VkQ2FsbGJhY2s6ICh2YWx1ZTogVG9nZ2xlU3RhdGUpID0+IHZvaWRcbiAgKTogdm9pZCB7XG4gICAgdGhpcy5vblZhbHVlQ2hhbmdlZENhbGxiYWNrID0gb25WYWx1ZUNoYW5nZWRDYWxsYmFja1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgVG9nZ2xlQ29tcG9uZW50LFxuICBUb2dnbGVTdGF0ZVxufVxuIiwiZXhwb3J0IGludGVyZmFjZSBJVGltZXJDb21wb25lbnQge1xyXG4gIGVsYXBzZWRUaW1lOiBudW1iZXJcclxuICB0YXJnZXRUaW1lOiBudW1iZXJcclxuICBvblRhcmdldFRpbWVSZWFjaGVkOiAob3duZXJFbnRpdHk6IElFbnRpdHkpID0+IHZvaWRcclxufVxyXG4iLCJpbXBvcnQgeyBJVGltZXJDb21wb25lbnQgfSBmcm9tICcuL2l0aW1lcmNvbXBvbmVudCdcclxuaW1wb3J0IHsgVGltZXJTeXN0ZW0gfSBmcm9tICcuLi9zeXN0ZW0vdGltZXJTeXN0ZW0nXHJcblxyXG4vKipcclxuICogRXhlY3V0ZSBldmVyeSBYIG1pbGxpc2Vjb25kc1xyXG4gKi9cclxuQENvbXBvbmVudCgndGltZXJJbnRlcnZhbCcpXHJcbmV4cG9ydCBjbGFzcyBJbnRlcnZhbCBpbXBsZW1lbnRzIElUaW1lckNvbXBvbmVudCB7XHJcbiAgZWxhcHNlZFRpbWU6IG51bWJlclxyXG4gIHRhcmdldFRpbWU6IG51bWJlclxyXG4gIG9uVGFyZ2V0VGltZVJlYWNoZWQ6IChvd25lckVudGl0eTogSUVudGl0eSkgPT4gdm9pZFxyXG5cclxuICBwcml2YXRlIG9uVGltZVJlYWNoZWRDYWxsYmFjaz86ICgpID0+IHZvaWRcclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IG1pbGxpc2VjcyBhbW91bnQgb2YgdGltZSBpbiBtaWxsaXNlY29uZHNcclxuICAgKiBAcGFyYW0geygpID0+IHZvaWR9IG9uVGltZVJlYWNoZWRDYWxsYmFjayBjYWxsYmFjayBmb3Igd2hlbiB0aW1lIGlzIHJlYWNoZWRcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihtaWxsaXNlY3M6IG51bWJlciwgb25UaW1lUmVhY2hlZENhbGxiYWNrPzogKCkgPT4gdm9pZCkge1xyXG4gICAgVGltZXJTeXN0ZW0uY3JlYXRlQW5kQWRkVG9FbmdpbmUoKVxyXG5cclxuICAgIHRoaXMuZWxhcHNlZFRpbWUgPSAwXHJcbiAgICB0aGlzLnRhcmdldFRpbWUgPSBtaWxsaXNlY3MgLyAxMDAwXHJcbiAgICB0aGlzLm9uVGltZVJlYWNoZWRDYWxsYmFjayA9IG9uVGltZVJlYWNoZWRDYWxsYmFja1xyXG4gICAgdGhpcy5vblRhcmdldFRpbWVSZWFjaGVkID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLmVsYXBzZWRUaW1lID0gMFxyXG4gICAgICBpZiAodGhpcy5vblRpbWVSZWFjaGVkQ2FsbGJhY2spIHRoaXMub25UaW1lUmVhY2hlZENhbGxiYWNrKClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldENhbGxiYWNrKG9uVGltZVJlYWNoZWRDYWxsYmFjazogKCkgPT4gdm9pZCkge1xyXG4gICAgdGhpcy5vblRpbWVSZWFjaGVkQ2FsbGJhY2sgPSBvblRpbWVSZWFjaGVkQ2FsbGJhY2tcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSVRpbWVyQ29tcG9uZW50IH0gZnJvbSAnLi9pdGltZXJjb21wb25lbnQnXHJcbmltcG9ydCB7IFRpbWVyU3lzdGVtIH0gZnJvbSAnLi4vc3lzdGVtL3RpbWVyU3lzdGVtJ1xyXG5cclxuLyoqXHJcbiAqIFJlbW92ZSBlbnRpdHkgYWZ0ZXIgWCBtaWxsaXNlY29uZHNcclxuICovXHJcbkBDb21wb25lbnQoJ3RpbWVyRXhwaXJlSW4nKVxyXG5leHBvcnQgY2xhc3MgRXhwaXJlSW4gaW1wbGVtZW50cyBJVGltZXJDb21wb25lbnQge1xyXG4gIGVsYXBzZWRUaW1lOiBudW1iZXJcclxuICB0YXJnZXRUaW1lOiBudW1iZXJcclxuICBvblRhcmdldFRpbWVSZWFjaGVkOiAob3duZXJFbnRpdHk6IElFbnRpdHkpID0+IHZvaWRcclxuXHJcbiAgcHJpdmF0ZSBvblRpbWVSZWFjaGVkQ2FsbGJhY2s/OiAoKSA9PiB2b2lkXHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBtaWxsaXNlY3MgYW1vdW50IG9mIHRpbWUgaW4gbWlsbGlzZWNvbmRzXHJcbiAgICogQHBhcmFtIHsoKSA9PiB2b2lkfSBvblRpbWVSZWFjaGVkQ2FsbGJhY2sgY2FsbGJhY2sgZm9yIHdoZW4gdGltZSBpcyByZWFjaGVkXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IobWlsbGlzZWNzOiBudW1iZXIsIG9uVGltZVJlYWNoZWRDYWxsYmFjaz86ICgpID0+IHZvaWQpIHtcclxuICAgIFRpbWVyU3lzdGVtLmNyZWF0ZUFuZEFkZFRvRW5naW5lKClcclxuXHJcbiAgICB0aGlzLmVsYXBzZWRUaW1lID0gMFxyXG4gICAgdGhpcy50YXJnZXRUaW1lID0gbWlsbGlzZWNzIC8gMTAwMFxyXG4gICAgdGhpcy5vblRpbWVSZWFjaGVkQ2FsbGJhY2sgPSBvblRpbWVSZWFjaGVkQ2FsbGJhY2tcclxuICAgIHRoaXMub25UYXJnZXRUaW1lUmVhY2hlZCA9IGVudGl0eSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLm9uVGltZVJlYWNoZWRDYWxsYmFjaykgdGhpcy5vblRpbWVSZWFjaGVkQ2FsbGJhY2soKVxyXG4gICAgICBlbnRpdHkucmVtb3ZlQ29tcG9uZW50KHRoaXMpXHJcbiAgICAgIGVuZ2luZS5yZW1vdmVFbnRpdHkoZW50aXR5KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0Q2FsbGJhY2sob25UaW1lUmVhY2hlZENhbGxiYWNrOiAoKSA9PiB2b2lkKSB7XHJcbiAgICB0aGlzLm9uVGltZVJlYWNoZWRDYWxsYmFjayA9IG9uVGltZVJlYWNoZWRDYWxsYmFja1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJVGltZXJDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnQvaXRpbWVyY29tcG9uZW50J1xyXG5pbXBvcnQgeyBJbnRlcnZhbCB9IGZyb20gJy4uL2NvbXBvbmVudC9pbnRlcnZhbCdcclxuaW1wb3J0IHsgRGVsYXkgfSBmcm9tICcuLi9jb21wb25lbnQvZGVsYXknXHJcbmltcG9ydCB7IEV4cGlyZUluIH0gZnJvbSAnLi4vY29tcG9uZW50L2V4cGlyZSdcclxuXHJcbmV4cG9ydCBjbGFzcyBUaW1lclN5c3RlbSBpbXBsZW1lbnRzIElTeXN0ZW0ge1xyXG4gIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogVGltZXJTeXN0ZW0gfCBudWxsID0gbnVsbFxyXG5cclxuICBwcml2YXRlIF9jb21wb25lbnRzOiBDb21wb25lbnRDb25zdHJ1Y3RvcjxJVGltZXJDb21wb25lbnQ+W10gPSBbXVxyXG5cclxuICBzdGF0aWMgY3JlYXRlQW5kQWRkVG9FbmdpbmUoKTogVGltZXJTeXN0ZW0ge1xyXG4gICAgaWYgKHRoaXMuX2luc3RhbmNlID09IG51bGwpIHtcclxuICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgVGltZXJTeXN0ZW0oKVxyXG4gICAgICBlbmdpbmUuYWRkU3lzdGVtKHRoaXMuX2luc3RhbmNlKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlXHJcbiAgfVxyXG5cclxuICBzdGF0aWMgcmVnaXN0ZXJDdXN0b21Db21wb25lbnQ8VCBleHRlbmRzIElUaW1lckNvbXBvbmVudD4oXHJcbiAgICBjb21wb25lbnQ6IENvbXBvbmVudENvbnN0cnVjdG9yPFQ+XHJcbiAgKSB7XHJcbiAgICB0aGlzLmNyZWF0ZUFuZEFkZFRvRW5naW5lKCkuX2NvbXBvbmVudHMucHVzaChjb21wb25lbnQpXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgVGltZXJTeXN0ZW0uX2luc3RhbmNlID0gdGhpc1xyXG4gICAgdGhpcy5fY29tcG9uZW50cy5wdXNoKEludGVydmFsKVxyXG4gICAgdGhpcy5fY29tcG9uZW50cy5wdXNoKERlbGF5KVxyXG4gICAgdGhpcy5fY29tcG9uZW50cy5wdXNoKEV4cGlyZUluKVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlKGR0OiBudW1iZXIpIHtcclxuICAgIHRoaXMuX2NvbXBvbmVudHMuZm9yRWFjaChjb21wb25lbnQgPT4ge1xyXG4gICAgICB0aGlzLnVwZGF0ZUNvbXBvbmVudChkdCwgY29tcG9uZW50KVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlQ29tcG9uZW50PFQgZXh0ZW5kcyBJVGltZXJDb21wb25lbnQ+KFxyXG4gICAgZHQ6IG51bWJlcixcclxuICAgIGNvbXBvbmVudDogQ29tcG9uZW50Q29uc3RydWN0b3I8VD5cclxuICApIHtcclxuICAgIGxldCByZWNvcmQgPSBlbmdpbmUuZ2V0RW50aXRpZXNXaXRoQ29tcG9uZW50KGNvbXBvbmVudClcclxuXHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiByZWNvcmQpIHtcclxuICAgICAgaWYgKHJlY29yZC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgbGV0IGVudGl0eSA9IHJlY29yZFtrZXldXHJcbiAgICAgICAgbGV0IHRpbWVyQ29tcG9uZW50ID0gZW50aXR5LmdldENvbXBvbmVudChjb21wb25lbnQpXHJcblxyXG4gICAgICAgIHRpbWVyQ29tcG9uZW50LmVsYXBzZWRUaW1lICs9IGR0XHJcbiAgICAgICAgaWYgKHRpbWVyQ29tcG9uZW50LmVsYXBzZWRUaW1lID49IHRpbWVyQ29tcG9uZW50LnRhcmdldFRpbWUpIHtcclxuICAgICAgICAgIHRpbWVyQ29tcG9uZW50Lm9uVGFyZ2V0VGltZVJlYWNoZWQoZW50aXR5KVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJVGltZXJDb21wb25lbnQgfSBmcm9tICcuL2l0aW1lcmNvbXBvbmVudCdcclxuaW1wb3J0IHsgVGltZXJTeXN0ZW0gfSBmcm9tICcuLi9zeXN0ZW0vdGltZXJTeXN0ZW0nXHJcblxyXG4vKipcclxuICogRXhlY3V0ZSBvbmNlIGFmdGVyIFggbWlsbGlzZWNvbmRzXHJcbiAqL1xyXG5AQ29tcG9uZW50KCd0aW1lckRlbGF5JylcclxuZXhwb3J0IGNsYXNzIERlbGF5IGltcGxlbWVudHMgSVRpbWVyQ29tcG9uZW50IHtcclxuICBlbGFwc2VkVGltZTogbnVtYmVyXHJcbiAgdGFyZ2V0VGltZTogbnVtYmVyXHJcbiAgb25UYXJnZXRUaW1lUmVhY2hlZDogKG93bmVyRW50aXR5OiBJRW50aXR5KSA9PiB2b2lkXHJcblxyXG4gIHByaXZhdGUgb25UaW1lUmVhY2hlZENhbGxiYWNrPzogKCkgPT4gdm9pZFxyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0ge251bWJlcn0gbWlsbGlzZWNzIGFtb3VudCBvZiB0aW1lIGluIG1pbGxpc2Vjb25kc1xyXG4gICAqIEBwYXJhbSB7KCkgPT4gdm9pZH0gb25UaW1lUmVhY2hlZENhbGxiYWNrIGNhbGxiYWNrIGZvciB3aGVuIHRpbWUgaXMgcmVhY2hlZFxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKG1pbGxpc2VjczogbnVtYmVyLCBvblRpbWVSZWFjaGVkQ2FsbGJhY2s/OiAoKSA9PiB2b2lkKSB7XHJcbiAgICBUaW1lclN5c3RlbS5jcmVhdGVBbmRBZGRUb0VuZ2luZSgpXHJcblxyXG4gICAgdGhpcy5lbGFwc2VkVGltZSA9IDBcclxuICAgIHRoaXMudGFyZ2V0VGltZSA9IG1pbGxpc2VjcyAvIDEwMDBcclxuICAgIHRoaXMub25UaW1lUmVhY2hlZENhbGxiYWNrID0gb25UaW1lUmVhY2hlZENhbGxiYWNrXHJcbiAgICB0aGlzLm9uVGFyZ2V0VGltZVJlYWNoZWQgPSBlbnRpdHkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5vblRpbWVSZWFjaGVkQ2FsbGJhY2spIHRoaXMub25UaW1lUmVhY2hlZENhbGxiYWNrKClcclxuICAgICAgZW50aXR5LnJlbW92ZUNvbXBvbmVudCh0aGlzKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0Q2FsbGJhY2sob25UaW1lUmVhY2hlZENhbGxiYWNrOiAoKSA9PiB2b2lkKSB7XHJcbiAgICB0aGlzLm9uVGltZVJlYWNoZWRDYWxsYmFjayA9IG9uVGltZVJlYWNoZWRDYWxsYmFja1xyXG4gIH1cclxufVxyXG4iLCIvKipcbiAqIE1hcHMgYSB2YWx1ZSBmcm9tIG9uZSByYW5nZSBvZiB2YWx1ZXMgdG8gaXRzIGVxdWl2YWxlbnQsIHNjYWxlZCBpbiBwcm9wb3J0aW9uIHRvIGFub3RoZXIgcmFuZ2Ugb2YgdmFsdWVzLCB1c2luZyBtYXhpbXVtIGFuZCBtaW5pbXVtLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSBpbnB1dCBudW1iZXJcbiAqIEBwYXJhbSB7bnVtYmVyfSBtaW4xIE1pbmltdW0gdmFsdWUgaW4gdGhlIHJhbmdlIG9mIHRoZSBpbnB1dC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBtYXgxIE1heGltdW0gdmFsdWUgaW4gdGhlIHJhbmdlIG9mIHRoZSBpbnB1dC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBtaW4yIE1pbmltdW0gdmFsdWUgaW4gdGhlIHJhbmdlIG9mIHRoZSBvdXRwdXQuXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4MiBNYXhpbXVtIHZhbHVlIGluIHRoZSByYW5nZSBvZiB0aGUgb3V0cHV0LlxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgcmVzdWx0aW5nIG1hcHBlZCB2YWx1ZSBiZXR3ZWVuIHRoZSBuZXcgbWluIGFuZCBtYXhcbiAqXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYXAoXG4gIHZhbHVlOiBudW1iZXIsXG4gIG1pbjE6IG51bWJlcixcbiAgbWF4MTogbnVtYmVyLFxuICBtaW4yOiBudW1iZXIsXG4gIG1heDI6IG51bWJlclxuKSB7XG4gIGxldCByYW5nZTEgPSBtYXgxIC0gbWluMVxuICBsZXQgcmFuZ2UyID0gbWF4MiAtIG1pbjJcblxuICByZXR1cm4gKCh2YWx1ZSAtIG1pbjEpIC8gcmFuZ2UxKSAqIHJhbmdlMiArIG1pbjJcbn1cblxuLy8gY29uc3RyYWluXG4vKipcbiAqIENsYW1wcyBhIHZhbHVlIHNvIHRoYXQgaXQgZG9lc24ndCBleGNlZWQgYSBtaW5pbXVtIG9yIGEgbWF4aW11bSB2YWx1ZS5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgaW5wdXQgbnVtYmVyXG4gKiBAcGFyYW0ge251bWJlcn0gbWluIE1pbmltdW0gb3V0cHV0IHZhbHVlLlxuICogQHBhcmFtIHtudW1iZXJ9IG1heCBNYXhpbXVtIG91dHB1dCB2YWx1ZS5cbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIHJlc3VsdGluZyBtYXBwZWQgdmFsdWUgYmV0d2VlbiB0aGUgbWluIGFuZCBtYXhcbiAqXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbGFtcCh2YWx1ZTogbnVtYmVyLCBtaW46IG51bWJlciwgbWF4OiBudW1iZXIpIHtcbiAgbGV0IHJlc3VsdCA9IHZhbHVlXG5cbiAgaWYgKHZhbHVlID4gbWF4KSB7XG4gICAgcmVzdWx0ID0gbWF4XG4gIH0gZWxzZSBpZiAodmFsdWUgPCBtaW4pIHtcbiAgICByZXN1bHQgPSBtaW5cbiAgfVxuICByZXR1cm4gcmVzdWx0XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgcG9zaXRpb24gb2YgYW4gZW50aXR5IHRoYXQgaXMgYSBjaGlsZCBvZiBvdGhlciBlbnRpdGllcywgcmVsYXRpdmUgdG8gdGhlIHNjZW5lIGluc3RlYWQgb2YgcmVsYXRpdmUgdG8gdGhlIHBhcmVudC4gUmV0dXJucyBhIFZlY3RvcjMuXG4gKlxuICogQHBhcmFtIHtFbnRpdHl9IGVudGl0eSBFbnRpdHkgdG8gY2FsY3VsYXRlIHBvc2l0aW9uXG4gKiBAcmV0dXJuIHtWZWN0b3IzfSBUaGUgRW50aXR5J3MgZ2xvYmFsIHBvc2l0aW9uIGluIHJlZmVyZW5jZSB0byB0aGUgc2NlbmUncyBvcmlnaW5cbiAqXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRFbnRpdHlXb3JsZFBvc2l0aW9uKGVudGl0eTogSUVudGl0eSk6IFZlY3RvcjMge1xuICBsZXQgZW50aXR5UG9zaXRpb246IFZlY3RvcjMgPSBlbnRpdHkuaGFzQ29tcG9uZW50KFRyYW5zZm9ybSlcbiAgICA/IGVudGl0eS5nZXRDb21wb25lbnQoVHJhbnNmb3JtKS5wb3NpdGlvbi5jbG9uZSgpXG4gICAgOiBWZWN0b3IzLlplcm8oKVxuICBsZXQgcGFyZW50RW50aXR5ID0gZW50aXR5LmdldFBhcmVudCgpXG5cbiAgaWYgKHBhcmVudEVudGl0eSAhPSBudWxsKSB7XG4gICAgaWYgKHBhcmVudEVudGl0eS51dWlkID09ICdGaXJzdFBlcnNvbkNhbWVyYUVudGl0eVJlZmVyZW5jZScpIHtcbiAgICAgIC8vbG9nKCdBVFRBQ0hFRCBUTyBDQU1FUkEnKVxuICAgICAgbGV0IHBhcmVudFJvdGF0aW9uID0gQ2FtZXJhLmluc3RhbmNlLnJvdGF0aW9uLmNsb25lKClcbiAgICAgIHJldHVybiBDYW1lcmEuaW5zdGFuY2UucG9zaXRpb25cbiAgICAgICAgLmNsb25lKClcbiAgICAgICAgLmFkZChlbnRpdHlQb3NpdGlvbi5yb3RhdGUocGFyZW50Um90YXRpb24pKVxuICAgIH0gZWxzZSBpZiAocGFyZW50RW50aXR5LnV1aWQgPT0gJ0F2YXRhckVudGl0eVJlZmVyZW5jZScpIHtcbiAgICAgIC8vbG9nKCdBVFRBQ0hFRCBUTyBBVkFUQVInKVxuICAgICAgbGV0IGNhbVJvdGF0aW9uID0gQ2FtZXJhLmluc3RhbmNlLnJvdGF0aW9uXG4gICAgICBsZXQgcGFyZW50Um90YXRpb24gPSBRdWF0ZXJuaW9uLkV1bGVyKDAsIGNhbVJvdGF0aW9uLmV1bGVyQW5nbGVzLnksIDApXG4gICAgICAvL2xvZyhDYW1lcmEuaW5zdGFuY2Uucm90YXRpb24uZXVsZXJBbmdsZXMueSlcbiAgICAgIHJldHVybiBDYW1lcmEuaW5zdGFuY2UucG9zaXRpb25cbiAgICAgICAgLmNsb25lKClcbiAgICAgICAgLmFkZChlbnRpdHlQb3NpdGlvbi5yb3RhdGUocGFyZW50Um90YXRpb24pKVxuICAgICAgICAuYWRkKG5ldyBWZWN0b3IzKDAsIC0wLjg3NSwgMCkpXG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBwYXJlbnRSb3RhdGlvbiA9IHBhcmVudEVudGl0eS5oYXNDb21wb25lbnQoVHJhbnNmb3JtKVxuICAgICAgICA/IHBhcmVudEVudGl0eS5nZXRDb21wb25lbnQoVHJhbnNmb3JtKS5yb3RhdGlvblxuICAgICAgICA6IFF1YXRlcm5pb24uSWRlbnRpdHlcbiAgICAgIHJldHVybiBnZXRFbnRpdHlXb3JsZFBvc2l0aW9uKHBhcmVudEVudGl0eSkuYWRkKFxuICAgICAgICBlbnRpdHlQb3NpdGlvbi5yb3RhdGUocGFyZW50Um90YXRpb24pXG4gICAgICApXG4gICAgfVxuICB9XG4gIHJldHVybiBlbnRpdHlQb3NpdGlvblxufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIHBvc2l0aW9uIG9mIGFuIGVudGl0eSB0aGF0IGlzIGEgY2hpbGQgb2Ygb3RoZXIgZW50aXRpZXMsIHJlbGF0aXZlIHRvIHRoZSBzY2VuZSBpbnN0ZWFkIG9mIHJlbGF0aXZlIHRvIHRoZSBwYXJlbnQuIFJldHVybnMgYSBWZWN0b3IzLlxuICpcbiAqIEBwYXJhbSB7RW50aXR5fSBlbnRpdHkgRW50aXR5IHRvIGNhbGN1bGF0ZSBwb3NpdGlvblxuICogQHJldHVybiB7UXVhdGVybmlvbn0gVGhlIEVudGl0eSdzIGdsb2JhbCByb3RhdGlvbiBpbiByZWZlcmVuY2UgdG8gdGhlIHNjZW5lJ3Mgb3JpZ2luXG4gKlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RW50aXR5V29ybGRSb3RhdGlvbihlbnRpdHk6IElFbnRpdHkpOiBRdWF0ZXJuaW9uIHtcbiAgbGV0IGVudGl0eVJvdGF0aW9uOiBRdWF0ZXJuaW9uID0gZW50aXR5Lmhhc0NvbXBvbmVudChUcmFuc2Zvcm0pXG4gICAgPyBlbnRpdHkuZ2V0Q29tcG9uZW50KFRyYW5zZm9ybSkucm90YXRpb24uY2xvbmUoKVxuICAgIDogUXVhdGVybmlvbi5aZXJvKClcbiAgbGV0IHBhcmVudEVudGl0eSA9IGVudGl0eS5nZXRQYXJlbnQoKVxuICBpZiAocGFyZW50RW50aXR5ICE9IG51bGwpIHtcbiAgICBpZiAocGFyZW50RW50aXR5LnV1aWQgPT0gJ0ZpcnN0UGVyc29uQ2FtZXJhRW50aXR5UmVmZXJlbmNlJykge1xuICAgICAgLy9sb2coJ0FUVEFDSEVEIFRPIENBTUVSQScpXG4gICAgICBsZXQgcGFyZW50Um90YXRpb24gPSBDYW1lcmEuaW5zdGFuY2Uucm90YXRpb24uY2xvbmUoKVxuICAgICAgcmV0dXJuIGVudGl0eVJvdGF0aW9uLm11bHRpcGx5KHBhcmVudFJvdGF0aW9uKVxuICAgIH0gZWxzZSBpZiAocGFyZW50RW50aXR5LnV1aWQgPT0gJ0F2YXRhckVudGl0eVJlZmVyZW5jZScpIHtcbiAgICAgIC8vbG9nKCdBVFRBQ0hFRCBUTyBBVkFUQVInKVxuICAgICAgbGV0IHBhcmVudFJvdGF0aW9uID0gUXVhdGVybmlvbi5FdWxlcihcbiAgICAgICAgMCxcbiAgICAgICAgQ2FtZXJhLmluc3RhbmNlLnJvdGF0aW9uLmV1bGVyQW5nbGVzLnksXG4gICAgICAgIDBcbiAgICAgIClcbiAgICAgIHJldHVybiBlbnRpdHlSb3RhdGlvbi5tdWx0aXBseShwYXJlbnRSb3RhdGlvbilcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gICBsZXQgcGFyZW50Um90YXRpb24gPSBwYXJlbnRFbnRpdHkuaGFzQ29tcG9uZW50KFRyYW5zZm9ybSlcbiAgICAgIC8vICAgICA/IHBhcmVudEVudGl0eS5nZXRDb21wb25lbnQoVHJhbnNmb3JtKS5yb3RhdGlvblxuICAgICAgLy8gICAgIDogUXVhdGVybmlvbi5JZGVudGl0eVxuICAgICAgcmV0dXJuIGVudGl0eVJvdGF0aW9uLm11bHRpcGx5KGdldEVudGl0eVdvcmxkUm90YXRpb24ocGFyZW50RW50aXR5KSlcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGVudGl0eVJvdGF0aW9uXG59XG4iLCJpbXBvcnQgeyBpc1ByZXZpZXdNb2RlIH0gZnJvbSAnQGRlY2VudHJhbGFuZC9FbnZpcm9ubWVudEFQSSdcblxuLyoqXG4gKiBRdWljayBmdW5jdGlvbiB0byBhZGQgYSBjdWJlIHRoYXQgY2FuIHJ1biBmdW5jdGlvbnMgd2hlbiBjbGlja2VkLiBCeSBkZWZhdWx0IG9ubHkgZGlzcGxheWVkIHdoZW4gaW4gcHJldmlldyBtb2RlIGZvciB0ZXN0cy5cbiAqXG4gKiBAcGFyYW0ge1RyYW5mb3JtQ29uc3RydWN0b3JBcmdzfSBwb3MgVHJhbnNmb3JtIGFyZ3VtZW50cyBmb3IgdGhlIGN1YmUsIGluY2x1ZGluZyBwb3NpdGlvbiwgc2NhbGUgYW5kIHJvdGF0aW9uXG4gKiBAcGFyYW0geygpID0+IHZvaWR9IHRyaWdnZXJlZEZ1bmN0aW9uIEZ1bmN0aW9uIHRvIGV4ZWN1dGUgZXZlcnkgdGltZSB0aGUgY3ViZSBpcyBjbGlja2VkLlxuICogQHBhcmFtIHtzdHJpbmd9IGxhYmVsIFRleHQgdG8gZGlzcGxheSBvdmVyIGN1YmUgYW5kIG9uIGhvdmVyLlxuICogQHBhcmFtIHtDb2xvcjN9IGNvbG9yIEN1YmUgY29sb3IuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHNwaGVyZSBJZiB0cnVlLCB1c2UgYSBzcGhlcmUgc2hhcGUgaW5zdGVhZCBvZiBjdWJlLlxuICogQHBhcmFtIHtib29sZWFufSBub0NvbGxpZGVyIElmIHRydWUsIGN1YmUgaGFzIG5vIGNvbGxpZGVyLlxuICogQHJldHVybiB7RW50aXR5fSBBIG5ldyBlbnRpdHkgd2l0aCB0aGUgY29uZmlndXJlZCBzZXR0aW5ncyBhbmQgYSBsYWJlbCBhcyBhIGNoaWxkXG4gKlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkVGVzdEN1YmUoXG4gIHBvczogVHJhbmZvcm1Db25zdHJ1Y3RvckFyZ3MsXG4gIHRyaWdnZXJlZEZ1bmN0aW9uOiAoKSA9PiB2b2lkLFxuICBsYWJlbD86IHN0cmluZyxcbiAgY29sb3I/OiBDb2xvcjMsXG4gIHNwaGVyZT86IGJvb2xlYW4sXG4gIG5vQ29sbGlkZXI/OiBib29sZWFuLFxuICBrZWVwSW5Qcm9kdWN0aW9uPzogYm9vbGVhblxuKSB7XG4gIC8vIGlmIG5vdCBpbiBwcmV2aWV3IHJldHVyblxuICBpZiAoIWtlZXBJblByb2R1Y3Rpb24gJiYgKGF3YWl0ICFpc1ByZXZpZXdNb2RlKCkpKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBsZXQgY3ViZSA9IG5ldyBFbnRpdHkoKVxuICBjdWJlLmFkZENvbXBvbmVudChuZXcgVHJhbnNmb3JtKHBvcykpXG4gIGlmIChzcGhlcmUpIHtcbiAgICBjdWJlLmFkZENvbXBvbmVudChuZXcgU3BoZXJlU2hhcGUoKSlcbiAgICBjdWJlLmdldENvbXBvbmVudChUcmFuc2Zvcm0pLnNjYWxlLnNldEFsbCgwLjUpXG4gIH0gZWxzZSB7XG4gICAgY3ViZS5hZGRDb21wb25lbnQobmV3IEJveFNoYXBlKCkpXG4gIH1cblxuICBlbmdpbmUuYWRkRW50aXR5KGN1YmUpXG5cbiAgY3ViZS5hZGRDb21wb25lbnQoXG4gICAgbmV3IE9uUG9pbnRlckRvd24odHJpZ2dlcmVkRnVuY3Rpb24sIHtcbiAgICAgIGhvdmVyVGV4dDogbGFiZWwgPyBsYWJlbCA6ICdjbGljaycsXG4gICAgICBidXR0b246IEFjdGlvbkJ1dHRvbi5QT0lOVEVSXG4gICAgfSlcbiAgKVxuXG4gIGlmIChjb2xvcikge1xuICAgIGxldCBjdWJlTWF0ZXJpYWwgPSBuZXcgTWF0ZXJpYWwoKVxuICAgIGN1YmVNYXRlcmlhbC5hbGJlZG9Db2xvciA9IGNvbG9yXG4gICAgY3ViZS5hZGRDb21wb25lbnQoY3ViZU1hdGVyaWFsKVxuICB9XG5cbiAgaWYgKG5vQ29sbGlkZXIpIHtcbiAgICBjdWJlLmdldENvbXBvbmVudChCb3hTaGFwZSkud2l0aENvbGxpc2lvbnMgPSBmYWxzZVxuICB9XG5cbiAgaWYgKGxhYmVsKSB7XG4gICAgYWRkTGFiZWwobGFiZWwsIGN1YmUsIHRydWUpXG4gIH1cblxuICByZXR1cm4gY3ViZVxufVxuXG4vKipcbiAqIE1hcHMgYSB2YWx1ZSBmcm9tIG9uZSByYW5nZSBvZiB2YWx1ZXMgdG8gaXRzIGVxdWl2YWxlbnQsIHNjYWxlZCBpbiBwcm9wb3J0aW9uIHRvIGFub3RoZXIgcmFuZ2Ugb2YgdmFsdWVzLCB1c2luZyBtYXhpbXVtIGFuZCBtaW5pbXVtLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IFRleHQgdG8gdXNlIG9uIGxhYmVsXG4gKiBAcGFyYW0ge0VudGl0eX0gcGFyZW50IEVudGl0eSB0byBwbGFjZSBsYWJlbCBvbi5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gYmlsbGJvYXJkIElmIHRydWUsIGxhYmVsIHR1cm5zIHRvIGFsd2F5cyBmYWNlIHBsYXllci5cbiAqIEBwYXJhbSB7Q29sb3IzfSBjb2xvciBUZXh0IGNvbG9yLiBCbGFjayBieSBkZWZhdWx0LlxuICogQHBhcmFtIHtudW1iZXJ9IHNpemUgVGV4dCBmb250IHNpemUsIDMgYnkgZGVmYXVsdC5cbiAqIEBwYXJhbSB7VHJhbmZvcm1Db25zdHJ1Y3RvckFyZ3N9IHRleHRPZmZzZXQgT2Zmc2V0IGZyb20gcGFyZW50IGVudGl0eSdzIHBvc2l0aW9uLiBCeSBkZWZhdWx0IDEuNSBtZXRlcnMgYWJvdmUgdGhlIHBhcmVudC5cbiAqIEByZXR1cm4ge0VudGl0eX0gQSBuZXcgZW50aXR5IHdpdGggdGhlIGNvbmZpZ3VyZWQgc2V0dGluZ3MgdGhhdCBpcyBhIGNoaWxkIG9mIHRoZSBwcm92aWRlZCBwYXJlbnRcbiAqXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGRMYWJlbChcbiAgdGV4dDogc3RyaW5nLFxuICBwYXJlbnQ6IElFbnRpdHksXG4gIGJpbGxib2FyZD86IGJvb2xlYW4sXG4gIGNvbG9yPzogQ29sb3IzLFxuICBzaXplPzogbnVtYmVyLFxuICB0ZXh0T2Zmc2V0PzogVHJhbmZvcm1Db25zdHJ1Y3RvckFyZ3Ncbikge1xuICBsZXQgbGFiZWwgPSBuZXcgRW50aXR5KClcbiAgbGFiZWwuYWRkQ29tcG9uZW50KFxuICAgIG5ldyBUcmFuc2Zvcm0oXG4gICAgICB0ZXh0T2Zmc2V0ID8gdGV4dE9mZnNldCA6IHsgcG9zaXRpb246IG5ldyBWZWN0b3IzKDAsIDEuNSwgMCkgfVxuICAgIClcbiAgKVxuICBsYWJlbC5zZXRQYXJlbnQocGFyZW50KVxuICBsZXQgdGV4dFNoYXBlID0gbmV3IFRleHRTaGFwZSh0ZXh0KVxuICB0ZXh0U2hhcGUuZm9udFNpemUgPSBzaXplID8gc2l6ZSA6IDNcbiAgdGV4dFNoYXBlLmNvbG9yID0gY29sb3IgPyBjb2xvciA6IENvbG9yMy5CbGFjaygpXG4gIGxhYmVsLmFkZENvbXBvbmVudCh0ZXh0U2hhcGUpXG4gIGlmIChiaWxsYm9hcmQpIHtcbiAgICBsYWJlbC5hZGRDb21wb25lbnQobmV3IEJpbGxib2FyZCgpKVxuICB9XG4gIGVuZ2luZS5hZGRFbnRpdHkobGFiZWwpXG5cbiAgcmV0dXJuIGxhYmVsXG59XG4iLCIvKipcbiAqIFF1aWNrIGZ1bmN0aW9uIHRvIHNlbmQgSFRUUCByZXF1ZXN0cyB0byBhbiBleHRlcm5hbCBhZGRyZXNzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCBVUkwgdG8gc2VuZCByZXF1ZXN0IHRvXG4gKiBAcGFyYW0ge3N0cmluZ30gbWV0aG9kIEhUVFAgbWV0aG9kIChHRVQgYnkgZGVmYXVsdClcbiAqIEBwYXJhbSB7Kn0gaGVhZGVycyBIZWFkZXJzIHRvIGFkZCB0byByZXF1ZXN0LCBhcyBhIEpTT04gd2l0aCBrZXkvdmFsdWUgcGFpcnMgcGVyIGVhY2ggaGVhZGVyXG4gKiBAcGFyYW0geyp9IGJvZHkgQm9keSB0byBhZGQgdG8gcmVxdWVzdCwgYXMgYSBKU09OIG9iamVjdFxuICogQHJldHVybiB7Kn0gVGhlIHJlc3BvbnNlIG9mIHRoZSByZXF1ZXN0LiBJZiB0aGUgcmVzcG9uc2UgaXMgYSBKU09OIG9iamVjdCwgaXQgd2lsbCBiZSBwYXJzZWQuXG4gKlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2VuZFJlcXVlc3QoXG4gIHVybDogc3RyaW5nLFxuICBtZXRob2Q/OiBzdHJpbmcsXG4gIGhlYWRlcnM/OiBhbnksXG4gIGJvZHk/OiBhbnlcbikge1xuICB0cnkge1xuICAgIGxldCBwcm9wc09iamVjdDogcmVxdWVzdERhdGEgPSB7XG4gICAgICBtZXRob2Q6IG1ldGhvZCA/IG1ldGhvZCA6ICdHRVQnXG4gICAgfVxuXG4gICAgaWYgKGhlYWRlcnMpIHtcbiAgICAgIHByb3BzT2JqZWN0LmhlYWRlcnMgPSBoZWFkZXJzXG4gICAgfVxuXG4gICAgaWYgKGJvZHkpIHtcbiAgICAgIHByb3BzT2JqZWN0LmJvZHkgPSBKU09OLnN0cmluZ2lmeShib2R5KVxuICAgIH1cblxuICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwgcHJvcHNPYmplY3QpXG4gICAgdHJ5IHtcbiAgICAgIGxldCBqc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gICAgICByZXR1cm4ganNvblxuICAgIH0gY2F0Y2gge1xuICAgICAgcmV0dXJuIHJlc3BvbnNlXG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGxvZygnZXJyb3IgZmV0Y2hpbmcgZnJvbSAnLCB1cmwsICcgOiAnLCBlcnJvcilcbiAgfVxufVxuXG4vKipcbiAqIERhdGEgdG8gY29uc3RydWN0IGFuIEhUVFAgUmVxdWVzdFxuICpcbiAqIEB0eXBlZGVmIHtPYmplY3R9IHJlcXVlc3REYXRhXG4gKiBAcHJvcGVydHkge3N0cmluZ30gbWV0aG9kIFRoZSBIVFRQIG1ldGhvZCAoR0VULCBQT1NULCBERUxFVEUsIFBVVCwgZXRjKVxuICogQHByb3BlcnR5IHthbnl9IGhlYWRlcnMgQW4gb2JqZWN0IHdpdGggb3B0aW9uYWwgaGVhZGVycyB0byBzZW5kIHdpdGggdGhlIHJlcXVlc3RcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBib2R5IEEgc3RyaW5naWZpZWQgSlNPTiB0byB1c2UgYXMgYSBib2R5IG9uIGEgcmVxdWVzdFxuICpcbiAqL1xuZXhwb3J0IHR5cGUgcmVxdWVzdERhdGEgPSB7XG4gIG1ldGhvZDogc3RyaW5nXG4gIGhlYWRlcnM/OiBhbnlcbiAgYm9keT86IHN0cmluZ1xufVxuIiwiaW1wb3J0IHsgaXNQcmV2aWV3TW9kZSB9IGZyb20gJ0BkZWNlbnRyYWxhbmQvRW52aXJvbm1lbnRBUEknXG5cbi8qKlxuICpcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFRyaWdnZXJEYXRhIC0gT2JqZWN0IHdpdGggZGF0YSBmb3IgYSBOUENUcmlnZ2VyQ29tcG9uZW50XG4gKiBAcHJvcGVydHkge251bWJlcn0gbGF5ZXIgIGxheWVyIG9mIHRoZSBUcmlnZ2VyLCB1c2VmdWwgdG8gZGlzY3JpbWluYXRlIGJldHdlZW4gdHJpZ2dlciBldmVudHMuIFlvdSBjYW4gc2V0IG11bHRpcGxlIGxheWVycyBieSB1c2luZyBhIHwgc3ltYm9sLlxuICogQHByb3BlcnR5IHtudW1iZXJ9IHRyaWdnZXJlZEJ5TGF5ZXIgYWdhaW5zdCB3aGljaCBsYXllcnMgdG8gY2hlY2sgY29sbGlzaW9uc1xuICogQHByb3BlcnR5IHsoZW50aXR5OiBFbnRpdHkpID0+IHZvaWQgfSBvblRyaWdnZXJFbnRlciBjYWxsYmFjayB3aGVuIGFuIGVudGl0eSBvZiBhIHZhbGlkIGxheWVyIGVudGVycyB0aGUgdHJpZ2dlciBhcmVhXG4gKiBAcHJvcGVydHkgeyhlbnRpdHk6IEVudGl0eSkgPT4gdm9pZH0gb25UcmlnZ2VyRXhpdCBjYWxsYmFjayB3aGVuIGFuIGVudGl0eSBvZiBhIHZhbGlkIGxheWVyIGxlYXZlcyB0aGUgdHJpZ2dlciBhcmVhXG4gKiBAcHJvcGVydHkgeygpID0+IHZvaWR9IG9uQ2FtZXJhRW50ZXIgY2FsbGJhY2sgd2hlbiB0aGUgcGxheWVyIGVudGVycyB0aGUgdHJpZ2dlciBhcmVhXG4gKiBAcHJvcGVydHkgeygpID0+IHZvaWR9IG9uQ2FtZXJhRXhpdCBjYWxsYmFjayB3aGVuIHRoZSBwbGF5ZXIgbGVhdmVzIHRoZSB0cmlnZ2VyIGFyZWFcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gZW5hYmxlRGVidWcgd2hlbiB0cnVlIG1ha2VzIHRoZSB0cmlnZ2VyIGFyZWEgdmlzaWJsZSBmb3IgZGVidWcgcHVycG9zZXMuXG4gKi9cbmV4cG9ydCB0eXBlIFRyaWdnZXJEYXRhID0ge1xuICBsYXllcj86IG51bWJlclxuICB0cmlnZ2VyZWRCeUxheWVyPzogbnVtYmVyXG4gIG9uVHJpZ2dlckVudGVyPzogKGVudGl0eTogRW50aXR5KSA9PiB2b2lkXG4gIG9uVHJpZ2dlckV4aXQ/OiAoZW50aXR5OiBFbnRpdHkpID0+IHZvaWRcbiAgb25DYW1lcmFFbnRlcj86ICgpID0+IHZvaWRcbiAgb25DYW1lcmFFeGl0PzogKCkgPT4gdm9pZFxuICBlbmFibGVEZWJ1Zz86IGJvb2xlYW5cbn1cblxuZXhwb3J0IGNsYXNzIFRyaWdnZXJTeXN0ZW0gaW1wbGVtZW50cyBJU3lzdGVtIHtcbiAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBUcmlnZ2VyU3lzdGVtIHwgbnVsbCA9IG51bGxcbiAgc3RhdGljIGdldCBpbnN0YW5jZSgpOiBUcmlnZ2VyU3lzdGVtIHtcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVBbmRBZGRUb0VuZ2luZSgpXG4gIH1cblxuICBwcml2YXRlIF90cmlnZ2VyczogUmVjb3JkPHN0cmluZywgVHJpZ2dlcldyYXBwZXI+ID0ge31cbiAgcHJpdmF0ZSBfY2FtZXJhVHJpZ2dlcldyYXBwZXI6IENhbWVyYVRyaWdnZXJcbiAgcHJpdmF0ZSBfY29tcG9uZW50R3JvdXA6IENvbXBvbmVudEdyb3VwXG5cbiAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHtcbiAgICBUcmlnZ2VyU3lzdGVtLl9pbnN0YW5jZSA9IHRoaXNcbiAgICB0aGlzLl9jYW1lcmFUcmlnZ2VyV3JhcHBlciA9IG5ldyBDYW1lcmFUcmlnZ2VyKFxuICAgICAgbmV3IFRyaWdnZXJCb3hTaGFwZShuZXcgVmVjdG9yMygwLjUsIDEuOCwgMC41KSwgbmV3IFZlY3RvcjMoMCwgMC45MSwgMCkpXG4gICAgKVxuXG4gICAgdGhpcy5fY29tcG9uZW50R3JvdXAgPSBlbmdpbmUuZ2V0Q29tcG9uZW50R3JvdXAoVHJpZ2dlckNvbXBvbmVudClcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVBbmRBZGRUb0VuZ2luZSgpOiBUcmlnZ2VyU3lzdGVtIHtcbiAgICBpZiAodGhpcy5faW5zdGFuY2UgPT0gbnVsbCkge1xuICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgVHJpZ2dlclN5c3RlbSgpXG4gICAgICBlbmdpbmUuYWRkU3lzdGVtKHRoaXMuX2luc3RhbmNlKVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5faW5zdGFuY2VcbiAgfVxuXG4gIC8qKlxuICAgKiBzZXQgYSBjdXN0b20gdHJpZ2dlcidzIHNoYXBlIGZvciB0aGUgY2FtZXJhXG4gICAqIEBwYXJhbSB7VHJpZ2dlckJveFNoYXBlIHwgVHJpZ2dlclNwaGVyZVNoYXBlfSBzaGFwZSBjdXN0b20gdHJpZ2dlcidzIHNoYXBlXG4gICAqL1xuICBzZXRDYW1lcmFUcmlnZ2VyU2hhcGUoc2hhcGU6IFRyaWdnZXJCb3hTaGFwZSB8IFRyaWdnZXJTcGhlcmVTaGFwZSkge1xuICAgIHRoaXMuX2NhbWVyYVRyaWdnZXJXcmFwcGVyLnNldFNoYXBlKHNoYXBlKVxuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIGxldCBlbnRpdGllc1dpdGhUcmlnZ2VycyA9IHRoaXMuX2NvbXBvbmVudEdyb3VwLmVudGl0aWVzXG5cbiAgICAvL2l0ZXJhdGUgdGhyb3VnaCBhbGwgZW50aXRpZXMgd2l0aCB0cmlnZ2VycyBhbmQgd3JhcCBlbnRpdGllcyB0aGF0IHdlcmVuJ3Qgd3JhcHBlZCB5ZXRcbiAgICBlbnRpdGllc1dpdGhUcmlnZ2Vycy5mb3JFYWNoKGVudGl0eSA9PiB7XG4gICAgICBpZiAodGhpcy5zaG91bGRXcmFwVHJpZ2dlckVudGl0eShlbnRpdHkpKSB7XG4gICAgICAgIHRoaXMud3JhcFRyaWdnZXJFbnRpdHkoZW50aXR5KVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvL2l0ZXJhdGUgdGhyb3VnaCB3cmFwcGVkIGVudGl0aWVzXG4gICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5fdHJpZ2dlcnMpIHtcbiAgICAgIGlmICh0aGlzLl90cmlnZ2Vycy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIGxldCB3cmFwcGVyID0gdGhpcy5fdHJpZ2dlcnNba2V5XVxuXG4gICAgICAgIC8vdXBkYXRlIGRlYnVnIGVudGl0eVxuICAgICAgICBpZiAod3JhcHBlci5pc0RlYnVnZ2luZygpKSB7XG4gICAgICAgICAgd3JhcHBlci51cGRhdGVEZWJ1Z0VudGl0eSgpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXdyYXBwZXIuaXNJbkVuZ2luZSgpKSB7XG4gICAgICAgICAgLy9yZW1vdmUgZGVidWdnaW5nXG4gICAgICAgICAgaWYgKHdyYXBwZXIuaXNEZWJ1Z2dpbmcoKSkge1xuICAgICAgICAgICAgd3JhcHBlci5yZW1vdmVEZWJ1Z0VudGl0eSgpXG4gICAgICAgICAgfVxuICAgICAgICAgIC8vcmVtb3ZlIG9sZCBjb2xsaXNpb25zXG4gICAgICAgICAgVHJpZ2dlclN5c3RlbS5yZW1vdmVUcmlnZ2VyRnJvbVN5c3RlbSh3cmFwcGVyKVxuICAgICAgICAgIC8vcmVtb3ZlIGZyb20gcmVjb3JkXG4gICAgICAgICAgZGVsZXRlIHRoaXMuX3RyaWdnZXJzW2tleV1cbiAgICAgICAgfSBlbHNlIGlmICh3cmFwcGVyLnRyaWdnZXIgIT0gbnVsbCAmJiB3cmFwcGVyLnRyaWdnZXIuZW5hYmxlZCkge1xuICAgICAgICAgIC8vaWYgd2FzIHNldCBhcyBlbmFibGVkIGluIGxhc3QgZnJhbWVcbiAgICAgICAgICBpZiAoIXdyYXBwZXIud2FzRW5hYmxlZCkge1xuICAgICAgICAgICAgaWYgKHdyYXBwZXIuaXNEZWJ1Z2dpbmcoKSkge1xuICAgICAgICAgICAgICB3cmFwcGVyLmFkZERlYnVnRW50aXR5KClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgLy9zZXQgYXMgZW5hYmxlZFxuICAgICAgICAgIHdyYXBwZXIud2FzRW5hYmxlZCA9IHRydWVcblxuICAgICAgICAgIC8vY2hlY2sgY29sbGlzaW9uIGNhbWVyYVxuICAgICAgICAgIGlmICh3cmFwcGVyLnRyaWdnZXIub25DYW1lcmFFbnRlciB8fCB3cmFwcGVyLnRyaWdnZXIub25DYW1lcmFFeGl0KSB7XG4gICAgICAgICAgICB0aGlzLmNoZWNrQ29sbGlzaW9uQWdhaW5zdENhbWVyYSh3cmFwcGVyKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vY2hlY2sgY29sbGlzaW9uIHdpdGggb3RoZXJzXG4gICAgICAgICAgaWYgKHdyYXBwZXIudHJpZ2dlci5vblRyaWdnZXJFbnRlciB8fCB3cmFwcGVyLnRyaWdnZXIub25UcmlnZ2VyRXhpdCkge1xuICAgICAgICAgICAgdGhpcy5jaGVja0NvbGxpc2lvbkFnYWluc3RPdGhlclRyaWdnZXJzKHdyYXBwZXIpXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHdyYXBwZXIud2FzRW5hYmxlZCkge1xuICAgICAgICAgIHdyYXBwZXIud2FzRW5hYmxlZCA9IGZhbHNlXG4gICAgICAgICAgLy9yZW1vdmUgZGVidWdnaW5nXG4gICAgICAgICAgaWYgKHdyYXBwZXIuaXNEZWJ1Z2dpbmcoKSkge1xuICAgICAgICAgICAgd3JhcHBlci5yZW1vdmVEZWJ1Z0VudGl0eSgpXG4gICAgICAgICAgfVxuICAgICAgICAgIFRyaWdnZXJTeXN0ZW0ucmVtb3ZlVHJpZ2dlckZyb21TeXN0ZW0od3JhcHBlcilcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2hvdWxkV3JhcFRyaWdnZXJFbnRpdHkoZW50aXR5OiBJRW50aXR5KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuX3RyaWdnZXJzW2VudGl0eS51dWlkXSA9PSB1bmRlZmluZWQgfHxcbiAgICAgIHRoaXMuX3RyaWdnZXJzW2VudGl0eS51dWlkXSA9PSBudWxsXG4gICAgKVxuICB9XG5cbiAgcHJpdmF0ZSB3cmFwVHJpZ2dlckVudGl0eShlbnRpdHk6IElFbnRpdHkpIHtcbiAgICB0aGlzLl90cmlnZ2Vyc1tlbnRpdHkudXVpZF0gPSBuZXcgVHJpZ2dlcldyYXBwZXIoZW50aXR5IGFzIEVudGl0eSlcbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIHJlbW92ZVRyaWdnZXJGcm9tU3lzdGVtKHdyYXBwZXI6IFRyaWdnZXJXcmFwcGVyKSB7XG4gICAgbGV0IGFjdGl2ZUNvbGxpc2lvbnMgPSB3cmFwcGVyLmdldEFjdGl2ZUNvbGxpc2lvbnMoKVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWN0aXZlQ29sbGlzaW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGFjdGl2ZUNvbGxpc2lvbkhhc1RyaWdnZXIgPSAhKFxuICAgICAgICBhY3RpdmVDb2xsaXNpb25zW2ldID09PVxuICAgICAgICAgIFRyaWdnZXJTeXN0ZW0uX2luc3RhbmNlPy5fY2FtZXJhVHJpZ2dlcldyYXBwZXIgfHxcbiAgICAgICAgYWN0aXZlQ29sbGlzaW9uc1tpXS50cmlnZ2VyID09IG51bGxcbiAgICAgIClcblxuICAgICAgaWYgKFxuICAgICAgICBhY3RpdmVDb2xsaXNpb25IYXNUcmlnZ2VyICYmXG4gICAgICAgIGFjdGl2ZUNvbGxpc2lvbnNbaV0udHJpZ2dlci5vblRyaWdnZXJFeGl0ICYmXG4gICAgICAgIHdyYXBwZXIuZW50aXR5XG4gICAgICApXG4gICAgICAgIChhY3RpdmVDb2xsaXNpb25zW2ldLnRyaWdnZXIub25UcmlnZ2VyRXhpdCBhcyAoXG4gICAgICAgICAgZW50aXR5OiBJRW50aXR5XG4gICAgICAgICkgPT4gdm9pZCkod3JhcHBlci5lbnRpdHkpXG4gICAgICBhY3RpdmVDb2xsaXNpb25zW2ldLmRpc2VuZ2FnZUFjdGl2ZUNvbGxpc2lvbih3cmFwcGVyKVxuICAgICAgd3JhcHBlci5kaXNlbmdhZ2VBY3RpdmVDb2xsaXNpb24oYWN0aXZlQ29sbGlzaW9uc1tpXSlcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyBkaXNlbmdhZ2VDb2xsaXNpb24odDE6IFRyaWdnZXJXcmFwcGVyLCB0MjogVHJpZ2dlcldyYXBwZXIpIHtcbiAgICB0MS5kaXNlbmdhZ2VBY3RpdmVDb2xsaXNpb24odDIpXG4gICAgdDIuZGlzZW5nYWdlQWN0aXZlQ29sbGlzaW9uKHQxKVxuXG4gICAgaWYgKHQxLnRyaWdnZXIub25UcmlnZ2VyRXhpdCAmJiB0Mi5lbnRpdHkpXG4gICAgICB0MS50cmlnZ2VyLm9uVHJpZ2dlckV4aXQodDIuZW50aXR5KVxuICAgIGlmICh0Mi50cmlnZ2VyLm9uVHJpZ2dlckV4aXQgJiYgdDEuZW50aXR5KVxuICAgICAgdDIudHJpZ2dlci5vblRyaWdnZXJFeGl0KHQxLmVudGl0eSlcbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIGVuZ2FnZUNvbGxpc2lvbih0MTogVHJpZ2dlcldyYXBwZXIsIHQyOiBUcmlnZ2VyV3JhcHBlcikge1xuICAgIHQxLmVuZ2FnZUNvbGxpc2lvbih0MilcbiAgICB0Mi5lbmdhZ2VDb2xsaXNpb24odDEpXG5cbiAgICBpZiAodDEudHJpZ2dlci5vblRyaWdnZXJFbnRlciAmJiB0Mi5lbnRpdHkpXG4gICAgICB0MS50cmlnZ2VyLm9uVHJpZ2dlckVudGVyKHQyLmVudGl0eSlcbiAgICBpZiAodDIudHJpZ2dlci5vblRyaWdnZXJFbnRlciAmJiB0MS5lbnRpdHkpXG4gICAgICB0Mi50cmlnZ2VyLm9uVHJpZ2dlckVudGVyKHQxLmVudGl0eSlcbiAgfVxuXG4gIHByaXZhdGUgY2hlY2tDb2xsaXNpb25BZ2FpbnN0Q2FtZXJhKHdyYXBwZXI6IFRyaWdnZXJXcmFwcGVyKSB7XG4gICAgbGV0IHdlcmVDb2xsaWRpbmcgPSB3cmFwcGVyLmhhc0FjdGl2ZUNvbGxpc2lvbih0aGlzLl9jYW1lcmFUcmlnZ2VyV3JhcHBlcilcbiAgICBsZXQgYXJlQ29sbGlkaW5nID0gVHJpZ2dlclN5c3RlbS5hcmVDb2xsaWRpbmcoXG4gICAgICB3cmFwcGVyLFxuICAgICAgdGhpcy5fY2FtZXJhVHJpZ2dlcldyYXBwZXJcbiAgICApXG5cbiAgICBpZiAod2VyZUNvbGxpZGluZyAmJiAhYXJlQ29sbGlkaW5nKSB7XG4gICAgICB3cmFwcGVyLmRpc2VuZ2FnZUFjdGl2ZUNvbGxpc2lvbih0aGlzLl9jYW1lcmFUcmlnZ2VyV3JhcHBlcilcbiAgICAgIGlmICh3cmFwcGVyLnRyaWdnZXIub25DYW1lcmFFeGl0KSB3cmFwcGVyLnRyaWdnZXIub25DYW1lcmFFeGl0KClcbiAgICB9IGVsc2UgaWYgKCF3ZXJlQ29sbGlkaW5nICYmIGFyZUNvbGxpZGluZykge1xuICAgICAgd3JhcHBlci5lbmdhZ2VDb2xsaXNpb24odGhpcy5fY2FtZXJhVHJpZ2dlcldyYXBwZXIpXG4gICAgICBpZiAod3JhcHBlci50cmlnZ2VyLm9uQ2FtZXJhRW50ZXIpIHdyYXBwZXIudHJpZ2dlci5vbkNhbWVyYUVudGVyKClcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNoZWNrQ29sbGlzaW9uQWdhaW5zdE90aGVyVHJpZ2dlcnMod3JhcHBlcjogVHJpZ2dlcldyYXBwZXIpIHtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLl90cmlnZ2Vycykge1xuICAgICAgaWYgKHRoaXMuX3RyaWdnZXJzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgaWYgKGtleSAhPSB3cmFwcGVyLnV1aWQgJiYgdGhpcy5fdHJpZ2dlcnNba2V5XS50cmlnZ2VyLmVuYWJsZWQpIHtcbiAgICAgICAgICBpZiAoVHJpZ2dlclN5c3RlbS5jYW5UcmlnZ2Vyc0NvbGxpZGUod3JhcHBlciwgdGhpcy5fdHJpZ2dlcnNba2V5XSkpIHtcbiAgICAgICAgICAgIGxldCB3ZXJlQ29sbGlkaW5nID0gd3JhcHBlci5oYXNBY3RpdmVDb2xsaXNpb24odGhpcy5fdHJpZ2dlcnNba2V5XSlcbiAgICAgICAgICAgIGxldCBhcmVDb2xsaWRpbmcgPSBUcmlnZ2VyU3lzdGVtLmFyZUNvbGxpZGluZyhcbiAgICAgICAgICAgICAgd3JhcHBlcixcbiAgICAgICAgICAgICAgdGhpcy5fdHJpZ2dlcnNba2V5XVxuICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICBpZiAod2VyZUNvbGxpZGluZyAmJiAhYXJlQ29sbGlkaW5nKVxuICAgICAgICAgICAgICBUcmlnZ2VyU3lzdGVtLmRpc2VuZ2FnZUNvbGxpc2lvbih3cmFwcGVyLCB0aGlzLl90cmlnZ2Vyc1trZXldKVxuICAgICAgICAgICAgZWxzZSBpZiAoIXdlcmVDb2xsaWRpbmcgJiYgYXJlQ29sbGlkaW5nKVxuICAgICAgICAgICAgICBUcmlnZ2VyU3lzdGVtLmVuZ2FnZUNvbGxpc2lvbih3cmFwcGVyLCB0aGlzLl90cmlnZ2Vyc1trZXldKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIGNhblRyaWdnZXJzQ29sbGlkZShcbiAgICB0MTogVHJpZ2dlcldyYXBwZXIsXG4gICAgdDI6IFRyaWdnZXJXcmFwcGVyXG4gICk6IGJvb2xlYW4ge1xuICAgIGlmICh0MS50cmlnZ2VyLnRyaWdnZXJlZEJ5TGF5ZXIgPT0gMCkgcmV0dXJuIHRydWVcbiAgICByZXR1cm4gKHQyLnRyaWdnZXIubGF5ZXIgJiB0MS50cmlnZ2VyLnRyaWdnZXJlZEJ5TGF5ZXIpICE9IDBcbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIGFyZUNvbGxpZGluZyh0MTogVHJpZ2dlcldyYXBwZXIsIHQyOiBUcmlnZ2VyV3JhcHBlcik6IGJvb2xlYW4ge1xuICAgIGlmIChcbiAgICAgIHQxLmdldFNoYXBlKCkgaW5zdGFuY2VvZiBUcmlnZ2VyQm94U2hhcGUgJiZcbiAgICAgIHQyLmdldFNoYXBlKCkgaW5zdGFuY2VvZiBUcmlnZ2VyQm94U2hhcGVcbiAgICApIHtcbiAgICAgIHJldHVybiBUcmlnZ2VyU3lzdGVtLmFyZUNvbGxpZGluZ0FBQkIoXG4gICAgICAgIHQxLmdldEdsb2JhbFBvc2l0aW9uKCksXG4gICAgICAgIHQxLmdldFNoYXBlKCkgYXMgVHJpZ2dlckJveFNoYXBlLFxuICAgICAgICB0Mi5nZXRHbG9iYWxQb3NpdGlvbigpLFxuICAgICAgICB0Mi5nZXRTaGFwZSgpIGFzIFRyaWdnZXJCb3hTaGFwZVxuICAgICAgKVxuICAgIH0gZWxzZSBpZiAoXG4gICAgICB0MS5nZXRTaGFwZSgpIGluc3RhbmNlb2YgVHJpZ2dlclNwaGVyZVNoYXBlICYmXG4gICAgICB0Mi5nZXRTaGFwZSgpIGluc3RhbmNlb2YgVHJpZ2dlclNwaGVyZVNoYXBlXG4gICAgKSB7XG4gICAgICByZXR1cm4gVHJpZ2dlclN5c3RlbS5hcmVDb2xsaWRpbmdTcGhlcmUoXG4gICAgICAgIHQxLmdldEdsb2JhbFBvc2l0aW9uKCksXG4gICAgICAgIHQxLmdldFNoYXBlKCkgYXMgVHJpZ2dlclNwaGVyZVNoYXBlLFxuICAgICAgICB0Mi5nZXRHbG9iYWxQb3NpdGlvbigpLFxuICAgICAgICB0Mi5nZXRTaGFwZSgpIGFzIFRyaWdnZXJTcGhlcmVTaGFwZVxuICAgICAgKVxuICAgIH0gZWxzZSBpZiAoXG4gICAgICB0MS5nZXRTaGFwZSgpIGluc3RhbmNlb2YgVHJpZ2dlckJveFNoYXBlICYmXG4gICAgICB0Mi5nZXRTaGFwZSgpIGluc3RhbmNlb2YgVHJpZ2dlclNwaGVyZVNoYXBlXG4gICAgKSB7XG4gICAgICByZXR1cm4gVHJpZ2dlclN5c3RlbS5hcmVDb2xsaWRpbmdBQUJCU3BoZXJlKFxuICAgICAgICB0MS5nZXRHbG9iYWxQb3NpdGlvbigpLFxuICAgICAgICB0MS5nZXRTaGFwZSgpIGFzIFRyaWdnZXJCb3hTaGFwZSxcbiAgICAgICAgdDIuZ2V0R2xvYmFsUG9zaXRpb24oKSxcbiAgICAgICAgdDIuZ2V0U2hhcGUoKSBhcyBUcmlnZ2VyU3BoZXJlU2hhcGVcbiAgICAgIClcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgdDEuZ2V0U2hhcGUoKSBpbnN0YW5jZW9mIFRyaWdnZXJTcGhlcmVTaGFwZSAmJlxuICAgICAgdDIuZ2V0U2hhcGUoKSBpbnN0YW5jZW9mIFRyaWdnZXJCb3hTaGFwZVxuICAgICkge1xuICAgICAgcmV0dXJuIFRyaWdnZXJTeXN0ZW0uYXJlQ29sbGlkaW5nQUFCQlNwaGVyZShcbiAgICAgICAgdDIuZ2V0R2xvYmFsUG9zaXRpb24oKSxcbiAgICAgICAgdDIuZ2V0U2hhcGUoKSBhcyBUcmlnZ2VyQm94U2hhcGUsXG4gICAgICAgIHQxLmdldEdsb2JhbFBvc2l0aW9uKCksXG4gICAgICAgIHQxLmdldFNoYXBlKCkgYXMgVHJpZ2dlclNwaGVyZVNoYXBlXG4gICAgICApXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgYXJlQ29sbGlkaW5nQUFCQihcbiAgICB0MUdsb2JhbFBvc2l0aW9uOiBWZWN0b3IzLFxuICAgIHQxU2hhcGU6IFRyaWdnZXJCb3hTaGFwZSxcbiAgICB0Mkdsb2JhbFBvc2l0aW9uOiBWZWN0b3IzLFxuICAgIHQyU2hhcGU6IFRyaWdnZXJCb3hTaGFwZVxuICApOiBib29sZWFuIHtcbiAgICBsZXQgdDEgPSBUcmlnZ2VyU3lzdGVtLmdldEJveFNoYXBlVmFsdWVzKHQxR2xvYmFsUG9zaXRpb24sIHQxU2hhcGUpXG4gICAgbGV0IHQyID0gVHJpZ2dlclN5c3RlbS5nZXRCb3hTaGFwZVZhbHVlcyh0Mkdsb2JhbFBvc2l0aW9uLCB0MlNoYXBlKVxuICAgIHJldHVybiAoXG4gICAgICB0MS5taW4ueCA8PSB0Mi5tYXgueCAmJlxuICAgICAgdDEubWF4LnggPj0gdDIubWluLnggJiZcbiAgICAgIHQxLm1pbi55IDw9IHQyLm1heC55ICYmXG4gICAgICB0MS5tYXgueSA+PSB0Mi5taW4ueSAmJlxuICAgICAgdDEubWluLnogPD0gdDIubWF4LnogJiZcbiAgICAgIHQxLm1heC56ID49IHQyLm1pbi56XG4gICAgKVxuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgYXJlQ29sbGlkaW5nU3BoZXJlKFxuICAgIHQxR2xvYmFsUG9zaXRpb246IFZlY3RvcjMsXG4gICAgdDFTaGFwZTogVHJpZ2dlclNwaGVyZVNoYXBlLFxuICAgIHQyR2xvYmFsUG9zaXRpb246IFZlY3RvcjMsXG4gICAgdDJTaGFwZTogVHJpZ2dlclNwaGVyZVNoYXBlXG4gICk6IGJvb2xlYW4ge1xuICAgIGxldCBzcURpc3QgPSBWZWN0b3IzLkRpc3RhbmNlU3F1YXJlZChcbiAgICAgIHQxR2xvYmFsUG9zaXRpb24uYWRkKHQxU2hhcGUucG9zaXRpb24pLFxuICAgICAgdDJHbG9iYWxQb3NpdGlvbi5hZGQodDJTaGFwZS5wb3NpdGlvbilcbiAgICApXG4gICAgcmV0dXJuIChcbiAgICAgIHNxRGlzdCA8IHQxU2hhcGUucmFkaXVzICogdDFTaGFwZS5yYWRpdXMgKyB0MlNoYXBlLnJhZGl1cyAqIHQyU2hhcGUucmFkaXVzXG4gICAgKVxuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgYXJlQ29sbGlkaW5nQUFCQlNwaGVyZShcbiAgICB0MUdsb2JhbFBvc2l0aW9uOiBWZWN0b3IzLFxuICAgIHQxU2hhcGU6IFRyaWdnZXJCb3hTaGFwZSxcbiAgICB0Mkdsb2JhbFBvc2l0aW9uOiBWZWN0b3IzLFxuICAgIHQyU2hhcGU6IFRyaWdnZXJTcGhlcmVTaGFwZVxuICApOiBib29sZWFuIHtcbiAgICBsZXQgYm94ID0gVHJpZ2dlclN5c3RlbS5nZXRCb3hTaGFwZVZhbHVlcyh0MUdsb2JhbFBvc2l0aW9uLCB0MVNoYXBlKVxuICAgIGxldCBzcGhlcmUgPSB7XG4gICAgICBjZW50ZXI6IHQyR2xvYmFsUG9zaXRpb24uYWRkKHQyU2hhcGUucG9zaXRpb24pLFxuICAgICAgcmFkaXVzOiB0MlNoYXBlLnJhZGl1c1xuICAgIH1cblxuICAgIGxldCBkbWluID0gMFxuICAgIGlmIChzcGhlcmUuY2VudGVyLnggPCBib3gubWluLngpXG4gICAgICBkbWluICs9IChib3gubWluLnggLSBzcGhlcmUuY2VudGVyLngpICogKGJveC5taW4ueCAtIHNwaGVyZS5jZW50ZXIueClcbiAgICBpZiAoc3BoZXJlLmNlbnRlci54ID4gYm94Lm1heC54KVxuICAgICAgZG1pbiArPSAoc3BoZXJlLmNlbnRlci54IC0gYm94Lm1heC54KSAqIChzcGhlcmUuY2VudGVyLnggLSBib3gubWF4LngpXG4gICAgaWYgKHNwaGVyZS5jZW50ZXIueSA8IGJveC5taW4ueSlcbiAgICAgIGRtaW4gKz0gKGJveC5taW4ueSAtIHNwaGVyZS5jZW50ZXIueSkgKiAoYm94Lm1pbi55IC0gc3BoZXJlLmNlbnRlci55KVxuICAgIGlmIChzcGhlcmUuY2VudGVyLnkgPiBib3gubWF4LnkpXG4gICAgICBkbWluICs9IChzcGhlcmUuY2VudGVyLnkgLSBib3gubWF4LnkpICogKHNwaGVyZS5jZW50ZXIueSAtIGJveC5tYXgueSlcbiAgICBpZiAoc3BoZXJlLmNlbnRlci56IDwgYm94Lm1pbi56KVxuICAgICAgZG1pbiArPSAoYm94Lm1pbi56IC0gc3BoZXJlLmNlbnRlci56KSAqIChib3gubWluLnogLSBzcGhlcmUuY2VudGVyLnopXG4gICAgaWYgKHNwaGVyZS5jZW50ZXIueiA+IGJveC5tYXgueilcbiAgICAgIGRtaW4gKz0gKHNwaGVyZS5jZW50ZXIueiAtIGJveC5tYXgueikgKiAoc3BoZXJlLmNlbnRlci56IC0gYm94Lm1heC56KVxuXG4gICAgcmV0dXJuIGRtaW4gPCBzcGhlcmUucmFkaXVzICogc3BoZXJlLnJhZGl1c1xuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgZ2V0Qm94U2hhcGVWYWx1ZXMoXG4gICAgZW50aXR5R2xvYmFsUG9zaXRpb246IFZlY3RvcjMsXG4gICAgc2hhcGU6IFRyaWdnZXJCb3hTaGFwZVxuICApOiB7IGNlbnRlcjogVmVjdG9yMzsgbWluOiBWZWN0b3IzOyBtYXg6IFZlY3RvcjMgfSB7XG4gICAgbGV0IGNlbnRlciA9IGVudGl0eUdsb2JhbFBvc2l0aW9uLmFkZChzaGFwZS5wb3NpdGlvbilcbiAgICByZXR1cm4ge1xuICAgICAgY2VudGVyOiBjZW50ZXIsXG4gICAgICBtaW46IGNlbnRlci5zdWJ0cmFjdChzaGFwZS5zaXplLnNjYWxlKDAuNSkpLFxuICAgICAgbWF4OiBjZW50ZXIuYWRkKHNoYXBlLnNpemUuc2NhbGUoMC41KSlcbiAgICB9XG4gIH1cbn1cblxuY2xhc3MgVHJpZ2dlcldyYXBwZXIge1xuICB3YXNFbmFibGVkOiBib29sZWFuID0gdHJ1ZVxuXG4gIGdldCBlbnRpdHkoKTogRW50aXR5IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZW50aXR5XG4gIH1cbiAgZ2V0IHRyaWdnZXIoKTogVHJpZ2dlckNvbXBvbmVudCB7XG4gICAgcmV0dXJuIHRoaXMuX3RyaWdnZXJcbiAgfVxuICBnZXQgdXVpZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl91dWlkXG4gIH1cblxuICBwcm90ZWN0ZWQgX2VudGl0eT86IEVudGl0eVxuICBwcm90ZWN0ZWQgX3RyaWdnZXIhOiBUcmlnZ2VyQ29tcG9uZW50XG4gIHByb3RlY3RlZCBfdXVpZDogc3RyaW5nID0gJydcbiAgcHJvdGVjdGVkIF9jb2xsaWRpbmdXaXRoOiBSZWNvcmQ8c3RyaW5nLCBUcmlnZ2VyV3JhcHBlcj4gPSB7fVxuXG4gIHByaXZhdGUgX2lzRGVidWc6IGJvb2xlYW4gPSBmYWxzZVxuICBwcml2YXRlIF9kZWJ1Z0VudGl0eTogRW50aXR5IHwgbnVsbCA9IG51bGxcbiAgcHJpdmF0ZSBzdGF0aWMgX2RlYnVnTWF0ZXJpYWw6IE1hdGVyaWFsIHwgbnVsbCA9IG51bGxcblxuICBjb25zdHJ1Y3RvcihlbnRpdHk/OiBFbnRpdHkpIHtcbiAgICB0aGlzLl9lbnRpdHkgPSBlbnRpdHlcbiAgICBpZiAoZW50aXR5KSB7XG4gICAgICB0aGlzLl90cmlnZ2VyID0gZW50aXR5LmdldENvbXBvbmVudChUcmlnZ2VyQ29tcG9uZW50KVxuICAgICAgdGhpcy5fdXVpZCA9IGVudGl0eS51dWlkXG4gICAgICB0aGlzLl9pc0RlYnVnID0gdGhpcy5fdHJpZ2dlci5kZWJ1Z0VuYWJsZWRcbiAgICAgIGlmICh0aGlzLl9pc0RlYnVnKSB7XG4gICAgICAgIHRoaXMuYWRkRGVidWdFbnRpdHkoKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldEdsb2JhbFBvc2l0aW9uKCk6IFZlY3RvcjMge1xuICAgIGlmICh0aGlzLl9lbnRpdHkpIHJldHVybiBUcmlnZ2VyV3JhcHBlci5nZXRFbnRpdHlXb3JsZFBvc2l0aW9uKHRoaXMuX2VudGl0eSlcbiAgICByZXR1cm4gVmVjdG9yMy5aZXJvKClcbiAgfVxuXG4gIGdldFNoYXBlKCk6IFRyaWdnZXJCb3hTaGFwZSB8IFRyaWdnZXJTcGhlcmVTaGFwZSB7XG4gICAgcmV0dXJuIHRoaXMuX3RyaWdnZXIuc2hhcGVcbiAgfVxuXG4gIGlzSW5FbmdpbmUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2VudGl0eSAhPSBudWxsICYmIHRoaXMuX2VudGl0eS5pc0FkZGVkVG9FbmdpbmUoKVxuICB9XG5cbiAgZ2V0QWN0aXZlQ29sbGlzaW9ucygpOiBUcmlnZ2VyV3JhcHBlcltdIHtcbiAgICBsZXQgcmV0OiBUcmlnZ2VyV3JhcHBlcltdID0gW11cblxuICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMuX2NvbGxpZGluZ1dpdGgpIHtcbiAgICAgIGlmICh0aGlzLl9jb2xsaWRpbmdXaXRoLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgcmV0LnB1c2godGhpcy5fY29sbGlkaW5nV2l0aFtrZXldKVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmV0XG4gIH1cblxuICBoYXNBY3RpdmVDb2xsaXNpb24ob3RoZXI6IFRyaWdnZXJXcmFwcGVyKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuX2NvbGxpZGluZ1dpdGhbb3RoZXIudXVpZF0gIT0gdW5kZWZpbmVkICYmXG4gICAgICB0aGlzLl9jb2xsaWRpbmdXaXRoW290aGVyLnV1aWRdICE9IG51bGxcbiAgICApXG4gIH1cblxuICBkaXNlbmdhZ2VBY3RpdmVDb2xsaXNpb24ob3RoZXI6IFRyaWdnZXJXcmFwcGVyKSB7XG4gICAgZGVsZXRlIHRoaXMuX2NvbGxpZGluZ1dpdGhbb3RoZXIudXVpZF1cbiAgfVxuXG4gIGVuZ2FnZUNvbGxpc2lvbihvdGhlcjogVHJpZ2dlcldyYXBwZXIpIHtcbiAgICB0aGlzLl9jb2xsaWRpbmdXaXRoW290aGVyLnV1aWRdID0gb3RoZXJcbiAgfVxuXG4gIGlzRGVidWdnaW5nKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9pc0RlYnVnXG4gIH1cblxuICBhc3luYyBhZGREZWJ1Z0VudGl0eSgpIHtcbiAgICBpZiAoYXdhaXQgIWlzUHJldmlld01vZGUoKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFUcmlnZ2VyV3JhcHBlci5fZGVidWdNYXRlcmlhbCkge1xuICAgICAgVHJpZ2dlcldyYXBwZXIuX2RlYnVnTWF0ZXJpYWwgPSBuZXcgTWF0ZXJpYWwoKVxuICAgICAgVHJpZ2dlcldyYXBwZXIuX2RlYnVnTWF0ZXJpYWwuYWxwaGFUZXN0ID0gMC41XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2RlYnVnRW50aXR5ID09IG51bGwpIHtcbiAgICAgIHRoaXMuX2RlYnVnRW50aXR5ID0gbmV3IEVudGl0eSgpXG5cbiAgICAgIGNvbnN0IHRyYW5zZm9ybSA9IG5ldyBUcmFuc2Zvcm0oKVxuICAgICAgdGhpcy5fZGVidWdFbnRpdHkuYWRkQ29tcG9uZW50KHRyYW5zZm9ybSlcbiAgICAgIHRoaXMuX2RlYnVnRW50aXR5LmFkZENvbXBvbmVudChUcmlnZ2VyV3JhcHBlci5fZGVidWdNYXRlcmlhbClcblxuICAgICAgaWYgKHRoaXMuZ2V0U2hhcGUoKSBpbnN0YW5jZW9mIFRyaWdnZXJCb3hTaGFwZSkge1xuICAgICAgICBjb25zdCBzaGFwZSA9IG5ldyBCb3hTaGFwZSgpXG4gICAgICAgIHNoYXBlLndpdGhDb2xsaXNpb25zID0gZmFsc2VcbiAgICAgICAgdGhpcy5fZGVidWdFbnRpdHkuYWRkQ29tcG9uZW50KHNoYXBlKVxuICAgICAgICB0cmFuc2Zvcm0uc2NhbGUgPSAodGhpcy5nZXRTaGFwZSgpIGFzIFRyaWdnZXJCb3hTaGFwZSkuc2l6ZVxuICAgICAgfVxuICAgICAgaWYgKHRoaXMuZ2V0U2hhcGUoKSBpbnN0YW5jZW9mIFRyaWdnZXJTcGhlcmVTaGFwZSkge1xuICAgICAgICBjb25zdCBzaGFwZSA9IG5ldyBTcGhlcmVTaGFwZSgpXG4gICAgICAgIHNoYXBlLndpdGhDb2xsaXNpb25zID0gZmFsc2VcbiAgICAgICAgdGhpcy5fZGVidWdFbnRpdHkuYWRkQ29tcG9uZW50KHNoYXBlKVxuICAgICAgICBsZXQgcmFkID0gKHRoaXMuZ2V0U2hhcGUoKSBhcyBUcmlnZ2VyU3BoZXJlU2hhcGUpLnJhZGl1c1xuICAgICAgICB0cmFuc2Zvcm0uc2NhbGUgPSBuZXcgVmVjdG9yMyhyYWQsIHJhZCwgcmFkKVxuICAgICAgfVxuICAgIH1cbiAgICBlbmdpbmUuYWRkRW50aXR5KHRoaXMuX2RlYnVnRW50aXR5KVxuICB9XG5cbiAgcmVtb3ZlRGVidWdFbnRpdHkoKSB7XG4gICAgaWYgKHRoaXMuX2RlYnVnRW50aXR5ICE9IG51bGwpIGVuZ2luZS5yZW1vdmVFbnRpdHkodGhpcy5fZGVidWdFbnRpdHkpXG4gIH1cblxuICB1cGRhdGVEZWJ1Z0VudGl0eSgpIHtcbiAgICBpZiAodGhpcy5fZGVidWdFbnRpdHkpIHtcbiAgICAgIHRoaXMuX2RlYnVnRW50aXR5LmdldENvbXBvbmVudChcbiAgICAgICAgVHJhbnNmb3JtXG4gICAgICApLnBvc2l0aW9uID0gdGhpcy5nZXRHbG9iYWxQb3NpdGlvbigpLmFkZCh0aGlzLmdldFNoYXBlKCkucG9zaXRpb24pXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgZ2V0RW50aXR5V29ybGRQb3NpdGlvbihlbnRpdHk6IElFbnRpdHkpOiBWZWN0b3IzIHtcbiAgICBsZXQgZW50aXR5UG9zaXRpb24gPSBlbnRpdHkuaGFzQ29tcG9uZW50KFRyYW5zZm9ybSlcbiAgICAgID8gZW50aXR5LmdldENvbXBvbmVudChUcmFuc2Zvcm0pLnBvc2l0aW9uLmNsb25lKClcbiAgICAgIDogVmVjdG9yMy5aZXJvKClcbiAgICBsZXQgcGFyZW50RW50aXR5ID0gZW50aXR5LmdldFBhcmVudCgpXG5cbiAgICBpZiAocGFyZW50RW50aXR5ICE9IG51bGwpIHtcbiAgICAgIGxldCBwYXJlbnRSb3RhdGlvbiA9IHBhcmVudEVudGl0eS5oYXNDb21wb25lbnQoVHJhbnNmb3JtKVxuICAgICAgICA/IHBhcmVudEVudGl0eS5nZXRDb21wb25lbnQoVHJhbnNmb3JtKS5yb3RhdGlvblxuICAgICAgICA6IFF1YXRlcm5pb24uSWRlbnRpdHlcbiAgICAgIHJldHVybiB0aGlzLmdldEVudGl0eVdvcmxkUG9zaXRpb24ocGFyZW50RW50aXR5KS5hZGQoXG4gICAgICAgIGVudGl0eVBvc2l0aW9uLnJvdGF0ZShwYXJlbnRSb3RhdGlvbilcbiAgICAgIClcbiAgICB9XG4gICAgcmV0dXJuIGVudGl0eVBvc2l0aW9uXG4gIH1cbn1cblxuY2xhc3MgQ2FtZXJhVHJpZ2dlciBleHRlbmRzIFRyaWdnZXJXcmFwcGVyIHtcbiAgcHJpdmF0ZSBfc2hhcGU6IFRyaWdnZXJCb3hTaGFwZSB8IFRyaWdnZXJTcGhlcmVTaGFwZVxuXG4gIGNvbnN0cnVjdG9yKHNoYXBlOiBUcmlnZ2VyQm94U2hhcGUgfCBUcmlnZ2VyU3BoZXJlU2hhcGUpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5fc2hhcGUgPSBzaGFwZVxuICAgIHRoaXMuX3V1aWQgPSAnY2FtZXJhVHJpZ2dlcidcbiAgfVxuXG4gIGdldEdsb2JhbFBvc2l0aW9uKCkge1xuICAgIHJldHVybiBDYW1lcmEuaW5zdGFuY2UucG9zaXRpb25cbiAgfVxuXG4gIGdldFNoYXBlKCkge1xuICAgIHJldHVybiB0aGlzLl9zaGFwZVxuICB9XG5cbiAgc2V0U2hhcGUoc2hhcGU6IFRyaWdnZXJCb3hTaGFwZSB8IFRyaWdnZXJTcGhlcmVTaGFwZSkge1xuICAgIHRoaXMuX3NoYXBlID0gc2hhcGVcbiAgfVxuXG4gIGlzSW5FbmdpbmUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBoYXNBY3RpdmVDb2xsaXNpb24ob3RoZXI6IFRyaWdnZXJXcmFwcGVyKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBkaXNlbmdhZ2VBY3RpdmVDb2xsaXNpb24ob3RoZXI6IFRyaWdnZXJXcmFwcGVyKSB7fVxuXG4gIGVuZ2FnZUNvbGxpc2lvbihvdGhlcjogVHJpZ2dlcldyYXBwZXIpIHt9XG4gIGlzRGVidWdnaW5nKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbkBDb21wb25lbnQoJ3RyaWdnZXJDb21wb25lbnQnKVxuZXhwb3J0IGNsYXNzIFRyaWdnZXJDb21wb25lbnQge1xuICAvKipcbiAgICogSXMgdGhlIHRyaWdnZXIgZW5hYmxlZD8gSWYgZmFsc2UsIHRoZSBhc3NvY2lhdGVkIGZ1bmN0aW9ucyBhcmVuJ3QgdHJpZ2dlcmVkLlxuICAgKi9cbiAgZW5hYmxlZDogYm9vbGVhbiA9IHRydWVcbiAgLyoqXG4gICAqIHNoYXBlIG9mIHRoZSBjb2xsaWRlclxuICAgKi9cbiAgc2hhcGU6IFRyaWdnZXJCb3hTaGFwZSB8IFRyaWdnZXJTcGhlcmVTaGFwZVxuICAvKipcbiAgICogYml0IGxheWVyIG9mIHRoZSBUaWdnZXIgKHVzZWZ1bGwgdG8gZGlzY3JpbWluYXRlIGJldHdlZW4gdHJpZ2dlciBldmVudHMpXG4gICAqL1xuICBsYXllcjogbnVtYmVyID0gMFxuICAvKipcbiAgICogYWdhaW5zdCB3aGljaCBsYXllciBhcmUgd2UgZ29pbmcgdG8gY2hlY2sgdHJpZ2dlcidzIGNvbGxpc2lvbnNcbiAgICovXG4gIHRyaWdnZXJlZEJ5TGF5ZXI6IG51bWJlciA9IDBcbiAgLyoqXG4gICAqIGNhbGxiYWNrIHdoZW4gdHJpZ2dlciBpcyBlbnRlcmVkXG4gICAqL1xuICBvblRyaWdnZXJFbnRlcj86IChlbnRpdHk6IEVudGl0eSkgPT4gdm9pZFxuICAvKipcbiAgICogY2FsbGJhY2sgd2hlbiB0cmlnZ2VyIGlzIGV4aXRcbiAgICovXG4gIG9uVHJpZ2dlckV4aXQ/OiAoZW50aXR5OiBFbnRpdHkpID0+IHZvaWRcbiAgLyoqXG4gICAqIGNhbGxiYWNrIHdoZW4gdHJpZ2dlciBpcyBlbnRlcmVkXG4gICAqL1xuICBvbkNhbWVyYUVudGVyPzogKCkgPT4gdm9pZFxuICAvKipcbiAgICogY2FsbGJhY2sgd2hlbiB0cmlnZ2VyIGlzIGV4aXRcbiAgICovXG4gIG9uQ2FtZXJhRXhpdD86ICgpID0+IHZvaWRcbiAgLyoqXG4gICAqIGdldCBpZiBkZWJ1ZyBpcyBlbmFibGVkXG4gICAqL1xuICBnZXQgZGVidWdFbmFibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kZWJ1Z0VuYWJsZWRcbiAgfVxuXG4gIHByaXZhdGUgX2RlYnVnRW5hYmxlZDogYm9vbGVhbiA9IGZhbHNlXG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB7VHJpZ2dlckJveFNoYXBlIHwgVHJpZ2dlclNwaGVyZVNoYXBlfSBzaGFwZSBzaGFwZSBvZiB0aGUgdHJpZ2dlcmluZyBjb2xsaWRlciBhcmVhXG4gICAqIEBwYXJhbSB7VHJpZ2dlckRhdGF9IGRhdGEgQW4gb2JqZWN0IHdpdGggYWRkaXRpb25hbCBwYXJhbWV0ZXJzIGZvciB0aGUgdHJpZ2dlciBjb21wb25lbnRcbiAgICovXG4gIGNvbnN0cnVjdG9yKHNoYXBlOiBUcmlnZ2VyQm94U2hhcGUgfCBUcmlnZ2VyU3BoZXJlU2hhcGUsIGRhdGE/OiBUcmlnZ2VyRGF0YSkge1xuICAgIFRyaWdnZXJTeXN0ZW0uY3JlYXRlQW5kQWRkVG9FbmdpbmUoKVxuICAgIHRoaXMuc2hhcGUgPSBzaGFwZVxuICAgIGlmIChkYXRhKSB7XG4gICAgICBpZiAoZGF0YS5sYXllcikgdGhpcy5sYXllciA9IGRhdGEubGF5ZXJcbiAgICAgIGlmIChkYXRhLnRyaWdnZXJlZEJ5TGF5ZXIpIHRoaXMudHJpZ2dlcmVkQnlMYXllciA9IGRhdGEudHJpZ2dlcmVkQnlMYXllclxuICAgICAgaWYgKGRhdGEub25UcmlnZ2VyRW50ZXIpIHRoaXMub25UcmlnZ2VyRW50ZXIgPSBkYXRhLm9uVHJpZ2dlckVudGVyXG4gICAgICBpZiAoZGF0YS5vblRyaWdnZXJFeGl0KSB0aGlzLm9uVHJpZ2dlckV4aXQgPSBkYXRhLm9uVHJpZ2dlckV4aXRcbiAgICAgIGlmIChkYXRhLm9uQ2FtZXJhRW50ZXIpIHRoaXMub25DYW1lcmFFbnRlciA9IGRhdGEub25DYW1lcmFFbnRlclxuICAgICAgaWYgKGRhdGEub25DYW1lcmFFeGl0KSB0aGlzLm9uQ2FtZXJhRXhpdCA9IGRhdGEub25DYW1lcmFFeGl0XG4gICAgICBpZiAoZGF0YS5lbmFibGVEZWJ1ZykgdGhpcy5fZGVidWdFbmFibGVkID0gZGF0YS5lbmFibGVEZWJ1Z1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIERlZmluZSBhIGJveC1zaGFwZWQgYXJlYSBmb3IgdXNpbmcgb24gYSBUcmlnZ2VyQ29tcG9uZW50XG4gKiBAcGFyYW0ge1ZlY3RvcjN9IHNpemUgVGhlIHNjYWxlIG9mIHRoZSBib3ggYXJlYVxuICogQHBhcmFtIHtWZWN0b3IzfSBwb3NpdGlvbiBUaGUgb2Zmc2V0IGZyb20gdGhlIHBvc2l0aW9uIG9mIHRoZSBlbnRpdHkgdGhhdCBvd25zIHRoZSBUcmlnZ2VyQ29tcG9uZW50XG4gKi9cbmV4cG9ydCBjbGFzcyBUcmlnZ2VyQm94U2hhcGUge1xuICBzaXplOiBWZWN0b3IzXG4gIHBvc2l0aW9uOiBWZWN0b3IzXG5cbiAgY29uc3RydWN0b3Ioc2l6ZT86IFZlY3RvcjMsIHBvc2l0aW9uPzogVmVjdG9yMykge1xuICAgIHRoaXMuc2l6ZSA9IHNpemUgPyBzaXplIDogVmVjdG9yMy5PbmUoKS5zY2FsZSgyKVxuICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbiA/IHBvc2l0aW9uIDogVmVjdG9yMy5aZXJvKClcbiAgfVxufVxuXG4vKipcbiAqIERlZmluZSBhIHNwaGVyZS1zaGFwZWQgYXJlYSBmb3IgdXNpbmcgb24gYSBUcmlnZ2VyQ29tcG9uZW50XG4gKiBAcGFyYW0ge251bWJlcn0gcmFkaXVzIFRoZSByYWRpdXMgb2YgdGhlIHNwaGVyZSBhcmVhXG4gKiBAcGFyYW0ge1ZlY3RvcjN9IHBvc2l0aW9uIFRoZSBvZmZzZXQgZnJvbSB0aGUgcG9zaXRpb24gb2YgdGhlIGVudGl0eSB0aGF0IG93bnMgdGhlIFRyaWdnZXJDb21wb25lbnRcbiAqL1xuZXhwb3J0IGNsYXNzIFRyaWdnZXJTcGhlcmVTaGFwZSB7XG4gIHJhZGl1czogbnVtYmVyXG4gIHBvc2l0aW9uOiBWZWN0b3IzXG5cbiAgY29uc3RydWN0b3IocmFkaXVzPzogbnVtYmVyLCBwb3NpdGlvbj86IFZlY3RvcjMpIHtcbiAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cyA/IHJhZGl1cyA6IDJcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb24gPyBwb3NpdGlvbiA6IFZlY3RvcjMuWmVybygpXG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBBY3Rpb25zU2VxdWVuY2VTeXN0ZW0gaW1wbGVtZW50cyBJU3lzdGVtIHtcbiAgcHJpdmF0ZSBiZWdpblNlcXVlbmNlTm9kZTogU2VxdWVuY2VOb2RlIHwgbnVsbCA9IG51bGxcbiAgcHJpdmF0ZSBjdXJyZW50U2VxdWVuY2VOb2RlOiBTZXF1ZW5jZU5vZGUgfCBudWxsID0gbnVsbFxuXG4gIHByaXZhdGUgcnVubmluZzogYm9vbGVhbiA9IGZhbHNlXG4gIHByaXZhdGUgc3RhcnRlZDogYm9vbGVhbiA9IGZhbHNlXG5cbiAgcHJpdmF0ZSBvbkZpbmlzaENhbGxiYWNrPzogKCkgPT4gdm9pZFxuXG4gIGNvbnN0cnVjdG9yKHNlcXVlbmNlQnVpbHQ/OiBBY3Rpb25zU2VxdWVuY2VTeXN0ZW0uU2VxdWVuY2VCdWlsZGVyKSB7XG4gICAgaWYgKHNlcXVlbmNlQnVpbHQpIHtcbiAgICAgIHRoaXMuc3RhcnRTZXF1ZW5jZShzZXF1ZW5jZUJ1aWx0KVxuICAgIH1cbiAgfVxuXG4gIHN0YXJ0U2VxdWVuY2Uoc2VxdWVuY2VCdWlsdDogQWN0aW9uc1NlcXVlbmNlU3lzdGVtLlNlcXVlbmNlQnVpbGRlcikge1xuICAgIHRoaXMuYmVnaW5TZXF1ZW5jZU5vZGUgPSBzZXF1ZW5jZUJ1aWx0LmJlZ2luU2VxdWVuY2VOb2RlXG4gICAgdGhpcy5jdXJyZW50U2VxdWVuY2VOb2RlID0gdGhpcy5iZWdpblNlcXVlbmNlTm9kZVxuICAgIHRoaXMucnVubmluZyA9IHRydWVcbiAgICB0aGlzLnN0YXJ0ZWQgPSBmYWxzZVxuICB9XG5cbiAgc2V0T25GaW5pc2hDYWxsYmFjayhvbkZpbmlzaENhbGxiYWNrOiAoKSA9PiB2b2lkKSB7XG4gICAgdGhpcy5vbkZpbmlzaENhbGxiYWNrID0gb25GaW5pc2hDYWxsYmFja1xuICB9XG5cbiAgaXNSdW5uaW5nKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnJ1bm5pbmdcbiAgfVxuXG4gIHN0b3AoKSB7XG4gICAgdGhpcy5ydW5uaW5nID0gZmFsc2VcbiAgfVxuXG4gIHJlc3VtZSgpIHtcbiAgICBpZiAodGhpcy5iZWdpblNlcXVlbmNlTm9kZSAhPSBudWxsKSB7XG4gICAgICB0aGlzLnJ1bm5pbmcgPSB0cnVlXG4gICAgfVxuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5jdXJyZW50U2VxdWVuY2VOb2RlID0gdGhpcy5iZWdpblNlcXVlbmNlTm9kZVxuICAgIHRoaXMucnVubmluZyA9IHRydWVcbiAgICB0aGlzLnN0YXJ0ZWQgPSBmYWxzZVxuICB9XG5cbiAgZ2V0UnVubmluZ0FjdGlvbigpOiBBY3Rpb25zU2VxdWVuY2VTeXN0ZW0uSUFjdGlvbiB8IG51bGwge1xuICAgIGxldCBjdXJyZW50Tm9kZTogU2VxdWVuY2VOb2RlIHwgbnVsbCA9IHRoaXMuY3VycmVudFNlcXVlbmNlTm9kZVxuXG4gICAgaWYgKHRoaXMuY3VycmVudFNlcXVlbmNlTm9kZSBpbnN0YW5jZW9mIFN1YlNlcXVlbmNlTm9kZSkge1xuICAgICAgZG8ge1xuICAgICAgICBjdXJyZW50Tm9kZSA9IChjdXJyZW50Tm9kZSBhcyBTdWJTZXF1ZW5jZU5vZGUpLmN1cnJlbnRJbm5lclNlcXVlbmNlXG4gICAgICB9IHdoaWxlIChjdXJyZW50Tm9kZSBpbnN0YW5jZW9mIFN1YlNlcXVlbmNlTm9kZSlcbiAgICB9XG4gICAgcmV0dXJuIChjdXJyZW50Tm9kZSBhcyBTZXF1ZW5jZU5vZGUpLmFjdGlvblxuICB9XG5cbiAgdXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5ydW5uaW5nKSB7XG4gICAgICBpZiAoIXRoaXMuc3RhcnRlZCkge1xuICAgICAgICA7KHRoaXMuY3VycmVudFNlcXVlbmNlTm9kZSBhcyBTZXF1ZW5jZU5vZGUpLm9uU3RhcnQoKVxuICAgICAgICB0aGlzLnN0YXJ0ZWQgPSB0cnVlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoISh0aGlzLmN1cnJlbnRTZXF1ZW5jZU5vZGUgYXMgU2VxdWVuY2VOb2RlKS5oYXNGaW5pc2goKSkge1xuICAgICAgICAgIDsodGhpcy5jdXJyZW50U2VxdWVuY2VOb2RlIGFzIFNlcXVlbmNlTm9kZSkudXBkYXRlKGR0KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIDsodGhpcy5jdXJyZW50U2VxdWVuY2VOb2RlIGFzIFNlcXVlbmNlTm9kZSkub25GaW5pc2goKVxuICAgICAgICAgIHRoaXMuY3VycmVudFNlcXVlbmNlTm9kZSA9ICh0aGlzXG4gICAgICAgICAgICAuY3VycmVudFNlcXVlbmNlTm9kZSBhcyBTZXF1ZW5jZU5vZGUpLm5leHRcbiAgICAgICAgICBpZiAodGhpcy5jdXJyZW50U2VxdWVuY2VOb2RlKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTZXF1ZW5jZU5vZGUub25TdGFydCgpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucnVubmluZyA9IGZhbHNlXG4gICAgICAgICAgICBpZiAodGhpcy5vbkZpbmlzaENhbGxiYWNrKSB0aGlzLm9uRmluaXNoQ2FsbGJhY2soKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgbmFtZXNwYWNlIEFjdGlvbnNTZXF1ZW5jZVN5c3RlbSB7XG4gIGV4cG9ydCBpbnRlcmZhY2UgSUFjdGlvbiB7XG4gICAgb25TdGFydCgpOiB2b2lkXG4gICAgdXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkXG4gICAgb25GaW5pc2goKTogdm9pZFxuICAgIGhhc0ZpbmlzaGVkOiBib29sZWFuXG4gIH1cblxuICBleHBvcnQgY2xhc3MgU2VxdWVuY2VCdWlsZGVyIHtcbiAgICBwcml2YXRlIGN1cnJlbnRTZXF1ZW5jZU5vZGU6IFNlcXVlbmNlTm9kZSB8IG51bGwgPSBudWxsXG4gICAgcHVibGljIGJlZ2luU2VxdWVuY2VOb2RlOiBTZXF1ZW5jZU5vZGUgfCBudWxsID0gbnVsbFxuXG4gICAgcHJpdmF0ZSB3aGlsZU5vZGVTdGFjazogV2hpbGVTZXF1ZW5jZU5vZGVbXSA9IFtdXG5cbiAgICB0aGVuKGFjdGlvbjogQWN0aW9uc1NlcXVlbmNlU3lzdGVtLklBY3Rpb24pOiBTZXF1ZW5jZUJ1aWxkZXIge1xuICAgICAgaWYgKHRoaXMuY3VycmVudFNlcXVlbmNlTm9kZSA9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFNlcXVlbmNlTm9kZSA9IG5ldyBTZXF1ZW5jZU5vZGUoKVxuICAgICAgICB0aGlzLmN1cnJlbnRTZXF1ZW5jZU5vZGUuYWN0aW9uID0gYWN0aW9uXG4gICAgICAgIHRoaXMuYmVnaW5TZXF1ZW5jZU5vZGUgPSB0aGlzLmN1cnJlbnRTZXF1ZW5jZU5vZGVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBuZXh0ID0gbmV3IFNlcXVlbmNlTm9kZSgpXG4gICAgICAgIG5leHQuYWN0aW9uID0gYWN0aW9uXG4gICAgICAgIHRoaXMuY3VycmVudFNlcXVlbmNlTm9kZSA9IHRoaXMuY3VycmVudFNlcXVlbmNlTm9kZS50aGVuKG5leHQpXG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIGlmKGNvbmRpdGlvbjogKCkgPT4gYm9vbGVhbik6IFNlcXVlbmNlQnVpbGRlciB7XG4gICAgICBsZXQgaWZTZXEgPSBuZXcgSWZTZXF1ZW5jZU5vZGUoY29uZGl0aW9uKVxuICAgICAgaWYgKHRoaXMuY3VycmVudFNlcXVlbmNlTm9kZSA9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFNlcXVlbmNlTm9kZSA9IGlmU2VxXG4gICAgICAgIHRoaXMuYmVnaW5TZXF1ZW5jZU5vZGUgPSBpZlNlcVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jdXJyZW50U2VxdWVuY2VOb2RlID0gdGhpcy5jdXJyZW50U2VxdWVuY2VOb2RlLnRoZW4oaWZTZXEpXG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIGVsc2UoKTogU2VxdWVuY2VCdWlsZGVyIHtcbiAgICAgIGxldCBzZXEgPSAodGhpcy5jdXJyZW50U2VxdWVuY2VOb2RlIGFzIFNlcXVlbmNlTm9kZSkuZ2V0U2VxdWVuY2UoKVxuICAgICAgaWYgKHNlcSBpbnN0YW5jZW9mIElmU2VxdWVuY2VOb2RlKSB7XG4gICAgICAgIHNlcS5jbG9zZWQgPSB0cnVlXG4gICAgICAgIGxldCBlbHNlU2VxID0gbmV3IEVsc2VTZXF1ZW5jZU5vZGUoc2VxKVxuICAgICAgICB0aGlzLmN1cnJlbnRTZXF1ZW5jZU5vZGUgPSAodGhpc1xuICAgICAgICAgIC5jdXJyZW50U2VxdWVuY2VOb2RlIGFzIFNlcXVlbmNlTm9kZSkudGhlbihlbHNlU2VxKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICdJRiBzdGF0ZW1lbnQgaXMgbmVlZGVkIHRvIGJlIGNhbGxlZCBiZWZvcmUgRUxTRSBzdGF0ZW1lbnQuJ1xuICAgICAgICApXG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIGVuZElmKCk6IFNlcXVlbmNlQnVpbGRlciB7XG4gICAgICBsZXQgc2VxID0gKHRoaXMuY3VycmVudFNlcXVlbmNlTm9kZSBhcyBTZXF1ZW5jZU5vZGUpLmdldFNlcXVlbmNlKClcbiAgICAgIGlmIChzZXEgaW5zdGFuY2VvZiBJZlNlcXVlbmNlTm9kZSB8fCBzZXEgaW5zdGFuY2VvZiBFbHNlU2VxdWVuY2VOb2RlKSB7XG4gICAgICAgIHNlcS5jbG9zZWQgPSB0cnVlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgJ0lGIHN0YXRlbWVudCBpcyBuZWVkZWQgdG8gYmUgY2FsbGVkIGJlZm9yZSBFTkRJRiBzdGF0ZW1lbnQuJ1xuICAgICAgICApXG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIHdoaWxlKGNvbmRpdGlvbjogKCkgPT4gYm9vbGVhbik6IFNlcXVlbmNlQnVpbGRlciB7XG4gICAgICBsZXQgd2hpbGVTZXEgPSBuZXcgV2hpbGVTZXF1ZW5jZU5vZGUoY29uZGl0aW9uKVxuICAgICAgaWYgKHRoaXMuY3VycmVudFNlcXVlbmNlTm9kZSA9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFNlcXVlbmNlTm9kZSA9IHdoaWxlU2VxXG4gICAgICAgIHRoaXMuYmVnaW5TZXF1ZW5jZU5vZGUgPSB3aGlsZVNlcVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jdXJyZW50U2VxdWVuY2VOb2RlID0gdGhpcy5jdXJyZW50U2VxdWVuY2VOb2RlLnRoZW4od2hpbGVTZXEpXG4gICAgICB9XG4gICAgICB0aGlzLndoaWxlTm9kZVN0YWNrLnB1c2god2hpbGVTZXEpXG4gICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIGVuZFdoaWxlKCk6IFNlcXVlbmNlQnVpbGRlciB7XG4gICAgICBsZXQgc2VxID0gKHRoaXMuY3VycmVudFNlcXVlbmNlTm9kZSBhcyBTZXF1ZW5jZU5vZGUpLmdldFNlcXVlbmNlKClcbiAgICAgIGlmIChzZXEgaW5zdGFuY2VvZiBXaGlsZVNlcXVlbmNlTm9kZSkge1xuICAgICAgICBzZXEuY2xvc2VkID0gdHJ1ZVxuICAgICAgICBpZiAodGhpcy53aGlsZU5vZGVTdGFjay5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgdGhpcy53aGlsZU5vZGVTdGFjay5zcGxpY2UodGhpcy53aGlsZU5vZGVTdGFjay5sZW5ndGggLSAxLCAxKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgJ1dISUxFIHN0YXRlbWVudCBpcyBuZWVkZWQgdG8gYmUgY2FsbGVkIGJlZm9yZSBFTkRXSElMRSBzdGF0ZW1lbnQuJ1xuICAgICAgICApXG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIGJyZWFrV2hpbGUoKTogU2VxdWVuY2VCdWlsZGVyIHtcbiAgICAgIGlmICh0aGlzLndoaWxlTm9kZVN0YWNrLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5jdXJyZW50U2VxdWVuY2VOb2RlID0gKHRoaXNcbiAgICAgICAgICAuY3VycmVudFNlcXVlbmNlTm9kZSBhcyBTZXF1ZW5jZU5vZGUpLnRoZW4oXG4gICAgICAgICAgbmV3IEJyZWFrV2hpbGVTZXF1ZW5jZU5vZGUoXG4gICAgICAgICAgICB0aGlzLndoaWxlTm9kZVN0YWNrW3RoaXMud2hpbGVOb2RlU3RhY2subGVuZ3RoIC0gMV1cbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAnV0hJTEUgc3RhdGVtZW50IGlzIG5lZWRlZCB0byBiZSBjYWxsZWQgYmVmb3JlIEJSRUFLV0hJTEUgc3RhdGVtZW50LidcbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG4gIH1cbn1cblxuY2xhc3MgU2VxdWVuY2VOb2RlIHtcbiAgYWN0aW9uOiBBY3Rpb25zU2VxdWVuY2VTeXN0ZW0uSUFjdGlvbiB8IG51bGwgPSBudWxsXG4gIG5leHQ6IFNlcXVlbmNlTm9kZSB8IG51bGwgPSBudWxsXG5cbiAgdGhlbihuZXh0OiBTZXF1ZW5jZU5vZGUpOiBTZXF1ZW5jZU5vZGUge1xuICAgIHRoaXMubmV4dCA9IG5leHRcbiAgICByZXR1cm4gbmV4dFxuICB9XG5cbiAgb25TdGFydCgpIHtcbiAgICBpZiAodGhpcy5hY3Rpb24pIHRoaXMuYWN0aW9uLm9uU3RhcnQoKVxuICB9XG5cbiAgdXBkYXRlKGR0OiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5hY3Rpb24pIHRoaXMuYWN0aW9uLnVwZGF0ZShkdClcbiAgfVxuXG4gIG9uRmluaXNoKCkge1xuICAgIGlmICh0aGlzLmFjdGlvbikgdGhpcy5hY3Rpb24ub25GaW5pc2goKVxuICB9XG5cbiAgaGFzRmluaXNoKCk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLmFjdGlvbikgcmV0dXJuIHRoaXMuYWN0aW9uLmhhc0ZpbmlzaGVkXG4gICAgZWxzZSByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgZ2V0U2VxdWVuY2UoKTogU2VxdWVuY2VOb2RlIHtcbiAgICByZXR1cm4gdGhpc1xuICB9XG59XG5cbmNsYXNzIFN1YlNlcXVlbmNlTm9kZSBleHRlbmRzIFNlcXVlbmNlTm9kZSB7XG4gIGN1cnJlbnRJbm5lclNlcXVlbmNlOiBTZXF1ZW5jZU5vZGUgfCBudWxsID0gbnVsbFxuICBzdGFydGluZ0lubmVyU2VxdWVuY2U6IFNlcXVlbmNlTm9kZSB8IG51bGwgPSBudWxsXG4gIGNsb3NlZDogYm9vbGVhbiA9IGZhbHNlXG5cbiAgdGhlbihuZXh0OiBTZXF1ZW5jZU5vZGUpOiBTZXF1ZW5jZU5vZGUge1xuICAgIGlmICh0aGlzLmN1cnJlbnRJbm5lclNlcXVlbmNlID09IG51bGwpIHtcbiAgICAgIHRoaXMuY3VycmVudElubmVyU2VxdWVuY2UgPSBuZXh0XG4gICAgICB0aGlzLnN0YXJ0aW5nSW5uZXJTZXF1ZW5jZSA9IG5leHRcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuY2xvc2VkKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IG5leHRcbiAgICAgICAgcmV0dXJuIG5leHRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY3VycmVudElubmVyU2VxdWVuY2UgPSB0aGlzLmN1cnJlbnRJbm5lclNlcXVlbmNlLnRoZW4obmV4dClcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIG9uU3RhcnQoKSB7XG4gICAgdGhpcy5jdXJyZW50SW5uZXJTZXF1ZW5jZSA9IHRoaXMuc3RhcnRpbmdJbm5lclNlcXVlbmNlXG4gICAgaWYgKHRoaXMuY3VycmVudElubmVyU2VxdWVuY2UpIHRoaXMuY3VycmVudElubmVyU2VxdWVuY2Uub25TdGFydCgpXG4gIH1cblxuICB1cGRhdGUoZHQ6IG51bWJlcikge1xuICAgIGlmICh0aGlzLmN1cnJlbnRJbm5lclNlcXVlbmNlKSB7XG4gICAgICBpZiAoIXRoaXMuY3VycmVudElubmVyU2VxdWVuY2UuaGFzRmluaXNoKCkpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50SW5uZXJTZXF1ZW5jZS51cGRhdGUoZHQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmN1cnJlbnRJbm5lclNlcXVlbmNlLm9uRmluaXNoKClcbiAgICAgICAgdGhpcy5jdXJyZW50SW5uZXJTZXF1ZW5jZSA9IHRoaXMuY3VycmVudElubmVyU2VxdWVuY2UubmV4dFxuICAgICAgICBpZiAodGhpcy5jdXJyZW50SW5uZXJTZXF1ZW5jZSkgdGhpcy5jdXJyZW50SW5uZXJTZXF1ZW5jZS5vblN0YXJ0KClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvbkZpbmlzaCgpIHtcbiAgICBpZiAodGhpcy5jdXJyZW50SW5uZXJTZXF1ZW5jZSkgdGhpcy5jdXJyZW50SW5uZXJTZXF1ZW5jZS5vbkZpbmlzaCgpXG4gIH1cblxuICBoYXNGaW5pc2goKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudElubmVyU2VxdWVuY2UgPT0gbnVsbFxuICB9XG5cbiAgZ2V0U2VxdWVuY2UoKTogU2VxdWVuY2VOb2RlIHtcbiAgICBpZiAodGhpcy5jdXJyZW50SW5uZXJTZXF1ZW5jZSkge1xuICAgICAgbGV0IGlubmVyU2VxID0gdGhpcy5jdXJyZW50SW5uZXJTZXF1ZW5jZS5nZXRTZXF1ZW5jZSgpXG4gICAgICBpZiAoaW5uZXJTZXEgaW5zdGFuY2VvZiBTdWJTZXF1ZW5jZU5vZGUpIHtcbiAgICAgICAgaWYgKCFpbm5lclNlcS5jbG9zZWQpIHtcbiAgICAgICAgICByZXR1cm4gaW5uZXJTZXFcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpc1xuICB9XG59XG5cbmNsYXNzIElmU2VxdWVuY2VOb2RlIGV4dGVuZHMgU3ViU2VxdWVuY2VOb2RlIHtcbiAgY29uZGl0aW9uOiAoKSA9PiBib29sZWFuXG4gIHJlc3VsdDogYm9vbGVhbiA9IGZhbHNlXG5cbiAgY29uc3RydWN0b3IoY29uZGl0aW9uOiAoKSA9PiBib29sZWFuKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuY29uZGl0aW9uID0gY29uZGl0aW9uXG4gIH1cblxuICBvblN0YXJ0KCkge1xuICAgIHRoaXMucmVzdWx0ID0gdGhpcy5jb25kaXRpb24oKVxuICAgIGlmICh0aGlzLnJlc3VsdCkgc3VwZXIub25TdGFydCgpXG4gICAgZWxzZSB0aGlzLmN1cnJlbnRJbm5lclNlcXVlbmNlID0gbnVsbFxuICB9XG59XG5cbmNsYXNzIEVsc2VTZXF1ZW5jZU5vZGUgZXh0ZW5kcyBTdWJTZXF1ZW5jZU5vZGUge1xuICBpZlNlcXVlbmNlOiBJZlNlcXVlbmNlTm9kZSB8IG51bGwgPSBudWxsXG5cbiAgY29uc3RydWN0b3IoaWZTZXF1ZW5jZTogSWZTZXF1ZW5jZU5vZGUpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5pZlNlcXVlbmNlID0gaWZTZXF1ZW5jZVxuICB9XG5cbiAgb25TdGFydCgpIHtcbiAgICBpZiAodGhpcy5pZlNlcXVlbmNlICYmICF0aGlzLmlmU2VxdWVuY2UucmVzdWx0KSBzdXBlci5vblN0YXJ0KClcbiAgICBlbHNlIHRoaXMuY3VycmVudElubmVyU2VxdWVuY2UgPSBudWxsXG4gIH1cbn1cblxuY2xhc3MgV2hpbGVTZXF1ZW5jZU5vZGUgZXh0ZW5kcyBTdWJTZXF1ZW5jZU5vZGUge1xuICBjb25kaXRpb246ICgpID0+IGJvb2xlYW5cbiAgYnJlYWtXaGlsZTogYm9vbGVhbiA9IGZhbHNlXG5cbiAgY29uc3RydWN0b3IoY29uZGl0aW9uOiAoKSA9PiBib29sZWFuKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuY29uZGl0aW9uID0gY29uZGl0aW9uXG4gIH1cblxuICBvblN0YXJ0KCkge1xuICAgIHRoaXMuYnJlYWtXaGlsZSA9IGZhbHNlXG4gICAgaWYgKHRoaXMuY29uZGl0aW9uKCkpIHN1cGVyLm9uU3RhcnQoKVxuICAgIGVsc2UgdGhpcy5jdXJyZW50SW5uZXJTZXF1ZW5jZSA9IG51bGxcbiAgfVxuXG4gIHVwZGF0ZShkdDogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuY3VycmVudElubmVyU2VxdWVuY2UpIHtcbiAgICAgIGlmICghdGhpcy5jdXJyZW50SW5uZXJTZXF1ZW5jZS5oYXNGaW5pc2goKSkge1xuICAgICAgICB0aGlzLmN1cnJlbnRJbm5lclNlcXVlbmNlLnVwZGF0ZShkdClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY3VycmVudElubmVyU2VxdWVuY2Uub25GaW5pc2goKVxuICAgICAgICB0aGlzLmN1cnJlbnRJbm5lclNlcXVlbmNlID0gdGhpcy5jdXJyZW50SW5uZXJTZXF1ZW5jZS5uZXh0XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRJbm5lclNlcXVlbmNlID09IG51bGwpXG4gICAgICAgICAgdGhpcy5jdXJyZW50SW5uZXJTZXF1ZW5jZSA9IHRoaXMuc3RhcnRpbmdJbm5lclNlcXVlbmNlXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRJbm5lclNlcXVlbmNlKSB0aGlzLmN1cnJlbnRJbm5lclNlcXVlbmNlLm9uU3RhcnQoKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGhhc0ZpbmlzaCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5icmVha1doaWxlIHx8ICF0aGlzLmNvbmRpdGlvbigpXG4gIH1cbn1cblxuY2xhc3MgQnJlYWtXaGlsZVNlcXVlbmNlTm9kZSBleHRlbmRzIFNlcXVlbmNlTm9kZSB7XG4gIHdoaWxlTm9kZTogV2hpbGVTZXF1ZW5jZU5vZGVcblxuICBjb25zdHJ1Y3Rvcih3aGlsZU5vZGU6IFdoaWxlU2VxdWVuY2VOb2RlKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMud2hpbGVOb2RlID0gd2hpbGVOb2RlXG4gIH1cblxuICBvblN0YXJ0KCkge1xuICAgIHRoaXMud2hpbGVOb2RlLmJyZWFrV2hpbGUgPSB0cnVlXG4gIH1cbn1cbiIsImltcG9ydCB7IE1vdmVUcmFuc2Zvcm1Db21wb25lbnQgfSBmcm9tICcuL3RyYW5zZm9ybS9jb21wb25lbnQvbW92ZSdcbmltcG9ydCB7IFJvdGF0ZVRyYW5zZm9ybUNvbXBvbmVudCB9IGZyb20gJy4vdHJhbnNmb3JtL2NvbXBvbmVudC9yb3RhdGUnXG5pbXBvcnQgeyBTY2FsZVRyYW5zZm9ybUNvbXBvbmVudCB9IGZyb20gJy4vdHJhbnNmb3JtL2NvbXBvbmVudC9zY2FsZSdcbmltcG9ydCB7XG4gIEZvbGxvd1BhdGhDb21wb25lbnQsXG4gIEZvbGxvd0N1cnZlZFBhdGhDb21wb25lbnRcbn0gZnJvbSAnLi90cmFuc2Zvcm0vY29tcG9uZW50L2ZvbGxvd3BhdGgnXG5pbXBvcnQgeyBLZWVwUm90YXRpbmdDb21wb25lbnQgfSBmcm9tICcuL3RyYW5zZm9ybS9jb21wb25lbnQva2VlcHJvdGF0aW5nJ1xuaW1wb3J0IHsgVHJhbnNmb3JtU3lzdGVtIH0gZnJvbSAnLi90cmFuc2Zvcm0vc3lzdGVtL3RyYW5zZnJvbVN5c3RlbSdcbmltcG9ydCB7IEludGVycG9sYXRlLCBJbnRlcnBvbGF0aW9uVHlwZSB9IGZyb20gJy4vdHJhbnNmb3JtL21hdGgvaW50ZXJwb2xhdGlvbidcblxuaW1wb3J0IHsgVG9nZ2xlQ29tcG9uZW50LCBUb2dnbGVTdGF0ZSB9IGZyb20gJy4vdG9nZ2xlL3RvZ2dsZUNvbXBvbmVudCdcblxuaW1wb3J0IHsgRGVsYXkgfSBmcm9tICcuL3RpbWVyL2NvbXBvbmVudC9kZWxheSdcbmltcG9ydCB7IEV4cGlyZUluIH0gZnJvbSAnLi90aW1lci9jb21wb25lbnQvZXhwaXJlJ1xuaW1wb3J0IHsgSW50ZXJ2YWwgfSBmcm9tICcuL3RpbWVyL2NvbXBvbmVudC9pbnRlcnZhbCdcbmltcG9ydCB7XG4gIG1hcCxcbiAgY2xhbXAsXG4gIGdldEVudGl0eVdvcmxkUG9zaXRpb24sXG4gIGdldEVudGl0eVdvcmxkUm90YXRpb25cbn0gZnJvbSAnLi9oZWxwZXJzL2hlbHBlcmZ1bmN0aW9ucydcbmltcG9ydCB7IGFkZFRlc3RDdWJlLCBhZGRMYWJlbCB9IGZyb20gJy4vaGVscGVycy90ZXN0Q3ViZSdcbmltcG9ydCB7IHNlbmRSZXF1ZXN0IH0gZnJvbSAnLi9oZWxwZXJzL3JlcXVlc3RzJ1xuaW1wb3J0IHtcbiAgVHJpZ2dlclN5c3RlbSxcbiAgVHJpZ2dlckJveFNoYXBlLFxuICBUcmlnZ2VyU3BoZXJlU2hhcGUsXG4gIFRyaWdnZXJDb21wb25lbnRcbn0gZnJvbSAnLi90cmlnZ2Vycy90cmlnZ2VyU3lzdGVtJ1xuXG5pbXBvcnQgeyBBY3Rpb25zU2VxdWVuY2VTeXN0ZW0gfSBmcm9tICcuL2FjdGlvbnNTZXF1ZW5jZVN5c3RlbS9hY3Rpb25zU2VxdWVuY2VTeXN0ZW0nXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgVHJhbnNmb3JtU3lzdGVtLFxuICBNb3ZlVHJhbnNmb3JtQ29tcG9uZW50LFxuICBSb3RhdGVUcmFuc2Zvcm1Db21wb25lbnQsXG4gIFNjYWxlVHJhbnNmb3JtQ29tcG9uZW50LFxuICBGb2xsb3dQYXRoQ29tcG9uZW50LFxuICBGb2xsb3dDdXJ2ZWRQYXRoQ29tcG9uZW50LFxuICBLZWVwUm90YXRpbmdDb21wb25lbnQsXG4gIEludGVycG9sYXRlLFxuICBJbnRlcnBvbGF0aW9uVHlwZSxcbiAgVG9nZ2xlQ29tcG9uZW50LFxuICBUb2dnbGVTdGF0ZSxcbiAgRGVsYXksXG4gIEV4cGlyZUluLFxuICBJbnRlcnZhbCxcbiAgVHJpZ2dlckNvbXBvbmVudCxcbiAgVHJpZ2dlclN5c3RlbSxcbiAgVHJpZ2dlclNwaGVyZVNoYXBlLFxuICBUcmlnZ2VyQm94U2hhcGUsXG4gIEFjdGlvbnNTZXF1ZW5jZVN5c3RlbSxcbiAgbWFwLFxuICBjbGFtcCxcbiAgYWRkVGVzdEN1YmUsXG4gIGFkZExhYmVsLFxuICBzZW5kUmVxdWVzdCxcbiAgZ2V0RW50aXR5V29ybGRQb3NpdGlvbixcbiAgZ2V0RW50aXR5V29ybGRSb3RhdGlvblxufVxuIiwiaW1wb3J0ICogYXMgUmVzdHJpY3RlZEFjdGlvbnMgZnJvbSAnQGRlY2VudHJhbGFuZC9SZXN0cmljdGVkQWN0aW9ucydcbmltcG9ydCB7IG1vdmVQbGF5ZXJUbyB9IGZyb20gJ0BkZWNlbnRyYWxhbmQvUmVzdHJpY3RlZEFjdGlvbnMnXG5pbXBvcnQgKiBhcyB1aSBmcm9tICdAZGNsL3VpLXNjZW5lLXV0aWxzJ1xuaW1wb3J0IHV0aWxzIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvZGVjZW50cmFsYW5kLWVjcy11dGlscy9pbmRleFwiXG5cblxuXG5jb25zdCBjYW1lcmEgPSBDYW1lcmEuaW5zdGFuY2VcblxuY2xhc3MgU29tZVN5c3RlbSBpbXBsZW1lbnRzIElTeXN0ZW0ge1xuICBlbnRpdHk6IEVudGl0eVxuICBjb25zdHJ1Y3RvcihlbnRpdHk6IEVudGl0eSkge1xuICAgIHRoaXMuZW50aXR5ID0gZW50aXR5XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgY29uc3QgdHJhbnNmb3JtID0gdGhpcy5lbnRpdHkuZ2V0Q29tcG9uZW50KFRyYW5zZm9ybSlcbiAgICB0cmFuc2Zvcm0ucm90YXRpb24gPSBjYW1lcmEucm90YXRpb25cbiAgfVxufVxuXG5sZXQgbWluID0gMi43NSAvLyBudW1iZXIgaW4gbWludXRlc1xubGV0IGdhbWV0aW1lOiBudW1iZXJcbmxldCBwb2ludHM6IG51bWJlciA9IDA7XG5sZXQgdG90YWxzOiBudW1iZXIgPSAwO1xubGV0IHJlc3VsdDogbnVtYmVyID0gMDtcbmxldCBnYW1lU3RhcnRlZCA9IGZhbHNlXG5cbmNvbnN0IGNhbnZhcyA9IG5ldyBVSUNhbnZhcygpXG5jb25zdCBzdGF0dXNUZXh0ID0gbmV3IFVJVGV4dChjYW52YXMpXG5zdGF0dXNUZXh0LnZhbHVlID0gXCJcIlxuc3RhdHVzVGV4dC52QWxpZ24gPSBcImJvdHRvbVwiXG5zdGF0dXNUZXh0LmhBbGlnbiA9IFwiY2VudGVyXCJcbnN0YXR1c1RleHQuZm9udFNpemUgPSAyNVxuc3RhdHVzVGV4dC53aWR0aCA9IDEyMFxuc3RhdHVzVGV4dC5oZWlnaHQgPSAzMFxuc3RhdHVzVGV4dC5jb2xvciA9IENvbG9yNC5ZZWxsb3coKVxuXG52YXIgY291bnRkb3duVGltZXIgPSBuZXcgRW50aXR5KClcblxuY29uc3QgaWRvb3IgPSBuZXcgRW50aXR5KClcbmVuZ2luZS5hZGRFbnRpdHkoaWRvb3IpXG5pZG9vci5hZGRDb21wb25lbnQobmV3IEdMVEZTaGFwZShcIm1vZGVscy9sYW1hLmdsdGZcIikpXG5pZG9vci5hZGRDb21wb25lbnQobmV3IFRyYW5zZm9ybSh7IHBvc2l0aW9uOiBuZXcgVmVjdG9yMyg0LDAsNCksIHJvdGF0aW9uOiBRdWF0ZXJuaW9uLkV1bGVyKDAsIDkwLCAwKSwgfSkpO1xuXG5pZG9vci5hZGRDb21wb25lbnQoXG4gIG5ldyBPblBvaW50ZXJEb3duKFxuICAgIChfZSkgPT4ge1xuICAgICAgaG9tZS5hZGRDb21wb25lbnRPclJlcGxhY2UobmV3IFRyYW5zZm9ybSh7XG4gICAgICAgICAgcG9zaXRpb246IG5ldyBWZWN0b3IzKDAsIDAsIDApLFxuXG4gICAgICAgIH0pKTtcbiAgICAgIFJlc3RyaWN0ZWRBY3Rpb25zLm1vdmVQbGF5ZXJUbyh7IHg6IDMsIHk6IDI1LCB6OiA0MCB9LCB7IHg6IDQwLCB5OiAwLCB6OiA0MCB9KSxcbiAgICAgICAgaW52ZW50b3J5Q29udGFpbmVyLnZpc2libGUgPSB0cnVlO1xuICAgICAgICBidWdzY29yZS52aXNpYmxlID0gdHJ1ZTtcblxuXG4gICAgICBpZighZ2FtZVN0YXJ0ZWQpe1xuICAgICAgICBnYW1lU3RhcnRlZCA9IHRydWVcbiAgICAgICAgZ2FtZXRpbWUgPSBEYXRlLm5vdygpICsgKDEwMDAgKiA2MCAqIG1pbilcbiAgICAgICAgZW5naW5lLmFkZEVudGl0eShjb3VudGRvd25UaW1lcilcbiAgICAgICAgdXBkYXRlQ291bnRkb3dudGltZXIoKVxuICAgICAgICBjb3VudGRvd25UaW1lci5hZGRDb21wb25lbnRPclJlcGxhY2UobmV3IHV0aWxzLkludGVydmFsKDEwMDAsICgpPT57XG4gICAgICAgICAgdXBkYXRlQ291bnRkb3dudGltZXIoKVxuICAgICAgICB9KSlcbiAgICAgIH1cblxuXG4gICAgfSxcbiAgICB7IGhvdmVyVGV4dDogXCJDbGljayB0byBzdGFydCFcIixcbiAgICBkaXN0YW5jZTogNTAsXG5cbiAgfVxuICApXG4pXG5cbmVuZ2luZS5hZGRTeXN0ZW0obmV3IFNvbWVTeXN0ZW0oaWRvb3IpKVxuXG5cblxuXG5jb25zdCBidWdzY29yZSA9IG5ldyBVSVRleHQoY2FudmFzKVxuYnVnc2NvcmUud2lkdGggPSA3NlxuYnVnc2NvcmUuaGVpZ2h0ID0gNzZcbmJ1Z3Njb3JlLmhBbGlnbiA9IFwicmlnaHRcIlxuYnVnc2NvcmUudkFsaWduID0gXCJib3R0b21cIlxuYnVnc2NvcmUucG9zaXRpb25ZID0gMTEwXG5idWdzY29yZS5wb3NpdGlvblggPSAtMTIwXG5idWdzY29yZS5mb250U2l6ZSA9IDI1XG5idWdzY29yZS5jb2xvciA9IENvbG9yNC5CbGFjaygpXG5cblxuY29uc3QgdG90YWxzY29yZSA9IG5ldyBVSVRleHQoY2FudmFzKVxudG90YWxzY29yZS53aWR0aCA9IDc2XG50b3RhbHNjb3JlLmhlaWdodCA9IDc2XG50b3RhbHNjb3JlLmhBbGlnbiA9IFwicmlnaHRcIlxudG90YWxzY29yZS52QWxpZ24gPSBcImJvdHRvbVwiXG50b3RhbHNjb3JlLnBvc2l0aW9uWSA9IDIxMFxudG90YWxzY29yZS5wb3NpdGlvblggPSAtMTIwXG50b3RhbHNjb3JlLmZvbnRTaXplID0gMjVcbnRvdGFsc2NvcmUuY29sb3IgPSBDb2xvcjQuQmxhY2soKVxudG90YWxzY29yZS52YWx1ZSA9IFwiXCJcblxuXG5jb25zdCBob21lID0gbmV3IEVudGl0eSgpXG5lbmdpbmUuYWRkRW50aXR5KGhvbWUpXG5ob21lLmFkZENvbXBvbmVudChuZXcgR0xURlNoYXBlKFwibW9kZWxzL2hvbWUuZ2x0ZlwiKSlcbmhvbWUuYWRkQ29tcG9uZW50KG5ldyBUcmFuc2Zvcm0oeyBwb3NpdGlvbjogbmV3IFZlY3RvcjMoMCwgMCwgMCkgfSkpO1xuXG5jb25zdCBlbnRpdHkgPSBuZXcgRW50aXR5KCdlbnRpdHknKVxuZW5naW5lLmFkZEVudGl0eShlbnRpdHkpXG5jb25zdCBnbHRmU2hhcGUgPSBuZXcgR0xURlNoYXBlKFxuICAnbW9kZWxzL2dyYXNzL0Zsb29yQmFzZUdyYXNzXzAxLmdsYidcbilcbmVudGl0eS5hZGRDb21wb25lbnQoZ2x0ZlNoYXBlKVxuY29uc3QgdHJhbnNmb3JtMiA9IG5ldyBUcmFuc2Zvcm0oe1xuICBwb3NpdGlvbjogbmV3IFZlY3RvcjMoNDAsIDAsIDQwKSxcbiAgcm90YXRpb246IG5ldyBRdWF0ZXJuaW9uKDAsIDAsIDAsIDEpLFxuICBzY2FsZTogbmV3IFZlY3RvcjMoNSwgMSwgNSksXG59KVxuZW50aXR5LmFkZENvbXBvbmVudE9yUmVwbGFjZSh0cmFuc2Zvcm0yKVxuXG5cblxuY29uc3QgaW1hZ2VUZXh0dXJlID0gbmV3IFRleHR1cmUoJ2ltYWdlcy9VSV9HdWVzdGJvb2sucG5nJylcblxuXG5jb25zdCBpbnZlbnRvcnlDb250YWluZXIgPSBuZXcgVUlDb250YWluZXJTdGFjayhjYW52YXMpXG5pbnZlbnRvcnlDb250YWluZXIuYWRhcHRXaWR0aCA9IHRydWVcbmludmVudG9yeUNvbnRhaW5lci5hZGFwdEhlaWdodCA9IHRydWVcbmludmVudG9yeUNvbnRhaW5lci53aWR0aCA9IDIwMFxuaW52ZW50b3J5Q29udGFpbmVyLmhlaWdodCA9IDc1XG5pbnZlbnRvcnlDb250YWluZXIucG9zaXRpb25ZID0gMTAwXG5pbnZlbnRvcnlDb250YWluZXIucG9zaXRpb25YID0gMFxuaW52ZW50b3J5Q29udGFpbmVyLmNvbG9yID0gQ29sb3I0LlllbGxvdygpXG5pbnZlbnRvcnlDb250YWluZXIuaEFsaWduID0gXCJyaWdodFwiXG5pbnZlbnRvcnlDb250YWluZXIudkFsaWduID0gXCJib3R0b21cIlxuaW52ZW50b3J5Q29udGFpbmVyLnN0YWNrT3JpZW50YXRpb24gPSBVSVN0YWNrT3JpZW50YXRpb24uVkVSVElDQUxcbmludmVudG9yeUNvbnRhaW5lci5vcGFjaXR5ID0gMC4xXG5pbnZlbnRvcnlDb250YWluZXIudmlzaWJsZSA9IHRydWVcblxuXG5jb25zdCBjbGlja2V4aXQgPSBuZXcgRW50aXR5KClcbmVuZ2luZS5hZGRFbnRpdHkoY2xpY2tleGl0KVxuY2xpY2tleGl0LmFkZENvbXBvbmVudChuZXcgR0xURlNoYXBlKFwibW9kZWxzL2hvbWUuZ2xiXCIpKVxuY2xpY2tleGl0LmFkZENvbXBvbmVudChuZXcgVHJhbnNmb3JtKHsgcG9zaXRpb246IG5ldyBWZWN0b3IzKDAsIDAsIDApIH0pKTtcbmNsaWNrZXhpdC5hZGRDb21wb25lbnQoXG5cbiAgbmV3IE9uUG9pbnRlckRvd24oXG4gICAgKF9lKSA9PiB7XG4gICAgICBSZXN0cmljdGVkQWN0aW9ucy5tb3ZlUGxheWVyVG8oeyB4OiA0MCwgeTogMywgejogNDAgfSwgeyB4OiAzLCB5OiA1MCwgejogNDAgfSksXG4gICAgICAgIGludmVudG9yeUNvbnRhaW5lci52aXNpYmxlID0gZmFsc2VcblxuICAgIH0sXG4gICAgeyBob3ZlclRleHQ6IFwiRXhpdCFcIixcbiAgICBkaXN0YW5jZTogNSwgIH1cbiAgKVxuKVxuXG5cblxuXG5cblxuXG4gIGNvbnN0IHBvaW50MSA9IG5ldyBWZWN0b3IzKDU1LCAwLCA5MClcbiAgY29uc3QgcG9pbnQyID0gbmV3IFZlY3RvcjMoNTUsIDAsIDc1KVxuICBjb25zdCBwb2ludDMgPSBuZXcgVmVjdG9yMyg1NSwgMCwgNDApXG4gIGNvbnN0IHBvaW50NCA9IG5ldyBWZWN0b3IzKDU1LCAwLCA0KVxuICBjb25zdCBwb2ludDUgPSBuZXcgVmVjdG9yMyg1NSwgMCwgLTEwKVxuICBjb25zdCBwb2ludDYgPSBuZXcgVmVjdG9yMygyNSwwLCA5MClcbiAgY29uc3QgcG9pbnQ3ID0gbmV3IFZlY3RvcjMoMjUsIDAsIDc1KVxuICBjb25zdCBwb2ludDggPSBuZXcgVmVjdG9yMygyNSwgMCwgNDApXG4gIGNvbnN0IHBvaW50OSA9IG5ldyBWZWN0b3IzKDI1LCAwLCA0KVxuICBjb25zdCBwb2ludDEwID0gbmV3IFZlY3RvcjMoMjUsIDAsIC0xMClcbiAgY29uc3QgcG9pbnQxMSA9IG5ldyBWZWN0b3IzKDQwLCAwLCA5MClcbiAgY29uc3QgcG9pbnQxMiA9IG5ldyBWZWN0b3IzKDQwLCAwLCA3NSlcbiAgY29uc3QgcG9pbnQxMyA9IG5ldyBWZWN0b3IzKDQwLCAwLCA0MClcbiAgY29uc3QgcG9pbnQxNCA9IG5ldyBWZWN0b3IzKDQwLCAwLCA0KVxuICBjb25zdCBwb2ludDE1ID0gbmV3IFZlY3RvcjMoNDAsIDIyMiwgLTEwKVxuICBjb25zdCBwb2ludDE2ID0gbmV3IFZlY3RvcjMoNzAsMCwgOTApXG4gIGNvbnN0IHBvaW50MTcgPSBuZXcgVmVjdG9yMyg3MCwgMCwgNzUpXG4gIGNvbnN0IHBvaW50MTggPSBuZXcgVmVjdG9yMyg3MCwgMCwgNDApXG4gIGNvbnN0IHBvaW50MTkgPSBuZXcgVmVjdG9yMyg3MCwgMCwgNClcbiAgY29uc3QgcG9pbnQyMCA9IG5ldyBWZWN0b3IzKDcwLCAwLCAtMTApXG4gIGNvbnN0IHBvaW50MjEgPSBuZXcgVmVjdG9yMyg5MCwgMCwgOTApXG4gIGNvbnN0IHBvaW50MjIgPSBuZXcgVmVjdG9yMyg5MCwgMCwgNzUpXG4gIGNvbnN0IHBvaW50MjMgPSBuZXcgVmVjdG9yMyg5MCwgMCwgNDApXG4gIGNvbnN0IHBvaW50MjQgPSBuZXcgVmVjdG9yMyg5MCwgMCwgNClcbiAgY29uc3QgcG9pbnQyNSA9IG5ldyBWZWN0b3IzKDkwLCAyMjIsIC0xMClcblxuY29uc3QgUGF0aDEgPSBbcG9pbnQyMiwgcG9pbnQyNCwgcG9pbnQxOSwgcG9pbnQxNywgcG9pbnQyLCBwb2ludDQsIHBvaW50MTQsIHBvaW50MTFdXG5jb25zdCBQYXRoMiA9IFtwb2ludDYsIHBvaW50NywgcG9pbnQ4LCBwb2ludDksIHBvaW50MTAsIHBvaW50MTFdXG5jb25zdCBQYXRoMyA9IFtwb2ludDIyLCBwb2ludDE3LCBwb2ludDE4LCBwb2ludDE5LCBwb2ludDEwLCBwb2ludDIxXVxuY29uc3QgUGF0aDQgPSBbcG9pbnQxNSwgcG9pbnQyNSwgcG9pbnQxNSwgcG9pbnQyMCwgcG9pbnQ2LCBwb2ludDI1XVxuY29uc3QgUGF0aDUgPSBbcG9pbnQxLCBwb2ludDcsIHBvaW50MjMsIHBvaW50MTQsIHBvaW50OSwgcG9pbnQyMV1cbmNvbnN0IFBhdGg2ID0gW3BvaW50MjEsIHBvaW50MTIsIHBvaW50NCwgcG9pbnQxNywgcG9pbnQyMCwgcG9pbnQ2XVxuY29uc3QgUGF0aHogPSBbcG9pbnQxNSwgcG9pbnQyNV1cblxubGV0IGRvb3JBdWRpb1NvdXJjZSA9IG5ldyBBdWRpb1NvdXJjZShuZXcgQXVkaW9DbGlwKFwic291bmRzL2Jhbmcud2F2XCIpKVxubGV0IGJvbnVzQXVkaW9Tb3VyY2UgPSBuZXcgQXVkaW9Tb3VyY2UobmV3IEF1ZGlvQ2xpcChcInNvdW5kcy9ib251cy53YXZcIikpXG5cbmNvbnN0IGJ1ZyA9IG5ldyBFbnRpdHkoKVxuYnVnLmFkZENvbXBvbmVudChuZXcgR0xURlNoYXBlKCdtb2RlbHMvYnVnLmdsYicpKVxuYnVnLmFkZENvbXBvbmVudChuZXcgVHJhbnNmb3JtKHtcbiAgICBwb3NpdGlvbjogbmV3IFZlY3RvcjMoMjAsIDUwMCwgMjApLFxuICAgIHJvdGF0aW9uOiBRdWF0ZXJuaW9uLkV1bGVyKDAsIDAsIDApLFxuICAgIHNjYWxlOiBuZXcgVmVjdG9yMygyLCAxLCAyKSxcbn0pKVxuYnVnLmFkZENvbXBvbmVudChcbiAgbmV3IE9uUG9pbnRlckRvd24oKCkgPT4ge1xuICAgIGRvb3JBdWRpb1NvdXJjZS5wbGF5T25jZSgpXG4gICAgYnVnc2NvcmUudmlzaWJsZSA9IGZhbHNlO1xuICAgIHBvaW50cyA9IHBvaW50cyArIDEwO1xuICAgIHRvdGFscyA9IHBvaW50c1xuICAgIGJ1Z3Njb3JlLnZhbHVlID0gdG90YWxzLnRvU3RyaW5nKCkgKyBcIiBwb2ludHNcIlxuICAgIGJ1Z3Njb3JlLnZpc2libGUgPSB0cnVlO1xuICB9LFxuICAgIHtcbiAgICAgIGhvdmVyVGV4dDogXCJCQU5HIVwiLFxuICAgICAgZGlzdGFuY2U6IDUwMCwgfVxuKVxuKVxuZW5naW5lLmFkZEVudGl0eShidWcpXG5cblxuY29uc3Qgc3BpZGVyID0gbmV3IEVudGl0eSgpXG5cbnNwaWRlci5hZGRDb21wb25lbnQobmV3IEdMVEZTaGFwZSgnbW9kZWxzL3NwaWRlci5nbHRmJykpXG5zcGlkZXIuYWRkQ29tcG9uZW50KG5ldyBUcmFuc2Zvcm0oe1xuICAgIHBvc2l0aW9uOiBuZXcgVmVjdG9yMygzMCwgNTAwLCA0MCksXG4gICAgcm90YXRpb246IFF1YXRlcm5pb24uRXVsZXIoMCwgOTAsIDApLFxuICAgIHNjYWxlOiBuZXcgVmVjdG9yMygyLCAxLCAyKSxcbn0pKVxuc3BpZGVyLmFkZENvbXBvbmVudChcbiAgbmV3IE9uUG9pbnRlckRvd24oKCkgPT4ge1xuICAgIGRvb3JBdWRpb1NvdXJjZS5wbGF5T25jZSgpXG4gICAgcG9pbnRzID0gcG9pbnRzICsgMjIyO1xuICAgIHRvdGFscyA9IHBvaW50c1xuICAgIGJ1Z3Njb3JlLnZhbHVlID0gdG90YWxzLnRvU3RyaW5nKCkgKyBcIiBwb2ludHNcIlxuICAgIGJ1Z3Njb3JlLnZpc2libGUgPSB0cnVlO1xuICB9LFxuICAgIHtcbiAgICAgIGhvdmVyVGV4dDogXCJCQU5HIVwiLFxuICAgICAgZGlzdGFuY2U6IDUwMCwgfVxuKVxuKVxuZW5naW5lLmFkZEVudGl0eShzcGlkZXIpXG5cblxuY29uc3Qgc3BpZGVyMiA9IG5ldyBFbnRpdHkoKVxuXG5zcGlkZXIyLmFkZENvbXBvbmVudChuZXcgR0xURlNoYXBlKCdtb2RlbHMvc3BpZGVyLmdsdGYnKSlcbnNwaWRlcjIuYWRkQ29tcG9uZW50KG5ldyBUcmFuc2Zvcm0oe1xuICAgIHBvc2l0aW9uOiBuZXcgVmVjdG9yMygyMCwgNTAwLCAyMCksXG4gICAgcm90YXRpb246IFF1YXRlcm5pb24uRXVsZXIoMCwgOTAsIDApLFxuICAgIHNjYWxlOiBuZXcgVmVjdG9yMygyLCAxLCAyKSxcbn0pKVxuc3BpZGVyMi5hZGRDb21wb25lbnQoXG4gICAgbmV3IE9uUG9pbnRlckRvd24oKCkgPT4ge1xuICAgICAgZG9vckF1ZGlvU291cmNlLnBsYXlPbmNlKClcbiAgICAgIHBvaW50cyA9IHBvaW50cyArIDY5O1xuICAgICAgdG90YWxzID0gcG9pbnRzXG4gICAgICBidWdzY29yZS52YWx1ZSA9IHRvdGFscy50b1N0cmluZygpICsgXCIgcG9pbnRzXCJcbiAgICAgIGJ1Z3Njb3JlLnZpc2libGUgPSB0cnVlO1xuICAgIH0sXG4gICAgICB7XG4gICAgICAgIGhvdmVyVGV4dDogXCJCQU5HIVwiLFxuICAgICAgICBkaXN0YW5jZTogNTAwLCB9XG4gIClcbiAgKVxuZW5naW5lLmFkZEVudGl0eShzcGlkZXIyKVxuXG5jb25zdCBqdW1wZXIgPSBuZXcgRW50aXR5KClcblxuanVtcGVyLmFkZENvbXBvbmVudChuZXcgR0xURlNoYXBlKCdtb2RlbHMvanVtcGVyLmdsYicpKVxuanVtcGVyLmFkZENvbXBvbmVudChuZXcgVHJhbnNmb3JtKHtcbiAgICBwb3NpdGlvbjogbmV3IFZlY3RvcjMoMjAsIDUwMCwgMjApLFxuICAgIHJvdGF0aW9uOiBRdWF0ZXJuaW9uLkV1bGVyKDAsIDkwLCAwKSxcbiAgICBzY2FsZTogbmV3IFZlY3RvcjMoMiwgMSwgMiksXG59KSlcbmp1bXBlci5hZGRDb21wb25lbnQoXG4gICAgbmV3IE9uUG9pbnRlckRvd24oKCkgPT4ge1xuICAgICAgZG9vckF1ZGlvU291cmNlLnBsYXlPbmNlKClcbiAgICAgIHBvaW50cyA9IHBvaW50cyArIDIwMDtcbiAgICAgIHRvdGFscyA9IHBvaW50c1xuICAgICAgYnVnc2NvcmUudmFsdWUgPSB0b3RhbHMudG9TdHJpbmcoKSArIFwiIHBvaW50c1wiXG4gICAgICBidWdzY29yZS52aXNpYmxlID0gdHJ1ZTtcbiAgICB9LFxuICAgICAge1xuICAgICAgICBob3ZlclRleHQ6IFwiQkFORyFcIixcbiAgICAgICAgZGlzdGFuY2U6IDUwMCwgfVxuICApXG4gIClcblxuICBjb25zdCB3b3JtID0gbmV3IEVudGl0eSgpXG5cbiAgd29ybS5hZGRDb21wb25lbnQobmV3IEdMVEZTaGFwZSgnbW9kZWxzL3dvcm0uZ2xiJykpXG4gIHdvcm0uYWRkQ29tcG9uZW50KG5ldyBUcmFuc2Zvcm0oe1xuICAgICAgcG9zaXRpb246IG5ldyBWZWN0b3IzKDIwLCA1MDAsIDIwKSxcbiAgICAgIHJvdGF0aW9uOiBRdWF0ZXJuaW9uLkV1bGVyKDAsIDkwLCAwKSxcbiAgICAgIHNjYWxlOiBuZXcgVmVjdG9yMygyLCAxLCAyKSxcbiAgfSkpXG4gIHdvcm0uYWRkQ29tcG9uZW50KFxuICAgICAgbmV3IE9uUG9pbnRlckRvd24oKCkgPT4ge1xuICAgICAgICBib251c0F1ZGlvU291cmNlLnBsYXlPbmNlKClcbiAgICAgICAgcG9pbnRzID0gcG9pbnRzICsgMTAwMDtcbiAgICAgICAgdG90YWxzID0gcG9pbnRzXG4gICAgICAgIGJ1Z3Njb3JlLnZhbHVlID0gdG90YWxzLnRvU3RyaW5nKCkgKyBcIiBwb2ludHNcIlxuICAgICAgICBidWdzY29yZS52aXNpYmxlID0gdHJ1ZTtcbiAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBob3ZlclRleHQ6IFwiQkFORyFcIixcbiAgICAgICAgICBkaXN0YW5jZTogNTAwLCB9XG4gICAgKVxuICAgIClcblxuZW5naW5lLmFkZEVudGl0eShqdW1wZXIpXG5lbmdpbmUuYWRkRW50aXR5KHdvcm0pXG5cbmxldCBTdGFydFBvcyA9IG5ldyBWZWN0b3IzKDQwLCAwLCA5MClcbmxldCBFbmRQb3MgPSBuZXcgVmVjdG9yMyg0MCwgMCwgMClcblxuaG9tZS5hZGRDb21wb25lbnQoZG9vckF1ZGlvU291cmNlKVxuY2xpY2tleGl0LmFkZENvbXBvbmVudChib251c0F1ZGlvU291cmNlKVxuXG5mdW5jdGlvbiB1cGRhdGVDb3VudGRvd250aW1lcigpe1xuICBsZXQgZGlzdGFuY2UgPSBnYW1ldGltZSAtIERhdGUubm93KClcbiAgaWYoZGlzdGFuY2UgPiAxNjUwMDApe1xuXG59XG4gIGlmKGRpc3RhbmNlID4gMTYzMDAwICYmIGRpc3RhbmNlIDwgMTY1MDAwKXtcbnRvdGFsc2NvcmUudmFsdWUgPSBcIlJlYWR5PyFcIlxuXG59XG5cbiAgaWYoZGlzdGFuY2UgPiAxNjAwMDAgJiYgZGlzdGFuY2UgPCAxNjMwMDApe1xudG90YWxzY29yZS52YWx1ZSA9IFwiU2V0Li5cIlxuXG59XG5cbiAgaWYoZGlzdGFuY2UgPiAxMzAwMDAgJiYgZGlzdGFuY2UgPCAxNjAwMDApe1xuICAgIHRvdGFsc2NvcmUudmFsdWUgPSBcIldhdmUgMVwiXG4gICAgYnVnLmFkZENvbXBvbmVudChuZXcgdXRpbHMuRm9sbG93UGF0aENvbXBvbmVudChQYXRoMSwgMzApKVxuICB9XG4gIGlmKGRpc3RhbmNlID4gMTIwMDAwICYmIGRpc3RhbmNlIDwgMTMwMDAwKXtcbiAgICBzcGlkZXIyLmFkZENvbXBvbmVudChuZXcgdXRpbHMuRm9sbG93UGF0aENvbXBvbmVudChQYXRoMiwgMTApKVxuICAgIHdvcm0uYWRkQ29tcG9uZW50KG5ldyB1dGlscy5Gb2xsb3dQYXRoQ29tcG9uZW50KFBhdGgzLCAxMCkpXG4gIH1cbiAgaWYoZGlzdGFuY2UgPiA3NTAwMCAmJiBkaXN0YW5jZSA8IDExNTAwMCl7XG4gICAgdG90YWxzY29yZS52YWx1ZSA9IFwiV2F2ZSAyXCJcbiAgICBzcGlkZXIuYWRkQ29tcG9uZW50KG5ldyB1dGlscy5Gb2xsb3dQYXRoQ29tcG9uZW50KFBhdGgxLCAyMCkpXG4gICAganVtcGVyLmFkZENvbXBvbmVudChuZXcgdXRpbHMuRm9sbG93UGF0aENvbXBvbmVudChQYXRoMiwgMTApKVxuICB9XG5cbiAgaWYoZGlzdGFuY2UgPCA3MDAwMCAmJiBkaXN0YW5jZSA+IDEpe1xuICAgIHRvdGFsc2NvcmUudmFsdWUgPSBcIkZpbmFsIFdhdmUhXCJcbiAgICBidWcuYWRkQ29tcG9uZW50KG5ldyB1dGlscy5Gb2xsb3dQYXRoQ29tcG9uZW50KFBhdGgxLCAyMCkpXG4gICAgc3BpZGVyLmFkZENvbXBvbmVudChuZXcgdXRpbHMuRm9sbG93UGF0aENvbXBvbmVudChQYXRoMiwgMjApKVxuICAgIGp1bXBlci5hZGRDb21wb25lbnQobmV3IHV0aWxzLkZvbGxvd1BhdGhDb21wb25lbnQoUGF0aDQsIDIwKSlcbiAgICBzcGlkZXIyLmFkZENvbXBvbmVudChuZXcgdXRpbHMuRm9sbG93UGF0aENvbXBvbmVudChQYXRoNSwgMTApKVxuICAgIHdvcm0uYWRkQ29tcG9uZW50KG5ldyB1dGlscy5Gb2xsb3dQYXRoQ29tcG9uZW50KFBhdGg2LCAxMCkpXG4gICAgc3BpZGVyMi5hZGRDb21wb25lbnQobmV3IHV0aWxzLk1vdmVUcmFuc2Zvcm1Db21wb25lbnQoU3RhcnRQb3MsIEVuZFBvcywgOCkpXG4gIH1cbiAgICBpZihkaXN0YW5jZSA8IDEpe1xuICAgICAgcmVzdWx0ID0gcG9pbnRzXG4gICAgICBsb2coJ0dhbWUgb3ZlcicpXG4gICAgICBlbmdpbmUucmVtb3ZlRW50aXR5KGNvdW50ZG93blRpbWVyKVxuICAgICAgc3RhdHVzVGV4dC52YWx1ZSA9IFwiR2FtZSBPdmVyISBUcnkgYWdhaW4uXCJcbiAgICAgIGdhbWVTdGFydGVkID0gZmFsc2VcbiAgICAgIHRvdGFsc2NvcmUudmFsdWUgPSBcIlJlc3VsdDogXCIgKyByZXN1bHQudG9TdHJpbmcoKSArIFwiIHBvaW50c1wiXG4gICAgICBwb2ludHMgPSBwb2ludHMgKiAwO1xuICAgIH1cbiAgICBlbHNle1xuICAgIHZhciBkYXlzID0gTWF0aC5mbG9vcihkaXN0YW5jZSAvICgxMDAwICogNjAgKiA2MCAqIDI0KSk7XG4gICAgdmFyIGhvdXJzID0gTWF0aC5mbG9vcigoZGlzdGFuY2UgJSAoMTAwMCAqIDYwICogNjAgKiAyNCkpIC8gKDEwMDAgKiA2MCAqIDYwKSk7XG4gICAgdmFyIG1pbnV0ZXMgPSBNYXRoLmZsb29yKChkaXN0YW5jZSAlICgxMDAwICogNjAgKiA2MCkpIC8gKDEwMDAgKiA2MCkpO1xuICAgIHZhciBzZWNvbmRzID0gTWF0aC5mbG9vcigoZGlzdGFuY2UgJSAoMTAwMCAqIDYwKSkgLyAxMDAwKTtcbiAgICBzdGF0dXNUZXh0LnZhbHVlID0gXCJTcXVhc2ggYnVncyEgXCIgKyBkaXN0YW5jZS50b1N0cmluZygpXG4gICAgfVxuICB9XG4iXX0=