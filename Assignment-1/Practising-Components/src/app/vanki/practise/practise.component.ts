import { Component } from "@angular/core";

@Component({
    selector:'practise',
    templateUrl:'./practise.component.html',
    styleUrls:['./practise.component.css']
})

export class PractiseComponent{
    myInputText:string='';
    readonly = false;
    constructor(){
        
    }

    onMouseHover(){
        this.myInputText = 'Mouse was hoverd';
        this.readonly = true;
        this.resetInputValue();
    }

    resetInputValue(){
        setTimeout(()=>{
            this.myInputText = "it got filled";
            this.readonly = false;
        },5000);
    }
    
}