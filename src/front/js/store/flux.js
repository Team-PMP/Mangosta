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
			],
			diseases: [],
			currentDisease: {}
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			createUser: data => {
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/users", {
					method: "POST",
					body: JSON.stringify(data),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }))
					.catch(error => console.log("Error loading message from backend", error));
			},
			getAllDiseases: () => {
				// fetching data from the backend
				fetch(`${process.env.BACKEND_URL}/api/diseases`, {
					method: "GET"
				})
					.then(resp => resp.json())
					.then(data => setStore({ diseases: data }))
					.catch(error => console.log("Error loading message from backend", error));
			},
			getCurrentDisease: id => {
				// fetching data from the backend
				fetch(`${process.env.BACKEND_URL}/api/disease/${id}`, {
					method: "GET"
				})
					.then(resp => resp.json())
					.then(data => setStore({ currentDisease: data }))
					.catch(error => console.log("Error loading message from backend", error));
			},

			loginUser: data => {
				console.log(data);
				fetch(process.env.BACKEND_URL + "/api/login", {
					method: "POST",
					body: JSON.stringify(data),
					header: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => {
						console.log(resp);
						if (resp.ok) return resp.json();
						else if (resp.status === 401) {
							console.log("Invalid credentials");
						}
					})
					.then(data => {
						// guarda tu token en el localStorage
						localStorage.setItem("jwt-token", data.token);
						console.log("Login satisfactorio");
					})
					.catch(error => console.error("There has been an uknown error", error));
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
