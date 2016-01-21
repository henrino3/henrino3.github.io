$( document ).ready(function() {


    $('.side h1, .side img').draggable({
      helper: 'clone'
    });


    $('.canvas h1').draggable({
      helper: 'clone'
    });






          $('.b-logo').sortable();
          $('.b-logo').droppable({
          drop: function(ev, ui) {
              console.log(ui);
              console.log(ui.draggable.context);
              console.log($(ui.draggable.context).data('pic'));
              $('.b-logo').html(ui.draggable.context);
            }});


          $('.b-menu').sortable();
          $('.b-menu').droppable({
          drop: function(ev, ui) {
              $('.b-menu').html(ui.draggable.context);
            }});

          $('.b-title').sortable();
          $('.b-title').droppable({
          drop: function(ev, ui) {
              $('.b-title').html(ui.draggable.context);
            }});

          $('.body-main').sortable();
          $('.body-main').droppable({
          drop: function(ev, ui) {
              $('.body-main').html(ui.draggable.context);
            }});

          $('.body-text').sortable();
          $('.body-text').droppable({
          drop: function(ev, ui) {
              $('.body-text').html(ui.draggable.context);
            }});


    // $('body').click(function(e) {
    //       var target = $(e.target);
    //       console.log(target);
    // });​
    //
    // drag = function(e) {
    //   e = "."+e;
    //   console.log(e);
    //
    //     //put here
    //     }




  });
