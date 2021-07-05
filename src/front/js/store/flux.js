const getState = ({ getStore, getActions, setStore }) => {
	// const token = localStorage.getItem("token");
	return {
		store: {
			message: null,
			user: [],
			token: null,
			profile: [],
			diseases: [],
			currentDisease: {},
			latestPosts: [],
			createPost: {},
			professionals: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getProfessionals: () => {
				// const store = getStore();
				fetch(`${process.env.BACKEND_URL}/api/users/professionals`, {
					method: "GET"
				})
					.then(resp => resp.json())
					.then(data => setStore({ professionals: data }))
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
			createPost: data => {
				fetch(`${process.env.BACKEND_URL}/api/posts`, {
					method: "POST",
					credentials: "include",
					body: JSON.stringify(data),
					cache: "no-cache",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => {
						if (resp.status !== 200) {
							console.log(`response status was not 200: ${resp.status}`);
							return;
						}
						resp.json().then(data => {
							console.log(data);
						});
					})
					.then(data => setStore({ createPost: data }))
					.catch(error => console.log("Error loading message from backend", error));
			},

			loginUser: (data, callback) => {
				fetch(process.env.BACKEND_URL + "/api/login", {
					method: "POST",
					body: JSON.stringify(data),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => {
						console.log(resp);
						if (resp.ok) {
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
						setStore({ user: data.user });
						setStore({ token: data.token });
						console.log(data.token);
						// window.location.href = "/";
						callback();
					})
					.catch(error => console.error("There has been an uknown error", error));
			},

			getToken: () => {
				const token = localStorage.getItem("jwt-token");
				setStore({ token: token });
			},

			logOut: () => {
				localStorage.removeItem("jwt-token");
				setStore({ token: null });
				console.log("token removed");
			},

			getCurrentUser: () => {
				const token = localStorage.getItem("jwt-token");
				if (token) {
					setStore({ token: token });
					const endpoint = process.env.BACKEND_URL + "/api/profiles";
					const config = {
						method: "GET",
						headers: {
							Authorization: `Bearer ${token}`
						}
					};
					fetch(endpoint, config)
						.then(response => {
							if (!response.ok) {
								// window.location.href = "/";
								console.error("Error");
							}
							return response.json();
						})
						.then(json => {
							setStore({ user: json });
						});
				}
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
