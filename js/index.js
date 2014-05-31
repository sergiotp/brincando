$(function() {
  $("#alfabeto div").draggable(
    {helper: "clone"}
  );

  $( "#droppable_D0" ).droppable({
    accept: "#draggable_D",
    hoverClass: "ui-state-active",
    drop: function( event, ui ) {
      $( this )
        .addClass( "ui-state-highlight" )
        .find( "p" )
          .html("<img src=alfabeto/AlfaD.jpg width=50px />" )
        .find("campos")
          $('div#campos').append("")
    }
  });

  $( "#droppable_A1" ).droppable({
    accept: "#draggable_A",
    hoverClass: "ui-state-active",
    drop: function( event, ui ) {
      $( this )
        .addClass( "ui-state-highlight" )
        .find( "p" )
          .html("<img src=alfabeto/AlfaA.jpg width=50px />" )
        .find("campos")
          $('div#campos').append("")
    }
  });

  $( "#droppable_V2" ).droppable({
    accept: "#draggable_V",
    hoverClass: "ui-state-active",
    drop: function( event, ui ) {
      $( this )
        .addClass( "ui-state-highlight" )
        .find( "p" )
          .html("<img src=alfabeto/AlfaV.jpg width=50px />" )
        .find("campos")
          $('div#campos').append("")
    }
  });

  $( "#droppable_I3" ).droppable({
    accept: "#draggable_I",
    hoverClass: "ui-state-active",
    drop: function( event, ui ) {
      $( this )
        .addClass( "ui-state-highlight" )
        .find( "p" )
          .html("<img src=alfabeto/AlfaI.jpg width=50px />" )
        .find("campos")
          $('div#campos').append("<a href=jogo.php?x=1200&grupo=4&dificuldade=&Jogar=Jogar><div id=finalizar></div><div id=conteudo><p style=float:left; width:300px;>PARABENS!<BR /><BR />VOC&Ecirc; ACERTOU!</p><img src=imagens/fotos/4-DAVI.jpg width=350px height=270px style=float:right;/></div></a>")
      }
    });
  });
