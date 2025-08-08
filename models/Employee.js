const mongoose=require('mongoose')

// Create a counter schema for auto-increment ID
const CounterSchema = new mongoose.Schema({
    _id: { type: String, required: true },
    seq: { type: Number, default: 1 }
});

const Counter = mongoose.model('Counter', CounterSchema);

const EmployeeSchema=new mongoose.Schema({
    employeeId: {
        type: Number,
        unique: true
    },
    name:{
        type:String
    },
    age:{
        type:Number
    },
    salary:{
        type:Number,
        default:30000
    },
    email:{
        type:String
    },
    phone:{
        type:String
    },
    desig:{
        type:String
    },
    city:{
        type:String,
        default:"Mathura"
    },
    profilePicture: {
        type: String,
        default: null
    }
})

// Pre-save middleware to auto-generate employee ID
EmployeeSchema.pre('save', async function(next) {
    if (this.isNew && !this.employeeId) {
        const counter = await Counter.findByIdAndUpdate(
            'employeeId',
            { $inc: { seq: 1 } },
            { new: true, upsert: true }
        );
        this.employeeId = counter.seq;
    }
    next();
});

const Employee=new mongoose.model("Employee",EmployeeSchema)
module.exports=Employee