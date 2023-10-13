const HashTable = require('./HashTable');
describe('HashTable', () => {
  let hashTable;
  beforeEach(() => {
    hashTable = new HashTable(10);
  });
  test('should set a key-value pair in the hash table', () => {
    hashTable.set_key('name', 'Aman');
    expect(hashTable.get_key('name')).toBe('Aman');
 });
 test('should get a value from the hash table using a key', () => {
    hashTable.set_key('name', 'Shubh');
    expect(hashTable.get_key('name')).toBe('Shubh');
 });
 test('should remove a key-value pair from the hash table', () => {
    hashTable.set_key('name', 'Rani');
    hashTable.set_key('name', 'joy');
    expect(hashTable.remove_key('name')).toBe(true);
    expect(hashTable.get_key('name')).toBeNull();
 });

});