(async () => {
    const db = require('./dbconnection');
    const users = require('./users');

    await db.sync();

    await users.create(
        {
            name: 'Lucas',
            username: 'lucas.dias',
            password: '123456'
        });
    await users.create(
        {
            name: 'Lucas 1',
            username: 'lucas.dias',
            password: '123456'
        });
    await users.create(
        {
            name: 'Lucas 2',
            username: 'lucas.dias',
            password: '123456'
        });


    const alterUsers = await users.findByPk(2);
    alterUsers.name - "Lucas Alterado";
    await alterUsers.save();

    users.destroy({where: {id: 1 }});

    const findUsers = await users.findAll();

    console.log(findUsers);
})