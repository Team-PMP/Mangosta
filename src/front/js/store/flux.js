const getState = ({ getStore, getActions, setStore }) => {
	const token = localStorage.getItem("token");
	return {
		store: {
			message: null,
			user: [],
			token: token,
			profile: [],
			diseases: [],
			currentDisease: {},
			latestPosts: [],
			professionals: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getProfessionals: () => {
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "api/users/professionals", {
					method: "GET"
				})
					.then(resp => resp.json())
					.then(data => {
						setStore({ professionals: data });
						console.log(data);
					})
					.catch(error => console.log("Error loading message from backend", error));
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
					.then(resp => {
						if (resp.ok) {
							window.location.href = "/";
						}
						return response.json();
					})
					.then(data => {
						setStore({ message: data.message });
						alert("usuario creado");
					})
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
			getLatestPosts: id => {
				// fetching data from the backend
				fetch(`${process.env.BACKEND_URL}/api/posts/diseases/${id}`, {
					method: "GET"
				})
					.then(resp => resp.json())
					.then(data => setStore({ latestPosts: data }))
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
				fetch(process.env.BACKEND_URL + "/api/login", {
					method: "POST",
					body: JSON.stringify(data),
					header: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => {
						console.log(resp);
						if (resp.ok) {
							window.location.href = "/";
							return resp.json();
						} else if (resp.status === 401) {
							console.log("Invalid credentials");
						}
					})
					.then(data => {
						// guarda tu token en el localStorage
						localStorage.setItem("jwt-token", data.token);
						console.log("Login Done");
						// console.log("Login satisfactorio");
						setStore({ user: data });
						setStore({ token: json.token });
						console.log(token);
					})
					.catch(error => console.error("There has been an uknown error", error));
			},
			logOut() {
				localStorage.removeItem("jwt-token");
				setStore({ token: null });
				console.log("token removed");
			},

			getcurrentUser: data => {
				const store = getStore();
				const endpoint = process.env.BACKEND_URL + "/api/profiles";
				const config = {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: `${store.token}`,
						cors: "no-cors"
					}
				};
				fetch(endpoint, config)
					.then(response => {
						if (!response.ok) {
							// window.location.href = "/";
							console.log("successful fecth profiles");
						}
						return response.json();
					})
					.then(json => {
						setStore({ user: data });
						console.log("user data:", store.user);
					});
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
