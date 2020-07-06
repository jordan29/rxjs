import { Observable, Observer, Subscriber, Subject } from 'rxjs';

const observer: Observer<any> = {
    next: resp => console.log('response: ', resp),
    error:  error => console.warn('error: ', error),
    complete: () => console.info("complete")
}

const intervalos$ = new Observable<number>( subs => {
    
    const intervalID = setInterval( () => {
        subs.next(Math.random())
    }, 1000);

    return () => clearInterval( intervalID );
});

const subject$ = new Subject();
const intervalSubject = intervalos$.subscribe(subject$);

//const mySub = intervalos$.subscribe( rnd => console.log('num1: ', rnd) );
//const mySub2 = intervalos$.subscribe( rnd => console.log('num2: ', rnd );

const mySub = subject$.subscribe( observer );
const mySub2 = subject$.subscribe( observer );

setTimeout( () => {
    subject$.next(1);
    subject$.complete();
    intervalSubject.unsubscribe();
}, 4000)