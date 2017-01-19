var Song = function() {};

Song.prototype.verse = function(input) {
  if(input > 2){
    return `${input} bottles of beer on the wall, ${input} bottles of beer.\nTake one down and pass it around, ${input - 1} bottles of beer on the wall.\n`
  }
  else if(input === 2){
    return '2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n'
  }
  else if(input === 1){
    return '1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n'
  }
    else if(input === 0){
    return 'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n'
  }
}

Song.prototype.sing = function(start, finish = 0){
  song = ''
  for (i = start; i >= finish; i--){
    song += this.verse(i)
    if (i != finish)
      song += '\n'
  }
  return song
}


module.exports = Song;
