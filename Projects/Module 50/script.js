let db = {};

const addToDb = item => {
    const storeData = localStorage.getItem('cheka-tracker')
    if (storeData) {
        db = JSON.parse(storeData)
    }
    if (item in db) {
        db[item] = db[item] + 1;
    } else {
        db[item] = 1;
    }
    localStorage.setItem('cheka-tracker', JSON.stringify(db))
}

const removeItem = (item) => {
    const storedTracker = localStorage.getItem('cheka-tracker')
    if (storedTracker) {
        const storedItem = JSON.parse(storedTracker)
        delete storedItem[item]
        localStorage.setItem('cheka-tracker', JSON.stringify(storedItem))
    }
}