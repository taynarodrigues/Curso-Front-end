
// Vamos criar a função ativaScrollSuave.
// Ela receberá o seletor do elemento alvo 
// para nosso efeito de transição suave.

function ativaScrollSuave(selector){
    // Para o seletor que receberemos, vamos selecionar o elemento e adicionar o código para o evento clique
    $(selector).click(function(event){
        // Precisamos fazer event.preventDefault() para cancelar o evento padrão das nossas âncoras, 
        // que é seguir o valor do atributo href.
        event.preventDefault(); /*cancelar o evento padrão*/

        // Queremos que transição seja feita por JavaScript.
        // Para a âncora que foi clicada, precisamos extrair o valor do seu href. 
        // Esse valor guarda o ID do elemento no qual queremos fazer o scroll suave.
        var target = $(this).attr('href');

        // já sabemos para a âncora clicada até onde ela deve ir, faremos 
        // a função animate do jQuery. Ela será responsável em fazer nosso scroll suave:
        $('html, body').animate({
            scrollTop: $(target).offset().top
        },5000);
    });

    // Em nosso código, target é o valor do href do elemento que clicamos. 
    // Fizemos $(this) para promovermos o this, 
    // que é um elemento do DOM para um 
    // jQuery Object para então 
    // extrairmos o valor do 
    // atributo href através de $(this).attr('href').


    // Precisamos passar como parâmetro para a função ativaScrollSuave
    //  o seletor CSS de cada âncora que desejamos fazer o scroll suave. 
    ativaScrollSuave('a[href*=panel-about]'); /**Seletor CSS: Seletor de atributo */
    ativaScrollSuave('a[href*=panel-speakers]');
    ativaScrollSuave('a[href*panel-form]');
}