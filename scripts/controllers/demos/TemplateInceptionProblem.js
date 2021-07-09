const { WebcController } = WebCardinal.controllers;

class TemplateInceptionProblem extends WebcController {
    getModel = (_) => ({
        testString: 'This should be visible only in main page and mother template.',
        arrayTest: [
            {
                name: 'Rafael'
            },
            {
                name: 'Cosmin'
            }
        ]
    });

    constructor(element, history) {
        super(element, history);
        this.setModel(this.getModel());
    }
}

export default TemplateInceptionProblem;