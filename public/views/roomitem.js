(function(dust){dust.register("roomitem",body_0);function body_0(chk,ctx){return chk.w("<li class=\"room-item\"><div class=\"room-title\">").f(ctx.get(["name"], false),ctx,"h").w("</div> <a class=\"room-link\" href=\"").f(ctx.getPath(false, ["links","0","href"]),ctx,"h").w("\">Join</a><i data-id=\"").f(ctx.get(["_id"], false),ctx,"h").w("\" class=\"delete\">&times;</i></li>");}body_0.__dustBody=!0;return body_0}(dust));