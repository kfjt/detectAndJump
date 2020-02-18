'use strict';
{
const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        // if(mutation.type === 'childList') {
            if(0 < mutation.addedNodes.length) {
                const url = `https://www.google.com/search?q=${Msg.classify}`
                if (!confirm(`jump to ${url}`)) {
                    throw new Error('Access denied by user action');
                }
                location.href = url;
            };
        // };
    });
});

const config = {
    // attributes: true,
    childList: true,
    // characterData: true
};

observer.observe(document.querySelector('#classifyMsg'), config);

// observer.disconnect();
}