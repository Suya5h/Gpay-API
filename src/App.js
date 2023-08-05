import logo from "./logo.svg";
import "./App.css";
import GooglePay from "@google-pay/button-react";
import React from "react";

function App() {
  return (
    <div className="App">
      <h1>
        <img src={logo} className="App-logo" alt="logo" /> Gpay React
        Integration
      </h1>
      <hr />
      <GooglePay
        environment="TEST"
        paymentRequest={{
          apiVersion: 2,
          apiVersionMinor: 0,
          allowedPaymentMethods: [
            {
              type: "CARD",
              parameters: {
                allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                allowedCardNetworks: ["MASTERCARD", "VISA", "DISCOVER"],
              },
              tokenizationSpecification: {
                type: "PAYMENT_GATEWAY",
                parameters: {
                  gateway: "example",
                  gatewayMerchantID: "exampleGatewayMerchantID",
                },
              },
            },
          ],
          merchantInfo: {
            merchantId: "511151115111",
            merchantname: "Unknown",
          },
          transactionInfo: {
            totalPriceStatus: "FINAL",
            totalPriceLabel: "TOTAL",
            totalPrice: "1",
            currencyCode: "INR",
            countryCode: "India",
          },
          shippingAddressRequired: true,
          callbackIntents: ["PAYMENT_AUTHORIZATION"],
        }}
        onLoadPaymentData={(paymentRequest) => {
          console.log("Success", paymentRequest);
        }}
      />
    </div>
  );
}

export default App;
