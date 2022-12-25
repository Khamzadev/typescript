//1.Булевые значения
//Также как и в JS в TS логический оператор называется boolean 
let isDone: boolean = true;
isDone = false;

//Если мы попробуем изменить isDone на другой тип данных то у нас появиться ошибка

//2.Number (числа)
//Как и в JS в TS тип данных Number является числом плавающей запятой 
//Кроме десятичного и шестнадцатиричного формата поддерживается биранрный и восьмеричный введенных в ES6
let decimal: number = 13;
let hex: number = 123;
let binary: number = 23232;
let octal: number = 12;

//ТУт также если мы попробуем изменить тип данных то у нас появиться ошибка 


//3.String 
//Также как и в JS в TS в создании строки можно использовать двойные и одинарные кавычки 
//И можно использовать шаблонные строки 
let user: string = 'Khamza';
let userSurname: string = 'Avazbekov'

let sentnce: string = `My name is ${user}, and surname ${userSurname}`


//4. null/ undefined 
const u : undefined = undefined;
const n : null = null 


//5.Void 
//Это нечто противоположное any: отсуствие каких либо типов . Чаще всего используется а качестве возрвщаемого типа функций которыый ничего не возвращает 

const getUser = (): void => {
    alert('Khamza')
}
//void используется только после скобок 