
//j5===========================================================================================
let win=document.querySelector('.p');

let img=document.querySelector('.winner2');
let btnn=document.querySelector('.btnn');
let link=document.querySelector('a');
setTimeout(_=>{ img.style.width='350px';
  img.style.height='350px';},10); 
  setTimeout(_=>{ img.style.width='400px';
    img.style.height='400px';},500);
    let count1=document.querySelector('#content1');
    let count2=document.querySelector('#content2');
 //  if(sessionStorage.length>0){
//win.innerHTML=sessionStorage.value;}

      setTimeout(function (){
        win.innerHTML+=`${sessionStorage.value} is `},1000);
        setTimeout(function (){
          win.innerHTML+='wi'},1500);
          setTimeout(function (){
            win.innerHTML+='nn'},2000);
            setTimeout(function (){
              win.innerHTML+='er'},2500);
           
            setTimeout(function (){
              btnn.style.width='140px';
               btnn.style.height='60px';
               link.style.color='#d607a9';
              link.onmouseover= function (){ link.style.color='rgb(20, 1, 29)';}
              link.onmouseout= function (){ link.style.color='#d607a9';}

            },2500);
            //j4 x o===========================================================================================
         
            let title=document.querySelector('.title');
let titleinner=document.querySelector('span');
let turn='X';
let square=[];

    
    


function end(num1,num2,num3){
    title.innerHTML=`${square[num1]} winner`;
    document.getElementById('item'+num1).style.background='rgba(255, 8, 193, 0.719) ';
    document.getElementById('item'+num3).style.background='rgba(255, 8, 193, 0.719)';
    document.getElementById('item'+num2).style.background=' rgba(255, 8, 193, 0.719)';
  
    document.getElementById('item'+num1).onmouseout= function (){
      document.getElementById('item'+num1).style.background='rgba(255, 8, 193, 0.719)'; }
      document.getElementById('item'+num2).onmouseout= function (){
        document.getElementById('item'+num2).style.background='rgba(255, 8, 193, 0.719)'; }
        document.getElementById('item'+num3).onmouseout= function (){
          document.getElementById('item'+num3).style.background='rgba(255, 8, 193, 0.719)'; }

    let Clearr=setInterval(function(){title.innerHTML+='.'},1000);
   
    setTimeout(
      function(){

          if(square[num1]=='X'){
      
          
              count1.innerHTML++;
             sessionStorage.setItem('value',square[num1]);
          
                
              if(count1.innerHTML==5 ){
             
            setTimeout(_=>{  document.location="fff5_2.html";}
               ,1000);}
               
            }else if(square[num2]=='O'){
          
              count2.innerHTML++;
            sessionStorage.setItem('value',square[num1]);
              
              if(count2.innerHTML==5){
                  
                setTimeout(_=>{  document.location="fff5_2.html";}
                  ,1000);
              }
             
            }
           
           
      for(let i=1;i<10;i++){ square[i]=document.getElementById('item'+i).innerHTML='';
        document.getElementById('item'+i).style.background='rgb(20, 1, 29) ';
        document.getElementById('item'+i).style.boxShadow=' rgba(183, 84, 250, 0.288)';
        document.getElementById('item'+num1).onmouseout= function (){
          document.getElementById('item'+num1).style.background='rgb(20, 1, 29)'; }
          document.getElementById('item'+num2).onmouseout= function (){
            document.getElementById('item'+num2).style.background='rgb(20, 1, 29)'; }
            document.getElementById('item'+num3).onmouseout= function (){
              document.getElementById('item'+num3).style.background='rgb(20, 1, 29)'; }
      }
       title.innerHTML=`${titleinner.innerHTML} GAME`;
     titleinner.style.color='rgb(255, 8, 193)';
     clearInterval(Clearr);},4000);
     
    
   
 
       
    
     
        
     
    
}
function winnner(){
    for(let i=1;i<10;i++){
        square[i]=document.getElementById('item'+i).innerHTML;
    
    }



    if( square[1] == square[2] && square[2]== square[3] &&  square[1] !=''){   
      
        
      end(1,2,3);
    
     
       }
    else  if( square[4] == square[5] && square[5]== square[6] &&  square[5] !=''){   
        end(4,5,6);
       
        
          }
    else  if( square[7] == square[8] && square[8]== square[9] &&  square[9] !=''){    
        end(7,8,9);
      
       
         }




         else  if( square[1] ==square[4] && square[4]== square[7] &&  square[7] !=''){ 
            end(1,4,7);
          
           
           }
         else  if( square[2] ==square[5] && square[5]==square[8] &&  square[5] !=''){ 
            end(2,5,8);
         
           
           }
         else  if( square[3] ==square[6] && square[6]==square[9] &&  square[9] !=''){ 
            end(3,6,9);
         
           
           }



         else  if( square[1] ==square[5] && square[5]==square[9] &&  square[5]!=''){ 
            end(1,5,9);
            
           }
            else  if( square[3] ==square[5] && square[5]==square[7] &&  square[5] !=''){ 
                end(3,5,7);
               
              }}
            
            function draw(){
                let c=0;
            
           for(let i=1;i<10;i++){
                   
            if(square[i]!=''){

                c++;
            if(c===9){
            title.innerHTML=`.`;
            let Clearrr= setInterval(function(){ title.innerHTML+='.'},1000);
            setTimeout(function(){ for(let i=1;i<10;i++){ square[i]=document.getElementById('item'+i).innerHTML='';
              document.getElementById('item'+i).style.background='rgb(20, 1, 29) ';
              document.getElementById('item'+i).style.boxShadow=' rgba(183, 84, 250, 0.288)';}
              title.innerHTML=`${titleinner.innerHTML} GAME`;
     titleinner.style.color='rgb(255, 8, 193)';
     clearInterval(Clearrr);},4000);
            
             
            
           }}}}

                

           

function game(id){
    let element=document.getElementById(id);
    
    if(turn==='X' && element.innerHTML=='')
        {
        element.innerHTML='X';
       
        turn='O';
        title.innerHTML='O';
    }
    else if(turn==='O' && element.innerHTML==''){
        element.innerHTML='O';
        turn='X';
        title.innerHTML='X';
    }
    winnner();
   
    draw();

}
for(let i=1;i<10;i++){
  document.getElementById('item'+i).onmouseover= function (){
  document.getElementById('item'+i).style.background='rgba(255, 8, 193, 0.719)';
}
}

for(let i=1;i<10;i++){
  document.getElementById('item'+i).onmouseout= function (){
  document.getElementById('item'+i).style.background='rgb(20, 1, 29)';
}}


         