sap.ui.define([],function(){
    "use strict";
    return{
        onReplace:function(Quantity)
        {
            var Quantity = parseInt(Quantity);
            if(0<=Quantity && Quantity<=10)
                return "Success";
            else if(10<=Quantity && Quantity<=20)
                return "Error";
            else 
                return "Warning";
            
        },

        onChange:function(Status){
            if(Status==="Available")
                return "Success";
            else
                return "Error";

            

        }
        
                       
        
    }
});