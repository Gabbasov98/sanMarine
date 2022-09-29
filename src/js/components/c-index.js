const parallaxMain = document.querySelector(".main")

if(parallaxMain){
    const mainImg = document.querySelector(".main__img img")

    const forMainImg = 40;
    const speed = 0.15

    let positionX = 0
    let positionY = 0
    let cordXPercent = 0
    let cordYPercent = 0

    function setMouseParallaxStyle() {
        const distX = cordXPercent - positionX
        const distY = cordYPercent - positionY

        positionX = positionX + (distX * speed)
        positionY = positionY + (distY * speed)

        mainImg.style.cssText = `transform: translate(${positionX/forMainImg}%,${positionY/forMainImg}%);`

        requestAnimationFrame(setMouseParallaxStyle)
    }

    setMouseParallaxStyle()

    parallaxMain.addEventListener("mousemove", function (e) {
        const parallaxWidth = parallaxMain.offsetWidth
        const parallaxHeight = parallaxMain.offsetHeight

        const cordX = e.pageX - parallaxWidth/2;
        const cordY = e.pageY - parallaxHeight/2;

        cordXPercent = cordX / parallaxWidth * 100
        cordYPercent = cordY / parallaxHeight * 100
    })
}
