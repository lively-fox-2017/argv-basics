function tambah(num) {
  return num + 2
}

var argv = process.argv
console.log(argv[2])
console.log(tambah(argv[2]));
