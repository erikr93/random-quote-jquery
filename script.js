var quotes = [
"'A census taker once tried to test me. I ate his liver with some fava beans and a nice Chianti.'- Silence of the Lambs",
"'Here’s Johnny!' - The Shining",
"'Meat’s meat, and man’s gotta eat.' - Motel Hell",
"'Welcome to Prime Time, bitch!' - A Nightmare on Elm Street III", 
" 'Whatever you do… don’t fall asleep.' – A Nightmare on Elm Street",
"'I think we&apos;ll start with a reign of terror.' - The Invisible Man",
"'Good, bad, Im the one with the gun. Come git some!' - Army of Darkness",
"'No tears please, it’s a waste of good suffering.'- Hellraiser"
];
var random = (Math.floor(Math.random() * quotes.length));


$(".button").click(function(){
	$(".display").html(quotes[Math.floor(Math.random() * quotes.length)])
});