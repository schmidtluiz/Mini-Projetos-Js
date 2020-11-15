function verificar(){
    var data =new Date()
    var ano = data.getFullYear()
    var fano= document.getElementById('txtano')
    var res= document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value>ano){
        window.alert("ERRO")
    }else{
        var fsex=document.getElementsByName('radsex')
        var idade=ano- Number(fano.value)
        var genero =''
        var img= document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero='homem'
            if(idade>=0 && idade<=3){
                img.setAttribute('src','babymenino.jpg')
            }else if(idade<10){
                img.setAttribute('src','menino.jpg')
            }else if(idade<20){
                img.setAttribute('src','jovemhomem.jpg')
            }else if(idade<50){
                img.setAttribute('src','homem.jpg')
            }else{
                img.setAttribute('src','idoso.jpg')
            }
        }else{
            genero='mulher'
            if(idade>=0 && idade<=3){
                img.setAttribute('src','babymenina.jpg')
            }else if(idade<10){
                img.setAttribute('src','menina.jpg')
            }else if(idade<20){
                img.setAttribute('src','jovemmulher.jpg')
            }else if(idade<50){
                img.setAttribute('src','mulher.jpg')
            }else{
                img.setAttribute('src','idosa.jpg')
            }
        }
        res.style.textAlign='center'
        res.innerHTML=`Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}