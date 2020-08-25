function songDecoder(song) {
  // split the string on WUB
  const split = song.split('WUB');

  const words = split.filter(word => word.trim());
  
  const result = words.join(' '); 

  // filter out empty string
  // join back together on a space

  return result;
}