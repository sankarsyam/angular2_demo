import {Component} from '@angular/core';
import {HTTPTestService} from './http-test.service';

@Component({
    moduleId:module.id,
    selector: "http-test",
    templateUrl: 'http-test.component.html',
    providers: [HTTPTestService]
})

export class HTTPTestComponent{
    getData: string;
    postData: string;
    private formatData: string;
    fff: string;
    mmm: string;

    time: string;

    constructor(private _httpService : HTTPTestService) {}

    // onTestGet() {
    //     this._httpService.getCurrentTime().subscribe(data => this.getData =JSON.stringify(data),
    //     error => alert(error),
    //     () => console.log(this.getData.replace(",","\n").replace(",","\n"))
    //     );
    //     formatData => this.getData.replace(",","\n").replace(",","\n");
    // }

        onTestGet() {
        console.log(this.getData);
        this._httpService.getCurrentTime().subscribe(data => this.getData = JSON.stringify(data).replace(",","\n" ),
        error => alert(error)
        );
 }

    onTestPost() {
        this._httpService.postData().subscribe(data => this.postData = JSON.stringify(data),
        error => alert(error),
        ()=> console.log("Completed"));
    }
}