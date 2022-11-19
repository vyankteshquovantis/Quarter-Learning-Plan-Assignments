import { Component } from "@angular/core";

@Component({
    selector:'practise',
    templateUrl:'./practise.component.html',
    styleUrls:['./practise.component.css']
})

export class PractiseComponent{
    practiseDetails:string='';
    practiseList:string[]=[];
    
    readonly = false;
    constructor(){
        
    }

    onMouseHover(){
        this.practiseDetails = 'Mouse was hoverd';
        this.readonly = true;
        this.resetInputValue();
    }

    resetInputValue(){
        setTimeout(()=>{
            this.practiseDetails = "it got filled";
            this.readonly = false;
        },5000);
    }

    onPractiseAddClick(){
        this.practiseList.push(this.practiseDetails);
        this.practiseDetails = "";
    }
    
}