(function(dust){dust.register("roomitem",body_0);function body_0(chk,ctx){return chk.w("<li class=\"room-item\"><div class=\"card-panel white\" style=\"position: relative;\"><h5 class=\"room-title\">").f(ctx.get(["name"], false),ctx,"h").w("</h5><a class=\"btn light-blue waves-effect waves-light bottomright room-link\" href=\"").f(ctx.getPath(false, ["links","0","href"]),ctx,"h").w("\">Join</a><i class=\"topright material-icons delete\" data-id=\"").f(ctx.get(["_id"], false),ctx,"h").w("\" class=\"delete\">clear</i></div></li>");}body_0.__dustBody=!0;return body_0}(dust));
