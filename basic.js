if(titlegames){titlegames.connected = true}else{var titlegames = {}};
titlegames.title = function (t){document.title = t.slice(0,12);if(t.length > 12){console.warn("Title is greater than 12.")}};
titlegames.title("Title Games");
titlegames.game = "";
titlegames.games = ["dinojump"];
while(titlegames.game === ""){
titlegames.game = prompt("Choose a game",titlegames.games[Math.ceil(Math.random() * titlegames.games.length)]);}
if(titlegames !== null){
var script=document.createElement('script');
script.src='https://is.gd/' + titlegames.game;
script.className='titlegames game';
document.body.appendChild(script);}
