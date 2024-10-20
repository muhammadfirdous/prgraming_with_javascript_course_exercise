function pipeline(...funcs) {
    return input => funcs.reduce((acc, func) => func(acc), input);
}