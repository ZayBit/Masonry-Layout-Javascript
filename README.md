# Masonry Layout Responsive

![](https://i.postimg.cc/KY6WW6jD/Captura1.png)
![](https://i.postimg.cc/prmxnqR6/Captura2.png)

Crea un Masonry Layout con este script con un maximo de 4 columnas.

## Como usar?

es muy sencillo utilizarlo ya que solo se requiere un **contenedor** en donde esten todos los articulos que se repartiran por cada una de las columnas generadas

### Para hacer que funcione correctamente:

1: Enlaza el script a tu proyecto HTML en la parte inferior antes del cierre del body

``` html
    <script src="Masonry.js"></script>
    </body>
```

2: hay que colocar un id al contenedor llamado **masonry** o bien modificar en la linea #2 del script para llamar al contenedor por otro nombre

``` javascript
    //Modifica el nombre del id ('masonry') si quieres llamarlo por otra manera
    const container = document.getElementById('masonry');
```

Para mostrar menos de 4 columnas hay que modificar la constante **numero_columnas** y cambiar el numero 4 por el numero de columnas que quieras mostrar (de 1 a 4 columnas maximo)

``` javascript
    //En la linea 4 cambia el numero establecido si quieres mostrar menos de 4 columnas
    const numero_columnas = 4;
```

> El script ya funciona correctamente pero...

Puedes añadir en el css (mas especificamente en el contenedor) unos estilos:
``` css
   /* Para ocultar el contenedor hasta que todo este listo para mostrar las columnas*/
   .container{
       opacity:0;
       transition:all 300ms ease;
   }
```
Y al crear todas las columnas se añadira una clase al contenedor que lo hara visible pero añadiendo en el css la clase como en este ejemplo:

``` css
    /* Hacer visible al contenedor */
   .container-visible{
       opacity:1;
   }
```

De igual manera puede modificar el nombre de la clase que se añadira al contenedor una vez este todo listo.

``` javascript
    //En la linea 104 cambia el nombre de la clase ('container-visible') por la que quieres añadir
    container.classList.add('container-visible');
```

> Listo!, ya esta todo funcionando correctamente