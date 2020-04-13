export const defaultCode_python = [
    'print("Hello World!")',
].join('\n');

export const defaultCode_cpp = [
    '#include <iostream>',
    'int main() {',
    '\tstd::cout << "Hello World!" << std::endl;',
    '\treturn 0;',
    '}',
].join('\n');

export const defaultCode_c = [
    '#include "stdio.h"',
    'int main() {',
    '\tprintf("Hello World!\\n");',
    '\treturn 0;',
    '}',
].join('\n');

export const defaultCode_js = [
    'console.log(123);',
    'var a = 1;',
    'var b = 2;',
    'var c = 3;',
].join('\n');

export const defaultCode_json = `{
    "base": "vs",
    "inherit": true,
    "rules": [
        {
        "background": "e2e9ff5e",
        "token": "text.html source.active4d"
        }
    ],
    "$schema": "http://json.schemastore.org/coffeelint",
    "line_endings": "unix",
}`;