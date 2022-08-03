for ( let i = 1; i <= 100; i++ ) {
  let fizz = false;
  let buzz = false;
  let bazz = false;
  
  if ( i % 3 === 0 ) {
  	fizz = true;
	} 
  
  if ( i % 5 === 0 ) {
  	buzz = true;
	}
  
   if ( i % 7 === 0 ) {
  	bazz = true;
	}
  
  let _outString = `${fizz ? "Fizz" : ""}${buzz ? "Buzz" : ""}${bazz ? "Bazz" : ""}`;
  
  console.log( `${fizz || buzz || bazz ? _outString : i}` );
}