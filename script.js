window.addEventListener('load', function() {

    const boton1 = document.getElementById("formPage");
    const boton2 = document.getElementById("tributePage");
    const boton3 = document.getElementById("technicalPage");
    const boton4 = document.getElementById("landingPage");


    function redirectFormPage() {
        window.open("https://felogue.github.io/Free_code_camp/1-responsive-web-design/proyectos-certificacion/5-survey-form-certificacion/index.html", "_blank");
    }

    function redirectTributePage() {
        window.open("https://felogue.github.io/Free_code_camp/1-responsive-web-design/proyectos-certificacion/10-pagina-homenaje-certificacion/index.html", "_blank");
    }

    function redirectTechnicalPage(){
        window.open("https://felogue.github.io/Free_code_camp/1-responsive-web-design/proyectos-certificacion/14-pagina-documentacion-tecnica/index.html", "_blank");
    }

    function redirectLandingPage(){
        window.open("https://felogue.github.io/Free_code_camp/1-responsive-web-design/proyectos-certificacion/17-landing-page/index.html", "_blank");
    }

    boton1.addEventListener("click", redirectFormPage);
    boton2.addEventListener("click", redirectTributePage);
    boton3.addEventListener("click", redirectTechnicalPage);
    boton4.addEventListener("click", redirectLandingPage);

});