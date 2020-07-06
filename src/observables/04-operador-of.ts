import { of } from 'rxjs';

const obs$ = of(1,2,3,4,5,6,7,8);

console.log("incio");
obs$.subscribe( 
    next => console.log('next: ', next),
    null,
    () => console.log("finish!")
)
console.log("final");