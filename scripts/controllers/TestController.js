const {WebcController} = WebCardinal.controllers;
export default class TestController extends WebcController {
    constructor(...props) {
        super(...props);
            this.model = {
                selectAllMonths:{
                    checkedValue: "true",
                    uncheckedValue:"false",
                    label: "Select all months",
                },
                months:[
                    {
                        name:"June",
                        selected: {
                            checked:"true",
                            checkedValue: "true",
                            uncheckedValue: "false",
                        }
                    },
                    {
                        name:"July",
                        selected: {
                            checked:"false",
                            checkedValue: "true",
                            uncheckedValue: "false",
                        }
                    },
                    {
                        name:"August",
                        selected: {
                            checked:"true",
                            checkedValue: "true",
                            uncheckedValue: "false",
                        }
                    }
                ],

                startDate: {
                    label: "FORMATED DATE",
                    name: "date-to-format",
                    required: false,
                    type:"month",
                    dataFormat:"MM YYYY",
                    value:Date.now()+10000000000
                },

                nationality: {
                    label: "Select your nationality",
                    placeholder: "Please select one option...",
                    required: true,
                    options: [
                        {
                            label: "Select one option",
                            value: ""
                        },{
                        label: "Romanian",
                        value: "RO"
                    },{
                        label: "Italian",
                        value: "It"
                    },{
                        label: "Dutch",
                        value: "NL"
                    }],
                    value:"NL"
                },

                continents: {
                    label: "Select big continents",
                    placeholder: "Please select more than 2 ",
                    selectionType: "multiple",
                    options: [{
                        label: "Africa",
                        value: "africa"
                    }, {
                        label: "Europe",
                        value: "europe"
                    }, {
                        label: "Asia",
                        value: "asia"
                    },
                        {
                            label: "America",
                            value: "america"
                        },
                        {
                            label: "Australia",
                            value: "australia"
                        },
                        {
                            label: "Antarctica",
                            value: "antarctica"
                        }],
                    value: []
                },

                condition:false,
                out:[[2,5,6],[1,2,3]],
                children:[
                    {idx:1,name:"Ana", age:14, toggleGrade:false, grades:[10,9,10]},
                    {idx:2,name:"Vlad", age:18, toggleGrade:false, grades:[9,9,7]},
                    {idx:3,name:"Irina", age:12, toggleGrade:false, grades:[10,8,10]}
                ],
                name:"Rafael3",
                someProperty:{
                    someArray:[{
                        name:"Name1",
                        level2Array:[
                            [[],[]]
                        ]
                    },
                        {
                            name:"Name2"
                        }]
                }
            }

            setTimeout(()=>{
                this.model.nationality.value = "It"
                this.model.nationality.options.push({
                    label: "Bulgarian",
                    value: "BG"

                })
            },3000)


        //this.setSkin("en");



        this.model.onChange("nationality",()=>{
            console.log(this.model.nationality.value);
        })
        this.model.onChange("continents",()=>{
            console.log(this.model.continents.value);
        })

        this.model.onChange("startDate",()=>{
            console.log(this.model.startDate.value);
        })


        this.onTagClick("toggleChildren",(model, target, evt)=>{
            this.model.condition = !this.model.condition;
        })

        const toggleGrades = (model, target, evt)=>{
            let selectedChild = this.model.children.find((_model)=>{
                return _model.idx === model.idx;
            });
            selectedChild.toggleGrade=!selectedChild.toggleGrade
        };


        this.onTagClick("hideGrades",toggleGrades)
        this.onTagClick("showGrades",toggleGrades)


        this.onTagClick("en",()=>{
            this.setSkin("en")
        });

        this.onTagClick("ro",()=>{
            this.setSkin("ro")
        })


        this.model.onChange("selectAllMonths",()=>{
            this.model.months.forEach(month=>{
                month.selected.checked = this.model.selectAllMonths.value;
            })
        })




        this.model.onChange("selectAllMonths",()=>{
            console.log("change");
        });

        setInterval(()=>{
            this.model.selectAllMonths.checkedValue = false
            //this.model.setChainValue("selectAllMonths.checkedValue",false);
        },2000)

    }


}