import Ember from 'ember';
import counter from 'ghost/utils/word-count';

var countWords = Ember.HTMLBars.makeBoundHelper(function (arr /* hashParams */) {
    if (!arr || !arr.length) {
        return;
    }

    var markdown,
        count;

    markdown = arr[0] || '';

    if (/^\s*$/.test(markdown)) {
        return '0 个字';
    }

    count = counter(markdown);

    return count + (count === 1 ? ' 个字' : ' 个字');

});

export default countWords;
