export class User {
    city;
    email;
    firstName;
    lastName;
    nickName;
    phone;
    state;
    streetAddress;
    userId;
    profilePublic;
    profileUrl;
    zip;

    constructor(city, email, firstName, lastName, nickName, phone, state, streetAddress, userId, profilePublic, profileUrl, zip) {
        this.city = city;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.nickName = nickName;
        this.phone = phone;
        this.state = state;
        this.streetAddress = streetAddress;
        this.userId = userId;
        this.profilePublic = profilePublic;
        this.profileUrl = profileUrl;
        this.zip = zip;
    }
}