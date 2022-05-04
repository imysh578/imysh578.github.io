import IMG1 from "../../../public/images/portfolio1.gif"
import IMG2 from "../../../public/images/portfolio1.jpg"
import IMG3 from "../../../public/images/portfolio1.jpg"

export interface dataType {
  id: number,
  image: string,
  title: string,
  github: string,
  demo: string,
}

const dataList: dataType[] = [
  {
    id:1,
    image: "https://user-images.githubusercontent.com/33863016/166650160-c70ede98-3bf7-4c28-b2ff-aa1009aab19d.gif",
    title: "Music Streaming Platform & ERC721 NFT Market/Auction",
    github: "https://github.com/enum30-BlockChain/Musit",
    demo: ""
  },
  {
    id:2,
    image: "https://user-images.githubusercontent.com/43943231/150467120-c7c488ec-0f2f-4ad6-bc0c-4544ba86a1cb.gif",
    title: "UTXO Blockchain Network",
    github: "https://github.com/BlockchainWeb3-0/SpiderCoin",
    demo: ""
  },
  {
    id:3,
    image: "https://user-images.githubusercontent.com/33863016/144080411-00589972-c892-4276-8d82-2728ff5ebbf6.gif",
    title: "Football Matching & Community Website",
    github: "https://github.com/imysh578/SoccerKick",
    demo: ""
  },
  {
    id:4,
    image: "https://user-images.githubusercontent.com/33863016/145716291-8b6b0cf7-07fd-44d3-8cfe-5480d659ee6c.gif",
    title: "Coin Asset Management & Information Provision Website",
    github: "https://github.com/imysh578/FrogTeam",
    demo: ""
  },
  {
    id:5,
    image: "https://user-images.githubusercontent.com/89692626/143542856-7d008fc9-d4bf-4808-8338-e09d3744500a.png",
    title: "Recommending famous restaurant",
    github: "https://github.com/imysh578/brainStructure",
    demo: ""
  },
]

export default dataList;