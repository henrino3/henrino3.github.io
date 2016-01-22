$( document ).ready(function() {



          $('.side h3, .side h5, .side img, .side p, .side table').draggable({
            helper: 'clone'
          });


          $('.canvas h1').draggable({
            helper: 'clone'
          });


          $(document).dblclick(function(event) {
              var elem = $(event.target);
              elem.remove();
          });

          $('#download').on('click', function(){
              saveToHtml();
          })


          createElement = function (id, classs){

            if (id === 'tagline'){
              data = "<h3 id='tagline'>Welcome to Henry's Site!</h3>";
            };

            if (id === 'title'){
              data =  "<h5 id='title'> Personal Site</h5>";
            };

            if (id === 'logo'){
              data =  "<img src='img/logo.png' alt='' id='logo'>";
            };

            if (id === 'descr'){
              data =  "<p class='content' id='descr'>"+
                   "Henry is a Frontend Engineer, Digital Marketer, Entrepreneur and "+
                   "currently and EIT at MEST.Henry is a Co-founder of Hub10 and Velexo.</p>";
            };

            if (id === 'table'){
              data =  "<table class='table table-bordered' id='table'>"+
              "<thead><tr><th>First Name</th><th>Last Name</th>"+
              "</tr></thead><tbody><tr><td>Henry</td>"+
              "<td>Mascot</td></tr></tbody></table>";
            };

            $(classs).html(data);

          };

           function saveToHtml () {
            var data = $('.canvas').html();
               data = "<div class='row canvas' id='canvas'>"+data+"</div>";

                console.log(data);

                $("<a/>", {
                    download: $.now() + ".html",
                    href: URL.createObjectURL(
                    new Blob([data], {
                    type: "text/html"
                    }))
                })
                .appendTo(".right")[0].click();

                $(window).one("focus", function() {
                    $("a").last().remove()
                })

          };


          $('.b-logo').sortable();
          $('.b-logo').droppable({
                    activeClass: "ui-state-default",
                    hoverClass: "ui-state-hover",
                    drop: function( event, ui ) {
                        createElement(ui.draggable.attr("id"), '.b-logo')
                      }
          });


          $('.b-menu').sortable();
          $('.b-menu').droppable({
            activeClass: "ui-state-default",
            hoverClass: "ui-state-hover",
            drop: function( event, ui ) {
                createElement(ui.draggable.attr("id"), '.b-menu')
              }
            });

          $('.b-title').sortable();
          $('.b-title').droppable({
            activeClass: "ui-state-default",
            hoverClass: "ui-state-hover",
            drop: function( event, ui ) {
                createElement(ui.draggable.attr("id"), '.b-title')
              }
            });

          $('.body-table').sortable();
          $('.body-table').droppable({
            activeClass: "ui-state-default",
            hoverClass: "ui-state-hover",
            drop: function( event, ui ) {
                createElement(ui.draggable.attr("id"), '.body-table')
              }
            });

          $('.body-text').sortable();
          $('.body-text').droppable({
            activeClass: "ui-state-default",
            hoverClass: "ui-state-hover",
            drop: function( event, ui ) {
                createElement(ui.draggable.attr("id"), '.body-text')
              }
            });



  });
