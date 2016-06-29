var DOM = new Tool;
var bar = document.getElementById("sidebar");
var boxS = DOM.getElementsByClass("menu_box", bar);
for (var i = 0; i < boxS.length; i++) {
    boxS[i].onmouseover = function () {
        var sib = DOM.getSiblings(this);
        for (var x = 0; x < sib.length; x++) {
            DOM.removeClass("current", sib[x]);
        }
        DOM.addClass("current", this);


        var dn = DOM.getElementsByClass("menu_sub", this);
        for (var y = 0; y < dn.length; y++) {
            DOM.removeClass("dn", dn[y]);
        }
        var siblings = DOM.getSiblings(this);
        for (var j = 0; j < siblings.length; j++) {
            var sub = DOM.getElementsByClass("menu_sub", siblings[j]);
            for (var n = 0; n < sub.length; n++) {
                DOM.addClass("dn", sub[n]);
            }

        }
    };
    boxS[i].onmouseout = function () {
        DOM.removeClass("current", this);
        var dn = DOM.getElementsByClass("menu_sub", this);

        for (var y = 0; y < dn.length; y++) {
            DOM.addClass("dn", dn[y]);
        }
        var siblings = DOM.getSiblings(this);
        for (var j = 0; j < siblings.length; j++) {
            var sub = DOM.getElementsByClass("menu_sub", siblings[j]);
            for (var n = 0; n < sub.length; n++) {
                DOM.addClass("dn", sub[n]);
            }
        }
    }

}