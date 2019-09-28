const groupAdultsByAgeRange = persons => {
    
    const groupedAdults = persons.reduce( (group, person) => {
        // console.log(group,person)
        if (person.age < 18) {
            return group
        }
        if (person.age >= 18 && person.age <= 20) {
            // console.log('?hasOwnProperty?',group.hasOwnProperty('20 and younger'))
            if(!group.hasOwnProperty('20 and younger')){
                group['20 and younger'] = []
                // console.log('creat Property?',group)
            }
            group['20 and younger'].push(person)
            return group
        }
        if (person.age >= 21 && person.age <= 30) {
            if(!group.hasOwnProperty('21-30')){
                group['21-30'] = []
            }
            group['21-30'].push(person)
            return group
        }
        if (person.age >= 31 && person.age <= 40) {
            if(!group.hasOwnProperty('31-40')){
                group['31-40'] = []
            }
            group['31-40'].push(person)
            return group
        }
        if (person.age >= 41 && person.age <= 50) {
            if(!group.hasOwnProperty('41-50')){
                group['41-50'] = []
            }
            group['41-50'].push(person)
            return group
        }
        if (person.age >= 50) {
            if(!group.hasOwnProperty('51 and older')){
                group['51 and older'] = []
            }
            group['51 and older'].push(person)
            return group
        }
        // console.log(person)
    }
    ,{})
    return groupedAdults
}


module.exports = {groupAdultsByAgeRange}