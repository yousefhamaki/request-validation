/// <reference types="qs" />
declare function QueryCheck(query: {
    [key: string]: string | qs.ParsedQs | string[] | qs.ParsedQs[] | undefined;
}, params: {
    [key: string]: string;
}): string[];
export default QueryCheck;
//# sourceMappingURL=index.d.ts.map