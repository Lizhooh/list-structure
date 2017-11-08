
## list-structure
Using ES6 to build the list structure, suitable for nodejs.
使用  ES6 构建的 链表结构，适合于 nodejs 上。

目前有几种结构：
- LinkedList [链表]


**insert：**
```bash
npm install --save list-structure
# or
yarn add list-structure
```

## LinkedList


### API

method | explain
--- | ---
append(element) |
prepend(element) |
forEach((item, index)) |
removeAt(index) |
remove(any) |
toArray() |
from(array) |
isEmpty() |
clear() |
insert(index, element) |
hasAt(index) |
has(any) |
findIndex(any) |
find(any) |
set(index, element) |
get(index) |

### example
```js
const { LinkedList } = require('list-structure');

const list1 = new LinkedList();
list1.append('A').append('B');
console.log(list1.toArray()); // ['A', 'B']

const list2 = new LinkedList(['C', 'D']);
console.log(list2.toArray()); // ['C', 'D']

const list3 = new LinkedList();
list3.from(['E', 'F']);
console.log(list3.toArray()); // ['E', 'F']

const list4 = new LinkedList([
    { name: 'aer', id: 1 },
    { name: 'ber', id: 2 },
    { name: 'cer', id: 3 },
]);

console.log(list4.hasAt(1));  // true
console.log(list4.has(i => i.name === 'aer')); // true

list4.prepend({ name: 'der', id: 4 });
list4.insert(2, { name: 'eer', id: 5 });
list4.forEach(i => console.log(i));

list4.removeAt(2);
list4.remove(i => i.id === 3);
console.log(list4.length) // 3

console.log(list4.get(0)); // { name: 'der', id: 4 }
list4.set(0, { name: 'fer', id: 6 });
console.log(list4.get(0)); // { name: 'fer', id: 6 }

const index = list4.findIndex(i => i.id === 6);
console.log(index);  // 0
```