$(document).ready(function(){



/**
 * Demonstrative test
 */
module('demo');

test('demonstrative test', function(){
    ok(true, 'is true truely true?');
    equal('foo', 'foo', "who's fooling foo?");
    same([1, 2, ['a', 'b']], [1, 2, ['a', 'b']], 'deep comparisons work too');
});

test('failing test', function(){
    equal([1, 2, 3], [1, 2, 3], 'objects with the same values, but not the same instance');
});



});
