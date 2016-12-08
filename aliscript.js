$(function() {
  $("#div1").hide();
  $("#Trees").on("mouseenter", function() {
    $("#div1").show();
    $("#Trees").on("mouseleave", function() {
      $("#div1").hide();
    });
  });
});

$(function() {
  $("#div2").hide();
  $("#Stars").on("mouseenter", function() {
    $("#div2").show();
    $("#Stars").on("mouseleave", function() {
      $("#div2").hide();
    });
  });
});

$(function() {
  $("#div3").hide();
  $("#Mountains").on("mouseenter", function() {
    $("#div3").show();
    $("#Mountains").on("mouseleave", function() {
      $("#div3").hide();
    });
  });
});

$(function() {
  $("#div4").hide();
  $("#The_Ocean").on("mouseenter", function() {
    $("#div4").show();
    $("#The_Ocean").on("mouseleave", function() {
      $("#div4").hide();
    });
  });
});

$(function() {
  $("#div5").hide();
  $("#Me").on("mouseenter", function() {
    $("#div5").show();
    $("#Me").on("mouseleave", function() {
      $("#div5").hide();
    });
  });
});
