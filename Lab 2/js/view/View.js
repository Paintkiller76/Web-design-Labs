import { BehaviorSubject } from "https://dev.jspm.io/rxjs@6/_esm2015";

export default class View {
    
    constructor(){
        this.change = new BehaviorSubject()
    }

    toHtml() {
        return `<form name="form">
        <p><b>Ваше ім'я:</b><br>
        <input class="question"  type="text" name="name" size="40"></p>
        <p><b>З якими операційними системами ви знайомі?</b></p><p>
        <input class="question question1" type="checkbox" name="os" value="Windows">Windows<Br>
        <input class="question question1" type="checkbox" name="os" value="MacOS">MacOS<Br> 
        <input class="question question1" type="checkbox" name="os" value="Linux">Linux<Br> 
    
        <p><b>Яку операційну систему ви вважаєте своєю основною?</b></p>
        <p><input class="question question2" type="radio" name="mainOs" value="Windows"> Windows</p>
        <p><input class="question question2" type="radio" name="mainOs" value="MacOS"> MacOS</p>
        <p><input class="question question2" type="radio" name="mainOs" value="Linux"> Linux</p>
    
        <p><b>Чи бажаєте ви перейти на іншу операційну систему? Якщо так, то чому?</b></p>
        <p><input class="question question3" type="radio" name="wishOs" value="Так">Так</p>
        <p><input class="question question3" type="radio" name="wishOs" value="Ні">Ні</p>
        <textarea class="question" name="comment" cols="40" rows="3"></textarea></p>
    
        </form>`;
    }

    initEventHandlers(){
        let self = this
        let inputs = document.getElementsByClassName("question")
        for (let input of inputs){
            input.addEventListener("change", e => self.updateValue(e.srcElement, self))
        }
    }

    updateValue(e, self){
        self.change.next({
            name: e.name, 
            value: e.value, 
            checked: e.checked, 
            type: e.type
        })
    }
}