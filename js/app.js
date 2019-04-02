'use strict';

var anySiblings = prompt('Do I have any siblings?');
var anySiblingsClean = anySiblings.toLowerCase();

if(anySiblingsClean === 'y' || anySiblingsClean === 'yes') {
  alert('You guessed it! I\'m the youngest of SEVEN kids!');
} else if(anySiblingsClean === 'n' || anySiblingsClean === 'no') {
  alert('You got it all wrong!');
} else {
  alert('This was a yes or no question. How did you mess that up?');
}

var anyPets = prompt('Do i have any pets?');
var anyPetsClean = anyPets.toLowerCase();

if(anyPetsClean === 'y' || anyPetsClean === 'yes') {
  alert('Correct! I have a gorgeous geriatric pitbull named Bruce.');
} else if(anyPetsClean === 'n' || anyPetsClean === 'no') {
  alert('Wrong! I have a 14 year old dog named Bruce.');
} else {
  alert('What?? Yes or no only, please!');
}

var washingtonNative = prompt('Do you think I am native to WAshington State?');
var washingtonNativeClean = washingtonNative.toLowerCase();

if(washingtonNativeClean === 'y' || washingtonNativeClean === 'yes') {
  alert('Yep! King County, born and raised.');
} else if(anyPetsClean === 'n' || anyPetsClean === 'no') {
  alert('Wrong! I\'m not a transplant. I was born in Redmond, WA!');
} else {
  alert('Hmm. I think the answer you were looking for was, yes.');
}




