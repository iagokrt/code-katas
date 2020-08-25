function DNAStrand(dna){
  // pega a string DNA
  // por exemplo ATGC
  // retorna o complemento
  // TACG

  const complemento = [];


  for (let i = 0; i < dna.length; i++) {
    // dna = 'AACC'
    // must return 'TTGG'
    
    const currentDNA = dna[i];

    if (currentDNA == 'A') {
      complemento.push('T');
    }
    if (currentDNA == 'T') {
      complemento.push('A');
    }
    if (currentDNA == 'C') {
      complemento.push('G');
    }
    if (currentDNA == 'G') {
      complemento.push('C');
    }
  }

  // array complemento = ['T', 'T', 'G', 'G'];
  var result = complemento.join('');
  return result;
}