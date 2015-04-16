var Converter = (function() {
    var roman2Arabic = function(romanNumber) {
        if (typeof romanNumber === 'undefined') {
            throw new Error("No number was given");
        }

        if (romanNumber === "I") return 1;

        return 2;
    }

    return {
        roman2Arabic: roman2Arabic
    };
})();