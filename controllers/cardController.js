const {pokemon} = require('../models')
const types = ['Bug', 'Electric', 'Fairy', 'Fire', 'Flying', 'Ghost', 'Grass', 'Ground', 'Ice', 'Normal', 'Poison', 'Psychic', 'Rock', 'Steel', 'Water']

module.exports.viewAll = async function(req, res, next){
    let findTypes = ['All'];
    for(let i = 0; i < types.length; i++) {
        findTypes.push(types[i]);
    }
    let pokemons;
    let findType = req.query.type || all
    let findRandom = req.query.random || false;
    if (findType === 'All') {
        pokemons = await pokemon.findAll
    } else {
        pokemons = await pokemon.findAll({
            where: {
                type: findType
            }
        });
    }
    if (pokemons.length > 0 && findRandom){
        let randomIndex = getRandomInt(pokemons.length)
        pokemons = [pokemons[randomIndex]]
    }
    res.render('index', {pokemons, types:findTypes, findType, findRandom} )
}

module.exports.renderEditForm = async function(req, res, next) {
    const pokemon = await pokemon.findByPk(
        req.params.id
    )
    res.render('edit', {pokemon, types});
}


// module.exports.viewAll = async function(req, res, next) {
//     const pokemons = await pokemon.findAll();
//     res.render('index', {pokemons});
// }






module.exports.updatePokemonCard = async function(req,res) {
    await pokemon.update(
        {
        name: req.body.name,
        hp: req.body.hp,
        type: req.body.type,
        poke_img: req.body.poke_img,
        mtype1: req.body.mtype1,
        mtype2: req.body.mtype2,
        mtype3: req.body.mtype3,
        mname: req.body.mname,
        d1: req.body.d1,
        m2type1: req.body.m2type1,
        m2type2: req.body.m2type2,
        m2type3: req.body.m2type3,
        m2name: req.body.m2name,
        d2: req.body.d1,
        wentype: req.body.wentype,
        bentype: req.body.bentype,
        rentype: req.body.rentype,
    },
    {
        where:
            {
                id: req.params.id
            }
    })
res.redirect('/');
}

module.exports.deletePokemonCard = async function(req,res) {
    await pokemon.destroy(
        {
            where:
                {
                    id: req.params.id
                }
        })
    res.redirect('/')
}

module.exports.renderPokemonAddForm = async function(req,res) {
    const pokemon = {
        name: "",
        hp: "",
        type: types[0],
        poke_img: "",
        mtype1: "",
        mtype2: "",
        mtype3: "",
        mname: "",
        d1: "",
        m2type1: "",
        m2type2: "",
        m2type3: "",
        m2name: "",
        d2: "",
        wentype: "",
        bentype: "",
        rentype: ""
    }
    res.render('add', {pokemon, types})
}

module.exports.addPokemonCard = async function(req, res) {
    await pokemon.create(
        {
            name: req.body.name,
            hp: req.body.hp,
            type: req.body.type,
            poke_img: req.body.poke_img,
            mtype1: req.body.mtype1,
            mtype2: req.body.mtype2,
            mtype3: req.body.mtype3,
            mname: req.body.mname,
            d1: req.body.d1,
            m2type1: req.body.m2type1,
            m2type2: req.body.m2type2,
            m2type3: req.body.m2type3,
            m2name: req.body.m2name,
            d2: req.body.d1,
            wentype: req.body.wentype,
            bentype: req.body.bentype,
            rentype: req.body.rentype
        })
    res.redirect('/')
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}




        // id: 2,
        // name: req.body.name,
        // hp: req.body.hp,
        // type: req.body.type,
        // poke_img: req.body.poke_img,
        // mtype1: req.body.mtype1,
        // mtype2: req.body.mtype2,
        // mtype3: req.body.mtype3,
        // mname: req.body.mname,
        // d1: req.body.d1,
        // m2type1: req.body.m2type1,
        // m2type2: req.body.m2type2,
        // m2type3: req.body.m2type3,
        // m2name: req.body.m2name,
        // d2: req.body.d1,
        // wentype: req.body.wentype,
        // bentype: req.body.bentype,
        // rentype: req.body.rentype
        // }];
//     res.render('index', {pokemon})
// }

// const cardController = require('../controllers'/cardController);