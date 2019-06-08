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

console.log("\n");

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

console.log("Roles.USUARIO.getName()".green, RolesCrazy.USUARIO.getName());
console.log("Roles.USUARIO.getValue()".green, RolesCrazy.USUARIO.getValue());
console.log("Roles.USUARIO.getDescription()".green, RolesCrazy.USUARIO.getDescription());

console.log("\n");

console.log("Roles.USUARIO.isEqual(Roles.USUARIO)".green, RolesCrazy.USUARIO.isEqual(RolesCrazy.USUARIO));
console.log("Roles.USUARIO.isEqual(0)".green, RolesCrazy.USUARIO.isEqual(0));
console.log("Roles.USUARIO.isEqual('usuario')".green, RolesCrazy.USUARIO.isEqual('usuario'));

console.log("\n");

console.log("Roles.USUARIO.toString()".green, RolesCrazy.USUARIO.toString());
console.log("Roles.USUARIO.toNumber()".green, RolesCrazy.USUARIO.toNumber());

console.log("\n");

console.log("Roles.convert(0)".green, RolesCrazy.convert(0));
console.log("Roles.convert('canela')".green, RolesCrazy.convert('canela'));

console.log("\n");