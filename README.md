# DiscordLogin

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


## Setting up your local environment

The app needs you to provide some secrets as a local `.env.local` file. 

You'll need an etherscan API key, which you can get from [here](https://docs.etherscan.io/getting-started/viewing-api-usage-statistics)

Set it up as follows
```
NEXT_PUBLIC_ETHERSCAN_API_KEY=<< enter the key here >>
```

Install the requirements from the `package.json` file with 
```
npm install 
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Setting up the Docker image

Docker image dependencies are defined in the `Dockerfile` 
Dependencies and trigger is defined in `docker-compose.yaml` file

To build the image, run
```buildoutcfg
./build.sh
```
This will create the base image and start the container for you 

