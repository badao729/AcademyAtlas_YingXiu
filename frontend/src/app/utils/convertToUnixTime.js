const convertToUnixTime = (time) => {
    const date = new Date(time);
    // Convert to Unix time in milliseconds
    const unixTimeMilliseconds = date.getTime();
    // Convert to Unix time in seconds
    const unixTimeSeconds = Math.floor(unixTimeMilliseconds / 1000);
    return unixTimeSeconds
  }

  export default convertToUnixTime