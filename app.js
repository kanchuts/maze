const inquirer = require('inquirer');
const chalk = require('chalk');

var input = [
    {
        type: 'number',
        name: 's',
        message: 'Nilai s?'
    }
]
function maze(s) {
    var repeat1 = ' '.repeat(s-2);
    var repeat2 = '@'.repeat(s-2);
    for (var i = 0; i < s; i++){
        if((i +1) % 2 == 0){
            console.log(chalk.green('@'+repeat1+'@'));
        } else {
            if ((i + 3) % 4 ==! 0){
                console.log(chalk.green(repeat2+' '+'@'))
            } else {
                console.log(chalk.green('@'+' '+repeat2))
            }
        }
    }
}

  inquirer.prompt(input).then(answer => {
      maze(answer['s']);
  })