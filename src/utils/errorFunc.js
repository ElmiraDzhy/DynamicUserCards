'use strict';

import createElem from "./createFunc.js";

export default function showError(){
    const div = createElem('div', {classNames: ['error-wrapper']}, 'Oops.', 'Something went wrong...');
    document.body.append(div);
}