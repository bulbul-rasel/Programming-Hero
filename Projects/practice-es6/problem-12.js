const companey = {
    name: 'GP',
    ceo: { cName: 'Jolil Miya', salary: '80k', age: 56 },
    dev: {
        work: { name: 'webDev', language: 'React' },
        hudai: { kam: 'nai', kahi: 'jani na' }
    }
}

// console.log(companey.dev.work.language);
console.log(companey.ceo?.work?.language);