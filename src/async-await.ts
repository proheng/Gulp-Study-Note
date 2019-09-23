import * as fs from 'fs';

export default async function (){
    let version  = fs.readFileSync('package.json');
    console.log(version);
    await Promise.resolve('some result');
}