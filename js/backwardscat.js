scanForChatWindows = function() {
  console.log("scanForChatWindows()...");

  jQuery("div[role='dialog']").each(function() {
    var dialog = jQuery(this);

    console.log("dialog");
    console.log(dialog);

    var log = dialog.first("div[role='log']");
    console.log("log");
    console.log(log);

    var messages = log.find("div[role='chatMessage'] div[dir='ltr'], div[role='chatMessage'] div.kk div[dir='ltr'], div[role='chatMessage'] div.kk span[dir='ltr']");
    messages.each(function() {
      var $msg = jQuery(this);
      var s_text = $msg.text();
      if($msg.data("decrypted")) {
        console.log("already decrypted: " + s_text);
      } else {
        var s_decrypted = decrypt(s_text);
        console.log("decrypting... OK: " + s_decrypted);
        $msg.text(s_decrypted);
        $msg.data("decrypted", true);
      }
    });

  });

  jQuery("textarea.ad3").not(".backwardscat").each(function() {
    var $gchat = jQuery(this);
    var $parent = $gchat.parent();
    var s_id = $gchat.attr("id");

    if($parent.data("cloned")) {
      var $bcat = $parent.find("textarea.backwardscat");
    } else {
      console.log("setting up secure chat for chat [" + s_id + "]");
      var $clone = $gchat.clone(true);
      $clone.attr("id", s_id + "-backwardscat");
      $clone.addClass("backwardscat");
      $clone.appendTo($parent);
      $parent.data("cloned", true);
      console.log("secure chat enabled.");

      console.log("parent");
      console.log($parent);

      $clone.keyup(function(e) {
        if(e.keyCode == 13) {
          console.log("ENTER KEY");
        } else {
          $gchat.val(encrypt($clone.val()));
        }
      });
    }
  });

  setTimeout(scanForChatWindows, 5000);
}

encrypt = function(s) {
  return s.split("").reverse().join("");
}

decrypt = function(s) {
  return s.split("").reverse().join("");
}

scanForChatWindows();

$(document)
