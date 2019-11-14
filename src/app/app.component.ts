import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

    public edited;
    
    ngOnInit(){
        this.edited = false;
    } 

    TestingFunction(){
        this.edited = !this.edited;
        alert(this.edited)
    }
}
