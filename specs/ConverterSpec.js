describe('Converter', function() {
    it('should init and return object', function() {
        expect(typeof window.Converter).toBe('object');
    });

    describe('roman2Arabic', function() {
        it('should be function', function() {
            expect(typeof Converter.roman2Arabic).toBe('function');
        });

        it('should throw an error when no number was given', function() {
            expect(function() { Converter.roman2Arabic()}).toThrow(new Error('No number was given'));
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

        it('should return 4 when IV was given', function() {
            expect(Converter.roman2Arabic('IV')).toEqual(4);
        });

        it('should return 5 when V was given', function() {
            expect(Converter.roman2Arabic('V')).toEqual(5);
        });

        it('should return 6 when VI was given', function() {
            expect(Converter.roman2Arabic('VI')).toEqual(6);
        });

        it('should return 7 when VII was given', function() {
            expect(Converter.roman2Arabic('VII')).toEqual(7);
        });

        it('should return 9 when IX was given', function() {
            expect(Converter.roman2Arabic('IX')).toEqual(9);
        });

        it('should return 10 when X was given', function() {
            expect(Converter.roman2Arabic('X')).toEqual(10);
        });

        it('should return 50 when L was given', function() {
            expect(Converter.roman2Arabic('L')).toEqual(50);
        });

        it('should return 99 when XCIX was given', function() {
            expect(Converter.roman2Arabic('XCIX')).toEqual(99);
        });
    });
});