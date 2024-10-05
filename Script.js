// const birthYear = 1991;
//birthYear = 1990;
//const job;
// console.log(birthYear)

// var job = 'programmer';
// job = 'teacher';
// console.log(job)

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

// const firstName = 'Jonas';
// const lastName = 'Schmedtmann';
// console.log(firstName + ' ' + lastName);

// let x = 10 + 5;
// x += 12-3
// x *= 3;
// x--;
// x--;
// console.log(x)

// console.log(ageJonas > ageSarah);

// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;

// console.log(now - 1991 > now - 2018);



// const firstName = 'Jonas';
// const job = 'teacher';
// const birthYear = 1991;
// const year = 2037;

// const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
// console.log(jonas);

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(jonasNew);

// console.log(`Just a regular string...`);

// console.log('String with \n\
//     multiple \n\
//     lines');

// console.log(`String    
//     multiple
//     lines`);

    //  const age = 15;

    // if (age >= 18) {
    //   console.log('Sarah can start driving license 🚗');
    // } else {
    //   const yearsLeft = 18 - age;
    //   console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
    // }
    
    // const AgetoSchool = 6;
    // if (AgetoSchool >=7) {
    //     console.log ("Thomas cango to school")
    // } else {
    //     console.log('Thomas is too young to go to school. Wait antoher year ' );
    // }
        

    // const birthYear = 2012;

    // let century;
    // if (birthYear <= 2000) {
    //   century = 20;
    // } else {
    //   century = 21;
    // }
    // console.log(century);

    
// const MarkWeight = 78;
// const MarkTall = 1.69;
// const JohnWeight = 92;
// const JohnTall = 1.95;

    
//     const MarkBMI = MarkWeight / MarkTall ** 2;
// // console.log(MarkWeight, MarkTall, MarkBMI)

// const JohnBMI = JohnWeight / JohnTall ** 2;
// // console.log(JohnWeight, JohnTall, JohnBMI);

// const markHigherBMI = MarkBMI > JohnBMI;

// console.log(MarkBMI, JohnBMI, markHigherBMI)

// if (MarkBMI > JohnBMI) {
//     console.log(`${MarkBMI} is higer more than ${JohnBMI}`)
// } else { 
//     console.log(`${JohnBMI} is higer more than ${MarkBMI}`)
// }


// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 69);

// console.log(Number('Jonas'));

// console.log(typeof NaN);


// console.log(String(23), 23);


// console.log('I am ' + 23 + ' years old');

// let n = '2' + 1; 
// n = n - 1;
// console.log(n);

// console.log(Boolean(0));            // false
// console.log(Boolean(undefined));    // false
// console.log(Boolean('Jonas'));      // true
// console.log(Boolean({}));           // true
// console.log(Boolean(''));           // false

// const money = 100;
// if (money) {
//   console.log("Don't spend it all ;)");
// } else {
//   console.log('You should get a job!');
// }

// let height = 0;
// if (height) {
//   console.log('YAY! Height is defined');
// } else {
//   console.log('Height is UNDEFINED');
// }

// const age = '18';
// if (age === 18) console.log('You just became an adult :D (strict)');

// if (age == 18) console.log('You just became an adult :D (loose)');

// const favourite = Number(prompt("What's your favourite number?"));
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 23) {
//     console.log('Cool! 23 is an amazing number!');
//   } else if (favourite === 7) {
//     console.log('7 is also a cool number');
//   } else if (favourite === 9) {
//     console.log('9 is also a cool number');
//   } else {
//     console.log('Number is not 23 or 7 or 9');
//   };


// if (favourite !== 23) console.log('Why not 23?');

// const hasDriversLicense = true;  // A
// const hasGoodVision = true;      // B
// console.log(hasDriversLicense && hasGoodVision);

// console.log(hasDriversLicense || hasGoodVision);

// console.log(!hasDriversLicense);

// const isTired = false;  // C
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//     console.log('Sarah is able to drive!');
//   } else {
//     console.log('Someone else should drive...');
//   }
  

const scoreDolphins = (96 + 108 + 99) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;
if (scoreDolphins > scoreKoalas) {
    console.log(`Team Dolphins win with ${scoreDolphins} points  `)
} else if (scoreKoalas > scoreDolphins) {
    console.log(`Team Koalas win with ${scoreKoalas} points`)
} else if (scoreDolphins === scoreKoalas) {
    console.log(`Is draw`)
}

if(scoreDolphins > scoreKoalas && scoreDolphins >=100 ) {
    console.log(`Team Dolphins win`)
} else if (scoreKoalas > scoreDolphins && scoreKoalas >=100) {
    console.log(`Team Koalas win`)
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100){
    console.log(`Both team win`)
}else {
    console.log(`No one win`)
}
