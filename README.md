<es6-repl> web component
---------------------------

Web component that wraps the usage of [an es6 repl](http://jsoverson.github.io/es6repl/)
so that embedding is more user friendly.

## Usage

[Demo](http://jsoverson.github.io/es6-repl)

```html
<es6-repl>
class Person {
    constructor(name) {
        this.name = name;
        console.log(`Hi ${name}`);
    }
}
let a = new Person('carol');
</es6-repl>
```

## License

MIT
