/*
 * KodeBlox Copyright 2017 Sayak Mukhopadhyay
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http: //www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

"use strict";

const path = require('path');
const bodiesModel = require('../../models/bodies');
const utilities = require('../utilities');

module.exports.import = () => {
    return new Promise((resolve, reject) => {
        utilities.jsonlToJson(path.resolve(__dirname, '../../dumps/bodies.jsonl'))
            .then(json => {
                bodiesModel.then(model => {
                    model.insertMany(json)
                        .then(() => {
                            resolve();
                        })
                        .catch((err) => {
                            reject(err);
                        });
                });
            })
            .catch(err => {
                reject(err);
            })
    })
};

module.exports.download = () => {
    return new Promise((resolve, reject) => {
        utilities.download('https://eddb.io/archive/v5/bodies.jsonl', path.resolve(__dirname, '../../dumps/bodies.jsonl'), 'body')
            .then(msg => {
                resolve(msg);
            })
            .catch(err => {
                reject(err);
            });
    })
}