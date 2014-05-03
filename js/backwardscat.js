scanForChatWindows = function() {
  console.log("scanForChatWindows()...");
  jQuery("textarea.ad3").not(".backwardscat").each(function() {
    var $gchat = jQuery(this);
    var $parent = $gchat.parent();
    var i_id = $gchat.attr("id");

    console.log("textarea [" + i_id + "]");

    if($parent.data("cloned")) {
      var $bcat = $parent.find("textarea.backwardscat");
      var s_plaintext = $bcat.val();
      $gchat.val(s_plaintext.split("").reverse().join(""));
    } else {
      console.log("setting up secure chat...");
      var $clone = $gchat.clone(true);
      $clone.addClass("backwardscat");
      $clone.appendTo($parent);
      $parent.data("cloned", true);
      console.log("secure chat enabled.");

      $clone.bind("enterKey",function(e){
        console.log("pressed enter key");
      });
    }
  });

  setTimeout(scanForChatWindows, 5000);
}

scanForChatWindows();

$(document).keyup(function(e) {
  if(e.keyCode == 13) {
    console.log("ENTER KEY");
    $(this).trigger("enterKey");
  }
});
