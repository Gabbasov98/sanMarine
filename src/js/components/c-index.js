const parallaxMain = document.querySelector(".main")

if(parallaxMain){
    const mainImg = document.querySelector(".main__img img")

    const forMainImg = 40;
    const speed = 0.15

    let positionX = 0
    let cordXPercent = 0

    function setMouseParallaxStyle() {
        const distX = cordXPercent - positionX

        positionX = positionX + (distX * speed)

        mainImg.style.cssText = `transform: translate(${positionX/forMainImg}%,0%);`

        requestAnimationFrame(setMouseParallaxStyle)
    }

    setMouseParallaxStyle()

    parallaxMain.addEventListener("mousemove", function (e) {
        const parallaxWidth = parallaxMain.offsetWidth

        const cordX = e.pageX - parallaxWidth/2;

        cordXPercent = cordX / parallaxWidth * 100
    })
}



function setBoatSpeed() {
    let speed = window.innerWidth / 80
    if (window.innerWidth < 992){
        speed = 20
    }
    $(".boat img").css("animation-duration",`${speed}s`)
}

$(window).resize(function () {
    setBoatSpeed()
})
setBoatSpeed()
