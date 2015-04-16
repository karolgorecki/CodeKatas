describe("Converter", function() {
    it("should init and return object", function() {
        expect(typeof window.Converter).toBe("object");
    });

    describe('roman2Arabic', function() {
        it('should be function', function() {
            expect(typeof Converter.roman2Arabic).toBe("function");
        });

        it('should throw an error when no number was given', function() {
            expect(function() { Converter.roman2Arabic()}).toThrow(new Error("No number was given"));
        });

        it('should return 1 when I was given', function() {
            expect(Converter.roman2Arabic('I')).toEqual(1);
        });

        it('should return 2 when II was given', function() {
            expect(Converter.roman2Arabic('II')).toEqual(2);
        });

        it('should return 3 when III was given', function() {
            expect(Converter.roman2Arabic('III')).toEqual(3);
        });
    });
});