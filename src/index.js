module.exports = function toReadable (number) {

    let numStr = number.toString();
    let output = '';
    let convertObj = {
        '0' : [''],
        '1' : ['one', 'ten', 'eleven'],
        '2' : ['two', 'twenty', 'twelve'],
        '3' : ['three', 'thirty', 'thirteen'],
        '4' : ['four', 'forty', 'fourteen'],
        '5' : ['five', 'fifty', 'fifteen'],
        '6' : ['six', 'sixty', 'sixteen'],
        '7' : ['seven', 'seventy', 'seventeen'],
        '8' : ['eight', 'eighty', 'eighteen'],
        '9' : ['nine', 'ninety', 'nineteen']
    }

    if (numStr.length === 1) {
        output = numStr === '0' ? 'zero' : convertObj[numStr][0];
    } else {
        numStr.split('').reverse().reduce((acc, val, idx) => {
            if (idx === 1)
                output += val === '1' && acc > '0' ? convertObj[acc][2] : val === '1' && acc === '0' ? convertObj[val][1] : 
                    val === '0' || val === undefined ? convertObj[acc][0] : `${convertObj[val][1]} ${convertObj[acc][0]}`;     
            if (idx === 2) 
                output = val !== '0' ? `${convertObj[val][0]} hundred ${output}` : output;
            return val;
        });
    }

    return output.trim();

}
