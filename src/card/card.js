// 0. Get originKey
getOriginKey().then(originKey => {
    // 1. Create an instance of AdyenCheckout
    const checkout = new AdyenCheckout({
        environment: 'test',
        originKey: "pub.v2.7814658006340126.aHR0cDovL2xvY2FsaG9zdDozMDAw.DCeeOiTfpBwtKc7ieW0zvVHaedH7JKbmA1SwcRvvRxc" // Mandatory. originKey from Costumer Area
    });

    // 2. Create and mount the Component
	
	   const dropin = checkout
       .create('dropin', {
           paymentMethodsConfiguration: {
               card: { // Example optional configuration for cards
                   hasHolderName: true,
                   holderNameRequired: true,
                   enableStoreDetails: true,
                   name: 'Credit or debit card'
               },
               ...
           }
       })
       .mount('#dropin');
 

});
