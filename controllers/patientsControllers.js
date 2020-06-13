const Patient = require('../models/Patients')

//Controlador de Pacientes
exports.newClient = async (req,res,next) => {

  const patient = new Patient(req.body);
  try {
    await patient.save();
    res.json({msg:'El cliente se agrego correctamente'});
  } catch (error) {
    console.log(error);
    next();
  }
}
//Obtener Pacientes
exports.getClients = async (req,res,next) => {
  try {
    const patients = await Patient.find({});
    res.json(patients);
  } catch (error) {
    console.log(error);
    next();
  }
}
//Obtener Paciente
exports.getClient = async (req,res,next) => {
  try {
    const patient = await Patient.findById(req.params.id);
    res.json(patient);
  } catch (error) {
    console.log(error);
    next();
  }
}

//Actualizar Paciente
exports.updateClient = async (req,res,next) => {
  try {
    const patient = await Patient.findOneAndUpdate({_id : req.params.id},req.body, {
      new: true
    });
    res.json(patient);
  } catch (error) {
    console.log(error);
    next();
  }
}

//Eliminar Paciente
exports.deleteClient = async (req,res,next) => {
  try {
    await Patient.findOneAndDelete({_id: req.params.id});
    res.json('Paciente Eliminado');
  } catch (error) {
    console.log(error);
    next();
  }
}

