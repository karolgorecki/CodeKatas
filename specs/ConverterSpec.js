describe("Converter", function() {
    it("should init and return object", function() {
        expect(typeof window.Converter).toBe("object");
    });

    describe('roman2Arabic', function() {
        it('should be function', function() {
            expect(typeof Converter.roman2Arabic).toBe("function");
        });
    });
});