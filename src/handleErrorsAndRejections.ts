export default (() => {
    process.on('uncaughtException', (e: Error) => {
        console.error('Uncaught exception occurred');
        console.error(e);
        process.exit(1);
    });

    process.on('unhandledRejection', (reason: {} | null | undefined, promise: Promise<any>) => {
        console.error('Unhandled Promise rejection occurred');
        console.error(reason);
        console.error(promise);
        process.exit(1);
    });
})();
