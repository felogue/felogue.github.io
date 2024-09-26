window.addEventListener('load', function() {

    const boton1 = document.getElementById("formRecipe");
    const boton2 = document.getElementById("formPage");
    const boton3 = document.getElementById("technicalPage");
    const boton4 = document.getElementById("landingPage");


    function redirectFormRecipe() {
        window.open("http://sitiofer.mywebcommunity.org/index.php", "_blank");
    }

    function redirectFormPage() {
        window.open("https://felogue.github.io/Free_code_camp/1-responsive-web-design/proyectos-certificacion/5-survey-form-certificacion/index.html", "_blank");
    }

    function redirectTechnicalPage(){
        window.open("https://felogue.github.io/Free_code_camp/1-responsive-web-design/proyectos-certificacion/14-pagina-documentacion-tecnica/index.html", "_blank");
    }

    function redirectLandingPage(){
        window.open("https://felogue.github.io/Free_code_camp/1-responsive-web-design/proyectos-certificacion/17-landing-page/index.html", "_blank");
    }

    boton1.addEventListener("click", redirectFormRecipe);
    boton2.addEventListener("click", redirectFormPage);
    boton3.addEventListener("click", redirectTechnicalPage);
    boton4.addEventListener("click", redirectLandingPage);

});