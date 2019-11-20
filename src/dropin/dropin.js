// 0. Get originKey
getOriginKey().then(originKey => {
    getPaymentMethods().then(paymentMethodsResponse => {
        // 1. Create an instance of AdyenCheckout
        const checkout = new AdyenCheckout({
            environment: 'test',
            originKey: 'pub.v2.7814658006340126.aHR0cDovL2xvY2FsaG9zdDozMDAw.DCeeOiTfpBwtKc7ieW0zvVHaedH7JKbmA1SwcRvvRxc', // Mandatory. originKey from Costumer Area
            paymentMethodsResponse
            //removePaymentMethods: ['paysafecard', 'c_cash']
        });

        // 2. Create and mount the Component
        const dropin = checkout
            .create('dropin', {
                // Events
                onSelect: activeComponent => {
                   // updateStateContainer(activeComponent.data); // Demo purposes only
                },
                onChange: state => {
                    //updateStateContainer(state); // Demo purposes only
                },
                onSubmit: (state, component) => {
                    // state.data;	
                    // state.isValid;
                    makePayment(state.data);
                }
            })
            .mount('#dropin-container');
    });
});
