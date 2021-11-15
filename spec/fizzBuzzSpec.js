
describe fizzBuzz do
    it("should throw an exception if song is already playing", function() {
        fizzBuzz.play(song);

        expect(function() {
            fizzBuzz.resume();
        }).toThrowError("song is already playing");
    });
end
