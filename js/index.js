$("#alfabeto div").draggable(
    {helper: "clone"}
);

function make_droppable(letter, div_id){
  str = "#draggable_" + letter;
  $(div_id).droppable({
    accept: str,
    hoverClass: "ui-state-active",
    drop: function( event, ui ) {
      $( this )
        .addClass( "ui-state-highlight" )
        .find( "p" )
          .html("<img src=alfabeto/Alfa" + letter + ".jpg width=50px />" )
        .find("campos")
          $('div#campos').append("")
    }
  });
}

make_droppable('D', '#droppable_D0');
make_droppable('A', '#droppable_A1');
make_droppable('V', '#droppable_V2');
make_droppable('I', '#droppable_I3');
