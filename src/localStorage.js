function setStorage(key, value) {

    localStorage.setItem(key, JSON.stringify(value));
}

function getStorage(key) {

    const storedUserData = localStorage.getItem(key);

    if (storedUserData) {
        const userData = JSON.parse(storedUserData);
        return userData;
    } else {
        return;
    }

}

export { setStorage, getStorage }