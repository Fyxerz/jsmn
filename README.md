# jsmn: JavaScript Minimal (Object) Notation
JSMN is a little compiler to avoid the nuisance of writing JSON

It uses node to compile any type of file with JSMN in it to a JSON format, even though it is not required to output to a JSON file or have a .jsmn input file either.

##### *While the main logic behind the component is already done it still requires to be created as an npm cli module.*

## How it works.

Similar to the way SASS syntax works, JSMN uses the fullstop (.) and the hash (#) to represent objects and arrays. This way it doesn't require the use for any kind of brackets, instead it depends on indentation which are visually less confusing and much easier to debug and understand at a quick glance.

## Syntax

In order to create a JSON tree like this one: `Javascript` arr = [obj = {variable = true}, anotherObj = {variable = false}}}

It's equivalent in JSMN would be:

```
#arr
  .obj
    variable: true
  .anotherObj
    variable:false
```

#### Issues and pull requests are more than welcome.
