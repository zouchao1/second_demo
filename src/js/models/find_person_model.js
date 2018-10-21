const find_person_list = () => {
    return $.ajax({
        url:'./jspon/person',
        success:(res) =>{
            return res;
        }
    })
}

module.exports = {
    find_person_list
}