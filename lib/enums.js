require('colors');

const Enums = ((() => {

    class Enum {
        constructor(value){
            this.description = '';
            this.value = value;
            this.name = '';
        }
        getDescription() { return this.description.toString(); };
        getValue() { return Number(this.value); }
        toNumber() { return Number(this.value); }
        getName() { return this.name.toString(); };
        toString() { return this.name.toString(); };

        isEqual(value = undefined) {
            switch (typeof value) {
                case 'number': return Number(value) === Number(this.value);
                case 'object': return value === this;
                case 'string': {
                    if(!isNaN(Number(value)))
                        return Number(value) === Number(this.value);
                    return value.toUpperCase().replace(/ /g, '_') === this.name.toUpperCase().replace(/ /g, '_');
                }
                default: return false;
            }
        }
    }

    const genEnum = array => {
        try {
            
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
                let _name, _value, _description;
                if(typeof element === 'object') {
                    let { name = null, value = null, description = null } = element;
                    _name = name; _value = value; _description = description;
                } else { _name = element; _value = null; _description = null; }

                if (!_name || typeof _name !== 'string') {
                    console.log(`El name ${_name} tiene un tipo de dato no valido`.bold.yellow);
                    return; }

                _name = _name.toString();
                let keyName = _name.toUpperCase().replace(/ /g, '_');

                names.forEach(n => {
                    if(n === keyName) throw new Error(`El name ${keyName} esta duplicado`);
                }); names.push(keyName);

                let valEnum = _value && !isNaN(Number(_value)) ? Number(_value) : val;

                let newEnum = new Enum(valEnum);
                newEnum.description = _description ? (typeof _description === 'string' ? _description : _name) : _name;
                newEnum.value = valEnum;
                newEnum.name = _name;

                enums[keyName] = Object.freeze(newEnum);
                val = valEnum + 1;
            });

            console.log('Enums generado:'.bold, names.toString().green);
            return enums;

        } catch (e) { throw new Error(e.message); }
    }

    return {
        set: (array = []) => {
            try {
                if (!Array.isArray(array) || array.length === 0) throw new Error('¡Necesito de un arreglo! :(');
                return Object.freeze(genEnum(array));
            } catch (e) { console.log('Error:'.bold, e.message.red); } 
        }
    }

})());

module.exports = Object.freeze(Enums);