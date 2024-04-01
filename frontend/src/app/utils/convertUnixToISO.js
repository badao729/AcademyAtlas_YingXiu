const convertUnixToISO = (unixTime) => {
    const date = new Date(unixTime * 1000);
    const iso8601Date = date.toISOString();
    return iso8601Date
}

export default convertUnixToISO