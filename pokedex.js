// 1ª: selecciono mi elemento contenedor que he creado en html.
const main$$ = document.querySelector("main");

//1ª: Creo un array vacio para pushear mis pokemons(respuesta de la llamada a la api)
let arr= [];

//3ª: Hago la peticion a la api mediante fecth, para ello creo una variable asyncrona, creo un bucle dentro para controlar el ultimo valor de la url de la api y asi poder hacer tantos llamados como necesite, luego creo una constante (res) que me devuelve en formato json mi peticion a la api  y por ultimo lo pusheo a mi array que me habia creado desde el inicio.
const pokeSearch = async () => {
  for (let i = 1; i < 151; i++){
   const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
   const res = await response.json();
   arr.push(res);

}
return arr;
  
};


// 4ª: Creo la funcion (mapResults) para enviarle luego mi arr y mapear los datos que quieto obtener  de mi arr. los selecciono y les asigno el nombre que yo quiero en este caso nombre = (arr.name(i)),id = (arr.id(i)),imagen= (arr.sprites(i)).
const mapResults = (characters) => {
    return characters.map((character) => ({
        nombre: character.name,
        id: character.id,
        imagen: character.sprites['front_default'],

    }));
};

//5ª: Despues de tener mi arr mapeado creo una funcion para dibujar mi arr en mi html, para ello creo un bucle for of  que me seleciona cada objeto de mi arr y le asiga los valores de html que yo le he asignado todo esto lo hago atravez del metodo innerHTML y antes del bucle inicializo mi elemento contenedor(main$$) para que en cada iteacion se me resetie y no carge los valores anteriores.
 const draw = (characters) => {
    main$$.innerHTML = "";
    for (const character of characters) {
        const div$$ = document.createElement("div");
        div$$.innerHTML = `
         <h2>${character.nombre}</h2>
         <p>${character.id}</p>
         <img src='${character.imagen}' alt='${character.name}'>
         `
        main$$.appendChild(div$$);

    }
}


// 2ª: Creo una variable para inicializar mi programa aqui enviare todas las funciones globales que cree para inicializarlas desde aca.

const init = async () => {
    //3ª: creo esta constante para hacer la peticion a la api.
   const pokemonsDate = await pokeSearch();
   //4ª: creo una constante y le asigno la funcion mapResults para enviarle mi arr.
  const mapedResults =mapResults(pokemonsDate);
 //5º Inicializo mi funcion de dibujar y le envio mi array mapeado(mapedResults)
  draw(mapedResults);


};
init();

//Lo siento, os debo el buscador pero prometo modificarla y mejorarla encuanto pueda. gracias.