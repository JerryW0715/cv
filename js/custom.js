/* Show and hide menu */

var countVisit = 0;
updateVisitCount();

function updateVisitCount() {
    fetch('https://api.countapi.xyz/update/jerry-personal-site/jerry?amount=1').then(
        res => res.json()
    ).then(res => {
        countVisit = res.value;
    })
}

function countUp(count)
{
  var div_by = 100,
      speed = Math.round(count / div_by),
      $display = $('.counter-num'),
      run_count = 1,
      int_speed = 24;
  if(count < div_by){
      speed = count/div_by;
  }
  var int = setInterval(function() {
    if(run_count < div_by){
      $display.text(Math.round(speed * run_count));
      run_count++;
    } else if(parseInt($display.text()) < count) {
      var curr_count = parseInt($display.text()) + 1;
      $display.text(curr_count);
      //console.log(curr_count);
    } else {
      clearInterval(int);
    }
  }, int_speed);
}



$(document).ready(function(){
   
    'use strict';
    
    $(window).scroll(function() {
        
        'use strict';
        
        if($(window).scrollTop() < 80 ) {
            
            $('.navbar').css ({
               'margin-top': '-100px',
                'opacity': '0'
                
            });
            
            $('.navbar-default').css({
                'background-color': 'rgba(59, 59 , 59, 0)'
                
            });
            
        } else {
            
            $('.navbar').css ({
               'margin-top': '0px',
                'opacity': '1'
                
            });
            
            $('.navbar-default').css({
                'background-color': 'rgba(59, 59 , 59, 0.7)',
                'border-color': '#444'
                
            });
            
            $('.navbar-brand img').css({
               'height': '35px',
                'padding-top': '0px'
                
            });
            
            $('.navbar-nav > li > a ').css({
                'padding-top': '15px'
                
                
            });
            
            
        }
       
        
    });
    
    
});

    
//add smooth scrolling
$(document).ready(function() {
    
    'use strict';
   
    
    $('.nav-item, #scroll-to-top, .btn-tour, .btn-contact').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
    
    
});

/* active menu item on click */
$(document).ready(function() {
    
    'use strict';
    
    
    $('.navbar-nav li a').click(function(){
        
        'use strict';
        
        $('.navbar-nav li a').parent().removeClass("active");
        
        $(this).parent().addClass("active");
    
    });
});

// highlight menu item on scroll
$(document).ready(function() {
    
    'use strict';
    
    $(window).scroll( function() {
        
        'use strict';
        
        $("section").each(function()  {
            
            'use strict';
            
            var bb = $(this).attr("id");  // PROJECT, HOBBIES, CONTACT
            var hei = $(this).outerHeight();
            var grttop = $(this).offset().top - 70;
            
            if ($(window).scrollTop() > grttop && $(window).scrollTop() < grttop + hei) {
                $('.navbar-nav li a').parent().removeClass("active");
                $(".navbar-nav li a[href='#" + bb + "']").parent().addClass("active");
           
            } else {
                $(".navbar-nav li a[href='#" + bb + "']").parent().removeClass("active");
                
            }
            
        
        });
    
    
    });
    

});

// add auto padding to header 

$(document).ready(function() {
    
    'use strict';
    
    setInterval( function() {
        
        'use strict';
        
        var windowHeight = $(window).height();
        
        var containerHeight = $(".header-container").height();
        
        var padTop = windowHeight - containerHeight;
        
        $(".header-container").css({
            
            'padding-top': Math.round( padTop / 2) + 'px',
            'padding-bottom': Math.round( padTop / 2) + 'px'
            
        });
        
        
    }, 10)
    
    
});


$(document).ready(function() {
    
    $('.project-list-nav li a').click(function() {
        
        $(".project-list-nav li a").parent().removeClass("active");
        var itemName = this.href.substr(this.href.indexOf('#'), this.href.length-1);
        var key = itemName.substr(0, itemName.indexOf('-'));
        $('.project-item').css({
            'display':'none'
        });
        $('.project-gallery').css({
            'display':'none'
        })

        $(itemName).css({
            'display': 'inline',
            'visibility': 'visible'
        });

        switch (key){
            case "#dispenser":
                document.getElementById("picture-1").src = "images/dispenser2.JPG";
                document.getElementById("picture-2").src = "images/dispenser4.png";
                document.getElementById("picture-3").src = "images/dispenser1.JPG";
                document.getElementById("picture-4").src = "images/dispenser3.JPG";
                break;
            
            case "#chromacloak":
                
                document.getElementById("picture-1").src = "images/chromacloak4.png";
                document.getElementById("picture-2").src = "images/chromacloak1.png";
                document.getElementById("picture-3").src = "images/chromacloak2.png";
                document.getElementById("picture-4").src = "images/chromacloak3.png";
                break;

            case "#weatherbox":
                document.getElementById("picture-1").src = "images/weatherbox1.JPG";
                document.getElementById("picture-2").src = "images/weatherbox2.JPG";
                document.getElementById("picture-3").src = "images/weatherbox3.JPG";
                document.getElementById("picture-4").src = "images/weatherbox4.jpg";
                break;

            case "#capstone":
                document.getElementById("picture-1").src = "images/capstone1.JPG";
                document.getElementById("picture-2").src = "images/capstone2.png";
                document.getElementById("picture-3").src = "images/capstone3.JPG";
                document.getElementById("picture-4").src = "images/capstone4.jpg";
                break;

            case "#handshield":
                document.getElementById("picture-1").src = "images/handshield1.jpg";
                document.getElementById("picture-2").src = "images/handshield2.JPG";
                document.getElementById("picture-3").src = "images/handshield3.jpg";
                document.getElementById("picture-4").src = "images/handshield4.JPG";
                break;

            case "#handchaser":
                document.getElementById("picture-1").src = "images/handchaser1.jpg";
                document.getElementById("picture-2").src = "images/handchaser2.jpg";
                document.getElementById("picture-3").src = "images/handchaser3.jpg";
                document.getElementById("picture-4").src = "images/handchaser4.JPG";
                break;

            case "#website":
                document.getElementById("picture-1").src = "images/website1.JPG";
                document.getElementById("picture-2").src = "images/website2.JPG";
                document.getElementById("picture-3").src = "images/website3.JPG";
                document.getElementById("picture-4").src = "images/Thank-you.jpeg";
                break;

            case "#music":
                document.getElementById("picture-1").src = "images/music1.jpg";
                document.getElementById("picture-2").src = "images/music2.jpg";
                document.getElementById("picture-3").src = "images/music3.jpg";
                document.getElementById("picture-4").src = "images/music4.JPG";
                break;
        }




        $('.bxslider').css({
            'display':'block',
            'visibility':'visible'
        })


        $(this).parent().addClass("active");
        return false;

    });

})



// Add bx slider to screens
$(document).ready(function() {
    
    $('.bxslider').bxSlider({
        
        slideWidth: 1000,
        auto: true,
        autoContols: true,
        stopAutoOnClick: true,
        pager: true,
        minSlides: 1, 
        maxSlides: 1, 
        slideMargin: 50
        //adaptiveHeight: true
    });
    
});




// Add counter
$(document).ready(function() {
    $(window).scroll(function() {
        var heightFromTop = $('.scroll-to').offset().top,//element offset from the top
            heightBtwBorders = $('scroll-to').outerHeight(),//height between upper and lower borders of the element
            heightWindow = $(window).height(),//height of the window
            heightScrollBar = $(this).scrollTop();//vertical scroll bar position for a div element
        //if(heightScrollBar > (heightFromTop+heightBtwBorders-heightWindow) //&& (heightFromTop > heightScrollBar) && (heightScrollBar + heightWindow > heightFromTop + heightBtwBorders)){
        if(heightFromTop > window.scrollY && heightFromTop < window.scrollY+100){
            countUp(countVisit);
            //console.log('window:')
            //console.log(window.scrollY);
            //console.log('counter')
            //console.log(heightFromTop)
        }
        
        //countUp(parseInt(document.getElementById('num').innerHTML));
    /*
            $('.counter-num').counterUp({
                delay: 10,
                time: 1000
            });
        $('#num').html(counternum);
        console.log(document.getElementById('num').innerHTML)
        */
       
    });
});





//countUp(1209);



// Add animation/ Initialize Woo
$(document).ready(function() {
    
    'use strict';
   
    new WOW().init();
    
});





// reminders for contact form and submit button

$(document).ready(function () {
    var correctInput = false;
    
    var tags = ['email', 'name', 'subject', 'message']
    
    tags.forEach(function (item, index){
        $('#'+ item).keyup(function () {
            var value = $('#'+item).val()
            var status = $('#status-'+item)
            
    
            switch (index) {
                case 0:
                    if (!(value.length > 5 && value.includes('@') && value.includes('.'))){
                        status.html('Email is not valid')
                        correctInput = false;
                    }else{
                        status.html('') 
                        correctInput = true;
                    }
                    break;
                
                case 1:
                    if (value.length < 2){
                        status.html('Name should be longer than 2 characters')
                        correctInput = false;
                    }else{
                        status.html('')    
                        correctInput = true;
                    }
                    break;

                case 2:
                    if (value.length < 2) {
                        status.html('Subject should be longer than 2 characters')
                        correctInput = false;
                    }else{
                        status.html('')
                        correctInput = true; 
                    }                   
                    break;

                case 3:
                    if (value.length < 5) {
                        status.html('Message should contain more than 5 characters')
                        correctInput = false;
                    }else{
                        status.html('') 
                        correctInput = true;
                    }
                    break;

                default:
                    status.html('') 
                    correctInput = true;
                    break;
            }
            

            if(!correctInput){
                $('#submit-form').removeAttr('action method');
            }else{
                if(!document.getElementById('submit-form').hasAttribute('method')){
                    $('#submit-form').attr('method', 'POST');
                }
                if(!document.getElementById('submit-form').hasAttribute('action')){
                    $('#submit-form').attr('action', 'https://formspree.io/bin.wu2@mail.mcgill.ca');
                }
                
            }


        })
    })

    


    


    $(".submit-btn").click(function (event) {
        
        event.preventDefault()//prevent the default action of the btn if the type is submit
        
    })
})


























