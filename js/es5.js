// Я всегда пишу много комментариев.
// Так я лучше понимаю материал.
//
// Создаю функцию-конструктор:
function Car(color, transmission, engine) {
    this.color = color;
    this.transmission = transmission;
    this.engine = engine;
}
// ВАЖНО! this - указывает, что данные свойства будут доступны объекту,
// который будет создан при помощи данной функции-конструктора.
