export const actions = {
	default: async (event) => {
		const formData = Object.fromEntries(await event.request.formData());
		try{
			const { title, excerpt, description } = formData;
			console.log(title,excerpt,description)
			
		}
		catch(err){
			console.log(err)
		}

	}
};
