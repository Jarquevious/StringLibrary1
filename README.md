# Welcome to String Manipulatiopn Library :wave:

[![npm](https://img.shields.io/npm/v/stringlibrarynpm?style=plastic)]

## Description
#### This is a easy and simple string manipulation library. Its focus is to run functions that manipulate the string in several ways.

### Functions: 
<!--code blocks-->
```
upperFirst(str)  // Upper cases the first letter of the first word
// Input:   'hello world'
// Output:  'Hello world'
```

allCaps(str)          // Upper cases every letter
// Input:   'hello world'
// Output:  'HELLO WORLD'

capitalizeWords(str)  // Upper cases the first letter of every word
// Input:   'hello world'
// Output:  'Hello World'

removeExtraSpace(str) // Removes any extra spaces and keeps single spaces between words
// Input:   '   hello    world   '
// Output:  'hello world'

kebabCase(str)        // Changes the format of string to kebabCase
// Input:   'hello world'
// Output:  'hello-world'

snakeCase(str)        // Changes the format of string to snakeCase
// Input:   'hello world'
// Output:  'hello_world'

camelCase(str)        // Changes the format of string to camelCase
// Input:   'hello world'
// Output:  'helloWorld'

shift(str)            // Shifts the first letter of the first word to the back
// Input:   'hello world'
// Output:  'ello worldh'

makeHashTag(str)      // Changes format of 3 longest words to hashtags
// Input:   'Amazing bongo drums for sale'
// Output:  ['#amazing', '#bongo', '#drums']

isEmpty(str)          // Checks if the string is empty
// Input:   'hello world'
// Output:  False
