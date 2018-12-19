function SubmitForModel(){
    nameError = false;
    priceError = false;    
    productName = ko.observable("");
    productPrice = ko.observable("");
    uncorrectName = ko.pureComputed(function(){
        if(productName() == "Название" || productName().length <=2 ){
            nameError = true;
            return "Ошибка ввода!";
        }
        else{
            nameError = false;
            return "";
        }        
    });
    uncorrectPrice = ko.pureComputed(function(){
        if(OnlyNumCheck(productPrice())){
            priceError = true;
            return "Ошибка ввода!";
        }
        else{
            priceError = false;
            return "";
        }
    });
    /*inptPriceHandler = function(){
        var value = productPrice();
        var rep = /[-\.;":'a-zA-Zа-яА-Я]/;
        if (rep.test(value)) { 
            value = value.replace(rep, ''); 
            input.value = value; 
        }  
        //alert();
    };*/    
    submitHandler = function(){        
        if (nameError || priceError){
            alert("Ошибка ввода!!!");
        }
        else{
            return true;
        }
    };
}; 
ko.applyBindings(new SubmitForModel());

function OnlyNumCheck(text){
    var rep = /[-\;":'a-zA-Zа-яА-Я]/;
    if(rep.test(text)){
        return true;
    }
    else
        return false;
};