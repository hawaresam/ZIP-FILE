import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
import { Question } from '../Question';
import { AnswerDTO } from '../AnswerDTO'
import { MonitoringDevice } from '../MonitoringDevice';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  count:number=0;
  ques=new Question(0,'',new Map<string,string>());
  optionmap :any;
  keys;
  selectedEntry;
  mapOfQA=new Map<string,string>();
  answerDTOObj: AnswerDTO;  
  mapOfOptionAndActualJSONkey=new Map<string,number>();
  recommendedDevices:MonitoringDevice[];
  showResult:boolean=false;

  constructor(private questionService:QuestionService) { }

  ngOnInit() {
    console.log("I am in CHAT component");
    this.getQuestion(++this.count);
  }

  getQuestion(cnt:number){
    console.log("getQuestion called: "+cnt);
    console.log(this.ques.questionId+" "+this.ques.questionString);
    this.questionService.getQuestion(cnt).subscribe(data=>
      {
        console.log("Received: "+data[0]+" "+data[1]);
        console.log("Map in JSON String is: "+data[2]);
        this.ques.questionId=data[0];
        this.ques.questionString=data[1];
        this.optionmap=JSON.parse(data[2]);
        // this.ques.options=new Map<string,string>(map);
        console.log("JSON is: "+this.optionmap['2']);
        this.keys = Object.keys(this.optionmap);

        // this.ques.option1=;
      }
    );
    console.log("ques is: "+this.ques.questionString);
  }

  moveQuestion(direction:string){
    console.log("I AM IN moveQuestion METHOD");
    if(direction=='prev' && this.count>1){
      this.getQuestion(--this.count);
    }
    else if(direction=='next'){
      if(this.count<2)
        this.getQuestion(++this.count);
    }
  }

      onSelectionChange(entry) {
        this.selectedEntry = entry;
        console.log("onSelectionChange is called with value: "+entry);
        for(var i=0; i<this.keys.length; i++){
            var key = this.keys[i];
            console.log("All keys are: "+key);
        }
            this.mapOfQA.set(this.ques.questionString,this.optionmap[entry+1]);
        
        console.log(this.mapOfQA.get(this.ques.questionString));
    }

    getTheDevice(){
      console.log("I am in getTheDevice");
      let sendString='';
      for (let [key, value] of this.mapOfQA) {
        // this.answerDTOObj.add(value);
        console.log("adding to string: "+value);
        sendString=sendString+value+":";
        // this.sendString.concat(" ");
        console.log("appended string is: "+sendString);
        console.log(key, value);            //"Lokesh" 37 "Raj" 35 "John" 40
      }
      if(this.mapOfQA.size==2){
        this.showResult=true;
        console.log('Size of map is 2 and sending: '+sendString);
        this.questionService.getMonitoringDevice(sendString).subscribe((res)=>
        {
          console.log("I received: "+res);
          this.recommendedDevices=res;
          // this.recommendedDevices=res.toString().split(",");
          // console.log(this.recommendedDevices[0]+" "+this.recommendedDevices[1]);
        }
        );
      }
      else{
        this.showResult=true;
        console.log('Size of map is not 2');
        this.questionService.getMonitoringDevice("No data").subscribe((res)=>
                {
                  console.log("I received: ",res);
                  this.recommendedDevices=res;
                  // this.recommendedDevices=res.toString().split(",");
                  console.log(this.recommendedDevices[0]," ",this.recommendedDevices[1]);
                }
                );
      }
    }
}
