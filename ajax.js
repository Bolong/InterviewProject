function ajax(url, fnSucc, fnFaild){
    //1.create object
    var oAjax = null;
    if(window.XMLHttpRequest){
        oAjax = new XMLHttpRequest();
    }else{
        oAjax = new ActiveXObject("Microsoft.XMLHTTP");
    }
      
    //2.connect to the specific website  
    oAjax.open('GET', url, true);   //open(method, url, asynchronous true/false)
      
    //3.send request  
    oAjax.send();
      
    //4.receive return
    oAjax.onreadystatechange = function(){  //OnReadyStateChange Event
        if(oAjax.readyState == 4){  //4 for completed
            if(oAjax.status == 200){    //200 for successed
                fnSucc(oAjax.responseText) 
            }else{
                if(fnFaild){
                    fnFaild();
                }
            }
        }
    };
}
