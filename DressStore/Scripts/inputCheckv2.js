var viewModel = {
    productName : ko.observable(""),
    productPrice : ko.observable(""),    
    uncorrectPrice : ko.observable(""),  
    submitHandler : (function(){
        this.uncorrectPrice = CheckNum(this.productPrice());        
    })
};
viewModel.uncorrectName = ko.computed(function(){
    if(viewModel.productName().length < 3)
        return "Ошибка";
    else
        return "";    
});
//changes
function CheckNum (text){
    if(text.length < 3)
        return "ошибка";
    else
        return "";
};

ko.applyBindings(viewModel);