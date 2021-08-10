$(document).ready(function() {
    $("button#dark-button").click(function() {
      $("body").removeClass();
      $("body").addClass("dark");
    });
  
    $("button#light-button").click(function() {
      $("body").removeClass();
      $("body").addClass("light");
    });
  
    // $("button#red").click(function() {
    //   $("body").removeClass();
    //   $("body").addClass("red-background");
    // });
  });