# Enums con JavaScript

### Instalación:
```javascript
npm i @arskang/enumsjs
```

### ¿Cómo lo importo?
```javascript
const Enums = require('@arskang/enumsjs');
```

### ¿Cómo utilizarlo?
- La forma más sencilla es utilizar el método *set* y enviar un *arreglo de strings*.
```javascript
const Roles = Enums.set(['Usuario', 'Moderador', 'Administrador']);
//> Enums generado: USUARIO,MODERADOR,ADMINISTRADOR

Roles.USUARIO; // Retorna -> Number { 0 }
Roles.MODERADOR; // Retorna -> Number { 1 }
Roles.ADMINISTRADOR; // Retorna -> Number { 2 }
```

> El valor inicial es 0, **todos los enums retornan un objeto Number (new Number(x))**

- Si se necesita personalizar los *valores* y agregar una *descripción*, se envía un *objeto* con las propiedades *name*, *value* y *description* en lugar de un *string*.
```javascript
const Roles = Enums.set(['Usuario', {
    name: 'Moderador',
    value: 3,
    description: 'Rol Moderador'
}, 'Administrador']);
//> Enums generado: USUARIO,MODERADOR,ADMINISTRADOR

Roles.USUARIO; // Retorna -> Number { 0 }
Roles.MODERADOR; // Retorna -> Number { 3 }
Roles.ADMINISTRADOR; // Retorna -> Number { 4 }
```

> *value* y *description* son opcionales, si no lleva *name* se enviará un **warning** en la consola y se omitirá en la generación del Enums
```javascript
// Name no definido
```

- Para acceder a las propiedades se utliza *.getName()*, *.getValue()* y *.getDescription()*.
```javascript
const Roles = Enums.set([{
    name: 'Usuario',
    description: 'Rol Usuario'
}, {
    name: 'Moderador',
    value: 3,
    description: 'Rol Moderador'
}, 'Administrador']);
//> Enums generado: USUARIO,MODERADOR,ADMINISTRADOR

Roles.USUARIO.getName(); // Retorna el string: 'Usuario'
Roles.USUARIO.getValue(); // Retorna el number: 0
Roles.USUARIO.getDescription(); // Retorna el string: 'Rol Usuario'

Roles.MODERADOR.getName(); // Retorna el string: 'Moderador'
Roles.MODERADOR.getValue(); // Retorna el number: 3
Roles.MODERADOR.getDescription(); // Retorna el string: 'Rol Moderador'

Roles.ADMINISTRADOR.getName(); // Retorna el string: 'Administrador'
Roles.ADMINISTRADOR.getValue(); // Retorna el number: 4
Roles.ADMINISTRADOR.getDescription(); // Retorna el string: 'Administrador'
```

- También se pueden utilizar los métodos *.toString()* y *.toNumber()* para acceder a sus respectivos valores.
```javascript
Roles.USUARIO.toString(); // Retorna el string: 'Usuario'
Roles.USUARIO.toNumber(); // Retorna el number: 0

Roles.MODERADOR.toString(); // Retorna el string: 'Moderador'
Roles.MODERADOR.toNumber(); // Retorna el number: 3

Roles.ADMINISTRADOR.toString(); // Retorna el string: 'Administrador'
Roles.ADMINISTRADOR.toNumber(); // Retorna el number: 4
```

- Para validar el valor de un Enums se utiliza *.isEqual(value)*, *value* puede recibir: *Enums*, *strings* o *numbers*.
```javascript
// Validar Enums
Roles.USUARIO.isEqual(Roles.USUARIO); // Retorna True
Roles.USUARIO.isEqual(Roles.MODERADOR); // Retorna False

// Validar Value
Roles.USUARIO.isEqual(0); // Retorna True
Roles.USUARIO.isEqual(2); // Retorna False

// Validar Name
//> Se puede enviar: 'Usuario', 'usuario', 'UsuariO', etc.
Roles.USUARIO.isEqual('usuario'); // Retorna True
Roles.USUARIO.isEqual('moderador'); // Retorna False
```
> Se puede utilizar mayúsculas/minúsculas/espacios al enviar el *name*

> Si se envia un tipo de dato no permitido, retorna: *Dato no valido*

- Para convertir un valor que coincida con uno de los Enums se utiliza *.convert(value)*, *value* puede recibir: *Enums*, *strings* o *numbers*.
```javascript
// Convertir por Enums
Roles.convert(Roles.USUARIO); // Retorna -> Number { 0 }
Roles.convert(Roles.CANELA); // Retorna -> Null

// Convertir por Value
Roles.convert(0); // Retorna -> Number { 0 }
Roles.convert(87); // Retorna -> Null

// Convertir por Name
//> Se puede enviar: 'Usuario', 'usuario', 'UsuariO', etc.
Roles.convert('usuario'); // Retorna -> Number { 0 }
Roles.convert('usuario basico'); // Retorna -> Null
```
> Se puede utilizar mayúsculas/minúsculas/espacios al enviar el *name*

> Si se envia un tipo de dato no permitido, retorna: *Dato no valido*

### Puntos importantes

- Se agrega un guión bajo en cada espacio que se detecte, ejemplo:
```javascript
const Roles = Enums.set(['Usuario Basico', 'Moderador', 'Administrador']);
//> Enums generado: USUARIO_BASICO,MODERADOR,ADMINISTRADOR

Roles.USUARIO_BASICO; // Retorna -> Number { 0 }
```

- Si por alguna razón se utilizán caracteres especiales para los enums, solo se puede acceder a su valor de la siguiente forma:
```javascript
const Roles = Enums.set(['Usuario Básico', 'Moderador', 'Administrador']);
//> Enums generado: USUARIO_BÁSICO,MODERADOR,ADMINISTRADOR

Roles['USUARIO_BÁSICO']; // Retorna -> Number { 0 }
```

### Test
```
npm run test
```