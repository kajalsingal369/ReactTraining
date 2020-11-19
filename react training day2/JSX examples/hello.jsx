class Employee{
	var empid=0;
	var ename="";
	var salary =0;

   function constructor(){
   log("default constructor is called");
   this.empid=0;
   this.ename="";
   this.salary=0;
   }

	 function constructor( id:number,name:string,sal:number){
	 log("parameterised constructor is called");
	  this.empid=id;
	  this.ename=name;
	  this.salary=sal;
	  }
	   function showDetails():void{
	   log("employee details are:"+this.empid+" "+this.ename+" "+this.salary);
	   }
}


class _Main {
    static function main(args : string[]) : void {
        
      const numbers=[1,2,3,4,5];
      const list=numbers.map((number)=>"<li key="+number.toString()+">"+number+"</li>");     
     //const double= numbers.map((numbers)=>"<h1>"+numbers*2+"</h1>");
      log(list);



        //log "Hello, world!";
        //var emp= new Employee(1201,"eshan",50000);
        //emp.showDetails();
    }
}