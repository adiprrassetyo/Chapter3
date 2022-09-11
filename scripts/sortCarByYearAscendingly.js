function sortCarByYearAscendingly(cars) {
  // declare result with spread operator to avoid side  effect
  const result = [...cars];

  // Tulis code-mu disini
  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < result.length - 1; j++) {
      if (result[j].year > result[j + 1].year) {
        let temp = result[j];
        result[j] = result[j + 1];
        result[j + 1] = temp;
      }
    }
  }
  // one line, but it's cheating in this challange :(
  // return[...cars].sort((a,b)=> a.year-b.year)
  //
  console.log(result);
  console.table(result);
  // Rubah code ini dengan array hasil sorting secara ascending
  return result;
}
