# Twitter
## Next-JS, Sanity, Tailwind, Vercel (Full Stack)

This twitter web application is a full stack web app built with react as front-end and sanity powering the backend. This has been the most ambitious project yet. It was a lot of fun working with sanity but at the same time it was challengeing as well as they have a different syntax for querying and mutatiing data. This application allows only authenticated users to post pictures, tweets and comment. The authentication is backed by twitter and google.

Check out the [Live Demo](https://twitter-sanity-nine.vercel.app/))

## Skills Aquired

-   Sanity
-   Typescript (Passing onclick as props etc.)

### Problems Faced
- The backend was very challenging. As i had to build a schema which had relationship with other (One to manny). This was challengeing as sanity has a different way of createing schemas.
- The most time spent in the project was deployment. As i was constantly bombarded with errors from vercel. The first error was regarding the CORS error. This was solved by configuring the sanity server to allow read, write rules to domain name of the website.
- The second problem was with URL given to the backend. It was very intriguing to me that vercel does not allow domain name such as `/api/getComments` but only allows the absolute url `https://twitter-sanity-nine.vercel.app/api/getComments`.
- The final problem was with the env variables. I had configured the NEX_PUBLIC_BASE_URL=https://twitter-sanity-nine.vercel.app/ as so and was calling it the backend as `${process.env.NEXT_PUBLIC_BASE_URL}/api/getTweets` notice how the endpoint has two // just before api this was a problem as the server interpreted it as https://twitter-sanity-nine.vercel.app/undefined/api/getTweets. This error took me nearly half a day to solve. But after consistent efforts I was able to find it. 

### Conclusion
Sanity is an amazing platform to build full stack apps. It allows front end developers to create interesting projects. The CLI that sanity provides is very insightful on how data appears and has a feature to write query in it as well. In conclusion, it was an amazing experience.

### Resources 
- [CORS HEADERS](https://stackoverflow.com/questions/46785318/the-cors-header-access-control-allow-origin-is-missing)
- [Exposing Environment Variables to the Browser](https://nextjs.org/docs/basic-features/environment-variables)

### ScreenShots
<img width="1680" alt="Screen Shot 2022-11-13 at 3 36 48 PM" src="https://user-images.githubusercontent.com/76642519/201519737-46943db1-9b1f-450c-8d1f-5544e9208327.png">

<img width="1680" alt="Screen Shot 2022-11-13 at 3 37 21 PM" src="https://user-images.githubusercontent.com/76642519/201519771-409e881b-0394-428e-a10a-8a66c0b8aa1d.png">

<img width="1680" alt="Screen Shot 2022-11-13 at 3 37 55 PM" src="https://user-images.githubusercontent.com/76642519/201519785-cc48fe08-8202-46ad-a8ae-1549fe2c54b6.png">

<img width="1680" alt="Screen Shot 2022-11-13 at 3 38 13 PM" src="https://user-images.githubusercontent.com/76642519/201519812-6c17905d-f181-4cde-a4e5-f47d4862ee2e.png">







