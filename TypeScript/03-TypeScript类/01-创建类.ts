
//汽车,属性:颜色,价钱,品牌   方法:会跑
//吉利的汽车  长城汽车

/**ts语法*/
/*1.定义一个Person01类*/
class Person01{
    /*2.添加属性,并声明属性的类型*/
    name:string;
    age:number;

    /*3.类的构造器*/
    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }

    /*4.定义方法*/
    getName():void{
        console.log(this.name);
    }

    hello():void{
        console.log("hello oop");
        
    }
}



/*5.新建一个Person对象*/
let yhc=new Person01("yhc",18);
//  let yhc=new Person01();
//  yhc.name="yhc";
//  yhc.age=18;
 console.log(yhc);
 
yhc.hello()

