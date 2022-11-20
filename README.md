[![Build status](https://ci.appveyor.com/api/projects/status/rq4ox3eer76l049q?svg=true)](https://ci.appveyor.com/project/Go5710264/advanceddestructuring)
```js
const character = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон'
    }, 
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...'
    }
  ]	
}
```
Необходимо написать функцию к вышеуказанному объекту с аргументом-деструктором, которая извлекает массив с нужными полями (`id`, `name`, `description`, `icon`) из объекта, а если значения для поля description нет - устанавливает default'ное значение в 'Описание недоступно'. Функция должна возвращать извлечённый массив из объектов с четыремя полями