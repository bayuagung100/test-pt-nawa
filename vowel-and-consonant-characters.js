const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

const getVowel = (str) => {
    const input = str.toLocaleLowerCase();
    const vowel = ['a', 'e', 'i', 'o', 'u'];
    const vowelTemp = [];
    for (let vow of input) {
        if (vowel.includes(vow)) {
            vowelTemp.push(vow)
        }
    }
    return vowelTemp.sort().toString().replace(/,/g, '');
}

const getConsonant = (str) => {
    const input = str.toLocaleLowerCase();
    const consonant = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
    const consoTemp = [];
    for (let conso of input) {
        if (consonant.includes(conso)) {
            consoTemp.push(conso)
        }
    }

    return consoTemp.toString().replace(/,/g, '');
}

readline.question(`Input one line of words (S) :`, input => {
    // const vowel = ['a', 'e', 'i', 'o', 'u'];
    // const consonant = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
    // console.log('input length', input.length);
    // console.log(`${input}`)
    if (input) {
        // const vowelTemp = [];
        // const consoTemp = [];
        // for (let i = 0; i < input.length; i++) {
        //     const el = input[i].toLocaleLowerCase();
        //     // console.log('el', el)
        //     // console.log('test', vowel.includes(el))
        //     if (vowel.includes(el)) {
        //         // console.log('Vowel Characters :', el)
        //         vowelTemp.push(el)
        //     } else if (consonant.includes(el)) {
        //         // console.log('Consonant Characters :', el)
        //         consoTemp.push(el)
        //     }
        // }
        // const vowelOutput = vowelTemp.sort().toString().replace(/,/g, '')
        // const consoOutput = consoTemp.toString().replace(/,/g, '')
        // console.log('Vowel Characters :', vowelOutput)
        // console.log('Consonant Characters :', consoOutput)

        const checkVowel = getVowel(input);
        console.log('Vowel Characters :', checkVowel)
        const checkConsonant = getConsonant(input);
        console.log('Consonant Characters :', checkConsonant)
    }
    readline.close()
})