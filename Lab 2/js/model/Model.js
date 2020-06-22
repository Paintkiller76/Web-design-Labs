export default class Model {
    constructor(os, mainOs, wishOs){
        this.os = [os];
        this.mainOs = mainOs;
        this.wishOs = wishOs;
    }

    initEventHandlers(){
        let inputs = document.forms["form"].getElementsByTagName("input")
        console.log(inputs)
    }

    initDefaultValues(){
        this.setChecked("question1", this.os[0])
        this.setChecked("question2", this.mainOs)
        this.setChecked("question3", this.wishOs)
    }

    setChecked(name, value){
        let questions = document.getElementsByClassName(name)
        for (let question of questions){
            if (question.value === value){
                question.checked = true;
            }
        }
    }


}