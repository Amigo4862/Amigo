sap.ui.define([
    "sap/ui/core/mvc/Controller","../formatter/formatter"
],
function (Controller,formatter) {
    "use strict";

    return Controller.extend("igi.projectigi.controller.View2", {
        formatter:formatter,
        onInit: function () {
            
        },
        onNavTo:function(){
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("RouteView1");
        },
        onSet:function(){
            var oModel=new sap.ui.model.json.JSONModel();
            oModel.setData(
                {"Name":"Kalyan","sex":"Male"            },
                {"Name":"Haji","sex":"Male"            },
                {"Name":"Vikas","sex":"Male"            }
            );
            this.getView().setModel(oModel);
        },
        onGet:function(){
            console.log(this.getView().getModel());
        }

    });
});
