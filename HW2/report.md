# 繪畫版的部分有運用到老師給的資料夾裏的程式，圖片墻的部份有參考w3school的技巧

## 繪畫版
可以換顏色、清除、筆的粗細
＊＊＊
## 圖片墻
* 滑鼠指到時變清晰
```
img{opacity:0.7;}
    img:hover{opacity: 1.0;}
```
*　滑鼠指到時有文字出現
```
.tooltip:hover .tooltiptext{
        visibility: visible;
        opacity: 1;
```
* 設定出現文字的內容
```
.tooltip{
        position: relative;
        display: inline-block;
        border-bottom: 1px dotted black;
    }
    .tooltip .tooltiptext{
        visibility: hidden;
        width: 120px;
        background-color: black;
        color: #fff;
        text-align: center;
        border-radius: 6px;
        padding:5px 0;
        position: absolute;
        z-index: 1;
        bottom:100%;
        left: 50%;
        margin-left: -60px;
        opacity: 0;
        transition: opacity 1s;
    }
    .tooltip:hover .tooltiptext{
        visibility: visible;
        opacity: 1;
    }
```
* 排版
```
* {box-sizing: boder-box;}
    .img-container {
        float:left;
        width: 20%;
        padding: 10px;
        }
    .clearfix::after{
        content:"";
        clear: both;
        display: table;
    }
````