import { signUpHandler } from 'next-auth-sanity';
import { client } from '../../../../lib/sanity.client';

export default signUpHandler(client);