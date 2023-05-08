const doms = {
    bg: document.querySelector('.bg'),
    textBanner: document.querySelector('.text-banner'),
    footer: document.querySelector('.footer')
};

window.addEventListener('hashchange', () =>
{
        doms.textBanner.classList.remove('hide');
        doms.footer.classList.remove('hide');
})

