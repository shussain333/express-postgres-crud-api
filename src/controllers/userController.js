// Standerize response function

import { createUserService, deleteUserService, getAllUsersService, getUserByIdService, updateUserService } from "../models/userModel.js";

const handleResponse = (res, status, message, data = null) => {
    res.status(status).json({
        status, message, data,
    });
};

export const createUser = async (req, res, next) => {
    const { name, email } = req.body;

    try {
        const newUser = await createUserService(name, email);
        handleResponse(res, 201, "User created successfully", newUser);
    } catch (err) {
        next(err);
    }
};

export const getAllUsers = async (req, res, next) => {
    try {
        const allUsers = await getAllUsersService();
        handleResponse(res, 200, "All the users fetched successfully!!", allUsers);
    } catch (err) {
        next(err);
    }
};

export const getUserById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const user = await getUserByIdService(id);
        if (user) {
            handleResponse(res, 200, `User ${id} fetched successfully!!`, user);
        } else {
            handleResponse(res, 404, `User ${id} not found`);
        }
    } catch (err) {
        next(err);
    }
};

export const updateUser = async (req, res, next) => {
    try {
        const id = req.params.id;
        const isExists = await getUserByIdService(id);
        
        if (isExists) {
            const { name, email } = req.body;
            const user = await updateUserService(id, name, email);
            handleResponse(res, 200, "User updated successfully", user);
        } else {
            handleResponse(res, 404, "User not found!", null);
        }
    } catch (err) {
        next(err);
    }
}

export const deleteUser = async (req, res, next) => {
    try {
        const id = req.params.id;
        const user = await deleteUserService(id);
        handleResponse(res, 200, "User deleted successfully", user);
    } catch (error) {
        next(error);
    }
}