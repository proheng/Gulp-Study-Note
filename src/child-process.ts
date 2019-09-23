import { exec } from 'child_process';

export default function childProcessTask(){
    return exec('date');
}