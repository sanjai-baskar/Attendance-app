let present = 0;
let absent = 0;
let totpresent = document.getElementById("presenttotal")
let totabsent  = document.getElementById("absenttotal")
let btnpre1  =document.getElementById("pre1")
let btnabs1  =document.getElementById("ab1")
let btnpre2  =document.getElementById("pre2")
let btnabs2  =document.getElementById("ab2")
let btnpre3  =document.getElementById("pre3")
let btnabs3  =document.getElementById("ab3")
let btnpre4  =document.getElementById("pre4")
let btnabs4  =document.getElementById("ab4")
let btnpre5 =document.getElementById("pre5")
let btnabs5  =document.getElementById("ab5")
let btnpre6  =document.getElementById("pre6")
let btnabs6  =document.getElementById("ab6")
let btnpre7 =document.getElementById("pre7")
let btnabs7  =document.getElementById("ab7")
let btnpre8  =document.getElementById("pre8")
let btnabs8  =document.getElementById("ab8")
let btnpre9  =document.getElementById("pre9")
let btnabs9  =document.getElementById("ab9")
let btnpre10  =document.getElementById("pre10")
let btnabs10  =document.getElementById("ab10")
let btnpre11  =document.getElementById("pre11")
let btnabs11  =document.getElementById("ab11")
let totpresentnames= document.getElementById("prename")
let totabsentnames = document.getElementById("absname")
let rno64  = {
    fullname:"Midhun D "
} 
let rno65 ={
    fullname:"Mithun mail M"
}
let rno66 ={
    fullname:"Mukesh J "
}
let rno67 ={
    fullname:"Mukesh k"
}
let rno68 ={
    fullname:"Muthuganesh D"
}
let rno69 ={
    fullname:"Nabil Mohamed T"
}
let rno70 ={
    fullname:"Nagaraj P"
}
let rno71 ={
    fullname:"NandhaKumar S"
}
let rno72 ={
    fullname:"Nassem"
}
let rno73 ={
    fullname:"Navabharathi S"
}
let rno74 ={
    fullname:"Naveen"
}


let arrpresent = [];
let arrabsent =[];

 function present1(){ 
btnpre1.disabled=false
present++
btnpre1.disabled=true
btnabs1.disabled=true
totpresent.textContent= "present  :"+present
//btnpre1.id="prer"

let name1 = rno64.fullname
arrpresent.push(name1)

totpresentnames.textContent="present students"+" :"+ arrpresent 

}


function absent1() { 
btnabs1.disabled=false
absent++
btnabs1.disabled=true
btnpre1.disabled=true
totabsent.textContent="absent :" +absent
btnabs1.id="prer"

let name1 = rno64.fullname
arrabsent.push(name1)

totabsentnames.textContent="Absent students"+" :"+ arrabsent


}
function present2(){ 
    btnpre2.disabled=false
    present++
    btnpre2.disabled=true
    btnabs2.disabled=true
    totpresent.textContent= "present  :"+present
    btnpre2.id="prer"
    let name1 = rno65.fullname
arrpresent.push(name1)

totpresentnames.textContent="present students"+" :"+ arrpresent


    
}
        function absent2() { 
    btnabs2.disabled=false
    absent++
    btnabs2.disabled=true
    btnpre2.disabled=true
    totabsent.textContent="absent :" +absent
    btnabs2.id="prer"
    let name1 = rno65.fullname
arrabsent.push(name1)

totabsentnames.textContent="Absent students"+" :"+ arrabsent

    
    
    }
     
function present3(){ 
    btnpre3.disabled=false
    present++
    btnpre3.disabled=true
    btnabs3.disabled=true
    totpresent.textContent= "present  :"+present
    btnpre3.id="prer"
    let name1 = rno66.fullname
arrpresent.push(name1)

totpresentnames.textContent="present students"+" :"+ arrpresent


    
}
        function absent3() { 
    btnabs3.disabled=false
    absent++
    btnabs3.disabled=true
    btnpre3.disabled=true
    totabsent.textContent="absent :" +absent
    btnabs3.id="prer"
    let name1 = rno66.fullname
arrabsent.push(name1)

totabsentnames.textContent="Absent students"+" :"+ arrabsent

    
    
    }
     
function present4(){ 
    btnpre4.disabled=false
    present++
    btnpre4.disabled=true
    btnabs4.disabled=true
    totpresent.textContent= "present  :"+present
    btnpre4.id="prer"
    let name1 = rno67.fullname
    arrpresent.push(name1)
    
    totpresentnames.textContent="present students"+" :"+ arrpresent 
    
    
}
        function absent4() { 
    btnabs4.disabled=false
    absent++
    btnabs4.disabled=true
    btnpre4.disabled=true
    totabsent.textContent="absent :" +absent
    btnabs4.id="prer"

    let name1 = rno67.fullname
arrabsent.push(name1)

totabsentnames.textContent="Absent students"+" :"+ arrabsent

    
    }
     
function present5(){ 
    btnpre5.disabled=false
    present++
    btnpre5.disabled=true
    btnabs5.disabled=true
    totpresent.textContent= "present  :"+present
    btnpre5.id="prer"
    let name1 = rno68.fullname
    arrpresent.push(name1)
    
    totpresentnames.textContent="present students"+" :"+ arrpresent
    
    
}
        function absent5() { 
    btnabs5.disabled=false
    absent++
    btnabs5.disabled=true
    btnpre5.disabled=true
    totabsent.textContent="absent :" +absent
    btnabs5.id="prer"
    
    let name1 = rno68.fullname
arrabsent.push(name1)

totabsentnames.textContent="Absent students"+" :"+ arrabsent

    }
     
function present6(){ 
    btnpre6.disabled=false
    present++
    btnpre6.disabled=true
    btnabs6.disabled=true
    totpresent.textContent= "present  :"+present
    btnpre6.id="prer"
    let name1 = rno69.fullname
arrpresent.push(name1)

totpresentnames.textContent="present students"+" :"+ arrpresent


    
}
        function absent6() { 
    btnabs6.disabled=false
    absent++
    btnabs6.disabled=true
    btnpre6.disabled=true
    totabsent.textContent="absent :" +absent
    btnabs6.id="prer"
    let name1 = rno69.fullname
arrabsent.push(name1)

totabsentnames.textContent="Absent students"+" :"+ arrabsent

    
    
    }
     
function present7(){ 
    btnpre7.disabled=false
    present++
    btnpre7.disabled=true
    btnabs7.disabled=true
    totpresent.textContent= "present  :"+present
    btnpre7.id="prer"
    let name1 = rno70.fullname
arrpresent.push(name1)

totpresentnames.textContent="present students"+" :"+ arrpresent


    
}
        function absent7() { 
    btnabs7.disabled=false
    absent++
    btnabs7.disabled=true
    btnpre7.disabled=true
    totabsent.textContent="absent :" +absent
    btnabs7.id="prer"
    let name1 = rno70.fullname
arrabsent.push(name1)

totabsentnames.textContent="Absent students"+" :"+ arrabsent

    
    
    }
     
function present8(){ 
    btnpre8.disabled=false
    present++
    btnpre8.disabled=true
    btnabs8.disabled=true
    totpresent.textContent= "present  :"+present
    btnpre8.id="prer"
    let name1 = rno71.fullname
arrpresent.push(name1)

totpresentnames.textContent="present students"+" :"+ arrpresent


    
}
        function absent8() { 
    btnabs8.disabled=false
    absent++
    btnabs8.disabled=true
    btnpre8.disabled=true
    totabsent.textContent="absent :" +absent 
    btnabs8.id="prer"

    let name1 = rno71.fullname
arrabsent.push(name1)

totabsentnames.textContent="Absent students"+" :"+ arrabsent

    
    }
     
function present9(){ 
    btnpre9.disabled=false
    present++
    btnpre9.disabled=true
    btnabs9.disabled=true
    totpresent.textContent= "present  :"+present
    btnpre9.id="prer"
    let name1 = rno72.fullname
arrpresent.push(name1)

totpresentnames.textContent="present students"+" :"+ arrpresent


    
}
        function absent9() { 
    btnabs9.disabled=false
    absent++
    btnabs9.disabled=true
    btnpre9.disabled=true
    totabsent.textContent="absent :" +absent
    btnabs9.id="prer"
    let name1 = rno72.fullname
arrabsent.push(name1)

totabsentnames.textContent="Absent students"+" :"+ arrabsent

    
    
    }
     
function present10(){ 
    btnpre10.disabled=false
    present++
    btnpre10.disabled=true
    btnabs10.disabled=true
    totpresent.textContent= "present  :"+present
    btnpre10.id="prer"
    let name1 = rno73.fullname
arrpresent.push(name1)

totpresentnames.textContent="present students"+" :"+ arrpresent


    
}
        function absent10() { 
    btnabs10.disabled=false
    absent++
    btnabs10.disabled=true
    btnpre10.disabled=true
    totabsent.textContent="absent :" +absent
    btnabs10.id="prer"
    let name1 = rno73.fullname
arrabsent.push(name1)

totabsentnames.textContent="Absent students"+" :"+ arrabsent

    
    
    }
    function present11(){
        present++
        btnpre11.disabled=true
        btnabs11.disabled=true
        totpresent.textContent="Present count: "+present
        let name=rno74.fullname
        arrpresent.push(name)
        totpresentnames.textContent="Present Students: "+arrpresent
    }
    function absent11(){
        absent++
        btnabs11.disabled=true
        btnpre11.disabled=true
        totabsent.textContent="Absent Count: "+absent
        let name=rno74.fullname
        arrabsent.push(name)
        totabsentnames.textContent="Absent Students: "+arrabsent
    }
     
    
