sap.ui.define([
    "sap/ui/core/mvc/Controller","sap/ui/core/Fragment","../formatter/formatter"
],
function (Controller,Fragment,formatter) {
    "use strict";

    return Controller.extend("igi.projectigi.controller.View1", {
        formatter:formatter,
        onInit: function () {
            
        },
            onEdit:function(oEvent){
                var oContext = oEvent.getSource().getBindingContext('Amigo').getObject();
                var oPayLoad={
                    "ProductId": oContext.ProductId,
			       	"Name": oContext.Name,
					"Status": oContext.Status,
			        "Quantity": oContext.Quantity,
			    	"Price": oContext.Price
                };
                this.getView().setModel(new sap.ui.model.json.JSONModel({
                    "oPayLoad":oPayLoad}),"Amigo");
                var oView = this.getView();
                if(!this.byId("dialogId")){
                    Fragment.load({
                        id: oView.getId(),
                        name:"igi.projectigi.fragment.Fragment",
                        controller:this
                    }).then(function(oDialog){
                            oView.addDependent(oDialog);
                            oDialog.open();
                    });
                }else{
                    this.byId("dialogId").open();
                }
            },

            onCancel:function(){               
                    this.byId("dialogId").close();
            },
           
            onDelete:function(){
                sap.m.MessageToast.show("Delete Option is in progress");
            },
            onSave:function(){
                sap.m.MessageToast.show("The data is Saved Successfully");
            },
            onSuggest:function(){
                var searchFieldText= this.byId("searchFieldId").getValue();
                var oBinding=this.byId("tableId").getBinding("items");
                var oFilter = new sap.ui.model.Filter("Name",sap.ui.model.FilterOperator.Contains,searchFieldText);
                oBinding.filter(oFilter);
            },
            onSort:function(){
                var oBinding= this.byId("tableId").getBinding("items");
                var oSorter = new sap.ui.model.Sorter("Name",false);
                oBinding.sort(oSorter);
            },
            onView2:function(){
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                    oRouter.navTo("RouteView2");
            },
            onObject:function(oEvent){
                sap.m.MessageToast.show(""+oEvent.getSource().getTitle());
            },
           onBusyDialog:function(){
           var oBusyDialog=new sap.m.BusyDialog({
            showCancelButton:true,
            cancelButtonText:"CANCEL",
            title:"LOADING",
            text:"You are from BUSY DIALOG",
            customIcon:"https://img.icons8.com/?size=100&id=wLdd90QuQjGy&format=png&color=000000"    
           }).open();
           window.setTimeout(function(){
            
            oBusyDialog.close();
           },3000)

           }

    });
});
