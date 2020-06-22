import Model from './model/Model.js';
import View from './view/View.js';
import Controller from './controller/Controller.js';

let model = new Model("Windows", "Windows", "Так");
let view = new View();
let controller = new Controller(model, view);

var worker = new Worker("worker.js")
controller.worker = worker

worker.onmessage = function(e){
    document.getElementsByClassName("report")[0].innerHTML = e.data
}