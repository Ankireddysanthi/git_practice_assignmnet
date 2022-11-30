let str="sankar"
let bag="";
let N=6;
    
    for(let i=N-1; i>=0; i--){
        bag=bag+str;
    }
    if(bag==str){
      console.log("Yes");
  }
  else{
      console.log("No");
  }