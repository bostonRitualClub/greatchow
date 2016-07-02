// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require foundation
//= require jquery.slick
//= require initialize
//= require jquery-tablesorter
//= require_tree .

$(function(){ $(document).foundation(); });

$(window).resize(function() {
  sideNav();
});

$(function(){
  $('#event-table').tablesorter({ sortList: [[1,0]] });
});

// below function causes "fade out"
// http://stackoverflow.com/questions/19397515/fading-out-a-whole-page-with-jquery
$(document).on("click", "a", function () {
    var newUrl = $(this).attr("href");
    if (!newUrl || newUrl[0] === "#") {
        location.hash = newUrl;
        return;
    }
    $("#content_wrapper").fadeOut(function () {
        location = newUrl;
    });
});
