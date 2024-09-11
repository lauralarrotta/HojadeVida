function prueba(text) {}

const functionOneline = () => {
  let i = "hola mundo";

  var boots = [
    1,
    2,
    3,
    4,
    "hola",
    { hola: 1, mundo: 2 },
    { hola: 1, mundo: 2 },
    i,
  ];
  // prueba indice

  console.log(boots[5].mundo);
  console.log(boots[6]["hola"]);

  for (let i = 0; i < boots.length; i++) {
    console.log(boots[i]);
  }

  while (i < boots.length) {
    console.log(boots[i]);
    i++;
  }

  boots.forEach(function (boots, i) {
    console.log(boot);
    console.log(0);
  });

  console.log(recorridoBoot);

  //objetos

  let camp = {
    hola: 1,
    mundo: boots,
    saludar: function () {
      return "hola bienvenidos";
    },
  };
};
