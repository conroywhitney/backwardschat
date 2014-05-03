scanForChatWindows = function() {
  console.log("scanForChatWindows()...");
  jQuery("textarea.ad3").each(function() {
    var id = jQuery(this).attr("id");
    var content = jQuery(this).val();
    console.log("textarea [" + id + "]");
    console.log(content);
    console.log("parent");
    var parent = jQuery(this).parent();
    console.log(parent);
    var clone = jQuery(this).clone(true);
    console.log("clone");
    console.log(clone);
    clone.appendTo(parent);
    console.log("should have a duplicate now)");
  });

  setTimeout(scanForChatWindows, 5000);
}

scanForChatWindows();
