sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], (Controller, JSONModel) => {
    "use strict";

    return Controller.extend("com.demo.productuiapp.controller.ProductDetails", {
        onInit() {
            //File path of JSON File
            let jsonFilePath = sap.ui.require.toUrl("com/demo/productuiapp/model/products.json");
            //JSON Model Creation
            let oJSONModel = new JSONModel(jsonFilePath);
            //Setting Model to View
            this.getView().setModel(oJSONModel, "ProductModel");

        }
    });
});