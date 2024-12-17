//todo ------------Introduction---------------

//^ Typescript is free and opensource high level programming language developed by microsoft
//^ It is a syntactic supertype of Javascript which adds static typing
//^ Type script is a superset of javascript.
//^ it is a typer superset, meaning that it adds rules about how different kinds of values can be used.
//^ It enhances the code quality and maintainability
//* Typescript extends javascipt by adding types
//^ It compiles down to plain java script.
//* It allows developers to catch errors during development rather than at runtime
//^ Typescript checks the programs for errors before the execution starts
//^ If we already have a javascript code we can convert it into typescript code.

//* Runtime behaviour
//^ typescript is a programming language that preserves the runtime behaviour of javascript.
//^ It never changes the runtime behaviour of javascript code
//^ Typescript is a javascripts runtime with a compile-time type checker

//& Setup - Install the typescript globally
//~ check node ---> node -v
//~ check npm ----> npm -v
//~ install typescript ----> npm install -g typescript
//~ typescript compiler ----> tsc -v
//~ initialize ---> npm init -y ---> its a command to initialize the node project by adding all the node dependencies
//~ run ----> tsc fileName.ts
//~ to run automatically ----> tsc fileName --watch

//& why to use typescript?
//~ Because it is a extended javascript
//~ we can rename .js files to .ts
//~ Optional static typing and type inference
//~ JS is dynamically typed, Types are resolved at runtime
//~ TS is optionally type
//~ TS addes type support to JS
// ~ Errors are identified as we type our code.

export{} //! to make it a block use export
let name =  'Pooja' //! error- bcs it considers this to be a script and not a block.
console.log(`Hello ${name}`);

//^Why to use typescript
//! static typing
//! Improved code quality and maintainability
//! Enhanced developer experience
//! supports modern javascript features.
//! great for large projects

//^when to use typescript
//! large-scale applications
//! team project
//! long-term maintenance

//^ when not use typescript
//! small project
//! strict runtime environment