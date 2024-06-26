import { type Actions, type RequestEvent, type Redirect, fail } from '@sveltejs/kit';
import { bwish } from '$db/tutorials';
import { SECRET_KEYS } from '$env/static/private';




export const actions: Actions = {
	default: async ({ request }) => {
		const signupFormData = await request.formData();
		const token = signupFormData.get('cf-turnstile-response') as string;
		const secret = SECRET_KEYS;
		console.log('SEACH: \n', signupFormData);

		let name = signupFormData.get('name');
		if (typeof name === 'string') {
			name = name.toLowerCase();
			name = name.trim();
		}
		let ReturnWishIDObject = await bwish.findOne(
			{ lowercasename: name },
			{ projection: { _id: 0, name: 1 } }
		);
		console.log('FOUND: ', ReturnWishIDObject);
		if (!ReturnWishIDObject) {
			return {
				name: 'ไม่เจอชื่อในฟอรม์ลงคำอวยพร | No Name has been found'
			};
		}
		let ReturnWishID = JSON.stringify(ReturnWishIDObject);
		ReturnWishID = ReturnWishID.split('"')[3];
		ReturnWishID = ReturnWishID.toString();
		return {
			name: `Found: ${ReturnWishID}`
		};
	}
};
