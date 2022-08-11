var btn=document.getElementById("button1");
btn.onclick=function(){
    var s1=Number(document.getElementById("ilk_sayi").value);
    var s2=Number(document.getElementById("ikinci_sayi").value);
    var sonuc;
    if ( s1 == null || s1 == "")
    {
        alert("Lütfen Birinci sayıyı giriniz.");
        return false;
        document.getElementById("sonuc").innerHTML="Birinci sayıyı giriniz"+sonuc;
    }
    else if (s1<s2 &&(document.getElementById("cikar").checked))
    {
        sonuc=s2-s1;
        alert("Birinci sayı ikinci sayıdan küçük olduğu için işlem ters çevrilip hesaplanacak.")
    }
    else if ( s2 == null || s2 == "")
    {
        alert("Lütfen ikinci sayıyı giriniz.");
    }
  
     else if(document.getElementById("topla").checked)
        {
            sonuc=s1+s2;
        }
    else if(document.getElementById("cikar").checked)
        {
            sonuc=s1-s2;
        }
    else if(document.getElementById("carp").checked)
        {
            sonuc=s1*s2;
        }
    else if(document.getElementById("bol").checked)
        {
            sonuc=s1/s2;
        }
    else
        {
            alert("Yapmak istediğiniz işlemi seçiniz.");
            sonuc=0
        }
    document.getElementById("sonuc").innerHTML="Sonuç : "+sonuc;
    
}
var btn=document.getElementById("button2");
btn.onclick=function(){
    document.getElementById("ilk_sayi").value="";
    document.getElementById("ikinci_sayi").value="";
    document.getElementById("topla").checked="";
    document.getElementById("cikar").checked="";
    document.getElementById("carp").checked="";
    document.getElementById("bol").checked="";
    document.getElementById("sonuc").innerHTML="";
}