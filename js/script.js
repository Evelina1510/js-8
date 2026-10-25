const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
// let string = '';
// for (let i = 0; i < friends.length; i++) {
//     string = string + friends[i];
//     if (i < friends.length - 1) {
//         string = string + ',';
//     }
// }


let string = friends.join(',');
console.log(string);


const cards = [
  'Карточка-1',
  'Карточка-2',
  'Карточка-3',
  'Карточка-4',
  'Карточка-5',
];
const cardToRemove = 'Карточка-3';
const removeIndex = cards.indexOf(cardToRemove);
if (removeIndex !== -1) {
  cards.splice(removeIndex, 1);
}
console.log(cards);

const cardToInsert = 'Карточка-6';
cards.splice(2, 0, cardToInsert);
console.log(cards);

const cardToUpdate = 'Карточка-4';
const updateIndex = cards.indexOf(cardToUpdate);
if (updateIndex !== -1) {
  cards.splice(updateIndex, 1, 'Карточка-4 оновлена');
}
console.log(cards);