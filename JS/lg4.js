var DOM = new Tool;
var thumbs = document.getElementById("da-thumbs");
var oa = thumbs.getElementsByTagName("a");
thumbs.addEventListener("mouseenter",fn,true);
thumbs.addEventListener("mouseleave",fn2,true);
function fn(e){
    e=e||event;
    var target=e.target||e.srcElement;
    console.log(target);
    if(target.tagName=="A"){
        var oDiv=target.getElementsByTagName("div")[0];
        var w = target.offsetWidth;
        var h = target.offsetHeight;
        var obj=DOM.offset(target);
        var x = e.pageX - obj.left - (w / 2);
        var y = e.pageY - obj.top - (h / 2);
        var direction = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4;
        switch (direction) {
            case 0:
                DOM.setGroupCss(oDiv,{left:0,top:"-100%",display: "block"});
                animate_obj(oDiv, {left: 0, top: 0}, 80);
                break;
            case 1:
                DOM.setGroupCss(oDiv,{left:"100%",top:0,display: "block"});
                animate_obj(oDiv, {left: 0, top: 0}, 80);
                break;
            case 2:
                DOM.setGroupCss(oDiv,{left:0,top:"100%",display: "block"});
                animate_obj(oDiv, {left: 0, top: 0}, 80);
                break;
            default :
                DOM.setGroupCss(oDiv,{left:"-100%",top:0,display: "block"});
                animate_obj(oDiv, {left: 0, top: 0}, 80);
        }
    }
};
function fn2(e){
    e=e||event;
    var target=e.target||e.srcElement;
    if(target.tagName=="A"){
        var oDiv=target.getElementsByTagName("div")[0];
        var w = target.offsetWidth;
        var h = target.offsetHeight;
        var obj=DOM.offset(target);
        var x = e.pageX - obj.left - (w / 2);
        var y = e.pageY - obj.top - (h / 2);
        var direction = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4;
        switch (direction) {
            case 0:
                animate_obj(oDiv, {left: 0, top: "-114"}, 80);
                //DOM.setGroupCss(target,{left:0,top:"-100%",display: "block"});
                break;
            case 1:
                animate_obj(oDiv, {left: "114", top: 0}, 80);
                //DOM.setGroupCss(target,{left:"100%",top:0,display: "block"});
                break;
            case 2:
                animate_obj(oDiv, {left: 0, top: "114"}, 80);
                //DOM.setGroupCss(target,{left:0,top:"100%",display: "block"});
                break;
            default :
                animate_obj(oDiv, {left: "-114", top: 0}, 80);
                //DOM.setGroupCss(target,{left:"-100%",top:0,display: "block"});
        }
    }
};
/*console.log(DOM.getCss("height", thumbs));
for (var i = 0; i < oa.length; i++) {
    oa[i].onmouseenter = function (e) {
        e = e || window.event;
        var oDiv = this.getElementsByTagName("div")[0];
        var obj = DOM.offset(this);
        var w = this.offsetWidth;
        var h = this.offsetHeight;
        var x = e.pageX - this.offsetLeft - (w / 2);
        var y = e.pageY - this.offsetTop - (h / 2);
        var direction = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4;
        switch (direction) {
            case 0:
                animate_obj(oDiv, {left: 0, top: 0}, 100);
                break;
            case 1:
                animate_obj(oDiv, {left: 0, top: 0}, 100);
                break;
            case 2:
                animate_obj(oDiv, {left: 0, top: 0}, 100);
                break;
            default :
                animate_obj(oDiv, {left: 0, top: 0}, 100);
        }
    };*/
    /*oa[i].onmouseleave = function (e) {
        *//* e=e||window.event;
         var oDiv=this.getElementsByTagName("div");
         var obj=DOM.offset(this);*//*
        e = e || window.event;
        var oDiv = this.getElementsByTagName("div")[0];
        var obj = DOM.offset(this);
        var w = this.offsetWidth;
        var h = this.offsetHeight;
        var x = e.pageX - this.offsetLeft - (w / 2);
        var y = e.pageY - this.offsetTop - (h / 2);
        var direction = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4;
        switch (direction) {
            case 0:
                animate_obj(oDiv, {left: "-100%", top: 0}, 100);
                break;
            case 1:
                animate_obj(oDiv, {left: "100%", top: 0}, 100);
                break;
            case 2:
                animate_obj(oDiv, {left: 0, top: "100%"}, 100);
                break;
            default :
                animate_obj(oDiv, {left: 0, top: "-100%"}, 100);
        }
    }
}*/

    /* if((e.pageY-obj.top<h/2)&&(e.pageX-obj.top<w/2)&&(e.pageY-obj.top)<(e.pageX-obj.top)){

     }
     if((e.pageY-obj.top>h/2)&&(e.pageX-obj.top<w/2)&&(e.pageY-obj.top-h/2))

     if(((e.pageX-obj.left)>0&&(e.pageX-obj.left)<w/2)&& (e.pageY-obj.top>0)){
     animate_obj(oDiv,{left:0,top:0},1000)
     }
     if((e.clientY-obj.top>0)&&(e.clientY-obj.top<h/2)&&(e.pageX-obj.left>0)){
     animate_obj(oDiv,{left:0,top:0},1000)
     }
     if((e.pageX-obj.left-this.offsetWidth<0)&&(e.pageX-obj.left-this.offsetWidth>-w/2)&&(e.clientY-obj.top>0)){
     animate_obj(oDiv,{left:0,top:0},1000)
     }
     if((e.clientY-obj.top-this.offsetHeight<0)&&(e.clientY-obj.top-this.offsetHeight>-h/2)&&(e.pageX-obj.left>0)){
     animate_obj(oDiv,{left:0,top:0},1000)
     }*/
   /* for (var i = 0; i < oa.length; i++) {
        oa[i].onmouseleave = function (e) {
            *//* e=e||window.event;
             var oDiv=this.getElementsByTagName("div");
             var obj=DOM.offset(this);*//*
            e = e || window.event;
            var oDiv = this.getElementsByTagName("div")[0];
            var obj = DOM.offset(this);
            var w = this.offsetWidth;
            var h = this.offsetHeight;
            var x = e.pageX - this.offsetLeft - (w / 2);
            var y = e.pageY - this.offsetTop - (h / 2);
            var direction = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4;
            switch (direction) {
                case 0:
                    animate_obj(oDiv, {left: "-100%", top: 0}, 100);
                    break;
                case 1:
                    animate_obj(oDiv, {left: "100%", top: 0}, 100);
                    break;
                case 2:
                    animate_obj(oDiv, {left: 0, top: "100%"}, 100);
                    break;
                default :
                    animate_obj(oDiv, {left: 0, top: "-100%"}, 100);
            }
        }

}*/


/* if((e.pageX-obj.left<0)&& (e.pageY-obj.top>0)){
 animate_obj(oDiv,{left:"-100%",top:0},1000)
 }
 if((e.pageY-obj.top<0)&&(e.pageX-obj.left>0)){
 animate_obj(oDiv,{left:0,top:"-100%"},1000)
 }
 if((e.pageX-obj.left-this.offsetWidth>0)&&(e.pageY-obj.top>0)){
 animate_obj(oDiv,{left:"100%",top:0},1000)
 }
 if((e.pageY-obj.top-this.offsetHeight>0)&&(e.pageX-obj.left>0)){
 animate_obj(oDiv,{left:0,top:"100%"},1000)
 }
 }*/

