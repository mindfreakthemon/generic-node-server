import Form from 'core/forms/form';

export default class extends Form {
	get fields() {
		return {
			username: Form.fields.string({
				required: true
			}),
			password: Form.fields.password({
				required: Form.validators.required()
			})
		};
	}
}