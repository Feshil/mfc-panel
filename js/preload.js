window.onload = function () {
    setTimeout(() => {
        let preloader = document.getElementById('preloader');
    if (!preloader.classList.contains('hide')) {
        preloader.classList.add('hide');
    }
    }, 500);
}