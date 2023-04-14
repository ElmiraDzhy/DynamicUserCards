'use strict';
import getUsers from '../src/api/index.js';
import createElem from './utils/createFunc.js';

let resultsAmount = 10;

function createCard(obj) {
    const birth = obj.dob.date;
    const date = new Date(birth);

    const img = createElem('img', {classNames: ['user-image'], attributes: [{src: obj.picture.large}]});
    const h3 = createElem('h3', {classNames: ['user-name']}, `${obj.name.title} ${obj.name.first} ${obj.name.last}`);
    const p = createElem('p', {classNames: ['user-birth']}, `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`);
    const gender = createElem('p', {classNames: ['user-gender']}, obj.gender);
    const userMail = createElem('h4', {classNames: ['user-mail']}, obj.email);
    const followBtn = createElem('button', {classNames: ['btn', 'follow']}, 'Follow');
    const textBtn = createElem('button', {classNames: ['btn', 'text']}, 'Message');

    const div = createElem('div', {classNames: ['div-wrapper']});
    div.append(followBtn, textBtn);

    const divBirth = createElem('div', {classNames: ['div-birth']});
    divBirth.append(p, gender);

    return createElem('article', {classNames: ['user-card']}, img, h3, userMail, divBirth,  div);
}

function createInputForm() {
    const label = createElem('label', {classNames: ['form-label']}, 'Input the number of cards');
    const input = createElem('input', {classNames: ['user-input'], attributes: [{type: 'number'}, {min:1}, {max: 5000}, {value: resultsAmount}]});
    const button = createElem('button', {classNames: ['btn','input-btn']}, 'Submit');
    const form = createElem('form', {classNames: ['form']}, label, input, button);
   
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        resultsAmount = form[0].valueAsNumber;
        render();
    });

    return form;
}

async function render() {
    try {
        const users = await getUsers(resultsAmount);
        const form = createInputForm();
        const usersCardsArray =  users.results.map((user) => createCard(user));

        const root = document.getElementById('root');
        
        const elementsForRender = [];
        elementsForRender.push(form);
        elementsForRender.push(...usersCardsArray);

        root.replaceChildren(...elementsForRender);
    }
    catch(err) {
        console.log(`${err}`);
    }
}

render();

