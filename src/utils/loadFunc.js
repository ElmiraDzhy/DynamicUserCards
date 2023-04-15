'use strict';

import createElem from "./createFunc.js";

export default function loading(){
    const spinner = createElem('div', {classNames: ['loader']});
    return spinner;
}