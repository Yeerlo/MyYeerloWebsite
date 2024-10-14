let apiURL = "https://api.yeerlo.com";

const queryResult = `
id,
image{
    url,
    dominantColor,
},
backgroundImage{
    url,
    dominantColor
},
name,
username,
bio,
country,
verifiedBadge,
phoneNumber,
socialMedia{
    social,
    url
},
totalFollowers,
totalFollowing,
totalSubscribers,
totalEvents`;

export const getCreator_ = async (creatorId) => {
  const query = {
    query: `query{
      getCreator(input: {id: "${creatorId}"}){
        ${queryResult}
      }
    }`
  };

  const result = await asyncRequest(apiURL, { method: 'POST', body: JSON.stringify(query) });
  
  return handleGQLResponse(result, "getCreator", true);
};

export const handleGQLResponse = (response, operation, silent = false) => {
  if (response?.error_msg || response?.errors?.length) {
    const message = response.error_msg || response.errors[0]?.extensions?.reason || response.errors[0]?.message;
    
    if (!silent) {
      showNotification({ message, success: false });
    }
    return null;
  }

  return response?.data[operation];
};

export const asyncRequest = async (url, options, json = true) => {
  return await fetch(url, options)
    .then((response) => (json ? response.json() : response.text()))
    .then((data) => {
      return data;
    })
    .catch((e) => {
      return { error_msg: `Server/Network Error: ${e.message}` };
    });
};
