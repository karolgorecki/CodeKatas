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
    });
});