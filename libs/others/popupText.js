// 点击出字
var a_idx = 0;
jQuery(document).ready(function ($) {
  $("body").click(function (e) {
    // 点击弹出文字数组
    var a = new Array
      ("猪猪怡", "美怡", "傻怡", "好闺蜜", "花木兰", "傻闺蜜", "笨笨怡", "吃货怡", "鹅怡", "困困怡",
      "瘦瘦怡" ,"坏怡", "明明", "睛睛", "大美妞", "学霸怡", "精灵怡", "大理公主怡" ,  "卡哇怡",
       "甜怡", "大美妞", "胖胖怡", "猫猫怡", "中单法怡", "棒棒怡", "魔鬼怡","哭哭怡",
       "cutE","prettyE","beautE","coolE","sweetE"       );
    var $i = $("<span/>").text(a[a_idx]);
    a_idx = (a_idx + 1) % a.length;
    var x = e.pageX,
      y = e.pageY;
    $i.css({
      "z-index": 5,
      "top": y - 20,
      "left": x,
      "position": "absolute",
      "font-weight": "bold",
      "color": "rgb(" + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + ")"
    });
    $("body").append($i);
    $i.animate({
      "top": y - 180,
      "opacity": 0
    },
      3000,
      function () {
        $i.remove();
      });
  });
  setTimeout('delay()', 2000);
});

function delay () {
  $(".buryit").removeAttr("onclick");
}
