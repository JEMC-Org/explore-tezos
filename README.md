# [![ExploreTezosLogo](https://cdn.discordapp.com/attachments/927350967735836762/927368857885245570/ExploreTezosGitHubLogo.png "Explore Tezos Logo")](https://exploretezos.com/)

![Alt](https://repobeats.axiom.co/api/embed/c56ae5f680754998c8c0ffa143e409da7c8d711b.svg "Repobeats analytics image")

[![Netlify Status](https://api.netlify.com/api/v1/badges/2276d571-1763-4d61-a10a-aac751ad6fbf/deploy-status)](https://app.netlify.com/sites/amazing-pike-98af0e/deploys)

Explore Tezos is a website to make the Tezos ecosystem more accessible for everybody!

## Contributions

If you have something that we missed and you would like to contribute to the project, you can follow these steps to put up a pr with the new information.

1. Create a branch from main and name it the app that you are adding, or one of them to the website and your username. Example, `UserName-TempleWallet`
2. Fill out the JSON fields displayed here with the relevent information for each website. [Descriptions of each field below](#description-of-fields).

```
{
    name: "QuipuSwap",
    href: "https://quipuswap.com/swap",
    description:
      "QuipuSwap is an automated market-making (AMM) decentralized exchange (DEX) on the Tezos blockchain. QuipuSwap uses liquidity Pools the same way as UniSwap.",
    category: ["DeFi", "Featured"],
    parentCompany: "MadFish Solutions",
    imageSrc: "https://quipuswap.com/img/logo.87f215cb.png",
    redditUrl: "https://www.reddit.com/r/MadFishCommunity/",
    twitterUrl: "https://twitter.com/madfishofficial",
    discordUrl: "https://discord.com/invite/qFRZ8kVzkv",
    githubUrl: "https://github.com/madfish-solutions/quipuswap-webapp",
    telegramUrl: "https://t.me/MadFishCommunity",
    linkedinUrl: "https://www.linkedin.com/company/mad-fish-solutions/",
},
```

3. Place the newely created JSON objects in the [apps.js](/src/data/apps.js) file at the bottom of the list.
4. Create a new pull request against main.
5. That's it! We will review the pr and merge it. Cheers! 🎉

### Description of fields

- **name:** Name of the of item
- **href:** Link of the website or Twitter account. Generally whatever is the best way to learn more about the item.
- **description:** description of the item. This can be their mission statement. This can be found on their website or twitter etc.
- **imageSrc:** To add an image you must first paste the image on our discord images channel https://discord.gg/Uz8vCTbpN9 and link the image link from discord itself.
  We do this to prevent image links from dying and from hosting the images ourselfes.
- **parentCompany:** Add the parent company if there is one.

- **category:** Add the best category for the item.
- **Supported Categories:**

  - **Defi** Any Defi related applications
  - **Wallet** Wallets must be checked by one of the JEMC-org members. Main use has to be Tezos with beacon support
  - **NFT** General NFT tools/marketplaces **NOT** NFT projects. Tezzards is the exception.
  - **Gaming** Any Games on the Tezos blockchain
  - **Dev** Software development related projects, documentation or website that would be helpful for a developer on Tezos
  - **Tool** Tools in general such as blockchain explorers, faucets, tezos exclusive new sources etc
  - **Corporate** Corporations that have developed, utilized or participated on Tezos
  - **Open Source** Organizations on tezos that are open source
  - **Featured** Can only be added by one of the JEMC-org members

- **URL:** Try to add every URL of the project you can find.
- **Supported Links:**
  - **redditUrl:** Reddit.com
  - **twitterUrl:** Twitter.com
  - **discordUrl:** Discord.com
  - **githubUrl:** Github.com
  - **gitlabUrl:** Gitlab.com
  - **telegramUrl:** Telegram.org
  - **linkedinUrl:** Linkedin.com
  - **youtubeUrl:** Youtube.com
  - **mediumUrl:** Medium.com

## Running Locally

This website was built with react making it very easy to spin up a local instance of the app. Steps to get this up and running locally are as follows:

1. Clone the repository into your local env using `git clone git@github.com:JEMC-Org/explore-tezos.git`
2. Install yarn if you do not already have it by running `npm install --global yarn`
3. Open the project in a terminal window and run `yarn install` to install all the packages and dependencies
4. Run `yarn start` to start the dev server locally.
5. That's it! Cheers! 🎉
