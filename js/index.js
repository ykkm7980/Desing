$(document).ready(function(){
     //스킬바 실행
     function skillActive(){
        $('.gauge').each(function () {
            var $this = $(this);
            var per = $this.attr('per');
            $this.animate({
                width: per + "%"
            },2500);
        });
    }
    //스킬바 멈춤
    function skillStop(){
        $('.gauge').each(function () {
            var $this = $(this);
            var per = $this.attr('per');
            $this.animate({
                width: 0
            });
        });
    }
    function dd(){
        $('.picture').each(function () {
            $(this).animate({
            opactiy: "0"
            });
        });
    }
    if($(window).width()>=1281){
        $(".desing_inner > ul > li").on("click", function(){
            var src = $(this).find(".dd").attr("src");
            $("div.popup1").find(".dd").attr("src", src);
            $("div.popup1").fadeIn(500)
            scrollEvent = true;
        });
    
        $("div.popup1 button.closed").on("click", function(){
            $("div.popup1").fadeOut(300);
            scrollEvent = false;
        });

    $('#fullpage').fullpage({
        navigation:true,
        navigationTooltips: ['MAIN', 'PROPIL',"DESIGN","CONTACT"],
        navigationPosition:"right",
        scrollingSpeed: 1000,
        onLeave:function(index){
            if(index==1){
                skillActive();             
            }
            if(index==2){                
                skillStop();
            }
            if(index==3){
                skillActive();      
            }
            if(index==4){
                skillStop();              
            }
            // if(index==5){
            //     skillStop();
            //     $('.guest .text h2').addClass("active");          
            // }
            // if(index==6){
            //     $('.guest .text h2').removeClass("active");          
            // } if(index==7){
            //     $('.guest .text h2').addClass("active");          
            // }
        }
    });
    }else {
        $(window).scroll(function(){
        var cur_pos=$(this).scrollTop();
        var top=$('.myskills').offset().top-500;
        var bottom=top + $('.myskills').outerHeight();
        if(cur_pos >= top && cur_pos <= bottom){
            $('.progressbar').addClass("active");
            
        }else{
            $('.progressbar').removeClass('active')
        }
    });
    $(".desing_inner > ul > li").on("click", function(){
        var src = $(this).find(".dd").attr("src");
        $("div.popup2").find(".dd").attr("src", src);
        $("div.popup2").fadeIn(500)
        scrollEvent = true;
    });

    $("div.popup2 button.closed").on("click", function(){
        $("div.popup2").fadeOut(300);
        scrollEvent = false;
    });
        
    }
    $(".hamburger").click(function(){
        $(".popup_menu").stop().slideDown(); 
    
    });
    $(".close_btn").click(function(){
    $(".popup_menu").stop().slideUp();
    });

});