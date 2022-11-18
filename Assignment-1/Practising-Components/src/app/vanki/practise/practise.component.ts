import { Component } from "@angular/core";

@Component({
    selector:'practise',
    templateUrl:'./practise.component.html',
    styleUrls:['./practise.component.css']
})

export class PractiseComponent{
    myInputText:string='';
    constructor(){
        setTimeout(()=>{
            this.myInputText = "it got filled";
        },5000);
    }

    
}