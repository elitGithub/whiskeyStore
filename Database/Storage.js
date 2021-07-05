export class Storage {
    dbName = 'WhiskeyDB';
    storageKey = 'whiskeyStore';
    db = null;
    objectStore = null;
    DBOpenReq = null;

    constructor() {
        this.DBOpenReq.indexedDB.open(this.dbName, 1);
        this.DBOpenReq.addEventListener('error', (err) => {
            console.warn(err);
        });
        this.DBOpenReq.addEventListener('success', (ev => {
            this.db = ev.target.result;
        }));

        this.DBOpenReq.addEventListener('upgradeneeded', (ev => {
            this.db = ev.target.result;
            if (!this.db.objectStoreNames.contains(this.storageKey)) {
                this.objectStore = this.db.createObjectStore(this.storageKey, {
                    keyPath: 'id'
                });
            }
        }));
    }

    store(whiskey = {}) {
        let tx = this.makeTX(this.storageKey, 'readwrite');
        tx.oncomplete = (ev) => {
            // TODO: what do I want to do on success?
        };

        let store = tx.objectStore(this.storageKey)
        let request = store.add(whiskey);

        request.onsuccess = (ev) => {
            console.log('Successfully added an object');
        };
        request.onerror = (err) => {
            console.warn('error in request to add', err);
        };
    }

    findAll(storeKey) {}

    findOne(storeKey, id) {}

    makeTX(storeName, mode) {
        let tx = this.db.transaction(storeName, mode);
        tx.onerror = (err) => {
            console.warn(err);
        };

        return tx;
    }
}