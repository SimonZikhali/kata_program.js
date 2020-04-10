// Excercise: Hello

function hello (name){
 return console.log("Hello " + name);    
}
hello ('Tshepo')


//Exercise: check if a number is even

function evenorodd ( Num ) {
    if ( Num % 2 === 0 ) {
        return 'even'
    } else {
        return "odd"
 }
}
console.log ( evenorodd ( 2 ) )


//Exercise: Draw a square

function square ( n ) {
    var str = "";
    for ( var i = 1; i <= n; i ++ ) {
        for ( var d = 1; d <= n; d ++ ) {
            str = str + "#"
        }
            str = str + "\n"
     } 
       return str;
}
     console.log ( square ( 4 ) )

//Exercise: Draw a right handed triangle

function triangle ( n ) { 
    var str = "" ;
    for ( var i = 0; i <= n;i ++ ) {
        for ( var j = 1;j < n;j ++ ) {
            str = str + "" ;
        }
            for ( var k = 1; k <= i; k ++ ) {
                str = str + "#" ;
            }
            console.log ( str )
            str = "";
    }

       triangle(2)


//Exercise: Draw an isosceles triangle

function isosceles(n){
    const midPoint = Math.floor((n*2-1)/2)
    for (row = 0;row < n;row ++ ){
        let level = '';
    for (col = 0; col < n * 2-1; col ++ ){
    if ( midPoint-row <= col && midPoint + row >= col){
         level += "#";
          } else {
         level += ''
        }
    }
    //console.log(level)

    }
}
      isosceles(4)

 //Exercise: find the longest string

 function longestwords(str) {
     let words = str.split('');
     let size = 0;
     let max = [''];
  for ( let i = 0;i < words.length;i ++ ) {
      if ( words[i].length >= size) {
          size = words[i].length;
          if ( max[max,length-1].length<words[i].length){
              max = []
              max.pushwords[i]
          } else {
              max = [...max,words[i]]
          }
        }
      return [...max];
  }
 //console.log(longestwords("the quick brown for ate my checkens"));
 //console.log(longestwords("once upon a time"));

 //Exercise: combine two lists/arrays

 let arr1 = [11, 22, 33];
 let arr2 = [1, 2, 3];
 let mixArray = [arr1,arr2];
 mixArray .push (
 Array1[0], Array2[0], Array1[1], Array2[1], Array1[2], Array2[2 [2] ] );
 //console.log( mixArray );


 //Exercise: Frame some text

 function frame ( arr ) {
function fill (str,length,chair){
    return str.length < length ? fill (str + char,length,char): str
}
let size = arr
map (str => {
    return str.length;

})
.reduce(a.b) = {
};
let line = fill ("",size + 4, "*");
arr = arr . map (element,size,"")+ "*";
 }
 arr.unshift (line);
 arr.push (line);
 return arr.join (n);
}
//console.log (frame(["Write","good","code","every","day"]));
};
