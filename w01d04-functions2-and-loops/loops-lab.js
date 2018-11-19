// part 1:

for (var i = 0; i <= 20; i++) {
  if(i % 2 === 0) {
    console.log(`${i} is an even number`);
  } else {
    console.log(`${i} is an odd number`);
  }
}

// part 2:
for (var i = 0; i <= 10; i++) {
  // console.log(i * 9);
  console.log(`${i} * 9 = ${i * 9}`);
}

// part 2 bonus:
for (var i = 0; i <= 10; i++) {
  for (var j = 0; j <= 10; j++){
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

// part 3 bonus:

function assignGrade(grade) {
  if(grade >= 90) {
    console.log(`${grade} is an A`)
  } else if (grade >= 80) {
    console.log(`${grade} is a B`);
  } else if (grade >= 70) {
    console.log(`${grade} is a C`);
  } else if (grade >= 60) {
    console.log(`${grade} is a D`);
  } else {
    console.log(`${grade} is an F`);
  }
}

for (var i = 60; i <= 100; i++) {
  assignGrade(i);
}


