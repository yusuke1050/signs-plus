$(function(){
    $(window).on('load',function(){
        $('#loader').delay(2000).fadeOut(1000);
    });
    $(window).on('load',function(){
        $('.mv .logo').delay(1000).fadeIn();   
    });
    $(window).on('load',function(){
        $('.spinner').delay(700).fadeOut(200);
    });
});


$(function(){
    $('.mv-item img:nth-child(n+2)').hide();
    setInterval(function(){
        $('.mv-item img:first-child').fadeOut(2000);
        $('.mv-item img:nth-child(2)').fadeIn(2000);
        $('.mv-item img:first-child').appendTo('.mv-item');
    }, 6000);
});


$(function () {
    $('.burger-menu').on('click',function() {
    if($(header).hasClass('active')){
        $(header).removeClass('active');
        $(header).removeClass('open');
    }else{
        $(header).addClass('active');
        $(header).addClass('open');
    }
    });
});

    

    

$(function () {
    /*jqueryで最初に書くもの　{}内に処理を記述*/
    $(window).scroll(function () {
        /*スクロールした時{}内の処理が実行される*/
        const wHeight = $(window).height();
        const scrollAmount = $(window).scrollTop();
        const height = $('#header').height();
        /*変数宣言　これは変数だよとコード上で宣言すること⇀変数名は何でもよい。処理する要素の名前。varでもよい*/
        /*[=]は等しいという意味ではなく右辺を左辺に代入するという意味*/
        $('.scrollanime').each(function () {
            /*$()内の要素に対して、繰り返し{}内の処理を実行する*/
            const targetPosition = $(this).offset().top;
            if(scrollAmount >height  ) {
                /*条件式が成立した場合、処理が実行される。*/
                /*条件式の結果が真（true）偽(false)となる。if文は条件式が真(true)の場合処理が実行される*/
                /*↑の式だとスクロール位置>対象となる要素の縦位置-表示領域の高さ+100*/
                $(this).addClass("fadeIn");
                /*$(要素).addClass("クラス名")要素にクラス名を付与するメソッド*/
                /*付与するクラス名はダブルクォーテーションで囲む*/
            } else {
                /*上記のif文の条件に合わない場合下記の処理を行う*/
                $('.scrollanime').removeClass("fadeIn")
                /*$(要素).addClass("クラス名")要素にクラス名をはずす*/
            }
        });
    });
}); 


$(function(){
    $('.salon-img').slick( {
        autoplay: true,
        arrows: false,
        autoplaySpeed: 2000,
        cssEase: "linear",
        slidesToShow: 1,
        swipe: false,
        dots: true,
        dotsClass: "slide-dots",
    });
    
});


$(function(){
    $('.cafe-item').slick( {
        autoplay: true,
        arrows: false,
        autoplaySpeed: 3000,
        cssEase: "linear",
        slidesToShow: 1,
        swipe: false,
        dots: true,
        dotsClass: "slide-dots",
    });
});



    

    
        
    
