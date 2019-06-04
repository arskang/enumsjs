require('colors');
const Enums = require('../index');

const RolesSimple = Enums.set(['Usuario', 'Moderador', 'Administrador']);

const RolesCrazy = Enums.set([{
    name: 'Usuario',
    description: 'Rol Usuario'
}, {
    name: 'Moderador',
    value: 3,
    description: 'Rol Moderador'
}, 'Administrador']);

console.log(RolesCrazy);

console.log("\n");

console.log("=== Enums simple ===".bold);

console.log("\n");

console.log("const Roles = Enums.set(['Usuario', 'Moderador', 'Administrador']);".italic.yellow);

console.log("\n");

console.log("Roles.USUARIO".green, RolesSimple.USUARIO);
console.log("Roles.MODERADOR".green, RolesSimple.MODERADOR);
console.log("Roles.ADMINISTRADOR".green, RolesSimple.ADMINISTRADOR);

console.log("\n");

console.log("=== Enums complejos ===".bold);

console.log("\n");

console.log("const Roles = Enums.set([{".italic.yellow);
console.log("\tname: 'Usuario',".italic.yellow);
console.log("\tdescription: 'Rol Usuario'".italic.yellow);
console.log("}, {".italic.yellow);
console.log("\tname: 'Moderador',".italic.yellow);
console.log("\tvalue: 3,".italic.yellow);
console.log("\tdescription: 'Rol Moderador'".italic.yellow);
console.log("}, 'Administrador']);".italic.yellow);

console.log("\n");

console.log("Roles.USUARIO".green, RolesCrazy.USUARIO);
console.log("Roles.MODERADOR".green, RolesCrazy.MODERADOR);
console.log("Roles.ADMINISTRADOR".green, RolesCrazy.ADMINISTRADOR);

console.log("\n");

console.log("Roles.getName('usuario')".green, RolesCrazy.getName('usuario'));
console.log("Roles.getValue('usuario')".green, RolesCrazy.getValue('usuario'));
console.log("Roles.getDescription('usuario')".green, RolesCrazy.getDescription('usuario'));

console.log("\n");