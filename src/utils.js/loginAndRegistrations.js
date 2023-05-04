import axios from "axios"
let baseUrl = "https://dailywork-f5b4a-default-rtdb.firebaseio.com/"

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