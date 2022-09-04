function sortCarByYearDescendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini
  const sortedDesc = result.sort(
    (objA, objB) => Number(objB.year) - Number(objA.year)
  );

  console.log(sortedDesc);
  // Rubah code ini dengan array hasil sorting secara descending
  return result;
}
