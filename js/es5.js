// Я всегда пишу много комментариев.
// Так я лучше понимаю материал.
//
// Создаю функцию-конструктор:
function Car(model, color, transmission, engine) {
    this.model = model;
    this.color = color;
    this.transmission = transmission;
    this.engine = engine;
}
// ВАЖНО! this - указывает, что данные свойства будут доступны объекту,
// который будет создан при помощи данной функции-конструктора.
//
// Теперь для создания объекта воспользуемся оператором new
// Вместо var буду использовать let, т.к. это не позволит мне дублировать
// переменные или объекты, что очень важно бри большом количестве кода на
// много-много строк, когда можно забыть, что ту или иную переменную
// или объект я использовал ранее.
// 
// Создам объект opel.
// Для этого я вызываю функцию-конструктор (далее ФК) и передаю ей требуемые значения:
// цвет, тип коробки передач, а так же параметры двигателя - объем и мощность 
// в виде объекта.
let opel = new Car("Astra H", "black", "AT", {volume: 1.8, power: 140});
// На данном этапе я запускаю index.html в браузере и с помощью консоли
// проверяю, что объект мой создался.
// Дополнительно я выведу это в консоль через console.log
console.log('Объект Opel:');
console.log(opel);
// Создам ещё один объект.
let lada = new Car("Vesta", "white", "MT", {volume: 1.6, power: 106});
console.log('Объект Lada:');
console.log(lada);
// Итого: я создал два экземпляра чертежа, каждый со своими свойствами.
// Как получать значения свойств объекта я знаю: objectname.property
// Вложенных объектов: objectname.insideobjectname.property
//
//
// ВТОРОЙ СПОСОБ СОЗДАНИЯ ОБЪЕКТОВ
// Метод Object.create
// Object - некий глобальный объект, встроенный в JS. 
// create - метод.
// Почему он нам больше подходит? Ну мы же хотим изучить наследование,
// а он как раз его реализует. Так же, он позволяет создавать объекты по
// прототипу, не определяя при этом конструктор.
// Попробую понять, о чём вообще я сейчас анписал. Пока в голове каша.
// 
// Создаю функцию, содержащую ряд элементов:
function Vehicle() {
    this.x = 0;
    this.y = 0;
    this.z = 0;
    this.color = "green";
}
// Что-же, мля, я написал? Я написал функцию, содержащую некие координаты x, y и z, 
// а так же указание на зелёный цвет чего-то. 
// С помощью this я сказал, что переменные x, y, z и color будут доступны из вне
// тем объектом, который будет создан благодаря этой функции.
// Я сейчас всё делаю по методичке, но изменяя некоторые сущности - например, 
// названия объектов и свойств. Мне в методичке кое-что было не понятно,
// тем более, что преподаватель, ведущий вебинар, не показал, зачем надо было
// создавать для Vehicle в прототипе метод move. Я не понимаю, зачем его надо было
// создавать именно в том месте кода. Я бы, например, создал его в конце данного блока кода.
//
// Продолжаю:
// Создаю функцию myCar(), которая через метод call будет вызывать функцию Vehicle()
function myCar() {
    Vehicle.call(this);
}
// Здесь this, как я понял, указывает на то, что все действия необходимо выполнять
// в рамках одной сущности (создаваемого в итоге объекта). Ну это логично.
// Далее, согласно методичке, я создаю для Car прототип объект на основе
// функции Vehicle.
// Вот, что я вычитал на одном интернет-ресурсе:
// Когда создаётся функция, в неё по умолчанию добавляется свойство prototype. 
// Значением свойства prototype является объект, содержащий общие свойства и методы, 
// которые доступны всем объектам, созданным с помощью этого конструктора.
// После этого мне стало всё более понятно, но сначала тот самый код, 
// который у меня вызывает вопросы:
myCar.prototype = Object.create(Vehicle.prototype);
myCar.prototype.constructor = myCar;
//
// Да, вот ещё, что я вычитал:
// У каждого объекта, созданного с помощью конструктора, есть неявно добавленное
// свойство constructor, содержащее ссылку на конструктор, с помощью которого был
// создан объект.
// 
// Теперь попробую это всё структурировать у себя в голове.
// Т.е., когда создаётся функция, а в нашем случае это myCar, то к ней автоматом
// добавляется стандартное, системное, если хотие, свойство prototype, значением
// которого будет объект, содержащий общие свойства и методы, которые доступны
// всем объектам, созданным с помощью этого конструктора.
// Таким образом в 80-ой строке я для свойства prototype функции myCar создал
// с помощью Object.create() объект Vehicle содержащий свойства, созданные,
// как я понимаю, функцией Vehicle(), т.е. стандартные для все функций в JS.
// И теперь в строке 81 объекту свойству constructor свойства prototype объекта myCar
// , которое, как я вычитал, добавляется неявно, присваивается ссылка на конструктор,
// с помощью которого этот объект был создан. Ну мы же создаём этот объект на базе
// функции myCar?
// Голова кругом. Но это пройдёт. ;)
//
// Теперь я создаю объект audi c помощью функции myCar()
let audi = new myCar();
// Выведу в консоль для отладки:
console.log('Объект Audi:');
console.log(audi);
// О чудо, я был прав, кусок кода, где в методичке описывалось создание 
// метода move, как одно из свойств Vehicle, можно было смело написать в конце,
// т.е. после описания создания самого объекта описанным способом.
// Итак, создам метод move:
Vehicle.prototype.move = function(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
}
// Теперь с помощью команды audi.move(x, y, z) мы можем менять координаты нашего объекта.
// Проверить, применилось ли наследование, можно с помощью оператора instanceof.
// объект audi должен принадлежать двум классам в нашем случае: myCar и Vehicle.
console.log('Объект audi принадлежит классу myCar?');
console.log(audi instanceof myCar);
console.log('Объект audi принадлежит классу Vehicle?');
console.log(audi instanceof Vehicle);
// В обоих вариантах будет true.
//
// Кажется, я начал что-то понимать.
//
// В методичке написано, что через prototype можно добавлять свойства к заранее 
// заданному классу, которое применится не для текущего экземпляра, а для всего класса.
// Например в прототип для Car добавили свойство color:
Car.prototype.color = null;
// И поменяли цвет у Lada на жёлтый:
lada.color = "yellow";
// Если проверить в консоли, то увидим изменения. 
//
// Далее в методичке есть абсолютно отватительный пример инкапсуляции, о которой
// мне тоже надо знать. Поищу-ка ч в интернете.
// Вот тот пример, который написан в методичке:
// Функция-конструктор
function Car1() {
    // Свойство vinCode, доступное объекту, который будет создан на базе этой функции-конструткора благодаря this
    this.vinCode = "someVinCode";
}
// В прототип объекта Car1 добавляем метод setVit (сетер), при вызове которого будет
// вызвана функция, которой будет передано в переменную my_vin некоторое значение:
Car1.prototype.setVin = function(my_vin) {
    // В переменную vinCode записываем переданное через метод setVin значение
    this.vinCode = my_vin;
    // В консоль вывожу результат:
    console.log("Vin code:" + this.vinCode); 
}
// Создаю два объекта c1 и с2 с помощью ФК Car1()
let c1 = new Car1();
// В с1 засетиваю одно значение
c1.setVin("vin1");
let c2 = new Car1();
// В с2 засетиваю другое значение
c2.setVin("vin2");
// Я, признаться, не вижу тут какой-то наглядности. Мне пришлось немного поломать голову,
// чтобы понять, что тут написано. 
// 
// Теперь вернусь к тому, что я прочитал в интернете и мне это показалось более интересным.
// Инкапсуляция является одним из ключевых понятий объектно-ориентированного программирования и 
// представляет сокрытие состояния объекта от прямого доступа извне. По умолчанию все свойства 
// объектов являются публичными, общедоступными, и мы к ним можем обратиться из любого места программы.
// Примеры:
function User(pName, pAge) {
    this.name = pName;
    this.age = pAge;
    this.displayInfo = function(){
        document.write("Имя: " + this.name + "; возраст: " + this.age);
    }
};
var tom = new User("Том", 26);
tom.name=34;
console.log(tom.name);
// В данном примере name, age и displayInfo доступны для использования из любого места программы.
// Их можно скрыть, сделав их локальными.
function User1(name, age) {
    this.name = name;
    var _age = age;
    this.displayInfo = function(){
        document.write("Имя: " + this.name + "; возраст: " + _age + "<br>");
    };
    this.getAge = function() {
        return _age;
    }
    this.setAge = function(age) {
        if(typeof age === "number" && age >0 && age<110){
            _age = age;
        } else {
            console.log("Недопустимое значение");
        }
    }
}
 
var tom = new User1("Том", 26);
console.log(tom._age); // undefined - _age - локальная переменная
console.log(tom.getAge()); // 26
tom.setAge(32);
console.log(tom.getAge()); // 32
tom.setAge("54"); // Недопустимое значение





















