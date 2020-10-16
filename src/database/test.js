const Database = require('./db.js');
const saveOrphanage = require('./saveOrphanage.js')

Database.then(async (db) => {
    // inserir dados na tabela

    await saveOrphanage(db, {
        lat: "-24.0075997",
        lng: "-46.4299406",
        name: "Lar dos Meninos",
        about: "Prestas assistência a crianças de 05 a 15 anos que se encontram em situações de risco e/ou vulnerabilidade social.",
        whatsapp: "13 997832609",
        images: [
            "https://images.unsplash.com/photo-1572247324584-a841c32b95ac?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/photo-1590033821368-7f7f469b1561?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horarios de Visitas Das 7h até 20h",
        opening_on_weekends: "0"
    })

    //consultar dados na tabela
    const selectedOrphanages = await db.all('SELECT * FROM orphanages')
    console.log(selectedOrphanages)

    //consultar somente 1 orphanato pelo ID
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"')
    console.log(orphanage)

    //apagar dados da  tabela
    // console.log(await db.run("DELETE FROM orphanages WHERE id ='5'"))
})