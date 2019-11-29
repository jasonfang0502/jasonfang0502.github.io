$(() => {

    var r = 0;
    var m = 0;
    var k = 0;
    var g = 0;
    $("#first").fadeIn(500);
    $("div").fadeIn(800);
    $("img").fadeIn(1900);
    $(".enlarge").mouseenter((event) => {
        $(event.target).animate({
                width: 480,
                height: 300,
                // left: (-30),
                // bottom: (-20)
            }, 500)
            // $(event.target).css('width', '510');
            // $(event.target).css('z-index', '2');
    });
    $(".enlarge").mouseleave((event) => {
        $(event.target).animate({
                width: 420,
                height: 280,
                // left: 0,
                // bottom: 0
            }, 500)
            // $(event.target).css('width', '420');
            // $(event.target).css('height', '280');
    })
    $("#bike").on('click', () => {
        var anno = ['蘭陽平原 @北宜公路礁溪端', '戀戀197自行車公路賽 @台11線東河段', '2019夏－單車環島 @台13線三義坡', '成功登頂台灣公路最高點－武嶺'];
        r++;
        $("#bike").attr('src', './img/bike' + r + '.jpg');
        $(".bike>p").text(anno[r]);
        while (r == 3) {
            r = -1;
        }
    })
    $("#moto").on('click', () => {
        var anno = ['GSX-150R @新竹南寮漁港', '與友人跑山 @樂信瓦旦紀念公園', '準備跑雙北(北宜+北橫) @北宜縣界公園'];
        m++;
        $("#moto").attr('src', './img/moto' + m + '.jpg');
        $(".moto>p").text(anno[m]);
        while (m == 2) {
            m = -1;
        }
    })
    $("#photo").on('click', () => {
        var anno = ['新北板橋歡樂耶誕城 @板橋公車站', '新莊新月橋夜景 攝於新海橋', '夜訪女王頭 @野柳地質公園'];
        k++;
        $("#photo").attr('src', './img/photo' + k + '.jpg');
        $(".photo>p").text(anno[k]);
        while (k == 2) {
            k = -1;
        }
    })
    $("#travel").on('click', () => {
        var anno = ['外埔忘憂谷', '台東金崙高架橋', '五分山芒草', '高雄茂林多納古戰場', '梨山二日遊', '老梅迷宮', '合歡山公路一景', '桃園八德落羽松', '頭城濱海森林公園'];
        g++;
        $("#travel").attr('src', './img/travel' + g + '.jpg');
        $(".travel>p").text(anno[g]);
        while (g == 8) {
            g = -1;
        }
    })
})