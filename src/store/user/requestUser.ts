import axios from "axios";

export default function requestUser() {
	return axios.get("https://jsonplaceholder.typicode.com/users");
}
