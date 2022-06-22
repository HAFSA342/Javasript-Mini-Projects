function calculate(){
    var a=parseInt(document.getElementById("subj1").value);
    var b=parseInt(document.getElementById('subj2').value);
    var c=parseInt(document.getElementById('subj3').value);
    var d=parseInt(document.getElementById('subj4').value);
    var e=parseInt(document.getElementById('subj5').value);
    var f=parseInt(document.getElementById('subj6').value);

    if (a>100 || b>100 || c>100 || d>100 || e>100 || f>100){
        alert("Please Enter Correct Value");
    }
    else{
        var obtain = a+b+c+d+e+f;
        document.getElementById("obtain").innerHTML=obtain;
        var per = obtain/600*100;
        document.getElementById("per").innerHTML=per;
        if(a>40 && b>40 && c>40 && d>40 && e>40 && f>40){
            document.getElementById("remarks").innerHTML="<span style='color:#292'>Pass</span>";
        }
        else{
            document.getElementById("remarks").innerHTML="<span style='color:red'>Fail</span>";
        }
        if (obtain>=85){
            document.getElementById("grade").textContent="A+";
        }
        else if (obtain>=75){
            document.getElementById("grade").textContent="A";
        }
        else if (obtain>=65){
            document.getElementById("grade").textContent="B";
        }
        else if (obtain>=55){
            document.getElementById("grade").textContent="C";
        }
        else if (obtain>=45){
            document.getElementById("grade").textContent="D";
        }
        else {
            document.getElementById("grade").textContent="E";
        }
    }
    return false;
}