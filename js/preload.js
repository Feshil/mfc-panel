window.onload = function () {
    setTimeout(() => {
        const preloader = document.getElementById('preloader'),
              site = document.getElementById('wrap-site');
    if (!preloader.classList.contains('hide')) {
        preloader.classList.add('hide');
    }
    site.style.display = "block";
    }, 500);
}