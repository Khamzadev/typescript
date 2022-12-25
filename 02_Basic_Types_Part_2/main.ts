//6.Array
//TS также как и JS имеет свои массивы значений . Тип массива может быть определен одним из двух способов

//Первый способ обозначать тип элементов массива перед []

let list: number[] = [1, 2, 3, 4, 5];

//Второй способ используется для обобщения

let list2: Array<number> = [1, 2, 3, 4];

//второй способ называется generic type

//7.Tuple
//Тип tuple дает возможность объявить массив с известным количеством которые не обязаны быть одного типа

let x: [string, number];

x = ["hello", 22]; //success

//x = [22, 'hello'] // error

//А также можно в одну линию

let y: [string, number] = ["hi", 2222];

//8. Any
//Нам может потребоваться описать тип переменных который мы незнаем
// В этих случаях нам нужно отключить проверку и для этого мы пользуемся типом any

let arr: [any, any] = [true, null];

let notSure: any = false;

notSure = 12;
notSure = "hi";
notSure = null;

// также переменных созданные типом any мы можем менять значение на любой тип данных и ошибки не будет

//9.Enum перечесление
//Enum более удобный способ задания понятных имен набору численных значений

enum Directions {
  Up,
  Down,
  Left,
  Right,
}

Directions.Up; // 0
Directions.Down; // 1

//по умолчанию перечесление начинается с 0 , но мы можем изменить индекс

//enum Directions {Up = 2, Down , Left, Right};

//Directions.up // 2

//10. Never

//Тип never представляет собой тип значений которого никогда не наступит
//Или функция которая возвратит ошибку
const msg = "Hello";

const error = (msg: string): never => {
  throw new Error(msg);
};

//Или функция которая постоянно выполняется

const isInfinityLoop = (): never => {
  while (true) {}
};

//11 Object
//Также как и в  js

const create = (o: object | null): void => {};

//тип о либо объек либо null

let id: number | string;
//с помощью | мы можем указать несколько типов данных

id = 12;
id = "hi";

//Type
//Приведение к типу

type Name = string;

let id2: Name;

id2 = "hi"; //success
id2 = 23; // error
