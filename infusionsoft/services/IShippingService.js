module.exports = IShippingService = require('typedef')

// THIS CODE WAS GENERATED BY AN AUTOMATED TOOL. Editing it is not recommended.
// For more information, see http://github.com/bvalosek/grunt-infusionsoft
// Generated on Wed Jan 08 2014 12:43:55 GMT-0600 (CST)

// ShippingService is used to manage products. You can add, update and find
// products in addition to managing follow up sequences, tags and action sets.
.interface('IShippingService') .define({

    // Returns all shipping options configured
    __xmlrpc__getAllShippingOptions: function(apiKey) {},

    // Returns the options and values of the flat rate shipping option provided
    __xmlrpc__getFlatRateShippingOption: function(apiKey, optionId) {},

    // Returns the options and values of the order total shipping option provided
    __xmlrpc__getOrderTotalShippingOption: function(apiKey, optionId) {},

    // Returns the options and values of the order total shipping ranges option
    // provided
    __xmlrpc__getOrderTotalShippingRanges: function(apiKey, optionId) {},

    // Returns the options and values of the product based shipping option provided
    __xmlrpc__getProductBasedShippingOption: function(apiKey, optionId) {},

    // Returns the options and values of the order quantity shipping option
    // provided
    __xmlrpc__getOrderQuantityShippingOption: function(apiKey, optionId) {},

    // Returns the options and values of the weight based shipping option provided
    __xmlrpc__getWeightBasedShippingOption: function(apiKey, optionId) {},

    // Returns the options and values of the ups shipping option provided
    __xmlrpc__getUpsShippingOption: function(apiKey, optionId) {}

});