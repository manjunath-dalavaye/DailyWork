import axios from "axios"
let baseUrl = "FIREBASE_URL"

const checkForUserPresent = async (passedUsername) => {
    const resp = await axios.get(`${baseUrl}/Users.json`)

    for (const parentObj in resp.data) {
        const obj = resp.data[parentObj]
        if (obj.username == passedUsername) {
            return true
        }
    }

    return false
}

export default checkForUserPresent;
