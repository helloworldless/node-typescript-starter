import './handleErrorsAndRejections';

interface Greeter {
    greet(): string;
}

const hello: Greeter = {
    greet: () => 'Hello Node + TypeScript!'
};

console.log(hello.greet());
