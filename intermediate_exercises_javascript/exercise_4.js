function countWordOccurrences(str) {
    const words = str.split(' ');
    const wordCount = {};
    words.forEach(word => {
        wordCount[word] = (wordCount[word] || 0) + 1;
    });
    return wordCount;
}