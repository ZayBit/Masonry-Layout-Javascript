// Contenedor de los elementos que seran utulizados para ser añadidos a las distintas columnas
const container = document.getElementById('masonry');
// Numero maximo de las columnas a crear (De 1 a 4 columnas maximo)
const numero_columnas = 4;
let elementos_hijos = container.children, // elementos hijos del contenedor
    elementos = [], //array vacio para almacenar los elementos que esten en el contenedor
    col_existentes = 0, // Numero de columnas creadas
    longitud_hijos = elementos_hijos.length; //longitud de elementos hijos del contenedor

// Iterar sobre todos los elementos del contenedor para almacenarlos uno a uno en la variable "elementos"
for (let i = 0; i < longitud_hijos; i++) {
    elementos.push(elementos_hijos[i]);
}
// Al hacer mas pequeña la ventana o agrandar las misma se crea un efecto responsivo sobre las columnas
window.onresize = () => {
    // llamar a la funcion checkSize() al agrandar o hacer mas pequeña la ventana
    checkSize();
}
// llamar a la funcion checkSize() sin necesidad de agrandar o hacer mas pequeña la ventana
checkSize();
// funcion checkSize() para comprobar el tamaño de la ventana y asi crear mas o menos columnas
function checkSize() {
    // Obtener el ancho del body
    let x = document.body.clientWidth;
    generar_columnas(col_existentes);
    // Distintas medidas 1024px , 768px y 570px de ancho
    // Si es mayor a 1 entonces:
    if (numero_columnas > 1) {
        // Si x es menor o igual a 1024 entonces:
        if (x <= 1024) {
            // Si el elemento 3 que es la columna 4 existe entonces:
            if (elementos_hijos[3]) {
                //decrementa a col_existentes que sera igual a numero_columnas - 1
                col_existentes = numero_columnas - 1;
                // llamar a la funcion generar_columnas() y se le pasa un parametro "un numero" para crear las columnas y asi añadir los articulos
                generar_columnas(col_existentes);
            }
            // Si x es mayor o igual a 1024 entonces:
        } else if (x >= 1024) {
            // Se devuelve el valor original de las columnas para crear todas
            col_existentes = numero_columnas;
            generar_columnas(col_existentes);
        }
        // Basicamente lo mismo para lo siguiente: 
        if (x < 768) {
            if (elementos_hijos[2]) {
                col_existentes = numero_columnas - 2;
                generar_columnas(col_existentes);
            }
            //Si es mayoy o igual que Y menor o igual que entonces:
        } else if (x >= 768 && x <= 800) {
            col_existentes = numero_columnas - 1;
            generar_columnas(col_existentes);
        }
        if (x <= 570) {
            if (elementos_hijos[1]) {
                // Si el numero de columnas es igual a 2 entonces la col_existentes se restara 1 de lo contrario se restara 3
                col_existentes = (numero_columnas == 2) ? numero_columnas - 1 : numero_columnas - 3;
                generar_columnas(col_existentes);
            }
        } else if (x >= 570 && x <= 650) {
            col_existentes = (numero_columnas == 2) ? numero_columnas - 1 : numero_columnas - 2;
            generar_columnas(col_existentes);
        }
    }
}
// Funcion para generar las columnas y añadir los objetos que se encuentren "guardados" en el array(Elementos) distribuidos en las columnas generadas
function generar_columnas(col_existentes) {
    // Mientras numero_columnas sea menor a 5 entonces:
    if (numero_columnas < 5) {
        // Si col_existentes es menor o igual a 0 entonces:
        if (col_existentes <= 0) {
            // col_existentes tendra de valor un 1
            col_existentes = 1;
        }
        // "remueve" los elementos del container para dejarlo vacio antes de añadir las nuevas columnas con sus respectivos elementos
        container.innerHTML = '';
        // Crear las columnas con el parametro recibido col_existentes
        for (let i = 0; i < col_existentes; i++) {
            // crear un nuevo elemento por cada vez que se ejecuta el bucle, se crea un elemento DIV
            let div = document.createElement('div');
            // añade dos clases al elemento DIV creado: 'column' y 'column-' + la variable i para ir sumando pero + 1 para evitar una clase Ej. "column-0"
            div.classList.add('column', `column-${i + 1}`);
            // añade el elemento DIV al elemento ya existente almacenado en la variable container
            container.append(div);

        }
        // col_indice para recorrer las columnas
        let col_indice = 0;
        // recorrer el array(Elementos) para iterar en cada uno de sus elementos y asi proceder a añadirlos a las distintas columnas
        for (key in elementos) {
            // Si col_indice es mayor o igual que col_existentes entonces:
            if (col_indice >= col_existentes) {
                // col_indice empezara otra vez desde cero para evitar que intente añadir elementos a columnas inexistentes
                col_indice = 0;
            }
            //Ej. elementos_hijos[0] = 'column-1', elementos_hijos[1] = 'column-2' , Etc...
            elementos_hijos[col_indice].append(elementos[key]);
            // incrementar por cada vez que se ejecute el bucle un 1 a col_indice con col_indice++
            col_indice++;
        }
        // añade una clase al container directamente para hacer visible al contenedor una vez todo este listo.
        // originalmente en el css esta el contenedor con:   opacity:0; y esta clase en el css esta con opacity:1;
        container.classList.add('container-visible');
    }
}
