        
var data = new Date();
var ano  = data.getFullYear();
$("#data").html(ano);
        
        
/********* Função para ativar li do cardapio ***********/
$(function () {
    $('.li-abas').bind('click', function(event) {
        $('.li-abas').removeClass('li-ativado');
        var $anchor = $(this);
        $($anchor).addClass('li-ativado');
    })
})
