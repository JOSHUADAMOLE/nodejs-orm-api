module.exports = validateRequest;

<<<<<<< HEAD
function validateRequest(req, next, schema) {
    const options = {
        abortEarly: false, // include all errors
        allowUnknown: true, //ignore unknown props
        stripUnknown: true // remove unknown props
    };

    const { error, value } = schema.validate(req.body, options);
    if(error){
        next(`Validation error: ${error.details.map(x => x.message).join(',')}`);
    } else {
=======
function validateRequest(req, next, schema){
    const options = {
        abortEarly : false,
        allowUnknown : true,
        stripUnknown : true
    };

    const { error , value} = schema.validate(req.body, options);
    if(error){
        next(`Validation error: ${error.details.map(x => x.message).join(', ')}`);
    }else{
>>>>>>> 4ce08a2 (updated)
        req.body = value;
        next();
    }
}