export default class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.initHTML();
        this.model.initDefaultValues();
        this.initEventHandlers();
    }

    initHTML(){
        console.log(this.view);
        if (!this.view) {
            return;
        }
        let quiz = document.getElementsByClassName("quiz")[0];
        console.log(quiz);
        quiz.innerHTML = this.view.toHtml();
    }

    initEventHandlers(){
        if (this.model) {
            this.model.initEventHandlers();
        }
        if (this.view) {
            this.view.initEventHandlers();
            var self = this
            this.view.change.subscribe(change => self.changeModel(change, self))
        }
    }

    changeModel(change, self){
        if (!change){
            return
        }
        if (change.type === "radio" || change.type === "checkbox"){
            let field = self.model[change.name]
            if (Array.isArray(field)){
                if (change.checked){
                    field.push(change.value)
                } else {
                    const index = field.indexOf(change.value);
                    if (index > -1) {
                        field.splice(index, 1);
                    }
                }
            } else {
                self.model[change.name] = change.value
            }
        } else {
            self.model[change.name] = change.value
        }
        self.postMessage(self)
    }

    postMessage(self){
        if (!self.worker){
            return
        }
        self.worker.postMessage([self.model])
    }
}