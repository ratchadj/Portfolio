!function(o){"use strict";jQuery(document).ready(function(){o(".whb-login").each(function(n,i){o(this).find("#wn-login-dropdown-icon").on("click",function(n){o(this).siblings("#w-login").fadeToggle("fast",function(){o("#w-login").is(":visible")&&o(document).on("click",function(n){o(n.target).parents(".whb-login").length||o("#w-login").css({display:"none"})})})})}),o('#loginform input[type="text"]').attr("placeholder","Username or Email"),o('#loginform input[type="password"]').attr("placeholder","Password")})}(jQuery);