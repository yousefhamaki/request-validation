"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function QueryCheck(query, params) {
    const result = [];
    for (const key in params) {
        const stand = params[key].split("|");
        if (stand.indexOf("required") > -1) {
            if (!query[key]) {
                result[result.length] = "oops! " + key + " is Required";
            }
        }
        if (query[key]) {
            if (stand.indexOf("number") > -1) {
                if (isNaN(Number(query[key]))) {
                    result[result.length] = "oh! oh " + key + " must be number";
                }
            }
        }
    }
    return result;
}
exports.default = QueryCheck;
//# sourceMappingURL=index.js.map