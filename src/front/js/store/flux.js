const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
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
					.then(data => setStore({ professionals: data }))
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
