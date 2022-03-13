const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Patients = require('../models/patients');

const patientRouter = express.Router();

patientRouter.use(bodyParser.json());

patientRouter.route('/:patientId')
    .get((req, res, next) => {
        // patients.find({ 'pid': req.params.patientId })
        Patients.find({})
            .then((patient) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(patient);
            }, (err) => next(err))
            .catch((err) => next(err));
    });

// for posting new data ..not of use for xray staff

patientRouter.route('/')
    .post((req, res, next) => {
        Patients.create(req.body)
            .then((patient) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(patient);
            }, (err) => next(err))
            .catch((err) => next(err));
    });

module.exports = patientRouter;


// patientRouter.route('/:patientId')
//     .get((req, res, next) => {
//         patients.findById(req.params.patientId)
//             .then((patient) => {
//                 res.statusCode = 200;
//                 res.setHeader('Content-Type', 'application/json');
//                 res.json(patient);
//             }, (err) => next(err))
//             .catch((err) => next(err));
//     })
//     .post((req, res, next) => {
//         res.statusCode = 403;
//         res.end('POST operation not supported on /patients/' + req.params.patientId);
//     })
//     .put((req, res, next) => {
//         patients.findByIdAndUpdate(req.params.patientId, {
//                 $set: req.body
//             }, { new: true })
//             .then((patient) => {
//                 res.statusCode = 200;
//                 res.setHeader('Content-Type', 'application/json');
//                 res.json(patient);
//             }, (err) => next(err))
//             .catch((err) => next(err));
//     })
//     .delete((req, res, next) => {
//         patients.findByIdAndRemove(req.params.patientId)
//             .then((patient) => {
//                 res.statusCode = 200;
//                 res.setHeader('Content-Type', 'application/json');
//                 res.json(patient);
//             }, (err) => next(err))
//             .catch((err) => next(err));
//     });