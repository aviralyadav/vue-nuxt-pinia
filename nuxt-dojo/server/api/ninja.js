export default defineEventHandler(async (event) => {
  // handle query params
//   const { name } = getQuery(event);

  // handle post data
//   const { age } = await readBody(event);

  //   api call with private key
  const { data } = await $fetch(
    "https://api.currencyapi.com/v3/latest?apikey=lHuhO2Amk528XDeYOgBaYYiYOmUwOdDHvqnqwrvo&currencies=EUR%2CUSD%2CCAD"
  );

  return data; //{ message: `Your name is ${name} ! you are ${age} years old` };
});
