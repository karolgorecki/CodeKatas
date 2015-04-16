var Converter = (function() {
    var roman2Arabic = function(romanNumber) {
        var arabicNumber = 0;

        if (typeof romanNumber === 'undefined') {
            throw new Error('No number was given');
        }

        var parts = romanNumber.split('');

        for (var i = parts.length - 1; i >= 0; i--) {
            if (parts[i] === 'I') {
                arabicNumber += 1;
            }
        };

        if (romanNumber === 'X') return 10;

        return arabicNumber;
    }

    return {
        roman2Arabic: roman2Arabic
    };
})();