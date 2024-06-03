//OOp Instruction Explained with a TypeScript console Application
//Instruction : Mehak Alamgir

//step 1 : install inquirer
//code: 1: npm install inquirer ....... 2: npm fund ..... 3: npm i --save-dev @types/inquirer


//step 2: install chalk
//code : npm install chalk ....... 2: npm fund

//start code:
import inquirer from "inquirer";
import chalk from "chalk";

// Create class
class Person {
    private _personality: string;
    constructor() {
        this._personality = 'Mystery';
    }

    // User input
    userInput(input: string) {
        // If-else statements
        if (input.includes('talk to others about yourself openly')) {
            this._personality = 'happily';
        } else if (input.includes('keep your word to yourself')) {
            this._personality = 'talk rude';
        }
    }

    // Return function
    get personality() {
        return this._personality;
    }
}

// Create objects
class Main {
    public async main() {
        // Await called out
        const ans = await inquirer.prompt({
            // Object create 
            type: 'list',
            name: 'choice',
            message: chalk.red('Tell your behaviour?'),
            choices: [
                'talk to others about yourself openly',
                'keep your word to yourself'
            ]
        });

        // Create a personal class
        let myPerson = new Person();

        myPerson.userInput(ans.choice);

        // Output response
        console.log(`You are ${myPerson.personality}`);
    }
}

const myObject = new Main();
myObject.main();







// import inquirer from "inquirer";
// import chalk from "chalk";

// //create class
// class Person {
//     private _personality: string
//     constructor() {
//         this._personality = 'Mystery';
//     }

// //user input
// userInput(input: string ) {
//     //if else statements
//     if (input.includes('talk to others about yourself openly')) {
//         this._personality = 'happily';
//     }else if (input.includes('keep your word to yourself')){
//         this._personality = 'talk rude';
//     }
// }

// //return function
// get personality() {
//     return this._personality
// } 
// }

// //create onjects
// class Main {
//     public async main(){
//         //await called out
//         const ans = await inquirer.prompt({
//         //object create 
//         type: 'list',
//         name: 'chalk',
//         message: chalk.yellow('Tell your behaviour?'),
//             choices: [
//                 'talk to others about yourself openly',
//                 'keep your word to yourself'
//             ]
//         // message: chalk.yellow('tell your behaviour ?'),
//         // choices : [
//         //     '1: talk to others about myself.',
//         //     '2: keep quite and dont ask quistions'
//         //     ]
//     })
//     //create a personal class
//     let myPerson  = new Person()

//     myPerson.userInput(ans.choice);

//     //output response
//     console.log(`you are ${myPerson.personality}`)
// }
// }
// const myObject = new Main();
// myObject.main();
