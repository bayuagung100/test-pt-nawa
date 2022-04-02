const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question(`Input the number of families :`, families => {
    const maxPeopleOnBus = 4;

    const family = parseInt(families);
    // console.log('family', family)

    const output = 0;
    if (families) {
        readline.question(`Input the number of members in the family (separated by a space) :`, members => {
            let arrFamily = members.split(' ').filter(Number).sort();
            // console.log('arrFamily', arrFamily)
            // console.log('arrFamily.length', arrFamily.length)
            // console.log('members', members)
            // console.log('members.length', members.length)

            if (arrFamily.length < family) {
                console.log('Input must be equal with count of family')
            } else {
                let bus = 0;
                let familyGabung = []
                for (let i = 0; i < arrFamily.length; i++) {
                    let mem = parseInt(arrFamily[i]);
                    let nextMem = arrFamily[i + 1] ? parseInt(arrFamily[i + 1]) : 0;

                    // console.log('mem', mem)
                    // console.log('nextMem', nextMem)
                    // console.log('test', arrFamily[i] === arrFamily[i + 1])
                    if (mem >= maxPeopleOnBus) {
                        bus++
                    } else if ((mem + nextMem) <= maxPeopleOnBus) {
                        // console.log('masuk..')
                        familyGabung.push(arrFamily[i], arrFamily[i + 1])
                        let hitung = familyGabung.reduce((a, b) => parseInt(a) + parseInt(b))
                        // console.log('hitung', hitung)
                        if (hitung <= maxPeopleOnBus) {
                            bus++
                        }
                        // bus++
                    } else {
                        // console.log(`familyGabung  ${familyGabung}`, familyGabung.includes(arrFamily[i]))
                        if (!familyGabung.includes(arrFamily[i])) {
                            // console.log('masuk ',)
                            bus++
                        }
                    }

                }
                console.log('Minimum bus required is :', bus)
            }
            readline.close()
        })
    }

    // readline.close()
})