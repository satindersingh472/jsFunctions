let usernames = [`NAV`, `WINNERSAM`,`nuhi IS A WINNER`,`niti`,`winnerganga`];
let counter = 0;
while(counter < usernames.length){
    let lower_case_username = usernames[counter].toLowerCase();
    let does_include = lower_case_username.includes(`winner`);
    if(does_include === true){
        console.log(`we have a winner ${usernames[counter]}`);
    } 
    counter++;
}