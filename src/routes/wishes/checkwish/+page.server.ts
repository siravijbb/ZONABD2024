import {type Actions, type RequestEvent, type Redirect, fail} from '@sveltejs/kit';
import { bwish } from '$db/tutorials';
import {SECRET_KEYS} from "$env/static/private";

export interface TokenValidateResponse {
	'error-codes': string[];
	success: boolean;
	action: string;
	cdata: string;
}

async function validateToken(token: string, secret: string) {
	const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
		method: 'POST',
		headers: {
			'content-type': 'application/json'
		},
		body: JSON.stringify({
			response: token,
			secret: secret
		})
	});

	const data: TokenValidateResponse = await response.json();

	return {
		success: data.success,
		errors: data['error-codes']?.length ? data['error-codes'][0] : null
	};
}



export const actions: Actions = {
	default: async ({ request }) => {
		const signupFormData = await request.formData();
		const token = signupFormData.get('cf-turnstile-response') as string;
		const secret = SECRET_KEYS;
		const { success, errors } = await validateToken(token, secret);
		console.log(signupFormData);
		if (!success) {
			return fail(400, {
				errors: errors,
				message: true,
				reCapchaFalse: true,
				complete: false
			});
		}
		const name = signupFormData.get('name') ;
		let ReturnWishIDObject =
			(await bwish.findOne({ name: name }, { projection: {_id:0, name: 1 } })) ?? 'No ID Found';
		let ReturnWishID = JSON.stringify(ReturnWishIDObject);
		ReturnWishID = ReturnWishID.split('"')[3];
		console.log(ReturnWishID.toString());
		if(ReturnWishID){
		return {
			name: ReturnWishID
		};}
        else{
            return {
                name: "ไม่เจอชื่อในฟอรม์ลงคำอวยพร | No Name has been found"
            };
        }
	}
};
