'use strict';
{
const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if(0 < mutation.addedNodes.length) {
            const url = `https://www.google.com/search?q=${Msg.classify}`
            if (!confirm(`jump to ${url}`)) {
                throw new Error('Access denied by user action');
            }
            location.href = url;
        };
    });
});

observer.observe(document.querySelector('#classifyMsg'), {childList: true});
// observer.disconnect();
}