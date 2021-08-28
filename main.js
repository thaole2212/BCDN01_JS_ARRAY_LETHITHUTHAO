var numArray=[];
function addNum(){
 var num=parseFloat(document.getElementById("inputNum").value); 
numArray.push(num);
document.getElementById("txtThemSo").innerHTML=numArray;
}
document.getElementById("btnThemSo").onclick=addNum;

// Bài 1

function tinhTong(){
    var sum=0;
    for( var i=0;i<numArray.length;i++){
        if(numArray[i]>0){
            sum+=numArray[i];
        }
    }
    document.getElementById("txtTinhTong").innerHTML=sum;
}
document.getElementById("btnTinhTong").onclick=tinhTong;

//bài 2
function demSoDuong(){
    var count=0;
    var SoDuong=numArray.filter(function(x){
        return(x>0);
    });
    count=SoDuong.length;
    document.getElementById("txtSoDuong").innerHTML=count;
}
document.getElementById("btnSoDuong").onclick=demSoDuong;

//bài 3
function timMin(){
    var min=numArray[0];
    for( var i=0;i<numArray.length;i++){
        if(numArray[i]<min){
            min=numArray[i]
        }
    };
    document.getElementById("txtMin").innerHTML=min;
}
document.getElementById("btnMin").onclick=timMin;

//bài 4
function timMinPositive(){
    
    var soDuong=numArray.filter(function(x){
        return x>0 ;
    });
    console.log(soDuong);
    if(soDuong.length==0){
        document.getElementById("txtMinPositive").innerHTML="không có số dương nào";
    }else{
    var min=soDuong[0];
    for( var i=0;i<soDuong.length;i++){
        if(soDuong[i]<min){
            min=soDuong[i]
        }
    };
    document.getElementById("txtMinPositive").innerHTML=min;
}
}

document.getElementById("btnMinPositve").onclick=timMinPositive;

//bài 5
function SoChanCuoi(){
    var newnum=numArray.reverse();
    // var even=newnum[0];
   for( var i=0;i<newnum.length;i++){
    if(newnum[i]%2==0){
      
       document.getElementById("txtSoChanCuoi").innerHTML=newnum[i];
       break;
    }else{
        document.getElementById("txtSoChanCuoi").innerHTML="không có số chẵn trong mảng";
    }
   }
   
}
document.getElementById("btnSoChanCuoi").onclick=SoChanCuoi;
//bài 6
function ChangePosition(){
var i1=parseInt(document.getElementById("inputi1").value);
var i2=parseInt(document.getElementById("inputi2").value);
var tam=0;
tam=numArray[i1-1];
numArray[i1-1]=numArray[i2-1];
numArray[i2-1]=tam;
document.getElementById("txtDoiCho").innerHTML=numArray;
};
document.getElementById("btnDoiCho").onclick=ChangePosition;

//bài 7
function sapXepTang(){
    for(var i=0;i<numArray.length;i++){
        for(var j=0;j<numArray.length-1;j++){
            if(numArray[j]>numArray[j+1]){
                var temp=numArray[j];
                numArray[j]=numArray[j+1];
                numArray[j+1]=temp;

            }

        }
    }
document.getElementById("txtSort").innerHTML=numArray;
};
document.getElementById("btnSort").onclick=sapXepTang;
//bài 8
function Prime(){
    var prime=0;
    for(var i=0;i<numArray.length;i++){
        var a=true;
        if(numArray[i]<2){
            a=false;
        }else{
        for( var j=2;j<numArray[i];j++)
        if(numArray[i]%j==0){
            a=false;
            break;
        }
        }
        if(a==true){
        prime=numArray[i];
            break;
        }
    }
    document.getElementById("txtPrime").innerHTML=prime;

}
document.getElementById("btnPrime").onclick=Prime;

//bài 9

function CountInt(){
    count=0;
   for( var i=0;i<numArray.length;i++){
    if(Number.isInteger(numArray[i])){
       count++
    }
   }
   if(count==0){
    document.getElementById("txtCountInt").innerHTML="không có số nguyên nào";
   }else{
    document.getElementById("txtCountInt").innerHTML=count;
   }

}
document.getElementById("btnCountInt").onclick=CountInt;

//bài 10

function SoSanh(){
    countPositive=0;
    CountNegative=0;
   for( var i=0;i<numArray.length;i++){
    if(numArray[i]>0){
       countPositive++
    };
    if(numArray[i]<0){
        CountNegative++
     }
    }
   if(CountNegative>countPositive){
    document.getElementById("txtSoSanh").innerHTML="Số Dương ít hơn Số Âm";
   }else if(countPositive<countPositive){
    document.getElementById("txtSoSanh").innerHTML="Số Dương nhiều hơn số Âm";
   }else{
    document.getElementById("txtSoSanh").innerHTML="Số Dương bằng số Âm"; 
   }

}
document.getElementById("btnSoSanh").onclick=SoSanh;
