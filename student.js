class Student {
  constructor(name, age, grade, grade1, grade2, grade3, grade4) {
    this.name = name;
    this.age = age;
    this.grade = grade;
    this.grade1 = grade1;
    this.grade2 = grade2;
    this.grade3 = grade3;
    this.grade4 = grade4;
  }

  calculateAverage() {
    const sum = this.grade1 + this.grade2 + this.grade3 + this.grade4;
    const average = sum / 4;
    return average;
  }

  displayInfo() {
    console.log(
      `Name: ${this.name}, Age: ${this.age}, Grade: ${
        this.grade
      }, Average: ${this.calculateAverage().toFixed(2)}`
    );
  }
}

const student1 = new Student("Laura", 16, "10th", 4.5, 3.8, 4.0, 4.2);

student1.displayInfo();

// biblioteca

let biblioteca = [
  { titulo: "Libro A", año: 2018 },
  { titulo: "Libro B", año: 2020 },
  { titulo: "Libro C", año: 2000 },
  { titulo: "Libro D", año: 2022 },
];

biblioteca.sort(function (a, b) {
  return b.año - a.año;
});
console.log("Libros ordenados de más reciente a más antiguo:");

biblioteca.forEach(function (libro) {
  console.log(`${libro.titulo} - Año: ${libro.año}`);
});

let libroMasAntiguo = biblioteca[biblioteca.length - 1];

console.log(
  `El libro más antiguo es: ${libroMasAntiguo.titulo}, publicado en el año ${libroMasAntiguo.año}`
);
