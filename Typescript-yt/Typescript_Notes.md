js--> ts (addon)
-> consistency
-> data types
-> typesafety
ts -> process -> js

 # Typescript installation
 -> npm init -y
-> global -> npm i -D typescript
-> npx tsc --init

 # type Annotations and Inference
  # Inference
  ->which understand automatically types (tumko btane ki jarurat nhi hai ki ye kis type ka )
  -> let name = "shubham"
  # Annotations 
  -> need to mention the data types (tumko btana padega ki ye is trah ka types hai)
  -> let name:string = "shubham"

  # union
  -A union type in TypeScript allows a variable, function parameter, or return value to be one of several types, providing flexibility while maintaining type safety. It is defined using the pipe (|) symbol

  # Any
  - The any type in TypeScript is a special, dynamic type that effectively disables static type checking for a variable, function parameter, or return value. It allows a value to be assigned any type (string, number, boolean, object, etc.), which provides flexibility but sacrifices the primary benefit of TypeScript: type safety