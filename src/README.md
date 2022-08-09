# Functions

A function is a callable piece of code that can take multiple inputs and return a single output In other words, you call them and give them some info, they do something, and they give you something back.

> 👨‍💻 Run these examples in your REPL as you read along! 👨‍💻

Here's an example function:

```javascript
function add(a, b) {
  return a + b
}
```

Functions always start with the `function` keyword, followed by the function name - `add` in the example above.

Next there are the function parameters `(a, b)`. These are the external pieces of data that your function will expect when you call it later on. You can have none or as many as you need for your function to work. They are wrapped by parentheses and separated by commas. The names are arbitrary (they can be whatever you want!) and you should think really carefully when creating them, making sure the reader will easily understand what’s going on when they see it.

Finally, we have our function’s block. This is the code that appears in the curly braces after thr function definition and is the code we want out function to run when it's called. Within this block, we will have access to all the parameters we’ve defined, and we can also use the special keyword `return` to end the function and give back a single value as a result.

In the example above, the function is not actually doing anything yet - we’re just declaring how the function will work. If we want to use the function, we need to *call* it. We can do that like so:

```javascript
const result = add(5, 3)
console.log(result)
```

## Next

Work your way through the tests for this section. You can use the references below and also
the `example.js` file to see more code samples. Remember you can make use of the Node REPL
to try out and experiment with code.

## References

* [Boolean Functions Slides](https://docs.google.com/presentation/d/1y3MTvIPCIYl2a3Cn6hW6kYbxrGKZELqWlXAUKlYUTF0/edit?usp=sharing)
* [MDN Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
