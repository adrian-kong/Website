var array = [
      '#051937, #004d7a, #008793, #00bf72, #a8eb12',
      '#2d3136, #3d3a5c, #73356b, #ac1e55, #c92b1c',
      '#8b0a85, #6e3a9b, #4b50a6, #2960a6, #196b9f',
      '#592580, #005cb9, #0084be, #00a294, #40b95a',
      '#ac2795, #da2d70, #eb574b, #e4862d, #cbb02d'];
    for (i = 0; i < 5; i++ ) {
      var selected = array[Math.floor(Math.random() * array.length)];
      document.getElementById('p' + i).style.backgroundImage = 'linear-gradient(to right top, ' + selected  + ')';
      array.splice(array.indexOf(selected), 1);
    }
$(window).scroll(function () {
  $('#header_nav').toggleClass('tiny', $(document).scrollTop() > 0);
  AOS.refresh();
});
AOS.init({
  startEvent: 'load',
});
