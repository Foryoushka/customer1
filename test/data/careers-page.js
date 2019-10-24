export default{
    user: {
        firstName: 'Donald',
        lastName: 'Duck',
        email: "main" + new Date().getTime().toString().substring(0,3)  + "@gmail.com",
        phone: '1234567890',
        address: '100 Magnolia street',
        city: 'Jacksonville',
        state: 'FL',
        zip: '32204',
        country: 'United States',
        date: new Date().getMonth() + 1/new Date().getDate()/new Date().getFullYear(),
        salary: '35$/hr',
        authorized: 'yes',
        sponsorship: 'no',
        location: 'yes'

    }

}