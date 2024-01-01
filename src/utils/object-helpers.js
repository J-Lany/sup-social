export const updateObjectInArray = (item, itemID, objPropName, newObjProps) => {
 return item.map(user => {
  if (user[objPropName] === itemID) {
    return { ...user, ...newObjProps}
}
return user;
})
}


