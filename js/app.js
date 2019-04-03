'use strict';

var anySiblings = prompt('Do I have any siblings?').toLowerCase();

if(anySiblings === 'y' || anySiblings === 'yes') {
  alert('You guessed it! I\'m the youngest of SEVEN kids!');
} else if(anySiblings === 'n' || anySiblings === 'no') {
  alert('You got it all wrong!');
} else {
  alert('This was a yes or no question. How did you mess that up?');
}

console.log('Does the user think that I have any siblings?: ' + anySiblings);

var anyPets = prompt('Do i have any pets?').toLowerCase();

if(anyPets === 'y' || anyPets === 'yes') {
  alert('Correct! I have a gorgeous geriatric pitbull named Bruce.');
} else if(anyPets === 'n' || anyPets === 'no') {
  alert('Wrong! I have a 14 year old dog named Bruce.');
} else {
  alert('What?? Yes or no only, please!');
}

console.log('Does the user think I have any pets? ' + anyPets);

var washingtonNative = prompt('Do you think I am native to Washington State?').toLowerCase();

if(washingtonNative === 'y' || washingtonNative === 'yes') {
  alert('Yep! King County, born and raised.');
} else if(washingtonNative === 'n' || washingtonNative === 'no') {
  alert('Wrong! I was born in my parents bedroom right here in Redmond, WA!');
} else {
  alert('Hmm. I think the answer you were looking for was, yes.');
}

console.log('Does the User think that I am originally from Washington State? ' + washingtonNative );

var beenOnACruise = prompt('Have I ever been on a cruise?').toLowerCase();

if(beenOnACruise === 'y' || beenOnACruise === 'yes') {
  alert('Nope. I have higher hopes for my vacations than being stuck on the Ocean with strangers!');
} else if(beenOnACruise === 'n' || beenOnACruise === 'no') {
  alert('Correct! Stuck on a ship waiting for a virus outbreak is not the vacation for me.');
} else {
  alert('?????');
}

console.log('Does the user think I have been on a cruise?: '+ beenOnACruise);

var playLotto = prompt('Do you think that I play the lottery?').toLowerCase();

if(playLotto === 'y' || playLotto === 'yes') {
  alert('You bet! You can\'t win if you don\'t play.');
} else if(playLotto === 'n' || playLotto === 'no') {
  alert('Wrong answer! I like to test my luck now and again.');
} else {
  alert('Ehhhh, no.');
}

console.log('Does the user think that I play the lotto?' + playLotto);




