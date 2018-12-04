//Функция конструктор Меню
//Отрисовка самого контейнера и перебор пунктов в for
class Menu extends Container
{
    constructor(myId, myClass, myItems){
        super(); //Container.call(this);
        this.id = myId;
        this.className = myClass;
        this.items = myItems;
    }

    //Формирование структуры Меню
    render(){
        // var result = '<ul class="' + this.className + '">';
        var result = `<ul class="${this.className}">`;

        for(var i = 0; i < this.items.length; i++)
        {
            //Проверка this.items[i] на принадлежность к классу MenuItem
            if(this.items[i] instanceof MenuItem)
            {
                result += this.items[i].renderItem();
            }
        }

        result += '</ul>'; //result = result + '</ul>';
        this.setHtmlCode(result);
        return result;
    }
}
