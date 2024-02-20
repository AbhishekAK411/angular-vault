import { Injectable } from "@angular/core";

@Injectable()
export class CounterService {

    onLog(count: number) {
        console.log(count);
    }
}