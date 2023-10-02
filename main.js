
//ハンバーガーメニュー
$('.nav-btn').on('click',() =>{
    $('.nav-btn').toggleClass('close');
    $('.header_navi').fadeToggle(500);
});

//ウィンドウ幅を変えるたびにリロード
let timer = 0;
let currentWidth = window.innerWidth;
$(window).resize(() =>{
    if (currentWidth == window.innerWidth) {
        return;
    }
    if (timer > 0) {
        clearTimeout(timer);
    }
 
    timer = setTimeout(() =>{
        location.reload();
    }, 200);
		
});

//ふわっと出すエフェクト
$('.animated').waypoint({
    handler(direction) {
        if (direction === 'down') {
            $(this.element).addClass('fadeInUp');
            this.destroy();
          }
    },offset: '100%',
});

// ボタンの表示／非表示を切り替える関数
const updateButton = () => {
    if ($(window).scrollTop() >= 300) {
      $('.back-to-top').fadeIn();
    } else {
      $('.back-to-top').fadeOut();
    }
};

$(window).on('scroll', updateButton);

// ボタンをクリックしたらページトップにスクロールする
$('.back-to-top').on('click', (e) => {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 600);
});