# Gulp with TypeScript Study Note

![gulp banner](images\gulp.png)

## Installation 

Commands
```
$ npm init
$ npm i --save-dev gulp
```

```
# This allow gulpfile supports TypeScript. e.g. gulpfile.ts
$ npm install --save-dev typescript gulp@4.0.0 gulp-typescript
```

## Private vs Public Task

- private task is not exported from the js file. 
- public tasks are exported functions from the js file.

```
# Check the task hierarchy
$ gulp --tasks
[14:01:40] Tasks for gulpfile.ts
[14:01:40] ├── build
[14:01:40] └─┬ default
[14:01:40]   └─┬ <series>
[14:01:40]     ├── clean
[14:01:40]     └── build
```

## Compose Task

Gulp provides two powerful composition methods, ```series()``` and ```parallel()```, allowing individual tasks to be composed into larger operations. Both methods accept any number of task functions or composed operations. series() and parallel() can be nested within themselves or each other to any depth.
- To have your tasks execute in order, use the ```series()``` method.
- For tasks to run at maximum concurrency, combine them with the ```parallel()``` method.

[compose-task.ts](./src/compose.task.ts)
![compose-task](./images/compose-task.png)

## Async Completion

### Signal task completion

When a stream, promise, event emitter, child process, or observable is returned from a task, the success or error informs gulp whether to continue or end. If a task errors, gulp will end immediately and show that error.

When composing tasks with ```series()```, an error will end the composition and no further tasks will be executed. When composing tasks with ```parallel()```, an error will end the composition but the other parallel tasks may or may not complete.

#### Returning a stream
- [stream.ts](./src/stream.ts)

#### Return a promise
- [promise.ts](./src/promise.ts)

#### Return an event emitter
- [event-emitter.ts](./src/event-emitter.ts)

#### Returning a child process
- [child-process.ts](./src/child-process.ts)

#### Returning an observable
- [observable.ts](./src/observable.ts)

#### [Using an error-first callback ](https://gulpjs.com/docs/en/getting-started/async-completion#using-an-error-first-callback)


