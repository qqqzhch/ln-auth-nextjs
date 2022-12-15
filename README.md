# Bitcoin Lightning user  test case
use  [lnurl](https://www.npmjs.com/package/lnurl)  [Polar](https://lightningpolar.com/)   [alby](https://getalby.com/)  nodejs and next.js

# ln-auth-nextjs
An LNURL-auth and NextJS app that demonstrates anonymous authentication with LNURL
# lnurl and btn


with  lnurl back data
`
let lnData ={
	"encoded": "lnurl1dp68gup69uhkcmmrv9kxsmmnwsar2vpsxghkzurf9a6hxetj9akxuatjdslhgct884kx7emfdcnxkvfav3jrqvej8qexydtrv5envetrvsengdtxvverjd3cvgekvdfcvv6xzv35vsenvdrzv5mxxvr9vv6nzd3evsmnzv3hxa3rycehx9jkxwq6uke5c",
	"secret": "dd03282b5ce36ecd345fc2968b3f58c4a24d364be6c0ec5169d71277b2c71ec8",
	"url": "http://localhost:5002/api/user/lnurl?tag=login&k1=dd03282b5ce36ecd345fc2968b3f58c4a24d364be6c0ec5169d71277b2c71ec8"
}
`
## webln
`
if (!window.webln) { return false; } // fallback to whatever you want to do, e.g. show a lnurl-auth QR code
    return window.webln.enable().then(() => {
      console.log(lnData)
      return window.webln.lnurl(lnData.encoded);
    });
`
## html btn
`
<a href={"lightning:"+lnData.encoded}><QR /></a>
`


## Intro
This codebase demonstrates anonymous authentication via LNURL-Auth. A specification built on the **Lightning Network**

Technologies used

* NextJS
* NodeJS
* LND
* LNURL
* Socket.io
* Postgres

## Installation
Fork (optional) and clone repo

```
git clone https://github.com/jeezman/ln-auth-nextjs.git && cd ln-auth-nextjs
```

## Client app setup 
Once you have downloaded or cloned this repository, run `yarn install` in the client directory

Create a `.env` file updated with values in `.env.sample` file

```
cd client
      
yarn install
```

To display the client application run

```
yarn run dev
```
   
## Server setup
Once you have downloaded or cloned this repository, run `npm install`in the server directory.

```
cd server
      
npm install
```

Create a `.env` file updated with values in `.env.sample` file

Run the web server with the following command

```
npm run start
```

You should see the following output on your command line
```
Server Running here 👉 https://localhost:5002
```

# Blog Post
The blog article for this repo can be found on [Medium](https://medium.com/@tobiadeyemi/d2a023309b81)
