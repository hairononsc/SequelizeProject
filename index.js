const { CRUD } = require('./helpers');

const db = require('./models');


const params = process.argv;



if (params.length <= 2) {
    process.exit(0);
}


const args = params.slice(2);
console.log(args);
const command = args[0].split(':')[0].substring(2);
const entity = args[0].split(':')[1];
switch (command) {
    case CRUD.CREATE:
        const data = {}
        args.slice(1).map((arg) => {
            const tmp = arg.split('=');
            data[tmp[0].substring(2)] = tmp[1];
            console.log(data);
        })
        db[entity].create(data).then(() => console.log("Created")).catch(console.error);
        break;
    case CRUD.READ:
        db[entity].findAll().then((data) => console.log(data)).catch(console.error);
        break;
    case CRUD.UPDATE:
        return console.log("Updating an entity");
    case CRUD.DELETE:
        return console.log("Deleting an entity");
    default:
        return console.log("Unknown command");
}
// --create:Contact --
// console.log(command);
// console.log(entity);