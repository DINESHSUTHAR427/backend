import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videofileSchema = new Schema({
    videofile : {
        type : String,
        required : true,

    },
    thumbnail: {
        type : String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    discripstion:{
        type: String,
        required :true
    },
    duration:{
        type: Number,
        required: true
    },
    views:{
        type: Number,
        default:true
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
},
{
timestamps: true
}
)
videofileSchema.plugin(mongooseAggregatePaginate)

export const Videofile = mongoose.model("Video",videofileSchema);