//Slide Page Landing Transition
function slidePageTransition(event) {
    const button = (event.currentTarget)

    const body = document.querySelector('body')

    body.classList.add('animate-slide-transition')

    const delay = setTimeout(() => {
        window.location.href = '/orphanages'
    }, 1000)
}