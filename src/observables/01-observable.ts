import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: resp => console.log('response: ', resp),
    error:  error => console.warn('error: ', error),
    complete: () => console.info("complete")
}

//const obs$ = Observable.create();
const obs$ = new Observable<string>( subs => {
 
    subs.next('hola');
    subs.next('hola');
    subs.next('hola');
    subs.next('hola');
    subs.next('hola');
    subs.next('hola');

    subs.complete();

    subs.next('hola');
    subs.next('hola');

}); 


obs$.subscribe(observer);

