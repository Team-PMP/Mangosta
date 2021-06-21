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

			createUser: data => {
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/user", {
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

			loginUser: data => {
				fetch(process.env.BACKEND_URL + "/api/login")
					.then(resp => {
						if (resp.ok) resp.json();
						else if (resp.status === 401) {
							console.log("Invalid credentials");
						} else if (resp.status === 400) {
							console.log("Invalid email or password format");
						} else throw Error("Uknon error");
					})
					.then(data => {
						// guarda tu token en el localStorage
						//localStorage.setItem("jwt-token", data.token);
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
