
const Recipe = require('../models/Recipe')
const mongoose = require('mongoose')


// HOMEPAGE

exports.homepage = async (req, res) => {
    const locals = {
        title: "Home page",
        description: "Button page"
    }

    try {
        res.render('index', locals)
    } catch (error) {
        console.log(error)
    }
}