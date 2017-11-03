titlegames.require("https://kyleplo.github.io/title-games/game.js");
itlegames.game = "___🌵___🌵___🌵___🌵";
titlegames.x = 0;
titlegames.char = "🐸";
titlegames.title("Dino Jump");
setTimeout(function (){titlegames.id = setInterval(function (){
titlegames.render();
titlegames.x += 1;
if(titlegames.touching("🌵")){
clearInterval(titlegames.id);
titlegames.title("Game over");
}
},500);},3000);
