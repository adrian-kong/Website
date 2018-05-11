var need = title.textContent;
var possible = "abcdefghijklmnopqrstuvwxyz0123456789 ";
(function generate(text) {
    var title = document.getElementById('title');
    if (!text) {
        for (i = 0; i < need.length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
    }
    for (i = 0; i < text.length; i++) {
        if (need.charAt(i) == text.charAt(i)) {
            possible = "abcdefghijklmnopqrstuvwxyz0123456789 ";
            continue;
        } else {
            possible = possible.replace(text.charAt(i), "");
            text = setCharAt(text, i, possible.charAt(Math.floor(Math.random() * possible.length)));
            break;
        }
    }
    title.textContent = text;
    if (text != need) {
        setTimeout(function() {
            generate(text);
        }, 5);
    }
}(""));


function setCharAt(str, index, chr) {
    if (index > str.length - 1) return str;
    return str.substr(0, index) + chr + str.substr(index + 1);
}

var array = [
    '#051937, #004d7a, #008793, #00bf72, #a8eb12',
    '#2d3136, #3d3a5c, #73356b, #ac1e55, #c92b1c',
    '#8b0a85, #6e3a9b, #4b50a6, #2960a6, #196b9f',
    '#592580, #005cb9, #0084be, #00a294, #40b95a',
    '#ac2795, #da2d70, #eb574b, #e4862d, #cbb02d'
];
for (i = 0; i < 5; i++) {
    var selected = array[Math.floor(Math.random() * array.length)];
    document.getElementById('p' + i).style.backgroundImage = 'linear-gradient(to right top, ' + selected + ')';
    array.splice(array.indexOf(selected), 1);
}

$(window).scroll(function() {
    $('#header_nav').toggleClass('tiny', $(document).scrollTop() > 0);
});
