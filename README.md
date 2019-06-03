# Enums con JavaScript

Instalación:
```javascript
npm i @arskang/enumsjs
```

¿Cómo lo importo?
```javascript
const Enums = require('@arskang/enumsjs');
```

¿Cómo utilizarlo?
- La forma más sencilla es utilizar el metodo *set* y enviar un *arreglo de strings*.
```javascript
const Roles = Enums.set(['Usuario', 'Moderador', 'Administrador']);

Roles.USUARIO; // Retorna 0
Roles.MODERADOR; // Retorna 1
Roles.ADMINISTRADOR; // Retorna 2
```

> El valor inicial es 0

- Si se necesita personalizar los *valores* y agregar una *descripción*, se envía un *arreglo de objetos*.
```javascript
const Roles = Enums.set(['Usuario', {
    name: 'Moderador',
    value: 3,
    description: 'Rol Moderador'
}, 'Administrador']);

Roles.USUARIO; // Retorna 0
Roles.MODERADOR; // Retorna 3
Roles.ADMINISTRADOR; // Retorna 4
```

> *value* y *description* son opcionales, si no lleva *name* se enviará un warning en la consola y se omitirá en la generación del Enums
```javascript
// Name no definido
```

- Para acceder a las propiedades se utliza *.getName(string)*, *.getValue(string)* y *.getDescription(string)*, cada uno de ellos recibe un *string*.
```javascript
const Roles = Enums.set([{
    name: 'Usuario',
    description: 'Rol Usuario'
}, {
    name: 'Moderador',
    value: 3,
    description: 'Rol Moderador'
}, 'Administrador']);

Roles.getName('usuario'); // Retorna el string: 'Usuario'
Roles.getValue('usuario'); // Retorna el number: 0
Roles.getDescription('usuario'); // Retorna el string: 'Rol Usuario'

Roles.getName('moderador'); // Retorna el string: 'Moderador'
Roles.getValue('moderador'); // Retorna el number: 3
Roles.getDescription('moderador'); // Retorna el string: 'Rol Moderador'

Roles.getName('administrador'); // Retorna el string: 'Administrador'
Roles.getValue('administrador'); // Retorna el number: 4
Roles.getDescription('administrador'); // Retorna el string: 'Administrador'
```

- También es posible acceder utilizando *.props*.
```javascript
const Roles = Enums.set([{
    name: 'Usuario',
    description: 'Rol Usuario'
}, {
    name: 'Moderador',
    value: 3,
    description: 'Rol Moderador'
}, 'Administrador']);

Roles.props.USUARIO.name // Retorna el string: 'Usuario'
Roles.props.USUARIO.value // Retorna el number: 0
Roles.props.USUARIO.description // Retorna el string: 'Rol Usuario'

Roles.props.MODERADOR.name // Retorna el string: 'Moderador'
Roles.props.MODERADOR.value // Retorna el number: 3
Roles.props.MODERADOR.description // Retorna el string: 'Rol Moderador'

Roles.props.ADMINISTRADOR.name // Retorna el string: 'Administrador'
Roles.props.ADMINISTRADOR.value // Retorna el number: 4
Roles.props.ADMINISTRADOR.description // Retorna el string: 'Administrador'
```

### Puntos importantes

- Se agrega un guión bajo en cada espacio que se detecte, ejemplo:
```javascript
const Roles = Enums.set(['Usuario Basico', 'Moderador', 'Administrador']);

// Enums generado: USUARIO_BASICO,MODERADOR,ADMINISTRADOR
Roles.USUARIO_BASICO; // Retorna el number: 0
```

- Se puede utilizar mayúsculas/minúsculas/espacios en los *.get*
```javascript
const Roles = Enums.set(['Usuario Basico', 'Moderador', 'Administrador']);

Roles.getName('usuario basico'); // Retorna el string: 'Usuario Basico'
Roles.getValue('Usuario Basico'); // Retorna el number: 0
Roles.getDescription('USUARIO_BASICO'); // Retorna el string: 'Usuario Basico'
```

- Si por alguna razón se utilizán caracteres especiales para los enums, solo se puede acceder a su valor de la siguiente forma:
```javascript
const Roles = Enums.set(['Usuario Básico', 'Moderador', 'Administrador']);

Roles['USUARIO_BÁSICO']; // Retorna el number: 0
```
> Para estos casos se recomienda utilizar los *.get*
```javascript
Roles.getName('usuario básico'); // Retorna el string: 'Usuario Basico'
Roles.getValue('Usuario Básico'); // Retorna el number: 0
Roles.getDescription('USUARIO_BÁSICO'); // Retorna el string: 'Usuario Basico'
```

### Test
```
npm run test
```