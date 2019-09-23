import { src, dest } from 'gulp'

function streamTask(){
    return src('*.js')
    .pipe(dest('output'));
}

export default streamTask