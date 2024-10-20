function isAnagram(str1, str2) {
    const formatStr = str => str.toLowerCase().split('').sort().join('');
    return formatStr(str1) === formatStr(str2);
}