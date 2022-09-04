function sortCarByYearAscendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini
  const sortedAsc = result.sort(
    (objA, objB) => Number(objA.year) - Number(objB.year)
  );

  console.log(sortedAsc);
  // Rubah code ini dengan array hasil sorting secara ascending
  return result;
}
