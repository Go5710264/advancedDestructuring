import './style.css';

export const character = {
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
      description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
    },
  ],
};

export default function gettingAttackOptions({ special }) {
  const arrayOfSkills = [];

  special.forEach((item) => {
    const skills = item;
    if (!skills.description) {
      skills.description = skills.description || 'Описание недоступно';
    }
    arrayOfSkills.push(skills);
  });

  return arrayOfSkills;
}

gettingAttackOptions(character);
