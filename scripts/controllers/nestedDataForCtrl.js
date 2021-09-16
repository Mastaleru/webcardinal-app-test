const {WebcController} = WebCardinal.controllers;

const continent =  {name:"America",
    countries:[
        {name:"USA", people:["Ana","Vlad","Maria","Dan","Vasile","Ioan","Georgeta"]},{name:"Canada",people:["David","Elena"]},
        {name:"Mexic", people:["Alexandra","Vlad","Maria","Dan","Vasile","Ioan","Georgeta"]},
        {name:"Brazil", people:["Alexandra","Vlad","Maria","Dan","Vasile","Ioan","Georgeta"]}
    ],
}

export default class nestedDataForCtrl extends WebcController {

    constructor(...props) {
        super(...props);
        this.model = {
            btnDisabled:false,
            continents:[
                {name:"Asia",
                countries:[
                    {name:"China", people:["Ana","Vlad"]},{name:"Russia",people:["David","Elena"]}
                ]
                }
            ]
        }

        setTimeout(()=>{
            this.model.btnDisabled =!this.model.btnDisabled;
        },3000)


        // let addInterval = setInterval(()=>{
        //     this.model.continents.push((JSON.parse(JSON.stringify(continent))));
        // },1000);
        // let removeInterval;
        // setTimeout(()=>{
        //     removeInterval =  setInterval(()=>{
        //         setTimeout(()=>{
        //             if(this.model.continents[this.model.continents.length-1].countries.length>0 && this.model.continents[this.model.continents.length-1].countries[this.model.continents[this.model.continents.length-1].countries.length-1].people.length>0){
        //                 this.model.continents[this.model.continents.length-1].countries[this.model.continents[this.model.continents.length-1].countries.length-1].people.splice(-1);
        //             }
        //         },100);
        //
        //         setTimeout(()=>{
        //             if(this.model.continents[this.model.continents.length-1].countries.length>0)
        //             {
        //                 this.model.continents[this.model.continents.length-1].countries.splice(-1);
        //             }
        //         },600);
        //
        //         this.model.continents.splice((-1));
        //     },2000);
        // },1000)
        //
        //
        //
        // setTimeout(()=>{
        //     clearInterval(addInterval);
        //     clearInterval(removeInterval);
        //     alert("Continente" + this.model.continents.length);
        //     console.log("Finished")
        // },10*1000);


        this.model.addExpression("continentsNotEmpty",()=>{
            console.log("expression fired",this.model.continents.length);
            return this.model.continents.length > 0;

        },"continents")

        this.onTagClick("add-new",()=>{
            let start = Date.now();
            this.model.continents.push((JSON.parse(JSON.stringify(continent))));
            // setTimeout(()=>{
            //     console.log("Time passed", Date.now()-start);
            // },1)
        })

        this.onTagClick("change-last",()=>{
            this.model.continents[this.model.continents.length-1].countries.push({name:"Romania",people:["David","Elena"]},)
        })

        this.onTagClick("remove-last",()=>{
            this.model.continents.splice((-1));
        });

        this.onTagClick("remove-last-country",()=>{
            this.model.continents[this.model.continents.length-1].countries.splice((-1));
        });

        this.onTagClick("remove-last-people",()=>{
            this.model.continents[this.model.continents.length-1].countries[this.model.continents[this.model.continents.length-1].countries.length-1].people.splice((-1));
        });



    }
}