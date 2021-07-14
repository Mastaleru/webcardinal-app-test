const {WebcController} = WebCardinal.controllers;

class TemplateInceptionProblem extends WebcController {
    getModel = (_) => ({
        testString: 'This should be visible only in main page and mother template.',
        templateName: "mother-template",
        arrayTest: [{
            name: 'Rafael',
            children: [{
                name: "Maria",
                children: [{
                    name: "Adrian"
                }, {
                    name: "Viorica",
                    children:[{
                        name:"Gheorghe"
                    }]
                }]
            },
                {
                    name: "George"
                }
            ]
        },
            {
                name: 'Tudor',
            },
            {
                name: 'Doina',
                children: [{
                    name: "Viorel"
                },
                    {
                        name: "Ioan"
                    }
                ]
            }
        ]
    });

    constructor(element, history) {
        super(element, history);
        let model = this.getModel();

        let setTemplate = function (person) {
            if (person.children) {
                person.templateName = "child-template";
                person.children.forEach(person => setTemplate(person))
            } else {
                person.templateName = "no-child-template";
            }
        }

        model.arrayTest.forEach(person=>setTemplate(person))
        this.model = model;


    }
}

export default TemplateInceptionProblem;