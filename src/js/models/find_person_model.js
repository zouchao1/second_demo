const find_person_list = () => {
    return $.ajax({
        url:'./static/mock/person.json',
        success:(res) =>{
            return res;
        }
    })
}

export default  {
    find_person_list
}