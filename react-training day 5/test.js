
/*function *generator(){
	yield *fibogen(count)
}*/


function *fibogen(){
	var t ;
	var t1=0;
	var t2=1;
 while(true)
	{

		yield t1
		 t=t1+t2;
		  t1=t2;
		   t2=t;
	} 
}

var gen=fibogen();
for( i=1; i<=10; i++){
	console.log(gen.next().value)

}


/*class Foo{
	*[Symbol.iterator](){
		yield 1;
		yield 2;
	}
}

class Another{
	*[Symbol.iterator](){
		yield 'a';
		yield 'b';
	}
}
console.log(Array.from(new Foo))
console.log(Array.from(new Another))
*/





/*function *anotherGenerator(i){
	yield i+1;
	yield i+2;
	yield i+3;

}
 function *myGen(i){
 	yield i
	yield *anotherGenerator(i)
	yield i+10
 }

var gen=myGen(10)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)*/


/* function *idMaker(){
 	var index=1011;
 	while(true)
		yield index++;
}

var gen=idMaker()
 console.log(gen.next().value)
 console.log(gen.next().value)
 console.log(gen.next().value)
console.log(gen.next().value)
 console.log(gen.next().value)*/



/*function *generatorMessage(){
	yield 1;
	yield 2;
	yield 3;
	console.log('end')
}
 const gen= generatorMessage()
 console.log(gen.next())
 console.log(gen.next())
 console.log(gen.next())*/



 // function *generateForLoop(num){
// 	for(let i=0;i<num;i++){
// 		yield console.log(i)
// 	}
// }


// const genLoop=generateForLoop(10)
// genLoop.next()
// genLoop.next()
// genLoop.next()
