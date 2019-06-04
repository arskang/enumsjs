require('colors');

const Enums = ((() => {

    const genEnum = array => {
        try {

            let enums = {
                props: {},
                getName(_enum) {
                    return this._({ _enum, val: 'name' });
                },
                getValue(_enum) {
                    return this._({ _enum, val: 'value', isnumber: true });
                },
                getDescription(_enum) {
                    return this._({ _enum, val: 'description' });
                },
                _(objeto){
                    try {
                        if (typeof objeto !== 'object') throw new Error('¡Necesito de un object :(!');
                        let { _enum, val = 'name', isnumber = false } = objeto;
                        if (typeof _enum !== 'string') throw new Error('¡Necesito de un string :(!');
                        let key = _enum.toUpperCase().replace(/ /g, '_'), res = this.props[key][val];
                        if (isnumber) {
                            if (res === undefined) throw new Error('No hay nada por aquí');
                            return Number(res);
                        } else {
                            if (!res) throw new Error('No hay nada por aquí');
                            return res.toString();
                        }
                    } catch (e) { console.log('Error:'.red.bold, e.message.red); }
                }
            }, val = 0, names = [];

            array.forEach(element => {
                let _name, _value, _description;
                if(typeof element === 'object') {
                    let { name = null, value = null, description = null } = element;
                    _name = name; _value = value; _description = description;
                } else { _name = element.toString(); _value = null; _description = null; }

                if (!_name) {
                    console.log('Name no definido'.bold.yellow);
                    return; }
                
                names.forEach(n => {
                    if(n === _name.toUpperCase().replace(/ /g, '_')) throw new Error('Name duplicado');
                }); names.push(_name.toUpperCase().replace(/ /g, '_'));

                let valEnum = _value && !isNaN(Number(_value)) ? Number(_value) : val;
                enums[_name.toUpperCase().replace(/ /g, '_')] = valEnum;
                enums.props[_name.toUpperCase().replace(/ /g, '_')] = {
                    name: _name,
                    value: valEnum,
                    description: _description ? _description : _name
                }; val = valEnum + 1;
            });

            console.log('Enums generado:'.bold, names.toString().green);
            return enums;

        } catch (e) { throw new Error('Error:'.red.bold, e.message.red); }
    }

    return {
        set: (array = []) => {
            try {
                if (!Array.isArray(array) || array.length === 0) throw new Error('¡Necesito de un arreglo! :(');
                return Object.freeze(genEnum(array));
            } catch (e) { console.log('Error:'.red.bold, e.message.red);} 
        }
    }

})());

module.exports = Object.freeze(Enums);