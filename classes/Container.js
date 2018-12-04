class Container
{
    constructor(){
        this.htmlCode = ''; //Для хранения html кода самого меню
    }

    //Возвращает html код Меню
    getHtmlCode(){
        return this.htmlCode;
    }

    //Добавляем html код Меню
    setHtmlCode(code)
    {
        this.htmlCode = code;
    }

    remove()
    {
        //TODO: Удаляет меню
    }
}