const convertUnixToISO = (unixTime) => {
    const date = new Date(unixTime * 1000);
    // Convert the Date object to an ISO 8601 formatted string
    const iso8601Date = date.toISOString();
    return iso8601Date
}

export default convertUnixToISO