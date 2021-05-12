"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensure = void 0;
function ensure(object, condition = () => true) {
    const entries = Object.entries(object);
    if (entries.length !== 1) {
        throw new Error(`ENSURE: Illegal usage of 'ensure' function!`);
    }
    const [entry] = entries;
    if (typeof entry[1] === 'undefined' || !condition(entry[1])) {
        throw new Error(`ENSURE: Illegal argument: ${entry[0]} = ${entry[1]} did not meet the given requirements!`);
    }
}
exports.ensure = ensure;
//# sourceMappingURL=ensure.js.map