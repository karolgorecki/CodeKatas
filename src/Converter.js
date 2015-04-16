var Converter = (function() {

    var roman2ArabicMap = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };

    var roman2Arabic = function(romanNumber) {
        var arabicNumber = 0;

        if (typeof romanNumber === 'undefined') {
            throw new Error('No number was given');
        }

        var parts = romanNumber.split('');

        for (var i = parts.length - 1; i >= 0; i--) {
            if (roman2ArabicMap[parts[i]] < roman2ArabicMap[parts[i+1]]) {
                arabicNumber -= roman2ArabicMap[parts[i]];
                continue;
            }

            arabicNumber += roman2ArabicMap[parts[i]];
        };

        return arabicNumber;
    }

    return {
        roman2Arabic: roman2Arabic
    };
})();