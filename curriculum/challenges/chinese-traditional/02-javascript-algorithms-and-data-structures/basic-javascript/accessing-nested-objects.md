---
id: 56533eb9ac21ba0edf2244cc
title: 訪問嵌套對象
challengeType: 1
videoUrl: 'https://scrimba.com/c/cRnRnfa'
forumTopicId: 16161
dashedName: accessing-nested-objects
---

# --description--

我們可以通過連續使用點號表示法和方括號表示法來訪問對象的嵌套屬性。

這是一個嵌套對象：

```js
const ourStorage = {
  "desk": {
    "drawer": "stapler"
  },
  "cabinet": {
    "top drawer": { 
      "folder1": "a file",
      "folder2": "secrets"
    },
    "bottom drawer": "soda"
  }
};

ourStorage.cabinet["top drawer"].folder2;
ourStorage.desk.drawer;
```

`ourStorage.cabinet["top drawer"].folder2` 將會是字符串 `secrets`，並且 `ourStorage.desk.drawer` 將會是字符串 `stapler`。

# --instructions--

訪問 `myStorage` 對象並將 `glove box` 屬性的內容賦值給 `gloveBoxContents` 變量。 在可能的情況下，對所有的屬性使用點號，否則使用方括號。

# --hints--

`gloveBoxContents` 應該等於字符串 `maps`。

```js
assert(gloveBoxContents === 'maps');
```

Your code should use dot notation, where possible, to access `myStorage`.

```js
assert.match(code, /myStorage\.car\.inside/);
```

應該用 `const` 聲明 `gloveBoxContents`。

```js
assert.match(code, /const\s+gloveBoxContents\s*=\s*myStorage\.car\.inside\[\s*("|')glove box\1\s*\]|const\s*{\s*('|")glove box\2:\s*gloveBoxContents\s*}\s*=\s*myStorage\.car\.inside;/);
```

# --seed--

## --after-user-code--

```js
(function(x) { 
  if(typeof x != 'undefined') { 
    return "gloveBoxContents = " + x;
  }
  return "gloveBoxContents is undefined";
})(gloveBoxContents);
```

## --seed-contents--

```js
const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

const gloveBoxContents = undefined;
```

# --solutions--

```js
const myStorage = {
  "car":{
    "inside":{
      "glove box":"maps",
      "passenger seat":"crumbs"
    },
    "outside":{
      "trunk":"jack"
    }
  }
};
const gloveBoxContents = myStorage.car.inside["glove box"];
```
