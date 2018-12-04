//Функция конструктор для пункта меню
//Отрисовывает конкретный пункт
class MenuItem
{
    constructor(href, title)
    {
        this.href = href;
        this.title = title;
    }

    //Вовращает html для вывода
    renderItem(){
        return `<li><a href="${this.href}">${this.title}</a></li>`;

    }
}
