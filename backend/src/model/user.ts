import { compare, genSalt, hash } from "bcrypt";
import mongoose , { Document } from "mongoose";

export interface userDocument extends Document{
    username: string;
    password: string;
    email: string;
    isValidPassword(enteredPassword: string): Promise<boolean>;
}

const users = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },

    password: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },
});

users.pre<userDocument>('save', async function(next){
    if(this.isModified('password')){
        const salt = await genSalt(14);
        this.password = await hash(this.password, salt);

        next();
    }
});

users.methods.isValidPassword = async function(EnteredPassword: string): Promise<boolean>{
    return await compare(EnteredPassword, this.password);
}
export default mongoose.model<userDocument>('Users', users);