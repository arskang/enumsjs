require('colors');
const Enums = require('../index');

try {
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

    console.log("Roles.MODERADOR.getName()".green, RolesCrazy.MODERADOR.getName());
    console.log("Roles.MODERADOR.getValue()".green, RolesCrazy.MODERADOR.getValue());
    console.log("Roles.MODERADOR.getDescription()".green, RolesCrazy.MODERADOR.getDescription());

    console.log("\n");

    console.log("Roles.ADMINISTRADOR.getName()".green, RolesCrazy.ADMINISTRADOR.getName());
    console.log("Roles.ADMINISTRADOR.getValue()".green, RolesCrazy.ADMINISTRADOR.getValue());
    console.log("Roles.ADMINISTRADOR.getDescription()".green, RolesCrazy.ADMINISTRADOR.getDescription());

    console.log("\n");

    console.log("Roles.USUARIO.isEqual(Roles.USUARIO)".green, RolesCrazy.USUARIO.isEqual(RolesCrazy.USUARIO));
    console.log("Roles.USUARIO.isEqual(Roles.MODERADOR)".green, RolesCrazy.USUARIO.isEqual(RolesCrazy.MODERADOR));
    console.log("Roles.USUARIO.isEqual(0)".green, RolesCrazy.USUARIO.isEqual(0));
    console.log("Roles.USUARIO.isEqual(3)".green, RolesCrazy.USUARIO.isEqual(3));
    console.log("Roles.USUARIO.isEqual('usuario')".green, RolesCrazy.USUARIO.isEqual('usuario'));
    console.log("Roles.USUARIO.isEqual('moderador')".green, RolesCrazy.USUARIO.isEqual('moderador'));

    console.log("\n");

    console.log("Roles.MODERADOR.isEqual(Roles.MODERADOR)".green, RolesCrazy.MODERADOR.isEqual(RolesCrazy.MODERADOR));
    console.log("Roles.MODERADOR.isEqual(Roles.ADMINISTRADOR)".green, RolesCrazy.MODERADOR.isEqual(RolesCrazy.ADMINISTRADOR));
    console.log("Roles.MODERADOR.isEqual(3)".green, RolesCrazy.MODERADOR.isEqual(3));
    console.log("Roles.MODERADOR.isEqual(4)".green, RolesCrazy.MODERADOR.isEqual(4));
    console.log("Roles.MODERADOR.isEqual('moderador')".green, RolesCrazy.MODERADOR.isEqual('moderador'));
    console.log("Roles.MODERADOR.isEqual('administrador')".green, RolesCrazy.MODERADOR.isEqual('administrador'));

    console.log("\n");

    console.log("Roles.ADMINISTRADOR.isEqual(Roles.ADMINISTRADOR)".green, RolesCrazy.ADMINISTRADOR.isEqual(RolesCrazy.ADMINISTRADOR));
    console.log("Roles.ADMINISTRADOR.isEqual(Roles.USUARIO)".green, RolesCrazy.ADMINISTRADOR.isEqual(RolesCrazy.USUARIO));
    console.log("Roles.ADMINISTRADOR.isEqual(4)".green, RolesCrazy.ADMINISTRADOR.isEqual(4));
    console.log("Roles.ADMINISTRADOR.isEqual(0)".green, RolesCrazy.ADMINISTRADOR.isEqual(0));
    console.log("Roles.ADMINISTRADOR.isEqual('administrador')".green, RolesCrazy.ADMINISTRADOR.isEqual('administrador'));
    console.log("Roles.ADMINISTRADOR.isEqual('usuario')".green, RolesCrazy.ADMINISTRADOR.isEqual('usuario'));

    console.log("\n");

    console.log("Roles.USUARIO.toString()".green, RolesCrazy.USUARIO.toString());
    console.log("Roles.USUARIO.toNumber()".green, RolesCrazy.USUARIO.toNumber());

    console.log("\n");

    console.log("Roles.MODERADOR.toString()".green, RolesCrazy.MODERADOR.toString());
    console.log("Roles.MODERADOR.toNumber()".green, RolesCrazy.MODERADOR.toNumber());

    console.log("\n");

    console.log("Roles.ADMINISTRADOR.toString()".green, RolesCrazy.ADMINISTRADOR.toString());
    console.log("Roles.ADMINISTRADOR.toNumber()".green, RolesCrazy.ADMINISTRADOR.toNumber());

    console.log("\n");

    console.log("Roles.convert(Roles.USUARIO)".green, RolesCrazy.convert(RolesCrazy.USUARIO));
    console.log("Roles.convert(0)".green, RolesCrazy.convert(0));
    console.log("Roles.convert('usuario')".green, RolesCrazy.convert('usuario'));
    console.log("Roles.convert(Roles.CANELA)".green, RolesCrazy.convert(RolesCrazy.CANELA));
    console.log("Roles.convert(87)".green, RolesCrazy.convert(87));
    console.log("Roles.convert('canela')".green, RolesCrazy.convert('canela'));

    console.log("\n");

} catch(e) { console.log('Error:'.bold, e.message.red); }