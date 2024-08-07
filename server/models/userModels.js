const db = require('../config/dataBasePostGres.js'); // Replace with your database configuration

const userModel = {
  createUser: async (userData) => {
    try {
      const [id] = await db('users').insert(userData, ['id']); // Assuming an 'id' column
      return id;
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  },

  getUserById: async (userId) => {
    try {
      const user = await db('users').where('id', userId).first();
      return user;
    } catch (error) {
      console.error('Error getting user:', error);
      throw error;
    }
  },

  updateUser: async (userId, userData) => {
    try {
      await db('users').where('id', userId).update(userData);
    } catch (error) {
      console.error('Error updating user:', error);
      throw error;
    }
  },

  deleteUser: async (userId) => {
    try {
      await db('users').where('id', userId).del();
    } catch (error) {
      console.error('Error deleting user:', error);
      throw error;
    }
  }
};

module.exports = userModel;
