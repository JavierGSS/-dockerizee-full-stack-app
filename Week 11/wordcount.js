let lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

// words retuns an array with all the words of lorem w/out commas or periods

words = (text) => {
  let palabras = text.split(' ');
  
  let sinComas = [];
  palabras.forEach((item) => {
    sinComas.push(item.split(','));
  });

  let sinPuntos = [];
  for (let i = 0; i < sinComas.length; i++) {
    sinPuntos.push(sinComas[i][0].split('.'));
  }

  let a, resto;
  let arregloFinal = [];
  sinPuntos.forEach((item) => {
    [a, ...resto] = item;
    arregloFinal.push(a);
  });

  return arregloFinal;

}

console.log(words(lorem).length);

// wordFrequency creates an object that assigns each word as a property and counts the number of times such a word occurs in an array of strings.

const conteo = {};
wordFrequency = (item) => {
  item.forEach((item) => {
    if (conteo[item] == null) conteo[item] = 1;
      else {
        conteo[item] += 1;
      }
  });
  return conteo;
}

// This should print an object containing all words and their occurrences
console.log(wordFrequency(words(lorem)));

*******

Dr. Williams' way:

data = lorem.split(' ');

// data1 returns the data array without upper cases, commas and periods.

data1 = data.map(item => item.replace(',', '')).map(item => item.replace('.', '')).map(item => item.toLocaleLowerCase()); 

//pageIt returns a page that begins at data1[start] and ends at data1[start + pageSize]--in this case, data1[start] = data1[0] = 'Lorem', and data1[start + pageSize] = data1[10] = 'do'.

const pageIt = (data, start, pageSize) => data.slice(start, start + pageSize);
const args = [data1, 0, 10];

//we use the spread operator to get a hold on args values

pageIt(...args);

// the following code creates an array with the number of times a words appears in data1:

let list = {};
data1.map(item => list[item] ? list[item]++ : list[item] = 1);



