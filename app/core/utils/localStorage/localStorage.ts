const customLocalStorage = {
  getItem(key: string) {
    // getting the data from localStorage using the key
    let result = JSON.parse(localStorage.getItem(key)!);
    if (result) {
      /*
            if data expireTime is less then current time
            means item has expired,
            in this case removing the item using the key
            and return the null.
        */
      if (result.expireTime <= Date.now()) {
        window.localStorage.removeItem(key);
        return null;
      }
      // else return the data.
      return result.data;
    }
    //if there is no data provided the key, return null.
    return null;
  },
  /*
            accepting the key, value and expiry time as a parameter
            default expiry time is 30 days in milliseconds.
        */
  setItem(key: string, value: any, expireTime?: number) {
    // Storing the value in object.
    let result: { data: any; expireTime?: number } = {
      data: value,
    };

    if (expireTime) {
      /*
            setting the expireTime currentTime + expiry Time 
            provided when method was called.
        */
      result.expireTime = Date.now() + expireTime;
    }
    window.localStorage.setItem(key, JSON.stringify(result));
  },

  getWithExpiry(key: string) {
    const itemStr = localStorage.getItem(key);
    // if the item doesn't exist, return null
    if (!itemStr) {
      return null;
    }
    const item = JSON.parse(itemStr);
    const now = new Date();
    // compare the expiry time of the item with the current time
    if (now.getTime() > item.expireTime) {
      // If the item is expired, delete the item from storage
      // and return null
      localStorage.removeItem(key);
      return null;
    }
    return item.data;
  },
  removeItem(key: string) {
    window.localStorage.removeItem(key);
  },
  clear() {
    window.localStorage.clear();
  },
};
export default customLocalStorage;
