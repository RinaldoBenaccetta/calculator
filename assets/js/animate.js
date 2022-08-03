/**
 * Handle the giggle when an error in the operation is detected.
 */
export const animateError = () => {
    const container = document.querySelector('#container');

    // add giggle class to container.
    container.classList.add('giggle');
    // wait before removing giggle class.
    setTimeout(function () {
        container.classList.remove('giggle');
    }, 500);
};
