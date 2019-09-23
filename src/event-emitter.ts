import { EventEmitter } from 'events';

export default function eventEmitterTask(){
    let emitter = new EventEmitter();
    // Emit has to happen async otherwise gulp isn't listening yet.
    setTimeout(()=> emitter.emit('finish'), 250);
    return emitter;
}