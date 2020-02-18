'use strict';

const Msg = {
    set info(m) {document.querySelector('#infoMsg').innerHTML = m},
    set error(m) {document.querySelector('#errorMsg').innerHTML = m},
    set classify(m) {document.querySelector('#classifyMsg').innerHTML = m},

    get classify() {return document.querySelector('#classifyMsg').innerHTML}
}
