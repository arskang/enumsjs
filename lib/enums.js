require('colors');

const Enums = ((() => {

    const genEnum = array => {
        try {

            const Enums = Number;
            // Propiedades
            Enums.prototype.description = null;
            Enums.prototype.value = 0;
            Enums.prototype.name = null;
            // Métodos
            Enums.prototype.getDescription = function() { return this.description.toString(); };
            Enums.prototype.getValue = function() { return Number(this.value); }
            Enums.prototype.toNumber = function () { return Number(this.value); }
            Enums.prototype.getName = function() { return this.name.toString(); };
            Enums.prototype.toString = function() { return this.name.toString(); };
            // Igualar
            Enums.prototype.isEqual = function(value = undefined) {
                try {
                    if(typeof value === 'number')
                        return Number(value) === Number(this.value);
                    if(typeof value === 'object')
                        return value === this;
                    if(typeof value === 'string')
                        return value.toUpperCase().toString() === this.name.toUpperCase().toString();    
                    throw new Error('Dato no valido');
                } catch(e) { console.log(e.message.bold.red) }
            }
            
            let enums = {
                // Convertir dato al tipo Enums
                convert(data = undefined) {
                    let keys = Object.keys(this).filter(key => key !== 'convert');
                    let enums = null;
                    keys.forEach(key => {
                        if(this[key].isEqual(data))
                            enums = this[key];
                    }); return enums ? Object.freeze(enums) : enums;
                }
            }, val = 0, names = [];

            array.forEach(element => {
                if(typeof element === 'number') throw new Error('No se permite nombrar a un Enum con un number');
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
                let newEnum = new Enums(valEnum);
                newEnum.description = _description ? _description : _name;
                newEnum.value = valEnum;
                newEnum.name = _name;

                enums[_name.toUpperCase().replace(/ /g, '_')] = Object.freeze(newEnum);
                val = valEnum + 1;
            });

            console.log('Enums generado:'.bold, names.toString().green);
            return enums;

        } catch (e) { throw new Error(e.message.red); }
    }

    return {
        set: (array = []) => {
            try {
                if (!Array.isArray(array) || array.length === 0) throw new Error('¡Necesito de un arreglo! :(');
                return Object.freeze(genEnum(array));
            } catch (e) { console.log('Error:'.red.bold, e.message.red); } 
        }
    }

})());

module.exports = Object.freeze(Enums);