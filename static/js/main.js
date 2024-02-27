let activeBlock = 'block-projects';
const apiHost = 'https://course4-back-production.up.railway.app/';

function changeActiveBlockTo(newActiveBlock) {
    if (newActiveBlock !== activeBlock) {
        disableCurrentBlock();
        setActive(newActiveBlock);
    }
}

function disableCurrentBlock() {
    const currentBlock = document.getElementById(activeBlock);
    currentBlock.children[1].style.transform = 'scaleY(0)';
    currentBlock.children[1].style.overflow = 'hidden';
    currentBlock.children[1].style.padding = 0;
    setTimeout(() => {
        currentBlock.children[1].style.height = 0;
    }, 200);
}

function setActive(newActiveBlock) {
    const newActive = document.getElementById(newActiveBlock);
    newActive.children[1].removeAttribute('style')
    activeBlock = newActiveBlock;
}


async function contacts() {
    const contactsElem = document.getElementById('contacts__content');
    contactsElem.innerHTML = '';
    const contacts = await (await fetch(apiHost + '/contacts')).json();
    for (const contact of contacts) {
        const contactElem = document.createElement('a');
        contactElem.href = contact.link;
        contactElem.innerHTML = contact.name;
        contactElem.className = 'contacts__link';
        contactsElem.append(contactElem);
    }
}

contacts();
