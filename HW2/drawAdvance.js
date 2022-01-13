
      var canvas = document.getElementById("draw");
      var ctx = canvas.getContext("2d");
      var p_color=document.getElementById('color');
    var p_width = document.getElementById('lineWidth');
      function init() {
          //取得canvas context
          ctx.lineCap = "round";
          ctx.fillStyle = "white"; //整個canvas塗上白色背景避免PNG的透明底色效果
          ctx.fillRect(0, 0, canvas.width, canvas.height)
          var drawMode = false;
          //canvas點選、移動、放開按鍵事件時進行繪圖動作
          canvas.onmousedown = function (e) {
              ctx.beginPath();
              ctx.strokeStyle = p_color;
              ctx.lineWidth = p_width;
              ctx.moveTo(e.offsetX, e.offsetY);
              drawMode = true;
          }
          canvas.onmousemove = function (e) {
              if (drawMode) {
                  ctx.lineTo(e.offsetX, e.offsetY);
                  ctx.stroke();
              }
          }
          canvas.onmouseup = function (e) {
              drawMode = false;
          }
      }

    function changePenColor() {
        p_color = document.getElementById("color").value
    }
    function changePenWidth() {
        p_width = document.getElementById("lineWidth").value;
    }
        

init();