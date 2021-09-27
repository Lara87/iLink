const inputFullName = document.querySelector('.full-name');
const divFormDateSecond = document.querySelector('.form__date-second');
const selectGender = document.querySelector('.select-gender');

const error = document.querySelectorAll('.error');

const inputCountry = document.querySelector('.country');
const inputCity = document.querySelector('.city');
const dateBirth = document.querySelector('.date-birth');

const divUploadingFile = document.querySelector('.form__add-doc');

const inputUploadFile = document.getElementById('input__file');

const divFileUplouded = document.querySelector('.file__uploaded');

const buttonSendInfo = document.querySelector('.send-info');

const divDoneSend = document.querySelector('.done__send');

getCheckFileIsUploaded();

function getCheckFullNameGender() {
    getValidFullName();
    if ((inputFullName.validity.valid) && (inputFullName.value !== '') && ((selectGender.value == 'Male') || (selectGender.value == 'Female'))) {
        divFormDateSecond.setAttribute('style', 'visibility:visible');
    }
};

function getValidFullName() {
    if (!inputFullName.validity.valid) {
        error[0].setAttribute('style', 'visibility:visible');
    } else {
        error[0].setAttribute('style', 'visibility:hidden')
    }
};

function getCheckCountryCityDate() {
    getValidCountry();
    getValidCity();
    if ((inputCountry.validity.valid) && (inputCity.validity.valid) && (dateBirth.value !== '')) {
        divUploadingFile.setAttribute('style', 'visibility:visible');
    }
};

function getValidCountry() {
    if (!inputCountry.validity.valid) {
        error[1].setAttribute('style', 'visibility:visible');
    } else {
        error[1].setAttribute('style', 'visibility:hidden')
    }
};

function getValidCity() {
    if (!inputCity.validity.valid) {
        error[2].setAttribute('style', 'visibility:visible');
    } else {
        error[2].setAttribute('style', 'visibility:hidden')
    }
};

function getCheckFileIsUploaded() {
    if (inputUploadFile.files.length !== 0) {
        divFileUplouded.setAttribute('style', 'visibility:visible');
        buttonSendInfo.disabled = false;
    }
}

function getSendForm() {
    divDoneSend.setAttribute('style', 'visibility:visible');
};
