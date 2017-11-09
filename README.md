
## list-structure
Using ES6 to build linked lists, stacks, queues and other structures. Need CommonJS module support.

使用 ES6 构建的链表，栈，队列等结构，需要 CommonJS 模块的支持。

<a href="https://www.npmjs.com/package/list-structure"><img src="https://img.shields.io/npm/v/list-structure.svg"></a>
<a href="https://www.npmjs.com/package/list-structure"><img src="https://img.shields.io/npm/dm/list-structure.svg"></a>

**structures：**
- [LinkedList [链表]](https://www.npmjs.com/package/list-structure#linkedlist)
- [Stack [栈]](https://www.npmjs.com/package/list-structure#stack)

**insert：**
```bash
npm install --save list-structure
# or
yarn add list-structure
```

**test：**
```bash
git clone https://github.com/Lizhooh/list-structure.git
npm install
npm test
```

## LinkedList

### API

method | return | explain
:--- | :--- | :---
`size()` | Number |
`append(element)` | Object |
`prepend(element)` | Object |
`forEach((item, index))` | Object |
`removeAt(index)` | Object |
`remove(any)` | Object |
`toArray()` | Array |
`from(array)` | Object |
`isEmpty()` | Boolean |
`clear()` | Object |
`insert(index, element)` | Any |
`hasAt(index)` | Boolean |
`has(any)` | Boolean |
`findIndex(any)` | Number |
`find(any)` | Any |
`set(index, element)` | Object |
`get(index)` | Any |

### example
```js
const { LinkedList } = require('list-structure');

const list1 = new LinkedList();
list1.append('A').append('B');
console.log(list1.toArray());   // ['A', 'B']

const list2 = new LinkedList(['C', 'D']);
console.log(list2.toArray());   // ['C', 'D']

const list3 = new LinkedList();
list3.from(['E', 'F']);
console.log(list3.toArray());   // ['E', 'F']

const list4 = new LinkedList([
    { name: 'aer', id: 1 },
    { name: 'ber', id: 2 },
    { name: 'cer', id: 3 },
]);

console.log(list4.hasAt(1));                   // true
console.log(list4.has(i => i.name === 'aer')); // true

list4.prepend({ name: 'der', id: 4 });
list4.insert(2, { name: 'eer', id: 5 });
list4.forEach(i => console.log(i));

list4.removeAt(2);
list4.remove(i => i.id === 3);
console.log(list4.length)        // 3

console.log(list4.get(0));       // { name: 'der', id: 4 }
list4.set(0, { name: 'fer', id: 6 });
console.log(list4.get(0));       // { name: 'fer', id: 6 }

const index = list4.findIndex(i => i.id === 6);
console.log(index);              // 0
```

## stack

### API

method | return | explain
:--- | :--- | :---
`size()` | Number |
`push(element)` | Object |
`pop()` | Object |
`forEach((item, index))` | Object |
`toArray()` | Array |
`from(array)` | Object |
`isEmpty()` | Boolean |
`clear()` | Object |
`has(any)` | Boolean |
`toString()` | String |

### example

```js
const { Stack } = require('list-structure');

const stack1 = new Stack();
stack1.push('A').push('B').push('C');
stack1.toArray();               // ['A', 'B', 'C']

stack1.pop();                   // 'C'
stack1.peek();                  // 'B'

const stack2 = new Stack([{ id: 1 }, { id: 2 }]);

stack2.from([{ id: 3 }, { id: 4 }]);
stack2.size();                  // 4

stack2.has(i => i.id === 3);    // true
stack2.has(i => i.id === 5);    // false
```

