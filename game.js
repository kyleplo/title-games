titlegames.game = "___🌵___🌵___🌵___🌵";
titlegames.x = 0;
titlegames.char = "🐸";
titlegames.render = function (){
titlegames.title(titlegames.game.slice(titlegames.x,titlegames.x + 11))
}
titlegames.touching = function (t){
return (titlegames.game[titlegames.x] === t);
}
