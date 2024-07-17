import Image from "next/image";

export const trades = [
  {
    id: "fiat",
    value: [
      "fiat",
      <svg
        className="base:w-[0.69rem] w-[0.5rem]"
        key={1}
        xmlns="http://www.w3.org/2000/svg"
        width="0.69rem"
        height="0.56rem"
        viewBox="0 0 11 9"
        fill="none">
        <path
          d="M0.997733 3.04401H9.54812C9.726 3.04401 9.89031 2.94913 9.97919 2.79514C10.0681 2.64115 10.0681 2.45138 9.97919 2.29739C9.89031 2.14341 9.72599 2.04852 9.54812 2.04852H2.41645L3.79526 0.943472C3.91125 0.866367 3.98969 0.744152 4.01136 0.606485C4.03302 0.468828 3.99602 0.328393 3.90936 0.219296C3.82259 0.110193 3.69416 0.0424176 3.55517 0.032531C3.41618 0.0225317 3.2793 0.0714176 3.17796 0.167078L0.689239 2.15806C0.581692 2.24439 0.514696 2.37149 0.504363 2.50904C0.494141 2.64669 0.541361 2.78235 0.634909 2.8838C0.728459 2.98523 0.859736 3.04324 0.997733 3.04401Z"
          fill="currentColor"
        />
        <path
          d="M9.54812 5.03498H0.997738C0.819861 5.03498 0.655545 5.12986 0.566662 5.28385C0.477779 5.43784 0.477779 5.62761 0.566662 5.78159C0.655545 5.93558 0.819867 6.03047 0.997738 6.03047H8.12941L6.7506 7.13552C6.64294 7.2164 6.57261 7.3375 6.55572 7.47117C6.53895 7.60483 6.57694 7.73959 6.66116 7.8447C6.74537 7.94981 6.8687 8.01625 7.00281 8.02903C7.13691 8.04169 7.27035 7.99947 7.37279 7.91192L9.86151 5.92094C9.96962 5.83428 10.0367 5.70651 10.0466 5.56831C10.0565 5.43011 10.0083 5.294 9.91362 5.19279C9.81907 5.09157 9.68666 5.03442 9.54812 5.03498Z"
          fill="currentColor"
        />
      </svg>,
      "Fiat",
    ],
  },
  {
    id: "crypto",
    value: [
      "fiat",
      <svg
        className="md:w-[0.69rem] w-[0.5rem]"
        key={0}
        xmlns="http://www.w3.org/2000/svg"
        width="0.69rem"
        height="0.56rem"
        viewBox="0 0 11 9"
        fill="none">
        <path
          d="M0.997733 3.04401H9.54812C9.726 3.04401 9.89031 2.94913 9.97919 2.79514C10.0681 2.64115 10.0681 2.45138 9.97919 2.29739C9.89031 2.14341 9.72599 2.04852 9.54812 2.04852H2.41645L3.79526 0.943472C3.91125 0.866367 3.98969 0.744152 4.01136 0.606485C4.03302 0.468828 3.99602 0.328393 3.90936 0.219296C3.82259 0.110193 3.69416 0.0424176 3.55517 0.032531C3.41618 0.0225317 3.2793 0.0714176 3.17796 0.167078L0.689239 2.15806C0.581692 2.24439 0.514696 2.37149 0.504363 2.50904C0.494141 2.64669 0.541361 2.78235 0.634909 2.8838C0.728459 2.98523 0.859736 3.04324 0.997733 3.04401Z"
          fill="currentColor"
        />
        <path
          d="M9.54812 5.03498H0.997738C0.819861 5.03498 0.655545 5.12986 0.566662 5.28385C0.477779 5.43784 0.477779 5.62761 0.566662 5.78159C0.655545 5.93558 0.819867 6.03047 0.997738 6.03047H8.12941L6.7506 7.13552C6.64294 7.2164 6.57261 7.3375 6.55572 7.47117C6.53895 7.60483 6.57694 7.73959 6.66116 7.8447C6.74537 7.94981 6.8687 8.01625 7.00281 8.02903C7.13691 8.04169 7.27035 7.99947 7.37279 7.91192L9.86151 5.92094C9.96962 5.83428 10.0367 5.70651 10.0466 5.56831C10.0565 5.43011 10.0083 5.294 9.91362 5.19279C9.81907 5.09157 9.68666 5.03442 9.54812 5.03498Z"
          fill="currentColor"
        />
      </svg>,
      "Crypto",
    ],
    transaction: [
      {
        id: "buy"
      },
      {
        id: "sell"
      }
    ]
  },
];

export const currencyCrypto = [
  {
    id: "usdt",
    value: [
      <Image key={0} src="./assets/svgs/tether-usdt-logo.svg" alt="usdt" width={21} height={20} className="base:w-[1.5rem] base:h-[1.5rem] w-[1rem] h-[1.1rem]"/>,
    "Tether USDT"],
    name: "Tether",
    min: 10
  },
  {
    id: "btc",
    value: [
      <Image key={1} src="./assets/svgs/Bitcoin.svg" alt="usdt" width={21} height={20} className="base:w-[1.5rem] base:h-[1.5rem] w-[1rem] h-[1.1rem]"/>,
    "Bitcoin"],
    name: "Bitcoin",
    min: 0.0005
  },
  {
    id: "eth",
    value: [
      <Image key={2} src="./assets/svgs/Ethereum-icon.svg" alt="usdt" width={21} height={20} className="w-[1.5rem] base:h-[1.5rem] -ml-2"/>,
    "Ethereum"],
    name: "Ethereum",
    min: 0.01
  },
];

export const currencyFiat = [
  {
    id: "eur",
    value: "EUR",
    min: 10
  },
  {
    id: "ghc",
    value: "GHC",
    min: 500
  },
  {
    id: "ksh",
    value: "KSH",
    min: 500
  },
  {
    id: "ngn",
    value: "NGN",
    min: 5000
  },
  {
    id: "usd",
    value: "USD",
    min: 10
  },
  {
    id: "zar",
    value: "ZAR",
    min: 1000
  },
];

export const wallets = [
  {
    id: "wise",
    value: "wise",
    imgUrl: "./assets/svgs/wise.svg",
    imgHoverUrl: "./assets/svgs/wise-active.svg"
  },
  {
    id: "payoneer",
    value: "payoneer",
    imgUrl: "./assets/svgs/Payoneer.svg",
    imgHoverUrl: "./assets/svgs/Payoneer-active.svg"
  },
  {
    id: "paypal",
    value: "paypal",
    imgUrl: "./assets/svgs/Paypal.svg",
    imgHoverUrl: "./assets/svgs/Paypal-active.svg"
  },
  {
    id: "revolut",
    value: "revolut",
    imgUrl: "./assets/svgs/Revolut.svg",
    imgHoverUrl: "./assets/svgs/Revolut-active.svg"
  },
  {
    id: "strip",
    value: "strip",
    imgUrl: "./assets/svgs/Stripe.svg",
    imgHoverUrl: "./assets/svgs/Stripe-active.svg"
  },
  {
    id: "skrill",
    value: "skrill",
    imgUrl: "./assets/svgs/Skrill.svg",
    imgHoverUrl: "./assets/svgs/Skrill-active.svg"
  },
  {
    id: "venome",
    value: "venome",
  },
  {
    id: "cashapp",
    value: "cashapp",
  },
  {
    id: "zelle",
    value: "zelle",
  },
  {
    id: "neteller",
    value: "neteller",
  }
];

export const logos1 = [
  {
    id: "wise",
    value: "wise",
    imgUrl: "./assets/svgs/Wise-scroll.svg",
  },
  {
    id: "strip",
    value: "strip",
    imgUrl: "./assets/svgs/Stripe-scroll.svg",
  },
  {
    id: "paypal",
    value: "paypal",
    imgUrl: "./assets/svgs/Paypal-scroll.svg",
  },
  {
    id: "revolut",
    value: "revolut",
    imgUrl: "./assets/svgs/Revolut-scroll.svg",
  },
  {
    id: "wise",
    value: "wise",
    imgUrl: "./assets/svgs/Wise-scroll.svg",
  },
  {
    id: "strip",
    value: "strip",
    imgUrl: "./assets/svgs/Stripe-scroll.svg",
  },
  {
    id: "paypal",
    value: "paypal",
    imgUrl: "./assets/svgs/Paypal-scroll.svg",
  },
  {
    id: "revolut",
    value: "revolut",
    imgUrl: "./assets/svgs/Revolut-scroll.svg",
  },
];

export const logos2 = [
  {
    id: "venmo",
    value: "venmo",
    imgUrl: "./assets/svgs/Venmo.svg",
  },
  {
    id: "zelle",
    value: "zelle",
    imgUrl: "./assets/svgs/Zelle.svg",
  },
  {
    id: "neteller",
    value: "neteller",
    imgUrl: "./assets/svgs/Neteller.svg",
  },
  {
    id: "cashapp",
    value: "cashapp",
    imgUrl: "./assets/svgs/Cashapp.svg",
  },
  {
    id: "venmo",
    value: "venmo",
    imgUrl: "./assets/svgs/Venmo.svg",
  },
  {
    id: "zelle",
    value: "zelle",
    imgUrl: "./assets/svgs/Zelle.svg",
  },
  {
    id: "neteller",
    value: "neteller",
    imgUrl: "./assets/svgs/Neteller.svg",
  },
  {
    id: "cashapp",
    value: "cashapp",
    imgUrl: "./assets/svgs/Cashapp.svg",
  },
];

export const getStarted = [
  {
    id: 1,
    text: "Select the crypto, payment method and amount you wish to buy or sell.",
    imgUrl: "/assets/images/process-1.png",
  },
  {
    id: 2,
    text: "Choose an offer that best suits you from one of our reputable merchants.",
    imgUrl: "/assets/images/process-2.png",
  },
  {
    id: 3,
    text: "Sign up, verify your identity and add a payment method to begin trading.",
    imgUrl: "/assets/images/process-3.png",
  },
  {
    id: 4,
    text: "Make the payment using the right payment details and click “Transferred”.",
    imgUrl: "/assets/images/process-4.png",
  },
  {
    id: 5,
    text: "Merchant confirms your payment and releases crypto into your wallet.",
    imgUrl: "/assets/images/process-5.png",
  },
]

export const steriods = [
  {
    id: "Price Alerts",
    text: "Set price alerts to receive notifications when rate changes.",
    imgUrl: "./assets/svgs/notiification.svg"
  },
  {
    id: "Non-custodial Wallets",
    text: "Connect your web3 wallets to bridge funds to the Blockchain. ",
    imgUrl: "./assets/svgs/wallet.svg"
  },
  {
    id: "Preferred Merchant",
    text: "Add a merchant’s username to see their available offers.",
    imgUrl: "./assets/svgs/merchant.svg"
  },
  {
    id: "Share Offers",
    text: "Share your trade offers to friends to get more engagement.",
    imgUrl: "./assets/svgs/share.svg"
  },
]

export const testimonials = [
{
  id: 1,
  name: "Jane Cooper",
  title: "Freelance Writer",
  imgUrl: "/assets/images/user-1.png",
  subContent: "Best place I trade my funds so far ",
  content: "Its far less complicated than I’m used to and to be sincere, I love this platform. I feel much more comfortable making use of it. I am also looking to be a merchant here if I get accepted."
},
{
  id: 2,
  name: "Robert Jackson",
  title: "Freelance Designer",
  imgUrl: "/assets/images/user-2.png",
  subContent: "User interface was smooth",
  content: "User interface was smooth. Dialog was easy to follow. Overall, wonderful experience. I would definitely recommend this to anyone new or experienced."
},
{
  id: 3,
  name: "Esther Miles",
  title: "Freelance Designer",
  imgUrl: "/assets/images/user-3.png",
  subContent: "A wide variety of payment methods",
  content: "I love and use Barta alot because you can trade and buy with many payments! In addition to that, I never have a bad experience from any merchant trying to cheat me."
},
{
  id: 4,
  name: "Michael Fox",
  title: "Freelance Designer",
  imgUrl: "./assets/svgs/testimonial-4.svg",
  subContent: "Barta is very easy to use and I make extra income with it",
  content: "Great app. Useful app for exchange of cryptocurrencies and most importantly; my salary which I receive from my international clients. I hope to help to build a community of trustful traders on Barta and make an extra living sharing my trade offers on my social media"
},
{
  id: 5,
  name: "Cameron Williamson",
  title: "Merchant",
  imgUrl: "/assets/images/user-5.png",
  subContent: "Good intuitive user interface and safe",
  content: "Good intuitive user interface and safe trades. Big up yourselves from Jamaica!"
},
{
  id: 6,
  name: "Seza Ergenc",
  title: "International Contractor",
  imgUrl: "/assets/images/user-6.png",
  subContent: "Best place I trade my funds so far ",
  content: "Its far less complicated than I’m used to and to be sincere, I love this platform. I feel much more comfortable making use of it. I am also looking to be a merchant here if I get accepted."
},
{
  id: 7,
  name: "Jerome Bell",
  title: "Web Developer",
  imgUrl: "/assets/images/user-7.png",
  subContent: "User interface was smooth.",
  content: "User interface was smooth. Dialog was easy to follow. Overall, wonderful experience. I would definitely recommend this to anyone new or experienced."
},
{
  id: 8,
  name: "Devon Lane",
  title: "UX Writer",
  imgUrl: "/assets/images/user-8.png",
  subContent: "Barta is very easy to use and I make extra income with it",
  content: "Great app. Useful app for exchange of cryptocurrencies and most importantly; my salary which I receive from my international clients. I hope to help to build a community of trustful traders on Barta and make an extra living sharing my trade offers on my social media"
},
]

// faq section
export const tradeFaqs = [
  {
    id: 1,
    question: "What is P2P exchange?",
    answer: "Peer-to-peer, or P2P, exchanges are systems that let users transact with one another directly to buy and sell cryptocurrencies for fiat money. Find out more about P2P Trading and how a local cryptocurrency exchange operates.",
  },
  {
    id: 2,
    question: "How do I buy Crypto with fiat on Barta?",
    answer: "After you sign up, complete your identity verification and add your preferred payment method, you are ready to buy crypto on Barta. First, choose from all the available offers in the marketplace. Second, place an order to buy your crypto, and pay the seller based on the preferred payment methods. Lastly, get your crypto from the seller after you complete the fiat transaction and confirm your payment.",
  },
  {
    id: 3,
    question: "How do I buy Crypto with fiat on Barta?",
    answer: "After you sign up, complete your identity verification and add your preferred payment method, you are ready to buy crypto on Barta. First, choose from all the available offers in the marketplace. Second, place an order to buy your crypto, and pay the seller based on the preferred payment methods. Lastly, get your crypto from the seller after you complete the fiat transaction and confirm your payment.",
  },
  {
    id: 4,
    question: "How do I convert foreign currency to local currency?",
    answer: "You will need to use a crypto as a bridge between the foreign currency and the local currency. Most preferred crypto used is USDT because of its stable nature. After signing in, add the payment method with which you want to convert from and convert to. Search for available buy offers with the desired amount and the crypto you want to use as a bridge. Turn on the “Include offers with local currency conversions” button. Then choose an offer, place an order and complete the payment. After the merchant confirms your payment and releases the crypto, you will see a pop up to sell same crypto you received for your local fiat currency.",
  },
  {
    id: 5,
    question: "Which cryptocurrencies can you trade P2P with?",
    answer: "There are only three cryptocurrencies that are available to trade with. They are Tether (USDT), Bitcoin (BTC) and Ethereum (ETH).",
  },
  {
    id: 6,
    question: "How do I protect myself against fraud?",
    answer: "We have a holding mechanism for cryptocurrency funds that are involved in any pending transaction as one of the many safeguards on Barta. By adding an additional layer of trust, this mechanism guards against theft and scams and stops dishonest people from taking your money or cryptocurrency without finishing their end of the bargain.",
  },
]

export const merchantFaqs = [
  {
    id: 1,
    question: "How do I become a merchant on Barta?",
    answer: "To become a merchant on Barta, you need to sign up and complete your identity verification. Once verified, navigate to the 'Become a Merchant' section and follow the instructions to submit your application. After approval, you can start listing your offers and trading with other users.",
  },
  {
    id: 2,
    question: "What are the benefits of being a merchant on Barta?",
    answer: "As a merchant on Barta, you enjoy benefits such as higher trade limits, lower transaction fees, priority customer support, and the ability to create custom trade offers. Merchants also gain access to a larger pool of potential buyers and sellers, enhancing their trading opportunities.",
  },
  {
    id: 3,
    question: "How do I list an offer as a merchant?",
    answer: "To list an offer, go to the 'Create Offer' section in your merchant dashboard. Select the cryptocurrency you want to trade, set your price and trade limits, choose your preferred payment methods, and write a brief description of your offer. Once all details are filled in, click 'Publish' to make your offer live on the marketplace.",
  },
  {
    id: 4,
    question: "How can I ensure my trades are secure?",
    answer: "Barta offers several security measures to protect your trades. Use the escrow service to hold cryptocurrency until the fiat transaction is confirmed. Always verify the identity of your trading partner and use secure communication channels provided by Barta. Additionally, enable two-factor authentication (2FA) on your account for added security.",
  },
  {
    id: 5,
    question: "What should I do if a trade goes wrong?",
    answer: "If a trade goes wrong, you can open a dispute through the Barta platform. Provide all necessary details and evidence of the transaction. Barta's support team will review the case and mediate between you and the other party to reach a resolution. Remember to communicate clearly and promptly with the support team during the dispute process.",
  },
  {
    id: 6,
    question: "How do I set competitive prices for my offers?",
    answer: "To set competitive prices, regularly monitor the market rates for the cryptocurrencies you are trading. Consider using dynamic pricing tools that adjust your offers based on market fluctuations. Additionally, review the prices set by other merchants on Barta to ensure your rates are attractive to potential buyers and sellers.",
  },
];

export const socials = [
  {
    id: "twitter",
    url: "http://www.twitter.com",
    imgUrl: "./assets/svgs/twitter.svg",
    imgHoverUrl: "./assets/svgs/twitter-hover.svg"
  },
  {
    id: "linkedin",
    url: "http://www.linkedin.com",
    imgUrl: "./assets/svgs/linkedin.svg",
    imgHoverUrl: "./assets/svgs/linkedin-hover.svg"
  },
  {
    id: "telegram",
    url: "http://www.telegram.com",
    imgUrl: "./assets/svgs/telegram.svg",
    imgHoverUrl: "./assets/svgs/telegram-hover.svg"
  },
]
