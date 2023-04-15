// Utilizando los métodos que hemos aprendido, obtener la empresa con más empleados y una lista de aquellas que tienen más 12 empleados

const empresas = [
  { nombre: "Empresa A", empleados: 10 },
  { nombre: "Empresa B", empleados: 20 },
  { nombre: "Empresa C", empleados: 30 },
  { nombre: "Empresa D", empleados: 15 },
];

const biggerCompany = empresas.find(
  (empresa) => empresa.empleados === Math.max(...empresas.map((emp) => emp.empleados))
);

console.log(biggerCompany);

const largeCompanies = empresas.filter((empresa) => empresa.empleados > 12);
console.log(largeCompanies);