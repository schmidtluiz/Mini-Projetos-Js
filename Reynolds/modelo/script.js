function reynolds(){
    let fden=document.getElementById('txtden')
    let den=Number(fden.value)
    let fvis=document.getElementById('txtvis')
    let vis=Number(fvis.value)
    let fdia=document.getElementById('txtdia')
    let dia=Number(fdia.value)
    let fvel=document.getElementById('txtvel')
    let vel=Number(fvel.value)
    let res=document.querySelector('div#res')
    let res1=document.querySelector('div#res1')
    
    let r=(den*vel*dia)/vis
    if(r<2100){
        res.innerHTML='Regime Laminar'
    }else if(r>=2100 && r<=4000){
        res.innerHTML ='Regime de Transição'
    }else{
        res.innerHTML='Regime Turbulento'
    }
    res1.innerHTML =`O número de Reynolds é ${r}`
    
}