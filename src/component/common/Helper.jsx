import { FaGifts, FaWallet } from "react-icons/fa";
import card1 from "../../assets/img/card1.png";
import card2 from "../../assets/img/card2.png";
import card3 from "../../assets/img/card3.png";
import card4 from "../../assets/img/card4.png";
import card5 from "../../assets/img/card5.png";
import card6 from "../../assets/img/card6.png";
import card7 from "../../assets/img/card7.png";
import card8 from "../../assets/img/card8.png";
import card9 from "../../assets/img/card9.png";
import herogirl1 from "../../assets/img/herogirl1.png";
import herogirl2 from "../../assets/img/herogirl2.png";
import herogirl3 from "../../assets/img/herogirl3.png";
import { SiHiveBlockchain } from "react-icons/si";
import { GiCardExchange } from "react-icons/gi";

export const navlink = [
  { name: "Explore", href: "#explore" },
  { name: "Passport", href: "#passport" },
  { name: "Profile", href: "#profile" },
  { name: "Docs", href: "#docs" },
];
export const nftItems = [
  {
    title: "Cosmic Serenity III 🌈",
    price: "25 MATIC",
    image: card1,
    chain: "Polygon",
  },
  {
    title: "Bera N Breeze ❄️",
    price: "1 BERA",
    image: card2,
    chain: "Berachain",
  },
  {
    title: "My Story 🦋",
    price: "0.05 IP",
    image: card3,
    chain: "Taiko",
  },
  {
    title: "Story Iliad ✨",
    price: "0.1 IP",
    image: card4,
    chain: "Taiko",
  },
  {
    title: "Butterfly on ZORA 🦋",
    price: "0 ETH",
    image: card5,
    chain: "Superchain",
  },
  {
    title: "Bera Market 📄",
    price: "1 BERA",
    image: card6,
    chain: "Berachain",
  },
  {
    title: "Cosmic Serenity II 🌈",
    price: "25 MATIC",
    image: card7,
    chain: "Polygon",
  },
  {
    title: "Morkie Zero",
    price: "10 MATIC",
    image: card8,
    chain: "Polygon",
  },
  {
    title: "Bera Farm 🧠",
    price: "0.1 BERA",
    image: card9,
    chain: "Berachain",
  },
];

export const steps = [
  {
    icon: <FaWallet />,
    title: "Set up your wallet",
    description:
      "Once you've set up your wallet of choice, connect it by clicking the wallet icon easily.",
  },
  {
    icon: <SiHiveBlockchain />,
    title: "Choose Your NFT",
    description:
      'Check collections and click "Mint" to mint an NFT. There are multiple NFTs to mint.',
  },
  {
    icon: <GiCardExchange />,
    title: "Add Your NFT",
    description:
      "You can import your NFT into your wallet. Collect the contract address and token ID.",
  },
  {
    icon: <FaGifts />,
    title: "Earn Rewards",
    description:
      "Most of the NFTs come with exclusive benefits. You can earn extra rewards for minting.",
  },
];
export const cards = [
  {
    img: herogirl1,
    title: "Cosmic Serenity III",
    price: "25 Matic",
  },
  {
    img: herogirl2,
    title: "Lunar Dreamer",
    price: "30 Matic",
  },
  {
    img: herogirl3,
    title: "Butterfly Realm",
    price: "28 Matic",
  },
];
