'use strict';
{
const classifyElement = document.querySelector('#classifyMsg');

const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if(mutation.type === 'childList') {
            if(0 < mutation.addedNodes.length) {
                const queryword = classifyElement.innerHTML;
                console.log(queryword);
                location.href = `https://www.google.com/search?q=${queryword}`;
            };
        };
    });
});

const config = {
    attributes: true,
    childList: true,
    characterData: true
};

observer.observe(classifyElement, config);

// observer.disconnect();
}