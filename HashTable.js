
// HashTable.js
// class to create hastable with get, set and remove
class HashTable {
 constructor(size) {
    this.size = size;
    this.table = new Array(size);
 }

 // Hash function to generate a unique index for each key
 hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.size;
 }

 // Function to set a key-value pair in the hash table
 set_key(key, value) {
    const i = this.hash(key);
    if (!this.table[i]) {
      this.table[i] = [];
    }
    // Check if the key already exists, and if so, update the value
    for (let ij = 0; ij < this.table[i].length; ij++) {
        if (this.table[i][ij][0] === key) {
            this.table[i][ij][1] = value;
            console.log('key already exist')
            return;
        }
    }

    this.table[i].push([key, value]);
  }

 // Function to get a value from the hash table using a key
 get_key(key) {
    const index = this.hash(key);
    if (this.table[index]) {
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i][0] === key) {
          return this.table[index][i][1];
        }
      }
    }
    return null;
 }

 // Function to remove a key-value pair from the hash table
 remove_key(key) {
    const index = this.hash(key);
    if (this.table[index]) {
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i][0] === key) {
          this.table[index].splice(i, 1);
          return true;
        }
      }
    }
    return false;
 }

  // Function to check if a key exists in the hash table
 contains_key(key) {
    const index = this.hash(key);
    if (!this.table[index]) {
      return false;
    }
    for (let i = 0; i < this.table[index].length; i++) {
      if (this.table[index][i].key === key) {
        return true;
      }
    }
    return false;
  }
}

module.exports = HashTable;