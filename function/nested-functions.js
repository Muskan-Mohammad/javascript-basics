const details = {

    firstName : 'Muskan' ,
    lastName : 'Mohammad',
    age : 21,
    gender : 'Female',
    subject : 'Environmental-Science',
    degree : 'B.Sc' ,
    skills : [
        'HTML' ,
        'CSS',
        'Javascript',
        'ReactJs'
    ],
    education : {
        school : 'Call- Public -School',
        intermediate : 'Sri-Chaitanya',
        degree :' JSS-AHER'
    },

    user: function(){
        console.log('other-talent : Vocalist');
    }


}

console.log(details);
console.log(details.skills);
console.log(details['education']);
details.user();
