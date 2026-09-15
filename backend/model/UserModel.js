import { model, mongoose, Schema } from "mongoose";

const UserModel = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
    },
    password: {
        type: String,
        required: true
    },
    token: {
        type: String,
        default:''
    }

})

export default mongoose.model("User", UserModel);