const {WebcController} = WebCardinal.controllers;

export default class BarCodeCtrl extends WebcController {

    constructor(...props) {
        super(...props);
        this.model = {}
        this.model.active=false;
        this.model.data =""

        setInterval(()=>{
            this.model.active =!this.model.active
        },5000)

    }


}