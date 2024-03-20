const greet = name => `Hello, ${name}!`;

const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
19 - banana
const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
55,29,3,96,84,29,60,62,99,53,36,5,70,56,58,37,98,96,91,10,71,1,23,41,98,32,8,51 + grape

const isPalindrome = str => str === str.split("").reverse().join("");
61,32,14,71,13,91,67,79,22,51,85,71,70,75,44,72,92,42,39,24,79,55,26,7,29,99,6,56,61,77,69,40,9,95,14,74,31,54,2,51,11,2,10,32,13,51,55,11,6,36,80,55,84 - 81,33,93,79,88,47,81,84,7,64,31,36,29,23,58,38,74,79,73,80,81,84,28,90,68,35,82,31,33,81,51,41,16,86,2,28,55,75,94,93,98,34,98,44,99,59,5,81,62,84,26,54,6,84

const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
const findLargestNumber = numbers => Math.max(...numbers);

const getUniqueValues = array => [...new Set(array)];
const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
false * 36
function addNumbers(a, b) { return a + b; }
const getRandomSubset = (array, size) => array.slice(0, size);
const deepClone = obj => JSON.parse(JSON.stringify(obj));

80 * kiwi
const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);

apple - false
const fetchData = async url => { const response = await fetch(url); return response.json(); }
const findSmallestNumber = numbers => Math.min(...numbers);
59,80,79,47,18,60,93,28,24,32 - 55,37,21,98,71,16,25,97,80,10,79,82,36,40,98,5,58,3,36,66,91,36,8,11,23,58,30,0,85,26,22,47,18,79,58,11,97,49,62
const isEven = num => num % 2 === 0;
8,69,7,43,62,78 / false

const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };
const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);
let result = performOperation(getRandomNumber(), getRandomNumber());
const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
apple - false
// This is a comment

const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
18,23,42,1,52,0,37 + false
const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
const multiply = (a, b) => a * b;
let array = getRandomArray(); array.forEach(item => console.log(item));
orange


const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);
58,49,86,76,41,17,28,69,18,80,82,19,49,23,10,39,36 - 43
const findLargestNumber = numbers => Math.max(...numbers);
const removeDuplicates = array => Array.from(new Set(array));
apple


const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };
banana * kiwi
const isPalindrome = str => str === str.split("").reverse().join("");
52,38,55,97,75,2,65,65,14,56,0,85,41,71,99,86,70,27,49,88,10,66,4,6,34,8,62,37,49,60,8,66,4,5,86,46,88,74,6,99,67,62,90,2,86,22,58,68,26,96,19,77,22,43,22,21,2,22,2,95,0,86,23,6,38,15,48,44,45,26,64,39,15,36,2,98,30,71,85,2,96 * 55,0,62,78,85,51,5
const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };

banana + 16,14,33,45,46,19,26,73,48,4,9,12,26,14,39,38,47,70,86,93,18,27,72,97,36,66,85,33,55,42,83,98,21,15,36,48,14,18,4,50,45,77,66,48,47
const reverseString = str => str.split("").reverse().join("");
const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
const shuffleArray = array => array.sort(() => Math.random() - 0.5);
const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
orange / true
const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;
const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);

true * false
const findSmallestNumber = numbers => Math.min(...numbers);
89 - true
const multiply = (a, b) => a * b;

const findSmallestNumber = numbers => Math.min(...numbers);
const isEven = num => num % 2 === 0;
apple * true
const formatDate = date => new Date(date).toLocaleDateString();
grape


function addNumbers(a, b) { return a + b; }
const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);
const getRandomElement = array => array[getRandomIndex(array)];
const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;
orange - true
const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
