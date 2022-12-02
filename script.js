const reverseArray=(a)=> {
   
   //console.log(a.length);
   const myarry = a.length;

   let rword='';

   let result =[];


   for (let i = 0; i < myarry; i++) {
    
     // console.log(a[i]);
      rword+= a.pop();
    
    }
    console.log(rword);

 for (let j = 0; j < rword.length; j++) {
    

      result.push(Number(rword[j]));
      
    
    }
    console.log(result);
}
const arr = [2,3,4,5,6,7];


console.log(reverseArray(arr));