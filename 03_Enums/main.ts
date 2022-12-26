//Представляет собой какую то смесь между массивом и объектом . При обращении к элементам у нас возвращает индекс элемента 

enum Directions {
  Up ,
  Down ,
  Left, 
  Right,
}


Directions.Up //0
Directions.Down //1

//Обращение по индексу выгдяит следующим способом 
Directions[0] // Up
Directions[1] // Down

//А также мы можем изменить индекс элемента сами 


enum Directions {
  Up = 2 ,
  Down  = 3,
  Left = 5, 
  Right = 6,
}

Directions.Up // 2
Directions[3] // Dowm


//Строковые перечесления 
Кроме числовых перечислений в TypeScript есть строковые перечисления, константы которых принимают строковые значения:

1
2
3
4
5
6
7
8
enum Season { 
    Winter = "Зима", 
    Spring = "Весна",
    Summer = "Лето", 
    Autumn = "Осень"
};
var current: Season = Season.Summer;
console.log(current);   // Лето

//Смешанные гетерогенные перечисления
//Также можно определять смешанные перечисления, константы которых могут числа и строки.
enum Season { 
    Winter = 1, 
    Spring = "Весна",
    Summer = 3, 
    Autumn = "Осень"
};
var current: Season = Season.Summer;
console.log(current);           // 3
console.log(Season.Autumn);     // Осень


Перечисления в функциях
Перечисление может выступать в качестве параметра функции.

1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
enum DayTime { 
    Morning, 
    Evening
};
function welcome(dayTime: DayTime){
     
    if(dayTime === DayTime.Morning){
        console.log("Доброе утро");
    }
    else{
        console.log("Добрый вечер");
    }
}
let current: DayTime = DayTime.Morning;
welcome(current);           // Доброе утро
welcome(DayTime.Evening);   // Добрый вечер