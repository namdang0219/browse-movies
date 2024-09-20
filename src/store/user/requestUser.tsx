import axios from "axios";

export default function requestUser() {
  console.log('running')
	return axios.get("https://jsonplaceholder.typicode.com/users");
}
