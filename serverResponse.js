const serverResponse = {
    deposits: [
      {
        products: [
          {
            terms: [
              {
                rates: [
                  {
                    minBalance: 1000,
                    nominalRate: 7,
                    irreducibleBalance: 1000,
                  },
                ],
                maximumTerm: 91,
                minimumTerm: 91,
              },
            ],
            currency: {
              name: "Российский рубль",
              round: 2,
              alphaCode: "RUB",
              numericCode: 643,
            },
            maxProfitRate: 7.04,
          },
        ],
        maxAmount: null,
        periodUnit: "day",
        productName: "Вклад Первый",
        paymentSchedule: "m1",
        isAdditionAvailable: false,
        isProlongationEnable: true,
        isSubtractionAvailable: false,
        useInitialAmountMatrix: false,
        isCapitalizationAvailable: true,
        useIrreducibleBalanceMatrix: false,
      },
      {
        products: [
          {
            terms: [
              {
                rates: [
                  {
                    minBalance: 2500000,
                    nominalRate: 6.25,
                    irreducibleBalance: 2500000,
                  },
                  {
                    minBalance: 50000,
                    nominalRate: 6,
                    irreducibleBalance: 50000,
                  },
                  {
                    minBalance: 700000,
                    nominalRate: 6.1,
                    irreducibleBalance: 700000,
                  },
                ],
                maximumTerm: 91,
                minimumTerm: 91,
              },
            ],
            currency: {
              name: "Российский рубль",
              round: 2,
              alphaCode: "RUB",
              numericCode: 643,
            },
            maxProfitRate: 6.28,
          },
        ],
        maxAmount: null,
        periodUnit: "day",
        productName: "Управляемый",
        paymentSchedule: "m1",
        isAdditionAvailable: true,
        isProlongationEnable: false,
        isSubtractionAvailable: true,
        useInitialAmountMatrix: false,
        isCapitalizationAvailable: true,
        useIrreducibleBalanceMatrix: true,
      },
      {
        products: [
          {
            terms: [
              {
                rates: [
                  {
                    minBalance: 30000,
                    nominalRate: 6,
                    irreducibleBalance: 30000,
                  },
                ],
                maximumTerm: 548,
                minimumTerm: 548,
              },
            ],
            currency: {
              name: "Российский рубль",
              round: 2,
              alphaCode: "RUB",
              numericCode: 643,
            },
            maxProfitRate: 6.26,
          },
        ],
        maxAmount: null,
        periodUnit: "day",
        productName: "История успеха",
        paymentSchedule: "m1",
        isAdditionAvailable: false,
        isProlongationEnable: false,
        isSubtractionAvailable: false,
        useInitialAmountMatrix: false,
        isCapitalizationAvailable: true,
        useIrreducibleBalanceMatrix: false,
      },
      {
        products: [
          {
            terms: [
              {
                rates: [
                  {
                    minBalance: 1000,
                    nominalRate: 4.5,
                    irreducibleBalance: 1000,
                  },
                ],
                maximumTerm: 730,
                minimumTerm: 730,
              },
            ],
            currency: {
              name: "Российский рубль",
              round: 2,
              alphaCode: "RUB",
              numericCode: 643,
            },
            maxProfitRate: 4.7,
          },
        ],
        maxAmount: null,
        periodUnit: "day",
        productName: "Ваш пенсионный",
        paymentSchedule: "m1",
        isAdditionAvailable: true,
        isProlongationEnable: true,
        isSubtractionAvailable: true,
        useInitialAmountMatrix: false,
        isCapitalizationAvailable: true,
        useIrreducibleBalanceMatrix: false,
      },
      {
        rating: 1600,
        commCode: "$2o0",
        products: [
          {
            terms: [
              {
                rates: [
                  {
                    minBalance: 30000,
                    nominalRate: 2.95,
                    irreducibleBalance: 30000,
                  },
                  {
                    minBalance: 700000,
                    nominalRate: 3.15,
                    irreducibleBalance: 700000,
                  },
                ],
                maximumTerm: 180,
                minimumTerm: 91,
              },
              {
                rates: [
                  {
                    minBalance: 1000,
                    nominalRate: 2.9,
                    irreducibleBalance: 1000,
                  },
                  {
                    minBalance: 700000,
                    nominalRate: 3.2,
                    irreducibleBalance: 700000,
                  },
                ],
                maximumTerm: 365,
                minimumTerm: 181,
              },
              {
                rates: [
                  {
                    minBalance: 400000,
                    nominalRate: 3.15,
                    irreducibleBalance: 400000,
                  },
                  {
                    minBalance: 30000,
                    nominalRate: 3.05,
                    irreducibleBalance: 30000,
                  },
                ],
                maximumTerm: 730,
                minimumTerm: 548,
              },
            ],
            currency: {
              name: "Российский рубль",
              round: 2,
              alphaCode: "RUB",
              numericCode: 643,
            },
            maxProfitRate: 3.33,
          },
        ],
        maxAmount: null,
        periodUnit: "day",
        productName: "Большие возможности",
        paymentSchedule: "m1",
        isAdditionAvailable: true,
        isProlongationEnable: true,
        isSubtractionAvailable: true,
        useInitialAmountMatrix: false,
        isCapitalizationAvailable: true,
        useIrreducibleBalanceMatrix: true,
      },
    ],
  }

  module.exports = serverResponse