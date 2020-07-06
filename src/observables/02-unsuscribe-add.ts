import { Observable, Observer, Subscriber } from 'rxjs';

const observer: Observer<any> = {
    next: resp => console.log('response: ', resp),
    error:  error => console.warn('error: ', error),
    complete: () => console.info("complete")
}

const intervalos$ = new Observable<number>( subs => {
    let num: number = 1;
    const interval = setInterval( () => {
        subs.next(num++)
    }, 1000);

    setTimeout(() => {
        subs.complete();
    }, 2500)

    return () => {
        clearInterval(interval);
        console.log("intervalo destruido");
    }
})

const subscri = intervalos$.subscribe( num => console.log('num: ', num) )

setTimeout(() => {
    subscri.unsubscribe();
    const subscri1 = intervalos$.subscribe( num => console.log('num2: ', num) )
}, 5000)