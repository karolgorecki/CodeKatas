var Converter = (function() {
    var roman2Arabic = function(romanNumber) {
        if (typeof romanNumber === 'undefined') {
            throw new Error("No number was given");
        }
    }

    return {
        roman2Arabic: roman2Arabic
    };
})();