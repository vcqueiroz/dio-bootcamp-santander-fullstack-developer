// Como podemos rodar isso em um arquivo .ts sem causar erros? 

//let employee = {};
//employee.code = 10;
//employee.name = "John";

//** Solução 1 */
let employee = {
    code: 10,
    name: 'John'
};

//** Solução 2 */
let employee2: {code: number, name: string} = {
    code: 10,
    name: 'John'
}

///-----other mode
//** Solução 3 */
interface Employee {
    code: number,
    name: string
}
let employee3: Employee = {
    code: 200,
    name: 'John'
}
