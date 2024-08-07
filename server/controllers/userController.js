const db = require('../config/dataBasePostGres.js');
const {
    createAccount,
    createProfile,
    createDietType,
    createMeals
} = require('../models/userModels.js')

const getAllUsers = async (req, res) => {
    try {
        const users = await db('users').select('*');
        res.json(users);
    } catch (error) {
        res.status(500).json({ msg: 'Error fetching users', error });
    }
};

const getUser = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await db('users').where('id', id).first();
        if (!user) return res.status(404).json({ msg: 'User not found' });
        res.json(user);
    } catch (error) {
        res.status(500).json({ msg: 'Error fetching user', error });
    }
};

// const createUser = async (req, res) => {
//     const userData = req.body;
//     try {
//         const [id] = await db('users').insert(userData).returning('id');
//         res.status(201).json({ id });
//     } catch (error) {
//         res.status(500).json({ msg: 'Error creating user', error });
//     }
// };

const _createAccount = async(req, res) => {
    try {
        const userData = req.body
        const userAccount = await createAccount(userData)
        res.json(userAccount.user)
    } catch (error) {
        console.log(error);
        
    }
}

const updateUser = async (req, res) => {
    const { id } = req.params;
    const userData = req.body;
    try {
        await db('users').where('id', id).update(userData);
        res.json({ msg: 'User updated' });
    } catch (error) {
        res.status(500).json({ msg: 'Error updating user', error });
    }
};

const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        await db('users').where('id', id).del();
        res.json({ msg: 'User deleted' });
    } catch (error) {
        res.status(500).json({ msg: 'Error deleting user', error });
    }
};

module.exports = {
    getAllUsers,
    getUser,
    _createAccount,
    updateUser,
    deleteUser
};
