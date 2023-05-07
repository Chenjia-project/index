const doms = {
    bg: document.querySelector('.bg'),
    textBanner: document.querySelector('.text-banner'),
    titleVersion: document.querySelector('#title-server-version'),

    footer: document.querySelector('.footer')
};

var isPageLoaded = false;

window.addEventListener('hashchange', () =>
{
        doms.textBanner.classList.remove('hide');
        doms.footer.classList.remove('hide');
});

window.addEventListener('load', () =>
{
    document.body.classList.add('loadend');
    isPageLoaded = true;
});