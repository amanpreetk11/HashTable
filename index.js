// import require
const HashTable = require('./HashTable');
// define constants
const hashTable = new HashTable(10);

// Set a key-value pair in the hash table
hashTable.set_key('name', 'Aman');
// hashTable.set_key('name', 'Aman');
// Get the value from the hash table using the key
const name = hashTable.get_key('name');

//output to console
console.log(`from hashtable ${name}`);  