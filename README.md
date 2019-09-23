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

### Private vs Public Task

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

Gulp provides two powerful composition methods, series() and parallel(), allowing individual tasks to be composed into larger operations. Both methods accept any number of task functions or composed operations. series() and parallel() can be nested within themselves or each other to any depth.
- To have your tasks execute in order, use the series() method.
- For tasks to run at maximum concurrency, combine them with the parallel() method.
