const inquirer = require('inquirer');
const chalk = require('chalk');

var input = [
    {
        type: 'number',
        name: 's',
        message: 'Nilai s?'
    }
]
var str1 = ' ';
var str2 = '@';
function maze(s) {
    for (var i = 0; i < s; i++){
        if((i +1) % 2 == 0){
            console.log(chalk.green('@'+str1.repeat(s-2)+'@'));
        } else {
            if ((i + 3) % 4 ==! 0){
                console.log(chalk.green(str2.repeat(s-2)+' '+'@'))
            } else {
                console.log(chalk.green('@'+' '+str2.repeat(s-2)))
            }
        }
    }
}

  inquirer.prompt(input).then(answer => {
      maze(answer['s']);
  })