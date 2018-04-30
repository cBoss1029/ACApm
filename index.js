const readline = require('readline');

const rl = readline.createInterface({
 input: process.stdin,
 output: process.stdout
});

const fs = require('fs');


const userInfo = {
    name: '',
    age: '',
    occupation: '',
    hometown: '',
    isCool: '',

}
const updateUserInfo = (a1, a2, a3, a4, a5) =>{
    userInfo.name = a1;
    userInfo.age = a2;
    userInfo.occupation = a3;
    userInfo.hometown = a4;
    userInfo.isCool = a5;
}



console.log(process.argv);
process.argv.forEach(function (val, index, array) {
 console.log(index + ': ' + val);
});

if(process.argv[2] === "init"){
    rl.question('What is your name? ', (answer1) => {
        rl.question('What is your age? ', (answer2) =>{
            rl.question('What is your occupation? ', (answer3) => {
                rl.question('What is your hometown? ', (answer4) => {
                    rl.question('Yes or no? ', (answer5) => {
                        updateUserInfo(answer1, answer2, answer3, answer4, answer5);
                        fs.writeFile("package.json", JSON.stringify(userInfo, null, '\t'), (err) => {
                            if (err) throw (err);
                            console.log("The file was successfully saved!");
                        });
                        rl.close();

                    })
                })
            })
        })
       });
    
}
