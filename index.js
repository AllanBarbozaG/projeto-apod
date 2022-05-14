let botaoEnviar = document.querySelector("#botao-enviar");
botaoEnviar.addEventListener('click', function(event) {
  event.preventDefault();
  requisicao();
});

$(document).ready(function() {
  console.log( "document loaded" );
});

$(window).on( "load", function() {
  console.log( "window loaded" );
});

function requisicao() {
  let rDataInput = $('#recebe-data-input[type="date"]').val(); 
  $.ajax({    
    url: `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${rDataInput}`,
    
    success: function(result) {      
      console.log(result);
      exibeImagemDetalhes(result);
    },
  })
}

function exibeImagemDetalhes(result) {

  if (result.media_type === 'video') {
    console.log('é um vídeo!!');
    $('#img').css('display', 'none');
    
  } else {  
    $('#img').attr("src", result.url);
    
  }
  $('#descricao-p').html(result.explanation);
}

/*class Imagem {
  requisição();
  constructor() {
    this.descricao = requisição().result.explanation 
  }
}

const imagem = new Imagem()*/

/*function exibeImagem {

}*/

/*class Imagem {
  constructor()
}*/




