function tabuada(){
    let fnum=document.getElementById('txtnum')
    
    let tab=document.getElementById('seltab')
    if(fnum.value.length == 0){
        alert('Digite um número')
        
    }else{
        let num=Number(fnum.value)
        let c=0
        tab.innerHTML=''
        while(c<=10){
            let item=document.createElement('option')
            item.text=`${num} X ${c} = ${num*c}`
            item.value=`tab${c}`
            tab.appendChild(item)
            c++
        }
    }
    }
    


