import { SECRET_JWT_ACCESS } from '$env/static/private';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { User } from '$db/user';

const createUser = async (name: string, email: string, password: string) => {
	// Check if user exists
	const user = await User.findOne({ 'data.email': email });

	if (user) {
		return {
			error: 'User already exists'
		};
	}

	try {
		const user = await User.insertOne({
			data: {
				username: name,
				email,
				passwordHash: await bcrypt.hash(password, 10),
				// userAuthToken: crypto.randomUUID(),
				userId: crypto.randomUUID()
			}
		});

		return { user };
	} catch (error) {
		return {
			error: 'Something went wrong'
		};
	}
};

const loginUser = async (email: string, password: string) => {
	// Check if user exists
	const user = await User.findOne({ 'data.email': email });

	if (!user) {
		return {
			error: 'Invalid credentials'
		};
	}

	// Verify the password
	const passwordIsValid = await bcrypt.compare(password, user?.data?.passwordHash);

	if (!passwordIsValid) {
		return {
			error: 'Invalid credentials'
		};
	}

	const jwtUser = {
		id: user?.data?.userId,
		email: user?.data?.email,
		name: user?.data.username
	};

	const token = jwt.sign(jwtUser, SECRET_JWT_ACCESS, {
		expiresIn: '1d'
	});

	return { token };
};

export { createUser, loginUser };
