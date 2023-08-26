//Decorators - Podemos criar nossos proprios gatilhos de validação, pois podemos pensar
// com os Beans validation do spring.
function apiVersion(version: string){
    return (target: any) => {
        Object.assign(target.prototype, {__version: version, __name: "Uanderosn"});
    };
}

function minLength(length: number){
    //target = alvo || key = valor
    return (target: any, key: string) => {
        let _value = target[key];
        const getter = () => _value;
        const setter = (value: string) => {
            if (value.length < length){
                throw new Error(`Tamanho menor do que ${length}`)
            }else {
                _value = value;
            }
        }//setter

        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
        })

    }
}//function
class Api{
    @minLength(6)
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

const api = new Api("usuarios");
console.log(api.name)



