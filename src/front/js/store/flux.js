const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			user: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: () => {
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/hello")
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }))
					.catch(error => console.log("Error loading message from backend", error));
			},
			getMessage: () => {
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "a/user")
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }))
					.catch(error => console.log("Error loading message from backend", error));
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;

// const dataTest = {
// 	name: "name",
// 	surname: "surname",
// 	email: "email",
// 	password: "password",
// 	specialty: "specialty",
// 	services: "services",
// 	profesional: true
// };

// const testFetch = () => {
// 	fetch("/user", {
// 		method: "POST",
// 		body: JSON.stringify(dataTest),
// 		headers: {
// 			"Content-Type": "application/json"
// 		}
// 	})
// 		.then(res => console.log(res))
// 		.then(json => console.log(json))
// 		.catch(err => console.log(err));
// };
