---
id: a39963a4c10bc8b4d4f06d7e
title: Cerca e distruggi
challengeType: 1
forumTopicId: 16046
dashedName: seek-and-destroy
---

# --description--

You will be provided with an initial array as the first argument to the `destroyer` function, followed by one or more arguments. Rimuovi dall'array iniziale tutti gli elementi che hanno lo stesso valore di questi argomenti.

The function must accept an indeterminate number of arguments, also known as a variadic function. You can access the additional arguments by adding a rest parameter to the function definition or using the `arguments` object.

# --hints--

`destroyer([1, 2, 3, 1, 2, 3], 2, 3)` dovrebbe restituire `[1, 1]`.

```js
assert.deepEqual(destroyer([1, 2, 3, 1, 2, 3], 2, 3), [1, 1]);
```

`destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)` dovrebbe restituire `[1, 5, 1]`.

```js
assert.deepEqual(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3), [1, 5, 1]);
```

`destroyer([3, 5, 1, 2, 2], 2, 3, 5)` dovrebbe restituire `[1]`.

```js
assert.deepEqual(destroyer([3, 5, 1, 2, 2], 2, 3, 5), [1]);
```

`destroyer([2, 3, 2, 3], 2, 3)` dovrebbe restituire `[]`.

```js
assert.deepEqual(destroyer([2, 3, 2, 3], 2, 3), []);
```

`destroyer(["tree", "hamburger", 53], "tree", 53)` dovrebbe restituire `["hamburger"]`.

```js
assert.deepEqual(destroyer(['tree', 'hamburger', 53], 'tree', 53), [
  'hamburger'
]);
```

`destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan")` dovrebbe restituire `[12,92,65]`.

```js
assert.deepEqual(
  destroyer(
    [
      'possum',
      'trollo',
      12,
      'safari',
      'hotdog',
      92,
      65,
      'grandma',
      'bugati',
      'trojan',
      'yacht'
    ],
    'yacht',
    'possum',
    'trollo',
    'safari',
    'hotdog',
    'grandma',
    'bugati',
    'trojan'
  ),
  [12, 92, 65]
);
```

# --seed--

## --seed-contents--

```js
function destroyer(arr) {
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
```

# --solutions--

```js
function destroyer(arr) {
  var hash = Object.create(null);
  [].slice.call(arguments, 1).forEach(function(e) {
    hash[e] = true;
  });
  return arr.filter(function(e) { return !(e in hash);});
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
```
