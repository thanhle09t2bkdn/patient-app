module.exports = {
	index(req, res) {
		Patient.findAll().then((patients) => {
			return res.json(Util.success('Get patients success!', patients));
		})
		.catch((error) => res.status(httpStatus.BAD_REQUEST).json(Util.error(error.message, httpStatus.BAD_REQUEST)));
	},
	update(req, res) {
		const id = req.params.id;
		let newPatient = {
			name: req.body.name,
			gender: req.body.gender,
			avatar: req.body.avatar,
			birthday: req.body.birthday,
			pastMediacation: req.body.pastMediacation,
			tags: req.body.tags,
			contact: req.body.contact,
			pregnancy: req.body.pregnancy,
			elaboration: req.body.elaboration,
		};
		Patient.update(newPatient, {
		  where: {
			id: id
		  }
		})
		.then((updatedPatient) => {
			console.log(updatedPatient);
			return res.json(Util.success('Update patients success!', updatedPatient));
		})
		.catch((error) => res.status(httpStatus.BAD_REQUEST).json(Util.error(error.message, httpStatus.BAD_REQUEST)));
	}
};
