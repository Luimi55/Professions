interface UserModel {
    name:string,
    email: string,
    description?: string,
    jobTitle?: string,
    country?: string,
    degree?: string,
    degreeFile?: string,
    company?: string,
    hashtag?: string,
    paypalToken?: string
}

export default UserModel