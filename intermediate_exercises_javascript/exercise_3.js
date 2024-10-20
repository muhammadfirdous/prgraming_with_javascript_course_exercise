function manipulateObject(obj) {
    obj.newProperty = 'newValue';
    delete obj.oldProperty;
    obj.updatedProperty = 'updatedValue';
    return obj;
}